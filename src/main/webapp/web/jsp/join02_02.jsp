<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>
<%
	String JOIN_TYPE = (String)request.getParameter("joinType");
	String join_type_txt = "";
	
	if(JOIN_TYPE.equals("T02")){
		join_type_txt = MessageUtil.getString("msg.web.0077", "화주");
	} else if(JOIN_TYPE.equals("T01")){
		join_type_txt = MessageUtil.getString("msg.web.0092", "주선가맹점");
	} else if(JOIN_TYPE.equals("T04")){
		join_type_txt = MessageUtil.getString("msg.web.0093", "운송가맹점");
	} else if(JOIN_TYPE.equals("T05")){
		join_type_txt = MessageUtil.getString("msg.web.0078", "차주");
	}
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
//가입정보 전송할때 확인해야할 핸드폰인증값, Y:인증완료, N:미인증
var mobileChk = "N";
var idCkYN = "N";
var vhclCkYN = "N";

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

function join() {
	var JOIN_TYPE = "<%=JOIN_TYPE%>";
	var ID = $("#ID").val();
	var PW = $("#PW").val();
	var PW_CONFIRM = $("#PW_CONFIRM").val();
	var NAME = $("#NAME").val();
	var MOBILE1 = $("#MOBILE1").val();
	var MOBILE2 = $("#MOBILE2").val();
	var MOBILE3 = $("#MOBILE3").val();
	var EMAIL1 = $("#EMAIL1").val();
	var EMAIL2 = $("#EMAIL2").val();
	var EMAIL3 = $("#EMAIL3").val();
	var RCIV_SMS = "N";
	var RCIV_EMAIL = "N";
	var TXTE_VHCL_NO_CHAN = null;
	var TEMP_VHCL_KND_CD = null;
	var SEL_VHCL_TON_CD_ST = null;
	var FIRSTJOIN_YN = null;
	var ORI_EQP_CLS = null;
	var SDATE_F = null;
	var EDATE_F = null;
	var SDATE = null;
	var EDATE = null;
	var LSP_IMSI_ORI_NM = null;
	var LSP_LONG_TERM_YN = null;
	var LSP_IMSI_EQP_CLS = null;
	var KX_LONG_TERM_YN = null;

	
	if($("#agree22").checked == true){
		RCIV_SMS = "Y";
		RCIV_EMAIL = "Y";	
	}
	
	if($("#agree23").checked == true){
		RCIV_SMS = "Y";	
	}
	
	if($("#agree24").checked == true){
		RCIV_EMAIL = "Y";	
	}
	
	if(JOIN_TYPE == '') {
		alert('<%= MessageUtil.getString("msg.user.0032", "회원가입은 새로고침 없이 순차적으로 진행 바랍니다.") %>');
		return;
	}
	
	if(ID == '') {
		alert('<%= MessageUtil.getString("msg.user.0033", "아이디를 입력해주십시오.") %>');
		$('#ID').focus();
		return;
	} 
	
	if(idCkYN == 'N') {
		alert('<%= MessageUtil.getString("msg.user.0034", "아이디 중복 확인을 하십시오.") %>');
		return;
	} 
		
	var isIdCheck = /^[a-z0-9]{6,14}$/;
	var reg = /^.*(?=.{6,14})(?=.*[0-9])(?=.*[a-z]).*$/;
	if(isIdCheck.test(ID == false)) {
		alert('<%= MessageUtil.getString("msg.user.0035", "아이디는 영문+숫자로 구성된 6~14자리로 생성 가능합니다.") %>');
		$('#ID').focus();
		return;
	}
	
	if(reg.test(ID) == false) {
		alert('<%= MessageUtil.getString("msg.user.0035", "아이디는 영문+숫자로 구성된 6~14자리로 생성 가능합니다.") %>');
		$('#ID').focus();
		return;
	}
	
	if(PW == '') {
		alert('<%= MessageUtil.getString("msg.user.0036", "비밀번호를 입력하십시오.") %>');
		$('#PW').focus();
		return;
	} 
	
	if(PW_CONFIRM == '') {
		alert('<%= MessageUtil.getString("msg.user.0037", "비밀번호 확인을 입력하십시오.") %>');
		$('#PW_CONFIRM').focus();
		return;
	} 
	
	if(PW_CONFIRM != PW) {
		alert('<%= MessageUtil.getString("msg.user.0038", "비밀번호 확인을 다시하십시오.") %>');
		$('#PW_CONFIRM').focus();
		return;
	} 
	
	if(PW == ID) {
		alert('<%= MessageUtil.getString("msg.user.0039", "비밀번호는 아이디와 다르게 입력하십시오.") %>');
		$('#PW').val("");
		$('#PW_CONFIRM').val("");
		$('#PW').focus();
		return;
	}

	var patt_k = /([가-힣ㄱ-ㅎㅏ-ㅣ\x20])/i; // 한글 정규식
	var patt_4num1 = /(\w)\1\1\1/; // 같은 영문자&숫자 연속 4번 정규식
	var patt_cont = /(0123)|(1234)|(2345)|(3456)|(4567)|(5678)|(6789)|(7890)/; // 연속된 숫자 정규식	
	var chk_num = PW.search(/[0-9]/g);
	var chk_eng = PW.search(/[a-z]/ig);
	var chk_w = PW.search(/[\W_]/g);
	
	if(patt_k.test(PW) == true) {
		alert('<%= MessageUtil.getString("msg.user.0040", "비밀번호는 한글 입력이 불가능합니다.") %>');
		$('#PW').val('');
		$('#PW').focus();
		return;
	}
	
	if(patt_4num1.test(PW) == true) {
		alert('<%= MessageUtil.getString("msg.user.0041", "4자리 이상 반복되는 문구 및 숫자는 사용 불가능합니다.") %>');
		$('#PW').val('');
		$('#PW').focus();
		return;
	}
	
	if(patt_cont.test(PW) == true) {
		alert('<%= MessageUtil.getString("msg.user.0042", "연속된 숫자는 사용 불가능합니다.") %>');
		$('#PW').val('');
		$('#PW').focus();
		return;
	}
	
	if(chk_num <0 || chk_eng < 0 || chk_w < 0) {
		alert('<%= MessageUtil.getString("msg.user.0043", "비밀번호는 숫자+영문+특수문자의 조합으로 가능합니다.") %>');
		$('#PW').val('');
		$('#PW').focus();
		return;
	}
	
	if(PW.length<8 || PW.length>14) {
		alert('<%= MessageUtil.getString("msg.user.0044", "비밀번호는 8~14자리로 가능합니다.") %>');
		$('#PW').val('');
		$('#PW').focus();
		return;
	}
	
	if(NAME == '') {
		alert('<%= MessageUtil.getString("msg.user.0045", "이름을 입력하여 주십시오.") %>');
		$('#NAME').focus();
		return;
	} 
	
	/*
	if(NAME == '') {
		alert('인증을 통해 이름을 입력하여 주십시오.');
		$('#NAME').focus();
		return;
	} 
	
	if(mobileChk == 'N') {
		alert('본인인증을 하십시오.');
		return;
	} 
	*/
	
	if(MOBILE2 == '') {
		alert('<%= MessageUtil.getString("msg.user.0046", "휴대전화 번호를 입력하십시오.") %>');
		$('#MOBILE2').focus();
		return;
	} 
	
	if(MOBILE3 == '') {
		alert('<%= MessageUtil.getString("msg.user.0046", "휴대전화 번호를 입력하십시오.") %>');
		$('#MOBILE3').focus();
		return;
	} 
	
	if(EMAIL1 != '') {
		if(EMAIL1 == ''){
			alert('<%= MessageUtil.getString("msg.user.0047", "이메일 주소를 입력하십시오.") %>');
			$('#EMAIL1').focus();
			return;
		} 
		
		if(EMAIL2 == '' && EMAIL3 == '') {
			alert('<%= MessageUtil.getString("msg.user.0047", "이메일 주소를 입력하십시오.") %>');
			$('#EMAIL2').focus();
			return;
		} 
	}
	
/* 	var patt_email = /^([a-zA-Z0-9_\.-]+)$/ ;      // 이메일 정규식
	
	if(EMAIL1 != '' && patt_email.test(EMAIL1) != true) {
		alert("이메일 형식을 올바르게 입력해주세요.");
		$('#EMAIL1').focus();
	} else if(EMAIL1.length > 30) {
		alert("이메일 주소가 너무 깁니다.");
		$('#EMAIL1').focus();
	}
	
	if(EMAIL2 != '' && patt_email.test(EMAIL2) != true) {
		alert('이메일 형식을 올바르게 입력해주세요.');
	} else if(EMAIL2.length > 20) {
		alert('이메일 주소가 너무 깁니다.');
	}	 */
	
<% if(JOIN_TYPE.equals("T05")){ %>

	var TXTE_VHCL_NO_CHAN = $('#TXTE_VHCL_NO_CHAN').val();
	var TEMP_VHCL_KND_CD = $('#TEMP_VHCL_KND_CD').val();
	var SEL_VHCL_TON_CD_ST = $('#SEL_VHCL_TON_CD_ST').val();
	var FIRSTJOIN_YN = $('#FIRSTJOIN_YN').val();
	var ORI_EQP_CLS = $('#ORI_EQP_CLS').val();
	var SDATE_F = $('#SDATE_F').val();
	var EDATE_F = $('#EDATE_F').val();
	var SDATE = $('#SDATE').val();
	var EDATE = $('#EDATE').val();
	var LSP_IMSI_ORI_NM = $('#LSP_IMSI_ORI_NM').val();
	var LSP_LONG_TERM_YN = $('#LSP_LONG_TERM_YN').val();
	var LSP_IMSI_EQP_CLS = $('#LSP_IMSI_EQP_CLS').val();
	var KX_LONG_TERM_YN = $('#KX_LONG_TERM_YN').val();
	
	// 개인차주
	if(JOIN_TYPE == "T05") {
	
		if(vhclCkYN == "N" ) {	
			alert('<%= MessageUtil.getString("msg.user.0048", "차량중복 조회를 하십시오.") %>');
			return;
		} 
		
		if($("#TEMP_VHCL_KND_CD").val() == "") {
			alert('<%= MessageUtil.getString("msg.user.0049", "차량종류를 선택해주십시오.") %>');
			$('#TEMP_VHCL_KND_CD').focus();
			return;
		} 
		
		if($("#SEL_VHCL_TON_CD_ST").val() == "") {
			alert('<%= MessageUtil.getString("msg.user.0050", "차량톤급을 선택해주십시오.") %>');
			$('#SEL_VHCL_TON_CD_ST').focus();
			return;
		} 
		
		if($("select[name=FIRSTJOIN_YN] option:selected").val() == "") {
			alert('<%= MessageUtil.getString("msg.user.0051", "원소속 여부를 선택해 주십시오.") %>');
			$("select[name=FIRSTJOIN_YN]").focus();
			return;
		}
		
		//원소속여부가 Y일 경우
		if($("#FIRSTJOIN_YN").val()=="Y") {
			if($("#ORI_EQP_CLS").val()=="") {
				alert('<%= MessageUtil.getString("msg.user.0052", "원소속 운영 구분을 선택하십시오.") %>');
				$("#ORI_EQP_CLS").focus();
				return;
			} 
			
			if($("#LSP_LONG_TERM_YN").val()=="") {
				alert('<%= MessageUtil.getString("msg.user.0053", "장기용차여부를 선택하십시오.") %>');
				$("#LSP_LONG_TERM_YN").focus();
				return;
			} 
			
			if($("#LSP_LONG_TERM_YN").val()=="Y" && $("#EDATE_F").val()=="") {
				alert('<%= MessageUtil.getString("msg.user.0054", "대한통운 장기용차 계약종료일을 입력해주세요.") %>');
				$("#EDATE_F").focus();
				return;
			} 
			
			//날짜 형식 검사
			if($("#LSP_LONG_TERM_YN").val()=="Y"){
				SDATE = replaceAll($('#SDATE_F').val(), "-", "");
				EDATE = replaceAll($('#EDATE_F').val(), "-", "");
				var date_pattern = /^(19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[0-1])$/; 
				if(!date_pattern.test(SDATE)){
					alert('<%= MessageUtil.getString("msg.user.0055", "계약시작일을 다시 입력해주세요.") %>');
					return;
				}
				
				if(!date_pattern.test(EDATE)){
					alert('<%= MessageUtil.getString("msg.user.0056", "계약종료일을 다시 입력해주세요.") %>');
					return;
				}
			}
			
			if($("#LSP_IMSI_ORI_NM").val()=="") {
				alert('<%= MessageUtil.getString("msg.user.0057", "원소속명을 입력해 주세요.") %>');
				$("#LSP_IMSI_ORI_NM").focus();
				return;
			}
		} else {
			if($("#LSP_LONG_TERM_YN").val() != "" && $("#LSP_IMSI_EQP_CLS").val() == "") {
				alert('<%= MessageUtil.getString("msg.user.0058", "차량구분을 선택 했음으로, 직영/위수탁을 선택 하여 주십시오.") %>');
				return;
			}

			if($("#LSP_LONG_TERM_YN").val() == "" && $("#LSP_IMSI_EQP_CLS").val() != "") {
				alert('<%= MessageUtil.getString("msg.user.0059", "직영/위수탁을 선택했음으로, 차량구분을 선택 하여 주십시오.") %>');
				return;
			}
		}
	}	
<%}%>
	
	var json = {
			head : "joinMember",
			ID	 : ID,
			PW	 : PW,
			NAME	 : NAME,
			MOBILE1	 : MOBILE1,
			MOBILE2	 : MOBILE2,
			MOBILE3	 : MOBILE3,
			EMAIL1	 : EMAIL1,
			EMAIL2	 : EMAIL2,
			EMAIL3	 : EMAIL3,
			RCIV_SMS : RCIV_SMS,
			RCIV_EMAIL : RCIV_EMAIL,
			CI_VERSION : CI_VERSION,
			TXTE_VHCL_NO_CHAN : TXTE_VHCL_NO_CHAN,
			TEMP_VHCL_KND_CD : TEMP_VHCL_KND_CD,
			SEL_VHCL_TON_CD_ST : SEL_VHCL_TON_CD_ST,
			FIRSTJOIN_YN : FIRSTJOIN_YN,
			ORI_EQP_CLS : ORI_EQP_CLS,
			SDATE : SDATE,
			EDATE : EDATE,
			LSP_IMSI_ORI_NM : LSP_IMSI_ORI_NM,
			LSP_LONG_TERM_YN : LSP_LONG_TERM_YN,
			LSP_IMSI_EQP_CLS : LSP_IMSI_EQP_CLS,
			KX_LONG_TERM_YN : KX_LONG_TERM_YN,
			type : "main"
	}
	fn_loginCall(json);			
}

