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
            this.set_titletext("주문접수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsOrdSt=ds1</Col><Col id=\"QUERY_LIST\">q1=WM102</Col></Row><Row><Col id=\"SVC_ID\">selectRcptOrdTemp</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">selectRcptOrdTemp</Col></Row><Row><Col id=\"SVC_ID\">insertRcptOrdTemp</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsTemp=dsTemp</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">insertRcptOrdTemp</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">updateRcptOrdTempModi</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">updateRcptOrdTempModi</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">insertRcptOrdDecis</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">insertRcptOrdDecis</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">deleteRcptOrdTemp</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">deleteRcptOrdTemp</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL\" type=\"STRING\" size=\"256\"/><Column id=\"FR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CITY\" size=\"256\" type=\"STRING\"/><Column id=\"FR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BASIC_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"FR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CITY\" size=\"256\" type=\"STRING\"/><Column id=\"TO_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASIC_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"TO_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"PRIO_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REQ_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_DECIS_YMD\" size=\"256\" type=\"STRING\"/><Column id=\"PCHS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ELEC_YMD\" size=\"256\" type=\"STRING\"/><Column id=\"ADAP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ADAP_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_GRP_OPR_CAR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO1\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_1\" size=\"256\" type=\"STRING\"/><Column id=\"REF_DATA_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_3\" size=\"256\" type=\"STRING\"/><Column id=\"REF_DATA_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_5\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_6\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_7\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_8\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_9\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_10\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DV\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR_ABRV\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_PIDV_BRAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DLV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_SUB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_GEN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_PRT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXlsUpld", this);
            obj._setContents("<ColumnInfo><Column id=\"NUM\" size=\"256\" type=\"STRING\"/><Column id=\"AAA\" size=\"256\" type=\"STRING\"/><Column id=\"BBB\" size=\"256\" type=\"STRING\"/><Column id=\"CCC\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelSample", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ORD_QTY\" size=\"256\" type=\"STRING\"/><Column id=\"FR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DETAIL_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"FR_TEL_NO_1\" size=\"256\" type=\"STRING\"/><Column id=\"TO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DETAIL_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"TO_TEL_NO_1\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_REQ_MSG\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SHP_MALL_SLIP_NO\">112233</Col><Col id=\"CUST_CD\">WMS1</Col><Col id=\"SLIP_YMD\"/><Col id=\"CUST_NM\">WMS_CUST1</Col><Col id=\"GDS_CD\">20200316-0001</Col><Col id=\"GDS_NM\">COLA</Col><Col id=\"ORD_QTY\">10</Col><Col id=\"FR_NM\">홍</Col><Col id=\"FR_ZIP_NO\">12345</Col><Col id=\"FR_BASIC_ADDR\">서울시 구로구</Col><Col id=\"FR_DETAIL_ADDR\">123-456번지</Col><Col id=\"FR_TEL_NO_1\">01012345678</Col><Col id=\"TO_NM\">받</Col><Col id=\"TO_ZIP_NO\">09876</Col><Col id=\"TO_BASIC_ADDR\">경남 창원시 의창구</Col><Col id=\"TO_DETAIL_ADDR\">상남시장 202호</Col><Col id=\"TO_TEL_NO_1\">01011112222</Col><Col id=\"CUST_REQ_MSG\">건강하세요</Col></Row><Row><Col id=\"CUST_CD\">WMS1</Col><Col id=\"SLIP_YMD\"/><Col id=\"SHP_MALL_SLIP_NO\">445566</Col><Col id=\"CUST_NM\">WMS_CUST1</Col><Col id=\"GDS_CD\">20200316-0001</Col><Col id=\"ORD_QTY\">15</Col><Col id=\"FR_NM\">길</Col><Col id=\"FR_ZIP_NO\">34567</Col><Col id=\"FR_BASIC_ADDR\">서울시 관악구</Col><Col id=\"FR_DETAIL_ADDR\">홍길빌라 205호</Col><Col id=\"FR_TEL_NO_1\">0223456789</Col><Col id=\"TO_NM\">는</Col><Col id=\"TO_ZIP_NO\">98765</Col><Col id=\"TO_BASIC_ADDR\">경남 진해시</Col><Col id=\"TO_DETAIL_ADDR\">석동 64-1</Col><Col id=\"TO_TEL_NO_1\">01033334444</Col><Col id=\"CUST_REQ_MSG\">코로나 조심하세요</Col></Row><Row><Col id=\"CUST_CD\">WMS1</Col><Col id=\"SLIP_YMD\"/><Col id=\"SHP_MALL_SLIP_NO\">778899</Col><Col id=\"CUST_NM\">WMS_CUST1</Col><Col id=\"GDS_CD\">20200316-0001</Col><Col id=\"GDS_NM\">COKE</Col><Col id=\"ORD_QTY\">20</Col><Col id=\"FR_NM\">동</Col><Col id=\"FR_ZIP_NO\">56789</Col><Col id=\"FR_BASIC_ADDR\">서울시 중구</Col><Col id=\"FR_DETAIL_ADDR\">길동타워 10층</Col><Col id=\"FR_TEL_NO_1\">05534567890</Col><Col id=\"TO_NM\">다</Col><Col id=\"TO_ZIP_NO\">87654</Col><Col id=\"TO_BASIC_ADDR\">부산 광역시 해운대구</Col><Col id=\"TO_DETAIL_ADDR\">22번째 모래사장</Col><Col id=\"TO_TEL_NO_1\">01055556666</Col><Col id=\"CUST_REQ_MSG\">제가 고민이 있는데..</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"FR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REQ_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL\" type=\"STRING\" size=\"256\"/><Column id=\"FR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CITY\" type=\"STRING\" size=\"256\"/><Column id=\"FR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CITY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"PRIO_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REQ_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_DECIS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"PCHS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ELEC_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ADAP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ADAP_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_GRP_OPR_CAR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO1\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_5\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_6\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_7\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_8\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_9\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_10\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_ABRV\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_PIDV_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_SUB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_GEN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_PRT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DIV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"STA_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdSt", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta09","21","1","289","34",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("주문관리 > 주문접수");
            obj.set_fittocontents("width");
            obj.set_cssclass("top_title_route01");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","0","sta09:0",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","68","23","324",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","290","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("9");
            obj.set_text("주문접수일자");
            this.addChild(obj.name, obj);

            obj = new Div("divDate","376","43","240","24",null,null,null,null,null,null,this);
            obj.set_async("true");
            obj.set_cssclass("inp_cal01");
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("cmm::cmmCalFromTo.xfdl");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00_00","10",null,"71","31",null,"8",null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("10");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","80",null,"386","24",null,"10",null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("btnSampleDownload","570",null,"102","23",null,"11",null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T0672");
            obj.set_fittocontents("none");
            obj.set_taborder("12");
            obj.set_text("양식 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnxlsUpld","473",null,"94","23",null,"11",null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("13");
            obj.set_text("엑셀 업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"30","42",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("14");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"87\"/><Column size=\"74\"/><Column size=\"90\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"119\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"128\"/><Column size=\"166\"/><Column size=\"95\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"128\"/><Column size=\"166\"/><Column size=\"95\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No\"/><Cell col=\"1\" rowspan=\"2\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" rowspan=\"2\" text=\"고객코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객명\"/><Cell col=\"4\" rowspan=\"2\" text=\"주문일자\"/><Cell col=\"5\" rowspan=\"2\" text=\"고객&#13;&#10;주문번호\"/><Cell col=\"6\" rowspan=\"2\" text=\"작업구분\"/><Cell col=\"7\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"8\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"9\" rowspan=\"2\" text=\"주문수량\"/><Cell col=\"10\" rowspan=\"2\" text=\"에러메세지\"/><Cell col=\"11\" rowspan=\"2\" text=\"등록자\"/><Cell col=\"12\" colspan=\"5\" text=\"주문자정보\"/><Cell col=\"17\" colspan=\"5\" text=\"수화인정보\"/><Cell col=\"22\" rowspan=\"2\" text=\"고객요청메세지\"/><Cell row=\"1\" col=\"12\" text=\"주문자명\"/><Cell row=\"1\" col=\"13\" text=\"우편번호\"/><Cell row=\"1\" col=\"14\" text=\"주소\"/><Cell row=\"1\" col=\"15\" text=\"상세주소\"/><Cell row=\"1\" col=\"16\" text=\"전화번호\"/><Cell row=\"1\" col=\"17\" text=\"수화인\"/><Cell row=\"1\" col=\"18\" text=\"우편번호\"/><Cell row=\"1\" col=\"19\" text=\"주소\"/><Cell row=\"1\" col=\"20\" text=\"상세주소\"/><Cell row=\"1\" col=\"21\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CUST_CD\" edittype=\"none\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"show\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CUST_NM\" edittype=\"none\" expandshow=\"hide\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:SLIP_YMD\" edittype=\"none\" displaytype=\"date\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:SHP_MALL_SLIP_NO\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:WORK_DV_CD\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsOrdSt\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"center\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:GDS_CD\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"show\" maskedittype=\"number\" textAlign=\"left\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:ORD_QTY\" edittype=\"normal\" displaytype=\"normal\" textareainputtype=\"normal\" maskeditlimitbymask=\"decimal\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:ERR_MSG\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:REG_EMP_ID\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:FR_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:FR_ZIP_NO\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"14\" text=\"bind:FR_BASIC_ADDR\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:FR_DETAIL_ADDR\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:FR_TEL_NO_1\" edittype=\"none\"/><Cell col=\"17\" text=\"bind:TO_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"18\" text=\"bind:TO_ZIP_NO\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"19\" text=\"bind:TO_BASIC_ADDR\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:TO_DETAIL_ADDR\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:TO_TEL_NO_1\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"22\" text=\"bind:CUST_REQ_MSG\" edittype=\"none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"7","68","23","251",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"7","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"7","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("6");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnDecis",null,"7","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T1988");
            obj.set_fittocontents("none");
            obj.set_taborder("7");
            obj.set_text("확정");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","657","44","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("15");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","694","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","784","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","808","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","87","44","161","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("WAREH_CD");
            obj.set_datacolumn("WAREH_NM");
            obj.set_displayrowcount("6");
            obj.set_taborder("17");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_cssclass("sel_ty01_req");
            obj.set_innerdataset("gdsWarehAuthList");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","25","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("18");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcelData","6","845","67.31%",null,null,"-180",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("19");
            obj.set_visible("false");
            obj.set_binddataset("dsExcelSample");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"전표일자\"/><Cell col=\"1\" rowspan=\"2\" text=\"쇼핑몰전표번호\"/><Cell col=\"2\" rowspan=\"2\" text=\"품목코드\"/><Cell col=\"3\" rowspan=\"2\" text=\"품목명\"/><Cell col=\"4\" rowspan=\"2\" text=\"주문수량\"/><Cell col=\"5\" colspan=\"5\" text=\"주문자정보\"/><Cell col=\"10\" colspan=\"5\" text=\"수화인정보\"/><Cell col=\"15\" rowspan=\"2\" text=\"고객요청메세지\"/><Cell row=\"1\" col=\"5\" text=\"주문자명\"/><Cell row=\"1\" col=\"6\" text=\"우편번호\"/><Cell row=\"1\" col=\"7\" text=\"주소\"/><Cell row=\"1\" col=\"8\" text=\"상세주소\"/><Cell row=\"1\" col=\"9\" text=\"휴대번호\"/><Cell row=\"1\" col=\"10\" text=\"수화인명\"/><Cell row=\"1\" col=\"11\" text=\"우편번호\"/><Cell row=\"1\" col=\"12\" text=\"주소\"/><Cell row=\"1\" col=\"13\" text=\"상세주소\"/><Cell row=\"1\" col=\"14\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell text=\"bind:SLIP_YMD\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"bind:GDS_CD\"/><Cell col=\"3\" text=\"bind:GDS_NM\"/><Cell col=\"4\" text=\"bind:ORD_QTY\"/><Cell col=\"5\" text=\"bind:FR_NM\"/><Cell col=\"6\" text=\"bind:FR_ZIP_NO\"/><Cell col=\"7\" text=\"bind:FR_BASIC_ADDR\"/><Cell col=\"8\" text=\"bind:FR_DETAIL_ADDR\"/><Cell col=\"9\" text=\"bind:FR_TEL_NO_1\" displaytype=\"text\"/><Cell col=\"10\" text=\"bind:TO_NM\"/><Cell col=\"11\" text=\"bind:TO_ZIP_NO\"/><Cell col=\"12\" text=\"bind:TO_BASIC_ADDR\"/><Cell col=\"13\" text=\"bind:FR_DETAIL_ADDR\"/><Cell col=\"14\" text=\"bind:TO_TEL_NO_1\"/><Cell col=\"15\" text=\"bind:CUST_REQ_MSG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("21");
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
            obj = new BindItem("item0","edtCustCd_sc","value","dsSearch","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalFromTo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("RCPT_ORDER_0001_old.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_ORDER_0001_old.xfdl", function() {
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
        	this.gfnTransaction("commonCode");

        	// 달력 셋팅
        	this.fn_CalSetting();

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

        		//신규
        		case "btnAddRow" :
        			this.fnAddRow();
        		break;

        		// 삭제
        		case "btnDel" :
        			this.fnDelete();
        		break;

        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		// 확정
        		case "btnDecis" :
        			this.fnDecis();
        		break;

        		// 엑셀샘플업로드
        		case "btnSampleDownload" :
        			this.fnSampleDownload();
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
         * @function	: fnSearch
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {

        	this.gfnTransaction("selectRcptOrdTemp");

        };

        //엑셀 Temp 삭제
        this.fnDelete = function() {
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

        	if(!this.gfnConfirm("삭제하시겠습니까?")) {
        		return;
        	}

        	this.dsSaveList.clear();
        	this.grd_Main.set_enableredraw(false); // 그리드 새로고침 하지 않음

        	this.dsList.set_filterstr("CHK==1");
        	this.dsSaveList.copyData(this.dsList, true);
        	this.dsList.filter("");

        	this.grd_Main.set_enableredraw(true); // 그리드 새로고침 하지 않음

        	if(this.dsSaveList.getRowCount() <= 0) {
        		this.gfnAlert("수정 데이터가 없습니다.");
        		return;
        	}

        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("deleteRcptOrdTemp");
        };

        //엑셀 업로드 수정 저장 (Temp 수정)
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

        	//추가한 Row에 CUST_CD 체크
        	if(this.dsList.getCaseCount("CHK==1 && CUST_CD==''") != 0) {
        		this.gfnAlert("고객은 필수값입니다.");
        		return;
        	}

        	var cboWarehValue = this.cboWareh.value;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("창고코드는 필수값입니다.");
        		return;
        	}

        	if(!this.gfnConfirm("저장하시겠습니까?")) {
        		return;
        	}

        	this.dsSaveList.clear();
        	this.grd_Main.set_enableredraw(false); // 그리드 새로고침 하지 않음

        	this.dsList.set_filterstr("CHK==1");
        	this.dsSaveList.copyData(this.dsList, true);
        	this.dsList.filter("");

        	this.grd_Main.set_enableredraw(true); // 그리드 새로고침

        	if(this.dsSaveList.getRowCount() <= 0) {
        		this.gfnAlert("수정 데이터가 없습니다.");
        		return;
        	}

        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("updateRcptOrdTempModi");
        };

        //엑셀 업로드 확정
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

        	//품목코드가 Null이면 안됨
        	if(this.dsList.getCaseCount("CHK==1 && GDS_CD != ''") <= 0) {
        		this.gfnAlert("품목코드가 비었습니다.");
        		return;
        	}

        	var cboWarehValue = this.cboWareh.value;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("창고코드는 필수값입니다.");
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
        	this.gfnTransaction("insertRcptOrdDecis");
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

        		case "insertRcptOrdDecis":
        			alert("저장되었습니다.");
        			this.fnSearch();
        		break;


        		default :
        		break;
        	}

        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/


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
        	var pCustCdValue = '';	// 고객코드
        	var pCustNmValue = '';	// 고객명

        	if(btnName == "btnCustSearch"){
        		popupId = 'custPop1';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}
        	else if(btnName == "btnCust"){
        		popupId = 'custPop2';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}
        	else if(btnName == "gridCust"){
        		popupId = 'custPop3';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}

        	// 팝업 호출
        	var oArg = {
        				  pItemCd		: pCustCdValue									// 고객코드
        				, pItemNm		: pCustNmValue									// 고객명
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
         * @function	: fnPopupCallBack
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: dsObj		- nexacro.NormalDataset
         * @return N/A
         ***********************************************************************************************/
        this.fnPopupCallback = function(sPopupId, dsObj)
        {
        	var telNo = "";
        	switch(sPopupId) {
        		case "custPop1" :
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));
        		break;

        		case "custPop2":
        			var telNo = "";

        			//Temp Table 수정을 위한 Dataset 셋팅
        			this.dsTemp.addColumn("LN_NO", "STRING");
        			this.dsTemp.addColumn("CUST_CD", "STRING");
        			this.dsTemp.addColumn("WAREH_CD", "STRING");
        			this.dsTemp.addColumn("FR_TEL_NO_2", "STRING");
        			this.dsTemp.addColumn("FR_TEL_NO_3", "STRING");
        			this.dsTemp.addColumn("TO_TEL_NO_2", "STRING");
        			this.dsTemp.addColumn("TO_TEL_NO_3", "STRING");

        			for(var i=0; i<this.dsTemp.getRowCount(); i++){
        				this.dsTemp.setColumn(i, "CUST_CD", dsObj.getColumn(0,"CUST_ID"));
        				this.dsTemp.setColumn(i, "LN_NO", i+1);
        				this.dsTemp.setColumn(i, "WAREH_CD", this.cboWareh.value);

        				//전화번호 3개로 찢기
        				telNo = this.dsTemp.getColumn(i, "FR_TEL_NO_1");
        				this.dsTemp.setColumn(i, "FR_TEL_NO_3", telNo.substr( telNo.length-4, 4));
        				this.dsTemp.setColumn(i, "FR_TEL_NO_2", telNo.substr( telNo.length-8, 4));
        				this.dsTemp.setColumn(i, "FR_TEL_NO_1", telNo.substr( 0, telNo.length-8));

        				telNo = this.dsTemp.getColumn(i, "TO_TEL_NO_1");
        				this.dsTemp.setColumn(i, "TO_TEL_NO_3", telNo.substr( telNo.length-4, 4));
        				this.dsTemp.setColumn(i, "TO_TEL_NO_2", telNo.substr( telNo.length-8, 4));
        				this.dsTemp.setColumn(i, "TO_TEL_NO_1", telNo.substr( 0, telNo.length-8));
        			}

        			//Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			this.gfnTransaction("insertRcptOrdTemp");
        		break;

        		case "custPop3":
        			this.dsList.setColumn(this.dsList.rowposition, "CUST_CD", dsObj.getColumn(0,"CUST_ID"));
        			this.dsList.setColumn(this.dsList.rowposition, "CUST_NM", dsObj.getColumn(0,"CUST_NM"));
        		break;

        		case "itemPop2":
        			this.dsList.setColumn(this.dsList.rowposition, "GDS_CD", dsObj.getColumn(0,"ITEM_CD"));
        			this.dsList.setColumn(this.dsList.rowposition, "GDS_NM", dsObj.getColumn(0,"ITEM_NM"));
        		break;

        		default :
        		break;
        	}
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

        	if(btnName == "gridGds"){
        		popupId = 'itemPop2';
        		//pItemCdValue = this.edtItemCd_sc.value;
        		//pItemNmValue = this.edtItemNm_sc.value;
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
         * @function   : gridMain_onheadclick
         * @description   : 그리드 헤더 클릭 이벤트.
         * @param      : obj   - nexacro.Grid
         * @param      : e      - nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.grdOnHeadClick = function(obj,e)
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
         * @function		: fn_CalSetting
         * @description		: 달력 값 셋팅
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_CalSetting = function()
        {
        	var dateFm = this.divDate.form;

        	dateFm.fnSetCalFromBindItem("dsSearch", "STA_DT");
        	dateFm.fnSetCalToBindItem("dsSearch", "END_DT");

        	dateFm.fnSetFromDate(this.gfnGetDate("date").substr(0, 8));
        	dateFm.fnSetToDate(this.gfnGetDate("date").substr(0, 8));
        };

        this.fn_editOnKeyDown = function(obj,e)
        {
        	switch( e.keycode ) {
        		case 13 :
        			obj.updateToDataset();
        			this.fnSearch();
        		break;

        		default	:
        		break;
        	}
        };


        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/
        //엑셀샘플
        this.fnSampleDownload = function(obj,e) {
        	//var sDateTime = this.gfnGetDate("time");
        	this.gfnExcelExport(this.grdExcelData, "sheet1", "OrderExcelSample");
        }

        //엑셀업로드
        this.fnXlsUpld = function() {

        	var cboWarehValue = this.cboWareh.value;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("접수할 창고코드를 선택해주세요.");
        		return;
        	}

        	this.dsList.clearData();
        	this.dsTemp.clearData();
        	this.gfnExcelImport("dsTemp", "sheet1", "A3", "fnImportCallback", "importExcel", this);
        }

        this.fnImportCallback = function (sImportId)
        {
        	var edtCustCdValue = this.edtCustCd_sc.value;	//고객코드
        	var edtCustNmValue = this.edtCustNm_sc.value;	//고객명

        	if( this.gfnIsNull(edtCustCdValue) && this.gfnIsNull(edtCustNmValue) ) {

        		this.fn_OpenPopCust("btnCust");
        		this.gfnAlert("고객코드를 입력해주세요.");
        	}
        	else {

        		var telNo = "";
        		//Temp Table 수정을 위한 Dataset 셋팅
        		this.dsTemp.addColumn("LN_NO", "STRING");
        		this.dsTemp.addColumn("CUST_CD", "STRING");
        		this.dsTemp.addColumn("WAREH_CD", "STRING");
        		this.dsTemp.addColumn("FR_TEL_NO_2", "STRING");
        		this.dsTemp.addColumn("FR_TEL_NO_3", "STRING");
        		this.dsTemp.addColumn("TO_TEL_NO_2", "STRING");
        		this.dsTemp.addColumn("TO_TEL_NO_3", "STRING");

        		for(var i=0; i<this.dsTemp.getRowCount(); i++) {
        			this.dsTemp.setColumn(i, "CUST_CD", edtCustCdValue);
        			this.dsTemp.setColumn(i, "LN_NO", i+1);
        			this.dsTemp.setColumn(i, "WAREH_CD", this.cboWareh.value);

        			//전화번호 3개로 찢기
        			telNo = this.dsTemp.getColumn(i, "FR_TEL_NO_1");
        			this.dsTemp.setColumn(i, "FR_TEL_NO_3", telNo.substr( telNo.length-4, 4));
        			this.dsTemp.setColumn(i, "FR_TEL_NO_2", telNo.substr( telNo.length-8, 4));
        			this.dsTemp.setColumn(i, "FR_TEL_NO_1", telNo.substr( 0, telNo.length-8));

        			telNo = this.dsTemp.getColumn(i, "TO_TEL_NO_1");
        			this.dsTemp.setColumn(i, "TO_TEL_NO_3", telNo.substr( telNo.length-4, 4));
        			this.dsTemp.setColumn(i, "TO_TEL_NO_2", telNo.substr( telNo.length-8, 4));
        			this.dsTemp.setColumn(i, "TO_TEL_NO_1", telNo.substr( 0, telNo.length-8));
        		}

        		//Search 수정
        		this.gfnTransaction("insertRcptOrdTemp");

        		this.edtCustCd_sc.set_value(edtCustCdValue);
        		this.edtCustNm_sc.set_value(edtCustNmValue);
        	}

        	//엑셀temp저장
        	//this.gfnTransaction("insertRcptOrdTemp");
        }


        /***********************************************************************************************
         * @function	: fnAddRow
         * @description	: 행추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddRow = function(){

        	var sDate = this.gfnGetDate();
        	var lnNo = nexacro.toNumber(Number(this.dsList.getMax("LN_NO")), 0);

        	if(this.dsList.getRowCount() == 0) {
        		this.dsList.clearData();
        		this.dsList.copyData(this.dsSaveList);
        	}

        	//그리드 신규만 ROW 추가.
        	this.dsList.addRow();

        	//default 설정
        	this.dsList.setColumn(this.dsList.rowposition, "WAREH_CD"	, this.cboWareh.value);
        	this.dsList.setColumn(this.dsList.rowposition, "REG_EMP_ID"	, this.objApp.gv_userId);

        	this.dsList.setColumn(this.dsList.rowposition, "SHP_MALL_SLIP_NO"	, "");
        	this.dsList.setColumn(this.dsList.rowposition, "WORK_DV_CD"	, "00");
        	this.dsList.setColumn(this.dsList.rowposition, "SLIP_YMD"	, sDate);
        	this.dsList.setColumn(this.dsList.rowposition, "LN_NO"		, lnNo+1 );
        	this.dsList.setColumn(this.dsList.rowposition, "ORD_QTY"	, 0 );
        	this.dsList.setColumn(this.dsList.rowposition, "CHK"		, 1 );
        	this.dsList.setColumn(this.dsList.rowposition, "CUST_CD"	, "" );
        	this.dsList.setColumn(this.dsList.rowposition, "ROW_TYPE"	, "I" );
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

        		default :
        		break;
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
            this.staExeCorp.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.btnSampleDownload.addEventHandler("onclick",this.btnOnClick,this);
            this.btnxlsUpld.addEventHandler("onclick",this.btnOnClick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("onexpandup",this.grd_Main_onexpandup,this);
            this.btnAddRow.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDecis.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.btnCustSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.cboWareh.addEventHandler("onitemchanged",this.divTop_cboWareh_onitemchanged,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.grdExcelData.addEventHandler("oncellclick",this.grdShprList_oncellclick,this);
        };

        this.loadIncludeScript("RCPT_ORDER_0001_old.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
