/**
*  컨설팅 표준화 작업
*  @FileName 		Popup.js 
*  @Creator 			ssm
*  @CreateDate 	2018.05.08
*  @Desction   		
************** 소스 수정 이력 ***************************************************
*  date          		Modifier                Description
*******************************************************************************
*  2018.05.08     	ssm 	           최초 생성 

*******************************************************************************
*/ 

var pForm = nexacro.Form.prototype;

/**
 * @class 팝업오픈
 * @param {String} sPopupId	- 팝업ID
 * @param {String} sUrl	 - 팝업URL
 * @param {String} [oArg] - 전달값
 * @param {String} [sPopupCallback] - 팝업콜백
 * @param {Object} [oOption] - 팝업옵션 <br>
 *	oOption.top : 상단 좌표 <br>
 *	oOption.left : 좌측 좌표 <br>
 *	oOption.width : 넓이 <br>
 *	oOption.height : 높이 <br>
 *	oOption.popuptype : 팝업종류(modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWinddow) <br>
 *	oOption.layered : 투명 윈도우 <br>
 *	oOption.opacity : 투명도 <br>
 *	oOption.autosize : autosize <br>
 * @return N/A
 * @example
 * this.gfnOpenPopup(this);
 */
pForm.gfnOpenPopup = function ( sPopupId, sUrl, oArg, sPopupCallback, oOption)
{ 
    var objApp = nexacro.getApplication();
	var nLeft = -1;
	var nTop = -1;
	var nWidth = -1;
	var nHeight = -1;
	var bShowTitle = false;	
	var bShowStatus = false;	
	var sPopupType = "modal";
	var bLayered = false;
	var nOpacity = 100;
	var bAutoSize = false;
	var bResizable = false;
	var sTitleText = "";
	var pModalCallbackFn = "gfnPopUpCommonCallFn";
	
	oArg.callbackFn = sPopupCallback;

	for (var key in oOption) {
       if (oOption.hasOwnProperty(key)) {
            switch (key) 
			{
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "popuptype":
					sPopupType = oOption[key];
					break;
				case "layered":
					bLayered = oOption[key];
					break;
				case "opacity":
					nOpacity =oOption[key];
					break;
				case "autosize":
					bAutoSize = oOption[key];
					break;
				case "resizable":
					bResizable = oOption[key];
					break;
			}	
        }
    }

	var sOpenalign = "";
	if(nLeft == -1 && nTop == -1) 
	{		
		sOpenalign = "center middle";
        nLeft      =  (objApp.mainframe.width / 2) - Math.round(nWidth  / 2);
	    nTop       = (objApp.mainframe.height / 2) - Math.round(nHeight / 2);		
	}else{
		nLeft      =  this.getOffsetLeft() + nLeft;
		nTop       =  this.getOffsetTop()  + nTop;
	}
		
	if(nWidth == -1 || nHeight == -1)
	{
	    bAutoSize = true;
	}
	
	var objParentFrame = this.getOwnerFrame();

    if (sPopupType == "modeless")
    {
		var objPop = this.lookup(sPopupId);
	
		if(!this.gfnIsNull(objPop)) {
			//alert(sPopupId + " => 열려 있는 Object 입니다.");
			//objPop.form.close();
			
			return;
		}
	
	
         var sOpenStyle = "showtitlebar=false showstatusbar=false resizable=false autosize=true";
		 
		 // 메인메뉴 팝업전환 기능사용시 타이틀바, 리사이징 기능을 사용 2018.11.22 TOBESOFT 수정
		 if (sUrl=="frame::frameWorkPop.xfdl")
		 {
			/*
				showtitlebar   : 타이틀바
				resizable	   : 리사이징
				titlebarheight : 타이틀바 높이
				showtitleicon  : 타이틀바 아이콘
			*/
			sOpenStyle = "openalign='center middle' showtitlebar=true showstatusbar=false resizable=true titlebarheight=30 showtitleicon=true";
		 
			if (system.navigatorname == "nexacro")
			{
				var monitor_idx = 2; // 듀얼모니터인 경우 2번 모니터에 띄운다.
				var screen_rect = system.getScreenRect(monitor_idx); // 듀얼모니터 X system.getScreenWidth(monitor_idx), system.getScreenHeight(monitor_idx) 0,0 반환
				
				var p_l   = screen_rect.left; 
				var p_t   = screen_rect.top; 
				var p_w   = system.getScreenWidth (monitor_idx); 
				var p_h   = system.getScreenHeight(monitor_idx); 
				
				if (p_w == 0 && p_h ==0)
					sOpenStyle+= " autosize=true" ;
				else
				{
					nLeft  	  = p_l + Math.round((p_w - nWidth ) / 2); // childframe set center of monitor 
					nTop   	  = p_t + Math.round((p_h - nHeight) / 2); // childframe set center of monitor 
					
					sOpenStyle+= " autosize=false";
				}
			}
			else
				sOpenStyle+= " autosize=true" ;
		 }
			
         nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle, nLeft, nTop, nWidth, nHeight, this);
		 
    }
	else if(sPopupType == "modelessDiv")
    {
		if(!this.gfnIsNull(this.lookup(sPopupId))) {
			alert(sPopupId + " => 열려 있는 Object 입니다.");
			return;
		}
		 

		if(nWidth == -1) nWidth = 550;
		if(nHeight == -1) nHeight = 400;
		//alert(objApp.gvWorkFrame.name);
		var newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, 0, -20, nWidth, nHeight, null, null);
		objApp.gvWorkFrame.addChild(sPopupId, newChild);
		
		newChild.set_dragmovetype("all");
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_resizable(bResizable);    //resizable 안됨
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		//newChild.set_openstatus("normal");
		
	
		for (var key in oArg) {
		   if (oArg.hasOwnProperty(key)) {
				newChild[key] = oArg[key];
			}
		}
		newChild.set_formurl(sUrl);	
		newChild.show();
    }
	else if(sPopupType == "modalsync")
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		system.showModalSync(newChild, objParentFrame, oArg);	
	}
	else if(sPopupType == "modalwindow")
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);		
        return rtn;
	}	
    else
    {
		newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild.set_dragmovetype("all");
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		
		// KJH 2020.06.05 콜백함수가 Function Object 파라미터로 전달되는경우 해당 Function Object 실행
		if(typeof sPopupCallback == "function"){
			newChild.showModal(objParentFrame, oArg, this, sPopupCallback); 
		}
		else{
			newChild.showModal(objParentFrame, oArg, this, this[pModalCallbackFn]); 
		}
    }
	
	if( sPopupType != "modeless" ){
		newChild.setEventHandler("onkeydown", this.gfnCommonPopupOnkeyDown, this);
	}
};

