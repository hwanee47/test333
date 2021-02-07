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
            this.set_name("BAIM_WMS_P050");
            this.set_titletext("품목조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,384);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SHIPPER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SHIPPER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_keystring("G:MNG");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"HS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_BARCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"LEN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"WT\" type=\"STRING\" size=\"256\"/><Column id=\"VOL\" type=\"STRING\" size=\"256\"/><Column id=\"LEN_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WT_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VDT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"VDT_PERIOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SHIPPER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SHIPPER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"QUERY_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getItemListPop</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\">q1=baimWmsItemMgmtService.getItemListPop</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("0");
            obj.set_text("품목조회");
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

            obj = new Static("staSearchArea","0","34",null,"40","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00","345","43","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("4");
            obj.set_text("품목코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd_sc","410","44","100","20",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00_00","543","42","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("6");
            obj.set_text("품목명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm_sc","598","43","100","20",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"43","68","23","86",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grdItem","10","85",null,null,"10","14",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("9");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"83\"/><Column size=\"113\"/><Column size=\"83\"/><Column size=\"113\"/><Column size=\"125\"/><Column size=\"159\"/><Column size=\"200\"/><Column size=\"94\"/><Column size=\"66\"/><Column size=\"66\"/><Column size=\"66\"/><Column size=\"66\"/><Column size=\"66\"/><Column size=\"66\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO.\"/><Cell col=\"1\" accessibilitydescription=\"T0190\" text=\"고객코드\"/><Cell col=\"2\" accessibilitydescription=\"T0927\" text=\"고객명\"/><Cell col=\"3\" accessibilitydescription=\"T0190\" text=\"품목그룹코드\"/><Cell col=\"4\" accessibilitydescription=\"T0927\" text=\"품목그룹명\"/><Cell col=\"5\" accessibilitydescription=\"T0190\" text=\"품목코드\"/><Cell col=\"6\" accessibilitydescription=\"T0927\" text=\"품목명\"/><Cell col=\"7\" accessibilitydescription=\"T0617\" text=\"설명\"/><Cell col=\"8\" accessibilitydescription=\"T0617\" text=\"관리단위\"/><Cell col=\"9\" accessibilitydescription=\"T0617\" text=\"높이\"/><Cell col=\"10\" accessibilitydescription=\"T0617\" text=\"너비\"/><Cell col=\"11\" accessibilitydescription=\"T0617\" text=\"길이\"/><Cell col=\"12\" accessibilitydescription=\"T0617\" text=\"깊이\"/><Cell col=\"13\" accessibilitydescription=\"T0617\" text=\"무게\"/><Cell col=\"14\" accessibilitydescription=\"T0617\" text=\"부피\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:SHIPPER_ID\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"2\" text=\"bind:SHIPPER_NM\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"3\" text=\"bind:ITEM_GRP_CD\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"4\" text=\"bind:ITEM_GRP_NM\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"5\" text=\"bind:ITEM_CD\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"6\" text=\"bind:ITEM_NM\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"7\" text=\"bind:DESCRIPT\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"8\" text=\"bind:MGMT_UNIT\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\" textAlign=\"left\" suppress=\"0\"/><Cell col=\"9\" text=\"bind:HEIGHT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:WIDTH\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:LEN\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:DEPTH\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:WT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:VOL\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtShipperNm_sc","170","44","140","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchCust","146","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtShipperId_sc","56","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","15","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("13");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice",null,"43","67","23","14",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("14");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,384,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtShipperId_sc","value","dsSearch","SHIPPER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtShipperNm_sc","value","dsSearch","SHIPPER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtItemCd_sc","value","dsSearch","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtItemNm_sc","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_WMS_P050.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_WMS_P050.xfdl", function() {
        /**
        *  품목 조회 팝업
        *  @MenuPath
        *  @FileName 		BAIM_WMS_P050.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.03.09
        *  @Desction        품목 조회 팝업
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.09		Kim Jin Hwan			최초 생성
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

        	// 코드, 명 둘중 하나라도 있으면 조회처리.
        	var edtItemCd_scValue = this.edtItemCd_sc.value;
        	var edtItemNm_scValue = this.edtItemNm_sc.value;

        	if( !this.gfnIsNull(edtItemCd_scValue) || !this.gfnIsNull(edtItemNm_scValue) ){
        		this.fnSearch();
        	}
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
        	//this.gfnTransaction("commonCode");


        	// 명에 포커스
        	this.edtItemNm_sc.setFocus();


        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "ITEM_CD", this.getOwnerFrame().pItemCd);
        	this.dsSearch.setColumn(0, "ITEM_NM", this.getOwnerFrame().pItemNm);

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


        		// 조회
        		case "getItemListPop":
        			this.grdItem.setFocus();
        		break;


        		// 고객 조회조건 처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "SHIPPER_ID", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsSearch.setColumn(0, "SHIPPER_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnOpenPopSearchCust.click();
        			}

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

        	this.gfnTransaction("getItemListPop");
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
        		// 조회
        		case "btnSearch" :
        			this.fnSearch();
        		break;

        		// 선택
        		case "btnChoice" :
        			this.fnChoise();
        		break;

        		default :
        		break;
        	}
        };

        this.edtWarehCd_sc_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		obj.updateToDataset();	// 데이터셋에 변경값 적용.
        		this.fnSearch();
        	}
        };

        this.edtWarehNm_sc_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		obj.updateToDataset();	// 데이터셋에 변경값 적용.
        		this.fnSearch();
        	}
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
        			case	'edtShipperId_sc' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtShipperNm_sc' : this.gfnTransaction("getCustInfo"); break;

        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtShipperId_sc' : this.edtShipperNm_sc.set_value(); break;
        			case	'edtShipperNm_sc' : this.edtShipperId_sc.set_value(); break;

        		}
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
        		case "btnOpenPopSearchCust" :	this.fnOpenPopSearchCust(); break;
        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function		: fnOpenPopSearchCust
         * @description		: 고객 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopSearchCust = function()
        {
        	// 파라미터 설정
        	var popupId = 'custPop1';	//팝업ID
        	var pCustIdValue = this.edtShipperId_sc.value;	// 고객번호
        	var pCustNmValue = this.edtShipperNm_sc.value;	// 고객명


        	// 팝업 호출
        	var oArg = {
        				  pCustId		: pCustIdValue									// 고객번호
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
        }



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

        		case "custPop1":
        			this.dsSearch.setColumn(0, "SHIPPER_ID", dsObj.getColumn(0,"CUST_ID"));
        			this.dsSearch.setColumn(0, "SHIPPER_NM", dsObj.getColumn(0,"CUST_NM"));

        		break;


        		default :
        		break;
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.edtItemCd_sc.addEventHandler("onkeydown",this.edtWarehCd_sc_onkeydown,this);
            this.edtItemNm_sc.addEventHandler("onkeydown",this.edtWarehNm_sc_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.grdItem.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
            this.edtShipperNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnOpenPopSearchCust.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtShipperId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnChoice.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("BAIM_WMS_P050.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
