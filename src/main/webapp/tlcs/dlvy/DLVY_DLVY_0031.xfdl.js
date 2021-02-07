(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDDR04E");
            this.set_titletext("미배송사유등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"20\"/><Column id=\"REG_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"9\"/><Column id=\"DELAY_RSN_CD\" type=\"STRING\" size=\"100\"/><Column id=\"DELAY_RSN_NM\" type=\"STRING\" size=\"20\"/><Column id=\"WORK_EMP_NO\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"ENTER_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CUST_NM\" type=\"STRING\" size=\"9\"/><Column id=\"DETAIL_RSN\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsRsnList=ds1</Col><Col id=\"QUERY_LIST\">q1=PD001</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getDlvyDelayList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=dlvyDelayMgmtService.getDlvyDelayList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"SERVICE_BEANNAME\">dlvyDelayMgmtService</Col><Col id=\"SERVICE_METHOD\">getDlvyDelayList</Col></Row><Row><Col id=\"SVC_ID\">saveDlvyDelayInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSaveInfo</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyDelayMgmtService</Col><Col id=\"SERVICE_METHOD\">saveDlvyDelayInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"QUERY_LIST\">q1=dlvyDelayMgmtService.saveDlvyDelayInfo</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">deleteDlvyDelayInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSaveInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=dlvyDelayMgmtService.deleteDlvyDelayInfo</Col><Col id=\"SERVICE_METHOD\">deleteDlvyDelayInfo</Col><Col id=\"SERVICE_BEANNAME\">dlvyDelayMgmtService</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_RSN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"LOGIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRsnList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"CRG_ST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BRAN_CD\"/><Col id=\"EMP_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta07","1812","233","222","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","1812","173","222","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","1812","82","222","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","1812","31","222","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("top_search_ty01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master","0","sta10:3",null,null,"466","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("tb_ty01");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"47\"/><Column size=\"192\"/><Column size=\"147\"/><Column size=\"189\"/><Column size=\"99\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"352\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"운송장번호\"/><Cell col=\"2\" text=\"송장등록일\"/><Cell col=\"3\" text=\"미배송사유\"/><Cell col=\"4\" text=\"SM사원\"/><Cell col=\"5\" text=\"받는분\"/><Cell col=\"6\" text=\"기업고객\"/><Cell col=\"7\" text=\"상세사유\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:WAYBILL_NO\"/><Cell col=\"2\" text=\"bind:REG_YMD\"/><Cell col=\"3\" text=\"bind:DELAY_RSN_NM\"/><Cell col=\"4\" text=\"bind:EMP_NM\"/><Cell col=\"5\" text=\"bind:RCVR_CUST_NM\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:ENTER_CUST_NM\" textAlign=\"center\"/><Cell col=\"7\" text=\"bind:DETAIL_RSN\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","1812","133","222","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"47","70","23","262",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_ty01_search");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"47","70","23","102",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_ty01_delete");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"47","71","23","181",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_cssclass("btn_ty01_save");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"47","62","23","32",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_ty01_excel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("10");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","25","44","45","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("점소");
            obj.set_cssclass("top_search_tx01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchBranCd","70","44","70","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnBranPop","140","44","25","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_search01");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSearchBranNm","162","44","106","23",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","285","44","45","23",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("일자");
            obj.set_cssclass("top_search_tx01");
            this.addChild(obj.name, obj);

            obj = new Calendar("calSearchWorkYmd","330","44","150","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("cal_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grd_master:5","77",null,"720","30",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_tabindex("0");
            obj.set_cssclass("in_tab_ty01");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("미배송사유");
            obj.set_tabbuttonheight("30");
            obj.set_tabbuttonwidth("100");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,null,"0","30",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta06","0","0","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("점소");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search","119","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("1");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta01","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1429");
            obj.set_taborder("2");
            obj.set_text("일자");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search00","119","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("3");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1726");
            obj.set_taborder("4");
            obj.set_text("SM사원");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search01","119","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("5");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta04","0","87","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1723");
            obj.set_taborder("6");
            obj.set_text("미배송사유");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search12","119","87",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("7");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta05","0","116","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T2022");
            obj.set_taborder("8");
            obj.set_text("상세사유");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search02","119","116",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("9");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("sta07","0","145","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1797");
            obj.set_taborder("10");
            obj.set_text("운송장번호");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("stc_search03","119","145",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("11");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Calendar("calWorkYmd","123","32","150","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_autoselect("true");
            obj.set_cssclass("cal_ty01_req");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_taborder("12");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Button("btnDetailEmpPop","213","61","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_cssclass("btn_search01");
            obj.set_taborder("13");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","123","61","90","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtEmpNm","237","61","189","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboRsn","123","90","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsRsnList");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_cssclass("sel_ty01_req");
            obj.set_text("cbo00");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtDetailRsn","123","119","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("edtWaybillNo","123","148","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","123","2","90","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Button("btnDetailBranPop","213","2","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("20");
            obj.set_text("");
            obj.set_textAlign("center");
            obj.set_cssclass("btn_search01");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","237","2","189","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("false");
            this.tab00.Tabpage1.form.div00.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Screen_D",1566,800,this,function(p){});
            obj.set_description("배송출발");
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSearchBranCd","value","dsSearch","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calSearchWorkYmd","value","dsSearch","WORK_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage1.form.div00.form.edtBranCd","value","dsSaveInfo","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.div00.form.edtEmpNo","value","dsSaveInfo","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage1.form.div00.form.calWorkYmd","value","dsSaveInfo","WORK_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage1.form.div00.form.cboRsn","value","dsSaveInfo","DELAY_RSN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage1.form.div00.form.edtDetailRsn","value","dsSaveInfo","DETAIL_RSN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab00.Tabpage1.form.div00.form.edtWaybillNo","value","dsSaveInfo","WAYBILL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLVY_DLVY_0031.xfdl", function() {
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
        	objDetail = this.tab00.Tabpage1.form.div00.form;

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);
        	this.fnInitForm();

        	//미배송사유 조회
        	//this.fnSearch();
        };

        this.fnInitForm = function()
        {

        	//화면 초기화

        	// 공통코드조회
        	this.gfnTransaction("commonCode");	//PD001 미배송사유

        	// 조회조건 초기화
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

        this.fnOpenPop = function(obj,e)
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

        		default :
        		break;
        	}
        };

         /***********************************************************************************************
         * @function: fnSave
         * @description: 미배송사유 저장
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
        	var delayRsnCd = objDetail.cboRsn.value;
        	var delayDetailRsn = objDetail.edtDetailRsn.value;

        	//유효성 체크
        	if(this.gfnIsNull(this.gfnTrim(brancd)) ){
        		this.gfnAlert("점소코드를 입력해주세요.");
        		objDetail.edtBranCd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(branNm)) ){
        		this.gfnAlert("점소코드명를 입력해주세요.");
        		objDetail.edtBranCd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(workYmd)) ){
        		this.gfnAlert("일자를 입력해주세요.");
        		objDetail.calWorkYmd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(empNo)) ){
        		this.gfnAlert("사원번호를 입력해주세요.");
        		objDetail.edtEmpNm.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(empNm)) ){
        		this.gfnAlert("사원명를 입력해주세요.");
        		objDetail.edtEmpNm.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(delayDetailRsn)){
        		this.gfnAlert("상세사유를 입력해주세요.");
        		objDetail.edtDetailRsn.setFocus();
        	}

        	if(this.gfnIsNull(this.gfnTrim(waybillNo)) || waybillNo.length != 12){
        		this.gfnAlert("운송장번호 12자리를 입력해주세요.");
        		objDetail.edtWaybillNo.setFocus();
        		return;
        	}

        	if(workYmd.length > 8){
        		workYmd = workYmd.substr(0,8);
        	}

        	//trace(this.dsSaveInfo.saveXML());
        	this.gfnTransaction("saveDlvyDelayInfo");
        	//

        };

         /***********************************************************************************************
         * @function: fnDelete
         * @description: 미배송 사유 리스트 삭제
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function()
        {
        	if(this.confirm("삭제하시겠습니까?")){
        		var workYmd = this.dsList.getColumn(this.dsList.rowposition, "WORK_YMD");
        		var brancd = this.dsList.getColumn(this.dsList.rowposition, "BRAN_CD");
        		var branNm = this.dsList.getColumn(this.dsList.rowposition, "BRAN_NM");
        		var empId = this.dsList.getColumn(this.dsList.rowposition, "WORK_EMP_NO");
        		var userNm = this.dsList.getColumn(this.dsList.rowposition, "EMP_NM");
        		var rsnCd = this.dsList.getColumn(this.dsList.rowposition, "DELAY_RSN_CD");
        		var detailRsn = this.dsList.getColumn(this.dsList.rowposition, "DETAIL_RSN");
        		var waybillNo = this.dsList.getColumn(this.dsList.rowposition, "WAYBILL_NO");

        		this.gfnTransaction("deleteDlvyDelayInfo");
        	}
        };

         /***********************************************************************************************
         * @function: fnSearch
         * @description: 미배송사유 리스트 조회
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
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

        	if(workYmd.length > 8){
        		workYmd = workYmd.substr(0,8);
        	}

        	this.gfnTransaction("getDlvyDelayList");
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
        			// 예정시간
        			objDetail.cboRsn.set_index(0);
        		break;

        		case "getDlvyDelayList" :
        			// 미배송사유조회
        			if(this.dsList.rowcount > 0){
        				this.grd_master.setCellPos(0);
        			}else{
        				this.dsSaveInfo.clearData();
        				this.dsSaveInfo.addRow();

        				this.fnInitForm();
        			}
        		break;

        		// 배달출발 저장
        		case "saveDlvyDelayInfo" :
        			this.gfnAlert("저장되었습니다.");

        			var branCd = objDetail.edtBranCd.value;
        			var branNm = objDetail.edtBranNm.value;

        			this.edtSearchBranCd.set_value(branCd);
        			this.edtSearchBranNm.set_value(branNm);

        			this.fnInitForm();

        			this.fnSearch();
        		break;

        		case "deleteDlvyDelayInfo":
        			this.gfnAlert("삭제되었습니다.");

        			var branCd = objDetail.edtBranCd.value;
        			var branNm = objDetail.edtBranNm.value;

        			this.edtSearchBranCd.set_value(branCd);
        			this.edtSearchBranNm.set_value(branNm);

        			this.fnSearch();
        		break;
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
        };

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
        	var empNm = this.dsList.getColumn(this.dsList.rowposition, "EMP_NM");
        	var rsnCd = this.dsList.getColumn(this.dsList.rowposition, "DELAY_RSN_CD");
        	var detailRsn = this.dsList.getColumn(this.dsList.rowposition, "DETAIL_RSN");
        	var waybillNo = this.dsList.getColumn(this.dsList.rowposition, "WAYBILL_NO");
        	var empNo = this.dsList.getColumn(this.dsList.rowposition, "WORK_EMP_NO");

        	objDetail.edtBranCd.set_value(branCd);
        	objDetail.edtBranNm.set_value(branNm);
        	objDetail.edtEmpNm.set_value(empNm);
        	objDetail.edtEmpNo.set_value(empNo);
        	objDetail.cboRsn.set_value(rsnCd);
        	objDetail.edtDetailRsn.set_value(detailRsn);
        	objDetail.edtWaybillNo.set_value(waybillNo);
        	objDetail.calWorkYmd.set_value(this.gfnGetDate("date"));
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
         * @function	: tab00_Tabpage1_div00_edtBranCd_onkeydown
         * @description	: keydown이벤트
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.tab00_Tabpage1_div00_edtBranCd_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
        		this.fnOpenDetailPopBran();
        	}else{
        		objDetail.edtBranNm.set_value('');
        	}
        };

        /***********************************************************************************************
         * @function	: tab00_Tabpage1_div00_edtEmpNo_onkeydown
         * @description	: keydown이벤트
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.tab00_Tabpage1_div00_edtEmpNo_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
        		this.fnOpenDetailPopEmp();
        	}else{
        		objDetail.edtEmpNm.set_value('');
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
        	var objGrd	= this.grd_master;
        	var objDs	= this.dsList;

        	if(objDs.getRowCount() > 0) {
        		this.gfnExcelExport(objGrd);
        	} else {
        		//this.gfnAlert("M0113");
        		this.gfnAlert("M0113");
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fnInitForm,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_master.addEventHandler("oncellposchanged",this.grd_master_onselectchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.btnExcel.addEventHandler("onclick",this.fn_ExcelDown,this);
            this.edtSearchBranCd.addEventHandler("onkeydown",this.edtBranCd_onkeydown,this);
            this.edtSearchBranCd.addEventHandler("onchanged",this.edtBranCd_onkeydown,this);
            this.btnBranPop.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtSearchBranNm.addEventHandler("onchanged",this.edtBranNm_onchanged,this);
            this.tab00.Tabpage1.form.div00.form.sta06.addEventHandler("onclick",this.tab00_Tabpage1_divTab1_sta06_onclick,this);
            this.tab00.Tabpage1.form.div00.form.btnDetailEmpPop.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.div00.form.edtEmpNo.addEventHandler("onkeydown",this.tab00_Tabpage1_div00_edtEmpNo_onkeydown,this);
            this.tab00.Tabpage1.form.div00.form.edtBranCd.addEventHandler("onkeydown",this.tab00_Tabpage1_div00_edtBranCd_onkeydown,this);
            this.tab00.Tabpage1.form.div00.form.btnDetailBranPop.addEventHandler("onclick",this.fnOpenPop,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("DLVY_DLVY_0031.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
