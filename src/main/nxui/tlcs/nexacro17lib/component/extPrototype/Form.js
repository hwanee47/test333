/*
 ===============================================================================
 == 폼과 관련된 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnFormOnLoad      : Form Load 시 공통 기능 처리
 ● gfnFormSetInit     : Form에 속한 컨트롤들의 공통 기능 처리 함수.
 ● gfnAllCallFunction : Form에 속한 모든 컴포넌트를 함수의 인자로 넘겨주고 함수 호출처리
 ● gfnSetAuth         : 컨트롤의 기능들에 대한 권한을 설정한다.
 ● gfnSetEnableCtrl   : 화면안의 컨트롤을 활성화 또는 비활성화 처리
 ● gfnNewChildFrame   : 신규 ChildFrame 생성
 ● gfnFormSetLang     : 다국어 처리.
 */
  
var pForm = nexacro.Form.prototype;
//var nCnt  = 0;
/*******************************************************************************
 * Function Name: gfnFormOnLoad
 * Description	: Form Load 시 공통 기능 처리
 * Arguments	: obj :열린 화면 객체
 * Return 		: None
 ********************************************************************************/
pForm.objApp = nexacro.getApplication() ;
pForm.gfnFormOnLoad = function (obj)
{
	this.gfnFormSetInit(obj);	
	this.gfnFormSetLang(obj);
	
	
	// 폼 경로 타이틀 설정
	this.gfnFormSetMenuFullPath(obj);
	
	// 폼 버튼 권한 설정
	this.gfnFormSetBtn(obj);
}

/*
pForm.gfnDevkeydown = function(obj, e)
{
	if(e.ctrlkey && e.keycode == 80){
		var oArg           = {objForm:obj};
		var sPopupCallBack = "gfnCloseKeydownCallback";
		var oOption        = {};
		this.gfnOpenPopup("GetFormComponentText_"+nCnt, "sample::GetFormComponentText.xfdl", oArg, "gfnCloseKeydownCallback", oOption);
	}
};

pForm.gfnCloseKeydownCallback = function(){ nCnt++; }
*/
/*******************************************************************************
 * Function Name: gfnFormSetInit
 * Description	: Form에 속한 컨트롤들의 공통 기능 처리 함수.
 * Arguments	: obj :객체
 * Return 		: None
 ********************************************************************************/
pForm.gfnFormSetLang = function (obj)
{
	var objApp  = nexacro.getApplication();
	var arrComp = obj.components;
	var nLength = arrComp.length;
	
	for(var i=0; i<nLength; i++){
		if (arrComp[i] instanceof nexacro.Div){
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.gfnIsNull(arrComp[i].url))
				this.gfnFormSetLang(arrComp[i].form); //재귀함수
		}else if (arrComp[i] instanceof nexacro.Tab){
			var nPages = arrComp[i].tabpages.length;
			for (var j=0; j<nPages;j++){	
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				this.gfnChangeLang(arrComp[i].tabpages[j]);
				if (this.gfnIsNull(arrComp[i].tabpages[j].url))
					this.gfnFormSetLang(arrComp[i].tabpages[j].form); //재귀함수
				
			}
		}else{
			//다국어 처리.
			this.gfnChangeLang(arrComp[i]);
		}
	}
}

/*******************************************************************************
 * Function Name: gfnFormSetInit
 * Description	: Form에 속한 컨트롤들의 공통 기능 처리 함수.
 * Arguments	: obj :객체
 * Return 		: None
 ********************************************************************************/
