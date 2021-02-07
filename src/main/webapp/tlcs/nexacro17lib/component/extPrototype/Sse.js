/**
*  컨설팅 표준화 작업
*  @FileName 			Sse.js 
*  @Creator 			seungmin
*  @CreateDate 			2018.06.20
*  @Desction   
************** 소스 수정 이력 ***************************************************
*  date          		Modifier                Description
*******************************************************************************
*  2018.06.20   	seungmin	           최초 생성 
*******************************************************************************
*/ 

var pForm = nexacro.Form.prototype;
var eventSource = null;
var ws;	
var client;

/** 
 * @class Rabbitmq WEB PUSH START<br>
 * @param {String} strType - 알림 서비스 type
 *                 Dispatch : 미배차, Result:실적확인요청, Rtm:RTM실행, Talk:업무Talk, Trans:운송현황, CusTalk: 고객Talk					
 * @return N/A
 */
pForm.gfnPushRun = function ()
{
	var objApp  = nexacro.getApplication();

	var queueName = "/exchange/" + objApp.gv_userId + "_WebPush";
	var url 	= objApp.gv_pushServer;
	var userId  = objApp.gv_pushUser;
	var pw 		= objApp.gv_pushPassword;
	
	if (system.navigatorname == "nexacro")
	{
		var html_window = objApp.gvTopFrame.form.webAlarm.getProperty("window"); 
			html_window.callMethod("fn_onload", url, queueName, userId, pw); 
	}
	else
	{
		ws = new WebSocket(url);
		client = Stomp.over(ws);
		
		client.debug = function(e) {
			//console.log(e); 
		};
		
		var on_connect = function(x) {
			id = client.subscribe(queueName, function(m) {
				pForm.gfnSetPushInfoDs(m.body);
			});
		};
	  
		var on_error =  function() {
			console.log('error');
		};
		
		client.connect(userId, pw, on_connect, on_error, '/');
	}
};

