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
            this.set_name("BAIM_BAIM_0070");
            this.set_titletext("계약품목등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsFchrgOrgnz=ds1</Col><Col id=\"QUERY_LIST\">q1=MS045</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getItemInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\">q1=baimItemMgmtService.getItemInfoList</Col></Row><Row><Col id=\"SVC_ID\">saveItemInfo</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimItemMgmtService</Col><Col id=\"SERVICE_METHOD\">saveItemInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsList:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList_empty", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("0");
            obj.set_text("계약품목등록");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchArea","0","34",null,"40","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"43","68","23","160",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","1108","560","72","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("5");
            obj.set_text("발송고객명");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"43","68","23","87",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("6");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"43","68","23","14",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("7");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","25","43","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("8");
            obj.set_text("기업고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","84","42","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","206","42","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","395","43","67","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("11");
            obj.set_text("협력사코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd_sc","466","42","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div01","11","82","557","340",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("기업고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","119","0","436","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustId","135","13","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","48","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("6");
            obj.set_text("발송고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","119","48","436","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","96","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("8");
            obj.set_text("협력사코드");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","119","96","436","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","192","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("10");
            obj.set_text("계약품명코드");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","119","192","436","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","0","288","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("사용여부");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00","0","240","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("13");
            obj.set_text("계약품명");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","119","240","436","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","288","436","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_01_00","0","144","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("16");
            obj.set_text("계약시작일자");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","119","144","436","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("calCntrStartYmd","135","156","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("cal_ty01");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","280","13","258","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd","135","108","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNo","135","60","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNm","280","60","258","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCntrItemCd","135","204","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCntrItemNm","135","253","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdoDelYn","139","303","279","20",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_innerdataset("dsDelYn");
            obj.set_text("사용");
            obj.set_value("N");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02","576","82","715","339",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("gridBran","0","0","713","336",null,null,null,null,null,null,this.div02.form);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty02");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"159\"/><Column size=\"116\"/><Column size=\"159\"/><Column size=\"159\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"계약시작일자\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"기업고객\"/><Cell col=\"3\" accessibilitydescription=\"T0712\" text=\"발송고객\"/><Cell col=\"4\" accessibilitydescription=\"T0712\" text=\"계약품명코드\"/><Cell col=\"5\" accessibilitydescription=\"T0712\" text=\"계약품명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:CNTR_START_YMD\" displaytype=\"date\" combodataset=\"dsDlvGdsCd\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"2\" text=\"bind:CUST_NM\" displaytype=\"normal\" combodataset=\"dsSendDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SEND_CUST_NM\" displaytype=\"normal\" combodataset=\"dsFrtDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CNTR_ITEM_CD\" displaytype=\"normal\" combodataset=\"dsZnDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CNTR_ITEM_NM\" displaytype=\"normal\" combodataset=\"dsFrtCalcDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,590,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtCustMgmtDlcmCd_sc","value","dsSearch","CUST_MGMT_DLCM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div01.form.edtCntrItemCd","value","dsList","CNTR_ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div01.form.edtCntrItemNm","value","dsList","CNTR_ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div01.form.rdoCalCpDvPrePay","value","dsList","CAL_CP_DV_PREPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div01.form.rdoDelYn","value","dsList","DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0080.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0080.xfdl", function() {
        /**
        *  품목별 계약단가 등록
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_0070.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.02.17
        *  @Desction        품목별 계약단가 등록
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.17		Kim Jin Hwan			최초 생성
        ************************************************************************************************
        */


         this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        // 폼 접근 변수
        var divFm = this.div01.form;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
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
         * @function	: forOninit
         * @description	: FORM init
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.EventInfo
         * @return N/A
        /***********************************************************************************************/
        this.form_oninit = function(obj,e)
        {
        	//nexacro application
        	this.objApp = nexacro.getApplication();
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

        	// 조회조건 셋팅.
        	this.dsSearch.setColumn(0, "CUST_ID", this.getOwnerFrame().pCustId);	//고객번호
        	this.dsSearch.setColumn(0, "CUST_NM", this.getOwnerFrame().pCustNm);	//고객명
        	this.dsSearch.setColumn(0, "CUST_MGMT_DLCM_CD", this.getOwnerFrame().pCustMgmtDlcmCd);	//협력사코드
        	this.dsSearch.setColumn(0, "SEND_CUST_NO", this.getOwnerFrame().pSendCustNo);	//발송고객번호
        	this.dsSearch.setColumn(0, "SEND_CUST_NM", this.getOwnerFrame().pSendCustNm);	//발송고객명
        	this.dsSearch.setColumn(0, "CNTR_START_YMD", this.getOwnerFrame().pCntrStartYmd);	//계약시작일


        	this.fnSetDefaultValue();


        	// 조회
        	this.fnSearch();
        };


         /***********************************************************************************************
         * @function	: fnSetDefaultValue
         * @description	: 파라미터로 전달받은 값 셋팅.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnSetDefaultValue = function()
        {
        	divFm.edtCustId.set_value(this.getOwnerFrame().pCustId);					// 기업고객번호
        	divFm.edtCustNm.set_value(this.getOwnerFrame().pCustNm);					// 기업고객명
        	divFm.edtSendCustNo.set_value(this.getOwnerFrame().pSendCustNo);			// 발송고객번호
        	divFm.edtSendCustNm.set_value(this.getOwnerFrame().pSendCustNm);			// 발송고객명
        	divFm.edtCustMgmtDlcmCd.set_value(this.getOwnerFrame().pCustMgmtDlcmCd);	// 협력사코드
        	divFm.calCntrStartYmd.set_value(this.getOwnerFrame().pCntrStartYmd);		// 계약시작일

        }




        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/
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

        		// 조회

        		// 저장
        		case "saveItemInfo":
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;

        		default :
        		break;
        	}
        };


         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /***********************************************************************************************
         * @function: fnCompInit
         * @description: 컴포넌트 초기화 함수.
         * @param  N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCompInit = function()
        {


        }

         /***********************************************************************************************
         * @function	: fnAfterCodeDef
         * @description	: 코드조회후 선택,전체 추가
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCodeDef = function(dsObj, strText) {
        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM', strText);
        }


         /***********************************************************************************************
         * @function	: fnAdd
         * @description	: FORM init
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function()
        {
        	// 조회 데이터가 없는경우
        	if(this.dsList.rowcount == 0){
        		this.dsList.assign( this.dsList_empty );
        	}

        	var lastRowType = this.dsList.getRowType(this.dsList.getRowCount()-1);

        	if(lastRowType != Dataset.ROWTYPE_INSERT){
        		var nRow = this.dsList.addRow();

        		this.dsList.setColumn(nRow, "CUST_ID", this.getOwnerFrame().pCustId); 					//고객번호
        		this.dsList.setColumn(nRow, "CUST_NM", this.getOwnerFrame().pCustNm); 					//고객명
        		this.dsList.setColumn(nRow, "SEND_CUST_NO", this.getOwnerFrame().pSendCustNo); 			//발송고객번호
        		this.dsList.setColumn(nRow, "SEND_CUST_NM", this.getOwnerFrame().pSendCustNm); 			//발송고객명
        		this.dsList.setColumn(nRow, "CUST_MGMT_DLCM_CD", this.getOwnerFrame().pCustMgmtDlcmCd); //협력사코드
        		this.dsList.setColumn(nRow, "CNTR_START_YMD", this.getOwnerFrame().pCntrStartYmd); 		//계약시작일
        		this.dsList.setColumn(nRow, "CNTR_END_YMD", this.getOwnerFrame().pCntrEndYmd); 			//계약시작일
        		this.dsList.setColumn(nRow, "DEL_YN",'N'); 			//사용여부

        	}
        }



        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {

        	/** 조회조건 필수입력 체크********************************************************/


        	/************************************************************************************/



        	this.gfnTransaction("getItemInfoList");
        };



        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {

        	/** 저장할 데이터 유효성 체크*********************************************************************/
        	for(var i=0; i<this.dsList.rowcount; i++){

        		// 로우상태
        		var nRowType = this.dsList.getRowType(i);

        		// 데이터셋 상태가 신규 또는 수정인 데이터만 체크한다.
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}


        	}

        	/****************************************************************************************************/


        	if(!this.gfnConfirm("저장하시겠습니까?")) return;



        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("saveItemInfo");


        };




        /***********************************************************************************************
         * @function		: fnPopOpen
         * @description		: 팝업 화면 오픈
         * @param 			: obj	- Button object
         * @param 			: e		- Button event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPop = function(obj,e)
        {
        	var btnName		= obj.name;

        	switch(btnName)
        	{
        		case "btnSearchBran1" : this.fnOpenPopBran(btnName); break;
        		case "btnSearchBran2" : this.fnOpenPopBran(btnName); break;
        		case "btnSearchEmp1" : this.fnOpenPopEmp(btnName); break;
        		case "btnSearchEmp2" : this.fnOpenPopEmp(btnName); break;

        		default 		: 	break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnOpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBran = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pBranCdValue = '';	// 점소코드
        	var pBranNmValue = '';	// 점소명

        	if(btnName == "btnSearchBran1"){
        		popupId = 'searchPopBran1';
        		pBranCdValue = divFm.edtCntrBranCd.value;
        	}else if(btnName == "btnSearchBran2"){
        		popupId = 'searchPopBran2';
        		pBranCdValue = divFm.edtSaleMgmtBranCd.value;
        	}


        	// 팝업 호출
        	var oArg = {
        				  pBranCd       : pBranCdValue									// 점소코드
        				, pBranNm       : pBranNmValue  								// 점소명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P010.xfdl", oArg, sPopupCallBack, oOption);
        }





        /***********************************************************************************************
         * @function		: fnOpenPopEmp
         * @description		: 사원 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopEmp= function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pEmpNoValue = ''; //사원번호
        	var pEmpNmValue = '' //사원명

        	if(btnName == "btnSearchEmp1"){
        		popupId = 'searchPopEmp1';
        		pEmpNoValue = divFm.edtCntrEmp.value;
        		pEmpNmValue = divFm.edtCntrEmpNm.value;

        	}else if(btnName == "btnSearchEmp2"){
        		popupId = 'searchPopEmp2';
        		pEmpNoValue = divFm.edtMgmtEmp.value;asd
        		pEmpNmValue = divFm.edtMgmtEmpNm.value;
        	}


        	// 팝업 호출
        	var oArg = {
        				  pEmpNo		: pEmpNoValue									// 사원번호
        				, pEmpNm		: pEmpNmValue									// 사원명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P040.xfdl", oArg, sPopupCallBack, oOption);
        }


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

        		case "searchPopBran1" :
        			divFm.edtCntrBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtCntrBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "searchPopBran2" :
        			divFm.edtSaleMgmtBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtSaleMgmtBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "searchPopEmp1" :
        			divFm.edtCntrEmp.set_value(dsObj.getColumn(0, "EMP_NO"));
        			divFm.edtCntrEmpNm.set_value(dsObj.getColumn(0, "EMP_NM"));
        		break;

        		case "searchPopEmp2" :
        			divFm.edtMgmtEmp.set_value(dsObj.getColumn(0, "EMP_NO"));
        			divFm.edtMgmtEmpNm.set_value(dsObj.getColumn(0, "EMP_NM"));
        		break;



        		default :
        		break;
        	}
        };




         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description popup close
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };



        /***********************************************************************************************
         * @function	: gridCellDbClick
         * @description	: button onClick event
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.gridCellDbClick = function(obj,e)
        {
        	var row = e.row;
        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.fnReturnClose(row);
        	}
        };


        /***********************************************************************************************
         * @function	: fnReturnClose
         * @description	:
         * @param		: obj	- nexacro.Edit
         * @return N/A
        /***********************************************************************************************/
        this.fnReturnClose = function(row) {

        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.dsResult.clearData();
        		this.dsResult.copyRow(this.dsResult.addRow(), this.dsList, row);

        		var json = {
        			ds : this.dsResult.saveXML(),
        			callFn : this.getOwnerFrame().callbackFn
        		}

        		this.close(JSON.stringify(json));
        	}
        }


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

        		// 신규
        		case "btnAdd" :
        			this.fnAdd();
        		break;


        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		default :
        		break;
        	}
        };



        this.edtBranCd_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		obj.updateToDataset();	// 데이터셋에 변경값 적용.
        		this.fnSearch();
        	}
        };




        this.div03_gridSendCust_oncellposchanged = function(obj,e)
        {
        	// 선택된 행의 상태
        	var selectedRowType = this.dsList.getRowType(e.row);

        	// 신규추가시 협력사코드, 발송고객번호 활성화
        	if( selectedRowType == Dataset.ROWTYPE_INSERT){
        		divFm.edtCustMgmtDlcmCd.set_enable(true);
        		divFm.btnSearchCustMgmtDlcmCd.set_enable(true);
        		divFm.edtSendCustNo.set_enable(true);
        	}else{
        		divFm.edtCustMgmtDlcmCd.set_enable(false);
        		divFm.btnSearchCustMgmtDlcmCd.set_enable(false);
        		divFm.edtSendCustNo.set_enable(false);
        	}
        };



        /***********************************************************************************************
         * @function	: editOnKeyDown
         * @description	: edit onkeydown
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnEditOnKeyDown = function(obj,e)
        {
        	var objName = obj.name;

        	if( e.keycode === 13 ) {

        		obj.updateToDataset();
        		switch( objName ) {
        			case	'edtCntrBranCd' : divFm.btnSearchBran1.click(); break;
        			case	'edtSaleMgmtBranCd' : divFm.btnSearchBran2.click(); break;

        			case	'edtCntrEmp' : divFm.btnSearchEmp1.click(); break;
        			case	'edtMgmtEmp' : divFm.btnSearchEmp2.click(); break;

        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtCntrBranCd' : divFm.edtCntrBranNm.set_value(''); break;
        			case	'edtSaleMgmtBranCd' : divFm.edtSaleMgmtBranNm.set_value(''); break;
        			case	'edtCntrEmp' : divFm.edtCntrEmpNm.set_value(''); break;
        			case	'edtMgmtEmp' : divFm.edtMgmtEmpNm.set_value(''); break;
        			default		: 	break;
        		}
        	}
        };


        /***********************************************************************************************
         * @function	: dsList_onrowposchanged
         * @description	: 데이터셋 로우변경 이벤트
         * @param		: obj	- nexacro.NormalDataset
         * @param		: e		- nexacro.DSRowPosChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsList_onrowposchanged = function(obj,e)
        {
        	var nRowType = this.dsList.getRowType(e.newrow);

        	// 신규입력일경우 계약시작일자 변경가능
        	if(nRowType == Dataset.ROWTYPE_INSERT){
        		divFm.edtCntrItemCd.set_enable(true);
        	}
        	// 신규입력이 아닌경우 계약시작일자 변경불가능
        	else{

        		for(var i=0; i<this.dsList.rowcount; i++){
        			if(this.dsList.getRowType(i) == Dataset.ROWTYPE_INSERT)
        				this.dsList.deleteRow(i);
        		}

        		divFm.edtCntrItemCd.set_enable(false);



        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustMgmtDlcmCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.calCntrStartYmd.addEventHandler("canchange",this.div00_cal00_00_canchange,this);
            this.div02.form.gridBran.addEventHandler("oncelldblclick",this.gridBran_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0080.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
