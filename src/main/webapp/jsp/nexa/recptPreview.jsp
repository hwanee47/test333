<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<script src="${pageContext.request.contextPath}/js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/web/js/WebIF.js"></script>
<script language="JavaScript" type="text/javascript">
//window.NEXACROHTML 객체 초기화
	if (! window.NEXACROHTML) 
	{
		window.NEXACROHTML = {};
	}
	
	window.NEXACROHTML.FireUserNotify = function(userdata) {
		
		//넥사크로 호출 유형에 맞게 분기해서 처리한다.
		if(window.NEXACROWEBBROWSER)
		{
			//넥사크로 런타임 버전 
			window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata);
		}
		else
		{
			//런타임 버전
			window.document.title = userdata;
		}
	}

	$( document ).ready(function() {
		fn_init();
	});
	
	function fn_init() {
		//넥사크로 연결
		 window.NEXACROHTML.Init();
	};
	
	function fn_preView(filePath, fileName) {
		 var imgPath = "${pageContext.request.contextPath}/jsp/nexa/preView.jsp?filePath=" + filePath + "&fileName=" + fileName;
		 $('#imgSrc1').attr('src', imgPath);
	}
</script>

<img id="imgSrc1" src="" style="padding:0; margin:0;">   
