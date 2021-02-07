(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLVY_DLVY_0778");
            this.set_titletext("상품추적");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">getGdsTraceInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch ds2=dsSearch ds3=dsSearch ds4=dsSearch ds5=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsBasicInfo=ds1 dsPidvInfo=ds2 dsScanInfoList=ds3 dsRlvtWaybillList=ds4 dsWaybillLastStatus=ds5</Col><Col id=\"QUERY_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyGdsTraceService</Col><Col id=\"SERVICE_METHOD\">getGdsTraceInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"WAYBILL_NO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBasicInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ZIP_NO_SERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ADDR_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ZIP_NO_SERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ADDR_TOT\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"WH_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"ETC_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ORD_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BASIC_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_DV\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_METHOD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScanInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_ST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_ST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTER_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTER_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ETC\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REG_TIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRlvtWaybillList", this);
            obj._setContents("<ColumnInfo><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWaybillLastStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_ST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_ST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrgSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">기준1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">기준2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPidvInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EMP_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_TELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EXPCT_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta02","0","35",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("13");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"47","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","1","sta02:3","700","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","101","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("운송장번호");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","100","0","598","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01","247","0","101","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("2");
            obj.set_text("진행상태");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc","sta001:5","4","135","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_maxlength("20");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtGdsStNm","sta001_01:5","4","108","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01_01",null,"0","101","30","130",null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("예약구분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_01","574","4","119","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div01","1","140","394","91",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","80","30",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","sta001:0","0","312","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc","sta001:5","3","106","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_value("010-2345-2345");
            obj.set_text("010-2345-2345");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","edtWayBillNo_sc:5","0","80","30",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("2");
            obj.set_text("기타전화");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","80","30",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("우편번호");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","80","29","312","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","80","30",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("5");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","80","58","312","30",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00","196","29","80","30",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00","85","33","106","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00","281","33","106","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00","sta001_01_00:5","3","106","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_01","85","62","302","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001","1","115","120","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("보내는분");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta001_00","1","236","120","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("4");
            obj.set_text("받는분");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div03","1","260","394","91",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","80","30",null,null,null,null,null,null,this.div03.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta00","80","0","312","30",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tbody_td01");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","196","0","80","30",null,null,null,null,null,null,this.div03.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("2");
            obj.set_text("기타전화");
            obj.set_textAlign("center");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","80","30",null,null,null,null,null,null,this.div03.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("우편번호");
            obj.set_textAlign("center");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta00_00","80","29","312","30",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tbody_td01");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","80","30",null,null,null,null,null,null,this.div03.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("5");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","80","58","312","30",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_tbody_td01");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00","196","29","80","30",null,null,null,null,null,null,this.div03.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_textAlign("center");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00","85","33","106","23",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc","85","3","106","23",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_text("sdfsdfsdf");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00","281","3","106","23",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00","281","33","106","23",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_01","85","62","302","23",null,null,null,null,null,null,this.div03.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div03.addChild(obj.name, obj);

            obj = new Static("sta001_01","1","353","120","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("6");
            obj.set_text("기본정보");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div05","1","377","925","91",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("운임구분");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta00","80","0","843","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tbody_td01");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","203","0","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("2");
            obj.set_text("운임합계");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("품목명");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta00_00","80","29","843","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tbody_td01");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("5");
            obj.set_text("특이사항");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","80","58","843","30",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_tbody_td01");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00","203","29","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("7");
            obj.set_text("박스타입");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01","406","0","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("8");
            obj.set_text("기타운임");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01_00","406","29","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("9");
            obj.set_text("고객주문번호");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01_01","609","0","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("10");
            obj.set_text("수량");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01_01_00","802","0","121","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("11");
            obj.set_text("Delivery Type");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01_01_01","609","29","80","30",null,null,null,null,null,null,this.div05.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("정산처구분");
            obj.set_textAlign("center");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00","85","33","113","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc","85","3","113","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_text("sdfsdfsdf");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00","288","33","113","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_01","85","62","834","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_00_00","491","33","113","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_00","694","33","104","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_value("sdfsdfsdfsdf");
            obj.set_text("sdfsdfsdfsdf");
            this.div05.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_01_00_00_01","802","33","117","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div05.addChild(obj.name, obj);

            obj = new MaskEdit("mskMonFcstPickupQty","491","3","113","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("20");
            obj.set_limitbymask("decimal");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_background("white");
            obj.set_cssclass("inp_ty01");
            this.div05.addChild(obj.name, obj);

            obj = new MaskEdit("mskMonFcstPickupQty00","288","3","113","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("21");
            obj.set_limitbymask("decimal");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_enable("true");
            obj.set_background("white");
            obj.set_cssclass("inp_ty01");
            this.div05.addChild(obj.name, obj);

            obj = new MaskEdit("mskMonFcstPickupQty01","694","3","104","23",null,null,null,null,null,null,this.div05.form);
            obj.set_taborder("22");
            obj.set_limitbymask("decimal");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_value("213123123123");
            obj.set_enable("true");
            obj.set_background("white");
            obj.set_font("normal 11px/normal \"돋움\"");
            obj.set_cssclass("inp_ty01");
            this.div05.addChild(obj.name, obj);

            obj = new Div("div06","1","495","1052",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("gridScanList","-1","0","1051",null,null,"0",null,null,null,null,this.div06.form);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty01");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsScanInfoList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"108\"/><Column size=\"116\"/><Column size=\"112\"/><Column size=\"134\"/><Column size=\"118\"/><Column size=\"108\"/><Column size=\"93\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"처리점소\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"스캔구분\"/><Cell col=\"3\" accessibilitydescription=\"T0712\" text=\"스캔일자\"/><Cell col=\"4\" accessibilitydescription=\"T0712\" text=\"스캔시간\"/><Cell col=\"5\" accessibilitydescription=\"T0712\" text=\"상대점소\"/><Cell col=\"6\" accessibilitydescription=\"T0712\" text=\"처리자\"/><Cell col=\"7\" accessibilitydescription=\"T0712\" text=\"기타\"/><Cell col=\"8\" accessibilitydescription=\"T0712\" text=\"등록일자\"/><Cell col=\"9\" accessibilitydescription=\"T0712\" text=\"등록시간\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:BRAN_NM\"/><Cell col=\"2\" text=\"bind:GDS_ST_NM\"/><Cell col=\"3\" text=\"bind:WORK_YMD\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:WORK_HOUR\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:CNTER_BRAN_NM\"/><Cell col=\"6\" text=\"bind:EMP_NM\"/><Cell col=\"7\" text=\"bind:ETC\"/><Cell col=\"8\" text=\"bind:REG_DT\"/><Cell col=\"9\" text=\"bind:REG_TIME\"/></Band></Format></Formats>");
            this.div06.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","1","470","120","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("9");
            obj.set_text("스캔내역");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div02","div01:5","140","603","62",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","80","30",null,null,null,null,null,null,this.div02.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("기업고객");
            obj.set_textAlign("center");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00","80","0","521","30",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tbody_td01");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_02","165","3","131","23",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","edtWayBillNo_sc00_00_00_02:5","0","80","30",null,null,null,null,null,null,this.div02.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("2");
            obj.set_text("발송고객");
            obj.set_textAlign("center");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","80","30",null,null,null,null,null,null,this.div02.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("인수자");
            obj.set_textAlign("center");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta00_00","80","29","521","30",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tbody_td01");
            this.div02.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00","301","29","80","30",null,null,null,null,null,null,this.div02.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("5");
            obj.set_text("관계");
            obj.set_textAlign("center");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00","sta001:5","3","75","23",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_00","sta001_00:5","33","75","23",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01","sta001_01_00:5","3","75","23",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_00","386","33","75","23",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_01","465","3","131","23",null,null,null,null,null,null,this.div02.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div02.addChild(obj.name, obj);

            obj = new Div("div04","400","231","636","120",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","87","80","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("8");
            obj.set_text("배송사원");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","80","87","554","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tbody_td01");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","80","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("집하점소");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta00","80","0","554","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tbody_td01");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_02","165","3","102","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","edtWayBillNo_sc00_00_00_01_02:5","0","44","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("2");
            obj.set_text("연락처");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","80","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("집하사원");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta00_00","80","29","554","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_tbody_td01");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","80","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("5");
            obj.set_text("배송점소");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","80","58","554","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_tbody_td01");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00","272","29","44","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("7");
            obj.set_text("연락처");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_01","sta001_01_00:5","3","106","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("23");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_value("010-2345-2345");
            obj.set_text("010-2345-2345");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_01","edtWayBillNo_sc00_00_00_01_01:4","0","80","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("9");
            obj.set_text("집하일자");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_01_01","431","29","200","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("10");
            obj.set_text("배송예정일자");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00_00","272","87","44","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("11");
            obj.set_text("연락처");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_01","272","58","44","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("연락처");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_01_02","431","87","80","30",null,null,null,null,null,null,this.div04.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("13");
            obj.set_text("배송일자");
            obj.set_textAlign("center");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","431","58","203","30",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_tbody_td01");
            this.div04.addChild(obj.name, obj);

            obj = new Calendar("calDealStartYmd","515","91","115","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("16");
            obj.set_cssclass("cal_ty01");
            obj.set_readonly("false");
            obj.set_background("(bottomatbottombottom,bottom,bottom) white");
            obj.set_font("normal 11px/normal \"돋움\"");
            obj.set_enable("false");
            this.div04.addChild(obj.name, obj);

            obj = new Calendar("calDealStartYmd00","sta001_01:4","3","115","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("17");
            obj.set_cssclass("cal_ty01");
            obj.set_readonly("false");
            obj.set_font("normal 11px/normal \"돋움\"");
            obj.set_autoselect("true");
            obj.set_background("(bottomatbottombottom,bottom,bottom) white");
            obj.set_enable("false");
            this.div04.addChild(obj.name, obj);

            obj = new Calendar("calDealStartYmd00_00","437","62","115","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("18");
            obj.set_cssclass("cal_ty01");
            obj.set_readonly("false");
            obj.set_font("normal 11px/normal \"돋움\"");
            obj.set_background("(bottomatbottombottom,bottom,bottom) white");
            obj.set_enable("false");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01","85","3","75","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            obj.set_text("sdfdsfWERWERwerwer");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_00","85","33","75","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_00_00","85","62","75","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_00_00_00","85","91","75","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("22");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_01_00","321","33","106","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_01_00_00","321","62","106","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("25");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_01_00_00_00","321","91","106","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("26");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_01_00_00_01","555","62","73","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_02_00","165","33","102","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_02_00_00","165","62","102","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc00_00_00_01_02_00_00_00","165","91","102","23",null,null,null,null,null,null,this.div04.form);
            obj.set_taborder("31");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("true");
            this.div04.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","400","206","120","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("집배정보");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("14");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","44","75","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("15");
            obj.set_text("운송장번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWayBillNo_sc","102","44","135","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","252","44","75","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("17");
            obj.set_text("관련운송장");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRlvtWaybill","329","44","140","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("WAYBILL_NO");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("WAYBILL_NO");
            obj.set_taborder("18");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsRlvtWaybillList");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div01.form.edtWayBillNo_sc","value","dsBasicInfo","SENDR_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div01.form.edtWayBillNo_sc00_00_00","value","dsBasicInfo","SENDR_CELL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div01.form.edtWayBillNo_sc00","value","dsBasicInfo","SENDR_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div01.form.edtWayBillNo_sc00_00","value","dsBasicInfo","SENDR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div01.form.edtWayBillNo_sc00_01","value","dsBasicInfo","SENDR_ADDR_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div02.form.edtWayBillNo_sc00_00_00","value","dsBasicInfo","ENTER_CUST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div02.form.edtWayBillNo_sc00_00_00_02","value","dsBasicInfo","ENTER_CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div02.form.edtWayBillNo_sc00_00_00_01","value","dsBasicInfo","SEND_CUST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div02.form.edtWayBillNo_sc00_00_00_01_01","value","dsBasicInfo","SEND_CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div03.form.edtWayBillNo_sc","value","dsBasicInfo","RCVR_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div03.form.edtWayBillNo_sc00_00_00","value","dsBasicInfo","RCVR_CELL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div03.form.edtWayBillNo_sc00","value","dsBasicInfo","RCVR_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div03.form.edtWayBillNo_sc00_00","value","dsBasicInfo","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div03.form.edtWayBillNo_sc00_01","value","dsBasicInfo","RCVR_ADDR_TOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div05.form.edtWayBillNo_sc","value","dsBasicInfo","FRT_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div05.form.mskMonFcstPickupQty00","value","dsBasicInfo","WH_FRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div05.form.mskMonFcstPickupQty","value","dsBasicInfo","ETC_FRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div05.form.mskMonFcstPickupQty01","value","dsBasicInfo","QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div05.form.edtWayBillNo_sc00","value","dsBasicInfo","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div05.form.edtWayBillNo_sc00_00","value","dsBasicInfo","BOX_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div05.form.edtWayBillNo_sc00_00_00_00_00","value","dsBasicInfo","CUST_ORD_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div05.form.edtWayBillNo_sc00_00_00_01_00","value","dsBasicInfo","CAL_CP_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div05.form.edtWayBillNo_sc00_01","value","dsBasicInfo","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div00.form.edtGdsStNm","value","dsWaybillLastStatus","GDS_ST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div00.form.edtWayBillNo_sc00_00_00_01_01","value","dsBasicInfo","RSRV_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div04.form.edtWayBillNo_sc00_00_00_01","value","dsPidvInfo","PICKUP_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div04.form.edtWayBillNo_sc00_00_00_01_02","value","dsPidvInfo","PICKUP_BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div04.form.edtWayBillNo_sc00_00_00_01_01","value","dsPidvInfo","PICKUP_BRAN_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div04.form.edtWayBillNo_sc00_00_00_01_00","value","dsPidvInfo","PICKUP_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div04.form.edtWayBillNo_sc00_00_00_01_02_00","value","dsPidvInfo","PICKUP_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div04.form.edtWayBillNo_sc00_00_00_01_01_00","value","dsPidvInfo","PICKUP_EMP_CELL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div04.form.edtWayBillNo_sc00_00_00_01_00_00","value","dsPidvInfo","DLV_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div04.form.edtWayBillNo_sc00_00_00_01_02_00_00","value","dsPidvInfo","DLV_BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div04.form.edtWayBillNo_sc00_00_00_01_01_00_00","value","dsPidvInfo","DLV_BRAN_TELL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div04.form.edtWayBillNo_sc00_00_00_01_00_00_00","value","dsPidvInfo","DLV_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div04.form.edtWayBillNo_sc00_00_00_01_02_00_00_00","value","dsPidvInfo","DLV_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div04.form.edtWayBillNo_sc00_00_00_01_01_00_00_00","value","dsPidvInfo","DLV_EMP_CELL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div04.form.calDealStartYmd00","value","dsPidvInfo","PICKUP_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div04.form.calDealStartYmd00_00","value","dsPidvInfo","DLV_EXPCT_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div04.form.edtWayBillNo_sc00_00_00_01_01_00_00_01","value","dsPidvInfo","DLV_EXPCT_HOUR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div04.form.calDealStartYmd","value","dsPidvInfo","DLV_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","edtWayBillNo_sc","value","dsSearch","WAYBILL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div00.form.edtWayBillNo_sc","value","dsBasicInfo","WAYBILL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DLVY_DLVY_0778.xfdl","lib::lib_Form.xjs");
        this.registerScript("DLVY_DLVY_0778.xfdl", function() {
        /**
        *  상품 추적
        *  @MenuPath
        *  @FileName 		DLVY_DLVY_0778.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.02.20
        *  @Desction        상품 추적
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.20		Kim Jin Hwan			최초 생성
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

        	var edtWayBillNoValue = this.edtWayBillNo_sc.value;

        	if(this.gfnIsNull(edtWayBillNoValue)){
        		this.gfnAlert("운송장번호를 입력해주세요.");
        		this.edtWayBillNo_sc.setFocus();
        		return;
        	}


        	// 조회조건 init

        	this.gfnTransaction("getGdsTraceInfo");

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

        		case "getGdsTraceInfo":

        		break;

        		default :
        		break;
        	}
        };



        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/
        /***********************************************************************************************
         * @function	: 컬럼명 추출
         * @description	: GRID CELL 바인딩된 컬렴명을 추출한다.
         * @param		: grdObj	- Grid Object
         * @param		: cellIdx	- Number
         * @return columnNm			- String
        /***********************************************************************************************/
        this.returnCellColumn = function(grdObj, cellIdx)
        {
        	var columnNm = this.gfnNvl(grdObj.getCellProperty("body", cellIdx, "text"), "");
        	columnNm = columnNm.replace("bind:", "");

        	return columnNm;
        }




        /***********************************************************************************************
         * @function	: fnOpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		: pBranCdValue	- 점소코드
         * @param		: pBranNmValue	- 점소명
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBran = function(pBranCdValue, pBranNmValue)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID

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
         * @param 			: pEmpNoValue - 사원번호
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopEmp= function(pEmpNoValue, pEmpNmValue)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID

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



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /***********************************************************************************************
         * @function: div00_cboRlvtWaybill_onitemchanged
         * @description: 관련 운송장 변경이벤트.
         * @param : obj - nexacro.Combo
         * @param : e - nexacro.ComboCloseUpEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.div00_cboRlvtWaybill_onitemchanged = function(obj,e)
        {
        	var waybillNoValue = this.dsRlvtWaybillList.getColumn(e.postindex, "WAYBILL_NO");

        	this.edtWayBillNo_sc.set_value(waybillNoValue);

        	this.fnSearch();
        };



        /***********************************************************************************************
         * @function	: fnEditOnKeyDown
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
        			case	'edtWayBillNo_sc' : this.fnSearch();	break;

        			default		: 	break;
        		}
        	}
        };


        /***********************************************************************************************
         * @function	: div06_gridScanList_onheadclick
         * @description	: 그리드 헤더 클릭 이벤트.
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.div06_gridScanList_onheadclick = function(obj,e)
        {
        	this.gfnGridSort(obj, e);
        };


        /***********************************************************************************************
         * @function	: div06_gridScanList_oncelldblclick
         * @description	: 그리드 셀 더블 클릭 이벤트.
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.div06_gridScanList_oncelldblclick = function(obj,e)
        {
        	// cell 컬럼명 추출.
        	var column = this.returnCellColumn(obj, e.cell);

        	var pBranCdValue = '';
        	var pBranNmValue = '';


        	// 처리점소
        	if(column == "BRAN_NM"){

        		pBranCdValue = this.dsScanInfoList.getColumn(e.row, "BRAN_CD");
        		pBranNmValue = this.dsScanInfoList.getColumn(e.row, "BRAN_NM");

        		this.fnOpenPopBran(pBranCdValue, pBranNmValue);
        	}
        	// 상대점소
        	else if(column == "CNTER_BRAN_NM"){
        		pBranCdValue = this.dsScanInfoList.getColumn(e.row, "CNTER_BRAN_CD");
        		pBranNmValue = this.dsScanInfoList.getColumn(e.row, "CNTER_BRAN_NM");

        		this.fnOpenPopBran(pBranCdValue, pBranNmValue);
        	}
        	// 처리자
        	else if(column == "EMP_NM"){
        		var pEmpNoValue = this.dsScanInfoList.getColumn(e.row, "EMP_NO");
        		var pEmpNmValue = this.dsScanInfoList.getColumn(e.row, "EMP_NM");

        		this.fnOpenPopEmp(pEmpNoValue, pEmpNmValue);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.div00.form.edtWayBillNo_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtGdsStNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtWayBillNo_sc00_00_00_01_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtWayBillNo_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtWayBillNo_sc00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtWayBillNo_sc00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtWayBillNo_sc00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtWayBillNo_sc00_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div03.form.edtWayBillNo_sc00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div03.form.edtWayBillNo_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div03.form.edtWayBillNo_sc00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div03.form.edtWayBillNo_sc00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div03.form.edtWayBillNo_sc00_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div05.form.edtWayBillNo_sc00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div05.form.edtWayBillNo_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div05.form.edtWayBillNo_sc00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div05.form.edtWayBillNo_sc00_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div05.form.edtWayBillNo_sc00_00_00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div05.form.edtWayBillNo_sc00_00_00_01_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div05.form.edtWayBillNo_sc00_00_00_01_01_00_00_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div06.form.gridScanList.addEventHandler("onheadclick",this.div06_gridScanList_onheadclick,this);
            this.div06.form.gridScanList.addEventHandler("oncelldblclick",this.div06_gridScanList_oncelldblclick,this);
            this.div02.form.edtWayBillNo_sc00_00_00_02.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div02.form.edtWayBillNo_sc00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div02.form.edtWayBillNo_sc00_00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div02.form.edtWayBillNo_sc00_00_00_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div02.form.edtWayBillNo_sc00_00_00_01_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div02.form.edtWayBillNo_sc00_00_00_01_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_02.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_01_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_01_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_01_00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_01_00_00_01.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_02_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_02_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div04.form.edtWayBillNo_sc00_00_00_01_02_00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtWayBillNo_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.cboRlvtWaybill.addEventHandler("oncloseup",this.div02_00_cboRlvtWaybill_oncloseup,this);
            this.cboRlvtWaybill.addEventHandler("onitemchanged",this.div00_cboRlvtWaybill_onitemchanged,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("DLVY_DLVY_0778.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