pForm.gfnFormSetInit = function (obj)
{
	var objApp  = nexacro.getApplication();
	var arrComp = obj.components;
	var nLength = arrComp.length;
	
	for(var i=0; i<nLength; i++){
		if (arrComp[i] instanceof nexacro.Div){
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.gfnIsNull(arrComp[i].url))
				this.gfnFormSetInit(arrComp[i].form); //재귀함수
		}else if (arrComp[i] instanceof nexacro.Tab){
			var nPages = arrComp[i].tabpages.length;
			for (var j=0; j<nPages;j++){	
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.gfnIsNull(arrComp[i].tabpages[j].url))
					this.gfnFormSetInit(arrComp[i].tabpages[j].form); //재귀함수
			}
		}else{
			if (arrComp[i] instanceof nexacro.Grid){
				if(arrComp[i].visible){
					//그리드 공통 옵션 기능 설정.
					this.gfnGridCommonOption(arrComp[i]);
				
					this.gfnGridRButtonInit(arrComp[i]);
					var nRow    = objApp.gdsUserGridInfo.findRowExpr("USER_ID=='"+objApp.gv_userId+"'&&MENU_ID=='"+this.name+"'&&GRID_ID=='"+arrComp[i].name+"'");
					if(nRow > -1){
						
						var sFormat = "<Formats>"+objApp.gdsUserGridInfo.getColumn(nRow, "GRID_FORMAT")+"</Formats>";
						arrComp[i].set_enableredraw(false);
						arrComp[i].set_formats(sFormat);
						arrComp[i].set_enableredraw(true);
						
						//그리드 히든 처리전 그리드 포맷 설정.
						arrComp[i].ORG_HIDDEN_FORMAT = objApp.gdsUserGridInfo.getColumn(nRow, "GRID_FORMAT");
					} else {
						//그리드 히든 처리전 그리드 포맷 설정.
						arrComp[i].ORG_HIDDEN_FORMAT = arrComp[i].getCurFormatString();
					}
				}
			}
			//다국어 처리.
			// this.gfnChangeLang(arrComp[i]);
		}
	}
}



/********************************************************************************
 * Function Name: gfnGridCommonOption
 * Description	: 그리드 공통 옵션 기능 설정.
 * Arguments	: grdObj:그리드 object
 ********************************************************************************/
pForm.gfnGridCommonOption = function (grdObj)
{
	grdObj.set_cellsizingtype("col");			//그리드 컬럼 사이즈 조정 옵션
	grdObj.set_cellmovingtype("col,band");		//그리드 컬럼 이동 옵션
};

/********************************************************************************
 * Function Name: gfnGetComponentValue
 * Description	: 프로그램의 특정 컴포넌트의 Attribute값을 찾는 함수
 *				  (ex) gfnGetComponentValue("stInputBox", "value")
 * Arguments	: strID(Component의 ID값), strAttributeNM(Attribute Name)
 * Return 		: Attribute	값
 ********************************************************************************/
pForm.gfnGetComponentValue = function (objId, sProp)
{
	var idObj = this.gfnGetComponent(objId);
	if (this.gfnIsNull(idObj)) 
	{
		return "";
	}
	return idObj[sProp];
}

/********************************************************************************
 * Function Name: gfnGetComponent
 * Description	: 프로그램의 특정 컴포넌트를 컴포넌트의 id값을
 * 				  이용하여 찾아내는 함수
 * Arguments	: componentId(Component의 ID값), obj:찾기시작할 container
 * Return 		: Component Object
 ********************************************************************************/
pForm.gfnGetComponent = function (objId, obj)
{
	if (this.gfnIsNull(obj)) 
	{
		obj = this;
	}
	return this.gfnAllCallFunction(obj, this.gfnIsComponent, true, objId);
}

/********************************************************************************
 * Function Name: gfnIsComponent
 * Description	: 프로그램의 특정 컴포넌트를 컴포넌트의 id값을
 * 				  이용하여 찾아내는 함수
 * Arguments	: obj:컴포넌트 container, id: component Id
 * Return 		: Component Object
 ********************************************************************************/
pForm.gfnIsComponent = function (Obj, id)
{
	if (Obj.name == id) 
	{
		return Obj;
	}
}

/*******************************************************************************
 * Function Name: gfnAllCallFunction
 * Description	: Form에 속한 모든 컴포넌트를 함수의 인자로 넘겨주고 함수 호출처리
 * Arguments	: obj :컨테이너(Form, Div), FunctionObj: 호출함수, bObjects: Invisible object 포함여부, paramObj: 함수에 넘겨줄 파라메터
 * Return 		: retVal
 ********************************************************************************/
