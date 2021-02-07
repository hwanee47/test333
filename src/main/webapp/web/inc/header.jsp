<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>

<script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="../js/common.js"></script>
<script type="text/javascript" src="../js/cookies.js"></script>
<script type="text/javascript" src="../js/WebIF.js"></script>

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
	
	
	
	var gv_userId;
	var gv_userNm;
	var gv_type;
	var captcha_yn 	= "N";
	var gv_langCd 	= "ko";
	$( document ).ready(function() {
		fn_init();
	});
	
	function fn_init() {
		//넥사크로 연결
		 window.NEXACROHTML.Init();

		//언어셋 설정.
		gv_langCd = '<%= MessageUtil.getLang() %>';

		fn_setLang();
	};
	
	function fn_loginCheck() {
		var json = {
				head : "loginCheck",
				type : "sub"
		}
		
		window.NEXACROHTML.FireUserNotify(json);
	}
	
	function fn_setUserInfo(json) {
		gv_userNm = json.gv_userNm;
		gv_userId = json.gv_userId;
		gv_type	  = json.gv_type;
		gv_langCd = json.gv_lang;
	
		//사용자 정보 설정.
		if( !(gv_userId == null || gv_userId == "") ) {
			var userInfo = gv_userNm + "(" + gv_userId + ")" + "님 반갑습니다.";
			
			$("#userInfo").text(userInfo); 
		}
		
		//class 변경
		if(gv_type == "sub") {
			$(".gnb").attr("class", "gnb sub");
		}
		
		//언어셋 설정.
		fn_setLang();
	}
	
	function fn_mainPage() {
		var json = {
				head : "pageMove",
				url  : "web/jsp/main.jsp",
				type : "main"
		}
		
		window.NEXACROHTML.FireUserNotify(json);
	}
	
	function fn_viewPage(url) {
		var json = {
				head : "pageMove",
				url  : url,
				type : "sub"
		}
		
		window.NEXACROHTML.FireUserNotify(json);
	}
	
	function fn_loginCall(json) {
		window.NEXACROHTML.FireUserNotify(json);
	}
	//
	function fn_sendDataCall(json) {
		window.NEXACROHTML.FireUserNotify(json);
	}
	function fn_noticeCall(json) {
		window.NEXACROHTML.FireUserNotify(json);
	}
	//
	function fn_clearSendData(json){
		//
		popClose('pop_ty01');
		$("#shprId").val("");
		$("#phone1").val("");
		$("#phone2").val("");
		$("#phone3").val("");

		$("#calDate option:eq(0)").prop("selected", true);
		$("#calTime option:eq(0)").prop("selected", true);
		$("#calMinute option:eq(0)").prop("selected", true);

		$("#contents").val("");
		//
	}
	//
	
	//보안문자 보이기
	function fn_openCaptCha(val) {
		$("#captChaStr").val("");
		if(val == "Y"){
			captcha_yn = "Y";
			$("#normalPwdArea").show();
		}else{
			captcha_yn = "N";
			$("#normalPwdArea").hide();
		}
	}
	
	function fn_selectLang(o) {
		gv_langCd = $(o).data("lang");
		
		var json = {head : "lang", lang  : gv_langCd}	
		window.NEXACROHTML.FireUserNotify(json);
	}
	
	function fn_setLang() {
		$("#langList").children().each(function(){
			var lang = $("a", $(this)).data("lang");
			var text = $(this).text();
		
			if(lang == gv_langCd) {
				$('#btnGlobalLang span').text(text);
				$('#btnGlobalLang').data("lang", gv_langCd);
				//$(this).hide();
			} else {
				//$(this).show();
			}
	  	});
	}
</script>

