
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
 * str문자에 padding문자를 더해 width 길이로 만든다
 * @param target
 * @returns {String}
 */
function pad(str, width, padding) {
	str		= str + '';
	padding	= (padding == null)? " ":padding;
	return str.length >= width ? str : new Array(width - str.length + 1).join(padding) + str;
}



/**
 * Ajax 호출
 * @param o ==> url         : 데이터 호출 URL (필수)
 *              svcId       : 해당 URL 호출 화면 ID (필수)
 *              param       : 전송 파라미터(key값이 ds_data인 경우 json 형태로 전송)
 *              type        : 전송방식 (GET, POST(기본값))
 *              async       : 동시 실행여부(true(기본값) : 동시, false : 순차적)
 *              callback    : URL 호출 성공시 Callback (필수)
 *              errCallback : URL 호출 에러 발생시 Callback(기본값 : errCallback)
 */
function callService(o) {
	
	// 파라미터 세팅
	var params = "svcId=" + nvl(o.svcId, "");
	
	// 파라미터가 정의되어 있는 경우에만 파라미터를 세팅한다.
	if(o.param != undefined) {
		
		for(var p in o.param) {
			
			params += "&" + p + "=" + encodeURIComponent(p == "ds_data"? JSONStringify(o.param[p]) : o.param[p]);
		}
	}
	
	$.ajax({
		
		type     : nvl(o.type, "POST"),
		url		 : CONTEXT_ROOT + "/" + o.url,
		data 	 : params,
		dataType : "json",
		cache	 : false,
		async    : o.async == undefined ? true : o.async,
		success  : o.callback,
		error    : nvl(o.errCallback, errCallback)
	});	
}

/**
 * 공통 에러 콜백
 * @param obj
 */
function errCallback(obj) {
	// 상태
	var status = Number(obj.status);
	
	// 상태 정상인데 ErrorCallback 호출 ==> 세션 or 권한
	if(status == 200) {
		
		
	}
	
	// 404
	else if(status == 404) {
		
		
	}
	
	// 500
	else if(status == 500) {
		
		
	}
}
