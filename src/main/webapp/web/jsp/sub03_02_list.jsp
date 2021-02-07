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
					<li><a href="sub03_02_list.jsp" class="on"><%= MessageUtil.getString("msg_cust_0002", "전국 지사 안내") %></a></li>
					<li class="last"><a href="sub03_03_list.jsp"><%= MessageUtil.getString("msg_cust_0003", "공지사항") %></a></li>
				</ul>
			</div>
			<!-- //tab-->

			<!-- <div class="tab_customer02">
				<ul>
					<li class="active"><p>전체</p></li>
					<li><p>수도권</p></li>
					<li><p>강원권</p></li>
					<li><p>호남권</p></li>
					<li><p>영남권</p></li>
					<li class="last"><p>충청권</p></li>
				</ul>
			</div> -->

			<!-- list -->
			<div class="board_wrap bg_line">
				<table cellspacing="0" cellpadding="0" class="board_store" summary='<%= MessageUtil.getString("msg.comp.0001") %>'>
					<caption><%= MessageUtil.getString("msg.0075", "전체") %></caption>
					<colgroup>
					<col width="150" />
					<col width="*" />
					<col width="150" />
					<col width="150" />
					</colgroup>
					<thead>
					<tr>
						<th><%= MessageUtil.getString("msg.comp.0002", "지사명") %></th>
						<th><%= MessageUtil.getString("msg.web.0123", "주소") %></th>
						<th><%= MessageUtil.getString("msg.web.0062", "연락처") %></th>
						<th>FAX</th>
					</tr>
					</thead>
					<tbody>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0003", "서울지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0004", "경기도 김포시 고촌읍 아라육로20") %></td>
							<td>02-310-2732</td>
							<td>031-986-9642</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0005", "경기지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0006", "경기도 용인시 기흥구 원고매로2번길29(고매동)") %></td>
							<td>031-547-1392</td>
							<td>031-285-6698</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0007", "동해지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0008", "강원도 동해시 용정로171(용정동)") %></td>
							<td>033-648-9121</td>
							<td>033-533-3124</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0009", "강원지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0010", "강원도 원주시 원문로898") %></td>
							<td>033-738-7403</td>
							<td>033-747-2898</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0011", "인천지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0012", "인천광역시 중구 서해대로353(항동7가)") %></td>
							<td>031-432-9296</td>
							<td>032-747-3599</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0013", "평택지사") %></td>	
							<td class="title01"><%= MessageUtil.getString("msg.comp.0014", "경기도 평택시 포승읍 평택항만길86") %></td>
							<td>031-895-2516</td>
							<td>031-681-1336</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0015", "충남지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0016", "충청남도 서산시 대산읍 대죽1로413") %></td>
							<td>041-850-1902</td>
							<td>041-681-6895</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0017", "군산지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0018", "전라북도 군산시 서해로194(소룡동)") %></td>
							<td>063-460-7073</td>
							<td>063-460-7080</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0019", "전북지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0020", "전라북도 전주시 덕진구 팔복로173(팔복동3가)") %></td>	
							<td>063-212-0255</td>
							<td>063-212-2345</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0021", "대전지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0022", "대전광역시 대덕구 신탄진로1(읍내동)") %></td>
							<td>042-717-1335</td>
							<td>042-717-1119</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0023", "충북지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0024", "충청북도 청주시 흥덕구 사운로375(신봉동)") %></td>
							<td>043-279-6904</td>
							<td>043-268-5164</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0025", "광양지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0026", "전라남도 광양시 태인4길33") %></td>
							<td>061-797-5032</td>
							<td>061-797-5039</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0027", "광주지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0028", "광주광역시 남구 송암로114(송하동)") %></td>
							<td>062-670-3542</td>
							<td>062-675-4736</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0029", "목포지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0030", "전라남도 영암군 삼호읍 대불역로39") %></td>
							<td>061-469-2442</td>
							<td>061-469-2449</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0031", "제주지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0032", "제주특별자치도 제주시 임항로97(건입동)") %></td>
							<td>064-740-3962</td>
							<td>064-752-3911</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0033", "포항지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0034", "경상북도 포항시 남구 섬안로59(괴동동)") %></td>
							<td>054-288-1253</td>
							<td>054-288-1288</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0035", "울산지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0036", "울산광역시 남구 장생포고래로292(매암동)") %></td>
							<td>052-226-3354</td>
							<td>052-261-7779</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0037", "대구지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0038", "대구광역시 달서구 성서공단로235(장동)") %></td>
							<td>053-211-3825</td>
							<td>053-581-8260</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0039", "창원지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0040", "경상남도 창원시 마산합포구 해안대로234(신포동1가)") %></td>
							<td>055-249-8276</td>
							<td>055-264-3243</td>
						</tr>
						<tr>
							<td class="name">P&D) <%= MessageUtil.getString("msg.comp.0041", "부산지사") %></td>
							<td class="title01"><%= MessageUtil.getString("msg.comp.0042", "부산광역시 중구 대교로119 CJ대한통운빌딩7층(중앙동)") %></td>
							<td>051-719-5020</td>
							<td>051-796-5401</td>
						</tr>
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