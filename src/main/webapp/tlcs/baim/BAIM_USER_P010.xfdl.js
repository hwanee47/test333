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
            this.set_name("BAIM_BAIM_P010");
            this.set_titletext("비밀번호변경(팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">updateUserPw</Col><Col id=\"IN_DATASET_LIST\">dsUserInfo=dsUserInfo:A</Col><Col id=\"OUT_DATASET_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">updateUserPw</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_search02","9","103",null,"25","6",null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stc_search01","9","79",null,"25","6",null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("stc_search00","9","55",null,"25","6",null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("3");
            obj.set_text("비밀번호변경");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","9","55","92","25",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0246");
            obj.set_taborder("6");
            obj.set_text("사용자 ID");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","9","79","92","25",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1196");
            obj.set_taborder("7");
            obj.set_text("비밀번호");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","9","103","92","25",null,null,null,null,null,null,this);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T0088");
            obj.set_taborder("8");
            obj.set_text("비밀번호 재확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","286","137","68","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("2");
            obj.set_text("변경");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","104","58","246","19",null,null,null,null,null,null,this);
            obj.set_readonly("false");
            obj.set_taborder("12");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPw","104","82","246","19",null,null,null,null,null,null,this);
            obj.set_readonly("false");
            obj.set_taborder("0");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserPwRe","104","106","246","19",null,null,null,null,null,null,this);
            obj.set_readonly("false");
            obj.set_taborder("1");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",360,170,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtUserId","value","dsUserInfo","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtUserPw","value","dsUserInfo","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_USER_P010.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_USER_P010.xfdl", function() {
        /**
        *  비밀번호 변경 팝업
        *  @MenuPath
        *  @FileName 		BAIM_UESR_P010.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.03.03
        *  @Desction        비밀번호 변경 팝업
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.02		Kim Jin Hwan			최초 생성
        ************************************************************************************************
        */


         this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

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

        	// 파라미터 셋팅
        	this.dsUserInfo.setColumn(0, "USER_ID", this.getOwnerFrame().pUserId);

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
        	// 패스워드에 포커스
        	this.edtUserPw.setFocus();
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
        		// 비밀번호 변경
        		case "updateUserPw" :

        			this.gfnAlert("변경되었습니다. 재로그인 해주세요.");

        			this.close();

        		break;


        		default :
        		break;
        	}
        };


         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/


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
        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	var userId = this.edtUserId.value;
        	var userPw = this.edtUserPw.value;
        	var userPwRe = this.edtUserPwRe.value;

        	// 비밀번호
        	if( this.gfnIsNull(userPw) ){
        		this.gfnAlert("비밀번호를 입력해주세요.");
        		this.edtUserPw.setFocus();
        		return;
        	}

        	// 비밀번호 재확인
        	if( this.gfnIsNull(userPwRe) ){
        		this.gfnAlert("비밀번호 재확인을 입력해주세요.");
        		this.edtUserPwRe.setFocus();
        		return;
        	}

        	// 비밀번호, 비밀번호 재확인 비교
        	if( userPw != userPwRe ){
        		this.gfnAlert("비밀번호가 일치하지 않습니다.");
        		return;
        	}

        	// 공백문자 체크
        	var re = new RegExp("[\\s]+", "");
        	if (re.test(userPw)) {
        		this.gfnAlert("공백 문자는 사용할 수 없습니다.");
        		this.edtUserPw.setFocus();
        		return false;
        	}

        	// 1. 8자 이상 체크
        	if(userPw.length < 8)
        	{
        		this.gfnAlert("패스워드는 8자 이상이어야 합니다.");
        		this.edtUserPw.setFocus();
        		return false;
        	}


        	var pwComplexCnt = 0;
        	re.compile("[0-9]+", "");
        	if (re.test(userPw)) {
        		pwComplexCnt = pwComplexCnt + 1;
        		trace("숫자 포함 통과");
        	}

        	re.compile("[A-Za-z]+", "");
        	if (re.test(userPw)) {
        		pwComplexCnt = pwComplexCnt + 1;
        		trace("영문 포함 통과");
        	}

        	re.compile("[!-/:-@\\[-`\\{-~]+", "");
        	if (re.test(userPw)) {
        		pwComplexCnt = pwComplexCnt + 1;
        		trace("특수문자 포함 통과");
        	}

        	// 2. 비밀번호는 숫자+영문+특수문자의 조합 체크
        	if (pwComplexCnt < 3) {

        		this.gfnAlert("비밀번호는 숫자+영문+특수문자의 조합으로 가능합니다.");
        		this.edtUserPw.setFocus();
        		return false;
        	}

        	// 3. ID와 4자리 이상 동일한 비밀번호 사용 체크
        	for (var i = 0; i < userPw.length - 4; i++) {
        		if (userId.indexOf(userPw.substr(i, 4)) > -1) {

        			this.gfnAlert("ID와 4자리 이상 동일한 비밀번호는 사용할 수 없습니다.");
        			this.edtUserPw.setFocus();
        			return false;
        		}
        	}

        	// 4. 비밀번호에는 4자리 이상 반복되는 문자나 숫자 사용 체크
        	var serialCount = 1;
        	for (var i = 1; i < userPw.length; i++) {
        		if ((userPw.charAt(i) >= "0" && userPw.charAt(i) <= "9")
        			|| (userPw.charAt(i) >= "A" && userPw.charAt(i) <= "Z")
        			|| (userPw.charAt(i) >= "a" && userPw.charAt(i) <= "z")) {
        			if (userPw.charCodeAt(i-1) + 1 === userPw.charCodeAt(i)) {
        				serialCount++;
        			} else {
        				serialCount = 1;
        			}
        		} else {
        			serialCount = 1;
        		}
        		if (serialCount > 3) {
        			this.gfnAlert("비밀번호에는 4자리 이상 반복되는 문자나 숫자를 사용할 수 없습니다.");

        			this.edtUserPw.setFocus();
        			return false;
        		}
        	}

        	/****************************************************************************************************/

        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("updateUserPw");
        	});




        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("oninit",this.form_oninit,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("BAIM_USER_P010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
