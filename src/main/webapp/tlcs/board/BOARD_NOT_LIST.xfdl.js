(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BOARD_NOTICE_LIST");
            this.set_titletext("공지사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"STA_DT\" size=\"256\" type=\"STRING\"/><Column id=\"AUTH\" size=\"256\" type=\"STRING\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH\">T01|T02|T03</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">searchList</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"QUERY_LIST\">q1=baimNoticeMgmService.getNoticeList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"POSTED_DT\" size=\"256\" type=\"STRING\"/><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta09","21","1","165","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("게시판관리 > 공지사항");
            obj.set_fittocontents("width");
            obj.set_cssclass("top_title_route01");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","sta09:0",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMain","0","sta00:3",null,null,"30","2",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty00");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"427\"/><Column size=\"204\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell accessibilitydescription=\"T0871\" text=\"제목\"/><Cell accessibilitydescription=\"T0118\" col=\"1\" text=\"게시기간\"/><Cell accessibilitydescription=\"T0276\" col=\"2\" text=\"등록일시\"/><Cell accessibilitydescription=\"T0278\" col=\"3\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:POSTED_DT\"/><Cell calendardisplaynulltype=\"none\" col=\"2\" displaytype=\"date\" text=\"bind:REG_DT\"/><Cell col=\"3\" text=\"bind:REG_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","10","45","50","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0203");
            obj.set_taborder("2");
            obj.set_text("게시일");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0115");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Static("sta03_00","242","45","38","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0203");
            obj.set_taborder("4");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTitle","290","44","180","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Calendar("calStDate","75","44","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("8");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtTitle","value","dsSearch","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calStDate","value","dsSearch","STA_DT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BOARD_NOT_LIST.xfdl","lib::lib_Form.xjs");
        this.registerScript("BOARD_NOT_LIST.xfdl", function() {
        /**
        *  공지사항
        *  @MenuPath		ptl > PTL_NOT_0001
        *  @FileName		PTL_NOT_0001.xfdl
        *  @Creator			yhkim
        *  @CreateDate		2018.11.19
        *  @Desction		스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.11.19			yhkim					최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * include 선언부																				*
        ************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;


        /************************************************************************************************
         * FORM 변수 선언 영역																		*
        ************************************************************************************************/
         this.objApp;

        /***********************************************************************************************
         * @function		: form_onload
         * @description		: FORM 온로드
         * @param 			: obj - form object
         * @param 			: e - form event
         * @return 			: N/A
        ***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//nexacro application
        	this.objApp = nexacro.getApplication();
        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);
        	//
        	this.fn_FormInit();
        };
        /***********************************************************************************************
         * @function		: fn_codeSearch
         * @description		: FORM init
         * @param			: obj - nexacro.Form
         * @param			: e   - nexacro.EventInfo
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_FormInit = function(obj,e)
        {
        	this.fn_CalSetting();
        	this.calStDate.setFocus();

        };
        /***********************************************************************************************
        * COMM FUNCTION
        ***********************************************************************************************/
        /***********************************************************************************************
         * @function		: fn_CalSetting
         * @description		: 달력 값 셋팅
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_CalSetting = function()
        {
        	var dateFm = this.divDate.form;
        	//
        	dateFm.fnSetCalFromBindItem("dsSearch", "STA_DT");
        	dateFm.fnSetCalToBindItem("dsSearch", "END_DT");
        	//
        	dateFm.fnSetFromDate(this.gfnGetDate("date"));
        	//dateFm.fnSetToDate(this.gfnAddDate(this.gfnGetDate("date"), 45));
        	dateFm.fnSetToDate(this.gfnGetDate("date"));
        	//
        	dateFm.fnSetFromFocus();
        };
        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/
         /***********************************************************************************************
         * @function		: fn_SearchList
         * @description		: 공지사항 목록 조회
         * @param 			: obj	- Button object
         * @param 			: e		- Button event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fn_SearchList = function(obj,e)
        {
        	this.gfnTransaction("searchList");
        };

        /***********************************************************************************************
         * @function		: fn_PopCall
         * @description		: 공지사항 상세정보 팝업 조회
         * @param 			: obj	- Grid object
         * @param 			: e		- GridClickEventInfo event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fn_PopCall = function(obj,e)
        {
        	var autoSeq		= this.dsList.getColumn(e.row,"AUTO_SEQ");
        	//
        	var autosearchGb	= ( this.gfnIsNull(autoSeq) ? 'N' : 'Y' );
        	var sFormName		= "게시물관리";
        	var sFormUrl		= "board::BOARD_NOT_P001.xfdl";
        	var oArg			= {paramTitle:sFormName,pAutosearchGb:autosearchGb,pAutoSeq:autoSeq};
        	var oOption			= {"width":920,"height":500};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack	= "fnPopupCallback";

        	this.gfnOpenPopup("notiPop",sFormUrl,oArg,sPopupCallBack,oOption);

        };

        this.edtTitle_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta09.addEventHandler("onclick",this.sta09_onclick,this);
            this.grdMain.addEventHandler("oncelldblclick",this.fn_PopCall,this);
            this.btnSearch.addEventHandler("onclick",this.fn_SearchList,this);
            this.edtTitle.addEventHandler("onchanged",this.edtTitle_onchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.fn_ChkSum,this);
        };

        this.loadIncludeScript("BOARD_NOT_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
