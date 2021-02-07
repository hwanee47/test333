/**
*  컨설팅 표준화 작업
*  @FileName 		Transaction.js
*  @Creator 			ssm
*  @CreateDate 	2018.05.08
*  @Desction         서비스 호출 및 콜백처리
************** 소스 수정 이력 ***************************************************
*  date          		Modifier                Description
*******************************************************************************
*  2018.05.08     	ssm 	           최초 생성 
*******************************************************************************
*/ 
  
var pForm 			= nexacro.Form.prototype;
var pSvcUrl 		= "nexacroController.do";
var pSvcUrlW 		= "nexacroWebController.do";
var pSvcLoginUrl 	= "loginInOut.do";

/**
 * @class 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 호출하고, 트랜젝션이 완료되면 콜백함수을 수행하는 함수
 * @param {String} strSvcId - 서비스 ID
 * @param {String} strSvcUrl - 서비스 호출 URL 
 * @param {String} [inData]	- input Dataset list("입력ID=DataSet ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [outData] - output Dataset list("DataSet ID=출력ID" 형식으로 설정하며 빈칸으로 구분)
 * @param {String} [strArg]	- 서비스 호출 URL 
 * @param {String} [callBackFnc] - 콜백 함수명
 * @param {Boolean} [isAsync] - 비동기통신 여부 
 * @return N/A
 * @example
 * var strSvcUrl = "transactionSaveTest.do";
 * var inData    = "dsList=dsList:U";
 * var outData   = "dsList=dsList";
 * var strArg    = "";
 * this.gfnTransaction("save", strSvcUrl, inData, outData, strArg, "fnCallback", true);
 */ 
