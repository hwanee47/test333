(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WHIB_MNG_0001");
            this.set_titletext("입고관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col></Row><Row><Col id=\"SVC_ID\">selectRcptOrd</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">selectRcptOrd</Col></Row><Row><Col id=\"SVC_ID\">insertRcptOrdTemp</Col><Col id=\"IN_DATASET_LIST\">dsTemp=dsTemp</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">insertRcptOrdTemp</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">insertRcptOrdDecis</Col><Col id=\"IN_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">insertRcptOrdDecis</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CP_DV\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"SHP_MALL_SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DV_CD\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXlsUpld", this);
            obj._setContents("<ColumnInfo><Column id=\"NUM\" size=\"256\" type=\"STRING\"/><Column id=\"AAA\" size=\"256\" type=\"STRING\"/><Column id=\"BBB\" size=\"256\" type=\"STRING\"/><Column id=\"CCC\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelSample", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" size=\"256\" type=\"STRING\"/><Column id=\"SLIP_YMD\" size=\"256\" type=\"STRING\"/><Column id=\"SLIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"SHP_MALL_SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CUST_CD\">123</Col><Col id=\"SLIP_YMD\">20200301</Col><Col id=\"SLIP_NO\">202003010001</Col><Col id=\"ORD_QTY\">10</Col><Col id=\"SHP_MALL_SLIP_NO\">12345</Col><Col id=\"GDS_CD\">1111</Col></Row><Row><Col id=\"CUST_CD\">123</Col><Col id=\"SLIP_YMD\">20200301</Col><Col id=\"SLIP_NO\">202003010001</Col><Col id=\"ORD_QTY\">20</Col><Col id=\"SHP_MALL_SLIP_NO\">12345</Col><Col id=\"GDS_CD\">2222</Col></Row><Row><Col id=\"CUST_CD\">456</Col><Col id=\"SLIP_YMD\">20200302</Col><Col id=\"SLIP_NO\">202003010002</Col><Col id=\"SHP_MALL_SLIP_NO\">67890</Col><Col id=\"GDS_CD\">3333</Col><Col id=\"ORD_QTY\">30</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","-10","20",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","56","23","112",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("0");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","10","29","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("2");
            obj.set_text("주문접수일자");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","365","29","32","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("3");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Div("divDate","104","28","240","24",null,null,null,null,null,null,this);
            obj.set_async("true");
            obj.set_cssclass("inp_cal01");
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_url("cmm::cmmCalFromTo.xfdl");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd","402","28","90","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnCust","492","28","25","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_search01");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","516","28","130","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo04","739","28","130","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsBizCd");
            obj.set_taborder("8");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp01","664","29","62","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("9");
            obj.set_text("분할여부");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00_00","0",null,"71","31",null,"11",null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("10");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","70",null,"386","24",null,"13",null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("btnSampleDownload","560",null,"102","23",null,"12",null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T0672");
            obj.set_fittocontents("none");
            obj.set_taborder("12");
            obj.set_text("양식 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnxlsUpld","463",null,"94","23",null,"12",null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("13");
            obj.set_text("엑셀 업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","72",null,null,"30","50",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("15");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"고객사코드\"/><Cell col=\"3\" text=\"전표일자\"/><Cell col=\"4\" text=\"전표번호\"/><Cell col=\"5\" text=\"쇼핑몰전표번호\"/><Cell col=\"6\" text=\"작업구분\"/><Cell col=\"7\" text=\"품목코드\"/><Cell col=\"8\" text=\"품목명\"/><Cell col=\"9\" text=\"주문수량\"/><Cell col=\"10\" text=\"등록자\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" displaytype=\"normal\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:CUST_CD\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:SLIP_YMD\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:SLIP_NO\" edittype=\"normal\"/><Cell col=\"5\" text=\"bind:SHP_MALL_SLIP_NO\" edittype=\"normal\"/><Cell col=\"6\" text=\"bind:WORK_DV_CD\" edittype=\"normal\"/><Cell col=\"7\" text=\"bind:GDS_CD\" edittype=\"normal\"/><Cell col=\"8\" edittype=\"normal\"/><Cell col=\"9\" text=\"bind:ORD_QTY\" edittype=\"normal\" displaytype=\"normal\"/><Cell col=\"10\" text=\"bind:REG_EMP_ID\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"29","68","23","245",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("16");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"29","68","23","172",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("17");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"29","68","23","42",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("18");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcelData","4","810","51.60%",null,null,"-85",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_binddataset("dsExcelSample");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("14");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"CUST_CD\"/><Cell col=\"1\" text=\"SLIP_YMD\"/><Cell col=\"2\" text=\"SLIP_NO\"/><Cell col=\"3\" text=\"SHP_MALL_SLIP_NO\"/><Cell col=\"4\" text=\"GDS_CD\"/><Cell col=\"5\" text=\"ORD_QTY\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_CD\"/><Cell col=\"1\" text=\"bind:SLIP_YMD\"/><Cell col=\"2\" text=\"bind:SLIP_NO\"/><Cell col=\"3\" text=\"bind:SHP_MALL_SLIP_NO\"/><Cell col=\"4\" text=\"bind:GDS_CD\"/><Cell col=\"5\" text=\"bind:ORD_QTY\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCustCd","value","dsSearch","SHPR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cbo04","value","dsInfo","BIZ_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalFromTo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("RCPT_ORDER_0001_bak.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_ORDER_0001_bak.xfdl", function() {
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

        		// 엑셀샘플업로드
        		case "btnSampleDownload" :
        			this.fnSampleDownload();
        		break;

        		// 엑셀업로드
        		case "btnxlsUpld" :
        			this.fnXlsUpld();
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
        	// 조회조건 필수입력 체크
        	/*
        	this.dsSearch.setColumn(0, "LOGIN_ID"		, sUserId);
        	this.dsSearch.setColumn(0, "LOGINTYPE"		, "NEXA");
        	this.dsSearch.setColumn(0, "USER_LANG"		, "KO");
        	this.dsSearch.setColumn(0, "PASSWORD"		, sPassword);
        	this.dsSearch.setColumn(0, "USER_ID"		, "");
        	*/
        	//alert(this.objApp.gv_warehCd);
        	//alert(this.objApp.gv_userId);

        	//this.dsSearch.clearData();

        	this.gfnTransaction("selectRcptOrd");
        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {
        	/** 저장할 데이터 유효성 체크*********************************************************************/


        	/****************************************************************************************************/

        	if(!this.gfnConfirm("저장하시겠습니까?")) return;

        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("insertRcptOrdDecis");
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
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :
        			// 컴포넌트 초기화
        			this.fnCompInit();
        		break;

        		case "insertRcptOrdDecis":
        			alert("저장되었습니다.");
        			this.fnSearch();
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
        //엑셀샘플
        this.fnSampleDownload = function(obj,e) {
        	//var sDateTime = this.gfnGetDate("time");
        	this.gfnExcelExport(this.grdExcelData, "sheet1", "OrderExcelSample");
        }

        //엑셀업로드
        this.fnXlsUpld = function() {
        	this.dsList.clearData();
        	this.dsTemp.clearData();
        	this.gfnExcelImport("dsTemp", "sheet1", "A2", "fnImportCallback", "importExcel", this);
        }

        this.fnImportCallback = function (sImportId)
        {
        	//엑셀temp저장
        	this.gfnTransaction("insertRcptOrdTemp");
        }
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.grd00_oncellclick = function(obj,e)
        {
        	alert(this.test.getColumn(0,"NUM") );
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.staExeCorp.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staExeCorp00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtCustCd.addEventHandler("onkeydown",this.editOnKeyDown,this);
            this.edtCustCd.addEventHandler("onkeyup",this.edtOnKeyUp,this);
            this.btnCust.addEventHandler("onclick",this.fn_PopOpen,this);
            this.staExeCorp01.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.btnSampleDownload.addEventHandler("onclick",this.btnOnClick,this);
            this.btnxlsUpld.addEventHandler("onclick",this.btnOnClick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.grdExcelData.addEventHandler("oncellclick",this.grdShprList_oncellclick,this);
        };

        this.loadIncludeScript("RCPT_ORDER_0001_bak.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