pForm.gfnOpenPush = function ( sPopupId, sUrl, oArg, sPopupCallback, oOption)
{
	var objParentFrame = this.getOwnerFrame();
	var sOpenStyle= "showtitlebar=false showstatusbar=false resizable=false autosize=true layered=false";
	var nWidth = oOption["width"];
	var nHeight = oOption["height"];
	var nLeft = 10000000;
	var nTop  = 10000000;
	//var nLeft = system.getScreenWidth();
	//var nTop  = system.getScreenHeight();
	nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight, this);
};


/**********************************************************************************
 * Function Name: gfnOpen
 * Description  : Modaless 팝업 frame상에서 호출.
 * Arguments    : sID		( Popup Form의 ID )
 *				: sURL 		( Popup Form  URL )
 *				: sArg 		( Popup Form으로 전달될 Argument )
 *				: oOption 	( Popup Form Left, Top, Width, Height )
 * Return       : 
 **********************************************************************************/
pForm.gfnOpen = function (sID, sURL, sArg, oOption)
{
	var objApp = nexacro.getApplication();
	var objParentFrame = this.getOwnerFrame();
	var nLeft = -1;
	var nTop = -1;
	var nWidth = -1;
	var nHeight = -1;
	var title = "";

	for (var key in oOption) {
       if (oOption.hasOwnProperty(key)) {
            switch (key) 
			{
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "titletext":
					title = oOption[key];
					break;	
			}	
        }
    }
	
	if(nLeft == -1 && nTop == -1) {		
        nLeft   =  (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;		
	}else{
		nLeft   =  this.getOffsetLeft() + nLeft;
		nTop   =  this.getOffsetTop() + nTop;
	}
	
	if(nWidth == -1 && nHeight == -1) {		
        nWidth   = null;
	    nHeight  = null;	
	}
	
	if(!this.gfnIsNull(this.lookup(sID))) {
		alert(sID + " => 열려 있는 Object 입니다.");
		return;
	}
 
	var newChild = new nexacro.ChildFrame;

	newChild.init(sID, nLeft, nTop, nWidth, nHeight, null, null);
	this.addChild(sID, newChild);
	
	if(!this.gfnIsNull(title)) newChild.set_titletext(title);
	newChild.set_showstatusbar(false); 
	newChild.set_autosize(true); 
	newChild.set_resizable(true); 
	newChild.set_layered(false);
	newChild.set_dragmovetype("all");
	newChild.param = sArg;
	newChild.set_formurl(sURL);	
	newChild.show(); 
}

/**********************************************************************************
 * Function Name: gfnOpen
 * Description  : 공통 PopUpDiv 호출.
 * Arguments    : sID		( Popup Form의 ID )
 *				: sURL 		( Popup Form  URL )
 *				: sCallbackFuc 	( Popup Callback 함수.)
 * Return       : 
 **********************************************************************************/
pForm.gfnOpenDiv = function (obj, sURL, sArg, nWidth, nHeight, sCallbackFuc)
{
	var nX = parseInt(obj.width);	
	var nY = parseInt(obj.height);
	var sID = "popUpDiv_" + obj.id;
	var objComp;
	
	if(!this.gfnIsNull(this.lookup(sID))) {
		objComp = this.lookup(sID);
		objComp.trackPopupByComponent(obj, nX, nY, null, null, sCallbackFuc);	
	} else {
		if(this.gfnIsNull(nWidth)) nWidth = 600;
		if(this.gfnIsNull(nHeight)) nHeight = 200;
	
		objComp = new PopupDiv();
		objComp.init(sID, 10, 10, nWidth, nHeight );
		this.addChild(sID, objComp); 
		objComp.set_url(sURL);
		objComp.addEventHandler("oncloseup", this.gfnPopUpDiv_oncloseup, this);
		objComp.show();
		objComp.trackPopupByComponent(obj, nX, nY, null, null, sCallbackFuc);
	}
};

pForm.gfnPopUpDiv_oncloseup = function(obj, e)
{
	var objDelete = this.removeChild(obj.id);
	objDelete.destroy();
};


/********************************************************************************
 * Function Name: gfnConfirm
 * Description	: 메세지 코드에 따른 실제 메세지값을 찾은 후 팝업창을
 *				  생성해서 해당 값을 보여주는 함수
 * Arguments	: strMsgId(MessageId)
 *				  strMsgType(메세지 종류 : ERR, WARN, INFO)
 *				  msgArr[](메세지값으로 치환될 Parameter Array)
 * Return 		: 팝업에 해당 메세지값을 표현
 ********************************************************************************/
pForm.gfnConfirm = function (strMsgId, strMsgType, msgArr)
{
	// strMsgType : "default", "error", "question", "warning", "information" (default)
	if (this.gfnIsNull(strMsgType)) 
	{
		strMsgType = "question";
	}

	var strMsg = this.gfnGetDomainText(strMsgId, msgArr);
	
	/*// 파라미터 설정
	var popupId = 'gfnConfirm';	// 팝업ID
	
	// 팝업 호출
	var oArg = {
		  paramContents : strMsg
	};
	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack = "fnConfirmCallback";										// 콜백함수
	this.gfnOpenPopup(popupId,"cmm::cmmConfirm.xfdl", oArg, sPopupCallBack, oOption);
	*/
	
	return this.confirm(strMsg, "", strMsgType);
	//return false;
}

pForm.gfnConfirm2 = function (strMsgId, strMsgType, msgArr, strPopupId)
{
	// strMsgType : "default", "error", "question", "warning", "information" (default)
	if (this.gfnIsNull(strMsgType)) 
	{
		strMsgType = "question";
	}

	var strMsg = this.gfnGetDomainText(strMsgId, msgArr);
	
	// 파라미터 설정
	var popupId = 'gfnConfirm';	// 팝업ID
	
	if(!this.gfnIsNull(strPopupId)) popupId = strPopupId;
	
	// 팝업 호출
	var oArg = {
		  paramContents : strMsg
	};
	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack = "fnConfirmCallback";										// 콜백함수
	this.gfnOpenPopup(popupId,"cmm::cmmConfirm.xfdl", oArg, sPopupCallBack, oOption);
	
	
	//return this.confirm(strMsg, "", strMsgType);
}


pForm.gfnCustomConfirm = function (strMsg, objCallBack)
{

	// 파라미터 설정
	var popupId = 'gfnConfirm';	// 팝업ID
	

	// 팝업 호출
	var oArg = {
		  paramContents : strMsg
	};
	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack = "fnConfirmCallback";										// 콜백함수
	if(!this.gfnIsNull(objCallBack)) sPopupCallBack = objCallBack;
	this.gfnOpenPopup(popupId,"cmm::cmmConfirm.xfdl", oArg, sPopupCallBack, oOption);
	
	
	//return this.confirm(strMsg, "", strMsgType);
}


/***********************************************************************************************
 * @function	: gfnOpenPopCust
 * @description	: 고객사(화주/주선가맹점) 팝업을 호출한다.
 * @param		: popupId	- String
 * @param		: msg		- String
 * @return N/A
/***********************************************************************************************/
pForm.gfnOpenPopCust = function(custNm,lspType, searchFlag) {

	var autosearchGb	= ( this.gfnIsNull(custNm) ? 'N' : 'Y' );
	var sFormName		= "고객사(화주/주선가맹점)";
	var sFormUrl		= "cmm::cmmCust.xfdl";
	var oArg			= {paramTitle:sFormName,pAutosearchGb:autosearchGb,pCustNm:custNm,pLspType:lspType,pSearchFlag:searchFlag};
	var oOption			= {"width":1024,"height":600};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack	= "fnPopupCallback";
	
	this.gfnOpenPopup("cmmCust",sFormUrl,oArg,sPopupCallBack,oOption);
}

/***********************************************************************************************
 * @function	: gfnOpenPopFranchise
 * @description	: 운송가맹점 팝업을 호출한다.
 * @param		: popupId	- String
 * @param		: msg		- String
 * @return N/A
/***********************************************************************************************/
pForm.gfnOpenPopFranchise = function(lspId) {

	var autosearchGb	= ( this.gfnIsNull(lspId) ? 'N' : 'Y' );
	var sFormName		= "운송가맹점";
	var sFormUrl		= "cmm::cmmLspInfo.xfdl";
	var oArg			= {paramTitle:sFormName,pAutosearchGb:autosearchGb,pNm:lspId};
	var oOption			= {"width":500,"height":600};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack	= "fnPopupCallback";
	
	this.gfnOpenPopup("cmmLspInfo",sFormUrl,oArg,sPopupCallBack,oOption);
}

/***********************************************************************************************
 * @function	: gfnOpenPopCorpUserInfo
 * @description	: 내부사용자 팝업을 호출한다.
 * @param		: popupId	- String
 * @param		: msg		- String
 * @return N/A
/***********************************************************************************************/
pForm.gfnOpenPopCorpUserInfo = function(userNm) {

	var autosearchGb	= ( this.gfnIsNull(userNm) ? 'N' : 'Y' );
	var sFormName		= "담당자";
	var sFormUrl		= "cmm::cmmCorpUserInfo.xfdl";
	var oArg			= {paramTitle:sFormName,pAutosearchGb:autosearchGb,pNm:userNm};
	var oOption			= {"width":800,"height":600};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack	= "fnPopupCallback";
	
	this.gfnOpenPopup("cmmCorpUserInfo",sFormUrl,oArg,sPopupCallBack,oOption);
}

/***********************************************************************************************
 * @function	: gfnOpenPopUserInfo
 * @description	: 내부사용자 팝업을 호출한다.
 * @param		: popupId	- String
 * @param		: msg		- String
 * @return N/A
/***********************************************************************************************/
pForm.gfnOpenPopUserInfo = function(userNm) {

	var autosearchGb	= ( this.gfnIsNull(userNm) ? 'N' : 'Y' );
	var sFormName		= "담당자";
	var sFormUrl		= "cmm::cmmUserInfo.xfdl";
	var oArg			= {paramTitle:sFormName,pAutosearchGb:autosearchGb,pNm:userNm};
	var oOption			= {"width":800,"height":600};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack	= "fnPopupCallback";
	
	this.gfnOpenPopup("cmmUserInfo",sFormUrl,oArg,sPopupCallBack,oOption);
}

/***********************************************************************************************
 * @function	: gfnOpenPopItem
 * @description	: 품목 팝업을 호출한다.
 * @param		: popupId	- String
 * @param		: msg		- String
 * @return N/A
/***********************************************************************************************/
pForm.gfnOpenPopItem = function(itemNm) {

	var autosearchGb	= ( this.gfnIsNull(itemNm) ? 'N' : 'Y' );
	var sFormName		= "품목";
	var sFormUrl		= "cmm::cmmItemPop.xfdl";
	var oArg			= {paramTitle:sFormName,pAutosearchGb:autosearchGb,pNm:itemNm};
	var oOption			= {"width":630,"height":400};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack	= "fnPopupCallback";
	
	this.gfnOpenPopup("cmmItemPop",sFormUrl,oArg,sPopupCallBack,oOption);
}

/***********************************************************************************************
 * @function	: gfnOpenPopZip
 * @description	: 주소검색 팝업을 호출한다.
 * @param		: popupId	- String
 * @param		: msg		- String
 * @return N/A
/***********************************************************************************************/
pForm.gfnOpenPopZip = function(itemNm) {

	var autosearchGb	= ( this.gfnIsNull(itemNm) ? 'N' : 'Y' );
	var sFormName		= "주소";
	var sFormUrl		= "cmm::cmmAddr.xfdl";
	var oArg			= {paramTitle:sFormName,pAutosearchGb:autosearchGb,pNm:itemNm};
	var oOption			= {"width":800,"height":400};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack	= "fnPopupCallback";
	
	this.gfnOpenPopup("cmmAddr",sFormUrl,oArg,sPopupCallBack,oOption);
}

/***********************************************************************************************
 * @function	: gfnPopUpCommonCallFn
 * @description	: 팝업 호출 후 닫을때 공통 콜백함수
 * @param		: strId		- String
 * @param		: param		- Json String
 * @return N/A
/***********************************************************************************************/
pForm.gfnPopUpCommonCallFn = function (strId, param)
{
	if(this.gfnIsNull(param)) return;
	
	var json = JSON.parse(param);
	var callFn = this.lookupFunc(json.callFn);
	
	if(!this.gfnIsNull(callFn)) {
		if(!this.gfnIsNull(json.ds)) {
			callFn.call(strId, this.gfnStrDsToObjDs(json.ds));
		} else if(!this.gfnIsNull(json.rtnMsg)) {
			callFn.call(strId, json.rtnMsg);
		} else {
			callFn.call(strId, json);
		}
	}
};


/***********************************************************************************************
 * @function	: gfnOpenHelpPopup
 * @description	: F1 도움말 팝업
 * @param		: 
 * @return N/A
/***********************************************************************************************/
pForm.gfnOpenHelpPopup = function ()
{
	// 넥사크로 전용브라우져가 아닌경우 F1 단축키 막기.
	if (system.navigatorname != "nexacro") {
		document.onhelp = function(){ return(false);}
		window.onhelp = function(){ return(false); }
	}

	// 파라미터 설정
	var popupId = 'helpPopup';	// 팝업ID
	
	
	// 팝업 리로드
	var objPop = this.lookup(popupId);

	if(!this.gfnIsNull(objPop)) {
		objPop.form.close();
	}

	
	// 팝업 호출
	var oArg = {};
	var oOption = {
		popuptype : "modeless"
	};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
	this.gfnOpenPopup(popupId,"cmm::cmmHelp.xfdl", oArg, sPopupCallBack, oOption);
}


/***********************************************************************************************
 * @function	: gfnCommonPopupOnkeyDown
 * @description	: 팝업 공통 onkeydown 이벤트
 * @param		: obj - ChildFrame
 * @param		: e   - KeyEventInfo
 * @return N/A
/***********************************************************************************************/
pForm.gfnCommonPopupOnkeyDown = function(obj, e)
{
	var objApp = nexacro.getApplication();
	var objActiveForm = objApp.getActiveForm();
	
	this.gfnUserFormOnKeyDownEvent(objActiveForm, e);
	
	/*switch(e.keycode) {
		case 27  :	// ESC (닫기)
			obj.form.close();
		break;
		
		case 112 :	// F1 (도움말)
			this.gfnOpenHelpPopup();
		break;
		
		case 113 :	// F2 (조회)
			trace(objForm.name);
		break;
			
			
		default:
		break;
	}*/
	
}
