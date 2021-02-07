(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SYST_MNG_0030");
            this.set_titletext("권한별메뉴버튼관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">searchList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsAuthList=dsAuthList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">getAuthList</Col></Row><Row><Col id=\"SVC_ID\">save</Col><Col id=\"IN_DATASET_LIST\">dsMenuBtnAuthList=dsMenuBtnAuthList:U</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">saveMenuBtnAuthList</Col><Col id=\"CALLBACK\">fnCallback</Col></Row><Row><Col id=\"SVC_ID\">searchDetailList</Col><Col id=\"IN_DATASET_LIST\">dsSearchSub=dsSearchSub</Col><Col id=\"OUT_DATASET_LIST\">dsMenuBtnAuthList=dsMenuBtnAuthList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">getMenuBtnAuthList</Col></Row><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsUseYn=ds1 dsUseYn_sc=ds2</Col><Col id=\"QUERY_LIST\">q1=SM993 q2=SM993</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">insertMenuList</Col><Col id=\"IN_DATASET_LIST\">dsMenuList=dsMenuList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">insertMenuList</Col></Row><Row><Col id=\"SVC_ID\">deleteMenuList</Col><Col id=\"IN_DATASET_LIST\">dsAuthDetailList=dsAuthDetailList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">authMgmService</Col><Col id=\"SERVICE_METHOD\">deleteMenuList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_DV\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DT\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MOD_DT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchSub", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuBtnAuthList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PARENT_MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ALL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_search","0","35",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("stcBaseCorpId","25","44","70","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0199");
            obj.set_taborder("4");
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
            obj.set_text("권한리스트");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stTitle:0",null,"187","30",null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAuthList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"123\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"90\"/><Column size=\"130\"/><Column size=\"90\"/><Column size=\"130\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0199\" text=\"권한코드\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"권한명\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"권한설명\"/><Cell col=\"4\" accessibilitydescription=\"T0278\" text=\"등록자\"/><Cell col=\"5\" accessibilitydescription=\"T0587\" text=\"생성일자\"/><Cell col=\"6\" accessibilitydescription=\"T0278\" text=\"수정자\"/><Cell col=\"7\" accessibilitydescription=\"T0587\" text=\"수정일자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" editautoselect=\"true\" edittype=\"none\" text=\"bind:AUTH_CD\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:AUTH_NM\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"none\" text=\"bind:AUTH_DESC\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:REG_ID\" textAlign=\"center\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:REG_DT\" textAlign=\"center\"/><Cell col=\"6\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:MOD_ID\" textAlign=\"center\"/><Cell col=\"7\" editautoselect=\"true\" edittype=\"expr:EDIT_YN\" text=\"bind:MOD_DT\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stTitleDetail00","10","grd_Main:12",null,"31","949",null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0200");
            obj.set_taborder("5");
            obj.set_text("메뉴별 버튼권한 리스트");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Sub1","0","340",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMenuBtnAuthList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"105\"/><Column size=\"318\"/><Column size=\"87\"/><Column size=\"87\"/><Column size=\"87\"/><Column size=\"87\"/><Column size=\"87\"/><Column size=\"87\"/><Column size=\"87\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0386\" text=\"메인메뉴\"/><Cell col=\"2\" accessibilitydescription=\"T0588\" text=\"서브메뉴\"/><Cell col=\"3\" accessibilitydescription=\"T0386\" text=\"조회권한\"/><Cell col=\"4\" accessibilitydescription=\"T0386\" text=\"신규권한\"/><Cell col=\"5\" accessibilitydescription=\"T0386\" text=\"저장권한\"/><Cell col=\"6\" accessibilitydescription=\"T0386\" text=\"삭제권한\"/><Cell col=\"7\" accessibilitydescription=\"T0386\" text=\"엑셀권한\"/><Cell col=\"8\" accessibilitydescription=\"T0386\" text=\"출력권한\"/><Cell col=\"9\" accessibilitydescription=\"T0386\" text=\"전체권한\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:PARENT_MENU_NM\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:MENU_NM\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"checkbox\" suppress=\"0\" text=\"bind:SEL_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"checkbox\" suppress=\"0\" text=\"bind:ADD_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"checkbox\" suppress=\"0\" text=\"bind:SAV_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/><Cell col=\"6\" editautoselect=\"true\" edittype=\"checkbox\" suppress=\"0\" text=\"bind:DEL_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/><Cell col=\"7\" editautoselect=\"true\" edittype=\"checkbox\" suppress=\"0\" text=\"bind:XLS_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/><Cell col=\"8\" editautoselect=\"true\" edittype=\"checkbox\" suppress=\"0\" text=\"bind:PRT_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/><Cell col=\"9\" editautoselect=\"true\" edittype=\"checkbox\" suppress=\"0\" text=\"bind:ALL_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("8");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("btnComponent");
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

            obj = new BindItem("item3","edtAuthNm","value","dsSearch","AUTH_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SYST_MNG_0030.xfdl","lib::lib_Form.xjs");
        this.registerScript("SYST_MNG_0030.xfdl", function() {
        /**
        *  메뉴별 버튼 권한관리
        *  @MenuPath
        *  @FileName		SYST_MNG_0030.xfdl
        *  @Creator			kjh
        *  @CreateDate		2020.07.21
        *  @Desction		스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.07.21		kjh				최초 생성
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
         * @function	: fnSearch
         * @description	: 권한리스트 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {

        	// 조회 transaction
        	this.dsAuthList.clearData();
        	this.gfnTransaction("searchList");
        };


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 추가 변경 건에 대한 정보를 반영한다.
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("save");
        	});
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
        	if(errorCode < 0) {
        		this.gfnAlert(errorMsg);
        	}else{

        		if( svcID === "save" ) {

        			this.gfnAlert("저장되었습니다.");
        			this.fnSearchDetailList();
        		} else if( svcID === 'commonCode' ) {

        			// 컴포넌트 초기화
        			this.fnCompInit();

        		} else if (svcID === "searchList"){
        			if(this.dsAuthList.getRowCount()==0){
        				this.dsMenuList.clearData();
        				this.dsAuthDetailList.clearData();
        			}
        		}
         	}
        };



        /***********************************************************************************************
         * @function	: dsAuthList_onrowposchanged
         * @description	: rowposition changed
         * @param		: obj - nexacro.NormalDataset
         * @param		: e	  - nexacro.DSRowPosChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsAuthList_onrowposchanged = function(obj,e)
        {
        	if(this.dsAuthList.rowcount == 0){
        		this.dsMenuBtnAuthList.clearData();
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
         * @function: fnCompInit
         * @description: 컴포넌트 초기화 함수.
         * @param  N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCompInit = function()
        {

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
         * @function	: dsMenuBtnAuthList_oncolumnchanged
         * @description	: dsMenuBtnAuthList 값변경 이벤트
         * @param		: obj	- nexacro.NormalDataset
         * @param       : e - nexacro.DSColChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsMenuBtnAuthList_oncolumnchanged = function(obj,e)
        {
        	// 전체권한
        	if(e.columnid == "ALL_YN"){

        		// 전체권한 체크되었다면 해당 ROW 모든권한 체크 처리.
        		if( e.newvalue == "1" ){

        			var colId = "";
        			for(var i=0; i<this.dsMenuBtnAuthList.colcount; i++){
        				colId = this.dsMenuBtnAuthList.getColID(i);

        				// 컬럼ID 중에 "_YN"이 있다면 권한 컬럼으로 판단하고 체크 처리.
        				if(this.gfnIndexOf(colId, "_YN") == -1) continue;

        				this.dsMenuBtnAuthList.setColumn(e.row, colId, "1");
        			}
        		}
        		// 전체권한 체크해제.
        		else{
        			for(var i=0; i<this.dsMenuBtnAuthList.colcount; i++){
        				colId = this.dsMenuBtnAuthList.getColID(i);

        				// 컬럼ID 중에 "_YN"이 있다면 권한 컬럼으로 판단하고 체크해제 처리.
        				if(this.gfnIndexOf(colId, "_YN") == -1) continue;

        				this.dsMenuBtnAuthList.setColumn(e.row, colId, "0");
        			}
        		}
        	}
        	// 전체권한을 제외한 권한
        	else if( this.gfnIndexOf(e.columnid, "_YN") != -1 ){

        		var allChkFlag = true;

        		// 해당 ROW의 모든권한이 체크된경우 전체권한 체크 처리.
        		for(var i=0; i<this.dsMenuBtnAuthList.colcount; i++){
        			colId = this.dsMenuBtnAuthList.getColID(i);

        			if(this.gfnIndexOf(colId, "_YN") == -1 || colId == "ALL_YN") continue;

        			var chkValue = this.dsMenuBtnAuthList.getColumn(e.row, colId);

        			if( chkValue == "0" ) allChkFlag = false;
        		}


        		if(allChkFlag == true){
        			this.dsMenuBtnAuthList.setColumn(e.row, "ALL_YN", "1");
        		}else{
        			this.dsMenuBtnAuthList.setColumn(e.row, "ALL_YN", "0");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.edtAuthNm.addEventHandler("onkeydown",this.edtAuthNm_onkeydown,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.stTitleDetail00.addEventHandler("onclick",this.stTitleDetail_onclick,this);
            this.grd_Sub1.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsAuthList.addEventHandler("onrowposchanged",this.dsAuthList_onrowposchanged,this);
            this.dsMenuBtnAuthList.addEventHandler("oncolumnchanged",this.dsMenuBtnAuthList_oncolumnchanged,this);
        };

        this.loadIncludeScript("SYST_MNG_0030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
