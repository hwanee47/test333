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
            this.set_name("RCPT_DLVY_P020");
            this.set_titletext("파일접수 오류수정");
            if (Form == this.constructor)
            {
                this._setFormPosition(1235,490);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSVT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_ADDR_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsRsvtDv=ds1 dsItem=ds2 dsBoxTy=ds3 dsFareDv=ds4</Col><Col id=\"QUERY_LIST\">q1=RV002 q2=MS042 q3=CS007 q4=CS006</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getDlvyRsrvErrList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">getDlvyRsrvErrList</Col></Row><Row><Col id=\"SVC_ID\">saveDlvyRsrvErrList</Col><Col id=\"IN_DATASET_LIST\">dsList=dsList</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">saveDlvyRsrvErrList</Col></Row><Row><Col id=\"SVC_ID\">getZipAddrInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsZipAddrInfo=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getZipAddrInfoList</Col></Row><Row><Col id=\"SVC_ID\">getZipAddrInfoList2</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsZipAddrInfo=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getZipAddrInfoList</Col></Row><Row><Col id=\"SVC_ID\">getZipAddrInfoList3</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsZipAddrInfo=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getZipAddrInfoList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRsvtDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_USE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_1\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_2\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_3\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORINVC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MPCK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MPCK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FRT\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_ERR_YN\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoxTy", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFareDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZipAddrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ADDR\" size=\"100\" type=\"STRING\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","195","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("5");
            obj.set_text("파일접수 오류수정");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","0","34",null,"40","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","1153","43","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00_00","565","43","57","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("10");
            obj.set_text("예약구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboRsvtDv_sc","621","43","91","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("11");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsRsvtDv");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","10","85","780",null,null,"10",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("12");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"87\" band=\"left\"/><Column size=\"272\" band=\"left\"/><Column size=\"103\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"예약구분\"/><Cell col=\"3\" text=\"오류메세지\"/><Cell col=\"4\" text=\"등록자\"/><Cell col=\"5\" text=\"등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:RCPT_DV\" edittype=\"none\" expandshow=\"hide\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsRsvtDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:RCPT_ERR_MSG\" expandshow=\"hide\" maskedittype=\"number\" textAlign=\"left\" color=\"red\"/><Cell col=\"4\" text=\"bind:REG_EMP_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:REG_DTIME\" edittype=\"none\" textAlign=\"center\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00_00_00","365","43","57","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("13");
            obj.set_text("접수일자");
            this.addChild(obj.name, obj);

            obj = new Calendar("calRcptYmd_sc","421","43","106","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("cal_ty01");
            obj.set_value("20200402");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","795","85","430",null,null,"13",null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Tabpage("gdsTabPage",this.tab00);
            obj.set_text("품목정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Static("sta001","0","29","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("집화예정일자");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02","97","0",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("13");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","0","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("14");
            obj.set_text("품목");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("운임구분");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","0","87","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("17");
            obj.set_text("기본운임");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_01","0","116","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("18");
            obj.set_text("운송장번호");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_01_00","0","145","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("19");
            obj.set_text("원운송장번호");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_01_00_00","0","174","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("20");
            obj.set_text("배송메세지1");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_01_00_00_00","0","203","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("21");
            obj.set_text("배송메세지2");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_01_00_00_00_00","0","232","98","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("22");
            obj.set_text("배송메세지3");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00","97","29",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("23");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00","97","58",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("24");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00","97","87",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("25");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00_00_00","97","174",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("26");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_01","97","116",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("27");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00_01","97","145",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("28");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00_00_00_00","97","232",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("29");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00_01_00","97","203",null,"30","0",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("30");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Combo("cboItem","101","4","106","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsItem");
            obj.set_enable("false");
            obj.set_text("선택1");
            obj.set_value("01");
            obj.set_index("0");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Edit("edtItemNm","209","4",null,"23","3",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            obj.set_inputtype("normal");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Combo("cboFareDv","101","62","106","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("3");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsFareDv");
            obj.set_enable("false");
            obj.set_text("선택1");
            obj.set_value("01");
            obj.set_index("0");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Combo("cboBoxTy","307","62",null,"23","3",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("4");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsBoxTy");
            obj.set_enable("false");
            obj.set_text("선택1");
            obj.set_value("01");
            obj.set_index("0");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new MaskEdit("mskFrt","101","90","106","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("5");
            obj.set_cssclass("inp_ty01");
            obj.set_type("number");
            obj.set_format("###,###,###");
            obj.set_enable("false");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01","210","58","94","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("31");
            obj.set_text("박스타입");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","210","87","94","30",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("16");
            obj.set_text("박스수량");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new MaskEdit("mskBoxQty","307","90",null,"23","3",null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("6");
            obj.set_cssclass("inp_ty01");
            obj.set_type("number");
            obj.set_format("###,###,###");
            obj.set_enable("false");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Edit("edtWaybillNo","101","120","326","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Edit("edtOrinvcNo","101","149","326","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Edit("edtRemark1","101","177","326","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Edit("edtRemark2","101","206","326","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Edit("edtRemark3","101","236","326","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Calendar("calPickupExptYmd","101","32","106","23",null,null,null,null,null,null,this.tab00.gdsTabPage.form);
            obj.set_taborder("2");
            obj.set_cssclass("cal_ty01");
            obj.set_value("20200402");
            obj.set_enable("false");
            this.tab00.gdsTabPage.addChild(obj.name, obj);

            obj = new Tabpage("senderTabPage",this.tab00);
            obj.getSetter("domainId").set("T2125");
            obj.set_tabbuttonheight("30");
            obj.set_text("송화인정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("divTab1","0","0",null,null,"0","0",null,null,null,null,this.tab00.senderTabPage.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.tab00.senderTabPage.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","98","30",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("11");
            obj.set_text("송화인명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02","97","0",null,"30","0",null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("12");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00","97","29",null,"30","0",null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("13");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","98","30",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("14");
            obj.set_text("송화인전화번호");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","98","30",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("송화인기타전화번호");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00","97","58",null,"30","0",null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("16");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","87","98","57",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("17");
            obj.set_text("송화인주소");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00","97","87",null,"57","0",null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("18");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtSendrNm","101","3",null,"23","3",null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboSendrTelNo1","101","33","61","23",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("false");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("1");
            obj.set_text("010");
            obj.set_index("18");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","161","35","15","18",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("19");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtSendrTelNo2","175","33","49","23",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("2");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","223","35","15","18",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtSendrTelNo3","237","33","49","23",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("3");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtSendrCellNo3","237","62","49","23",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("6");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02_00_01_00","223","64","15","18",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtSendrCellNo2","175","62","49","23",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("5");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","161","64","15","18",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboSendrCellNo1","101","62","61","23",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("false");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("4");
            obj.set_text("010");
            obj.set_index("18");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo","101","91","75","23",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("inp_ty01");
            obj.set_format("###-###");
            obj.set_type("string");
            obj.set_enable("false");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr1","176","91","25","23",null,null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_search01");
            obj.set_enable("false");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtAddr","200","91",null,"23","3",null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","101","117",null,"23","3",null,null,null,null,null,this.tab00.senderTabPage.form.divTab1.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.senderTabPage.form.divTab1.addChild(obj.name, obj);

            obj = new Tabpage("receiverTabPage",this.tab00);
            obj.set_text("수화인정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","98","30",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("11");
            obj.set_text("수화인명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02","97","0",null,"30","0",null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("12");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00","97","29",null,"30","0",null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("13");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","98","30",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("14");
            obj.set_text("수화인전화번호");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","98","30",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("수화인기타전화번호");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00","97","58",null,"30","0",null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("16");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","87","98","57",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("17");
            obj.set_text("수화인주소");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00","97","87",null,"57","0",null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("18");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Edit("edtRcvrNm","101","3",null,"23","3",null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Combo("cboRcvrTelNo1","101","33","61","23",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("false");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("1");
            obj.set_text("010");
            obj.set_index("18");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","161","35","15","18",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("19");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Edit("edtRcvrTelNo2","175","33","49","23",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("2");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","223","35","15","18",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Edit("edtRcvrTelNo3","237","33","49","23",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("3");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Edit("edtRcvrCellNo3","237","62","49","23",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("6");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("sta02_00_01_00","223","64","15","18",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Edit("edtRcvrCellNo2","175","62","49","23",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("5");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","161","64","15","18",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Combo("cboRcvrCellNo1","101","62","61","23",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("false");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("4");
            obj.set_text("010");
            obj.set_index("18");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo2","101","91","75","23",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("7");
            obj.set_cssclass("inp_ty01");
            obj.set_format("###-###");
            obj.set_type("string");
            obj.set_enable("false");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr2","176","91","25","23",null,null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_search01");
            obj.set_enable("false");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","200","91",null,"23","3",null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr2","101","117",null,"23","3",null,null,null,null,null,this.tab00.receiverTabPage.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.receiverTabPage.addChild(obj.name, obj);

            obj = new Tabpage("orderTabPage",this.tab00);
            obj.set_text("주문자정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","98","30",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("11");
            obj.set_text("주문자명");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02","97","0",null,"30","0",null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("12");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00","97","29",null,"30","0",null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("13");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","98","30",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("14");
            obj.set_text("주문자전화번호");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","98","30",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("주문자기타전화번호");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00","97","58",null,"30","0",null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("16");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","87","98","57",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("17");
            obj.set_text("주문자주소");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 3px");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00","97","87",null,"57","0",null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("18");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Edit("edtOrdrrNm","101","3",null,"23","3",null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Combo("cboOrdrrTelNo1","101","33","61","23",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("false");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("1");
            obj.set_text("010");
            obj.set_index("18");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","161","35","15","18",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("19");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Edit("edtOrdrrTelNo2","175","33","49","23",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("2");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","223","35","15","18",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Edit("edtOrdrrTelNo3","237","33","49","23",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("3");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Edit("edtOrdrrCellNo3","237","62","49","23",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("6");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("sta02_00_01_00","223","64","15","18",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Edit("edtOrdrrCellNo2","175","62","49","23",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("5");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","161","64","15","18",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Combo("cboOrdrrCellNo1","101","62","61","23",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("false");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("4");
            obj.set_text("010");
            obj.set_index("18");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo3","101","91","75","23",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("7");
            obj.set_cssclass("inp_ty01");
            obj.set_format("###-###");
            obj.set_type("string");
            obj.set_enable("false");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr3","176","91","25","23",null,null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_search01");
            obj.set_enable("false");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Edit("edtAddr3","200","91",null,"23","3",null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("9");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr3","101","117",null,"23","3",null,null,null,null,null,this.tab00.orderTabPage.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.tab00.orderTabPage.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","25","43","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("0");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","62","43","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_inputtype("normal");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","152","43","178","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","1006","43","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","1080","43","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1235,490,this,function(p){});
            obj.set_description("");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboRsvtDv_sc","value","dsSearch","RSVT_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calRcptYmd_sc","value","dsSearch","RCPT_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.senderTabPage.form.divTab1.form.edtSendrNm","value","dsList","SENDR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.senderTabPage.form.divTab1.form.cboSendrTelNo1","value","dsList","SENDR_TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.senderTabPage.form.divTab1.form.edtSendrTelNo2","value","dsList","SENDR_TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab00.senderTabPage.form.divTab1.form.edtSendrTelNo3","value","dsList","SENDR_TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab00.senderTabPage.form.divTab1.form.edtSendrCellNo3","value","dsList","SENDR_CELL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab00.senderTabPage.form.divTab1.form.edtSendrCellNo2","value","dsList","SENDR_CELL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab00.senderTabPage.form.divTab1.form.cboSendrCellNo1","value","dsList","SENDR_CELL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab00.senderTabPage.form.divTab1.form.mskZipNo","value","dsList","SENDR_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab00.senderTabPage.form.divTab1.form.edtAddr","value","dsList","SENDR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab00.senderTabPage.form.divTab1.form.edtDetailAddr","value","dsList","SENDR_DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab00.receiverTabPage.form.edtRcvrNm","value","dsList","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab00.receiverTabPage.form.cboRcvrTelNo1","value","dsList","RCVR_TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab00.receiverTabPage.form.edtRcvrTelNo2","value","dsList","RCVR_TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab00.receiverTabPage.form.edtRcvrTelNo3","value","dsList","RCVR_TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab00.receiverTabPage.form.edtRcvrCellNo3","value","dsList","RCVR_CELL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab00.receiverTabPage.form.edtRcvrCellNo2","value","dsList","RCVR_CELL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab00.receiverTabPage.form.cboRcvrCellNo1","value","dsList","RCVR_CELL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab00.receiverTabPage.form.mskZipNo2","value","dsList","RCVR_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab00.receiverTabPage.form.edtAddr2","value","dsList","RCVR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab00.receiverTabPage.form.edtDetailAddr2","value","dsList","RCVR_DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab00.orderTabPage.form.edtOrdrrNm","value","dsList","ORDRR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab00.orderTabPage.form.cboOrdrrTelNo1","value","dsList","ORDRR_TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab00.orderTabPage.form.edtOrdrrTelNo2","value","dsList","ORDRR_TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab00.orderTabPage.form.edtOrdrrTelNo3","value","dsList","ORDRR_TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab00.orderTabPage.form.edtOrdrrCellNo3","value","dsList","ORDRR_CELL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab00.orderTabPage.form.edtOrdrrCellNo2","value","dsList","ORDRR_CELL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab00.orderTabPage.form.cboOrdrrCellNo1","value","dsList","ORDRR_CELL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab00.orderTabPage.form.mskZipNo3","value","dsList","ORDRR_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab00.orderTabPage.form.edtAddr3","value","dsList","ORDRR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab00.orderTabPage.form.edtDetailAddr3","value","dsList","ORDRR_DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab00.gdsTabPage.form.mskFrt","value","dsList","FRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab00.gdsTabPage.form.mskBoxQty","value","dsList","BOX_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab00.gdsTabPage.form.cboItem","value","dsList","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tab00.gdsTabPage.form.edtItemNm","value","dsList","GDS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tab00.gdsTabPage.form.calPickupExptYmd","value","dsList","PICKUP_EXPCT_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tab00.gdsTabPage.form.cboFareDv","value","dsList","FRT_DV_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","tab00.gdsTabPage.form.cboBoxTy","value","dsList","BOX_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","tab00.gdsTabPage.form.edtWaybillNo","value","dsList","WAYBILL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","tab00.gdsTabPage.form.edtOrinvcNo","value","dsList","ORINVC_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","tab00.gdsTabPage.form.edtRemark1","value","dsList","REMARK_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","tab00.gdsTabPage.form.edtRemark2","value","dsList","REMARK_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","tab00.gdsTabPage.form.edtRemark3","value","dsList","REMARK_3");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("RCPT_DLVY_P020.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_DLVY_P020.xfdl", function() {
        /**
        *  파일접수 오류수정
        *  @MenuPath
        *  @FileName 		RCPT_DLVY_P020.xfdl
        *  @Creator 		KJH
        *  @CreateDate 		2020.06.17
        *  @Desction        폼 템플릿
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.06.17		Kim Jin Hwan			최초 생성
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
        	this.objApp = nexacro.getApplication();

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);

        	this.fnInit();



        	this.fnSearch();

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


        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "CUST_ID", this.getOwnerFrame().pCustId);
        	this.dsSearch.setColumn(0, "CUST_NM", this.getOwnerFrame().pCustNm);
        	this.dsSearch.setColumn(0, "RCPT_YMD", this.getOwnerFrame().pRcptYmd);

        	this.fnSetDefault();
        };


        /***********************************************************************************************
         * @function	: fnSetDefault
         * @description	: 초기값 셋팅
         * @return N/A
        /***********************************************************************************************/
        this.fnSetDefault = function()
        {
        	this.cboRsvtDv_sc.set_value("");		// 전체

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


        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;


        		// 삭제
        		case "btnDelete" :
        			this.fnDelete();
        		break;


        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 레이아웃 리스트조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {


        	this.fnSetComponentProperty(false);

        	// 조회
        	this.dsList.clear();
        	this.gfnTransaction("getDlvyRsrvErrList");

        };


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {

        	//하나라도 체크를 해야함
        	if(this.dsList.getCaseCount("CHK==1") <= 0) {
        		this.gfnAlert("저장할 내용을 1건 이상 선택해야합니다.");
        		return;
        	}

        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveDlvyRsrvErrList");
        	});


        }


        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function()
        {
        	return;

        	if(this.dsMaster.getRowCount() == 0){
        		this.gfnAlert("삭제할 대상이 없습니다.");
        		return;
        	}


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		var nRowType = this.dsMaster.getRowType(this.dsMaster.rowposition);

        		if( nRowType == Dataset.ROWTYPE_INSERT ){

        			this.dsMaster.deleteRow(this.dsMaster.rowposition);
        			this.gfnAlert("삭제되었습니다.");
        			this.fnSearch();

        		}else{

        			var custIdValue = this.edtCustId_sc.value;
        			var custNmValue = this.edtCustNm_sc.value;
        			var rsvtDvValue = this.cboRsvtDv.value;
        			var xlsFrmNmOrgValue = this.dsMaster.getColumn(this.dsMaster.rowposition, "XLS_FRM_NM_ORG");

        			this.dsDelete.setColumn(0, "CUST_ID", custIdValue);
        			this.dsDelete.setColumn(0, "WAREIO_DV", rsvtDvValue);
        			this.dsDelete.setColumn(0, "XLS_FRM_NM", xlsFrmNmOrgValue);


        			this.gfnTransaction("deleteCustLayout");
        		}
        	});
        }




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
        	//trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

        	if(errorCode < 0) {
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 사용여부
        			this.fnAddCodeDef(this.dsRsvtDv, '전체');


        		break;


        		// 저장
        		case "saveDlvyRsrvErrList":
        			this.gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		break;


        		// 삭제
        		case "deleteCustLayout":
        			this.gfnAlert("삭제되었습니다.");
        			this.fnSearch();
        		break;


        		// 보내는분 주소 조회처리.
        		case "getZipAddrInfoList":

        			// 1건 조회된 경우 셋팅.
        			if(this.dsZipAddrInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_ZIP_NO", this.dsZipAddrInfo.getColumn(0, "ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_ADDR", this.dsZipAddrInfo.getColumn(0, "ADDR"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.senderTabPage.form.divTab1.form.btnSearchAddr1.click();
        			}
        		break;


        		// 받는분 주소 조회처리.
        		case "getZipAddrInfoList2":

        			// 1건 조회된 경우 셋팅.
        			if(this.dsZipAddrInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_ZIP_NO", this.dsZipAddrInfo.getColumn(0, "ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_ADDR", this.dsZipAddrInfo.getColumn(0, "ADDR"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.receiverTabPage.form.divTab1.form.btnSearchAddr2.click();
        			}
        		break;



        		// 주문자 주소 조회처리.
        		case "getZipAddrInfoList3":

        			// 1건 조회된 경우 셋팅.
        			if(this.dsZipAddrInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "ORDRR_ZIP_NO", this.dsZipAddrInfo.getColumn(0, "ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "ORDRR_ADDR", this.dsZipAddrInfo.getColumn(0, "ADDR"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.orderTabPage.form.btnSearchAddr3.click();
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
        this.fnPopupCallback = function(popupId, dsObj)
        {
        	//trace("[fnPopupCallback()] sPopupId["+popupId+"] rtnMsg["+JSON.stringify(dsObj)+"]");

        	switch(popupId) {


        		case "searchPopAddr1":
        			if(dsObj.rowcount > 0){
        				this.tab00.senderTabPage.form.divTab1.form.mskZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));		// 우편번호
        				this.tab00.senderTabPage.form.divTab1.form.edtAddr.set_value(dsObj.getColumn(0,"ADDR"));			// 주소
        			}
        		break;


        		case "searchPopAddr2":
        			if(dsObj.rowcount > 0){
        				this.tab00.receiverTabPage.form.divTab1.form.mskZipNo2.set_value(dsObj.getColumn(0,"ZIP_NO"));		// 우편번호
        				this.tab00.receiverTabPage.form.divTab1.form.edtAddr2.set_value(dsObj.getColumn(0,"ADDR"));		// 주소
        			}
        		break;


        		case "searchPopAddr3":
        			if(dsObj.rowcount > 0){
        				this.tab00.orderTabPage.form.mskZipNo3.set_value(dsObj.getColumn(0,"ZIP_NO"));		// 우편번호
        				this.tab00.orderTabPage.form.edtAddr3.set_value(dsObj.getColumn(0,"ADDR"));		// 주소
        			}
        		break;


        		default :
        		break;
        	}
        };



        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/
        /***********************************************************************************************
         * @function		: fnSearchAddrInfo
         * @description		: 주소 정보 조회
         * @param 			: gubun	- String (보내는분, 받는분)
         * @param 			: zipNo	- String (우편번호)
         * @param 			: addr	- String (주소)
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSearchAddrInfo = function(gubun, zipNo, addr)
        {

        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "ZIP_NO", zipNo);
        	this.dsSearch.setColumn(0, "DETAIL_ADDR", addr);


        	// 우편번호가 5자리면 도로명주소로 조회
        	if( this.gfnTrim(zipNo).length == "5" ){
        		this.dsSearch.setColumn(0, "ZIP_ADDR_DV", "02");
        	}
        	else{
        		this.dsSearch.setColumn(0, "ZIP_ADDR_DV", "01");
        	}

        	if(gubun == "sender"){
        		this.gfnTransaction("getZipAddrInfoList");
        	}
        	else if(gubun == "receiver"){
        		this.gfnTransaction("getZipAddrInfoList2");
        	}
        	else{
        		this.gfnTransaction("getZipAddrInfoList3");
        	}
        }


        /***********************************************************************************************
         * @function		: fnOpenPop
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

        		case "btnSearchAddr1" : this.fnOpenPopAddr(btnName); break;
        		case "btnSearchAddr2" : this.fnOpenPopAddr(btnName); break;
        		case "btnSearchAddr3" : this.fnOpenPopAddr(btnName); break;
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
        	var zipNo = '';
        	var addr = '';
        	var zipAddrDv = '';

        	if(btnName == 'btnSearchAddr1'){
        		popupId = 'searchPopAddr1';
        		zipNo = this.tab00.senderTabPage.form.divTab1.form.mskZipNo.value;
        		addr = this.tab00.senderTabPage.form.divTab1.form.edtAddr.value
        	}
        	else if(btnName == 'btnSearchAddr2'){
        		popupId = 'searchPopAddr2';
        		zipNo = this.tab00.receiverTabPage.form.divTab1.form.mskZipNo2.value;
        		addr = this.tab00.receiverTabPage.form.divTab1.form.edtAddr2.value
        	}
        	else{
        		popupId = 'searchPopAddr3';
        		zipNo = this.tab00.orderTabPage.form.mskZipNo3.value;
        		addr = this.tab00.orderTabPage.form.edtAddr3.value;
        	}

        	// 도로명
        	if( this.gfnTrim(zipNo).length == "5" ){
        		zipAddrDv = "02";
        	}
        	// 지번
        	else{
        		zipAddrDv = "01";
        	}

        	// 팝업 호출
        	var oArg = {
        				  pZipNo		: zipNo
        				, pAddr			: addr
        				, pZipAddrDv	: zipAddrDv
        				, pSeqNo	 	: ""											//
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
         * @function	: fnAfterCodeDef
         * @description	: 코드조회후 선택,전체 추가
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCodeDef = function(dsObj, strText)
        {
        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM', strText);
        }

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        /***********************************************************************************************
         * @function	: dsList_oncolumnchanged
         * @description	: 데이터셋 값 변경
         * @param		: obj	- Dataset Object
         * @param       : e - nexacro.DSColChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	// 체크박스
        	if(e.columnid == "CHK"){

        		var bEnable = false;

        		if(e.newvalue == 1){
        			bEnable = true;
        		}

        		// 체크 또는 체크해제시 컴포넌트 속성 셋팅
        		this.fnSetComponentProperty(bEnable);
        	}
        };


        /***********************************************************************************************
         * @function	: fnSetComponentProperty
         * @description	: 컴포넌트 속성 셋팅
         * @param		: pChkYn	- Boolean
         * @return N/A
        /***********************************************************************************************/
        this.fnSetComponentProperty = function(pEnable)
        {
        	// 품목정보
        	this.tab00.gdsTabPage.form.cboItem.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.edtItemNm.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.calPickupExptYmd.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.cboFareDv.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.cboBoxTy.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.mskFrt.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.mskBoxQty.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.edtWaybillNo.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.edtOrinvcNo.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.edtRemark1.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.edtRemark2.set_enable(pEnable);
        	this.tab00.gdsTabPage.form.edtRemark3.set_enable(pEnable);



        	// 송화인정보 & 수화인정보

        	/* 예약구분에 따라 활성화 컴포넌트가 다름
        		# 일반(01)인경우 송화인정보 -> 비활성화, 수화인정보 -> 활성화
        		# 반품(02)인경우 송화인정보 -> 활성화  , 수화인정보 -> 비활성화
        	*/

        	var cboRsvtDvValue = this.cboRsvtDv_sc.value;

        	// 일반인경우
        	if(cboRsvtDvValue == "01"){
        		this.tab00.receiverTabPage.form.divTab1.form.edtRcvrNm.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.cboRcvrTelNo1.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.edtRcvrTelNo2.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.edtRcvrTelNo3.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.cboRcvrCellNo1.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.edtRcvrCellNo2.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.edtRcvrCellNo3.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.mskZipNo2.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.btnSearchAddr2.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.edtAddr2.set_enable(pEnable);
        		this.tab00.receiverTabPage.form.divTab1.form.edtDetailAddr2.set_enable(pEnable);
        	}
        	// 반품인경우
        	else{
        		this.tab00.senderTabPage.form.divTab1.form.edtSendrNm.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.cboSendrTelNo1.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.edtSendrTelNo2.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.edtSendrTelNo3.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.cboSendrCellNo1.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.edtSendrCellNo2.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.edtSendrCellNo3.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.mskZipNo.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.btnSearchAddr1.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.edtAddr.set_enable(pEnable);
        		this.tab00.senderTabPage.form.divTab1.form.edtDetailAddr.set_enable(pEnable);

        	}


        	// 주문자정보

        	this.tab00.orderTabPage.form.edtOrdrrNm.set_enable(pEnable);
        	this.tab00.orderTabPage.form.cboOrdrrTelNo1.set_enable(pEnable);
        	this.tab00.orderTabPage.form.edtOrdrrTelNo2.set_enable(pEnable);
        	this.tab00.orderTabPage.form.edtOrdrrTelNo3.set_enable(pEnable);
        	this.tab00.orderTabPage.form.cboOrdrrCellNo1.set_enable(pEnable);
        	this.tab00.orderTabPage.form.edtOrdrrCellNo2.set_enable(pEnable);
        	this.tab00.orderTabPage.form.edtOrdrrCellNo3.set_enable(pEnable);
        	this.tab00.orderTabPage.form.mskZipNo3.set_enable(pEnable);
        	this.tab00.orderTabPage.form.btnSearchAddr3.set_enable(pEnable);
        	this.tab00.orderTabPage.form.edtAddr3.set_enable(pEnable);
        	this.tab00.orderTabPage.form.edtDetailAddr3.set_enable(pEnable);


        }


        /***********************************************************************************************
         * @function	: RCPT_DLVY_P020_onclose
         * @description	: 폼 닫으면 파일접수 재조회
         * @param		: obj	- Form
         * @param		: e	- CloseEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.RCPT_DLVY_P020_onclose = function(obj,e)
        {
        	this.opener.fnSearch();
        };

        this.div00_cboItem_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)){
        		this.tab00.gdsTabPage.form.edtItemNm.set_value('');
        	}
        	else{
        		this.tab00.gdsTabPage.form.edtItemNm.set_value(e.posttext);
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

        			case	'mskZipNo' :  this.fnSearchAddrInfo("sender", this.tab00.senderTabPage.form.divTab1.form.mskZipNo.value, this.tab00.senderTabPage.form.divTab1.form.edtAddr.value); break;
        			case	'edtAddr' :  this.fnSearchAddrInfo("sender", this.tab00.senderTabPage.form.divTab1.form.mskZipNo.value, this.tab00.senderTabPage.form.divTab1.form.edtAddr.value); break;
        			case	'mskZipNo2' :  this.fnSearchAddrInfo("receiver", this.tab00.receiverTabPage.form.divTab1.form.mskZipNo2.value, this.tab00.receiverTabPage.form.divTab1.form.edtAddr2.value); break;
        			case	'edtAddr2' :  this.fnSearchAddrInfo("receiver", this.tab00.receiverTabPage.form.divTab1.form.mskZipNo2.value, this.tab00.receiverTabPage.form.divTab1.form.edtAddr2.value); break;
        			case	'mskZipNo3' :  this.fnSearchAddrInfo("order", this.tab00.orderTabPage.form.mskZipNo3.value, this.tab00.orderTabPage.form.edtAddr3.value); break;
        			case	'edtAddr3' :  this.fnSearchAddrInfo("order", this.tab00.orderTabPage.form.mskZipNo3.value, this.tab00.orderTabPage.form.edtAddr3.value); break;

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
        		case	'mskZipNo'	: this.tab00.senderTabPage.form.divTab1.form.edtAddr.set_value(''); break;
        		case	'edtAddr'	: this.tab00.senderTabPage.form.divTab1.form.mskZipNo.set_value(''); break;
        		case	'mskZipNo2'	: this.tab00.receiverTabPage.form.divTab1.form.edtAddr2.set_value(''); break;
        		case	'edtAddr2'	: this.tab00.receiverTabPage.form.divTab1.form.mskZipNo2.set_value(''); break;
        		case	'mskZipNo3'	: this.tab00.orderTabPage.form.edtAddr3.set_value(''); break;
        		case	'edtAddr3'	: this.tab00.orderTabPage.form.mskZipNo3.set_value(''); break;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onclose",this.RCPT_DLVY_P020_onclose,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnOnClick,this);
            this.cboRsvtDv_sc.addEventHandler("onitemchanged",this.cboRsvtDv_onitemchanged,this);
            this.grd_Main.addEventHandler("oncellclick",this.grd_Main_oncellclick,this);
            this.grd_Main.addEventHandler("oncellposchanged",this.grd_Main_oncellposchanged,this);
            this.grd_Main.addEventHandler("onkeydown",this.grd_Main_onkeydown,this);
            this.grd_Main.addEventHandler("oncelldblclick",this.grd_Main_oncelldblclick,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.tab00.gdsTabPage.form.cboItem.addEventHandler("onitemchanged",this.div00_cboItem_onitemchanged,this);
            this.tab00.gdsTabPage.form.mskFrt.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.gdsTabPage.form.mskFrt.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.gdsTabPage.form.mskBoxQty.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.gdsTabPage.form.mskBoxQty.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.gdsTabPage.form.edtWaybillNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.gdsTabPage.form.edtOrinvcNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.gdsTabPage.form.edtRemark1.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.gdsTabPage.form.edtRemark2.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.gdsTabPage.form.edtRemark3.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.senderTabPage.form.divTab1.form.mskZipNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.senderTabPage.form.divTab1.form.mskZipNo.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.senderTabPage.form.divTab1.form.btnSearchAddr1.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.senderTabPage.form.divTab1.form.edtAddr.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.senderTabPage.form.divTab1.form.edtAddr.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.senderTabPage.form.divTab1.form.edtDetailAddr.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.senderTabPage.form.divTab1.form.edtDetailAddr.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.receiverTabPage.form.mskZipNo2.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.receiverTabPage.form.mskZipNo2.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.receiverTabPage.form.btnSearchAddr2.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.receiverTabPage.form.edtAddr2.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.receiverTabPage.form.edtAddr2.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.receiverTabPage.form.edtDetailAddr2.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.receiverTabPage.form.edtDetailAddr2.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.orderTabPage.form.mskZipNo3.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.orderTabPage.form.mskZipNo3.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.orderTabPage.form.btnSearchAddr3.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.orderTabPage.form.edtAddr3.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.orderTabPage.form.edtAddr3.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.orderTabPage.form.edtDetailAddr3.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.orderTabPage.form.edtDetailAddr3.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };

        this.loadIncludeScript("RCPT_DLVY_P020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
