<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<script src="${pageContext.request.contextPath}/js/jquery-1.11.3.min.js"></script>
<script src="${pageContext.request.contextPath}/js/stomp.js"></script>

<script language="JavaScript" type="text/javascript">

	var sReturnVal = "";
	
	// window.NEXACROHTML 객체 초기화
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
	
	var ws;
	var client;
	var g_queueName;
	var g_userId;
	var g_userInfo;
	
	function fn_onload (pushServer, queueName, userId, userInfo) 
	{
		g_userId   = userId;
		g_userInfo = userInfo;
		g_queueName= queueName;
	
		//메세지 Receive Run
		fn_msgReceive(pushServer, userId); 
	} 
	
	function fn_msgReceive(url, userId) 
	{
		ws = new WebSocket(url);
	    client = Stomp.over(ws);
	    
	    client.debug = function(e) 
	    {
	  	//	console.log(e);
	    };
	
	    var on_connect = function(x) 
	    {
	    	id = client.subscribe(g_queueName, function(m) {
														        	setTimeout(function(){
														        		var divCon = document.getElementById("pushMessage");
														        	    divCon.value = m.body;
														        	    window.NEXACROHTML.FireUserNotify(true);
														        	}, 300);    
	        											   });
	    };
	    
	    var on_error =  function() 
	    {
	  	  	console.log('error');
	    };
	    
	   client.connect(g_userId, g_userInfo, on_connect, on_error, '/');
	}
		
</script>
</head>
<body>
	<textarea id="pushMessage">
	</textarea>
</body>
</html>