pForm.gfnAllCallFunction = function (obj, FunctionObj, bObjects, paramObj)
{
	var strType;
	var retVal;
	for (var i = 0; i < obj.components.length; i++) 
	{
		strType = obj.components[i].toString().toUpperCase();

		retVal = FunctionObj.call(this, obj.components[i], paramObj);

		if (this.gfnIsNull(retVal) == false) 
		{
			return retVal;
		}

		if (obj.components[i].components) 
		{
			switch (strType) 
			{
				case "[OBJECT TAB]":
					retVal = this.gfnAllCallFunction(obj.components[i], FunctionObj, bObjects, paramObj);
					if (this.gfnIsNull(retVal) == false) 
					{
						return retVal;
					}
					break;
				case "[OBJECT TABPAGE]":
				case "[OBJECT DIV]":
				case "[OBJECT POPUPDIV]":
					if (this.gfnIsNull(obj.components[i].url) == true) 
					{
						retVal = this.gfnAllCallFunction(obj.components[i], FunctionObj, bObjects, paramObj);
						if (this.gfnIsNull(retVal) == false) 
						{
							return retVal;
						}
					}
					break;
			}
		}
	}

	if (bObjects == true && obj.objects) 
	{
		for (var i = 0; i < obj.objects.length; i++) 
		{
			retVal = FunctionObj.call(this, obj.objects[i], paramObj);
			if (this.gfnIsNull(retVal) == false) 
			{
				return retVal;
			}
		}
	}
}

/**********************************************************************************
 * Function Name   : gfnSetAuth
 * Description     : 컨트롤의 기능들에 대한 권한을 설정한다.
 * Arguments       : obj: 컨트롤 객체, sVal: 권한을 설정값
 * Return          :
 **********************************************************************************/
pForm.gfnSetAuth = function (obj, sVal)
{
	
	if( this.parent == "[object ChildFrame]" ){
		var strRole = this.gfnGetMenuInfo(this.gfn_getMenuId(), this.objApp.gv_MenuAuthCol);
	} else {	
		var strRole = this.parent.gfnGetMenuInfo(this.parent.gfn_getMenuId(), this.objApp.gv_MenuAuthCol);
	}
	
	if (this.gfnIsNull(strRole)) 
	{
		return;
	}

	// strRole = "1001";

	switch (sVal) 
	{
		case this.objApp.gv_insertAct:
			// 데이터 추가
			if (strRole.substr(0, 1) != "1") 
			{
				this.gfnSetEnableCtrl(obj, false);
			}
			break;
		case this.objApp.gv_updateAct:
			// 데이터 수정
			if (strRole.substr(1, 1) != "1") 
			{
				this.gfnSetEnableCtrl(obj, false);
			}
			break;
		case this.objApp.gv_deleteAct:
			// 데이터 삭제
			if (strRole.substr(2, 1) != "1") 
			{
				this.gfnSetEnableCtrl(obj, false);
			}
			break;
		case this.objApp.gv_commitAct:
			// 데이터 저장 (서버에 저장처리)
			if ((strRole.substr(0, 1) != "1") && 
				(strRole.substr(1, 1) != "1") && 
				(strRole.substr(2, 1) != "1")) 
			{
				this.gfnSetEnableCtrl(obj, false);
			}
			break;
		case this.objApp.gv_outputAct:
			// 데이터 프린트 또는 PC(파일)로 저장
			if (strRole.substr(3, 1) != "1") 
			{
				this.gfnSetEnableCtrl(obj, false);
			}
			break;
		default:
			break;
	}
}

/**********************************************************************************
 * Function Name   : gfnSetEnableCtrl
 * Description     : 화면안의 컨트롤을 활성화 또는 비활성화 처리
 * Arguments       : obj: 컨트롤 객체, bEnable: 활성화 여부
 * Return          :
 **********************************************************************************/
