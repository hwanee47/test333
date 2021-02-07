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
            this.set_titletext("배송출발");
            if (Form == this.constructor)
            {
                this._setFormPosition(1330,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsExpctHour=ds1</Col><Col id=\"QUERY_LIST\">q1=PD005</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getDlvyDepatList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=dlvyDepatMgmtService.getDlvyDepatList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"SERVICE_BEANNAME\">dlvyDepatMgmtService</Col><Col id=\"SERVICE_METHOD\">getDlvyDepatList</Col></Row><Row><Col id=\"SVC_ID\">saveDepatInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSaveInfo</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyDepatMgmtService</Col><Col id=\"SERVICE_METHOD\">saveDepatInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"QUERY_LIST\">q1=dlvyDepatMgmtService.saveDepatInfo</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">deleteDepatInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSaveInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=dlvyDepatMgmtService.deleteDepatInfo</Col><Col id=\"SERVICE_METHOD\">deleteDepatInfo</Col><Col id=\"SERVICE_BEANNAME\">dlvyDepatMgmtService</Col><Col id=\"OUT_DATASET_LIST\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CRG_ST\" type=\"STRING\" size=\"256\"/><Column id=\"CRG_ST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_EXPCT_HOUR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EXPCT_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DTIME\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIP_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EQUIP_DIV_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CRG_ST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            
            // UI Components Initialize
            obj = new Static("sta10","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("top_search_ty01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master","0","sta10:3",null,null,"465","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("tb_ty01");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"108\"/><Column size=\"120\"/><Column size=\"130\"/><Column size=\"120\"/><Column size=\"160\"/><Column size=\"169\"/><Column size=\"166\"/><Column size=\"162\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"점소\"/><Cell col=\"2\" text=\"점소명\"/><Cell col=\"3\" text=\"구분\"/><Cell col=\"4\" text=\"SM사원\"/><Cell col=\"5\" text=\"운송장번호*\" cssclass=\"imp\" font=\"bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"6\" text=\"예정시간\"/><Cell col=\"7\" text=\"등록일자*\" cssclass=\"imp\" font=\"bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"8\" text=\"등록장비\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:BRAN_CD\"/><Cell col=\"2\" text=\"bind:BRAN_NM\"/><Cell col=\"3\" text=\"bind:CRG_ST_NM\"/><Cell col=\"4\" text=\"bind:USER_NM\"/><Cell col=\"5\" text=\"bind:WAYBILL_NO\"/><Cell col=\"6\" text=\"bind:EXPCT_DTIME\"/><Cell col=\"7\" text=\"bind:REG_DTIME\"/><Cell col=\"8\" text=\"bind:EQUIP_DIV_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchBranCd","70","44","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnBranPop","140","44","25","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_search01");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchBranNm","162","44","106","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","68","23","187",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_ty01_search");
            obj.set_textPadding("0px");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"7","69","23","32",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("삭제");
            obj.set_cssclass("btn_ty01_delete");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"7","68","23","109",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_ty01_save");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","21","1","165","34",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("배송 > 배송출발");
            obj.set_fittocontents("width");
            obj.set_cssclass("top_title_route01");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("8");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grd_master:5","sta10:3","425","711",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_tabindex("0");
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("정보입력");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"641","0",null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta06","0","0","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("점소");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search","119","0",null,"24","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("1");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta06_00","0","23","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("2");
            obj.set_text("일자");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search00","119","23",null,"24","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("3");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","0","46","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1726");
            obj.set_taborder("4");
            obj.set_text("SM사원");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","0","69","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1723");
            obj.set_taborder("5");
            obj.set_text("집배구분");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","0","92","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T2022");
            obj.set_taborder("6");
            obj.set_text("예정시간");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search02","119","92",null,"24","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("7");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search01","119","46",null,"24","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("8");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search12","119","69",null,"24","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("9");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05_00","0","115","120","24",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T2022");
            obj.set_taborder("10");
            obj.set_text("운송장번호");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search02_00","119","115",null,"24","0",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("11");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnDetailBranPop","210","3","18","18",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("btn_search02");
            obj.set_taborder("12");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","231","3","189","18",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_taborder("13");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Calendar("calWorkYmd","125","25","150","20",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("cal_ty01_req");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Button("btnDetailEmpPop","210","49","18","18",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("btn_search02");
            obj.set_taborder("15");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpNm","231","50","189","17",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_taborder("16");
            obj.set_password("false");
            obj.set_readonly("true");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","130","74","120","14",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("17");
            obj.set_text("배달출발");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboExpctHour","125","97",null,"16","5",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("sel_ty01_req");
            obj.set_innerdataset("dsExpctHour");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_text("cbo00");
            obj.set_index("-1");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtWaybillNo","125","117",null,"20","5",null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("inp_ty01_req");
            obj.set_background("papayawhip");
            obj.set_textAlign("left");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","125","3","83","18",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("center");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","125","49","83","18",null,null,null,null,null,null,this.tab00.Tabpage2.form.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("center");
            this.tab00.Tabpage2.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00","25","44","45","23",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("점소");
            obj.set_cssclass("top_search_tx01");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","285","44","45","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("일자");
            obj.set_cssclass("top_search_tx01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSearchWorkYmd","330","44","150","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("cal_ty01_req");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Screen_D",1330,800,this,function(p){});
            obj.set_description("배송출발");
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item7","edtSearchBranCd","value","dsSearch","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage2.form.div00.form.calWorkYmd","value","dsSaveInfo","WORK_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage2.form.div00.form.cboExpctHour","value","dsSaveInfo","PIDV_EXPCT_HOUR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage2.form.div00.form.edtWaybillNo","value","dsSaveInfo","WAYBILL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calSearchWorkYmd","value","dsSearch","WORK_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab00.Tabpage2.form.div00.form.edtBranCd","value","dsSaveInfo","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage2.form.div00.form.edtEmpNo","value","dsSaveInfo","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLVY_DLVY_0010.xfdl", function() {
        /**
        *  @MenuPath
        *  @FileName
        *  @Creator
        *  @CreateDate 		2020.02.10
        *  @Desction        스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.10								최초 생성
        ************************************************************************************************
        */

        /************************************************************************************************
        * include 선언부																				*
         ************************************************************************************************/

        /************************************************************************************************************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
         var objDetail;


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

        	//상세입력object
        	objDetail = this.tab00.Tabpage2.form.div00.form;

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);

        	this.fnInitForm();
        };

        this.fnInitForm = function()
        {
        	// 권한조회

        	// 공통코드조회
        	this.gfnTransaction("commonCode");	//PD005 장비구분

        	//화면 초기화
        	//날짜셋팅

        	this.edtSearchBranCd.setFocus();

        	this.calSearchWorkYmd.set_value(this.gfnGetDate("date"));
        	objDetail.calWorkYmd.set_value(this.gfnGetDate("date"));

        };

         /***********************************************************************************************
         * @function: btnOnClick
         * @description: 버튼이벤트 제어
         * @param : obj - form object
         * @param : e - form event
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

        		//삭제
        		case "btnDel":
        			this.fnDelete();
        		break;

        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		default :
        		break;
        	}
        };

         /***********************************************************************************************
         * @function: btnPopClick
         * @description: 팝업버튼 제어
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.btnPopClick =  function(obj,e)
        {
        	switch(obj.name)
        	{
        		//점소조회 팝업
        		case "btnBranPop":
        			this.fnOpenPopBran();
        		break;

        		//점소조회 팝업
        		case "btnDetailBranPop":
        			this.fnOpenDetailPopBran();
        		break;

        		//사원조회 팝업
        		case "btnDetailEmpPop":
        			this.fnOpenDetailPopEmp();
        		break;
        	}
        };

         /***********************************************************************************************
         * @function: btn_emppop_OnClick
         * @description:  사원조회팝업
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        function btn_emppop_OnClick(obj)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("emppop1", "Form::emp_Popup_Sub.xfdl");
        }
         /***********************************************************************************************
         * @function: fnSave
         * @description: 배달출발 저장
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function(obj,e)
        {

        	var workYmd = objDetail.calWorkYmd.value;
        	var brancd = objDetail.edtBranCd.value;
        	var branNm = objDetail.edtBranNm.value;
        	var empNm = objDetail.edtEmpNm.value;
        	var empNo = objDetail.edtEmpNo.value;
        	var waybillNo = objDetail.edtWaybillNo.value;
        	var expctHourCd = objDetail.cboExpctHour.value;
        	var expctHourStr = objDetail.cboExpctHour.text;
        	var expctStartHour = expctHourStr.substr(0,2);
        	var expctEndHour = expctHourStr.substr(6,2);

        	//유효성 체크
        	if(this.gfnIsNull(this.gfnTrim(brancd)) ){
        		this.gfnAlert("점소코드를 입력해주세요.");
        		this.edtBranCd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(branNm)) ){
        		this.gfnAlert("점소코드명를 입력해주세요.");
        		this.edtBranCd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(workYmd)) ){
        		this.gfnAlert("일자를 입력해주세요.");
        		this.calWorkYmd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(empNo)) ){
        		this.gfnAlert("사원번호를 입력해주세요.");
        		this.edtEmpNm.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(empNm)) ){
        		this.gfnAlert("사원명를 입력해주세요.");
        		this.edtEmpNm.setFocus();
        		return;
        	}


        	if(this.gfnIsNull(this.gfnTrim(waybillNo)) || waybillNo.length != 12){
        		this.gfnAlert("운송장번호 12자리를 입력해주세요.");
        		this.edtWaybillNo.setFocus();
        		return;
        	}

        	if(workYmd.length > 8){
        		workYmd = workYmd.substr(0,8);
        	}


        	this.dsSaveInfo.setColumn(0,"CRG_ST",82);						//배달출발
        	this.dsSaveInfo.setColumn(0,"EQUIP_DV_CD",'02');				//(02) 화면

        	this.dsSaveInfo.setColumn(0,"PIDV_EXPCT_START_HOUR",expctStartHour);			//집배예정출발시간 text
        	this.dsSaveInfo.setColumn(0,"PIDV_EXPCT_END_HOUR",expctEndHour);				//집배예정도착시간 text




        	//trace(this.dsSaveInfo.saveXML());
        	this.gfnTransaction("saveDepatInfo");
        	//

        };

         /***********************************************************************************************
         * @function: fnSearch
         * @description: 배달출발 리스트 조회
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	this.dsList.clearData();

        	var branCd = this.edtSearchBranCd.value;
        	//var empNo = this.edtEmpNo.value;
        	var workYmd = this.calSearchWorkYmd.value;

        	if(this.gfnIsNull(this.gfnTrim(branCd)) ){
        		this.gfnAlert("점소코드를 입력해주세요.");
        		this.edtSearchBranCd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(workYmd)) ){
        		this.gfnAlert("일자를 선택해주세요.");
        		this.calSearchWorkYmd.setFocus();
        		return;
        	}

        	/*
        	if(this.gfnIsNull(this.gfnTrim(empNo)) ){
        		this.gfnAlert("사원코드를 입력해주세요.");
        		this.edtEmpNo.setFocus();
        		return;
        	}*/

        	this.dsSearch.setColumn(0,"CRG_ST",'82');
        	this.gfnTransaction("getDlvyDepatList");
        };

         /***********************************************************************************************
         * @function: fnDelete
         * @description: 배달출발 리스트 삭제
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function()
        {
        	if(this.confirm("삭제하시겠습니까?")){
        		var workYmd = objDetail.calWorkYmd.value;
        		var brancd = objDetail.edtBranCd.value;
        		var branNm = objDetail.edtBranNm.value;
        		var empNm = objDetail.edtEmpNm.value;
        		var empNo = objDetail.edtEmpNo.value;
        		var waybillNo = objDetail.edtWaybillNo.value;
        		var expctHourCd = objDetail.cboExpctHour.value;
        		var expctHourStr = objDetail.cboExpctHour.text;
        		var expctStartHour = expctHourStr.substr(0,2);
        		var expctEndHour = expctHourStr.substr(6,2);

        		if(workYmd.length > 8){
        			workYmd = workYmd.substr(0,8);
        		}

        		if(waybillNo.length != 12 || workYmd.length != 8){
        			trace('운송장번호, 작업일자 확인');
        			return;
        		}

        		this.dsSaveInfo.setColumn(0,"CRG_ST",'82');
        		this.dsSaveInfo.setColumn(0,"EQUIP_DV_CD",'02');				//(02) 화면
        		this.dsSaveInfo.setColumn(0,"PIDV_EXPCT_HOUR_CD",expctHourCd);	//배송예정시간 코드

        		this.dsSaveInfo.setColumn(0,"PIDV_EXPCT_START_HOUR",expctStartHour);			//집배예정출발시간 text
        		this.dsSaveInfo.setColumn(0,"PIDV_EXPCT_END_HOUR",expctEndHour);				//집배예정도착시간 text

        		this.gfnTransaction("deleteDepatInfo");
        	}
        }

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
        	var pBranCdValue = this.edtSearchBranCd.value;	// 점소코드
        	var pBranNmValue = '';	// 점소명

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
         * @function	: fnOpenDetailPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenDetailPopBran = function()
        {
        	// 파라미터 설정
        	var popupId = 'popDetailSearchBran';	//팝업ID
        	var pBranCdValue = objDetail.edtBranCd.value;	// 점소코드
        	var pBranNmValue = '';	// 점소명

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
        };

        /***********************************************************************************************
         * @function	: fnOpenPopEmp
         * @description	: 사원 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenDetailPopEmp = function()
        {
        	// 파라미터 설정
        	var popupId = 'popDetailSearchEmp';	//팝업ID
        	var pEmpNoValue = objDetail.edtEmpNo.value;	// 사원코드
        	var pEmpNmValue = '';	// 사원명

        	// 팝업 호출
        	var oArg = {
        				  pEmpNo       : pEmpNoValue									// 사원코드
        				, pEmpNm       : pEmpNmValue  									// 사원명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P040.xfdl", oArg, sPopupCallBack, oOption);
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
        	switch(sPopupId) {

        		case "popSearchBran" :
        			this.edtSearchBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			this.edtSearchBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "popDetailSearchEmp" :
        			objDetail.edtEmpNo.set_value(dsObj.getColumn(0,"EMP_NO"));
        			objDetail.edtEmpNm.set_value(dsObj.getColumn(0,"EMP_NM"));
        		break;

        		case "popDetailSearchBran" :
        			objDetail.edtBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			objDetail.edtBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		default :
        		break;
        	}
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
        			// 예정시간
        			objDetail.cboExpctHour.set_index(0);
        		break;

        		// 배달출발 조회
        		case "getDlvyDepatList" :
        			if(this.dsList.rowcount > 0){
        				this.grd_master.setCellPos(0,0);
        			}else{
        				//this.edtBranCd.set_value('');
        				//this.edtBranNm.set_value('');
        				//this.edtEmpNm.set_value('');
        				//this.edtEmpNo.set_value('');
        				//this.cboExpctHour.set_index(0);
        				//this.edtWaybillNo.set_value('');
        			}
        		break;

        		// 배달출발 저장
        		case "saveDepatInfo" :
        			this.gfnAlert("저장되었습니다.");

        			this.edtSearchBranCd.set_value(objDetail.edtBranCd.value);
        			this.edtSearchBranNm.set_value(objDetail.edtBranNm.value);
        			this.fnInitForm();

        			this.fnSearch();
        		break;

        		case "deleteDepatInfo":
        			this.gfnAlert("삭제되었습니다.");

        			this.edtSearchBranCd.set_value(objDetail.edtBranCd.value);
        			this.edtSearchBranNm.set_value(objDetail.edtBranNm.value);
        			this.fnSearch();
        		break;
        	}
        };

        /***********************************************************************************************
         * @function	: grd_master_onselectchanged
         * @description	: onselectchanged
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.grd_master_onselectchanged = function(obj,e)
        {
        	this.dsSaveInfo.clearData();
        	this.dsSaveInfo.addRow();

        	var branCd = this.dsList.getColumn(this.dsList.rowposition, "BRAN_CD");
        	var branNm = this.dsList.getColumn(this.dsList.rowposition, "BRAN_NM");
        	var empId = this.dsList.getColumn(this.dsList.rowposition, "EMP_ID");
        	var userNm = this.dsList.getColumn(this.dsList.rowposition, "USER_NM");
        	var hourCd = this.dsList.getColumn(this.dsList.rowposition, "PIDV_EXPCT_HOUR_CD");
        	var waybillNo = this.dsList.getColumn(this.dsList.rowposition, "WAYBILL_NO");
        	objDetail.edtBranCd.set_value(branCd);
        	objDetail.edtBranNm.set_value(branNm);
        	objDetail.edtEmpNm.set_value(userNm);
        	objDetail.edtEmpNo.set_value(empId);
        	objDetail.cboExpctHour.set_value(hourCd);
        	objDetail.edtWaybillNo.set_value(waybillNo);
        	objDetail.calWorkYmd.set_value(this.gfnGetDate("date"));
        };

         /***********************************************************************************************
         * @function: calWorkYmd_onchanged
         * @description:  일자 변경이벤트
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.calWorkYmd_onchanged = function(obj,e)
        {
        	var chkday = this.calWorkYmd.value;
        	if( Number(chkday) > strToDay ) {
        		this.calWorkYmd.set_value(this.gfnGetDate("date"));
        		this.calWorkYmd.SetFocus();
        		return;
        	}
        };


         /***********************************************************************************************
         * @function: edtBranCd_onkeydown
         * @description:  onkeydown 이벤트
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.edtBranCd_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
        		this.fnOpenPopBran();
        	}else{
        		this.edtSearchBranNm.set_value('');
        	}
        };



        /***********************************************************************************************
         * @function	: tab00_Tabpage2_div00_edtBranCd_onkeydown
         * @description	: keydown이벤트
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.tab00_Tabpage2_div00_edtBranCd_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
        		this.fnOpenDetailPopBran();
        	}else{
        		objDetail.edtBranNm.set_value('');
        	}
        };

        /***********************************************************************************************
         * @function	: tab00_Tabpage2_div00_edtEmpNo_onkeydown
         * @description	: keydown이벤트
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.tab00_Tabpage2_div00_edtEmpNo_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
        		this.fnOpenDetailPopEmp();
        	}else{
        		objDetail.edtEmpNm.set_value('');
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.fnInitForm,this);
            this.grd_master.addEventHandler("oncellclick",this.grd_master_oncellclick,this);
            this.grd_master.addEventHandler("onselectchanged",this.grd_master_onselectchanged,this);
            this.edtSearchBranCd.addEventHandler("onkeydown",this.edtBranCd_onkeydown,this);
            this.edtSearchBranCd.addEventHandler("onchanged",this.edtBranCd_onkeydown,this);
            this.btnBranPop.addEventHandler("onclick",this.btnPopClick,this);
            this.edtSearchBranNm.addEventHandler("onchanged",this.edtBranNm_onchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.sta09.addEventHandler("onclick",this.sta09_onclick,this);
            this.tab00.Tabpage2.form.div00.form.sta06.addEventHandler("onclick",this.tab00_Tabpage1_divTab1_sta06_onclick,this);
            this.tab00.Tabpage2.form.div00.form.sta06_00.addEventHandler("onclick",this.tab00_Tabpage1_divTab1_sta06_onclick,this);
            this.tab00.Tabpage2.form.div00.form.btnDetailBranPop.addEventHandler("onclick",this.btnPopClick,this);
            this.tab00.Tabpage2.form.div00.form.btnDetailEmpPop.addEventHandler("onclick",this.btnPopClick,this);
            this.tab00.Tabpage2.form.div00.form.edtBranCd.addEventHandler("onkeydown",this.tab00_Tabpage2_div00_edtBranCd_onkeydown,this);
            this.tab00.Tabpage2.form.div00.form.edtEmpNo.addEventHandler("onkeydown",this.tab00_Tabpage2_div00_edtEmpNo_onkeydown,this);
        };

        this.loadIncludeScript("DLVY_DLVY_0010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