function dupChkId(){
	var ID = $("#ID").val();
	var isIdCheck = /^[a-z0-9]{6,14}$/;
	var reg = /^.*(?=.{6,14})(?=.*[0-9])(?=.*[a-z]).*$/;
	
	if(isIdCheck.test(ID == false)) {
		alert('<%= MessageUtil.getString("msg.user.0035", "아이디는 영문+숫자로 구성된 6~14자리로 생성 가능합니다.") %>');
		$('#ID').focus();
		return;
	}
	
	if(reg.test(ID) == false) {
		alert('<%= MessageUtil.getString("msg.user.0035", "아이디는 영문+숫자로 구성된 6~14자리로 생성 가능합니다.") %>');
		$('#ID').focus();
		return;
	}
	
	var json = {
			head : "dupIdChk",
			ID	 : ID,
			type : "main"
	}
	fn_loginCall(json);		
}

function dupVhcl(){
	var TXTE_VHCL_NO_CHAN = $("#TXTE_VHCL_NO_CHAN").val();
	if(TXTE_VHCL_NO_CHAN == ""){
		alert('<%= MessageUtil.getString("msg.user.0060", "차량번호를 입력해주세요.") %>');
		return;
	}
	
	if(!checkVhclNo(TXTE_VHCL_NO_CHAN)){
		return;
	}
	
	var json = {
			head : "dupVhclChk",
			TXTE_VHCL_NO_CHAN	 : TXTE_VHCL_NO_CHAN,
			type : "main"
	}
	fn_loginCall(json);		
}

