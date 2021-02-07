(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RCPTPAY_MGT_0001");
            this.set_titletext("시간수불");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"QUERY_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">selectRcptpayByHour</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsResult</Col><Col id=\"SERVICE_BEANNAME\">rcptpayMgmtService</Col><Col id=\"SERVICE_METHOD\">selectRcptpayByHour</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">saveRcptpayByHour</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsResult</Col><Col id=\"SERVICE_BEANNAME\">rcptpayMgmtService</Col><Col id=\"SERVICE_METHOD\">saveRcptpayByHour</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"WORK_YMDH\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WRAEH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"STC_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WAREO_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSACTION_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MODI_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"STA_DT\" size=\"256\" type=\"STRING\"/><Column id=\"STA_TM\" size=\"256\" type=\"STRING\"/><Column id=\"END_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_TM\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTime", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">00</Col><Col id=\"CD_NM\">0</Col></Row><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">01</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"CD_NM\">03</Col></Row><Row><Col id=\"CD\">04</Col><Col id=\"CD_NM\">04</Col></Row><Row><Col id=\"CD\">05</Col><Col id=\"CD_NM\">05</Col></Row><Row><Col id=\"CD\">06</Col><Col id=\"CD_NM\">06</Col></Row><Row><Col id=\"CD\">07</Col><Col id=\"CD_NM\">07</Col></Row><Row><Col id=\"CD\">08</Col><Col id=\"CD_NM\">08</Col></Row><Row><Col id=\"CD\">09</Col><Col id=\"CD_NM\">09</Col></Row><Row><Col id=\"CD\">10</Col><Col id=\"CD_NM\">10</Col></Row><Row><Col id=\"CD\">11</Col><Col id=\"CD_NM\">11</Col></Row><Row><Col id=\"CD\">12</Col><Col id=\"CD_NM\">12</Col></Row><Row><Col id=\"CD\">13</Col><Col id=\"CD_NM\">13</Col></Row><Row><Col id=\"CD\">14</Col><Col id=\"CD_NM\">14</Col></Row><Row><Col id=\"CD\">15</Col><Col id=\"CD_NM\">15</Col></Row><Row><Col id=\"CD\">16</Col><Col id=\"CD_NM\">16</Col></Row><Row><Col id=\"CD\">17</Col><Col id=\"CD_NM\">17</Col></Row><Row><Col id=\"CD\">18</Col><Col id=\"CD_NM\">18</Col></Row><Row><Col id=\"CD\">19</Col><Col id=\"CD_NM\">19</Col></Row><Row><Col id=\"CD\">20</Col><Col id=\"CD_NM\">20</Col></Row><Row><Col id=\"CD\">21</Col><Col id=\"CD_NM\">21</Col></Row><Row><Col id=\"CD\">22</Col><Col id=\"CD_NM\">22</Col></Row><Row><Col id=\"CD\">23</Col><Col id=\"CD_NM\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","1","35",null,"72","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"37","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_excel");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("11");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc","511","75","52","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("15");
            obj.set_text("품목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd_sc","563","75","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm_sc","677","75","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnItemSearch","653","75","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","26","75","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("16");
            obj.set_text("조회일자");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","511","45","52","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("17");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","563","45","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","677","45","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","653","45","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("18");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"108\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"130\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작업일자\"/><Cell col=\"2\" text=\"창고코드\"/><Cell col=\"3\" text=\"창고명\"/><Cell col=\"4\" text=\"고객코드\"/><Cell col=\"5\" text=\"고객명\"/><Cell col=\"6\" text=\"품목코드\"/><Cell col=\"7\" text=\"품목명\"/><Cell col=\"8\" text=\"재고수량\"/><Cell col=\"9\" text=\"입고수량\"/><Cell col=\"10\" text=\"출고수량\"/><Cell col=\"11\" text=\"조정수량\"/><Cell col=\"12\" text=\"입력자\"/><Cell col=\"13\" text=\"입력시간\"/><Cell col=\"14\" text=\"수정자\"/><Cell col=\"15\" text=\"수정시간\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:WORK_YMDH\"/><Cell col=\"2\" text=\"bind:WAREH_CD\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:WRAEH_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUST_ID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:ITEM_CD\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:ITEM_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:STC_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:WAREI_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:WAREO_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:TRANSACTION_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:REG_EMP_ID\"/><Cell col=\"13\" text=\"bind:REG_DTIME\"/><Cell col=\"14\" text=\"bind:MODI_EMP_ID\"/><Cell col=\"15\" text=\"bind:MODI_DTIME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"7","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_text("수불");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("STA_DT","108","76","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Calendar("END_DT","308","76","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","294","76","15","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Combo("cboStaTM","235","76","55","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsTime");
            obj.set_taborder("4");
            obj.set_type("dropdown");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboEndTM","435","76","55","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsTime");
            obj.set_taborder("6");
            obj.set_type("dropdown");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","25","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("20");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","108","44","161","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("WAREH_CD");
            obj.set_datacolumn("WAREH_NM");
            obj.set_displayrowcount("6");
            obj.set_taborder("0");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_innerdataset("gdsWarehAuthList");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("21");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","482","34","104",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edtCustCd_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtItemCd_sc","value","dsSearch","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","STA_DT","value","dsSearch","STA_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","END_DT","value","dsSearch","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboStaTM","value","dsSearch","STA_TM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboEndTM","value","dsSearch","END_TM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtItemNm_sc","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("RCPTPAY_MGT_0001.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPTPAY_MGT_0001.xfdl", function() {
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
        	//this.gfnTransaction("commonCode");

        	//달력 셋팅
        	this.fn_CalSetting();

        	// 창고코드
        	this.cboWareh.set_index(0);

        	this.cboStaTM.set_index(0);
        	this.cboEndTM.set_index(23);
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
        		// 수불처리
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

        	this.gfnTransaction("selectRcptpayByHour");

        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveRcptpayByHour");
        	});



        };


        /***********************************************************************************************
         * @function	: fnExcel,   fnXlsUpld
         * @description	: 엑셀.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnExcel = function() {

        	if(this.grd_Main.rowcount <= 0) {
        		this.gfnAlert("조회내역이 없습니다.");
        		return;
        	}

        	this.gfnExcelExport(this.grd_Main, "sheet1", "시간수불_"+this.gfnGetDate("milli"));

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
        			this.fnCompInit();
        		break;


        		// 고객 조회조건 처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "CUST_ID", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsSearch.setColumn(0, "CUST_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnCustSearch.click();
        			}

        		break;

        		// 품목 조회조건 처리.
        		case "getItemInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsItemInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "GDS_CD", this.dsItemInfo.getColumn(0,"ITEM_CD"));
        				this.dsSearch.setColumn(0, "ITEM_NM", this.dsItemInfo.getColumn(0,"ITEM_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnItemSearch.click();
        			}

        		break;



        		default :
        		break;
        	}
        };

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

        		//검색-품목
        		case "btnItemSearch" :
        			this.fn_OpenPopItem("btnItemSearch"); break;
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
        	var pCustCdValue = '';	// 품목코드
        	var pCustNmValue = '';	// 품목명

        	if(btnName == "btnCustSearch"){
        		popupId = 'custPop1';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}

        	// 팝업 호출
        	var oArg = {
        				  pCustCd		: pCustCdValue									// 고객코드
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

        	if(btnName == "btnItemSearch"){
        		popupId = 'itemPop1';
        		pItemCdValue = this.edtItemCd_sc.value;
        		pItemNmValue = this.edtItemNm_sc.value;
        	}else{

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
         * @function	: fnPopupCallBack
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: dsObj		- nexacro.NormalDataset
         * @return N/A
         ***********************************************************************************************/
        this.fnPopupCallback = function(sPopupId, dsObj)
        {
        	switch(sPopupId) {
        		case "custPop1" :
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));
        		break;

        		case "itemPop1" :
        			this.edtItemCd_sc.set_value(dsObj.getColumn(0,"ITEM_CD"));
        			this.edtItemNm_sc.set_value(dsObj.getColumn(0,"ITEM_NM"));
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

        /***********************************************************************************************
         * @function		: fn_CalSetting
         * @description		: 달력 값 셋팅
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_CalSetting = function()
        {
        	var date = this.gfnGetDate("date");

        	//this.calFrom.set_value(this.gfnGetDate("date").substr(0, 6) + "01");
        	this.STA_DT.set_value(date.substr(0, 8));
        	this.END_DT.set_value(date.substr(0, 8));

        	//var time = this.gfnGetDate("time");
        	//this.STA_TM.set_value(time.substr(8,2));
        	//this.END_TM.set_value(time.substr(8,2));
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
        			case	'edtCustCd_sc' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtCustNm_sc' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtItemCd_sc' : this.gfnTransaction("getItemInfo"); break;
        			case	'edtItemNm_sc' : this.gfnTransaction("getItemInfo"); break;
        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtCustCd_sc' : this.edtCustNm_sc.set_value(); break;
        			case	'edtCustNm_sc' : this.edtCustCd_sc.set_value(); break;
        			case	'edtItemCd_sc' : this.edtItemNm_sc.set_value(); break;
        			case	'edtItemNm_sc' : this.edtItemCd_sc.set_value(); break;
        		}
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
            this.btnExcel.addEventHandler("onclick",this.btnOnClick,this);
            this.edtItemCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnItemSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.staExeCorp00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnCustSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("oncellclick",this.grd_Main_oncellclick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("RCPTPAY_MGT_0001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
