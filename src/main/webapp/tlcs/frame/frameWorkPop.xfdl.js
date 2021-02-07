(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameTop");
            this.set_scrollbartype("none");
            this.set_scrolltype("none");
            this.set_titletext("frameTop");
            if (Form == this.constructor)
            {
                this._setFormPosition(1680,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDispatch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHPR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DEP_NODE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ARR_NODE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DEP_REQ_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"ARR_REQ_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"SO_NO\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHPR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"TRO_SCD\" size=\"256\" type=\"STRING\"/><Column id=\"CAR_NO\" size=\"256\" type=\"STRING\"/><Column id=\"DEP_NODE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ARR_NODE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DEP_REQ_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"ARR_REQ_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"AMT\" size=\"256\" type=\"STRING\"/><Column id=\"RATE_AMT\" size=\"256\" type=\"STRING\"/><Column id=\"REMK\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtm", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MSG\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTalk", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MSG\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"HEAD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">selectWebPush</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsWebPush=dsWebPush</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">redisService</Col><Col id=\"SERVICE_METHOD\">selectUserPush</Col></Row><Row><Col id=\"SVC_ID\">deleteWebPushInfo</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsSearch dsDispatch=dsCopyDispatch</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">redisService</Col><Col id=\"SERVICE_METHOD\">deleteUserPush</Col></Row><Row><Col id=\"SVC_ID\">getWarehAuthList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSubSearch1</Col><Col id=\"OUT_DATASET_LIST\">gdsWarehAuthList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonService.getWarehAuthList</Col></Row><Row><Col id=\"SVC_ID\">logout</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">loginService</Col><Col id=\"SERVICE_METHOD\">logout</Col></Row><Row><Col id=\"SVC_ID\">selectMenuList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsMenuList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonService.selectMenuList</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row><Row><Col id=\"SVC_ID\">selectMenuBtnAuthList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsMenuBtnAuthList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonService.selectMenuBtnAuthList</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row><Row><Col id=\"SVC_ID\">selectBookmarkList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsBookmarkList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonService.selectBookmarkList</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWebPush", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MESSAGE\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReturn", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MSG\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopyDispatch", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHPR_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DEP_NODE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"ARR_NODE_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DEP_REQ_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"ARR_REQ_DATE\" size=\"256\" type=\"STRING\"/><Column id=\"SO_NO\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLang", this);
            obj._setContents("<ColumnInfo><Column id=\"LANG_CD\" size=\"256\" type=\"STRING\"/><Column id=\"LANG_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"LANG_CD\">ko</Col><Col id=\"LANG_NM\">한국어</Col></Row><Row><Col id=\"LANG_CD\">en</Col><Col id=\"LANG_NM\">English</Col></Row><Row><Col id=\"LANG_CD\">zh</Col><Col id=\"LANG_NM\">中國</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuList", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MSTR_MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_URL\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_MAIN\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_SUB\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_IMG_CLASS\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NM\">dsfsdf</Col></Row><Row><Col id=\"MENU_NM\">메인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookmarkList", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMenuBtnAuthList", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_NM\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MSTR_MENU_CD\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_URL\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_MAIN\" size=\"256\" type=\"STRING\"/><Column id=\"SORT_SUB\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_IMG_CLASS\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"MENU_NM\">dsfsdf</Col></Row><Row><Col id=\"MENU_NM\">메인</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_formscrollbartype("none");
            obj.set_taborder("17");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"50","0",null,null,null,null,null,this.divTop.form);
            obj.set_cssclass("bg_top");
            obj.set_taborder("0");
            obj.set_text("");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btn00",null,"0","87","50","-430",null,null,null,null,null,this.divTop.form);
            obj.set_cssclass("btn_drop_down");
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Edit("edt00","1728","11","234","27",null,null,null,null,null,null,this.divTop.form);
            obj.set_cssclass("top_sel01");
            obj.set_taborder("2");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Button("btn07","1962","10","36","28",null,null,null,null,null,null,this.divTop.form);
            obj.set_cssclass("btn_top_search01");
            obj.set_taborder("3");
            obj.set_text("btn07");
            obj.set_visible("false");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcUser",null,"15","190","18","10",null,null,null,null,null,this.divTop.form);
            obj.set_color("#ffffff");
            obj.set_fittocontents("width");
            obj.set_font("normal 700 12px/normal \"나눔고딕\"");
            obj.set_taborder("6");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("sta04",null,"16","2","18","stcUser:10",null,null,null,null,null,this.divTop.form);
            obj.set_color("#fefefe");
            obj.set_fittocontents("width");
            obj.set_taborder("4");
            obj.set_text("l");
            obj.set_textAlign("center");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcDept",null,"15","40","18","222",null,null,null,null,null,this.divTop.form);
            obj.set_color("#ffffff");
            obj.set_fittocontents("width");
            obj.set_font("normal bold 12px/normal \"맑은 고딕\"");
            obj.set_taborder("5");
            obj.set_textAlign("right");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("sta01","22","8","138","31",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("7");
            obj.set_text("SBLNC");
            obj.set_color("white");
            obj.set_font("normal bold 18px/normal \"나눔고딕\"");
            obj.set_cursor("pointer");
            this.divTop.addChild(obj.name, obj);

            obj = new Div("divTopMenu","203","10",null,null,"290","0",null,null,null,null,this.divTop.form);
            obj.set_taborder("8");
            obj.set_formscrolltype("horizontal");
            this.divTop.addChild(obj.name, obj);

            obj = new Combo("cboLang",null,"10","90","23","450",null,null,null,null,null,this.divTop.form);
            obj.set_autoselect("true");
            obj.set_codecolumn("LANG_CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("LANG_NM");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("dsLang");
            obj.set_taborder("9");
            obj.set_type("dropdown");
            obj.set_visible("false");
            obj.set_text("한국어");
            obj.set_value("ko");
            obj.set_index("0");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("stcLogout",null,"15","175","18","sta04:10",null,null,null,null,null,this.divTop.form);
            obj.set_color("#ffffff");
            obj.set_fittocontents("width");
            obj.set_font("normal 700 12px/normal \"나눔고딕\"");
            obj.set_taborder("10");
            obj.set_text("로그아웃");
            obj.set_textAlign("right");
            obj.set_cursor("pointer");
            this.divTop.addChild(obj.name, obj);

            obj = new PopupDiv("divTalk","917","380","463","354",null,null,null,null,null,null,this);
            obj.set_background("transparent");
            obj.set_border("0px");
            obj.set_boxShadow("0px 3px 5px #dadada");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("web00","0","0","463","354",null,null,null,null,null,null,this.divTalk.form);
            obj.set_border("0px");
            obj.set_taborder("0");
            obj.set_useurlhistory("false");
            this.divTalk.addChild(obj.name, obj);

            obj = new WebBrowser("webAlarm","5","70","91","77",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchFocus","1401","50","54","34",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1680,50,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameWork_copy.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath       	frame > frameTop
        *  @FileName 		frameTop.xfdl
        *  @Creator 			seungmin
        *  @CreateDate 	2018.06.09
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.06.09     	seungmin 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp;

        this.gAlarmCss 		= "top_alert_tx01";
        this.gAlarmCss_off 	= "top_alert_tx01_off";
        this.gDivTop 		= this.divTop.form;
        this.gMSecond		= 15000;
        this.gStartPush		= "";
        /***********************************************************************************************
         * @function: form_onload
         * @description: FORM 온로드
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
            this.objApp = nexacro.getApplication();

        };

        this.fn_startPush = function ()
        {
        	this.fn_setWebTalk();

        	//알람 애니메이션 동적생성
        	if (system.navigatorname != "nexacro")
        		this.fn_setAnimation();

        	if (system.navigatorname == "nexacro")
        		this.fn_setWebAlarm(); 	// 푸쉬알람 연동
        	else
        		this.gfnPushRun();		// WebPush 실행.


        	this.fn_alarmPush();

        	this.gStartPush = "Y";
        };

        /***********************************************************************************************
         * @function	: fn_setAnimation
         * @description	: 알람 깜빡거림용 애니메이션 동적생성
         * @param 		: N/A
         * @return 		  N/A
        /***********************************************************************************************/
        this.nOpacity = 100;
        this.nIndex   =  -1;
        this.fn_setAnimation = function ()
        {
        	var aAnimation = new Array(this.divTop.form.stcDispatch, this.divTop.form.stcResult, this.divTop.form.stcRtm, this.divTop.form.stcTalk, this.divTop.form.stcReturn);

        	for (var i=0; i<aAnimation.length; i++)
        	{
        		var sCompId = (aAnimation[i].name).replace("stc","ani");
        		var oComp   = new nexacro.Animation(sCompId, this); // stcDispatch

        		this.addChild(sCompId, oComp);

        		oComp.set_duration(this.gMSecond);
        		oComp.set_easing("linear");
        		oComp.set_loop(true);
        		oComp.set_loopcount(0);
        		oComp.addTarget(sCompId, aAnimation[i], "left:"+aAnimation[i].left);
        		oComp.setEventHandler( "onrun", function(obj, e)
        										 {
        											if (system.navigatorname == "nexacro") return;

        											if (this.nOpacity ==  40) this.nIndex = +1;
        											if (this.nOpacity == 100) this.nIndex = -1;

        											 this.nOpacity = this.nOpacity + (this.nIndex*1);
        											 this.divTop.form.components[obj.name.replace("ani","stc")].set_opacity(this.nOpacity*0.01);

        										 }, this);
        	}
        };

        /***********************************************************************************************
         * @function: fn_alarmPush
         * @description: 알람 푸시 실행 함수
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fn_alarmPush = function ()
        {
        	//WebPush 정보 조회.
        	this.dsWebPush.clearData();
        	//this.gfnTransaction("selectWebPush");
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
        	if(errorCode < 0) {
        		//this.gfnAlert(errorMsg);
        		this.alert(errorMsg);
        	}else{
        		if(svcID == "selectWebPush") {
        			for(var i=0; i<this.dsWebPush.rowcount; i++) {
        				this.gfnSetPushInfoDs(this.dsWebPush.getColumn(i, "MESSAGE"));
        			}

        			//알림 Count 설정.
        			this.fn_pushCount();
        		}
        		else if (svcID == "getWarehAuthList"){

        			// 창고권한에 등록된 창고가 1개 이상일 경우 "전체" 추가.
        			if(this.objApp.gdsWarehAuthList.getRowCount()>1){
        				this.objApp.gdsWarehAuthList.insertRow();
        				this.objApp.gdsWarehAuthList.setColumn(0,'WAREH_CD','');
        				this.objApp.gdsWarehAuthList.setColumn(0,'WAREH_NM', '전체');
        			}



        			// 글로벌 변수 설정.
        			//this.objApp.gv_warehCd = this.dsWarehAuthList.getColumn(this.dsWarehAuthList.rowposition, "WAREH_CD");



        		}
        		else if (svcID == "logout"){
        			// 로그인 창으로 이동.

        			// 로그인 화면 open
        			var objApp = nexacro.getApplication();

        			/*var iFramesCnt = this.objApp.gvWorkFrame.frames.length;
        			for (var i=iFramesCnt; i>=0; i--)
        			{
        				if( i > 0 ){
        					//objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.frameNavi.form.fnTabOnClose(this.objApp.gvWorkFrame.frames[i-1].name);
        					this.fnTabOnClose(this.objApp.gvWorkFrame.frames[i-1].name);
        				}
        			}*/
        			//this.objApp.gvWorkFrame.getActiveFrame().form.reload();
        			//this.objApp.gvMdiFrame.form.reload();
        			this.objApp.gvMdiFrame.form.fnArrangeWin("closeall");
        			//

        			this.gvVFrameSet	= objApp.mainframe.VFrameSet;                                			//VFrameSet
        			this.gvLoginFrame	= objApp.mainframe.VFrameSet.frameLogin; 				   				//LoginFrame
        			this.gvLoginFrame.set_formurl("frame::frameLogin.xfdl");
        			this.gvVFrameSet.set_separatesize("0,*,0,0");

        			this.gvLoginFrame.form.divLogin.form.edId.setFocus();
        			this.gvLoginFrame.form.divLogin.form.edPw.set_value("");
        		}
        		else if (svcID == "selectMenuList"){

        			//메뉴 정보 copy
        			this.objApp.gdsMenu.copyData(this.dsMenuList);

        			// 대메뉴 생성
        			this.fnCreateTopMenu();

        		}
        		else if (svcID == "selectMenuBtnAuthList"){

        			//메뉴 정보 copy
        			this.objApp.gdsMenuBtnAuth.copyData(this.dsMenuBtnAuthList);


        		}
        		else if (svcID == "selectBookmarkList"){
        			// 북마크 정보 copy
        			this.objApp.gdsMyMenu.copyData(this.dsBookmarkList);

        			// 좌측 북마크메뉴 생성
        			this.objApp.gvLeftFrame.form.fnCreateLeftBookmarkMenu();


        			// 좌측 북마크메뉴 포커스
        			this.objApp.gvLeftFrame.form.btnBookmark.setFocus();
        			this.objApp.gvLeftFrame.form.fnSetCompStyle("btnBookmark");

        			// MDI 북마크 버튼 활성화|비활성화
        			this.objApp.gvMdiFrame.form.fnSetActiveBtn(this.objApp.gvMdiFrame.form.gTabId);

        		}

         	}
        };


        /***********************************************************************************************
         * @function: fn_pushCount
         * @description: 알람 푸시 count Display 처리 함수.
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fn_pushCount = function ()
        {
        	this.gDivTop.stcDispatch.set_opacity(1);
        	this.gDivTop.stcResult.set_opacity(1);
        	this.gDivTop.stcRtm.set_opacity(1);
        	this.gDivTop.stcTalk.set_opacity(1);
        	this.gDivTop.stcReturn.set_opacity(1);

        	this.fn_setAlerm("Dispatch"	);
        	this.fn_setAlerm("Result"	);
        	this.fn_setAlerm("Rtm"		);
        	this.fn_setAlerm("Talk"		);
        	this.fn_setAlerm("Return"	);

        	/*
        	var disCnt 		= this.dsDispatch.rowcount;
        	var resCnt 		= this.dsResult.rowcount;
        	var rtmCnt 		= this.dsRtm.rowcount;
        	var talkCnt 	= this.dsTalk.rowcount;

        	var disCss		= (disCnt  > 0 ? this.gAlarmCss : this.gAlarmCss_off);
        	var resCss		= (resCnt  > 0 ? this.gAlarmCss : this.gAlarmCss_off);
        	var rtmCss		= (rtmCnt  > 0 ? this.gAlarmCss : this.gAlarmCss_off);
        	var talkCss		= (talkCnt > 0 ? this.gAlarmCss : this.gAlarmCss_off);

        	//알람별 건수 표시
        	this.gDivTop.stcDispatch.set_text(disCnt);
        	this.gDivTop.stcResult.set_text(resCnt);
        	this.gDivTop.stcRtm.set_text(rtmCnt);
        	this.gDivTop.stcTalk.set_text(talkCnt);

        	//건수 표시 cssclass 처리.
        	this.gDivTop.stcDispatch.set_cssclass(disCss);
        	this.gDivTop.stcResult.set_cssclass(resCss);
        	this.gDivTop.stcRtm.set_cssclass(rtmCss);
        	this.gDivTop.stcTalk.set_cssclass(talkCss);

        	//팝업에 건수 표시
        	this.divDispatch.form.stcDisCnt.set_text(disCnt);
        	this.divResult.form.stcResCnt.set_text(resCnt);
        	this.divRtm.form.stcRtmCnt.set_text(rtmCnt);
        	//this.divTalk.form.stcTalkCnt.set_text(talkCnt);
        	*/
        };

        /***********************************************************************************************
         * @function	: fn_setAlerm
         * @description	: 알람 푸시 count Display 처리 함수.
         * @param 		: N/A
         * @return 		  N/A
        /***********************************************************************************************/

        this.frameTop_ontimer = function(obj,e)
        {
        	var oStc = this.divTop.form.components["stc" + e.timerid];
        	if (oStc.opacity==1)
        		oStc.set_opacity(0.4);
        	else
        	    oStc.set_opacity(  1);
        };

        this.fn_setAlerm = function (gubun)
        {
        	var oDst     = this.objects["ds" +gubun];
        	var oStc     = this.divTop.form.components["stc"+gubun];
        	var oStcNone = this.divTop.form.components["stc"+gubun+"None"];
        	var nCnt 	 = oDst.getRowCount();

        	if (nCnt > 0)
        	{
        		oStc.set_visible(true);
        		oStcNone.set_visible(false);

        		oStc.bringToFront();

        		  if (system.navigatorname == "nexacro") this.setTimer(gubun, 500);
        		else 									this.objects["ani"+gubun].play();
        	}
        	else
        	{
        		oStc.set_visible(false);
        		oStcNone.set_visible(true);

        		oStcNone.bringToFront();

        		if (system.navigatorname == "nexacro")
        			this.killTimer(gubun);
        		else
        			this.objects["ani"+gubun].pause();
        	}

        	oStc.set_text(nCnt); 		// 알람별 건수 표시

        	if (!(gubun == "Talk" || gubun == "Return")) {
        		var oPop = this.components["div"+gubun].form.components["stc"+gubun.substr(0,3)+"Cnt"];
        		oPop.set_text(nCnt);	// 팝업에 건수 표시
        	}
        };

        /***********************************************************************************************
         * @function: fn_alarm_onclick
         * @description: 알람 푸시 정보 display 처리 함수.
         * @param : obj - Static Object
         * @param : e - Static Event
         * @return N/A
        /***********************************************************************************************/
        this.fn_alarm_onclick = function(obj,e)
        {
        	var objNm = (obj.id.replace("stc", "")).replace("btn", "").replace("None","");
        	var strBtn = obj.id.replace("stc", "btn").replace("None","");
        	var objBtn = this.gDivTop.lookup(strBtn);
        	var x = 0;
        	var y = nexacro.toNumber(objBtn.height) + 5;

        	if(objNm == "Dispatch") {
        		this.divDispatch.trackPopupByComponent(objBtn, x, y);
        	} else if(objNm == "Result") {
        		this.divResult.trackPopupByComponent(objBtn, x, y);
        	} else if(objNm == "Rtm") {
        		this.divRtm.trackPopupByComponent(objBtn, x, y);
        	} else if(objNm == "Talk") {
        		this.divTalk.trackPopupByComponent(objBtn, x, y);
        	} else if(objNm == "Return") {
        		if(this.dsReturn.rowcount > 0) {
        			//복화 화면 오픈.
        			this.fn_callMenuReturn();
        		}
        	}
        };

        this.fn_popUpDivClose_onclick = function(obj,e)
        {
         	var divId = obj.name.replace("btn", "div");
         	var objDiv = this.lookup(divId);
         	objDiv.closePopup();
        };


        this.fn_popUpDiv_oncloseup = function(obj,e)
        {
        	this.dsCopyDispatch.clearData();
        	if(obj.id == "divDispatch") {
        		this.dsCopyDispatch.copyData(this.dsDispatch);
        		this.dsDispatch.clearData();
        	} else if(obj.id == "divResult") {
        		this.dsResult.clearData();
        	} else if(obj.id == "divRtm") {
        		this.dsRtm.clearData();
        	} else if(obj.id == "divTalk") {
        		this.dsTalk.clearData();
        	}

        	//Redis 정보 삭제.
        	var redisKey = obj.id.replace("div", "Push_");
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	this.dsSearch.setColumn(0, "HEAD", redisKey);
        	this.gfnTransaction("deleteWebPushInfo");

        	this.fn_pushCount();
        };

        this.divTop_btn00_onclick = function(obj,e)
        {
        	var cssId = obj.cssclass;

        	if(cssId == "btn_drop_down") {
        		obj.set_cssclass("btn_drop_up");
        		this.divUserItem.trackPopupByComponent(obj, 0, 50);
        		this.divTop.form.btn00.setFocus();
        	}
        };

        this.divUserItem_oncloseup = function(obj,e)
        {
        	this.divTop.form.btn00.set_cssclass("btn_drop_down");
        };

        this.web00_onloadcompleted = function(obj,e)
        {
        	var objApp = nexacro.getApplication();

        	var param = {
        		pushServer 		: objApp.gv_pushServer,
        		pushUser		: objApp.gv_pushUser,
        		pushPassword	: objApp.gv_pushPassword,
        		userId 			: objApp.gv_userId,
        		userInfo 		: objApp.gv_exeCorpNm + "/" + objApp.gv_userNm + "/" + objApp.gv_userId
        	}

        	obj.callMethod("fn_onload", param);
        };

        this.fn_setWebTalk = function()
        {
        	var objEnv = nexacro.getEnvironment();
        	var objSrv = objEnv.services["svcurl"];
        	var url = objSrv.url + "jsp/push/messagePush.jsp";

        	this.divTalk.form.web00.set_url(url);
        };

        this.webAlarm_onloadcompleted = function(obj,e)
        {
        	// WebPush 실행.
        	this.gfnPushRun();
        };

        this.webAlarm_onusernotify = function(obj,e)
        {
        	if (e.userdata!="true") return;

        	var html_window = obj.getProperty("document");
        	var oTextarea   = html_window.callMethod("getElementById","pushMessage");

        	this.gfnSetPushInfoDs(oTextarea.getProperty("value"));
        };

        this.fn_setWebAlarm = function()
        {
        	var objEnv = nexacro.getEnvironment();
        	var objSrv = objEnv.services["svcurl"];
        	var url 	= objSrv.url + "jsp/push/alarmPush.jsp";

        	this.webAlarm.set_url(url);
        };

        this.fn_logout = function ()
        {
        	//this.objApp.exit();

        	this.gfnLogin("logout");
        };

        this.fn_callMenuReturn = function ()
        {
        	//주문배차 > 개인복화화면 으로 이동
        	var menuId = "M0000125";
        	this.objApp.gvLeftFrame.form.fnFormOpen(this.objApp.gvLeftFrame.form.dsMenu, this.gfnFindData(this.objApp.gvLeftFrame.form.dsMenu, "MENU_CD", menuId));

        	//Redis 정보 삭제.
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	this.dsSearch.setColumn(0, "HEAD", "Push_Return");
        	this.gfnTransaction("deleteWebPushInfo");

        	this.dsReturn.clearData();
        	this.fn_pushCount();
        };

        /***********************************************************************************************
         * @function: divTop_cboLang_onitemchanged
         * @description: 언어 선택 시 이벤트 처리 함수.
         * @param : obj - nexacro.Combo
         * @param : e - nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.divTop_cboLang_onitemchanged = function(obj,e)
        {
        	this.objApp.gv_lang = e.postvalue;

        	this.objApp.gvMdiFrame.form.btnCloseAll.click();
        	this.objApp.gvLeftFrame.form.reload();
        	this.objApp.gvLoginFrame.form.reload();
        	this.objApp.gvMainFrame.form.reload();
        };

        this.fnSetLangage = function()
        {
        	//다국어 처리.
        	this.gfnFormSetLang(this);
        };




        this.divTop_cboWareh_onitemchanged = function(obj,e)
        {
        	// 글로벌 변수 설정.
        	this.objApp.gv_warehCd = e.postvalue;
        };



        this.fnSearchWarehList = function()
        {
        	// 창고정보 조회
        	// 로그인 사용자 창고권한 조회
        	// 조회조건 셋팅
        	this.dsSubSearch1.setColumn(0, "USER_ID", this.objApp.gv_userId);	// 사용자 아이디
        	this.dsSubSearch1.setColumn(0, "DUTY_DV", this.objApp.gv_dutyDv);	// 사용자 업무구분 (01:일반사용자, 02:창고관리자, 03:배송관리자, 99:시스템관리자)

        	this.gfnTransaction("getWarehAuthList");

        	// 배송관리자는 상단의 창고변경 콤포넌트 안보이게.
        	/*if(this.objApp.gv_dutyDv == "03"){
        		this.divTop.form.cboWareh.set_visible(false);
        	}*/
        }

        this.frameTop_onkeydown = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objFrameWorkForm = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork.getActiveFrame().form;
        	var objActiveForm = objFrameWorkForm.divWork.form;

        	this.gfnUserFormOnKeyDownEvent(objActiveForm, e);
        };



        /***********************************************************************************************
         * @function: fnSearchTopMenu
         * @description: 어플리케이션 상단 대메뉴 & 북마크 조회 + 권한별 메뉴 버튼권한리스트 조회
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchMenu = function()
        {

        	this.dsSearch.setColumn(0, "USER_ID", this.objApp.gv_userId);


        	this.gfnTransaction("selectMenuList");
        	this.gfnTransaction("selectMenuBtnAuthList");
        	this.fnSearchBookmark();

        }

        this.fnSearchBookmark = function()
        {
        	this.dsSearch.setColumn(0, "USER_ID", this.objApp.gv_userId);
        	this.gfnTransaction("selectBookmarkList");
        }


        /***********************************************************************************************
         * @function: fnCreateTopMenu
         * @description: 메뉴생성
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCreateTopMenu = function()
        {

        	var btnCnt = 0;
        	this.lbtnSiz = 125;			//left 메뉴 버튼 width
        	this.lhBtnSiz = 40;			//left 메뉴 버튼 height
        	this.btnSubMenuH = 35;      //left 서브 메뉴 버튼 height

        	for(var i=0; i<this.objApp.gdsMenu.getRowCount(); i++) {

        		//대메뉴 목록만 생성.
        		if(this.objApp.gdsMenu.getColumn(i, "MENU_TYPE") == 0) {
        			var menuId = this.objApp.gdsMenu.getColumn(i, "MENU_CD");				//메뉴 id
        			var strName = this.objApp.gdsMenu.getColumn(i, "MENU_NM");				//메뉴 명
        			var menuClass = this.objApp.gdsMenu.getColumn(i, "MENU_IMG_CLASS");		//메뉴 class
        			//var topSize = this.lhBtnSiz * btnCnt;
        			var leftSize = (this.lbtnSiz * btnCnt)+2;

        			// 대메뉴 버튼 생성
        			var objBtn = new Button();
        			objBtn.init("btnTop_" + menuId, leftSize, 0, this.lbtnSiz-2, this.lhBtnSiz);
        			this.divTop.form.divTopMenu.addChild(objBtn.name, objBtn);
        			objBtn.set_text(strName);
        			objBtn.menuId = menuId;
        			objBtn.set_cssclass('btn_top_menu');
        			objBtn.setEventHandler("onclick", this.fnTopMenuOnClick, this);
        			objBtn.set_visible(true);
        			objBtn.show();
        			//trace(strName);

        			// 메뉴처음 라인표시
        			if( i==0){
        				var objDiv = new Div();
        				objDiv.init("div_"+menuId, leftSize, 10, 2, 12);
        				this.divTop.form.divTopMenu.addChild(objDiv.name, objDiv);
        				objDiv.set_text("l");
        				objDiv.set_cssclass('div_top_menu');
        				objDiv.set_visible(true);
        				objDiv.show();
        			}

        			btnCnt++;
        		}
        	}

        }


        /***********************************************************************************************
         * @function: fnTopMenuOnClick
         * @description: 대메뉴클릭
         * @param : obj - nexacro.Button
         * @param : e - nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnTopMenuOnClick = function(obj,e)
        {
        	var menuId = obj.menuId;
        	//var menuUrl = this.dsMenuList.lookup("MENU_CD", menuId, "MENU_URL");


        	// 좌측 메뉴생성
        	this.objApp.gvLeftFrame.form.fnCreateLeftMenu(this.dsMenuList, menuId);

        	// 좌측 메뉴 포커스
        	//this.objApp.gvLeftFrame.form.btnMenu.setFocus();
        	this.objApp.gvLeftFrame.form.fnSetCompStyle("btnMenu");
        }


        this.divTop_sta01_onclick = function(obj,e)
        {
        	// 홈 메뉴 이동
        	this.objApp.gvVFrameSet1.set_separatesize("29,0,*,36");
        };

        this.divTop_stcLogout_onclick = function(obj,e)
        {
        	// 현재 열려있는 화면 모두 닫기
        	var iFramesCnt = this.objApp.gvWorkFrame.frames.length;
        	for (var i=iFramesCnt; i>=0; i--)
        	{
        		if( i > 0 ){
        			this.objApp.gvMdiFrame.form.fnTabOnClose(this.objApp.gvWorkFrame.frames[i-1].name);
        		}
        	}
        	this.objApp.gvVFrameSet1.set_separatesize("29,0,*,36");

        	// 탑 메뉴 컴포넌트 삭제.
        	for(var i=this.divTop.form.divTopMenu.form.components.length-1;i>=0;i--)
        	{
        		this.divTop.form.divTopMenu.form.removeChild(this.divTop.form.divTopMenu.form.components[i].name);
        	}

        	// 좌측 메뉴 컴포넌트 삭제.
        	for(var i=this.objApp.gvLeftFrame.form.divLeft.form.components.length-1;i>=0;i--)
        	{
        		this.objApp.gvLeftFrame.form.divLeft.form.removeChild(this.objApp.gvLeftFrame.form.divLeft.form.components[i].name);
        	}

        	// 메인 삭제.
        	this.objApp.gvMainFrame.set_formurl("");

        	// 로그아웃
        	this.fn_logout();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("ontimer",this.frameTop_ontimer,this);
            this.addEventHandler("onkeydown",this.frameTop_onkeydown,this);
            this.divTop.form.btn00.addEventHandler("onclick",this.divTop_btn00_onclick,this);
            this.divTop.form.sta01.addEventHandler("onclick",this.divTop_sta01_onclick,this);
            this.divTop.form.cboLang.addEventHandler("onitemchanged",this.divTop_cboLang_onitemchanged,this);
            this.divTop.form.stcLogout.addEventHandler("onclick",this.divTop_stcLogout_onclick,this);
            this.divTalk.addEventHandler("oncloseup",this.fn_popUpDiv_oncloseup,this);
            this.divTalk.form.web00.addEventHandler("onloadcompleted",this.web00_onloadcompleted,this);
            this.webAlarm.addEventHandler("onloadcompleted",this.webAlarm_onloadcompleted,this);
            this.webAlarm.addEventHandler("onusernotify",this.webAlarm_onusernotify,this);
        };

        this.loadIncludeScript("frameWork_copy.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
