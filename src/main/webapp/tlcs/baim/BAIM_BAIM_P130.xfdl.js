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
            this.set_name("BAIM_BAIM_P130");
            this.set_titletext("창고고객권한");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"WAREH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_NM\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">getAuthList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch ds2=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsCustAuthListBefore=ds1 dsCustAuthListAfter=ds2</Col><Col id=\"QUERY_LIST\">q1=baimUserMgmtService.getCustAuthListBefore q2=baimUserMgmtService.getCustAuthListAfter</Col></Row><Row><Col id=\"SVC_ID\">insertCustAuthList</Col><Col id=\"IN_DATASET_LIST\">dsCustAuthListBefore=dsCustAuthListBefore:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">insertCustAuthList</Col></Row><Row><Col id=\"SVC_ID\">deleteCustAuthList</Col><Col id=\"IN_DATASET_LIST\">dsCustAuthListAfter=dsCustAuthListAfter:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteCustAuthList</Col></Row><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustAuthListBefore", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustAuthListAfter", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","101","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("0");
            obj.set_text("창고고객권한  -");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle","19","33","110","31",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("6");
            obj.set_text("창고고객권한리스트");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddCustAuth","610","211","30","29",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_background("url(\'img::btn_CalNext_P.png\') no-repeat");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteCustAuth","610","271","30","29",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_background("url(\'img::btn_CalPrev_P.png\') no-repeat");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00","664","33","236","31",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("7");
            obj.set_text("사용자 창고고객권한리스트");
            this.addChild(obj.name, obj);

            obj = new Static("staUserId","sta01:5","6","124","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("txt_search01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd1","10","stTitle:1","585",null,null,"10",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("8");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsCustAuthListBefore");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"92\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"297\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"고객사코드\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"고객사명\"/><Cell col=\"4\" accessibilitydescription=\"T0588\" text=\"고객사구분\" displaytype=\"normal\"/><Cell col=\"5\" accessibilitydescription=\"T0588\" text=\"주소\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:CUST_ID\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"combotext\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CP_DV\" textAlign=\"center\" combodataset=\"dsCpDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ADDR\" textAlign=\"left\" autosizecol=\"default\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd2","655","65",null,null,"10","10",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("9");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsCustAuthListAfter");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"92\"/><Column size=\"112\"/><Column size=\"80\"/><Column size=\"297\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"고객사코드\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"고객사명\"/><Cell col=\"4\" accessibilitydescription=\"T0386\" text=\"고객사코드\"/><Cell col=\"5\" accessibilitydescription=\"T0588\" text=\"주소\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:CUST_ID\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:CP_DV\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsCpDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ADDR\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1250,480,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_P130.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_P130.xfdl", function() {
        /**
        *  창고고객권한 부여 팝업
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_P130.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.07.13
        *  @Desction        창고고객권한 부여 팝업
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.07.13		Kim Jin Hwan			최초 생성
        ************************************************************************************************
        */


         this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

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


        	// 조회
        	this.fnSearch();
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

        	this.staUserId.set_text(this.getOwnerFrame().pUserId);
        	this.dsSearch.setColumn(0, "USER_ID", this.getOwnerFrame().pUserId);
        };



        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

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
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 컴포넌트 초기화
        			this.fnCompInit();

        		break;

        		// 조회
        		case "getAuthList" :
        			this.grd1.setCellProperty("head", this.grd1.getBindCellIndex("body", "CHK"), "text", '0');
        			this.grd2.setCellProperty("head", this.grd2.getBindCellIndex("body", "CHK"), "text", '0');
        		break;

        		// 권한 추가
        		case "insertCustAuthList":
        			this.fnSearch();
        		break;

        		// 권한 삭제
        		case "deleteCustAuthList":
        			this.fnSearch();
        		break;

        		default :
        		break;
        	}
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
         * @function	: fnAfterCodeDef
         * @description	: 코드조회후 선택,전체 추가
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCodeDef = function(dsObj, strText) {
        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM', strText);
        }


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {

        	/** 조회조건 필수입력 체크********************************************************/
        	/*if( this.gfnIsNull(edtBranCdValue) && this.gfnIsNull(edtBranNmValue) ){
        		this.gfnAlert("점소코드 또는 점소명 입력해주세요.");

        		if( this.gfnIsNull(edtBranCdValue) ){
        			this.edtBranCd.setFocus();
        			return;
        		}

        		return;
        	}*/

        	/************************************************************************************/

        	this.gfnTransaction("getAuthList");
        };

        this.fnChoise = function()
        {
        	var row = this.dsList.rowposition;
        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.fnReturnClose(row);
        	}
        }



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description popup close
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };



        /***********************************************************************************************
         * @function	: gridCellDbClick
         * @description	: button onClick event
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.gridCellDbClick = function(obj,e)
        {
        	var row = e.row;
        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.fnReturnClose(row);
        	}
        };


        /***********************************************************************************************
         * @function	: fnReturnClose
         * @description	:
         * @param		: obj	- nexacro.Edit
         * @return N/A
        /***********************************************************************************************/
        this.fnReturnClose = function(row) {

        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.dsResult.clearData();
        		this.dsResult.copyRow(this.dsResult.addRow(), this.dsList, row);

        		var json = {
        			ds : this.dsResult.saveXML(),
        			callFn : this.getOwnerFrame().callbackFn
        		}

        		this.close(JSON.stringify(json));
        	}
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

        		// 고객권한추가
        		case "btnAddCustAuth":
        			this.fnAddCustAuth();
        		break;

        		// 고객권한삭제
        		case "btnDeleteCustAuth":
        			this.fnDeleteCustAuth();
        		break;


        		default :
        		break;
        	}
        };


         /***********************************************************************************************
         * @function	: fnAddCustAuth
         * @description	: 고객권한 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCustAuth = function()
        {

        	//chk된 항목이 있는지 확인.
        	if(this.dsCustAuthListBefore.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("추가할 고객을 체크해주세요.");
        		return;
        	}

        	this.gfnCustomConfirm("추가하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("insertCustAuthList");

        	});

        }


         /***********************************************************************************************
         * @function	: fnDeleteCustAuth
         * @description	: 고객권한 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteCustAuth = function()
        {

        	//chk된 항목이 있는지 확인.
        	if(this.dsCustAuthListAfter.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("삭제할 고객을 체크해주세요.");
        		return;
        	}


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("deleteCustAuthList");

        	});

        }


        // 그리드 헤더 클릭
        this.grdOnHeadClick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
        };
        this.sta01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnAddCustAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDeleteCustAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.grd1.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd2.addEventHandler("onheadclick",this.grdOnHeadClick,this);
        };

        this.loadIncludeScript("BAIM_BAIM_P130.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
