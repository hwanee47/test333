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
<script language="JavaScript" type="text/javascript">
/**
 * 이메일 선택 Selectbox 변경시
 * @param targetId
 * @param selectId
 */
function changeEmail(targetId, selectId) {
	
	// 이메일 선택값
	var val = $("#" + selectId + " > option:selected").val();
	var checkVal = '<%= MessageUtil.getString("msg.user.0077", "직접입력") %>';
	// 직접입력인 경우
	if(val == "" || val == checkVal) {
		
		$("#" + targetId).val("");
		$("#" + targetId).prop("disabled", false);
		$("#" + targetId).focus();
	}
	
	// 그 외
	else {
		
		$("#" + targetId).val(val);
		$("#" + targetId).prop("disabled", true);
	}
}

/**
 * 이메일 1 유효성 체크 정규식
 * @param emailId
 * @returns {Boolean}
 */
function checkEmail1(emailId) {
	
	// 체크 결과
	var b          = false;
	
	// 이메일 정규식
	var patt_email = /^([a-zA-Z0-9_\.-]+)$/;
	var email      = $("#" + emailId).val();
	
	// 값이 있는 경우만 체크
	if(email != "") {
		
		// 유효하지 않은 이메일
		if(patt_email.test(email) != true) {
			
			alert('<%= MessageUtil.getString("msg.find.0001", "유효하지 않은 이메일 형식입니다.") %>');
			$("#" + emailId).val("");
			$("#" + emailId).focus();
			b = false;
		}
		
		// 유효한 이메일
		else {
			
			b = true;
		}
	}
	
	return b;
}

/**
 * 이메일 2 유효성 체크 정규식
 * @param emailId
 * @returns {Boolean}
 */
function checkEmail2(emailId) {
	
	// 체크 결과
	var b          = false;
	
	var patt_email = /^([\da-z\.-]+)\.([a-z\.]{2,6})$/;    // 이메일 정규식
	var email      = $("#" + emailId).val();
	
	// 값이 있는 경우
	if(email != "") {
		
		// 유효하지 않은 이메일
		if(patt_email.test(email) != true) {
			
			alert('<%= MessageUtil.getString("msg.find.0001", "유효하지 않은 이메일 형식입니다.") %>');
			$("#" + emailId).val("");
			$("#" + emailId).focus();
			b = false;
		}
		
		// 유효한 이메일
		else {
			
			b = true;
		}
	}
	return b;
}

//이메일로 아이디 찾기
function fn_searchIdByEmail(){
	// 담당자 성명
	var name   = $("#userName").val();
	
	// 이메일 주소 1
	var email1 = $("#emailAddr1").val();
	
	// 이메일 주소 2
	var email2 = $("#emailAddr2").val();
	
	// 담당자 성명 미입력
	if(name == "") {
		
		alert('<%= MessageUtil.getString("msg.find.0002", "담당자 성명을 입력하여 주십시오.") %>');
		$("#userName").focus();
		return;
	}
	
	// 이메일 주소 1
	if(email1 == "") {
		
		alert('<%= MessageUtil.getString("msg.find.0003", "이메일 주소를 입력하여 주십시오.") %>');
		$("#emailAddr1").focus();
		return;
	}
	
	// 값이 있는 경우는 유효성 체크
	else {
		
		// 유효하지 않은 경우
		if(checkEmail1("emailAddr1") == false) { return; }
	}
	
	// 이메일 주소 2
	if(email2 == "") {
		
		alert('<%= MessageUtil.getString("msg.find.0003", "이메일 주소를 입력하여 주십시오.") %>');
		$("#emailAddr2").focus();
		return;
	}
	
	// 값이 있는 경우는 유효성 체크
	else {
		
		// 유효하지 않은 경우
		if(checkEmail2("emailAddr2") == false) { return; }
	}
	
	var json = {
			head : "searchIdByEmail",
			name       : name,
			email1     : email1,
			email2     : email2,
			ciVersion  : ""
	}
	fn_loginCall(json);
}

/**
 * 팝업창 열기
 * @param o ==> url      : 팝업창 URL (필수)
				svcId    : 팝업창 호출 화면 ID (필수)
				popName  : 팝업창 명(필수)
				width    : 팝업창 너비
				height   : 팝업창 높이
				param    : 일반 파라미터
				insParam : 부모창에서 팝업창으로 가져갈 파라미터 (옵션)
				           { 부모창의 객체 ID : 팝업창의 객체 ID }
				outParam : 팝업창에서 부모창으로 값 세팅할 파라미터 (필수)
	  					   { 팝업창의 값을 받을 부모창 객체 ID : 팝업창 데이터 Field 명(컬럼명) }
 */

