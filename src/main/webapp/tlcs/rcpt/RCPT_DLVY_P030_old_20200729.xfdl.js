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
            this.set_name("RCPT_DLVY_P010");
            this.set_titletext("고객레이아웃(창고용)");
            if (Form == this.constructor)
            {
                this._setFormPosition(960,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WAREIO_DV\" type=\"STRING\" size=\"256\"/><Column id=\"RSVT_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WAREIO_DV\"/><Col id=\"XLS_FRM_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsRsvtDv=ds1 dsExcelAlphabet=ds2</Col><Col id=\"QUERY_LIST\">q1=RV002 q2=SM994</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getCustLayoutList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsMaster=dsMaster</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">getCustLayoutList</Col></Row><Row><Col id=\"SVC_ID\">getCustLayout</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsDetail2=dsDetail2</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">getCustLayout</Col></Row><Row><Col id=\"SVC_ID\">saveCustLayout</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsSave</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">saveCustLayout</Col></Row><Row><Col id=\"SVC_ID\">deleteCustLayout</Col><Col id=\"IN_DATASET_LIST\">dsDelete=dsDelete</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">deleteCustLayout</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRsvtDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREIO_DV\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM_ORG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStdLayoutColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustLayoutColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"NO\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail2", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREIO_DV\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_HD_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelAlphabet", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStdLayoutSortColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ\" type=\"INT\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREIO_DV\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_HD_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM_NEW\" type=\"STRING\" size=\"256\"/><Column id=\"MASTER_ROW_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelete", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREIO_DV\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_HD_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_FRM_NM_NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsXls", this);
            obj._setContents("<ColumnInfo><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","0","34",null,"40","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","15","0","195","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("5");
            obj.set_text("고객레이아웃");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","658","43","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","25","43","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("0");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","62","43","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_inputtype("normal");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","152","43","178","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","512","43","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","585","43","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete","731","43","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","10","88",null,null,"10","460",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("11");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsMaster");
            obj.set_nodatatext("등록된 레이아웃이 없습니다. 신규로 등록해주세요.");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"272\"/><Column size=\"103\"/><Column size=\"91\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"형식명\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:XLS_FRM_NM\" expandshow=\"hide\" maskedittype=\"number\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:REG_EMP_NM\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REG_DTIME\" edittype=\"none\" textAlign=\"center\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_StdLayout","10","360",null,null,"530","10",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("12");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsStdLayoutColumn");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"265\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"필드명\"/><Cell col=\"3\" text=\"크기\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:COL_NM\" edittype=\"none\" expandshow=\"hide\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsRsvtDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" text=\"bind:COL_WIDTH\" edittype=\"none\" expandshow=\"hide\" textAlign=\"right\" displaytype=\"normal\" combodataset=\"dsCalCpDv2\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00","22","316","100","50",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("13");
            obj.set_text("기준레이아웃");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00_00","522","316","100","50",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("14");
            obj.set_text("고객레이아웃");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CustLayout","510","360",null,null,"10","10",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("15");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsCustLayoutColumn");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"265\"/><Column size=\"74\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"필드명\"/><Cell col=\"3\" text=\"크기\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" text=\"bind:NO\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:COL_NM\" edittype=\"none\" expandshow=\"hide\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsRsvtDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:COL_WIDTH\" expandshow=\"hide\" maskedittype=\"number\" textAlign=\"right\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddColumn","456","494","30","29",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("16");
            obj.set_background("url(\'img::btn_CalNext_P.png\') no-repeat");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteColumn","456","554","30","29",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("17");
            obj.set_background("url(\'img::btn_CalPrev_P.png\') no-repeat");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel","804","43","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_excel");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("18");
            obj.set_text("엑셀");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcel","6","845","109.79%","135",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("19");
            obj.set_visible("false");
            obj.set_binddataset("dsXls");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/></Band><Band id=\"body\"><Cell text=\"bind:NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice","878","43","67","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("20");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",960,780,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("RCPT_DLVY_P030_old_20200729.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_DLVY_P030_old_20200729.xfdl", function() {
        /**
        *  고객레이아웃(WMS)
        *  @MenuPath
        *  @FileName 		RCPT_DLVY_P010.xfdl
        *  @Creator 		KJH
        *  @CreateDate 		2020.06.15
        *  @Desction        폼 템플릿
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.06.15		Kim Jin Hwan			최초 생성
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
        this.keyFlag=false;
        this.iODv;
        this.wareioDv;
        this.dsMgmtColumn;


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
        	this.objApp = nexacro.getApplication();

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);

        	this.fnInit();


        	var edtCustIdValue = this.edtCustId_sc.value;
        	var edtCustNmValue = this.edtCustNm_sc.value;

        	if( !this.gfnIsNull(edtCustIdValue) && !this.gfnIsNull(edtCustNmValue) ){
        		this.fnSearch();
        	}

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


        	// 입출고 구분 ( IN : 입고 , OUT : 출고 )
        	iODv = this.getOwnerFrame().pIODv;

        	if(iODv == "IN"){
        		this.dsMgmtColumn = this.objApp.gdsMgmtColumn_i;
        		this.wareioDv = "W2";
        	}else{
        		this.dsMgmtColumn = this.objApp.gdsMgmtColumn_o;
        		this.wareioDv = "W1";
        	}


        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "CUST_ID", this.getOwnerFrame().pCustId);
        	this.dsSearch.setColumn(0, "CUST_NM", this.getOwnerFrame().pCustNm);
        	this.dsSearch.setColumn(0, "WAREIO_DV", this.wareioDv);


        	this.fnSetDefault();


        	//this.fnSearch();
        };


        /***********************************************************************************************
         * @function	: fnSetDefault
         * @description	: 초기값 셋팅
         * @return N/A
        /***********************************************************************************************/
        this.fnSetDefault = function()
        {


        }


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


        		// 신규추가
        		case "btnAdd" :
        			this.fnAdd();
        		break;


        		// 레이아웃 컬럼추가
        		case "btnAddColumn" :
        			this.fnAddColumn();

        			this.fnSetExcelGridForm();
        		break;

        		// 레이아웃 컬럼삭제
        		case "btnDeleteColumn" :
        			this.fnDeleteColumn();

        			this.fnSetExcelGridForm();
        		break;


        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;


        		// 삭제
        		case "btnDelete" :
        			this.fnDelete();
        		break;


        		// 선택
        		case "btnChoice" :
        			this.fnChoise();
        		break;


        		// 엑셀다운로드
        		case "btnExcel" :
        			this.fnExcel();
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 레이아웃 리스트조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {

        	this.dsMaster.clearData();
        	this.dsDetail2.clearData();
        	this.dsStdLayoutColumn.clearData();
        	this.dsStdLayoutSortColumn.clearData();
        	this.dsCustLayoutColumn.clearData();



        	// 조회
        	this.gfnTransaction("getCustLayoutList");

        };



        /***********************************************************************************************
         * @function	: fnSearch2
         * @description	: 레이아웃 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch2 = function()
        {


        	this.dsSearch.setColumn(0, "XLS_FRM_NM", this.dsMaster.getColumn(this.dsMaster.rowposition, "XLS_FRM_NM"));

        	this.dsDetail2.clearData();
        	this.dsStdLayoutColumn.clearData();
        	this.dsStdLayoutSortColumn.clearData();
        	this.dsCustLayoutColumn.clearData();

        	// 조회
        	this.gfnTransaction("getCustLayout");
        };


        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 신규추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function()
        {
        	var nRowType = this.dsMaster.getRowType(this.dsMaster.rowcount-1);

        	if(nRowType == Dataset.ROWTYPE_INSERT){
        		return;
        	}

        	this.dsStdLayoutColumn.clearData();
        	this.dsStdLayoutSortColumn.clearData();
        	this.dsCustLayoutColumn.clearData();

        	this.dsStdLayoutColumn.copyData(this.dsMgmtColumn, true);



        	var nRow = this.dsMaster.addRow();
        	this.dsMaster.setColumn(nRow, "WAREIO_DV", this.wareioDv);


        };


        /***********************************************************************************************
         * @function	: fnAddColumn
         * @description	: 레이아웃 컬럼 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddColumn = function()
        {
        	// 기준레이아웃에 체크된 행이 없으면 에러
        	var nFindRow = this.dsStdLayoutColumn.findRow("CHK", "1");
        	if(nFindRow == -1){
        		this.gfnAlert("기준레이아웃에서 추가하려는 행을 체크해주세요.");
        		return;
        	}


        	// 추가
        	for(var i=0; i<this.dsStdLayoutColumn.rowcount; i++){

        		var nChkRow = this.dsStdLayoutColumn.getColumn(i, "CHK");

        		if(nChkRow != "1") continue;

        		var colId = this.dsStdLayoutColumn.getColumn(i, "COL_ID");

        		var nRow = this.dsCustLayoutColumn.addRow();
        		this.dsCustLayoutColumn.setColumn(nRow, "NO", this.dsExcelAlphabet.getColumn(nRow, "CD_NM"));
        		this.dsCustLayoutColumn.setColumn(nRow, "COL_ID", colId);
        		this.dsCustLayoutColumn.setColumn(nRow, "COL_NM", this.dsMgmtColumn.lookup("COL_ID", colId, "COL_NM"));
        		this.dsCustLayoutColumn.setColumn(nRow, "COL_WIDTH", this.dsMgmtColumn.lookup("COL_ID", colId, "COL_WIDTH"));
        		this.dsCustLayoutColumn.setColumn(nRow, "SEQ", this.dsMgmtColumn.findRow("COL_ID", colId));
        	}


        	// 삭제
        	for(var i=this.dsStdLayoutColumn.rowcount-1; i>=0; i--){
        		var nChkRow = this.dsStdLayoutColumn.getColumn(i, "CHK");

        		if(nChkRow != "1") continue;

        		this.dsStdLayoutColumn.deleteRow(i);
        	}

        	this.dsStdLayoutSortColumn.copyData(this.dsStdLayoutColumn, true);


        	// 그리드헤더 체크해제
        	this.grd_StdLayout.setCellProperty("head", this.grd_StdLayout.getBindCellIndex("body", "CHK"), "text", '0');
        };



        /***********************************************************************************************
         * @function	: fnDeleteColumn
         * @description	: 레이아웃 컬럼 삭제
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteColumn = function()
        {
        	// 고객레이아웃에 체크된 행이 없으면 에러
        	var nFindRow = this.dsCustLayoutColumn.findRow("CHK", "1");
        	if(nFindRow == -1){
        		this.gfnAlert("고객레이아웃에서 삭제하려는 행을 체크해주세요.");
        		return;
        	}



        	// 추가
        	for(var i=0; i<this.dsCustLayoutColumn.rowcount; i++){

        		var nChkRow = this.dsCustLayoutColumn.getColumn(i, "CHK");

        		if(nChkRow != "1") continue;

        		var colId = this.dsCustLayoutColumn.getColumn(i, "COL_ID");

        		var nRow = this.dsStdLayoutSortColumn.addRow();
        		this.dsStdLayoutSortColumn.setColumn(nRow, "COL_ID", colId);
        		this.dsStdLayoutSortColumn.setColumn(nRow, "COL_NM", this.dsMgmtColumn.lookup("COL_ID", colId, "COL_NM"));
        		this.dsStdLayoutSortColumn.setColumn(nRow, "COL_WIDTH", this.dsMgmtColumn.lookup("COL_ID", colId, "COL_WIDTH"));
        		this.dsStdLayoutSortColumn.setColumn(nRow, "SEQ", this.dsMgmtColumn.findRow("COL_ID", colId));
        	}

        	// 데이터셋 SEQ 기준으로 정렬후 Copy ( 정렬시 데이터셋의 물리적은 로우는 정렬되지 않음. Copy를 통해 정렬된 데이터셋 새로 생성처리함.)
        	this.dsStdLayoutSortColumn.set_keystring("S:+SEQ");
        	this.dsStdLayoutColumn.copyData(this.dsStdLayoutSortColumn, true);


        	// 삭제
        	for(var i=this.dsCustLayoutColumn.rowcount-1; i>=0; i--){
        		var nChkRow = this.dsCustLayoutColumn.getColumn(i, "CHK");

        		if(nChkRow != "1") continue;

        		this.dsCustLayoutColumn.deleteRow(i);
        	}

        	// 엑셀알파벳 재설정 (고객레이아웃 NO)
        	for(var i=0; i<this.dsCustLayoutColumn.rowcount; i++){
        		this.dsCustLayoutColumn.setColumn(i, "NO", this.dsExcelAlphabet.getColumn(i, "CD_NM"));
        	}


        	// 그리드헤더 체크해제
        	this.grd_CustLayout.setCellProperty("head", this.grd_CustLayout.getBindCellIndex("body", "CHK"), "text", '0');

        };


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {
        	var custIdValue = this.edtCustId_sc.value;
        	var custNmValue = this.edtCustNm_sc.value;

        	var xlsFrmNmOrgValue = this.dsMaster.getColumn(this.dsMaster.rowposition, "XLS_FRM_NM_ORG");
        	var xlsFrmNmValue = this.dsMaster.getColumn(this.dsMaster.rowposition, "XLS_FRM_NM");

        	if( this.gfnIsNull(custIdValue) || this.gfnIsNull(custIdValue)){
        		this.gfnAlert("고객을 입력해주세요.");
        		return;
        	}


        	if( this.gfnIsNull(xlsFrmNmValue) ){
        		this.gfnAlert("형식명을 입력해주세요.");
        		return;
        	}


        	/* 형식명 특수문자 체크
        		파일명으로 사용할 수 없는 문자 ( '\', '/', ':', '*', '?', '"', '<', '>', '|' )
        	*/
        	var pattern1 = /[\/:*?"<>|]/;

        	if(pattern1.test(xlsFrmNmValue)){
        		var errMsg = "형식명으로 사용할 수 없는 문자가 포함되어있습니다";
        		errMsg += "\n사용할수 없는 특수문자 ( \\, /, :, *, ?, \", <, >, | )";
        		this.gfnAlert(errMsg);
        		return;
        	}


        	this.dsSave.setColumn(0, "CUST_ID", custIdValue);
        	this.dsSave.setColumn(0, "WAREIO_DV", this.wareioDv);
        	this.dsSave.setColumn(0, "XLS_FRM_NM", this.gfnIsNull(xlsFrmNmOrgValue)?xlsFrmNmValue:xlsFrmNmOrgValue);
        	this.dsSave.setColumn(0, "XLS_FRM_NM_NEW", xlsFrmNmValue);

        	// 고객레이아웃 필드 셋팅
        	var strColidList = "";
        	for(var i=0; i<this.dsCustLayoutColumn.rowcount; i++){
        		var colId = this.dsCustLayoutColumn.getColumn(i, "COL_ID");

        		strColidList += colId +"|";
        	}

        	// 마지막 기호('|') 제거
        	strColidList = strColidList.slice(0,-1);

        	this.dsSave.setColumn(0, "XLS_HD_LIST", strColidList);


        	var nRowType = this.dsMaster.getRowType(this.dsMaster.rowposition);

        	var strRowType = "";

        	if( nRowType == Dataset.ROWTYPE_INSERT ) strRowType = "insert";


        	this.dsSave.setColumn(0, "MASTER_ROW_TYPE", strRowType);



        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveCustLayout");
        	});


        }


        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function()
        {
        	if(this.dsMaster.getRowCount() == 0){
        		this.gfnAlert("삭제할 대상이 없습니다.");
        		return;
        	}


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		var nRowType = this.dsMaster.getRowType(this.dsMaster.rowposition);

        		if( nRowType == Dataset.ROWTYPE_INSERT ){

        			this.dsMaster.deleteRow(this.dsMaster.rowposition);
        			this.gfnAlert("삭제되었습니다.");
        			this.fnSearch();

        		}else{

        			var custIdValue = this.edtCustId_sc.value;
        			var custNmValue = this.edtCustNm_sc.value;
        			var rsvtDvValue = this.cboRsvtDv.value;
        			var xlsFrmNmOrgValue = this.dsMaster.getColumn(this.dsMaster.rowposition, "XLS_FRM_NM_ORG");

        			this.dsDelete.setColumn(0, "CUST_ID", custIdValue);
        			this.dsDelete.setColumn(0, "WAREIO_DV", rsvtDvValue);
        			this.dsDelete.setColumn(0, "XLS_FRM_NM", xlsFrmNmOrgValue);


        			this.gfnTransaction("deleteCustLayout");
        		}
        	});
        }


        /***********************************************************************************************
         * @function	: fnChoise
         * @description	: 선택
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnChoise = function()
        {
        	if(this.dsMaster.rowcount == 0){
        		this.gfnAlert("조회한 내용이 없습니다.");
        		return;
        	}


        	var row = this.dsMaster.rowposition;

        	var nRowType = this.dsMaster.getRowType(row);


        	if( nRowType ==  Dataset.ROWTYPE_INSERT ){
        		this.gfnAlert("신규인경우 저장 후 선택가능합니다.");
        		return;
        	}

        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.fnReturnClose(row);
        	}
        }


        /***********************************************************************************************
         * @function	: fnReturnClose
         * @description	:
         * @param		: obj	- nexacro.Edit
         * @return N/A
        /***********************************************************************************************/
        this.fnReturnClose = function(row) {

        	if( row !== -1 ) {


        		var colId;
        		for(var i=0; i<this.dsCustLayoutColumn.rowcount; i++){
        			colId = this.dsCustLayoutColumn.getColumn(i, "COL_ID");
        			this.dsResult.addColumn(colId, "STRING");
        		}

        		// return dataSet 초기화

        		var json = {
        			ds : this.dsResult.saveXML(),
        			callFn : this.getOwnerFrame().callbackFn
        		}


        		// opener에 값 셋팅.
        		//this.opener.edtRcptDv.set_value(this.dsMaster.getColumn(this.dsMaster.rowposition, "WAREIO_DV"));
        		//this.opener.div00.form.edtRcptDvNm.set_value(this.dsRsvtDv.lookup("CD",this.dsMaster.getColumn(this.dsMaster.rowposition, "WAREIO_DV"), "CD_NM"));
        		this.opener.edtXlsFormNm.set_value(this.dsMaster.getColumn(this.dsMaster.rowposition, "XLS_FRM_NM_ORG"));

        		this.opener.dsMgmtColumn.copyData(this.dsMgmtColumn);

        		this.close(JSON.stringify(json));
        	}
        }


        /***********************************************************************************************
         * @function	: fnExcel
         * @description	: 엑셀 다운로드
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnExcel = function()
        {
        	if(this.dsMaster.rowcount == 0){
        		this.gfnAlert("조회한 내용이 없습니다.");
        		return;
        	}


        	if( this.dsMaster.getRowType(this.dsMaster.rowposition) ==  Dataset.ROWTYPE_INSERT ){
        		this.gfnAlert("신규인경우 저장 후 다운로드가능합니다.");
        		return;
        	}

        	var fileName = this.dsMaster.getColumn(this.dsMaster.rowposition, "XLS_FRM_NM")+"_"+this.gfnGetDate("milli");	// 파일명

        	this.gfnExcelExport(this.grdExcel, "sheet1", fileName);
        }


        /***********************************************************************************************
         * @function	: fnSetExcelGridForm
         * @description	: 엑셀 그리드 항목 셋팅 (다운로드용).
        /***********************************************************************************************/
        this.fnSetExcelGridForm = function()
        {
        	for(var i = this.grdExcel.getCellCount("body"); i>=1; i--){
        		this.grdExcel.deleteContentsCol("body", i);
        	}

        	var nCol;


        	// 양식에 맞는 그리드 그리기
        	for(var i=0; i<this.dsCustLayoutColumn.rowcount; i++){

        		this.dsXls.addColumn("COL_ID_"+i, "string");
        		this.dsXls.setColumn(0, "COL_ID_"+i, this.dsCustLayoutColumn.getColumn(i,"COL_ID"));


        		nCol = this.grdExcel.appendContentsCol("body");

        		this.grdExcel.setCellProperty("head", nCol, "text", this.dsCustLayoutColumn.getColumn(i,"COL_NM"));
        		this.grdExcel.setCellProperty("body", nCol, "text", "bind:COL_ID_"+i);
        		this.grdExcel.setCellProperty("body", nCol, "background", "#FFF0D2");

        		this.grdExcel.setRealColSize("body", nCol, this.dsCustLayoutColumn.getColumn(i,"COL_WIDTH"));
        	}

        }


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
        	//trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

        	if(errorCode < 0) {
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        		break;

        		// 고객레이아웃리스트 조회
        		case "getCustLayoutList" :
        			if(this.dsMaster.rowcount > 0){
        				// 고객레이아웃 조회
        				this.fnSearch2();
        			}
        		break;


        		// 고객레이아웃 조회
        		case "getCustLayout" :
        			// 기준레이아웃과 고객레이아웃컬럼을 셋팅.
        			this.fnSetLayoutColumn();

        			this.fnSetExcelGridForm();


        			this.grd_Main.setFocus();
        		break;


        		// 저장
        		case "saveCustLayout":
        			this.gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		break;


        		// 삭제
        		case "deleteCustLayout":
        			this.gfnAlert("삭제되었습니다.");
        			this.fnSearch();
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnSetLayoutColumn
         * @description	: 기준레이아웃과 고객레이아웃컬럼을 셋팅한다.
         * @return N/A
         ***********************************************************************************************/
        this.fnSetLayoutColumn = function()
        {
        	var strXlsHdList = this.dsDetail2.getColumn(0,"XLS_HD_LIST");


        	var arrColId = this.gfnIsNull(strXlsHdList)?"":strXlsHdList.split('|');

        	// 고객 레이아웃 컬럼 셋팅.
        	for(var i=0; i<arrColId.length; i++){

        		var nRow = this.dsCustLayoutColumn.addRow();
        		this.dsCustLayoutColumn.setColumn(nRow, "NO", this.dsExcelAlphabet.getColumn(nRow, "CD_NM"));
        		this.dsCustLayoutColumn.setColumn(nRow, "COL_ID", arrColId[i]);
        		this.dsCustLayoutColumn.setColumn(nRow, "COL_NM", this.dsMgmtColumn.lookup("COL_ID", arrColId[i], "COL_NM"));
        		this.dsCustLayoutColumn.setColumn(nRow, "COL_WIDTH", this.dsMgmtColumn.lookup("COL_ID", arrColId[i], "COL_WIDTH"));
        		this.dsCustLayoutColumn.setColumn(nRow, "SEQ", this.dsMgmtColumn.findRow("COL_ID", colId));
        	}

        	// 기준레이아웃 컬럼 셋팅.
        	for(var i=0; i<this.dsMgmtColumn.rowcount; i++){

        		var colId = this.dsMgmtColumn.getColumn(i, "COL_ID");

        		// (고객 레이아웃에 셋팅된 컬럼은 제외)
        		if( this.dsCustLayoutColumn.findRow("COL_ID", colId) != -1) continue;

        		var nRow = this.dsStdLayoutSortColumn.addRow();
        		this.dsStdLayoutSortColumn.setColumn(nRow, "COL_ID", colId);
        		this.dsStdLayoutSortColumn.setColumn(nRow, "COL_NM", this.dsMgmtColumn.lookup("COL_ID", colId, "COL_NM"));
        		this.dsStdLayoutSortColumn.setColumn(nRow, "COL_WIDTH", this.dsMgmtColumn.lookup("COL_ID", colId, "COL_WIDTH"));
        		this.dsStdLayoutSortColumn.setColumn(nRow, "SEQ", this.dsMgmtColumn.findRow("COL_ID", colId));
        	}


        	this.dsStdLayoutSortColumn.set_keystring("S:+SEQ");
        	this.dsStdLayoutColumn.copyData(this.dsStdLayoutSortColumn, true);

        }


        /***********************************************************************************************
         * @function	: fnPopupCallBack
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: dsObj		- nexacro.NormalDataset
         * @return N/A
         ***********************************************************************************************/
        this.fnPopupCallback = function(popupId, dsObj)
        {
        	//trace("[fnPopupCallback()] sPopupId["+popupId+"] rtnMsg["+JSON.stringify(dsObj)+"]");

        	switch(popupId) {



        		default :
        		break;
        	}
        };


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
        		//case "btnOpenPopSearchCust" :	this.fnOpenPopSearchCust(); break;

        		default 		: 	break;
        	}
        };


        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        /***********************************************************************************************
         * @function   : grd_Main_oncellclick
         * @description   : 그리드 행 클릭 이벤트.
         * @param      : obj   - nexacro.Grid
         * @param      : e      - nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.grd_Main_oncellclick = function(obj,e)
        {
        	this.keyFlag = false;
        	this.dsMaster.set_enableevent(false);
        	this.dsMaster.set_rowposition(e.row);
        	this.dsMaster.set_enableevent(true);

        	if(e.row != e.oldrow){
        		if( this.dsMaster.getRowType(e.oldrow) == Dataset.ROWTYPE_INSERT){
        			this.gfnCustomConfirm("신규로 작업중인 내용은 삭제됩니다. 그래도 행을 변경하시겠습니까?", function(sPopupId, bResult){

        				if(!bResult){
        					this.dsMaster.set_rowposition(e.oldrow);
        					return;
        				}

        				this.dsMaster.deleteRow(e.oldrow);
        				this.fnSearch2();
        			});
        		}else{
        			this.fnSearch2();
        		}
        	}

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
              //this.gfnGridSort(obj, e);
           }
        };




        /***********************************************************************************************
         * @function   : cboRsvtDv_onitemchanged
         * @description: 예약구분 값 변경 이벤트.
         * @param      : obj   - nexacro.Grid
         * @param      : e      - nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cboRsvtDv_onitemchanged = function(obj,e)
        {
        	// 조회처리.
        	this.fnSearch();
        };


        /***********************************************************************************************
         * @function   : grd_Main_onkeydown
         * @description   : 그리드에서 방향키로 이동하는거 막음.
         * @param      : obj   - nexacro.Grid
         * @param      : e      - nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.grd_Main_onkeydown = function(obj,e)
        {
        	if(e.keycode >= 38 && e.keycode <= 40){
        		this.keyFlag = true;
        	}else{
        		this.keyFlag = false;
        	}
        };


        /***********************************************************************************************
         * @function   : dsMaster_onrowposchanged
         * @description   : 그리드 행 변경 이벤트.
         * @param      : obj   - nexacro.Grid
         * @param      : e      - nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsMaster_onrowposchanged = function(obj,e)
        {

        	// 그리드에서 방향키로 이동하는거 막음.
        	if(this.keyFlag){
        		this.dsMaster.set_enableevent(false);
        		this.dsMaster.set_rowposition(e.oldrow);
        		this.dsMaster.set_enableevent(true);
        		this.keyFlag = false;
        		return false;
        	}

        	var nRowType = this.dsMaster.getRowType(e.newrow);
        	var nOldRowType = this.dsMaster.getRowType(e.oldrow);

        	if(e.newrow != e.oldrow){
        		if( this.dsMaster.getRowType(e.oldrow) == Dataset.ROWTYPE_INSERT){
        			this.gfnCustomConfirm("신규로 작업중인 내용은 삭제됩니다. 그래도 행을 변경하시겠습니까?", function(sPopupId, bResult){

        				if(!bResult){
        					this.dsMaster.set_rowposition(e.oldrow);
        					return;
        				}

        				this.dsMaster.deleteRow(e.oldrow);
        				this.fnSearch2();
        			});
        		}
        	}

        	if(nOldRowType == Dataset.ROWTYPE_UPDATE){

        		for(var i=0; i<this.dsMaster.getColCount(); i++){

        			this.dsMaster.setColumn(e.oldrow, i, this.dsMaster.getOrgColumn(e.oldrow, i));

        		}

        	}
        };



        this.dsMaster_oncolumnchanged = function(obj,e)
        {
        	this.dsMaster.set_enableevent(false);
        	this.dsMaster.set_rowposition(e.row);
        	this.dsMaster.set_enableevent(true);
        };


        this.grd_Main_oncelldblclick = function(obj,e)
        {
        	this.fnChoise();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDelete.addEventHandler("onclick",this.btnOnClick,this);
            this.grd_Main.addEventHandler("oncellclick",this.grd_Main_oncellclick,this);
            this.grd_Main.addEventHandler("oncellposchanged",this.grd_Main_oncellposchanged,this);
            this.grd_Main.addEventHandler("onkeydown",this.grd_Main_onkeydown,this);
            this.grd_Main.addEventHandler("oncelldblclick",this.grd_Main_oncelldblclick,this);
            this.grd_StdLayout.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_CustLayout.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.btnAddColumn.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDeleteColumn.addEventHandler("onclick",this.btnOnClick,this);
            this.btnExcel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnChoice.addEventHandler("onclick",this.btnOnClick,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsMaster.addEventHandler("oncolumnchanged",this.dsMaster_oncolumnchanged,this);
            this.dsMaster.addEventHandler("cancolumnchange",this.dsMaster_cancolumnchange,this);
            this.dsDetail2.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
        };

        this.loadIncludeScript("RCPT_DLVY_P030_old_20200729.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
