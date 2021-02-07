(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("STCK_MNG_0003");
            this.set_titletext("재고수량조정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col></Row><Row><Col id=\"SVC_ID\">saveStckList</Col><Col id=\"SERVICE_BEANNAME\">stckMgmtService</Col><Col id=\"SERVICE_METHOD\">saveStckList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsList=dsList:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getStckList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"QUERY_LIST\">q1=stckMgmtService.getStckList</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_NM\" size=\"256\" type=\"STRING\"/><Column id=\"STC_DV_LOT\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STC_DV_LOT\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"USBL_STC\" type=\"STRING\" size=\"256\"/><Column id=\"WAREO_RSRV\" type=\"STRING\" size=\"256\"/><Column id=\"ALLOC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PICKING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CRECT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"NO_USE_STC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ZN\" type=\"STRING\" size=\"256\"/><Column id=\"TO_LOC\" type=\"STRING\" size=\"256\"/><Column id=\"TO_RACK\" type=\"STRING\" size=\"256\"/><Column id=\"TO_MV_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_MV_QTY2\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_USBL_STC\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_HOLDING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"INPUT_NO_USE_STC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"72","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"37","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","btnSave:5",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc","602","44","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("9");
            obj.set_text("품목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd_sc","641","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm_sc","755","44","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchItem","731","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","284","44","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("10");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","323","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","437","44","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchCust","413","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc01","25","74","65","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("11");
            obj.set_text("로트번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edtStcDvLot","88","74","161","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"42\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"79\"/><Column size=\"113\"/><Column size=\"92\"/><Column size=\"119\"/><Column size=\"92\"/><Column size=\"123\"/><Column size=\"113\"/><Column size=\"50\"/><Column size=\"88\"/><Column size=\"58\"/><Column size=\"107\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\"/><Cell col=\"2\" colspan=\"20\" text=\"재고정보\"/><Cell row=\"1\" text=\"No\"/><Cell row=\"1\" col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell row=\"1\" col=\"2\" accessibilitydescription=\"T0199\" text=\"창고코드\"/><Cell row=\"1\" col=\"3\" accessibilitydescription=\"T0199\" text=\"창고명\"/><Cell row=\"1\" col=\"4\" accessibilitydescription=\"T0199\" text=\"고객사코드\"/><Cell row=\"1\" col=\"5\" accessibilitydescription=\"T0199\" text=\"고객명\"/><Cell row=\"1\" col=\"6\" accessibilitydescription=\"T0199\" text=\"품목코드\"/><Cell row=\"1\" col=\"7\" accessibilitydescription=\"T0199\" text=\"품목명\"/><Cell row=\"1\" col=\"8\" accessibilitydescription=\"T0199\" text=\"로트번호\"/><Cell row=\"1\" col=\"9\" accessibilitydescription=\"T0199\" text=\"존\"/><Cell row=\"1\" col=\"10\" accessibilitydescription=\"T0199\" text=\"로케이션\"/><Cell row=\"1\" col=\"11\" accessibilitydescription=\"T0199\" text=\"랙\"/><Cell row=\"1\" col=\"12\" accessibilitydescription=\"T0199\" text=\"총수량(재고수량)\"/><Cell row=\"1\" col=\"13\" accessibilitydescription=\"T0199\" text=\"가용수량\"/><Cell row=\"1\" col=\"14\" accessibilitydescription=\"T0199\" text=\"가용수량\" color=\"#f9f475\" font=\"normal bold 10pt/normal &quot;Arial&quot;\"/><Cell row=\"1\" col=\"15\" accessibilitydescription=\"T0199\" text=\"보류수량\"/><Cell row=\"1\" col=\"16\" accessibilitydescription=\"T0199\" text=\"보류수량\" color=\"#f9f475\" font=\"normal bold 10pt/normal &quot;Arial&quot;\"/><Cell row=\"1\" col=\"17\" accessibilitydescription=\"T0199\" text=\"불용수량\"/><Cell row=\"1\" col=\"18\" accessibilitydescription=\"T0199\" text=\"불용수량\" color=\"#f9f475\" font=\"normal bold 10pt/normal &quot;Arial&quot;\"/><Cell row=\"1\" col=\"19\" accessibilitydescription=\"T0199\" text=\"출고수량\"/><Cell row=\"1\" col=\"20\" accessibilitydescription=\"T0199\" text=\"할당수량\"/><Cell row=\"1\" col=\"21\" accessibilitydescription=\"T0199\" text=\"피킹수량\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CENT_CD\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CENT_NM\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_CD\" textAlign=\"left\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"6\" editautoselect=\"true\" edittype=\"none\" text=\"bind:GDS_CD\" textAlign=\"left\"/><Cell col=\"7\" editautoselect=\"true\" edittype=\"none\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"8\" editautoselect=\"true\" edittype=\"none\" text=\"bind:STC_DV_LOT\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"9\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ZN_CD\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"10\" editautoselect=\"true\" edittype=\"none\" text=\"bind:LOC_CD\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"11\" editautoselect=\"true\" edittype=\"none\" text=\"bind:RACK_CD\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"12\" editautoselect=\"true\" edittype=\"none\" text=\"bind:STC_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"13\" editautoselect=\"true\" edittype=\"none\" text=\"bind:USBL_STC\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"14\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:INPUT_USBL_STC\" textAlign=\"right\" displaytype=\"number\" editinputtype=\"number\" maskeditformat=\"#,###,###\" editinputfilter=\"dot,space,alpha,comma,sign,symbol\"/><Cell col=\"15\" editautoselect=\"true\" edittype=\"none\" text=\"bind:HOLDING_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"16\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:INPUT_HOLDING_QTY\" textAlign=\"right\" displaytype=\"number\" editinputtype=\"number\" maskeditformat=\"#,###,###\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\"/><Cell col=\"17\" editautoselect=\"true\" edittype=\"none\" text=\"bind:NO_USE_STC_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"18\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:INPUT_NO_USE_STC_QTY\" textAlign=\"right\" displaytype=\"number\" editinputtype=\"number\" maskeditformat=\"#,###,###\" editinputfilter=\"alpha,comma,dot,sign,space,symbol\"/><Cell col=\"19\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREO_RSRV\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"20\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ALLOC_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"21\" editautoselect=\"true\" edittype=\"none\" text=\"bind:PICKING_QTY\" textAlign=\"right\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"2\"/><Cell col=\"2\" colspan=\"10\" text=\"합계\"/><Cell col=\"12\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(STC_QTY)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"13\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(USBL_STC)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"14\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(CRECT_QTY)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"15\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(HOLDING_QTY)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"16\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(CRECT_QTY)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"17\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(HOLDING_QTY)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"18\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(CRECT_QTY)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"19\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(WAREO_RSRV)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"20\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(ALLOC_QTY)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"21\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(PICKING_QTY)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("14");
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
            obj.set_taborder("15");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","25","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("16");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCustCd_sc","value","dsSearch","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtItemCd_sc","value","dsSearch","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtItemNm_sc","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtStcDvLot","value","dsSearch","STC_DV_LOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("STCK_MNG_0003.xfdl","lib::lib_Form.xjs");
        this.registerScript("STCK_MNG_0003.xfdl", function() {
        /**
        *  재고 관리
        *  @MenuPath
        *  @FileName 		STCK_MNG_0003.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.03.09
        *  @Desction        샘플
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.09		Kim Jin Hwan			최초 생성
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


        	this.gfnTransaction("getStckList");

        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsList.findRow("CHK", "1") < 0) {
        		this.gfnAlert("저장할 행을 체크해주세요.");
        		return;
        	}


        	/** 저장할 데이터 유효성 체크*********************************************************************/
        	var dsRowCount = this.dsList.getRowCount();
        	for(var i=0; i<dsRowCount; i++){

        		var nRowChk = this.dsList.getColumn(i, "CHK");

        		// 체크되지 않은 행 스킵.
        		if( nRowChk != "1") continue;

        		var stcQtyValue = this.dsList.getColumn(i, "STC_QTY");							// 총수량
        		var usblStcValue = this.dsList.getColumn(i, "USBL_STC");						// 가용수량
        		var inputUsblStcValue = this.dsList.getColumn(i, "INPUT_USBL_STC");				// 조정가용수량
        		var holdingQtyValue = this.dsList.getColumn(i, "HOLDING_QTY");					// 보류수량
        		var inputHoldingQtyValue = this.dsList.getColumn(i, "INPUT_HOLDING_QTY");		// 조정보류수량
        		var noUseStcQtyValue = this.dsList.getColumn(i, "NO_USE_STC_QTY");				// 불용수량
        		var inputNoUseStcQtyValue = this.dsList.getColumn(i, "INPUT_NO_USE_STC_QTY");	// 조정불용수량
        		var wareoRsrvValue = this.dsList.getColumn(i, "WAREO_RSRV");					// 출고수량
        		var allocQtyValue = this.dsList.getColumn(i, "ALLOC_QTY");						// 할당수량
        		var pickingQtyValue = this.dsList.getColumn(i, "PICKING_QTY");					// 피킹수량

        		// 조정수량이 하나라도 입력되지 않은경우 체크 해제후 스킵.
        		if( this.gfnIsNull(inputUsblStcValue) && this.gfnIsNull(inputHoldingQtyValue) && this.gfnIsNull(inputNoUseStcQtyValue) ) {
        			this.dsList.setColumn(i, "CHK", "");
        			continue;
        		}


        		// 조정수량항목 입력수 체크.
        		var inputCnt = 0;
        		var serviceFlag = "";
        		// 조정수량항목이 가용재고만 입력된경우
        		if( !this.gfnIsNull(inputUsblStcValue) && this.gfnIsNull(inputHoldingQtyValue) && this.gfnIsNull(inputNoUseStcQtyValue)){
        			serviceFlag = "onlyUsblStcChg";
        		}else{
        			serviceFlag = "exitStckChg";
        		}

        		// 데이터셋에 서비스플래그 셋팅. (서버단에서 처리가 달라짐.) (가용재고증가/감소인지 , 기존재고수량변경인지)
        		this.dsList.setColumn(i, "SERVICE_FLAG", serviceFlag);


        		// 조정수량 항목이 2개이상 입력된경우
        		if( serviceFlag == "exitStckChg" ){
        			/*
        				총수량과 각수량의 합이 다를경우 에러처리.
        				총수량 != 조정가용수량(입력이없다면 원본수량) + 조정보류수량(입력이없다면 원본수량) + 조정불용수량(입력이없다면 원본수량) + 출고수량 + 할당수량 + 피킹수량.
        			*/

        			//var qtySum = Number(wareoRsrvValue) + Number(allocQtyValue) + Number(pickingQtyValue);
        			var qtySum =Number(allocQtyValue) + Number(pickingQtyValue);

        			if( !this.gfnIsNull(inputUsblStcValue) ){
        				qtySum = qtySum + Number(inputUsblStcValue);
        			}else{
        				qtySum = qtySum + Number(usblStcValue);
        			}

        			if( !this.gfnIsNull(inputHoldingQtyValue) ){
        				qtySum = qtySum + Number(inputHoldingQtyValue);
        			}else{
        				qtySum = qtySum + Number(holdingQtyValue);
        			}

        			if( !this.gfnIsNull(inputNoUseStcQtyValue) ){
        				qtySum = qtySum + Number(inputNoUseStcQtyValue);
        			}else{
        				qtySum = qtySum + Number(noUseStcQtyValue);
        			}

        			if( Number(stcQtyValue) != qtySum){
        				//trace(stcQtyValue +"//"+ qtySum);
        				this.gfnAlert((i+1)+"행의 조정수량을 확인해주세요.");
        				return;
        			}

        		}

        	}

        	/****************************************************************************************************/


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveStckList");
        	});



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
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.edtItemCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnOpenPopSearchItem.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnOpenPopSearchCust.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtStcDvLot.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("onexpandup",this.grd_Main_onexpandup,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("STCK_MNG_0003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
