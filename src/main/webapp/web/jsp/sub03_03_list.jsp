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
					<li><a href="sub03_01.jsp">FAQ</a></li>
					<li><a href="sub03_02_list.jsp"><%= MessageUtil.getString("msg_cust_0002", "전국 지사 안내") %></a></li>
					<li class="last"><a href="sub03_03_list.jsp" class="on"><%= MessageUtil.getString("msg_cust_0003", "공지사항") %></a></li>
				</ul>
			</div>
			<!-- //tab-->

			<!-- list -->
			<div class="board_wrap bg_line">
				<table cellspacing="0" cellpadding="0" class="board_notice" summary='<%= MessageUtil.getString("msg.noties.0001") %>'>
					<caption><%= MessageUtil.getString("msg_cust_0003", "공지사항") %></caption>
					<colgroup>
					<col width="105" />
					<col width="*" />
					<col width="135" />
					</colgroup>
					<thead>
					<tr>
						<th><%= MessageUtil.getString("msg.noties.0002", "번호") %></th>
						<th><%= MessageUtil.getString("msg.noties.0003", "제목") %></th>
						<th><%= MessageUtil.getString("msg.noties.0004", "작성일") %></th>
					</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="3">
								<div style="font-family:'NSKM'; font-size:18px; color:#333; padding:150px 0; text-align:center;"><%= MessageUtil.getString("msg.noties.0005", "등록된 게시글이 없습니다.") %></div>
							</td>
						</tr>
						<!-- <tr>
							<td>999</td>
							<td class="title01"><a href="sub03_03_view.jsp">cj대한통운 택배정보시스템 정기점검 안내</a> <img src="../img/icon_new.png" alt="new" class="icon_new" /></td>
							<td>2017-07-17</td>
						</tr>
						<tr>
							<td>999</td>
							<td class="title01"><a href="sub03_03_view.jsp">cj대한통운 택배정보시스템 정기점검 안내</a></td>
							<td>2017-07-17</td>
						</tr>
						<tr>
							<td>999</td>
							<td class="title01"><a href="sub03_03_view.jsp">cj대한통운 택배정보시스템 정기점검 안내</a></td>
							<td>2017-07-17</td>
						</tr>
						<tr>
							<td>999</td>
							<td class="title01"><a href="sub03_03_view.jsp">cj대한통운 택배정보시스템 정기점검 안내</a></td>
							<td>2017-07-17</td>
						</tr>
						<tr>
							<td>999</td>
							<td class="title01"><a href="sub03_03_view.jsp">cj대한통운 택배정보시스템 정기점검 안내</a></td>
							<td>2017-07-17</td>
						</tr>
						<tr>
							<td>999</td>
							<td class="title01"><a href="sub03_03_view.jsp">cj대한통운 택배정보시스템 정기점검 안내</a></td>
							<td>2017-07-17</td>
						</tr>
						<tr>
							<td>999</td>
							<td class="title01"><a href="sub03_03_view.jsp">cj대한통운 택배정보시스템 정기점검 안내</a></td>
							<td>2017-07-17</td>
						</tr> -->
					</tbody>
				</table>
			</div>
			<!-- //list -->

			<!-- pageing
			<div class="paginationS">
				<div class="pageing">
					<span><a href="#" class="btn_arr"><img src="../img/btn_prev.png" alt="이전"></a></span>
					<span class="numbering"><a href="#">1</a><strong>2</strong><a href="#">3</a><a href="#">4</a><a href="#">5</a><a href="#">6</a><a href="#">7</a><a href="#">8</a><a href="#">9</a><a href="#">10</a></span>
					<span><a href="#" class="btn_arr"><img src="../img/btn_next.png" alt="다음"></a></span>
				</div>
			</div>
			//pageing -->
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