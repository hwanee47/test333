(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SYST_MNG_0020");
            this.set_titletext("권한별메뉴관리(시스템관리자용)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">searchList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsAuthList=dsAuthList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">getAuthList</Col></Row><Row><Col id=\"SVC_ID\">save</Col><Col id=\"IN_DATASET_LIST\">dsAuthList=dsAuthList:U</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">saveAuthList</Col><Col id=\"CALLBACK\">fnCallback</Col></Row><Row><Col id=\"SVC_ID\">delete</Col><Col id=\"IN_DATASET_LIST\">dsAuthList=dsAuthList:U</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">deleteAuth</Col><Col id=\"CALLBACK\">fnCallback</Col></Row><Row><Col id=\"SVC_ID\">searchDetailList</Col><Col id=\"IN_DATASET_LIST\">dsSearchSub=dsSearchSub</Col><Col id=\"OUT_DATASET_LIST\">dsMenuList=dsMenuList dsAuthDetailList=dsAuthDetailList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">getAuthDetailList</Col></Row><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsUseYn=ds1 dsUseYn_sc=ds2</Col><Col id=\"QUERY_LIST\">q1=SM993 q2=SM993</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">insertMenuList</Col><Col id=\"IN_DATASET_LIST\">dsMenuList=dsMenuList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">insertMenuList</Col></Row><Row><Col id=\"SVC_ID\">deleteMenuList</Col><Col id=\"IN_DATASET_LIST\">dsAuthDetailList=dsAuthDetailList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">deleteMenuList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"VALUE\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DV\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthDetailList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchSub", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthDel", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn_sc", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"VALUE\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">SUPER</Col><Col id=\"CD_NM\">SUPER</Col></Row><Row><Col id=\"CD\">ADMIN</Col><Col id=\"CD_NM\">ADMIN</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_search","0","35",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("stcBaseCorpId","25","44","70","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0199");
            obj.set_taborder("5");
            obj.set_text("권한명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAuthNm","73","44","123","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle","10","stc_search:2","91","31",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("2");
            obj.set_text("권한관리");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stTitle:0",null,"187","30",null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuthList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"123\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"130\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"권한코드\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"권한명\" color=\"#f9f475\"/><Cell col=\"4\" accessibilitydescription=\"T0199\" text=\"권한설명\" color=\"#f9f475\"/><Cell col=\"5\" accessibilitydescription=\"T0514\" text=\"권한구분\" color=\"#f9f475\"/><Cell col=\"6\" accessibilitydescription=\"T0514\" text=\"사용여부\" color=\"#f9f475\"/><Cell col=\"7\" accessibilitydescription=\"T0278\" text=\"등록자\"/><Cell col=\"8\" accessibilitydescription=\"T0587\" text=\"생성일자\"/><Cell col=\"9\" accessibilitydescription=\"T0278\" text=\"수정자\"/><Cell col=\"10\" accessibilitydescription=\"T0587\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:AUTH_CD\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:AUTH_NM\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:AUTH_DESC\" textAlign=\"left\"/><Cell col=\"5\" comboautoselect=\"true\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"dsAuthDv\" displaytype=\"combocontrol\" editautoselect=\"true\" edittype=\"combo\" text=\"bind:AUTH_DV\"/><Cell col=\"6\" comboautoselect=\"true\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"dsUseYn\" displaytype=\"combocontrol\" editautoselect=\"true\" edittype=\"combo\" text=\"bind:USE_YN\"/><Cell col=\"7\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:REG_ID\" textAlign=\"center\"/><Cell col=\"8\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:REG_DT\" textAlign=\"center\"/><Cell col=\"9\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:MOD_ID\" textAlign=\"center\"/><Cell col=\"10\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:MOD_DT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUseYn_sc","283","44","98","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("3");
            obj.set_innerdataset("dsUseYn_sc");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("stcBaseCorpId01","221","44","60","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0514");
            obj.set_taborder("6");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"7","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("8");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","68","23","251",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("7");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"7","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"7","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Static("stTitleDetail","830","grd_Main:12",null,"31","129",null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0200");
            obj.set_taborder("11");
            obj.set_text("권한 메뉴리스트");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Sub2","820","340",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuthDetailList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"105\"/><Column size=\"318\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"메인메뉴\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"서브메뉴\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:PARENT_MENU_NM\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:MENU_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stTitleDetail00","10","grd_Main:12",null,"31","949",null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0200");
            obj.set_taborder("13");
            obj.set_text("메뉴리스트 ( ※ 상단의 권한관리를 먼저 저장후 메뉴관리 가능합니다 )");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Sub1","0","340","716",null,null,"0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenuList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("14");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"105\"/><Column size=\"318\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"메인메뉴\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"서브메뉴\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:PARENT_MENU_NM\" textAlign=\"left\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:MENU_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddMenu","756","494","30","29",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("15");
            obj.set_background("url(\'img::btn_CalNext_P.png\') no-repeat");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteMenu","756","554","30","29",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("16");
            obj.set_background("url(\'img::btn_CalPrev_P.png\') no-repeat");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","21","1","379","34",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("시스템관리 > 권한별 메뉴관리(RGB시스템관리자용)");
            obj.set_fittocontents("width");
            obj.set_cssclass("top_title_route01");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("18");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchFocus","381","0","54","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edtAuthNm","accessibilityaction","dsSearch","AUTH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboUseYn_sc","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtAuthNm","value","dsSearch","AUTH_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SYST_MNG_0020.xfdl","lib::lib_Form.xjs");
        this.registerScript("SYST_MNG_0020.xfdl", function() {
        /**
        *  권한별메뉴관리
        *  @MenuPath		mdm > BSS11_NKFR_AUTHOR_MNG2
        *  @FileName		BSS11_NKFR_AUTHOR_MNG2.xfdl
        *  @Creator			kjh
        *  @CreateDate		2020.02.26
        *  @Desction		스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.26		kjh				최초 생성
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
         var lvRegSys;
         /***********************************************************************************************
         * @function	: form_onload
         * @description	: FORM 온로드
         * @param		: obj - form object
         * @param		: e - form event
         * @return N/A
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//nexacro application
        	this.objApp = nexacro.getApplication() ;
        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);
        };

         /***********************************************************************************************
         * @function	: form_oninit
         * @description	: FORM init
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.EventInfo
         * @return N/A
        /***********************************************************************************************/
        this.form_oninit = function(obj,e)
        {
        	this.gfnTransaction("commonCode");
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
        	switch( obj.name ) {
        		case "btnSearch"		: this.fnSearch();	// 조회
        			break;
        		case "btnSave"			: this.fnSave();	// 저장
        			break;
        		case "btnAdd"			: this.fnAdd();		// 추가
        			break;
        		case "btnDel"			: this.fnDel();		// 삭제
        			break;

        		case "btnAddMenu"		: this.fnAddMenu(); // 메뉴추가
        			break;
        		case "btnDeleteMenu"    : this.fnDeleteMenu(); // 메뉴삭제
        			break;
        		default :	break;
        	}
        };

        /***********************************************************************************************
         * @function	: edtAuthNm_onkeydown
         * @description	: onkeydown
         * @param		: obj - nexacro.Button
         * @param		: e - nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.edtAuthNm_onkeydown = function(obj,e)
        {
        	switch( e.keycode ) {
        		case	13 :
        			obj.updateToDataset();
        			this.btnSearch.click();
        			break;
        		default	   : break;
        	}
        };

        /***********************************************************************************************
         * @function	: cboSystem_onitemchanged
         * @description	: onitemchanged
         * @param		: obj - nexacro.Combo
         * @param		: e - nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cboSystem_onitemchanged = function(obj,e)
        {
        	obj.updateToDataset();
        	this.btnSearch.click();
        };

        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 권한리스트 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	//lvRegSys = this.cboSystem.value;
        	// 조회 transaction
        	this.dsAuthList.clearData();
        	this.gfnTransaction("searchList");
        };

        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function()
        {
        	// 몇건안되니 for...
        	for( var idx = 0; idx < this.dsAuthList.rowcount; idx++ ) {
        		if( this.dsAuthList.getRowType(idx) === Dataset.ROWTYPE_INSERT ) {
        			return;
        		}
        	}

        	var nRow = this.dsAuthList.addRow();
        	this.dsAuthList.setColumn(nRow,'CHK','1');
        	this.dsAuthList.setColumn(nRow,'DEL_YN','N');
        	this.dsAuthList.setColumn(nRow,'CONFIRM_YN','N');
        	this.dsAuthList.setColumn(nRow,'USE_YN','Y');

        };

        /***********************************************************************************************
         * @function	: fnDel
         * @description	: 삭제
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDel = function()
        {
        	//하나라도 체크를 해야함
            if(this.dsAuthList.getCaseCount("CHK==1") <= 0) {
        		this.gfnAlert("1건 이상 선택해야합니다.");
        		return;
            }

        	var nRow = this.dsAuthList.rowposition;
        	if( this.dsAuthList.getRowType(nRow) === Dataset.ROWTYPE_INSERT ) {
        		this.dsAuthList.deleteRow(nRow);
        	} else {
        		var authTitle = this.dsAuthList.getColumn(nRow,'AUTH_NM');
        		//if( !confirm(authTitle + ' 권한을 삭제하시겠습니까?') ) return;

        		this.gfnCustomConfirm(authTitle + ' 권한을 삭제하시겠습니까?', function(sPopupId, bResult){

        			if(!bResult) return;

        			this.dsAuthDel.clearData();
        			this.dsAuthDel.setColumn(this.dsAuthDel.addRow(),'AUTH_CD',this.dsAuthList.getColumn(nRow,'AUTH_CD'));
        			this.gfnTransaction("delete");

        		});


        	}
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
        		this.gfnAlert(errorMsg);
        	}else{

        		if( svcID === "save" ) {
        			this.fnSearch();
        			this.gfnAlert("저장되었습니다.");
        		} else if( svcID === 'commonCode' ) {

        			// 컴포넌트 초기화
        			this.fnCompInit();

        		} else if( svcID === 'delete' ) {
        			this.fnSearch();
        			this.gfnAlert("삭제되었습니다.");

        		}
        		else if( svcID === 'insertMenuList') {
        			this.gfnAlert("추가되었습니다.");
        			this.fnSearchDetailList();

        			this.grd_Sub1.setCellProperty("head", this.grd_Sub1.getBindCellIndex("body", "CHK"), "text", '0');
        			this.grd_Sub2.setCellProperty("head", this.grd_Sub2.getBindCellIndex("body", "CHK"), "text", '0');
        		}
        		else if( svcID === 'deleteMenuList') {
        			this.gfnAlert("삭제되었습니다.");
        			this.fnSearchDetailList();

        			this.grd_Sub1.setCellProperty("head", this.grd_Sub1.getBindCellIndex("body", "CHK"), "text", '0');
        			this.grd_Sub2.setCellProperty("head", this.grd_Sub2.getBindCellIndex("body", "CHK"), "text", '0');
        		}
        		else if (svcID === "searchList"){
        			if(this.dsAuthList.getRowCount()==0){
        				this.dsMenuList.clearData();
        				this.dsAuthDetailList.clearData();
        			}
        		}
         	}
        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 추가 변경 건에 대한 정보를 반영한다.
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	// 저장전 체크

        	//하나라도 체크를 해야함
            if(this.dsAuthList.getCaseCount("CHK==1") <= 0) {
        		this.gfnAlert("1건 이상 선택해야합니다.");
        		return;
            }



        	for( var i=0; i<this.dsAuthList.rowcount; i++){

        		var nRowChk = this.dsAuthList.getColumn(i, "CHK");

        		// 체크되지 않은 행 스킵.
        		if( nRowChk != "1") continue;

        		var nAuthNmValue = this.dsAuthList.getColumn(i, "AUTH_NM");

        		if(this.gfnIsNull(nAuthNmValue)){
        			this.gfnAlert((i+1)+"행의 권한명을 입력해주세요.", "", function(){
        				this.grd_Main.setCellPos(this.grd_Main.getBindCellIndex("BODY", "AUTH_NM"), i);
        				this.grd_Main.setFocus();
        			});

        			return;
        		}

        	}


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("save");
        	});
        }

        /***********************************************************************************************
         * @function	: dsAuthList_onrowposchanged
         * @description	: rowposition changed
         * @param		: obj - nexacro.NormalDataset
         * @param		: e	  - nexacro.DSRowPosChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsAuthList_onrowposchanged = function(obj,e)
        {
        	if(this.dsAuthList.rowcount == 0) return;


        	// 신규추가일경우
        	var nRowType = this.dsAuthList.getRowType(e.newrow);

        	if( nRowType == Dataset.ROWTYPE_INSERT){
        		this.dsMenuList.clearData();
        		this.dsAuthDetailList.clearData();
        		return;
        	}

        	this.fnSearchDetailList();
        };



        /***********************************************************************************************
         * @function	: fnSearchDetailList
         * @description	: 권한 상세리스트 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchDetailList = function()
        {
        	this.dsSearchSub.clearData();

        	var nRow = this.dsSearchSub.addRow();
        	this.dsSearchSub.setColumn(nRow,"AUTH_CD",this.dsAuthList.getColumn(this.dsAuthList.rowposition,"AUTH_CD"));

        	// 조회 transaction
        	this.gfnTransaction("searchDetailList");
        };




        /***********************************************************************************************
         * @function	: grdOnHeadClick
         * @description	: rowposition changed
         * @param		: obj - nexacro.Grid
         * @param		: e	  - nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.grdOnHeadClick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
        };

        /***********************************************************************************************
         * @function	: fnHeadAllCheck
         * @description	: headAllCheck
         * @param		: cellNumber - Number
         * @return N/A
        /***********************************************************************************************/
        this.fnHeadAllCheck = function(obj,cellNumber) {

        	var check = '0';
        	var colId = obj.getCellProperty('body',cellNumber,'text');
        	colId = colId.replace('bind:','');

        	var dsObj = this.objects[obj.binddataset];
        	var fRow  = dsObj.findRowExpr("CHK =='0'");
        	if( fRow !== -1 ) check = '1';
        	for( var idx = 0; idx < dsObj.rowcount; idx++ ) {
        		dsObj.setColumn(idx,'CHK',check);
        	}
        }



        /***********************************************************************************************
         * @function	: fnAddMenu
         * @description	: 권한에 메뉴 추가.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnAddMenu = function()
        {
        	//chk된 항목이 있는지 확인.
        	if(this.dsMenuList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("추가할 메뉴를 체크해주세요.");
        		return;
        	}


        	this.gfnCustomConfirm("추가하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("insertMenuList");
        	});
        }



        /***********************************************************************************************
         * @function	: fnDeleteMenu
         * @description	: 권한에서 메뉴 삭제.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteMenu = function()
        {
        	//chk된 항목이 있는지 확인.
        	if(this.dsAuthDetailList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("삭제할 메뉴를 체크해주세요.");
        		return;
        	}


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("deleteMenuList");
        	});
        }


        /***********************************************************************************************
         * @function: fnCompInit
         * @description: 컴포넌트 초기화 함수.
         * @param  N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCompInit = function()
        {
        	// 사용여부
        	this.fnAddCodeDef(this.dsUseYn_sc, '전체');
        	this.dsSearch.setColumn(0, "USE_YN", "Y");

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.edtAuthNm.addEventHandler("onkeydown",this.edtAuthNm_onkeydown,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.stTitleDetail.addEventHandler("onclick",this.stTitleDetail_onclick,this);
            this.grd_Sub2.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.stTitleDetail00.addEventHandler("onclick",this.stTitleDetail_onclick,this);
            this.grd_Sub1.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.btnAddMenu.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDeleteMenu.addEventHandler("onclick",this.btnOnClick,this);
            this.sta09.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsAuthList.addEventHandler("onrowposchanged",this.dsAuthList_onrowposchanged,this);
        };

        this.loadIncludeScript("SYST_MNG_0020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