pForm.gfnSetEnableCtrl = function (obj, bEnable)
{
	var strType = obj.toString().toUpperCase();

	switch (strType) 
	{
		case "[OBJECT TAB]":
		case "[OBJECT DIV]":
		case "[OBJECT ACTIVEX]":
			obj.set_enable(bEnable);
			break;
		case "[OBJECT TABPAGE]":
			obj.Parent.removeChild(obj.name);
			break;
		case "[OBJECT GRID]":
		case "[OBJECT LISTBOX]":
			obj.set_readonly(!(bEnable));
			obj.set_enableevent(bEnable);
			break;
		case "[OBJECT EDIT]":
		case "[OBJECT CALENDAR]":
		case "[OBJECT MASKEDIT]":
		case "[OBJECT TEXTAREA]":
			obj.set_readonly(!(bEnable));
			break;
		default:
			obj.set_enable(bEnable);
			obj.set_enableevent(bEnable);
			break;
	}
}

/**********************************************************************************
 * Function Name: gfnNewChildFrame
 * Description  : 신규 ChildFrame 생성
 * Arguments    : sID		( Popup Form의 ID )
 *				: sURL 		( Popup Form  URL )
 *				: sArg 		( Popup Form으로 전달될 Argument )
 *				: nLeft 	( Popup Form Left Position )
 *				: nTop 		( Popup Form Top Position )
 *				: nWidth 	( Popup Form Width )
 *				: nHeight	( Popup Form Height )
 *				: sStyle 	( Popup Form 기본 유형 )
 *				: sProp 	( Chile Frame의 모든 Property를 설정 )
 * Return       : ChildFrame 객체
 **********************************************************************************/
pForm.gfnNewChildFrame = function (sID, sURL, sArg, nLeft, nTop, nWidth, nHeight, sStyle, sProp)
{
	var newChild;

	newChild = new ChildFrame;
	newChild.init(sID, nLeft, nTop, nWidth, nHeight, null, null,  sURL);
	// newChild.autosize = true;
	//newChild.set_showtitlebar(true);
	
	//newChild.set_titletext(this.gfnGetDomainText(sID));
	newChild.set_titletext(sID);

	if (this.gfnIsNull(sStyle) == false) 
	{
		var aStyle = this.gfnSplit2(sStyle, ",", "=");
		for (i = 0; i < aStyle.length; i++) 
		{
			newChild[aStyle[i][0]] = aStyle[i][1];
		}
	}

	if (this.gfnIsNull(sProp) == false) 
	{
		var aProp = this.gfnSplit2(sProp, ",", "=");
		for (var i = 0; i < aProp.length; i++) 
		{
			newChild[aProp[i][0]] = aProp[i][1];
		}
	}

	if(this.parent.url != null)
	{
		newChild.arguments = [];
		newChild.arguments[this.objApp.gv_MenuIdCol] = this.parent.gfn_getMenuId();
	}

	return newChild;
}

//lib_HTML5_Frame.xjs///////////////////////////////////////////////////////////////////////

/**********************************************************************************
 * Function Name: gfnActiveFrame
 * Description  : 윈도우 키를 기준으로 열려있는 화면 여부 확인
 * Arguments    : winid: 윈도우 생성 키, bReload: 화면 Reload여부, aArgs:전달인자
 * Return       : 열린화면이면 true 아니면 false
 **********************************************************************************/
pForm.gfnActiveFrame = function (winid, bReload, aArgs)
{
	var framesInfo = gv_AppWorkFrameSet.frames;

	if(this.gfnIsNull(winid)){return true;}
	if (this.objApp.gv_openOnlyOne == false && bReload == false) 
	{
		return false;
	}
	
// 
// 	for(var i = 0 ; i < framesInfo.length ; i++)
// 	{
// 		if(framesInfo[winid] != framesInfo[i]){	
// 			framesInfo[i].set_visible(false);
// 		}
// 	}
	//trace("debug 2  :::  gfnActiveFrame  " + winid + " / " + framesInfo[winid]);	
	if(framesInfo[winid])
	{
	//trace("framesInfo >> " + winid );
	    this.objApp.mainframe.VFrameSet.HFrameSet.VFrameSet1.MdiTabFrame.form.fn_moveTab(winid);
		framesInfo[winid].setFocus();

		if (bReload == true) 
		{
			framesInfo[winid].reload();
		}

		return true;
	}
	
	//trace("debug 4  :::  gfnActiveFrame  ");	
	
	return false;
}

