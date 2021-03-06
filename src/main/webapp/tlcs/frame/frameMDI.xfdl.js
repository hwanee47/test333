(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_background("#fcfcfc");
            this.set_name("frameMDI");
            this.set_scrollbartype("none");
            this.set_scrolltype("none");
            this.set_titletext("frameMDI");
            if (Form == this.constructor)
            {
                this._setFormPosition(1040,29);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTab", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"TAB_ID\" size=\"256\" type=\"STRING\"/><Column id=\"TITLE\" size=\"256\" type=\"STRING\"/><Column id=\"TITLE_KO\" size=\"256\" type=\"STRING\"/><Column id=\"WIN_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBookmarkSaveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">saveBookmark</Col><Col id=\"SERVICE_BEANNAME\">commonService</Col><Col id=\"SERVICE_METHOD\">saveBookmark</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsBookmarkSaveInfo=dsBookmarkSaveInfo</Col><Col id=\"OUT_DATASET_LIST\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnNexMdi",null,"0","29","29","32",null,null,null,null,null,this);
            obj.set_background("url(\'theme://images/tab_arr_r.png\') no-repeat left");
            obj.set_border("0px none,0px none,1px solid #dddddd,1px solid #dddddd");
            obj.set_taborder("1");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreMdi",null,"0","29","29","btnNexMdi:0",null,null,null,null,null,this);
            obj.set_background("url(\'theme://images/tab_arr_l.png\') no-repeat left");
            obj.set_border("0px none,0px none,1px solid #dddddd,1px solid #dddddd");
            obj.set_taborder("0");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"0","29","29","3",null,null,null,null,null,this);
            obj.set_background("URL(\"theme://images/btn_tab_close_all.png\") no-repeat center top");
            obj.set_border("0px none,0px none,1px solid #dddddd,1px solid #dddddd");
            obj.set_taborder("4");
            obj.set_tooltiptext("Close All");
            this.addChild(obj.name, obj);

            obj = new Button("btnMaximize",null,"6","20","20","-148",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("M");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade",null,"6","20","20","-229",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("C");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","52",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Static01");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome","0","0","29","29",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_MF_home");
            obj.set_font("normal normal 10pt \"Arial\"");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Div("divTab","28","0",null,"29","87",null,null,null,null,null,this);
            obj.set_border("0px none,0px none,1px solid #dddddd");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnHorizontal",null,"6","20","20","-170",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("H");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnTilevertical",null,"6","20","20","-201",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("V");
            obj.set_visible("false");
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
        this.addIncludeScript("frameMDI.xfdl","lib::lib_Form.xjs");
        this.registerScript("frameMDI.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath       	frame > frameMDI
        *  @FileName 		frameMDI.xfdl
        *  @Creator 			seungmin
        *  @CreateDate 	2018.06.09
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.06.09     	seungmin 	           최초 생성
        *******************************************************************************
        */

        /***********************************************************************************
        * include 선언부  													               *
        ***********************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvFirstGap = 1;
        this.fvBtnGap = 0;
        this.fvTabHeight = 29;
        this.fvTabExtraRightGap = 20;

        this.fvExtraWidth = 14;
        this.fvExtraTop = 7;
        this.fvExtraHeight = 14;
        this.fvExtraBtnPrefix = "EXTRA_";

        this.fvTabMaximizeRightGap = 40;
        this.fvMaximizeWidth = 14;
        this.fvMaximizeTop = 7;
        this.fvMaximizeHeight = 14;
        this.fvMaximizeBtnPrefix = "MAXIMIZE_";

        this.fvBookmarkWidth = 14;
        this.fvBookmarkTop = 7;
        this.fvBookmarkHeight = 14;
        this.fvBookmarkBtnPrefix = "BOOKMARK_";

        this.fvTabBtnPrefix = "TAB_";
        this.OBJ_DATASET_TAB_MENU;
        this.gWinId;
        this.objApp = nexacro.getApplication() ;
        this.gTabId;

        /***********************************************************************************************
         * @function: form_onload
         * @description: FORM 온로드
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.form_onload = function(obj, e)
        {
        	this.divTab.form.set_scrollbartype("none");
        }

        /***********************************************************************************************
         * @function: fnDelTab
         * @description: 메뉴 tab 삭제
         * @param : winID - 메뉴key값
         * @return true
        /***********************************************************************************************/
        this.fnDelTab = function (winID)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow < 0) return false;
        	var tabID = this.fvTabBtnPrefix + winID;

        	// Removing Tab button.
        	this.fnDelTabBtn(tabID);
        	this.dsTab.deleteRow(nRow);
        	this.fnRedrawTab();
        	return true;
        }

        /***********************************************************************************************
         * @function: fnAddTab
         * @description: 메뉴 tab Button 동적생성
         * @param : winID - 메뉴key값
         * @param : name - 메뉴명
         * @return nRow
        /***********************************************************************************************/
        this.fnAddTab = function (winID, name)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow > -1) return nRow;

        	var tabID = this.fvTabBtnPrefix + winID;
        		nRow = this.dsTab.addRow();
        		this.dsTab.setColumn(nRow, "TAB_ID", tabID);
        		this.dsTab.setColumn(nRow, "WIN_ID", winID);
        		this.dsTab.setColumn(nRow, "TITLE" , name );

        	this.fnAddTabBtn(tabID, name);
        	this.fnRedrawTab();
        	this.bClose = true;
        	return nRow;
        }

        /***********************************************************************************************
         * @function: fnAddTabBtn
         * @description: 메뉴 tab 신규 동적 생성
         * @param : tabID - 메뉴키값
         * @param : tabName - 메뉴명
         * @return N/A
        /***********************************************************************************************/
        this.fnAddTabBtn = function (tabID, tabName)
        {
        	var tabObj;
        	var BtnObj;
        	var BtnMaximizeObj;
        	var BtnBookmarkObj;
        	var exBtnId = this.fvExtraBtnPrefix + tabID;   //extra button id
        	var maximizeBtnId = this.fvMaximizeBtnPrefix + tabID;
        	var bookmarkBtnId = this.fvBookmarkBtnPrefix + tabID;

        	var tabLength = 35;
        	var objTextWidth =  "";

        	if (this.gfnIsNull(this.fnFindObj(tabID)))
        	{
        		tabObj = new Button();
        		tabObj.init(tabID, this.fnGetLeft(tabID), 0, 0, this.fvTabHeight, null, null);
        		this.divTab.addChild(tabObj.name, tabObj);
        	}

        	tabObj.set_textAlign("left");
        	tabObj.set_padding("0px 0px 0px 20px");

        	tabObj.set_text(tabName);
        	tabObj.setEventHandler("onclick", this.btnTab_OnClick, this);
        	tabObj.set_visible(true);
        	tabObj.show();

        	var nCompWidth = nexacro.getTextSize(tabName, this.btnHome.font).nx + 120;

        	tabObj.set_cssclass("btn_MDI_02");
        	tabObj.set_width(nCompWidth);

        	// 닫기
        	if (this.fnFindObj(exBtnId) == null && tabName != "MAIN" )
        	{
        		BtnObj = new Button();
        		BtnObj.init(exBtnId, tabObj.getOffsetRight() - this.fvTabExtraRightGap, this.fvExtraTop, tabObj.getOffsetRight() - this.fvTabExtraRightGap + this.fvExtraWidth - (tabObj.getOffsetRight() - this.fvTabExtraRightGap), this.fvExtraTop + this.fvExtraHeight - this.fvExtraTop);

        		this.fnAddObj(exBtnId, BtnObj);

        		BtnObj.set_cursor("hand"); // set
        		BtnObj.setEventHandler("onclick", this.btnExtra_OnClick, this);
        		BtnObj.set_visible(true);
        		BtnObj.show();
        		BtnObj.set_cssclass("btn_MDI_03_on");
        	}

        	// 최대최소
        	if (this.fnFindObj(maximizeBtnId) == null && tabName != "MAIN" )
        	{
        		BtnMaximizeObj = new Button();
        		BtnMaximizeObj.init(maximizeBtnId, tabObj.getOffsetRight() - this.fvTabMaximizeRightGap, this.fvMaximizeTop, tabObj.getOffsetRight() - this.fvTabMaximizeRightGap + this.fvMaximizeWidth - (tabObj.getOffsetRight() - this.fvTabMaximizeRightGap), this.fvMaximizeTop + this.fvMaximizeHeight - this.fvMaximizeTop);

        		this.fnAddObj(maximizeBtnId, BtnMaximizeObj);

        		BtnMaximizeObj.set_cursor("hand"); // set
        		BtnMaximizeObj.setEventHandler("onclick", this.btnOpenMenuPop_OnClick, this);
        		BtnMaximizeObj.set_visible(true);
        		BtnMaximizeObj.show();
        		BtnMaximizeObj.set_cssclass("btn_MDI_04_on");
        	}


        	// 북마크
        	if (this.fnFindObj(bookmarkBtnId) == null && tabName != "MAIN" )
        	{
        		BtnBookmarkObj = new Button();
        		BtnBookmarkObj.init(bookmarkBtnId, tabObj.getOffsetRight() - 60, this.fvBookmarkTop, tabObj.getOffsetRight() - this.fvTabMaximizeRightGap + this.fvMaximizeWidth - (tabObj.getOffsetRight() - this.fvTabMaximizeRightGap), this.fvMaximizeTop + this.fvMaximizeHeight - this.fvMaximizeTop);

        		this.fnAddObj(bookmarkBtnId, BtnBookmarkObj);
        		BtnBookmarkObj.set_cursor("hand"); // set
        		BtnBookmarkObj.setEventHandler("onclick", this.btnBookmark_OnClick, this);
        		BtnBookmarkObj.set_visible(true);
        		BtnBookmarkObj.show();

        		var menuCd = this.gfnReplace(tabID, "TAB_win", "").substr(0,8);

        		if( this.objApp.gdsMyMenu.findRow("MENU_CD", menuCd) == -1){
        			BtnBookmarkObj.set_cssclass("btn_MDI_bookmark_N_on");
        		}
        		else{
        			BtnBookmarkObj.set_cssclass("btn_MDI_bookmark_Y_on");
        		}

        	}


        	// 탭 메뉴 우클릭 컴포넌트생성
        	this.fnCreatTabMenuRButton();

        	// 탭 메뉴 우클릭 이벤트 등록
        	this.fnSetTabOnRButtonDownEvent(tabObj);
        }

        /*********************************************************************
        * Funtion Name : fnSetTabOnRButtonDownEvent
        * Desctiption  : 탭 메뉴 마우스 우클릭 이벤트 등록
        * parameter    : tabObj       = Tab Object
        * return       : None
        **********************************************************************/
        this.fnSetTabOnRButtonDownEvent = function(tabObj)
        {
        	tabObj.setEventHandler("onrbuttondown", this.fnTabOnRButtonDown, this);
        }

        /*********************************************************************
        * Funtion Name : fnTabOnRButtonDown
        * Desctiption  : 탭 메뉴에서 마우스 우클릭시 Context Menu 처리
        * parameter    : obj       = Grid Object
        *                e         = Object Event
        * return       : None
        **********************************************************************/
        this.fnTabOnRButtonDown = function(obj, e)
        {
        	var formObj = obj.parent;

        	if (formObj.isValidObject("PopupTabMenu") != true)
        	{
        		var objComp = new PopupMenu();
        		objComp.init( "MenuItem", 30, 120, 196, 46 );
        		objComp.set_captioncolumn("text");
        		objComp.set_idcolumn("id");
        		objComp.set_levelcolumn("level");
        		objComp.set_innerdataset(this.OBJ_DATASET_TAB_MENU);
        		objComp.setEventHandler("onmenuclick", this.fnTabOnTrackPopupTabMenu, this);

        		// Add Object to Parent Form
        		formObj.addChild("PopupTabMenu", objComp);

        		objComp.show();
        	}

        	gWinId = obj.id.split(this.fvTabBtnPrefix).join("").split(this.fvExtraBtnPrefix).join("");

        	//오른쪽 마우스 버튼 클릭시 이벤트
        	formObj.PopupTabMenu.trackPopupByComponent(obj, e.canvasx, e.canvasy);
        }


        /*********************************************************************
        * Funtion Name : fnTabOnTrackPopupTabMenu
        * Desctiption  : 탭 메뉴에서 마우스 우클릭하여 메뉴 클릭시 호출되는 함수
        * parameter    : obj        = PopupMenu Object
        *                e          = 클릭한 Context MenuClickEventInfo
        * return       : None
        **********************************************************************/
        this.fnTabOnTrackPopupTabMenu = function(obj,e)
        {
        	var id = e.id;

        	switch(id)
        	{
        		// 탭 닫기
        		case "close_tab":

        			var curTab = this.fnGetCurTab();
        			this.isActiveFrame(curTab);
        			var objFrame = this.objApp.gvWorkFrame.frames;
        			var rtn = objFrame[gWinId].form.fnWorkFrameClose();
        			this.fnTabOnClose(gWinId);

        			this.bClose = true;

        		break;

        		// 다른 탭 닫기
        		case "closeOthers_tab":

        			var iFramesCnt = this.objApp.gvWorkFrame.frames.length;
        			for (var i=iFramesCnt; i>=0; i--)
        			{
        				if( i > 0 ){
        					var nWinId = this.objApp.gvWorkFrame.frames[i-1].name;

        					if(gWinId == nWinId) continue;

        					this.fnTabOnClose(this.objApp.gvWorkFrame.frames[i-1].name);
        				}
        			}
        			this.objApp.gvVFrameSet1.set_separatesize("29,0,*,36");

        			var curTab = this.fnGetCurTab();
        			this.isActiveFrame(curTab);

        		break;

        		// 전체 탭 닫기
        		case "closeAll_tab":

        			var iFramesCnt = this.objApp.gvWorkFrame.frames.length;
        			for (var i=iFramesCnt; i>=0; i--)
        			{
        				if( i > 0 ){
        					this.fnTabOnClose(this.objApp.gvWorkFrame.frames[i-1].name);
        				}
        			}
        			this.objApp.gvVFrameSet1.set_separatesize("29,0,*,36");

        		break;
        	}
        }



        /*********************************************************************
        * Funtion Name : fnCreatTabMenuRButton
        * Desctiption  : 탭 메뉴 우클릭 메뉴 데이터셋생성
        * parameter    :
        * return       : None
        **********************************************************************/
        this.fnCreatTabMenuRButton = function()
        {
        	var objApp  	= nexacro.getApplication();

        	var dsObj = new Dataset;
        	dsObj.load();

        	// 탭 Context Menu 데이터셋을 생성한다.
        	this.OBJ_DATASET_TAB_MENU = dsObj;
        	this.OBJ_DATASET_TAB_MENU.addColumn("level"  ,"STRING", 256);
        	this.OBJ_DATASET_TAB_MENU.addColumn("text"   ,"STRING", 256);
        	this.OBJ_DATASET_TAB_MENU.addColumn("id"     ,"STRING", 256);


        	// 탭 "닫기" 메뉴 설정
        	this.OBJ_DATASET_TAB_MENU.addRow();
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "level", "0");
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "text" , (objApp.gv_lang == "ko" ? "탭 닫기" : "Close"));
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "id"   , "close_tab");

        	// 탭 "다른 탭 닫기" 메뉴 설정
        	this.OBJ_DATASET_TAB_MENU.addRow();
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "level", "0");
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "text" , (objApp.gv_lang == "ko" ? "다른 탭 닫기" : "Close Others"));
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "id"   , "closeOthers_tab");

        	// 탭 "전체 닫기" 메뉴 설정
        	this.OBJ_DATASET_TAB_MENU.addRow();
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "level", "0");
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "text" , (objApp.gv_lang == "ko" ? "전체 탭 닫기" : "Close All"));
        	this.OBJ_DATASET_TAB_MENU.setColumn(this.OBJ_DATASET_TAB_MENU.rowposition, "id"   , "closeAll_tab");


        }



        /***********************************************************************************************
         * @function: fnAddTabBtn
         * @description: 메뉴 tab 이동
         * @param : winID - 메뉴키값
         * @return N/A
        /***********************************************************************************************/
        this.fnMoveTab = function (winID)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow < 0) return nRow;

        	var tabID = this.fvTabBtnPrefix + winID;
        	this.fnSetActive(tabID);
        	this.fnRedrawTab();
        }


        /**
         * 메뉴 tab 변경 처리 함수
         * @public
         * @param {string}WIN_ID fromID
         * @param {string} WIN_ID toID
         * @return
         * @example
         * @memberOf
         */

        /***********************************************************************************************
         * @function: fnChangeTab
         * @description: 메뉴 tab 변경 처리 함수
         * @param : fromID - WIN_ID fromID
         * @param : toID - WIN_ID toID
         * @return N/A
        /***********************************************************************************************/
        this.fnChangeTab = function (fromID, toID)
        {
        	var nfromRow = this.dsTab.findRow("WIN_ID", fromID);
        	var ntoRow = this.dsTab.findRow("WIN_ID", toID);
        	this.dsTab.moveRow(nfromRow, ntoRow);
        	this.fnRedrawTab();
        }


        /**
         * 메뉴 tab id가져오는 함수
         * @public
         * @param {string} 메뉴키값
         * @return
         * @example
         * @memberOf
         */
        this.fnGetTab = function (winID)
        {
        	return this.dsTab.findRow("WIN_ID", winID);
        }

        /**
         * 메뉴 현재 tab id가져오는 함수
         * @public
         * @param
         * @return  {string} winid
         * @example
         * @memberOf
         */
        this.fnGetCurTab = function ()
        {
        	if (this.dsTab.rowposition < 0)
        	{
        		return false;
        	}

        	return this.dsTab.getColumn(this.dsTab.rowposition, "WIN_ID");
        }

        /**
         * 메뉴 현재 tab 정보 가져오는 함수
         * @public
         * @param
         * @return  {string} winid
         * @example
         * @memberOf
         */
        this.fnGetTabInfo = function (winID, sCol)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow < 0)
        	{
        		return "";
        	}
        	return this.dsTab.getColumn(nRow, sCol);
        }

        /**
         * 메뉴 현재 tab title 가져오는 함수
         * @public
         * @param    {string} winID
         * @return  {string} TITLE
         * @example
         * @memberOf
         */
        this.fnGetTitle = function (winID)
        {
        	var curRow = this.dsTab.findRow("winID", winID);
        	if (this.lookup("nRow") < 0)
        	{
        		return "";
        	}
        	return this.dsTab.getColumn(curRow, "TITLE");
        }

        /**
         *  메뉴 tab title setting
         * @public
         * @param    {string} winID
         * @return  {string} TITLE
         * @example
         * @memberOf
         */
        this.fnSetTitle = function (winID, sTitle)
        {
        	var nRow = this.dsTab.findRow("WIN_ID", winID);
        	if (nRow < 0)
        	{
        		return "";
        	}

        	var tabID = this.fvTabBtnPrefix + winID;
        	var panelObj = this.fnFindObj(tabID);
        	if ((panelObj == null) || (panelObj == ""))
        	{
        		return;
        	}
        	panelObj.set_text(sTitle);
        }

        /**
         *  메뉴 tab onclick event
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.btnTab_OnClick = function (obj, e)
        {
        	var winId = obj.name.split(this.fvTabBtnPrefix).join("");
        	this.isActiveFrame(winId);
        }

        /**
         * 메뉴 tab extra버튼 클릭시 발생되는 event
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.btnExtra_OnClick = function (obj, e)
        {
        	var winId = obj.name.split(this.fvTabBtnPrefix).join("").split(this.fvExtraBtnPrefix).join("");

        	var curTab = this.fnGetCurTab();
        	this.isActiveFrame(curTab);
            var objFrame = this.objApp.gvWorkFrame.frames;
            var rtn = objFrame[winId].form.fnWorkFrameClose();
        	this.fnTabOnClose(winId);

        	this.bClose = true;
        }

        /**
         * 현재 호출메뉴 팝업으로 변환(기존 메뉴는 닫김)
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.btnOpenMenuPop_OnClick = function (obj, e)
        {
        	var winId  = obj.name.split(this.fvTabBtnPrefix).join("").split(this.fvMaximizeBtnPrefix).join("");
        	var curTab = this.fnGetCurTab();
        	this.isActiveFrame(curTab);

        	var gdsOpenMenu = this.objApp.gdsOpenMenu;
        	var nRow   		= this.objApp.gdsOpenMenu.findRow(this.objApp.gvMenuColumns.winId, winId);

        	var sWinKey	    = gdsOpenMenu.getColumn(nRow, this.objApp.gvMenuColumns.winId  ) + "_popup";
        	var sMenuId		= gdsOpenMenu.getColumn(nRow, this.objApp.gvMenuColumns.menuId );
        	var sMenuNm		= "";
        	var sPageUrl	= gdsOpenMenu.getColumn(nRow, this.objApp.gvMenuColumns.pageUrl);
        	var sTitle  	= gdsOpenMenu.getColumn(nRow, this.objApp.gvMenuColumns.title  );
        	var sGroupId    = gdsOpenMenu.getColumn(nRow, this.objApp.gvMenuColumns.groupId);

        	this.gfnSetOpenPopMenuDs(sWinKey, sMenuId, sTitle, sPageUrl, sGroupId);

        	// 팝업 호출
        	var oArguments = {
        						winkey   : sWinKey
        					 , 	menuId   : sMenuId
        					 , 	pageUrl  : sPageUrl
        					 ,  title    : sTitle
        					 , 	aArgs    : null
        					 };

        	var sUrl   = "frame::frameWorkPop.xfdl" ;
        	var sOption= {"popuptype":"modeless"
        				, "width"	 :"1596"
        				, "height"	 : "820"};
        	this.gfnOpenPopup(sWinKey, sUrl, oArguments, null, sOption);

        	// 기존 창 닫기
            var objFrame = this.objApp.gvWorkFrame.frames;
            var rtn 	 = objFrame[winId].form.fnWorkFrameClose();

        	this.fnTabOnClose(winId);
        	this.bClose = true;
        }

        /**
         * 메뉴 tab 닫기 실행 함수
         * @public
         * @param {string} winid
         * @param {string} winid
         * @return
         * @example
         * @memberOf
         */
        this.fnTabOnClose = function (winid)
        {
            var objFrame = this.objApp.gvWorkFrame.frames;

        	var nRow = this.objApp.gdsOpenMenu.findRow(this.objApp.gvMenuColumns.winId, winid);

        	var nCloseIdx = nRow;
        	var bSucc  = this.objApp.gdsOpenMenu.deleteRow(nRow);

        	// MDI 탭버튼 삭제
        	if(!this.gfnIsNull(objFrame[winid]) && nRow > -1)
        	{
        		this.bClose = false;
        		var rObj = this.objApp.gvWorkFrame.removeChild(winid);

        		//if (rObj != null)
        		//{
        			//trace("destroy 완료");
        			rObj.destroy();
        			rObj = null;
        			this.fnDelTab(winid);

        		//}
        	}

            if(objFrame.length > 0)
            {
        		//window id
        		var winId = this.objApp.gdsOpenMenu.getColumn(this.objApp.gdsOpenMenu.rowposition, this.objApp.gvMenuColumns.winId);

        		// 탭버튼을 닫은 후에 next Tab버튼 설정
        		this.fnSetActive(this.dsTab.getColumn(this.dsTab.findRow("WIN_ID", winId),"TAB_ID"));
        	}else{
        		//메뉴ID Bottom Frame에 표시
        		//this.fnSetMenuId("");
        	    //this.objApp.gvVFrameSet1.set_separatesize("29,0,*,36");
        	}
        }


        /**
         * 메뉴 북마크 등록/삭제
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.btnBookmark_OnClick = function (obj, e)
        {
        	var winId  = obj.name.split(this.fvTabBtnPrefix).join("").split(this.fvBookmarkBtnPrefix).join("");
        	var tabId = this.fvTabBtnPrefix + winId;
        	this.gTabId = tabId;

        	var menuCd = this.gfnReplace(winId, "win", "").substr(0,8);
        	var saveFlag = "";

        	// 북마크에 등록 되지 않은경우
        	if( this.objApp.gdsMyMenu.findRow("MENU_CD", menuCd) == -1){
        		saveFlag = "insert";
        	}
        	// 등록된경우
        	else{
        		saveFlag = "delete";
        	}

        	this.dsBookmarkSaveInfo.setColumn(0, "WIN_ID", winId);
        	this.dsBookmarkSaveInfo.setColumn(0, "MENU_CD", menuCd);
        	this.dsBookmarkSaveInfo.setColumn(0, "SAVE_FLAG", saveFlag);



        	this.gfnTransaction("saveBookmark");

        }


        /***********************************************************************************************
         * @function: btnNexMdi_onclick
         * @description: 메뉴 Mdi 다음  split버튼
         * @param : obj - button object
         * @param : e - button event
         * @return N/A
        /***********************************************************************************************/
        this.btnNexMdi_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        	this.fnRedrawTab();
        }

        /***********************************************************************************************
         * @function: btnPreMdi_onclick
         * @description: 메뉴 Mdi 이전   split버튼
         * @param : obj - button object
         * @param : e - button event
         * @return N/A
        /***********************************************************************************************/
        this.btnPreMdi_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() - 1);
        	this.fnRedrawTab();
        }

        /**
         * menu tab 버튼 첫번째 index 가져오는 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnGetFirstTabIndex = function ()
        {
        	for(var i=0; i < this.dsTab.rowcount;i++)
        	{
        		var tabID   = this.dsTab.getColumn(i, "TAB_ID");
        		var tabObj  = this.fnFindObj(tabID);
        		if(0 < tabObj.left) {
        			return i;
        		}
        	}
        	return -1;
        }

        /**
         * menu tab 버튼 첫번째 이동 함수
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var tabID;
        	var tabObj;
        	var btnObj;
        	var btnObj2;
        	var btnObj3;
        	var tabFirstObj;


        	nIndex = this.fnGetFirstTabIndex();
        	if (nIndex < 0)
        	{
        		return;
        	}

        	if (nMoveIdx < 0)
        	{
        		return;
        	}
        	if (nMoveIdx >= this.dsTab.rowcount)
        	{
        		return;
        	}

        	tabID = this.dsTab.getColumn(nIndex, "TAB_ID");
        	var tabFirstObj = this.fnFindObj(tabID);

        	tabID = this.dsTab.getColumn(nMoveIdx, "TAB_ID");
        	tabObj = this.fnFindObj(tabID);

        	var nShiftPos = tabObj.getOffsetLeft() - tabFirstObj.getOffsetLeft();

        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		tabID = this.dsTab.getColumn(i, "TAB_ID");
        		tabObj = this.fnFindObj(tabID);
        		btnObj = this.fnFindObj(this.fvExtraBtnPrefix + tabID);
        		btnObj2 = this.fnFindObj(this.fvMaximizeBtnPrefix + tabID);
        		btnObj3 = this.fnFindObj(this.fvBookmarkBtnPrefix + tabID);
        		tabObj.move(tabObj.getOffsetLeft() - nShiftPos, tabObj.getOffsetTop());
        		if(this.gfnIsNull(btnObj) == false ){
        			btnObj.move(btnObj.getOffsetLeft() - nShiftPos, btnObj.getOffsetTop());
        			btnObj2.move(btnObj2.getOffsetLeft() - nShiftPos, btnObj2.getOffsetTop());
        			btnObj3.move(btnObj3.getOffsetLeft() - nShiftPos, btnObj3.getOffsetTop());
        		}
        	}
        }

        /**
         * menu tab 현재 버튼 이동
         * @public
         * @param {string} tabID
         * @return
         * @example
         * @memberOf
         */
        this.fnSetActive = function (tabID)
        {
        	var winId = tabID.split(this.fvTabBtnPrefix).join("");
        	var nRow = this.dsTab.findRow("TAB_ID", tabID);
        	if (nRow < 0)
        	{

        		return false;
        	}

        	this.dsTab.set_rowposition(nRow);
        	this.fnSetActiveBtn(tabID);
        	this.fnSetActiveFrame(winId);

        	//메뉴ID Bottom Frame에 표시
        	this.fnSetMenuId(winId);

        	return true;
        }


        /**
         * WorkFrame 활성화/비활성화
         * @public
         * @param {string} winId
         * @return
         * @example
         * @memberOf
         */
        this.fnSetActiveFrame = function (winId)
        {
        	var framesInfo 		= this.objApp.gvWorkFrame.frames;
        	var iFramesCnt 		= this.objApp.gvWorkFrame.frames.length;
        	var bottomFrame 	= this.objApp.gvBottomFrame;

        	for (var i=0; i<iFramesCnt; i++)
        	{
        		if(this.objApp.gvWorkFrame.frames[i].name == winId) {
        			this.objApp.gvWorkFrame.frames[i].set_visible(true);
        		} else {
        			this.objApp.gvWorkFrame.frames[i].set_visible(false);
        		}
        	}
        };

        /**
         * 메뉴ID Bottom Frame에 표시
         * @public
         * @param {string} menuId
         * @return
         * @example
         * @memberOf
         */
        this.fnSetMenuId = function (winId)
        {
        	var objFrame 		= this.objApp.gvWorkFrame.frames;
        	var bottomFrame 	= this.objApp.gvBottomFrame;

        	if(objFrame.length > 0) {
        		var activeMenuId = this.objApp.gdsOpenMenu.lookupAs(this.objApp.gvMenuColumns.winId, winId, this.objApp.gvMenuColumns.pageUrl);
        		//bottomFrame.form.divBottom.form.stcMenuId.set_text(activeMenuId);
        	} else {
        		//bottomFrame.form.divBottom.form.stcMenuId.set_text("");
        	}
        };


        /**
         * menu tab 현재 버튼 이동
         * @public
         * @param {string} tabID
         * @return
         * @example
         * @memberOf
         */
        this.fnSetActiveBtn = function (tabID)
        {
        	var TabObj;
        	var BtnObj;
        	var BtnMaximizeObj;
        	var BtnBookmarkObj;

        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		TabObj = this.fnFindObj(this.dsTab.getColumn(i, "TAB_ID"));
        		BtnObj = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "TAB_ID"));
        		BtnMaximizeObj = this.fnFindObj(this.fvMaximizeBtnPrefix + this.dsTab.getColumn(i, "TAB_ID"));
        		BtnBookmarkObj = this.fnFindObj(this.fvBookmarkBtnPrefix + this.dsTab.getColumn(i, "TAB_ID"));

        		if(tabID == this.dsTab.getColumn(i, "TAB_ID"))
        		{
        			TabObj.set_cssclass("btn_MDI_02");
        			BtnObj.set_cssclass("btn_MDI_03_on");
        			BtnMaximizeObj.set_cssclass("btn_MDI_04_on");
        			//BtnBookmarkObj.set_cssclass("btn_MDI_05_on");

        			var menuCd = this.gfnReplace(tabID, "TAB_win", "").substr(0,8);

        			if( this.objApp.gdsMyMenu.findRow("MENU_CD", menuCd) == -1){
        				BtnBookmarkObj.set_cssclass("btn_MDI_bookmark_N_on");
        			}
        			else{
        				BtnBookmarkObj.set_cssclass("btn_MDI_bookmark_Y_on");
        			}

        			this.fnShowTabBtn(i);
        		}
        		else
        		{
        		    TabObj.set_cssclass("btn_MDI_01");
        		    BtnObj.set_cssclass("btn_MDI_03_off");
        		    BtnMaximizeObj.set_cssclass("btn_MDI_04_off");

        			var noActiveTabId = this.dsTab.getColumn(i, "TAB_ID");

        			var menuCd = this.gfnReplace(noActiveTabId, "TAB_win", "").substr(0,8);

        			if( this.objApp.gdsMyMenu.findRow("MENU_CD", menuCd) == -1){
        				BtnBookmarkObj.set_cssclass("btn_MDI_bookmark_N_off");
        			}
        			else{
        				BtnBookmarkObj.set_cssclass("btn_MDI_bookmark_Y_off");
        			}
        		}
        	}
        }

        /**
         * menu tab 현재 버튼 보여주는 함수
         * @public
         * @param {string} nIdx
         * @return
         * @example
         * @memberOf
         */
        this.fnShowTabBtn = function (nIdx)
        {
        	var i;
        	var nLeft;
        	var nRight;

        	var tabObj = this.fnFindObj(this.dsTab.getColumn(nIdx, this.lookup("_ID")));
        	nLeft = tabObj.getOffsetLeft();
        	nRight = tabObj.getOffsetRight();

        	if(0 <= nLeft && this.divTab.getOffsetWidth() >= nRight)
        	{
        		return;
        	}

        	nRight = tabObj.getOffsetRight();
        	nLeft = tabObj.getOffsetLeft();

        	if (nLeft < 0)
        	{
        		this.fnMoveFirst(nIdx);
        		return;
        	}

        	for (var i = this.fnGetFirstTabIndex() + 1; i < this.dsTab.rowcount; i++)
        	{
        		tabObj = this.fnFindObj(this.dsTab.getColumn(i, "TAB_ID"));
        		if (nRight - tabObj.getOffsetLeft() <= this.divTab.getOffsetWidth())
        		{
        			break;
        		}
        		this.fnMoveFirst(i);
        	}
        }

        /**
         * menu tab 삭제
         * @public
         * @param {string} tabID
         * @return
         * @example
         * @memberOf
         */
        this.fnDelTabBtn = function (tabID)
        {
        	var exBtnId = this.fvExtraBtnPrefix + tabID;
        	var maximizeBtnId = this.fvMaximizeBtnPrefix + tabID;
        	var bookmarkBtnId = this.fvBookmarkBtnPrefix + tabID;
        	var TabObj = this.fnFindObj(tabID);
        	var BtnObj = this.fnFindObj(exBtnId);
        	var BtnMaximizeObj = this.fnFindObj(maximizeBtnId);
        	var BtnBookmarkObj = this.fnFindObj(bookmarkBtnId);

        	var nShitLeft = TabObj.getOffsetWidth() + this.fvBtnGap;
        	var curRow = this.dsTab.findRow("TAB_ID", tabID);

        	this.fnRemoveObj(exBtnId);
        	this.fnRemoveObj(maximizeBtnId);
        	this.fnRemoveObj(bookmarkBtnId);
        	this.fnRemoveObj(tabID);

        	for (var i = curRow + 1; i < this.dsTab.rowcount; i++)
        	{
        		TabObj 			= this.fnFindObj(this.dsTab.getColumn(i, "TAB_ID"));
        		BtnObj 			= this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "TAB_ID"));
        		BtnMaximizeObj 	= this.fnFindObj(this.fvMaximizeBtnPrefix + this.dsTab.getColumn(i, "TAB_ID"));
        		BtnBookmarkObj 	= this.fnFindObj(this.fvBookmarkBtnPrefix + this.dsTab.getColumn(i, "TAB_ID"));

        		TabObj.move(TabObj.getOffsetLeft() - nShitLeft, TabObj.getOffsetTop());
        		BtnObj.move(BtnObj.getOffsetLeft() - nShitLeft, BtnObj.getOffsetTop());
        		BtnMaximizeObj.move(BtnMaximizeObj.getOffsetLeft() - nShitLeft, BtnMaximizeObj.getOffsetTop());
        		BtnBookmarkObj.move(BtnBookmarkObj.getOffsetLeft() - nShitLeft, BtnBookmarkObj.getOffsetTop());
        	}
        	this.bClose = true;
        }

        /**
         * menu tab 찾는 함수
         * @public
         * @param {string} tabID
         * @return
         * @example
         * @memberOf
         */
        this.fnFindObj = function (strId)
        {
        	return this.divTab.form.components[strId];
        }

        /**
         * menu tab 삭제  함수
         * @public
         * @param {string} strId
         * @return
         * @example
         * @memberOf
         */
        this.fnRemoveObj = function (strId)
        {
        	if (this.fnFindObj(strId) == null)
        	{
        		return;
        	}
        	var strObj = this.divTab.removeChild(strId);
        	if (strObj != null)
        	{
        		strObj.destroy();
        	}
        }

        /**
         * menu tab 추가   함수
         * @public
         * @param {string} strId
         * @return
         * @example
         * @memberOf
         */
        this.fnAddObj = function (strId, obj)
        {
        	return this.divTab.addChild(strId, obj);
        }

        /**
         * menu tab 체크
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnRedrawTab = function ()
        {
        	var tabObj;
        	var exBtnObj;

        	this.fnCheckShowBtnAll();
        	this.fnSetTabSpinBtnShow();
        }

        /**
         * menu tab 모든 버튼 체크
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnCheckShowBtnAll = function ()
        {
        	if (this.dsTab.rowcount == 0) return;

        	var tabFirstObj = this.fnFindObj(this.dsTab.getColumn(0, "TAB_ID"));
        	var tabLastObj = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, "TAB_ID"));
        	var nLeft = tabFirstObj.getOffsetLeft();
        	var nRight = tabLastObj.getOffsetRight();

        	if (this.divTab.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        		return;
        	}
        }

        /**
         * left size조정
         * @public
         * @param
         * @return
         * @example
         * @memberOf
         */
        this.fnGetLeft = function (tabID)
        {
        	var curRow = this.dsTab.findRow("TAB_ID", tabID);
        	if (curRow == 0) return this.fvFirstGap;

        	var prevTab = this.fnFindObj(this.dsTab.getColumn(curRow - 1, "TAB_ID"));
        	return prevTab.getOffsetRight() + this.fvBtnGap;
        }

        /**
         * width size조정
         * @public
         * @param {object} 버튼
         * @param {name}   버튼명
         * @return
         * @example
         * @memberOf
         */
        this.fnGetWidth = function (obj, name)
        {

            var tabID = obj.name;
        	var curRow = this.dsTab.findRow("TAB_ID", tabID);
        	var TabObj = this.fnFindObj(this.dsTab.getColumn(curRow, "TAB_ID"));
        	var objSize = nexacro.getTextSize(name, obj.font);//   obj.currentstyle.font);
        	//var objSize = nexacro.getTextSize( strText, this.Static00.font );

        	return objSize.nx + 30;
        }

        /***********************************************************************************************
         * @function: btnArrange_onclick
         * @description: mdi arrange 처리 함수
         * @param : obj - button object
         * @param : e - button event
         * @return N/A
        /***********************************************************************************************/
        this.btnArrange_onclick = function(obj,  e)
        {
            var strType = obj.name.replace("btn", "");
        	this.fnArrangeWin(strType);
        }

        /**
         * mdi spin 버튼 visible 처리
         * @public
         * @return
         * @example
         * @memberOf
         */
        this.fnSetTabSpinBtnShow = function ()
        {
        	var tabObj;

        	if(this.dsTab.rowcount == 0)
        	{
        		this.btnPreMdi.set_enable(false);
        		this.btnNexMdi.set_enable(false);
        		return;
        	}

        	tabObj = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, "TAB_ID"));

        	if(this.divTab.getOffsetWidth() < tabObj.getOffsetRight())
        	{
        		this.btnNexMdi.set_enable(true);
        	}
        	else
        	{
        		this.btnNexMdi.set_enable(false);
        	}

        	tabObj = this.fnFindObj(this.dsTab.getColumn(0, "TAB_ID"));

        	if(tabObj.getOffsetLeft() < 0)
        	{
        		this.btnPreMdi.set_enable(true);
        	}
        	else
        	{
        		this.btnPreMdi.set_enable(false);
        	}
        }

        /**
         * 열려있는 윈도우 화면을 정렬
         * @param	: 	strType: 정렬 타입
         * @return	:   N/A
         */
        this.fnArrangeWin = function(strType)
        {
            strType = strType.toLowerCase();
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = this.objApp.gvWorkFrame.frames.length;

        	if (this.objApp.gdsOpenMenu.getRowCount() < 1) return;

        	switch(strType)
        	{
        		case "maximize" :
        		    var curWinId = this.objApp.gvWorkFrame.getActiveFrame().name;
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.objApp.gvWorkFrame.frames[i].set_openstatus("maximize");
        				this.objApp.gvWorkFrame.frames[i].set_showtitlebar(false);
        				this.objApp.gvWorkFrame.frames[i].set_border("0px solid #006666");
        			}

        			this.isActiveFrame(curWinId);
        		break;

        		case "closeall" :
        			for (var i=iFramesCnt; i>=0; i--)
        			{
        				if( i > 0 ){
        					this.fnTabOnClose(this.objApp.gvWorkFrame.frames[i-1].name);
        				}
        			}
        			this.objApp.gvVFrameSet1.set_separatesize("29,0,*,36");
        		break;

        		case "hidden" :
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.objApp.gvWorkFrame.frames[i].set_showtitlebar(true);
        				this.objApp.gvWorkFrame.frames[i].set_border("1px solid #7f7f7b");
        				this.objApp.gvWorkFrame.frames[i].set_borderRadius("3px 3px");
        				this.objApp.gvWorkFrame.frames[i].set_openstatus("minimize");
        			}

        			this.objApp.gvWorkFrame.arrange(strType);
        		break;

        		default :
        		    this.objApp.gvVFrameSet1.set_separatesize("29,*,0,36");
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.objApp.gvWorkFrame.frames[i].set_showtitlebar(true);
        				this.objApp.gvWorkFrame.frames[i].set_border("1px solid #7f7f7b");
        				this.objApp.gvWorkFrame.frames[i].set_borderRadius("3px 3px");
        				this.objApp.gvWorkFrame.frames[i].set_openstatus("normal");
        				this.objApp.gvWorkFrame.frames[i].titlebar.closebutton.set_enable(false);
        			}

        			this.objApp.gvWorkFrame.arrange(strType);

        		break;
        	}
        }

         /**
         * 윈도우 키를 기준으로 열려있는 화면 여부 확인
         * @private
         * @param {string} winid: 윈도우 생성 키
         * @param {string} aArgs  : 전달인자
         * @return {boolen}
         * @example
         *
         * @memberOf
         */
        this.isActiveFrame = function (winid,  aArgs)
        {
        	var framesInfo = this.objApp.gvWorkFrame.frames;

        	if(this.gfnIsNull(winid)){return true;}

        	if(framesInfo[winid])
        	{
        	    this.objApp.gvVFrameSet1.set_separatesize("29,*,0,36");
        		this.fnMoveTab(winid);   //tab이동

        		framesInfo[winid].setFocus();
        		return true;
        	}
        }

         /**
         * left 펼침 접힘 실행
         * @private
         * @param {object} o
         * @param {object} oBtn
         * @return {boolen}
         * @example
         *
         * @memberOf
         */
        this.fnLeftMenuAction = function(o, oBtn)
        {
        	if(this.objApp.gvHFrame.separatesize == "0,*")
        	{
        		this.objApp.gvHFrame.set_separatesize("240,*");
        	}
        	else
        	{
        		this.objApp.gvHFrame.set_separatesize("0,*");
        	}
        }

         /**
         * 홈버튼 클릭
         * @return {boolen}
         * @example
         * @memberOf
         */
        this.btnhome_onclick = function(obj,e)
        {
        	this.objApp.gvVFrameSet1.set_separatesize("29,0,*,36");
        }

        this.form_onsize = function(obj,e)
        {
        	this.fnRedrawTab();
        };

        this.frameMDI_onkeydown = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var objFrameWorkForm = objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.framesetWork.getActiveFrame().form;
        	var objActiveForm = objFrameWorkForm.divWork.form;

        	this.gfnUserFormOnKeyDownEvent(objActiveForm, e);
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
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {

        		// 북마크 저장
        		case "saveBookmark" :

        			this.objApp.gvTopFrame.form.fnSearchBookmark();

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
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeydown",this.frameMDI_onkeydown,this);
            this.btnNexMdi.addEventHandler("onclick",this.btnNexMdi_onclick,this);
            this.btnPreMdi.addEventHandler("onclick",this.btnPreMdi_onclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnMaximize.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCascade.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnHome.addEventHandler("onclick",this.btnhome_onclick,this);
            this.divTab.addEventHandler("onclick",this.div_Tab_onclick,this);
            this.btnHorizontal.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnTilevertical.addEventHandler("onclick",this.btnArrange_onclick,this);
        };

        this.loadIncludeScript("frameMDI.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
