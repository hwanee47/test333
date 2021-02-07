/**
*  컨설팅 표준화 작업
*  @FileName 		Excel.js 
*  @Creator 			seungmin
*  @CreateDate 	2018.06.20
*  @Desction   
************** 소스 수정 이력 ***************************************************
*  date          		Modifier                Description
*******************************************************************************
* 2018.06.20     	seungmin 	           최초 생성 
*******************************************************************************
*/ 
 
var pForm = nexacro.Form.prototype;

pForm.objTempExcelGrid = null;

pForm.MAX_EXCEL_DOWNLOAD_COUNT   = 65000;
pForm.ALERT_EXCEL_DOWNLOAD_COUNT = 10000;

/**
 * @class excel export <br>
 * @param {Object} objGrid - Grid Object	
 * @param {String} [sSheetName]	- sheet name
 * @param {String} [sFileName]	- file name
 * @return N/A
 * @example
 * this.gfnExcelExport(this.grid_export, "SheetName","");
 */
pForm.gfnExcelExport = function(objGrid,  sSheetName, sFileName)
{
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()+1).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();
	trace("XENI ======================================= Start Time["+sStartDate+"]");
	
	this.setWaitCursor( true, true );
	
	try{
		var nWidth    = objGrid.getOffsetWidth();
		var nHeight   = objGrid.getOffsetHeight();
		var sFormat   = objGrid.getCurFormatString();
		var objBindDS = objGrid.getBindDataset();
		var nExcelDownCnt = objBindDS.getRowCount();
		if(nExcelDownCnt >= this.MAX_EXCEL_DOWNLOAD_COUNT){
			this.gfnAlert("M0821", new Array(this.gfnAppendComma(this.MAX_EXCEL_DOWNLOAD_COUNT)));
			this.setWaitCursor( false, true );
			return;
		}
		
		if(nExcelDownCnt >= this.ALERT_EXCEL_DOWNLOAD_COUNT){
			this.gfnAlert("M0822", new Array(this.gfnAppendComma(this.ALERT_EXCEL_DOWNLOAD_COUNT)));
		}
		
		this.objTempExcelGrid = new Grid("objGridExcelDown", -(nWidth), -(nHeight), nWidth, nHeight, null, null);
		this.addChild("objGridExcelDown", this.objTempExcelGrid); 
		
		var nIndex = this.insertChild(-1, "objGridExcelDown", this.objTempExcelGrid); 
		
		this.objTempExcelGrid.set_cssclass(objGrid.cssclass);
		this.objTempExcelGrid.setBindDataset(objBindDS);
		var sFormat = "<Formats>"+sFormat+"</Formats>";
		this.objTempExcelGrid.set_formats(sFormat);
		this.objTempExcelGrid.set_visible(false);
		
		var nCellCnt = this.objTempExcelGrid.getCellCount("head");
		for(var i=(nCellCnt-1); i>=0; i--){
			var nCellSize = this.objTempExcelGrid.getFormatColSize(i);
			if(nCellSize == 0){
				var sProperty = this.objTempExcelGrid.getFormatColProperty(i,"band");
				var nRtn      = this.objTempExcelGrid.deleteContentsCol(sProperty, i);
			}else{
				var sBodyDisplayType = this.objTempExcelGrid.getCellProperty("body", i, "accessibilitydescription");
				if(!this.gfnIsNull(sBodyDisplayType)){
					this.objTempExcelGrid.setCellProperty("body", i, "displaytype", sBodyDisplayType);
				}
			}
		}
		this.objTempExcelGrid.show(); 
		
		var objEnv = nexacro.getEnvironment();
		var objGrid_excel = this.objTempExcelGrid;
		
		var regExp = /[?*:\/\[\]]/g;  				//(엑셀에서 지원하지않는 모든 문자)
		
		sSheetName = this.gfnNvl(sSheetName, "");
		sFileName = this.gfnNvl(sFileName, "");

		sFileName = sFileName.replace(regExp,"");	//파일명에 특수문자 제거
		sSheetName = sSheetName.replace(regExp,""); //시트명에 특수문자 제거
		
		//fileName nullcheck
		sFileName = this.gfnIsNull(sFileName) ? "ExcelExport_"+this.gfnGetDate() : sFileName;
		//sheetName nullcheck
		sSheetName = this.gfnIsNull(sSheetName) ? "sheet1" : sSheetName;
		//sheetName 30이상일경우 기본시트명
		if( String(sSheetName).length > 30 ){
			sSheetName =  "sheet1";
		}

		var svcUrl = objEnv.services["svcurl"].url + "XExportImport.do";
		trace("Excel svcUrl : " + svcUrl);
		
		this.objExport = null
		this.objExport = new ExcelExportObject();

		this.objExport.objgrid = objGrid_excel;
		this.objExport.set_exporturl(svcUrl);
		this.objExport.addExportItem(nexacro.ExportItemTypes.GRID, objGrid_excel, sSheetName+"!A1","allband","allrecord");
		// this.objExport.set_exporttype(nexacro.ExportTypes.CSV);
		this.objExport.set_exportfilename(sFileName);
		if(system.navigatorname == "nexacro"){
			if(this.gfnConfirm("M0823")){
				this.objExport.set_exportactivemode("active");
			}
		}
		this.objExport.set_exporteventtype("itemrecord");
		this.objExport.set_exportuitype("none");
		this.objExport.set_exportmessageprocess("");
		this.objExport.addEventHandler("onsuccess", this.gfnExportOnsuccess, this);	
		this.objExport.addEventHandler("onerror", this.gfnExportOnerror, this);	
		
		var result = this.objExport.exportData();
	}catch(e){
		trace(e.message);
		
		// Remove Object form Parent Form  
		this.removeChild(this.objTempExcelGrid.name); 
		 
		// Destroy Object  
		this.objTempExcelGrid.destroy(); 
		this.objTempExcelGrid = null;
		
		this.setWaitCursor( false, true );
	}
};

