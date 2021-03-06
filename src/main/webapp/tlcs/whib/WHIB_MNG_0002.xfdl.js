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
            this.set_titletext("입고확정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1 dsWareiType=ds2 dsWareiSt=ds3 dsExprDateStd=ds4</Col><Col id=\"QUERY_LIST\">q1=MS005 q2=WM100 q3=ST102 q4=WM103</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">deleteWareiInfo</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"IN_DATASET_LIST\">ds_Delete=dsDeleteList</Col><Col id=\"SERVICE_METHOD\">deleteWareiInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">saveWareiDecis</Col><Col id=\"IN_DATASET_LIST\">ds_Decis=dsDecis:U</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"SERVICE_METHOD\">saveStcDecis</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsResult=dsResult</Col></Row><Row><Col id=\"SERVICE_METHOD\">getWhibDecisMgmt</Col><Col id=\"SVC_ID\">getWhibDecisMgmt</Col><Col id=\"SERVICE_BEANNAME\">whibMgmtService</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch ds2=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList dsItemBarcodeList=dsItemBarcodeList</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CP_DV\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPCT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECIS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECIS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QTY_1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QTY_2\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STC_DV_LOT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EFCTV_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE_STD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_VDT_PRMT_PERIOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWareiType", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWareiSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDecis", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_EXPCT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPCT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECIS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"DECIS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CONT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_1\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_2\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_3\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_4\" type=\"STRING\" size=\"256\"/><Column id=\"LOT_DV_VAL_5\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QTY_1\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_QTY_2\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"PROD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"STC_DV_LOT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EFCTV_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_DATE_STD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPR_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_VDT_PRMT_PERIOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsExprDateStd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemBarcodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_BARCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"70","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("13");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("15");
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
            obj.set_taborder("5");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","87","73","90","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","177","73","25","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_search01");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareiSt","797","43","130","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsWareiSt");
            obj.set_taborder("4");
            obj.set_type("dropdown");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp01","756","43","62","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("3");
            obj.set_text("상태");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"37","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("14");
            obj.set_text("취소");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"37","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T1988");
            obj.set_fittocontents("none");
            obj.set_taborder("16");
            obj.set_text("확정");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp02","370","73","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("9");
            obj.set_text("품목코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd_sc","454","73","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnItemSearch","544","73","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:30",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("17");
            obj.set_cellsizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"35\" band=\"left\"/><Column size=\"232\" band=\"left\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"91\"/><Column size=\"59\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"68\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"49\"/><Column size=\"48\"/><Column size=\"76\"/><Column size=\"56\"/><Column size=\"64\"/><Column size=\"40\"/><Column size=\"128\"/><Column size=\"98\"/><Column size=\"53\"/><Column size=\"55\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"에러메세지\"/><Cell col=\"3\" text=\"창고코드\"/><Cell col=\"4\" text=\"고객코드\"/><Cell col=\"5\" text=\"고객명\"/><Cell col=\"6\" text=\"상태\"/><Cell col=\"7\" text=\"품목코드\"/><Cell col=\"8\" text=\"품목명\"/><Cell col=\"9\" text=\"입고유형\"/><Cell col=\"10\" text=\"입고일자\"/><Cell col=\"11\" text=\"관리기준\"/><Cell col=\"12\" text=\"유효일자\"/><Cell col=\"13\" text=\"유통기한\"/><Cell col=\"14\" text=\"생산일자\"/><Cell col=\"15\" text=\"예정량\"/><Cell col=\"16\" text=\"확정량\"/><Cell col=\"17\" text=\"확정일자\"/><Cell col=\"18\" text=\"존\"/><Cell col=\"19\" text=\"로케이션\"/><Cell col=\"20\" text=\"랙\"/><Cell col=\"21\" text=\"비고\"/><Cell col=\"22\" text=\"입고번호\"/><Cell col=\"23\" text=\"입고행번\"/><Cell col=\"24\" text=\"등록자\"/><Cell col=\"25\" text=\"등록시간\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:CHK\" displaytype=\"expr:ST =='1' ? &quot;checkboxcontrol&quot; : &quot;none&quot;\" edittype=\"expr:ST =='1' ? &quot;checkbox&quot; : &quot;none&quot;\"/><Cell col=\"2\" color=\"red\" textAlign=\"left\" text=\"bind:RSN_CONT\"/><Cell col=\"3\" text=\"bind:CENT_CD\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUST_CD\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ST_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:GDS_CD\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:WAREI_TYPE\" displaytype=\"combotext\" combodataset=\"dsWareiType\" combodatacol=\"CD_NM\" combocodecol=\"CD\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:DECIS_YMD\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\" edittype=\"date\"/><Cell col=\"11\" text=\"bind:EXPR_DATE_STD\" displaytype=\"combotext\" combodataset=\"dsExprDateStd\" combodatacol=\"CD_NM\" combocodecol=\"CD\" textAlign=\"center\"/><Cell col=\"12\" text=\"bind:EFCTV_YMD\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\" edittype=\"none\"/><Cell col=\"13\" text=\"bind:EXPR_DATE\" displaytype=\"expr:EXPR_DATE==&quot;&quot;?&quot;normal&quot;:&quot;date&quot;\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\" edittype=\"date\" maskeditformat=\"####-##-## ##:##:##\"/><Cell col=\"14\" text=\"bind:PROD_YMD\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"expr:PROD_YMD==&quot;&quot;?&quot;normal&quot;:&quot;date&quot;\" textAlign=\"center\" edittype=\"date\"/><Cell col=\"15\" text=\"bind:EXPCT_QTY\" textAlign=\"right\"/><Cell col=\"16\" textAlign=\"right\" edittype=\"expr:ST =='1' ? &quot;text&quot; : &quot;none&quot;\" text=\"bind:DECIS_QTY\"/><Cell col=\"17\" text=\"bind:DECIS_YMD\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"expr:DECIS_YMD == &quot;&quot; ? &quot;normal&quot; : &quot;date&quot;\" textAlign=\"center\"/><Cell col=\"18\" text=\"bind:ZN_CD\" textAlign=\"left\" edittype=\"expr:ST =='1' ? &quot;text&quot; : &quot;none&quot;\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"show\"/><Cell col=\"19\" text=\"bind:LOC_CD\" textAlign=\"left\" edittype=\"expr:ST =='1' ? &quot;text&quot; : &quot;none&quot;\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"show\"/><Cell col=\"20\" text=\"bind:RACK_CD\" textAlign=\"left\" edittype=\"expr:ST =='1' ? &quot;text&quot; : &quot;none&quot;\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"show\"/><Cell col=\"21\" text=\"bind:REMARK\" edittype=\"expr:ST =='1' ? &quot;text&quot; : &quot;none&quot;\"/><Cell col=\"22\" text=\"bind:WAREI_EXPCT_NO\" textAlign=\"left\"/><Cell col=\"23\" text=\"bind:LN_NO\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:REG_EMP_ID\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:REG_DTIME\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"normal\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.rowcount\"/><Cell col=\"1\" colspan=\"2\"/><Cell col=\"3\" colspan=\"12\"/><Cell col=\"15\" text=\"expr:dataset.getSum('parseInt(EXPCT_QTY)')\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"16\" text=\"expr:dataset.getSum('parseInt(DECIS_QTY)')\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"17\" colspan=\"9\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","201","73","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm_sc","568","73","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("inp_ty01");
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
            obj.set_taborder("18");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdFr_sc","455","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","588","43","8","23",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdTo_sc","599","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle",null,"105","91","31","171",null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("24");
            obj.set_text("바코드스캔");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBarcodeScan",null,"109","159","23","30",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("inp_ty01");
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

            obj = new BindItem("item1","edtItemCd_sc","value","dsSearch","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboWareiSt","text","dsWaeriSt","CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboWareh","text","dsWaeriSt","CD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtItemNm_sc","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","calYmdFr_sc","value","dsSearch","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","calYmdTo_sc","value","dsSearch","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("WHIB_MNG_0002.xfdl","lib::lib_Form.xjs");
        this.registerScript("WHIB_MNG_0002.xfdl", function() {

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
        	this.cboWareiSt.set_index(1);
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

        		// 삭제
        		case "btnDel" :
        			this.fnDelete();
        		break;

        		// 확정
        		case "btnSave" :
        			this.fnSave();
        		break;

        		default :
        		break;
        	}
        };

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

        		case "btnCustSearch" :	this.fn_OpenPopCust("btnCustSearch"); break; // 검색-고객
        		case "btnItemSearch" 	:	this.fn_OpenPopItem("btnItemSearch"); break; 	//검색-품목

        		default 		: 	break;
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
        	var pCustIdValue = '';	// 품목코드
        	var pCustNmValue = '';	// 품목명

        	if(btnName == "btnCustSearch"){
        		popupId = 'custPop1';
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
         * @function	: fnSearch
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {
        	// 조회조건 필수입력 체크

        	// 창고코드 체크
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


        	var waeriSt = this.cboWareiSt.value;

        	if(waeriSt == "0"){
        		this.gfnAlert("입고예정 화면에서 확인해주세요.");
        	}else{
        		this.dsSearch.setColumn(0, "ST", waeriSt);
        		this.gfnTransaction("getWhibDecisMgmt");
        	}

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

           //상태값이 2인 경우
           if(this.dsList.getCaseCount("CHK==1 && ST =='1'") <= 0) {
              this.gfnAlert("취소불가능합니다");
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


        	   this.gfnTransaction("deleteWareiInfo");
        	});





        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 확정.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

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

           //상태값이 1인 경우
           if(this.dsList.getCaseCount("ST =='1'") <= 0) {
              this.gfnAlert("이미 확정했습니다.");
              return;
           }

           //예정량과 확정량이 다르면 비고란 입력해야함
           if(this.dsList.getCaseCount("CHK==1 && EXPCT_QTY!=DECIS_QTY && REMARK==''" ) > 0) {
              this.gfnAlert("예정량과 확정량이 다를 경우 비고란에 기재해주세요.");
              return;
           }

           if(this.dsList.getCaseCount("CHK==1 && DECIS_QTY<0" ) > 0) {
              this.gfnAlert("확정량이 0이상 기재해주세요.");
              return;
           }

        	this.dsDecis.clearData();



        	this.gfnCustomConfirm("확정하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		for(var i=this.dsList.getRowCount() -1; i>=0; i--) {
        			if(this.dsList.getColumn(i, "CHK") == '1') {
        				var addrow = this.dsDecis.addRow();
        				this.dsDecis.copyRow(addrow, this.dsList, i);
        			}
        		}

        		for(var i=0; i<this.dsDecis.getRowCount(); i++){

        			if(this.dsDecis.getColumn(i, "WAREI_TYPE") == 'I1') {
        				this.dsDecis.setColumn(i, "TRANSACTION_TYPE", 'T1');
        			}

        			if(this.dsDecis.getColumn(i, "WAREI_TYPE") == 'I2'){
        				this.dsDecis.setColumn(i, "TRANSACTION_TYPE", 'T5');
        			}

        			if(this.dsDecis.getColumn(i, "WAREI_TYPE") == 'I3'){
        				this.dsDecis.setColumn(i, "TRANSACTION_TYPE", 'T12');
        			}
        		}

        		this.gfnTransaction("saveWareiDecis");
        	});


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
        		this.gfnAlert(this.dsResult.getColumn(0,"RESULT_MSG"));

        		this.fnSearch();
        	}else if(svcID == "deleteWareiInfo"){
        		this.fnSearch();
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :
        			// 컴포넌트 초기화

        			// 주문상태 (입고예정, 입고확정)
        			this.dsWareiSt.filter("CD == '1' || CD == '2'");

        			// 상태값
        			this.cboWareiSt.set_index(0);
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


        		case "saveWareiDecis":
        			this.grd_Main.setCellProperty("head", this.grd_Main.getBindCellIndex("body", "CHK"), "text", '0');
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

        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));
        		break;

        		case "itemPop1":

        			this.edtItemCd_sc.set_value(dsObj.getColumn(0,"ITEM_CD"));
        			this.edtItemNm_sc.set_value(dsObj.getColumn(0,"ITEM_NM"));
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
        			case	'edtBarcodeScan' : this.fnBarcodeScan(); break;
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
        		case	'edtItemCd_sc' : this.edtItemNm_sc.set_value(); break;
        		case	'edtItemNm_sc' : this.edtItemCd_sc.set_value(); break;

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



        this.dsList_oncolumnchanged = function(obj,e)
        {
        	// 입고일자 변경시 유효일자 변경 (입고일자 + 입고제한일자)
        	if(e.columnid == "DECIS_YMD"){

        		var wareiVdtPrmtPeriod = this.dsList.getColumn(e.row, "WAREI_VDT_PRMT_PERIOD");
        		this.dsList.setColumn(e.row, "EFCTV_YMD", this.gfnAddDate(e.newvalue, wareiVdtPrmtPeriod));

        	}
        	else if(e.columnid == "EXPR_DATE"){

        		this.dsList.setColumn(e.row, "EXPR_YMD", e.newvalue);

        	}
        };

        this.grd_Main_onexpandup = function(obj,e)
        {
        	var bindText = obj.getCellProperty("body", e.cell, "text");

        	// cell 컬럼명 추출.
        	var column = this.gfnNvl(bindText, "").replace("bind:", "");

        	switch(column)
        	{

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
         * @function		: fnBarcodeScan
         * @description		: 바코드 스캔
         * @param 			: N/A
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnBarcodeScan = function()
        {
        	var scanValue = this.edtBarcodeScan.value;

        	// 바코드스캔값으로 입고예정정보가 있는지 확인
        	if(this.dsItemBarcodeList.findRow("ITEM_BARCODE", scanValue) == -1){
        		var errMsg = "해당 바코드에 맞는 입고예정정보가 존재하지 않습니다.";
        		errMsg += "\n[스캔 바코드] = "+scanValue;
        		this.gfnAlert(errMsg);
        		this.edtBarcodeScan.set_value("");
        		return;
        	}


        	this.edtBarcodeScan.set_value("");

        	// 바코드스캔결과로 입고예정정보에서 가장 첫번째행 카운트 1증가
        	this.fnCountDecisQty(scanValue);
        }


        this.fnCountDecisQty = function(scanValue)
        {
        	this.dsItemBarcodeList.filter("ITEM_BARCODE == '"+scanValue+"'");

        	var shipperIdValue = "";
        	var itemCdValue = "";
        	var nFindRow = "";

        	for(var i=0; i<this.dsItemBarcodeList.rowcount; i++){
        		shipperIdValue = this.dsItemBarcodeList.getColumn(i, "SHIPPER_ID");
        		itemCdValue = this.dsItemBarcodeList.getColumn(i, "ITEM_CD");

        		// 스캔된 바코드에 맞는 입고예정정보 중 확정량이 예정량과 다른 첫번째행 카운트 1증가
        		nFindRow = this.dsList.findRowExpr("CUST_CD == '"+shipperIdValue+"' && GDS_CD == '"+itemCdValue+"' && EXPCT_QTY != DECIS_QTY");


        		var decisQty = nexacro.toNumber(this.dsList.getColumn(nFindRow, "DECIS_QTY"));

        		this.dsList.setColumn(nFindRow, "CHK", "1");
        		this.dsList.setColumn(nFindRow, "DECIS_QTY", decisQty+1);

        		return;

        	}
        }
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
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.edtItemCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemCd_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.btnItemSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.grd_Main.addEventHandler("onheadclick",this.grd_Main_onheadclick,this);
            this.grd_Main.addEventHandler("onexpandup",this.grd_Main_onexpandup,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.edtItemNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemNm_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.edtBarcodeScan.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };

        this.loadIncludeScript("WHIB_MNG_0002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
