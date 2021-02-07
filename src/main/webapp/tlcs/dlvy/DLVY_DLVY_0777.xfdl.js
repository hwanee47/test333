(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLVY_DLVY_0777");
            this.set_titletext("작업지시");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCrgSt=ds1</Col><Col id=\"QUERY_LIST\">q1=ST019</Col></Row><Row><Col id=\"SVC_ID\">getWorkOrdList</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"QUERY_LIST\">q1=dlvyWorkOrdService.getWorkOrdList</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col></Row><Row><Col id=\"SVC_ID\">getWorkOrdDetailList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch2</Col><Col id=\"OUT_DATASET_LIST\">dsList2=ds1</Col><Col id=\"QUERY_LIST\">q1=dlvyWorkOrdService.getWorkOrdDetailList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_HOUR_FR\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_HOUR_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DC\" type=\"STRING\" size=\"256\"/><Column id=\"DF\" type=\"STRING\" size=\"256\"/><Column id=\"RST\" type=\"STRING\" size=\"256\"/><Column id=\"RTO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LAST_GDS_ST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COD_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"COF_PAYMNT_METH\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"WH_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_1\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_METHOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch2", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_HOUR_FR\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_HOUR_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCrgSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">기준1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">기준2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("12");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div02","663","stSearch:3",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Grid("grid2","0","0",null,null,"0","0",null,null,null,null,this.div02.form);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty01");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsList2");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"108\"/><Column size=\"116\"/><Column size=\"159\"/><Column size=\"87\"/><Column size=\"80\"/><Column size=\"55\"/><Column size=\"82\"/><Column size=\"144\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"93\"/><Column size=\"148\"/><Column size=\"93\"/><Column size=\"62\"/><Column size=\"148\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"운송장번호\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"보내는이\"/><Cell col=\"3\" accessibilitydescription=\"T0712\" text=\"최종상태\"/><Cell col=\"4\" accessibilitydescription=\"T0712\" text=\"Fail Reason\"/><Cell col=\"5\" accessibilitydescription=\"T0712\" text=\"SM사원\"/><Cell col=\"6\" accessibilitydescription=\"T0712\" text=\"성명\"/><Cell col=\"7\" accessibilitydescription=\"T0712\" text=\"수량\"/><Cell col=\"8\" accessibilitydescription=\"T0712\" text=\"수화인성명\"/><Cell col=\"9\" accessibilitydescription=\"T0712\" text=\"주소\"/><Cell col=\"10\" accessibilitydescription=\"T0712\" text=\"전화번호1\"/><Cell col=\"11\" accessibilitydescription=\"T0712\" text=\"전화번호2\"/><Cell col=\"12\" accessibilitydescription=\"T0712\" text=\"상품코드\"/><Cell col=\"13\" accessibilitydescription=\"T0712\" text=\"상품명\"/><Cell col=\"14\" accessibilitydescription=\"T0712\" text=\"운임구분\"/><Cell col=\"15\" accessibilitydescription=\"T0712\" text=\"총운임\"/><Cell col=\"16\" accessibilitydescription=\"T0712\" text=\"배송메세지\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:WAYBILL_NO\"/><Cell col=\"2\" text=\"bind:SENDR_NM\"/><Cell col=\"3\" text=\"bind:LAST_GDS_ST_CD\" displaytype=\"combotext\" combodataset=\"dsCrgSt\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"4\" text=\"bind:RSN_CD\"/><Cell col=\"5\" text=\"bind:PIDV_EMP_NO\"/><Cell col=\"6\" text=\"bind:PIDV_EMP_NM\"/><Cell col=\"7\" text=\"bind:QTY\"/><Cell col=\"8\" text=\"bind:RCVR_NM\"/><Cell col=\"9\" text=\"bind:RCVR_ADDR\"/><Cell col=\"10\" text=\"bind:RCVR_TEL_NO\" displaytype=\"normal\"/><Cell col=\"11\" text=\"bind:RCVR_CELL_NO\" displaytype=\"normal\"/><Cell col=\"12\" text=\"bind:GDS_CD\"/><Cell col=\"13\" text=\"bind:ITEM_NM\"/><Cell col=\"14\" text=\"bind:FRT_DV\"/><Cell col=\"15\" text=\"bind:WH_FRT\"/><Cell col=\"16\" text=\"bind:REMARK_1\"/></Band></Format></Formats>");
            this.div02.addChild(obj.name, obj);

            obj = new Div("div01","0","stSearch:3",null,null,"div02:5","0",null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Grid("grid1","0","0",null,null,"0","0",null,null,null,null,this.div01.form);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("none");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_cssclass("tb_ty01");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"110\"/><Column size=\"108\"/><Column size=\"116\"/><Column size=\"159\"/><Column size=\"80\"/><Column size=\"82\"/><Column size=\"82\"/><Column size=\"76\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0160\" text=\"점소코드\"/><Cell col=\"2\" accessibilitydescription=\"T0712\" text=\"점소명\"/><Cell col=\"3\" accessibilitydescription=\"T0712\" text=\"SM번호\"/><Cell col=\"4\" accessibilitydescription=\"T0712\" text=\"SM명\"/><Cell col=\"5\" accessibilitydescription=\"T0712\" text=\"출발건수\"/><Cell col=\"6\" accessibilitydescription=\"T0712\" text=\"완료건수\"/><Cell col=\"7\" accessibilitydescription=\"T0712\" text=\"실패건수\"/><Cell col=\"8\" accessibilitydescription=\"T0712\" text=\"기타\"/><Cell col=\"9\" accessibilitydescription=\"T0712\" text=\"%\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:BRAN_CD\"/><Cell col=\"2\" text=\"bind:BRAN_NM\"/><Cell col=\"3\" text=\"bind:PIDV_EMP_NO\"/><Cell col=\"4\" text=\"bind:PIDV_EMP_NM\"/><Cell col=\"5\" text=\"bind:CNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:DC\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:DF\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:RST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:RTO\" textAlign=\"right\" displaytype=\"number\" maskeditformat=\"###.99\"/></Band></Format></Formats>");
            this.div01.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("13");
            obj.set_text("배송점소");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranCd_sc","87","43","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchBran","177","43","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm_sc","201","43","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmpNm_sc","522","43","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchEmp","498","43","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo_sc","408","43","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","346","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("14");
            obj.set_text("배송사원");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00","667","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("15");
            obj.set_text("작업일자");
            this.addChild(obj.name, obj);

            obj = new Calendar("calWorkYmd_sc","728","43","131","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("cal_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00_00_00","874","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("16");
            obj.set_text("스캔시간");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskWorkHourFr_sc","935","43","68","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_format("##:##:##");
            obj.set_limitbymask("both");
            obj.set_type("string");
            obj.set_value("00:00:00");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","1006","43","8","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("-");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskWorkHourTo_sc","1015","43","68","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_format("##:##:##");
            obj.set_limitbymask("both");
            obj.set_type("string");
            obj.set_value("23:59:59");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"47","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_excel");
            obj.getSetter("domainId").set("T0682");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("엑셀");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"47","68","23","btnExcel:5",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("19");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtBranCd_sc","value","dsSearch","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtBranNm_sc","value","dsSearch","BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtEmpNo_sc","value","dsSearch","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtEmpNm_sc","value","dsSearch","EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","calWorkYmd_sc","value","dsSearch","WORK_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","mskWorkHourFr_sc","value","dsSearch","WORK_HOUR_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","mskWorkHourTo_sc","value","dsSearch","WORK_HOUR_TO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DLVY_DLVY_0777.xfdl","lib::lib_Form.xjs");
        this.registerScript("DLVY_DLVY_0777.xfdl", function() {
        /**
        *  작업지시
        *  @MenuPath
        *  @FileName 		DLVY_DLVY_0777.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.02.19
        *  @Desction        작업지시
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.19		Kim Jin Hwan			최초 생성
        ************************************************************************************************
        */


         this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        // 폼 접근 변수
        var divFm = this.div01.form;

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

        	// 조회조건 init
        	this.calWorkYmd_sc.set_value(this.gfnGetDate("date"));		// 작업일자
        	this.mskWorkHourFr_sc.set_value("000000");					// 스캔시간(FROM)
        	this.mskWorkHourTo_sc.set_value("235959");					// 스캔시간(TO)


        	// 조회
        	//this.fnSearch();
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


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {

        	var edtBranCd_scValue = this.edtBranCd_sc.value;			// 점소코드
        	var edtBranNm_scValue = this.edtBranNm_sc.value;			// 점소명
        	var edtEmpNo_scValue = this.edtEmpNo_sc.value;				// 사원번호
        	var edtEmpNm_scValue = this.edtEmpNo_sc.value;				// 사원명
        	var calWorkYmd_scValue = this.calWorkYmd_sc.value;			// 작업일자
        	var mskWorkHourFr_scValue = this.mskWorkHourFr_sc.value;	// 스캔시간(FROM)
        	var mskWorkHourTo_scValue = this.mskWorkHourTo_sc.value;	// 스캔시간(TO)

        	/** 조회조건 필수입력 체크********************************************************/

        	// 점소코드
        	if(this.gfnIsNull(this.gfnTrim(edtBranCd_scValue)) ){
        		this.gfnAlert("점소코드를 입력해주세요.");
        		this.edtBranCd_sc.setFocus();
        		return;
        	}

        	// 점소명
        	if(this.gfnIsNull(this.gfnTrim(edtBranNm_scValue)) ){
        		this.gfnAlert("점소명를 입력해주세요.");
        		this.edtBranNm_sc.setFocus();
        		return;
        	}


        	// 작업일자
        	if(this.gfnIsNull(this.gfnTrim(calWorkYmd_scValue)) ){
        		this.gfnAlert("작업일자를 입력해주세요.");
        		this.calWorkYmd_sc.setFocus();
        		return;
        	}

        	// 스캔시간(FROM)
        	if(this.gfnIsNull(this.gfnTrim(mskWorkHourFr_scValue)) ){
        		this.gfnAlert("스캔시간(FROM)를 입력해주세요.");
        		this.mskWorkHourFr_sc.setFocus();
        		return;
        	}

        	// 스캔시간(TO)
        	if(this.gfnIsNull(this.gfnTrim(mskWorkHourTo_scValue)) ){
        		this.gfnAlert("스캔시간(TO)를 입력해주세요.");
        		this.mskWorkHourTo_sc.setFocus();
        		return;
        	}


        	/************************************************************************************/

        	this.dsList.clearData();
        	this.dsList2.clearData();

        	this.gfnTransaction("getWorkOrdList");
        };


        /***********************************************************************************************
         * @function	: fnSearchDetail
         * @description	: 상세조회
         * @param		: nRow : Integer
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchDetail = function(nRow)
        {
        	var branCdValue = this.dsList.getColumn(nRow, "BRAN_CD");			// 점소코드
        	var branNmValue = this.dsList.getColumn(nRow, "BRAN_NM");			// 점소명
        	var pidvEmpNoValue = this.dsList.getColumn(nRow, "PIDV_EMP_NO");	// 사원번호
        	var pidvEmpNmValue = this.dsList.getColumn(nRow, "PIDV_EMP_NM");	// 사원명
        	var calWorkYmd_scValue = this.calWorkYmd_sc.value;					// 작업일자
        	var mskWorkHourFr_scValue = this.mskWorkHourFr_sc.value;			// 스캔시간(FROM)
        	var mskWorkHourTo_scValue = this.mskWorkHourTo_sc.value;			// 스캔시간(TO)


        	/** 조회조건 필수입력 체크********************************************************/
        	/*
        	// 점소코드
        	if(this.gfnIsNull(this.gfnTrim(edtBranCd_scValue)) ){
        		this.gfnAlert("점소코드를 입력해주세요.");
        		this.edtBranCd_sc.setFocus();
        		return;
        	}

        	// 점소명
        	if(this.gfnIsNull(this.gfnTrim(edtBranNm_scValue)) ){
        		this.gfnAlert("점소명를 입력해주세요.");
        		this.edtBranNm_sc.setFocus();
        		return;
        	}
        	*/

        	// 작업일자
        	if(this.gfnIsNull(this.gfnTrim(calWorkYmd_scValue)) ){
        		this.gfnAlert("작업일자를 입력해주세요.");
        		this.calWorkYmd_sc.setFocus();
        		return;
        	}

        	/************************************************************************************/

        	// 조회조건 init
        	this.dsSearch2.clearData();
        	this.dsSearch2.addRow();
        	this.dsSearch2.setColumn(0, "BRAN_CD", branCdValue);
        	this.dsSearch2.setColumn(0, "BRAN_NM", branNmValue);
        	this.dsSearch2.setColumn(0, "PIDV_EMP_NO", pidvEmpNoValue);
        	this.dsSearch2.setColumn(0, "PIDV_EMP_NM", pidvEmpNmValue);
        	this.dsSearch2.setColumn(0, "WORK_YMD", calWorkYmd_scValue);
        	this.dsSearch2.setColumn(0, "WORK_HOUR_FR", mskWorkHourFr_scValue);
        	this.dsSearch2.setColumn(0, "WORK_HOUR_TO", mskWorkHourTo_scValue);

        	trace(this.dsSearch2.saveXML());

        	this.gfnTransaction("getWorkOrdDetailList");
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

        	}
        };



        /***********************************************************************************************
         * @function	: dsList_onrowposchanged
         * @description	: dsList 데이터셋 로우 변경 이벤트
         * @param		: obj - nexacro.NormalDataset
         * @param		: e - nexacro.DSRowPosChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.fnSearchDetail(e.newrow);
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
        		case "btnSearchBran" : this.fnOpenPopBran(); break;
        		case "btnSearchEmp" : this.fnOpenPopEmp(); break;


        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function	: fnOpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBran = function()
        {
        	// 파라미터 설정
        	var popupId = 'popSearchBran';	//팝업ID
        	var pBranCdValue = this.edtBranCd_sc.value;	// 점소코드
        	var pBranNmValue = this.edtBranNm_sc.value;	// 점소명

        	// 팝업 호출
        	var oArg = {
        				  pBranCd       : pBranCdValue									// 점소코드
        				, pBranNm       : pBranNmValue  								// 점소명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P010.xfdl", oArg, sPopupCallBack, oOption);
        }




        /***********************************************************************************************
         * @function		: fnOpenPopEmp
         * @description		: 사원 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopEmp= function()
        {
        	// 파라미터 설정
        	var popupId = 'popSearchEmp';	//팝업ID

        	var pEmpNoValue = this.edtEmpNo_sc.value; //사원번호
        	var pEmpNmValue = this.edtEmpNm_sc.value; //사원명



        	// 팝업 호출
        	var oArg = {
        				  pEmpNo		: pEmpNoValue									// 사원번호
        				, pEmpNm		: pEmpNmValue									// 사원명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P040.xfdl", oArg, sPopupCallBack, oOption);
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

        		case "popSearchBran" :
        			this.edtBranCd_sc.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			this.edtBranNm_sc.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;


        		case "popSearchEmp" :
        			this.edtEmpNo_sc.set_value(dsObj.getColumn(0, "EMP_NO"));
        			this.edtEmpNm_sc.set_value(dsObj.getColumn(0, "EMP_NM"));
        		break;





        		default :
        		break;
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
        			case	'edtBranCd_sc' : this.btnSearchBran.click();	break;
        			case	'edtBranNm_sc'	: this.btnSearchBran.click();	break;
        			case	'edtEmpNo_sc' : this.btnSearchEmp.click(); break;
        			case	'edtEmpNm_sc' : this.btnSearchEmp.click(); break;

        			default		: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			/*case	'edtBranCd_sc' : this.edtBranNm_sc.set_value(''); break;
        			case	'edtBranNm_sc' : this.edtBranCd_sc.set_value(''); break;
        			case	'edtEmpNo_sc' : this.edtEmpNm_sc.set_value(''); break;
        			case	'edtEmpNm_sc' : this.edtEmpNo_sc.set_value(''); break;*/
        			default		: 	break;
        		}
        	}
        };



        /***********************************************************************************************
         * @function		: fn_ExcelDown
         * @description		: 그리드 표시 된 정보를 엑셀로 download
         * @param 			: obj - Button object
         * @param 			: e - Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_ExcelDown = function(obj,e)
        {
        	/*var objGrd	= this.div01.form.grid1;
        	var objDs	= this.dsList;


        	if(objDs.getRowCount() > 0) {
        		this.gfnExcelExport(objGrd);

        	} else {
        		//this.gfnAlert("M0113");
        		this.gfnAlert("M0113");
        	}*/


        	var objEnv = nexacro.getEnvironment();
        	var svcUrl = objEnv.services["svcurl"].url + "XExportImport.do";

            var exportObj = new ExcelExportObject("Export00", this);

         	exportObj.addEventHandler("onerror", this._gfn_exportExcel_onerror, this);
        	exportObj.addEventHandler("onsuccess", this._gfn_exportExcel_onsuccess, this);
        	exportObj.addEventHandler("onprogress", this._gfn_exportExcel_onprogress, this);

            exportObj.set_exporturl(svcUrl);
            exportObj.set_exportfilename("ExcelExportFile_" + this.gfnGetDate());
            exportObj.set_exporttype(nexacro.ExportTypes.EXCEL2007);

            exportObj.clearExportItems(nexacro.ExportItemTypes.GRID);


        	// 두개이상 EXPORT시 에러남.
            //exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div01.form.grid1  , "Sheet1!A1" );
        	exportObj.addExportItem(nexacro.ExportItemTypes.GRID, this.div02.form.grid2  , "Sheet2!A1" );




            var nCount = exportObj.exportData();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.edtBranCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnSearchBran.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtBranNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtEmpNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnSearchEmp.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtEmpNo_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnExcel.addEventHandler("onclick",this.fn_ExcelDown,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };

        this.loadIncludeScript("DLVY_DLVY_0777.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
