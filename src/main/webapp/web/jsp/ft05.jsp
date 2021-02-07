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
<div class="sub_vis_wrap s_vis06">
	<div class="inner_box">
		<dl>
			<dt><%= MessageUtil.getString("msg.web.0013", "위치기반 서비스 이용약관") %></dt>
			<dd><%= MessageUtil.getString("msg.web.0083", "CJ대한통운 화물정보망의 첨단 물류 IT 시스템으로 차별화된 물류 서비스를 경험하실 수있습니다.") %></dd>
		</dl>
	</div>
</div>
<!-- //sub visual -->

<!-- container -->
<div class="container">
	<!-- content -->
	<div class="content">
		<div class="ft_cont02"">
			<p class="ty01"><%= MessageUtil.getString("msg.svc.0001") %></p><br/>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0002") %></span> <%= MessageUtil.getString("msg.svc.0003") %> <br/><br/>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0005") %></span> <br/><br/><br/>
			

			<p class="ty01"><%= MessageUtil.getString("msg.svc.0006") %></p><br/>
			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0007") %></span>
			<%= MessageUtil.getString("msg.svc.0007_1") %><br/>

			<div class="board_wrap bg_line" style="margin:10px 0;">
				<table cellspacing="0" cellpadding="0" class="board_ft" summary='<%= MessageUtil.getString("msg.user.0065") %>'>
					<caption><%= MessageUtil.getString("msg.user.0066") %></caption>
					<colgroup>
					<col width="200" />
					<col width="*" />
					<col width="130" />
					</colgroup>
					<thead>
						<th><%= MessageUtil.getString("msg.svc.0008") %></th>
						<th><%= MessageUtil.getString("msg.svc.0009") %></th>
						<th><%= MessageUtil.getString("msg.svc.0010") %></th>
					</thead>
					<tbody>
						<tr>
							<th><%= MessageUtil.getString("msg.svc.0011") %></th>
							<td class="tx_l">
								<%= MessageUtil.getString("msg.svc.0012") %>
							</td>
							<td><%= MessageUtil.getString("msg.svc.0013") %></td>
						</tr>
						<tr>
							<th><%= MessageUtil.getString("msg.svc.0014") %></th>
							<td class="tx_l">
								<%= MessageUtil.getString("msg.svc.0015") %>
							</td>
							<td><%= MessageUtil.getString("msg.svc.0013") %></td>
						</tr>
						<tr>
							<th><%= MessageUtil.getString("msg.svc.0016") %></th>
							<td class="tx_l">
								<%= MessageUtil.getString("msg.svc.0017") %>
							</td>
							<td><%= MessageUtil.getString("msg.svc.0013") %></td>
						</tr>
					</tbody>
				</table>
			</div>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0018") %></span><br/><br/>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0019") %></span>
			<%= MessageUtil.getString("msg.svc.0020") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0021") %></span> 
			<%= MessageUtil.getString("msg.svc.0022") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0023") %></span> 
			<%= MessageUtil.getString("msg.svc.0024") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0025") %></span> 
			<%= MessageUtil.getString("msg.svc.0026") %>
			

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0027") %></span> 
			<%= MessageUtil.getString("msg.svc.0028") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0029") %></span> 
			<%= MessageUtil.getString("msg.svc.0030") %>

			<p class="ty01"><%= MessageUtil.getString("msg.svc.0031") %></p><br/>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0032") %></span> 
			<%= MessageUtil.getString("msg.svc.0033") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0034") %></span> 
			<%= MessageUtil.getString("msg.svc.0035") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0036") %></span> 
			<%= MessageUtil.getString("msg.svc.0037") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0038") %></span> 
			<%= MessageUtil.getString("msg.svc.0039") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0040") %></span> 
			<%= MessageUtil.getString("msg.svc.0041") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0042") %></span> 
			<%= MessageUtil.getString("msg.svc.0043") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0044") %></span> 
			<%= MessageUtil.getString("msg.svc.0045") %>

			<p class="ty01"><%= MessageUtil.getString("msg.svc.0046") %></p><br/>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0047") %></span> 
			<%= MessageUtil.getString("msg.svc.0048") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0049") %></span> 
			<%= MessageUtil.getString("msg.svc.0050") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0051") %></span> 
			<%= MessageUtil.getString("msg.svc.0052") %>

			<p class="ty01"><%= MessageUtil.getString("msg.svc.0053") %></p><br/>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0054") %></span> 
			<%= MessageUtil.getString("msg.svc.0055") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0056") %></span> 
			<%= MessageUtil.getString("msg.svc.0057") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0058") %></span> 
			<%= MessageUtil.getString("msg.svc.0059") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0060") %></span> 
			<%= MessageUtil.getString("msg.svc.0061") %>

			<span class="tx_c01"><%= MessageUtil.getString("msg.svc.0062") %></span> 
			<%= MessageUtil.getString("msg.svc.0063") %>

			<p class="ty01"><%= MessageUtil.getString("msg.svc.0064") %></p>
			<%= MessageUtil.getString("msg.svc.0065") %>

			<div class="board_wrap bg_line" style="margin:10px 0;">
				<table cellspacing="0" cellpadding="0" class="board_ft" summary='<%= MessageUtil.getString("msg.user.0065") %>'>
					<caption><%= MessageUtil.getString("msg.user.0066") %></caption>
					<colgroup>
					<col width="50%" />
					<col width="*" />
					</colgroup>
					<thead>
						<th><%= MessageUtil.getString("msg.svc.0066") %></th>
						<th><%= MessageUtil.getString("msg.svc.0067") %></th>
					</thead>
					<tbody>
						<tr>
							<td>
								<%= MessageUtil.getString("msg.svc.0068") %>
							</td>
							<td>
								<%= MessageUtil.getString("msg.svc.0069") %>
							</td>
						</tr>
					</tbody>
				</table>
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