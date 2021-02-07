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
            this.set_name("cmmRecptPopup");
            this.set_titletext("파일 미리보기");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MNF_NO\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_GB\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">selectReceiptList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\">q1=orderMgmService.selectReceiptList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MNF_NO\" size=\"256\" type=\"STRING\"/><Column id=\"RECPT_ID\" size=\"256\" type=\"STRING\"/><Column id=\"FILE_GB\" size=\"256\" type=\"STRING\"/><Column id=\"RECPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ORG_RECPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"RECPT_PATH\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","15","0","435","30",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T2108");
            obj.set_taborder("0");
            obj.set_text("파일 미리보기");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","2","34",null,null,"2","2",null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","15","70",null,"130","15",null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("body");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"262\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell accessibilitydescription=\"T1360\" col=\"1\" text=\"파일명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"right\"/><Cell col=\"1\" suppress=\"1\" text=\"expr:comp.parent.gfnIsNull(ORG_RECPT_NM) ? RECPT_NM : ORG_RECPT_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"6","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webImg","15","201",null,null,"15","15",null,null,null,null,this);
            obj.set_border("0px");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnDownload",null,"44","80","23","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T1359");
            obj.set_enable("true");
            obj.set_fittocontents("none");
            obj.set_taborder("5");
            obj.set_text("파일다운");
            this.addChild(obj.name, obj);

            obj = new FileDownload("fileDownload","480","44","60","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("fdl00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",460,690,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmRecptPopup.xfdl", function() {
        /**
        *  공통 > 담당자정보
        *  @MenuPath		cmm > cmmRecptPopup.xfdl
        *  @FileName		cmmRecptPopup.xfdl
        *  @Creator			seungmin
        *  @CreateDate		2018.12.17
        *  @Desction		인수증 미리보기
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2018.08.21		intaekOh				최초 생성
        *************************************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp 	= nexacro.getApplication();
        this.MNF_NO 	= this.getOwnerFrame().mnfNo;
        this.FILE_GB 	= this.getOwnerFrame().fileGb;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.formOnload = function(obj,e)
        {
        	// this.MNF_NO = this.getOwnerFrame().mnfNo;
        };

        /***********************************************************************************************
         * @function	: forOninit
         * @description	: FORM init
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.EventInfo
         * @return N/A
        /***********************************************************************************************/
        this.formOninit = function(obj,e)
        {
        	//미리보기 이미지 로딩.
        	this.fnCallWebImg();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 차량정보 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);

        	this.dsSearch.setColumn(0, "MNF_NO"		, this.MNF_NO);		//배차번호
        	this.dsSearch.setColumn(0, "FILE_GB"	, this.FILE_GB);	//인수증 구분 (1:인수중, 2:세금계산서)

        	// 조회 transaction
        	this.gfnTransaction("selectReceiptList");
        };

        /***********************************************************************************************
         * @function	: fnCallback
         * @description	: 트랜젝션 후 호출 되는 callback 함수.
         * @param		: svcID - 서비스 id
         * @param		: errorCode - error 코드
         * @param		: errorMsg - error 메세지
         * @return N/A
        /***********************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0) {
        		this.alert(errorMsg);
        	}else{
        		if( svcID === 'selectReceiptList' ) {

        		}
         	}
        };

        /***********************************************************************************************
         * @function	: btnOnClick
         * @description	: button onClick event
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.btnOnClick = function(obj,e) {
        	this.close();
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

        /***********************************************************************************************
         * @function	: dsList_onrowposchanged
         * @description	: 그리드 row 변경 시 미리보기 호출.
         * @param		: obj	- nexacro.NormalDataset
         * @param		: e		- nexacro.DSRowPosChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsList_onrowposchanged = function(obj,e)
        {
        	var filePath = obj.getColumn(e.newrow, "RECPT_PATH");
        	var fileName = obj.getColumn(e.newrow, "RECPT_NM");

        	this.webImg.callMethod("fn_preView", filePath, fileName);
        };

        this.webImg_onloadcompleted = function(obj,e)
        {
        	this.fnSearch();
        };


        /***********************************************************************************************
         * @function	: fnDownload
         * @description	: 파일 일괄 다운로드
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDownload = function(obj,e){
        	var nRow            = this.dsList.rowposition;
        	var sOrgFilename    = this.dsList.getColumn(nRow, "ORG_RECPT_NM");
        	var sFilename       = this.dsList.getColumn(nRow, "RECPT_NM");
        	var sFilePath       = this.dsList.getColumn(nRow, "RECPT_PATH");

        	if(this.gfnIsNull(sOrgFilename)) sOrgFilename = sFilename;

        	if(!this.gfnIsNull(sFilename)){
        		this.gfnFileDownload(this.fileDownload, sFilename, sOrgFilename, sFilePath);
        	}
        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	if(e.cell == 1) {
        		var nRow            = e.row;
        		var sOrgFilename    = this.dsList.getColumn(nRow, "ORG_RECPT_NM");
        		var sFilename       = this.dsList.getColumn(nRow, "RECPT_NM");
        		var sFilePath       = this.dsList.getColumn(nRow, "RECPT_PATH");

        		if(this.gfnIsNull(sOrgFilename)) sOrgFilename = sFilename;

        		if(!this.gfnIsNull(sFilename)){
        			this.gfnFileDownload(this.fileDownload, sFilename, sOrgFilename, sFilePath);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.formOninit,this);
            this.addEventHandler("onload",this.formOnload,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnOnClick,this);
            this.webImg.addEventHandler("onloadcompleted",this.webImg_onloadcompleted,this);
            this.btnDownload.addEventHandler("onclick",this.fnDownload,this);
            this.fileDownload.addEventHandler("onsuccess",this.fileDownload_onsuccess,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };

        this.loadIncludeScript("cmmRecptPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
