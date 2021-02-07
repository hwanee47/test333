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
            this.set_name("BAIM_BAIM_P030");
            this.set_titletext("발송고객조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,384);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" size=\"256\" type=\"STRING\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_keystring("G:MNG");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"SEND_CUST_NO\" size=\"256\" type=\"STRING\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TOTAL_CELL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"SEND_CUST_NO\" size=\"256\" type=\"STRING\"/><Column id=\"SEND_CUST_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getSendCustInfoList</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\">q1=baimSendCustMgmtService.getSendCustInfoList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("0");
            obj.set_text("발송고객조회");
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

            obj = new Static("staUserNm00","217","43","74","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("4");
            obj.set_text("발송고객코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNo_sc","297","44","100","20",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00_00","413","42","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("6");
            obj.set_text("발송고객명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNm_sc","481","43","139","20",null,null,null,null,null,null,this);
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

            obj = new Grid("grdEntrpCust","10","85",null,null,"10","14",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("9");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"105\"/><Column size=\"100\"/><Column size=\"232\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO.\"/><Cell col=\"1\" accessibilitydescription=\"T0190\" text=\"발송고객명\"/><Cell col=\"2\" accessibilitydescription=\"T0927\" text=\"협력사코드\"/><Cell col=\"3\" accessibilitydescription=\"T0617\" text=\"발송고객번호\"/><Cell col=\"4\" accessibilitydescription=\"T0716\" text=\"정산처구분\"/><Cell col=\"5\" accessibilitydescription=\"T1099\" text=\"고객주소\"/><Cell col=\"6\" accessibilitydescription=\"T0947\" text=\"전화번호\"/><Cell col=\"7\" accessibilitydescription=\"T0947\" text=\"휴대폰\"/><Cell col=\"8\" accessibilitydescription=\"T0947\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:SEND_CUST_NM\"/><Cell col=\"2\" text=\"bind:CUST_MGMT_DLCM_CD\"/><Cell col=\"3\" text=\"bind:SEND_CUST_NO\" displaytype=\"normal\" combodataset=\"dsCpDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"4\" text=\"bind:CAL_CP_DV\" combodataset=\"dsCalCpDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:TOTAL_ADDR\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"dsBranSt\" displaytype=\"normal\"/><Cell col=\"6\" text=\"bind:TOTAL_TEL_NO\" combodataset=\"dsCpDv\" combodatacol=\"CD_NM\" combocodecol=\"CD\" displaytype=\"normal\"/><Cell col=\"7\" text=\"bind:TOTAL_CELL_NO\" combodataset=\"dsCpDv\" combodatacol=\"CD_NM\" combocodecol=\"CD\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:ZIP_NO\" combodataset=\"dsCpDv\" combodatacol=\"CD_NM\" combocodecol=\"CD\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","76","42","124","23",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","960","62","100","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","15","43","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("12");
            obj.set_text("기업고객");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice",null,"43","67","23","14",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("13");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,384,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSendCustNo_sc","value","dsSearch","SEND_CUST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtSendCustNm_sc","value","dsSearch","SEND_CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_P060.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_P060.xfdl", function() {
        /**
        *  기업고객 조회 팝업
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_P020.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.02.13
        *  @Desction        기업고객 조회 팝업
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.13		Kim Jin Hwan			최초 생성
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

        	// 발송고객코드, 발송고객명 둘중 하나라도 있으면 조회처리.
        	var edtCustIdValue = this.edtCustId_sc.value;
        	var edtSendCustNoValue = this.edtSendCustNo_sc.value;
        	var edtSendCustNmValue = this.edtSendCustNm_sc.value;

        	if( !this.gfnIsNull(edtCustIdValue) || !this.gfnIsNull(edtSendCustNoValue) || !this.gfnIsNull(edtSendCustNmValue) ){
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
        	// 점소구분, 회사구분, 점소상태
        	this.gfnTransaction("commonCode");


        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "CUST_ID", this.getOwnerFrame().pCustId);
        	this.dsSearch.setColumn(0, "CUST_NM", this.getOwnerFrame().pCustNm);
        	this.dsSearch.setColumn(0, "SEND_CUST_NO", this.getOwnerFrame().pSendCustNo);
        	this.dsSearch.setColumn(0, "SEND_CUST_NM", this.getOwnerFrame().pSendCustNm);


        	// 발송고객명 포커스
        	this.edtSendCustNm_sc.setFocus();
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

        this.fnChoise = function()
        {
        	var row = this.dsList.rowposition;
        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.fnReturnClose(row);
        	}
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

        	var edtSendCustNo_scValue = this.edtSendCustNo_sc.value;
        	var edtSendCustNm_scValue = this.edtSendCustNm_sc.value;

        	/** 조회조건 필수입력 체크********************************************************/
        	/*if( this.gfnIsNull(edtSendCustNo_scValue) && this.gfnIsNull(edtSendCustNm_scValue) ){
        		this.gfnAlert("발송고객코드 또는 발송고객명을 입력해주세요.");

        		if( this.gfnIsNull(edtSendCustNo_scValue) ){
        			this.edtSendCustNo_sc.setFocus();
        			return;
        		}

        		return;
        	}*/

        	/************************************************************************************/

        	this.gfnTransaction("getSendCustInfoList");
        };


        this.Edit_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		obj.updateToDataset();	// 데이터셋에 변경값 적용.
        		this.fnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.edtSendCustNo_sc.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.edtSendCustNm_sc.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.grdEntrpCust.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
            this.btnChoice.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("BAIM_BAIM_P060.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
