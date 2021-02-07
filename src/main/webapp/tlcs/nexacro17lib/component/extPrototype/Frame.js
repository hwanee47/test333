/**
*  컨설팅 표준화 작업
*  @MenuPath 
*  @FileName 		Frame.js  
*  @Creator 			seungmin
*  @CreateDate 	2018.06.20
*  @LastModifier  
*  @LastModifyDate  
*  @Version 		1.0
*  @Outline 		
*  @Desction   
************** 소스 수정 이력 *************************************************
*    date          		Modifier            Description
*******************************************************************************
*  2018.06.20    	seungmin 	           최초 생성 
*******************************************************************************
*/ 
 
var pForm = nexacro.Form.prototype;
/**
* @class frame open  <br>
* @param {String} sMenuId - 화면ID
* @param {String} sPreFix - 경로
* @param {String} sArgment 
* @return N/A
* @example 
* this.gfnAddPage(strMenuId, strPreFix);
*/
pForm.gfnAddPage = function(sMenuId, sPreFix, sArgment)
{
	// Null Check
	if (this.gfnIsNull(sMenuId) || this.gfnIsNull(sPreFix)){
		return false;
	}
	var objApp = nexacro.getApplication();
	var objMenuDs = objApp.gdsMenu; 		//글로벌데이터셋 메뉴
	var objOpenDS = objApp.gdsOpenMenu; //글로벌데이터셋 오픈메뉴
	
	//workFrameset 
	var objWorkFrame = objApp.gvWorkFrameset;
	
	//글로벌데이터셋에서 현재ID에 맞는 로우검색
	var nFindrow = objMenuDs.findRow("MENU_ID",sMenuId);
	
	if( nFindrow < 0 ) return false;
	
	//make form id
	var sFormId = "WORK_FRAME_"+sMenuId;
	var sMenuNm = objMenuDs.getColumn(nFindrow,"MENU_NM");
	
	// Finding existence
	var nOpenRow;
	      nOpenRow = objOpenDS.findRow("FORM_ID", sFormId);
	
	var objPage;
		  objPage = objWorkFrame.all[sFormId];
		  
	if (objPage != null || nOpenRow > -1) {
			objPage.form.setFocus();
			var objMdi = objApp.gvNaviFrame;
			objMdi.form.fnActiveTab(sFormId);
			return;
	}
	
	// Check limit open pages
	var nLimitCnt = objOpenDS.getRowCount();
	if (nLimitCnt == 10) {
		alert("최대열개까지열수있습니다.");
		return;
	}
	
	//create childFrame
	var objNewFrame;
	objNewFrame = new ChildFrame();
	
	//시스템 구분에 따른 Work Frame 
	if(objApp.gv_sysGb == "M") {
		objNewFrame.init(sFormId, 0, 0, 1368, 818, null, null, "frame::frameWork.xfdl");
	} else {
		objNewFrame.init(sFormId, 0, 0, 1368, 818, null, null, "frameW::frameWork.xfdl");
	}
	
	objWorkFrame.addChild(sFormId, objNewFrame);
	
	objNewFrame.ARG_FORM_URL	= sPreFix;
	objNewFrame.ARG_FORM_ID		= sFormId;
	objNewFrame.ARG_MENU_ID		= sMenuId;
	objNewFrame.ARG_MENU_NM		= sMenuNm;
	objNewFrame.set_titletext(sMenuNm); 
	objNewFrame.set_resizable(true);
	objNewFrame.set_openstatus("maximize");
	objNewFrame.set_layered(false);
	objNewFrame.set_showtitlebar(false);
	objNewFrame.set_showstatusbar(false);
	objNewFrame.set_showcascadetitletext(false);
	
	// It is Temp.
	objNewFrame.set_background("white");
	objNewFrame.show();
	//openDs에넣기
	var nAddRow = objOpenDS.addRow();
	objOpenDS.setColumn(nAddRow, "MENU_ID",		sMenuId);
    objOpenDS.setColumn(nAddRow, "MENU_NM", 	sMenuNm);
    objOpenDS.setColumn(nAddRow, "MENU_PREFIX", sPreFix);
    objOpenDS.setColumn(nAddRow, "FORM_ID", 	sFormId);

	// Create MDI Tab
	objApp.gvNaviFrame.form.fnAddTab(sFormId, sMenuNm);
	return true;
};

/**
* @clsdd 탭 전체닫기 <br>
* @return N/A
* @example
*/
pForm.gfnAllClose = function()
{
	var objApp = nexacro.getApplication();
	var objRemove; //삭제대상
	var key;			//삭제FORM_ID
	
	var nFormCnt   = objApp.gvNaviFrame.form.tabNavi.getTabpageCount();
	var objOpenDs =  objApp.gdsOpenMenu;
	
	if( nFormCnt < 0 ) return false;
	
	var arrTab = new Array();
	for( var i=nFormCnt-1; i >= 0; i-- )
	{
		arrTab.push( objApp.gvNaviFrame.form.tabNavi.tabpages[i].name );
	}
	
	for( var j=0; j<arrTab.length; j++)
	{
		key = arrTab[j];
		objRemove = objApp.gvWorkFrameset.removeChild(key);
		
		if( objRemove != null ) objRemove.destroy();
		
		var idx = objApp.gvNaviFrame.form.tabNavi.tabindex;
		objApp.gvNaviFrame.form.tabNavi.removeTabpage(key);
		
		var nRow = objOpenDs.findRow("FORM_ID",key);
		objOpenDs.deleteRow(nRow);
	}
};