/**
 * @class excel export on sucess <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnExportOnsuccess = function(obj, e)
{
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()+1).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();
	trace("XENI ======================================= End Time["+sStartDate+"]");
	
	
	// Remove Object form Parent Form  
	this.removeChild(this.objTempExcelGrid.name); 
	 
	// Destroy Object  
	this.objTempExcelGrid.destroy(); 
	this.objTempExcelGrid = null;
	this.setWaitCursor( false, true );
};

/**
 * @class  excel export on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnExportOnerror = function(obj,  e)
{
	// Remove Object form Parent Form  
	this.removeChild(this.objTempExcelGrid.name); 
	 
	// Destroy Object  
	this.objTempExcelGrid.destroy(); 
	this.objTempExcelGrid = null;

	this.setWaitCursor( false, true );
	this.alert("Excel Export Error :: " + e.errormsg);
};

/**
 * @class  excel import( 데이터 헤더포함 ) <br>
 * @param {String} objDs - dataset	
 * @param {String} [sSheet]	- sheet name(default:Sheet1)
 * @param {String} sHead - Head 영역지정	
 * @param {String} [sBody] - body 영역지정(default A2)	
 * @param {String} [sCallback]	- callback 함수
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)
 * @return N/A
 * @example
 * this.gfnExcelImportAll("dsList","SheetName","A1:G1","A2","fnImportCallback","import",this);
 */