///////////////////////////////////////////////////////////////////////

/**********************************************************************************
 * Function Name: gfnGetMenuInfo
 * Description  : menuid 를 기준으로 해당 메뉴의 칼럼값을 전달
 * Arguments    : menuid: 메뉴아이디, menuInfo: 메뉴의 칼럼
 * Return       : 칼럼값
 **********************************************************************************/
pForm.gfnGetMenuInfo = function (menuid, menuInfo)
{
	return this.gfnGetLookupData(this.objApp.gds_Menu, this.objApp.gv_MenuIdCol, menuid, menuInfo);
}

/**********************************************************************************
 * Function Name: gfnGetFrameAguments
 * Description  : child Frame에 등록한 아규먼트를 반환한다.
 * Arguments    : winKey, pageUrl 등등
 * Return       : 반환값
 **********************************************************************************/
pForm.gfnGetFrameAguments = function (sVal)
{
    return this.getOwnerFrame().arguments[sVal];
}
/**
 * 열려있는 윈도우 화면을 정렬
 * @param	: 	strType: 정렬 타입
 * @return	:   N/A
 */
pForm.gfnArrangeWin = function(strType) 
{
	// workFrame영역에 open된 childFrame 갯수
	var iFramesCnt = gv_AppWorkFrameSet.frames.length;
	//if (applicaton.gds_openMenu.getRowCount() < 1) return;

	switch(strType)
	{
		case "maximize" :
		for (var i=0; i<iFramesCnt; i++) 
		{
			gv_AppWorkFrameSet.frames[i].set_openstatus("maximize");		
			gv_AppWorkFrameSet.frames[i].set_showtitlebar(false);		
			gv_AppWorkFrameSet.frames[i].set_border("0 solid #006666ff");
		}
	
		
// 		trace("gv_AppWorkFrameSet.getActiveFrame() ==>"+gv_AppWorkFrameSet.getActiveFrame().name);
// 		gv_AppWorkFrameSet.getActiveFrame().set_showtitlebar(false);
// 		gv_AppWorkFrameSet.getActiveFrame().set_border("0 solid #006666ff");

		//trace('   gfnArrangeWin --------------------------------'+gv_AppWorkFrameSet.getActiveFrame().name +'/'+ gv_AppWorkFrameSet.getActiveFrame().openstatus );

        
	   break;
	   case "closeAll" :
		for (var i=iFramesCnt; i>=0; i--) 
		{			
			if( i > 0 ){
				gv_AppTabPath.form.gfn_TabOnClose(gv_AppWorkFrameSet.frames[i-1].name);
				if( i == 0 ){
					gfn_callMain();
				}
			}	
		}
	    break;
	   case "hidden" :
		for (i=0; i<iFramesCnt; i++) 
		{
			gv_AppWorkFrameSet.frames[i].set_showtitlebar(true);
			gv_AppWorkFrameSet.frames[i].set_border("1 solid #7f7f7bff");
			gv_AppWorkFrameSet.frames[i].set_borderRadius("round 3 3");
			gv_AppWorkFrameSet.frames[i].set_openstatus("minimize");		
		}
		
		gv_AppWorkFrameSet.arrange(strType);
	    break;
	    default :
		for (i=0; i<iFramesCnt; i++) 
		{			
			//if( gv_AppWorkFrameSet.frames[i].name != "MainForm" ){			
				gv_AppWorkFrameSet.frames[i].set_showtitlebar(true);
				gv_AppWorkFrameSet.frames[i].set_border("1 solid #7f7f7bff");
			//}	

			gv_AppWorkFrameSet.frames[i].set_borderRadius("round 3 3");
			gv_AppWorkFrameSet.frames[i].set_openstatus("normal");							
		}
		
		gv_AppWorkFrameSet.arrange(strType);
	    break;
	   
	}
}