pForm.gfnSetPushInfoDs = function (msg)
{
	var objApp = nexacro.getApplication();

	if(this.gfnIsNull(msg)) msg = "";
	
	var dsDispatch 		= objApp.gvTopFrame.form.dsDispatch;
	var dsDispatchW 	= objApp.gvTopFrame.form.dsDispatchW;
	var dsResult 		= objApp.gvTopFrame.form.dsResult;
	var dsRtm 			= objApp.gvTopFrame.form.dsRtm;
	var dsTalk 			= objApp.gvTopFrame.form.dsTalk;
	var dsTransit 		= objApp.gvTopFrame.form.dsTransit;
	var dsCusTalk 		= objApp.gvTopFrame.form.dsCusTalk;
	var dsReturn 		= objApp.gvTopFrame.form.dsReturn;
	var json 			= (this.gfnCheckObjType(msg) == "object" ? msg : JSON.parse(msg));
	var strHead			= json.head;
	
	switch(strHead) {
		case 'Push_Dispatch':
			var type = this.gfnCheckObjType(json.message);
			var mesgJson = (type == "object" ? json.message : JSON.parse(json.message));
	
			dsDispatch.insertRow(0);
			dsDispatch.setColumn(0, "SHPR_NM"			, mesgJson.SHPR_NM);
			dsDispatch.setColumn(0, "DEP_NODE_NM"		, mesgJson.DEP_NODE_NM);
			dsDispatch.setColumn(0, "ARR_NODE_NM"		, mesgJson.ARR_NODE_NM);
			dsDispatch.setColumn(0, "DEP_REQ_DATE"		, mesgJson.DEP_REQ_DATE);
			dsDispatch.setColumn(0, "ARR_REQ_DATE"		, mesgJson.ARR_REQ_DATE);
			dsDispatch.setColumn(0, "SO_NO"				, mesgJson.SO_NO);
			
			dsDispatch.applyChange();
			break;
		case 'Push_Dispatch_W':
			var type = this.gfnCheckObjType(json.message);
			var mesgJson = (type == "object" ? json.message : JSON.parse(json.message));
	
			dsDispatchW.insertRow(0);
			dsDispatchW.setColumn(0, "SHPR_NM"			, mesgJson.SHPR_NM);
			dsDispatchW.setColumn(0, "REQ_STATUS"		, mesgJson.REQ_STATUS);
			dsDispatchW.setColumn(0, "REQ_VHCL_NO"		, mesgJson.REQ_VHCL_NO);
			dsDispatchW.setColumn(0, "DEP_NODE_NM"		, mesgJson.DEP_NODE_NM);
			dsDispatchW.setColumn(0, "ARR_NODE_NM"		, mesgJson.ARR_NODE_NM);
			dsDispatchW.setColumn(0, "DEP_REQ_DATE"		, mesgJson.DEP_REQ_DATE);
			dsDispatchW.setColumn(0, "ARR_REQ_DATE"		, mesgJson.ARR_REQ_DATE);
			dsDispatchW.setColumn(0, "LSP_NM"			, mesgJson.LSP_NM);
			
			dsDispatchW.applyChange();
			break;
		case 'Push_Transit':
			var type = this.gfnCheckObjType(json.message);
			var mesgJson = (type == "object" ? json.message : JSON.parse(json.message));
	
			dsTransit.insertRow(0);
			dsTransit.setColumn(0, "SHPR_NM"			, mesgJson.SHPR_NM);
			dsTransit.setColumn(0, "TRO_SCD"			, mesgJson.TRO_SCD);
			dsTransit.setColumn(0, "CAR_NO"				, mesgJson.CAR_NO);
			dsTransit.setColumn(0, "DEP_NODE_NM"		, mesgJson.DEP_NODE_NM);
			dsTransit.setColumn(0, "ARR_NODE_NM"		, mesgJson.ARR_NODE_NM);
			dsTransit.setColumn(0, "DEP_REQ_DATE"		, mesgJson.DEP_REQ_DATE);
			dsTransit.setColumn(0, "ARR_REQ_DATE"		, mesgJson.ARR_REQ_DATE);
			dsTransit.setColumn(0, "LSP_NM"				, mesgJson.LSP_NM);
			
			dsTransit.applyChange();
			break;
		case 'Push_Result':
			var type = this.gfnCheckObjType(json.message);
			var mesgJson = (type == "object" ? json.message : JSON.parse(json.message));
			
			dsResult.insertRow(0);
			dsResult.setColumn(0, "SHPR_NM"			, mesgJson.SHPR_NM);
			dsResult.setColumn(0, "TRO_SCD"			, mesgJson.TRO_SCD);
			dsResult.setColumn(0, "CAR_NO"			, mesgJson.CAR_NO);
			dsResult.setColumn(0, "DEP_NODE_NM"		, mesgJson.DEP_NODE_NM);
			dsResult.setColumn(0, "ARR_NODE_NM"		, mesgJson.ARR_NODE_NM);
			dsResult.setColumn(0, "DEP_REQ_DATE"	, mesgJson.DEP_REQ_DATE);
			dsResult.setColumn(0, "ARR_REQ_DATE"	, mesgJson.ARR_REQ_DATE);
			dsResult.setColumn(0, "AMT"				, mesgJson.AMT);
			dsResult.setColumn(0, "RATE_AMT"		, mesgJson.RATE_AMT);
			dsResult.setColumn(0, "REMK"			, mesgJson.REMK);
			
			dsResult.applyChange();
			break;
		case 'Push_Rtm':
			dsRtm.insertRow(0);
			dsRtm.setColumn(0, "MSG", json.message);
			break;
		case 'Push_Talk':
			dsTalk.insertRow(0);
			dsTalk.setColumn(0, "MSG", json.message);
			break;
		case 'Push_Return':
			dsReturn.insertRow(0);
			dsReturn.setColumn(0, "MSG", json.message);
			break;	
		case 'Error':
			this.gfnAlert(json.message);
			break;	
		default:
			break;
	}

	objApp.gvTopFrame.form.fn_pushCount();
};
 
/**
 * @class SSE WEB PUSH POPUP <br>
 * @param {Object} objGrid - Grid Object	
 * @return N/A 
 */
pForm.gfnPushPopup = function(msg)
{
	var oArg = {pMsg:msg};
	var oOption = {popuptype:"modeless", width:330, height:160};	//top, left를 지정하지 않으면 가운데정렬 //top:20,left:370
	var objDate = new Date();
	var nTime = objDate.getTime();
	var sPopupId = nTime.toString() + Math.random().toString();		//key 설정.
	
	this.gfnOpenPush( sPopupId,"cmm::cmmPushMessage.xfdl",oArg,"",oOption);		
};

pForm.gfnCheckObjType = function (param) 
{ 
	var result = (typeof param);
	
	return result;
};
