(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("LeftFrame");
            this.set_titletext("frameLeft");
            this.set_cssclass("sdfsfds");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,958);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
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


            obj = new Dataset("dsDivSub", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"DIV_NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_SYS\" size=\"256\" type=\"STRING\"/><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">selectMenuInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsMenu=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonService.selectMenuList</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row><Row><Col id=\"SVC_ID\">selectCustMenuInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustMenu=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonService.selectCustMenuInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustMenu", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Div("divBookmark","230","40",null,null,"-216","0",null,null,null,null,this);
            obj.set_cssclass("gnb_bg");
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_visible("false");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divLeft","0","40",null,null,"14","0",null,null,null,null,this);
            obj.set_cssclass("gnb_bg");
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenuToggle",null,"0","14","60","1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_menuClose");
            obj.set_text("<");
            this.addChild(obj.name, obj);

            obj = new Button("btnMenu","0","0",null,"40","74",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_selectMenu_on");
            obj.set_tabstop("false");
            obj.set_text("MENU");
            this.addChild(obj.name, obj);

            obj = new Button("btnBookmark",null,"0","59","40","15",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabstop("false");
            obj.set_cssclass("btn_LF_BookMark_D_off");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameLeft.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath       	frame > frameLeft
        *  @FileName 		frameLeft.xfdl
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
        this.lframeSiz = 149;		//left frame width
        this.lbtnSiz = 149;			//left 메뉴 버튼 width
        this.lhBtnSiz = 60;			//left 메뉴 버튼 height
        this.btnSubMenuH = 35;      //left 서브 메뉴 버튼 height

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

        	//left frame form영역 스크롤바 none
        	this.divLeft.form.set_scrollbartype("none");


        	//북마크메뉴 위치이동
        	this.divBookmark.set_left(0);
        	this.divBookmark.set_top(40);
        	this.divBookmark.set_right(14);


        	//리사이징 처리 함수 호출.
        	this.fn_resize(obj);
        };

        /***********************************************************************************************
         * @function: fn_resize
         * @description: 리사이징 처리 함수.
         * @param : obj - form object
         * @return N/A
        /***********************************************************************************************/
        this.fn_resize = function (obj)
        {
        	this.divLeft.set_top(0);
        	this.divLeft.set_bottom(0);
        };

        /***********************************************************************************************
         * @function: fn_createMenu
         * @description: 메뉴 생성 함수.
         * @param : obj - form object
         * @return N/A
        /***********************************************************************************************/
        this.fn_createMenu = function ()
        {
        	//메뉴 정보 가져오기.
        	this.fn_menuSearch();
        };

        /***********************************************************************************************
         * @function: fn_menuSearch
         * @description: 글로벌 데이터셋 메뉴 카피
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fn_menuSearch = function ()
        {
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);

        	this.dsSearch.setColumn(0, "MENU_SYS", "M");
        	this.dsSearch.setColumn(0, "AUTH_CD", this.objApp.gv_authCd);
        	this.dsSearch.setColumn(0, "USER_ID", this.objApp.gv_userId);

        	this.gfnTransaction("selectMenuInfo");
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

        	}else{
        		if(svcID == "selectMenuInfo") {
        			//메뉴 정보 copy
        			this.objApp.gdsMenu.copyData(this.dsMenu);

        			//대메뉴 생성
        			this.divLeft_menu_create();

        			//임시로 초기 화면 설정.(주문배차 > 주문배차관리 )
        			this.gfnTransaction("selectCustMenuInfo");


        		} else if(svcID == "selectCustMenuInfo") {
        			var menuId = "";
        			if(this.dsCustMenu.rowcount > 0) {
        				menuId = this.dsCustMenu.getColumn(0,  "MENU_ID");
        				this.fnFormOpen(this.dsMenu, this.gfnFindData(this.dsMenu, "MENU_CD", menuId));
        				//if(this.gfnIsNull(menuId)) menuId = "M0000047";
        			} else {
        				//menuId = "M0000047";
        			}
        		}
         	}
        };

        /***********************************************************************************************
         * @function: fnFormOpen
         * @description: work frame 메뉴 call 처리 함수.
         * @param : objDs - 메뉴 dataset
         * @param : nTargetRow - 선택된 row
         * @param : objArg - 화면에 넘길 argument
         * @return N/A
        /***********************************************************************************************/
        this.fnFormOpen = function (objDs,nTargetRow,objArg)
        {
        	if( this.gfnIsNull(objDs) ) return;
        	if( this.gfnIsNull(nTargetRow) ) return;
        	if( this.gfnIsNull(objArg) ) objArg = [];

        	var oObj = {
        		ds    : objDs,  				 	// 메뉴 dataset
        		nRow  : nTargetRow,      			// 선택된 row
        		oArgs : objArg       				// 넘길 argument
        	};

        	this.gfnCall(oObj);
        };

        /***********************************************************************************************
         * @function: divLeft_menu_onclick
         * @description: left 대메뉴 클릭 시 이벤트 처리 함수.
         * @param : obj - left 대메뉴 버튼 object
         * @param : e - left 대메뉴 버튼 event
         * @return N/A
        /***********************************************************************************************/
        this.divLeft_menu_onclick = function(obj,e)
        {
        	var menuId = obj.menuId;
        	var menuUrl = this.objApp.gdsMenu.lookup("MENU_CD", menuId, "MENU_URL");

        	if(this.gfnIsNull(menuUrl)) {
        		this.fn_subMenuMove(menuId);
        	} else {
        		this.fnFormOpen(this.objApp.gdsMenu, this.gfnFindData(this.objApp.gdsMenu, "MENU_CD", menuId));
        	}

        	this.divLeft_setActiveClass(obj);
        };

        this.divLeft_setActiveClass = function (obj)
        {
        	var menuId = obj.menuId;

        	for(var i=0; i<this.dsMenu.rowcount; i++) {
        		if(this.dsMenu.getColumn(i, "MENU_TYPE") == 0) {
        			var menuClass = this.dsMenu.getColumn(i, "MENU_IMG_CLASS");						//메뉴 class
        			var divLefBtn = "btnLeft_" + this.dsMenu.getColumn(i, "MENU_CD");
        			var btnObj = this.gfnLookup(this.divLeft.form, divLefBtn);

        			if(menuId == this.dsMenu.getColumn(i, "MENU_CD")) {
        				btnObj.set_cssclass(menuClass + "_on");
        			} else {
        				btnObj.set_cssclass(menuClass);
        			}
        		}
        	}
        };


        /***********************************************************************************************
         * @function: divRight_menu_onclick
         * @description: left 소메뉴 클릭 시 이벤트 처리 함수.
         * @param : obj - left 소메뉴 버튼 object
         * @param : e - left 소메뉴 버튼 event
         * @return N/A
        /***********************************************************************************************/
        this.divSub_menu_onclick = function(obj,e)
        {
        	var menuId = obj.menuid;
        	var menuUrl = this.dsMenu.lookup("MENU_CD", menuId, "MENU_URL");

        	if(this.gfnIsNull(menuUrl)) {

        	} else {
        		this.fnFormOpen(this.dsMenu, this.gfnFindData(this.dsMenu, "MENU_CD", menuId));
        	}
        };

        /***********************************************************************************************
         * @function: divLeft_menu_create
         * @description: left 대메뉴 생성.
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.divLeft_menu_create = function ()
        {
        	var btnCnt = 0;
        	for(var i=0; i<this.dsMenu.getRowCount(); i++) {
        		//대메뉴 목록만 생성.
        		if(this.dsMenu.getColumn(i, "MENU_TYPE") == 0) {
        			var menuId = this.dsMenu.getColumn(i, "MENU_CD");				//메뉴 id
        			var strName = this.dsMenu.getColumn(i, "MENU_NM");				//메뉴 명
        			var menuClass = this.dsMenu.getColumn(i, "MENU_IMG_CLASS");		//메뉴 class
        			var topSize = this.lhBtnSiz * btnCnt;

        			// Creating 대메뉴 page button
        			var objBtn = new Button();
        			objBtn.init("btnLeft_" + menuId, 0, topSize, this.lbtnSiz, this.lhBtnSiz);
        			this.divLeft.addChild(objBtn.name, objBtn);
        			objBtn.set_text(strName);
        			objBtn.menuId = menuId;
        			objBtn.set_cssclass(menuClass);

        			objBtn.setEventHandler("onclick", this.divLeft_menu_onclick, this);
        			objBtn.set_visible(true);
        			objBtn.show();
        			btnCnt++;
        		}
        	}
        };

        /***********************************************************************************************
         * @function: divSub_menu_create
         * @description: left 소메뉴 생성.
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.divSub_menu_create = function(strMenuId)
        {
        	var divSubName = "divSub_" + strMenuId;
        	var leftBtnId = "btnLeft_" + strMenuId;
        	var divSubObj = this.gfnLookup(this, divSubName);
        	var leftBtnObj = this.gfnLookup(this.divLeft.form, leftBtnId);
        	var menuSort = this.dsMenu.lookup("MENU_CD", strMenuId, "SORT_MAIN");
        	var expr 			= "MSTR_MENU_CD==" + "'" +strMenuId + "'" + "&&" + "MENU_TYPE!='0'";
        	var subBtnCnt 		= this.dsMenu.getCaseCount(expr);

        	if(subBtnCnt == 0) return true;

        	if(this.gfnIsNull(strMenuId)) return true;
        	if(!this.gfnIsNull(divSubObj)) return true;

        	var objDiv = new PopupDiv();

        	objDiv.init(divSubName, this.divLeft.getOffsetWidth()-1, leftBtnObj.getOffsetTop(), 150, this.divLeft.getOffsetHeight());

        	this.addChild(divSubName, objDiv);
        	objDiv.set_background("#ffffff");
        	objDiv.set_border("1px solid #e4e4e4");
        	objDiv.setEventHandler("onmouseleave"	, this.divSubMenu_onmouseleave, this);
        	objDiv.setEventHandler("oncloseup"		, this.divSubMenu_oncloseup, this);
        	objDiv.menuId = strMenuId;
        	objDiv.show();

        	this.dsDivSub.insertRow(0);
        	this.dsDivSub.setColumn(0, "DIV_NAME", divSubName);

        	var btnCnt 			= 0;
        	var divSubHeight 	= subBtnCnt * this.btnSubMenuH + 19;

        	//서브메뉴 div 높이 설정.
        	//대메뉴 순번에 따른 서브 메뉴 위치 설정.
        	objDiv.set_height(divSubHeight);

        	if(nexacro.toNumber(menuSort) >= 5) {
        		objDiv.set_top(null);
        		objDiv.set_bottom(this.divLeft.getOffsetHeight() - leftBtnObj.getOffsetBottom());
        	}

        	for(var i=0; i<this.dsMenu.getRowCount(); i++) {
        		//소메뉴 목록만 생성.
        		if(this.dsMenu.getColumn(i, "MSTR_MENU_CD") == strMenuId && this.dsMenu.getColumn(i, "MENU_TYPE") != "0") {
        			var menuId 		= this.dsMenu.getColumn(i, "MENU_CD");				//메뉴 id
        			var strName 	= this.dsMenu.getColumn(i, "MENU_NM");				//메뉴 명
        			var menuClass 	= this.dsMenu.getColumn(i, "MENU_IMG_CLASS");		//메뉴 class
        			var topSize 	= btnCnt * this.btnSubMenuH + 9;					//서브메뉴 Top 사이즈

        			// Creating 소메뉴 page button
        			var objBtn = new Button();

        			objBtn.init("btnSub_" + menuId, 10, topSize, 130, this.btnSubMenuH);

        			objDiv.addChild(objBtn.name, objBtn);
        			objBtn.set_text(strName);
        			objBtn.menuid = menuId;

        			if(btnCnt == 0) {
        				objBtn.set_cssclass("gnb_menu_2dep_first");
        			} else {
        				objBtn.set_cssclass("gnb_menu_2dep");
        			}

        			objBtn.setEventHandler("onclick", this.divSub_menu_onclick, this);
        			objBtn.set_visible(true);
        			objBtn.set_tabstop(false);
        			objBtn.show();

        			btnCnt++;
        		}
        	}

        	return true;
        };

        /***********************************************************************************************
         * @function: fn_subMenuMove
         * @description: 소메뉴 위치 이동.
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fn_subMenuMove = function (strMenuId)
        {
        	if(this.divSub_menu_create(strMenuId)) {
        		var divSubName = "divSub_" + strMenuId;
        		var divSubObj = this.gfnLookup(this, divSubName);

        		divSubObj.trackPopupByComponent(this.divLeft, divSubObj.getOffsetLeft(), divSubObj.getOffsetTop(), divSubObj.getOffsetWidth(), divSubObj.getOffsetHeight(), "", false);
        	}
        };


        this.divSubMenu_onmouseleave = function(obj,e)
        {
        	if(e.fromobject != "[object Button]") {
        		obj.closePopup();
        	}
        };


        this.divSubMenu_oncloseup = function(obj,e)
        {
        	var findRow = this.dsMenu.findRow("MENU_CD", obj.menuId);
        	var menuClass = this.dsMenu.getColumn(findRow, "MENU_IMG_CLASS");	//메뉴 class
        	var divLefBtn = "btnLeft_" + obj.menuId;
        	var btnObj = this.gfnLookup(this.divLeft.form, divLefBtn);

        	btnObj.set_cssclass(menuClass);
        };



        /**
         * @description LeftMenu를 열고 닫아준다.
        */
        this.btnMenuToggle_onclick = function(obj,e)
        {
        	this.gfnLeftMenuToggle();

        	this.divLeft.setFocus();
        };



        this.LeftFrame_onkeydown = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objFrameWorkForm = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork.getActiveFrame().form;
        	var objActiveForm = objFrameWorkForm.divWork.form;


        	this.gfnUserFormOnKeyDownEvent(objActiveForm, e);
        };


        /***********************************************************************************************
         * @function: fnCreateLeftMenu
         * @description: 좌측메뉴 생성
         * @param : objDs - nexacro.Dataset
         * @param : sMenuId - string
         * @return N/A
        /***********************************************************************************************/
        this.fnCreateLeftMenu = function(objDs, sMenuId)
        {
        	// 좌측 메뉴 컴포넌트 삭제.
        	for(var i=this.divLeft.form.components.length-1;i>=0;i--)
        	{
        		this.divLeft.form.removeChild(this.divLeft.form.components[i].name);
        	}


        	objDs.filter("MSTR_MENU_CD == '"+sMenuId+"'");
        	this.dsMenuList.clearData();
        	this.dsMenuList.copyData(objDs, true);


        	this.lframeSiz = 149;		//left frame width
        	this.lbtnSiz = 188;			//left 메뉴 버튼 width
        	this.lhBtnSiz = 40;			//left 메뉴 버튼 height
        	this.btnSubMenuH = 35;      //left 서브 메뉴 버튼 height

        	var btnCnt = 1;
        	for(var i=0; i<this.dsMenuList.getRowCount(); i++) {

        		var menuId = this.dsMenuList.getColumn(i, "MENU_CD");				//메뉴 id
        		var strName = this.dsMenuList.getColumn(i, "MENU_NM");				//메뉴 명
        		var menuClass = this.dsMenuList.getColumn(i, "MENU_IMG_CLASS");		//메뉴 class
        		var topSize = this.lhBtnSiz * btnCnt;

        		// Creating 대메뉴 page button
        		var objBtn = new Button();
        		objBtn.init("btnLeft_" + menuId, 0, topSize, this.lbtnSiz, this.lhBtnSiz);
        		this.divLeft.addChild(objBtn.name, objBtn);
        		objBtn.set_text(strName);
        		objBtn.menuId = menuId;
        		objBtn.set_cssclass("btn_left_menu");

        		objBtn.setEventHandler("onclick", this.divLeft_menu_onclick, this);
        		objBtn.set_visible(true);
        		objBtn.show();
        		btnCnt++;

        	}

        }


        /***********************************************************************************************
         * @function: fnCreateLeftBookmarkMenu
         * @description: 북마크 메뉴 생성
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCreateLeftBookmarkMenu = function()
        {//trace(this.divBookmark.form.components.length);trace("zzzz");
        	// 좌측 북마크 컴포넌트 삭제.
        	for(var i=this.divBookmark.form.components.length-1;i>=0;i--)
        	{
        		this.divBookmark.form.removeChild(this.divBookmark.form.components[i].name);
        	}


        	this.lframeSiz = 149;		//left frame width
        	this.lbtnSiz = 188;			//left 메뉴 버튼 width
        	this.lhBtnSiz = 40;			//left 메뉴 버튼 height
        	this.btnSubMenuH = 35;      //left 서브 메뉴 버튼 height

        	var btnCnt = 0;

        	for(var i=0; i<this.objApp.gdsMyMenu.getRowCount(); i++) {

        		var menuId = this.objApp.gdsMyMenu.getColumn(i, "MENU_CD");				//메뉴 id
        		var strName = this.objApp.gdsMyMenu.getColumn(i, "MENU_NM");				//메뉴 명
        		var menuClass = this.objApp.gdsMyMenu.getColumn(i, "MENU_IMG_CLASS");		//메뉴 class
        		var topSize = this.lhBtnSiz * btnCnt;

        		// Creating 대메뉴 page button
        		var objBtn = new Button();
        		objBtn.init("btnLeftBookmark_" + menuId, 0, topSize, this.lbtnSiz, this.lhBtnSiz);
        		this.divBookmark.addChild(objBtn.name, objBtn);
        		objBtn.set_text(strName);
        		objBtn.menuId = menuId;
        		objBtn.set_cssclass("btn_left_menu");

        		objBtn.setEventHandler("onclick", this.divLeft_menu_onclick, this);
        		objBtn.set_visible(true);
        		objBtn.show();
        		btnCnt++;

        	}

        }


        this.btnOnClick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		// 메뉴
        		case "btnMenu" :

        			this.fnSetCompStyle(obj.name);
        		break;

        		// 북마크메뉴
        		case "btnBookmark" :
        			this.fnSetCompStyle(obj.name);
        		break;


        		default :
        		break;
        	}
        };





        this.fnSetCompStyle = function (btnName)
        {
        	if(btnName == "btnMenu"){
        		this.divLeft.set_visible(true);
        		this.divBookmark.set_visible(false);

        		this.btnMenu.set_cssclass("btn_LF_selectMenu_on");
        		this.btnBookmark.set_cssclass("btn_LF_BookMark_D_off");
        	}else{
        		this.divLeft.set_visible(false);
        		this.divBookmark.set_visible(true);

        		this.btnMenu.set_cssclass("btn_LF_selectMenu_off");
        		this.btnBookmark.set_cssclass("btn_LF_BookMark_D_on");

        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.LeftFrame_onkeydown,this);
            this.btnMenuToggle.addEventHandler("onclick",this.btnMenuToggle_onclick,this);
            this.btnMenu.addEventHandler("onclick",this.btnOnClick,this);
            this.btnBookmark.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("frameLeft.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
