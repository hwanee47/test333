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
            this.set_titletext("엑셀업로드 양식 선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(430,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WAREIO_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WAREIO_DV\">O1</Col><Col id=\"XLS_FRM_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getRcptOrdExcelForm</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">getRcptOrdExcelForm</Col></Row><Row><Col id=\"SVC_ID\">saveRcptOrdExcelForm</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">saveRcptOrdExcelForm</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsSaveMaster=dsSaveMaster dsSave=dsExcelForm:A</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">deleteRcptOrdExcelForm</Col><Col id=\"SERVICE_BEANNAME\">rcptMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteRcptOrdExcelForm</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsSaveMaster=dsSaveMaster</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getExcelFormList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsXlsFrmNm=dsXlsFrmNm</Col><Col id=\"QUERY_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getExcelFormList</Col></Row></Rows>");
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


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","0","35",null,"72","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("11");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","15","0","195","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("4");
            obj.set_text("엑셀업로드 양식 선택");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCustom","22","181","378",null,null,"20",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_taborder("7");
            obj.set_scrolltype("vertical");
            obj.set_background("(bottomatbottombottom,bottom,bottom) aqua");
            obj.set_selecttype("row");
            obj.set_scrollbartype("none fixed");
            obj.set_binddataset("dsExcelForm");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"365\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:COL_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00","22","140","100","50",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("8");
            obj.set_text("엑셀양식");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","356","162","43","16",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("선택");
            obj.set_textAlign("center");
            obj.set_font("bold 11px/normal \"나눔고딕\"");
            obj.set_border("1px solid #c7c7c7");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00","313","162","43","16",null,null,null,null,null,null,this);
            obj.set_taborder("10");
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

            obj = new Static("staDropLoc00_00","25","76","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("12");
            obj.set_text("양식");
            this.addChild(obj.name, obj);

            obj = new Combo("cboXlsFrmNm_sc","72","76","188","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("XLS_FRM_NM");
            obj.set_datacolumn("XLS_FRM_NM");
            obj.set_displayrowcount("6");
            obj.set_taborder("13");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_cssclass("sel_ty01_req");
            obj.set_innerdataset("dsXlsFrmNm");
            obj.set_value("ko");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","351","76","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0672");
            obj.set_fittocontents("none");
            obj.set_taborder("14");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel","6","845","245.12%",null,null,"-270",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_binddataset("ds00");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle01","80","120","270","31",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("16");
            obj.set_text("※ 업로드할 양식을 선택해주세요!");
            obj.set_font("normal 700 15px/normal \"나눔고딕\"");
            obj.set_color("#004473");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",430,710,this,function(p){});
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
        this.addIncludeScript("RCPT_ORDER_P030.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_ORDER_P030.xfdl", function() {
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

        	// 저장된 양식 리스트 조회
        	this.fnSearchXlsFrmList();



        	// 조회
        	//this.fnSearch();

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

        	this.dsXlsFrmNm.clearData();

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

        	/************************************************************************************/

        	this.fnSetDefaultExcelForm();


        	// 로그인계정 주문접수 엑셀양식 조회
        	this.gfnTransaction("getRcptOrdExcelForm");

        };


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

        		// 확인
        		case "btnOk" :
        			if(this.gfnIsNull(this.cboXlsFrmNm_sc.value)){
        				this.gfnAlert("업로드할 양식을 선택해주세요.");
        				return;
        			}


        			var colId;
        			for(var i=0; i<this.dsExcelForm.rowcount; i++){
        				colId = this.dsExcelForm.getColumn(i, "COL_ID");
        				this.dsResult.addColumn(colId, "STRING");
        			}

        			// return dataSet 초기화

        			var json = {
        				ds : this.dsResult.saveXML(),
        				callFn : this.getOwnerFrame().callbackFn
        			}

        			this.close(JSON.stringify(json));

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

        	this.dsExcelForm.clearData();

        	this.dsList.clearData();


        	for(var i = this.grdExcel.getCellCount("body"); i>=1; i--){
        		this.grdExcel.deleteContentsCol("body", i);
        	}
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


        	this.fnSetExcelGridForm();
        }

        /***********************************************************************************************
         * @function	: fnSetExcelGridForm
         * @description	: 엑셀 그리드 항목 셋팅 (다운로드용).
        /***********************************************************************************************/
        this.fnSetExcelGridForm = function()
        {
        	var nFindRow;
        	var nCol;
        	var nColWidth = 150; 	// Default column width
        	for(var i=0; i<this.dsExcelForm.rowcount; i++){

        		nCol = this.grdExcel.appendContentsCol("body");

        		this.grdExcel.setCellProperty("head", nCol, "text", this.dsExcelForm.getColumn(i,"COL_NM"));
        		this.dsMgmtColumn.getColumn("COL_WIDTH");

        		nFindRow = this.dsMgmtColumn.findRow("COL_NM", this.dsExcelForm.getColumn(i,"COL_NM"));

        		if(nFindRow != -1){
        			nColWidth = this.dsMgmtColumn.getColumn(nFindRow, "COL_WIDTH");
        		}

        		this.grdExcel.setRealColSize("body", nCol, nColWidth);

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



        			// 기본양식 추가
        			this.dsXlsFrmNm.insertRow(0);
        			this.dsXlsFrmNm.setColumn(0, "XLS_FRM_NM", "기본양식");


        			this.cboXlsFrmNm_sc.set_index(0);


        			this.fnSetDefaultExcelForm();

        			// 양식 조회
        			this.fnSearch();


        		break;


        		// 조회
        		case "getRcptOrdExcelForm" :


        			// 엑셀양식 설정
        			this.fnSetExcelForm();


        		break;


        		// 고객 조회조건 처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "CUST_ID", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsSearch.setColumn(0, "CUST_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));

        				// 저장된 양식 리스트 조회
        				this.fnSearchXlsFrmList();


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
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnCustSearch.addEventHandler("onclick",this.fnPopOpen,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.cboXlsFrmNm_sc.addEventHandler("onitemchanged",this.cboXlsFrmNm_sc_onitemchanged,this);
            this.btnOk.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("RCPT_ORDER_P030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