pForm.gfnTransaction = function(strSvcId)
{  
	var objEnv = nexacro.getEnvironment();
	var objApp = nexacro.getApplication();
	
	//시스템 구분별 controller 분기
	var svcUrl = (objApp.gvSystemType == "M" ? pSvcUrl : pSvcUrlW);
	
	var iRow = this.dsService.findRow("SVC_ID", strSvcId);
	
	if(iRow < 0) 
	{
		this.gfnAlert("요청하신 Service가 없습니다. Service ID를 확인하여 주십시오.");
		return false;
	}
	
	// 호출 serviceBeanName, serviceMethod
	var serviceBeanName = this.dsService.getColumn(iRow, "SERVICE_BEANNAME");
	var methodName = this.dsService.getColumn(iRow, "SERVICE_METHOD");
	
	//입력 값으로 사용될 Dataset List
	var sInDatasets = this.dsService.getColumn(iRow, "IN_DATASET_LIST");

	//출력 값으로 사용될 Dataset List
	var sOutDatasets = this.dsService.getColumn(iRow, "OUT_DATASET_LIST");
	
	//Call Back Method
	var sCallBack = this.dsService.getColumn(iRow, "CALLBACK");
	
	// fnCallback 함수 기본값 설정
	if (this.gfnIsNull(sCallBack)) sCallBack = "fnCallback";
	
	// QUERY LIST
	var sQueryList = this.dsService.getColumn(iRow, "QUERY_LIST");
	
	if(this.gfnIsNull(serviceBeanName)) 
	{
		//공통 서비스 인 경우 dsService에 IN_DATASET, OUT_DATASET, QUERY_LIST 항목에 COUNT와 변수명 규칙 확인.
		if(this.gfnQueryCheck(sQueryList, sInDatasets, sOutDatasets)) {
			return false;
		}
		
		serviceBeanName = "commonService";
		methodName = "selectCommon";
	} 
	else 
	{
		if (this.gfnIsNull(methodName))
		{
			this.gfnAlert("요청하신 Service가 없습니다. Service ID를 확인하여 주십시오.");
			return false;
		}
	}
	
	// Async
	var sSyncType = this.dsService.getColumn(iRow, "SYNC_YN");
	var isAsync = true;
	if(sSyncType == "N")
		isAsync = false;			// N 인 경우 Sync
	else
		isAsync = true;				// N 이 아닌 경우 ASync
	
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();

	
	// 1. Service ID  And callBackFnc Merge
	var strMergeSvcID = strSvcId + "|" + sCallBack + "|" + isAsync + "|" + sStartDate + "|" + nStartTime;
	
	// 2. strServiceUrl
	var strServiceUrl = objEnv.services["svcurl"].url + svcUrl;
	
	// 5. strArg
	var arguments = "serviceBeanName=" + serviceBeanName + " method=" + methodName;
	arguments += " " + sQueryList;
	
	// 5-1.Global Variable setting
	arguments = this.gfnSetGlobalVal(arguments);
	
	// 0. 개발시에는 xml 운영시에는 ssv로 할것
	var nDataType = 2;
	this.transaction( strMergeSvcID                 	//1.strMergeSvcID
					, strServiceUrl                 	//2.strServiceUrl
					, sInDatasets                       //3.inDataSet
					, sOutDatasets                     	//4.outDataSet
					, arguments                     	//5.arguments
					, "gfnCallback"				        //6.strCallbackFunc
					, isAsync                     		//7.bAsync
					, nDataType                     	//0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                    		//0.bCompress ( default : false ) 
};

/**
 * @class 로그인 서비스 호출 공통함수 <br>
 * Dataset의 값을 갱신하기 위한 서비스를 호출하고, 트랜젝션이 완료되면 콜백함수을 수행하는 함수
 * @param {String} strSvcId - 서비스 ID
 * @return N/A
 * @example
 * var strSvcUrl = "transactionSaveTest.do";
 * var inData    = "dsList=dsList:U";
 * var outData   = "dsList=dsList";
 * var strArg    = "";
 * this.gfnLogin(strSvcId);
 */ 
pForm.gfnLogin = function (strSvcId)
{
	var objEnv 		= nexacro.getEnvironment();
	var objApp 		= nexacro.getApplication();
	var runMode   	= objApp.gvRunMode;
	var svcUrl		= objEnv.services["svcurl"].url;
	
// 	if(runMode == "QA" || runMode == "PRD") {
// 		svcUrl = svcUrl.replace("http", "https");
// 	}
	
	var iRow = this.dsService.findRow("SVC_ID", strSvcId);
	
	if(iRow < 0) 
	{
		this.gfnAlert("요청하신 Service가 없습니다. Service ID를 확인하여 주십시오.");
		return false;
	}
	
	// 호출 serviceBeanName, serviceMethod
	var serviceBeanName = this.dsService.getColumn(iRow, "SERVICE_BEANNAME");
	var methodName = this.dsService.getColumn(iRow, "SERVICE_METHOD");
	
	//입력 값으로 사용될 Dataset List
	var sInDatasets = this.dsService.getColumn(iRow, "IN_DATASET_LIST");

	//출력 값으로 사용될 Dataset List
	var sOutDatasets = this.dsService.getColumn(iRow, "OUT_DATASET_LIST");
	
	//Call Back Method
	var sCallBack = this.dsService.getColumn(iRow, "CALLBACK");
	
	// fnCallback 함수 기본값 설정
	if (this.gfnIsNull(sCallBack)) sCallBack = "fnCallback";
	
	// QUERY LIST
	var sQueryList = this.dsService.getColumn(iRow, "QUERY_LIST");
	
	if(this.gfnIsNull(serviceBeanName) || this.gfnIsNull(methodName)) 
	{
		this.gfnAlert("요청하신 Service가 없습니다. Service ID를 확인하여 주십시오.");
		return false;
	} 
	
	// Async
	var sSyncType = this.dsService.getColumn(iRow, "SYNC_YN");
	var isAsync = true;
	if(sSyncType == "N")
		isAsync = false;			// N 인 경우 Sync
	else
		isAsync = true;				// N 이 아닌 경우 ASync
	
	var objDate = new Date();
	var nStartTime = objDate.getTime();
    var sStartDate = objDate.getYear()
						+"-"+String(objDate.getMonth()).padLeft(2, '0')
						+"-"+String(objDate.getDate()).padLeft(2, '0')
						+" "+String(objDate.getHours()).padLeft(2, '0')
						+":"+String(objDate.getMinutes()).padLeft(2, '0')
						+":"+String(objDate.getSeconds()).padLeft(2, '0')
						+" "+objDate.getMilliseconds();

	
	// 1. Service ID  And callBackFnc Merge
	var strMergeSvcID = strSvcId + "|" + sCallBack + "|" + isAsync + "|" + sStartDate + "|" + nStartTime;
	
	// 2. strServiceUrl
	var strServiceUrl = svcUrl + pSvcLoginUrl;
	
	// 5. strArg
	var arguments = "serviceBeanName=" + serviceBeanName + " method=" + methodName;
	arguments += " " + sQueryList;
	
	// 5-1.Global Variable setting
	arguments = this.gfnSetGlobalVal(arguments);
	
	// 0. 개발시에는 xml 운영시에는 ssv로 할것
	var nDataType = 2;
	this.transaction( strMergeSvcID                 	//1.strMergeSvcID
					, strServiceUrl                 	//2.strServiceUrl
					, sInDatasets                       //3.inDataSet
					, sOutDatasets                     	//4.outDataSet
					, arguments                     	//5.arguments
					, "gfnCallback"				        //6.strCallbackFunc
					, isAsync                     		//7.bAsync
					, nDataType                     	//0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                    		//0.bCompress ( default : false ) 
};

/**
 * @class 공통 gfnSetGlobalVal 함수 <br>
 * 트랜잭션 처리 시 Global 변수 정보를 설정.
 * @param {String} arg - arguments
 * @return arg
 */
pForm.gfnSetGlobalVal = function(arg) 
{
	var objApp 		= nexacro.getApplication();
	var winId  		= this.getOwnerFrame().name;
	var menuCd 		= objApp.gdsOpenMenu.lookup(objApp.gvMenuColumns.winId, winId, objApp.gvMenuColumns.menuId);
	var menuDesc 	= objApp.gdsOpenMenu.lookup(objApp.gvMenuColumns.winId, winId, objApp.gvMenuColumns.title); 
	
	if(this.gfnIsNull(menuCd)) menuCd 		= "";
	if(this.gfnIsNull(menuDesc)) menuDesc 	= "";
	
	var globalVal = " gv_lang=" 	+ this.gfnNvl(objApp.gv_lang, "");			//언어코드
	globalVal += " gv_userId=" 		+ this.gfnNvl(objApp.gv_userId, "");		//사용자 id
	globalVal += " gv_userNm=" 		+ this.gfnNvl(objApp.gv_userNm, "");		//사용자명
	globalVal += " gv_compCd=" 		+ this.gfnNvl(objApp.gv_compCd, "");		//회사 코드
	globalVal += " gv_deptCd=" 		+ this.gfnNvl(objApp.gv_deptCd, "");		//부서 코드
	globalVal += " gv_deptNm=" 		+ this.gfnNvl(objApp.gv_deptNm, "");		//부서명
	globalVal += " gv_empNo=" 		+ this.gfnNvl(objApp.gv_empNo, "");			//사원번호
	globalVal += " gv_ipAddr=" 		+ this.gfnNvl(objApp.gv_ipAddr, "");		//사용자 ip
	globalVal += " gv_siteCd=" 		+ this.gfnNvl(objApp.gv_siteCd, "");		//사이트코드
	globalVal += " gv_lspId=" 		+ this.gfnNvl(objApp.gv_lspId, "");			//협력사id
	globalVal += " gv_shprId=" 		+ this.gfnNvl(objApp.gv_shprId, "");		//고객사id
	globalVal += " gv_shprNm=" 		+ this.gfnNvl(objApp.gv_shprNm, "");		//고객사id
	globalVal += " gv_progCd=" 		+ this.gfnNvl(menuCd, "");					//메뉴 ID
	globalVal += " gv_progNm=" 		+ this.gfnNvl(menuDesc, "");				//메뉴 DESC	
	globalVal += " gv_sysGb=" 		+ this.gfnNvl(objApp.gv_sysGb, "");			//시스템 구분
	globalVal += " gv_joinType=" 	+ this.gfnNvl(objApp.gv_joinType, "");		//JOIN TYPE
	globalVal += " gv_arCostcId=" 	+ this.gfnNvl(objApp.gv_arCostcId, "");		//코스트센터 코드
	globalVal += " gv_apCostcId=" 	+ this.gfnNvl(objApp.gv_apCostcId, "");		//코스트센터 코드
	globalVal += " gv_warehCd=" 	+ this.gfnNvl(objApp.gv_warehCd, "");		//창고코드
	globalVal += " gv_dutyDv=" 		+ this.gfnNvl(objApp.gv_dutyDv, "");		//업무구분
	globalVal += " gv_custId=" 		+ this.gfnNvl(objApp.gv_custId, "");		//소속
	globalVal += " gv_userType=" 	+ this.gfnNvl(objApp.gv_userType, "");		//사용자유형
	globalVal += " gv_sysDv=" 		+ this.gfnNvl(objApp.gv_sysDv, "");			//시스템구분
	globalVal += " gv_userSessionId=" 		+ this.gfnNvl(objApp.gv_userSessionId, "");		//사용자세션ID
	globalVal += " gv_sessionInvalidByForceYn=" 		+ this.gfnNvl(objApp.gv_sessionInvalidByForceYn, "");		//사용자세션 강제종료 여부
	

	arg += globalVal;
	return arg;
};


/**
 * @class 공통 Callback 함수 <br>
 * 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
 * @param {String} svcID - 서비스 ID
 * @param {Number} errorCode - 에러코드(정상 0, 에러 음수값)
 * @param {String} [errorMsg] - 에러메시지
 * @return N/A
 */
pForm.gfnCallback = function(svcID,errorCode,errorMsg)
{
	var arrSvcID 	= svcID.split("|");
	var objApp 		= nexacro.getApplication();
	
	// 에러 공통 처리
	if(errorCode != 0) 
	{ 
		switch(errorCode)
		{ 
			case -1 :				
				var arrError = (""+errorMsg).split("Query is");
				// 서버 오류입니다.\n관리자에게 문의하세요.
				this.gfnAlert("서버 오류입니다.\n관리자에게 문의하세요.");
				break;
				
			case -2463215:
				//@todo : 임의 에러코드  처리
				var arryMsg = errorMsg.split(",");
				if(arryMsg.length < 2) {
					this.gfnAlert(arryMsg[0]);
				} else {
					var arrArg = arryMsg[1].split("|");
					this.gfnAlert(arryMsg[0], arrArg);
				}
				
				return;
				
				break;
			case -4:
				//@todo : 세션 종료 로그아웃 처리.
				this.gfnAlert("세션이 종료 되었습니다.",'', function(){
					this.gfnLogout();
				});
				
				return;
		}
	}

	// 서비스 실행결과 출력
	var sStartDate = arrSvcID[3];
	var nStartTime = arrSvcID[4];
	
	var objDate = new Date();
	var sEndDate = objDate.getYear()
					+"-"+String(objDate.getMonth()).padLeft(2, '0')
					+"-"+String(objDate.getDate()).padLeft(2, '0')
					+" "+String(objDate.getHours()).padLeft(2, '0')
					+":"+String(objDate.getMinutes()).padLeft(2, '0')
					+":"+String(objDate.getSeconds()).padLeft(2, '0')
					+" "+objDate.getMilliseconds();
	var nElapseTime = (objDate.getTime() - nStartTime)/1000;
	
	var sMsg = "";
	if (errorCode == 0)
	{
// 		sMsg = "gfnCallback : SvcID>>"+arrSvcID[0] + ",  errorCode>>"+errorCode + ", errorMsg>>"+errorMsg + ", isAsync>>" + arrSvcID[2] + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
// 		trace(sMsg);
	}
	else {
		sMsg = "gfnCallback : SvcID>>"+arrSvcID[0] + ",  errorCode>>"+errorCode + ", isAsync>>" + arrSvcID[2] + ", sStartDate>>" + sStartDate + ", sEndDate>>"+sEndDate + ", nElapseTime>>"+nElapseTime;
		sMsg += "\n==================== errorMsg =======================\n"+errorMsg+"\n==================================================";
		trace(sMsg);
	}

	// 화면의 callBack 함수 실행
	if(!this.gfnIsNull(arrSvcID[1]))
	{
		this.lookupFunc(arrSvcID[1]).call(arrSvcID[0], errorCode, errorMsg);
	}
};

pForm.gfnLogout = function ()
{
	var objApp = nexacro.getApplication();
	objApp.gvTopFrame.form.fn_logout();
};

pForm.gfnQueryCheck = function(pQueryList,pInDatasets,pOutDatasets)
{  
	var queryArr = pQueryList.split(" ");
	var inDsArr = pInDatasets.split(" ");
	var outDsArr = pOutDatasets.split(" ");
	var isCheck = false;
	
	if(this.gfnIsNull(pQueryList)) {
		this.alert("공통 Service에서 처리 할 Query 정보가 없습니다.");
		return true;
	}
	
	if(queryArr.length == inDsArr.length && queryArr.length == outDsArr.length) {
		for(var i=0; i<queryArr.length; i++) {
			var j = i+1;
			if(queryArr[i].split("=")[0] != ("q" + j)) {
				isCheck = true;
			}
		
			if(inDsArr[i].split("=")[0] != ("ds" + j)) {
				isCheck = true;
			}
			
			if(outDsArr[i].split("=")[1] != ("ds" + j)) {
				isCheck = true;
			}
		}
		
		if(isCheck) {
			this.alert("[IN_DATASET_LIST, OUT_DATASET_LIST, QUERY_LIST] 변수 규칙이 올바르지 않습니다.");
			return true;
		}
	} else {
		this.alert("[IN_DATASET_LIST, OUT_DATASET_LIST, QUERY_LIST]를 확인 하세요.");
		return true;
	}
	
	return false;
};