pForm.gfnChangeLang = function (obj)
{	
	//그리드 경우에는 셀에 accessibilitydescription  속성 값을 사용.
	//그리드 아닌 Component 인 경우 UserProperty에 domainId로 사용.
	if(obj instanceof nexacro.Grid) {
		var headColCnt = obj.getCellCount("head");
		for (var j = 0; j < headColCnt; j++) {		
			var headText = obj.getCellProperty("head", j, "accessibilitydescription");
			
			if(!this.gfnIsNull(headText)) {
				var domainText = this.gfnGetDomainText(headText, "", "TEXT");
				
				if(domainText != headText) {
					if (!this.gfnIsNull(domainText)) {
						obj.setCellProperty( "head", j, "text", domainText);
					}
				}			
			}
		}
	} else {
		var domainId = obj.domainId;
		
		if(!this.gfnIsNull(domainId)) {
			var domainText = this.gfnGetDomainText(domainId, "", "TEXT");
			
			if(domainText != domainId) {
				if (!this.gfnIsNull(domainText)) {
					obj.set_text(domainText);
				}
			}
		}
	}
};



/*******************************************************************************
 * Function Name: gfnFormSetMenuFullPath
 * Description	: Form 메뉴경로 설정
 * Arguments	: obj :열린 화면 객체
 * Return 		: None
 ********************************************************************************/
pForm.gfnFormSetMenuFullPath = function(obj)
{
	this.objApp = nexacro.getApplication() ;

	// 메뉴레벨
	var curMenuRow = this.objApp.gdsMenu.findRow("MENU_CD", this.objApp.gvWorkMenuId);
	var menuLevel = this.objApp.gdsMenu.getColumn(curMenuRow, "MENU_TYPE");
	var parentMenuCd = "";
	var parentMenuNm = "";
	var parentparentMenuCd = "";
	var parentparentMenuNm = "";
	
	var strFullPath = "";
	
	if(menuLevel == 0){
		strFullPath = this.objApp.gvWorkMenuNm;
	}
	else if(menuLevel == 1){
		parentMenuCd = this.objApp.gdsMenu.getColumn(curMenuRow, "MSTR_MENU_CD");
		parentMenuNm = this.objApp.gdsMenu.getColumn(this.objApp.gdsMenu.findRow("MENU_CD", parentMenuCd), "MENU_NM");
		strFullPath = parentMenuNm+" > "+this.objApp.gvWorkMenuNm;
	}
	else if(menuLevel == 2){
		parentMenuCd = this.objApp.gdsMenu.getColumn(curMenuRow, "MSTR_MENU_CD");
		parentMenuNm = this.objApp.gdsMenu.getColumn(this.objApp.gdsMenu.findRow("MENU_CD", parentMenuCd), "MENU_NM");
		parentparentMenuCd = this.objApp.gdsMenu.getColumn(this.objApp.gdsMenu.findRow("MENU_CD", parentMenuCd), "MSTR_MENU_CD");
		parentparentMenuNm = this.objApp.gdsMenu.getColumn(this.objApp.gdsMenu.findRow("MENU_CD", parentparentMenuCd), "MENU_NM");
		strFullPath = parentparentMenuNm+" > "+parentMenuNm+" > "+this.objApp.gvWorkMenuNm;
	}
	
	
	if(!this.gfnIsNull(obj.staMenuFullPath)){
		obj.staMenuFullPath.set_text(strFullPath);
	}
}



/*******************************************************************************
 * Function Name: gfnFormSetBtn
 * Description	: Form 버튼 설정 -> 열린 화면에서 필요로 하는 버튼 먼저 생성 & 버튼권한을 통해 각 버튼 enable 속성 처리.
 * Arguments	: obj :열린 화면 객체
 * Return 		: None
 ********************************************************************************/
