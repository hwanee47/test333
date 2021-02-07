<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>

<html lang="ko">
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="keywords" content="CJ 화물정보망">
<meta name="description" content="CJ 화물정보망" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="CJ 화물정보망"/>
<meta name="twitter:site" content="CJ 화물정보망" />
<meta name="twitter:creator" content="CJ 화물정보망"/>
<meta name="twitter:image" content="../img/m_img.jpg" />
<meta name="twitter:description" content="CJ 화물정보망"/>
<meta property="og:title" content="글로벌 네트워크 | CJ 화물정보망">    
<meta property="og:site_name" content="CJ 화물정보망"/>
<meta property="og:type" content="article"/>
<meta property="og:url" content="https://www.cjlogistics.com/ko/network"/>
<meta property="og:image" content="../img/m_img.jpg">
<meta property="og:description" content="CJ 화물정보망"/>
<title>CJ 화물정보망</title>
<link rel="image_src" href="../img/m_img.jpg"/>
<link rel="shortcut icon" href="../img/cj.ico" type="image/x-icon" />
<link rel="icon" href="../img/cj.ico" type="image/x-icon" />

<meta name="author" content="" />
<meta name="Resource-type" content="Document" />

<link rel="stylesheet" type="text/css" href="../dist/fullpage.css" />
<link rel="stylesheet" type="text/css" href="../css/examples.css" />
<link rel="stylesheet" type="text/css" href="../css/common.css" />

<script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="../js/common.js"></script>
<script type="text/javascript" src="../js/sys/func.js"></script>


<script language="JavaScript" type="text/javascript">

	$( document ).ready(function() {
		$("#userPw").keyup(function(key) {
			if(key.keyCode == 13) {
				fn_login();	
			}
		});
		
		var userInputId = fnGetCookie("userInputId");
		$("input[name='memberID']").val(userInputId);  
		if($("input[name='memberID']").val() != ""){
			$("#idSave").attr("checked", true);
		}
	
	});
	
	
	//아이디저장
	function fnSetCookie(cookieName, value, exdays){
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + exdays);
		var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toUTCString());
		document.cookie = cookieName + "=" + cookieValue;
	}
	
	function fnDeleteCookie(cookieName){
		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate() - 1);
		document.cookie = cookieName + "= " + "; expires=" + expireDate.toUTCString();
	}
	
	function fnGetCookie(cookieName) {
		cookieName = cookieName + '=';
		var cookieData = document.cookie;
		var start = cookieData.indexOf(cookieName);
		var cookieValue = '';
		if(start != -1){
			start += cookieName.length;
			var end = cookieData.indexOf(';', start);
			if(end == -1){
				end = cookieData.length;
			}
			cookieValue = cookieData.substring(start, end);
		}
		return unescape(cookieValue);
	}
	
	function fn_login() {
		var id = $("#userId").val();
		var pw = $("#userPw").val();
		var captChaStr = "";
		
		if(isNull(id)) {
			alert('<%= MessageUtil.getString("msg.web.0079", "로그인 ID를(을) 입력하세요.") %>');
			return false;
		}
		
		if(isNull(pw)) {
			alert('<%= MessageUtil.getString("msg.web.0080", "로그인 PW를(을) 입력하세요.") %>');
			return false;
		}
		
		if(captcha_yn == "Y"){
			captChaStr = $("#captChaStr").val();
			// 캡챠 입력 필수시
			if(captChaStr == "") {
				alert('<%= MessageUtil.getString("msg.web.0081", "자동입력 방지문자를 함께 입력하셔야 합니다.") %>');
				$("#captChaStr").focus();
				return false;
			}
		}
		
		if($("#idSave").is(":checked")){
			var userInputId = $("input[name='memberID']").val();
			fnSetCookie("userInputId", userInputId, 30); // 30일 동안 쿠키 보관
		}else{ // ID 저장하기 체크 해제 시,
			fnDeleteCookie("userInputId");
		}
		
		var json = {
				head : "login",
				id	 : encodeURIComponent(id),
				pw	 : encodeURIComponent(pw),
				captChaStr : encodeURIComponent(captChaStr),
				type : "main"
		}
		
		fn_loginCall(json);
	};
	
	/**
	 * 캡챠 이미지 갱신
	 */
	function refreshCaptCha() {
		$("#captchaImg").attr("src", "${pageContext.request.contextPath}/action/getCaptChaStr.do?ran=" + Math.random());
	};
