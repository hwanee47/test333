(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_cssclass("bg_pop01");
            this.set_name("ICT_CSL_0010_P02");
            this.set_titletext("파일다운");
            if (Form == this.constructor)
            {
                this._setFormPosition(890,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ID\" size=\"256\" type=\"STRING\"/><Column id=\"JOIN_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"WRK_NO\" size=\"256\" type=\"STRING\"/><Column id=\"TB_NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">getFileList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsFileList=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"QUERY_LIST\">q1=commonService.getFileInfo</Col></Row><Row><Col id=\"SVC_ID\">updateFileInfo</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"QUERY_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">userMgmService</Col><Col id=\"SERVICE_METHOD\">updateFileInfo</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsSave</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WRK_NO\" size=\"256\" type=\"STRING\"/><Column id=\"REF_KEY\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SOURCE_FILE_FULL_PATH\" size=\"256\" type=\"STRING\"/><Column id=\"SOURCE_FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"UPLOADED_DIR_PATH\" size=\"256\" type=\"STRING\"/><Column id=\"UPLOADED_FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_SIZE\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_GB\" size=\"256\" type=\"STRING\"/><Column id=\"NEW_SAVE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WRK_NO\" size=\"256\" type=\"STRING\"/><Column id=\"REF_KEY\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SOURCE_FILE_FULL_PATH\" size=\"256\" type=\"STRING\"/><Column id=\"SOURCE_FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"UPLOADED_DIR_PATH\" size=\"256\" type=\"STRING\"/><Column id=\"UPLOADED_FILE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_SIZE\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_GB\" size=\"256\" type=\"STRING\"/><Column id=\"NEW_SAVE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","15","0","110","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T1361");
            obj.set_taborder("1");
            obj.set_text("파일첨부");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileList","15","80",null,"200","15",null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsFileList");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"70\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell accessibilitydescription=\"T2031\" text=\"파일그룹번호\"/><Cell accessibilitydescription=\"T2033\" col=\"1\" text=\"파일순번\"/><Cell accessibilitydescription=\"T1149\" col=\"2\" text=\"SOURCE 파일명\"/><Cell accessibilitydescription=\"T1485\" col=\"3\" text=\"UPLOADED 경로\"/><Cell accessibilitydescription=\"T1486\" col=\"4\" text=\"UPLOADED 파일명\"/><Cell col=\"5\" text=\"FILE_SIZE\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:WRK_NO\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"normal\" text=\"bind:FILE_SEQ\"/><Cell col=\"2\" color=\"blue\" text=\"bind:SOURCE_FILE_NM\"/><Cell col=\"3\" text=\"bind:UPLOADED_DIR_PATH\"/><Cell col=\"4\" text=\"bind:UPLOADED_FILE_NM\"/><Cell col=\"5\" text=\"expr:nexacro.round((nexacro.toNumber(FILE_SIZE)/1000)) + &quot; KB&quot;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"44","80","23","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_search_t");
            obj.getSetter("domainId").set("T1359");
            obj.set_enable("true");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fileDownload","930","44","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("fdl00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"44","80","23","-199",null,null,null,null,null,this);
            obj.set_cssclass("btn_search_t");
            obj.getSetter("domainId").set("T2032");
            obj.set_enable("true");
            obj.set_fittocontents("none");
            obj.set_taborder("6");
            obj.set_text("파일삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webImg","15",null,null,"500","15","15",null,null,null,null,this);
            obj.set_border("0px");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",890,790,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmFileUpDown.xfdl", function() {
        /**
        *  파일 다운로드
        *  @MenuPath       	cmm > cmmFileUpDown.xfdl
        *  @FileName 		cmmFileUpDown.xfdl
        *  @Creator 		Seungmin
        *  @CreateDate 		2018.11.14
        *  @Desction        사용자의 파일첨부 내역을 조회
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2018.11.14		DYCho					최초 생성
        ************************************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
         //nexacro application
        this.objApp 		= nexacro.getApplication();
        this.P_SELECT_ONLY 	= this.getOwnerFrame().sSelectOnly;
        this.P_WRK_NO		= this.getOwnerFrame().sDekalID;
        this.P_TB_NAME		= this.getOwnerFrame().sTbName;
         /***********************************************************************************************
         * @function: formOnload
         * @description: FORM 온로드
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.formOnload = function(obj,e)
        {
        	// 화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);

        	//미리보기 이미지 로딩.
        	this.fnCallWebImg();
        };

        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 업로드된 파일정보 조회
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);

        	this.dsSearch.setColumn(0, "ID"			, this.objApp.gv_userId);		//아이디
        	this.dsSearch.setColumn(0, "JOIN_TYPE"	, this.objApp.gv_joinType);
        	this.dsSearch.setColumn(0, "AUTH_CD"	, this.objApp.gv_authCd);

        	this.dsSearch.setColumn(0, "WRK_NO"		, this.P_WRK_NO);
        	this.dsSearch.setColumn(0, "TB_NAME"	, this.P_TB_NAME);

        	this.gfnTransaction("getFileList");
        };

        /***********************************************************************************************
         * @function	: btnOnClick
         * @description	: 버튼이벤트 제어
         * @param		: obj - nexacro.Button
         * @param		: e - nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.btnOnClick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		// 파일다운
        		case "btnDownload" :
        			this.fnDownload();
        		break;
        		default :
        			break;
        	}
        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 파일 변경 내역 저장
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {
        	if(this.dsSave.rowcount > 0) {
        		this.gfnTransaction("updateFileInfo");
        	}
        };

        /***********************************************************************************************
         * @function	: fnDownload
         * @description	: 파일 일괄 다운로드
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDownload = function(){
        	var nRow            = this.dsFileList.rowposition;
        	var sOrgFilename    = this.dsFileList.getColumn(nRow, "SOURCE_FILE_NM");
        	var sFilename       = this.dsFileList.getColumn(nRow, "UPLOADED_FILE_NM");
        	var sFilePath       = this.dsFileList.getColumn(nRow, "UPLOADED_DIR_PATH");

        	if(!this.gfnIsEmpty(sFilename)){
        		this.dsSave.clearData();
        		this.dsSave.insertRow(0);
        		this.dsSave.copyRow(0, this.dsFileList, nRow);

        		this.gfnFileDownload(this.fileDownload, sFilename, sOrgFilename, sFilePath);
        	}
        };

        /***********************************************************************************************
         * @function: fnCallback
         * @description: 트랜젝션 후 호출 되는 callback 함수.
         * @param : svcID - 서비스 id
         * @param : errorCode - error 코드
         * @param : errorMsg - error 메세지
         * @return N/A
        /***********************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0) {
        		this.alert(errorMsg);
        	} else if(svcID == "getFileList"){
        		if(this.dsFileList.rowcount > 0) {
        			this.set_height(790);
        			this.webImg.set_visible(true);
        		} else {
        			this.set_height(290);
        			this.webImg.set_visible(false);
        		}

         	} else if(svcID == "updateFileInfo"){
        		this.gfnAlert("M0110");
        		return;
         	}
        };
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        /***********************************************************************************************
         * @function	: grdFileList_oncellclick
         * @description	: 파일 일괄 다운로드
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.grdFileList_oncellclick = function(obj,e)
        {
        	var columnId	= obj.getCellProperty("body", e.cell, "text");
        		columnId 	= columnId.replace("bind:", "");

        	if(columnId == "SOURCE_FILE_NM") {
        		var nRow            = e.row;
        		var sOrgFilename    = this.dsFileList.getColumn(nRow, "SOURCE_FILE_NM");
        		var sFilename       = this.dsFileList.getColumn(nRow, "UPLOADED_FILE_NM");
        		var sFilePath       = this.dsFileList.getColumn(nRow, "UPLOADED_DIR_PATH");

        		if(!this.gfnIsEmpty(sFilename)){
        			this.dsSave.clearData();
        			this.dsSave.insertRow(0);
        			this.dsSave.copyRow(0, this.dsFileList, nRow);

        			this.gfnFileDownload(this.fileDownload, sFilename, sOrgFilename, sFilePath);
        		}
        	}
        };

        this.fileDownload_onsuccess = function(obj,e)
        {
        	this.fnSave();
        };

        this.dsFileList_onrowposchanged = function(obj,e)
        {
        	var filePath = obj.getColumn(e.newrow, "UPLOADED_DIR_PATH");
        	var fileName = obj.getColumn(e.newrow, "UPLOADED_FILE_NM");
        	trace("filePath  "  + filePath + "   fileName" + fileName);
        	this.webImg.callMethod("fn_preView", filePath, fileName);
        };

        /***********************************************************************************************
         * @function	: fnCallWebImg
         * @description	: 미리보기 로딩 함수.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCallWebImg = function ()
        {
        	var objEnv = nexacro.getEnvironment();
        	var objSrv = objEnv.services["svcurl"];
        	var url = objSrv.url + "jsp/nexa/recptPreview.jsp";
        	this.webImg.set_url(url);
        };

        this.webImg_onloadcompleted = function(obj,e)
        {
        	//업로드된 파일정보 조회
        	this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.grdFileList.addEventHandler("oncellclick",this.grdFileList_oncellclick,this);
            this.btnDownload.addEventHandler("onclick",this.btnOnClick,this);
            this.fileDownload.addEventHandler("onsuccess",this.fileDownload_onsuccess,this);
            this.btnDelete.addEventHandler("onclick",this.btnOnClick,this);
            this.webImg.addEventHandler("onloadcompleted",this.webImg_onloadcompleted,this);
            this.dsFileList.addEventHandler("onrowposchanged",this.dsFileList_onrowposchanged,this);
        };

        this.loadIncludeScript("cmmFileUpDown.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
