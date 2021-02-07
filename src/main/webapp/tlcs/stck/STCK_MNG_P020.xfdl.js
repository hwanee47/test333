(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("STCK_MNG_P010");
            this.set_titletext("품목조회");
            this.set_cssclass("bg_pop01");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,384);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_keystring("G:MNG");
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPLIER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"MFER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">getItemInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\">q1=stckMgmtService.getItemInfoList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj.set_keystring("G:MNG");
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"SUPPLIER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"MFER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"REM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("staUserNm00","15","43","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("4");
            obj.set_text("품목코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemCd","80","44","100","20",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00_00","193","42","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("6");
            obj.set_text("품목명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemNm","248","43","100","20",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"43","60","23","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_taborder("8");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBran","10","85",null,null,"10","14",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("9");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"131\"/><Column size=\"100\"/><Column size=\"139\"/><Column size=\"128\"/><Column size=\"104\"/><Column size=\"78\"/><Column size=\"159\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO.\"/><Cell col=\"1\" accessibilitydescription=\"T0190\" text=\"품목코드\"/><Cell col=\"2\" accessibilitydescription=\"T0927\" text=\"품목명\"/><Cell col=\"3\" accessibilitydescription=\"T0617\" text=\"화주ID\"/><Cell col=\"4\" accessibilitydescription=\"T0716\" text=\"설명\"/><Cell col=\"5\" accessibilitydescription=\"T1099\" text=\"공급사ID\"/><Cell col=\"6\" accessibilitydescription=\"T0947\" text=\"품목그룹코드\"/><Cell col=\"7\" text=\"품목유형코드\"/><Cell col=\"8\" text=\"제조사ID\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:ITEM_CD\"/><Cell col=\"2\" text=\"bind:ITEM_NM\"/><Cell col=\"3\" text=\"bind:SHIPPER_ID\"/><Cell col=\"4\" text=\"bind:DESCRIPT\" combodataset=\"dsBranDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:SUPPLIER_ID\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"dsBranSt\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:ITEM_GRP_CD\" combodataset=\"dsCpDv\" combodatacol=\"CD_NM\" combocodecol=\"CD\" displaytype=\"combotext\"/><Cell col=\"7\" text=\"bind:ITEM_TCD\"/><Cell col=\"8\" text=\"bind:MFER_ID\"/><Cell col=\"9\" text=\"bind:REM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,384,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtItemCd","value","dsSearch","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtItemNm","value","dsSearch","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("STCK_MNG_P020.xfdl","lib::lib_Form.xjs");
        this.registerScript("STCK_MNG_P020.xfdl", function() {
        /**
        *  점소 조회 팝업
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_P010.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.02.05
        *  @Desction        점소 조회 팝업
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.05		Kim Jin Hwan			최초 생성
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

        	// 점소코드, 점소명 둘중 하나라도 있으면 조회처리.
        	var edtItemCdValue = this.edtItemCd.value;
        	var edtItemNmValue = this.edtItemNm.value;

        	if( !this.gfnIsNull(edtItemCdValue) || !this.gfnIsNull(edtItemNmValue) ){
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

        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "ITEM_CD", this.getOwnerFrame().pItemCd);
        	this.dsSearch.setColumn(0, "ITEM_NM", this.getOwnerFrame().pItemNm);

        	trace("ITEM_CD :: "+this.getOwnerFrame().pItemCd);
        	trace("ITEM_NM :: "+this.getOwnerFrame().pItemNm);
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
        	//this.gfnTransaction("commonCode");


        	// 점소코드에 포커스
        	this.edtItemCd.setFocus();
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


        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 품목 리스트 조회
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	var edtItemCdValue = this.edtItemCd.value;	//품목코드
        	var edtItemNmValue = this.edtItemNm.value;	//품목명

        	/** 조회조건 필수입력 체크********************************************************/
        	if( this.gfnIsNull(edtItemCdValue) && this.gfnIsNull(edtItemNmValue) ){
        		this.gfnAlert("품목코드 또는 품목명 입력해주세요.");

        		if( this.gfnIsNull(edtItemCdValue) ){
        			this.edtItemCd.setFocus();
        			return;
        		}

        		return;
        	}

        	/************************************************************************************/

        	trace(this.dsSearch.saveXML());

        	this.gfnTransaction("getItemInfoList");
        };


        this.edtItemCd_onkeydown = function(obj,e)
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
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.edtItemCd.addEventHandler("onkeydown",this.edtItemCd_onkeydown,this);
            this.edtItemNm.addEventHandler("onkeydown",this.edtItemCd_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.grdBran.addEventHandler("onheaddblclick",this.grdKfrCtEqp_onheaddblclick,this);
            this.grdBran.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
        };

        this.loadIncludeScript("STCK_MNG_P020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
