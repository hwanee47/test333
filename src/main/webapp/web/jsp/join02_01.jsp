<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>
<%
	// 가입 회원타입
	String join_type = request.getParameter("join_type");
%>
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
	 * 사업자 인증하기
	 */
	function keyEvent() {
		if(event.keyCode == 13) {
			bizAuth();
		}
	}

	/**
	 * onkeyup 이벤트 바인딩
	 * @param targetId
	 * @param checkType
	 */
	var EV_TIMER = null;
	function setKeyupEvent(targetId, checkMode) {
		// keyup 이벤트 바인딩
		$("#" + targetId).bind("keyup", function (e) { 
			
			eventHandler(targetId, checkMode, e);
		});
	}
	
	/**
	 * replaceAll 함수
	 * @param str
	 * @param target
	 * @param replace
	 * @returns
	 */
	function replaceAll(str, target, replace) {
		return str.split(target).join(replace);
	}

	/**
	 * 숫자체크
	 * @param target  : 객체
	 * @param value   : 값
	 * @param evtKey  : Event KeyCode
	 * @param isComma : 1000단위 구분기호 여부
	 * @param isZero  : 맨 앞 0허용 여부
	 * @param isDot   : 소수점 가능 여부
	 * @param isMinus : 음수 가능 여부
	 */
	function checkNumber(target, value, evtKey, isComma, isZero, isDot, isMinus) {
		
		// 콤마 제거 후 유효성 체크
		var val1 = replaceAll(value, ",", "");
		var chk  = isNaN(val1);
		
		// 마이너스만 입력시 허용인 경우 대기
		if(val1 == "-" && isMinus == true) { return; }
		
		// .만 입력시 허용인 경우 대기
		if(val1 == "." && isDot == true)   { return; }
		
		// 문자열 포함, 마이너스 허용불가인 경우 마이너스, 소수점 허용불가인 경우 소수점
		if(chk == true || (isMinus == false && Number(val1) < 0) || (isDot == false && val1.indexOf(".") > -1)) {
			
			showMessage('<%= MessageUtil.getString("msg.user.0001", "숫자만 입력할 수 있습니다.") %>');
			target.blur();
			target.val("");
			target.focus();
		}
		
		// 천단위 구분기호 추가
		else {
			
			// 숫자입력, 백스페이스, Delete
			if((evtKey >= 48 && evtKey <= 57) || (evtKey >= 96 && evtKey <= 105) || evtKey == 8 || evtKey == 46) {
			
				// 값 세팅
				target.val(isComma == true ? setComma(Number(val1)) 
						                   : (isZero == true ? val1 
						                		   			 : Number(val1)));
			}
		}
	}
	
	/**
	 * onkeyup 이벤트 핸들러
	 * @param targetId
	 * @param chkMode
	 * @param event
	 */
	function eventHandler(targetId, chkMode, event) {
		
		// Event Key코드
		var evt    = Number(event.keyCode);
		
		// 값
		var target = $("#" + targetId);
		var val0   = target.val();
		
		// 기본적으로 값이 있는 경우에만 체크
		if(val0 != "") {
			if(chkMode == "1")      { checkNumber(target, val0, evt, true,  false, false, false); }
			else if(chkMode == "2") { checkNumber(target, val0, evt, true,  false, false, true);  }
			else if(chkMode == "3") { checkNumber(target, val0, evt, false, false, false, false); }
			else if(chkMode == "4") { checkNumber(target, val0, evt, false, true,  false, false); }
			else if(chkMode == "5") { checkNumber(target, val0, evt, true,  false, true,  false); }
			else if(chkMode == "6") { checkNumber(target, val0, evt, false, false, true,  false); }
			else if(chkMode == "7") { checkNumber(target, val0, evt, true,  false, true,  true);  }
			else if(chkMode == "8") { checkNumber(target, val0, evt, false, false, true,  true);  }
		}
	}

	/**
	 * 엔터키 Event Handler
	 * @param event
	 * @param func
	 */
	function enterKeyEvent(event, func) {
		// 엔터키 입력시 함수실행
		if(event.keyCode == 13) {
			eval(func);
		}
	}

	/**
	 * 사업자 인증하기 버튼 클릭
	 */
	function bizAuth() {
		var userType 	= $("#userType").val();
		var re_biz_no 	= /^[0-9]{10}$/;
		
		var agree1Val = $("input[type=checkbox][name=agree01]:checked").val(); 	// 서비스 이용약관(전체이용자)
		var agree2Val = $("input[type=checkbox][name=agree02]:checked").val();		// 개인정보 수집 및 이용안내(전체이용자)
		var agree3Val = $("input[type=checkbox][name=agree03]:checked").val();		// 위치정보 이용약관(개인차주, 운송가맹점)		
	
		if(!agree1Val) {
			alert('<%= MessageUtil.getString("msg.user.0002", "서비스 이용약관에 동의해주세요.") %>');
			$('#agree1Focus').focus();
		} 
		else if(!agree2Val) {
			alert('<%= MessageUtil.getString("msg.user.0003", "개인정보 수집 및 이용에 동의해주세요.") %>');
			$('#agree2Focus').focus();
		} 
		else if($('#BIZ_NM').val() == '') {
			alert('<%= MessageUtil.getString("msg.user.0004", "사업자(법인)명을 입력해주세요.") %>');
			$('#BIZ_NM').focus();
		} 
		else if($('#BIZ_NM').val().length > 31) {
			alert('<%= MessageUtil.getString("msg.user.0005", "사업자(법인)명이 너무 깁니다.") %>');
			$('#BIZ_NM').focus();
		} 
		else if($('#BIZ_REG_NO').val() == '') {
			alert('<%= MessageUtil.getString("msg.user.0006", "사업자 등록번호를 입력해주세요.") %>');
			$('#BIZ_REG_NO').focus();
		} 
		else if(re_biz_no.test($('#BIZ_REG_NO').val()) != true) {
			alert('<%= MessageUtil.getString("msg.user.0007", "사업자번호를 올바르게 입력해주세요.") %>');
			$('#BIZ_REG_NO').val('');
			$('#BIZ_REG_NO').focus();
		} 
		else {
			bizNoCheck();
		}
	}
	
	/**
	 * 사업자 등록 번호 중복 체크.
	 */
	function bizNoCheck() {
		
		if($("#agree22").is(":checked") == false || $("#agree01").is(":checked") == false || $("#agree02").is(":checked") == false || $("#agree04").is(":checked") == false){
			alert('<%= MessageUtil.getString("msg.user.0008", "이용약관 동의 및 필수 항목을 체크해주세요.") %>');
			return;
		}
		
		var bizNm = $("#BIZ_NM").val();
		var bizRegNo = $("#BIZ_REG_NO").val();
		var bizType = $("#BIZ_TYPE").val();
		var ARGE_MARKETING_YN = "N";
		if($("#agree03").is(":checked") == true || $("#agree05").is(":checked") == true){
			var ARGE_MARKETING_YN = "Y";
		}
		
		if($("#agree03").is(":checked")){
			$("#agree05").prop("checked", true);
		}
		if($("#agree05").is(":checked")){
			$("#agree03").prop("checked", true);
		}
		
		var json = {
				head : "bizNoCheck",
				bizNm	 : bizNm,
				bizRegNo : bizRegNo,
				bizType	 : bizType,
				joinType : "<%=join_type%>",
				ARGE_MARKETING_YN : ARGE_MARKETING_YN,
				type : "main"
		}
		fn_loginCall(json);			
	}
	
	function allChk(){
		if($("#agree21").is(":checked")){
			$("#agree22").prop("checked", true);
			$("#agree00").prop("checked", true);
		}else{
			$("#agree22").prop("checked", false);
			$("#agree00").prop("checked", false);
		}
		subAllChk();
	}
	
	function subAllChk(){
		if($("#agree00").is(":checked")){
			$("#agree01").prop("checked", true);
			$("#agree02").prop("checked", true);
			$("#agree03").prop("checked", true);
			$("#agree04").prop("checked", true);
			$("#agree05").prop("checked", true);
		}else{
			$("#agree01").prop("checked", false);
			$("#agree02").prop("checked", false);
			$("#agree03").prop("checked", false);
			$("#agree04").prop("checked", false);
			$("#agree05").prop("checked", false);
		}
	}
