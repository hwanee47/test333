(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_NOTICE_MNG");
            this.set_titletext("공지사항관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"STA_DT\" size=\"256\" type=\"STRING\"/><Column id=\"END_DT\" size=\"256\" type=\"STRING\"/><Column id=\"AUTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEL_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">searchNoticeList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsNoticeList=ds1</Col><Col id=\"QUERY_LIST\">q1=baimNoticeMgmService.getNoticeList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">searchNoticeInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsNoticeInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimNoticeMgmService.getNoticeInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">saveNoticeInfo</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsNoticeInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimNoticeMgmService</Col><Col id=\"SERVICE_METHOD\">saveNoticeInfo</Col></Row><Row><Col id=\"SVC_ID\">deleteNoticeInfo</Col><Col id=\"IN_DATASET_LIST\">dsDelete=dsDeleteInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimNoticeMgmService</Col><Col id=\"SERVICE_METHOD\">deleteNoticeInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoticeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" size=\"256\" type=\"STRING\"/><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoticeInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"POSTED_S_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"POSTED_E_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"AUTH\" size=\"256\" type=\"STRING\"/><Column id=\"TEMP_YN\" size=\"256\" type=\"STRING\"/><Column id=\"POPUP_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SUBJECT_POPUP\" size=\"256\" type=\"STRING\"/><Column id=\"STATUS_YN\" size=\"256\" type=\"STRING\"/><Column id=\"LINK_SEQ\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"POPUP_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"VALUE\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">제목</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">컨텐츠</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkValues", this);
            obj._setContents("<ColumnInfo><Column id=\"T00\" size=\"256\" type=\"STRING\"/><Column id=\"T01\" size=\"256\" type=\"STRING\"/><Column id=\"T02\" size=\"256\" type=\"STRING\"/><Column id=\"T03\" size=\"256\" type=\"STRING\"/><Column id=\"T04\" size=\"256\" type=\"STRING\"/><Column id=\"T05\" size=\"256\" type=\"STRING\"/><Column id=\"P\" size=\"256\" type=\"STRING\"/><Column id=\"RTMS\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"T01\">N</Col><Col id=\"T00\">N</Col><Col id=\"T02\">N</Col><Col id=\"T03\">N</Col><Col id=\"T04\">N</Col><Col id=\"T05\">N</Col><Col id=\"P\">N</Col><Col id=\"RTMS\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/><Column id=\"CHK\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NM\">전체</Col><Col id=\"CD\"/></Row><Row><Col id=\"NM\">사용</Col><Col id=\"CD\">N</Col></Row><Row><Col id=\"NM\">미사용</Col><Col id=\"CD\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stcSearch","0","35",null,"41","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDays","12","44","38","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0203");
            obj.set_taborder("1");
            obj.set_text("기간");
            this.addChild(obj.name, obj);

            obj = new Button("btnDate01","296","44","58","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T0695");
            obj.set_fittocontents("none");
            obj.set_taborder("2");
            obj.set_text("오늘");
            this.addChild(obj.name, obj);

            obj = new Button("btnDate02","btnDate01:5","44","58","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T0675");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("어제");
            this.addChild(obj.name, obj);

            obj = new Button("btnDate03","btnDate02:5","43","58","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T0027");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_text("3일전");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSearchType","545","44","75","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("CODE");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("VALUE");
            obj.set_displayrowcount("15");
            obj.set_innerdataset("dsCboCode");
            obj.set_taborder("5");
            obj.set_type("filterlike");
            obj.set_text("제목");
            obj.set_value("S");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("content","625","44","140","23",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty01");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBoardList","0","stcSearch:3",null,null,"680","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsNoticeList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"275\"/><Column size=\"102\"/><Column size=\"106\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"SEQ\"/><Cell col=\"2\" accessibilitydescription=\"T0871\" text=\"제목\"/><Cell col=\"3\" accessibilitydescription=\"T0278\" text=\"등록자\"/><Cell col=\"4\" accessibilitydescription=\"T0277\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell edittype=\"none\" expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:AUTO_SEQ\" textAlign=\"center\"/><Cell col=\"2\" displaytype=\"normal\" edittype=\"none\" text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:REG_NM\"/><Cell col=\"4\" calendardisplaynulltype=\"none\" displaytype=\"date\" text=\"bind:REG_DT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divDate","51","43","240","24",null,null,null,null,null,null,this);
            obj.set_async("true");
            obj.set_cssclass("inp_cal01");
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_url("cmm::cmmCalFromTo.xfdl");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDays00","501","44","38","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0203");
            obj.set_taborder("14");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("15");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grdBoardList:5","stcSearch:3","641","625",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_tabindex("0");
            obj.set_cssclass("in_tab_ty01");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.set_text("기본정보");
            obj.set_tabbuttonheight("30");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("divMain",null,"0","640",null,"1","0",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_enable("false");
            obj.set_taborder("0");
            obj.set_text("");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"48","0",null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("0");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("staType","0","0","120","48",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1590");
            obj.set_taborder("1");
            obj.set_text("대상");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("sta01","0","47",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("2");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("staPeriod","0","47","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1517");
            obj.set_taborder("3");
            obj.set_text("게시기간");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("sta02","0","70",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("4");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("staSubject","0","70","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1922");
            obj.set_taborder("5");
            obj.set_text("제목");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("sta04","0","93",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("6");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("staPopSubject","0","93","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T2034");
            obj.set_taborder("7");
            obj.set_text("팝업제목");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("sta05","0","116",null,"354","0",null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("8");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("staContent","0","116","120","354",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0225");
            obj.set_taborder("9");
            obj.set_text("내용");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("sta06","0","469",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("10");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("staFile","0","471","120","22",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0958");
            obj.set_taborder("11");
            obj.set_text("첨부파일");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkType02","240","3","90","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T1939");
            obj.set_falsevalue("N");
            obj.set_taborder("12");
            obj.set_text("본사");
            obj.set_truevalue("Y");
            obj.set_visible("true");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkType03","350","3","80","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T2073");
            obj.set_falsevalue("N");
            obj.set_taborder("13");
            obj.set_text("사업부");
            obj.set_truevalue("Y");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkType04","465","3","70","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T2039");
            obj.set_falsevalue("N");
            obj.set_taborder("14");
            obj.set_text("지사");
            obj.set_truevalue("Y");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkType05","240","24","80","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T1830");
            obj.set_falsevalue("N");
            obj.set_taborder("15");
            obj.set_text("지점");
            obj.set_truevalue("Y");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkType06","350","24","60","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T1976");
            obj.set_falsevalue("N");
            obj.set_taborder("16");
            obj.set_text("터미널");
            obj.set_truevalue("Y");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkType07","465","24","80","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.set_falsevalue("N");
            obj.set_taborder("17");
            obj.set_text("대리점");
            obj.set_truevalue("Y");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Calendar("calStaDate","130","50","130","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("cal_ty02");
            obj.set_enableevent("true");
            obj.set_taborder("18");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Calendar("calEndDate","284","50","130","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("cal_ty02");
            obj.set_taborder("19");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("sta03","269","46","12","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_taborder("20");
            obj.set_text("~");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Edit("edtSubject","130","73","282","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_maxlength("0");
            obj.set_taborder("21");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Edit("edtPopSubject","130","96","282","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_maxlength("0");
            obj.set_taborder("22");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkPopType01","445","96","80","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T1039");
            obj.set_falsevalue("N");
            obj.set_readonly("false");
            obj.set_taborder("23");
            obj.set_text("팝업");
            obj.set_truevalue("Y");
            obj.set_value("N");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkPopType02","535","96","70","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T1943");
            obj.set_falsevalue("N");
            obj.set_taborder("24");
            obj.set_text("준회원");
            obj.set_truevalue("Y");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new TextArea("txtContent","130","119","499","348",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("txa_ty02");
            obj.set_taborder("25");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Static("staLink","410","472","70","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_color("#777777");
            obj.getSetter("domainId").set("T0688");
            obj.set_font("normal 11px/normal \"돋움\"");
            obj.set_taborder("26");
            obj.set_text("연계 게시물");
            obj.set_verticalAlign("middle");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Edit("edtLink","485","472","105","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_maxlength("0");
            obj.set_taborder("27");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new CheckBox("chkType01","130","3","90","20",null,null,null,null,null,null,this.tab00.Tabpage1.form.divMain.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T0845");
            obj.set_taborder("28");
            obj.set_text("전체");
            obj.set_value("false");
            obj.set_visible("true");
            this.tab00.Tabpage1.form.divMain.addChild(obj.name, obj);

            obj = new Button("btnTempSave",null,"82","83","23","35",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0805");
            obj.set_fittocontents("none");
            obj.set_taborder("7");
            obj.set_text("임시저장");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"83","68","23","122",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"83","68","23","196",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"83","68","23","272",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("신규");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch00",null,"83","68","23","348",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab00.Tabpage1.form.divMain.form.chkType02","value","dsChkValues","T01");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab00.Tabpage1.form.divMain.form.chkType03","value","dsChkValues","T02");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage1.form.divMain.form.chkType04","value","dsChkValues","P");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.divMain.form.chkType05","value","dsChkValues","T04");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage1.form.divMain.form.chkType06","value","dsChkValues","T05");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage1.form.divMain.form.chkType07","value","dsChkValues","RTMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage1.form.divMain.form.calStaDate","value","dsNoticeInfo","POSTED_S_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab00.Tabpage1.form.divMain.form.calEndDate","value","dsNoticeInfo","POSTED_E_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab00.Tabpage1.form.divMain.form.edtSubject","accessibilityaction","dsCar","LSP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab00.Tabpage1.form.divMain.form.edtPopSubject","value","dsNoticeInfo","SUBJECT_POPUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab00.Tabpage1.form.divMain.form.edtPopSubject","accessibilityaction","dsCar","LSP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab00.Tabpage1.form.divMain.form.chkPopType01","value","dsNoticeInfo","POPUP_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab00.Tabpage1.form.divMain.form.chkPopType02","value","dsNoticeInfo","STATUS_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab00.Tabpage1.form.divMain.form.txtContent","value","dsNoticeInfo","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab00.Tabpage1.form.divMain.form.edtLink","value","dsNoticeInfo","LINK_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab00.Tabpage1.form.divMain.form.edtLink","accessibilityaction","dsCar","LSP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab00.Tabpage1.form.divMain.form.edtSubject","value","ds00","Column0");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalFromTo.xfdl");
        };
        
        // User Script
        this.addIncludeScript("BAIM_NOTICE_MNG_old_20200806.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_NOTICE_MNG_old_20200806.xfdl", function() {
        /**
        *  공지사항 관리
        *  @MenuPath		mdm > BSS00_NKFR_NOTICE_MNG
        *  @FileName		BSS00_NKFR_NOTICE_MNG.xfdl
        *  @Creator			yhkim
        *  @CreateDate		2018.08.14
        *  @Desction		스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.08.14			yhkim					최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * include 선언부																				*
        ************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역																		*
        ************************************************************************************************/
         this.objApp;
        var objDetail;

        /***********************************************************************************************
         * @function		: form_onload
         * @description		: FORM 온로드
         * @param 			: obj - form object
         * @param 			: e - form event
         * @return 			: N/A
        ***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//nexacro application
        	this.objApp = nexacro.getApplication();

        	objDetail = this.tab00.Tabpage1.form.divMain;

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);
        	//
        	this.fn_FormInit();
        };
        /***********************************************************************************************
         * @function		: fn_codeSearch
         * @description		: FORM init
         * @param			: obj - nexacro.Form
         * @param			: e   - nexacro.EventInfo
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_FormInit = function(obj,e)
        {
        	this.fn_CalSetting();
        	//this.cboNoticeDv.set_index(0);
        	this.divDate.setFocus();
        };
        /***********************************************************************************************
         * @function		: fn_CalSetting
         * @description		: 달력 값 셋팅
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_CalSetting = function()
        {
        	var dateFm = this.divDate.form;
        	//
        	dateFm.fnSetCalFromBindItem("dsSearch", "STA_DT");
        	dateFm.fnSetCalToBindItem("dsSearch", "END_DT");
        	//
        	dateFm.fnSetFromDate(this.gfnGetDate("date"));
        	dateFm.fnSetToDate(this.gfnAddDate(this.gfnGetDate("date"), 30));
        };
        /***********************************************************************************************
         * @function		: btnDate_onclick
         * @description		: 달력 값 셋팅
         * @return			: N/A
        /***********************************************************************************************/
        this.btnDate_onclick = function(obj,e)
        {
        	var dateFm	= this.divDate.form;
        	var sToday	= this.gfnGetDate();

        	dateFm.fnSetToDate(sToday);
        	//
        	if(obj.name == "btnYesterday"){
        		sToday	= this.gfnAddDate(sToday, -1);
        	}else if(obj.name == "btnThreeday"){
        	    sToday	= this.gfnAddDate(sToday, -3);
        	}
        	dateFm.fnSetFromDate(sToday);
        };
        /***********************************************************************************************
         * @function		: fn_NoticeListSearch
         * @description		: 공지사항 목록 조회
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	this.dsNoticeList.clearData();
        	this.dsNoticeInfo.clearData();

        	// 시작일 종료일 변수 설정
        	var	staDt	= null;
        	var	endDt	= null;
        	//
        	staDt		= this.dsSearch.getColumn(0,"STA_DT");
        	endDt		= this.dsSearch.getColumn(0,"END_DT");

        	this.dsSearch.setColumn(0,"AUTH","T00");

        	// 콤보박스에 따라 검색 조건 변경
        	if(this.cboSearchType.index === 0){
        		this.dsSearch.setColumn(0,"SUBJECT",this.content.text);
        		this.dsSearch.setColumn(0,"CONTENT","");
        	}else{
        		this.dsSearch.setColumn(0,"SUBJECT","");
        		this.dsSearch.setColumn(0,"CONTENT",this.content.text);
        	}

        	if(staDt != null && staDt !="" && endDt != null && endDt !=""){
        		//
        		if(staDt <= endDt){
        				this.gfnTransaction("searchNoticeList");
        		}else{
        			this.gfnAlert("날짜를 입력해주세요.");
        			this.calFrom.setFocus();
        		}
        		//
        	}else{
        		this.gfnAlert("날짜를 입력해주세요.");
        	}

        };

        /***********************************************************************************************
         * @function		: fn_Grid_SelectSearch
         * @description		: 공지사항 상세정보 조회
         * @param			: obj 	- Grid object
         * @param			: e 	- GridSelectEventInfo event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_Grid_SelectSearch = function(obj,e)
        {
        	if(this.gfnIsUpdatedRow(this.dsNoticeInfo,0)) {
        		//
        		if(!this.gfnConfirm("수정중인 데이터가 있습니다. 다른 공지사항을 선택하시겠습니까?")) {
        			return false;
        		}
        	}
        	//
        	objDetail.set_enable(true);
        	//
        	this.dsNoticeInfo.clearData();
        	//
        	this.dsSearch.setColumn(0, "AUTO_SEQ"		, this.dsNoticeList.getColumn(e.row, "AUTO_SEQ"));
        	//
        	this.gfnTransaction("searchNoticeInfo");
        };

        /***********************************************************************************************
         * @function		: fn_checkBoxSetting
         * @description		: 체크 박스 데이터 초기화
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_checkBoxSetting = function()
        {
        	//체크 박스 데이터 파싱 후 체크
        	var checkBoxCode 	= this.dsNoticeInfo.getColumn(0,"AUTH");
        	var dataSplit		= null;
        	//
        	this.dsChkValues.clearData();
        	this.dsChkValues.insertRow(0);
        	//
        	if(checkBoxCode != null){
        		//
        		dataSplit		=	checkBoxCode.split(',');
        		//
        		for(var i in dataSplit){
        			//
        			//전체(ALL) 주선가맹(T01) 화주(법인)(T02)
        			//운송가맹(T04) 차주(T05) 포탈(P) RTMS(RTMS)
        			//
        			if(dataSplit.length == 8) {
        				trace('전체선택');
        				this.divMain.form.chkType01.set_value(true)
        			}

        			switch(dataSplit[i]) {
        				case 	"T01" 	: this.dsChkValues.setColumn(0,dataSplit[i],"Y"); break;
        				case 	"T02"	: this.dsChkValues.setColumn(0,dataSplit[i],"Y"); break;
        				case 	"T04"	: this.dsChkValues.setColumn(0,dataSplit[i],"Y"); break;
        				case 	"T05"	: this.dsChkValues.setColumn(0,dataSplit[i],"Y"); break;
        				case 	"P"		: this.dsChkValues.setColumn(0,dataSplit[i],"Y"); break;
        				case 	"RTMS"	: this.dsChkValues.setColumn(0,dataSplit[i],"Y"); break;
        				default			: break;
        			}
        		}
        	}
        };

        /***********************************************************************************************
         * @function		: fnAdd
         * @description		: 공지사항 상세정보 초기화
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fnAdd = function()
        {
        	/*if(this.gfnIsUpdatedRow(this.dsNoticeInfo,0) && this.dsNoticeInfo.rowcount > 0) {
        		//
        		if(!this.gfnConfirm("수정 중인 데이터가 있습니다. 초기화하시겠습니까?")) {
        			return false;
        		}
        	}*/
        	//
        	this.dsChkValues.clearData();
        	this.dsChkValues.insertRow(0);
        	//
        	this.dsNoticeInfo.clearData();
        	this.dsNoticeInfo.addRow(0);

        	trace(this.dsNoticeInfo.saveXML());

        	this.ds00.addRow();
        	//
        	//this.divMain.set_enable(true);
        	//this.divMain.form.chkType01.set_value(false);
        };

        /***********************************************************************************************
         * @function		: fn_NoticeIfnoSave
         * @description		: 공지사항 상세정보 저장
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_NoticeIfnoSave = function(obj,e)
        {
        	var btnName			= obj.name;
        	var checkBoxData	= "";
        	var checkId			= "";
        	var getColData		= null;
        	//
        	/*if(!this.gfnIsNull(this.dsNoticeInfo.getColumn(0,"AUTO_SEQ"))){
        		//
        		if(this.gfnIsUpdatedRow(this.dsNoticeInfo,0)) {
        			//
        			if(!this.gfnConfirm("M0086")) {
        				return false;
        			}
        		}
        		//
        	}*/
        	//
        	for(var cnt = 0; cnt < this.dsChkValues.getColCount(); cnt++) {
        		//
        		checkId		= this.dsChkValues.getColID(cnt);
        		getColData	= this.dsChkValues.getColumn(0,this.dsChkValues.getColID(cnt));
        		//
        		if(getColData == "Y"){
        			//
        			switch(checkId) {
        				case 	"T01" 	: checkBoxData += checkId+","; break;
        				case 	"T02"	: checkBoxData += checkId+",T03,"; break;
        				case 	"T04"	: checkBoxData += checkId+","; break;
        				case 	"T04"	: checkBoxData += checkId+","; break;
        				case 	"T05"	: checkBoxData += checkId+","; break;
        				case 	"P"		: checkBoxData += checkId+","; break;
        				case 	"RTMS"	: checkBoxData += checkId+","; break;
        				default			: break;
        			}
        			//
        		}
        		//
        	}
        	//
        	checkBoxData	= "T00,"+checkBoxData;
        	checkBoxData	= checkBoxData.substring(0,checkBoxData.length -1 );
        	//
        	if(btnName != "btnSave"){
        		this.dsNoticeInfo.setColumn(0,"TEMP_YN","Y");
        	}else{
        		this.dsNoticeInfo.setColumn(0,"TEMP_YN","N");
        	}
        	//
        	this.dsNoticeInfo.setColumn(0,"AUTH",checkBoxData);
        	//
        	if(this.gfnConfirm("저장하시겠습니까?")){
        		this.gfnTransaction("saveNoticeInfo");
        	}
        	//

        };

        /***********************************************************************************************
         * @function		: fn_DaySetting
         * @description		: 검색조건 달력 셋팅
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_DaySetting = function(obj,e)
        {
        	var btnName		= obj.name;
        	var dateFm		= this.divDate.form;
        	//
        	if(btnName === "btnDate01"){
        		//
        		dateFm.fnSetFromDate(this.gfnGetDate("date"));
        		dateFm.fnSetToDate(this.gfnGetDate("date"));
        		//
        	}else if(btnName === "btnDate02"){
        		//
        		dateFm.fnSetFromDate(this.gfnAddDate(this.gfnGetDate("date"), -1));
        		dateFm.fnSetToDate(this.gfnGetDate("date"));
        		//
        	}else if(btnName === "btnDate03"){
        		//
        		dateFm.fnSetFromDate(this.gfnAddDate(this.gfnGetDate("date"), -3));
        		dateFm.fnSetToDate(this.gfnGetDate("date"));
        	}
        	//
        };

        /***********************************************************************************************
         * @function		: fn_NoticeDelete
         * @description		: 공지사항 삭제
         * @param			: obj 	- Button object
         * @param			: e 	- Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_NoticeDelete = function(obj,e)
        {
        	//chk된 항목이 있는지 확인.
        	if(this.dsNoticeList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0269");
        		this.gfnAlert("삭제할 항목을 선택해주세요.");
        		return;
        	}

        	this.dsDeleteInfo.clearData();
        	//
        	if(this.gfnConfirm("삭제하시겠습니까?")) {
        		//
        		for(var i=this.dsNoticeList.getRowCount() -1; i>=0; i--) {
        			//
        			if(this.dsNoticeList.getColumn(i, "CHK") == '1') {
        				//
        				if(this.dsNoticeList.getRowType(i) == 2) {
        					//
        					this.dsNoticeList.deleteRow(i);
        				} else {
        					//
        					var addrow = this.dsDeleteInfo.addRow();
        					this.dsDeleteInfo.copyRow(addrow, this.dsNoticeList, i);
        				}
        			}
        		}

        		if(this.dsDeleteInfo.getRowCount() > 0) {
        			this.gfnTransaction("deleteNoticeInfo");
        		}
        	}
        };
        /***********************************************************************************************
         * @function		: fn_AllChk
         * @description		: 전체 체크 시 전체 체크
         * @param			: obj 	- CheckBox object
         * @param			: e 	- CheckBoxChangedEventInfo event
         * @return			: N/A
        /***********************************************************************************************/
        this.fn_AllChk = function(obj,e)
        {
        	//
        	for(var cnt = 0; cnt < this.dsChkValues.getColCount(); cnt++) {
        		//
        		if(obj.value){
        			this.dsChkValues.setColumn(0,this.dsChkValues.getColID(cnt),"Y");
        		}else{
        			this.dsChkValues.setColumn(0,this.dsChkValues.getColID(cnt),"N");
        		}
        		//
        	}
        	//
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
        		case "commonCode":
        			divFm.cboCpDv.set_index(0);
        		break;

        		case "searchNoticeInfo":
        			this.fn_checkBoxSetting();
        		break;

        		case "saveNoticeInfo":
        			this.gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		break;

        		case "deleteNoticeInfo":
        			this.gfnAlert("삭제되었습니다.");
        			this.fnSearch();
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
            this.btnDate01.addEventHandler("onclick",this.fn_DaySetting,this);
            this.btnDate02.addEventHandler("onclick",this.fn_DaySetting,this);
            this.btnDate03.addEventHandler("onclick",this.fn_DaySetting,this);
            this.grdBoardList.addEventHandler("onheadclick",this.gfnGridSort,this);
            this.grdBoardList.addEventHandler("onselectchanged",this.fn_Grid_SelectSearch,this);
            this.staDays00.addEventHandler("onclick",this.staDays00_onclick,this);
            this.tab00.Tabpage1.form.divMain.form.staContent.addEventHandler("onclick",this.divMain_staContent_onclick,this);
            this.tab00.Tabpage1.form.divMain.form.txtContent.addEventHandler("onchanged",this.divMain_txtContent_onchanged,this);
            this.tab00.Tabpage1.form.divMain.form.chkType01.addEventHandler("onchanged",this.fn_AllChk,this);
            this.btnTempSave.addEventHandler("onclick",this.fn_NoticeIfnoSave,this);
            this.btnSave.addEventHandler("onclick",this.fn_NoticeIfnoSave,this);
            this.btnDelete.addEventHandler("onclick",this.fn_NoticeDelete,this);
            this.btnNew.addEventHandler("onclick",this.fn_NoticeInfoClear,this);
            this.btnSearch00.addEventHandler("onclick",this.fn_NoticeListSearch,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("BAIM_NOTICE_MNG_old_20200806.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
