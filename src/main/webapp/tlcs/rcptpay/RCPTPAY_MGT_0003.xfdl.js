(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RCPTPAY_MGT_0003");
            this.set_titletext("월수불");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col></Row><Row><Col id=\"SVC_ID\">selectRcptpayByMon</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsResult dsListSum=dsSumResult</Col><Col id=\"SERVICE_BEANNAME\">rcptpayMgmtService</Col><Col id=\"SERVICE_METHOD\">selectRcptpayByMon</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">saveRcptpayByMon</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsResult dsListSum=dsSumResult</Col><Col id=\"SERVICE_BEANNAME\">rcptpayMgmtService</Col><Col id=\"SERVICE_METHOD\">saveRcptpayByMon</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"WORK_YM\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRAEH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAREO_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSum", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PDAY_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAREO_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WMS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SUM_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"GAP_QTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"STA_MN\" size=\"256\" type=\"STRING\"/><Column id=\"END_MN\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj = new Static("stSearch00","1","110",null,"110","29",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch00:3",null,null,"30","15",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("15");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업년월\"/><Cell col=\"2\" text=\"창고코드\"/><Cell col=\"3\" text=\"창고명\"/><Cell col=\"4\" text=\"고객코드\"/><Cell col=\"5\" text=\"고객명\"/><Cell col=\"6\" text=\"품목코드\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"재고수량\"/><Cell col=\"9\" text=\"입고수량\"/><Cell col=\"10\" text=\"출고수량\"/><Cell col=\"11\" text=\"조정수량\"/><Cell col=\"12\" text=\"입력자\"/><Cell col=\"13\" text=\"입력시간\"/><Cell col=\"14\" text=\"수정자\"/><Cell col=\"15\" text=\"수정시간\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:WORK_YM\"/><Cell col=\"2\" text=\"bind:WAREH_CD\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:WRAEH_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUST_ID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ITEM_CD\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ITEM_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:STC_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:WAREI_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:WAREO_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:TRANSACTION_QTY\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:REG_EMP_ID\"/><Cell col=\"13\" text=\"bind:REG_DTIME\"/><Cell col=\"14\" text=\"bind:MODI_EMP_ID\"/><Cell col=\"15\" text=\"bind:MODI_DTIME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","1","35",null,"72","29",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","15","120","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("전월재고수량");
            obj.set_font("normal 700 16px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","218","120","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("입고량");
            obj.set_font("normal 700 16px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","831","120","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("합계");
            obj.set_font("normal 700 16px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","421","120","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("출고수량");
            obj.set_font("normal 700 16px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","1239","120","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("차이수량");
            obj.set_font("normal 700 16px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02","1035","120","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("WMS재고량");
            obj.set_font("normal 700 16px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03","142","153","74","53",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("+");
            obj.set_font("normal 48px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03_00","346","153","74","53",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("-");
            obj.set_font("normal 48px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03_01","754","153","74","53",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("=");
            obj.set_font("normal 48px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03_00_00","958","153","74","53",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("-");
            obj.set_font("normal 48px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03_00_00_00","1162","153","74","53",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("=");
            obj.set_font("normal 48px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"47","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("7");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"47","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_excel");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("8");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc","387","74","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("27");
            obj.set_text("품목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd_sc","452","74","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm_sc","566","74","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnItemSearch","542","74","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","387","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("11");
            obj.set_text("조회일자");
            this.addChild(obj.name, obj);

            obj = new Div("divMonthSta","452","43","96","24",null,null,null,null,null,null,this);
            obj.set_async("true");
            obj.set_cssclass("inp_cal01");
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","25","74","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("12");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","88","74","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","202","74","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","178","74","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Div("divMonthEnd","563","43","96","24",null,null,null,null,null,null,this);
            obj.set_async("true");
            obj.set_cssclass("inp_cal01");
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_04","551","46","15","23",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","627","120","124","24",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("조정수량");
            obj.set_font("normal 700 16px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_03_01_00","550","153","74","53",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("+");
            obj.set_font("normal 48px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","25","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("10");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","88","44","161","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("WAREH_CD");
            obj.set_datacolumn("WAREH_NM");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("gdsWarehAuthList");
            obj.set_taborder("0");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("32");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPdayQty00_00_00_00_00_00","1239","153","124","53",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_format("999,999,999");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_font("normal 700 13pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPdayQty00_00_00_00_00","1035","153","124","53",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_format("999,999,999");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_font("normal 700 13pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPdayQty00_00_00_00","831","153","124","53",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_format("999,999,999");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_font("normal 700 13pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPdayQty00_00_00","627","153","124","53",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_format("999,999,999");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_font("normal 700 13pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPdayQty00_00","421","153","124","53",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_format("999,999,999");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_font("normal 700 13pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPdayQty00","218","153","124","53",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_format("999,999,999");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_font("normal 700 13pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskPdayQty","19","153","124","53",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_format("999,999,999");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_font("normal 700 13pt/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","edtCustCd_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtItemCd_sc","value","dsSearch","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divMonthSta","text","dsSearch","STA_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divMonthEnd","text","dsSearch","END_MN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","mskPdayQty00_00_00_00_00_00","value","dsListSum","GAP_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","mskPdayQty00_00_00_00_00","value","dsListSum","WMS_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","mskPdayQty00_00_00_00","value","dsListSum","SUM_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","mskPdayQty00_00_00","value","dsListSum","TRANSACTION_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","mskPdayQty00_00","value","dsListSum","WAREO_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","mskPdayQty00","value","dsListSum","WAREI_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","mskPdayQty","value","dsListSum","PDAY_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtItemNm_sc","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("RCPTPAY_MGT_0003.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPTPAY_MGT_0003.xfdl", function() {
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
        	//this.gfnTransaction("commonCode");

        	//달력 셋팅
        	this.fn_CalSetting();
        	// 창고코드
        	this.cboWareh.set_index(0);
        };


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {
        	this.dsSearch.setColumn(0, "STA_MN", this.divMonthSta.form.fnGetValue());
        	this.dsSearch.setColumn(0, "END_MN", this.divMonthEnd.form.fnGetValue());

        	this.gfnTransaction("selectRcptpayByMon");

        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	if(!this.gfnConfirm("저장하시겠습니까?")) return;

        	// 출고확정, 택배I/F 저장함 (TB_IFST_RSRV_C)
        	//this.gfnTransaction("saveRcptpayByMon");

        };



        /***********************************************************************************************
         * @function	: fnExcel,   fnXlsUpld
         * @description	: 엑셀.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnExcel = function() {

        	if(this.grd_Main.rowcount <= 0) {
        		this.gfnAlert("조회내역이 없습니다.");
        		return;
        	}

        	this.gfnExcelExport(this.grd_Main, "sheet1", "월수불_"+this.gfnGetDate("milli"));

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
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 컴포넌트 초기화
        			//this.fnCompInit();

        		break;

        		// 고객 조회조건 처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "CUST_ID", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsSearch.setColumn(0, "CUST_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnCustSearch.click();
        			}

        		break;

        		// 품목 조회조건 처리.
        		case "getItemInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsItemInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "GDS_CD", this.dsItemInfo.getColumn(0,"ITEM_CD"));
        				this.dsSearch.setColumn(0, "ITEM_NM", this.dsItemInfo.getColumn(0,"ITEM_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnItemSearch.click();
        			}

        		break;



        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fn_PopOpen
         * @description	: 팝업버튼 제어
         * @param		: obj - nexacro.Button
         * @param		: e - nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fn_PopOpen = function(obj,e)
        {
        	var btnName	= obj.name;

        	switch(btnName)
        	{
        		 // 검색-고객
        		case "btnCustSearch" :
        			this.fn_OpenPopCust("btnCustSearch"); break;
        		break;

        		//검색-품목
        		case "btnItemSearch" :
        			this.fn_OpenPopItem("btnItemSearch"); break;
        		break;

        		default :
        		break;
        	}
        };

        /***********************************************************************************************
         * @function	: fn_OpenPopCust
         * @description	: 고객 조회 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fn_OpenPopCust = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pCustCdValue = '';	// 품목코드
        	var pCustNmValue = '';	// 품목명

        	if(btnName == "btnCustSearch"){
        		popupId = 'custPop1';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}

        	// 팝업 호출
        	var oArg = {
        				  pCustCd		: pCustCdValue									// 고객코드
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

        };


        /***********************************************************************************************
         * @function		: fn_OpenPopItem
         * @description		: 품목 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fn_OpenPopItem = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pItemCdValue = '';	// 품목코드
        	var pItemNmValue = '';	// 품목명

        	if(btnName == "btnItemSearch"){
        		popupId = 'itemPop1';
        		pItemCdValue = this.edtItemCd_sc.value;
        		pItemNmValue = this.edtItemNm_sc.value;
        	}else{

        	}

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
        	switch(sPopupId) {
        		case "custPop1" :
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));
        		break;

        		case "itemPop1" :
        			this.edtItemCd_sc.set_value(dsObj.getColumn(0,"ITEM_CD"));
        			this.edtItemNm_sc.set_value(dsObj.getColumn(0,"ITEM_NM"));
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
         * @function		: fn_CalSetting
         * @description		: 달력 값 셋팅
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_CalSetting = function()
        {
        	var staMonthFm = this.divMonthSta.form;
        	staMonthFm.fnSetValue(this.gfnGetDate("date"));

        	var endMonthFm = this.divMonthEnd.form;
        	endMonthFm.fnSetValue(this.gfnGetDate("date"));
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
            this.stSearch00.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("oncellclick",this.grd_Main_oncellclick,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnExcel.addEventHandler("onclick",this.btnOnClick,this);
            this.edtItemCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnItemSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.staExeCorp00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnCustSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("RCPTPAY_MGT_0003.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