</script>
</head>
<body>

<!-- header -->
<%@ include file="../inc/header.jsp" %>
<!-- //header -->

<!-- sub visual -->
<div class="sub_vis_wrap s_vis04">
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
		<h2 class="s_tit"><%= MessageUtil.getString("msg.web.0002", "회원가입") %></h2>

		<div class="sub_inner_ty01">
			<div class="step_box02 st01">
				<ul>
					<li><a href="#" class="on"><%= MessageUtil.getString("msg.user.0009", "01. 약관동의") %></a></li>
					<li><a href="#"><%= MessageUtil.getString("msg.user.0010", "02. 정보입력") %></a></li>
					<li class="last"><a href="#"><%= MessageUtil.getString("msg.user.0011", "03. 가입신청완료") %></a></li>
				</ul>
			</div>

			<div class="join_cont02">
				<span class="input_chk">
					<input type="checkbox" id="agree21" name="" onClick="allChk()"/> 
					<label for="agree21" class=""><%= MessageUtil.getString("msg.user.0012", "[필수] 만 14세 미만 이용 불가, 서비스 이용약관)에 모두 동의합니다.") %></label>
				</span>
			</div>

			<div class="join_scroll_box">
				<p class="s_tx"><%= MessageUtil.getString("msg.user.0013", "만 14세 미만 이용 불가 안내 [필수]") %></p>
				<div class="in_sc_bx" style="height:23px; overflow-y:hidden;">
					<%= MessageUtil.getString("msg.user.0014", "만 14세 미만 아동의 경우 회원가입 및 서비스 제공이 불가 합니다. 만 14세 이상 입니까?") %>
				</div>
				<p class="btm_agree_tx">
					<span class="input_chk">
						<input type="checkbox" id="agree22" name="" /> 
						<label for="agree22" class=""><%= MessageUtil.getString("msg.user.0015", "만 14세 이상") %></label>
					</span>
				</p>
			</div>

			<div class="join_cont02">
				<span class="input_chk">
					<input type="checkbox" id="agree00" name="agree00" onClick="subAllChk()"/> 
					<label for="agree00" class=""><%= MessageUtil.getString("msg.user.0016", "이용약관(필수), 개인정보 수집 및 이용안내(필수), 마케팅 정보를 위한 개인정보 수집 및 이용동의(선택)에 모두 동의합니다.") %></label>
				</span>
			</div>

			<div class="join_scroll_box">
				<p class="s_tx"><%= MessageUtil.getString("msg.user.0017", "서비스 이용약관 [필수]") %></p>
				<div class="in_sc_bx">
					<%= MessageUtil.getString("msg.use.0001") %><br/>
					<%= MessageUtil.getString("msg.use.0002") %>

					<%= MessageUtil.getString("msg.use.0003") %><br/>
					<%= MessageUtil.getString("msg.use.0004") %>

					<%= MessageUtil.getString("msg.use.0005") %><br/>
					<%= MessageUtil.getString("msg.use.0006") %>

					<%= MessageUtil.getString("msg.use.0007") %><br/>
					<%= MessageUtil.getString("msg.use.0008") %>

					<%= MessageUtil.getString("msg.use.0009") %><br/>
					<%= MessageUtil.getString("msg.use.0010") %>

					<%= MessageUtil.getString("msg.use.0011") %><br/>
					<%= MessageUtil.getString("msg.use.0012") %>

					<%= MessageUtil.getString("msg.use.0013") %><br/>
					<%= MessageUtil.getString("msg.use.0014") %>

					<%= MessageUtil.getString("msg.use.0015") %><br/>
					<%= MessageUtil.getString("msg.use.0016") %>

					<%= MessageUtil.getString("msg.use.0017") %><br/>
					<%= MessageUtil.getString("msg.use.0018") %>

					<%= MessageUtil.getString("msg.use.0019") %><br/>
					<%= MessageUtil.getString("msg.use.0020") %>

					<%= MessageUtil.getString("msg.use.0021") %><br/>
					<%= MessageUtil.getString("msg.use.0022") %>

					<%= MessageUtil.getString("msg.use.0023") %><br/>
					<%= MessageUtil.getString("msg.use.0024") %>

					<%= MessageUtil.getString("msg.use.0025") %><br/>
					<%= MessageUtil.getString("msg.use.0026") %>

					<%= MessageUtil.getString("msg.use.0027") %><br/>
					<%= MessageUtil.getString("msg.use.0028") %>

					<%= MessageUtil.getString("msg.use.0029") %><br/>
					<%= MessageUtil.getString("msg.use.0030") %>

					<%= MessageUtil.getString("msg.use.0031") %><br/>
					<%= MessageUtil.getString("msg.use.0032") %>

					<%= MessageUtil.getString("msg.use.0033") %><br/>
					<%= MessageUtil.getString("msg.use.0034") %>

					<%= MessageUtil.getString("msg.use.0035") %><br/>
					<%= MessageUtil.getString("msg.use.0036") %>

					<%= MessageUtil.getString("msg.use.0037") %><br/>
					<%= MessageUtil.getString("msg.use.0038") %>

					<%= MessageUtil.getString("msg.use.0039") %><br/>
					<%= MessageUtil.getString("msg.use.0040") %>

					<%= MessageUtil.getString("msg.use.0041") %><br/>
					<%= MessageUtil.getString("msg.use.0042") %>

					<%= MessageUtil.getString("msg.use.0043") %><br/>
					<%= MessageUtil.getString("msg.use.0044") %>

					<%= MessageUtil.getString("msg.use.0045") %><br/>
					<%= MessageUtil.getString("msg.use.0046") %>

					<%= MessageUtil.getString("msg.use.0047") %><br/>
					<%= MessageUtil.getString("msg.use.0048") %>

					<%= MessageUtil.getString("msg.use.0049") %><br/>
					<%= MessageUtil.getString("msg.use.0050") %>

					<%= MessageUtil.getString("msg.use.0051") %><br/>
					<%= MessageUtil.getString("msg.use.0052") %>

					<%= MessageUtil.getString("msg.use.0053") %><br/>
					<%= MessageUtil.getString("msg.use.0054") %>

					<%= MessageUtil.getString("msg.use.0055") %><br/>
					<%= MessageUtil.getString("msg.use.0056") %>

					<%= MessageUtil.getString("msg.use.0057") %><br/>
					<%= MessageUtil.getString("msg.use.0058") %>

					<%= MessageUtil.getString("msg.use.0059") %><br/>
					<%= MessageUtil.getString("msg.use.0060") %>

					<%= MessageUtil.getString("msg.use.0061") %><br/>
					<%= MessageUtil.getString("msg.use.0062") %>
				</div>
				<p class="btm_agree_tx">
					<span class="input_chk">
						<input type="checkbox" id="agree01" name="agree01" /> 
						<label for="agree01" class=""><%= MessageUtil.getString("msg.user.0018", "동의합니다") %></label>
					</span>
				</p>
			</div>

			<div class="join_scroll_box">
				<p class="s_tx"><%= MessageUtil.getString("msg.info.0001") %></p>
				<div class="in_sc_bx">
					<%= MessageUtil.getString("msg.info.0002") %>
				</div>
				<p class="btm_agree_tx">
					<span class="input_chk">
						<input type="checkbox" id="agree02" name="agree02" /> 
						<label for="agree02" class=""><%= MessageUtil.getString("msg.user.0018", "동의합니다") %></label>
					</span>
				</p>
			</div>

			<div class="join_scroll_box">
				<p class="s_tx"><%= MessageUtil.getString("msg.marketing.0001") %> </p>
				<div class="in_sc_bx">
					<%= MessageUtil.getString("msg.marketing.0002") %>
				</div>
				<p class="btm_agree_tx">
					<span class="input_chk">
						<input type="checkbox" id="agree03" name="agree03"/> 
						<label for="agree03" class=""><%= MessageUtil.getString("msg.user.0018", "동의합니다") %></label>
					</span>
				</p>
			</div>

			<div class="join_scroll_box">
				<p class="s_tx"><%= MessageUtil.getString("msg.user.0019", "개인정보 수집 및 이용 동의") %></p>
				<div class="line01">
					<div style="float:left;"><span style="color:#007ac3; ">* <%= MessageUtil.getString("msg.user.0020", "[필수]") %></span><%= MessageUtil.getString("msg.user.0021") %></div>
					<p class="btm_agree_tx ty02">
						<span class="input_chk">
							<input type="checkbox" id="agree04" name="" /> 
							<label for="agree04" class=""><%= MessageUtil.getString("msg.user.0018", "동의합니다") %></label>
						</span>
					</p>
				</div>
				<div class="line02">
					<div style="float:left;">* <%= MessageUtil.getString("msg.user.0022") %></div>
					<p class="btm_agree_tx ty02">
						<span class="input_chk">
							<input type="checkbox" id="agree05" name=""/> 
							<label for="agree05" class=""><%= MessageUtil.getString("msg.user.0018", "동의합니다") %></label>
						</span>
					</p>
				</div>
			</div>

			<div class="join_cont03">
				<p class="s_tx"><%= MessageUtil.getString("msg.user.0023", "사업자 확인") %></p>
				<p class="s_tx02">
					<%= MessageUtil.getString("msg.user.0024") %>
				</p>
				<div class="board_wrap top_line">
					<table cellspacing="0" cellpadding="0" class="board_write01" summary='<%= MessageUtil.getString("msg.user.0025") %>'>
						<caption>강원권</caption>
						<colgroup>
						<col width="168" />
						<col width="*" />
						<col width="168" />
						<col width="415" />
						</colgroup>
						<tbody>
							<tr>
								<th><%= MessageUtil.getString("msg.user.0026", "사업자 종류") %></th>
								<td colspan="3">
									<span class="input_rad din">
										<input type="radio" id="BIZ_TYPE" name="ty01" checked="checked" value="C"/> 
										<label for="company" class=""><%= MessageUtil.getString("msg.user.0027", "법인사업자") %></label>
									</span>
									<span class="input_rad din">
										<input type="radio" id="BIZ_TYPE" name="ty01" value="I"/> 
										<label for="person" class=""><%= MessageUtil.getString("msg.user.0028", "일반사업자") %></label>
									</span>
							</tr>
							<tr class="last">
								<th><%= MessageUtil.getString("msg.user.0029", "사업자(법인)명") %></th>
								<td><input type="text" class="inp_ty01" id="BIZ_NM" onkeypress="keyEvent();" style="ime-mode:active;"/></td>
								<th><%= MessageUtil.getString("msg.user.0030", "사업자 등록번호") %></th>
								<td><input type="text" class="inp_ty01" id="BIZ_REG_NO" maxlength="10" onkeypress="keyEvent();" onkeydown="setKeyupEvent('BIZ_REG_NO','4');" onkeyup="enterKeyEvent(event, 'bizAuth();')"/></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="btm_btns center">
				<a href="#" class="btn_next01" style="width:152px;" onclick="bizAuth();"><%= MessageUtil.getString("msg.user.0031", "사업자 인증") %></a>
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