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

</head>
<body>

<!-- header -->
<%@ include file="../inc/header.jsp" %>
<!-- //header -->

<!-- sub visual -->
<div class="sub_vis_wrap s_vis03">
	<div class="inner_box">
		<dl>
			<dt><%= MessageUtil.getString("msg_cust_0001", "고객 지원") %></dt>
			<dd><%= MessageUtil.getString("msg.web.0083", "CJ대한통운 화물정보망의 첨단 물류 IT 시스템으로 차별화된 물류 서비스를 경험하실 수있습니다.") %></dd>
		</dl>
	</div>
</div>
<!-- //sub visual -->

<!-- container -->
<div class="container">
	<!-- content -->
	<div class="content">
		<div class="sub_inner_ty01">
			<!-- tab-->
			<div class="tab_customer">
				<ul>
					<li><a href="sub03_01.jsp" class="on">FAQ</a></li>
					<li><a href="sub03_02_list.jsp"><%= MessageUtil.getString("msg_cust_0002", "전국 지사 안내") %></a></li>
					<li class="last"><a href="sub03_03_list.jsp"><%= MessageUtil.getString("msg_cust_0003", "공지사항") %></a></li>
				</ul>
			</div>
			<!-- //tab-->

			<div class="faq_list">
				<ul>
					<li>
						<a href="javascript:void(0);" class="qu"><span>Q.</span> <%= MessageUtil.getString("msg_cust_0004", "회원 가입 방법을 알려주세요.") %></a>
						<p class="cont">
							<%= MessageUtil.getString("msg_cust_0005") %>

							<a href="join01_01.jsp">(<%= MessageUtil.getString("msg.web.0099", "회원가입 바로가기") %>)</a>
						</p>
					</li>
					<li>
						<a href="javascript:void(0);" class="qu"><span>Q.</span> <%= MessageUtil.getString("msg_cust_0006", "정회원 신청은 어떻게 해야 하나요?") %></a>
						<p class="cont">
							<%= MessageUtil.getString("msg_cust_0007") %>

							<a href="join01_01.jsp">(<%= MessageUtil.getString("msg_cust_0008", "구비서류 자세히 보기") %>)</a>
						</p>
					</li>
					<li>
						<a href="javascript:void(0);" class="qu"><span>Q.</span> <%= MessageUtil.getString("msg_cust_0009", "아이디를 잊어버렸어요.") %></a>
						<p class="cont">
							<%= MessageUtil.getString("msg_cust_0010") %>

							<a href="login02.jsp">(<%= MessageUtil.getString("msg_cust_0011", "아이디 찾기 바로 가기") %>)</a>
						</p>
					</li>
					<li>
						<a href="javascript:void(0);" class="qu"><span>Q.</span> <%= MessageUtil.getString("msg_cust_0012", "비밀번호를 잊어버렸어요.") %></a>
						<p class="cont">
							<%= MessageUtil.getString("msg_cust_0013") %>

							<a href="login03.jsp">(<%= MessageUtil.getString("msg_cust_0014", "비밀번호 찾기 바로 가기") %>)</a>
						</p>
					</li>
					<li>
						<a href="javascript:void(0);" class="qu"><span>Q.</span> <%= MessageUtil.getString("msg_cust_0015", "헬로 화물정보망의 스마트폰 App은 어떻게 설치하나요?") %></a>
						<p class="cont">
							<%= MessageUtil.getString("msg_cust_0016") %>
							
							<a href="sub02.jsp">(<%= MessageUtil.getString("msg_cust_0017", "APP 설치 방법 자세히 보기") %>)</a>
						</p>
					</li>
					<li>
						<a href="javascript:void(0);" class="qu"><span>Q.</span> <%= MessageUtil.getString("msg_cust_0018", "회원 탈퇴는 어떻게 하나요?") %></a>
						<p class="cont">
							<%= MessageUtil.getString("msg_cust_0019") %>
						</p>
					</li>
					<li>
						<a href="javascript:void(0);" class="qu"><span>Q.</span> <%= MessageUtil.getString("msg_cust_0020", "운반임 정산은 어떻게 이루어지나요?") %></a>
						<p class="cont">
							<%= MessageUtil.getString("msg_cust_0021") %>
						</p>
					</li>
				</ul>
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