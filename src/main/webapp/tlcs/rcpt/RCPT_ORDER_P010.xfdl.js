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
            this.set_name("RCPT_ORDER_P010");
            this.set_titletext("주문접수 엑셀 양식 변경");
            if (Form == this.constructor)
            {
                this._setFormPosition(660,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WAREIO_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WAREIO_DV\">O1</Col><Col id=\"XLS_FRM_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getRcptOrdExcelForm</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">getRcptOrdExcelForm</Col></Row><Row><Col id=\"SVC_ID\">saveRcptOrdExcelForm</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">saveRcptOrdExcelForm</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsSaveMaster=dsSaveMaster dsSave=dsExcelForm:A</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">deleteRcptOrdExcelForm</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteRcptOrdExcelForm</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsSaveMaster=dsSaveMaster</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getExcelFormList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsXlsFrmNm=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getExcelFormList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFixColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_ID\">NO</Col></Row><Row><Col id=\"COL_ID\">SLIP_YMD</Col></Row><Row><Col id=\"COL_ID\">SHP_MALL_SLIP_NO</Col></Row><Row><Col id=\"COL_ID\">GDS_CD</Col></Row><Row><Col id=\"COL_ID\">ORD_QTY</Col></Row><Row><Col id=\"COL_ID\">FR_NM</Col></Row><Row><Col id=\"COL_ID\">FR_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">FR_BASIC_ADDR</Col></Row><Row><Col id=\"COL_ID\">FR_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">FR_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">FR_CELL_NO</Col></Row><Row><Col id=\"COL_ID\">TO_NM</Col></Row><Row><Col id=\"COL_ID\">TO_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">TO_BASIC_ADDR</Col></Row><Row><Col id=\"COL_ID\">TO_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">TO_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">TO_CELL_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_NM</Col></Row><Row><Col id=\"COL_ID\">ORDRR_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_ADDR</Col></Row><Row><Col id=\"COL_ID\">ORDRR_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">ORDRR_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_CELL_NO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMgmtColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_NM\">접수일자</Col><Col id=\"COL_ID\">SLIP_YMD</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"SEQ\">0</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">고객사용번호(고객사 주문번호)</Col><Col id=\"COL_ID\">SHP_MALL_SLIP_NO</Col><Col id=\"COL_WIDTH\">250</Col><Col id=\"SEQ\">1</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_ID\">GDS_CD</Col><Col id=\"COL_NM\">품목코드</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"SEQ\">2</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">주문수량</Col><Col id=\"COL_ID\">ORD_QTY</Col><Col id=\"COL_WIDTH\">80</Col><Col id=\"SEQ\">3</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">송화인명</Col><Col id=\"COL_ID\">FR_NM</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"SEQ\">4</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">송화인우편번호</Col><Col id=\"COL_ID\">FR_ZIP_NO</Col><Col id=\"COL_WIDTH\">120</Col><Col id=\"SEQ\">5</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">송화인주소</Col><Col id=\"COL_ID\">FR_BASIC_ADDR</Col><Col id=\"COL_WIDTH\">150</Col><Col id=\"SEQ\">6</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">송화인상세주소</Col><Col id=\"COL_ID\">FR_DETAIL_ADDR</Col><Col id=\"COL_WIDTH\">230</Col><Col id=\"SEQ\">7</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">송화인전화번호</Col><Col id=\"COL_ID\">FR_TEL_NO</Col><Col id=\"COL_WIDTH\">120</Col><Col id=\"SEQ\">8</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">송화인휴대폰번호</Col><Col id=\"COL_ID\">FR_CELL_NO</Col><Col id=\"COL_WIDTH\">140</Col><Col id=\"SEQ\">9</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">수화인명</Col><Col id=\"COL_ID\">TO_NM</Col><Col id=\"SEQ\">10</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">수화인우편번호</Col><Col id=\"COL_ID\">TO_ZIP_NO</Col><Col id=\"SEQ\">11</Col><Col id=\"COL_WIDTH\">120</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">수화인주소</Col><Col id=\"COL_ID\">TO_BASIC_ADDR</Col><Col id=\"SEQ\">12</Col><Col id=\"COL_WIDTH\">150</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">수화인상세주소</Col><Col id=\"COL_ID\">TO_DETAIL_ADDR</Col><Col id=\"SEQ\">13</Col><Col id=\"COL_WIDTH\">230</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">수화인전화번호</Col><Col id=\"COL_ID\">TO_TEL_NO</Col><Col id=\"SEQ\">14</Col><Col id=\"COL_WIDTH\">120</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">수화인휴대폰번호</Col><Col id=\"COL_ID\">TO_CELL_NO</Col><Col id=\"SEQ\">15</Col><Col id=\"COL_WIDTH\">140</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">주문자명</Col><Col id=\"COL_ID\">ORDRR_NM</Col><Col id=\"SEQ\">16</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">주문자우편번호</Col><Col id=\"COL_ID\">ORDRR_ZIP_NO</Col><Col id=\"SEQ\">17</Col><Col id=\"COL_WIDTH\">120</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">주문자주소</Col><Col id=\"COL_ID\">ORDRR_ADDR</Col><Col id=\"SEQ\">18</Col><Col id=\"COL_WIDTH\">150</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">주문자상세주소</Col><Col id=\"COL_ID\">ORDRR_DETAIL_ADDR</Col><Col id=\"SEQ\">19</Col><Col id=\"COL_WIDTH\">230</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">주문자전화번호</Col><Col id=\"COL_ID\">ORDRR_TEL_NO</Col><Col id=\"SEQ\">20</Col><Col id=\"COL_WIDTH\">120</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">주문자휴대폰번호</Col><Col id=\"COL_ID\">ORDRR_CELL_NO</Col><Col id=\"SEQ\">21</Col><Col id=\"COL_WIDTH\">140</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">운송장번호</Col><Col id=\"COL_ID\">WAYBILL_NO</Col><Col id=\"SEQ\">22</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_NM\">합포장번호</Col><Col id=\"COL_ID\">MPCK_KEY</Col><Col id=\"SEQ\">23</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_NM\">합포장SEQ</Col><Col id=\"COL_ID\">MPCK_SEQ</Col><Col id=\"SEQ\">24</Col><Col id=\"COL_WIDTH\">80</Col></Row><Row><Col id=\"COL_NM\">접수구분(01:일반, 02:반품)</Col><Col id=\"COL_ID\">RCPT_DV</Col><Col id=\"SEQ\">25</Col><Col id=\"COL_WIDTH\">160</Col></Row><Row><Col id=\"COL_NM\">고객요청메세지</Col><Col id=\"COL_ID\">CUST_REQ_MSG</Col><Col id=\"SEQ\">26</Col><Col id=\"COL_WIDTH\">250</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelForm", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM_ORG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDefaultColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_ID\">SLIP_YMD</Col></Row><Row><Col id=\"COL_ID\">SHP_MALL_SLIP_NO</Col></Row><Row><Col id=\"COL_ID\">GDS_CD</Col></Row><Row><Col id=\"COL_ID\">ORD_QTY</Col></Row><Row><Col id=\"COL_ID\">FR_NM</Col></Row><Row><Col id=\"COL_ID\">FR_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">FR_BASIC_ADDR</Col></Row><Row><Col id=\"COL_ID\">FR_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">FR_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">FR_CELL_NO</Col></Row><Row><Col id=\"COL_ID\">TO_NM</Col></Row><Row><Col id=\"COL_ID\">TO_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">TO_BASIC_ADDR</Col></Row><Row><Col id=\"COL_ID\">TO_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">TO_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">TO_CELL_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_NM</Col></Row><Row><Col id=\"COL_ID\">ORDRR_ZIP_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_ADDR</Col></Row><Row><Col id=\"COL_ID\">ORDRR_DETAIL_ADDR</Col></Row><Row><Col id=\"COL_ID\">ORDRR_TEL_NO</Col></Row><Row><Col id=\"COL_ID\">ORDRR_CELL_NO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSortMgmtColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSortMgmtColumnCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREIO_DV\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_MODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXlsFrmNm", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","0","35",null,"72","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("16");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","15","0","195","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("6");
            obj.set_text("주문접수 엑셀 양식 관리");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCustom","300","231","334",null,null,"29",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_taborder("9");
            obj.set_scrolltype("vertical");
            obj.set_background("(bottomatbottombottom,bottom,bottom) aqua");
            obj.set_selecttype("row");
            obj.set_scrollbartype("none fixed");
            obj.set_binddataset("dsExcelForm");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"320\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:COL_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divColumnList","20","231","240",null,null,"29",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid #c7c7c7");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle","22","190","91","50",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("11");
            obj.set_text("관리항목");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00","301","190","91","50",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("12");
            obj.set_text("엑셀양식");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle01","60","120","540","31",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("13");
            obj.set_text("※ 마우스로 항목을 \"클릭\" 또는 \"드래그\"하여 나만의 엑셀양식을 관리하세요 !");
            obj.set_font("normal 700 15px/normal \"나눔고딕\"");
            obj.set_color("#004473");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","513","77","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","591","212","43","16",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("선택");
            obj.set_textAlign("center");
            obj.set_font("bold 11px/normal \"나눔고딕\"");
            obj.set_border("1px solid #c7c7c7");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","548","212","43","16",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("필수");
            obj.set_background("#5a7db6");
            obj.set_textAlign("center");
            obj.set_font("bold 11px/normal \"나눔고딕\"");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","25","44","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("0");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","72","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            obj.set_inputtype("normal");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","162","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","186","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","367","77","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle01_00","262","413","36","65",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("17");
            obj.set_text("↔");
            obj.set_font("normal bold 30px/normal \"나눔고딕\"");
            obj.set_color("#004473");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00_00","25","76","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("18");
            obj.set_text("양식");
            this.addChild(obj.name, obj);

            obj = new Combo("cboXlsFrmNm_sc","72","76","188","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("XLS_FRM_NM");
            obj.set_datacolumn("XLS_FRM_NM");
            obj.set_displayrowcount("6");
            obj.set_taborder("19");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_cssclass("sel_ty01_req");
            obj.set_innerdataset("dsXlsFrmNm");
            obj.set_value("ko");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","440","77","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("20");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle02","22","152","91","50",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("21");
            obj.set_text("양식명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtXlsFrmNm","72","167","188","23",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","586","77","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("23");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",660,780,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboXlsFrmNm_sc","value","dsSearch","XLS_FRM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("RCPT_ORDER_P010.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_ORDER_P010.xfdl", function() {
        /**
        *  주문접수 엑셀 양식 변경
        *  @MenuPath
        *  @FileName 		RCPT_ORDER_P010.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.05.07
        *  @Desction        주문접수 엑셀 양식 변경 팝업
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.05.07		Kim Jin Hwan			최초 생성
        ************************************************************************************************
        */

         this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        var objUserProperty;
        var gridColumnDragStatus=false;
        var divColumnDragStatus=false;

        var btnColumnWidth = 217;		// 관리항목 버튼 컴포넌트 너비
        var btnColumnHeight = 24;		// 관리항목 버튼 컴포넌트 높이

        var vXlsFrmNm = "";
        var vSaveMode = "NORMAL";		// 신규입력 상태구분 위한 변수


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

        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "CUST_ID", this.getOwnerFrame().pCustId);
        	this.dsSearch.setColumn(0, "CUST_NM", this.getOwnerFrame().pCustNm);


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

        	// 커스텀 설정할 Grid를 Div의 사용자 변수로 설정
        	this.divColumnList.targetgrid = this.grdCustom;

        	// Form Drag move 이벤트 설정
        	this.addEventHandler("ondragmove", this.fnCustomGridForm_ondragmove, this);

        	// Form Drop 이벤트 설정
        	this.addEventHandler("ondrop", this.fnCustomGridForm_ondrop, this);

        	this.parent.addEventHandler("ondrop", this.fnCustomGridForm_ondrop, this);

        	// Grid Drag 이벤트 설정
        	this.grdCustom.addEventHandler("ondrag", this.fnCustomGrid_ondrag, this);

        	// Div Drop 이벤트 설정
        	this.divColumnList.addEventHandler("ondrop", this.fnMgmtDiv_ondrop, this);

        	// Grid Drop 이벤트 설정
        	this.grdCustom.addEventHandler("ondrop", this.fnCustomGrid_ondrop, this);

        	// 저장된 양식 리스트 조회
        	this.fnSearchXlsFrmList();

        	// 조회
        	this.fnSearch();

        };


        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/
        /***********************************************************************************************
         * @function	: fnSearchXlsFrmList
         * @description	: 저장된 양식 리스트 조회
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchXlsFrmList = function()
        {

        	/** 조회조건 필수입력 체크********************************************************/

        	// 고객정보 필수 입력
        	var vCustId_sc = this.edtCustId_sc.value;
        	var vCustNm_sc = this.edtCustNm_sc.value;

        	if(this.gfnIsNull(vCustId_sc) || this.gfnIsNull(vCustNm_sc)){

        		return;
        	}

        	// 로그인계정 주문접수 엑셀양식리스트 조회
        	this.gfnTransaction("getExcelFormList");

        };
        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {

        	/** 조회조건 필수입력 체크********************************************************/

        	// 고객정보 필수 입력
        	var vCustId_sc = this.edtCustId_sc.value;
        	var vCustNm_sc = this.edtCustNm_sc.value;

        	if(this.gfnIsNull(vCustId_sc) || this.gfnIsNull(vCustNm_sc)){

        		this.gfnAlert("고객정보를 입력해주세요.");
        		this.edtCustNm_sc.setFocus();
        		return;
        	}

        	// 양식명 필수 입력
        	var vXlsFrmNm_sc = this.cboXlsFrmNm_sc.value;

        	if(this.gfnIsNull(vXlsFrmNm_sc)){

        		this.gfnAlert("양식을 선택해주세요.\n저장된 양식이 없는 경우 신규버튼을 클릭하세요.");
        		this.cboXlsFrmNm_sc.setFocus();
        		return;
        	}

        	/************************************************************************************/

        	/* 조회전 관리항목 & 엑셀양식 초기화 */
        	this.fnSetDefaultExcelForm();


        	// 로그인계정 주문접수 엑셀양식 조회
        	this.gfnTransaction("getRcptOrdExcelForm");

        };


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 변경
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {
        	/** 필수입력 체크******************************************************************/

        	// 고객정보 필수 입력
        	var vCustId_sc = this.edtCustId_sc.value;
        	var vCustNm_sc = this.edtCustNm_sc.value;

        	if(this.gfnIsNull(vCustId_sc) || this.gfnIsNull(vCustNm_sc)){

        		this.gfnAlert("고객정보를 입력해주세요.");
        		this.edtCustNm_sc.setFocus();
        		return;
        	}

        	// 양식명 필수 입력
        	var vXlsFrmNm = this.edtXlsFrmNm.value;

        	if(this.gfnIsNull(vXlsFrmNm)){

        		this.gfnAlert("양식명을 입력해주세요.");
        		this.edtXlsFrmNm.setFocus();
        		return;
        	}

        	if( vXlsFrmNm == "GWDS_기본양식" ){
        		this.gfnAlert("해당 양식명으로 저장할 수 없습니다.");
        		return;
        	}


        	/* 양식명 특수문자 체크
        		파일명으로 사용할 수 없는 문자 ( '\', '/', ':', '*', '?', '"', '<', '>', '|' )
        	*/
        	var pattern1 = /[\/:*?"<>|]/;

        	if(pattern1.test(vXlsFrmNm)){
        		var errMsg = "양식명으로 사용할 수 없는 특수문자가 포함되어있습니다";
        		errMsg += "\n사용할수 없는 특수문자 ( \\, /, :, *, ?, \", <, >, | )";
        		this.gfnAlert(errMsg);
        		return;
        	}


        	/************************************************************************************/


        	if(!this.gfnConfirm("엑셀 양식을 저장하시겠습니까?")) return;

        	this.dsSaveMaster.setColumn(0, "CUST_ID", this.edtCustId_sc.value);
        	this.dsSaveMaster.setColumn(0, "WAREIO_DV",  'W1');
        	this.dsSaveMaster.setColumn(0, "XLS_FRM_NM", this.gfnIsNull(this.cboXlsFrmNm_sc.value)?this.edtXlsFrmNm.value:this.cboXlsFrmNm_sc.value);
        	this.dsSaveMaster.setColumn(0, "XLS_FRM_NM_NEW", this.edtXlsFrmNm.value);
        	this.dsSaveMaster.setColumn(0, "SAVE_MODE", vSaveMode);


        	this.gfnTransaction("saveRcptOrdExcelForm");
        };


        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function()
        {
        	/** 필수입력 체크******************************************************************/

        	// 고객정보 필수 입력
        	var vCustId_sc = this.edtCustId_sc.value;
        	var vCustNm_sc = this.edtCustNm_sc.value;

        	if(this.gfnIsNull(vCustId_sc) || this.gfnIsNull(vCustNm_sc)){

        		this.gfnAlert("고객정보를 입력해주세요.");
        		this.edtCustNm_sc.setFocus();
        		return;
        	}

        	// 양식명 필수 입력
        	var vXlsFrmNm = this.edtXlsFrmNm.value;

        	if(this.gfnIsNull(vXlsFrmNm)){

        		this.gfnAlert("삭제할 양식을 선택해주세요.");
        		this.edtXlsFrmNm.setFocus();
        		return;
        	}

        	/************************************************************************************/


        	if(!this.gfnConfirm("엑셀 양식을 삭제하시겠습니까?")) return;

        	this.dsSaveMaster.setColumn(0, "CUST_ID", this.edtCustId_sc.value);
        	this.dsSaveMaster.setColumn(0, "WAREIO_DV",  'O1');
        	this.dsSaveMaster.setColumn(0, "XLS_FRM_NM", this.dsList.getColumn(0,"XLS_FRM_NM_ORG"));


        	this.gfnTransaction("deleteRcptOrdExcelForm");
        }


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
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

        		// 변경
        		case "btnSave" :
        			this.fnSave();
        		break;

        		// 신규
        		case "btnAdd" :
        			// 고객정보 필수 입력
        			var vCustId_sc = this.edtCustId_sc.value;
        			var vCustNm_sc = this.edtCustNm_sc.value;

        			if(this.gfnIsNull(vCustId_sc) || this.gfnIsNull(vCustNm_sc)){

        				this.gfnAlert("고객정보를 입력해주세요.");
        				this.edtCustNm_sc.setFocus();
        				return;
        			}


        			this.cboXlsFrmNm_sc.set_value('');

        			// 신규입력모드
        			vSaveMode = "INSERT";
        			this.edtXlsFrmNm.set_enable(true);
        			this.edtXlsFrmNm.setFocus();


        			// 초기화
        			this.fnSetDefaultExcelForm();

        			// 엑셀양식 설정
        			this.fnSetExcelForm();

        			// 저장되지 않은 관리항목 설정
        			this.fnSetNoSaveMgmtColumn();

        		break;


        		// 삭제
        		case "btnDel" :

        			this.fnDelete();


        		break;


        		default :
        		break;
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
        			case	'edtCustId_sc' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtCustNm_sc' : this.gfnTransaction("getCustInfo"); break;

        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtCustId_sc' : this.edtCustNm_sc.set_value(''); break;
        			case	'edtCustNm_sc' : this.edtCustId_sc.set_value(''); break;

        		}
        	}
        };


        /***********************************************************************************************
         * @function	: fnPopOpen
         * @description	: 팝업버튼 제어
         * @param		: obj - nexacro.Button
         * @param		: e - nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnPopOpen = function(obj,e)
        {
        	var btnName	= obj.name;

        	switch(btnName)
        	{
        		 // 검색-고객
        		case "btnCustSearch" :
        			this.fnOpenPopCust("btnCustSearch"); break;
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnCustomGridForm_ondragmove
         * @description	: Form ondragmove 이벤트
         * @return N/A
        /***********************************************************************************************/
         this.fnCustomGridForm_ondragmove = function(obj,e)
        {
        	// Drag 객체 생성 함수 호출
        	var objDragComp = this.fnGetDragComp();

        	// 마우스를 따라 Drag 객체 이동
        	objDragComp.move(e.clientx+15, e.clienty+15);

        };


        /***********************************************************************************************
         * @function	: fnCustomGridForm_ondrop
         * @description	: Form ondrop 이벤트
         * @return N/A
        /***********************************************************************************************/
        this.fnCustomGridForm_ondrop = function(obj,e)
        {
        	var i;

        	// Drag 객체 생성 함수 호출
        	var objDragComp = this.fnGetDragComp();

        	// Drag 발생한 영역 정보 가져오기(DIV/GRID)
        	if(this.gfnIsNull(e.userdata)){
        		return;
        	}
        	var sFromComp = e.userdata.fromComp;

        	// Drag한 Column Id 정보 가져오기
        	var sColumnId = e.userdata.columnId;

        	var objDiv;
        	var objGrid;
        	var arrColumnList;
        	var nFindIdx;

        	// Drag 객체 Visible false 설정
        	objDragComp.set_visible(false);


        	// Div 스타일 설정
        	this.fnSetStyleDrag(this.divColumnList, false);
        	// Div 스타일 설정
        	this.fnSetStyleDrag(this.grdCustom, false);

        };


        /***********************************************************************************************
         * @function	: fnCustomGrid_ondrag
         * @description	: Grid ondrag 이벤트
         * @return N/A
        /***********************************************************************************************/
        this.fnCustomGrid_ondrag = function(obj,e)
        {
        	if(e.row!=-1)
        	{
        		var objDragComp;
        		var sCellText;
        		var sColumnId;
        		var nWidth;
        		var nHeight;
        		var objUserData;

        		// Drag하는 Cell의 텍스트 정보 가져오기
        		sCellText = obj.getCellText(e.row, e.cell);

        		// Drag한 Cell에 연결된 ColumnId값을 userdata로 설정
        		sColumnId = obj.getCellProperty("body", e.cell, "text").toString().replace("bind:", "");

        		// Drag하려는 ColumnId가 필수조건 인경우 Drag 못함.
        		//var requiredYn = this.dsMgmtColumn.lookup("COL_ID", sColumnId, "REQUIRED");
        		var requiredYn = this.dsMgmtColumn.lookup("COL_NM", sCellText, "REQUIRED");

        		if(requiredYn == "Y"){
        			//this.removeChild("btnDrag");
        			return;
        		}

        		if (this.gfnIsNull(sCellText)==false)
        		{
        			// Cell의 Width/Height정보 가져오기
        			nWidth = e.fromreferenceobject.getOffsetWidth();
        			nHeight = e.fromreferenceobject.getOffsetHeight();

        			// Drag 객체 생성 함수 호출
        			objDragComp = this.fnGetDragComp();

        			// Cell 텍스트를 Drag 텍스트로 설정
        			objDragComp.set_text(sCellText);

        			// Cell의 Width/Height값과 동일하게 Drag 객체 설정
        			objDragComp.setOffsetWidth(nWidth);
        			objDragComp.setOffsetHeight(nHeight);

        			// Drag Col Index를 Drag 객체의 사용자 변수로 설정
        			objDragComp.targetcol = e.col;

        			// Drag Grid를 Drag 객체의 사용자 변수로 설정
        			objDragComp.targetgrid = obj;

        			objDragComp.set_visible(true);

        			objUserData = {
        				"columnId" : sColumnId,
        				"columnText" : sCellText,
        				"fromComp" : "GRID"
        			};

        			objUserProperty = {
        				"columnWidth" : nWidth,
        				"columnHeight" : nHeight
        			}
        			e.userdata = objUserData;


        			// Div 스타일 설정
        			this.fnSetStyleDrag(this.divColumnList, true);


        			return true;
        		}
        	}
        };


        /***********************************************************************************************
         * @function	: fnCustomGrid_ondrop
         * @description	: Div ondrop 이벤트
         * @return N/A
        /***********************************************************************************************/
        this.fnCustomGrid_ondrop = function(obj,e)
        {
        	// Drag 객체 생성 함수 호출
        	var objDragComp = this.fnGetDragComp();

        	var arrColumnList;
        	var objGrid;

        	// Drag 발생한 영역 정보 가져오기(DIV/GRID)
        	if(this.gfnIsNull(e.userdata)){
        		return;
        	}
        	var sFromComp = e.userdata.fromComp;

        	// Drag한 Column Id 정보 가져오기
        	var sColumnId = e.userdata.columnId;

        	// Drag 객체 Visible false 설정
        	objDragComp.set_visible(false);

        	// Div영역에서 Drag가 발생했을 경우
        	// 그룹에서 해당 Column Id 삭제
        	if(sFromComp=="DIV")
        	{
        		// Div정보 가져오기
        		objDiv = e.sourceobject.parent.parent;

        		// Grid정보 가져오기
        		objGrid = objDiv.targetgrid;

        		// 그룹 컬럼리스트 정보 가져오기
        		arrColumnList = objDiv.columnlist;

        		// 그룹 컬럼리스트에서 삭제할 Column Id 위치 찾기
        		for(i=0;i<arrColumnList.length;i++)
        		{
        			if(arrColumnList[i]==sColumnId)
        			{
        				nFindIdx = i;
        				break;
        			}
        		}

        		// 그룹 컬럼 리스트에서 삭제
        		objDiv.columnlist.splice(nFindIdx, 1);

        		// 그룹 컬럼 명 리스트에서 삭제
        		objDiv.columnnamelist.splice(nFindIdx, 1);

        		// 카테고리 Div영역에 리스트 생성 함수 호출
        		this.gfnAddColumnListDiv();

        		// DataSet 로우 추가
        		var nRow = this.dsExcelForm.addRow();
        		this.dsExcelForm.setColumn(nRow, "COL_ID", e.userdata.columnId);
        		this.dsExcelForm.setColumn(nRow, "COL_NM", e.userdata.columnText);

        	}
        };


        /***********************************************************************************************
         * @function	: fnMgmtButton_ondrag
         * @description	: 관리항목 버튼 drag 이벤트
         * @return N/A
        /***********************************************************************************************/
        this.fnMgmtButton_ondrag = function(obj, e)
        {
        	var sText = obj.text;
        	var nWidth = obj.getOffsetWidth();
        	var nHeight = obj.getOffsetHeight();
        	var sColumnId = obj.columnid;

        	//Drag 객체 생성 함수 호출
        	objDragComp = this.fnGetDragComp();

        	//Item의 텍스트를 Drag 객체의 텍스트로 설정
        	objDragComp.set_text(sText);

        	//Item의 Width/Height값과 동일하게 Drag 객체 설정
        	objDragComp.setOffsetWidth(nWidth);
        	objDragComp.setOffsetHeight(nHeight);
        	objDragComp.set_visible(true);


        	//Drag한 Item에 연결된 ColumnId값을 userdata로 설정
        	objUserData = {
        		"columnId" : sColumnId,
        		"columnText" : sText,
        		"columnWidth" : nWidth,
        		"columnHeight" : nHeight,
        		"fromComp" : "DIV"
        	};
        	e.userdata = objUserData;


        	// Grid 스타일 설정
        	this.fnSetStyleDrag(this.grdCustom, true);

        	return true;
        }


        /***********************************************************************************************
         * @function	: fnMgmtButton_onclick
         * @description	: 관리항목 버튼 컴포넌트 클릭 이벤트
         * @return N/A
        /***********************************************************************************************/
        this.fnMgmtButton_onclick = function(obj,e)
        {
        	var objDragComp;
        	var sCellText;
        	var sColumnId;
        	var nWidth;
        	var nHeight;
        	var objUserData;

        	// Drag하는 Cell의 텍스트 정보 가져오기
        	sCellText = obj.text

        	// Drag한 Cell에 연결된 ColumnId값을 userdata로 설정
        	sColumnId = obj.columnid;

        	if(this.gfnIsNull(sCellText)==false)
        	{

        		// Div정보 가져오기
        		objDiv = this.divColumnList;

        		// Grid정보 가져오기
        		objGrid = objDiv.targetgrid;

        		// 그룹 컬럼리스트 정보 가져오기
        		arrColumnList = objDiv.columnlist;

        		// 그룹 컬럼리스트에서 삭제할 Column Id 위치 찾기
        		for(i=0;i<arrColumnList.length;i++)
        		{
        			if(arrColumnList[i]==sColumnId)
        			{
        				nFindIdx = i;
        				break;
        			}
        		}


        		// 그룹 컬럼 리스트에서 삭제
        		objDiv.columnlist.splice(nFindIdx, 1);

        		// 그룹 컬럼 명 리스트에서 삭제
        		objDiv.columnnamelist.splice(nFindIdx, 1);

        		// 카테고리 Div영역에 리스트 생성 함수 호출
        		this.gfnAddColumnListDiv();


        		// DataSet 로우 추가
        		var nRow = this.dsExcelForm.addRow();
        		this.dsExcelForm.setColumn(nRow, "COL_ID", sColumnId);
        		this.dsExcelForm.setColumn(nRow, "COL_NM", sCellText);

        	}

        }


        /***********************************************************************************************
         * @function	: fnMgmtDiv_ondrop
         * @description	: Div ondrop 이벤트
         * @return N/A
        /***********************************************************************************************/
        this.fnMgmtDiv_ondrop = function(obj,e)
        {
        	// Drag 객체 생성 함수 호출
        	var objDragComp = this.fnGetDragComp();

        	var arrColumnList;
        	var objGrid;

        	// Drag 발생한 영역 정보 가져오기(DIV/GRID)
        	if(this.gfnIsNull(e.userdata)){
        		return;
        	}
        	var sFromComp = e.userdata.fromComp;

        	// Drag한 Column Id 정보 가져오기
        	var sColumnId = e.userdata.columnId;

        	// Drag 객체 Visible false 설정
        	objDragComp.set_visible(false);

        	// Grid영역에서 Drag가 발생했을 경우
        	// 그룹에 해당 Column Id 추가
        	if(sFromComp=="GRID")
        	{
        		// 기존에 만들어진 그룹 컬럼 리스트가 없을 경우 초기화
        		if(this.gfnIsNull(obj.columnlist)==true)
        		{
        			obj.columnlist = [];
        			obj.columnnamelist = [];
        		}

        		arrColumnList = obj.columnlist;
        		arrColumnNameList = obj.columnnamelist;

        		// Grid정보 가져오기
        		objGrid = objDragComp.targetgrid;

        		// Drag한 Column Id가 존재할 경우
        		// 그룹 컬럼 리스트, 그룹 컬럼명 리스트에 추가
        		if(this.gfnIsNull(sColumnId)==false)
        		{
        			//arrColumnList[arrColumnList.length] = sColumnId;
        			arrColumnList[arrColumnList.length] = this.dsMgmtColumn.getColumn(this.dsMgmtColumn.findRow("COL_NM", objDragComp.text), "COL_ID");
        			arrColumnNameList[arrColumnNameList.length] = objDragComp.text;
        		}

        		// 카테고리 Div영역에 리스트 생성 함수 호출
        		this.gfnAddColumnListDiv();

        		this.dsList.deleteColumn(sColumnId);

        		this.dsExcelForm.deleteRow(this.dsExcelForm.findRow("COL_NM",objDragComp.text));


        		// Div 스타일 설정
        		this.fnSetStyleDrag(this.divColumnList, false);


        	}
        };


        /***********************************************************************************************
         * @function	: btnClose_onclick
         * @description	: 팝업 닫기 버튼 클릭 이벤트
         * @return N/A
        /***********************************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        /***********************************************************************************************
         * @function	: cboXlsFrmNm_sc_onitemchanged
         * @description	: 양식 변경 이벤트
         * @return N/A
        /***********************************************************************************************/
        this.cboXlsFrmNm_sc_onitemchanged = function(obj,e)
        {
        	// 변경할때 마다 양식 조회 처리.
        	this.fnSearch();
        };


        /************************************************************************************************
        * 사용자 FUNCTION 영역
        ************************************************************************************************/
        /***********************************************************************************************
         * @function	: fnGetDragComp
         * @description	: Drag 객체 생성 함수
         * @param		: N/A
         * @return Drag 객체
        /***********************************************************************************************/
        this.fnGetDragComp = function()
        {
        	var objDragComp;

        	//이미 생성된 Drag 객체가 있을 경우
        	if(this.gfnIsNull(this.components["btnDrag"])==false)
        	{
        		//기존에 생성된 Drag객체를 설정
        		objDragComp = this.components["btnDrag"];
        	}
        	//신규 Drag 객체 생성이 필요한 경우
        	else
        	{
        		//Drag 객체 생성
        		objDragComp = new Button("btnDrag", 0, 0, 0, 0);
        		objDragComp.set_color("black");
        		//objDragComp.set_background("papayawhip");
        		this.addChild(objDragComp.name, objDragComp);

        		objDragComp.show();
        	}


        	//Drag 객체 리턴
        	return  objDragComp;
        }


        /***********************************************************************************************
         * @function	: fnSetStyleDrag
         * @description	: Modal background 스타일 설정 이벤트
         * @param		: obj  - 스타일을 적용할 컴포넌트
         * @param		: flag - visible 유무
         * @return Drag 객체
        /***********************************************************************************************/
        this.fnSetStyleDrag = function(obj, flag)
        {

        	if(flag){
        		obj.set_background("RGBA(0,0,0,0.07)");
        	}else{
        		obj.set_background("");
        	}

        }



        /***********************************************************************************************
         * @function	: gfnAddColumnListDiv
         * @description	: 카테고리 Div영역에 리스트 생성 함수
         * @return N/A
        /***********************************************************************************************/
        this.gfnAddColumnListDiv = function()
        {
        	var i;
        	var objBtn;
        	var nLeft, nTop;

        	var objRmv;
        	var rtn;

        	var objDiv = this.divColumnList;
        	var arrColumnList = objDiv.columnlist;
        	var arrColumnNameList = objDiv.columnnamelist;

        	//기존에 생성된 컴포넌트 Visible false 설정;
        	for(i=objDiv.form.components.length-1;i>=0;i--)
        	{
        		objDiv.form.components[i].set_visible(false);
        	}


        	this.dsSortMgmtColumn.deleteAll();

        	// 관리항목 데이터셋에 셋팅
        	for(i=0; i<arrColumnList.length; i++)
        	{
        		var nRow = this.dsSortMgmtColumn.addRow();

        		this.dsSortMgmtColumn.setColumn(nRow, "COL_ID", arrColumnList[i]);
        		this.dsSortMgmtColumn.setColumn(nRow, "COL_NM", this.dsMgmtColumn.lookup("COL_ID", arrColumnList[i], "COL_NM"));
        		this.dsSortMgmtColumn.setColumn(nRow, "SEQ", this.dsMgmtColumn.lookup("COL_ID", arrColumnList[i], "SEQ"));
        	}

        	// 데이터셋 SEQ 기준으로 정렬후 Copy ( 정렬시 데이터셋의 물리적은 로우는 정렬되지 않음. Copy를 통해 정렬된 데이터셋 새로 생성처리함.)
        	this.dsSortMgmtColumn.set_keystring("S:+SEQ");
        	this.dsSortMgmtColumnCopy.copyData(this.dsSortMgmtColumn, true);



        	// 그룹 컬럼 리스트 만큼 Loop
        	for(i=0;i<this.dsSortMgmtColumnCopy.rowcount;i++)
        	{
        		nLeft = 10;
        		nTop = 10 + i*(btnColumnHeight+10);

        		// 기존에 생성된 컴포넌트가 없을 경우 신규 추가
        		if(this.gfnIsNull(objDiv.form.components["btnColumn"+i])==true)
        		{
        			// 컴포넌트 생성
        			objBtn = new Button("btnColumn"+i, nLeft, nTop, btnColumnWidth, btnColumnHeight);
        			objDiv.form.addChild(objBtn.name, objBtn);

        			// 컬럼 ID 사용자 변수로 설정
        			objBtn.columnid = this.dsSortMgmtColumnCopy.getColumn(i, "COL_ID");

        			// 컬럼명 Text로 설정
        			objBtn.set_text(this.dsSortMgmtColumnCopy.getColumn(i, "COL_NM"));

        			// 컬럼명 Tooltiptext 설정
        			objBtn.set_tooltiptext(this.dsSortMgmtColumnCopy.getColumn(i, "COL_NM"));

        			// Drag & Click 처리를 위해 이벤트 설정
        			objBtn.addEventHandler("ondrag", this.fnMgmtButton_ondrag, this);
        			objBtn.addEventHandler("onclick", this.fnMgmtButton_onclick, this);
        			objBtn.show();

        		}
        		else
        		{
        			// 컴포넌트 위치 이동
        			objDiv.form.components["btnColumn"+i].move(nLeft, nTop);

        			// 컬럼 ID 사용자 변수로 설정
        			objDiv.form.components["btnColumn"+i].columnid = this.dsSortMgmtColumnCopy.getColumn(i, "COL_ID");

        			// 컬럼명 Text로 설정
        			objDiv.form.components["btnColumn"+i].set_text(this.dsSortMgmtColumnCopy.getColumn(i, "COL_NM"));

        			// 컬럼명 Tooltiptext 설정
        			objDiv.form.components["btnColumn"+i].set_tooltiptext(this.dsSortMgmtColumnCopy.getColumn(i, "COL_NM"));

        			// 컴포넌트 Visible true 설정
        			objDiv.form.components["btnColumn"+i].set_visible(true);
        		}
        	}
        	objDiv.form.resetScroll();

        }


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
         * @function	: fnSetDefaultExcelForm
         * @description	: 관리항목 & 엑셀양식 초기화
        /***********************************************************************************************/
        this.fnSetDefaultExcelForm = function()
        {
        	this.edtXlsFrmNm.set_value('');

        	this.divColumnList.columnlist = [];
        	this.divColumnList.columnnamelist = [];

        	for(var i=this.divColumnList.form.components.length-1;i>=0;i--)
        	{
        		this.divColumnList.form.removeChild(this.divColumnList.form.components[i].name);
        	}

        	this.dsExcelForm.clearData();

        	this.dsList.clearData();



        }


        /***********************************************************************************************
         * @function	: fnSetExcelForm
         * @description	: 조회한 주문접수 양식 형태에 맞게 셋팅
        /***********************************************************************************************/
        this.fnSetExcelForm = function()
        {
        	var dsObj = this.dsList;

        	// 저장된 양식이 없으면 기본양식 셋팅.
        	if(this.dsList.rowcount==0){
        		dsObj = this.dsDefaultColumn;

        		for(var i=0; i<dsObj.rowcount; i++){
        			var nRow = this.dsExcelForm.addRow();
        			var defaultColId = dsObj.getColumn(i,"COL_ID");
        			this.dsExcelForm.setColumn(nRow, "COL_ID", defaultColId);
        			this.dsExcelForm.setColumn(nRow, "COL_NM", this.dsMgmtColumn.lookup("COL_ID", defaultColId, "COL_NM"));
        			this.dsExcelForm.setColumn(nRow, "REQUIRED", this.dsMgmtColumn.lookup("COL_ID", defaultColId, "REQUIRED"));

        			this.grdCustom.setCellProperty("body", nRow, "cssclass", "expr:REQUIRED=='Y'? 'excel_required' : 'excel_selected'");
        		}

        	}
        	// 저장된 양식이 있는 경우.
        	else{

        		var strColId = dsObj.getColumn(0, "COL_ID");

        		var arrColId = strColId.split("|");

        		for(var i=0; i<arrColId.length; i++){
        			var nRow = this.dsExcelForm.addRow();
        			this.dsExcelForm.setColumn(nRow, "COL_ID", arrColId[i]);
        			this.dsExcelForm.setColumn(nRow, "COL_NM", this.dsMgmtColumn.lookup("COL_ID", arrColId[i], "COL_NM"));
        			this.dsExcelForm.setColumn(nRow, "REQUIRED", this.dsMgmtColumn.lookup("COL_ID", arrColId[i], "REQUIRED"));

        			this.grdCustom.setCellProperty("body", nRow, "cssclass", "expr:REQUIRED=='Y'? 'excel_required' : 'excel_selected'");

        		}

        	}

        }


        /***********************************************************************************************
         * @function	: fnOpenPopCust
         * @description	: 고객 조회 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopCust = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pCustIdValue = '';	// 고객ID
        	var pCustNmValue = '';	// 고객명

        	if(btnName == "btnCustSearch"){
        		popupId = 'custPop1';
        		pCustIdValue = this.edtCustId_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}


        	// 팝업 호출
        	var oArg = {
        				  pCustId		: pCustIdValue									// 고객ID
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
         * @function	: fnSetNoSaveMgmtColumn
         * @description	: 자신의 엑셀양식에 저장되지않은 관리항목들을 Div 사용자 정의 Array에  셋팅.
        /***********************************************************************************************/
        this.fnSetNoSaveMgmtColumn = function()
        {

        	// Div 컴포넌트 사용자 정의 Array
        	var arrColumnList = this.divColumnList.columnlist;
        	var arrColumnNameList = this.divColumnList.columnnamelist;


        	var dsRowCnt = this.dsMgmtColumn.rowcount;

        	for(var i=0; i<dsRowCnt; i++){

        		mgmtColumnId = this.dsMgmtColumn.getColumn(i, "COL_ID");
        		mgmtColumnNm = this.dsMgmtColumn.getColumn(i, "COL_NM");

        		// 저장되지 않은 관리항목만 Array에 추가.
        		if(this.dsExcelForm.findRow("COL_ID", mgmtColumnId) != -1) continue;

        		arrColumnList[arrColumnList.length] = mgmtColumnId;
        		arrColumnNameList[arrColumnNameList.length] = mgmtColumnNm;
        	}

        	// 컴포넌트 생성
        	this.gfnAddColumnListDiv();
        }



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

        		// 양식리스트 조회
        		case "getExcelFormList" :


        			if(this.dsXlsFrmNm.rowcount == 0){

        				this.fnSetDefaultExcelForm();
        				this.cboXlsFrmNm_sc.set_index(0);
        				this.edtXlsFrmNm.set_enable(false);
        			}
        			else{

        				var nDsFindRow = this.dsXlsFrmNm.findRow("XLS_FRM_NM", vXlsFrmNm);

        				// 저장후 재조회시 저장한 양식으로 설정한다.
        				if( nDsFindRow !=-1 ){
        					this.cboXlsFrmNm_sc.set_index(nDsFindRow);
        				}
        				// 찾는 데이터가 없는경우 첫번째값으로 설정
        				else{
        					this.cboXlsFrmNm_sc.set_index(0);
        				}

        				// 양식 조회
        				this.fnSearch();
        			}





        		break;


        		// 조회
        		case "getRcptOrdExcelForm" :

        			// 입력모드 초기화
        			vSaveMode = "NORMAL";
        			this.edtXlsFrmNm.set_enable(true);

        			// 양식명 EditText
        			this.edtXlsFrmNm.set_value(this.dsList.getColumn(0,"XLS_FRM_NM"));

        			// 엑셀양식 설정
        			this.fnSetExcelForm();

        			// 저장되지 않은 관리항목 설정
        			this.fnSetNoSaveMgmtColumn();

        		break;


        		// 저장
        		case "saveRcptOrdExcelForm" :

        			// 입력모드 초기화
        			vSaveMode = "NORMAL";


        			vXlsFrmNm = this.dsSaveMaster.getColumn(0, "XLS_FRM_NM_NEW");

        			this.gfnAlert("저장되었습니다.");


        			// 로그인계정 주문접수 엑셀양식리스트 재조회
        			this.fnSearchXlsFrmList();


        		break;


        		// 삭제
        		case "deleteRcptOrdExcelForm":

        			this.gfnAlert("삭제되었습니다.");

        			// 로그인계정 주문접수 엑셀양식리스트 재조회
        			this.fnSearchXlsFrmList();
        		break;


        		// 고객 조회조건 처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "CUST_ID", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsSearch.setColumn(0, "CUST_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));

        				// 저장된 양식 리스트 조회
        				this.fnSearchXlsFrmList();

        				this.fnSetDefaultExcelForm();
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
        			this.edtCustId_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));

        			// 저장된 양식 리스트 조회
        			this.fnSearchXlsFrmList();

        			this.fnSetDefaultExcelForm();
        		break;



        		default :
        		break;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divColumnList.addEventHandler("ondrop",this.divColumnList_ondrop,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnCustSearch.addEventHandler("onclick",this.fnPopOpen,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.cboXlsFrmNm_sc.addEventHandler("onitemchanged",this.cboXlsFrmNm_sc_onitemchanged,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.edtXlsFrmNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("RCPT_ORDER_P010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
