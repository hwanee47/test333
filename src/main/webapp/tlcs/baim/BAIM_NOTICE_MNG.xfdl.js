(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_NOTICE_MNG");
            this.set_titletext("공지사항관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"STA_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_DT\" size=\"256\" type=\"STRING\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEL_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">searchNoticeList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsNoticeList=dsNoticeList</Col><Col id=\"QUERY_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_METHOD\">getNoticeList</Col><Col id=\"SERVICE_BEANNAME\">baimNoticeMgmService</Col></Row><Row><Col id=\"SVC_ID\">searchNoticeInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsNoticeInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimNoticeMgmService.getNoticeInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">saveNoticeInfo</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsNoticeList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimNoticeMgmService</Col><Col id=\"SERVICE_METHOD\">saveNoticeInfo</Col></Row><Row><Col id=\"SVC_ID\">deleteNoticeInfo</Col><Col id=\"IN_DATASET_LIST\">dsDelete=dsDeleteInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimNoticeMgmService</Col><Col id=\"SERVICE_METHOD\">deleteNoticeInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoticeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" type=\"STRING\"/><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"POSTED_S_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"POSTED_E_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TEMP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"VALUE\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">제목</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">내용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkValues", this);
            obj._setContents("<ColumnInfo><Column id=\"T00\" size=\"256\" type=\"STRING\"/><Column id=\"T01\" size=\"256\" type=\"STRING\"/><Column id=\"T02\" size=\"256\" type=\"STRING\"/><Column id=\"T03\" size=\"256\" type=\"STRING\"/><Column id=\"T04\" size=\"256\" type=\"STRING\"/><Column id=\"T05\" size=\"256\" type=\"STRING\"/><Column id=\"P\" size=\"256\" type=\"STRING\"/><Column id=\"RTMS\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"T01\">N</Col><Col id=\"T00\">N</Col><Col id=\"T02\">N</Col><Col id=\"T03\">N</Col><Col id=\"T04\">N</Col><Col id=\"T05\">N</Col><Col id=\"P\">N</Col><Col id=\"RTMS\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NM\">전체</Col><Col id=\"CD\"/></Row><Row><Col id=\"NM\">사용</Col><Col id=\"CD\">N</Col></Row><Row><Col id=\"NM\">미사용</Col><Col id=\"CD\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcSearch","0","35",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDays","25","44","38","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0203");
            obj.set_taborder("1");
            obj.set_text("기간");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","425","44","75","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("VALUE");
            obj.set_displayrowcount("15");
            obj.set_innerdataset("dsCboCode");
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_text("제목");
            obj.set_value("S");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("content","505","44","140","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBoardList","0","stcSearch:3",null,null,"680","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsNoticeList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("9");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"275\"/><Column size=\"102\"/><Column size=\"106\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" accessibilitydescription=\"T0871\" text=\"제목\"/><Cell col=\"3\" accessibilitydescription=\"T0278\" text=\"등록자\"/><Cell col=\"4\" accessibilitydescription=\"T0277\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell edittype=\"none\" expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" edittype=\"checkbox\" textAlign=\"center\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:REG_NM\"/><Cell col=\"4\" calendardisplaynulltype=\"none\" displaytype=\"normal\" text=\"bind:REG_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staDays00","381","44","38","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0203");
            obj.set_taborder("10");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("11");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grdBoardList:5","78","641",null,null,"0",null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.getSetter("domainId").set("T2125");
            obj.set_tabbuttonheight("30");
            obj.set_text("기본정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("divTab1","0","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"30","1",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("staPeriod","0","0","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1517");
            obj.set_taborder("1");
            obj.set_text("게시기간");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02","0","29",null,"30","1",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("2");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("staSubject","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1922");
            obj.set_taborder("3");
            obj.set_text("제목");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta05","0","58",null,"354","1",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("4");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("staContent","0","58","120","354",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0225");
            obj.set_taborder("5");
            obj.set_text("내용");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Calendar("calStaDate","123","3","130","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("cal_ty02");
            obj.set_enableevent("true");
            obj.set_taborder("6");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","273","3","130","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("cal_ty02");
            obj.set_taborder("7");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta03","259","2","12","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("8");
            obj.set_text("~");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtSubject","123","32","513","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_maxlength("0");
            obj.set_taborder("9");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new TextArea("txtContent","123","61","513","348",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("txa_ty02");
            obj.set_taborder("10");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Calendar("calYmdTo_sc","211","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Static("sta07_00","200","43","8","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("-");
            obj.set_color("white");
            this.addChild(obj.name, obj);

            obj = new Calendar("calYmdFr_sc","67","44","127","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("cal_ty02");
            this.addChild(obj.name, obj);

            obj = new Button("btnTempSave",null,"82","83","23","35",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0805");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_text("임시저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"83","68","23","122",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"83","68","23","196",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"83","68","23","272",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("7");
            obj.set_text("신규");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch00",null,"83","68","23","348",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("8");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab00.Tabpage1.form.divTab1.form.calStaDate","value","dsNoticeList","POSTED_S_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab00.Tabpage1.form.divTab1.form.calEndDate","value","dsNoticeList","POSTED_E_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage1.form.divTab1.form.edtSubject","value","dsNoticeList","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.divTab1.form.txtContent","value","dsNoticeList","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calYmdTo_sc","value","dsSearch","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","calYmdFr_sc","value","dsSearch","STA_DT");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_NOTICE_MNG.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_NOTICE_MNG.xfdl", function() {
        /**
        *  공지사항 관리
        *  @MenuPath		mdm > BSS00_NKFR_NOTICE_MNG
        *  @FileName		BSS00_NKFR_NOTICE_MNG.xfdl
        *  @Creator			yhkim
        *  @CreateDate		2018.08.14
        *  @Desction		스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.08.14			yhkim					최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * include 선언부																				*
        ************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역																		*
        ************************************************************************************************/
        this.objApp;
        var objDetail;

        /***********************************************************************************************
         * @function		: form_onload
         * @description		: FORM 온로드
         * @param 			: obj - form object
         * @param 			: e - form event
         * @return 			: N/A
        ***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//nexacro application
        	this.objApp = nexacro.getApplication();

        	objDetail = this.tab00.Tabpage1.form.divMain;

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

        	this.dsSearch.setColumn(0, "STA_DT", this.gfnGetDate("date"));
        	this.dsSearch.setColumn(0, "END_DT", this.gfnAddDate(this.gfnGetDate("date"), 30));

        };


        /***********************************************************************************************
         * @function		: fn_NoticeListSearch
         * @description		: 공지사항 목록 조회
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	var staDt = this.dsSearch.getColumn(0,"STA_DT");
        	var endDt = this.dsSearch.getColumn(0,"END_DT");


        	// 조회전 체크
        	if(this.gfnIsNull(staDt)){
        		this.gfnAlert("기간(FROM)을 입력해주세요.","",function(){
        			this.calYmdFr_sc.setFocus();
        		});

        		return;
        	}

        	if(this.gfnIsNull(endDt)){
        		this.gfnAlert("기간(TO)을 입력해주세요.","",function(){
        			this.calYmdTo_sc.setFocus();
        		});

        		return;
        	}


        	// 콤보박스에 따라 검색 조건 변경
        	if(this.cboSearchType.index === 0){
        		this.dsSearch.setColumn(0,"SUBJECT",this.content.text);
        		this.dsSearch.setColumn(0,"CONTENT","");
        	}else{
        		this.dsSearch.setColumn(0,"SUBJECT","");
        		this.dsSearch.setColumn(0,"CONTENT",this.content.text);
        	}


        	this.gfnTransaction("searchNoticeList");

        };


        /***********************************************************************************************
         * @function		: fnAdd
         * @description		: 공지사항 상세정보 초기화
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fnAdd = function()
        {
        	var nRowType = this.dsNoticeList.getRowType(this.dsNoticeList.getRowCount()-1);
        	// 이미 추가된 행이 있다면 추가안함.
        	if(nRowType == Dataset.ROWTYPE_INSERT) return;

        	var nRow = this.dsNoticeList.addRow(0);

        	this.dsNoticeList.setColumn(nRow, "CHK", "1");
        	this.dsNoticeList.setColumn(nRow, "POSTED_S_DATE", this.gfnGetDate("date"));
        	this.dsNoticeList.setColumn(nRow, "TEMP_YN", "N");

        };


        /***********************************************************************************************
         * @function		: fnSave
         * @description		: 공지사항 상세정보 저장
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {
        	//chk된 항목이 있는지 확인.
        	if(this.dsNoticeList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("저장할 행을 체크해주세요.");
        		return;
        	}

        	var calStaDateValue = this.dsNoticeList.getColumn(this.dsNoticeList.rowposition, "POSTED_S_DATE");
        	var calEndDateValue = this.dsNoticeList.getColumn(this.dsNoticeList.rowposition, "POSTED_E_DATE");

        	var edtSubjectValue = this.dsNoticeList.getColumn(this.dsNoticeList.rowposition, "SUBJECT");
        	var txtContentValue = this.dsNoticeList.getColumn(this.dsNoticeList.rowposition, "CONTENT");


        	if(this.gfnIsNull(calStaDateValue)){
        		this.gfnAlert("게시기간(FROM)을 입력해주세요.", "", function(){
        			this.tab00.Tabpage1.form.divTab1.form.calStaDate.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(calEndDateValue)){
        		this.gfnAlert("게시기간(TO)을 입력해주세요.", "", function(){
        			this.tab00.Tabpage1.form.divTab1.form.calEndDate.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(calEndDateValue)){
        		this.gfnAlert("제목을 입력해주세요.", "", function(){
        			this.tab00.Tabpage1.form.divTab1.form.edtSubject.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(txtContentValue)){
        		this.gfnAlert("내용을 입력해주세요.", "", function(){
        			this.tab00.Tabpage1.form.divTab1.form.txtContent.setFocus();
        		});
        		return;
        	}


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;


        		this.gfnTransaction("saveNoticeInfo");

        	});

        };

        /***********************************************************************************************
         * @function		: fn_DaySetting
         * @description		: 검색조건 달력 셋팅
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_DaySetting = function(obj,e)
        {
        	var btnName		= obj.name;
        	var dateFm		= this.divDate.form;
        	//
        	if(btnName === "btnDate01"){
        		//
        		dateFm.fnSetFromDate(this.gfnGetDate("date"));
        		dateFm.fnSetToDate(this.gfnGetDate("date"));
        		//
        	}else if(btnName === "btnDate02"){
        		//
        		dateFm.fnSetFromDate(this.gfnAddDate(this.gfnGetDate("date"), -1));
        		dateFm.fnSetToDate(this.gfnGetDate("date"));
        		//
        	}else if(btnName === "btnDate03"){
        		//
        		dateFm.fnSetFromDate(this.gfnAddDate(this.gfnGetDate("date"), -3));
        		dateFm.fnSetToDate(this.gfnGetDate("date"));
        	}
        	//
        };

        /***********************************************************************************************
         * @function		: fn_NoticeDelete
         * @description		: 공지사항 삭제
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_NoticeDelete = function(obj,e)
        {
        	//chk된 항목이 있는지 확인.
        	if(this.dsNoticeList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0269");
        		this.gfnAlert("삭제할 항목을 선택해주세요.");
        		return;
        	}

        	this.dsDeleteInfo.clearData();
        	//
        	if(this.gfnConfirm("삭제하시겠습니까?")) {
        		//
        		for(var i=this.dsNoticeList.getRowCount() -1; i>=0; i--) {
        			//
        			if(this.dsNoticeList.getColumn(i, "CHK") == '1') {
        				//
        				if(this.dsNoticeList.getRowType(i) == 2) {
        					//
        					this.dsNoticeList.deleteRow(i);
        				} else {
        					//
        					var addrow = this.dsDeleteInfo.addRow();
        					this.dsDeleteInfo.copyRow(addrow, this.dsNoticeList, i);
        				}
        			}
        		}

        		if(this.dsDeleteInfo.getRowCount() > 0) {
        			this.gfnTransaction("deleteNoticeInfo");
        		}
        	}
        };
        /***********************************************************************************************
         * @function		: fn_AllChk
         * @description		: 전체 체크 시 전체 체크
         * @param			: obj 	- CheckBox object
         * @param			: e 	- CheckBoxChangedEventInfo event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_AllChk = function(obj,e)
        {
        	//
        	for(var cnt = 0; cnt < this.dsChkValues.getColCount(); cnt++) {
        		//
        		if(obj.value){
        			this.dsChkValues.setColumn(0,this.dsChkValues.getColID(cnt),"Y");
        		}else{
        			this.dsChkValues.setColumn(0,this.dsChkValues.getColID(cnt),"N");
        		}
        		//
        	}
        	//
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
        		case "commonCode":
        			divFm.cboCpDv.set_index(0);
        		break;

        		case "searchNoticeInfo":
        			this.fn_checkBoxSetting();
        		break;

        		case "saveNoticeInfo":
        			this.gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		break;

        		case "deleteNoticeInfo":
        			this.gfnAlert("삭제되었습니다.");
        			this.fnSearch();
        		break;


        		default :
        		break;
        	}
        };


        this.dsNoticeList_onrowposchanged = function(obj,e)
        {
        	var nRowType = this.dsNoticeList.getRowType(e.newrow);

        	if(nRowType == Dataset.ROWTYPE_INSERT) {
        		this.btnTempSave.set_enable(true);
        	} else{
        		this.btnTempSave.set_enable(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdBoardList.addEventHandler("onheadclick",this.gfnGridSort,this);
            this.grdBoardList.addEventHandler("onselectchanged",this.fn_Grid_SelectSearch,this);
            this.staDays00.addEventHandler("onclick",this.staDays00_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.staContent.addEventHandler("onclick",this.divMain_staContent_onclick,this);
            this.btnTempSave.addEventHandler("onclick",this.fn_NoticeIfnoSave,this);
            this.btnSave.addEventHandler("onclick",this.fn_NoticeIfnoSave,this);
            this.btnDelete.addEventHandler("onclick",this.fn_NoticeDelete,this);
            this.btnNew.addEventHandler("onclick",this.fn_NoticeInfoClear,this);
            this.btnSearch00.addEventHandler("onclick",this.fn_NoticeListSearch,this);
            this.dsNoticeList.addEventHandler("onrowposchanged",this.dsNoticeList_onrowposchanged,this);
        };

        this.loadIncludeScript("BAIM_NOTICE_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