pForm.gfnExcelImportAll = function(objDs,sSheet,sHead,sBody,sCallback,sImportId,objForm)
{	
	var objEnv = nexacro.getEnvironment();
  	 
	if(this.gfnIsNull(sSheet)) sSheet = "sheet1";
	if(this.gfnIsNull(sBody)) sBody = "A2";
	if(this.gfnIsNull(sHead)) return false;
	
	var svcUrl = objEnv.services["svcurl"].url + "XExportImport.do";

	var objImport ;	
	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	
	if (!this.gfnIsNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	objImport.addEventHandler("onsuccess", this.gfnImportAllOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfnImportAllOnerror, this);	
	var sParam1 = "[Command=getsheetdata;Output=outds;Head="+sSheet+"!"+sHead+";Body="+sSheet+"!"+sBody+"]";
	var sParam2 = "["+objDs+"=outds]";

	objImport.importData("", sParam1, sParam2);	
	objImport = null;	 
};

/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnImportAllOnsuccess = function(obj,  e)
{		
	var sCallback = obj.callback;
	var sImportId = obj.importid;	
	//화면의 callback 함수 호출
	if (!this.gfnIsNull(sCallback)) this.lookupFunc(sCallback).call(this,sImportId);
};

/**
 * @class  excel import( 데이터 헤더제외 ) <br>
 * @param {String} sDataset - dataset	
 * @param {String} [sSheet]	- sheet name
 * @param {String} [sBody] - body 영역지정	
 * @param {String} [sCallback] - callback 함수	
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)	
 * @return N/A
 * @example
 * this.gfnExcelImport("dsList","SheetName","A2","fnImportCallback","import",this);
 */
pForm.gfnExcelImport = function(objDs, sSheet, sBody, sCallback, sImportId, objForm)
{
	var objEnv = nexacro.getEnvironment();
	
	if(this.gfnIsNull(sSheet)) sSheet = "sheet1";
	if(this.gfnIsNull(sBody)) sBody = "A2";
	
	var svcUrl = objEnv.services["svcurl"].url + "XExportImport.do";
	var objImport ;	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	objImport.outds = objDs;

	if (!this.gfnIsNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = objDs+"_outds";	
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);			
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	objImport.addEventHandler("onsuccess", this.gfnImportOnsuccess, this);
	objImport.addEventHandler("onerror", this.gfnImportAllOnerror, this);	
	var sParam = "[Command=getsheetdata;Output=outds;Body=" + sSheet + "!" + sBody +"]";
 	var sParam2 = "[" + sOutDsName + "=outds]";
 	
	objImport.importData("", sParam, sParam2);	
	objImport = null;	
};



/**
 * @class  excel import( 데이터 헤더제외 ) <br>
 * @param {String} sDataset - dataset	
 * @param {String} [sSheet]	- sheet name
 * @param {String} [sBody] - body 영역지정	
 * @param {String} [sCallback] - callback 함수	
 * @param {String} [sImportId] - import id(callback호출시 필수)	
 * @param {Object} [objForm] - form object(callback호출시 필수)	
 * @return N/A
 * @example
 * this.gfnExcelImport("dsList","SheetName","A2","fnImportCallback","import",this);
 */
pForm.gfnExcelImportCustom = function(objDs, sSheet, sBody, sCallback, sImportId, objForm)
{
	var objEnv = nexacro.getEnvironment();
	
	if(this.gfnIsNull(sSheet)) sSheet = "sheet1";
	if(this.gfnIsNull(sBody)) sBody = "A1";
	//console.log("데이터시작행 ::"+sBody);
	var svcUrl = objEnv.services["svcurl"].url + "XExportImport.do";
	var objImport ;	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	objImport.outds = objDs;

	if (!this.gfnIsNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = objDs+"_outds";	
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);			
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	objImport.addEventHandler("onsuccess", this.gfnImportOnsuccessCustom, this);
	objImport.addEventHandler("onerror", this.gfnImportAllOnerror, this);	
	var sParam = "[Command=getsheetdata;Output=outds;Body=" + sSheet + "!" + sBody +"]";
 	var sParam2 = "[" + sOutDsName + "=outds]";
 	
	objImport.importData("", sParam, sParam2);	
	//objImport = null;	

};


pForm.gfnExcelImportCustom2 = function(objDs, sSheet, sBody, sCallback, sImportId, objForm)
{
	var objEnv = nexacro.getEnvironment();
	
	if(this.gfnIsNull(sSheet)) sSheet = "sheet1";
	if(this.gfnIsNull(sBody)) sBody = "A2";
	
	var svcUrl = objEnv.services["svcurl"].url + "XExportImport.do";
	var objImport ;	
	objImport = new nexacro.ExcelImportObject(objDs+"_ExcelImport",this);				
	objImport.set_importurl(svcUrl);						
	objImport.set_importtype(nexacro.ImportTypes.EXCEL);			
	objImport.outds = objDs;

	if (!this.gfnIsNull(sCallback))
	{
		objImport.callback = sCallback;
		objImport.importid = sImportId;
		objImport.form = objForm;
	}
	
	//out dataset 생성(차후 onsucess 함수에서 헤더생성하기 위한)
	var sOutDsName = objDs+"_outds";	
	if(this.isValidObject(sOutDsName)) this.removeChild(sOutDsName);			
	var objOutDs = new Dataset();
	objOutDs.name = sOutDsName;
	this.addChild(objOutDs.name, objOutDs);
	
	objImport.addEventHandler("onsuccess", this.gfnImportOnsuccessCustom2, this);
	objImport.addEventHandler("onerror", this.gfnImportAllOnerror, this);	
	var sParam = "[Command=getsheetdata;Output=outds;Body=" + sSheet + "!" + sBody +"]";
 	var sParam2 = "[" + sOutDsName + "=outds]";
 	
	objImport.importData("", sParam, sParam2);	
	objImport = null;	
};


/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnImportOnsuccess = function(obj,  e)
{		
	var objOutDs = this.objects[obj.outds+"_outds"];
	var objOrgDs = this.objects[obj.outds];
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	var sColumnId;
	
	if(typeof objForm.components["edtFileUrl"] == "object"){
		objForm.edtFileUrl.set_value(e.url);
	}
	
	//기존 데이터셋의 내용으로 헤더복사
	for (var i=0; i<objOrgDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != objOrgDs.getColID(i))
		{
			objOutDs.updateColID(sColumnId, objOrgDs.getColID(i))
		}
	}
	
	objOrgDs.clearData();
	objOrgDs.copyData(objOutDs);
	
	
	if (!this.gfnIsNull(sCallback)) this.lookupFunc(sCallback).call(this,sImportId);
};



