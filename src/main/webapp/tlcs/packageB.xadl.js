(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
            // global dataset
            obj = new Dataset("gdsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"UserNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"userId\">admin</Col><Col id=\"UserNm\">admin</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MSTR_MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_SUB\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SYS\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_IMG_CLASS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TITLE\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTR_MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenPopMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"32\"/><Column id=\"TITLE\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MSTR_MENU_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMessage", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MSG_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">RSRV0004</Col><Col id=\"MENU_NM\">주문관리</Col></Row><Row><Col id=\"MENU_CD\">STCK0002</Col><Col id=\"MENU_NM\">재고조회</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsLocaleText", this);
            obj._setContents("<ColumnInfo><Column id=\"MSG_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LANG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_TYPE\" type=\"STRING\" size=\"2\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/><Column id=\"MSG_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsUserGridInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_ID\" type=\"STRING\" size=\"256\"/><Column id=\"GRID_FORMAT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsWarehAuthList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMgmtColumn_i", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_NM\">품목코드</Col><Col id=\"COL_WIDTH\">150</Col><Col id=\"COL_ID\">GDS_CD</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">입고일자(YYYYMMDD)</Col><Col id=\"COL_WIDTH\">200</Col><Col id=\"COL_ID\">WAREI_EXPCT_YMD</Col></Row><Row><Col id=\"COL_NM\">입고유형( I1 : 일반, I2 : 반품 )</Col><Col id=\"COL_ID\">WAREI_TYPE</Col><Col id=\"COL_WIDTH\">220</Col></Row><Row><Col id=\"COL_NM\">입고예정수량</Col><Col id=\"COL_ID\">EXPCT_QTY</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_NM\">존코드</Col><Col id=\"COL_ID\">ZN_CD</Col><Col id=\"COL_WIDTH\">150</Col></Row><Row><Col id=\"COL_NM\">로케이션코드</Col><Col id=\"COL_ID\">LOC_CD</Col><Col id=\"COL_WIDTH\">150</Col></Row><Row><Col id=\"COL_NM\">랙코드</Col><Col id=\"COL_ID\">RACK_CD</Col><Col id=\"COL_WIDTH\">150</Col></Row><Row><Col id=\"COL_NM\">유통기한</Col><Col id=\"COL_ID\">EXPR_DATE</Col><Col id=\"COL_WIDTH\">200</Col></Row><Row><Col id=\"COL_NM\">생산일자</Col><Col id=\"COL_ID\">PROD_YMD</Col><Col id=\"COL_WIDTH\">200</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMgmtColumn_o", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL_NM\">접수일자</Col><Col id=\"COL_WIDTH\">100</Col><Col id=\"COL_ID\">SLIP_YMD</Col><Col id=\"REQUIRED\">Y</Col></Row><Row><Col id=\"COL_NM\">고객사용번호(고객사 주문번호)</Col><Col id=\"COL_WIDTH\">250</Col><Col id=\"COL_ID\">SHP_MALL_SLIP_NO</Col></Row><Row><Col id=\"COL_NM\">품목코드</Col><Col id=\"COL_ID\">GDS_CD</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_NM\">주문수량</Col><Col id=\"COL_ID\">ORD_QTY</Col><Col id=\"COL_WIDTH\">80</Col></Row><Row><Col id=\"COL_NM\">송화인명</Col><Col id=\"COL_ID\">FR_NM</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_NM\">송화인우편번호</Col><Col id=\"COL_ID\">FR_ZIP_NO</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_NM\">송화인주소</Col><Col id=\"COL_ID\">FR_BASIC_ADDR</Col><Col id=\"COL_WIDTH\">150</Col></Row><Row><Col id=\"COL_NM\">송화인상세주소</Col><Col id=\"COL_ID\">FR_DETAIL_ADDR</Col><Col id=\"COL_WIDTH\">230</Col></Row><Row><Col id=\"COL_NM\">송화인전화번호</Col><Col id=\"COL_ID\">FR_TEL_NO</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_ID\">FR_CELL_NO</Col><Col id=\"COL_NM\">송화인휴대폰번호</Col><Col id=\"COL_WIDTH\">140</Col></Row><Row><Col id=\"COL_ID\">TO_NM</Col><Col id=\"COL_NM\">수화인명</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_ID\">TO_ZIP_NO</Col><Col id=\"COL_NM\">수화인우편번호</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_ID\">TO_BASIC_ADDR</Col><Col id=\"COL_NM\">수화인주소</Col><Col id=\"COL_WIDTH\">150</Col></Row><Row><Col id=\"COL_ID\">TO_DETAIL_ADDR</Col><Col id=\"COL_NM\">수화인상세주소</Col><Col id=\"COL_WIDTH\">230</Col></Row><Row><Col id=\"COL_ID\">TO_TEL_NO</Col><Col id=\"COL_NM\">수화인전화번호</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_ID\">TO_CELL_NO</Col><Col id=\"COL_NM\">수화인휴대폰번호</Col><Col id=\"COL_WIDTH\">140</Col></Row><Row><Col id=\"COL_ID\">ORDRR_NM</Col><Col id=\"COL_NM\">주문자명</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_ID\">ORDRR_ZIP_NO</Col><Col id=\"COL_NM\">주문자우편번호</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_ID\">ORDRR_ADDR</Col><Col id=\"COL_NM\">주문자주소</Col><Col id=\"COL_WIDTH\">150</Col></Row><Row><Col id=\"COL_ID\">ORDRR_DETAIL_ADDR</Col><Col id=\"COL_NM\">주문자상세주소</Col><Col id=\"COL_WIDTH\">230</Col></Row><Row><Col id=\"COL_ID\">ORDRR_TEL_NO</Col><Col id=\"COL_NM\">주문자전화번호</Col><Col id=\"COL_WIDTH\">120</Col></Row><Row><Col id=\"COL_ID\">ORDRR_CELL_NO</Col><Col id=\"COL_NM\">주문자휴대폰번호</Col><Col id=\"COL_WIDTH\">140</Col></Row><Row><Col id=\"COL_ID\">WAYBILL_NO</Col><Col id=\"COL_NM\">운송장번호</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_ID\">MPCK_KEY</Col><Col id=\"COL_NM\">합포장번호</Col><Col id=\"COL_WIDTH\">100</Col></Row><Row><Col id=\"COL_ID\">MPCK_SEQ</Col><Col id=\"COL_NM\">합포장SEQ</Col><Col id=\"COL_WIDTH\">80</Col></Row><Row><Col id=\"COL_ID\">CUST_REQ_MSG</Col><Col id=\"COL_NM\">고객요청메세지</Col><Col id=\"COL_WIDTH\">250</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsAddrSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_ADDR_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenuBtnAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAV_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"XLS_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_CD\">BAIM0005</Col><Col id=\"SEL_YN\">1</Col><Col id=\"ADD_YN\">0</Col><Col id=\"SAV_YN\">1</Col><Col id=\"DEL_YN\">0</Col><Col id=\"PRT_YN\">0</Col><Col id=\"XLS_YN\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsSido", this);
            obj._setContents("<ColumnInfo><Column id=\"SIDO_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsSkk", this);
            obj._setContents("<ColumnInfo><Column id=\"SIDO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SKK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_lang","ko");
            this._addVariable("gv_userId","admin");
            this._addVariable("gv_adminYn","");
            this._addVariable("gv_userNm","홍길동");
            this._addVariable("gv_authCd","");
            this._addVariable("gv_compCd","1000");
            this._addVariable("gv_deptCd","");
            this._addVariable("gv_deptNm","TLCS");
            this._addVariable("gv_empNo","");
            this._addVariable("JSESSIONID","");
            this._addVariable("gv_ipAddr","");
            this._addVariable("gv_pushServer","");
            this._addVariable("gv_pushUser","");
            this._addVariable("gv_pushPassword","");
            this._addVariable("gv_siteCd","TLCS");
            this._addVariable("gv_sysGb","B");
            this._addVariable("gv_arCostcId","0000110004");
            this._addVariable("gv_arCostcNm","");
            this._addVariable("gv_apCostcId","0000110004");
            this._addVariable("gv_apCostcNm","");
            this._addVariable("gv_exeCorpId","00000074");
            this._addVariable("gv_exeCorpNm","");
            this._addVariable("gv_rtnCode","");
            this._addVariable("gv_rtnMessage","");
            this._addVariable("gv_lspId","");
            this._addVariable("gv_lspNm","");
            this._addVariable("gv_shprId","");
            this._addVariable("gv_shprNm","");
            this._addVariable("gv_telNo","");
            this._addVariable("gv_mobNo","");
            this._addVariable("gv_emailAddr","");
            this._addVariable("gv_joinType","");
            this._addVariable("gv_masterYn","");
            this._addVariable("gv_seqNo","");
            this._addVariable("gv_loginId","");
            this._addVariable("gv_cjworld_id","");
            this._addVariable("gv_agentGb","");
            this._addVariable("gv_tenantTelNo","");
            this._addVariable("gv_agentPW","");
            this._addVariable("gv_agentID","");
            this._addVariable("gv_svcUrl_WKR","http://localhost:8080/TLCS/");
            this._addVariable("gv_svcUrl_DEV","http://localhost:8080/TLCS/");
            this._addVariable("gv_svcUrl_QA","");
            this._addVariable("gv_svcUrl_PRD","");
            this._addVariable("gvRunMode","");
            this._addVariable("gv_bizType","");
            this._addVariable("gv_bizTypeNm","");
            this._addVariable("gv_sysSsoId","");
            this._addVariable("gv_sysMenuId","");
            this._addVariable("gv_warehCd","");
            this._addVariable("gv_dutyDv","");
            this._addVariable("gv_centerYn","");
            this._addVariable("gv_mgmtUpBranCd","");
            this._addVariable("gv_oprUpBranCd","");
            this._addVariable("gv_userSessionId","");
            this._addVariable("gv_sessionInvalidByForceYn","N");
            this._addVariable("gv_blngDv","02");
            this._addVariable("gv_custId","");
            this._addVariable("gv_userType","SUPER");
            this._addVariable("gv_sysDv","TLCS");
            
            obj = null;
        };
 
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("packageB");
            this.set_screenid("Screen_D");

            if (this._is_attach_childframe)
            	return;
        
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1680","984",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_cssclass("bg_border01");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_titletext("SBLNC");
            mainframe.set_openstatus("maximize");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        

            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet",null,null,null,null,null,null,this);
            frame0.set_separatesize("50,0,*,0");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("frameTop",null,null,null,null,null,null,"frame::frameTop.xfdl",frame0);
            frame1.set_dragmovetype("none");
            frame1.set_showtitlebar("false");
            frame1.set_showtitleicon("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("frame::frameTop.xfdl");


            var frame2 = new ChildFrame("frameLogin",null,null,null,null,null,null,"",frame0);
            frame2.set_dragmovetype("none");
            frame2.set_showtitlebar("false");
            frame2.set_showtitleicon("false");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new HFrameSet("HFrameSet",null,null,null,null,null,null,frame0);
            frame3.set_separatesize("200,*");
            frame0.addChild(frame3.name, frame3);

            var frame4 = new ChildFrame("frameLeft",null,null,"84",null,null,null,"frame::frameLeft.xfdl",frame3);
            frame4.set_dragmovetype("none");
            frame4.set_showtitlebar("false");
            frame3.addChild(frame4.name, frame4);
            frame4.set_formurl("frame::frameLeft.xfdl");


            var frame5 = new VFrameSet("VFrameSet1",null,null,null,null,null,null,frame3);
            frame5.set_separatesize("29,0,*");
            frame5.set_background("#fcfcfc");
            frame3.addChild(frame5.name, frame5);

            var frame6 = new ChildFrame("frameNavi",null,null,null,null,null,null,"frame::frameMDI.xfdl",frame5);
            frame6.set_dragmovetype("none");
            frame6.set_showtitlebar("false");
            frame6.set_showtitleicon("false");
            frame5.addChild(frame6.name, frame6);
            frame6.set_formurl("frame::frameMDI.xfdl");


            var frame7 = new FrameSet("framesetWork",null,null,null,null,null,null,frame5);
            frame7.set_showtitlebar("false");
            frame7.set_showtitleicon("false");
            frame5.addChild(frame7.name, frame7);

            var frame8 = new ChildFrame("frameMain",null,null,null,null,null,null,"",frame5);
            frame8.set_dragmovetype("none");
            frame8.set_showtitlebar("false");
            frame5.addChild(frame8.name, frame8);

            var frame9 = new ChildFrame("frameBottom",null,null,null,null,null,null,"frame::frameBottom.xfdl",frame0);
            frame9.set_dragmovetype("none");
            frame9.set_showtitlebar("false");
            frame9.set_showtitleicon("false");
            frame0.addChild(frame9.name, frame9);
            frame9.set_formurl("frame::frameBottom.xfdl");
        };
        
        this.on_initEvent = function()
        {
            this.mainframe.VFrameSet.HFrameSet.addEventHandler("onbeforeclose",this.mainframe_VFrameSet_HFrameSet_onbeforeclose,this);
            this.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameMain.addEventHandler("onbeforeclose",this.mainframe_VFrameSet_HFrameSet_VFrameSet1_frameMain_onbeforeclose,this);
        };
        
        // script Compiler
        this.registerScript("packageB.xadl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName
        *  @Creator 	seungmin
        *  @CreateDate 	2018.05.09
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.05.09     	seungmin 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/
        this.gvVFrameSet		= "";
        this.gvLoginFrame		= "";
        this.gvHFrame      		= "";
        this.gvLeftFrame   		= "";
        this.gvVFrameSet1  		= "";
        this.gvTopFrame    		= "";
        this.gvWorkFrame   		= "";
        this.gvMainFrame   		= "";
        this.gvMdiFrame    		= "";
        this.gvBottomFrame   	= "";
        this.gvExtCommonPath  	= "";
        this.gvIsComBtnUse = false;	//공통 버튼 사용유무

        this.gvMenuColumns = {
        	menuId : "MENU_CD",    //  MENU ID
        	menuNm : "MENU_NM",
        	pageUrl : "MENU_URL",
        	winId : "WIN_ID",      //윈도우(프레임)아이디(열린 메뉴의 윈도우 아이디)
        	title : "TITLE",
        	menuUrl : "MENU_URL",
        	groupId : "MSTR_MENU_CD",
        	menuLevel : "MENU_TYPE"    //메뉴레벨
        };

        this.gvMax        = 15;     //열린 메뉴 최대 갯수
        this.gvWorkWinkey = "";
        this.gvWorkMenuNm = "";
        this.gvWorkMenuId = "";
        this.gvWorkTitle  = "";
        this.gvRealTrace = trace;
        this.gvSystemType = "M";	//application type (M:업무시스템, W:외부사용자(웹))

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/

        /**
         * @description Applicaton onload시 처리내역
        */
        this.Application_onload = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objEnv = nexacro.getEnvironment();
        	var objSrv = objEnv.services["svcurl"]; // service URL 설정
        	//trace("===== svcrul before  : " + objSrv.url);

        	//시스템 구분
        	objApp.gv_sysGb = "M";

        	// Frame 변수 저장
        	this.gvVFrameSet	= objApp.mainframe.VFrameSet;                                			//VFrameSet
        	this.gvLoginFrame	= objApp.mainframe.VFrameSet.frameLogin; 				   				//LoginFrame
        	this.gvHFrame       = objApp.mainframe.VFrameSet.HFrameSet;                      			//HFrame
        	this.gvLeftFrame    = objApp.mainframe.VFrameSet.HFrameSet.frameLeft;            			//leftFrame
        	this.gvVFrameSet1   = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1;           			//VFrameSet1
        	this.gvTopFrame     = objApp.mainframe.VFrameSet.frameTop;  								//TopFrame
        	this.gvWorkFrame    = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork;         //WorkForm
        	this.gvMainFrame    = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameMain;  			//mainform
        	this.gvMdiFrame     = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameNavi;  			//mdi frame
        	this.gvBottomFrame  = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameBottom;  		//bottom frame

        	// 접속경로 확인
        	trace("===== 접속경로   : " + nexacro.getProjectPath());
            var nRunMode =  objApp.gvRunMode;
        	var title    = "";
        	var xadl 	 = nexacro.getProjectPath();

        	trace("system.navigatorname : " + system.navigatorname);

        	// nexacro studio에서 구동하지 않으면 svcurl는 typedef 무시
        	if (xadl.indexOf("file://") != -1)
        	{
        		nRunMode = "WKR";
        		title 	 = "로컬(파일) - " + objApp.mainframe.titletext;
        		objSrv.set_url(objApp.gv_svcUrl_WKR);
        	}
        	// 스튜디오 및 웹 접속
        	else
        	{
        		var urlFlag= "";

        		if (system.navigatorname != "nexacro") {
        			urlFlag = "[웹]";
        		} else {
        			urlFlag = "[전용브라우져]";
        		}

        		if(nRunMode == "DEV") {	//개발
        			title = objApp.mainframe.titletext + "(개발)";
        			objSrv.set_url(objApp.gv_svcUrl_DEV);
        		} else if(nRunMode == "QA") { //QA
        			title = objApp.mainframe.titletext + "(QA)";
        			objSrv.set_url(objApp.gv_svcUrl_QA);
        			// trace 정지 설정
        			this.afnSetTraceMode(false);
        		} else if(nRunMode == "PRD") { //운영
        			title = objApp.mainframe.titletext + "(운영)";
        			objSrv.set_url(objApp.gv_svcUrl_PRD);
        			// trace 정지 설정
        			this.afnSetTraceMode(false);
        		} else {
        			nRunMode = "WKR";
        			title = "로컬" + urlFlag + " - " + objApp.mainframe.titletext;
        			objSrv.set_url(objApp.gv_svcUrl_WKR);
        		}
        	}

        	if (xadl.indexOf("http://rtong.rgbsolution.co.kr/") != -1){
        		objSrv.set_url("http://rtong.rgbsolution.co.kr/");
        	}
        	//trace("===== svcrul after  : " + objSrv.url);

         	//var srvUrl = xadl.replace("gwds/","");
        	//objSrv.set_url(srvUrl);

        	objApp.mainframe.set_titletext(title);

        	// 로그인 화면 open
        	this.gvLoginFrame.set_formurl("frame::frameLogin.xfdl");
        	this.gvVFrameSet.set_separatesize("0,0,0,0");
        };

        /**
         * @description trace 재정의하여 trace로그 생성 방지
        */
        this.afnSetTraceMode = function(bTrace)
        {
        	trace("★★ 운영접속시에는 trace 로그를 남기지 않도록 설정되었습니다.");

            nexacro.setEnvironmentVariable("gvTraceMode", bTrace);
            if (bTrace)
            {
        		trace = this.gvRealTrace;
            }
            else {
                trace = function trace(){};
            }
        }

        /**
         * @description ESC 통신중단 방지(10월 16일 버전에서는 작동하지 않음)
        */
        this.Application_onerror = function(obj,e)
        {
        	trace("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Application_onerror!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        	trace("e.statuscode : " + e.statuscode);
        	trace("e.errormsg : " + e.errormsg);

        	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
        	if (e.errorcode == -2147418039)
        	{
        		return true;
        	}
        };


        /**
         * @description 어플리케이션 종료시 로그아웃 처리.
        */
        this.Application_onbeforeexit = function(obj,e)
        {
        	this.gvTopFrame.form.fn_logout();
        };



        });

        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::pack_b.xcss");
        this.loadIncludeScript("packageB.xadl");
    };
}
)();
