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
            this.set_name("BAIM_BAIM_P010");
            this.set_titletext("점소조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(840,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_keystring("G:MNG");
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_ABRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_OPR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_MGMT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_OPR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_MGMT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_ST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsBranDv=ds1 dsCpDv=ds2 dsBranSt=ds3</Col><Col id=\"QUERY_LIST\">q1=MS002 q2=MS005 q3=MS052</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getBranInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\">q1=baimBranMgmtService.getBranInfoList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBranDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBranSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("0");
            obj.set_text("점소");
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

            obj = new Static("staSearchArea","0","34",null,"72","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00","15","43","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("4");
            obj.set_text("점소코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","80","44","100","20",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00_00","215","43","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("6");
            obj.set_text("점소명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","268","44","142","20",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00_01","15","73","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("8");
            obj.set_text("점소구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboBranDv","80","73","100","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("dsBranDv");
            obj.set_taborder("9");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCpDv","268","73","100","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("dsCpDv");
            obj.set_taborder("10");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00_01_00","204","73","66","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0617");
            obj.set_taborder("11");
            obj.set_text("회사구분");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"73","68","23","86",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_taborder("12");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBran","10","120",null,null,"10","14",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("13");
            obj.set_scrolltype("both");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"129\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO.\"/><Cell col=\"1\" accessibilitydescription=\"T0190\" text=\"점소코드\"/><Cell col=\"2\" accessibilitydescription=\"T0927\" text=\"점소명\"/><Cell col=\"3\" accessibilitydescription=\"T0617\" text=\"점소명(약칭)\"/><Cell col=\"4\" accessibilitydescription=\"T0716\" text=\"구분\"/><Cell col=\"5\" accessibilitydescription=\"T1099\" text=\"상태\"/><Cell col=\"6\" accessibilitydescription=\"T0059\" text=\"영업종료일\"/><Cell col=\"7\" accessibilitydescription=\"T0947\" text=\"회사구분\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:BRAN_CD\"/><Cell col=\"2\" text=\"bind:BRAN_NM\"/><Cell col=\"3\" text=\"bind:BRAN_ABRV_NM\"/><Cell col=\"4\" text=\"bind:BRAN_DV\" combodataset=\"dsBranDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" displaytype=\"combotext\"/><Cell col=\"5\" text=\"bind:BRAN_ST\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combodataset=\"dsBranSt\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:SALE_END_YMD\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:CP_DV\" combodataset=\"dsCpDv\" combodatacol=\"CD_NM\" combocodecol=\"CD\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice",null,"73","67","23","14",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("14");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",840,430,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtBranCd","value","dsSearch","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtBranNm","value","dsSearch","BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboBranDv","value","dsSearch","BRAN_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboCpDv","value","dsSearch","CP_DV");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_P010.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_P010.xfdl", function() {
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
        	var edtBranCdValue = this.edtBranCd.value;
        	var edtBranNmValue = this.edtBranNm.value;

        	if( !this.gfnIsNull(edtBranCdValue) || !this.gfnIsNull(edtBranNmValue) ){
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
        	this.dsSearch.setColumn(0, "BRAN_CD", this.getOwnerFrame().pBranCd);
        	this.dsSearch.setColumn(0, "BRAN_NM", this.getOwnerFrame().pBranNm);


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


        	// 점소코드에 포커스
        	this.edtBranCd.setFocus();
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
        		case "getBranInfoList":
        			this.grdBran.setFocus();
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
        	this.fnAddCodeDef(this.dsBranDv, '전체');
        	this.cboBranDv.set_index(0);

        	this.fnAddCodeDef(this.dsCpDv, '전체');
        	this.cboCpDv.set_index(0);
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
         * @description	: 점소 정보 리스트 조회
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	var edtBranCdValue = this.edtBranCd.value;	//점소코드
        	var edtBranNmValue = this.edtBranNm.value;	//점소명

        	/** 조회조건 필수입력 체크********************************************************/
        	/* 임시주석 (2020.07.13)
        	if( this.gfnIsNull(edtBranCdValue) && this.gfnIsNull(edtBranNmValue) ){
        		this.gfnAlert("점소코드 또는 점소명 입력해주세요.");

        		if( this.gfnIsNull(edtBranCdValue) ){
        			this.edtBranCd.setFocus();
        			return;
        		}

        		return;
        	}*/

        	/************************************************************************************/



        	this.gfnTransaction("getBranInfoList");
        };


        this.edtBranCd_onkeydown = function(obj,e)
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
            this.edtBranCd.addEventHandler("onkeydown",this.edtBranCd_onkeydown,this);
            this.edtBranNm.addEventHandler("onkeydown",this.edtBranCd_onkeydown,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.grdBran.addEventHandler("onheaddblclick",this.grdKfrCtEqp_onheaddblclick,this);
            this.grdBran.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
            this.btnChoice.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("BAIM_BAIM_P010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
