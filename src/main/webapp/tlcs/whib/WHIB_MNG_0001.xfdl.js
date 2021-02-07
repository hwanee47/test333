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
            this.set_titletext("입고예정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1 dsWareiType=ds2 dsWareiSt=ds3</Col><Col id=\"QUERY_LIST\">q1=MS005 q2=WM100 q3=ST102</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getWhibMgmt</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"SERVICE_METHOD\">getWhibMgmt</Col></Row><Row><Col id=\"SVC_ID\">insertTemp</Col><Col id=\"IN_DATASET_LIST\">dsExcelUpload=dsExcelUpload dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">insertTemp</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">updateTemp</Col><Col id=\"IN_DATASET_LIST\">ds_Save=dsSaveList ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"SERVICE_METHOD\">updateTemp</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">deleteTemp</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"IN_DATASET_LIST\">ds_Delete=dsDeleteList ds1=dsSearch</Col><Col id=\"SERVICE_METHOD\">deleteTemp</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">saveWareiDecis</Col><Col id=\"IN_DATASET_LIST\">dsList=dsList:U dsSearch=dsSearch</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"SERVICE_METHOD\">saveWareiDecis</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SERVICE_METHOD\">getWhibDecisMgmt</Col><Col id=\"SVC_ID\">getWhibDecisMgmt</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">saveAndDeleteTemp</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"SERVICE_METHOD\">saveAndDeleteTemp</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col></Row><Row><Col id=\"SVC_ID\">updateTemp_1</Col><Col id=\"IN_DATASET_LIST\">ds_Save=dsSaveList ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"SERVICE_METHOD\">updateTemp</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CP_DV\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPCT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECIS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECIS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QTY_1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QTY_2\" type=\"STRING\" size=\"256\"/><Column id=\"ST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPCT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWareiType", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWareiSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelSample", this);
            obj._setContents("<ColumnInfo><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPCT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LN_NO\">1</Col><Col id=\"GDS_CD\">20200316-0001</Col><Col id=\"EXPCT_QTY\">10</Col><Col id=\"ZN_CD\">A-1</Col><Col id=\"LOC_CD\">A-1-1</Col><Col id=\"RACK_CD\">A-1-1-1</Col><Col id=\"EXPR_DATE\">20200331</Col><Col id=\"PROD_YMD\">20200101</Col><Col id=\"CUST_CD\"/></Row><Row><Col id=\"LN_NO\">2</Col><Col id=\"GDS_CD\">20200316-0001</Col><Col id=\"EXPCT_QTY\">20</Col><Col id=\"ZN_CD\">B-1</Col><Col id=\"LOC_CD\">B-1-1</Col><Col id=\"RACK_CD\">B-1-1-1</Col><Col id=\"EXPR_DATE\">20200331</Col><Col id=\"PROD_YMD\">20200101</Col><Col id=\"CUST_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPCT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECIS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECIS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QTY_1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QTY_2\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMgmtColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileUrl", this);
            obj._setContents("<ColumnInfo><Column id=\"URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"70","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("21");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","251",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("16");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","370","43","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("2");
            obj.set_text("입고예정일자");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","25","73","32","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("8");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","87","73","90","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("9");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","177","73","25","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_search01");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareiSt","797","43","130","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsWareiSt");
            obj.set_taborder("7");
            obj.set_type("dropdown");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp01","756","43","62","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("6");
            obj.set_text("상태");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00_00","6",null,"71","31",null,"8",null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("23");
            obj.set_text("업로드파일");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileName","76",null,"386","24",null,"10",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnXlsLayout","465",null,"90","23",null,"38",null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0672");
            obj.set_fittocontents("none");
            obj.set_taborder("25");
            obj.set_text("엑셀 양식");
            this.addChild(obj.name, obj);

            obj = new Button("btnxlsUpld","465",null,"90","23",null,"11",null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("26");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"30","70",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("22");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"35\" band=\"left\"/><Column size=\"201\" band=\"left\"/><Column size=\"82\"/><Column size=\"80\"/><Column size=\"91\"/><Column size=\"0\"/><Column size=\"57\"/><Column size=\"112\"/><Column size=\"126\"/><Column size=\"85\"/><Column size=\"0\"/><Column size=\"120\"/><Column size=\"119\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"136\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"에러메시지\"/><Cell col=\"3\" text=\"창고코드\"/><Cell col=\"4\" text=\"고객코드\"/><Cell col=\"5\" text=\"고객명\"/><Cell col=\"6\" text=\"주문상태\"/><Cell col=\"7\" text=\"상태\"/><Cell col=\"8\" text=\"품목코드\"/><Cell col=\"9\" text=\"품목명\"/><Cell col=\"10\" text=\"입고유형\"/><Cell col=\"11\" text=\"입고유형코드\"/><Cell col=\"12\" text=\"입고일자\"/><Cell col=\"13\" text=\"유통기한\"/><Cell col=\"14\" text=\"생산일자\"/><Cell col=\"15\" text=\"예정량\"/><Cell col=\"16\" text=\"존\"/><Cell col=\"17\" text=\"로케이션\"/><Cell col=\"18\" text=\"랙\"/><Cell col=\"19\" text=\"등록자\"/><Cell col=\"20\" text=\"등록시간\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"expr:ST =='0' ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:ST =='0' ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"2\" text=\"bind:ERR_MSG\" textAlign=\"left\" color=\"red\"/><Cell col=\"3\" text=\"bind:CENT_CD\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUST_CD\" expandshow=\"hide\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ST_NM\" combodataset=\"dsWareiSt\" combodatacol=\"CD_NM\" combocodecol=\"CD\" combopopuptype=\"none\"/><Cell col=\"7\" text=\"bind:ST_NM\" combodataset=\"dsWareiSt\" combodatacol=\"CD_NM\" combocodecol=\"CD\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:GDS_CD\" edittype=\"none\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"expr:ST =='0' ? &quot;show&quot; : &quot;hide&quot;\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:WAREI_TYPE\" combodataset=\"dsWareiType\" combocodecol=\"CD\" combodatacol=\"CD_NM\" displaytype=\"combotext\" edittype=\"combo\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:ORD_TYPE\"/><Cell col=\"12\" text=\"bind:WAREI_EXPCT_YMD\" edittype=\"date\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"13\" text=\"bind:EXPR_DATE\" edittype=\"expr:ST =='0' ? &quot;date&quot; : &quot;none&quot;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:PROD_YMD\" edittype=\"expr:ST =='0' ? &quot;date&quot; : &quot;none&quot;\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:EXPCT_QTY\" edittype=\"expr:ST =='0' ? &quot;text&quot; : &quot;none&quot;\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:ZN_CD\" edittype=\"normal\" textAlign=\"left\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"expr:ST =='0' ? &quot;show&quot; : &quot;hide&quot;\"/><Cell col=\"17\" text=\"bind:LOC_CD\" edittype=\"normal\" textAlign=\"left\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"expr:ST =='0' ? &quot;show&quot; : &quot;hide&quot;\"/><Cell col=\"18\" text=\"bind:RACK_CD\" edittype=\"normal\" textAlign=\"left\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"expr:ST =='0' ? &quot;show&quot; : &quot;hide&quot;\"/><Cell col=\"19\" text=\"bind:REG_EMP_ID\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:REG_DTIME\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" displaytype=\"normal\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"37","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("19");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"37","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("18");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcelData","4",null,"58.94%","80",null,"-104",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_binddataset("dsExcelUpload");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("27");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDecis",null,"7","68","23","-128",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T1988");
            obj.set_fittocontents("none");
            obj.set_taborder("20");
            obj.set_text("확정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp02","370","73","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("12");
            obj.set_text("품목코드");
            this.addChild(obj.name, obj);

            obj = new Button("btnItemSearch","544","73","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","201","73","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm_sc","568","73","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd_sc","454","73","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"37","68","23","178",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("신규");
            obj.set_cssclass("btn_ty01_new");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","25","43","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("0");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","88","43","161","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("WAREH_CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("WAREH_NM");
            obj.set_taborder("1");
            obj.set_type("dropdown");
            obj.set_innerdataset("gdsWarehAuthList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("28");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdTo_sc","599","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","588","43","8","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdFr_sc","455","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00_00_00","6",null,"71","31",null,"36",null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("31");
            obj.set_text("양식선택");
            this.addChild(obj.name, obj);

            obj = new Edit("edtXlsFormNm","76",null,"386","24",null,"38",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileUrl","585","766","265","23",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_value("파일url unvisible");
            obj.set_text("파일url unvisible");
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

            obj = new BindItem("item6","cboWareiSt","text","dsWaeriSt","CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtItemCd_sc","value","dsSearch","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboWareh","text","dsWaeriSt","CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtItemNm_sc","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calYmdTo_sc","value","dsSearch","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","calYmdFr_sc","value","dsSearch","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edtFileUrl","value","dsFileUrl","URL");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("WHIB_MNG_0001.xfdl","lib::lib_Form.xjs");
        this.registerScript("WHIB_MNG_0001.xfdl", function() {

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
        	this.cboWareiSt.set_index(0);
        	// 공통코드조회
        	this.gfnTransaction("commonCode");

        	this.dsSearch.setColumn(0, "FROM_DATE", this.gfnGetDate("date"));
        	this.dsSearch.setColumn(0, "TO_DATE", this.gfnGetDate("date"));

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

        		// 신규
        		case "btnAddRow" :
        			this.fnAdd();
        		break;

        		// 삭제
        		case "btnDel" :
        			this.fnDelete();
        		break;

        		// 확정
        		case "btnDecis" :
        			this.fnDecis();
        		break;

        		// 엑셀양식 관리
        		case "btnXlsLayout" :
        			this.fnOpenPopXlsCustLayout(); break;

        			//this.fnSampleDownload();
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
         * @function		: fnOpenPopXlsCustLayout
         * @description		: 고객레이아웃 팝업 호출
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopXlsCustLayout = function()
        {
        	// 조회조건 필수입력 체크
        	var cboWarehValue = this.cboWareh.value;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("창고코드를 선택해주세요.", "", function(){
        			this.cboWareh.dropdown();
        		});
        		return;
        	}

        	var edtCustCdValue = this.edtCustCd_sc.value;	//고객코드
        	var edtCustNmValue = this.edtCustNm_sc.value;	//고객명

        	if( this.gfnIsNull(edtCustCdValue) && this.gfnIsNull(edtCustNmValue) ) {
        		this.gfnAlert("고객을 선택해주세요.","", function(){
        			this.fn_OpenPopCust("btnXlsLayout");
        		});

        		return;
        	}


        	// 양식명 초기화
        	this.edtXlsFormNm.set_value("");


        	// 레이아웃 변경 팝업 호출
        	this.fnOpenPopExcel('xlsLayout');

        }


        /***********************************************************************************************
         * @function		: fn_PopOpen
         * @description		: 팝업 화면 오픈
         * @param 			: obj	- Button object
         * @param 			: e		- Button event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fn_PopOpen = function(obj,e)
        {
        	var btnName		= obj.name;

        	switch(btnName)
        	{

        		case "btnCustSearch" 	:	this.fn_OpenPopCust("btnCustSearch"); break; // 검색-고객
        		case "btnItemSearch" 	:	this.fn_OpenPopItem("btnItemSearch"); break; 	//검색-품목

        		default 		: 	break;
        	}
        };

        /***********************************************************************************************
         * @function	: fnOpenPopExcel
         * @description	: 엑셀양식 선택 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopExcel = function(pBtnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID

        	var pCustCdValue = this.edtCustCd_sc.value;	// 고객코드
        	var pCustNmValue = this.edtCustNm_sc.value;	// 고객명

        	if(pBtnName == "xlsLayout"){
        		popupId = "searchPopXlsCustLayout";
        	}

        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustCdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pIODv				: "IN"											// 입고 출고 구분 (출고 주문 접수에서도 업로드팝업 사용함.)
        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"rcpt::RCPT_DLVY_P030.xfdl", oArg, sPopupCallBack, oOption);
        }

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
        	var pCustIdValue = '';	// 품목코드
        	var pCustNmValue = '';	// 품목명

        	if(btnName == "btnCustSearch"){
        		popupId = 'custPop1';
        		pCustIdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;

        	}else if(btnName == "btnCust"){
        		popupId = 'custPop2';
        		pCustIdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}else if(btnName == "gridCust"){
        		popupId = 'custPop3';
        		pCustIdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}else if(btnName == "btnXlsLayout"){
        		popupId = 'xlsLayout';
        		pCustIdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}else if(btnName == "btnXlsUpload"){
        		popupId = 'xlsUpload';
        		pCustIdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}else if(btnName == "btnAdd"){
        		popupId = 'xlsAdd';
        		pCustIdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}

        	// 팝업 호출
        	var oArg = {
        				  pCustId		: pCustIdValue									// 고객코드
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
        	}else if(btnName == "gridGds"){
        		popupId = 'itemPop2';
        		pItemCdValue = this.edtItemCd_sc.value;
        		pItemNmValue = this.edtItemNm_sc.value;
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
         * @function		: fnOpenPopZn
         * @description		: 존 조회 팝업 호출
         * @param 			: N/A
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopZn = function()
        {
        	// 파라미터 설정
        	var popupId = 'znPop';	//팝업ID
        	var pWarehCdValue = this.dsList.getColumn(this.dsList.rowposition, "CENT_CD");

        	// 팝업 호출
        	var oArg = {
        				  pWarehCd		: pWarehCdValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P020.xfdl", oArg, sPopupCallBack, oOption);
        };


        /***********************************************************************************************
         * @function		: fnOpenPopLoc
         * @description		: 로케이션 조회 팝업 호출
         * @param 			: N/A
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopLoc = function()
        {
        	// 파라미터 설정
        	var popupId = 'locPop';	//팝업ID
        	var pWarehCdValue = this.dsList.getColumn(this.dsList.rowposition, "CENT_CD");
        	var pZnCdValue = this.dsList.getColumn(this.dsList.rowposition, "ZN_CD");

        	// 팝업 호출
        	var oArg = {
        				  pWarehCd		: pWarehCdValue
        				, pZnCd			: pZnCdValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P030.xfdl", oArg, sPopupCallBack, oOption);
        };



        /***********************************************************************************************
         * @function		: fnOpenPopRack
         * @description		: 랙 조회 팝업 호출
         * @param 			: N/A
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopRack = function()
        {
        	// 파라미터 설정
        	var popupId = 'rackPop';	//팝업ID
        	var pWarehCdValue = this.dsList.getColumn(this.dsList.rowposition, "CENT_CD");
        	var pZnCdValue = this.dsList.getColumn(this.dsList.rowposition, "ZN_CD");
        	var pLocCdValue = this.dsList.getColumn(this.dsList.rowposition, "LOC_CD");

        	// 팝업 호출
        	var oArg = {
        				  pWarehCd		: pWarehCdValue
        				, pZnCd			: pZnCdValue
        				, pLocCd		: pLocCdValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P040.xfdl", oArg, sPopupCallBack, oOption);
        };


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {
        	// 조회조건 필수입력 체크

        	var cboWarehValue = this.cboWareh.value;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("조회할 창고코드를 선택해주세요.", "", function(){
        			this.cboWareh.dropdown();
        		});
        		return;
        	}

        	// 고객 체크
        	var edtCustCd_scValue = this.edtCustCd_sc.value;
        	var edtCustNm_scValue = this.edtCustNm_sc.value;

        	if(
        		(this.gfnIsNull(edtCustCd_scValue) && !this.gfnIsNull(edtCustNm_scValue)) ||
        		(!this.gfnIsNull(edtCustCd_scValue) && this.gfnIsNull(edtCustNm_scValue))
        	){
        		this.gfnAlert("고객의 코드와 명을 정확히 입력해주세요.", "", function(){

        			if(this.gfnIsNull(edtCustCd_scValue)){
        				this.edtCustCd_sc.setFocus();
        			}else{
        				this.edtCustNm_sc.setFocus();
        			}
        		});

        		return;
        	}


        	// 품목 체크
        	var edtItemCd_scValue = this.edtItemCd_sc.value;
        	var edtItemNm_scValue = this.edtItemNm_sc.value;

        	if(
        		(this.gfnIsNull(edtItemCd_scValue) && !this.gfnIsNull(edtItemNm_scValue)) ||
        		(!this.gfnIsNull(edtItemCd_scValue) && this.gfnIsNull(edtItemNm_scValue))
        	){
        		this.gfnAlert("품목의 코드와 명을 정확히 입력해주세요.", "", function(){

        			if(this.gfnIsNull(edtItemCd_scValue)){
        				this.edtItemCd_sc.setFocus();
        			}else{
        				this.edtItemNm_sc.setFocus();
        			}
        		});

        		return;
        	}



        	this.dsList.clearData();

        	var waeriSt = this.cboWareiSt.value;
        	var gdsCd = this.edtItemCd_sc.value;

        	if(waeriSt == "0"){
        		this.dsSearch.setColumn(0, "ST", waeriSt);
        		this.dsSearch.setColumn(0, "ITEM_CD", gdsCd);
        		this.gfnTransaction("getWhibMgmt");
        	}else if(waeriSt == "1"){
        		this.dsSearch.setColumn(0, "ST", waeriSt);
        		this.dsSearch.setColumn(0, "ITEM_CD", gdsCd);
        		this.gfnTransaction("getWhibDecisMgmt");
        	}else if(waeriSt == "2"){
        		this.gfnAlert("입고확정 화면에서 확인해주세요.");
        	}

        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {


        	//하나라도 체크를 해야함
        	if(this.dsList.getRowCount() == 0) {
        	  this.gfnAlert("저장내역이 없습니다.");
        	  return;
        	}

        	var cboWarehValue = this.cboWareh.value;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("저장할 창고코드를 선택해주세요.", "", function(){
        			this.cboWareh.dropdown();
        		});
        		return;
        	}


        	//하나라도 체크를 해야함
        	if(this.dsList.getCaseCount("CHK==1") <= 0) {
        	  this.gfnAlert("1건 이상 선택해야합니다.");
        	  return;
        	}

        	//상태값이 0인 경우
        	if(this.dsList.getCaseCount("ST =='0'") <= 0) {
        	  this.gfnAlert("확정은 입고확정화면에서 확인바랍니다.");
        	  return;
        	}

        	//고객코드가 Null이면 안됨
        	if(this.dsList.getCaseCount("CHK==1 && CUST_CD==''") != 0) {
        	  this.gfnAlert("고객코드를 넣어주세요.");
        	  return;
        	}


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;


        		this.gfnTransaction("saveWareiDecis");
        	});

        };

        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 행추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function(){

        	var waeriSt = this.cboWareiSt.value;
        	var sDate = this.gfnGetDate();
        	var lnNo = nexacro.toNumber(Number(this.dsList.getMax("LN_NO")), 0);

        	var cboWarehValue = this.cboWareh.value;
        	var edtCustCdValue = this.edtCustCd_sc.value;	//고객코드
        	var edtCustNmValue = this.edtCustNm_sc.value;	//고객명


        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("입고할 창고코드를 선택해주세요.", "", function(){
        			this.cboWareh.dropdown();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtCustCdValue) && this.gfnIsNull(edtCustNmValue)){
        		this.gfnAlert("고객코드를 입력해주세요.", "", function(){

        			this.fn_OpenPopCust("btnAdd");

        		});
        		return;

        	}

        	var nRow = this.dsList.addRow();

        	//default 설정
        	this.dsList.setColumn(nRow, "CENT_CD"	, cboWarehValue);
        	this.dsList.setColumn(nRow, "CHK"	, "1");
        	this.dsList.setColumn(nRow, "WAREI_TYPE"	, "I1");
        	this.dsList.setColumn(nRow, "CUST_CD"   , edtCustCdValue);
        	this.dsList.setColumn(nRow, "CUST_NM"   , edtCustNmValue);
        	this.dsList.setColumn(nRow, "ST"	, "0");
        	this.dsList.setColumn(nRow, "ST_NM"	, "신규");
        	this.dsList.setColumn(nRow, "WAREI_EXPCT_YMD"	, sDate);

        	this.dsList.setColumn(nRow, "ORD_TYPE"	, "BI02");
        	this.dsList.setColumn(nRow, "LN_NO"	, lnNo+1 );
        	this.dsList.setColumn(nRow, "ROW_TYPE"	, "U" );
        	this.dsList.setColumn(nRow, "EXPCT_QTY"	, "0");
        	this.dsList.setColumn(nRow, "REG_EMP_ID"	, this.objApp.gv_userId);


        };

        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 행삭제.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function()
        {
           //하나라도 체크를 해야함
           if(this.dsList.getRowCount() == 0) {
              this.gfnAlert("조회내역이 없습니다.");
              return;
           }

           //하나라도 체크를 해야함
           if(this.dsList.getCaseCount("CHK==1") <= 0) {
              this.gfnAlert("1건 이상 선택해야합니다.");
              return;
           }

           //상태값이 0인 경우
           if(this.dsList.getCaseCount("CHK==1 && ST =='0'") <= 0) {
              this.gfnAlert("확정은 입고확정화면에서 확인바랍니다.");
              return;
           }

           this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;


        		this.dsDeleteList.clear();
        		   this.grd_Main.set_enableredraw(false); // 그리드 새로고침 하지 않음

        		   this.dsList.set_filterstr("CHK==1");
        		   this.dsDeleteList.copyData(this.dsList, true);
        		   this.dsList.filter("");

        		   this.grd_Main.set_enableredraw(true); // 그리드 새로고침 하지 않음

        		   // 트랜잭션 호출 (저장)
        		   this.gfnTransaction("deleteTemp");
        	});




        };

        /***********************************************************************************************
         * @function	: fnDecis
         * @description	: 확정.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDecis = function() {

           //하나라도 체크를 해야함
           if(this.dsList.getRowCount() == 0) {
              this.gfnAlert("조회내역이 없습니다.");
              return;
           }

           //하나라도 체크를 해야함
           if(this.dsList.getCaseCount("CHK==1") <= 0) {
              this.gfnAlert("1건 이상 선택해야합니다.");
              return;
           }

           //상태값이 0인 경우
           if(this.dsList.getCaseCount("ST =='0'") <= 0) {
              this.gfnAlert("확정은 입고확정화면에서 확인바랍니다.");
              return;
           }

           //수량이 Null이면 안됨
           if(this.dsList.getCaseCount("CHK==1 && EXPCT_QTY=='0'") != 0) {
              this.gfnAlert("수량을 넣어주세요.");
              return;
           }

           //고객코드가 Null이면 안됨
           if(this.dsList.getCaseCount("CHK==1 && CUST_CD==''") != 0) {
              this.gfnAlert("고객코드를 넣어주세요.");
              return;
           }

           //품목코드가 Null이면 안됨
           if(this.dsList.getCaseCount("CHK==1 && GDS_CD==''") != 0) {
              this.gfnAlert("품목코드를 넣어주세요.");
              return;
           }

           if(!this.gfnConfirm("확정하시겠습니까?")) {
              return;
           }

           this.dsSaveList.clear();
           this.grd_Main.set_enableredraw(false); // 그리드 새로고침 하지 않음

           this.dsList.set_filterstr("CHK==1");
           this.dsSaveList.copyData(this.dsList, true);
           this.dsList.filter("");

           this.grd_Main.set_enableredraw(true); // 그리드 새로고침 하지 않음

           // 트랜잭션 호출 (저장)
           this.gfnTransaction("updateTemp_1");
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
        	}else if(svcID == "saveWareiDecis"){
        		this.gfnTransaction("saveAndDeleteTemp");

        	}else if(svcID == "updateTemp_1"){
        		this.gfnTransaction("saveWareiDecis");
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :
        			// 컴포넌트 초기화
        			// 상태값
        			this.cboWareiSt.set_index(0);


        			// 주문상태 (신규)
        			this.dsWareiSt.filter("CD == '0'");

        			// 입고유형 (일반 , 반품)
        			this.dsWareiType.filter("CD == 'I1' || CD == 'I2'");

        		break;
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
        				this.btnCustSearch.click();
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
        				this.btnItemSearch.click();
        			}

        		break;


        		case "saveAndDeleteTemp":
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

        	switch(sPopupId) {

        		case "custPop1":

        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));
        		break;

        		case "custPop2":
        			for(var i=0; i<this.dsTemp.getRowCount(); i++){
        				this.dsTemp.setColumn(i, "CUST_CD", dsObj.getColumn(0,"CUST_ID"));
        				this.dsTemp.setColumn(i, "CUST_NM", dsObj.getColumn(0,"CUST_NM"));
        			}

        			//Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			this.gfnTransaction("saveTempInfo");
        		break;

        		case "custPop3":
        			this.dsList.setColumn(this.dsList.rowposition, "CUST_CD", dsObj.getColumn(0,"CUST_ID"));
        			this.dsList.setColumn(this.dsList.rowposition, "CUST_NM", dsObj.getColumn(0,"CUST_NM"));
        		break;

        		case "itemPop1":
        			this.edtItemCd_sc.set_value(dsObj.getColumn(0,"ITEM_CD"));
        			this.edtItemNm_sc.set_value(dsObj.getColumn(0,"ITEM_NM"));
        		break;

        		case "itemPop2":
        			this.dsList.setColumn(this.dsList.rowposition, "GDS_CD", dsObj.getColumn(0,"ITEM_CD"));
        			this.dsList.setColumn(this.dsList.rowposition, "GDS_NM", dsObj.getColumn(0,"ITEM_NM"));
        		break;


        		case "xlsLayout":
        			// Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			// 레이아웃 변경 팝업 호출
        			this.fnOpenPopExcel('xlsLayout');
        		break;


        		case "xlsUpload":
        			// Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));





        			this.fnExcelImport();

        		break;


        		case "xlsAdd":
        			// Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			this.fnAdd();
        		break;


        		case "searchPopXlsCustLayout":

        			this.dsExcelUpload.clear();

        			this.dsExcelUpload.copyData(dsObj);
        			this.dsExcelUpload2.copyData(dsObj);

        		break;

        		// 존 팝업에서 선택
        		case "znPop":
        			this.dsList.setColumn(this.dsList.rowposition, "ZN_CD", dsObj.getColumn(0,"ZN_CD"));
        		break;

        		// 로케이션 팝업에서 선택
        		case "locPop":
        			this.dsList.setColumn(this.dsList.rowposition, "ZN_CD", dsObj.getColumn(0,"ZN_CD"));
        			this.dsList.setColumn(this.dsList.rowposition, "LOC_CD", dsObj.getColumn(0,"LOC_CD"));
        		break;

        		// 랙 팝업에서 선택
        		case "rackPop":
        			this.dsList.setColumn(this.dsList.rowposition, "ZN_CD", dsObj.getColumn(0,"ZN_CD"));
        			this.dsList.setColumn(this.dsList.rowposition, "LOC_CD", dsObj.getColumn(0,"LOC_CD"));
        			this.dsList.setColumn(this.dsList.rowposition, "RACK_CD", dsObj.getColumn(0,"RACK_CD"));
        		break;

        		default :
        		break;
        	}

        };

        /***********************************************************************************************
         * @function	: fnSampleDownload,   fnXlsUpld
         * @description	: 엑셀.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        //엑셀샘플
        this.fnSampleDownload = function(obj,e) {
        	var sDateTime = this.gfnGetDate("time");
        	this.gfnExcelExport(this.grdExcelData, "sheet1", "ExcelSample"+sDateTime);
        };

        //엑셀업로드
        this.fnXlsUpld = function() {

        	this.edtFileName.set_value("");

        	var cboWarehValue = this.cboWareh.value;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("입고할 창고코드를 선택해주세요.", "", function(){
        			this.cboWareh.dropdown();
        		});
        		return;
        	}

        	var edtCustCdValue = this.edtCustCd_sc.value;	//고객코드
        	var edtCustNmValue = this.edtCustNm_sc.value;	//고객명

        	if(this.gfnIsNull(edtCustCdValue) && this.gfnIsNull(edtCustNmValue)){
        		this.gfnAlert("고객을 선택해주세요.", "", function(){

        			this.fn_OpenPopCust("btnXlsUpload");

        		});
        		return;
        	}



        	this.fnExcelImport();


        };


        this.fnExcelImport = function ()
        {
        	// 임포트전 형식(고객레이아웃)이 지정되지 않은경우 에러처리.
        	var edtXlsFormNmValue = this.edtXlsFormNm.value;

        	if( this.gfnIsNull(edtXlsFormNmValue) ){
        		this.gfnAlert("양식(고객레이아웃)을 먼저 선택해주세요.", "", function(){
        			this.fnOpenPopXlsCustLayout();
        		});

        		return;
        	}




        	this.dsList.clearData();

        	//this.dsExcelUpload.clear();
        	this.dsExcelUpload.copyData(this.dsExcelUpload2);
        	this.gfnExcelImportCustom("dsExcelUpload", "sheet1", "A2", "fnImportCallback", "importExcel", this);

        }


        this.fnImportCallback = function (sImportId)
        {
        	// 업로드된 데이터 가공
        	this.fnManuFacturingExcelUploadData();
        };

        /***********************************************************************************************
         * @function		: fnManuFacturingExcelUploadData
         * @description		: 업로드된 데이터 가공
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnManuFacturingExcelUploadData = function()
        {
        	this.grdExcelData.createFormat();



        	// 공통 데이터 처리.
        	var cboWarehValue = this.cboWareh.value;		// 창고코드
        	var edtCustCdValue = this.edtCustCd_sc.value;	// 고객코드
        	this.dsExcelUpload.addColumn("CENT_CD", "STRING");
        	this.dsExcelUpload.addColumn("CUST_CD", "STRING");
        	this.dsExcelUpload.addColumn("WAREI_EXPCT_NO", "STRING");
        	this.dsExcelUpload.addColumn("LN_NO", "STRING");



        	for(var i=0; i<this.dsExcelUpload.rowcount; i++){

        		this.dsExcelUpload.setColumn(i, "CENT_CD", cboWarehValue);
        		this.dsExcelUpload.setColumn(i, "CUST_CD", edtCustCdValue);

        	}



        	// 저장 처리.
        	this.gfnTransaction("insertTemp");


        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
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
        		case	'edtItemNm_sc' : this.edtItemCd_sc.set_value(); break;
        		case	'edtItemCd_sc' : this.edtItemNm_sc.set_value(); break;
        		case	'edtCustCd_sc' : this.edtCustNm_sc.set_value(); break;
        		case	'edtCustNm_sc' : this.edtCustCd_sc.set_value(); break;
        	}
        };


        /***********************************************************************************************
         * @function	: gridMain_onheadclick
         * @description	: 그리드 헤더 클릭 이벤트.
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.grd_Main_onheadclick = function(obj,e)
        {
        	var strType = obj.getCellProperty("head", e.cell, "edittype");
        	if (strType == "checkbox") {
        		// checkBox Event
        		this.gfnSetGridCheckAll(obj, e);
        	}else {
        		this.gfnGridSort(obj, e);
        	}
        };

        /***********************************************************************************************
         * @function      : fn_CalSetting
         * @description      : 달력 값 셋팅
         * @return         : N/A
        /***********************************************************************************************/
        this.fn_CalSetting = function()
        {
           var dateFm = this.divDate.form;

           dateFm.fnSetCalFromBindItem("dsSearch", "TO_DATE");
           dateFm.fnSetCalToBindItem("dsSearch", "FROM_DATE");

           dateFm.fnSetFromDate(this.gfnGetDate("date").substr(0, 8));
           dateFm.fnSetToDate(this.gfnGetDate("date").substr(0, 8));
        };
        this.grd_Main_onexpandup = function(obj,e)
        {
        	var bindText = obj.getCellProperty("body", e.cell, "text");

        	// cell 컬럼명 추출.
        	var column = this.gfnNvl(bindText, "").replace("bind:", "");

        	switch(column)
        	{
        		// 창고코드
        		case "CUST_CD" :
        			this.fn_OpenPopCust("gridCust");
        		break;

        		// 품목코드
        		case "GDS_CD" :
        			this.fn_OpenPopItem("gridGds");
        		break;


        		// 존
        		case "ZN_CD" :
        			this.fnOpenPopZn();
        		break;

        		// 로케이션
        		case "LOC_CD" :
        			this.fnOpenPopLoc();
        		break;

        		// 랙
        		case "RACK_CD" :
        			this.fnOpenPopRack();
        		break;

        		default :
        		break;
        	}
        };


        this.dsFileUrl_oncolumnchanged = function(obj,e)
        {
        	var fileUrl = this.dsFileUrl.getColumn(0, "URL");


        	this.edtFileName.set_value(fileUrl.split("/")[2]);
        };


        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	// 고객 변경시 양식&업로드파일 초기화
        	if(e.columnid == "CUST_CD" || e.columnid == "CUST_NM"){
        		this.edtXlsFormNm.set_value("");
        		this.edtFileName.set_value("");
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
            this.staExeCorp.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staExeCorp00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustCd_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.btnCustSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.staExeCorp01.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.btnXlsLayout.addEventHandler("onclick",this.btnOnClick,this);
            this.btnxlsUpld.addEventHandler("onclick",this.btnOnClick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grd_Main_onheadclick,this);
            this.grd_Main.addEventHandler("onexpandup",this.grd_Main_onexpandup,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDecis.addEventHandler("onclick",this.btnOnClick,this);
            this.btnItemSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.edtItemNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemNm_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.edtItemCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemCd_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.btnAddRow.addEventHandler("onclick",this.btnOnClick,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.edtFileUrl.addEventHandler("onchanged",this.edtFileUrl_onchanged,this);
            this.edtFileUrl.addEventHandler("canchange",this.edtFileUrl_canchange,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsFileUrl.addEventHandler("oncolumnchanged",this.dsFileUrl_oncolumnchanged,this);
        };

        this.loadIncludeScript("WHIB_MNG_0001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
