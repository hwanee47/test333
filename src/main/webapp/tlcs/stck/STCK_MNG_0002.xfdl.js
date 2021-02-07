(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("STCK_MNG_0002");
            this.set_titletext("입/출고내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col></Row><Row><Col id=\"SVC_ID\">saveEntrpCustInfo</Col><Col id=\"SERVICE_BEANNAME\">baimEntrpCustMgmtService</Col><Col id=\"SERVICE_METHOD\">saveEntrpCustInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsDetail:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getEntrpCustInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsDetail=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"QUERY_LIST\">q1=baimEntrpCustMgmtService.getEntrpCustInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CP_DV\" size=\"256\" type=\"STRING\"/><Column id=\"ENTRP_REG_NO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsB2c", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">거래구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">거래구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B2C\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_PICKUP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_SEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ACDT_RWD_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail_empty", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B2C\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_PICKUP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_SEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ACDT_RWD_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","20",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","62",null,null,"30","170",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("1");
            obj.set_binddataset("dsMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"고객코드\"/><Cell col=\"2\" text=\"주문예정일\"/><Cell col=\"3\" text=\"주문타입\"/><Cell col=\"4\" text=\"고객코드\"/><Cell col=\"5\" text=\"송장번호\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:CUST_CD\"/><Cell col=\"2\" text=\"bind:SLIP_YMD\"/><Cell col=\"3\" text=\"bind:SLIP_TYPE\"/><Cell col=\"4\" text=\"bind:SHP_MALL_SLIP_NO\"/><Cell col=\"5\" text=\"bind:WAYBILL_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","52","23","101",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"29","52","23","40",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_Excel");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc","387","29","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("4");
            obj.set_text("품목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","468","29","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","582","29","150","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnBranSearch","558","29","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","27","29","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("8");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranCd00","94","29","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm00","208","29","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnBranSearch00","184","29","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc01","777","29","65","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("12");
            obj.set_text("로트번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm01","862","29","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("STCK_MNG_0002.xfdl","lib::lib_Form.xjs");
        this.registerScript("STCK_MNG_0002.xfdl", function() {
        /**
        *  점소 등록
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_SAMPLE.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.02.05
        *  @Desction        샘플
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.05		Kim Jin Hwan			최초 생성
        ************************************************************************************************
        */

        /************************************************************************************************
        * include 선언부																				*
         ************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp;


         /***********************************************************************************************
         * @function: form_onload
         * @description: FORM 온로드
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//nexacro application
        	this.objApp = nexacro.getApplication() ;

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);

        	// 초기화
        	this.fnInit();
        };


         /***********************************************************************************************
         * @function	: form_onload
         * @description	: FORM init
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.EventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnInit = function(obj,e)
        {
        	// 공통코드조회
        	this.gfnTransaction("commonCode");
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
        		// 조회
        		case "btnSearch" :
        			this.fnSearch();
        		break;

        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		// 초기화
        		case "btnReset" :
        			this.fnInit();
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {

        	alert("조회기능");
        	return;

        	// 조회조건 필수입력 체크


        	this.gfnTransaction("getBranInfo");

        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	alert("저장기능");

        	return;
        	/** 저장할 데이터 유효성 체크*********************************************************************/


        	/****************************************************************************************************/

        	if(!this.gfnConfirm("저장하시겠습니까?")) return;


        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("saveBranInfo");


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
        	trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

        	if(errorCode < 0) {
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 컴포넌트 초기화
        			this.fnCompInit();

        		break;


        		default :
        		break;
        	}
        };

        /***********************************************************************************************
         * @function	: fnPopupCallBack
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: dsObj		- nexacro.NormalDataset
         * @return N/A
         ***********************************************************************************************/
        this.fnPopupCallback = function(sPopupId, dsObj)
        {
        	//trace("[fnPopupCallback()] sPopupId["+sPopupId+"] rtnMsg["+JSON.stringify(rtnObj)+"]");

        	switch(sPopupId) {

        		default :
        		break;
        	}
        };



        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnExcel.addEventHandler("onclick",this.btnOnClick,this);
            this.edtBranCd.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.edtBranNm.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.btnBranSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.edtBranCd00.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.edtBranNm00.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.btnBranSearch00.addEventHandler("onclick",this.fn_PopOpen,this);
            this.edtBranNm01.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
        };

        this.loadIncludeScript("STCK_MNG_0002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