</script>
</head>
<body>

<!-- header -->
<%@ include file="../inc/header.jsp" %>
<!-- //header -->

<!-- sub visual -->
<div class="sub_vis_wrap s_vis05">
	<div class="inner_box">
		<dl>
			<dt><%= MessageUtil.getString("msg.web.0082", "대한통운 화물정보망") %></dt>
			<dd><%= MessageUtil.getString("msg.web.0083", "CJ대한통운 화물정보망의 첨단 물류 IT 시스템으로 차별화된 물류 서비스를 경험하실 수있습니다.") %> </dd>
		</dl>
	</div>
</div>
<!-- //sub visual -->

<!-- container -->
<div class="container">
	<!-- content -->
	<div class="content">
		<h2 class="s_tit"><%= MessageUtil.getString("msg.web.0001", "로그인") %></h2>

		<div class="sub_inner_ty01">
			<div class="login_box01">
				<div class="join_cont02" style="padding-bottom:18px;">
					<span class="input_chk">
						<input type="checkbox"  name="idSave" id="idSave"/> 
						<label for="saveid" class=""><%= MessageUtil.getString("msg.web.0084", "아이디저장") %></label>
					</span>
				</div>
				<div class="inp_box">
					<input id="userId" name="memberID" type="text" placeholder="아이디" class="inp_ty01" />
					<input id="userPw" type="password" value="" placeholder="비밀번호" class="inp_ty01" />
					<a href="javascript:fn_login();" class="btn_login"><%= MessageUtil.getString("msg.web.0001", "로그인") %></a>
				</div>
				<%-- div class="btm_menu">
					<a href="login02.jsp"><%= MessageUtil.getString("msg.web.0085", "아이디 찾기") %></a>
					<img src="../img/ft_line.png" alt="" class="line" />
					<a href="login03.jsp"><%= MessageUtil.getString("msg.web.0086", "비밀번호 찾기") %></a>
				</div --%>
				<div class="security-code" id="normalPwdArea" style="display:none">
					<div class="security-num" style="width:295px;height: 100px;">
						<img id="captchaImg" src="${pageContext.request.contextPath}/action/getCaptChaStr.do" alt="자동입력 방지 문자열" title="자동입력 방지 문자열" style="width: 295px; height: 100px;"/>
					</div>
					<ul>
						<!-- <li><a href="#" class="voice"><i></i>음성듣기</a></li> -->
						<li><a href="#" class="refresh" onClick="refreshCaptCha();"><i></i><%= MessageUtil.getString("msg.web.0087", "새로고침") %></a></li>
					</ul>
					<input type="text" id="captChaStr" name="captChaStr" maxlength="6" class="s_inp" autocomplete="off" placeholder="보안문자를 입력해 주세요." title="보안문자 입력" />
 				</div>
			</div>
			<div class="login_btm_tx01">
				<p class="tx01"><%= MessageUtil.getString("msg.web.0088", "아직 회원이 아니신가요?") %></p>
				<p class="tx02">
					<%= MessageUtil.getString("msg.web.0089", "함께 하는 Hello! 함께 누리는 가치!<br/>CJ대한통운 화물정보망에서 동반성장의 기쁨을 누리세요.") %>
				</p>
				<a href="join01_01.jsp" class="btn_join"><%= MessageUtil.getString("msg.web.0090", "화물정보망 회원가입") %></a>
			</div>
		</div>
	</div>
	<!-- //content -->
</div>
<!-- //container -->


<!-- footer -->
<%@ include file="../inc/footer.jsp" %>
<!-- //footer -->

</body>
</html>