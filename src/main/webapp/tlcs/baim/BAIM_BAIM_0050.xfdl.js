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
            this.set_name("BAIM_BAIM_0050");
            this.set_titletext("발송고객등록(팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FEE_DV\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUPPLC_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUPPLC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUPPLC_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_PICKUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_TRANSF\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_CP_DV_PREPAY\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_CP_DV_REGPAY\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsFchrgOrgnz=ds1 dsCalCpDv=ds2 dsCalCpDvPrePay=ds3 dsCalCpDvRegPay=ds4 dsUseDv=ds5 </Col><Col id=\"QUERY_LIST\">q1=MS045 q2=RV004 q3=RV004 q4=RV004 q5=SM993</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getSendCustInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\">q1=baimSendCustMgmtService.getSendCustInfoList</Col></Row><Row><Col id=\"SVC_ID\">saveSendCustInfo</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimSendCustMgmtService</Col><Col id=\"SERVICE_METHOD\">saveSendCustInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsList:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">신용1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">신용2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalCpDvPrePay", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선불1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선불2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalCpDvRegPay", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">착불1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">착불2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFchrgOrgnz", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">신용1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">신용2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("5");
            obj.set_text("발송고객등록");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchArea","0","34",null,"40","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"43","68","23","160",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_taborder("9");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Div("div01","11","82","1020","459",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("28");
            obj.set_text("기업고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","119","0","899","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustId","135","13","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","48","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("30");
            obj.set_text("발송고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","119","48","899","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","96","120","72",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("32");
            obj.set_text("정산처구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","238","96","780","36",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","167","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("34");
            obj.set_text("집하지주소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","119","167","899","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","0","263","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("36");
            obj.set_text("회수배송주소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00","0","215","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("37");
            obj.set_text("집하점소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","119","215","899","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","263","899","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","119","311","899","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","0","311","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("41");
            obj.set_text("배송점소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00","0","359","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("42");
            obj.set_text("전담구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","119","359","899","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNo","135","62","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty02_req");
            obj.set_visible("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01","620","0","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("44");
            obj.set_text("협력사코드");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","279","13","326","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd","755","13","113","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNm","279","62","719","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_01","119","96","120","36",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("45");
            obj.set_text("신용");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_01_00","119","131","120","37",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("46");
            obj.set_text("착불");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_01_01","621","96","120","36",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("47");
            obj.set_text("선불");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","238","131","780","37",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_00","0","407","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("49");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00_00","119","407","899","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPickupplcZipNo","135","180","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr1","276","180","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_search02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPickupplcAddr","304","180","326","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPickupplcDetailAddr","633","180","365","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDlvDetailAddr","633","277","365","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDlvAddr","304","277","326","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr2","276","277","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("btn_search02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDlvZipNo","135","277","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPickupBranCd","135","230","171","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchBran1","306","230","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_search02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPickupBranNm","334","230","664","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDlvBranNm","334","323","664","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchBran2","306","323","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_cssclass("btn_search02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtDlvBranCd","135","323","171","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01","490","359","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("51");
            obj.set_text("담당자");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_00","490","407","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("52");
            obj.set_text("이메일");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboFchrgDv","135","371","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("22");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsFchrgOrgnz");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("cboInchgCellNo3","325","420","79","23",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("26");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","305","420","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("53");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("cboInchgCellNo2","220","420","79","23",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("25");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","205","420","15","18",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("54");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboInchgCellNo1",null,"420","68","23","815",null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("24");
            obj.set_text("010");
            obj.set_index("18");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtInchgNm","623","371","375","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtInchgEmail","623","421","375","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdoCalCpDv","259","104","279","20",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_innerdataset("dsCalCpDv");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdoCalCpDvPrePay","755","104","251","20",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("6");
            obj.set_innerdataset("dsCalCpDvPrePay");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdoCalCpDvRegPay","259","140","279","20",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("7");
            obj.set_innerdataset("dsCalCpDvRegPay");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div03","12","586","1356","230",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("gridSendCust","0","0","1354","227",null,null,null,null,null,null,this.div03.form);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty02");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"159\"/><Column size=\"142\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"159\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"발송고객명\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"협력사코드\"/><Cell col=\"3\" accessibilitydescription=\"T0712\" text=\"발송고객코드\"/><Cell col=\"4\" accessibilitydescription=\"T0712\" text=\"정산처구분\"/><Cell col=\"5\" accessibilitydescription=\"T0712\" text=\"집하점소\"/><Cell col=\"6\" accessibilitydescription=\"T0712\" text=\"회수배송점소\"/><Cell col=\"7\" accessibilitydescription=\"T0712\" text=\"전담구분\"/><Cell col=\"8\" accessibilitydescription=\"T0712\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:SEND_CUST_NM\"/><Cell col=\"2\" text=\"bind:CUST_MGMT_DLCM_CD\"/><Cell col=\"3\" text=\"bind:SEND_CUST_NO\"/><Cell col=\"4\" text=\"bind:CAL_CP_DV\" displaytype=\"combotext\" combodataset=\"dsCalCpDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" text=\"bind:PICKUP_BRAN_NM\"/><Cell col=\"6\" text=\"bind:DLV_BRAN_NM\"/><Cell col=\"7\" text=\"bind:FCHRG_DV\" combodataset=\"dsFchrgOrgnz\" combocodecol=\"CD\" combodatacol=\"CD_NM\" displaytype=\"combotext\"/><Cell col=\"8\" text=\"bind:USE_YN\" displaytype=\"combotext\" combodataset=\"dsUseDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/></Band></Format></Formats>");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btnOpenPopRegCntr","12","549","140","33",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("12");
            obj.set_text("계약등록");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","1108","560","72","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("13");
            obj.set_text("발송고객명");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"43","68","23","87",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("14");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"43","68","23","14",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("15");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","25","43","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("16");
            obj.set_text("기업고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","84","42","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","206","42","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","415","43","69","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("17");
            obj.set_text("협력사코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd_sc","489","43","113","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchCustMgmtDlcm","602","43","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_search02");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00_00","675","43","69","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("18");
            obj.set_text("발송고객명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNm_sc","745","43","113","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1400,830,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item5","div01.form.edtCustId","value","dsList","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div01.form.edtCustNm","value","dsList","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div01.form.edtCustMgmtDlcmCd","value","dsList","CUST_MGMT_DLCM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div01.form.edtSendCustNo","value","dsList","SEND_CUST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div01.form.edtSendCustNm","value","dsList","SEND_CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div01.form.rdoCalCpDv","value","dsList","CAL_CP_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div01.form.rdoCalCpDvPrePay","value","dsList","CAL_CP_DV_PREPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div01.form.rdoCalCpDvRegPay","value","dsList","CAL_CP_DV_REGPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div01.form.edtPickupplcZipNo","value","dsList","PICKUPPLC_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div01.form.edtPickupplcAddr","value","dsList","PICKUPPLC_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div01.form.edtPickupplcDetailAddr","value","dsList","PICKUPPLC_DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div01.form.edtPickupBranCd","value","dsList","PICKUP_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div01.form.edtPickupBranNm","value","dsList","PICKUP_BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div01.form.edtDlvZipNo","value","dsList","DLV_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div01.form.edtDlvAddr","value","dsList","DLV_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div01.form.edtDlvDetailAddr","value","dsList","DLV_DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div01.form.edtDlvBranCd","value","dsList","DLV_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div01.form.edtDlvBranNm","value","dsList","DLV_BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div01.form.cboFchrgDv","value","dsList","FCHRG_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div01.form.edtInchgNm","value","dsList","INCHG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div01.form.cboInchgCellNo1","value","dsList","INCHG_CELL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div01.form.cboInchgCellNo2","value","dsList","INCHG_CELL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div01.form.cboInchgCellNo3","value","dsList","INCHG_CELL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div01.form.edtInchgEmail","value","dsList","INCHG_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtCustMgmtDlcmCd_sc","value","dsSearch","CUST_MGMT_DLCM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtSendCustNm_sc","value","dsSearch","SEND_CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0050.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0050.xfdl", function() {
        /**
        *  발송고객등록
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_0050.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.02.05
        *  @Desction        발송고객등록
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.13		Kim Jin Hwan			최초 생성
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
        	// 점소구분, 회사구분, 점소상태
        	this.gfnTransaction("commonCode");

        	// 조회조건 셋팅.
        	this.edtCustId_sc.set_value(this.getOwnerFrame().pCustId);	//고객번호
        	this.edtCustNm_sc.set_value(this.getOwnerFrame().pCustNm);	//고객명

        	// 조회
        	this.fnSearch();
        };




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
        		case "saveSendCustInfo":
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
        	var lastRowType = this.dsList.getRowType(this.dsList.getRowCount()-1);

        	if(lastRowType != Dataset.ROWTYPE_INSERT){
        		var nRow = this.dsList.addRow();

        		this.dsList.setColumn(nRow, "CUST_ID", this.getOwnerFrame().pCustId); //고객번호
        		this.dsList.setColumn(nRow, "CUST_NM", this.getOwnerFrame().pCustNm); //고객번호
        		this.dsList.setColumn(nRow, "FCHRG_DV", '01'); 						//전담구분

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

        	// 조회조건 init
        	/*this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	this.dsSearch.setColumn(0, "CUST_ID"			, this.getOwnerFrame().pCustId);	// 고객번호
        	this.dsSearch.setColumn(0, "CUST_MGMT_DLCM_CD"	, divFm.edtCustMgmtDlcmCd.value);	// 협력사코드
        	*/

        	this.gfnTransaction("getSendCustInfoList");
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

        		var edtCustIdValue 				= this.dsList.getColumn(i, "CUST_ID");					// 기업고객번호
        		var edtCustNmValue 				= this.dsList.getColumn(i, "CUST_NM");					// 기업고객명
        		var edtCustMgmtDlcmCdValue 		= this.dsList.getColumn(i, "CUST_MGMT_DLCM_CD");		// 고객관리거래처코드(협력사코드)
        		var edtSendCustNoValue 			= this.dsList.getColumn(i, "SEND_CUST_NO"); 			// 발송고객번호
        		var edtSendCustNmValue 			= this.dsList.getColumn(i, "SEND_CUST_NM"); 			// 발송고객명
        		var rdoCalCpDvValue 			= this.dsList.getColumn(i, "CAL_CP_DV");				// 정산처구분
        		var edtPickupplcZipNoValue		= this.dsList.getColumn(i, "PICKUPPLC_ZIP_NO"); 		// 집하지우편번호
        		var edtPickupplcAddrValue 		= this.dsList.getColumn(i, "PICKUPPLC_ADDR");			// 집하지주소
        		var edtPickupplcDetailAddrValue = this.dsList.getColumn(i, "PICKUPPLC_DETAIL_ADDR");	// 집하지상세주소
        		var edtPickupBranCdValue 		= this.dsList.getColumn(i, "PICKUP_BRAN_CD");			// 집하점소코드
        		var edtPickupBranNmValue 		= this.dsList.getColumn(i, "PICKUP_BRAN_NM");			// 집하점소명
        		var edtDlvZipNoValue 			= this.dsList.getColumn(i, "DLV_ZIP_NO");				// 배송지우편번호
        		var edtDlvAddrValue 			= this.dsList.getColumn(i, "DLV_ADDR");					// 배송지주소
        		var edtDlvDetailAddrValue 		= this.dsList.getColumn(i, "DLV_DETAIL_ADDR");			// 배송지상세주소
        		var edtDlvBranCdValue 			= this.dsList.getColumn(i, "DLV_BRAN_CD");				// 배송점소코드
        		var edtDlvBranNmValue 			= this.dsList.getColumn(i, "DLV_BRAN_NM");				// 배송점소명
        		var cboFchrgDvValue 			= this.dsList.getColumn(i, "FCHRG_DV");					// 전담구분


        		// 기업고객번호
        		if(this.gfnIsNull(this.gfnTrim(edtCustIdValue)) ){
        			this.gfnAlert((i+1)+"행의 기업고객번호를 입력해주세요.");
        			return;
        		}
        		// 기업고객명
        		if(this.gfnIsNull(this.gfnTrim(edtCustNmValue)) ){
        			this.gfnAlert((i+1)+"행의 기업고객명을 입력해주세요.");
        			return;
        		}
        		// 협력사코드
        		if(this.gfnIsNull(this.gfnTrim(edtCustMgmtDlcmCdValue)) ){
        			this.gfnAlert((i+1)+"행의 협력사코드를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtCustMgmtDlcmCd.setFocus();
        			return;
        		}

        		// 발송고객코드
        		/*if(this.gfnIsNull(this.gfnTrim(edtSendCustNoValue)) ){
        			this.gfnAlert((i+1)+"행의 발송고객코드를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtSendCustNo.setFocus();
        			return;
        		}*/

        		// 발송고객명
        		if(this.gfnIsNull(this.gfnTrim(edtSendCustNmValue)) ){
        			this.gfnAlert((i+1)+"행의 발송고객명을 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtSendCustNm.setFocus();
        			return;
        		}

        		// 정산처구분
        		if(this.gfnIsNull(this.gfnTrim(rdoCalCpDvValue)) ){
        			this.gfnAlert((i+1)+"행의 정산처구분을 선택해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.rdoCalCpDv.setFocus();
        			return;
        		}

        		// 집하지우편번호
        		if(this.gfnIsNull(this.gfnTrim(edtPickupplcZipNoValue)) ){
        			this.gfnAlert((i+1)+"행의 집하지우편번호를 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtPickupplcZipNo.setFocus();
        			return;
        		}

        		// 집하지주소
        		if(this.gfnIsNull(this.gfnTrim(edtPickupplcAddrValue)) ){
        			this.gfnAlert((i+1)+"행의 집하지주소를 확인해주세요.");
        			divFm.edtPickupplcAddr.setFocus();
        			return;
        		}

        		// 집하지상세주소
        		if(this.gfnIsNull(this.gfnTrim(edtPickupplcDetailAddrValue)) ){
        			this.gfnAlert((i+1)+"행의 집하지상세주소를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtPickupplcDetailAddr.setFocus();
        			return;
        		}

        		// 집하점소코드
        		if(this.gfnIsNull(this.gfnTrim(edtPickupBranCdValue)) ){
        			this.gfnAlert((i+1)+"행의 집하점소코드를 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtPickupBranCd.setFocus();
        			return;
        		}

        		// 집하점소명
        		if(this.gfnIsNull(this.gfnTrim(edtPickupBranNmValue)) ){
        			this.gfnAlert((i+1)+"행의 집하점소명을 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtPickupBranNm.setFocus();
        			return;
        		}

        		// 배송지우편번호
        		if(this.gfnIsNull(this.gfnTrim(edtDlvZipNoValue)) ){
        			this.gfnAlert((i+1)+"행의 배송지우편번호를 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtDlvZipNo.setFocus();
        			return;
        		}

        		// 배송지주소
        		if(this.gfnIsNull(this.gfnTrim(edtDlvAddrValue)) ){
        			this.gfnAlert((i+1)+"행의 배송지주소를 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtDlvAddr.setFocus();
        			return;
        		}

        		// 배송지상세주소
        		if(this.gfnIsNull(this.gfnTrim(edtDlvDetailAddrValue)) ){
        			this.gfnAlert((i+1)+"행의 배송지상세주소를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtDlvDetailAddr.setFocus();
        			return;
        		}

        		// 배송점소코드
        		if(this.gfnIsNull(this.gfnTrim(edtDlvBranCdValue)) ){
        			this.gfnAlert((i+1)+"행의 배송점소코드를 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtDlvBranCd.setFocus();
        			return;
        		}

        		// 배송점소명
        		if(this.gfnIsNull(this.gfnTrim(edtDlvBranNmValue)) ){
        			this.gfnAlert((i+1)+"행의 배송점소명을 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtDlvBranNm.setFocus();
        			return;
        		}


        		// 전담구분
        		if(this.gfnIsNull(this.gfnTrim(cboFchrgDvValue)) ){
        			this.gfnAlert((i+1)+"행의 전담구분을 선택해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.cboFchrgDv.setFocus();
        			return;
        		}
        	}

        	/****************************************************************************************************/


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("saveSendCustInfo");
        	});


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
        		case "btnSearchAddr1" :	this.fnOpenPopAddr(btnName); break;
        		case "btnSearchAddr2" :	this.fnOpenPopAddr(btnName); break;
        		case "btnSearchBran1" : this.fnOpenPopBran(btnName); break;
        		case "btnSearchBran2" : this.fnOpenPopBran(btnName); break;
        		case "btnSearchCustMgmtDlcm" : this.fnOpenPopCustMgmtDlcm(); break;
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
        	var popupId = '';	//팝업ID

        	if(btnName == 'btnSearchAddr1'){
        		popupId = 'searchPopAddr1';
        	}else{
        		popupId = 'searchPopAddr2';
        	}

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
        		pBranCdValue = divFm.edtPickupBranCd.value;
        		pBranNmValue = divFm.edtPickupBranNm.value;
        	}else if(btnName == "btnSearchBran2"){
        		popupId = 'searchPopBran2';
        		pBranCdValue = divFm.edtDlvBranCd.value;
        		pBranNmValue = divFm.edtDlvBranNm.value;
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
         * @function	: fnOpenPopCustMgmtDlcm
         * @description	: 협력사 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopCustMgmtDlcm = function()
        {
        	// 파라미터 설정
        	var popupId = 'searchPopCustMgmtDlcm';	//팝업ID
        	var pCustIdValue = this.edtCustId_sc.value; // 기업고객번호
        	var pCustNmValue = this.edtCustNm_sc.value; // 기업고객명
        	var pCustMgmtDlcmCdValue = this.edtCustMgmtDlcmCd_sc.value;	// 협력사코드



        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pCustMgmtDlcmCd	: pCustMgmtDlcmCdValue							// 협력사코드

        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P030.xfdl", oArg, sPopupCallBack, oOption);
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
        	var pCustIdValue = this.edtCustId_sc.value; 				// 기업고객번호
        	var pCustNmValue = this.edtCustNm_sc.value; 				// 기업고객명
        	var pCustMgmtDlcmCdValue = divFm.edtCustMgmtDlcmCd.value;	// 협력사코드
        	var pSendCustNoValue = divFm.edtSendCustNo.value;			// 발송고객번호
        	var pSendCustNmValue = divFm.edtSendCustNm.value;			// 발송고객명
        	var pPickupBranCdValue = divFm.edtPickupBranCd.value;		// 집하점소코드
        	var pPickupBranNmValue = divFm.edtPickupBranNm.value;		// 집하점소명


        	// 신규입력일 경우 계약등록 팝업 호출 못함.
        	var currentRowType = this.dsList.getRowType(this.dsList.rowposition);
        	if(currentRowType == Dataset.ROWTYPE_INSERT || this.gfnIsNull(pSendCustNoValue) || this.gfnIsNull(pCustMgmtDlcmCdValue)){
        		alert("발송고객 저장후 계약등록이 가능합니다.");
        		return;
        	}



        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pCustMgmtDlcmCd	: pCustMgmtDlcmCdValue							// 협력사코드
        				, pSendCustNo		: pSendCustNoValue								// 발송고객번호
        				, pSendCustNm		: pSendCustNmValue								// 발송고객명
        				, pPickupBranCd		: pPickupBranCdValue							// 집하점소코드
        				, pPickupBranNm		: pPickupBranNmValue							// 집하점소명
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
        		case "searchPopAddr1" :
        			divFm.edtPickupplcZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));		// 우편번호
        			divFm.edtPickupplcAddr.set_value(dsObj.getColumn(0,"ADDR"));		// 주소

        		break;

        		case "searchPopAddr2" :
        			divFm.edtDlvZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));	// 우편번호
        			divFm.edtDlvAddr.set_value(dsObj.getColumn(0,"ADDR"));		// 주소

        		break;

        		case "searchPopBran1" :
        			divFm.edtPickupBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtPickupBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "searchPopBran2" :
        			divFm.edtDlvBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtDlvBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "searchPopCustMgmtDlcm" :
        			this.edtCustMgmtDlcmCd_sc.set_value(dsObj.getColumn(0, "CUST_MGMT_DLCM_CD"));

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
        		//divFm.btnSearchCustMgmtDlcm.set_enable(true);

        	}else{
        		divFm.edtCustMgmtDlcmCd.set_enable(false);
        		//divFm.btnSearchCustMgmtDlcm.set_enable(false);
        		//divFm.edtSendCustNo.set_enable(false);
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
        			case	'edtCustMgmtDlcmCd_sc' : this.btnSearchCustMgmtDlcm.click(); break;

        			case	'edtPickupBranCd' : divFm.btnSearchBran1.click(); break;
        			case	'edtPickupBranNm' : divFm.btnSearchBran1.click(); break;
        			case	'edtDlvBranCd' : divFm.btnSearchBran2.click(); break;
        			case	'edtDlvBranNm' : divFm.btnSearchBran2.click(); break;
        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtPickupBranCd' : divFm.edtPickupBranNm.set_value(''); break;
        			case	'edtPickupBranNm' : divFm.edtPickupBranCd.set_value(''); break;
        			case	'edtDlvBranCd' : divFm.edtDlvBranNm.set_value(''); break;
        			case	'edtDlvBranNm' : divFm.edtDlvBranCd.set_value(''); break;
        			default		: 	break;
        		}
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
            this.div01.form.btnSearchAddr1.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.btnSearchAddr2.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.edtPickupBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.btnSearchBran1.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.edtPickupBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtDlvBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.btnSearchBran2.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.edtDlvBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div03.form.gridSendCust.addEventHandler("oncellposchanged",this.div03_gridSendCust_oncellposchanged,this);
            this.btnOpenPopRegCntr.addEventHandler("onclick",this.fnOpenPop,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustMgmtDlcmCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnSearchCustMgmtDlcm.addEventHandler("onclick",this.fnOpenPop,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0050.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
