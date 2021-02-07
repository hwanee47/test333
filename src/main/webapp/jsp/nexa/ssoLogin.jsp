<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="ko" xml:lang="ko">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta http-equiv="Content-Script-Type" content="text/javascript" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<title>CJ대한통운 운송가맹시스템</title>

<style type="text/css">

/* ========== C O M M O N ========== */
body,td,th{font-family:'Dotum', sans-serif;font-size:12px;color:#666;letter-spacing:0px}

input, button{font-family:'Dotum', sans-serif;font-size:12px;overflow:visible}
input[type="radio"]{*width:13px;*height:13px;font-family:'Dotum', sans-serif;vertical-align:middle}
input[type="checkbox"]{*width:13px;*height:13px;font-family:'Dotum', sans-serif;vertical-align:middle}
input[type="text"]{font-family:'Dotum', sans-serif;font-size:12px;color:#666;padding-left:3px;border:1px solid #cdcdcd}
input[type="password"]{font-family:'Dotum', sans-serif;font-size:12px;color:#666;padding-left:3px;border:1px solid #cdcdcd}
input[type="file"]{font-family:'Dotum', sans-serif;font-size:12px;height:22px;color:#666}
select{font-family:'Dotum', sans-serif;font-size:12px;color:#666;vertical-align:middle;border:none}
textarea{font-family:'Dotum', sans-serif;font-size:12px;color:#666;padding:5px;vertical-align:middle;border:1px solid #cdcdcd}
em, address{font-style:normal}

.hidden{position:absolute;top:-9999em;left:-9999em;display:block;width:1px;height:1px}

.clear{clear:both;font-size:0;height:0}

/* link_style */
a:link, a:visited, a:hover, a:active{color:#666;text-decoration:underline}
a:hover{color:#0076c8}

/* ========== L A Y O U T / C O N T E N T ========== */
html, body{padding:0;margin:0}

#wrap{position:absolute;top:50%;left:40%;width:500px;margin-left:-250px;height:265px;margin-top:-135px;padding-top:5px;text-align:center}
#header img{margin-bottom:15px}
#header h1{font-size:16px;font-weight:bold;color:#007dc3;text-decoration:underline;margin-bottom:20px}
#content{line-height:140%;margin-bottom:50px}
#footer strong{font-weight:bold;color:#007dc3}
</style>
</head>
<body>
<!-- wrap -->
<div id="wrap">
	<!-- header -->
	<div id="header">
		<img src="${contextRoot}/miplatform/img/img_no_permission.gif" alt="권한없음" />
		<h1>운송가맹시스템 아이디가 없습니다.</h1>
	</div>
	<!-- //header -->
	<!-- content -->
	<div id="content">
		본 시스템은 CJ대한통운 인가자만 사용하실 수 있습니다.<br />
		불법적인 접근 및 사용시 관련 법규에 의해 처벌될 수 있습니다.
	</div>
	<!-- //content -->
	<!-- footer -->
	<div id="footer">
		<strong>시스템 문의</strong> : 운송가맹 전산망 담당자 (1577-6531)
	</div>
	<!-- //footer -->
</div>
<!-- //wrap -->
</body>
</html>