/**
 * @class left메뉴 클릭시 해당화면 호출함수 <br>
 * @param {Object} oObj 
 * @return N/A
 * @example 
 */
pForm.gfnCall = function (oObj)
{	
	if (!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = nexacro.getApplication();
	var gdsOpen = objApp.gdsOpenMenu;							 //열  린 dataset	
	var ds      = oObj.ds;										 //넘어온 dataset
	var nRow    = oObj.nRow;									 //선택된 현재 row
	var aArgs   = this.gfnIsNull(oObj.oArg) ? "" : oObj.oArg ;   //넘어온 arguments
	var sMenuId;
	
	if (!this.gfnIsNull(oObj.sMenuId))
		sMenuId = oObj.sMenuId;
	else
		sMenuId = ds.getColumn(nRow, objApp.gvMenuColumns.menuId);
	
	// 2018.11.22 TOBESOFT
	// 열려 있는 팝업화면은 닫고 다음을 진행 
	// (주석처리 시 현재 해당메뉴가 팝업으로 호출되어 있음에도 새로운 해당메뉴가 호출됨)
	var objFrames = nexacro.getPopupFrames();
	for (var i=0; i<objFrames.length; i++)
	{
		if ((objFrames[i].name).indexOf(sMenuId)>-1)
		{
			var nFndRow = objApp.gdsOpenPopMenu.findRow(objApp.gvMenuColumns.winId, objFrames[i].name);
			if (nFndRow>-1)
				objApp.gdsOpenPopMenu.deleteRow(nFndRow);
				
			objFrames[i].form.close();
		}
	}
	
	//열려있는 윈도우(프레임)아이디
	var winid = gdsOpen.lookup(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.winId);

	//열려 있는 화면인 경우 해당 화면으로 이동.
	if (!this.gfnIsNull(winid))
	{
		//열려 있는 화면인지 확인.
		if (objApp.gvMdiFrame.form.isActiveFrame(winid, aArgs) == true)
		{
			objApp.gvMdiFrame.form.fnMoveTab(winid);
			return;
		}
	}
	
	//열린메뉴 체크( application.gvMax = 15)	
	if( objApp.gvMax <= gdsOpen.getRowCount() ){
		          
		this.gfnAlert(objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
		return false;
	}
	
	this.gfnNewMdi(sMenuId, nRow, aArgs);
};

/**
 * @class gdsOpenMenu의 해당 Row의 정보를 기준으로 신규 윈도우 화면을 생성하고 open 시킴 <br>
 * @param {String} sMenuId - menuId
 * @param {Number} nRow - gdsOpenMenu의rowpostion
 * @param {Array} aArgs - arguments
 * @return N/A
 */
pForm.gfnNewMdi = function(sMenuId,  nRow, aArgs)
{	
	var objApp   = nexacro.getApplication();
	var gdsOpen  = objApp.gdsOpenMenu;		//열린 dataset
	var gdsMenu  = objApp.gdsMenu;
	var winid 	 = "win" + sMenuId + "_" + gdsOpen.getRowCount() + "_" + parseInt(Math.random() * 1000);		
	var strTitle = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.menuNm );	
	var sPageUrl = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.pageUrl);
	var sMenuNm  = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.menuNm );
	var sGroupId = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.groupId);
	
	if(this.gfnIsNull(sPageUrl)) return;		//pageURl 이 없으면 return
	this.gfnSetOpenMenuDs(winid, sMenuId, strTitle, sPageUrl, sGroupId);	// 열린메뉴 화면 삽입

	var objNewWin = new ChildFrame;
		objNewWin.init(winid, 0, 0, objApp.gvWorkFrame.getOffsetWidth() - 0, objApp.gvWorkFrame.getOffsetHeight() - 0);
	objApp.gvWorkFrame.addChild(winid, objNewWin);

	//objNewWin.set_tooltiptext(winid);
	objNewWin.arguments = [];
	objNewWin.set_dragmovetype("all");
	objNewWin.set_showtitlebar(false);
	objNewWin.set_resizable(true);
	objNewWin.set_openstatus("maximize");
	objNewWin.set_titletext( strTitle);
	objNewWin.set_showcascadetitletext(false);
	objNewWin.arguments["winKey"] = winid;
	objNewWin.arguments["menuId"] = sMenuId;
	objNewWin.arguments["menuNm"] = sMenuNm;
	objNewWin.arguments["pageUrl"] = sPageUrl;
	objNewWin.arguments["aArgs"] = aArgs;
	
	//시스템 구분에 따른 Work Frame 
	  if (objApp.gv_sysGb == "M") objNewWin.set_formurl("frame::frameWork.xfdl" );
	else 						  objNewWin.set_formurl("frameW::frameWork.xfdl");
	
	objNewWin.show();

	objApp.gvMdiFrame.form.fnAddTab(winid, strTitle);   //mdi tab button add	
	objApp.gvMdiFrame.form.isActiveFrame(winid);		
	
	//메뉴 로그 기록 
	this.gfnMenuLog(sMenuId, sMenuNm, sPageUrl);
	trace("Form File : " + sPageUrl); 
};

