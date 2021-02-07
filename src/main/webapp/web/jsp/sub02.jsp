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

</head>
<body>

<!-- header -->
<%@ include file="../inc/header.jsp" %>
<!-- //header -->

<!-- sub visual -->
<div class="sub_vis_wrap s_vis02">
	<div class="inner_box">
		<dl>
			<dt><%= MessageUtil.getString("msg.web.0005", "APP 이용안내") %></dt>
			<dd><%= MessageUtil.getString("msg.web.0083", "CJ대한통운 화물정보망의 첨단 물류 IT 시스템으로 차별화된 물류 서비스를 경험하실 수있습니다.") %></dd>
		</dl>
	</div>
</div>
<!-- //sub visual -->

<script>
$(function(){
	$(".tab_btn_wrap a").bind("click", function(){
		$(".tab_btn_wrap a").removeClass("selected");
		$(this).addClass("selected");
		$(".manual_contents").hide();
		$("#" + $(this).data("value")).show();
	});
})
</script>

<!-- container -->
<div class="container">
	<!-- content -->
	<div class="content">
		<!-- 모바일 이용안내// -->
		<section class="manual_wrapper">
			<!-- 탭 버튼 -->
			<div class="tab_btn_wrap">
				<a href="#" data-value="car_owner" class="selected"><%= MessageUtil.getString("msg_app_0001", "차주용 이용안내") %></a>
				<a href="#" data-value="goods_owner"><%= MessageUtil.getString("msg_app_0002", "화주용 이용안내") %></a>
				<a href="#" data-value="partner"><%= MessageUtil.getString("msg_app_0003", "파트너사 이용안내") %></a>
			</div>
			
			<!-- 차주용 이용안내 -->
			<div class="manual_contents" id="car_owner" >
				<p class="notice"><strong><%= MessageUtil.getString("msg_app_0004", "주요기능 요약 안내") %></strong></p>
				<ul>
					<li><%= MessageUtil.getString("msg_app_0005", "- 화물조회, 운행보고, 길안내 서비스 등 차주용 모바일 업무에 적합한 서비스를 제공합니다.") %></li>
					<li><%= MessageUtil.getString("msg_app_0006", "- 간단한 절차로 서비스 이용이 가능합니다.") %></li>
					<li><%= MessageUtil.getString("msg_app_0007", "- 모바일 앱을 통해 알림내역 환경설정 등 다양한 편의서비스를 제공합니다.") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_car00.png"/></div>
				
				<ul>
					<li><strong>01.</strong> <%= MessageUtil.getString("msg_app_0008", "앱 설치 후 최초 1회 모바일 앱 접근 관련안내 동의") %></li>
					<li><strong>02.</strong> <%= MessageUtil.getString("msg_app_0009", "정(준)회원일 경우 핸드폰번호, 차량번호를 입력 후 로그인을 할 경우 메인화면으로 이동") %></li>
					<li><strong>03.</strong> <%= MessageUtil.getString("msg_app_0010") %></li>
					<li><strong>04.</strong> <%= MessageUtil.getString("msg_app_0011") %></li>
					<li><strong>05.</strong> <%= MessageUtil.getString("msg_app_0012", "운행보고 상세(단계별 보고)") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_car01.png"/></div>
				
				<ul>
					<li><strong>06.</strong> <%= MessageUtil.getString("msg_app_0013") %></li>
					<li><strong>07.</strong> <%= MessageUtil.getString("msg_app_0014") %></li>
					<li><strong>08.</strong> <%= MessageUtil.getString("msg_app_0015") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_car02.png"/></div>
				
				<ul>
					<li><strong>09.</strong> <%= MessageUtil.getString("msg_app_0016") %></li>
					<li><strong>10.</strong> <%= MessageUtil.getString("msg_app_0017") %></li>
					<li><strong>11.</strong> <%= MessageUtil.getString("msg_app_0018") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_car03.png"/></div>
			</div>
			
			<!-- 화주용 이용안내 -->
			<div class="manual_contents" id="goods_owner" style="display: none;">
				<p><strong><%= MessageUtil.getString("msg_app_0004", "주요기능 요약 안내") %></strong></p>
				<ul>
					<li><%= MessageUtil.getString("msg_app_0019") %></li>
					<li><%= MessageUtil.getString("msg_app_0006") %></li>
					<li><%= MessageUtil.getString("msg_app_0020") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_cargo00.png"/></div>
				
				<ul>
					<li><strong>01.</strong> <%= MessageUtil.getString("msg_app_0008") %></li>
					<li><strong>02.</strong> <%= MessageUtil.getString("msg_app_0021") %></li>
					<li><strong>03.</strong> <%= MessageUtil.getString("msg_app_0022") %></li>
					<li><strong>04.</strong> <%= MessageUtil.getString("msg_app_0023") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_cargo01.png"/></div>
				
				<ul>
					<li><strong>05.</strong> <%= MessageUtil.getString("msg_app_0024") %></li>
					<li><strong>06.</strong> <%= MessageUtil.getString("msg_app_0025") %></li>
					<li><strong>07.</strong> <%= MessageUtil.getString("msg_app_0026") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_cargo02.png"/></div>
				
				<ul>
					<li><strong>08.</strong> <%= MessageUtil.getString("msg_app_0016") %></li>
					<li><strong>09.</strong> <%= MessageUtil.getString("msg_app_0017") %></li>
					<li><strong>10.</strong> <%= MessageUtil.getString("msg_app_0018") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_cargo03.png"/></div>
			</div>
			
			<!-- 파트너사 이용안내 -->
			<div class="manual_contents" id="partner" style="display: none;"> 
				<p><strong><%= MessageUtil.getString("msg_app_0004") %></strong></p>
				<ul>
					<li><%= MessageUtil.getString("msg_app_0027") %></li>
					<li><%= MessageUtil.getString("msg_app_0006") %></li>
					<li><%= MessageUtil.getString("msg_app_0028") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_partner00.png"/></div>
				
				<ul>
					<li><strong>01.</strong> <%= MessageUtil.getString("msg_app_0008") %></li>
					<li><strong>02.</strong> <%= MessageUtil.getString("msg_app_0029") %></li>
					<li><strong>03.</strong> <%= MessageUtil.getString("msg_app_0022") %></li>
					<li><strong>04.</strong> <%= MessageUtil.getString("msg_app_0030") %></li>
					<li><strong>05.</strong> <%= MessageUtil.getString("msg_app_0031") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_partner01.png"/></div>
				
				<ul>
					<li><strong>06.</strong> <%= MessageUtil.getString("msg_app_0032") %></li>
					<li><strong>07.</strong> <%= MessageUtil.getString("msg_app_0033") %></li>
					<li><strong>08.</strong> <%= MessageUtil.getString("msg_app_0034") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_partner02.png"/></div>
				
				<ul>
					<li><strong>09.</strong> <%= MessageUtil.getString("msg_app_0035") %></li>
					<li><strong>10.</strong> <%= MessageUtil.getString("msg_app_0036") %></li>
					<li><strong>11.</strong> <%= MessageUtil.getString("msg_app_0018") %></li>
				</ul>
				<div><img src="../img/web_dounlard_info_partner03.png"/></div>
			</div>
			
		</section>
		<!-- //모바일 이용안내 -->
	</div>
	<!-- //content -->
</div>
<!-- //container -->


<!-- footer -->
<%@ include file="../inc/footer.jsp" %>
<!-- //footer -->

</body>
</html>