function fn_setIdChk(val){
	if(val==0){
		idCkYN = "Y";
	}else{
		idCkYN = "N";
	}
}

function fn_setVhclChk(val){
	if(val==0){
		vhclCkYN = "Y";
	}else{
		vhclCkYN = "N";
	}
}

function emailSelect(){
	var EMAIL2 = $("#EMAIL2").val();
	var EMAIL3 = $("#EMAIL3").val();
	
	if(EMAIL2 != ""){
		$("#EMAIL3").val("");
	}
	
	if(EMAIL3 != ""){
		$("#EMAIL2").val("");
	}
}

function longtermChance(){
	if($('#KX_LONG_TERM_YN').val()=="Y"){
		$('#oriY2Y').show();
	}else{
		$('#oriY2Y').hide();
	}
}

function firstjoinChange(){
	if($('#FIRSTJOIN_YN').val()=="N"){
		$('#oriN').show();
		$('#oriY1').hide();
		$('#oriY2').hide();
	}else{
		$('#oriN').hide();
		$('#oriY1').show();
		$('#oriY2').show();
	}
}

function subAllChk(){
	if($("#agree22").is(":checked")){
		$("#agree23").prop("checked", true);
		$("#agree24").prop("checked", true);
	}
}

var vhclAreaChk = ",서울,부산,인천,대전,대구,광주,울산,경기,강원,충남,충북,전남,전북,경남,경북,제주,세종,";
var vhclNumChk  = ",가,나,다,라,마,바,사,아,자,차,카,타,파,하,거,너,더,러,머,버,서,어,저,처,커,터,퍼,허,고,노,도,로,모,보,소,오,조,초,코,토,포,호,구,누,두,루,무,부,수,우,주,추,쿠,투,푸,후,그,느,드,르,므,브,스,으,즈,츠,크,트,프,흐,";

