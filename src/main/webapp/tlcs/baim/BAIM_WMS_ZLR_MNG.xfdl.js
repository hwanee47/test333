(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_WMS_ZLR_MNG");
            this.set_titletext("존/로케이션/랙관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsWarehType=ds1</Col><Col id=\"QUERY_LIST\">q1=MS101</Col></Row><Row><Col id=\"SVC_ID\">saveZLRList</Col><Col id=\"SERVICE_BEANNAME\">baimZLRMgmtService</Col><Col id=\"SERVICE_METHOD\">saveZLRList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsZnList=dsZnList:U dsLocList=dsLocList:U dsRackList=dsRackList:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getZnList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsZnList=dsZnList</Col><Col id=\"SERVICE_BEANNAME\">baimZLRMgmtService</Col><Col id=\"SERVICE_METHOD\">getZnList</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">getLocList</Col><Col id=\"IN_DATASET_LIST\">dsSubSearch=dsSubSearch1</Col><Col id=\"OUT_DATASET_LIST\">dsLocList=dsLocList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimZLRMgmtService</Col><Col id=\"SERVICE_METHOD\">getLocList</Col></Row><Row><Col id=\"SVC_ID\">getRackList</Col><Col id=\"IN_DATASET_LIST\">dsSubSearch=dsSubSearch2</Col><Col id=\"OUT_DATASET_LIST\">dsRackList=dsRackList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimZLRMgmtService</Col><Col id=\"SERVICE_METHOD\">getRackList</Col></Row><Row><Col id=\"SVC_ID\">deleteZnList</Col><Col id=\"IN_DATASET_LIST\">dsZnList=dsZnList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimZLRMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteZnList</Col></Row><Row><Col id=\"SVC_ID\">deleteLocList</Col><Col id=\"IN_DATASET_LIST\">dsLocList=dsLocList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimZLRMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteLocList</Col></Row><Row><Col id=\"SVC_ID\">deleteRackList</Col><Col id=\"IN_DATASET_LIST\">dsRackList=dsRackList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimZLRMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteRackList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"WAREH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ZN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZnList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn_sc", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLocList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRackList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch2", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RACK_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdZn","0","104",null,null,"1040","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsZnList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"79\"/><Column size=\"111\"/><Column size=\"85\"/><Column size=\"126\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"창고코드\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"창고명\"/><Cell col=\"4\" accessibilitydescription=\"T0199\" text=\"존코드\"/><Cell col=\"5\" accessibilitydescription=\"T0199\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_CD\" textAlign=\"left\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandshow=\"expr:dataset.getRowType(currow)==2?'show':'hide'\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_NM\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:ZN_CD\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:REMARK\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddZone",null,"stSearch:3","68","23","1116",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("2");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteZone",null,"78","68","23","1043",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grdLoc",null,"104","492",null,"539","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsLocList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"99\"/><Column size=\"97\"/><Column size=\"126\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"존코드\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"로케이션코드\"/><Cell col=\"4\" accessibilitydescription=\"T0199\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ZN_CD\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:LOC_CD\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:REMARK\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdRack",null,"104","501",null,"29","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRackList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"97\"/><Column size=\"99\"/><Column size=\"126\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"로케이션코드\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"랙코드\"/><Cell col=\"4\" accessibilitydescription=\"T0199\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:LOC_CD\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:RACK_CD\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:REMARK\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteLoc",null,"78","68","23","542",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("6");
            obj.set_tabstop("false");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddLoc",null,"78","68","23","615",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("7");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteRack",null,"78","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("8");
            obj.set_tabstop("false");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRack",null,"78","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Edit("edtZnCd_sc","336","43","134","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp01_00","285","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("11");
            obj.set_text("존코드");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","74","91","31",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0386");
            obj.set_taborder("12");
            obj.set_text("존목록");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00",null,"74","91","31","925",null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0386");
            obj.set_taborder("13");
            obj.set_text("로케이션목록");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00",null,"74","91","31","425",null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0386");
            obj.set_taborder("14");
            obj.set_text("랙목록");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("15");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Combo("cboWareh","88","44","161","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("WAREH_CD");
            obj.set_datacolumn("WAREH_NM");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("gdsWarehAuthList");
            obj.set_taborder("16");
            obj.set_type("dropdown");
            obj.set_visible("true");
            obj.set_value("ko");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","25","44","82","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("17");
            obj.set_text("창고코드");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","edtZnCd_sc","value","dsSearch","ZN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","cboWareh","value","dsSearch","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_WMS_ZLR_MNG.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_WMS_ZLR_MNG.xfdl", function() {
        /**
        *  창고관리
        *  @MenuPath
        *  @FileName 		BAIM_WMS_WAREH_MNG.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.03.04
        *  @Desction        창고관리
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.04		Kim Jin Hwan			최초 생성
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

        	// 창고코드
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


        		// 존추가
        		case "btnAddZone":
        			this.fnAddZone();
        		break;

        		// 존삭제
        		case "btnDeleteZone":
        			this.fnDeleteZone();
        		break;


        		// 로케이션추가
        		case "btnAddLoc":
        			this.fnAddLoc();
        		break;

        		// 로케이션삭제
        		case "btnDeleteLoc":
        			this.fnDeleteLoc();
        		break;



        		// 랙추가
        		case "btnAddRack":
        			this.fnAddRack();
        		break;

        		// 랙삭제
        		case "btnDeleteRack":
        			this.fnDeleteRack();
        		break;




        		// 초기화
        		case "btnReset" :
        			this.fnInit();
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

        	// 존목록 조회
        	this.dsZnList.clearData();
        	this.gfnTransaction("getZnList");

        };


        /***********************************************************************************************
         * @function	: fnSearchLoc
         * @description	: 로케이션조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchLoc = function()
        {
        	var currowRowType = this.dsZnList.getRowType(this.dsZnList.rowposition);

        	// 신규추가인경우
        	if(currowRowType == Dataset.ROWTYPE_INSERT){
        		this.dsLocList.clearData();
        		this.dsRackList.clearData();
        		return;
        	}

        	var warehCdValue = this.dsZnList.getColumn(this.dsZnList.rowposition, "WAREH_CD");
        	var znCdValue = this.dsZnList.getColumn(this.dsZnList.rowposition, "ZN_CD");


        	this.dsSubSearch1.setColumn(0, "WAREH_CD", warehCdValue);
        	this.dsSubSearch1.setColumn(0, "ZN_CD", znCdValue);

        	// 로케이션목록 조회
        	this.dsLocList.clearData();
        	this.gfnTransaction("getLocList");
        }



        /***********************************************************************************************
         * @function	: fnSearchRack
         * @description	: 랙 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchRack = function()
        {
        	var currowRowType = this.dsLocList.getRowType(this.dsLocList.rowposition);

        	// 신규추가인경우
        	if(currowRowType == Dataset.ROWTYPE_INSERT){
        		this.dsRackList.clearData();
        		return;
        	}

        	var warehCdValue = this.dsLocList.getColumn(this.dsLocList.rowposition, "WAREH_CD");
        	var znCdValue = this.dsLocList.getColumn(this.dsLocList.rowposition, "ZN_CD");
        	var locCdValue = this.dsLocList.getColumn(this.dsLocList.rowposition, "LOC_CD");

        	this.dsSubSearch2.setColumn(0, "WAREH_CD", warehCdValue);
        	this.dsSubSearch2.setColumn(0, "ZN_CD", znCdValue);
        	this.dsSubSearch2.setColumn(0, "LOC_CD", locCdValue);


        	// 랙목록 조회
        	this.dsRackList.clearData();
        	this.gfnTransaction("getRackList");
        }





        /***********************************************************************************************
         * @function	: fnAddZone
         * @description	: 존추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddZone = function() {

        	//하나이상 추가안됨
        	var lastRowType = this.dsZnList.getRowType(this.dsZnList.getRowCount()-1);

        	if(lastRowType != Dataset.ROWTYPE_INSERT){
        		var nRow = this.dsZnList.addRow();

        		this.dsZnList.setColumn(nRow, "CHK", "1");
        		this.dsZnList.setColumn(nRow, "USE_YN", "Y");
        	}

        };



        /***********************************************************************************************
         * @function	: fnDeleteZone
         * @description	: 삭제처리.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteZone = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsZnList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("[존목록]의 삭제할 행을 체크해주세요.");
        		return;
        	}

        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;


        		this.gfnTransaction("deleteZnList");
        	});



        };



        /***********************************************************************************************
         * @function	: fnAddLoc
         * @description	: 로케이션추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddLoc = function() {

        	// 존이 선택안된경우 에러처리.
        	if(this.dsZnList.getRowCount() == 0){
        		this.gfnAlert("존목록의 행을 선택해주세요.");
        		return;
        	}


        	//하나이상 추가안됨
        	var lastRowType = this.dsLocList.getRowType(this.dsLocList.getRowCount()-1);

        	if(lastRowType != Dataset.ROWTYPE_INSERT){
        		var nRow = this.dsLocList.addRow();

        		this.dsLocList.setColumn(nRow, "CHK", "1");
        		this.dsLocList.setColumn(nRow, "WAREH_CD", this.dsZnList.getColumn(this.dsZnList.rowposition, "WAREH_CD"));
        		this.dsLocList.setColumn(nRow, "ZN_CD", this.dsZnList.getColumn(this.dsZnList.rowposition, "ZN_CD"));
        		this.dsLocList.setColumn(nRow, "USE_YN", "Y");
        	}

        };



        /***********************************************************************************************
         * @function	: fnDeleteLoc
         * @description	: 삭제처리.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteLoc = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsLocList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("[로케이션목록]의 삭제할 행을 체크해주세요.");
        		return;
        	}

        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;


        		this.gfnTransaction("deleteLocList");
        	});


        };


        /***********************************************************************************************
         * @function	: fnAddRack
         * @description	: 랙추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddRack = function() {

        	// 로케이션이 선택안된경우 에러처리.
        	if(this.dsLocList.getRowCount() == 0){
        		this.gfnAlert("로케이션목록의 행을 선택해주세요.");
        		return;
        	}


        	var nRow = this.dsRackList.addRow();

        	this.dsRackList.setColumn(nRow, "CHK", "1");
        	this.dsRackList.setColumn(nRow, "WAREH_CD", this.dsLocList.getColumn(this.dsLocList.rowposition, "WAREH_CD"));
        	this.dsRackList.setColumn(nRow, "ZN_CD", this.dsLocList.getColumn(this.dsLocList.rowposition, "ZN_CD"));
        	this.dsRackList.setColumn(nRow, "LOC_CD", this.dsLocList.getColumn(this.dsLocList.rowposition, "LOC_CD"));
        	this.dsRackList.setColumn(nRow, "USE_YN", "Y");


        };


        /***********************************************************************************************
         * @function	: fnDeleteRack
         * @description	: 삭제처리.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteRack = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsRackList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("[랙목록]의 삭제할 행을 체크해주세요.");
        		return;
        	}

        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;


        		this.gfnTransaction("deleteRackList");
        	});

        };


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsZnList.findRow("CHK", "1") < 0 &&
        		this.dsLocList.findRow("CHK", "1") < 0 &&
        		this.dsRackList.findRow("CHK", "1") < 0
        	) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("저장할 행을 체크해주세요.");
        		return;
        	}


        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	// 존목록
        	var dsRowCount = this.dsZnList.getRowCount();

        	for(var i=0; i<dsRowCount; i++){

        		var chkValue = this.dsZnList.getColumn(i, "CHK");

        		var nRowType = this.dsZnList.getRowType(i);

        		// 수정상태이면서 체크되지않은 행은 스킵
        		if(chkValue != "1" && nRowType != Dataset.ROWTYPE_UPDATE) continue;

        		// 신규 또는 수정 행만 저장 처리
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}

        		var warehCdValue = this.dsZnList.getColumn(i, "WAREH_CD");
        		var zoneCdValue = this.dsZnList.getColumn(i, "ZN_CD");


        		// 창고코드
        		if(this.gfnIsNull(warehCdValue)){
        			this.gfnAlert("[존목록] "+(i+1)+"행의 창고코드를 입력해주세요.");
        			this.dsZnList.set_rowposition(i);
        			return;
        		}

        		// 존코드
        		if(this.gfnIsNull(zoneCdValue)){
        			this.gfnAlert("[존목록] "+(i+1)+"행의 존코드를 입력해주세요.");
        			this.dsZnList.set_rowposition(i);
        			this.grdZn.setCellPos(this.grdZn.getBindCellIndex("BODY", "ZN_CD"), i);
        			this.grdZn.setFocus();
        			return;
        		}

        	}


        	// 로케이션목록
        	dsRowCount = this.dsLocList.getRowCount();

        	for(var i=0; i<dsRowCount; i++){

        		var chkValue = this.dsLocList.getColumn(i, "CHK");

        		var nRowType = this.dsLocList.getRowType(i);

        		// 수정상태이면서 체크되지않은 행은 스킵
        		if(chkValue != "1" && nRowType != Dataset.ROWTYPE_UPDATE) continue;

        		// 신규 또는 수정 행만 저장 처리
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}

        		var warehCdValue = this.dsLocList.getColumn(i, "WAREH_CD");
        		var zoneCdValue = this.dsLocList.getColumn(i, "ZN_CD");
        		var locCdValue = this.dsLocList.getColumn(i, "LOC_CD");


        		// 창고코드
        		if(this.gfnIsNull(warehCdValue)){
        			this.gfnAlert("[로케이션목록] "+(i+1)+"행의 창고코드를 입력해주세요.");
        			this.dsLocList.set_rowposition(i);
        			return;
        		}

        		// 존코드
        		if(this.gfnIsNull(zoneCdValue)){
        			this.gfnAlert("[로케이션목록] "+(i+1)+"행의 존코드를 입력해주세요.");
        			this.dsLocList.set_rowposition(i);
        			return;
        		}

        		// 로케이션코드
        		if(this.gfnIsNull(locCdValue)){
        			this.gfnAlert("[로케이션목록] "+(i+1)+"행의 로케이션코드를 입력해주세요.");
        			this.dsLocList.set_rowposition(i);
        			this.grdLoc.setCellPos(this.grdLoc.getBindCellIndex("BODY", "LOC_CD"), i);
        			this.grdLoc.setFocus();
        			return;
        		}

        	}


        	// 랙목록
        	dsRowCount = this.dsRackList.getRowCount();

        	for(var i=0; i<dsRowCount; i++){

        		var chkValue = this.dsRackList.getColumn(i, "CHK");

        		var nRowType = this.dsRackList.getRowType(i);

        		// 수정상태이면서 체크되지않은 행은 스킵
        		if(chkValue != "1" && nRowType != Dataset.ROWTYPE_UPDATE) continue;

        		// 신규 또는 수정 행만 저장 처리
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}

        		var warehCdValue = this.dsRackList.getColumn(i, "WAREH_CD");
        		var zoneCdValue = this.dsRackList.getColumn(i, "ZN_CD");
        		var locCdValue = this.dsRackList.getColumn(i, "LOC_CD");
        		var rackCdValue = this.dsRackList.getColumn(i, "RACK_CD");


        		// 창고코드
        		if(this.gfnIsNull(warehCdValue)){
        			this.gfnAlert("[랙목록] "+(i+1)+"행의 창고코드를 입력해주세요.");
        			this.dsRackList.set_rowposition(i);
        			return;
        		}

        		// 존코드
        		if(this.gfnIsNull(zoneCdValue)){
        			this.gfnAlert("[랙목록] "+(i+1)+"행의 존코드를 입력해주세요.");
        			this.dsRackList.set_rowposition(i);
        			return;
        		}

        		// 로케이션코드
        		if(this.gfnIsNull(locCdValue)){
        			this.gfnAlert("[랙목록] "+(i+1)+"행의 로케이션코드를 입력해주세요.");
        			this.dsRackList.set_rowposition(i);
        			return;
        		}

        		// 랙코드
        		if(this.gfnIsNull(rackCdValue)){
        			this.gfnAlert("[랙목록] "+(i+1)+"행의 랙코드를 입력해주세요.");
        			this.dsRackList.set_rowposition(i);
        			this.grdRack.setCellPos(this.grdRack.getBindCellIndex("BODY", "RACK_CD"), i);
        			this.grdRack.setFocus();
        			return;
        		}

        	}

        	/****************************************************************************************************/


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveZLRList");
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
        	trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

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


        		// 저장
        		case "saveZLRList" :
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;


        		// 로케이션 목록조회
        		case "getLocList":

        		break;


        		// 삭제
        		case "deleteZnList" :
        			this.fnSearch();
        		break;

        		// 삭제
        		case "deleteLocList" :
        			this.fnSearchLoc();
        		break;

        		// 삭제
        		case "deleteRackList" :
        			this.fnSearchRack();
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
        	//trace("[fnPopupCallback()] sPopupId["+sPopupId+"] rtnMsg["+JSON.stringify(rtnObj)+"]");

        	switch(sPopupId) {

        		// 그리드에서 창고팝업실행
        		case "pop1" :
        			this.dsZnList.setColumn(this.dsZnList.rowposition, "WAREH_CD", dsObj.getColumn(0,"WAREH_CD"));
        			this.dsZnList.setColumn(this.dsZnList.rowposition, "WAREH_NM", dsObj.getColumn(0,"WAREH_NM"));

        		break;

        		// 조회조건에서 창고팝업실행
        		case "pop2" :

        			this.edtWarehCd_sc.set_value(dsObj.getColumn(0,"WAREH_CD"));
        			this.edtWarehNm_sc.set_value(dsObj.getColumn(0,"WAREH_NM"));
        		break;

        		default :
        		break;
        	}
        };



        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/

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
        	this.cboUseYn_sc.set_index(0);

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



        /***********************************************************************************************
         * @function		: fnPopOpen
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
        		case "btnOpenPopSearchWareh" :	this.fnOpenPopWareh("btnOpenPopSearchWareh"); break;

        		default 		: 	break;
        	}
        };



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        // 그리드 헤더 클릭
        this.grdOnHeadClick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
        };

        this.grd_Main_onexpandup = function(obj,e)
        {
        	var bindText = obj.getCellProperty("body", e.cell, "text");

        	// cell 컬럼명 추출.
        	var column = this.gfnNvl(bindText, "").replace("bind:", "");

        	switch(column)
        	{
        		// 창고코드
        		case "WAREH_CD" :
        			this.fnOpenPopWareh('btnOpenPopGridSearchWareh');
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function		: fnOpenPopWareh
         * @description		: 창고 조회 팝업 호출
         * @param 			: btnName
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopWareh = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = "";	//팝업ID
        	var pWarehCdValue = "";
        	var pWarehNmValue = "";

        	if(btnName == "btnOpenPopGridSearchWareh"){
        		popupId = "pop1";
        	}
        	else{
        		popupId = "pop2";
        		pWarehCdValue = this.edtWarehCd_sc.value;
        		pWarehNmValue = this.edtWarehNm_sc.value;
        	}

        	// 팝업 호출
        	var oArg = {
        				  pWarehCd      : pWarehCdValue
        				, pWarehNm      : pWarehNmValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P010.xfdl", oArg, sPopupCallBack, oOption);
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
        			case	'edtWarehCd_sc' : this.btnOpenPopSearchWareh.click();	break;
        			case	'edtWarehNm_sc'	: this.btnOpenPopSearchWareh.click();	break;
        			default		: 	break;
        		}
        	}
        	else{
        		switch( objName ) {

        			default		: 	break;
        		}
        	}
        };


        // 존 데이터셋
        this.dsZnList_oncolumnchanged = function(obj,e)
        {
        	// 창고코드, 존코드
        	if(e.columnid == "WAREH_CD" || e.columnid == "ZN_CD"){

        		// 존목록에서 항목값 변경시 로케이션 목록중 신규입력인경우 항목값 변경.
        		var dsRowCount = this.dsLocList.getRowCount();
        		for(var i=0; i<dsRowCount; i++){

        			var nRowType = this.dsLocList.getRowType(i);

        			if( nRowType != Dataset.ROWTYPE_INSERT ) continue;


        			this.dsLocList.setColumn(i, e.columnid, e.newvalue);

        		}

        	}

        };


        // 로케이션 데이터셋
        this.dsLocList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "WAREH_CD" || e.columnid == "ZN_CD" || e.columnid == "LOC_CD"){

        		// 로케이션목록에서 항목값 변경시 랙목록중 신규입력인경우 항목값 변경.
        		var dsRowCount = this.dsRackList.getRowCount();
        		for(var i=0; i<dsRowCount; i++){

        			var nRowType = this.dsRackList.getRowType(i);

        			if( nRowType != Dataset.ROWTYPE_INSERT ) continue;


        			this.dsRackList.setColumn(i, e.columnid, e.newvalue);

        		}

        	}
        };


        // 존데이터셋 행변경
        this.dsZnList_onrowposchanged = function(obj,e)
        {
        	this.fnSearchLoc();
        };

        // 로케이션데이터셋 행변경
        this.dsLocList_onrowposchanged = function(obj,e)
        {
        	this.fnSearchRack();
        };

        // 조회조건데이터셋
        this.dsSearch_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "USE_YN"){

        		this.dsSubSearch.setColumn(0, "USE_YN", e.newvalue);
        		this.dsSubSearch1.setColumn(0, "USE_YN", e.newvalue);
        		this.dsSubSearch2.setColumn(0, "USE_YN", e.newvalue);

        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.grdZn.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grdZn.addEventHandler("onexpandup",this.grd_Main_onexpandup,this);
            this.btnAddZone.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDeleteZone.addEventHandler("onclick",this.btnOnClick,this);
            this.grdLoc.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grdRack.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.btnDeleteLoc.addEventHandler("onclick",this.btnOnClick,this);
            this.btnAddLoc.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDeleteRack.addEventHandler("onclick",this.btnOnClick,this);
            this.btnAddRack.addEventHandler("onclick",this.btnOnClick,this);
            this.edtZnCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.staExeCorp00_00.addEventHandler("onclick",this.staExeCorp_onclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsZnList.addEventHandler("oncolumnchanged",this.dsZnList_oncolumnchanged,this);
            this.dsZnList.addEventHandler("onrowposchanged",this.dsZnList_onrowposchanged,this);
            this.dsLocList.addEventHandler("oncolumnchanged",this.dsLocList_oncolumnchanged,this);
            this.dsLocList.addEventHandler("onrowposchanged",this.dsLocList_onrowposchanged,this);
        };

        this.loadIncludeScript("BAIM_WMS_ZLR_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
