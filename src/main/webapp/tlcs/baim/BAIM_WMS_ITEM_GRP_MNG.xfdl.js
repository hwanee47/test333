(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_WMS_ITEM_GRP_MNG");
            this.set_titletext("품목그룹관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">saveItemGrpList</Col><Col id=\"SERVICE_BEANNAME\">baimWmsItemGrpMgmtService</Col><Col id=\"SERVICE_METHOD\">saveItemGrpList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsItemGrpList=dsItemGrpList:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getItemGrpList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsItemGrpList=dsItemGrpList</Col><Col id=\"SERVICE_BEANNAME\">baimWmsItemGrpMgmtService</Col><Col id=\"SERVICE_METHOD\">getItemGrpList</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">deleteItemGrpList</Col><Col id=\"IN_DATASET_LIST\">dsItemGrpList=dsItemGrpList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimWmsItemGrpMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteItemGrpList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ITEM_GRP_CD\" size=\"256\" type=\"STRING\"/><Column id=\"DESC\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemGrpList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn_sc", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","44","80","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("4");
            obj.set_text("품목그룹코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtItemGrpCd_sc","108","43","110","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"466","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsItemGrpList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"115\"/><Column size=\"261\"/><Column size=\"131\"/><Column size=\"90\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"품목그룹코드\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"설명\"/><Cell col=\"4\" accessibilitydescription=\"T0199\" text=\"존\"/><Cell col=\"5\" accessibilitydescription=\"T0278\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ITEM_GRP_CD\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"none\" text=\"bind:DESCRIPT\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ZN_CD\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"none\" text=\"bind:USE_YN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsUseYn_sc\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUseYn_sc","606","43","111","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsUseYn_sc");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","545","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("6");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grd_Main:5","stSearch:3","430",null,null,"0",null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.getSetter("domainId").set("T2125");
            obj.set_tabbuttonheight("30");
            obj.set_text("기본정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("divTab1","0","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1429");
            obj.set_taborder("5");
            obj.set_text("품목그룹코드");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search00","119","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("6");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta03","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1726");
            obj.set_taborder("7");
            obj.set_text("설명");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search01","119","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("8");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta04","0","58","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1723");
            obj.set_taborder("9");
            obj.set_text("존");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search12","119","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("10");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta07","0","87","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1797");
            obj.set_taborder("11");
            obj.set_text("사용여부");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search03","119","87",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("12");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtZnCd","123","61","279","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_readonly("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchZn","402","61","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_search02");
            obj.set_taborder("3");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtItemGrpCd","123","3","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_password("false");
            obj.set_background("papayawhip");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtDesc","123","32","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("1");
            obj.set_password("false");
            obj.set_background("papayawhip");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","123","90","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsUseYn");
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtDesc_sc","280","43","240","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("8");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp01","245","44","80","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("11");
            obj.set_text("설명");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtItemGrpCd_sc","value","dsSearch","ITEM_GRP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtDesc_sc","value","dsSearch","DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboUseYn_sc","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.divTab1.form.edtItemGrpCd","value","dsItemGrpList","ITEM_GRP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage1.form.divTab1.form.edtDesc","value","dsItemGrpList","DESCRIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage1.form.divTab1.form.edtZnCd","value","dsItemGrpList","ZN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage1.form.divTab1.form.cboUseYn","value","dsItemGrpList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_WMS_ITEM_GRP_MNG.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_WMS_ITEM_GRP_MNG.xfdl", function() {
        /**
        *  품목그룹관리
        *  @MenuPath
        *  @FileName 		BAIM_WMS_ITEM_GRP_MNG.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.03.10
        *  @Desction        품목그룹관리
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.10		Kim Jin Hwan			최초 생성
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
        		// 조회
        		case "btnSearch" :
        			this.fnSearch();
        		break;

        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		// 신규
        		case "btnAdd":
        			this.fnAdd();
        		break;

        		// 삭제
        		case "btnDelete":
        			this.fnDelete();
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


        	this.dsItemGrpList.clearData();
        	this.gfnTransaction("getItemGrpList");

        };


        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 신규추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function() {

        	var nRow = this.dsItemGrpList.addRow();

        	this.dsItemGrpList.setColumn(nRow, "CHK", "1");
        	this.dsItemGrpList.setColumn(nRow, "USE_YN", "Y");

        	// 품목그룹코드 포커스
        	this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.setFocus();
        };



        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제처리.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsItemGrpList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("삭제할 행을 체크해주세요.");
        		return;
        	}


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("deleteItemGrpList");
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
        	if(this.dsItemGrpList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("저장할 행을 체크해주세요.");
        		return;
        	}


        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	var dsRowCount = this.dsItemGrpList.getRowCount();

        	for(var i=0; i<dsRowCount; i++){

        		var chkValue = this.dsItemGrpList.getColumn(i, "CHK");

        		// 체크되지않은 행은 스킵
        		if(chkValue != "1") continue;

        		var nRowType = this.dsItemGrpList.getRowType(i);

        		// 신규 또는 수정 행만 저장 처리
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}


        		var itemGrpCdValue = this.dsItemGrpList.getColumn(i, "ITEM_GRP_CD");
        		var descriptValue = this.dsItemGrpList.getColumn(i, "DESCRIPT");


        		// 품목그룹코드
        		if(this.gfnIsNull(itemGrpCdValue)){
        			this.gfnAlert((i+1)+"행의 품목그룹코드를 입력해주세요.");
        			this.dsItemGrpList.set_rowposition(i);
        			this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.setFocus(true);
        			return;
        		}

        		// 설명
        		if(this.gfnIsNull(descriptValue)){
        			this.gfnAlert((i+1)+"행의 설명을 입력해주세요.");
        			this.dsItemGrpList.set_rowposition(i);
        			this.tab00.Tabpage1.form.divTab1.form.edtDesc.setFocus(true);
        			return;
        		}


        	}

        	/****************************************************************************************************/


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveItemGrpList");
        	});


        };


        /***********************************************************************************************
         * @function	: fnConfirmCallback
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: dsObj		- nexacro.NormalDataset
         * @return N/A
         ***********************************************************************************************/
        this.fnConfirmCallback = function(sPopupId, rtnMsg)
        {
        	trace(rtnMsg);
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
        		case "saveItemGrpList" :
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;


        		// 삭제
        		case "deleteItemGrpList" :
        			this.fnSearch();
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

        		case "znPop1" :
        			this.tab00.Tabpage1.form.divTab1.form.edtZnCd.set_value(dsObj.getColumn(0,"ZN_CD"));


        		break;

        		case "itemGrpPop1":
        			this.edtItemGrpCd_sc.set_value(dsObj.getColumn(0,"ITEM_GRP_CD"));
        			this.edtDesc_sc.set_value(dsObj.getColumn(0,"DESCRIPT"));

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
        		case "btnOpenPopSearchItemGrp" 	:	this.fnOpenPopItemGrp(); break;
        		case "btnOpenPopSearchZn" 		:	this.fnOpenPopZn(); break;

        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function		: fnOpenPopZn
         * @description		: 존 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopZn = function()
        {
        	// 파라미터 설정
        	var popupId = "znPop1";	//팝업ID
        	var pZnCdValue = this.tab00.Tabpage1.form.divTab1.form.edtZnCd.value;



        	// 팝업 호출
        	var oArg = {
        				  pZnCd      : pZnCdValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P020.xfdl", oArg, sPopupCallBack, oOption);
        }



        /***********************************************************************************************
         * @function		: fnOpenPopZn
         * @description		: 존 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopItemGrp = function()
        {
        	// 파라미터 설정
        	var popupId = "itemGrpPop1";	//팝업ID
        	var pItemGrpCdValue = this.edtItemGrpCd_sc.value;
        	var pDescriptValue = this.edtDesc_sc.value;


        	// 팝업 호출
        	var oArg = {
        				  pItemGrpCd    : pItemGrpCdValue
        				, pDescript     : pDescriptValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P070.xfdl", oArg, sPopupCallBack, oOption);
        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.dsItemList_onrowposchanged = function(obj,e)
        {

        	this.fnSetReadonlyComp(e.newrow);
        };


        // 컴포넌트 활성화/비활성화처리
        this.fnSetReadonlyComp = function(nRow)
        {

        	var nRowType = this.dsItemGrpList.getRowType(nRow);

        	// 신규
        	if(nRowType == Dataset.ROWTYPE_INSERT){

        		this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.set_readonly(false);	// 품목그룹코드



        	}
        	// 신규아닐때
        	else{

        		this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.set_readonly(true);	// 품목그룹코드

        	}

        }

        // 그리드 헤더 클릭
        this.grdOnHeadClick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
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
        			case	'edtZnCd' : this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchZn.click(); break;

        			case	'edtItemGrpCd_sc' 	: this.btnOpenPopSearchItemGrp.click(); break;
        			case	'edtDesc_sc' 		: this.btnOpenPopSearchItemGrp.click(); break;
        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {

        			case	'edtItemGrpCd_sc' : this.edtDesc_sc.set_value(""); break;
        			case	'edtDesc_sc' : this.edtItemGrpCd_sc.set_value(""); break;

        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.edtItemGrpCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.cboUseYn_sc.addEventHandler("canitemchange",this.cboZnDv_canitemchange,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.edtZnCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchZn.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.divTab1.form.cboUseYn.addEventHandler("ondropdown",this.tabUserInfo_Tabpage1_div00_cboJoinType_ondropdown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboUseYn.addEventHandler("onitemchanged",this.tabUserInfo_Tabpage1_div00_cboJoinType_onitemchanged,this);
            this.edtDesc_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsItemGrpList.addEventHandler("onrowposchanged",this.dsItemList_onrowposchanged,this);
        };

        this.loadIncludeScript("BAIM_WMS_ITEM_GRP_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
