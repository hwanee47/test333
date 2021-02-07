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
            this.set_name("BAIM_BAIM_0060");
            this.set_titletext("계약등록");
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
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"COD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DMAND_STD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_CNTR_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_FEE_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_MGMT_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_MGMT_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_FEE_RAT\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_AGG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CM_DMAND_STD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_DMAND_STD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_UPRICE_ADAP_STD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsFchrgOrgnz=ds1 dsCmDmandStdCd=ds2 dsRtnDmandStdCd=ds3 dsCntrUpriceAdapStd=ds4 dsSendDv=ds5 dsDlvGdsCd=ds6 dsFrtDv=ds7 dsZnDv=ds8 dsFrtCalcDv=ds9</Col><Col id=\"QUERY_LIST\">q1=MS045 q2=CS019 q3=CS019 q4=CS036 q5=CS008 q6=CS010 q7=CS006 q8=CS029 q9=CS016</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getCntrInfo</Col><Col id=\"SERVICE_METHOD\">getCntrInfo</Col><Col id=\"SERVICE_BEANNAME\">baimCntrMgmtService</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsDetail=ds1 dsDetailList=ds2</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col></Row><Row><Col id=\"SVC_ID\">getCntrInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch ds2=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1 dsList2=ds2</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCntrMgmtService</Col><Col id=\"SERVICE_METHOD\">getCntrInfoList</Col></Row><Row><Col id=\"SVC_ID\">saveCntrInfoList</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCntrMgmtService</Col><Col id=\"SERVICE_METHOD\">saveCntrInfoList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsDetail:U</Col></Row><Row><Col id=\"SVC_ID\">saveRenewalCntr</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCntrMgmtService</Col><Col id=\"SERVICE_METHOD\">saveRenewalCntr</Col><Col id=\"IN_DATASET_LIST\">ds1=dsDetail</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmDmandStdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">기준1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">기준2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnDmandStdCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">기준1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">기준2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCntrUpriceAdapStd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">기준1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">기준2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"DEAL_START_YMD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList_empty", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"COD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DMAND_STD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_CNTR_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_FEE_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_MGMT_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_MGMT_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_FEE_RAT\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_AGG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CM_DMAND_STD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_DMAND_STD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_UPRICE_ADAP_STD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"COD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DMAND_STD_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_CNTR_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_FEE_RATE\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_MGMT_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_MGMT_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_EMP\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_FEE_RAT\" type=\"STRING\" size=\"256\"/><Column id=\"BILL_AGG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CM_DMAND_STD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTN_DMAND_STD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_UPRICE_ADAP_STD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_MGMT_DLCM_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CNTR_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_CALC_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("6");
            obj.set_text("계약등록");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchArea","0","34",null,"40","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("9");
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
            obj.set_taborder("10");
            obj.set_text("발송고객명");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"43","68","23","87",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"43","68","23","14",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Div("div01","15","82","920","394",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("27");
            obj.set_text("기업고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00","119","0","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustId","135","8","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","39","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("29");
            obj.set_text("발송고객");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00","119","39","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","78","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("31");
            obj.set_text("계약점소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","119","78","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","156","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("33");
            obj.set_text("계약기간");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","119","156","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","0","234","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("35");
            obj.set_text("개발사원");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00","0","195","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("36");
            obj.set_text("계약사원");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_01_00","119","195","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","234","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","119","273","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","0","273","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("40");
            obj.set_text("집하점소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00","0","312","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("41");
            obj.set_text("협력사코드");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","119","312","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNo","135","48","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","279","8","619","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNm","279","48","619","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_01_00","0","117","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("43");
            obj.set_text("개발점소");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","119","117","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_tbody_td01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_00","0","351","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("45");
            obj.set_text("계약단가적용기준");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00_00","119","351","799","40",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtMgmtEmp","135","242","110","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCntrEmp","135","203","110","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPickupBranCd","135","282","135","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01","490","234","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("47");
            obj.set_text("개발수수료율");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_00","490","273","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("48");
            obj.set_text("일반청구기준");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCntrBranCd","135","87","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchBran1","276","87","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_search01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCntrBranNm","304","87","594","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSaleMgmtBranNm","304","126","594","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchBran2","276","126","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_search01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtSaleMgmtBranCd","135","126","141","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_01","490","156","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("49");
            obj.set_text("청구일");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_00_00","490","195","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("50");
            obj.set_text("계약수수료율");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00_01_00_01","490","312","120","40",null,null,null,null,null,null,this.div01.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("51");
            obj.set_text("반품청구기준");
            obj.set_textAlign("center");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchEmp2","245","242","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_search01");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btnSearchEmp1","245","203","25","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_search01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCntrEmpNm","273","203","205","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtMgmtEmpNm","273","242","205","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtPickupBranNm","273","282","205","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd","135","321","343","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("calCntrStartYmd","135","165","127","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_cssclass("cal_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta07_00","269","165","8","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("52");
            obj.set_text("-");
            obj.set_color("black");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("calCntrEndYmd","281","165","127","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_cssclass("cal_ty01");
            obj.set_background("papayawhip");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("calDmandStdYmd","623","165","127","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_cssclass("cal_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskCntrFeeRate","623","203","270","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_limitbymask("decimal");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("mskMgmtFeeRat","623","242","270","23",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_limitbymask("decimal");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###");
            obj.set_cssclass("inp_ty01");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdoCmDmandStdCd","623","285","279","20",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("23");
            obj.set_innerdataset("dsCmDmandStdCd");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdoRtnDmandStdCd","623","324","279","20",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("25");
            obj.set_innerdataset("dsRtnDmandStdCd");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdoCntrUpriceAdapStd","134","364","476","20",null,null,null,null,null,null,this.div01.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("5");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("26");
            obj.set_innerdataset("dsCntrUpriceAdapStd");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new Div("div02_01_00","15","530","1277","281",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("gridBran","0","0","1274","278",null,null,null,null,null,null,this.div02_01_00.form);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty02");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsDetailList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"159\"/><Column size=\"116\"/><Column size=\"118\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"109\"/><Column size=\"132\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"택배상품명\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"발송구분\"/><Cell col=\"3\" accessibilitydescription=\"T0712\" text=\"운임구분\"/><Cell col=\"4\" accessibilitydescription=\"T0712\" text=\"운임권역구분\"/><Cell col=\"5\" accessibilitydescription=\"T0712\" text=\"단가적용구분\"/><Cell col=\"6\" accessibilitydescription=\"T0712\" text=\"박스유형\"/><Cell col=\"7\" accessibilitydescription=\"T0712\" text=\"계약품목\"/><Cell col=\"8\" accessibilitydescription=\"T0712\" text=\"전담구분\"/><Cell col=\"9\" accessibilitydescription=\"T0712\" text=\"대리점\"/><Cell col=\"10\" accessibilitydescription=\"T0712\" text=\"단가\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:DLV_GDS_CD\" displaytype=\"combotext\" combodataset=\"dsDlvGdsCd\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"2\" text=\"bind:SEND_DV\" displaytype=\"combotext\" combodataset=\"dsSendDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" text=\"bind:FRT_DV\" displaytype=\"combotext\" combodataset=\"dsFrtDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"4\" text=\"bind:ZN_DV\" displaytype=\"combotext\" combodataset=\"dsZnDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" text=\"bind:FRT_CALC_DV\" displaytype=\"combotext\" combodataset=\"dsFrtCalcDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"6\" text=\"bind:BOX_TYPE_CD\"/><Cell col=\"7\" text=\"bind:CNTR_ITEM_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:FCHRG_DV\" displaytype=\"combotext\" combodataset=\"dsFchrgDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:BRAN_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:UPRICE\" textAlign=\"right\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell colspan=\"10\" text=\"합계\"/><Cell col=\"10\" expr=\"dataset.getSum('parseInt(UPRICE)')\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/></Band></Format></Formats>");
            this.div02_01_00.addChild(obj.name, obj);

            obj = new Button("btnOpenPopCntrUprice","14","489","140","33",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("13");
            obj.set_text("계약단가");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopCntrItem","157","489","140","33",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("14");
            obj.set_text("계약품목");
            this.addChild(obj.name, obj);

            obj = new Button("btnRenewal","300","489","140","33",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("15");
            obj.set_text("계약갱신");
            this.addChild(obj.name, obj);

            obj = new Div("div02_01","950","82","340","196",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("gridBran","0","0","338","193",null,null,null,null,null,null,this.div02_01.form);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty02");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"159\"/><Column size=\"159\"/><Column size=\"142\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"계약시작일\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"계약종료일\"/><Cell col=\"3\" accessibilitydescription=\"T0712\" text=\"개발점소\"/><Cell col=\"4\" accessibilitydescription=\"T0712\" text=\"계약점소\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:CNTR_START_YMD\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:CNTR_END_YMD\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:SALE_MGMT_BRAN_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CNTR_BRAN_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div02_01.addChild(obj.name, obj);

            obj = new Div("div02_01_01","950","287","340","190",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Grid("gridBran","0","0","338","187",null,null,null,null,null,null,this.div02_01_01.form);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty02");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsList2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"126\"/><Column size=\"159\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"시작일\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"기업고객명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:DEAL_START_YMD\" displaytype=\"expr:DEAL_START_YMD == &quot;&quot; ? &quot;none&quot;:&quot;date&quot;\" edittype=\"expr:DEAL_START_YMD == &quot;&quot; ? &quot;normal&quot;:&quot;combo&quot;\"/><Cell col=\"2\" text=\"bind:CUST_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div02_01_01.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","25","43","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("18");
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

            obj = new Static("staExeCorp00_00","395","43","67","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("19");
            obj.set_text("협력사코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd_sc","466","42","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

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

            obj = new BindItem("item0","div01.form.edtCustId","value","dsDetail","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div01.form.edtCustNm","value","dsDetail","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div01.form.edtSendCustNo","value","dsDetail","SEND_CUST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div01.form.edtSendCustNm","value","dsDetail","SEND_CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div01.form.edtCntrBranCd","value","dsDetail","CNTR_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div01.form.edtCntrBranNm","value","dsDetail","CNTR_BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div01.form.edtSaleMgmtBranCd","value","dsDetail","SALE_MGMT_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div01.form.edtSaleMgmtBranNm","value","dsDetail","SALE_MGMT_BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div01.form.calCntrStartYmd","value","dsDetail","CNTR_START_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div01.form.calCntrEndYmd","value","dsDetail","CNTR_END_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div01.form.calDmandStdYmd","value","dsDetail","DMAND_STD_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div01.form.edtCntrEmp","value","dsDetail","CNTR_EMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div01.form.edtCntrEmpNm","value","dsDetail","CNTR_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div01.form.edtMgmtEmp","value","dsDetail","MGMT_EMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div01.form.edtMgmtEmpNm","value","dsDetail","MGMT_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div01.form.mskCntrFeeRate","value","dsDetail","CNTR_FEE_RATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div01.form.mskMgmtFeeRat","value","dsDetail","MGMT_FEE_RAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div01.form.edtPickupBranCd","value","dsDetail","PICKUP_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div01.form.edtPickupBranNm","value","dsDetail","PICKUP_BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div01.form.edtCustMgmtDlcmCd","value","dsDetail","CUST_MGMT_DLCM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div01.form.rdoCmDmandStdCd","value","dsDetail","CM_DMAND_STD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div01.form.rdoRtnDmandStdCd","value","dsDetail","RTN_DMAND_STD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div01.form.rdoCntrUpriceAdapStd","value","dsDetail","CNTR_UPRICE_ADAP_STD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0060.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0060.xfdl", function() {
        /**
        *  계약 등록
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_0060.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.02.17
        *  @Desction        발송고객등록
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
        	this.edtCustId_sc.set_value(this.getOwnerFrame().pCustId);	//고객번호
        	this.edtCustNm_sc.set_value(this.getOwnerFrame().pCustNm);	//고객명
        	this.edtCustMgmtDlcmCd_sc.set_value(this.getOwnerFrame().pCustMgmtDlcmCd);	//협력사코드
        	this.dsSearch.setColumn(0, "SEND_CUST_NO", this.getOwnerFrame().pSendCustNo);	//발송고객번호
        	this.dsSearch.setColumn(0, "SEND_CUST_NM", this.getOwnerFrame().pSendCustNm);	//발송고객명


        	// 기본값 셋팅
        	//this.fnSetDefaultValue();


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
        		case "saveCntrInfoList":
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;


        		// 갱신
        		case "saveRenewalCntr":
        			this.gfnAlert("갱신되었습니다.");

        			this.fnSearch();
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnConfirmCallback
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: rtnMsg	- String
         * @return N/A
         ***********************************************************************************************/
        this.fnConfirmCallback = function(sPopupId, rtnMsg)
        {
        	switch(sPopupId) {


        		case "gfnConfirm_renewal":
        			if(rtnMsg){
        				this.gfnTransaction("saveRenewalCntr");
        			}
        		break;


        		default :
        		break;
        	}

        }


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
        	// 조회 데이터가 없는경우
        	this.dsDetail.clearData();

        	var lastRowType = this.dsDetail.getRowType(this.dsDetail.getRowCount()-1);

        	if(lastRowType != Dataset.ROWTYPE_INSERT){
        		this.dsList.addRow();
        		var nRow = this.dsDetail.addRow();

        		this.dsDetail.setColumn(nRow, "CUST_ID", this.getOwnerFrame().pCustId); 					//고객번호
        		this.dsDetail.setColumn(nRow, "CUST_NM", this.getOwnerFrame().pCustNm); 					//고객명
        		this.dsDetail.setColumn(nRow, "SEND_CUST_NO", this.getOwnerFrame().pSendCustNo); 			//발송고객번호
        		this.dsDetail.setColumn(nRow, "SEND_CUST_NM", this.getOwnerFrame().pSendCustNm); 			//발송고객명
        		this.dsDetail.setColumn(nRow, "CUST_MGMT_DLCM_CD", this.getOwnerFrame().pCustMgmtDlcmCd); 	//협력사코드
        		this.dsDetail.setColumn(nRow, "CNTR_START_YMD", this.gfnGetDate("date")); 					//계약시작일
        		this.dsDetail.setColumn(nRow, "PICKUP_BRAN_CD", this.getOwnerFrame().pPickupBranCd); 		//집하점소코드
        		this.dsDetail.setColumn(nRow, "PICKUP_BRAN_NM", this.getOwnerFrame().pPickupBranNm); 		//집하점소명


        		divFm.calCntrStartYmd.set_enable(true);
        	}
        }



        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {

        	/** 조회조건 필수입력 체크********************************************************/


        	/************************************************************************************/

        	this.gfnTransaction("getCntrInfoList");
        };


        /***********************************************************************************************
         * @function	: fnSearchDetail
         * @description	: 계약등록 정보 조회
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchDetail = function()
        {
        	/** 조회조건 필수입력 체크********************************************************/


        	/************************************************************************************/

        	// 조회조건 셋팅.
        	this.dsSearch.setColumn(0, "CUST_ID", 			this.dsList.getColumn(this.dsList.rowposition, "CUST_ID"));				// 고객번호
        	this.dsSearch.setColumn(0, "CUST_MGMT_DLCM_CD", this.dsList.getColumn(this.dsList.rowposition, "CUST_MGMT_DLCM_CD"));	// 협력사코드
        	this.dsSearch.setColumn(0, "CNTR_START_YMD", 	this.dsList.getColumn(this.dsList.rowposition, "CNTR_START_YMD"));		// 계약시작일자

        	this.gfnTransaction("getCntrInfo");
        }

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {
        	// 저장할 행이 없는경우.
        	var dsRowType = this.dsDetail.getRowType(0);	// 데이터셋 상태
        	if(dsRowType == Dataset.ROWTYPE_EMPTY || dsRowType == Dataset.ROWTYPE_NORMAL){
        		this.gfnAlert("저장할 내용이 없습니다.");
        		return;
        	}

        	/** 저장할 데이터 유효성 체크*********************************************************************/
        	for(var i=0; i<this.dsDetail.rowcount; i++){

        		// 로우상태
        		var nRowType = this.dsDetail.getRowType(i);

        		// 데이터셋 상태가 신규 또는 수정인 데이터만 체크한다.
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}

        		var edtCustIdValue 				= this.dsDetail.getColumn(i, "CUST_ID"); 				// 기업고객코드
        		var edtCustMgmtDlcmCdValue		= this.dsDetail.getColumn(i, "CUST_MGMT_DLCM_CD");	// 협력사코드
        		var edtCntrBranCdValue 			= this.dsDetail.getColumn(i, "CNTR_BRAN_CD");			// 계약점소코드
        		var edtCntrBranNmValue 			= this.dsDetail.getColumn(i, "CNTR_BRAN_NM");			// 계약점소명
        		var edtSaleMgmtBranCdValue 		= this.dsDetail.getColumn(i, "SALE_MGMT_BRAN_CD");	// 개발점소코드
        		var edtSaleMgmtBranNmValue 		= this.dsDetail.getColumn(i, "SALE_MGMT_BRAN_NM");	// 개발점소명
        		var calCntrStartYmdValue 		= this.dsDetail.getColumn(i, "CNTR_START_YMD");		// 계약시작일자
        		var calCntrEndYmdValue 			= this.dsDetail.getColumn(i, "CNTR_END_YMD");			// 계약종료일자
        		var edtCntrEmpValue 			= this.dsDetail.getColumn(i, "CNTR_EMP");				// 계약사원번호
        		var edtCntrEmpNmValue 			= this.dsDetail.getColumn(i, "CNTR_EMP_NM");			// 계약사원명
        		var rdoCntrUpriceAdapStdValue 	= this.dsDetail.getColumn(i, "CNTR_UPRICE_ADAP_STD");	// 계약단가적용기준


        		// 기업고객번호
        		if(this.gfnIsNull(this.gfnTrim(edtCustIdValue)) ){
        			this.gfnAlert((i+1)+"행의 기업고객번호를 확인해주세요.");
        			return;
        		}

        		// 협력사코드
        		if(this.gfnIsNull(this.gfnTrim(edtCustMgmtDlcmCdValue)) ){
        			this.gfnAlert((i+1)+"행의 협력사코드를 확인해주세요.");
        			this.dsDetail.set_rowposition(i);
        			return;
        		}
        		//계약점소코드

        		if(this.gfnIsNull(this.gfnTrim(edtCntrBranCdValue)) ){
        			this.gfnAlert((i+1)+"행의 계약점소코드를 입력해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.edtCntrBranCd.setFocus();
        			return;
        		}
        		//계약점소명
        		if(this.gfnIsNull(this.gfnTrim(edtCntrBranNmValue)) ){
        			this.gfnAlert((i+1)+"행의 계약점소명를 입력해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.edtCntrBranNm.setFocus();
        			return;
        		}
        		//개발점소코드
        		if(this.gfnIsNull(this.gfnTrim(edtSaleMgmtBranCdValue)) ){
        			this.gfnAlert((i+1)+"행의 개발점소코드를 입력해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.edtSaleMgmtBranCd.setFocus();
        			return;
        		}
        		//개발점소명
        		if(this.gfnIsNull(this.gfnTrim(edtSaleMgmtBranNmValue)) ){
        			this.gfnAlert((i+1)+"행의 개발점소명를 입력해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.edtSaleMgmtBranNm.setFocus();
        			return;
        		}
        		//계약시작일자
        		if(this.gfnIsNull(this.gfnTrim(calCntrStartYmdValue)) ){
        			this.gfnAlert((i+1)+"행의 계약시작일자를 입력해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.calCntrStartYmd.setFocus();
        			return;
        		}
        		//계약종료일자
        		if(this.gfnIsNull(this.gfnTrim(calCntrEndYmdValue)) ){
        			this.gfnAlert((i+1)+"행의 계약종료일자를 입력해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.calCntrEndYmd.setFocus();
        			return;
        		}
        		//계약사원번호
        		if(this.gfnIsNull(this.gfnTrim(edtCntrEmpValue)) ){
        			this.gfnAlert((i+1)+"행의 계약사원번호를 입력해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.edtCntrEmp.setFocus();
        			return;
        		}
        		//계약사원명
        		if(this.gfnIsNull(this.gfnTrim(edtCntrEmpNmValue)) ){
        			this.gfnAlert((i+1)+"행의 계약사원명을 입력해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.edtCntrEmpNm.setFocus();
        			return;
        		}

        		//계약단가적용기준
        		if(this.gfnIsNull(this.gfnTrim(rdoCntrUpriceAdapStdValue)) ){
        			this.gfnAlert((i+1)+"행의 계약단가적용기준을 선택해주세요.");
        			this.dsDetail.set_rowposition(i);
        			divFm.rdoCntrUpriceAdapStd.setFocus();
        			return;
        		}
        	}

        	/****************************************************************************************************/


        	if(!this.gfnConfirm("저장하시겠습니까?")) return;



        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("saveCntrInfoList");


        };


        /***********************************************************************************************
         * @function	: fnRenewal
         * @description	: 계약갱신.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnRenewal = function()
        {
        	// 갱신할 행이 없거나 현재행의 상태가 신규인 경우.
        	if(this.dsDetail.rowcount==0 || this.dsDetail.getRowType(this.dsDetail.rowposition)==Dataset.ROWTYPE_INSERT) return;

        	/** 데이터 유효성 체크*********************************************************************/
        	var calCntrEndYmdValue = this.dsList.getColumn(0, "CNTR_END_YMD");	// 최근 계약종료일자
        	if(this.gfnIsNull(calCntrEndYmdValue)){
        		this.gfnAlert("최근 계약종료일자를 확인해주세요.");
        		return;
        	}

        	/********************************************************************************************/

        	var renewalDateFr = this.gfnAddDate(calCntrEndYmdValue,1);
        	var renewalDateTo = this.gfnAddDate(calCntrEndYmdValue,365);
        	var strDateMsg = renewalDateFr.substr(0,4)+"."+renewalDateFr.substr(4,2)+"."+renewalDateFr.substr(6,2)+" ~ "+renewalDateTo.substr(0,4)+"."+renewalDateTo.substr(4,2)+"."+renewalDateTo.substr(6,2)


        	this.gfnCustomConfirm("계약 연장기간은 "+strDateMsg+" 까지 자동연장 됩니다. 계약 갱신을 하시겠습니까?",  function(sPopupId, bResult){
        		if(!bResult) return;

        		this.gfnTransaction("saveRenewalCntr");

        	});



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
        		case "btnSearchBran1" : this.fnOpenPopBran(btnName); break;
        		case "btnSearchBran2" : this.fnOpenPopBran(btnName); break;
        		case "btnSearchEmp1" : this.fnOpenPopEmp(btnName); break;
        		case "btnSearchEmp2" : this.fnOpenPopEmp(btnName); break;
        		case "btnOpenPopCntrUprice" : this.fnOpenPopCntrUprice(); break;
        		case "btnOpenPopCntrItem" : this.fnOpenPopCntrItem(); break;

        		default 		: 	break;
        	}
        };


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
        		pBranCdValue = divFm.edtCntrBranCd.value;
        		pBranNmValue = divFm.edtCntrBranNm.value;
        	}else if(btnName == "btnSearchBran2"){
        		popupId = 'searchPopBran2';
        		pBranCdValue = divFm.edtSaleMgmtBranCd.value;
        		pBranNmValue = divFm.edtSaleMgmtBranNm.value;
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
         * @function		: fnOpenPopEmp
         * @description		: 사원 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopEmp= function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pEmpNoValue = ''; //사원번호
        	var pEmpNmValue = '' //사원명

        	if(btnName == "btnSearchEmp1"){
        		popupId = 'searchPopEmp1';
        		pEmpNoValue = divFm.edtCntrEmp.value;
        		pEmpNmValue = divFm.edtCntrEmpNm.value;

        	}else if(btnName == "btnSearchEmp2"){
        		popupId = 'searchPopEmp2';
        		pEmpNoValue = divFm.edtMgmtEmp.value;
        		pEmpNmValue = divFm.edtMgmtEmpNm.value;
        	}


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



        /***********************************************************************************************
         * @function	: fnOpenPopCntrUprice
         * @description	: 계약단가 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopCntrUprice = function()
        {

        	// 파라미터 설정
        	var popupId = 'popCntrUprice';	//팝업ID
        	var pCustIdValue = this.edtCustId_sc.value; // 기업고객번호
        	var pCustNmValue = this.edtCustNm_sc.value; // 기업고객명
        	var pCustMgmtDlcmCdValue = divFm.edtCustMgmtDlcmCd.value;	// 협력사코드
        	var pSendCustNoValue = divFm.edtSendCustNo.value;	// 발송고객번호
        	var pSendCustNmValue = divFm.edtSendCustNm.value;	// 발송고객명
        	var pCntrStartYmdValue = divFm.calCntrStartYmd.value;	//계약시작일
        	var pCntrEndYmdValue = divFm.calCntrEndYmd.value;	//계약종료일


        	// 신규입력일 경우 계약단가 팝업 호출 못함.
        	var currentRowType = this.dsDetail.getRowType(this.dsDetail.rowposition);
        	if(currentRowType == Dataset.ROWTYPE_INSERT || this.gfnIsNull(pCntrStartYmdValue) || this.gfnIsNull(pCntrEndYmdValue)) {
        		alert("계약 저장후 계약단가설정이 가능합니다.");
        		return;
        	}


        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pCustMgmtDlcmCd	: pCustMgmtDlcmCdValue							// 협력사코드
        				, pSendCustNo		: pSendCustNoValue								// 발송고객번호
        				, pSendCustNm		: pSendCustNmValue								// 발송고객명
        				, pCntrStartYmd		: pCntrStartYmdValue							// 계약시작일
        				, pCntrEndYmd		: pCntrEndYmdValue								// 계약종료일
        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_0070.xfdl", oArg, sPopupCallBack, oOption);
        }


        /***********************************************************************************************
         * @function	: fnOpenPopCntrItem
         * @description	: 계약품목 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopCntrItem = function()
        {
        	// 파라미터 설정
        	var popupId = 'popCntrItem';	//팝업ID
        	var pCustIdValue = this.edtCustId_sc.value; // 기업고객번호
        	var pCustNmValue = this.edtCustNm_sc.value; // 기업고객명
        	var pCustMgmtDlcmCdValue = divFm.edtCustMgmtDlcmCd.value;	// 협력사코드
        	var pSendCustNoValue = divFm.edtSendCustNo.value;	// 발송고객번호
        	var pSendCustNmValue = divFm.edtSendCustNm.value;	// 발송고객명
        	var pCntrStartYmdValue = divFm.calCntrStartYmd.value;	//계약시작일


        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pCustMgmtDlcmCd	: pCustMgmtDlcmCdValue							// 협력사코드
        				, pSendCustNo		: pSendCustNoValue								// 발송고객번호
        				, pSendCustNm		: pSendCustNmValue								// 발송고객명
        				, pCntrStartYmd		: pCntrStartYmdValue							// 계약시작일
        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_0080.xfdl", oArg, sPopupCallBack, oOption);
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

        		case "searchPopBran1" :
        			divFm.edtCntrBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtCntrBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "searchPopBran2" :
        			divFm.edtSaleMgmtBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtSaleMgmtBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "searchPopEmp1" :
        			divFm.edtCntrEmp.set_value(dsObj.getColumn(0, "EMP_NO"));
        			divFm.edtCntrEmpNm.set_value(dsObj.getColumn(0, "EMP_NM"));
        		break;

        		case "searchPopEmp2" :
        			divFm.edtMgmtEmp.set_value(dsObj.getColumn(0, "EMP_NO"));
        			divFm.edtMgmtEmpNm.set_value(dsObj.getColumn(0, "EMP_NM"));
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


        		// 계약갱신
        		case "btnRenewal" :
        			this.fnRenewal();
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
        			case	'edtCntrBranCd' : divFm.btnSearchBran1.click(); break;
        			case	'edtCntrBranNm' : divFm.btnSearchBran1.click(); break;
        			case	'edtSaleMgmtBranCd' : divFm.btnSearchBran2.click(); break;
        			case	'edtSaleMgmtBranNm' : divFm.btnSearchBran2.click(); break;

        			case	'edtCntrEmp' : divFm.btnSearchEmp1.click(); break;
        			case	'edtMgmtEmp' : divFm.btnSearchEmp2.click(); break;

        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtCntrBranCd' : divFm.edtCntrBranNm.set_value(''); break;
        			case	'edtCntrBranNm' : divFm.edtCntrBranCd.set_value(''); break;
        			case	'edtSaleMgmtBranCd' : divFm.edtSaleMgmtBranNm.set_value(''); break;
        			case	'edtSaleMgmtBranNm' : divFm.edtSaleMgmtBranCd.set_value(''); break;
        			case	'edtCntrEmp' : divFm.edtCntrEmpNm.set_value(''); break;
        			case	'edtMgmtEmp' : divFm.edtMgmtEmpNm.set_value(''); break;
        			default		: 	break;
        		}
        	}
        };




        /***********************************************************************************************
         * @function	: dsList_onrowposchanged
         * @description	: 계약 히스토리 로우변경 이벤트
         * @param		: obj	- nexacro.NormalDataset
         * @param		: e		- nexacro.DSRowPosChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsList_onrowposchanged = function(obj,e)
        {
        	var nRowType = this.dsList.getRowType(e.newrow);

        	// 신규입력일경우 계약시작일자 변경가능
        	if(nRowType == Dataset.ROWTYPE_INSERT){
        		divFm.calCntrStartYmd.set_enable(true);
        	}
        	// 신규입력이 아닌경우 계약시작일자 변경불가능
        	else{

        		for(var i=0; i<this.dsList.rowcount; i++){
        			if(this.dsList.getRowType(i) == Dataset.ROWTYPE_INSERT)
        				this.dsList.deleteRow(i);
        		}

        		divFm.calCntrStartYmd.set_enable(false);


        		// 계약등록정보 조회
        		this.fnSearchDetail();

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
            this.div01.form.edtMgmtEmp.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtCntrEmp.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtCntrBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.btnSearchBran1.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.edtCntrBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.edtSaleMgmtBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.btnSearchBran2.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.edtSaleMgmtBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div01.form.sta001_00_00_00_00_00_00_01_01.addEventHandler("onclick",this.div02_00_sta001_00_00_00_00_00_00_01_01_onclick,this);
            this.div01.form.btnSearchEmp2.addEventHandler("onclick",this.fnOpenPop,this);
            this.div01.form.btnSearchEmp1.addEventHandler("onclick",this.fnOpenPop,this);
            this.div02_01_00.form.gridBran.addEventHandler("oncelldblclick",this.gridBran_oncelldblclick,this);
            this.btnOpenPopCntrUprice.addEventHandler("onclick",this.fnOpenPop,this);
            this.btnOpenPopCntrItem.addEventHandler("onclick",this.fnOpenPop,this);
            this.btnRenewal.addEventHandler("onclick",this.btnOnClick,this);
            this.div02_01.form.gridBran.addEventHandler("oncellclick",this.div02_01_gridBran_oncellclick,this);
            this.div02_01_01.form.gridBran.addEventHandler("oncelldblclick",this.gridBran_oncelldblclick,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustMgmtDlcmCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0060.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
