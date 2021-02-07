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
            this.set_name("BAIM_BAIM_0070");
            this.set_titletext("단가등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,830);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_CALC_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"UPRICE_FXRAT\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_RATE_UPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"HANDLE_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"INSTALL_CHRG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsFchrgDv=ds1 dsSendDv=ds2 dsDlvGdsCd=ds3 dsFrtDv=ds4 dsZnDv=ds5 dsFrtCalcDv=ds6</Col><Col id=\"QUERY_LIST\">q1=MS045 q2=CS008 q3=CS010 q4=CS006 q5=CS029 q6=CS016</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getItemPerCntrUpriceInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimItemPerCntrUpriceMgmtService</Col><Col id=\"SERVICE_METHOD\">getItemPerCntrUpriceInfoList</Col></Row><Row><Col id=\"SVC_ID\">saveItemPerCntrUpriceInfo</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimItemPerCntrUpriceMgmtService</Col><Col id=\"SERVICE_METHOD\">saveItemPerCntrUpriceInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsList:U</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">발송구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">발송구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlvGdsCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">상품명1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">상품명2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">운임구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">운임구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZnDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">권역구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">권역구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFrtCalcDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">운임적용구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">운임적용구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFchrgDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">전담구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">전담구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList_empty", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DATA_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_CALC_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"UPRICE_FXRAT\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"AIR_RATE_UPRICE\" type=\"STRING\" size=\"256\"/><Column id=\"HANDLE_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"INSTALL_CHRG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("0");
            obj.set_text("단가등록");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchArea","0","34",null,"40","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"43","68","23","160",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","1108","560","72","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("5");
            obj.set_text("발송고객명");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"43","68","23","87",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("6");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"43","68","23","14",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("7");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","25","43","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("8");
            obj.set_text("기업고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","84","42","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","206","42","170","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","395","43","67","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("11");
            obj.set_text("협력사코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd_sc","466","42","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("div01","11","82","1280","340",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("24");
            obj.set_text("기업고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","119","0","1159","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustId","135","13","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","48","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("26");
            obj.set_text("계약기간");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","119","48","1159","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","96","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("28");
            obj.set_text("발송구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","119","96","1159","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","192","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("30");
            obj.set_text("운임적용구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","119","192","1159","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","0","288","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("32");
            obj.set_text("단가");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00","0","240","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("33");
            obj.set_text("전담구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","119","240","1159","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","288","1159","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_01_00","0","144","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("36");
            obj.set_text("운임구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","119","144","1159","49",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01","660","144","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("38");
            obj.set_text("운임권역구분");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_01","660","48","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("39");
            obj.set_text("협력사코드");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_00_00","660","96","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("40");
            obj.set_text("택배상품명");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("calCntrStartYmd","135","61","127","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("cal_ty01");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07_00","269","61","8","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("41");
            obj.set_text("-");
            obj.set_color("black");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("calCntrEndYmd","281","61","127","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("cal_ty01");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_01","660","0","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("42");
            obj.set_text("발송고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_00","660","288","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("43");
            obj.set_text("비례단가");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_00_00_00","660","240","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("44");
            obj.set_text("대리점");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_01_00","660","192","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("45");
            obj.set_text("계약품목");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","280","13","368","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNo","795","13","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","330","288","120","49",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("46");
            obj.set_text("제주운임");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","795","253","110","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchBran","905","253","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_cssclass("btn_search01");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchCntrItem","905","205","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_search01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCntrItemCd","795","205","110","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd","795","61","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboSendDv","135","109","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("7");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsSendDv");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboFrtDv","135","156","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("9");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsFrtDv");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboFrtCalcDv","135","205","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("11");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsFrtCalcDv");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboFchrgDv","135","252","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("17");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsFchrgDv");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboDlvGdsCd","795","109","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("8");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsDlvGdsCd");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cboZnDv","795","156","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("10");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsZnDv");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNm","940","13","324","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCntrItemNm","934","205","330","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","934","253","330","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskUprice","135","301","183","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###");
            obj.set_background("papayawhip");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskAirRateUprice","465","301","183","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskUpriceFxrat","795","301","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("##.###");
            obj.set_background("papayawhip");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07_00_00","421","205","8","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("47");
            obj.set_text("~");
            obj.set_color("black");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtFrtFr","283","205","131","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_maxlength("10");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtFrtTo","436","205","131","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_maxlength("10");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02","12","438","1280","372",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("grid","0","0","1278","369",null,null,null,null,null,null,this.div02.form);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty02");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"159\"/><Column size=\"116\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"112\"/><Column size=\"112\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"109\"/><Column size=\"132\"/><Column size=\"132\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"택배상품명\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"발송구분\"/><Cell col=\"3\" accessibilitydescription=\"T0712\" text=\"운임구분\"/><Cell col=\"4\" accessibilitydescription=\"T0712\" text=\"운임권역구분\"/><Cell col=\"5\" accessibilitydescription=\"T0712\" text=\"단가적용구분\"/><Cell col=\"6\" accessibilitydescription=\"T0712\" text=\"From Range\"/><Cell col=\"7\" accessibilitydescription=\"T0712\" text=\"To Range\"/><Cell col=\"8\" accessibilitydescription=\"T0712\" text=\"계약품목\"/><Cell col=\"9\" accessibilitydescription=\"T0712\" text=\"전담구분\"/><Cell col=\"10\" accessibilitydescription=\"T0712\" text=\"대리점\"/><Cell col=\"11\" accessibilitydescription=\"T0712\" text=\"단가\"/><Cell col=\"12\" accessibilitydescription=\"T0712\" text=\"비례단가\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:DLV_GDS_CD\" displaytype=\"combotext\" combodataset=\"dsDlvGdsCd\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"2\" text=\"bind:SEND_DV\" displaytype=\"combotext\" combodataset=\"dsSendDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" text=\"bind:FRT_DV\" displaytype=\"combotext\" combodataset=\"dsFrtDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"4\" text=\"bind:ZN_DV\" displaytype=\"combotext\" combodataset=\"dsZnDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" text=\"bind:FRT_CALC_DV\" displaytype=\"combotext\" combodataset=\"dsFrtCalcDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"6\" text=\"bind:FRT_FR\"/><Cell col=\"7\" text=\"bind:FRT_TO\"/><Cell col=\"8\" text=\"bind:CNTR_ITEM_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:FCHRG_DV\" displaytype=\"combotext\" combodataset=\"dsFchrgDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:BRAN_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:UPRICE\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:UPRICE_FXRAT\" textAlign=\"right\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1300,830,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtCustMgmtDlcmCd_sc","value","dsSearch","CUST_MGMT_DLCM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div01.form.cboSendDv","value","dsList","SEND_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div01.form.cboDlvGdsCd","value","dsList","DLV_GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div01.form.cboFrtDv","value","dsList","FRT_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div01.form.cboZnDv","value","dsList","ZN_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div01.form.cboFrtCalcDv","value","dsList","FRT_CALC_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div01.form.edtCntrItemCd","value","dsList","CNTR_ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div01.form.edtCntrItemNm","value","dsList","CNTR_ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div01.form.cboFchrgDv","value","dsList","FCHRG_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div01.form.edtBranCd","value","dsList","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div01.form.edtBranNm","value","dsList","BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div01.form.mskUprice","value","dsList","UPRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div01.form.mskAirRateUprice","value","dsList","AIR_RATE_UPRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div01.form.mskUpriceFxrat","value","dsList","UPRICE_FXRAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div01.form.edtFrtFr","value","dsList","FRT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div01.form.edtFrtTo","value","dsList","FRT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0070.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0070.xfdl", function() {
        /**
        *  품목별 계약단가 등록
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_0070.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.02.17
        *  @Desction        품목별 계약단가 등록
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.17		Kim Jin Hwan			최초 생성
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
        	this.gfnTransaction("commonCode");

        	// 조회조건 셋팅.
        	this.dsSearch.setColumn(0, "CUST_ID", this.getOwnerFrame().pCustId);	//고객번호
        	this.dsSearch.setColumn(0, "CUST_NM", this.getOwnerFrame().pCustNm);	//고객명
        	this.dsSearch.setColumn(0, "CUST_MGMT_DLCM_CD", this.getOwnerFrame().pCustMgmtDlcmCd);	//협력사코드
        	this.dsSearch.setColumn(0, "SEND_CUST_NO", this.getOwnerFrame().pSendCustNo);	//발송고객번호
        	this.dsSearch.setColumn(0, "SEND_CUST_NM", this.getOwnerFrame().pSendCustNm);	//발송고객명
        	this.dsSearch.setColumn(0, "CNTR_START_YMD", this.getOwnerFrame().pCntrStartYmd);	//계약시작일

        	// 기본값 셋팅.
        	this.fnSetDefaultValue();


        	// 조회
        	this.fnSearch();
        };


         /***********************************************************************************************
         * @function	: fnSetDefaultValue
         * @description	: 파라미터로 전달받은 값 셋팅.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnSetDefaultValue = function()
        {
        	divFm.edtCustId.set_value(this.getOwnerFrame().pCustId);					// 기업고객번호
        	divFm.edtCustNm.set_value(this.getOwnerFrame().pCustNm);					// 기업고객명
        	divFm.edtSendCustNo.set_value(this.getOwnerFrame().pSendCustNo);			// 발송고객번호
        	divFm.edtSendCustNm.set_value(this.getOwnerFrame().pSendCustNm);			// 발송고객명
        	divFm.edtCustMgmtDlcmCd.set_value(this.getOwnerFrame().pCustMgmtDlcmCd);	// 협력사코드
        	divFm.calCntrStartYmd.set_value(this.getOwnerFrame().pCntrStartYmd);		// 계약시작일
        	divFm.calCntrEndYmd.set_value(this.getOwnerFrame().pCntrEndYmd);			// 계약종료일



        }



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

        		break;

        		// 조회
        		case "getItemPerCntrUpriceInfoList":

        			this.fnSetEnableComp(0);

        		break;



        		// 저장
        		case "saveItemPerCntrUpriceInfo":
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
         this.fnSetEnableComp = function(nRow)
         {
        	var nRowType = this.dsList.getRowType(nRow);

        	//신규
        	if(nRowType == Dataset.ROWTYPE_INSERT){

        		divFm.cboSendDv.set_enable(true);
        		divFm.cboDlvGdsCd.set_enable(true);
        		divFm.cboFrtDv.set_enable(true);
        		divFm.cboZnDv.set_enable(true);

        		divFm.cboFrtCalcDv.set_enable(true);
        		divFm.edtFrtFr.set_enable(true);
        		divFm.edtFrtTo.set_enable(true);
        		divFm.edtCntrItemCd.set_enable(true);
        		divFm.btnSearchCntrItem.set_enable(true);
        		divFm.edtCntrItemNm.set_enable(true);

        		divFm.cboFchrgDv.set_enable(true);
        		divFm.edtBranCd.set_enable(true);
        		divFm.btnSearchBran.set_enable(true);
        		divFm.edtBranNm.set_enable(true);

        	}else{

        		divFm.cboSendDv.set_enable(false);
        		divFm.cboDlvGdsCd.set_enable(false);
        		divFm.cboFrtDv.set_enable(false);
        		divFm.cboZnDv.set_enable(false);

        		divFm.cboFrtCalcDv.set_enable(false);
        		divFm.edtFrtFr.set_enable(false);
        		divFm.edtFrtTo.set_enable(false);
        		divFm.edtCntrItemCd.set_enable(false);
        		divFm.btnSearchCntrItem.set_enable(false);
        		divFm.edtCntrItemNm.set_enable(false);

        		divFm.cboFchrgDv.set_enable(false);
        		divFm.edtBranCd.set_enable(false);
        		divFm.btnSearchBran.set_enable(false);
        		divFm.edtBranNm.set_enable(false);
        	}



         }



         /***********************************************************************************************
         * @function: fnCompInit
         * @description: 컴포넌트 초기화 함수.
         * @param  N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCompInit = function()
        {
        	// 발송구분
        	this.fnAddCodeDef(this.dsSendDv, '선택');
        	divFm.cboSendDv.set_index(0);

        	// 택배상품명
        	this.fnAddCodeDef(this.dsDlvGdsCd, '선택');
        	divFm.cboDlvGdsCd.set_index(0);

        	// 운임구분
        	this.fnAddCodeDef(this.dsFrtDv, '선택');
        	divFm.cboFrtDv.set_index(0);

        	// 운임권역구분
        	this.fnAddCodeDef(this.dsZnDv, '선택');
        	divFm.cboZnDv.set_index(0);

        	// 운임적용구분
        	this.fnAddCodeDef(this.dsFrtCalcDv, '선택');
        	divFm.cboFrtCalcDv.set_index(0);

        	// 전담구분
        	this.fnAddCodeDef(this.dsFchrgDv, '선택');
        	divFm.cboFchrgDv.set_index(0);

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
        	// 조회 데이터가 없는경우
        	if(this.dsList.rowcount == 0){
        		this.dsList.assign( this.dsList_empty );
        	}

        	var lastRowType = this.dsList.getRowType(this.dsList.getRowCount()-1);

        	if(lastRowType != Dataset.ROWTYPE_INSERT){
        		var nRow = this.dsList.addRow();

        		this.dsList.setColumn(nRow, "CUST_ID", this.getOwnerFrame().pCustId); 					//고객번호
        		this.dsList.setColumn(nRow, "CUST_NM", this.getOwnerFrame().pCustNm); 					//고객명
        		this.dsList.setColumn(nRow, "SEND_CUST_NO", this.getOwnerFrame().pSendCustNo); 			//발송고객번호
        		this.dsList.setColumn(nRow, "SEND_CUST_NM", this.getOwnerFrame().pSendCustNm); 			//발송고객명
        		this.dsList.setColumn(nRow, "CUST_MGMT_DLCM_CD", this.getOwnerFrame().pCustMgmtDlcmCd); //협력사코드
        		this.dsList.setColumn(nRow, "CNTR_START_YMD", this.getOwnerFrame().pCntrStartYmd); 		//계약시작일
        		this.dsList.setColumn(nRow, "CNTR_END_YMD", this.getOwnerFrame().pCntrEndYmd); 			//계약종료일

        		this.fnCompInit();
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



        	this.gfnTransaction("getItemPerCntrUpriceInfoList");
        };



        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {
        	// 저장할 행이 없는경우.
        	if(this.dsList.rowcount==0) return;

        	/** 저장할 데이터 유효성 체크*********************************************************************/
        	for(var i=0; i<this.dsList.rowcount; i++){

        		// 로우상태
        		var nRowType = this.dsList.getRowType(i);

        		// 데이터셋 상태가 신규 또는 수정인 데이터만 체크한다.
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}

        		var edtCustIdValue 				= this.dsList.getColumn(i, "CUST_ID"); 				// 기업고객번호
        		var edtCustMgmtDlcmCdValue		= this.dsList.getColumn(i, "CUST_MGMT_DLCM_CD"); 	// 협력사코드
        		var calCntrStartYmdValue 		= this.dsList.getColumn(i, "CNTR_START_YMD");		// 계약시작일자
        		var calCntrEndYmdValue 			= this.dsList.getColumn(i, "CNTR_END_YMD");			// 계약종료일자
        		var cboSendDvValue	 			= this.dsList.getColumn(i, "SEND_DV");				// 발송구분
        		var cboDlvGdsCdValue 			= this.dsList.getColumn(i, "DLV_GDS_CD");			// 택배상품명
        		var cboFrtDvValue	 			= this.dsList.getColumn(i, "FRT_DV");				// 운임구분
        		var cboFrtCalcDvValue 			= this.dsList.getColumn(i, "FRT_CALC_DV");			// 운임적용구분
        		var edtFrtFrValue 				= this.dsList.getColumn(i, "FRT_FR");				// 운임구간(FROM)
        		var edtFrtToValue	 			= this.dsList.getColumn(i, "FRT_TO");				// 운임구간(TO)
        		var cboFchrgDvValue 			= this.dsList.getColumn(i, "FCHRG_DV");				// 전담구분
        		var mskUpriceValue 				= this.dsList.getColumn(i, "UPRICE");				// 단가
        		var mskUpriceFxratValue 		= this.dsList.getColumn(i, "UPRICE_FXRAT");			// 비례단가
        		var edtCntrItemCdValue 			= this.dsList.getColumn(i, "CNTR_ITEM_CD");			// 계약품목코드
        		var edtCntrItemNmValue 			= this.dsList.getColumn(i, "CNTR_ITEM_NM");			// 계약품목명

        		var edtBranCdValue 				= this.dsList.getColumn(i, "BRAN_CD");			// 대리점코드
        		var edtBranNmValue 				= this.dsList.getColumn(i, "BRAN_NM");			// 대리점명


        		// 기업고객번호
        		if(this.gfnIsNull(this.gfnTrim(edtCustIdValue)) ){
        			this.gfnAlert((i+1)+"행의 기업고객번호를 확인해주세요.");
        			return;
        		}
        		// 협력사코드
        		if(this.gfnIsNull(this.gfnTrim(edtCustMgmtDlcmCdValue)) ){
        			this.gfnAlert((i+1)+"행의 협력사코드를 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			return;
        		}
        		//계약시작일자
        		if(this.gfnIsNull(this.gfnTrim(calCntrStartYmdValue)) ){
        			this.gfnAlert((i+1)+"행의 계약시작일자를 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			return;
        		}
        		/*
        		//계약종료일자
        		if(this.gfnIsNull(this.gfnTrim(calCntrEndYmdValue)) ){
        			this.gfnAlert((i+1)+"행의 계약종료일자를 확인해주세요.");
        			this.dsList.set_rowposition(i);
        			return;
        		}
        		*/
        		//발송구분
        		if(this.gfnIsNull(this.gfnTrim(cboSendDvValue)) ){
        			this.gfnAlert((i+1)+"행의 발송구분을 선택해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.cboSendDv.setFocus();
        			return;
        		}
        		//택배상품명
        		if(this.gfnIsNull(this.gfnTrim(cboDlvGdsCdValue)) ){
        			this.gfnAlert((i+1)+"행의 택배상품명을 선택해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.cboDlvGdsCd.setFocus();
        			return;
        		}
        		//운임구분
        		if(this.gfnIsNull(this.gfnTrim(cboFrtDvValue)) ){
        			this.gfnAlert((i+1)+"행의 운임구분을 선택해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.cboFrtDv.setFocus();
        			return;
        		}
        		//운임적용구분
        		if(this.gfnIsNull(this.gfnTrim(cboFrtCalcDvValue)) ){
        			this.gfnAlert((i+1)+"행의 운임적용구분을 선택해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.cboFrtCalcDv.setFocus();
        			return;
        		}
        		//운임구간(FROM)
        		if(this.gfnIsNull(this.gfnTrim(edtFrtFrValue)) ){
        			this.gfnAlert((i+1)+"행의 운임구간(FROM)을 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtFrtFr.setFocus();
        			return;
        		}
        		//운임구간(TO)
        		if(this.gfnIsNull(this.gfnTrim(edtFrtToValue)) ){
        			this.gfnAlert((i+1)+"행의 운임구간(TO)을 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtFrtTo.setFocus();
        			return;
        		}
        		//전담구분
        		if(this.gfnIsNull(this.gfnTrim(cboFchrgDvValue)) ){
        			this.gfnAlert((i+1)+"행의 전담구분을 선택해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.cboFchrgDv.setFocus();
        			return;
        		}
        		//대리점코드
        		if(this.gfnIsNull(this.gfnTrim(edtBranCdValue)) ){
        			this.gfnAlert((i+1)+"행의 대리점코드를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtBranCd.setFocus();
        			return;
        		}
        		//대리점명
        		if(this.gfnIsNull(this.gfnTrim(edtBranNmValue)) ){
        			this.gfnAlert((i+1)+"행의 대리점명을 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtBranNm.setFocus();
        			return;
        		}
        		//단가
        		if(this.gfnIsNull(this.gfnTrim(mskUpriceValue)) ){
        			this.gfnAlert((i+1)+"행의 단가를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.mskUprice.setFocus();
        			return;
        		}
        		//비례단가
        		if(this.gfnIsNull(this.gfnTrim(mskUpriceFxratValue)) ){
        			this.gfnAlert((i+1)+"행의 비례단가를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.mskUpriceFxrat.setFocus();
        			return;
        		}

        		//계약품목코드
        		if(this.gfnIsNull(this.gfnTrim(edtCntrItemCdValue)) ){
        			this.gfnAlert((i+1)+"행의 계약품목코드를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtCntrItemCd.setFocus();
        			return;
        		}

        		//계약품목명
        		if(this.gfnIsNull(this.gfnTrim(edtCntrItemNmValue)) ){
        			this.gfnAlert((i+1)+"행의 계약품목명을 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			divFm.edtCntrItemNm.setFocus();
        			return;
        		}

        	}

        	/****************************************************************************************************/


        	if(!this.gfnConfirm("저장하시겠습니까?")) return;



        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("saveItemPerCntrUpriceInfo");


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
        		case "btnSearchBran" : this.fnOpenPopBran(); break;
        		case "btnSearchCntrItem" : this.fnOpenPopCntrItem(); break;


        		default 		: 	break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnOpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBran = function()
        {
        	// 파라미터 설정
        	var popupId = 'popSearchBran';	//팝업ID
        	var pBranCdValue = divFm.edtBranCd.value;	// 점소코드
        	var pBranNmValue = '';	// 점소명

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
         * @function	: fnOpenPopCntrItem
         * @description	: 계약품목 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopCntrItem = function()
        {
        	// 파라미터 설정
        	var popupId = 'popSearchCntrItem';	//팝업ID
        	var pCustIdValue = divFm.edtCustId.value;					// 기업고객번호
        	var pCustMgmtDlcmCdValue = divFm.edtCustMgmtDlcmCd.value;	// 협력사코드
        	var pCntrStartYmdValue = divFm.calCntrStartYmd.value;		// 계약시작일자
        	var pCntrItemCdValue = divFm.edtCntrItemCd.value;			// 품목코드
        	var pCntrItemNmValue = divFm.edtCntrItemNm.value;			// 품목명

        	// 팝업 호출
        	var oArg = {
        				  pCustId 			: pCustIdValue								// 기업고객번호
        				, pCustMgmtDlcmCd   : pCustMgmtDlcmCdValue						// 협력사코드
        				, pCntrStartYmd   	: pCntrStartYmdValue						// 계약시작일자
        				, pCntrItemCd   : pCntrItemCdValue								// 품목코드
        				, pCntrItemNm   : pCntrItemNmValue  							// 품목명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P050.xfdl", oArg, sPopupCallBack, oOption);
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

        		case "popSearchBran" :
        			divFm.edtBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;


        		case "popSearchCntrItem" :
        			divFm.edtCntrItemCd.set_value(dsObj.getColumn(0, "CNTR_ITEM_CD"));
        			divFm.edtCntrItemNm.set_value(dsObj.getColumn(0, "CNTR_ITEM_NM"));
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




        this.div02_grid_oncellposchanged = function(obj,e)
        {

        	this.fnSetEnableComp(e.row)

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
        			case	'edtCntrItemCd' : divFm.btnSearchCntrItem.click(); break;
        			case	'edtCntrItemNm' : divFm.btnSearchCntrItem.click(); break;

        			case	'edtCntrEmp' : divFm.btnSearchEmp1.click(); break;
        			case	'edtMgmtEmp' : divFm.btnSearchEmp2.click(); break;

        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtCntrItemCd' : divFm.edtCntrItemNm.set_value(''); break;
        			case	'edtCntrItemNm' : divFm.edtCntrItemCd.set_value(''); break;

        			case	'edtCntrEmp' : divFm.edtCntrEmpNm.set_value(''); break;
        			case	'edtMgmtEmp' : divFm.edtMgmtEmpNm.set_value(''); break;
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
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustMgmtDlcmCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.sta001_00_00_00_00_00_00_01_01.addEventHandler("onclick",this.div02_00_sta001_00_00_00_00_00_00_01_01_onclick,this);
            this.div01.form.calCntrStartYmd.addEventHandler("canchange",this.div00_cal00_00_canchange,this);
            this.div01.form.sta001_00_00_00_00_00_00_01_01_00.addEventHandler("onclick",this.div02_00_sta001_00_00_00_00_00_00_01_01_onclick,this);
            this.div01.form.edtBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.btnSearchBran.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.btnSearchCntrItem.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.edtCntrItemCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtCntrItemNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div02.form.grid.addEventHandler("oncellposchanged",this.div02_grid_oncellposchanged,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0070.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