<div class="gnb"><!-- 서브페이지 경우 클래스 sub 추가 되어야 함 -->
	<h1 class="logo"><a href="javascript:fn_mainPage();"><%= MessageUtil.getString("msg.web.0007", "CJ LOGISTICS 화물정보망") %></a></h1>
	<div class="box-globalLang">
		<a href="javascript:void(0);" id="btnGlobalLang" class="" data-lang="ko"><span>한국어</span></a> 
		<ul id="langList" class="list-lang">
			<li><a href="javascript:void(0);" onclick="fn_selectLang(this);" data-lang="ko">한국어</a></li>
			 <li><a href="javascript:void(0);" onclick="fn_selectLang(this);" data-lang="en">English</a></li>
			<li><a href="javascript:void(0);" onclick="fn_selectLang(this);" data-lang="zh">中國</a></li> 
		</ul>
	</div>
	<div class="box-globalNetwork">
		<a href="#none" class="" id="btnGlobalNetwork"><span></span></a>
		<div class="list-network-wrap">
			<p class="title-network"><a href="/ko/network">GLOBAL NETWORK</a></p>
			<ul class="list-network">
				<li><a href="https://www.cjlogistics.com/ko/network/en-za" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/20a27dc3-294b-4e47-857a-7c66fb8b701b.jpg" alt="남아프리카 공화국 국기 "><%= MessageUtil.getString("msg.global.0001", "남아프리카 공화국") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-nl" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/c220ef1e-7c3a-4af4-bece-9bfdf21cef75.jpg" alt="네덜란드 국기 "><%= MessageUtil.getString("msg.global.0002", "네덜란드") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-np" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/cef3d52b-420a-461a-a1e3-f539316aada1.jpg" alt="NEPAL"><%= MessageUtil.getString("msg.global.0003", "네팔") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-de" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/4d4af128-451f-4bff-a4a2-b1f689ad6c83.jpg" alt="독일 국기 "><%= MessageUtil.getString("msg.global.0004", "독일") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-la" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/e447415b-be76-4295-8789-3127d17d37c0.jpg" alt="라오스 국기 "><%= MessageUtil.getString("msg.global.0005", "라오스") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-my" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/bb8a5961-264d-4a06-8b82-593ec6ea331c.jpg" alt="말레이시아 국기 "><%= MessageUtil.getString("msg.global.0006", "말레이시아") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-mx" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/d9f5060a-6af3-4365-ad14-a088d81c07bb.jpg" alt="멕시코 국기 "><%= MessageUtil.getString("msg.global.0007", "멕시코") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-us" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/4a5ab44c-8d97-45f0-a4cf-d87c68a6f8fa.jpg" alt="미국 국기 "><%= MessageUtil.getString("msg.global.0008", "미국") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-mm" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/8a59cc98-050a-4f26-83f3-fcdf2c6bc6b6.jpg" alt="미얀마 국기 "><%= MessageUtil.getString("msg.global.0009", "미얀마") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-vn" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/d5a4bee5-7826-4501-89a7-04896f5f5ef7.jpg" alt="베트남 국기 "><%= MessageUtil.getString("msg.global.0010", "베트남") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-br" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/72466beb-a556-4363-8815-7be2623a2eb3.jpg" alt="브라질 국기 "><%= MessageUtil.getString("msg.global.0011", "브라질") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-sg" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/2939b418-9d89-406d-908c-e0fd9db3e781.jpg" alt="싱가포르 국기 "><%= MessageUtil.getString("msg.global.0012", "싱가포르") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-ae" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/d5bd9a7d-3f5f-4728-9f87-d3cde3f42a46.jpg" alt="아랍에미리트 연합 국기 "><%= MessageUtil.getString("msg.global.0013", "아랍에미리트 연합") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-az" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/462593c0-8be0-4842-90aa-e4327c724ff9.jpg" alt="AZERBAIJAN"><%= MessageUtil.getString("msg.global.0014", "아제르바이잔") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-gb" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/40aa2d8f-3c01-4045-98db-39cbbb381fc3.jpg" alt="영국 국기 이미지 "><%= MessageUtil.getString("msg.global.0015", "영국") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-uz" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/16b72d52-17c7-45f2-8073-c59717446d3c.jpg" alt="UZBEKISTAN"><%= MessageUtil.getString("msg.global.0016", "우즈베키스탄") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-iq" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/03fd3c26-daba-4b46-b1ec-490a3db23e5b.jpg" alt="IRAQ"><%= MessageUtil.getString("msg.global.0017", "이라크") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-it" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/57200468-57f0-4d96-bbfa-74b760c4c7f9.jpg" alt="ITALY"><%= MessageUtil.getString("msg.global.0018", "이탈리아") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-in" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/37665460-a9bf-4065-b193-0fdee60bb964.jpg" alt="인도 국기 "><%= MessageUtil.getString("msg.global.0019", "인도(인디아)") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-id" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/1701daef-f4e4-48e7-872e-d9a3f548b0c2.jpg" alt="인도네시아 국기 "><%= MessageUtil.getString("msg.global.0020", "인도네시아 ") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-jp" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/7975608a-47b8-4ebd-99c6-f2be741a3b8e.jpg" alt="일본 국기"><%= MessageUtil.getString("msg.global.0021", "일본") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-ge" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/07c0821b-8091-46f9-86b6-10fb91e6e10b.jpg" alt="GEORGIA"><%= MessageUtil.getString("msg.global.0022", "조지아") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/zh-cn" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/f9713fe4-47ae-4647-ad31-3f2cd2fa006b.jpg" alt="중국 국기"><%= MessageUtil.getString("msg.global.0023", "중국") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-kz" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/0abe9024-df95-4573-b693-4d06c062a49e.jpg" alt="카자흐스탄 국기 "><%= MessageUtil.getString("msg.global.0024", "카자흐스탄") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-ca" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/19023cf3-0e84-4558-a480-79d4302502cc.jpg" alt="캐나다 국기 "><%= MessageUtil.getString("msg.global.0025", "캐나다") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-kw" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/6e998cfc-5f2d-4903-9d00-d916ee511ff9.jpg" alt="KUWAIT "><%= MessageUtil.getString("msg.global.0026", "쿠웨이트") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-tj" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/aef54d57-27b6-4a6b-ae09-6b5dc877aabc.jpg" alt="TAJIKISTAN "><%= MessageUtil.getString("msg.global.0027", "타지키스탄") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-tz" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/273d3088-1f3c-4c66-9721-24e366d7ac48.jpg" alt="탄자니아 국기 "><%= MessageUtil.getString("msg.global.0028", "탄자니아") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/th-th" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/da30d307-0f18-48d8-b7a0-8fe862d530a8.jpg" alt="태국 국기 "><%= MessageUtil.getString("msg.global.0029", "태국") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-tr" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/01ab6fcb-3501-4220-88f0-a52fed2a2882.jpg" alt="TURKEY"><%= MessageUtil.getString("msg.global.0030", "터키") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-tm" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/cde48291-0221-4d67-8a77-9b5c036c62f8.jpg" alt="투르크메니스탄 국기이미지"><%= MessageUtil.getString("msg.global.0031", "투르크메니스탄") %></a></li>
				<li><a href="https://www.cjlogistics.com/ko/network/en-ph" target="_blank"><img class="img-flag" src="https://www.cjlogistics.com/cjlwupload/countryInfo/4729b717-78d2-4540-b90c-0aa2be98fd24.jpg" alt="필리핀 국기 "><%= MessageUtil.getString("msg.global.0032", "필리핀") %></a></li>
			</ul>
		</div>
	</div>
	<div class="util_menu">
		<div class="util">
			<a id="userInfo" href="javascript:fn_loginCheck();"><%= MessageUtil.getString("msg.web.0001", "로그인") %></a>
			<a id="userJoin" href="javascript:fn_viewPage('web/jsp/join01_01.jsp');"><%= MessageUtil.getString("msg.web.0002", "회원가입") %></a>
			<a id="custSystem" href="javascript:fn_loginCheck();" class="btn_system"><%= MessageUtil.getString("msg.web.0003", "고객시스템") %></a>
		</div>
		<ul class="menu">
			<li><a id="bizInfo" href="javascript:fn_viewPage('web/jsp/sub01.jsp');"><%= MessageUtil.getString("msg.web.0004", "사업안내") %></a></li>
			<li><a id="userInfo" href="javascript:fn_viewPage('web/jsp/sub02.jsp');"><%= MessageUtil.getString("msg.web.0005", "APP 이용안내") %></a></li>
			<li><a id="custSupport" href="javascript:fn_viewPage('web/jsp/sub03_01.jsp');"><%= MessageUtil.getString("msg.web.0006", "고객지원") %></a></li>
		</ul>
	</div>
	<div class="btm_line"></div>
</div>