var POPUP_OBJ = null;
function openPopup() {
	
	// 팝업위치 계산
	var l          = (Number(screen.availWidth) - Number(450, "500")) / 2;
	var t          = (Number(screen.availHeight) - Number(550, "500")) / 2;
	
	// 팝업 화면 위치
	var left       = l > 0 ? l : 0;
	var top        = t > 0 ? t : 0;
	
	// 팝업옵션
	var popOption  = "width=450px,";
		popOption += "height=550px,";
		popOption += "left=" + left + "px,";
		popOption += "top=" + top + "px,";
		popOption += "menubar=no,";
		popOption += "status=no,";
		popOption += "toolbar=no,";
		popOption += "scrollbars=no,";
		popOption += "resizable=no,";
		popOption += "location=no";
		
	// 팝업창에서 부모창으로 값을 내려주는 파라미터
	//if(o.outParam != undefined) {
	//	alert(o.outParam);
	//}
	
	// 팝업창 열기
	POPUP_OBJ      = window.open("", "PhoneCertify", popOption);
	
	// 팝업창 포커스 주기
	POPUP_OBJ.focus();
	
	// Form 속성 세팅
	var form = document.phoneFrom;
	form.action    = "popReqPhoneCertify.jsp";
	form.method    = "POST";
	form.target    = "PhoneCertify";
		
	// Submit
	form.submit();
}

/**
 * 본인 인증 후 실행 함수
 * @param val
 * @param obj
 */
function pccSucess(val, obj) {
	
	var json = {
			head : "searchIdByEmail",
			name       : obj.confirmName,
			email1     : "",
			email2     : "",
			ciVersion  : obj.ci1
	}
	fn_loginCall(json);
}
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
		<h2 class="s_tit"><%= MessageUtil.getString("msg.web.0085", "아이디 찾기") %></h2>

		<div class="sub_inner_ty01">
			<div class="find_box01">
				<div class="top_tx_bx">
					<dl>
						<dt><%= MessageUtil.getString("msg.find.0004", "간편 찾기") %></dt>
						<dd><%= MessageUtil.getString("msg.find.0005", "가입 시 등록하신 이메일 주소로 아이디를 발송해 드립니다.") %></dd>
					</dl>
				</div>
				<div class="inp_wrap">
					<div class="inp_bx">
						<input type="text" class="inp_ty01" id="userName" />
						<p class="tx01"><%= MessageUtil.getString("msg.find.0006", "가입 시 등록하신 성함을 입력하세요") %></p>
					</div>
					<div class="inp_bx">
						<input type="text" class="inp_ty01" id="emailAddr1"/>
						<span class="line">@</span>
						<input type="text" class="inp_ty02" id="emailAddr2"/>
						<select class="sel_ty01" id="selectEmail3" onchange="changeEmail('emailAddr2', 'selectEmail3');">
							<option value=""><%= MessageUtil.getString("msg.user.0077", "직접입력") %></option><option value="naver.com">naver.com</option><option value="dreamwiz.com">dreamwiz.com</option><option value="empal.com">empal.com</option><option value="chol.com">chol.com</option><option value="freechal.com">freechal.com</option><option value="gmail.com">gmail.com</option><option value="hanmail.net">hanmail.net</option><option value="hotmail.com">hotmail.com</option><option value="korea.com">korea.com</option><option value="nate.com">nate.com</option><option value="paran.com">paran.com</option><option value="yahoo.com">yahoo.com</option>
						</select>
					</div>
				</div>
				<div class="btn_area"><a href="#" class="btn_ty01" onClick="fn_searchIdByEmail()"><%= MessageUtil.getString("msg.find.0004", "간편 찾기") %></a></div>
			</div>

			<div class="find_box01">
				<div class="top_tx_bx">
					<dl>
						<dt><%= MessageUtil.getString("msg.find.0007", "휴대폰 인증으로 찾기") %></dt>
						<dd>
							<%= MessageUtil.getString("msg.find.0008") %>
						</dd>
					</dl>
				</div>
				<div class="btn_area"><a href="#" class="btn_ty01" onClick="openPopup();"><%= MessageUtil.getString("msg.user.0075", "휴대폰 인증") %></a></div>
				<form name="phoneFrom">
					<input type="hidden" name="svcId" value="nkfr/index_w.html"/>					
					<input type="hidden" name="insParam" value={}/>
					<input type="hidden" name="outParam" value={}/>
					<input type="hidden" name="userCallback" value={}/>
				</form>
			</div>

			<div class="find_box02">
				<p class="tx01"><%= MessageUtil.getString("msg.find.0009", "휴대전화 인증이 되지 않는다면?") %></p>
				<p class="tx02"><%= MessageUtil.getString("msg.find.0010", "휴대전화 인증 오류 문의처 : 나이스평가정보") %> <span>1600-1522</span></p>
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