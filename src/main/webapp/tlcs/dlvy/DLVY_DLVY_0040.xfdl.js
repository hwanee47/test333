(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form1");
            this.set_titletext("집배출발등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCargoSt=ds1</Col><Col id=\"QUERY_LIST\">q1=ST019</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getBranInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsBranInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimBranMgmtService.getBranInfoList</Col></Row><Row><Col id=\"SVC_ID\">getEmpInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"OUT_DATASET_LIST\">dsEmpInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimEmpMgmtService.getEmpInfoList</Col></Row><Row><Col id=\"SVC_ID\">getDlvyDepatList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=dlvyDepatMgmtService.getDlvyDepatList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"SERVICE_BEANNAME\">dlvyDepatMgmtService</Col><Col id=\"SERVICE_METHOD\">getDlvyDepatList</Col></Row><Row><Col id=\"SVC_ID\">saveDepatInfo</Col><Col id=\"IN_DATASET_LIST\">dsSaveList=dsList:U dsSaveInfo=dsSaveInfo</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyDepatMgmtService</Col><Col id=\"SERVICE_METHOD\">saveDepatInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"QUERY_LIST\">q1=dlvyDepatMgmtService.saveDepatInfo</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">deleteDepatInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSaveInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=dlvyDepatMgmtService.deleteDepatInfo</Col><Col id=\"SERVICE_METHOD\">deleteDepatInfo</Col><Col id=\"SERVICE_BEANNAME\">dlvyDepatMgmtService</Col><Col id=\"OUT_DATASET_LIST\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CRG_ST\" type=\"STRING\" size=\"256\"/><Column id=\"CRG_ST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EXPCT_HOUR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPCT_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIP_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIP_DIV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_DUTY_DV\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExpctHour", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CRG_ST\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIP_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EXPCT_HOUR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EXPCT_START_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EXPCT_END_HOUR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveResult", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCargoSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBranInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab00",null,"39","430",null,"30","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("정보입력");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","-1","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","68","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("4");
            obj.set_text("점소");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","67","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","71","3","90","23",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchBran1","161","3","25","23",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_search01");
            obj.set_enable("true");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","185","3","241","23",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","67","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","67","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","29","68","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("8");
            obj.set_text("일자");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_01_00_00_00","0","116","68","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("9");
            obj.set_text("운송장번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01","0","58","68","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("10");
            obj.set_text("SM사원");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Calendar("calWorkYmd","71","32","107","23",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("cal_ty01");
            obj.set_value("20200402");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00","0","87","68","30",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("11");
            obj.set_text("집배구분");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","67","87",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","67","116",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","71","62","90","23",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchEmp","161","62","25","23",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_search01");
            obj.set_enable("true");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpNm","185","62","241","23",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Radio("rdoCargoSt","81","93","189","20",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("17");
            obj.set_innerdataset("dsCargoSt");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtWaybillNo","71","120","159","23",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("18");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_readonly("false");
            obj.set_inputtype("digit");
            obj.set_maxlength("12");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Grid("grd_master","0","39",null,null,"tab00:3","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("tb_ty01");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"108\"/><Column size=\"130\"/><Column size=\"78\"/><Column size=\"102\"/><Column size=\"160\"/><Column size=\"98\"/><Column size=\"98\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"점소\"/><Cell col=\"2\" text=\"점소명\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"SM사원\"/><Cell col=\"5\" text=\"운송장번호*\" cssclass=\"imp\" font=\"bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"6\" text=\"등록일자*\" cssclass=\"imp\" font=\"bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"7\" text=\"등록장비\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:BRAN_CD\"/><Cell col=\"2\" text=\"bind:BRAN_NM\"/><Cell col=\"3\" text=\"bind:CRG_ST\" displaytype=\"combotext\" combodataset=\"dsCargoSt\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"4\" text=\"bind:EMP_NM\"/><Cell col=\"5\" text=\"bind:WAYBILL_NO\"/><Cell col=\"6\" text=\"bind:REG_DTIME\"/><Cell col=\"7\" text=\"bind:EQUIP_DIV_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","179",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text(" 조회");
            obj.set_cssclass("btn_ty01_search");
            obj.set_textPadding("0px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"37","69","23","32",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_ty01_delete");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"37","68","23","106",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_ty01_save");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("4");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Screen_D",1566,800,this,function(p){});
            obj.set_description("집배출발등록");
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("DLVY_DLVY_0040.xfdl","lib::lib_Form.xjs");
        this.registerScript("DLVY_DLVY_0040.xfdl", function() {
        /**
        *  집배출발등록
        *  @MenuPath
        *  @FileName 		DLVY_DLVY_0040.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.06.18
        *  @Desction        품목관리
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.06.18		Kim Jin Hwan			최초 생성
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


        	this.fnSetDefault();

        	this.tab00.Tabpage2.form.div00.form.edtBranNm.setFocus();
        };


         /***********************************************************************************************
         * @function	: fnSetDefault
         * @description	: 초기값 셋팅
         * @return N/A
        /***********************************************************************************************/
        this.fnSetDefault = function()
        {
        	if(!this.gfnIsNull(this.objApp.gv_branCd)){
        		this.tab00.Tabpage2.form.div00.form.edtBranCd.set_value(this.objApp.gv_branCd);		// 로그인계정 점소코드

        		this.fnSearchBranInfo(this.tab00.Tabpage2.form.div00.form.edtBranCd.value, this.tab00.Tabpage2.form.div00.form.edtBranNm.value);
        	}

        	this.tab00.Tabpage2.form.div00.form.calWorkYmd.set_value(this.gfnGetDate("date"));		// 일자
        	this.tab00.Tabpage2.form.div00.form.rdoCargoSt.set_value("13");							// 집배구분
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

        		// 신규
        		case "btnAdd" :
        			this.fnAdd();
        		break;


        		// 저장
        		case "btnSave" :
        			this.fnSave();
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

        	var edtBranCdValue = this.tab00.Tabpage2.form.div00.form.edtBranCd.value;
        	var edtBranNmValue = this.tab00.Tabpage2.form.div00.form.edtBranNm.value;
        	var calWorkYmdValue = this.tab00.Tabpage2.form.div00.form.calWorkYmd.value;
        	var edtEmpNoValue = this.tab00.Tabpage2.form.div00.form.edtEmpNo.value;
        	var edtEmpNmValue = this.tab00.Tabpage2.form.div00.form.edtEmpNm.value;


        	if(this.gfnIsNull(edtBranNmValue)){
        		this.gfnAlert("점소를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtBranNm.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtBranCdValue)){
        		this.gfnAlert("점소를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtBranCd.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(calWorkYmdValue)){
        		this.gfnAlert("일자를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.calWorkYmd.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtEmpNoValue)){
        		this.gfnAlert("사원을 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtEmpNm.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtEmpNoValue)){
        		this.gfnAlert("사원을 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtEmpNo.setFocus();});
        		return false;
        	}


        	this.dsSearch.setColumn(0, "BRAN_CD", edtBranCdValue);
        	this.dsSearch.setColumn(0, "EMP_NO", edtEmpNoValue);
        	this.dsSearch.setColumn(0, "WORK_YMD", calWorkYmdValue);



        	this.gfnTransaction("getDlvyDepatList");

        };



        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제처리.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function() {

        	if(this.dsList.rowcount == 0) {
        		this.gfnAlert("삭제할 내용이 없습니다.");
        		return;
        	}



        	this.gfnCustomConfirm("현재행을 삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		var nRowType = this.dsList.getRowType(this.dsList.rowposition);

        		if(nRowType == Dataset.ROWTYPE_INSERT){
        			this.dsList.deleteRow(this.dsList.rowposition);

        			this.gfnAlert("삭제되었습니다.");
        		}
        		else{

        			var edtBranCdValue = this.dsList.getColumn(this.dsList.rowposition, "BRAN_CD");
        			var edtBranNmValue = this.dsList.getColumn(this.dsList.rowposition, "BRAN_NM");
        			var calWorkYmdValue = this.dsList.getColumn(this.dsList.rowposition, "WORK_YMD");
        			var edtEmpNoValue = this.dsList.getColumn(this.dsList.rowposition, "EMP_NO");
        			var edtEmpNmValue = this.dsList.getColumn(this.dsList.rowposition, "EMP_NM");
        			var rdoCargoStValue = this.dsList.getColumn(this.dsList.rowposition, "CRG_ST");
        			var edtWaybillNoValue = this.dsList.getColumn(this.dsList.rowposition, "WAYBILL_NO");


        			this.dsSaveInfo.setColumn(0,"WORK_YMD",calWorkYmdValue);
        			this.dsSaveInfo.setColumn(0,"BRAN_CD",edtBranCdValue);
        			this.dsSaveInfo.setColumn(0,"CRG_ST",rdoCargoStValue);
        			this.dsSaveInfo.setColumn(0,"EMP_NO",edtEmpNoValue);
        			this.dsSaveInfo.setColumn(0,"WAYBILL_NO",edtWaybillNoValue);
        			this.dsSaveInfo.setColumn(0,"EQUIP_DV_CD",'02');				//(02) 화면


        			this.gfnTransaction("deleteDepatInfo");
        		}

        	});
        };



        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {


        	if(this.dsList.rowcount == 0) {
        		this.gfnAlert("저장할 내용이 없습니다.");
        		return;
        	}

        	var edtBranCdValue = this.tab00.Tabpage2.form.div00.form.edtBranCd.value;
        	var edtBranNmValue = this.tab00.Tabpage2.form.div00.form.edtBranNm.value;
        	var calWorkYmdValue = this.tab00.Tabpage2.form.div00.form.calWorkYmd.value;
        	var edtEmpNoValue = this.tab00.Tabpage2.form.div00.form.edtEmpNo.value;
        	var edtEmpNmValue = this.tab00.Tabpage2.form.div00.form.edtEmpNm.value;
        	var rdoCargoStValue = this.tab00.Tabpage2.form.div00.form.rdoCargoSt.value;


        	if(this.gfnIsNull(edtBranNmValue)){
        		this.gfnAlert("점소를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtBranNm.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtBranCdValue)){
        		this.gfnAlert("점소를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtBranCd.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(calWorkYmdValue)){
        		this.gfnAlert("일자를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.calWorkYmd.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtEmpNoValue)){
        		this.gfnAlert("사원을 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtEmpNm.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtEmpNoValue)){
        		this.gfnAlert("사원을 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtEmpNo.setFocus();});
        		return false;
        	}


        	/****************************************************************************************************/

        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;


        		this.dsSaveInfo.setColumn(0, "WORK_YMD", calWorkYmdValue);

        		this.gfnTransaction("saveDepatInfo");
        	});

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
        		case "getDlvyDepatList" :
        			if(this.dsList.rowcount == 0){
        				this.tab00.Tabpage2.form.div00.form.edtWaybillNo.setFocus();
        			}
        		break;


        		// 저장
        		case "saveDepatInfo" :
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;


        		// 삭제
        		case "deleteDepatInfo" :
        			this.gfnAlert("삭제되었습니다.");
        			this.fnSearch();
        		break;




        		// 점소 조회 처리.
        		case "getBranInfoList":

        			// 1건 조회된 경우 입력값에 셋팅.
        			if(this.dsBranInfo.getRowCount() == 1){

        				this.tab00.Tabpage2.form.div00.form.edtBranCd.set_value(this.dsBranInfo.getColumn(0,"BRAN_CD"));
        				this.tab00.Tabpage2.form.div00.form.edtBranNm.set_value(this.dsBranInfo.getColumn(0,"BRAN_NM"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{

        				this.tab00.Tabpage2.form.div00.form.btnSearchBran1.click();
        			}

        		break;


        		// 사원 조회 처리.
        		case "getEmpInfoList":

        			// 1건 조회된 경우 입력값에 셋팅.
        			if(this.dsEmpInfo.getRowCount() == 1){

        				this.tab00.Tabpage2.form.div00.form.edtEmpNo.set_value(this.dsEmpInfo.getColumn(0,"EMP_NO"));
        				this.tab00.Tabpage2.form.div00.form.edtEmpNm.set_value(this.dsEmpInfo.getColumn(0,"EMP_NM"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{

        				this.tab00.Tabpage2.form.div00.form.btnSearchEmp.click();
        			}

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

        		case "searchPopBran1" :
        			this.tab00.Tabpage2.form.div00.form.edtBranCd.set_value(dsObj.getColumn(0,"BRAN_CD"));
        			this.tab00.Tabpage2.form.div00.form.edtBranNm.set_value(dsObj.getColumn(0,"BRAN_NM"));
        		break;

        		case "searchPopEmp" :
        			this.tab00.Tabpage2.form.div00.form.edtEmpNo.set_value(dsObj.getColumn(0,"EMP_NO"));
        			this.tab00.Tabpage2.form.div00.form.edtEmpNm.set_value(dsObj.getColumn(0,"EMP_NM"));
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
        	// 화물상태 필터링 (집화출발, 배달출발)
        	this.dsCargoSt.filter("CD =='13' || CD == '82'");
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
         * @function		: fnSearchBranInfo
         * @description		: 점소 정보 조회
         * @param 			: branCd	- String (점소코드)
         * @param 			: branNm	- String (점소명)
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSearchBranInfo = function(branCd, branNm)
        {
        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "BRAN_CD", branCd);
        	this.dsSearch.setColumn(0, "BRAN_NM", branNm);

        	this.gfnTransaction("getBranInfoList");
        }


        /***********************************************************************************************
         * @function		: fnSearchEmpInfo
         * @description		: 사원 정보 조회
         * @param 			: empNo	- String (사원코드)
         * @param 			: empNm	- String (사원명)
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSearchEmpInfo = function(empNo, empNm)
        {
        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "EMP_NO", empNo);
        	this.dsSearch.setColumn(0, "EMP_NM", empNm);
        	this.dsSearch.setColumn(0, "EMP_DUTY_DV", "03");	// 배송관리자(03)

        	this.gfnTransaction("getEmpInfoList");
        }


        /***********************************************************************************************
         * @function		: fnAdd
         * @description		: 추가
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnAdd = function()
        {
        	var edtBranCdValue = this.tab00.Tabpage2.form.div00.form.edtBranCd.value;
        	var edtBranNmValue = this.tab00.Tabpage2.form.div00.form.edtBranNm.value;
        	var calWorkYmdValue = this.tab00.Tabpage2.form.div00.form.calWorkYmd.value;
        	var edtEmpNoValue = this.tab00.Tabpage2.form.div00.form.edtEmpNo.value;
        	var edtEmpNmValue = this.tab00.Tabpage2.form.div00.form.edtEmpNm.value;
        	var rdoCargoStValue = this.tab00.Tabpage2.form.div00.form.rdoCargoSt.value;
        	var edtWaybillNoValue = this.tab00.Tabpage2.form.div00.form.edtWaybillNo.value;


        	if(this.gfnIsNull(edtBranNmValue)){
        		this.gfnAlert("점소를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtBranNm.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtBranCdValue)){
        		this.gfnAlert("점소를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtBranCd.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(calWorkYmdValue)){
        		this.gfnAlert("일자를 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.calWorkYmd.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtEmpNoValue)){
        		this.gfnAlert("사원을 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtEmpNm.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(edtEmpNoValue)){
        		this.gfnAlert("사원을 입력해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.edtEmpNo.setFocus();});
        		return false;
        	}
        	if(this.gfnIsNull(rdoCargoStValue) || (rdoCargoStValue != "13" && rdoCargoStValue != "82")){
        		this.gfnAlert("집배구분을 선택해주세요.","", function(){ this.tab00.Tabpage2.form.div00.form.rdoCargoSt.setFocus();});
        		return false;
        	}


        	if(this.gfnIsNull(this.gfnTrim(edtWaybillNoValue)) || edtWaybillNoValue.length != 12){
        		this.gfnAlert("운송장번호 12자리를 입력해주세요.", "", function(){ this.tab00.Tabpage2.form.div00.form.edtWaybillNo.setFocus();});
        		return;
        	}


        	// 현재 조회된 데이터중 운송장번호 중복 체크.
        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		var waybillNo = this.dsList.getColumn(i, "WAYBILL_NO");
        		var crgSt = this.dsList.getColumn(i, "CRG_ST");


        		if(crgSt+waybillNo == rdoCargoStValue+edtWaybillNoValue){
        			this.gfnAlert("중복된 운송장번호입니다.", "", function(){ this.tab00.Tabpage2.form.div00.form.edtWaybillNo.setFocus();});
        			return;
        		}

        	}

        	var nRow = this.dsList.addRow();

        	this.dsList.setColumn(nRow, "BRAN_CD", edtBranCdValue);
        	this.dsList.setColumn(nRow, "BRAN_NM", edtBranNmValue);
        	this.dsList.setColumn(nRow, "WORK_YMD", calWorkYmdValue);
        	this.dsList.setColumn(nRow, "EMP_NO", edtEmpNoValue);
        	this.dsList.setColumn(nRow, "EMP_NM", edtEmpNmValue);
        	this.dsList.setColumn(nRow, "CRG_ST", rdoCargoStValue);
        	this.dsList.setColumn(nRow, "WAYBILL_NO", edtWaybillNoValue);
        	this.dsList.setColumn(nRow, "EQUIP_DV_CD", "02");


        	this.tab00.Tabpage2.form.div00.form.rdoCargoSt.set_value(rdoCargoStValue);
        	this.tab00.Tabpage2.form.div00.form.edtWaybillNo.set_value();

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
        		case "btnSearchBran1"	: this.fnOpenPopBran(btnName); break;
        		case "btnSearchEmp"		: this.fnOpenPopEmp(); break;

        		default 		: 	break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnOpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBran = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pBranCdValue = '';	// 점소코드
        	var pBranNmValue = '';	// 점소명

        	if(btnName == "btnSearchBran1"){
        		popupId = 'searchPopBran1';
        		pBranCdValue = this.tab00.Tabpage2.form.div00.form.edtBranCd.value;
        		pBranNmValue = this.tab00.Tabpage2.form.div00.form.edtBranNm.value;
        	}


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
         * @function	: fnOpenPopEmp
         * @description	: SM사원을 조회한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopEmp = function()
        {
        	// 파라미터 설정
        	var popupId = 'searchPopEmp';	//팝업ID
        	var pEmpNoValue = this.tab00.Tabpage2.form.div00.form.edtEmpNo.value;	// 사원코드
        	var pEmpNmValue = this.tab00.Tabpage2.form.div00.form.edtEmpNm.value;	// 사원명
        	var pEmpDutyDvValue = "03"; 	// 배송관리자(03)

        	// 팝업 호출
        	var oArg = {
        				  pEmpNo        : pEmpNoValue									// 사원코드
        				, pEmpNm        : pEmpNmValue  									// 사원명
        				, pEmpDutyDv    : pEmpDutyDvValue  								// 사원업무구분
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


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.dsItemList_onrowposchanged = function(obj,e)
        {

        	this.fnSetReadonlyComp(e.newrow);
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
        			case	'edtBranCd' : this.fnSearchBranInfo(this.tab00.Tabpage2.form.div00.form.edtBranCd.value, this.tab00.Tabpage2.form.div00.form.edtBranNm.value); break;
        			case	'edtBranNm' : this.fnSearchBranInfo(this.tab00.Tabpage2.form.div00.form.edtBranCd.value, this.tab00.Tabpage2.form.div00.form.edtBranNm.value); break;
        			case	'edtEmpNo' : this.fnSearchEmpInfo(this.tab00.Tabpage2.form.div00.form.edtEmpNo.value, this.tab00.Tabpage2.form.div00.form.edtEmpNm.value); break;
        			case	'edtEmpNm' : this.fnSearchEmpInfo(this.tab00.Tabpage2.form.div00.form.edtEmpNo.value, this.tab00.Tabpage2.form.div00.form.edtEmpNm.value); break;
        			case	'edtWaybillNo' : this.fnAdd();
        			default	: 	break;
        		}
        	}

        };


        /***********************************************************************************************
         * @function	: fnEditOnInput
         * @description	: edit oninput
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.InputEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnEditOnInput = function(obj,e)
        {
        	var objName = obj.name;

        	switch( objName ) {
        		case	'edtBranCd' : this.tab00.Tabpage2.form.div00.form.edtBranNm.set_value(); break;
        		case	'edtBranNm' : this.tab00.Tabpage2.form.div00.form.edtBranCd.set_value(); break;
        		case	'edtEmpNo' : this.tab00.Tabpage2.form.div00.form.edtEmpNm.set_value(); break;
        		case	'edtEmpNm' : this.tab00.Tabpage2.form.div00.form.edtEmpNo.set_value(); break;

        	}
        };


        this.grd_master_oncellclick = function(obj,e)
        {

        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.tab00.Tabpage2.form.div00.form.rdoCargoSt.set_value(this.dsList.getColumn(e.newrow, "CRG_ST"));
        	this.tab00.Tabpage2.form.div00.form.edtWaybillNo.set_value(this.dsList.getColumn(e.newrow, "WAYBILL_NO"));
        	var nRowType = this.dsList.getRowType(e.newrow);


        	if(nRowType == Dataset.ROWTYPE_INSERT){

        	}else{

        		for(var i=0; i<this.dsList.getColCount(); i++){

        			this.dsList.setColumn(e.oldrow, i, this.dsList.getOrgColumn(e.oldrow, i));

        		}

        	}

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.fnInitForm,this);
            this.tab00.Tabpage2.form.div00.form.edtBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage2.form.div00.form.edtBranCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage2.form.div00.form.btnSearchBran1.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage2.form.div00.form.edtBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage2.form.div00.form.edtBranNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage2.form.div00.form.edtEmpNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage2.form.div00.form.edtEmpNo.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage2.form.div00.form.btnSearchEmp.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage2.form.div00.form.edtEmpNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage2.form.div00.form.edtEmpNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage2.form.div00.form.rdoCargoSt.addEventHandler("onitemchanged",this.div00_rdoCalCpDv00_onitemchanged,this);
            this.tab00.Tabpage2.form.div00.form.edtWaybillNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.grd_master.addEventHandler("onselectchanged",this.grd_master_onselectchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDelete.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };

        this.loadIncludeScript("DLVY_DLVY_0040.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
