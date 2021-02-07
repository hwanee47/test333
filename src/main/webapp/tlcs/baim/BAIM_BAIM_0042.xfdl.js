(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_BAIM_0042");
            this.set_titletext("고객사현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsDv=ds1 dsCpDv=ds2</Col><Col id=\"QUERY_LIST\">q1=SM012 q2=MS005</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getCustInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=baimEntrpCustMgmtService.getCustInfoTreeList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOM_SORT\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDv", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_search","0","35",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stc_search:3",null,null,"30","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"80\"/><Column size=\"65\"/><Column size=\"65\"/><Column size=\"390\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"고객사명\"/><Cell col=\"1\" text=\"고객사코드\"/><Cell col=\"2\" text=\"고객사구분1\"/><Cell col=\"3\" text=\"고객사구분2\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"전화번호\"/></Band><Band id=\"body\"><Cell text=\"bind:CUST_NM\" treelevel=\"bind:LEVEL\" displaytype=\"treeitemcontrol\" edittype=\"tree\"/><Cell col=\"1\" text=\"bind:CUST_ID\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:CP_DV\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsCpDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" text=\"bind:CUST_DV\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"4\" text=\"bind:FULL_ADDR\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:TEL_NO\" edittype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("5");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","45","54","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("7");
            obj.set_text("고객사명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","325","44","106","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","83","44","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","255","45","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("8");
            obj.set_text("고객사코드");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtBranCd","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtBranNm","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0042.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0042.xfdl", function() {
        /**
        *  점소현황
        *  @MenuPath
        *  @FileName		BAIM_BAIM_0025.xfdl
        *  @Creator			KJH
        *  @CreateDate		2020.07.23
        *  @Desction		등록된 점소조회하는 화면
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.07.23		KJH				최초 생성
        ************************************************************************************************
        */

        /**************************************************************************************************************************************
        * include 선언부
        ***************************************************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;


        /**************************************************************************************************************************************
        * FORM 변수 선언 영역
        ***************************************************************************************************************************************/
         this.objApp;


         /***********************************************************************************************
         * @function	: form_onload
         * @description	: FORM 온로드
         * @param		: obj 	- nexacro.Form
         * @param		: e 	- nexacro.LoadEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// nexacro application
        	this.objApp = nexacro.getApplication() ;

        	// 화면 공통 기능 처리
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
        	// 공통코드 조회
        	this.gfnTransaction("commonCode");
        };


        /**************************************************************************************************************************************
        * 공통버튼 FUNCTION
        ***************************************************************************************************************************************/
        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 권한리스트 조회.
         * @param	N/A
         * @return	N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	this.gfnTransaction("getCustInfoList");
        };


        /**************************************************************************************************************************************
        * USER FUNCTION
        ***************************************************************************************************************************************/
        /***********************************************************************************************
         * @function	: fnSearchDetailList
         * @description	: 권한 상세리스트 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchDetailList = function()
        {

        };


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
        		case "btnSearchAddr" :	this.fnOpenPopAddr(); break;
        		default 		: 	break;
        	}
        };


        /***********************************************************************************************
         * @function		: fnOpenPopAddr
         * @description		: 우편번호 주소 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopAddr = function()
        {
        	// 파라미터 설정
        	var popupId = 'popSearchAddr';	//팝업ID

        	var zipNo = this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value;
        	var addr = this.tab00.Tabpage1.form.divTab1.form.edtAddr.value;
        	var zipAddrDv = '';



        	// 도로명
        	if( this.gfnTrim(zipNo).length == "5" ){
        		zipAddrDv = "02";
        	}
        	// 지번
        	else{
        		zipAddrDv = "01";
        	}


        	// 팝업 호출
        	var oArg = {
        				  pZipNo		: zipNo
        				, pAddr			: addr
        				, pZipAddrDv	: zipAddrDv
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P100.xfdl", oArg, sPopupCallBack, oOption);
        }



        /**************************************************************************************************************************************
        * 각 COMPONENT 별 FUNCTION
        ***************************************************************************************************************************************/
        /***********************************************************************************************
         * @function	: dsAuthList_onrowposchanged
         * @description	: rowposition changed
         * @param		: obj - nexacro.NormalDataset
         * @param		: e	  - nexacro.DSRowPosChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsAuthList_onrowposchanged = function(obj,e)
        {

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


        /**************************************************************************************************************************************
        * 콜백 FUNCTION
        ***************************************************************************************************************************************/
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
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 컴포넌트 초기화
        			this.fnCompInit();

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

        		case "popSearchAddr" :
        			this.tab00.Tabpage1.form.divTab1.form.mskZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));	// 우편번호
        			this.tab00.Tabpage1.form.divTab1.form.edtAddr.set_value(dsObj.getColumn(0,"ADDR"));		// 주소

        		break;

        		case "warehPop1" :
        			this.edtWarehCd_sc.set_value(dsObj.getColumn(0,"WAREH_CD"));
        			this.edtWarehNm_sc.set_value(dsObj.getColumn(0,"WAREH_NM"));
        		break;

        		default :
        		break;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0042.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