/**
 * @class excel import on success <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnImportOnsuccessCustom = function(obj,  e)
{		
	var objOutDs = this.objects[obj.outds+"_outds"];			// 업로드내용 데이터셋
	var objOrgDs = this.objects[obj.outds];						// 선택한형식 데이터셋
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	var sColumnId;
	
	//console.log(objOutDs.saveXML());
	//console.log(objOrgDs.saveXML());
	//console.log("업로드한 항목의수 = "+objOutDs.getColCount());
	//console.log("선택한형식 항목의수 = "+objOrgDs.getColCount());
	// 선택한 형식보다 업로드한 내용의 항목이 많은경우 에러처리.
	if( objOutDs.getColCount() != objOrgDs.getColCount() ){
		this.gfnAlert("선택한 형식과 업로드한 파일의 항목의 수가 다릅니다.");
		return;
	}
	

	if(typeof objForm.components["edtFileUrl"] == "object"){
		objForm.edtFileUrl.set_value(e.url);
	}

	//기존 데이터셋의 내용으로 헤더복사
	for (var i=0; i<objOrgDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != objOrgDs.getColID(i))
		{
			objOutDs.updateColID(sColumnId, objOrgDs.getColID(i))
		}
	}
	
	objOrgDs.clearData();
	objOrgDs.copyData(objOutDs);
	
	// destroy안하면.. 계속 데이터 남아있음.. 2020-06-18(KJH)
	obj.destroy();
	
	if (!this.gfnIsNull(sCallback)) this.lookupFunc(sCallback).call(this,sImportId);
};

pForm.gfnImportOnsuccessCustom2 = function(obj,  e)
{		
	var objOutDs = this.objects[obj.outds+"_outds"];
	var objOrgDs = this.objects[obj.outds];
	var sCallback = obj.callback;
	var sImportId = obj.importid;
	var objForm = obj.form;
	var sColumnId;
	
	if(typeof objForm.components["edtFileUrl"] == "object"){
		objForm.edtFileUrl.set_value(e.url);
	}
	//console.log(objOutDs.saveXML());
	//기존 데이터셋의 내용으로 헤더복사
	for (var i=0; i<objOutDs.getColCount(); i++)
	{
		sColumnId = "Column"+i;
		if (sColumnId != objOrgDs.getColID(i))
		{
			objOutDs.updateColID(sColumnId, this.gfnAllTrim(objOutDs.getColumn(0, sColumnId)));
		}
	}
	
	objOutDs.deleteRow(0);
	
	objOrgDs.clearData();
	objOrgDs.copyData(objOutDs);
	
	//console.log(objOrgDs.saveXML());
	if (!this.gfnIsNull(sCallback)) this.lookupFunc(sCallback).call(this,sImportId);
};

/**
 * @class  excel import on error <br>
 * @param {Object} obj	
 * @param {Event} e		
 * @return N/A
 * @example
 */
pForm.gfnImportAllOnerror = function(obj,  e)
{
	if(e.errormsg == "failed to get") {
		alert("파일 업로드 시 제한 용량을 초과 하였습니다.");
	} else {
		alert(e.errormsg);
	}
};