//차량번호에 알파벳이 들어가는지 체크하기 및
//한글인 경우 글자 유효성 체크(1973년 4월 시행, 1996년 1월 개정, 2004년 1월 개정, 세종시 추가)
function checkAlphabet(target) {

	if((target >= "a" && target <= "z") || (target >="A" && target <= "Z")) {
		return false;
	} else {
		var b1 = vhclNumChk.indexOf("," + target + ",") > -1;
		var b2 = isNaN(target);

		return b1 == true && b2 == true; 
	}
}

/**
 * 차량번호 유효성 체크하기
 */
function checkVhclNo(vhclNo) {

	var len = vhclNo.length;
	var b   = false;
	
	if(len == 7 || len == 8 || len == 9) {
		if(len == 7) {
			var c1 = isNaN(vhclNo.substring(0, 2));
			var c2 = checkAlphabet(vhclNo.charAt(2));
			var c3 = isNaN(vhclNo.substring(3, 7));

			if(c1 == false && c2 == true && c3 == false) {
				b = true;			
			} else {
				b = false;
				alert('<%= MessageUtil.getString("msg.user.0061", "유효하지 않은 차량번호 형식입니다.") %>');
			}
		} else if(len == 8) {
			var c1 = vhclAreaChk.indexOf("," + vhclNo.substring(0, 2) + ",") > -1;
			var c2 = isNaN(vhclNo.charAt(2));
			var c3 = checkAlphabet(vhclNo.charAt(3));
			var c4 = isNaN(vhclNo.substring(4, 8));
			
			if(c1 == true && c2 == false && c3 == true && c4 == false) {
				b = true;
			} else {
				b = false;
				alert('<%= MessageUtil.getString("msg.user.0061", "유효하지 않은 차량번호 형식입니다.") %>');
			}
		} else {
		
			var c1 = vhclAreaChk.indexOf("," + vhclNo.substring(0, 2) + ",") > -1;
			var c2 = isNaN(vhclNo.substring(2, 4));
			var c3 = checkAlphabet(vhclNo.charAt(4));
			var c4 = isNaN(vhclNo.substring(5, 9));
			
			if(c1 == true && c2 == false && c3 == true && c4 == false) {
				b = true;
			} else {
				b = false;
				alert('<%= MessageUtil.getString("msg.user.0061", "유효하지 않은 차량번호 형식입니다.") %>');
			}
		} 
	} else {
		b = false;
		alert('<%= MessageUtil.getString("msg.user.0061", "유효하지 않은 차량번호 형식입니다.") %>');
	}
	
	return b;
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
	$('#CI_VERSION').val('');
	
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
	if($('#NAME').val() != obj.confirmName){
		$('#CI_VERSION').val('');
		mobileChk = false;
		alert('<%= MessageUtil.getString("msg.user.0062", "인증내용과 입력한 이름이 일치 하지 않습니다.") %>');
		return;
	}
	
	if($('#MOBILE1').val() != obj.MOBILE1 || $('#MOBILE2').val() != obj.MOBILE2 || $('#MOBILE3').val() != obj.MOBILE3){
		$('#CI_VERSION').val('');
		mobileChk = false;
		alert('<%= MessageUtil.getString("msg.user.0063", "인증내용과 입력한 핸드폰 번호가 일치 하지 않습니다.") %>');
		return;
	}
	
	$('#CI_VERSION').val(obj.ci1);
	mobileChk = true;
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
		<h2 class="s_tit"><%=join_type_txt%> <%= MessageUtil.getString("msg.web.0002", "회원가입") %></h2><!-- 차주 일 경우 <span style="color:#027ac4;">차주</span> -->

		<div class="sub_inner_ty01">
			<div class="step_box02 st02">
				<ul>
					<li><a href="#"><%= MessageUtil.getString("msg.user.0009", "01. 약관동의") %></a></li>
					<li><a href="#" class="on"><%= MessageUtil.getString("msg.user.0010", "02. 정보입력") %></a></li>
					<li class="last"><a href="#"><%= MessageUtil.getString("msg.user.0011", "03. 가입신청완료") %></a></li>
				</ul>
			</div>

			<p class="tb_top_tx01"><span>*</span> <%= MessageUtil.getString("msg.user.0064", "표시는 필수 입력 항목입니다.") %> </p>
			<div class="board_wrap bg_line">
				<table cellspacing="0" cellpadding="0" class="board_join" summary='<%= MessageUtil.getString("msg.user.0065", "정보입력 테이블로 이전글, 다음글의 항목으로 구성되어 있습니다.") %>'>
					<caption><%= MessageUtil.getString("msg.user.0066", "정보입력") %></caption>
					<colgroup>
					<col width="180" />
					<col width="*" />
					</colgroup>
					<thead>
						<th colspan="2"><span><%= MessageUtil.getString("msg.user.0067", "회원정보 입력") %></span><!--  - 화주 --></th>
					</thead>
					<tbody>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0068", "아이디") %> <span class="imp">*</span></th>
							<td>
								<input type="text" class="inp_ty01" name="ID" id="ID"/>
								<a href="#" class="btn_dupi" onClick="dupChkId()"><%= MessageUtil.getString("msg.user.0069", "아이디 중복확인") %></a>
							</td>
						</tr>
						<tr>
							<th valign="top" style="line-height:22px; padding:4px 0 0 30px;"><%= MessageUtil.getString("msg.user.0070", "비밀번호") %> <span class="imp">*</span></th>
							<td>
								<p class="tx01"><%= MessageUtil.getString("msg.user.0071", "특수문자/숫자조합 8자리 이상") %></p>
								<input type="password" class="inp_ty01"  name="PW" id="PW" />
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0072", "비밀번호 확인") %> <span class="imp">*</span></th>
							<td>
								<input type="password" class="inp_ty01"  name="PW_CONFIRM" id="PW_CONFIRM" />
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0073", "이름") %> <span class="imp">*</span></th>
							<td>
								<input type="text" class="inp_ty01" id="NAME" name="NAME"/>
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0074", "휴대전화") %>  <span class="imp">*</span></th>
							<td>
								<select class="sel_ty01" id="MOBILE1">
									<option value="010">010</option><option value="011">011</option><option value="016">016</option><option value="017">017</option><option value="018">018</option><option value="019">019</option>
								</select>
								<span class="line01">-</span>
								<input type="text" class="inp_ty02" id="MOBILE2"/>
								<span class="line01">-</span>
								<input type="text" class="inp_ty02" id="MOBILE3"/>
								<input type="hidden" id="CI_VERSION"/>
								<a href="#" class="btn_phone" onClick="openPopup();"><%= MessageUtil.getString("msg.user.0075", "휴대폰 인증") %></a>
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0076", "담당자 이메일") %></th>
							<td>
								<input type="text" class="inp_ty03" id="EMAIL1" />
								<span class="line02">@</span>
								<select class="sel_ty02" id="EMAIL2" onChange="emailSelect()">
									<option value=""><%= MessageUtil.getString("msg.user.0077", "직접입력") %></option><option value="naver.com">naver.com</option><option value="dreamwiz.com">dreamwiz.com</option><option value="empal.com">empal.com</option><option value="chol.com">chol.com</option><option value="freechal.com">freechal.com</option><option value="gmail.com">gmail.com</option><option value="hanmail.net">hanmail.net</option><option value="hotmail.com">hotmail.com</option><option value="korea.com">korea.com</option><option value="nate.com">nate.com</option><option value="paran.com">paran.com</option><option value="yahoo.com">yahoo.com</option>
								</select>
								<input type="text" class="inp_ty04"  id="EMAIL3" onClick="emailSelect()"/>
								<p class="tx02"><%= MessageUtil.getString("msg.user.0078", "세금계산서 발행, 문의 응답 회신 등을 위한 정확한 이메일을 기재해 주시기 바랍니다.") %></p>
							</td>
						</tr>
<% if(JOIN_TYPE.equals("T05")){ %>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.0093", "차량번호") %> <span class="imp">*</span></th>
							<td>
								<input type="text" class="inp_ty01" id="TXTE_VHCL_NO_CHAN"/>
								<a href="#" class="btn_dupi" onClick="dupVhcl()"><%= MessageUtil.getString("msg.user.0079", "차량번호 중복확인") %></a>
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0080", "차량종류") %> <span class="imp">*</span></th>
							<td>
								<select class="sel_ty02" id="TEMP_VHCL_KND_CD">
									<option value=""><%= MessageUtil.getString("msg.user.0081", "선택") %></option>
									<option value="C">카고</option>
									<option value="D">덤프</option>
									<option value="W">윙바디</option>
									<option value="T">트렉터</option>
									<option value="CW">카고+윙바디</option>
									<option value="R">중장비</option>
									<option value="A">전차종(기타)</option>
								</select>
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0082", "차량톤급") %> <span class="imp">*</span></th>
							<td>
								<select class="sel_ty02" id="SEL_VHCL_TON_CD_ST">
									<option value=""><%= MessageUtil.getString("msg.user.0081", "선택") %></option>
									<option value="0010">1톤</option>
									<option value="0025">2.5톤</option>
									<option value="0040">4톤</option>
									<option value="0050">5톤</option>
									<option value="0080">8톤</option>
									<option value="0090">9톤</option>
									<option value="0100">10톤</option>
									<option value="0110">11톤</option>
									<option value="0140">14톤</option>
									<option value="0150">15톤</option>
									<option value="0160">16톤</option>
									<option value="0180">18톤</option>
									<option value="0190">19톤</option>
									<option value="0220">22톤</option>
									<option value="0230">23톤</option>
									<option value="0240">24톤</option>
									<option value="0250">25톤</option>
									<option value="0390">39톤</option>
									<option value="0510">51톤</option>
									<option value="0530">53톤</option>
									<option value="0540">54톤</option>
									<option value="0550">55톤</option>
									<option value="0600">60톤</option>
									<option value="0640">64톤</option>
									<option value="0680">68톤</option>
									<option value="0690">69톤</option>
									<option value="0700">70톤</option>
									<option value="0750">75톤</option>
									<option value="0014">1.4톤</option>
									<option value="0035">3.5톤</option>
								</select>
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0083", "원소속 여부") %> <span class="imp">*</span></th>
							<td>
								<select class="sel_ty02" style="width:70px;" id="FIRSTJOIN_YN" onChange="firstjoinChange()">
									<option value="N">N</option>
									<option value="Y">Y</option>
								</select>
							</td>
						</tr>
						<tr id="oriN" style="disply:block">
							<th valign="top"><%= MessageUtil.getString("msg.user.0084", "가맹점 용차정보") %></th>
							<td>
								<span style="float:left; padding-right:10px;"><%= MessageUtil.getString("msg.user.0085", "차량구분") %></span>
								<select class="sel_ty02" style="margin-right:30px;" id="LSP_LONG_TERM_YN">
									<option value="N">임시용차</option>
									<option value="Y">장기용차</option>
								</select>
								<span style="float:left; padding-right:10px;"><%= MessageUtil.getString("msg.user.0086", "직영/위수탁") %></span>
								<select class="sel_ty02" id="LSP_IMSI_EQP_CLS">
									<option value="1">직영</option>
									<option value="2">위수탁</option>
								</select>
							</td>
						</tr>
						<tr id="oriY1" style="display:none">
							<th valign="top"><%= MessageUtil.getString("msg.user.0087", "원소속 운영 구분") %> <span class="imp">*</span></th>
							<td>
								<select class="sel_ty02" id="ORI_EQP_CLS">
									<option value="1">직영</option>
									<option value="2">위수탁</option>
								</select>
							</td>
						</tr>
						<tr id="oriY2" style="display:none">
							<th valign="middle"><%= MessageUtil.getString("msg.user.0088", "대한통운 장기용차") %> <span class="imp">*</span></th>
							<td>
								<table>
									<tr>
										<td>
											<span style="float:left; padding-right:10px;"><%= MessageUtil.getString("msg.user.0089", "장기용차 여부") %></span>
											<select class="sel_ty02" style="margin-right:30px;" id="KX_LONG_TERM_YN" onchange="longtermChance()">
												<option value="N">N</option>
												<option value="Y">Y</option>
											</select>
										</td>
									</tr>
										<td id="oriY2Y" style="display:none" valign="middle">
											<span id="dateFlag">
											<%= MessageUtil.getString("msg.user.0091", "계약시작일") %> : <input type="text" id="SDATE_F" maxlength="10" placeholder="YYYY-MM-DD"/> ~ 
											<%= MessageUtil.getString("msg.user.0092", "계약종료일") %> : <input type="text" id="EDATE_F" maxlength="10" placeholder="YYYY-MM-DD"/>
											</span>
										</td>
									<tr>
									</tr>
								</table>
							</td>
						</tr>												
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.user.0090", "원소속명") %></th>
							<td>
								<input type="text" class="inp_ty01" id="LSP_IMSI_ORI_NM" />
							</td>
						</tr>
<%}%>						
					</tbody>
				</table>
			</div>

				
			<div style="padding:30px 0 30px 0;">
				<div class="join_scroll_box ty02">
					<p class="s_tx fl"><%= MessageUtil.getString("msg.user.0093", "마케팅 활용 및 광고성 정보 수신 동의") %></p>
					<p class="btm_agree_tx ty02">
						<span class="input_chk">
							<input type="checkbox" id="agree22" name="" onClick="subAllChk()"/> 
							<label for="agree22" class=""><%= MessageUtil.getString("msg.user.0094", "전체수신") %></label>
						</span>
						<span class="input_chk">
							<input type="checkbox" id="agree23" name="" /> 
							<label for="agree23" class=""><%= MessageUtil.getString("msg.user.0095", "휴대폰") %></label>
						</span>
						<span class="input_chk">
							<input type="checkbox" id="agree24" name="" /> 
							<label for="agree24" class=""><%= MessageUtil.getString("msg.user.0096", "이메일") %></label>
						</span>
					</p>
				</div>
				<div class="board_wrap top_line" style="margin-bottom:10px;">
					<table cellspacing="0" cellpadding="0" class="board_write01 ty02" summary='<%= MessageUtil.getString("msg.user.0097", "고객 정보 수집 테이블로 수집항목, 회원 공통, 차주 회원, 수집 및 이용 목적, 보유 및 이용기간의 항목으로 구성되어 있습니다.") %>'>
						<caption><%= MessageUtil.getString("msg.user.0098", "고객 정보 수집") %></caption>
						<colgroup>
						<col width="168" />
						<col width="168" />
						<col width="*" />
						</colgroup>
						<tbody>
							<tr>
								<th rowspan="2" style="border-right:1px solid #e3e4e5;"><%= MessageUtil.getString("msg.user.0099", "수집항목") %></th>
								<th><%= MessageUtil.getString("msg.user.0100", "회원 공통") %></th>
								<td class="tx01">
									<%= MessageUtil.getString("msg.user.0101") %>
								</td>
							</tr>
							<tr>
								<th>차주 회원</th>
								<td class="tx01">
									<%= MessageUtil.getString("msg.user.0102") %>
								</td>
							</tr>
							<tr>
								<th colspan="2"><%= MessageUtil.getString("msg.user.0103", "수집 및 이용 목적") %></th>
								<td style="line-height:28px;">
									<%= MessageUtil.getString("msg.user.0104", "회원 본인 확인 및 화물정보망 서비스 제공") %>
								</td>
							</tr>
							<tr class="last">
								<th colspan="2"><%= MessageUtil.getString("msg.user.0105", "보유 및 이용기간") %></th>
								<td class="tx01">
									<%= MessageUtil.getString("msg.user.0106") %>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<p class="tb_top_tx01"><span>*</span> <%= MessageUtil.getString("msg.user.0107", "CJ 대한통운 화물정보망은 서비스 이용에 필요한 최소한의 고객 정보만을 수집합니다.") %></p>
			</div>

			<div class="btm_btns center">
				<a href="#" class="btn_next01" onclick="join();"><%= MessageUtil.getString("msg.user.0108", "다음") %></a>
			</div>
		</div>
	</div>
	<!-- //content -->
</div>
<!-- //container -->
<form name="phoneFrom">
	<input type="hidden" name="svcId" value="nkfr/index_w.html"/>					
	<input type="hidden" name="insParam" value={}/>
	<input type="hidden" name="outParam" value={}/>
	<input type="hidden" name="userCallback" value={}/>
</form>

<!-- footer -->
<%@ include file="../inc/footer.jsp" %>
<!-- //footer -->

</body>
</html>