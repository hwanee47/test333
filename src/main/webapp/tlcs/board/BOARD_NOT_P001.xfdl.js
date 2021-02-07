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
            this.set_name("BOARD_NOT_P001");
            this.set_titletext("공지사항 상세정보 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">searchInfo</Col><Col id=\"OUT_DATASET_LIST\">dsInfo=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"QUERY_LIST\">q1=baimNoticeMgmService.getNoticeInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"POSTED_DT\" size=\"256\" type=\"STRING\"/><Column id=\"CONTENT\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","130","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T1180");
            obj.set_taborder("0");
            obj.set_text("공지사항 상세정보");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staSubject","0","34","100","24",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0871");
            obj.set_taborder("3");
            obj.set_text("제목");
            this.addChild(obj.name, obj);

            obj = new Static("staContent","0","80","100","420",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0225");
            obj.set_taborder("4");
            obj.set_text("내용");
            this.addChild(obj.name, obj);

            obj = new Static("staSubject00","0","57","100","24",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0278");
            obj.set_taborder("5");
            obj.set_text("등록자");
            this.addChild(obj.name, obj);

            obj = new Static("staSubject01","420","57","100","24",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0275");
            obj.set_taborder("6");
            obj.set_text("등록일");
            this.addChild(obj.name, obj);

            obj = new Static("staSubject02","420","34","100","24",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0118");
            obj.set_taborder("7");
            obj.set_text("게시기간");
            this.addChild(obj.name, obj);

            obj = new Static("sta05",null,"80","821","420","0",null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("sta02",null,"34","322","24","499",null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("sta03",null,"57","322","24","499",null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("sta04",null,"34","401","24","0",null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("sta06",null,"57","401","24","0",null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtContent","110","86",null,"404","15",null,null,null,null,null,this);
            obj.set_cssclass("txa_ty02");
            obj.set_taborder("13");
            obj.set_enable("true");
            obj.set_color("#000000");
            obj.set_background("#ffffff");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSubject","110","60","285","18",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("false");
            obj.set_maxlength("0");
            obj.set_taborder("14");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSubject00","110","37","285","18",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("false");
            obj.set_maxlength("0");
            obj.set_taborder("15");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSubject01","530","37","282","18",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("false");
            obj.set_maxlength("0");
            obj.set_taborder("16");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSubject02","530","60","282","18",null,null,null,null,null,null,this);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("false");
            obj.set_maxlength("0");
            obj.set_taborder("17");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txtContent","value","dsInfo","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtSubject","value","dsInfo","REG_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtSubject","accessibilityaction","dsCar","LSP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtSubject00","value","dsInfo","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtSubject00","accessibilityaction","dsCar","LSP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtSubject01","value","dsInfo","POSTED_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtSubject01","accessibilityaction","dsCar","LSP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSubject02","value","dsInfo","REG_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtSubject02","accessibilityaction","dsCar","LSP_ID");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BOARD_NOT_P001.xfdl","lib::lib_Form.xjs");
        this.registerScript("BOARD_NOT_P001.xfdl", function() {
        /**
        *  공지사항
        *  @MenuPath		ptl > PTL_NOT_0002
        *  @FileName		PTL_NOT_0002.xfdl
        *  @Creator			yhkim
        *  @CreateDate		2018.11.19
        *  @Desction		스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.11.19			yhkim					최초 생성
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
        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);
        	//
        	var autoSeq = this.getOwnerFrame().pAutoSeq;

        	if(!this.gfnIsNull(autoSeq)){
        		this.dsSearch.setColumn(0,"AUTO_SEQ",autoSeq);
        		this.fn_FormInit();
        	}
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
        	this.gfnTransaction("searchInfo");
        };
        /***********************************************************************************************
         * @function		: fn_PopClose
         * @description		: 팝업 창 닫기
         * @param			: obj 	- Button object
         * @param			: e 	- ClickEventInfo event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fn_PopClose = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch00.addEventHandler("onclick",this.fn_PopClose,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.staContent.addEventHandler("onclick",this.divMain_staContent_onclick,this);
            this.txtContent.addEventHandler("onchanged",this.divMain_txtContent_onchanged,this);
            this.dsInfo.addEventHandler("oncolumnchanged",this.fn_ChkSum,this);
        };

        this.loadIncludeScript("BOARD_NOT_P001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
