(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BSS11_NKFR_AUTHOR_MNG");
            this.set_titletext("권한별메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CONFIRM_YN\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">searchList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsAuth=dsAuth</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">getAuthList</Col></Row><Row><Col id=\"SVC_ID\">save</Col><Col id=\"IN_DATASET_LIST\">dsAuth=dsAuth:U dsAuthDetail=dsAuthDetail:A dsSearchSub=dsSearchSub:A</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">saveAuthDetail</Col><Col id=\"CALLBACK\">fnCallback</Col></Row><Row><Col id=\"SVC_ID\">delete</Col><Col id=\"IN_DATASET_LIST\">dsAuthDel=dsAuthDel:A</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">deleteAuth</Col><Col id=\"CALLBACK\">fnCallback</Col></Row><Row><Col id=\"SVC_ID\">searchListDetail</Col><Col id=\"IN_DATASET_LIST\">dsSearchSub=dsSearchSub</Col><Col id=\"OUT_DATASET_LIST\">dsAuthDetail=dsAuthDetail</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">getAuthDetail</Col></Row><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsSysCls=ds1 dsUseYn=ds2</Col><Col id=\"QUERY_LIST\">q1=SYS_CLS q2=HE0180</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">commonCodeService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"VALUE\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuth", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"DEL_YN\" size=\"100\" type=\"STRING\"/><Column id=\"INS_PERSON_ID\" size=\"100\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"100\" type=\"STRING\"/><Column id=\"AUTH_NM\" size=\"100\" type=\"STRING\"/><Column id=\"CONFIRM_YN\" size=\"100\" type=\"STRING\"/><Column id=\"INS_DAY\" size=\"100\" type=\"STRING\"/><Column id=\"CHK\" size=\"100\" type=\"STRING\"/><Column id=\"AUTH_CD\" size=\"100\" type=\"STRING\"/><Column id=\"MODIFY_YN\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthDetail", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_TYPE\" size=\"100\" type=\"STRING\"/><Column id=\"MENU_DESC\" size=\"100\" type=\"STRING\"/><Column id=\"MENU_IMG_CLASS\" size=\"100\" type=\"STRING\"/><Column id=\"CHK\" size=\"100\" type=\"STRING\"/><Column id=\"LV\" size=\"100\" type=\"STRING\"/><Column id=\"MENU_NM\" size=\"100\" type=\"STRING\"/><Column id=\"MENU_CD\" size=\"100\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"100\" type=\"STRING\"/><Column id=\"MENU_SYS\" size=\"100\" type=\"STRING\"/><Column id=\"MENU_NM_PARENT\" size=\"100\" type=\"STRING\"/><Column id=\"MENU_URL\" size=\"100\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"100\" type=\"STRING\"/><Column id=\"MENU_CD_PARENT\" size=\"100\" type=\"STRING\"/><Column id=\"SORT_SUB\" size=\"100\" type=\"STRING\"/><Column id=\"SORT_MAIN\" size=\"100\" type=\"STRING\"/><Column id=\"MSTR_MENU_CD\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchSub", this);
            obj._setContents("<ColumnInfo><Column id=\"REG_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysCls", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"VALUE\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">Y</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthDel", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_search","0","20",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("stcBaseCorpId","12","29","70","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0199");
            obj.set_taborder("9");
            obj.set_text("권한명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAuthNm","61","29","123","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle","0","81","91","31",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("3");
            obj.set_text("권한관리");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Sub","530","112",null,null,"30","20","510",null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuthDetail");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"105\"/><Column size=\"318\"/></Columns><Rows><Row band=\"head\" size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell accessibilitydescription=\"T0386\" col=\"2\" text=\"메인메뉴\"/><Cell accessibilitydescription=\"T0588\" col=\"3\" text=\"서브메뉴\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:MENU_NM_PARENT\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:MENU_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stTitleDetail","530","81",null,"31","429",null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0200");
            obj.set_taborder("4");
            obj.set_text("권한상세리스트");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","112",null,null,"grd_Sub:20","20",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuth");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"130\"/></Columns><Rows><Row band=\"head\" size=\"26\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell accessibilitydescription=\"T0199\" col=\"1\" text=\"권한명\"/><Cell accessibilitydescription=\"T0633\" col=\"2\" text=\"승인권한여부\"/><Cell accessibilitydescription=\"T0514\" col=\"3\" text=\"사용여부\"/><Cell accessibilitydescription=\"T0278\" col=\"4\" text=\"등록자\"/><Cell accessibilitydescription=\"T0587\" col=\"5\" text=\"생성일자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" editautoselect=\"true\" edittype=\"normal\" text=\"bind:AUTH_NM\" textAlign=\"left\"/><Cell col=\"2\" comboautoselect=\"true\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"dsUseYn\" displaytype=\"combocontrol\" editautoselect=\"true\" edittype=\"combo\" text=\"bind:CONFIRM_YN\"/><Cell col=\"3\" comboautoselect=\"true\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"dsUseYn\" displaytype=\"combocontrol\" editautoselect=\"true\" edittype=\"combo\" text=\"bind:USE_YN\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:INS_PERSON_ID\" textAlign=\"left\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:INS_DAY\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCinformYn","284","29","73","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsSearchUseYn");
            obj.set_taborder("5");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","433","29","73","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsSearchUseYn");
            obj.set_taborder("6");
            obj.set_text("전체");
            obj.set_value("전체");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSystem","596","29","123","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsSysCls");
            obj.set_taborder("7");
            obj.set_text("전체");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stcBaseCorpId00","198","29","80","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0633");
            obj.set_taborder("10");
            obj.set_text("승인권한여부");
            this.addChild(obj.name, obj);

            obj = new Static("stcBaseCorpId01","371","29","60","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0514");
            obj.set_taborder("11");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Static("stcBaseCorpId02","521","29","70","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0641");
            obj.set_taborder("12");
            obj.set_text("시스템구분");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"29","68","23","42",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("14");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"29","52","23","115",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("13");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"29","68","23","172",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("15");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"29","68","23","245",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("16");
            obj.set_text("신규");
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

            obj = new BindItem("item0","cboCinformYn","value","dsSearch","CONFIRM_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboUseYn","value","dsSearch","USE_YN");
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
        this.addIncludeScript("BSS11_NKFR_AUTHOR_MNG.xfdl","lib::lib_Form.xjs");
        this.registerScript("BSS11_NKFR_AUTHOR_MNG.xfdl", function() {
        /**
        *  공통코드 관리
        *  @MenuPath		mdm > BSS11_NKFR_AUTHOR_MNG
        *  @FileName		BSS11_NKFR_AUTHOR_MNG.xfdl
        *  @Creator			seungmin
        *  @CreateDate		2018.07.25
        *  @Desction		스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2018.07.25		intaekOh				최초 생성
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
         * @description	: 코드리스트 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	lvRegSys = this.cboSystem.value;
        	// 조회 transaction
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
        	for( var idx = 0; idx < this.dsAuth.rowcount; idx++ ) {
        		if( this.dsAuth.getRowType(idx) === Dataset.ROWTYPE_INSERT ) {
        			return;
        		}
        	}

        	var nRow = this.dsAuth.addRow();
        	this.dsAuth.setColumn(nRow,'DEL_YN','N');
        	this.dsAuth.setColumn(nRow,'CONFIRM_YN','N');
        };

        /***********************************************************************************************
         * @function	: fnDel
         * @description	: 삭제
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDel = function()
        {
        	var nRow = this.dsAuth.rowposition;
        	if( this.dsAuth.getRowType(nRow) === Dataset.ROWTYPE_INSERT ) {
        		this.dsAuth.deleteRow(nRow);
        	} else {
        		var authTitle = this.dsAuth.getColumn(nRow,'AUTH_NM');
        		if( !confirm(authTitle + ' 권한을 삭제하시겠습니까?') ) return;

        		this.dsAuthDel.clearData();
        		this.dsAuthDel.setColumn(this.dsAuthDel.addRow(),'AUTH_CD',this.dsAuth.getColumn(nRow,'AUTH_CD'));
        		this.gfnTransaction("delete");
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
        		this.alert(errorMsg);
        	}else{
        		if( svcID === "save" ) {
        			this.fnSearch();
        			this.gfnAlert("M0420");
        		} else if( svcID === 'commonCode' ) {
        			this.dsSearchUseYn.clearData();
        			this.dsSearchUseYn.copyData(this.dsUseYn);

        			this.dsSearchUseYn.insertRow(0);
        			this.dsSearchUseYn.setColumn(0,"CD",'');
        			this.dsSearchUseYn.setColumn(0,"CD_NM",'전체');

        			this.cboCinformYn	.set_index(0);
        			this.cboUseYn		.set_index(0);
        			this.cboSystem		.set_index(0);
        		} else if( svcID === 'delete' ) {
        			this.fnSearch();
        			this.gfnAlert("M0263");
        		}
         	}
        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 추가 변경 건에 대한 정보를 반영한다.
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	this.gfnTransaction("save");
        }

        /***********************************************************************************************
         * @function	: dsAuth_onrowposchanged
         * @description	: rowposition changed
         * @param		: obj - nexacro.NormalDataset
         * @param		: e	  - nexacro.DSRowPosChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsAuth_onrowposchanged = function(obj,e)
        {
        	this.dsSearchSub.clearData();
        	var row = e.newrow;
        	var oldRow = e.oldrow;

        	if( obj.getRowType(oldRow) === Dataset.ROWTYPE_INSERT ) {
        		if( !this.gfnConfirm("M0716") ) {
        			obj.set_enableevent(false);
        			obj.set_rowposition(oldRow);
        			this.grd_Main.setFocus();
        			this.grd_Main.setCellPos(1);
        			obj.set_enableevent(true);
        			return;
        		}
        		obj.deleteRow(oldRow);
        	}

        	var nRow = this.dsSearchSub.addRow();
        	this.dsSearchSub.setColumn(nRow,"REG_SYS",lvRegSys);
        	this.dsSearchSub.setColumn(nRow,"AUTH_CD",obj.getColumn(row,"AUTH_CD"));

        	this.gfnTransaction("searchListDetail");
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
        	var cellNumber = e.cell;
        	var cellType   = obj.getCellProperty('body',cellNumber,'edittype');
        	switch(cellType) {
        	case 'checkbox' : this.fnHeadAllCheck(obj,cellNumber);
        		break;
        	default			: this.gfnGridSort(obj,e); break;
        	}
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.edtAuthNm.addEventHandler("onkeydown",this.edtAuthNm_onkeydown,this);
            this.grd_Sub.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.cboCinformYn.addEventHandler("onitemchanged",this.cboSystem_onitemchanged,this);
            this.cboUseYn.addEventHandler("onitemchanged",this.cboSystem_onitemchanged,this);
            this.cboSystem.addEventHandler("onitemchanged",this.cboSystem_onitemchanged,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.dsAuth.addEventHandler("onrowposchanged",this.dsAuth_onrowposchanged,this);
        };

        this.loadIncludeScript("BSS11_NKFR_AUTHOR_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