/**
 * @class 메뉴 오픈시 메뉴 로그 생성. <br>
 * @param N/A
 * @return N/A
 */
pForm.gfnMenuLog = function(sMenuId, sMenuNm, sPageUrl)
{
	var objEnv        	= nexacro.getEnvironment();
	var objApp 			= nexacro.getApplication();
	var pSvcUrl       	= "loginInOut.do";
	var strServiceUrl 	= objEnv.services["svcurl"].url + pSvcUrl;
	var sArgments     	= "serviceBeanName=nexacroLogService method=saveNexacroLog";
	
	var globalVal = " gv_progUrl=" + sPageUrl;			//언어코드
	globalVal += " gv_userId=" + objApp.gv_userId;		//사용자 id
	globalVal += " gv_ipAddr=" + objApp.gv_ipAddr;		//사용자 ip
	globalVal += " gv_siteCd=" + objApp.gv_siteCd;		//사이트코드
	globalVal += " gv_progCd=" + sMenuId;				//메뉴 ID
	globalVal += " gv_progNm=" + sMenuNm;				//메뉴 DESC	
	globalVal += " gv_sysGb=" + objApp.gv_sysGb;		//시스템 구분
	
	sArgments += globalVal;
	
	
	this.transaction( "saveNexacroLog"                  //1.strMergeSvcID
					, strServiceUrl                 	//2.strServiceUrl
					, ""           						//3.inDataSet
					, ""  								//4.outDataSet
					, sArgments                     	//5.arguments
					, ""				    			//6.strCallbackFunc
					, false                     		//7.bAsync
					, 2			                     	//0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                    		//0.bCompress ( default : false ) 
};

/**
 * @class 열린화면 데이터셋에 추가 <br>
 * @param {String} winid
 * @param {String} menuId
 * @param {String} strTitle
 * @param {String} spageUrl
 * @param {String} sGroupId
 * @return N/A
 */
pForm.gfnSetOpenMenuDs = function(winid, menuid, strTitle, spageUrl, sGroupId)
{
	var objApp 	= nexacro.getApplication();
	var gdsOpen = objApp.gdsOpenMenu ;  // 열린 dataset
	var nRow 	= gdsOpen.addRow();
	
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.winId	, winid	  );
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.menuId	, menuid  );
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.title	, strTitle);	
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.groupId, sGroupId);
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.pageUrl, spageUrl);
};

/**
 * @class 열린화면 데이터셋에 추가 (팝업메뉴 관리용) <br>
 * @param {String} winid
 * @param {String} menuId
 * @param {String} strTitle
 * @param {String} spageUrl
 * @param {String} sGroupId
 * @return N/A
 */
pForm.gfnSetOpenPopMenuDs = function(winid, menuid, strTitle, spageUrl, sGroupId)
{
	var objApp  = nexacro.getApplication();
	var gdsOpen = objApp.gdsOpenPopMenu ;  // 열린 dataset
	var nRow    = gdsOpen.addRow();
	
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.winId  , winid   );
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.menuId , menuid  );
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.title  , strTitle);	
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.groupId, sGroupId);
	gdsOpen.setColumn(nRow, objApp.gvMenuColumns.pageUrl, spageUrl);
};




/**
 * fnLeftMenuToggle : leftMenu열고닫고해준다.
 * @param {boolean} bValue가 :  true면 open,  false면  close , null 또는 undefined 이면 토글
 * @return : N/A
 * @example :
 * @description LeftMenu를 열고 닫아준다.
 */
pForm.gfnLeftMenuToggle = function(bValue)
{
	
	var hFrameset = nexacro.getApplication().mainframe.VFrameSet.HFrameSet;
	var LeftForm = hFrameset.frameLeft.form;
	var ActiveFrame = hFrameset.VFrameSet1.framesetWork.getActiveFrame();
	
	if(this.gfnIsNull(bValue))
	{
		if(hFrameset.separatesize == "14,*")//닫힌경우
		{
			bValue =  true;
		}
		else
		{
			bValue =  false;
		}
	}
	
	//workframe 이벤트 비활성화 ( onsize이벤트 )
	if(ActiveFrame) ActiveFrame.form.set_enableevent(false);//열린 화면이 없는 경우 ..
	//메뉴 열고닫기
	var btnMenuToggle = LeftForm.btnMenuToggle;
	if(bValue)
	{
		btnMenuToggle.set_cssclass("btn_WF_menuClose");
		btnMenuToggle.set_text("<");
		hFrameset.set_separatesize("200,*");
	}
	else
	{
		btnMenuToggle.set_cssclass("btn_WF_menuOpen");
		btnMenuToggle.set_text(">");
		hFrameset.set_separatesize("14,*");
	}	
	if(ActiveFrame) ActiveFrame.form.set_enableevent(true);
}
