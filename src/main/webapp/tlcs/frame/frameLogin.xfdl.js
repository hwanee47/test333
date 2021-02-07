(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_background("");
            this.set_name("frameLogin");
            this.set_titletext("frameLogin");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,320);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"LOGIN_ID\" size=\"256\" type=\"STRING\"/><Column id=\"PASSWORD\" size=\"256\" type=\"STRING\"/><Column id=\"LOGINTYPE\" size=\"256\" type=\"STRING\"/><Column id=\"SERVER_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CJWORLD_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_LANG\" size=\"256\" type=\"STRING\"/><Column id=\"MSG_TCD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"LOGIN_ID\">test1</Col><Col id=\"PASSWORD\">test1</Col><Col id=\"LOGINTYPE\">테스터이름</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">login</Col><Col id=\"IN_DATASET_LIST\">dsUser=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsUserInfo=dsUserInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">loginService</Col><Col id=\"SERVICE_METHOD\">login</Col></Row><Row><Col id=\"SVC_ID\">getUserGridInfo</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">gdsUserGridInfo=dsUserGridInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">commonService</Col><Col id=\"SERVICE_METHOD\">getUserGridInfo</Col></Row><Row><Col id=\"SVC_ID\">getLocaleText</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">gdsLocaleText=dsResult</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">loginService</Col><Col id=\"SERVICE_METHOD\">getLocaleInfo</Col></Row><Row><Col id=\"SVC_ID\">getLocaleMsg</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">gdsMessage=dsResult</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">loginService</Col><Col id=\"SERVICE_METHOD\">getLocaleInfo</Col></Row><Row><Col id=\"SVC_ID\">getSidoSkkList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch ds2=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">gdsSido=ds1 gdsSkk=ds2</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"QUERY_LIST\">q1=baimCommonService.getSidoList q2=baimCommonService.getSkkList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_ID\" size=\"256\" type=\"STRING\"/><Column id=\"DEPT_NM\" size=\"256\" type=\"STRING\"/><Column id=\"EMP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_WH\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CORP_IDNM\" size=\"256\" type=\"STRING\"/><Column id=\"AR_COSTC\" size=\"256\" type=\"STRING\"/><Column id=\"AR_COSTC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"AP_COSTC\" size=\"256\" type=\"STRING\"/><Column id=\"AP_COSTC_NM\" size=\"256\" type=\"STRING\"/><Column id=\"BASE_CORP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"BASE_CORP_NM\" size=\"256\" type=\"STRING\"/><Column id=\"TEL_NO\" size=\"256\" type=\"STRING\"/><Column id=\"HP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"EMAIL\" size=\"256\" type=\"STRING\"/><Column id=\"COMP_ID\" size=\"256\" type=\"STRING\"/><Column id=\"JOIN_TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"MASTER_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SEQ_NO\" size=\"256\" type=\"STRING\"/><Column id=\"LOGIN_ID\" size=\"256\" type=\"STRING\"/><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ADMIN_YN\" size=\"256\" type=\"STRING\"/><Column id=\"AGENT_ID\" size=\"256\" type=\"STRING\"/><Column id=\"AGENT_PW\" size=\"256\" type=\"STRING\"/><Column id=\"TENANT_NAME\" size=\"256\" type=\"STRING\"/><Column id=\"TENANT_TEL_NO\" size=\"256\" type=\"STRING\"/><Column id=\"AGENT_GB\" size=\"256\" type=\"STRING\"/><Column id=\"CJWORLD_ID\" size=\"256\" type=\"STRING\"/><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"SITE_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BIZ_REG_NO\" size=\"256\" type=\"STRING\"/><Column id=\"TEMPPW_MODIFY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CENTER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_SESSION_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SESSION_INVALID_BY_FORCE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BLNG_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","40","2","500","305",null,null,null,null,null,null,this);
            obj.set_background("");
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","128","117","50","35",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_text("ID");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("Static01","128","162","50","35",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_text("PW");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","336","117","84","80",null,null,null,null,null,null,this.divLogin.form);
            obj.set_background("#27538a");
            obj.set_border("0");
            obj.set_borderRadius("3px");
            obj.set_color("#ffffff");
            obj.set_taborder("4");
            obj.set_text("LOGIN");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edPw","180","162","140","35",null,null,null,null,null,null,this.divLogin.form);
            obj.set_password("true");
            obj.set_taborder("2");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edId","180","117","140","35",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            this.divLogin.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",590,320,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameLogin.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName 		frameWork.xfdl
        *  @Creator 			seungmin
        *  @CreateDate 	2018.06.23
        *  @LastModifier
        *  @LastModifyDate
        *  @Version 		1.0
        *  @Outline
        *  @Desction
        ************** 소스 수정 이력 *************************************************
        *    date          		Modifier            Description
        *******************************************************************************
        *  2018.06.23     	seungmin 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        this.objApp;
        this.objMainframe;
        this.nRunMode;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication() ;
        	this.objMainframe = this.objApp.mainframe ;
        	this.nRunMode =  this.objApp.gvRunMode;

        	//Locale Message 정보 조회.
        	this.fnSearchLocale();

        	//로컬이거나 WKR인 경우 SSO가 아닌 로그인으로 처리.(실제 운영시에는 주석 해제 필요.)
        	if(this.nRunMode == "PRD") {
        		this.objApp.gvVFrameSet.set_separatesize("0,0,0,0");
        		//SSO 로그인
        		//this.fnSsoLogin();
        	} else {
        		this.objApp.gvVFrameSet.set_separatesize("0,*,0,0");
        		this.divLogin.form.edId.setFocus();
        		//this.divLogin.form.edId.set_value("admin");
        		//this.divLogin.form.edPw.set_value("1111");
        	}

        	//==================================================================
        	//임시로 SSO가 아닌 로그인화면으로 접속 처리.
        // 	this.objApp.gvVFrameSet.set_separatesize("0,*,0,0");
        // 	this.divLogin.form.edId.setFocus();
        // 	this.divLogin.form.edId.set_value("admin");
        // 	this.divLogin.form.edPw.set_value("admin");
        	//==================================================================

        	this.form_onsize();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /**
         * SSO 로그인 transaction
         * @param {string} reLoginYn
         * @return
         * @example
         *
         * @memberOf
         */
         this.fnSsoLogin = function ()
         {
        	this.dsUserInfo.clearData();
         	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	this.dsSearch.setColumn(0, "LOGIN_ID"		, this.objApp.gv_cjworld_id);
        	this.dsSearch.setColumn(0, "LOGINTYPE"		, "SSO");
        	this.dsSearch.setColumn(0, "USER_LANG"		, "KO");
        	this.dsSearch.setColumn(0, "CJWORLD_ID"		, this.objApp.gv_cjworld_id);
        	this.dsSearch.setColumn(0, "USER_ID"		, "");

        	this.gfnLogin("login");
         };

        /**
        * form onsize 변경시
        * @return
        * @example
        * @memberOf public
        */
        this.form_onsize = function()
        {
        	var nLeft = (this.objMainframe.width / 2) - Math.round((this.divLogin.form.getOffsetWidth()) / 2);
        	var nTop = (this.objMainframe.height / 2) - Math.round((this.divLogin.form.getOffsetHeight()) / 2);

        	if(nLeft <= 0)
        	{
        		this.divLogin.form.setOffsetLeft(0);
        	}
        	else
        	{
        		this.divLogin.setOffsetLeft(nLeft);
        		this.divLogin.setOffsetTop(nTop);
        	}
        };

        /**
        * fnSetSeprateFrame
        * @return
        * @example
        * @memberOf
        */
        this.fnSetSeprateFrame = function()
        {
        	//임시 시스템 구분 설정.
        	this.objApp.gv_sysGb = "M"; //내부 사용자

        	this.objApp.gvVFrameSet.set_separatesize("50,0,*,0");

        	//gloval variable 회사세팅
        	nexacro.setEnvironmentVariable("gvUserId", this.objApp.gv_userId);
        	nexacro.setEnvironmentVariable("gvUserNm", this.objApp.gv_userNm);

        	//메뉴정보 조회.
        	//this.objApp.gvLeftFrame.form.fn_createMenu();
        	this.objApp.gvTopFrame.form.fnSearchMenu();

        	//알람푸시 Run
        	if(this.objApp.gvTopFrame.form.gStartPush != "Y") {
        		//this.objApp.gvTopFrame.form.fn_startPush();
        	}

        	//그리드 개인화 정보 조회.
        	this.gfnTransaction("getUserGridInfo");

        	//접속 사용자 정보 표시
        	//var userInfo = this.objApp.gv_userNm + "( " + this.objApp.gv_userId + " ) 님 반갑습니다.";
        	var userInfo = this.objApp.gv_userNm + "( " + this.objApp.gv_userId + " ) 님";

        	this.objApp.gvTopFrame.form.divTop.form.stcDept.set_text(this.objApp.gv_exeCorpNm);
        	this.objApp.gvTopFrame.form.divTop.form.stcUser.set_text(userInfo);
        	this.objApp.gvTopFrame.form.divTop.form.cboLang.set_value(this.objApp.gv_lang);
        	this.objApp.gvTopFrame.form.fnSetLangage();

        	this.objApp.gvTopFrame.form.divTop.form.resetScroll();
        	this.objApp.gvMainFrame.set_formurl("frame::frameMain.xfdl");


        	// 사용자 창고권한 조회
        	this.objApp.gvTopFrame.form.fnSearchWarehList();


        	// 시도, 시군구 콤보박스 데이터 조회
        	this.gfnTransaction("getSidoSkkList");


        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.Form_onsize = function(obj,e)
        {
        	this.form_onsize();
        };

        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	this.fnLogin();
        	//로컬환경에서 global dataset으로 화면열기(임시)
        // 	if (this.nRunMode == "0" || this.nRunMode == "1" || this.nRunMode == "2")
        // 	{
        // 		this.fnSetSeprateFrame();
        // 	}else{	//서버와통신
        // 		this.fnLogin();
        // 	}
        };

        /**
         * 로그인 transaction
         * @param {string} reLoginYn
         * @return
         * @example
         *
         * @memberOf
         */
        this.fnLogin = function()
        {
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	this.dsUserInfo.clearData();

        	var sUserId 	= this.divLogin.form.edId.value.trim();
        	var sPassword 	= this.divLogin.form.edPw.value.trim();

        	if(this.gfnIsNull(sUserId))
        	{
        		//this.gfnAlert("M0256");
        		this.gfnAlert("아이디를 입력해주세요.");
        		this.divLogin.form.edId.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(sPassword))
        	{
        		//this.gfnAlert("M0352");
        		this.gfnAlert("비밀번호를 입력해주세요.");
        		this.divLogin.form.edPw.setFocus();
        		return false;
        	}

        	this.dsSearch.setColumn(0, "LOGIN_ID"		, sUserId);
        	this.dsSearch.setColumn(0, "LOGINTYPE"		, "NEXA");
        	this.dsSearch.setColumn(0, "USER_LANG"		, "KO");
        	this.dsSearch.setColumn(0, "PASSWORD"		, sPassword);
        	this.dsSearch.setColumn(0, "USER_ID"		, "");

        	this.gfnLogin("login");
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
        	if(errorCode < 0) {
        		//this.gfnAlert(errorMsg);
        		this.alert(errorMsg);
        	}else{
        		if(svcID == "login") {
        			if(this.objApp.gv_rtnCode == "000") {
        				if(this.dsUserInfo.getRowCount() == 0) {
        					this.gfnAlert("M0258");
        				} else {

        					var temppwModifyYn = this.dsUserInfo.getColumn(0, "TEMPPW_MODIFY_YN"); // 임시패스워드 수정 여부

        					if( temppwModifyYn == "N" ){

        						this.fnChangeLoginPw();

        						return;
        					}

        					this.fn_setGlobalVal();
        				}
        			}
        			// 중복세션 강제로그아웃 Confirm
        			else if(this.objApp.gv_rtnCode == "950") {
        				//this.gfnAlert(this.objApp.gv_rtnMessage);

        				//this.gfnConfirm2(this.objApp.gv_rtnMessage, "", "", "gfnConfirm_session_invalid_by_force");
        				this.gfnCustomConfirm(this.objApp.gv_rtnMessage, function(sPopupId, bResult){
        					if(!bResult) return;

        					// 강제 로그아웃 처리후 로그인.
        					this.objApp.gv_sessionInvalidByForceYn = "Y";

        					this.divLogin.form.btnLogin.click();

        				});
        			}
        			else {
        				this.gfnAlert(this.objApp.gv_rtnMessage);
        			}
        		} else if(svcID == "getLocaleText") {
        			this.dsSearch.setColumn(0, "MSG_TCD", "MSG")   //메세지 Locale 구분자.
        			this.gfnLogin("getLocaleMsg");
        		}
         	}
        };


        /***********************************************************************************************
         * @function		: fnChangeLoginPw
         * @description		: 로그인 패스워드 변경 팝업창
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnChangeLoginPw = function()
        {
        	// 파라미터 설정
        	var popupId = 'popupChangeLoginPw';	//팝업ID

        	// 팝업 호출
        	var oArg = {
        				  pUserId       : this.divLogin.form.edId.value
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_USER_P010.xfdl", oArg, sPopupCallBack, oOption);
        }


        /***********************************************************************************************
         * @function: fn_setGlobalVal
         * @description: 세션 정보 설정.
         * @return N/A
        /***********************************************************************************************/
        this.fn_setGlobalVal = function ()
        {
        	this.objApp.gv_userId 			= this.dsUserInfo.getColumn(0, "USER_ID");		// 사용자id
        	this.objApp.gv_userNm 			= this.dsUserInfo.getColumn(0, "USER_NM");		// 사용자명
        	this.objApp.gv_empNo 			= this.dsUserInfo.getColumn(0, "EMP_ID");		// 사원번호
        	//this.objApp. 					= this.dsUserInfo.getColumn(0, "USER_WH");		// 거점에 속한 창고
        	this.objApp.gv_deptCd 			= this.dsUserInfo.getColumn(0, "DEPT_ID");		// 사용자 부서코드(코스트센터 코드)
        	this.objApp.gv_deptNm 			= this.dsUserInfo.getColumn(0, "DEPT_NM");		// 사용자 부서이름(코스트센터 명)
        	this.objApp.gv_arCostcId 		= this.dsUserInfo.getColumn(0, "AR_COSTC");		// (코스트센터 코드)
        	this.objApp.gv_arCostcNm 		= this.dsUserInfo.getColumn(0, "AR_COSTC_NM");	// (코스트센터 명)
        	this.objApp.gv_apCostcId 		= this.dsUserInfo.getColumn(0, "AP_COSTC");		// (코스트센터 코드)
        	this.objApp.gv_apCostcNm 		= this.dsUserInfo.getColumn(0, "AP_COSTC_NM");	// (코스트센터 명)
        	this.objApp.gv_exeCorpId 		= this.dsUserInfo.getColumn(0, "BASE_CORP_ID");	// (실행거점 코드)
        	this.objApp.gv_exeCorpNm 		= this.dsUserInfo.getColumn(0, "BASE_CORP_NM");	// (실행거점 명)
        	this.objApp.gv_telNo 			= this.dsUserInfo.getColumn(0, "TEL_NO");		// 전화번호
        	this.objApp.gv_mobNo 			= this.dsUserInfo.getColumn(0, "HP_NO");		// 휴대폰번호
        	this.objApp.gv_emailAddr 		= this.dsUserInfo.getColumn(0, "EMAIL");		// 사용자 Email 정보
        	this.objApp.gv_compCd 			= this.dsUserInfo.getColumn(0, "BIZ_REG_NO");	// 사용자 회사코드
        	//this.objApp.gv_ipAddr 			= "";											// 접속 아이피(서버로에서 받아 온다)
        	this.objApp.gv_joinType 		= this.dsUserInfo.getColumn(0, "JOIN_TYPE");	// 회원 유형
        	this.objApp.gv_masterYn 		= this.dsUserInfo.getColumn(0, "MASTER_YN");	// 마스터 계정 여부  마스터계정일 경우 Y, 서브계정일 경우 N
        	this.objApp.gv_seqNo 			= this.dsUserInfo.getColumn(0, "SEQ_NO");
        	this.objApp.gv_loginId 			= this.dsUserInfo.getColumn(0, "LOGIN_ID");
        	this.objApp.gv_authCd 			= this.dsUserInfo.getColumn(0, "AUTH_CD");
        	this.objApp.gv_adminYn 			= this.dsUserInfo.getColumn(0, "ADMIN_YN");

        	this.objApp.gv_agentID 			= this.dsUserInfo.getColumn(0, "AGENT_ID");			// 정보센터용 Id
        	this.objApp.gv_agentPW 			= this.dsUserInfo.getColumn(0, "AGENT_PW");			// 정보센터용 pw
        	this.objApp.gv_tenantTelNo 		= this.dsUserInfo.getColumn(0, "TENANT_TEL_NO");	// 콜센터 상담자용(내선번호)
        	this.objApp.gv_agentGb 			= this.dsUserInfo.getColumn(0, "AGENT_GB");			// 상담사구분
        	//this.objApp.gv_cjworld_id 		= this.dsUserInfo.getColumn(0, "CJWORLD_ID");		// cjworld ID
        	this.objApp.gv_sysGb 			= this.dsUserInfo.getColumn(0, "MENU_SYS");			// 시스템구분
        	this.objApp.gv_siteCd 			= this.dsUserInfo.getColumn(0, "SITE_CD");			// 사이트 코드
        	this.objApp.gv_dutyDv 			= this.dsUserInfo.getColumn(0, "DUTY_DV");			// 업무 구분

        	//2020.03.17 점소코드 추가
        	this.objApp.gv_branCd 			= this.dsUserInfo.getColumn(0, "BRAN_CD");
        	this.objApp.gv_oprUpBranCd 		= this.dsUserInfo.getColumn(0, "OPR_UP_BRAN_CD");
        	this.objApp.gv_mgmtUpBranCd 	= this.dsUserInfo.getColumn(0, "MGMT_UP_BRAN_CD");
        	this.objApp.gv_centerYn 		= this.dsUserInfo.getColumn(0, "CENTER_YN");


        	//2020.05.27 사용자 세션 추가
        	this.objApp.gv_userSessionId	= this.dsUserInfo.getColumn(0, "USER_SESSION_ID");
        	this.objApp.gv_sessionInvalidByForceYn = "N";

        	this.objApp.gv_blngDv			= this.dsUserInfo.getColumn(0, "BLNG_DV");			// 소속 구분
        	this.objApp.gv_custId			= this.dsUserInfo.getColumn(0, "CUST_ID");			// 소속

        	this.objApp.gv_userType			= this.dsUserInfo.getColumn(0, "USER_TYPE");		// 사용자 유형
        	this.objApp.gv_sysDv			= this.dsUserInfo.getColumn(0, "SYS_DV");			// 시스템구분 (GWDS, GWMS, GDS)



        	this.fnSetSeprateFrame();
        };

        this.divLogin_edPw_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnLogin();
        	}
        };


        this.fn_testUser = function (obj,e)
        {
        	var id = "";
        	var pw = "TEST1!";
        	if(obj.id == "sta00") {
        		id = "TESTCORP1";
        	} else if(obj.id == "sta01") {
        		id = "TESTCORP2";
        	} else if(obj.id == "sta02") {
        		id = "TESTCORP3";
        	} else if(obj.id == "sta03") {
        		id = "TESTCORP4";
        	} else if(obj.id == "sta04") {
        		id = "TESTCORP5";
        	} else if(obj.id == "sta05") {
        		id = "TESTCORP6";
        	} else if(obj.id == "sta06") {
        		id = "TESTCORP7";
        	} else if(obj.id == "sta07") {
        		id = "TESTCORP8";
        	}

        	this.divLogin.form.edId.set_value(id);
        	this.divLogin.form.edPw.set_value(pw);
        };

        this.fnSearchLocale = function ()
        {
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	this.dsSearch.setColumn(0, "MSG_TCD", "TEXT");		//Componnet Locale 구분자

        	this.gfnLogin("getLocaleText");
        };


        /***********************************************************************************************
         * @function	: fnConfirmCallback
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: rtnMsg	- String
         * @return N/A
         ***********************************************************************************************/
        this.fnConfirmCallback = function(sPopupId, rtnMsg)
        {
        	switch(sPopupId) {


        		case "gfnConfirm_session_invalid_by_force":
        			if(rtnMsg){
        				// 강제 로그아웃 처리후 로그인.
        				this.objApp.gv_sessionInvalidByForceYn = "Y";

        				this.divLogin.form.btnLogin.click();
        			}
        		break;


        		default :
        		break;
        	}

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.Form_onsize,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.edPw.addEventHandler("onkeydown",this.divLogin_edPw_onkeydown,this);
        };

        this.loadIncludeScript("frameLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
