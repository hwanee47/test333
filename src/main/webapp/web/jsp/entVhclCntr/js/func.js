/**
 * target 문자열이 null이면 대체문자열로 치환
 * @param target
 * @param replace
 * @returns {String}
 */
function nvl(target, replace) {
	// return할 값
    var str = "";
    try {
    	// target문자열 앞뒤 공백제거
    	var strr = $.trim(target);
    	
    	// null이면 대체문자열로 retun
    	if(!strr || strr == null || strr == "" || strr == "null" || strr == "undefined" || strr == undefined || strr == "") {
    		str = replace;
    	}
    	
    	// 아닌 경우 원래문자열 return
    	else {
    		str = target;
    	}
    }
    
    catch(err) {
    	str = replace;
    }
    
    return str;
}

/**
 * target 문자열이 null이면 true 아니면 false
 * @param target
 * @returns {String}
 */
function isNull(target) {
	// null이면 true 아니면 false
	if(target == null || target == "" || target == "null" || target == "undefined" || target == undefined) {
		return true;
	} else {
		return false;
	}
}


/**
 * Ajax 호출
 * @param o ==> url           : 데이터 호출 URL (필수)
 *              param         : 전송 파라미터(json 형태로 전송)
 *              type          : 전송방식 (GET, POST(기본값))
 *              async         : 동시 실행여부(true(기본값) : 동시, false : 순차적)
 *              callback      : URL 호출 성공시 Callback (필수)
 *              callbackparam : callback 시 전달할 파라미터 (옵션)
 */
function callService(o) {
	$.ajax({
		url	          : CONTEXT_PATH + "/" + o.url,
		data          : JSON.stringify(o.params),
		type          : nvl(o.type, "POST"),
		contentType   : "application/json; charset=UTF-8",
		dataType      : "json",
		cache         : false,
		async         : o.async == undefined ? true : o.async,
		callbackparam : o.callbackparam,
		success       : function (data) {o.callback(data, this.callbackparam);}
	});	
}


/**
 * 사이즈 계산
 * @param obj
 * @returns {Number}
 */
function getSize(obj) {
	var size = 0;
	try {
		size = obj.length;
	} catch(Err) {
		size = 0;
	}
	return size;
}


/**
 * replaceAll 함수
 * @param str
 * @param targetStr
 * @param replace
 * @returns
 */
function replaceAll(str, targetStr, replace) {
	var strr = nvl(str, "");
	if(strr == "") {
		return strr;
	} else {
		return strr.split(targetStr).join(replace);
	}
}

/**
 * callNexa 함수
 * @param searchTarget
 * @param searchValue
 * @param callbackFunction
 */
function callNexa(searchTarget, searchValue, callbackFunction) {
	var nexa = window.NEXACROWEBBROWSER;
	var param = {};
	param.searchTarget = searchTarget;
	param.searchValue = searchValue;
	param.callback = callbackFunction;
	
	if (nexa) {
		// Web Browser, iOS nexacro Browser, Android Default Web Browser, iOS Default WebBrowser 
		nexa.on_fire_onusernotify(nexa, param);
	} else if (typeof nexacro == "undefined") {
		// Windows nexacro Browser 
		window.document.title = JSON.stringify(param);
	}
}

/**
 * getObj 함수
 * @param target
 * @returns object
 */
function getObj(target) {
	return document.getElementById(target);
}

/**
 * dateDiff 함수 - 날짜의 차이를 계산해 준다.
 * @param _date1
 * @param _date2
 * @returns
 */
function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);
 
    diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
 
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
 
    return diff;
}
