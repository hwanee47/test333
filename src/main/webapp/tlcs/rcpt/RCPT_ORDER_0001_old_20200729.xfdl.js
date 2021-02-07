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
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsOrdSt=ds1 dsTelCellFrontNum=ds2 dsRcptDv=ds3</Col><Col id=\"QUERY_LIST\">q1=WM102 q2=SM991 q3=CS008</Col></Row><Row><Col id=\"SVC_ID\">getRcptOrdExcelForm</Col><Col id=\"IN_DATASET_LIST\">dsSearch_dsSaerch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsUserExcelFormInfo=dsList</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">getRcptOrdExcelForm</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">selectRcptOrdTemp</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">selectRcptOrdTemp</Col></Row><Row><Col id=\"SVC_ID\">insertRcptOrdTemp</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsTemp=dsExcelForm</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">insertRcptOrdTemp</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">updateRcptOrdTempModi</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">updateRcptOrdTempModi</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row><Row><Col id=\"SVC_ID\">insertRcptOrdDecis</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">insertRcptOrdDecis</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList dsResult=dsResult</Col></Row><Row><Col id=\"SVC_ID\">deleteRcptOrdTemp</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">deleteRcptOrdTemp</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL\" type=\"STRING\" size=\"256\"/><Column id=\"FR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CITY\" size=\"256\" type=\"STRING\"/><Column id=\"FR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BASIC_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"FR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CITY\" size=\"256\" type=\"STRING\"/><Column id=\"TO_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASIC_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"TO_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"ORDRR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"MPCK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MPCK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"PRIO_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REQ_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_DECIS_YMD\" size=\"256\" type=\"STRING\"/><Column id=\"PCHS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ELEC_YMD\" size=\"256\" type=\"STRING\"/><Column id=\"ADAP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ADAP_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_GRP_OPR_CAR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO1\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_1\" size=\"256\" type=\"STRING\"/><Column id=\"REF_DATA_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_3\" size=\"256\" type=\"STRING\"/><Column id=\"REF_DATA_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_5\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_6\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_7\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_8\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_9\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_10\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DV\" size=\"256\" type=\"STRING\"/><Column id=\"ADDR_ABRV\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_PIDV_BRAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DLV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_SUB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_GEN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_PRT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DB_WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXlsUpld", this);
            obj._setContents("<ColumnInfo><Column id=\"NUM\" size=\"256\" type=\"STRING\"/><Column id=\"AAA\" size=\"256\" type=\"STRING\"/><Column id=\"BBB\" size=\"256\" type=\"STRING\"/><Column id=\"CCC\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelSample", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ORD_QTY\" size=\"256\" type=\"STRING\"/><Column id=\"FR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DETAIL_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"FR_TEL_NO_1\" size=\"256\" type=\"STRING\"/><Column id=\"TO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DETAIL_ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"TO_TEL_NO_1\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_REQ_MSG\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SHP_MALL_SLIP_NO\">112233</Col><Col id=\"CUST_CD\">WMS1</Col><Col id=\"SLIP_YMD\"/><Col id=\"CUST_NM\">WMS_CUST1</Col><Col id=\"GDS_CD\">20200316-0001</Col><Col id=\"GDS_NM\">COLA</Col><Col id=\"ORD_QTY\">10</Col><Col id=\"FR_NM\">홍</Col><Col id=\"FR_ZIP_NO\">12345</Col><Col id=\"FR_BASIC_ADDR\">서울시 구로구</Col><Col id=\"FR_DETAIL_ADDR\">123-456번지</Col><Col id=\"FR_TEL_NO_1\">01012345678</Col><Col id=\"TO_NM\">받</Col><Col id=\"TO_ZIP_NO\">09876</Col><Col id=\"TO_BASIC_ADDR\">경남 창원시 의창구</Col><Col id=\"TO_DETAIL_ADDR\">상남시장 202호</Col><Col id=\"TO_TEL_NO_1\">01011112222</Col><Col id=\"CUST_REQ_MSG\">건강하세요</Col></Row><Row><Col id=\"CUST_CD\">WMS1</Col><Col id=\"SLIP_YMD\"/><Col id=\"SHP_MALL_SLIP_NO\">445566</Col><Col id=\"CUST_NM\">WMS_CUST1</Col><Col id=\"GDS_CD\">20200316-0001</Col><Col id=\"ORD_QTY\">15</Col><Col id=\"FR_NM\">길</Col><Col id=\"FR_ZIP_NO\">34567</Col><Col id=\"FR_BASIC_ADDR\">서울시 관악구</Col><Col id=\"FR_DETAIL_ADDR\">홍길빌라 205호</Col><Col id=\"FR_TEL_NO_1\">0223456789</Col><Col id=\"TO_NM\">는</Col><Col id=\"TO_ZIP_NO\">98765</Col><Col id=\"TO_BASIC_ADDR\">경남 진해시</Col><Col id=\"TO_DETAIL_ADDR\">석동 64-1</Col><Col id=\"TO_TEL_NO_1\">01033334444</Col><Col id=\"CUST_REQ_MSG\">코로나 조심하세요</Col></Row><Row><Col id=\"CUST_CD\">WMS1</Col><Col id=\"SLIP_YMD\"/><Col id=\"SHP_MALL_SLIP_NO\">778899</Col><Col id=\"CUST_NM\">WMS_CUST1</Col><Col id=\"GDS_CD\">20200316-0001</Col><Col id=\"GDS_NM\">COKE</Col><Col id=\"ORD_QTY\">20</Col><Col id=\"FR_NM\">동</Col><Col id=\"FR_ZIP_NO\">56789</Col><Col id=\"FR_BASIC_ADDR\">서울시 중구</Col><Col id=\"FR_DETAIL_ADDR\">길동타워 10층</Col><Col id=\"FR_TEL_NO_1\">05534567890</Col><Col id=\"TO_NM\">다</Col><Col id=\"TO_ZIP_NO\">87654</Col><Col id=\"TO_BASIC_ADDR\">부산 광역시 해운대구</Col><Col id=\"TO_DETAIL_ADDR\">22번째 모래사장</Col><Col id=\"TO_TEL_NO_1\">01055556666</Col><Col id=\"CUST_REQ_MSG\">제가 고민이 있는데..</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"FR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REQ_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL_SLIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CENT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SHP_MALL\" type=\"STRING\" size=\"256\"/><Column id=\"FR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DLCM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"FR_CITY\" type=\"STRING\" size=\"256\"/><Column id=\"FR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FR_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"TO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TO_STATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_CITY\" type=\"STRING\" size=\"256\"/><Column id=\"TO_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TO_BASIC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"PRIO_RANK\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_REQ_MSG\" type=\"STRING\" size=\"256\"/><Column id=\"SLIP_DECIS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"PCHS_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ELEC_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ADAP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ADAP_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_GRP_OPR_CAR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO1\" type=\"STRING\" size=\"256\"/><Column id=\"MEMO2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_1\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_2\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_3\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_4\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_5\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_6\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_7\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_8\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_9\" type=\"STRING\" size=\"256\"/><Column id=\"REF_DATA_10\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR_ABRV\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_PIDV_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEST_SUB_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_GEN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_PRT_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ST\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"QTY_DIV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LN_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"STA_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_CD\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdSt", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMgmtColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_NM\">접수일자</Col><Col id=\"COL_ID\">SLIP_YMD</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"SEQ\">0</Col></Row><Row><Col id=\"COL_NM\">고객사용번호(고객사 주문번호)</Col><Col id=\"COL_ID\">SHP_MALL_SLIP_NO</Col><Col id=\"COL_WIDTH\">250</Col><Col id=\"SEQ\">1</Col></Row><Row><Col id=\"COL_ID\">GDS_CD</Col><Col id=\"COL_NM\">품목코드</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"SEQ\">2</Col></Row><Row><Col id=\"COL_NM\">주문수량</Col><Col id=\"COL_ID\">ORD_QTY</Col><Col id=\"COL_WIDTH\">80</Col><Col id=\"SEQ\">3</Col></Row><Row><Col id=\"COL_NM\">송화인명</Col><Col id=\"COL_ID\">FR_NM</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"SEQ\">4</Col></Row><Row><Col id=\"COL_NM\">송화인우편번호</Col><Col id=\"COL_ID\">FR_ZIP_NO</Col><Col id=\"COL_WIDTH\">120</Col><Col id=\"SEQ\">5</Col></Row><Row><Col id=\"COL_NM\">송화인주소</Col><Col id=\"COL_ID\">FR_BASIC_ADDR</Col><Col id=\"COL_WIDTH\">150</Col><Col id=\"SEQ\">6</Col></Row><Row><Col id=\"COL_NM\">송화인상세주소</Col><Col id=\"COL_ID\">FR_DETAIL_ADDR</Col><Col id=\"COL_WIDTH\">230</Col><Col id=\"SEQ\">7</Col></Row><Row><Col id=\"COL_NM\">송화인전화번호</Col><Col id=\"COL_ID\">FR_TEL_NO</Col><Col id=\"COL_WIDTH\">120</Col><Col id=\"SEQ\">8</Col></Row><Row><Col id=\"COL_NM\">송화인휴대폰번호</Col><Col id=\"COL_ID\">FR_CELL_NO</Col><Col id=\"COL_WIDTH\">140</Col><Col id=\"SEQ\">9</Col></Row><Row><Col id=\"COL_NM\">수화인명</Col><Col id=\"COL_ID\">TO_NM</Col><Col id=\"SEQ\">10</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_NM\">수화인우편번호</Col><Col id=\"COL_ID\">TO_ZIP_NO</Col><Col id=\"SEQ\">11</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_NM\">수화인주소</Col><Col id=\"COL_ID\">TO_BASIC_ADDR</Col><Col id=\"SEQ\">12</Col><Col id=\"COL_WIDTH\">150</Col></Row><Row><Col id=\"COL_NM\">수화인상세주소</Col><Col id=\"COL_ID\">TO_DETAIL_ADDR</Col><Col id=\"SEQ\">13</Col><Col id=\"COL_WIDTH\">230</Col></Row><Row><Col id=\"COL_NM\">수화인전화번호</Col><Col id=\"COL_ID\">TO_TEL_NO</Col><Col id=\"SEQ\">14</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_NM\">수화인휴대폰번호</Col><Col id=\"COL_ID\">TO_CELL_NO</Col><Col id=\"SEQ\">15</Col><Col id=\"COL_WIDTH\">140</Col></Row><Row><Col id=\"COL_NM\">주문자명</Col><Col id=\"COL_ID\">ORDRR_NM</Col><Col id=\"SEQ\">16</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_NM\">주문자우편번호</Col><Col id=\"COL_ID\">ORDRR_ZIP_NO</Col><Col id=\"SEQ\">17</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_NM\">주문자주소</Col><Col id=\"COL_ID\">ORDRR_ADDR</Col><Col id=\"SEQ\">18</Col><Col id=\"COL_WIDTH\">150</Col></Row><Row><Col id=\"COL_NM\">주문자상세주소</Col><Col id=\"COL_ID\">ORDRR_DETAIL_ADDR</Col><Col id=\"SEQ\">19</Col><Col id=\"COL_WIDTH\">230</Col></Row><Row><Col id=\"COL_NM\">주문자전화번호</Col><Col id=\"COL_ID\">ORDRR_TEL_NO</Col><Col id=\"SEQ\">20</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_NM\">주문자휴대폰번호</Col><Col id=\"COL_ID\">ORDRR_CELL_NO</Col><Col id=\"SEQ\">21</Col><Col id=\"COL_WIDTH\">140</Col></Row><Row><Col id=\"COL_NM\">운송장번호</Col><Col id=\"COL_ID\">WAYBILL_NO</Col><Col id=\"SEQ\">22</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_NM\">합포장번호</Col><Col id=\"COL_ID\">MPCK_KEY</Col><Col id=\"SEQ\">23</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_NM\">합포장SEQ</Col><Col id=\"COL_ID\">MPCK_SEQ</Col><Col id=\"SEQ\">24</Col><Col id=\"COL_WIDTH\">80</Col></Row><Row><Col id=\"COL_NM\">접수구분(01:일반, 02:반품)</Col><Col id=\"COL_ID\">RCPT_DV</Col><Col id=\"SEQ\">25</Col><Col id=\"COL_WIDTH\">160</Col></Row><Row><Col id=\"COL_NM\">고객요청메세지</Col><Col id=\"COL_ID\">CUST_REQ_MSG</Col><Col id=\"SEQ\">26</Col><Col id=\"COL_WIDTH\">250</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserExcelFormInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelForm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDefaultColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_ID\">SLIP_YMD</Col></Row><Row><Col id=\"COL_ID\">SHP_MALL_SLIP_NO</Col></Row><Row><Col id=\"COL_ID\">GDS_CD</Col></Row><Row><Col id=\"COL_ID\">ORD_QTY</Col></Row><Row><Col id=\"COL_ID\">FR_NM</Col></Row><Row><Col id=\"COL_ID\">FR_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">FR_BASIC_ADDR</Col></Row><Row><Col id=\"COL_ID\">FR_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">FR_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">FR_CELL_NO</Col></Row><Row><Col id=\"COL_ID\">TO_NM</Col></Row><Row><Col id=\"COL_ID\">TO_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">TO_BASIC_ADDR</Col></Row><Row><Col id=\"COL_ID\">TO_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">TO_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">TO_CELL_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_NM</Col></Row><Row><Col id=\"COL_ID\">ORDRR_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_ADDR</Col></Row><Row><Col id=\"COL_ID\">ORDRR_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">ORDRR_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_CELL_NO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCellFrontNum", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRcptDv", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","251",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","290","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("3");
            obj.set_text("접수일자");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00_00","10",null,"71","31",null,"8",null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("14");
            obj.set_text("엑셀업로드");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","80",null,"386","24",null,"10",null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("btnSampleDownload","570",null,"102","23",null,"11",null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0672");
            obj.set_fittocontents("none");
            obj.set_taborder("16");
            obj.set_text("엑셀양식 다운로드");
            this.addChild(obj.name, obj);

            obj = new Button("btnxlsUpld","473",null,"94","23",null,"11",null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("17");
            obj.set_text("엑셀 업로드");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"30","42",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("18");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\" band=\"left\"/><Column size=\"30\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"161\" band=\"left\"/><Column size=\"87\"/><Column size=\"74\"/><Column size=\"119\"/><Column size=\"100\"/><Column size=\"111\"/><Column size=\"168\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"98\"/><Column size=\"128\"/><Column size=\"166\"/><Column size=\"95\"/><Column size=\"102\"/><Column size=\"115\"/><Column size=\"98\"/><Column size=\"128\"/><Column size=\"166\"/><Column size=\"95\"/><Column size=\"108\"/><Column size=\"115\"/><Column size=\"98\"/><Column size=\"128\"/><Column size=\"166\"/><Column size=\"95\"/><Column size=\"108\"/><Column size=\"108\"/><Column size=\"108\"/><Column size=\"78\"/><Column size=\"89\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"주문상태\"/><Cell col=\"4\" text=\"에러메세지\"/><Cell col=\"5\" text=\"고객코드\"/><Cell col=\"6\" text=\"고객명\"/><Cell col=\"7\" text=\"품목코드\"/><Cell col=\"8\" text=\"품목명\"/><Cell col=\"9\" text=\"접수일자\"/><Cell col=\"10\" text=\"고객사용번호(고객사 주문번호)\"/><Cell col=\"11\" text=\"주문수량\"/><Cell col=\"12\" text=\"송화인명\"/><Cell col=\"13\" text=\"송화인우편번호\"/><Cell col=\"14\" text=\"송화인주소\"/><Cell col=\"15\" text=\"송화인상세주소\"/><Cell col=\"16\" text=\"송화인전화번호\"/><Cell col=\"17\" text=\"송화인휴대폰번호\"/><Cell col=\"18\" text=\"수화인명\"/><Cell col=\"19\" text=\"수화인우편번호\"/><Cell col=\"20\" text=\"수화인주소\"/><Cell col=\"21\" text=\"수화인상세주소\"/><Cell col=\"22\" text=\"수화인전화번호\"/><Cell col=\"23\" text=\"수화인휴대폰번호\"/><Cell col=\"24\" text=\"주문자명\"/><Cell col=\"25\" text=\"주문자우편번호\"/><Cell col=\"26\" text=\"주문자주소\"/><Cell col=\"27\" text=\"주문자상세주소\"/><Cell col=\"28\" text=\"주문자전화번호\"/><Cell col=\"29\" text=\"주문자휴대폰번호\"/><Cell col=\"30\" text=\"운송장번호\"/><Cell col=\"31\" text=\"합포장번호\"/><Cell col=\"32\" text=\"합포장순번\"/><Cell col=\"33\" text=\"접수구분\"/><Cell col=\"34\" text=\"고객요청메세지\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:REG_EMP_ID\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:WORK_DV_CD\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsOrdSt\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:ERR_MSG\" edittype=\"none\" textAlign=\"left\" color=\"red\"/><Cell col=\"5\" text=\"bind:CUST_CD\" edittype=\"none\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"show\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CUST_NM\" edittype=\"none\" expandshow=\"hide\" textAlign=\"left\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:GDS_CD\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"show\" maskedittype=\"number\" textAlign=\"left\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:SLIP_YMD\" edittype=\"date\" displaytype=\"date\" maskedittype=\"string\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"bind:SHP_MALL_SLIP_NO\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:ORD_QTY\" edittype=\"normal\" displaytype=\"normal\" textareainputtype=\"normal\" maskeditlimitbymask=\"decimal\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:FR_NM\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:FR_ZIP_NO\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:FR_BASIC_ADDR\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:FR_DETAIL_ADDR\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:FR_TEL_NO\" edittype=\"normal\" textAlign=\"left\" displaytype=\"normal\" maskedittype=\"string\" editinputfilter=\"none\" editinputtype=\"number\" editmaxlength=\"14\"/><Cell col=\"17\" text=\"bind:FR_CELL_NO\" edittype=\"normal\" textAlign=\"left\" editmaxlength=\"14\" editinputtype=\"number\"/><Cell col=\"18\" text=\"bind:TO_NM\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"19\" text=\"bind:TO_ZIP_NO\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"20\" text=\"bind:TO_BASIC_ADDR\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"21\" text=\"bind:TO_DETAIL_ADDR\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"22\" text=\"bind:TO_TEL_NO\" edittype=\"normal\" textAlign=\"left\" editmaxlength=\"14\" editinputtype=\"number\"/><Cell col=\"23\" text=\"bind:TO_CELL_NO\" edittype=\"normal\" textAlign=\"left\" editmaxlength=\"14\" editinputtype=\"number\"/><Cell col=\"24\" text=\"bind:ORDRR_NM\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"25\" text=\"bind:ORDRR_ZIP_NO\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"26\" text=\"bind:ORDRR_ADDR\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"27\" text=\"bind:ORDRR_DETAIL_ADDR\" edittype=\"normal\" textAlign=\"left\"/><Cell col=\"28\" text=\"bind:TO_TEL_NO\" edittype=\"normal\" textAlign=\"left\" editmaxlength=\"14\" editinputtype=\"number\"/><Cell col=\"29\" text=\"bind:ORDRR_CELL_NO\" edittype=\"normal\" textAlign=\"left\" editmaxlength=\"14\" editinputtype=\"number\"/><Cell col=\"30\" text=\"bind:WAYBILL_NO\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"31\" text=\"bind:MPCK_KEY\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"32\" text=\"bind:MPCK_SEQ\" edittype=\"none\" textAlign=\"right\"/><Cell col=\"33\" text=\"bind:RCPT_DV\" edittype=\"combo\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsRcptDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"34\" text=\"bind:CUST_REQ_MSG\" edittype=\"normal\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.rowcount\" displaytype=\"number\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"1\" colspan=\"4\"/><Cell col=\"5\" colspan=\"6\" text=\"합계\"/><Cell col=\"11\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(ORD_QTY)')\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"12\" colspan=\"23\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"37","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("11");
            obj.set_text("신규");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"37","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("13");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"37","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T1988");
            obj.set_fittocontents("none");
            obj.set_taborder("12");
            obj.set_text("접수");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","667","44","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("6");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","704","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","794","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","818","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","87","44","161","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("WAREH_CD");
            obj.set_datacolumn("WAREH_NM");
            obj.set_displayrowcount("6");
            obj.set_taborder("2");
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
            obj.set_taborder("1");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcelData","6","845","67.31%","135",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("19");
            obj.set_visible("false");
            obj.set_binddataset("dsExcelForm");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"10\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("20");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Button("btnChgExcelForm","675",null,"94","23",null,"11",null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0672");
            obj.set_fittocontents("none");
            obj.set_taborder("21");
            obj.set_text("엑셀양식 관리");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdFr_sc","355","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","488","43","8","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdTo_sc","499","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("btnComponent");
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

            obj = new BindItem("item2","calYmdFr_sc","value","dsSearch","STA_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","calYmdTo_sc","value","dsSearch","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("RCPT_ORDER_0001_old_20200729.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_ORDER_0001_old_20200729.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "STA_DT", this.gfnGetDate("date"));
        	this.dsSearch.setColumn(0, "END_DT", this.gfnGetDate("date"));

        	this.cboWareh.set_index(0);

        	this.cboWareh.setFocus();

        	// 로그인계정 주문접수 엑셀양식 조회
        	this.gfnTransaction("getRcptOrdExcelForm");

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
        			this.fnAdd();
        		break;

        		// 삭제
        		case "btnDel" :
        			this.fnDelete();
        		break;

        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		// 엑셀다운로드
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

        	// 조회조건 필수입력 체크

        	var calYmdFr_scValue = this.calYmdFr_sc.value;
        	var calYmdTo_scValue = this.calYmdTo_sc.value;


        	if(this.gfnIsNull(calYmdFr_scValue)){
        		this.gfnAlert("조회조건의 접수일자(FROM)을 입력해주세요.");
        		this.calYmdFr_sc.setFocus();
        		return;
        	}


        	if(this.gfnIsNull(calYmdTo_scValue)){
        		this.gfnAlert("조회조건의 접수일자(TO)을 입력해주세요.");
        		this.calYmdTo_sc.setFocus();
        		return;
        	}



        	this.dsList.clearData();

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


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

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
        	});


        };


        //엑셀 업로드 확정
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

        	var dsCnt = this.dsList.getRowCount();

        	for(var i=0; i<dsCnt; i++){

        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크되지않은 행은 스킵
        		if(chkValue != "1") continue;

        		var custCdValue = this.dsList.getColumn(i, "CUST_CD");
        		var gdsCdValue = this.dsList.getColumn(i, "GDS_CD");

        		//고객정보가 Null이면 안됨
        		if(this.gfnIsNull(custCdValue)){
        			this.gfnAlert((i+1)+"행의 고객정보를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			return;
        		}

        		//품목정보가 Null이면 안됨
        		if(this.gfnIsNull(gdsCdValue)){
        			this.gfnAlert((i+1)+"행의 품목정보를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			return;
        		}

        	}

        	var cboWarehValue = this.cboWareh.value;
        	var cboWarehText = this.cboWareh.text;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("창고코드는 필수값입니다.");
        		return;
        	}


        	this.gfnCustomConfirm(cboWarehText+"창고로 접수하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		this.dsSaveList.clear();
        		this.grd_Main.set_enableredraw(false); // 그리드 새로고침 하지 않음

        		this.dsList.set_filterstr("CHK==1");
        		this.dsSaveList.copyData(this.dsList, true);
        		this.dsList.filter("");

        		this.grd_Main.set_enableredraw(true); // 그리드 새로고침 하지 않음



        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("insertRcptOrdDecis");

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
        	if(errorCode < 0) {
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 주문상태 데이터셋 "전체" 추가.
        			/*var nRow = this.dsOrdSt.insertRow();
        			this.dsOrdSt.setColumn(nRow, "CD", "");
        			this.dsOrdSt.setColumn(nRow, "CD_NM", "전체");
        			this.cboOrdSt.set_index(0);

        			// 주문상태 데이터셋 필터링 [전체, 주문접수, 주문에러]
        			this.dsOrdSt.filter("CD == '' || CD == '10' || CD == '11'");
        			*/

        		break;

        		case "insertRcptOrdDecis":

        			this.gfnAlert(this.dsResult.getColumn(0,"RESULT_MSG"));

        			//this.gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		break;

        		case "getRcptOrdExcelForm":
        			this.fnSetExcelForm();
        		break;


        		case "selectRcptOrdTemp":
        			this.grd_Main.setCellProperty("head", this.grd_Main.getBindCellIndex("body", "CHK"), "text", '0');
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

        		// 양식 변경
        		case "btnChgExcelForm" :

        			var edtCustCdValue = this.edtCustCd_sc.value;	//고객코드
        			var edtCustNmValue = this.edtCustNm_sc.value;	//고객명

        			if( this.gfnIsNull(edtCustCdValue) && this.gfnIsNull(edtCustNmValue) ) {

        				this.fn_OpenPopCust("excelCust");
        				this.gfnAlert("고객코드를 입력해주세요.");
        			}
        			else{
        				this.fn_OpenPopChgExcelForm();
        			}

        		break;

        		// 양식 다운로드 팝업
        		case "btnSampleDownload" :

        			var edtCustCdValue = this.edtCustCd_sc.value;	//고객코드
        			var edtCustNmValue = this.edtCustNm_sc.value;	//고객명

        			if( this.gfnIsNull(edtCustCdValue) && this.gfnIsNull(edtCustNmValue) ) {

        				this.fn_OpenPopCust("exportExcel");
        				this.gfnAlert("고객코드를 입력해주세요.");
        			}
        			else{
        				this.fnOpenPopExcel(btnName);
        			}

        		break;


        		// 양식 선택 팝업
        		case "btnxlsUpld" :

        			var cboWarehValue = this.cboWareh.value;

        			if(this.gfnIsNull(cboWarehValue)){
        				this.gfnAlert("접수할 창고코드를 선택해주세요.", "", function(){
        					this.cboWareh.dropdown();
        				});

        				return;
        			}

        			this.dsList.clearData();

        			var edtCustCdValue = this.edtCustCd_sc.value;	//고객코드
        			var edtCustNmValue = this.edtCustNm_sc.value;	//고객명

        			if( this.gfnIsNull(edtCustCdValue) && this.gfnIsNull(edtCustNmValue) ) {


        				this.gfnAlert("고객코드를 입력해주세요.","", function(){
        					this.fn_OpenPopCust("choiceExcel");
        				});


        			}
        			else{
        				this.fnOpenPopExcel(btnName);
        			}

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
        	else if(btnName == "excelCust"){
        		popupId = 'custPop4';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}
        	else if(btnName == "exportExcel"){
        		popupId = 'custPop5';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}
        	else if(btnName == "choiceExcel"){
        		popupId = 'custPop6';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}


        	// 팝업 호출
        	var oArg = {
        				  pCustId		: pCustCdValue									// 고객코드
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
         * @function	: fnOpenPopExcel
         * @description	: 엑셀양식 선택 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopExcel = function(pBtnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var sUrl = '';		// 팝업 url
        	var pCustCdValue = this.edtCustCd_sc.value;	// 고객코드
        	var pCustNmValue = this.edtCustNm_sc.value;	// 고객명

        	if(pBtnName == "btnSampleDownload"){
        		popupId = "downloadExcelFormPop";
        		sUrl = "rcpt::RCPT_ORDER_P020.xfdl";
        	}
        	else if(pBtnName == "btnxlsUpld"){
        		popupId = "choiceExcelFormPop";
        		sUrl = "rcpt::RCPT_ORDER_P030.xfdl";
        	}


        	// 팝업 호출
        	var oArg = {
        				  pCustId		: pCustCdValue									// 고객코드
        				, pCustNm		: pCustNmValue									// 고객명
        				, pIODv			: "OUT"											// 입고 출고 구분
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,sUrl, oArg, sPopupCallBack, oOption);

        };


        /***********************************************************************************************
         * @function	: fn_OpenPopChgExcelForm
         * @description	: 엑셀 양식 변경 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fn_OpenPopChgExcelForm = function()
        {
        	// 파라미터 설정
        	var popupId = 'chgExcelFormPop';	//팝업ID

        	var pCustIdValue = this.edtCustCd_sc.value;
        	var pCustNmValue = this.edtCustNm_sc.value;


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
        	this.gfnOpenPopup(popupId,"rcpt::RCPT_ORDER_P010.xfdl", oArg, sPopupCallBack, oOption);

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

        			//Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			var telNo = "";


        			this.fnSetExcelFormDataSet();





        			this.gfnTransaction("insertRcptOrdTemp");
        		break;

        		case "custPop3":
        			this.dsList.setColumn(this.dsList.rowposition, "CUST_CD", dsObj.getColumn(0,"CUST_ID"));
        			this.dsList.setColumn(this.dsList.rowposition, "CUST_NM", dsObj.getColumn(0,"CUST_NM"));
        		break;


        		case "custPop4":

        			//Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			this.fn_OpenPopChgExcelForm();
        		break;


        		case "custPop5":

        			//Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			this.fnOpenPopExcel('btnSampleDownload');
        		break;

        		case "custPop6":

        			//Search 수정
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			this.fnOpenPopExcel('btnxlsUpld');
        		break;


        		case "itemPop2":
        			this.dsList.setColumn(this.dsList.rowposition, "GDS_CD", dsObj.getColumn(0,"ITEM_CD"));
        			this.dsList.setColumn(this.dsList.rowposition, "GDS_NM", dsObj.getColumn(0,"ITEM_NM"));
        		break;


        		case "chgExcelFormPop":
        			//trace(dsObj.saveXML());
        		break;



        		case "choiceExcelFormPop":
        			this.dsTemp2.clearData();
        			this.dsTemp2.copyData(dsObj);

        			this.gfnExcelImportCustom("dsTemp2", "sheet1", "A1", "fnImportCallback", "importExcel", this);
        		break;


        		case "gfnAlert_excelUpload":
        			this.fn_OpenPopCust("choiceExcel");
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
        			//this.fnSearch();
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

        	/*var edtCustCdValue = this.edtCustCd_sc.value;	//고객코드
        	var edtCustNmValue = this.edtCustNm_sc.value;	//고객명

        	if( this.gfnIsNull(edtCustCdValue) && this.gfnIsNull(edtCustNmValue) ) {

        		this.fn_OpenPopCust("btnCustPopExcelExport");
        		this.gfnAlert("고객코드를 입력해주세요.");
        	}*/

        	//this.fnOpenPopExcel();

        	//this.gfnExcelExport(this.grdExcelData, "sheet1", "OrderExcelSample");
        }

        //엑셀업로드
        this.fnXlsUpld = function() {

        	var cboWarehValue = this.cboWareh.value;

        	if(this.gfnIsNull(cboWarehValue)){
        		this.gfnAlert("접수할 창고코드를 선택해주세요.");
        		return;
        	}

        	this.dsList.clearData();
        	//this.dsTemp.clearData();
        	//console.log("업로드전!!!");
        	//console.log(this.dsTemp2.saveXML());
        	this.gfnExcelImportCustom("dsTemp2", "sheet1", "A1", "fnImportCallback", "importExcel", this);

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

        		this.edtCustCd_sc.set_value(edtCustCdValue);
        		this.edtCustNm_sc.set_value(edtCustNmValue);

        		this.fnSetExcelFormDataSet();


        		//Search 수정
        		this.gfnTransaction("insertRcptOrdTemp");


        	}

        	//엑셀temp저장
        	//this.gfnTransaction("insertRcptOrdTemp");
        }


        // 엑셀용 데이터 동적 셋팅.
        this.fnSetExcelFormDataSet = function(){

        	this.dsExcelForm.clearData();

        	// 컬럼 정보 생성
        	for(var i=0; i<this.dsTemp2.colcount; i++){

        		//var colNm = this.dsTemp2.getColumn(0, this.dsTemp2.getColID(i));

        		//var colId = this.dsMgmtColumn.getColumn(this.dsMgmtColumn.findRow("COL_NM", colNm), "COL_ID");

        		//if(this.gfnIsNull(colNm) || this.gfnIsNull(colId)) continue;

        		var colId = this.dsTemp2.getColID(i);

        		if(this.dsMgmtColumn.findRow("COL_ID", colId) == -1) continue;

        		this.dsExcelForm.addColumn(colId, "STRING");
        	}


        	this.dsExcelForm.addColumn("CUST_CD", "STRING");
        	this.dsExcelForm.addColumn("LN_NO", "STRING");
        	this.dsExcelForm.addColumn("WAREH_CD", "STRING");
        	this.dsExcelForm.addColumn("FR_TEL_NO_1", "STRING");
        	this.dsExcelForm.addColumn("FR_TEL_NO_2", "STRING");
        	this.dsExcelForm.addColumn("FR_TEL_NO_3", "STRING");
        	this.dsExcelForm.addColumn("FR_CELL_NO_1", "STRING");
        	this.dsExcelForm.addColumn("FR_CELL_NO_2", "STRING");
        	this.dsExcelForm.addColumn("FR_CELL_NO_3", "STRING");
        	this.dsExcelForm.addColumn("TO_TEL_NO_1", "STRING");
        	this.dsExcelForm.addColumn("TO_TEL_NO_2", "STRING");
        	this.dsExcelForm.addColumn("TO_TEL_NO_3", "STRING");
        	this.dsExcelForm.addColumn("TO_CELL_NO_1", "STRING");
        	this.dsExcelForm.addColumn("TO_CELL_NO_2", "STRING");
        	this.dsExcelForm.addColumn("TO_CELL_NO_3", "STRING");
        	this.dsExcelForm.addColumn("ORDRR_TEL_NO_1", "STRING");
        	this.dsExcelForm.addColumn("ORDRR_TEL_NO_2", "STRING");
        	this.dsExcelForm.addColumn("ORDRR_TEL_NO_3", "STRING");
        	this.dsExcelForm.addColumn("ORDRR_CELL_NO_1", "STRING");
        	this.dsExcelForm.addColumn("ORDRR_CELL_NO_2", "STRING");
        	this.dsExcelForm.addColumn("ORDRR_CELL_NO_3", "STRING");
        	this.dsExcelForm.addColumn("RCPT_DV", "STRING");

        	var arrTelNumber;
        	var arrCellNumber;
        	var vRcptDv;

        	// 데이터 셋팅
        	for(var i=1; i<this.dsTemp2.rowcount; i++){

        		var nRow = this.dsExcelForm.addRow();

        		for(var j=0; j<this.dsTemp2.colcount; j++){
        			//this.dsExcelForm.setColumn(nRow, j, this.dsTemp2.getColumn(i, j));
        			this.dsExcelForm.setColumn(nRow, this.dsTemp2.getColID(j), this.dsTemp2.getColumn(i, j));
        		}

        		this.dsExcelForm.setColumn(nRow, "CUST_CD", this.edtCustCd_sc.value);
        		this.dsExcelForm.setColumn(nRow, "LN_NO", i+1);
        		this.dsExcelForm.setColumn(nRow, "WAREH_CD", this.cboWareh.value);


        		// 송화인 연락처 처리.
        		arrTelNumber = this.fnRefineTelCellNumber(this.dsExcelForm.getColumn(nRow, "FR_TEL_NO"));
        		arrCellNumber = this.fnRefineTelCellNumber(this.dsExcelForm.getColumn(nRow, "FR_CELL_NO"));

        		this.dsExcelForm.setColumn(nRow, "FR_TEL_NO_1", arrTelNumber[0]);
        		this.dsExcelForm.setColumn(nRow, "FR_TEL_NO_2", arrTelNumber[1]);
        		this.dsExcelForm.setColumn(nRow, "FR_TEL_NO_3", arrTelNumber[2]);
        		this.dsExcelForm.setColumn(nRow, "FR_CELL_NO_1", arrCellNumber[0]);
        		this.dsExcelForm.setColumn(nRow, "FR_CELL_NO_2", arrCellNumber[1]);
        		this.dsExcelForm.setColumn(nRow, "FR_CELL_NO_3", arrCellNumber[2]);

        		// 수화인 연락처 처리.
        		arrTelNumber = this.fnRefineTelCellNumber(this.dsExcelForm.getColumn(nRow, "TO_TEL_NO"));
        		arrCellNumber = this.fnRefineTelCellNumber(this.dsExcelForm.getColumn(nRow, "TO_CELL_NO"));

        		this.dsExcelForm.setColumn(nRow, "TO_TEL_NO_1", arrTelNumber[0]);
        		this.dsExcelForm.setColumn(nRow, "TO_TEL_NO_2", arrTelNumber[1]);
        		this.dsExcelForm.setColumn(nRow, "TO_TEL_NO_3", arrTelNumber[2]);
        		this.dsExcelForm.setColumn(nRow, "TO_CELL_NO_1", arrCellNumber[0]);
        		this.dsExcelForm.setColumn(nRow, "TO_CELL_NO_2", arrCellNumber[1]);
        		this.dsExcelForm.setColumn(nRow, "TO_CELL_NO_3", arrCellNumber[2]);


        		// 주문자 연락처 처리.
        		arrTelNumber = this.fnRefineTelCellNumber(this.dsExcelForm.getColumn(nRow, "ORDRR_TEL_NO"));
        		arrCellNumber = this.fnRefineTelCellNumber(this.dsExcelForm.getColumn(nRow, "ORDRR_CELL_NO"));

        		this.dsExcelForm.setColumn(nRow, "ORDRR_TEL_NO_1", arrTelNumber[0]);
        		this.dsExcelForm.setColumn(nRow, "ORDRR_TEL_NO_2", arrTelNumber[1]);
        		this.dsExcelForm.setColumn(nRow, "ORDRR_TEL_NO_3", arrTelNumber[2]);
        		this.dsExcelForm.setColumn(nRow, "ORDRR_CELL_NO_1", arrCellNumber[0]);
        		this.dsExcelForm.setColumn(nRow, "ORDRR_CELL_NO_2", arrCellNumber[1]);
        		this.dsExcelForm.setColumn(nRow, "ORDRR_CELL_NO_3", arrCellNumber[2]);


        		// 접수구분 처리
        		vRcptDv = this.dsExcelForm.getColumn(nRow, "RCPT_DV");

        		// 빈칸인경우 "일반(01)"으로 처리
        		if(this.gfnIsNull(vRcptDv)){
        			this.dsExcelForm.setColumn(nRow, "RCPT_DV", "01");
        		}
        		// 1자리이면 앞에 "0" 붙여줌
        		else if(vRcptDv.length < 2){
        			vRcptDv = "0"+vRcptDv;
        			this.dsExcelForm.setColumn(nRow, "RCPT_DV", vRcptDv);
        		}


        		// 일반(01) , 반품(02)이 아닌 값이 들어온 경우 일반으로 처리
        		if(vRcptDv != "01" && vRcptDv != "02"){
        			vRcptDv = "01";
        			this.dsExcelForm.setColumn(nRow, "RCPT_DV", vRcptDv);
        		}
        	}


        }



        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 행추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function(){

        	var sDate = this.gfnGetDate();
        	var lnNo = nexacro.toNumber(Number(this.dsList.getMax("LN_NO")), 0);

        	/*if(this.dsList.getRowCount() == 0) {
        		this.dsList.clearData();
        		this.dsList.copyData(this.dsSaveList);
        	}*/

        	//그리드 신규만 ROW 추가.
        	this.dsList.addRow();

        	//default 설정
        	this.dsList.setColumn(this.dsList.rowposition, "WAREH_CD"	, this.cboWareh.value);
        	this.dsList.setColumn(this.dsList.rowposition, "REG_EMP_ID"	, this.objApp.gv_userId);

        	this.dsList.setColumn(this.dsList.rowposition, "SHP_MALL_SLIP_NO" , "");
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


        /***********************************************************************************************
         * @function	: fnSetExcelForm
         * @description	: 조회한 주문접수 양식 형태에 맞게 셋팅
        /***********************************************************************************************/
        this.fnSetExcelForm = function()
        {
        	var dsObj = this.dsUserExcelFormInfo;

        	// 저장된 양식이 없으면 기본양식 셋팅.
        	if(dsObj.getRowCount()==0){
        		dsObj = this.dsDefaultColumn;

        		for(var i=0; i<dsObj.getRowCount(); i++){
        			var nRow = this.dsExcelForm.addRow();
        			var defaultColId = dsObj.getColumn(i,"COL_ID");
        			this.dsExcelForm.setColumn(nRow, "COL_ID", defaultColId);
        			this.dsExcelForm.setColumn(nRow, "COL_NM", this.dsMgmtColumn.lookup("COL_ID", defaultColId, "COL_NM"));
        		}

        	}
        	// 저장된 양식이 있는 경우.
        	else{

        		var strColId = dsObj.getColumn(0, "COL_ID");

        		var arrColId = strColId.split("|");

        		for(var i=0; i<arrColId.length; i++){
        			this.dsExcelForm.addColumn(arrColId[i], "string");

        		}

        	}

        	this.dsTemp.copyData(this.dsExcelForm);


        	// 사용자 엑셀 그리드 컬럼 설정.
        	for(var i=0; i<this.dsExcelForm.getColCount(); i++){

        		var nColId = this.dsExcelForm.getColID(i);
        		var nCol = this.grdExcelData.appendContentsCol("body");

        		this.grdExcelData.setRealColSize("body", nCol, this.dsMgmtColumn.lookup("COL_ID", nColId, "COL_WIDTH"));
        		this.grdExcelData.setCellProperty("head", nCol, "text", this.dsMgmtColumn.lookup("COL_ID", nColId, "COL_NM"));
        		this.grdExcelData.setCellProperty("body", nCol, "text", "bind:"+nColId);

        	}

        	this.grdExcelData.deleteContentsCol("body", 0);




        }



        /***********************************************************************************************
         * @function	: fnRefineTelCellNumber
         * @description	: 파라미터로 넘어온 숫자를 번호체계에 맞게 하이픈(-)을 붙여 리턴한다.
         * @param		: pTelCellNumber	- String
         * @return Array
        /***********************************************************************************************/
        this.fnRefineTelCellNumber = function(pTelCellNumber)
        {
        	var arrResult = [];
        	var frontNumber;

        	// 빈칸인경우 처리.
        	if(this.gfnIsNull(pTelCellNumber)){
        		arrResult[0]='';
        		arrResult[1]='';
        		arrResult[2]='';

        		return arrResult;
        	}


        	// 입력된 하이픈(-) 제거
        	pTelCellNumber = nexacro.replaceAll(pTelCellNumber, '-', '');

        	// 앞자리 2자리 체크. (지역번호 : 02)
        	frontNumber = pTelCellNumber.substr(0, 2);

        	// 지역번호가 02 인경우. => 자릿수 2, 4, 나머지로 자르기
        	if(this.dsTelCellFrontNum.findRow("CD", frontNumber) != -1){

        		arrResult[0] = pTelCellNumber.substr(0, frontNumber.length);
        		arrResult[1] = pTelCellNumber.substr(frontNumber.length, 4);
        		arrResult[2] = pTelCellNumber.substr(frontNumber.length+4);

        	}

        	else{

        		// 앞자리 3자리 체크.
        		frontNumber = pTelCellNumber.substr(0, 3);

        		// 앞자리가 기초코드에 등록된 경우.
        		if(this.dsTelCellFrontNum.findRow("CD", frontNumber) != -1){

        			arrResult[0] = pTelCellNumber.substr(0, frontNumber.length);

        			// 앞자리를 자르고 남은 문자의 길이가 8보다 작은경우. => 3, 나머지로 자르기
        			if(pTelCellNumber.substr(frontNumber.length).length < 8){
        				arrResult[1] = pTelCellNumber.substr(frontNumber.length, 3);
        				arrResult[2] = pTelCellNumber.substr(frontNumber.length+3);
        			}
        			// 앞자리를 자르고 남은 문자의 길이가 8보다 크거나 같은경우. =>4, 나머지로 자르기
        			else{
        				arrResult[1] = pTelCellNumber.substr(frontNumber.length, 4);
        				arrResult[2] = pTelCellNumber.substr(frontNumber.length+4);
        			}



        		}
        		// 앞자리가 기초코드에 등록되지 않은경우. => 4자리로 자르기
        		else{

        			arrResult[0] = pTelCellNumber.substr(0, 4);
        			arrResult[1] = pTelCellNumber.substr(4, 4);
        			arrResult[2] = pTelCellNumber.substr(8);

        		}


        	}


        	//console.log(arrResult);


        	return arrResult;
        }


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

        			default	: 	break;
        		}
        	}

        };


        // 창고코드 변환시 데이터셋에 설정
        this.divTop_cboWareh_onitemchanged = function(obj,e)
        {
        	var dsCnt = this.dsList.getRowCount();

        	for(var i=0; i<dsCnt; i++){

        		this.dsList.setColumn(i, "CENT_CD", e.postvalue);
        		this.dsList.setColumn(i, "WAREH_CD", e.postvalue);

        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	// 전화번호 & 휴대폰번호 항목 변경시.
        	if(e.columnid.indexOf("TEL_NO") != -1 || e.columnid.indexOf("CELL_NO") != -1){

        		var telCellNum = e.newvalue;

        		// 번호정제
        		var arrTelCellNum = this.fnRefineTelCellNumber(telCellNum);

        		this.dsList.setColumn(e.row, e.columnid, arrTelCellNum[0]+"-"+arrTelCellNum[1]+"-"+arrTelCellNum[2]);
        		this.dsList.setColumn(e.row, e.columnid+"_1", arrTelCellNum[0]);
        		this.dsList.setColumn(e.row, e.columnid+"_2", arrTelCellNum[1]);
        		this.dsList.setColumn(e.row, e.columnid+"_3", arrTelCellNum[2]);
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
        		case	'edtCustCd_sc' : this.edtCustNm_sc.set_value(''); break;
        		case	'edtCustNm_sc' : this.edtCustCd_sc.set_value(''); break;

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
            this.btnSampleDownload.addEventHandler("onclick",this.fn_PopOpen,this);
            this.btnxlsUpld.addEventHandler("onclick",this.fn_PopOpen,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("onexpandup",this.grd_Main_onexpandup,this);
            this.btnAddRow.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustCd_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.btnCustSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.cboWareh.addEventHandler("onitemchanged",this.divTop_cboWareh_onitemchanged,this);
            this.cboWareh.addEventHandler("canitemchange",this.cboWareh_canitemchange,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.grdExcelData.addEventHandler("oncellclick",this.grdShprList_oncellclick,this);
            this.btnChgExcelForm.addEventHandler("onclick",this.fn_PopOpen,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };

        this.loadIncludeScript("RCPT_ORDER_0001_old_20200729.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
