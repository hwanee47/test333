/**
*  컨설팅 표준화 작업
*  @FileName 		Message.js 
*  @Creator 			seungmin 
*  @CreateDate 	2018.05.08
*  @Desction   		
************** 소스 수정 이력 ***************************************************
*  date          		Modifier                Description
*******************************************************************************
*  2018.05.08    	seungmin 	           최초 생성 
*******************************************************************************
*/  
 
var pForm = nexacro.Form.prototype; 

/**
 * @class 메세지팝업오픈
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return N/A
 */
pForm.gfnAlert = function (sMsgId, arrArg, objCallBack)
{   
    var objApp = nexacro.getApplication();
	
	//메세지정보 가져오기.
	var sMsg = pForm.gfnGetDomainText(sMsgId, arrArg);
  
	//this.alert(sMsg);
	
	// 파라미터 설정
	var popupId = 'gfnAlert';	// 팝업ID
	
	// 팝업 호출
	var oArg = {
		  paramContents : sMsg
	};
	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
	if(!this.gfnIsNull(objCallBack)) sPopupCallBack = objCallBack;
	
	this.gfnOpenPopup(popupId,"cmm::cmmAlert.xfdl", oArg, sPopupCallBack, oOption);
};


/*pForm.gfnAlert2 = function (sMsgId, arrArg, sPopupId, objCallBack)
{   
    var objApp = nexacro.getApplication();
	
	//메세지정보 가져오기.
	var sMsg = sMsgId
  
	//this.alert(sMsg);
	
	// 파라미터 설정
	var popupId = 'gfnAlert';	// 팝업ID
	
	if(!this.gfnIsNull(sPopupId)) popupId = sPopupId;

	
	// 팝업 호출
	var oArg = {
		  paramContents : sMsg
	};
	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
	var sPopupCallBack = "fnAlertPopupCallback";								// 콜백함수
	
	if(!this.gfnIsNull(objCallBack)) sPopupCallBack = objCallBack;
	
	this.gfnOpenPopup(popupId,"cmm::cmmAlert.xfdl", oArg, sPopupCallBack, oOption);
};
*/


/**
 * @class 메세지 처리 함수.
 * @param {String} sMsgId - 메세지ID	
 * @param {Array} arrArg - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return N/A
 * @example
 * this.gfnMessage("mesg.save", "주문");	
 */
pForm.gfnMessage = function (sMsgId, arrArg)
{
	var objApp = nexacro.getApplication();
	
	//메세지정보 가져오기.
	var sMsg = pForm.gfnGetDomainText(sMsgId, arrArg);

	objApp.gvBottomFrame.form.divBottom.form.stcStatus.set_text(sMsg);
};

/**
 * @class 메세지 치환
 * @param {String} msg - 메세지	
 * @param {Array} values - 메세지에 치환될 부분은 "{0~N}"이 되고 치환값은 배열로 넘김 
 * @return {String}
 */
pForm.gfnConvertMessage = function(msg, values) {
	if(this.gfnIsNull(values)) {
		return msg;
	} else {
		 return msg.replace(/\{(\d+)\}/g, function() {
			return values[arguments[1]];
		});
	} 
};
 
pForm.gfnGetDomainText = function(sMsgId, arrArg, sType) {
	var objApp = nexacro.getApplication();
	var sMsg = "";
	if(this.gfnIsNull(sType)) sType = "MSG";
	
	if(sType == "TEXT") {
		sMsg = objApp.gdsLocaleText.lookup("MSG_CD", sMsgId, "MSG");
	} else {
		sMsg = objApp.gdsMessage.lookup("MSG_CD", sMsgId, "MSG");
	}
	
	if( this.gfnIsNull(sMsg) ) return sMsgId;
	
	// 줄바꿈 변경
	sMsg = sMsg.replace(/\\n/g, String.fromCharCode(10));
	sMsg =  pForm.gfnConvertMessage(sMsg, arrArg);
	
	return sMsg;
};
