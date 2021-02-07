(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("STCK_MNG_0001");
            this.set_titletext("재고조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col></Row><Row><Col id=\"SVC_ID\">getStckInquList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"QUERY_LIST\">q1=stckMgmtService.getStckInquList</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REPRE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STC_DV_LOT\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"STC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"USBL_STC\" type=\"STRING\" size=\"256\"/><Column id=\"WAREO_RSRV\" type=\"STRING\" size=\"256\"/><Column id=\"ALLOC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"PICKING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"HOLDING_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CRECT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"STC_DV_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STC_GRD\" type=\"STRING\" size=\"256\"/><Column id=\"STC_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"NO_USE_STC_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj = new Static("stSearch","0","35",null,"40","28",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("13");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","106",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","272","45","50","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("14");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","420","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:4",null,null,"28","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"123\"/><Column size=\"174\"/><Column size=\"127\"/><Column size=\"198\"/><Column size=\"132\"/><Column size=\"159\"/><Column size=\"139\"/><Column size=\"97\"/><Column size=\"103\"/><Column size=\"75\"/><Column size=\"136\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/><Column size=\"91\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0199\" text=\"창고코드\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"창고명\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"고객사코드\"/><Cell col=\"4\" accessibilitydescription=\"T0199\" text=\"고객사명\"/><Cell col=\"5\" accessibilitydescription=\"T0587\" text=\"품목코드\"/><Cell col=\"6\" accessibilitydescription=\"T0278\" text=\"품목명\"/><Cell col=\"7\" text=\"로트번호\"/><Cell col=\"8\" text=\"존\"/><Cell col=\"9\" text=\"로케이션\"/><Cell col=\"10\" text=\"랙\"/><Cell col=\"11\" text=\"총수량(재고수량)\"/><Cell col=\"12\" text=\"가용수량\"/><Cell col=\"13\" text=\"출고수량\"/><Cell col=\"14\" text=\"할당수량\"/><Cell col=\"15\" text=\"피킹수량\"/><Cell col=\"16\" text=\"보류수량\"/><Cell col=\"17\" text=\"보정수량\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"1\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CENT_CD\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CENT_NM\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_CD\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_REPRE_NM\" textAlign=\"left\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"none\" text=\"bind:GDS_CD\" textAlign=\"center\"/><Cell col=\"6\" editautoselect=\"true\" edittype=\"none\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:STC_DV_LOT\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:ZN_CD\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:LOC_CD\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:RACK_CD\" edittype=\"none\"/><Cell col=\"11\" text=\"bind:STC_QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"12\" text=\"bind:USBL_STC\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"13\" text=\"bind:WAREO_RSRV\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"14\" text=\"bind:ALLOC_QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"15\" text=\"bind:PICKING_QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"16\" text=\"bind:HOLDING_QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\"/><Cell col=\"17\" text=\"bind:CRECT_QTY\" textAlign=\"right\" displaytype=\"number\" edittype=\"none\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.rowcount\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\" text=\"expr:dataset.getSum('parseInt(STC_QTY)')\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"12\" text=\"expr:dataset.getSum('parseInt(USBL_STC)')\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"13\" text=\"expr:dataset.getSum('parseInt(WAREO_RSRV)')\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"14\" text=\"expr:dataset.getSum('parseInt(ALLOC_QTY)')\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"15\" text=\"expr:dataset.getSum('parseInt(PICKING_QTY)')\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"16\" text=\"expr:dataset.getSum('parseInt(HOLDING_QTY)')\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/><Cell col=\"17\" text=\"expr:dataset.getSum('parseInt(CRECT_QTY)')\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 3px 0px 0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","576","45","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("15");
            obj.set_text("품목코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGdsCd","633","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGdsNm","747","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","910","44","30","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("16");
            obj.set_text("존");
            this.addChild(obj.name, obj);

            obj = new Edit("edtZnCd","935","44","110","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLocCd","1130","44","96","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","1072","45","65","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("17");
            obj.set_text("로케이션");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRackCd","1283","44","111","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","1256","44","30","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("18");
            obj.set_text("랙");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","btnSearch:5","37","68","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_ty01_excel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnItemPop","723","44","25","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_search01");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId","306","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustPop","396","44","25","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_search01");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("19");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","25","45","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("20");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","84","44","161","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("WAREH_CD");
            obj.set_datacolumn("WAREH_NM");
            obj.set_displayrowcount("6");
            obj.set_taborder("0");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_cssclass("sel_ty01");
            obj.set_innerdataset("gdsWarehAuthList");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCustId","value","dsSearch","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtGdsCd","value","dsSearch","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtLocCd","value","dsSearch","LOC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtRackCd","value","dsSearch","RACK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtCustNm","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtGdsNm","value","dsSearch","GDS_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("STCK_MNG_0001.xfdl","lib::lib_Form.xjs");
        this.registerScript("STCK_MNG_0001.xfdl", function() {
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

        	//포커스
        	//this.edtWarehCd_sc.setFocus();
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
        	this.edtCustId.setFocus();

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

        		//고객사 조회 팝업
        		case "btnCustPop":
        			this.fnOpenPopEntrpCust();
        		break;

        		//품목조회 팝업 버튼
        		case "btnItemPop":
        			this.fnOpenPopItem();
        		break;

        		case "btnExcel":
        			this.fnExcel();
        		break;

        		case "btnWarePop":
        			this.fnOpenPopWareh("btnWarePop");
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
        	//var edtWarehCd_scValue = this.edtWarehCd_sc.value;
        	var cboWarehValue = this.cboWareh.value;
        	var edtCustIdValue = this.edtCustId.value;
        	var edtGdsCdValue = this.edtGdsCd.value;

        	/*if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("창고코드를 선택해주세요.", "", function(){
        			this.cboWareh.dropdown();
        		});

        		return;
        	}



        	if(this.gfnIsNull(edtCustIdValue) && this.gfnIsNull(edtGdsCdValue) ){
        		this.gfnAlert("고객 또는 품목코드를 입력해주세요.");

        		if( this.gfnIsNull(edtCustIdValue) ){
        			this.edtCustId.setFocus();
        			return;
        		}

        		if( this.gfnIsNull(edtGdsCdValue) ){
        			this.edtGdsCd.setFocus();
        			return;
        		}

        		return;
        	}*/

        	this.gfnTransaction("getStckInquList");

        };


        /***********************************************************************************************
         * @function	: fnOpenPopBran
         * @description	: 품목 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopItem = function()
        {
        	// 파라미터 설정
        	var popupId = 'popSearchItem';	//팝업ID
        	var pGdsCdValue = this.edtGdsCd.value;	// 코드
        	var pGdsNmValue = this.edtGdsNm.value;	// 명

        	// 팝업 호출
        	var oArg = {
        				  pItemCd		: pGdsCdValue									// 품목코드
        				, pItemNm		: pGdsNmValue									// 품목명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P050.xfdl", oArg, sPopupCallBack, oOption);
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

        	popupId = "warehPop1";
        	pWarehCdValue = this.edtWarehCd_sc.value;
        	pWarehNmValue = '';

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
        };

        /***********************************************************************************************
         * @function		: fnOpenPopEntrpCust
         * @description		: 기업고객 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopEntrpCust = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pCustIdValue = '';	// 고객번호
        	var pCustNmValue = '';	// 고객명

        	popupId = 'searchPopCust';
        	pCustIdValue = this.edtCustId.value;
        	pCustNmValue = this.edtCustNm.value;


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
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P020.xfdl", oArg, sPopupCallBack, oOption);
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



        		// 고객 조회조건 처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "CUST_CD", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsSearch.setColumn(0, "CUST_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnCustPop.click();
        			}

        		break;



        		// 품목 조회조건 처리.
        		case "getItemInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsItemInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "GDS_CD", this.dsItemInfo.getColumn(0,"ITEM_CD"));
        				this.dsSearch.setColumn(0, "GDS_NM", this.dsItemInfo.getColumn(0,"ITEM_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnItemPop.click();
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

        		case "popSearchItem":
        			this.edtGdsCd.set_value(dsObj.getColumn(0, "ITEM_CD"));
        			this.edtGdsNm.set_value(dsObj.getColumn(0, "ITEM_NM"));
        		break;


        		case "searchPopCust":
        			this.edtCustId.set_value(dsObj.getColumn(0, "CUST_ID"));
        			this.edtCustNm.set_value(dsObj.getColumn(0, "CUST_NM"));
        		break;

        		case "warehPop1":
        			this.edtWarehCd_sc.set_value(dsObj.getColumn(0, "WAREH_CD"));
        			this.edtWarehNm_sc.set_value(dsObj.getColumn(0, "WAREH_NM"));
        		break;

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

        /***********************************************************************************************
         * @function	: edtCustId_onkeydown
         * @description	: edtCustId_onkeydown
         * @param		: popupId	- String
         * @param		: dsObj		- nexacro.NormalDataset
         * @return N/A
         ***********************************************************************************************/
        this.fnEditOnKeyDown = function(obj,e)
        {
        	/*if(e.keycode == 13){
        		obj.updateToDataset();	// 데이터셋에 변경값 적용.
        		this.fnOpenPopEntrpCust();	//품목조회 팝업
        	}*/

        	var objName = obj.name;

        	if( e.keycode === 13 ) {

        		obj.updateToDataset();
        		switch( objName ) {
        			case	'edtCustId' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtCustNm' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtGdsCd' : this.gfnTransaction("getItemInfo"); break;
        			case	'edtGdsNm' : this.gfnTransaction("getItemInfo"); break;

        			default	: 	break;
        		}
        	}

        };


        /***********************************************************************************************
         * @function	: fnEditOnInput
         * @description	: edit oninput
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.InputEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnEditOnInput = function(obj,e)
        {
        	var objName = obj.name;
        	switch( objName ) {
        		case	'edtCustId' : this.edtCustNm.set_value(''); break;
        		case	'edtCustNm' : this.edtCustId.set_value(''); break;
        		case	'edtGdsCd' : this.edtGdsNm.set_value(''); break;
        		case	'edtGdsNm' : this.edtGdsCd.set_value(''); break;
        	}
        };


        /***********************************************************************************************
         * @function		: fnExcel
         * @description		: 그리드 표시 된 정보를 엑셀로 download
         * @param 			: obj - Button object
         * @param 			: e - Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fnExcel = function()
        {
        	var objGrd	= this.grd_Main;
        	var objDs	= this.dsList;

        	if(objDs.getRowCount() > 0) {
        		//this.gfnExcelExport(objGrd);
        		this.gfnExcelExport(this.grd_Main, "sheet1", "재고조회_"+this.gfnGetDate("milli"));
        	} else {
        		this.gfnAlert("리스트정보가 없습니다. 조회 후 사용해주세요.");
        	}
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.sta01.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtCustNm.addEventHandler("onchanged",this.edtBranNm_onchanged,this);
            this.edtCustNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.sta02.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtGdsCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtGdsCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.edtGdsNm.addEventHandler("onchanged",this.edtBranNm_onchanged,this);
            this.edtGdsNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtGdsNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.sta03.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtZnCd.addEventHandler("onchanged",this.edtBranNm_onchanged,this);
            this.edtLocCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.sta04.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtRackCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.sta05.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.btnExcel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnItemPop.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustId.addEventHandler("oninput",this.fnEditOnInput,this);
            this.btnCustPop.addEventHandler("onclick",this.btnOnClick,this);
            this.sta02_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.cboWareh.addEventHandler("onitemchanged",this.divTop_cboWareh_onitemchanged,this);
            this.cboWareh.addEventHandler("canitemchange",this.cboWareh_canitemchange,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("STCK_MNG_0001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
