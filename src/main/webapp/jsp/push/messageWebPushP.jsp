<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<script src="${pageContext.request.contextPath}/js/jquery-1.11.3.min.js"></script>
<script src="${pageContext.request.contextPath}/js/stomp.js"></script>

<style>
.messenger_wrap {/*width:476px;*/ height:352px; background:#fbf4e0; border:1px solid #54687e; /*border-radius:3px;*/ overflow:hidden;}
.messenger_wrap .tit_box {height:51px; padding:0 0 0 22px; background:#ebe4d1; border-bottom:1px solid #c9c1aa;}
.messenger_wrap .tit_box h2.m_tit {font-size:16px; color:#000; line-height:51px;}
.messenger_wrap .tit_box h2.m_tit img.logo {width:46px; margin:12px 7px 0 0; vertical-align:top;}
.messenger_wrap .cont_box {height:300px;}
.messenger_wrap .cont_box .ms_area {height:210px; padding:34px 17px 0 17px; overflow-y:scroll;}
.messenger_wrap .inp_box {position:relative; height:46px; padding:10px 66px 0 135px;}
.messenger_wrap .inp_box select.sel_m_ty01 {position:absolute; top:10px; left:10px; /*float:left;*/ width:120px; height:36px; font-family:'맑은 고딕'; font-size:12px; color:#777; line-height:36px; margin:0 0 0 0; background:#fff; border:1px solid #d1c8af; border-radius:2px;} 
.messenger_wrap .inp_box input.inp_m_ty01 {width:100%; height:36px; font-family:'맑은 고딕'; font-size:12px; color:#777; line-height:36px; background:#fff; padding:0 0 0 15px; border:1px solid #d1c8af; border-right:none; border-radisu:2px; border-top-right-radius:0; border-bottom-right-radius:0; box-sizing:border-box;}
.messenger_wrap .inp_box a.btn_m_send {position:absolute; top:10px; right:10px; display:block; width:56px; height:34px; font-family:'맑은 고딕'; font-weight:bold; font-size:13px; color:#fff; line-height:34px; padding:0; margin:0; background:#0d5383; border:1px solid #d1c8af; border-left:none; border-top-left-radius:0; border-bottom-left-radius:0; border-top-right-radius:3px; border-bottom-right-radius:3px;text-align:center; text-decoration:none;}

.ms_area .ms_sender {text-align:right;}
.ms_area .ms_sender span.date {position:absolute; bottom:0; left:-57px; font-size:11px; color:#5e5d5b; line-height:11px;}
.ms_area .ms_receiver {text-align:left;}
.ms_area .ms_receiver span.date {position:absolute; bottom:0; right:-57px; font-size:11px; color:#5e5d5b; line-height:11px;}
.ms_area .inner_box {margin:0 0 20px /*33px*/ 0;}
.ms_area .inner_box p.name {font-weight:bold; font-size:12px; color:#614f32; padding:0 0 4px 0; margin:0;}
.ms_area .inner_box .tx_box {position:relative; display:inline-block; max-width:210px; font-size:12px; color:#fff; padding:10px 15px; background:#a89c78; border-radius:16px; word-break:break-all;}
</style>

<title>Hello Messenger</title>
<link href="${pageContext.request.contextPath}/css/main.css" rel="stylesheet" type="text/css" />
</head>
<body lang="en" style="padding:0; margin:0;">
	<div id="first" class="messenger_wrap">
		<!-- 타이틀 영역 -->
		<div class="tit_box">
			<h2 class="m_tit"><img src="${pageContext.request.contextPath}/nkfr/_resource_/_theme_/default/images/logo01.png" alt="hello" class="logo"/>TALK</h2>
		</div>
		<!-- //타이틀 영역 -->
		
		<div class="cont_box">
			<!-- 텍스트 영역 -->
			<div class="ms_area">
				
			</div>
			<!-- //텍스트 영역 -->
			
			<!-- 입력 영역 -->
			<div class="inp_box">
				<form>
					<select class="sel_m_ty01" id="selectBox">
					</select>
					<input autocomplete="off" placeholder="Type here..." class="inp_m_ty01" />
					<a href="#" class="btn_m_send">전송</a>
				</form>
			</div>
			<!-- //입력 영역 -->
		</div>
	</div>

	<script language="JavaScript" type="text/javascript">
		var ws;
		var client;
		var g_userId;
		var g_corpId;
		var g_userInfo;
		var g_user;
		var g_pw;
		function fn_onload(param, userList) {	
			g_userId 		= param.userId;  				//로그인 사용자 id
			g_userInfo 		= param.userInfo;				//로그인 사용자 정보
			g_user 			= param.pushUser;				//PushServer id
			g_pw 			= param.pushPassword;			//PushServer pw
			g_corpId 		= param.corpId;					//CORP ID
			
			//메세지 Receive Run
			fn_msgReceive(param.pushServer, g_userId); 

			//대상자 설정.
			for(var i=0; i<userList.length; i++) {
				var addMesg 	= "<option>" + userList[i] + "</option>";
				$("#selectBox").prepend(addMesg);
			}
		} 
		
		function fn_msgReceive(url, userId) {
			ws = new WebSocket(url);
		    client = Stomp.over(ws);
		    
		    var queueName = "/exchange/" + userId + "_Messenger"; 
		   
		    client.debug = function(e) {
		  	  //console.log(e);
		    };
		
		    var on_connect = function(x) {
		        id = client.subscribe(queueName, function(m) {
		        	var json 		= JSON.parse(m.body);
		        	var mesgResult 	= "";
		        	var type 		= json.type;
		        	var d 			= new Date();
		        	var nowHour 	= d.getHours();
		        	var nowMt 		= d.getMinutes();
		        	var ampm		= "";
		        	if(nowHour > 12) {
		        		nowHour = nowHour -12;
		        		ampm = "오후";
		        	} else {
		        		ampm = "오전";
		        	}
		        	
		        	var senderInfo = "";
		        	if(isNull(json.senderInfo)) {
	        			senderInfo = json.sender;
	        		} else {
	        			senderInfo = json.senderInfo;
	        		}
		        	
		        	if(type == "S") {
		        		mesgResult = "<div class='ms_sender'>";
		        		mesgResult += "<div class='inner_box'>";
		        		mesgResult += "<p class='name' id='senderId'>" + senderInfo + "</p>";
		        	} else {
		        		mesgResult = "<div class='ms_receiver'>";
		        		mesgResult += "<div class='inner_box'>";
		        		mesgResult += "<p class='name' id='receiverId'>" + senderInfo + "</p>";
		        	}
		        	
	        		mesgResult += "<div class='tx_box'>" + json.message;
	        		mesgResult += "<span class='date'>" + ampm + nowHour + ":" + nowMt + "</span>";
	        		mesgResult += "</div></div></div>";
		        	
		        	$('#first div .ms_area').append(mesgResult);
		        	
		        	//스크롤 맨 아래로 이동.
		        	$('#first div .ms_area').scrollTop($('#first div .ms_area')[0].scrollHeight);
		        });
		    };
		    
		    var on_error =  function(msg) {
		    	console.log(msg);
		    };
		    
		    client.connect(g_user, g_pw, on_connect, on_error);
		}
		
		function fn_pushMsg() {
			var selectVal = $("#first form option:selected").val();
			var receiver = selectVal.split("/");
			var mesg = $('#first form input').val();

			if (mesg) {
				var queueName = "/queue/MSEG";
			    var jsonMsg = {
			    		head 			: "Push_Messenger",
			    		sender 			: g_userId,
			    		senderInfo 		: g_userInfo,
			    		receiver 		: receiver[2],
			    		receiverInfo 	: receiver[0] + "/" + receiver[1] + "/" + receiver[2],
			    		corpId			: g_corpId,
			    		message 		: mesg
			    }
		
			    client.send(queueName, {}, JSON.stringify(jsonMsg));
	            $('#first form input').val("");
			}
		}
		
		$('#first form').submit(function() {
			fn_pushMsg();
			return false;
	     });
		
		$('#first form a').click(function() {
			fn_pushMsg();
			return false;
		});
		
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
    </script>
</body>
</html>
