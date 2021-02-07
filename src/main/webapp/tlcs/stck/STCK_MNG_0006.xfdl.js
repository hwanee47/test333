(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("STCK_MNG_0006");
            this.set_titletext("입/출고내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsTxType=ds1 dsTxType_sc=ds2</Col><Col id=\"QUERY_LIST\">q1=ST101 q2=ST101</Col></Row><Row><Col id=\"SVC_ID\">saveStckList</Col><Col id=\"SERVICE_BEANNAME\">stckMgmtService</Col><Col id=\"SERVICE_METHOD\">saveStckList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsList=dsList:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getStckHistory</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"QUERY_LIST\">q1=stckMgmtService.getStckHistory</Col></Row><Row><Col id=\"SVC_ID\">getWarehAuthList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSubSearch1</Col><Col id=\"OUT_DATASET_LIST\">dsWarehAuthList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonService.getWarehAuthList</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"OCCR_YMD_FR\" type=\"STRING\" size=\"256\"/><Column id=\"OCCR_YMD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_NM\" size=\"256\" type=\"STRING\"/><Column id=\"TRANSACTION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"OCCR_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_ZN\" type=\"STRING\" size=\"256\"/><Column id=\"FR_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"FR_RACK\" type=\"STRING\" size=\"256\"/><Column id=\"FR_STC_DV_LOT\" type=\"STRING\" size=\"256\"/><Column id=\"FR_STC_DV_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FR_STC_GRD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_STC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_MV_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ZN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RACK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_STC_DV_LOT\" type=\"STRING\" size=\"256\"/><Column id=\"TO_STC_DV_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TO_STC_GRD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_STC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_MV_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTxType", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">발송구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">발송구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTxType_sc", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">발송구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">발송구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"72","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc","284","74","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("8");
            obj.set_text("품목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd_sc","325","74","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm_sc","439","74","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchItem","415","74","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","631","44","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("9");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","671","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","785","44","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchCust","761","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("10");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\" band=\"left\"/><Column size=\"105\"/><Column size=\"79\"/><Column size=\"83\"/><Column size=\"113\"/><Column size=\"92\"/><Column size=\"119\"/><Column size=\"92\"/><Column size=\"110\"/><Column size=\"88\"/><Column size=\"110\"/><Column size=\"91\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"89\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"95\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"일자\"/><Cell col=\"2\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"시간\"/><Cell col=\"3\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"창고코드\"/><Cell col=\"4\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"창고명\"/><Cell col=\"5\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"고객사코드\"/><Cell col=\"6\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"고객명\"/><Cell col=\"7\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"품목코드\"/><Cell col=\"8\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"품목명\"/><Cell col=\"9\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"처리자\"/><Cell col=\"10\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"처리유형\"/><Cell col=\"11\" rowspan=\"2\" accessibilitydescription=\"T0199\" text=\"처리수량\"/><Cell col=\"12\" colspan=\"6\" text=\"이동정보(FROM)\"/><Cell col=\"18\" colspan=\"5\" text=\"이동정보(TO)\"/><Cell row=\"1\" col=\"12\" accessibilitydescription=\"T0199\" text=\"창고코드\"/><Cell row=\"1\" col=\"13\" accessibilitydescription=\"T0199\" text=\"창고명\"/><Cell row=\"1\" col=\"14\" accessibilitydescription=\"T0199\" text=\"존\"/><Cell row=\"1\" col=\"15\" accessibilitydescription=\"T0199\" text=\"로케이션\"/><Cell row=\"1\" col=\"16\" accessibilitydescription=\"T0199\" text=\"랙\"/><Cell row=\"1\" col=\"17\" accessibilitydescription=\"T0199\" text=\"로트번호\"/><Cell row=\"1\" col=\"18\" accessibilitydescription=\"T0199\" text=\"창고코드\"/><Cell row=\"1\" col=\"19\" accessibilitydescription=\"T0199\" text=\"창고명\"/><Cell row=\"1\" col=\"20\" accessibilitydescription=\"T0199\" text=\"존\"/><Cell row=\"1\" col=\"21\" accessibilitydescription=\"T0199\" text=\"로케이션\"/><Cell row=\"1\" col=\"22\" accessibilitydescription=\"T0199\" text=\"랙\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" editautoselect=\"true\" edittype=\"none\" text=\"bind:OCCR_YMD\" textAlign=\"center\" displaytype=\"date\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:REG_DTIME\" textAlign=\"center\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CENT_CD\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CENT_NM\" textAlign=\"left\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_CD\" textAlign=\"left\"/><Cell col=\"6\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"7\" editautoselect=\"true\" edittype=\"none\" text=\"bind:GDS_CD\" textAlign=\"left\"/><Cell col=\"8\" editautoselect=\"true\" edittype=\"none\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"9\" editautoselect=\"true\" edittype=\"none\" text=\"bind:REG_EMP_ID\" textAlign=\"left\"/><Cell col=\"10\" editautoselect=\"true\" edittype=\"none\" text=\"bind:TRANSACTION_TYPE\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsTxType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"11\" editautoselect=\"true\" edittype=\"none\" text=\"bind:TRANSACTION_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" editautoselect=\"true\" edittype=\"none\" text=\"bind:FR_CENT_CD\" textAlign=\"left\"/><Cell col=\"13\" editautoselect=\"true\" edittype=\"none\" textAlign=\"left\" text=\"bind:FR_CENT_NM\"/><Cell col=\"14\" editautoselect=\"true\" edittype=\"none\" text=\"bind:FR_ZN\" textAlign=\"left\"/><Cell col=\"15\" editautoselect=\"true\" edittype=\"none\" text=\"bind:FR_LOC\" textAlign=\"left\"/><Cell col=\"16\" editautoselect=\"true\" edittype=\"none\" text=\"bind:FR_RACK\" textAlign=\"left\"/><Cell col=\"17\" editautoselect=\"true\" edittype=\"none\" text=\"bind:FR_STC_DV_LOT\" textAlign=\"left\"/><Cell col=\"18\" editautoselect=\"true\" edittype=\"none\" text=\"bind:TO_CENT_CD\" textAlign=\"left\"/><Cell col=\"19\" editautoselect=\"true\" edittype=\"none\" text=\"bind:TO_CENT_NM\" textAlign=\"left\"/><Cell col=\"20\" editautoselect=\"true\" edittype=\"none\" text=\"bind:TO_ZN\" textAlign=\"left\"/><Cell col=\"21\" editautoselect=\"true\" edittype=\"none\" text=\"bind:TO_LOC\" textAlign=\"left\"/><Cell col=\"22\" editautoselect=\"true\" edittype=\"none\" text=\"bind:TO_RACK\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00_00","284","44","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("11");
            obj.set_text("일자");
            this.addChild(obj.name, obj);

            obj = new Calendar("calOccrYmdFr_sc","325","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","458","43","8","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("-");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calOccrYmdTo_sc","469","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc01","25","74","64","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("15");
            obj.set_text("처리유형");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTxType_sc","88","73","111","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("16");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsTxType_sc");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("17");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","88","44","161","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("WAREH_CD");
            obj.set_datacolumn("WAREH_NM");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("gdsWarehAuthList");
            obj.set_taborder("18");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","25","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("19");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calOccrYmdFr_sc","value","dsSearch","OCCR_YMD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calOccrYmdTo_sc","value","dsSearch","OCCR_YMD_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtCustCd_sc","value","dsSearch","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtItemCd_sc","value","dsSearch","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtItemNm_sc","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboTxType_sc","value","dsSearch","TRANSACTION_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("STCK_MNG_0006.xfdl","lib::lib_Form.xjs");
        this.registerScript("STCK_MNG_0006.xfdl", function() {
        /**
        *  입/출고내역 조회
        *  @MenuPath
        *  @FileName 		STCK_MNG_0006.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.03.11
        *  @Desction        샘플
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.11		Kim Jin Hwan			최초 생성
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


        	this.dsSearch.setColumn(0, "OCCR_YMD_FR", this.gfnGetDate("date"));
        	this.dsSearch.setColumn(0, "OCCR_YMD_TO", this.gfnGetDate("date"));


        	// 창고코드
        	this.cboWareh.set_index(0);
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


        	// 조회조건 필수입력 체크

        	var calOccrYmdFr_scValue = this.calOccrYmdFr_sc.value;
        	var calOccrYmdTo_scValue = this.calOccrYmdTo_sc.value;


        	if(this.gfnIsNull(calOccrYmdFr_scValue)){
        		this.gfnAlert("조회조건의 일자(FROM)을 입력해주세요.");
        		this.calOccrYmdFr_sc.setFocus();
        		return;
        	}


        	if(this.gfnIsNull(calOccrYmdTo_scValue)){
        		this.gfnAlert("조회조건의 일자(TO)을 입력해주세요.");
        		this.calOccrYmdTo_sc.setFocus();
        		return;
        	}


        	this.gfnTransaction("getStckHistory");

        };



        /***********************************************************************************************
         * @function		: fnExcel
         * @description		: 그리드 표시 된 정보를 엑셀로 download
         * @param 			: N/A
         * @return			: N/A
        /***********************************************************************************************/
        this.fnExcel = function()
        {
        	var objGrd	= this.grd_Main;
        	var objDs	= this.dsList;

        	if(objDs.getRowCount() > 0) {
        		//this.gfnExcelExport(objGrd);
        		this.gfnExcelExport(this.grd_Main, "sheet1", "입/출고내역_"+this.gfnGetDate("milli"));
        	} else {
        		this.gfnAlert("리스트정보가 없습니다. 조회 후 사용해주세요.");
        	}
        };




        /***********************************************************************************************
         * @function	: fnOpenPopBatch
         * @description	: 일괄적용 팝업 호출
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBatch = function()
        {
        	//chk된 항목이 있는지 확인.
        	if(this.dsList.findRow("CHK", "1") < 0) {
        		this.gfnAlert("일괄적용 처리할 행을 체크해주세요.");
        		return;
        	}

        	// 파라미터 설정
        	var popupId = 'batchPop1';	//팝업ID

        	// 팝업 호출
        	var oArg = {
        				  pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"stck::STCK_MNG_P010.xfdl", oArg, sPopupCallBack, oOption);

        }

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
        		case "btnOpenPopSearchCust" :	this.fnOpenPopSearchCust(); break;
        		case "btnOpenPopSearchItem" :	this.fnOpenPopSearchItem(); break;
        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function		: fnOpenPopSearchCust
         * @description		: 고객 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopSearchCust = function()
        {
        	// 파라미터 설정
        	var popupId = 'custPop1';	//팝업ID
        	var pCustIdValue = this.edtCustCd_sc.value;	// 고객번호
        	var pCustNmValue = this.edtCustNm_sc.value;	// 고객명


        	// 팝업 호출
        	var oArg = {
        				  pCustId		: pCustIdValue									// 고객번호
        				, pCustNm		: pCustNmValue									// 고객명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P060.xfdl", oArg, sPopupCallBack, oOption);
        }




        /***********************************************************************************************
         * @function		: fnOpenPopSearchItem
         * @description		: 품목 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopSearchItem = function()
        {
        	// 파라미터 설정
        	var popupId = 'itemPop1';	//팝업ID
        	var pItemCdValue = this.edtItemCd_sc.value;	// 품목코드
        	var pItemNmValue = this.edtItemNm_sc.value;	// 품목명


        	// 팝업 호출
        	var oArg = {
        				  pItemCd		: pItemCdValue									// 품목코드
        				, pItemNm		: pItemNmValue									// 품목명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P050.xfdl", oArg, sPopupCallBack, oOption);
        }

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

        		case "saveStckList" :
        			this.gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		break;


        		// 고객 조회조건 처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "CUST_CD", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsSearch.setColumn(0, "CUST_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnOpenPopSearchCust.click();
        			}

        		break;

        		// 품목 조회조건 처리.
        		case "getItemInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsItemInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "ITEM_CD", this.dsItemInfo.getColumn(0,"ITEM_CD"));
        				this.dsSearch.setColumn(0, "ITEM_NM", this.dsItemInfo.getColumn(0,"ITEM_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnOpenPopSearchItem.click();
        			}

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

        		case "custPop1":
        			this.dsSearch.setColumn(0, "CUST_CD", dsObj.getColumn(0,"CUST_ID"));
        			this.dsSearch.setColumn(0, "CUST_NM", dsObj.getColumn(0,"CUST_NM"));

        		break;


        		case "itemPop1":
        			this.dsSearch.setColumn(0, "ITEM_CD", dsObj.getColumn(0,"ITEM_CD"));
        			this.dsSearch.setColumn(0, "ITEM_NM", dsObj.getColumn(0,"ITEM_NM"));

        		break;

        		default :
        		break;
        	}
        };



        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/

         /***********************************************************************************************
         * @function: fnCompInit
         * @description: 컴포넌트 초기화 함수.
         * @param  N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCompInit = function()
        {
        	// 사용여부
        	this.fnAddCodeDef(this.dsTxType_sc, '전체');
        	this.cboTxType_sc.set_index(0);
        }

        /***********************************************************************************************
         * @function	: fnAfterCodeDef
         * @description	: 코드조회후 선택,전체 추가
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCodeDef = function(dsObj, strText)
        {
        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM', strText);
        }





         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // 그리드 헤더 클릭
        this.grdOnHeadClick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
        };


        this.grd_Main_onexpandup = function(obj,e)
        {
        	var bindText = obj.getCellProperty("body", e.cell, "text");

        	// cell 컬럼명 추출.
        	var column = this.gfnNvl(bindText, "").replace("bind:", "");

        	switch(column)
        	{
        		// 창고코드
        		case "TO_CENT_CD" :
        			this.fnOpenPopWareh('btnOpenPopGridSearchWareh');
        		break;

        		case "TO_ZN":
        			this.fnOpenPopZn();
        		break;

        		case "TO_LOC":
        			this.fnOpenPopLoc();
        		break;

        		case "TO_RACK":
        			this.fnOpenPopRack();
        		break;

        		default :
        		break;
        	}
        };

        /***********************************************************************************************
         * @function		: fnOpenPopWareh
         * @description		: 창고 조회 팝업 호출
         * @param 			: btnName
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopWareh = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = "";	//팝업ID
        	var pWarehCdValue = "";
        	var pWarehNmValue = "";

        	if(btnName == "btnOpenPopGridSearchWareh"){
        		popupId = "warehPop1";
        	}
        	else{
        		popupId = "pop2";
        		pWarehCdValue = this.edtWarehCd_sc.value;
        		pWarehNmValue = this.edtWarehNm_sc.value;
        	}

        	// 팝업 호출
        	var oArg = {
        				  pWarehCd      : pWarehCdValue
        				, pWarehNm      : pWarehNmValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P010.xfdl", oArg, sPopupCallBack, oOption);
        }


        /***********************************************************************************************
         * @function		: fnOpenPopZn
         * @description		: 존 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopZn = function()
        {
        	// 파라미터 설정
        	var popupId = "znPop1";	//팝업ID
        	var pZnCdValue = "";
        	var pZnNmValue = "";



        	// 팝업 호출
        	var oArg = {
        				  pZnCd      : pZnCdValue
        				, pZnNm      : pZnNmValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P020.xfdl", oArg, sPopupCallBack, oOption);
        }


        /***********************************************************************************************
         * @function		: fnOpenPopLoc
         * @description		: 로케이션 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopLoc = function()
        {
        	// 파라미터 설정
        	var popupId = "locPop1";	//팝업ID
        	var pLocCdValue = "";
        	var pLocNmValue = "";



        	// 팝업 호출
        	var oArg = {
        				  pLocCd      : pLocCdValue
        				, pLocNm      : pLocNmValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P030.xfdl", oArg, sPopupCallBack, oOption);
        }


        /***********************************************************************************************
         * @function		: fnOpenPopRack
         * @description		: 랙 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopRack = function()
        {
        	// 파라미터 설정
        	var popupId = "rackPop1";	//팝업ID
        	var pRackCdValue = "";
        	var pRackNmValue = "";



        	// 팝업 호출
        	var oArg = {
        				  pRackCd      : pRackCdValue
        				, pRackNm      : pRackNmValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P040.xfdl", oArg, sPopupCallBack, oOption);
        }



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
        			case	'edtCustCd_sc' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtCustNm_sc' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtItemCd_sc' : this.gfnTransaction("getItemInfo"); break;
        			case	'edtItemNm_sc' : this.gfnTransaction("getItemInfo"); break;
        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtCustCd_sc' : this.edtCustNm_sc.set_value(); break;
        			case	'edtCustNm_sc' : this.edtCustCd_sc.set_value(); break;
        			case	'edtItemCd_sc' : this.edtItemNm_sc.set_value(); break;
        			case	'edtItemNm_sc' : this.edtItemCd_sc.set_value(); break;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.edtItemCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnOpenPopSearchItem.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnOpenPopSearchCust.addEventHandler("onclick",this.fnOpenPop,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("onexpandup",this.grd_Main_onexpandup,this);
            this.cboTxType_sc.addEventHandler("canitemchange",this.cboZnDv_canitemchange,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("STCK_MNG_0006.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
