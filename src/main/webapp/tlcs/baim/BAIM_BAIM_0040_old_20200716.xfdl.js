(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_BAIM_0040");
            this.set_titletext("기업고객등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1 dsB2c=ds2</Col><Col id=\"QUERY_LIST\">q1=MS005 q2=CS033</Col></Row><Row><Col id=\"SVC_ID\">saveEntrpCustInfo</Col><Col id=\"SERVICE_BEANNAME\">baimEntrpCustMgmtService</Col><Col id=\"SERVICE_METHOD\">saveEntrpCustInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsDetail:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getEntrpCustInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsDetail=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"QUERY_LIST\">q1=baimEntrpCustMgmtService.getEntrpCustInfo</Col></Row></Rows>");
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
            obj = new Static("sta09","21","1","289","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("기준정보관리 > 기업고객등록");
            obj.set_fittocontents("width");
            obj.set_cssclass("top_title_route01");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","0","sta09:0",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"7","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","stSearch:3","981","182",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00","0","89",null,"42","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","0","48",null,"42","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_01","0","130",null,"49","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01","0","48","68","83",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("23");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtZipNo","70","57","72","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01_req");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr","142","57","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_search01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","70","98","276","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00","349","48","68","42",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("29");
            obj.set_text("거래구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboB2c","419","57","119","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("18");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsB2c");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_01_00","541","48","68","42",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("24");
            obj.set_text("거래\r\n시작일자");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("calDealStartYmd","611","57","111","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("cal_ty01");
            obj.set_value("20200402");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01_00","727","48","68","42",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("25");
            obj.set_text("거래\r\n종료일자");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("calDealEndYmd","798","57","123","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_01","0","130","68","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("26");
            obj.set_text("주문접수\r\n거래처");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtOrdRcptDlcmCd","70","143","99","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchEntrpCust2","169","143","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_search01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtOrdRcptDlcmNm","195","143","151","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta06","501","100","30","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("36");
            obj.set_text("BOX");
            obj.set_color("#636883");
            obj.set_font("bold 14px/normal \"Noto Sans Korean Bold\"");
            obj.set_fittocontents("width");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00_00","349","130","68","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("31");
            obj.set_text("특이사항");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCaution","419","143","544","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtAddr","167","57","179","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01_req");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_02","0","0",null,"49","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","334","12","162","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_02","499","0","68","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("37");
            obj.set_text("회사구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboCpDv","569","12","117","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsCpDv");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_02_00","0","0","68","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("38");
            obj.set_text("사업자\r\n등록번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskEntrpRegNo","70","12","99","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_format("###-##-#####");
            obj.set_limitbymask("both");
            obj.set_type("string");
            obj.set_cssclass("inp_ty01_req");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01","349","89","68","42",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("27");
            obj.set_text("월예상\r\n출하량");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskMonFcstPickupQty","419","99","78","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_limitbymask("decimal");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01_01","541","89","68","42",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("28");
            obj.set_text("월예상\r\n매출액");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskMonFcstSelAmt","611","99","113","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_limitbymask("decimal");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01_00_00","727","89","68","42",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("30");
            obj.set_text("사고\r\n보상한도");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskMonFcstSelAmt00","798","99","123","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_limitbymask("decimal");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001","172","0","68","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("21");
            obj.set_text("기업고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustId","242","12","90","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_maxlength("8");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","689","0","68","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("22");
            obj.set_text("대표\r\n전화번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboTelNo1","767","12","61","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("8");
            obj.set_text("010");
            obj.set_index("18");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","829","12","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtTelNo2","846","12","49","23",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("9");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","894","12","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtTelNo3","910","12","49","23",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("10");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"7","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("6");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","45","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("8");
            obj.set_text("기업고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","86","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchEntrpCust1","176","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","200","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSendCust","3","265","140","33",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_text("발송고객등록");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopRegCntr","146","265","140","33",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("계약등록");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("12");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div01.form.mskEntrpRegNo","value","dsDetail","ENTRP_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div01.form.cboCpDv","value","dsDetail","CP_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div01.form.edtCustId","value","dsDetail","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div01.form.edtCustNm","value","dsDetail","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div01.form.edtZipNo","value","dsDetail","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div01.form.edtAddr","value","dsDetail","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div01.form.edtDetailAddr","value","dsDetail","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div01.form.cboTelNo1","value","dsDetail","TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div01.form.edtTelNo2","value","dsDetail","TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div01.form.edtTelNo3","value","dsDetail","TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div01.form.calDealStartYmd","value","dsDetail","DEAL_START_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div01.form.calDealEndYmd","value","dsDetail","DEAL_END_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div01.form.edtOrdRcptDlcmCd","value","dsDetail","ORD_RCPT_DLCM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div01.form.cboB2c","value","dsDetail","B2C");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div01.form.edtCaution","value","dsDetail","CAUTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div01.form.mskMonFcstPickupQty","value","dsDetail","MON_FCST_PICKUP_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div01.form.mskMonFcstSelAmt","value","dsDetail","MON_FCST_SEL_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div01.form.mskMonFcstSelAmt00","value","dsDetail","ACDT_RWD_LMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div01.form.edtOrdRcptDlcmNm","value","dsDetail","ORD_RCPT_DLCM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0040_old_20200716.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0040_old_20200716.xfdl", function() {
        /**
        *  기업 고객 등록
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_0040.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.02.12
        *  @Desction        기업 고객 등록
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.12		Kim Jin Hwan			최초 생성
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

        // 폼 접근 변수
        var divFm = this.div01.form;


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
        	this.fnAdd();

        	// 공통코드조회
        	this.gfnTransaction("commonCode");
        };


        this.fnAdd = function(obj,e)
        {
        	// 정보 데이터셋
        	this.dsDetail.clearData();
        	this.dsDetail.assign(this.dsDetail_empty);
        	this.dsDetail.addRow();

        	// 고객번호 활성화
        	divFm.edtCustId.set_enable(true);

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
        		case "btnAdd" :
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

        	var edtCustId_scValue = this.edtCustId_sc.value;			// 기업고객ID

        	// 조회조건 필수입력 체크
        	if(this.gfnIsNull(this.gfnTrim(edtCustId_scValue)) ){
        		this.gfnAlert("기업고객번호를 입력해주세요.");
        		this.edtCustId_sc.setFocus();
        		return;
        	}

        	this.gfnTransaction("getEntrpCustInfo");

        };



        /***********************************************************************************************
         * @function	: fnSearchAfterSave
         * @description	: 점소 저장후 정보 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchAfterSave = function(){

        	// 조회조건 init
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	this.dsSearch.setColumn(0, "CUST_ID", divFm.edtCustId.value);	// 고객번호

        	this.gfnTransaction("getEntrpCustInfo");
        }


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	var dsRowType = this.dsDetail.getRowType(0);	// 데이터셋 상태
        	if(dsRowType == Dataset.ROWTYPE_EMPTY || dsRowType == Dataset.ROWTYPE_NORMAL){
        		this.gfnAlert("저장할 내용이 없습니다.");
        		return;
        	}

        	var cboCpDvValue = divFm.cboCpDv.value;				// 회사구분
        	var mskEntrpRegNoValue = divFm.mskEntrpRegNo.value;	// 사업자등록번호
        	var edtCustIdValue = divFm.edtCustId.value;			// 기업고객ID
        	var edtCustNmValue = divFm.edtCustNm.value;			// 기업고객명
        	var cboB2cValue = divFm.cboB2c.value;				// 거래구분B2C
        	var edtZipNoValue = divFm.edtZipNo.value;			// 우편번호
        	var edtAddrValue = divFm.edtAddr.value;				// 주소
        	var edtDetailAddrValue = divFm.edtDetailAddr.value; // 상세주소
        	var edtOrdRcptDlcmCdValue = divFm.edtOrdRcptDlcmCd.value; // 주문접수거래처코드
        	var edtOrdRcptDlcmNmValue = divFm.edtOrdRcptDlcmNm.value; // 주문접수거래처명

        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	// 회사구분
        	if(this.gfnIsNull(this.gfnTrim(cboCpDvValue)) ){
        		this.gfnAlert("회사구분 선택해주세요.");
        		divFm.cboCpDv.setFocus();
        		return;
        	}
        	// 사업자등록번호
        	if(this.gfnIsNull(this.gfnTrim(mskEntrpRegNoValue)) ){
        		this.gfnAlert("사업자 번호를 입력해주세요.");
        		divFm.mskEntrpRegNo.setFocus();
        		return;
        	}
        	// 사업자번호 유효성체크.
        	else{
        		if( !this.fnChkEntrpRegNo(this.gfnTrim(mskEntrpRegNoValue)) ){
        			this.gfnAlert("사업자 번호를 확인해주세요.");
        			divFm.mskEntrpRegNo.setFocus();
        			return;
        		}
        	}
        	// 기업고객번호
        	if(this.gfnIsNull(this.gfnTrim(edtCustIdValue)) ){
        		this.gfnAlert("기업고객번호를 입력해주세요.");
        		divFm.edtCustId.setFocus();
        		return;
        	}
        	// 기업고객명
        	if(this.gfnIsNull(this.gfnTrim(edtCustNmValue)) ){
        		this.gfnAlert("기업고객명을 입력해주세요.");
        		divFm.edtCustNm.setFocus();
        		return;
        	}
        	// 우편번호
        	if(this.gfnIsNull(this.gfnTrim(edtZipNoValue)) ){
        		this.gfnAlert("우편번호를 입력해주세요.");
        		divFm.edtZipNo.setFocus();
        		return;
        	}
        	// 주소
        	if(this.gfnIsNull(this.gfnTrim(edtAddrValue)) ){
        		this.gfnAlert("주소를 입력해주세요.");
        		divFm.edtAddr.setFocus();
        		return;
        	}
        	// 상세주소
        	if(this.gfnIsNull(this.gfnTrim(edtDetailAddrValue)) ){
        		this.gfnAlert("상세주소를 입력해주세요.");
        		divFm.edtDetailAddr.setFocus();
        		return;
        	}

        	// 거래구분
        	if(this.gfnIsNull(this.gfnTrim(cboB2cValue)) ){
        		this.gfnAlert("거래구분을 선택해주세요.");
        		divFm.cboB2c.setFocus();
        		return;
        	}

        	// 주문접수거래처코드가 있는경우 거래처명이 빈칸인 경우 에러처리.

        	if(!this.gfnIsNull(this.gfnTrim(edtOrdRcptDlcmCdValue)) ){
        		if(this.gfnIsNull(this.gfnTrim(edtOrdRcptDlcmNmValue)) ){
        			this.gfnAlert("주문접수거래처명을 입력해주세요.");

        			return;
        		}
        	}


        	/****************************************************************************************************/


        	// 우편번호로 구주소인지 신주소인지 구분. 6자리 : 구주소 , 5자리 신주소
        	// 구주소인경우 집배구역(지번)테이블에서 집화점소코드를 조회하여 처리.
        	// 신주소인경우 집배구역(도로명)테이블에서 집화점소코드를 조회하여 처리.

        	// 구주소
        	if( this.gfnRemoveSpecialChar(edtZipNoValue).length == 6 ){
        		this.dsDetail.setColumn(0, "ROAD_YN", "N");
        	}
        	// 신주소
        	else if( this.gfnRemoveSpecialChar(edtZipNoValue).length == 5 ){
        		this.dsDetail.setColumn(0, "ROAD_YN", "Y");
        	}else{
        		this.gfnAlert("우편번호를 확인해주세요.");
        		return;
        	}




        	if(!this.gfnConfirm("저장하시겠습니까?")) return;





        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("saveEntrpCustInfo");


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
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 컴포넌트 초기화
        			this.fnCompInit();

        		break;

        		// 조회
        		case "getEntrpCustInfo":
        			// 고객번호 비활성화
        			divFm.edtCustId.set_enable(false);

        		break;

        		// 저장
        		case "saveEntrpCustInfo":

        			this.gfnAlert("저장되었습니다.");
        			this.fnSearchAfterSave();

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
        		case "searchPopAddr" :
        			divFm.edtZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));	// 우편번호
        			divFm.edtAddr.set_value(dsObj.getColumn(0,"ADDR"));		// 주소

        		break;

        		case "searchPopEntrpCust1" :
        			if(dsObj.rowcount > 0){
        				this.edtCustId_sc.set_value(dsObj.getColumn(0,"CUST_ID"));	// 고객번호
        				this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));	// 고객명

        				this.fnSearch();
        			}
        		break;

        		case "searchPopEntrpCust2" :

        			divFm.edtOrdRcptDlcmCd.set_value(dsObj.getColumn(0,"CUST_ID"));	// 고객번호
        			divFm.edtOrdRcptDlcmNm.set_value(dsObj.getColumn(0,"CUST_NM"));	// 고객명

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
        	this.div01.form.cboCpDv.set_index(0);	// 회사구분
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
        		case "btnSearchAddr" :	this.fnOpenPopAddr(btnName); break;
        		case "btnSearchEntrpCust1" : this.fnOpenPopEntrpCust(btnName); break;
        		case "btnSearchEntrpCust2" : this.fnOpenPopEntrpCust(btnName); break;
        		case "btnOpenPopSendCust"  : this.fnOpenPopSendCust(); break;
        		case "btnOpenPopRegCntr" : this.fnOpenPopRegCntr(); break;

        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function		: fnOpenPopAddr
         * @description		: 우편번호 주소 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopAddr = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = 'searchPopAddr';	//팝업ID

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
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P100.xfdl", oArg, sPopupCallBack, oOption);
        }




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

        	if(btnName == "btnSearchEntrpCust1"){
        		popupId = 'searchPopEntrpCust1';
        		pCustIdValue = this.edtCustId_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}else{
        		popupId = 'searchPopEntrpCust2';
        		pCustIdValue = divFm.edtOrdRcptDlcmCd.value;
        	}


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
        }


        /***********************************************************************************************
         * @function		: fnOpenPopSendCust
         * @description		: 발송고객등록 팝업 호출
         * @param 			: N/A
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopSendCust = function()
        {
        	// 기업고객이 등록된 경우만 발송고객등록 팝업호출 가능.
        	var dsRowType = this.dsDetail.getRowType(0);	// 데이터셋 상태
        	if(dsRowType != Dataset.ROWTYPE_NORMAL){
        		this.gfnAlert("등록된 기업고객만 발송고객등록 가능합니다.");
        		return;
        	}

        	var pCustIdValue = divFm.edtCustId.value; // 고객번호
        	var pCustNmValue = divFm.edtCustNm.value; // 고객명

        	// 파라미터 설정
        	var popupId = 'searchPopSendCust';	// 팝업ID

        	// 팝업 호출
        	var oArg = {
        		  pCustId : pCustIdValue
        		, pCustNm : pCustNmValue
        	};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_0050.xfdl", oArg, sPopupCallBack, oOption);
        }



        /***********************************************************************************************
         * @function	: fnOpenPopRegCntr
         * @description	: 계약등록 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopRegCntr = function()
        {
        	// 파라미터 설정
        	var popupId = 'popRegCntr';	//팝업ID
        	var pCustIdValue = divFm.edtCustId.value; 				// 기업고객번호
        	var pCustNmValue = divFm.edtCustNm.value; 				// 기업고객명


        	// 신규입력일 경우 계약등록 팝업 호출 못함.
        	var currentRowType = this.dsDetail.getRowType(this.dsDetail.rowposition);
        	if(currentRowType == Dataset.ROWTYPE_INSERT || this.gfnIsNull(pCustIdValue)){
        		this.gfnAlert("기업고객 저장후 계약등록이 가능합니다.");
        		return;
        	}


        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pCustMgmtDlcmCd	: pCustIdValue									// 협력사코드 (발송고객이 없는경우 기업고객 = 발송고객)
        				, pSendCustNo		: pCustIdValue									// 발송고객번호 (발송고객이 없는경우 기업고객 = 발송고객)
        				, pSendCustNm		: pCustNmValue									// 발송고객명	(발송고객이 없는경우 기업고객 = 발송고객)
        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_0060.xfdl", oArg, sPopupCallBack, oOption);
        }




        /***********************************************************************************************
         * @function	: fnChkEntrpRegNo
         * @description	: 사업자번호 유효성 체크.
         * @param       : entrpNo - String
         * @return N/A
        /***********************************************************************************************/
        this.fnChkEntrpRegNo = function(entrpRegNo)
        {
        	var	temp;
        	if(entrpRegNo.length != 10)
        	{
        		return false;
        	}

        	temp = parseInt(parseInt(entrpRegNo[8])*5/10);
        	/*trace("temp = " +temp);
        	trace(">>>>>"+ parseInt(entrpRegNo[9]) !=
        		(( 10 - (((parseInt(entrpRegNo[0])*1)%10 ) +
        				((parseInt(entrpRegNo[1])*3)%10 ) +
        				((parseInt(entrpRegNo[2])*7)%10 ) +
        				((parseInt(entrpRegNo[3])*1)%10 ) +
        				((parseInt(entrpRegNo[4])*3)%10 ) +
        				((parseInt(entrpRegNo[5])*7)%10 ) +
        				((parseInt(entrpRegNo[6])*1)%10 ) +
        				((parseInt(entrpRegNo[7])*3)%10 ) +
        				temp +
        				((parseInt(entrpRegNo[8])*5)%10 ))%10)%10) );*/
        	if( parseInt(entrpRegNo[9]) !=
        		(( 10 - (((parseInt(entrpRegNo[0])*1)%10 ) +
        				((parseInt(entrpRegNo[1])*3)%10 ) +
        				((parseInt(entrpRegNo[2])*7)%10 ) +
        				((parseInt(entrpRegNo[3])*1)%10 ) +
        				((parseInt(entrpRegNo[4])*3)%10 ) +
        				((parseInt(entrpRegNo[5])*7)%10 ) +
        				((parseInt(entrpRegNo[6])*1)%10 ) +
        				((parseInt(entrpRegNo[7])*3)%10 ) +
        				temp +
        				((parseInt(entrpRegNo[8])*5)%10 ))%10)%10) )
        	{
        		return false;
        	}

        	return true;

        };



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
         * @function	: fnChkCalDate
         * @description	: from~to 일자 체크
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnChkCalDate = function(sFDate, sTDate, sMsg)
        {
        	var nRtnCnt = this.gfnGetDiffDate(sFDate, sTDate);
        	if(nRtnCnt < 0){
        		this.gfnAlert(sMsg);
        		return false;
        	}
        	/*
        	else if(this.nMaxDay > -1 && nRtnCnt >= this.nMaxDay){
        		// this.alert("조회기간은 "+this.nMaxDay+"일을 넘길 수 없습니다.");
        		var arrMaxDay = [this.nMaxDay];
        		this.gfnAlert("M0441", arrMaxDay);
        		return false;
        	}*/
        	return true;
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
        			case	'edtCustId_sc' : this.btnSearchEntrpCust1.click();	break;
        			case	'edtCustNm_sc' : this.btnSearchEntrpCust1.click();	break;
        			case	'edtOrdRcptDlcmCd' : divFm.btnSearchEntrpCust2.click();	break;

        			default		: 	break;
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.sta09.addEventHandler("onclick",this.sta09_onclick,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.div01.form.btnSearchAddr.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.sta001_01_00_00.addEventHandler("onclick",this.div02_sta001_01_00_00_onclick,this);
            this.div01.form.edtOrdRcptDlcmCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.btnSearchEntrpCust2.addEventHandler("onclick",this.fnOpenPop,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnSearchEntrpCust1.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnOpenPopSendCust.addEventHandler("onclick",this.fnOpenPop,this);
            this.btnOpenPopRegCntr.addEventHandler("onclick",this.fnOpenPop,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0040_old_20200716.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