pForm.gfnFormSetBtn = function(obj)
{
	var btnWidth = 75;		// 버튼 너비
	var btnHeight = 23;		// 버튼 높이
	var btnRight = 0;		
	var btnCnt = 0;
	
	var btnId = "";
	var btnText = "";
	var btnCssClass= "";
	var btnEnable = "";
	
	if( !this.gfnIsNull(obj.dsBtn) ){
		
		// 버튼권한조회
		var nRow = this.objApp.gdsMenuBtnAuth.findRow("MENU_CD", this.objApp.gvWorkMenuId);
		var selYn = this.objApp.gdsMenuBtnAuth.getColumn(nRow, "SEL_YN");
		var addYn = this.objApp.gdsMenuBtnAuth.getColumn(nRow, "ADD_YN");
		var savYn = this.objApp.gdsMenuBtnAuth.getColumn(nRow, "SAV_YN");
		var delYn = this.objApp.gdsMenuBtnAuth.getColumn(nRow, "DEL_YN");
		var prtYn = this.objApp.gdsMenuBtnAuth.getColumn(nRow, "PRT_YN");
		var xlsYn = this.objApp.gdsMenuBtnAuth.getColumn(nRow, "XLS_YN");
		
		// 버튼생성 (열린 화면에서 필요로 하는 버튼 생성)
		for(var i=obj.dsBtn.getColCount(); i>=0; i--){
			if( obj.dsBtn.getColumn(0, obj.dsBtn.getColID(i)) == "1"){
				
				if(this.gfnIsNull(obj.dsBtn.getColID(i))) continue;
			
				var objBtn = new Button();
				
				
				if(obj.dsBtn.getColID(i) == "BTN_SEL"){
					btnId = "btnSearch";
					btnText = "F2-조회";
					btnCssClass = "btn_ty01_search";
					btnEnable = selYn;
				}
				else if(obj.dsBtn.getColID(i) == "BTN_ADD"){
					btnId = "btnAdd";
					btnText = "F3-신규";
					btnCssClass = "btn_ty01_new";
					btnEnable = addYn;
				}
				else if(obj.dsBtn.getColID(i) == "BTN_SAV"){
					btnId = "btnSave";
					btnText = "F4-저장";
					btnCssClass = "btn_ty01_save";
					btnEnable = savYn;
				}
				else if(obj.dsBtn.getColID(i) == "BTN_DEL"){
					btnId = "btnDelete";
					btnText = "F5-삭제";
					btnCssClass = "btn_ty01_delete";
					btnEnable = delYn;
				}
				else if(obj.dsBtn.getColID(i) == "BTN_XLS"){
					btnId = "btnExcel";
					btnText = "F6-엑셀";
					btnCssClass = "btn_ty01_excel";
					btnEnable = xlsYn;
				}
				else if(obj.dsBtn.getColID(i) == "BTN_PRT"){
					btnId = "btnPrint";
					btnText = "F7-출력";
					btnCssClass = "btn_ty01_print";
					btnEnable = prtYn;
				}
				
				// 버튼사이 간격
				btnRight = (btnWidth+5)*btnCnt;
				
				
				objBtn.init(btnId, null, 7, btnWidth, btnHeight, btnRight, null);
				objBtn.set_text(btnText);
				objBtn.set_cssclass(btnCssClass);
				objBtn.set_enable(btnEnable);
				objBtn.setEventHandler("onclick", this.gfnBtnOnClick, this);
				
				obj.divBtn.addChild(objBtn.name, objBtn);
				objBtn.show();
				
				btnCnt++;
			}
		}
		
		
		
		
		
		
	}
}


/*******************************************************************************
 * Function Name: gfnFormSetBtn
 * Description	: Form 버튼 설정 -> 열린 화면에서 필요로 하는 버튼 먼저 생성 후 버튼권한을 통해 각 버튼 enable 속성 처리.
 * Arguments	: obj :열린 화면 객체
 * Return 		: None
 ********************************************************************************/
pForm.gfnBtnOnClick = function(obj)
{
	this.gfnCallBtnFunction(this, obj.name);
}


/**********************************************************************************
 * @function 	: gfnUserFormOnkeyDownEvent
 * @description : Form 사용자 onKeydown 이벤트
 * @param		: obj - Form
 * @param		: e   - KeyEventInfo
 * @return      : 반환값
 **********************************************************************************/
