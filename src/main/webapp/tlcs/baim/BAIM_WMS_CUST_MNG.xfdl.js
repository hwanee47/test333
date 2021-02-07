(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_WMS_CUST_MNG");
            this.set_titletext("고객사관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col></Row><Row><Col id=\"SVC_ID\">saveWmsCustInfo</Col><Col id=\"SERVICE_BEANNAME\">baimWmsCustMgmtService</Col><Col id=\"SERVICE_METHOD\">saveWmsCustInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsDetail:U</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"QUERY_LIST\">q1=baimWmsCustMgmtService.saveWmsCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getWmsCustList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"SERVICE_BEANNAME\">baimWmsCustMgmtService</Col><Col id=\"SERVICE_METHOD\">getWmsCustList</Col><Col id=\"QUERY_LIST\">q1=baimWmsCustMgmtService.getWmsCustList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SHIPPER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_REPRE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B2C\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_PICKUP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_SEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ACDT_RWD_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ABRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REPRE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\"/><Col id=\"CD_NM\">전체</Col></Row><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REPRE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ABRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_1\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL_2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD_NM\">미사용</Col><Col id=\"CD\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail_empty", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B2C\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_PICKUP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_SEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ACDT_RWD_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROAD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ABRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REPRE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO_2\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","40",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"8","68","23","181",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"7","68","24","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("11");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","42","49","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("5");
            obj.set_text("고객ID");
            this.addChild(obj.name, obj);

            obj = new Edit("edtShipperId","101","48","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"7","68","24","106",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("12");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustRepreNm","316","48","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","257","49","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("6");
            obj.set_text("고객명");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","459","48","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("7");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","532","48","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sel_ty01");
            obj.set_innerdataset("dsUseYn");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div01","0","stSearch:3","1524","390",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","98","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("4");
            obj.set_text("고객사 약자 명");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","146","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("5");
            obj.set_text("우편번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","194","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("7");
            obj.set_text("대표전화번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","119","98","350","51",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","119","242","350","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","468","146","144","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("6");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","611","146","911","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_01","119","146","350","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_01_00","0","242","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("9");
            obj.set_text("팩스번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00_00","0","338","121","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("11");
            obj.set_text("비고");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","338","1403","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","119","194","350","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01","468","194","144","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("8");
            obj.set_text("상세주소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","611","194","911","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01_00","468","242","144","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("10");
            obj.set_text("이메일");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01_00","611","242","911","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","203","208","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","305","208","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtZipNo","134","159","270","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_background("papayawhip");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr","404","159","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_search02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtAddr","626","158","717","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_02","0","50","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("22");
            obj.set_text("고객명");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_02_00","468","50","144","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("23");
            obj.set_text("사업자등록번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","119","50","350","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_02","611","50","911","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskEntrpRegNo","625","60","269","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_format("###-##-#####");
            obj.set_limitbymask("both");
            obj.set_type("string");
            obj.set_enable("true");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","203","257","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02_00_01_00","305","257","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02_00_01_00_00","800","260","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            obj.set_text("@");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_02_00_00","468","98","145","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("29");
            obj.set_text("대표자명");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_02_00","611","98","911","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00_00_00","0","1","120","50",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("31");
            obj.set_text("고객ID");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","119","1","350","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_02_00_01","468","1","144","50",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("33");
            obj.set_text("사용여부");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_02_01","611","0","910","50",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDetailCustId","134","14","265","22",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_background("papayawhip");
            obj.set_inputmode("upper");
            obj.set_maxlength("20");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboDetailUseYn","626","10","264","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("36");
            obj.set_innerdataset("dsDetailUseYn");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustAbrvNm","135","110","266","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_cssclass("inp_typ02");
            obj.set_background("papayawhip");
            obj.set_maxlength("100");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtRepreNm","625","108","267","26",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_cssclass("inp_typ02");
            obj.set_background("papayawhip");
            obj.set_maxlength("100");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","625","204","715","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboTelNo1","135","207","64","25",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("40");
            obj.set_innerdataset("dsTelCd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_cssclass("sel_ty02");
            obj.set_text("02");
            obj.set_value("02");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtTelNo2","224","207","68","25",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("41");
            obj.set_cssclass("inp_ty02");
            obj.set_maxlength("4");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtTelNo3","326","207","68","25",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("inp_ty02");
            obj.set_inputtype("digit,number");
            obj.set_maxlength("4");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo3","326","257","68","25",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("43");
            obj.set_cssclass("inp_ty02");
            obj.set_inputfilter("none");
            obj.set_inputtype("number,digit");
            obj.set_maxlength("4");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboFaxNo1","135","257","64","25",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("44");
            obj.set_innerdataset("dsTelCd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_cssclass("sel_ty02");
            obj.set_text("02");
            obj.set_value("02");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo2","224","257","68","25",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("45");
            obj.set_cssclass("inp_ty02");
            obj.set_maxlength("4");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtEmail1","628","254","170","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtEmail2","820","253","201","29",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("47");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtRemark","133","348","1137","33",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("48");
            obj.set_cssclass("inp_ty02");
            obj.set_maxlength("2000");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_02_01","0","290","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("50");
            obj.set_text("회사구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","119","290","1403","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboCpDv","135","304","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("49");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsCpDv");
            obj.set_background("papayawhip");
            obj.set_index("-1");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDetailCustRefreNm","134","60","267","28",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("52");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            obj.set_maxlength("100");
            this.div01.addChild(obj.name, obj);

            obj = new Grid("grd00","0","div01:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"90\"/><Column size=\"82\"/><Column size=\"120\"/><Column size=\"105\"/><Column size=\"103\"/><Column size=\"291\"/><Column size=\"290\"/><Column size=\"173\"/><Column size=\"173\"/><Column size=\"198\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"고객ID\"/><Cell col=\"2\" text=\"고객명\"/><Cell col=\"3\" text=\"대표자명\"/><Cell col=\"4\" text=\"사업자등록번호\"/><Cell col=\"5\" text=\"우편번호\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"상세주소\"/><Cell col=\"8\" text=\"전화번호\"/><Cell col=\"9\" text=\"팩스번호\"/><Cell col=\"10\" text=\"이메일\"/><Cell col=\"11\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:SHIPPER_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:CUST_REPRE_NM\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REPRE_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ENTRP_REG_NO\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:ZIP_NO\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ADDR\"/><Cell col=\"7\" text=\"bind:DETAIL_ADDR\"/><Cell col=\"8\" text=\"bind:TEL_NO\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:FAX_NO\" textAlign=\"center\"/><Cell col=\"10\" text=\"bind:EMAIL\" textAlign=\"center\"/><Cell col=\"11\" edittype=\"none\" displaytype=\"normal\" text=\"bind:USE_YN\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchEntrpCust1","220","48","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","21","1","224","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("기준정보관리 > WMS 고객사관리");
            obj.set_fittocontents("width");
            obj.set_cssclass("top_title_route01");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("14");
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
            obj = new BindItem("item6","div01.form.edtZipNo","value","dsDetail","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div01.form.edtAddr","value","dsDetail","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div01.form.edtDetailCustId","value","dsDetail","SHIPPER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div01.form.cboDetailUseYn","value","dsDetail","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div01.form.cboTelNo1","value","dsDetail","TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div01.form.cboFaxNo1","value","dsDetail","FAX_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div01.form.mskEntrpRegNo","value","dsDetail","ENTRP_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div01.form.edtCustAbrvNm","value","dsDetail","CUST_ABRV_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div01.form.edtRepreNm","value","dsDetail","REPRE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div01.form.edtRemark","value","dsDetail","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div01.form.edtEmail1","value","dsDetail","EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div01.form.edtEmail2","value","dsDetail","EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div01.form.edtDetailAddr","value","dsDetail","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div01.form.cboCpDv","value","dsDetail","CP_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div01.form.edtTelNo2","value","dsDetail","TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div01.form.edtTelNo3","value","dsDetail","TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div01.form.edtFaxNo2","value","dsDetail","FAX_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div01.form.edtFaxNo3","value","dsDetail","FAX_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div01.form.edtDetailCustRefreNm","value","dsDetail","CUST_REPRE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edtShipperId","value","dsSearch","SHIPPER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtCustRepreNm","value","dsSearch","CUST_REPRE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboUseYn","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_WMS_CUST_MNG.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_WMS_CUST_MNG.xfdl", function() {
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

        	this.gfnTransaction("commonCode");
        	this.cboUseYn.set_index(0);
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
        	this.dsDetail.clearData();
        	this.dsDetail.assign(this.dsDetail_empty);
        	var row = this.dsDetail.addRow();

        	//신규행 구분
        	this.dsDetail.setColumn(row,"INSERT_YN","Y");



        	//고객사 ID ENABLE
        	divFm.edtDetailCustId.set_enable(true);
        	divFm.cboDetailUseYn.set_index(0);
        	divFm.cboTelNo1.set_index(0);
        	divFm.cboFaxNo1.set_index(0);
        	// 공통코드조회

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

        		//삭제
        		case "btnDel":
        			this.fnDelete();
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
        	if(this.gfnIsNull(this.edtShipperId.value) && this.gfnIsNull(this.edtCustRepreNm.value)){
        		alert("고객ID 또는 고객명을 입력해주세요.");
        		return;
        	}

        	this.gfnTransaction("getWmsCustList");

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
        		case "btnSearchAddr" :	this.fnOpenPopAddr(btnName); break;
        		case "btnSearchEntrpCust1" : this.fnOpenPopEntrpCust(btnName); break;

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

        	if(btnName == "btnSearchEntrpCust1"){
        		popupId = 'searchPopEntrpCust1';
        		pCustIdValue = this.edtShipperId.value;
        		pCustNmValue = this.edtCustRepreNm.value;
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
        };


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {
        	var edtDetailCustIdValue = divFm.edtDetailCustId.value;	//고객사  ID
        	var edtDetailCustRefreNmValue  = divFm.edtDetailCustRefreNm.value;	//고객사대표명
        	var mskEntrpRegNoValue = divFm.mskEntrpRegNo.value;	// 사업자등록번호
        	var edtCustRepreNmValue = divFm.edtDetailCustRefreNm.value;// 고객사대표명
        	var edtCustAbrvNmValue = divFm.edtCustAbrvNm.value;	// 고객약자명
        	var edtRepreNmValue = divFm.edtRepreNm.value;		//대표명
        	var edtZipNoValue = divFm.edtZipNo.value;			//우편번호
        	var edtAddrValue = divFm.edtAddr.value;				//주소
        	var edtDetailAddrValue = divFm.edtDetailAddr.value;	//상세주소
        	var edtEmail2 = divFm.edtEmail2.value;				//이메일주소2

        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	if(this.gfnIsNull(edtDetailCustIdValue)){
        		alert("고객사ID를 입력해주세요.");
        		divFm.edtDetailCustId.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(edtDetailCustRefreNmValue)){
        		alert("고객명을 입력해주세요.");
        		divFm.edtDetailCustRefreNmValue.setFocus();
        		return;
        	}
        	//사업자번호
        	if(this.gfnIsNull(this.gfnTrim(mskEntrpRegNoValue)) ){
        		this.gfnAlert("사업자 번호를 입력해주세요.");
        		divFm.mskEntrpRegNo.setFocus();
        		return;
        	}
        	// 고객사대표명
        	if(this.gfnIsNull(this.gfnTrim(edtCustRepreNmValue)) ){
        		this.gfnAlert("기업고객명을 입력해주세요.");
        		divFm.edtCustRepreNm.setFocus();
        		return;
        	}
        	// 고객약자명
        	if(this.gfnIsNull(this.gfnTrim(edtCustAbrvNmValue)) ){
        		this.gfnAlert("고객약자명을 입력해주세요.");
        		divFm.edtCustAbrvNm.setFocus();
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

        	// 이메일주소 정규식체크
        	if(!this.gfnIsNull(this.gfnTrim(edtEmail2))){
        		var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        		 if (edtEmail2.match(regExp) == null) {
        			alert('이메일주소를 다시 입력해주세요.');
        			divFm.edtEmail2.setFocus();
        			return;
        		  }
        	}


        	/****************************************************************************************************/

        	var zipNoValue = divFm.edtZipNo.value;
        	var zip1 = '';
        	var zip2 = '';
        	try{
        		zip1 = zipNoValue.substr(0,3);
        		zip2 = zipNoValue.substring(3,zipNoValue.length);
        	}catch(e){
        		zip1 = '';
        		zip2 = '';
        	}
        	//우편번호1
        	this.dsDetail.setColumn(0,"ZIP_NO_1",zip1);
        	//우편번호2
        	this.dsDetail.setColumn(0,"ZIP_NO_2",zip2);

        	//DEL_YN
        	this.dsDetail.setColumn(0,"DEL_YN",divFm.cboDetailUseYn.value);

        	/************** 택배 고객사정보 저장할 column 셋팅*************************/
        	//우편번호
        	this.dsDetail.setColumn(0,"ZIP_NO",zipNoValue);

        	//고객사 ID
        	this.dsDetail.setColumn(0,"CUST_ID",edtDetailCustIdValue);

        	//고객사명
        	this.dsDetail.setColumn(0,"CUST_NM",edtCustRepreNmValue);

        	// 구주소
        	if( this.gfnRemoveSpecialChar(zipNoValue).length == 6 ){
        		this.dsDetail.setColumn(0, "ROAD_YN", "N");
        	}
        	// 신주소
        	else if( this.gfnRemoveSpecialChar(zipNoValue).length == 5 ){
        		this.dsDetail.setColumn(0, "ROAD_YN", "Y");
        	}else{
        		this.gfnAlert("우편번호를 확인해주세요.");
        		return;
        	}
        	/************************************************************************/
        	if(!this.gfnConfirm("저장하시겠습니까?")) return;


        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("saveWmsCustInfo");

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
        		case "commonCode":
        			divFm.cboCpDv.set_index(0);
        		break;

        		case "saveWmsCustInfo":
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
        		case "searchPopAddr" :
        			divFm.edtZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));	// 우편번호
        			divFm.edtAddr.set_value(dsObj.getColumn(0,"ADDR"));		// 주소

        		break;

        		case "searchPopEntrpCust1" :
        			if(dsObj.rowcount > 0){
        				this.edtShipperId.set_value(dsObj.getColumn(0,"CUST_ID"));	// 고객번호
        				this.edtCustRepreNm.set_value(dsObj.getColumn(0,"CUST_NM"));	// 고객명

        				this.fnSearch();
        			}
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


        this.grd00_oncellclick = function(obj,e)
        {
        	this.fnInit();
        	this.dsDetail.clearData();
        	this.dsDetail.assign(this.dsDetail_empty);
        	var row = this.dsDetail.addRow();

        	this.dsDetail.setColumn(row,"INSERT_YN","N");

        	//고객사ID
        	divFm.edtDetailCustId.set_enable(false);
        	var SHIPPER_ID =  this.dsList.getColumn(this.grd00.currentrow,"SHIPPER_ID");
        	divFm.edtDetailCustId.set_value(SHIPPER_ID);

        	//사용여부
        	var USE_YN = this.dsList.getColumn(this.grd00.currentrow,"USE_YN");
        	divFm.cboDetailUseYn.set_value(USE_YN);

        	//고객사 대표명
        	var CUST_REPRE_NM = this.dsList.getColumn(this.grd00.currentrow,"CUST_REPRE_NM");
        	divFm.edtDetailCustRefreNm.set_value(CUST_REPRE_NM);


        	//고객사 약자 명
        	var CUST_ABRV_NM = this.dsList.getColumn(this.grd00.currentrow,"CUST_ABRV_NM");
        	divFm.edtCustAbrvNm.set_value(CUST_ABRV_NM);

        	//사업자등록번호
        	var ENTRP_REG_NO = this.dsList.getColumn(this.grd00.currentrow,"ENTRP_REG_NO");
        	divFm.mskEntrpRegNo.set_value(ENTRP_REG_NO);

        	//대표자명
        	var REPRE_NM = this.dsList.getColumn(this.grd00.currentrow,"REPRE_NM");
        	divFm.edtRepreNm.set_value(REPRE_NM);

        	//우편번호
        	var ZIP_NO = this.dsList.getColumn(this.grd00.currentrow,"ZIP_NO");
        	divFm.edtZipNo.set_value(ZIP_NO);

        	//주소
        	var ADDR = this.dsList.getColumn(this.grd00.currentrow,"ADDR");
        	divFm.edtAddr.set_value(ADDR);

        	//주소 상제
        	var DETAIL_ADDR = this.dsList.getColumn(this.grd00.currentrow,"DETAIL_ADDR");
        	divFm.edtDetailAddr.set_value(DETAIL_ADDR);

        	//전화번호1
        	var TEL_NO_1 = this.dsList.getColumn(this.grd00.currentrow,"TEL_NO_1");
        	divFm.cboTelNo1.set_value(TEL_NO_1);

        	//전화번호2
        	var TEL_NO_2 = this.dsList.getColumn(this.grd00.currentrow,"TEL_NO_2");
        	divFm.edtTelNo2.set_value(TEL_NO_2);

        	//전화번호3
        	var TEL_NO_3 = this.dsList.getColumn(this.grd00.currentrow,"TEL_NO_3");
        	divFm.edtTelNo3.set_value(TEL_NO_3);

        	//FAX1
        	var FAX_NO_1 = this.dsList.getColumn(this.grd00.currentrow,"FAX_NO_1");
        	divFm.cboFaxNo1.set_value(FAX_NO_1);

        	//FAX2
        	var FAX_NO_2 = this.dsList.getColumn(this.grd00.currentrow,"FAX_NO_2");
        	divFm.edtFaxNo2.set_value(FAX_NO_2);

        	//FAX3
        	var FAX_NO_3 = this.dsList.getColumn(this.grd00.currentrow,"FAX_NO_3");
        	divFm.edtFaxNo3.set_value(FAX_NO_3);

        	//EMAIL1
        	var EMAIL_1 = this.dsList.getColumn(this.grd00.currentrow,"EMAIL_1");
        	divFm.edtEmail1.set_value(EMAIL_1);

        	//EMAIL2
        	var EMAIL_2 = this.dsList.getColumn(this.grd00.currentrow,"EMAIL_2");
        	divFm.edtEmail2.set_value(EMAIL_2);

        	//회사구분
        	var CP_DV = this.dsList.getColumn(this.grd00.currentrow,"CP_DV");
        	divFm.cboCpDv.set_value(CP_DV);

        	//비고
        	var REMARK = this.dsList.getColumn(this.grd00.currentrow,"REMARK");
        	divFm.edtRemark.set_value(REMARK);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.edtShipperId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustRepreNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.sta00_00_00_01_00.addEventHandler("onclick",this.div01_sta00_00_00_01_00_onclick,this);
            this.div01.form.btnSearchAddr.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.sta001_02.addEventHandler("onclick",this.div01_sta001_02_onclick,this);
            this.div01.form.edtDetailAddr.addEventHandler("onchanged",this.div01_edtDetailAddr_onchanged,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.btnSearchEntrpCust1.addEventHandler("onclick",this.fnOpenPop,this);
            this.sta09.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("BAIM_WMS_CUST_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
