<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
			<div class="step_box02 st03">
				<ul>
					<li><a href="#"><%= MessageUtil.getString("msg.user.0009", "01. 약관동의") %></a></li>
					<li><a href="#"><%= MessageUtil.getString("msg.user.0010", "02. 정보입력") %></a></li>
					<li class="last"><a href="#" class="on"><%= MessageUtil.getString("msg.user.0011", "03. 가입신청완료") %></a></li>
				</ul>
			</div>

			<div class="join_cont04">
				<div class="icon_bx"><img src="../img/icon_join_end01.png" alt="" /></div>
				<div class="tx_bx01"><span><%=join_type_txt %></span> <%= MessageUtil.getString("msg.user.0109", "회원가입이 완료 되었습니다.") %></div>
				<div class="btm_bx_wrap">
					<div class="box_l">
						<dl class="icon01">
							<dt><a href="#"><%= MessageUtil.getString("msg.web.0003", "고객시스템") %></a></dt>
							<dd>
								<%= MessageUtil.getString("msg.user.0110") %>
							</dd>
						</dl>
					</div>
					<div class="box_r">
						<dl style="padding:0 0 0 91px; margin-left:36px; background:url('../img/icon_join_end02_02.png') no-repeat left top;">
							<dt><a href="#"><%= MessageUtil.getString("msg.user.0111", "화물정보망 더 알아보기") %></a></dt>
							<dd>
								<%= MessageUtil.getString("msg.user.0112") %>
							</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- //content -->
</div>
<!-- //container -->


<!-- footer -->
<%@ include file="../inc/footer.jsp" %>
<!-- //footer -->
<!-- <div class="footer myContent sub">
	<div class="ft_menu">
		<div class="inner_box">
			<ul>
				<li><a href="#">CJ대한통운</a></li>
				<li><a href="#">법적고지</a></li>
				<li><a href="#">이용약관</a></li>
				<li><a href="#">이메일 무단수집거부</a></li>
				<li class="last"><a href="#">위치기반 서비스 이용약관</a></li>
			</ul>
			<div class="sel_group box-familySite">
				<a href="javascript:void(0);" class="btn_family">그룹 계열사 바로가기<span class="icon"></span></a>
				<div class="list-family">
					<ul>
						<li>
							<span class="tt-1">CJ그룹</span>
							<ul>
								<li><a href="http://www.cj.net/" target="_blank" title="새창">CJ주식회사</a></li>
							</ul>
						</li>
						<li>
							<span class="tt-1">식품&amp;식품 서비스</span>
							<ul>
								<li><a href="http://www.cj.co.kr/cj-kr/" target="_blank" title="새창">CJ제일제당(식품)</a></li>
								<li><a href="http://www.cjfreshway.com" target="_blank" title="새창">CJ프레시웨이</a></li>
								<li><a href="https://www.cjfoodville.co.kr" target="_blank" title="새창">CJ푸드빌</a></li>
								<li><a href="http://www.md1.co.kr" target="_blank" title="새창">CJ엠디원</a></li>
							</ul>
						</li>
					
						<li>
							<span class="tt-1">생명공학</span>
							<ul>
								<li><a href="http://www.cj.co.kr/cj-kr/businesses/4/main" target="_blank" title="새창">CJ제일제당(바이오)</a></li>
							</ul>
						</li>
					
						<li>
							<span class="tt-1">신유통</span>
							<ul>
								<li><a href="http://www.cjoshopping.com" target="_blank" title="새창">CJ ENM(오쇼핑)</a></li>
								<li><a href="http://www.cjlogistics.com/ko/main" target="_blank" title="새창">CJ대한통운</a></li>
								<li><a href="http://www.cjtelenix.com" target="_blank" title="새창">CJ텔레닉스</a></li>
								<li><a href="http://www.oliveyoung.co.kr/store/main/main.do" target="_blank" title="새창">CJ올리브네트웍스(올리브영)</a></li>
							</ul>
						</li>
					
						<li>
							<span class="tt-1">엔터테인먼트&amp;미디어</span>
							<ul>
								<li><a href="http://www.cjenm.com" target="_blank" title="새창">CJ ENM(E&amp;M)</a></li>
								<li><a href="http://www.cgv.co.kr" target="_blank" title="새창">CJ CGV</a></li>
								<li><a href="http://www.cjhello.com" target="_blank" title="새창">CJ Hello</a></li>
								<li><a href="http://www.cjpowercast.com" target="_blank" title="새창">CJ파워캐스트</a></li>
							</ul>
						</li>
						<li>
							<span class="tt-1">인프라</span>
							<ul>
								<li><a href="http://www.cjenc.co.kr" target="_blank" title="새창">CJ대한통운(건설)</a></li>
								<li><a href="http://www.cjolivenetworks.co.kr/itbusiness/ " target="_blank" title="새창">CJ올리브네트웍스(IT사업)</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="ft_btm">
		<div class="inner_box">
			<p class="ft_logo"><img src="../img/ft_logo.png" alt="" /></p>
			<p class="ft_info">
				CJ대한통운(주)사업자등록번호 : 110-81-05034 대표자: 박근희, 박근태, 김춘학 개인정보보호책임자 : 서병교<br/>
				주소 : 서울특별시 중구 세종대로 9길 53 택배고객센터 : 1588-1255 (월~금 08:00 ~ 18:00 / 토 09:00 ~ 13:00)
			</p>
			<p class="ft_copyright">COPYRIGHT 2017 BY CJ Logistics Corporation ALL RIGHT RESERVED.</p>
		</div>
	</div>
</div> -->

</body>
</html>