pForm.gfnUserFormOnKeyDownEvent = function(objForm, e)
{
	switch(e.keycode) {
		case 27  :	// ESC (닫기)
			objForm.close();
		break;
		
		case 112 :	// F1 (도움말)
		
			this.gfnOpenHelpPopup();
		break;
		
		case 113 :	// F2 (조회)
		
			this.objApp.gvTopFrame.form.divSearchFocus.setFocus();	
			this.gfnCallBtnFunction(objForm, "btnSearch");
		break;
		
		case 114 :	// F3 (신규)
	
			this.gfnCallBtnFunction(objForm, "btnAdd");
		break;
		
		case 115 :	// F4 (저장)
			
			this.objApp.gvTopFrame.form.divSearchFocus.setFocus();	
			this.gfnCallBtnFunction(objForm, "btnSave");
		break;
		
		case 116 :	// F5 (삭제)
		
			this.gfnCallBtnFunction(objForm, "btnDelete");
		break;
		
		case 117 :	// F6 (엑셀)
			
			this.gfnCallBtnFunction(objForm, "btnExcel");
			
		break;
		
		
		case 118 :	// F7 (출력)
		
			this.gfnCallBtnFunction(objForm, "btnPrint");
		break;
		
		
		case 120 :	// F9 (팝업에서 선택,확인)
		
			if(typeof objForm.fnChoise == "function"){
				objForm.fnChoise();
			}
		break;
			
			
		default:
		break;
	}
}


/**********************************************************************************
 * @function 	: gfnUserFormOnkeyDownEvent
 * @description : Form 사용자 onKeydown 이벤트
 * @param		: obj - Form
 * @param		: e   - KeyEventInfo
 * @return      : 반환값
 **********************************************************************************/
pForm.gfnCallBtnFunction = function(objForm, btnName)
{
	
	// 팝업이 아닌 화면
	if(objForm.isValidObject("divBtn")){
		// 버튼이 존재하지 않은경우 실행 X
		if(this.gfnIsNull(objForm.divBtn.form.components[btnName])) return;
		// 버튼의 속성(enable)이 false인 경우 실행X
		if(objForm.divBtn.form.components[btnName].enable == false) return; 
	}
	// 팝업화면
	else{
		// 버튼이 존재하지 않은경우 실행 X
		if(this.gfnIsNull(objForm.components[btnName])) return;
	}
	
	var errMsg = "";
	
	switch(btnName) 
	{
		// 조회
		case "btnSearch" : 
			if(typeof objForm.fnSearch == "function"){
				objForm.fnSearch();
			}
			else{
				errMsg = "fnSearch function is not undefined.";	
			}
		break;
		
		// 신규
		case "btnAdd" :
			if(typeof objForm.fnAdd == "function"){
				objForm.fnAdd();
			}
			else{
				errMsg = "fnAdd function is not undefined.";	
			}
		break;
		
		// 저장
		case "btnSave" :
			if(typeof objForm.fnSave == "function"){
				objForm.fnSave();
			}
			else{
				errMsg = "fnSave function is not undefined.";	
			}
		break;
		
		
		// 삭제
		case "btnDelete" :
			if(typeof objForm.fnDelete == "function"){
				objForm.fnDelete();
			}
			else{
				errMsg = "fnDelete function is not undefined.";	
			}
		break;
		
		
		// 삭제
		case "btnExcel" :
			if(typeof objForm.fnExcel == "function"){
				objForm.fnExcel();
			}
			else{
				errMsg = "btnExcel function is not undefined.";	
			}
		break;
		
		
		// 출력
		case "btnPrint" :
			if(typeof objForm.fnPrint == "function"){
				objForm.fnPrint();
			}
			else{
				errMsg = "fnPrint function is not undefined.";	
			}
		break;
		
		
		// 초기화
		case "btnReset" :
			//objForm.fnInit();
		break;
		
		
		default :	
		break;
	}
	
	
	
	if(!this.gfnIsNull(errMsg)) this.gfnAlert(errMsg);
	
	
}