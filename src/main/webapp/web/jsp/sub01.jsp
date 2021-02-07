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
<div class="sub_vis_wrap s_vis01">
	<div class="inner_box">
		<dl>
			<dt><%= MessageUtil.getString("msg.web.0004", "사업안내") %></dt>
			<dd>THE GLOBAL SCM INNOVATOR</dd>
		</dl>
	</div>
</div>
<!-- //sub visual -->

<!-- container -->
<div class="container about">
	<!-- content -->
	<div class="content">
		<div class="abount_tit">
			<dl>
				<dt>The Global SCM Innovator</dt>
				<dd><%= MessageUtil.getString("msg_bsn_0001") %> </dd>
			</dl>
		</div>
		<div class="about_cont01">
			<div class="in_bx01">
				<dl>
					<dt><%= MessageUtil.getString("msg_bsn_0002") %></dt>
					<dd>
						<%= MessageUtil.getString("msg_bsn_0003") %>
					</dd>
				</dl>
			</div>
			<div class="in_bx02">
				<dl>
					<dt><%= MessageUtil.getString("msg_bsn_0004") %></dt>
					<dd>
						<%= MessageUtil.getString("msg_bsn_0005") %>
					</dd>
				</dl>
			</div>
		</div>
		<div class="about_cont02">
			<p class="tx01">
				<%= MessageUtil.getString("msg_bsn_0006") %>
			</p>
			<p class="tx02">
				<%= MessageUtil.getString("msg_bsn_0007") %>
			</p>
			<p class="tx03">
				<span><%= MessageUtil.getString("msg_bsn_0008") %></span><br/>
				<%= MessageUtil.getString("msg_bsn_0009") %>
			</p>
		</div>
		<div><img src="../img/img_about01.png" alt="" /></div>
	</div>
	<!-- //content -->
</div>
<!-- //container -->


<!-- footer -->
<%@ include file="../inc/footer.jsp" %>
<!-- //footer -->

</body>
</html>