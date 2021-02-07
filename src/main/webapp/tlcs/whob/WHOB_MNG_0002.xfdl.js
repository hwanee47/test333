(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("WHIO_MNG_0002");
            this.set_titletext("출고주문(피킹)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsOrdSt=ds1</Col><Col id=\"QUERY_LIST\">q1=WM102</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">selectPickOrd</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsResult</Col><Col id=\"SERVICE_BEANNAME\">whobMgmtService</Col><Col id=\"SERVICE_METHOD\">selectPickOrd</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">insertPickOrd</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch dsList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsResult</Col><Col id=\"SERVICE_BEANNAME\">whobMgmtService</Col><Col id=\"SERVICE_METHOD\">insertPickOrd</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" type=\"STRING\"/><Column id=\"CENT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"RCPT_YMD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_USE_NO\" size=\"256\" type=\"STRING\"/><Column id=\"MPCK_KEY\" size=\"256\" type=\"STRING\"/><Column id=\"MPCK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"STA_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"GDS_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_USE_NO\" size=\"256\" type=\"STRING\"/><Column id=\"MPCK_KEY\" size=\"256\" type=\"STRING\"/><Column id=\"WORK_DV_CD\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrdSt", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" type=\"STRING\"/><Column id=\"CENT_CD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"RCPT_YMD\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_USE_NO\" size=\"256\" type=\"STRING\"/><Column id=\"MPCK_KEY\" size=\"256\" type=\"STRING\"/><Column id=\"MPCK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"70","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("22");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"47","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("20");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"47","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_excel");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("21");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("23");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"0\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"129\"/><Column size=\"64\"/><Column size=\"131\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"95\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"창고코드\"/><Cell col=\"3\" text=\"창고코드\"/><Cell col=\"4\" text=\"창고명\"/><Cell col=\"5\" text=\"고객코드\"/><Cell col=\"6\" text=\"접수일자\"/><Cell col=\"7\" text=\"주문번호\"/><Cell col=\"8\" text=\"주문상태\"/><Cell col=\"9\" text=\"합포장번호\"/><Cell col=\"10\" text=\"합포장순번\"/><Cell col=\"11\" text=\"품목코드\"/><Cell col=\"12\" text=\"품목명\"/><Cell col=\"13\" text=\"주문수량\"/><Cell col=\"14\" text=\"등록자\"/><Cell col=\"15\" text=\"등록시간\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CENT_CD\"/><Cell col=\"3\" text=\"bind:WAREH_CD\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:WAREH_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CUST_ID\"/><Cell col=\"6\" text=\"bind:RCPT_YMD\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:CUST_USE_NO\"/><Cell col=\"8\" text=\"bind:WORK_DV_CD\" displaytype=\"combotext\" combodataset=\"dsOrdSt\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"center\"/><Cell col=\"9\" text=\"bind:MPCK_KEY\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:MPCK_SEQ\"/><Cell col=\"11\" text=\"bind:GDS_CD\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:GDS_NM\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:GDS_QTY\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:REG_EMP_ID\" textAlign=\"center\"/><Cell col=\"15\" text=\"bind:REG_DTIME\" displaytype=\"normal\"/></Band><Band id=\"summary\"><Cell colspan=\"13\" text=\"합계\"/><Cell col=\"13\" expr=\"dataset.getSum('parseInt(GDS_QTY)')\" displaytype=\"number\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"14\" colspan=\"2\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"47","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("19");
            obj.set_text("피킹");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","354","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("2");
            obj.set_text("접수일자");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc01","707","44","55","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("5");
            obj.set_text("주문번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOrdNo","770","44","150","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc01_00","947","44","92","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("7");
            obj.set_text("합포장번호");
            this.addChild(obj.name, obj);

            obj = new Edit("edtMpckNo","1018","44","150","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Combo("cboOrdSt","770","74","100","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsOrdSt");
            obj.set_taborder("18");
            obj.set_type("dropdown");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp01","707","74","92","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("17");
            obj.set_text("주문상태");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","25","74","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("9");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","87","74","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","177","74","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","201","74","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc","354","74","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("13");
            obj.set_text("품목");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd_sc","417","74","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Button("btnItemSearch","507","74","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm_sc","531","74","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","25","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("0");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","88","44","161","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("WAREH_CD");
            obj.set_datacolumn("WAREH_NM");
            obj.set_displayrowcount("6");
            obj.set_taborder("1");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_innerdataset("gdsWarehAuthList");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("24");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdFr_sc","417","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","550","43","8","23",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("-");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdTo_sc","561","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtOrdNo","value","dsSearch","CUST_USE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtMpckNo","value","dsSearch","MPCK_KEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboOrdSt","value","dsSearch","WORK_DV_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCustCd_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtItemCd_sc","value","dsSearch","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtItemNm_sc","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","calYmdFr_sc","value","dsSearch","STA_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","calYmdTo_sc","value","dsSearch","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("WHOB_MNG_0002.xfdl","lib::lib_Form.xjs");
        this.registerScript("WHOB_MNG_0002.xfdl", function() {
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
        	this.cboOrdSt.set_index(1);
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

        		// 초기화
        		case "btnReset" :
        			this.fnInit();
        		break;

        		case "btnExcel" :
        			this.fnExcel();
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

        	// 고객 체크
        	var edtCustCd_scValue = this.edtCustCd_sc.value;
        	var edtCustNm_scValue = this.edtCustNm_sc.value;

        	if(
        		(this.gfnIsNull(edtCustCd_scValue) && !this.gfnIsNull(edtCustNm_scValue)) ||
        		(!this.gfnIsNull(edtCustCd_scValue) && this.gfnIsNull(edtCustNm_scValue))
        	){
        		this.gfnAlert("고객의 코드와 명을 정확히 입력해주세요.", "", function(){

        			if(this.gfnIsNull(edtCustCd_scValue)){
        				this.edtCustCd_sc.setFocus();
        			}else{
        				this.edtCustNm_sc.setFocus();
        			}
        		});

        		return;
        	}


        	// 품목 체크
        	var edtItemCd_scValue = this.edtItemCd_sc.value;
        	var edtItemNm_scValue = this.edtItemNm_sc.value;

        	if(
        		(this.gfnIsNull(edtItemCd_scValue) && !this.gfnIsNull(edtItemNm_scValue)) ||
        		(!this.gfnIsNull(edtItemCd_scValue) && this.gfnIsNull(edtItemNm_scValue))
        	){
        		this.gfnAlert("품목의 코드와 명을 정확히 입력해주세요.", "", function(){

        			if(this.gfnIsNull(edtItemCd_scValue)){
        				this.edtItemCd_sc.setFocus();
        			}else{
        				this.edtItemNm_sc.setFocus();
        			}
        		});

        		return;
        	}

        	this.gfnTransaction("selectPickOrd");

        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
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


        	this.gfnCustomConfirm("피킹하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;


        		this.dsSaveList.clear();
        		this.grd_Main.set_enableredraw(false); // 그리드 새로고침 하지 않음

        		this.dsList.set_filterstr("CHK==1 && WORK_DV_CD=='30'");
        		this.dsSaveList.copyData(this.dsList, true);
        		this.dsList.filter("");

        		this.grd_Main.set_enableredraw(true); // 그리드 새로고침 하지 않음

        		if(this.dsSaveList.getRowCount() <= 0) {
        			this.gfnAlert("주문확정건이 없습니다.");
        			return;
        		}

        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("insertPickOrd");

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
        			var nRow = this.dsOrdSt.insertRow();
        			this.dsOrdSt.setColumn(nRow, "CD", "");
        			this.dsOrdSt.setColumn(nRow, "CD_NM", "전체");


        			// 주문상태 데이터셋 필터링 [전체, 할당완료, 피킹완료]
        			this.dsOrdSt.filter("CD == '' || CD == '30' || CD == '40'");

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
        	var pCustIdValue = '';	// 품목코드
        	var pCustNmValue = '';	// 품목명

        	if(btnName == "btnCustSearch"){
        		popupId = 'custPop1';
        		pCustIdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}

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
         * @function	: fnExcel,   fnXlsUpld
         * @description	: 엑셀.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        //엑셀샘플
        this.fnExcel = function(obj,e) {

        	if(this.grd_Main.rowcount <= 0) {
        		this.gfnAlert("조회내역이 없습니다.");
        		return;
        	}

        	this.gfnExcelExport(this.grd_Main, "sheet1", "출고관리(피킹)_"+this.gfnGetDate("milli"));

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
        		case	'edtItemCd_sc' : this.edtItemNm_sc.set_value(''); break;
        		case	'edtItemNm_sc' : this.edtItemCd_sc.set_value(''); break;

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
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("oncellclick",this.grd_Main_oncellclick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.staExeCorp00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtOrdNo.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.edtMpckNo.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.staExeCorp01.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustCd_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.btnCustSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.edtItemCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemCd_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.btnItemSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.edtItemNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtItemNm_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("WHOB_MNG_0002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
