(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain_C02");
            this.set_titletext("공지사항");
            this.set_background("#ffffff");
            this.set_scrollbartype("none default");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,249);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">searchList</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"QUERY_LIST\">q1=baimNoticeMgmService.getNoticeList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH\"/><Col id=\"DEL_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"POSTED_DT\" size=\"256\" type=\"STRING\"/><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdMain","5","1","375","239",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("tb_ty_main");
            obj.set_binddataset("dsList");
            obj.set_scrollbartype("none default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"525\"/></Columns><Rows><Row size=\"47\"/></Rows><Band id=\"body\"><Cell text=\"bind:SUBJECT\" textAlign=\"left\" font=\"normal 16px/normal &quot;나눔고딕&quot;\" cssclass=\"top_search_tx01\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,249,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frameMain_C02.xfdl","lib::lib_Form.xjs");
        this.registerScript("frameMain_C02.xfdl", function() {
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
        	//this.fn_CalSetting();
        	this.fn_SearchList();

        };
        /***********************************************************************************************
        * COMM FUNCTION
        ***********************************************************************************************/
        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdMain.addEventHandler("oncellclick",this.fn_PopCall,this);
            this.dsList.addEventHandler("oncolumnchanged",this.fn_ChkSum,this);
        };

        this.loadIncludeScript("frameMain_C02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
