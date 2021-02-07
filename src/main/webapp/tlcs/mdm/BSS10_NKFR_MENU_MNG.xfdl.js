(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BSS10_NKFR_MENU_MNG");
            this.set_titletext("메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MSTR_MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_URL\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_MAIN\" size=\"256\" type=\"INT\"/><Column id=\"SORT_SUB\" size=\"256\" type=\"INT\"/><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_DESC\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_IMG_CLASS\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM_EN\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM_ZH\" size=\"256\" type=\"STRING\"/><Column id=\"SYS_DUTY_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SubList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MSTR_MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_URL\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_MAIN\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_SUB\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_DESC\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_IMG_CLASS\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM_EN\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM_ZH\" size=\"256\" type=\"STRING\"/><Column id=\"SYS_DUTY_DV\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"MSTR_MENU_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"MENU_TYPE\">test1</Col><Col id=\"MENU_NM\">test1</Col><Col id=\"USE_YN\">tester1@cj.cj.cj.cj.net</Col><Col id=\"MENU_SYS\">테스터이름</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">selectMainInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">ds_List=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=menuMgmService.selectMenuList</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row><Row><Col id=\"SVC_ID\">selectSubInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">ds_SubList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=menuMgmService.selectMenuList</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row><Row><Col id=\"SVC_ID\">saveMainInfo</Col><Col id=\"IN_DATASET_LIST\">ds_Save=ds_List:U</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">menuMgmService</Col><Col id=\"SERVICE_METHOD\">saveMainMenu</Col></Row><Row><Col id=\"SVC_ID\">saveSubInfo</Col><Col id=\"IN_DATASET_LIST\">ds_Save=ds_SubList:U</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">menuMgmService</Col><Col id=\"SERVICE_METHOD\">saveSubMenu</Col></Row><Row><Col id=\"SVC_ID\">deleteMainInfo</Col><Col id=\"IN_DATASET_LIST\">ds_Delete=ds_MainDelete:U</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">menuMgmService</Col><Col id=\"SERVICE_METHOD\">deleteMenu</Col></Row><Row><Col id=\"SVC_ID\">deleteSubInfo</Col><Col id=\"IN_DATASET_LIST\">ds_Delete=ds_SubDelete:U</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">menuMgmService</Col><Col id=\"SERVICE_METHOD\">deleteMenu</Col></Row><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">ds_UseYn=ds1 dsSysDutyDv=ds2 dsSysDutyDv_sc=ds3 dsSysDv=ds4</Col><Col id=\"QUERY_LIST\">q1=SM993 q2=SM999 q3=SM999 q4=SM1000</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_UseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MainDelete", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MSTR_MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_URL\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_MAIN\" size=\"256\" type=\"INT\"/><Column id=\"SORT_SUB\" size=\"256\" type=\"INT\"/><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_DESC\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_IMG_CLASS\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SubDelete", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MSTR_MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_URL\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_MAIN\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_SUB\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_DESC\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_IMG_CLASS\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CboBusiness", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysDutyDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysDutyDv_sc", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">운임구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">운임구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","10","76","91","31",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0386");
            obj.set_taborder("2");
            obj.set_text("메인메뉴");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","105","699",null,null,"0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("ds_List");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"37\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"97\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0377\" text=\"메뉴명\"/><Cell col=\"3\" accessibilitydescription=\"T2128\" text=\"메뉴명(EN)\"/><Cell col=\"4\" accessibilitydescription=\"T0378\" text=\"메뉴순번\"/><Cell col=\"5\" accessibilitydescription=\"T0514\" text=\"시스템업무구분\"/><Cell col=\"6\" accessibilitydescription=\"T0514\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"right\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:MENU_NM\" textAlign=\"left\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:MENU_NM_EN\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"number\" editinputtype=\"number\" edittype=\"normal\" text=\"bind:SORT_MAIN\" textAlign=\"right\"/><Cell col=\"5\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"dsSysDutyDv\" combotype=\"dropdown\" displaytype=\"expr:dataset.getRowType(currow)==2?'combocontrol':'combotext'\" edittype=\"expr:dataset.getRowType(currow)==2?'combo':'none'\" text=\"bind:SYS_DUTY_DV\" textAlign=\"left\"/><Cell col=\"6\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"ds_UseYn\" combotype=\"dropdown\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Sub","grd_Main:16","105",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("ds_SubList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"35\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0377\" text=\"메뉴명\"/><Cell col=\"3\" accessibilitydescription=\"T2128\" text=\"메뉴명(EN)\"/><Cell col=\"4\" accessibilitydescription=\"T0376\" text=\"메뉴URL\"/><Cell col=\"5\" accessibilitydescription=\"T0378\" text=\"메뉴순번\"/><Cell col=\"6\" accessibilitydescription=\"T0514\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"right\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" edittype=\"normal\" text=\"bind:MENU_NM\" textAlign=\"left\"/><Cell col=\"3\" edittype=\"normal\" text=\"bind:MENU_NM_EN\" textAlign=\"left\"/><Cell col=\"4\" edittype=\"normal\" text=\"bind:MENU_URL\" textAlign=\"left\"/><Cell col=\"5\" displaytype=\"number\" editinputtype=\"number\" edittype=\"normal\" text=\"bind:SORT_SUB\" textAlign=\"right\"/><Cell col=\"6\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"ds_UseYn\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:USE_YN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_S_Save",null,"79","68","23","176",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("11");
            obj.set_tabstop("false");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_S_Excel",null,"79","68","23","30",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_excel");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_tabstop("false");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("btn_S_Delete",null,"79","68","23","103",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_tabstop("false");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_S_New",null,"79","68","23","249",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0991");
            obj.set_fittocontents("none");
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0","35",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("14");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","728","78","330","31",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0588");
            obj.set_taborder("3");
            obj.set_text("서브메뉴");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","483","79","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_tabstop("false");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel","629","79","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_excel");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("5");
            obj.set_tabstop("false");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete","556","79","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btn_New","410","sta02:3","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0991");
            obj.set_fittocontents("none");
            obj.set_taborder("7");
            obj.set_tabstop("false");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Static("stc_cnt","10",null,"51","15",null,"-65",null,null,null,null,this);
            obj.getSetter("domainId").set("T0012");
            obj.set_taborder("12");
            obj.set_text("0건");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_s_cnt",null,null,"51","15","715","-65",null,null,null,null,this);
            obj.getSetter("domainId").set("T0012");
            obj.set_taborder("13");
            obj.set_text("0건");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_nm","531","44","130","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_useYn","304","44","130","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("ds_UseYn");
            obj.set_taborder("16");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_menuSys","87","44","130","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsSysDutyDv_sc");
            obj.set_taborder("17");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","458","44","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0387");
            obj.set_taborder("18");
            obj.set_text("메인메뉴명");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","242","44","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0514");
            obj.set_taborder("19");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","25","44","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0641");
            obj.set_taborder("20");
            obj.set_text("업무구분");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("21");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_nm","value","dsSearch","CD_TCD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BSS10_NKFR_MENU_MNG.xfdl", function() {
        /**
        *  메뉴등록 관리
        *  @MenuPath       	mdm > BSS10_NKFR_MENU_MNG
        *  @FileName 		BSS10_NKFR_MENU_MNG.xfdl
        *  @Creator 			seungmin
        *  @CreateDate 	2018.06.09
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.06.09     	seungmin 	           최초 생성
        *******************************************************************************
        */

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

        	this.gfnTransaction("commonCode");
        };

         /***********************************************************************************************
         * @function: fn_Search
         * @description: 메인 메뉴 조회.
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);

        	this.ds_List.clearData();
        	this.ds_SubList.clearData();

        	this.dsSearch.setColumn(0, "MENU_TYPE"	, "0");						//메인메뉴
        	this.dsSearch.setColumn(0, "MENU_NM"	, this.edt_nm.value);		//메인명
        	this.dsSearch.setColumn(0, "USE_YN"		, this.cbo_useYn.value);	//사용여부
        	//this.dsSearch.setColumn(0, "MENU_SYS"	, this.cbo_menuSys.value);	//업무구분(M : 운송가맹,  C : 화물정보센터)

        	this.gfnTransaction("selectMainInfo");
        };


         /***********************************************************************************************
         * @function: fn_Search_Sub
         * @description: 서브 메뉴 조회.
         * @param : obj - Button object
         * @param : e - Button event
         * @return N/A
        /***********************************************************************************************/
        this.fn_Search_Sub = function (nRow)
        {
        	//메인 메뉴가 신규인 경우 서브 메뉴 조회 생략
        	if(this.ds_List.getRowType(nRow) == 2) {
        		this.ds_SubList.clearData();
        		return true;
        	}

        	//서브메뉴 변경 내역 존재 여부 확인.
        	if(this.ds_List.getRowCount() > 0 && this.gfnDsIsUpdated(this.ds_SubList)) {
        		if(!this.gfnConfirm("M0303")) {
        			return false;
        		}
        	}

        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);

        	this.ds_SubList.clearData();

        	this.dsSearch.setColumn(0, "MSTR_MENU_CD"	, this.ds_List.getColumn(nRow, "MENU_CD"));				 //대분류코드에 해당하는 소분류 코드를 조회
        	this.dsSearch.setColumn(0, "MENU_TYPE"		, "1");		//메뉴레벨
        	//this.dsSearch.setColumn(0, "MENU_SYS"		, this.ds_List.getColumn(nRow, "MENU_SYS"));			//업무구분(M : 운송가맹,  C : 화물정보센터)

        	this.gfnTransaction("selectSubInfo");
        	return true;
        };

         /***********************************************************************************************
         * @function: btn_New_onclick
         * @description: 추가 버튼 클릭 이벤트
         * @param : obj - Button object
         * @param : e - Button event
         * @return N/A
        /***********************************************************************************************/
        this.btn_New_onclick = function(obj,e)
        {
        	var dsObj = (obj.name == "btn_New" ? this.ds_List : this.ds_SubList);

        	//대메뉴
        	if(obj.name == "btn_New") {
        		var v_MenuSys = this.cbo_menuSys.value;

        		//하나이상 추가안됨
        		if(this.fn_gridCheckInsert(dsObj)) {

        			var addRow = dsObj.addRow();	//그리드 ROW 추가.

        			//default 설정 - 사용여부, 메뉴레벨
        			dsObj.setColumn(addRow, "MENU_SYS", "M");
        			dsObj.setColumn(addRow, "USE_YN", "Y");
        			dsObj.setColumn(addRow, "MENU_TYPE", "0");
        		}
        	}
        	//소메뉴
        	else {
        		var v_MenuSys = this.ds_List.getColumn(this.ds_List.rowposition, "MENU_SYS");
        		var v_MasterMenuXCd = this.ds_List.getColumn(this.ds_List.rowposition, "MENU_CD");
        		var v_SortMain = this.ds_List.getColumn(this.ds_List.rowposition, "SORT_MAIN");

        		//필수 값 확인.
        		if(this.ds_List.getRowCount() <= 0) {
        			//this.gfnAlert("M0170");
        			this.gfnAlert("M0170");
        			return;
        		}

        		/*if(this.gfnIsNull(v_MenuSys)) {
        			//this.gfnAlert("M0355");
        			this.gfnAlert("M0355");
        			this.grd_Main.selectRow(this.ds_List.rowposition);
        			return;
        		}*/

        		if(this.gfnIsNull(v_MasterMenuXCd)) {
        			//this.gfnAlert("M0171");
        			this.gfnAlert("메인메뉴먼저 저장하세요.");
        			this.grd_Main.selectRow(this.ds_List.rowposition);
        			return;
        		}

        		var addRow = dsObj.addRow();	//그리드 ROW 추가.

        		//default 설정 - 사용여부, 시스템구분, 메뉴레벨, 부모메뉴, 부모순서, 시스템업무구분
        		//dsObj.setColumn(addRow, "MENU_SYS"			, v_MenuSys);
        		dsObj.setColumn(addRow, "MSTR_MENU_CD"		, v_MasterMenuXCd);
        		dsObj.setColumn(addRow, "MENU_TYPE"			, "1");
        		dsObj.setColumn(addRow, "SORT_MAIN"			, v_SortMain);
        		dsObj.setColumn(addRow, "USE_YN"			, "Y");
        		dsObj.setColumn(addRow, "SYS_DUTY_DV"		, v_MasterMenuXCd.substr(0,4));

        	}
        };

         /***********************************************************************************************
         * @function: fn_gridCheckInsert
         * @description: 그리드에 추가 된 row가 한건 이상인지 체크.
         * @param : objGrd - Grid object
         * @return N/A
        /***********************************************************************************************/
        this.fn_gridCheckInsert = function (dsObj)
        {
        	if(dsObj.getRowCount() >= 0) {
        		var checkCnt = 0;
        		for(var i=0; i<dsObj.getRowCount(); i++) {
        			if(dsObj.getRowType(i) == 2) {
        				checkCnt++;
        			}
        		}

        		if(checkCnt > 1) return false;
        	}

        	return true;
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
        		//this.gfnAlert(errorMsg);
        		this.alert(errorMsg);
        	}else{
        		if(svcID == "selectMainInfo") {
        			this.stc_cnt.set_text(this.ds_List.getRowCount() + " 건");
        		} else if(svcID == "selectSubInfo") {
        			this.stc_s_cnt.set_text(this.ds_SubList.getRowCount() + " 건");
        		} else if(svcID == "saveMainInfo" || svcID == "saveSubInfo") {
        			//this.gfnAlert("M0418");
        			this.gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		} else if(svcID == "deleteMainInfo" || svcID == "deleteSubInfo") {
        			//this.gfnAlert("M0263");
        			this.gfnAlert("M0263");
        			this.fnSearch();

        		} else if(svcID == "commonCode") {

        			this.fnAddCodeDef(this.dsSysDutyDv_sc, '전체');

        			this.cbo_useYn.set_index(0);
        			this.cbo_menuSys.set_index(0);


        			this.fnAddCodeDef(this.dsSysDv, '');


        		}


         	}
        };

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


        /***********************************************************************************************
         * @function: grd_Main_onselectchanged
         * @description: 그리드 선택 영역이 변경 된 경우 이벤트
         * @param : obj - Grid object
         * @param : e - Grid event
         * @return N/A
        /***********************************************************************************************/
        this.grd_Main_onselectchanged = function(obj,e)
        {
        	obj.set_enableevent(false);
        	//서브 메뉴 조회.
        	if(!this.fn_Search_Sub(e.row)) {
        		obj.selectRow(e.oldrow);
        	}

        	obj.set_enableevent(true);
        };


        /***********************************************************************************************
         * @function: fn_Save
         * @description: 대메뉴 입력 된 정보 저장 처리 함수.
         * @param : obj - Button object
         * @param : e - Button event
         * @return N/A
        /***********************************************************************************************/
        this.fn_Save = function(obj,e)
        {
        	//변경사항 있는지 확인.
        	if(this.gfnDsIsUpdated(this.ds_List) == false) {
        		//this.gfnAlert("M0418");
        		this.gfnAlert("저장할 내용이 없습니다.");
        		return;
        	}

        	//chk된 항목이 있는지 확인.
        	if(this.ds_List.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("저장할 메인메뉴를 체크해주세요.");
        		return;
        	}

        	//유효성 검사.
        	if(!this.fn_validation("M")) return;


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("saveMainInfo");
        	});

        };


        /***********************************************************************************************
         * @function: fn_SubSave
         * @description: 소메뉴 입력 된 정보 저장 처리 함수.
         * @param : obj - Button object
         * @param : e - Button event
         * @return N/A
        /***********************************************************************************************/
        this.fn_SubSave = function(obj,e)
        {
        	//변경사항 있는지 확인.
        	if(this.gfnDsIsUpdated(this.ds_SubList) == false) {
        		//this.gfnAlert("M0418");
        		this.gfnAlert("저장할 내용이 없습니다.");
        		return;
        	}

        	//chk된 항목이 있는지 확인.
        	if(this.ds_SubList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("저장할 서브메뉴를 체크해주세요.");
        		return;
        	}

        	//유효성 검사.
        	if(!this.fn_validation("S")) return;


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("saveSubInfo");
        	});


        };


        /***********************************************************************************************
         * @function: fn_validation
         * @description: data 적합성 검사 함수.
         * @param : strType - 적합성 검사 타입
         * @return : true - 적합성 검사 통과, false - 적합성 검사 부적절
        /***********************************************************************************************/
        this.fn_validation = function (strType)
        {
        	if(strType == "M") {
        		//data가 없는 경우
        		if(this.ds_List.getRowCount() == 0) {
        			//this.gfnAlert("M0488");
        			//this.gfnAlert("M0488");
        			return false;
        		}

        		//필수값 확인.
        		var v_msg = "";
        		for(var i=0; i<this.ds_List.getRowCount(); i++) {
        			if(this.gfnIsNull(this.ds_List.getColumn(i, "MENU_NM"))) {
        				v_msg = "메뉴명을 입력하세요.";
        			} else if(this.gfnIsNull(this.ds_List.getColumn(i, "SORT_MAIN"))){
        				v_msg = "메뉴순번을 입력해주세요.";
        			}

        			if(!this.gfnIsNull(v_msg)) {
        				//this.gfnAlert(v_msg);
        				this.alert(v_msg);
        				this.ds_List.set_rowposition(i);
        				return false;
        			}
        		}
        	} else {
        		//data가 없는 경우
        		if(this.ds_SubList.getRowCount() == 0) {
        			//this.gfnAlert("M0488");
        			//this.gfnAlert("M0488");
        			return false;
        		}

        		//필수값 확인.
        		var v_msg = "";
        		for(var i=0; i<this.ds_SubList.getRowCount(); i++) {
        			if(this.gfnIsNull(this.ds_SubList.getColumn(i, "MENU_NM"))) {
        				v_msg = "메뉴명을 입력하세요.";
        			} else if(this.gfnIsNull(this.ds_SubList.getColumn(i, "SORT_SUB"))){
        				v_msg = "메뉴순번을 입력해주세요.";
        			} else if(this.gfnIsNull(this.ds_SubList.getColumn(i, "MENU_URL"))){
        				v_msg = "메뉴 URL을 입력해주세요.";
        			}

        			if(!this.gfnIsNull(v_msg)) {
        				//this.gfnAlert(v_msg);
        				this.alert(v_msg);
        				this.ds_SubList.set_rowposition(i);
        				return false;
        			}
        		}
        	}

        	return true;
        };

        /***********************************************************************************************
         * @function: fn_MainDelete
         * @description: 대메뉴 입력 된 정보 삭제 처리 함수.
         * @param : obj - Button object
         * @param : e - Button event
         * @return N/A
        /***********************************************************************************************/
        this.fn_MainDelete = function(obj,e)
        {
        	//chk된 항목이 있는지 확인.
        	if(this.ds_List.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0269");
        		this.gfnAlert("삭제할 메인메뉴를 체크해주세요.");
        		return;
        	}

        	this.ds_MainDelete.clearData();


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		for(var i=this.ds_List.getRowCount() -1; i>=0; i--) {
        			if(this.ds_List.getColumn(i, "CHK") == '1') {
        				if(this.ds_List.getRowType(i) == 2) {
        						this.ds_List.deleteRow(i);

        				} else {
        					var addrow = this.ds_MainDelete.addRow();
        					this.ds_MainDelete.copyRow(addrow, this.ds_List, i);
        				}
        			}
        		}

        		if(this.ds_MainDelete.getRowCount() > 0) {
        			this.gfnTransaction("deleteMainInfo");
        		}
        	});

        };


        /***********************************************************************************************
         * @function: fn_SubDelete
         * @description: 소메뉴 입력 된 정보 삭제 처리 함수.
         * @param : obj - Button object
         * @param : e - Button event
         * @return N/A
        /***********************************************************************************************/
        this.fn_SubDelete = function(obj,e)
        {
        	//chk된 항목이 있는지 확인.
        	if(this.ds_SubList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0269");
        		this.gfnAlert("삭제할 메인메뉴를 체크해주세요.");
        		return;
        	}

        	this.ds_SubDelete.clearData();


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		for(var i=this.ds_SubList.getRowCount() -1; i>=0; i--) {
        			if(this.ds_SubList.getColumn(i, "CHK") == '1') {
        				if(this.ds_SubList.getRowType(i) == 2) {
        						this.ds_SubList.deleteRow(i);

        				} else {
        					var addrow = this.ds_SubDelete.addRow();
        					this.ds_SubDelete.copyRow(addrow, this.ds_SubList, i);
        				}
        			}
        		}

        		if(this.ds_SubDelete.getRowCount() > 0) {
        			this.gfnTransaction("deleteSubInfo");
        		}
        	});

        };

        /***********************************************************************************************
         * @function: fn_Grid_onheadclick
         * @description: 그리드 헤더 클릭 이벤트 처리 함수.
         * @param : obj - Grid object
         * @param : e - Grid event
         * @return N/A
        /***********************************************************************************************/
        this.fn_Grid_onheadclick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
        };

        /***********************************************************************************************
         * @function: fn_ExcelDown
         * @description: 그리드 표시 된 정보를 엑셀로 download
         * @param : obj - Button object
         * @param : e - Button event
         * @return N/A
        /***********************************************************************************************/
        this.fn_ExcelDown = function(obj,e)
        {
        	var objGrd = (obj.name == "btn_Excel"? this.grd_Main : this.grd_Sub);
        	var objDs = (obj.name == "btn_Excel"? this.ds_List : this.ds_SubList);

        	if(objDs.getRowCount() > 0) {
        		this.gfnExcelExport(objGrd);
        	} else {
        		//this.gfnAlert("M0113");
        		this.gfnAlert("M0113");
        	}
        };


        this.grd_Main_oncellclick = function(obj,e)
        {
        	var cellType = obj.getCellProperty("body", e.cell, "displaytype");
        	if(cellType == "combocontrol") {
        		obj.showEditor(true);
        		obj.dropdownCombo();
        	}
         };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_Main.addEventHandler("oncellclick",this.grd_Main_oncellclick,this);
            this.grd_Main.addEventHandler("onheadclick",this.fn_Grid_onheadclick,this);
            this.grd_Main.addEventHandler("onselectchanged",this.grd_Main_onselectchanged,this);
            this.grd_Sub.addEventHandler("onheadclick",this.fn_Grid_onheadclick,this);
            this.btn_S_Save.addEventHandler("onclick",this.fn_SubSave,this);
            this.btn_S_Excel.addEventHandler("onclick",this.fn_ExcelDown,this);
            this.btn_S_Delete.addEventHandler("onclick",this.fn_SubDelete,this);
            this.btn_S_New.addEventHandler("onclick",this.btn_New_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.fn_Save,this);
            this.btn_Excel.addEventHandler("onclick",this.fn_ExcelDown,this);
            this.btn_Delete.addEventHandler("onclick",this.fn_MainDelete,this);
            this.btn_New.addEventHandler("onclick",this.btn_New_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("BSS10_NKFR_MENU_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
