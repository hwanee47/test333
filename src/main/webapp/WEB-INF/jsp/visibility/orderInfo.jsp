<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>
<!DOCTYPE html>

<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/visibility/css/order_common.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/visibility/css/flapper.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/rMateChart/rMateChartH5/Assets/Css/rMateChartH5.css"/>
	
	<!-- 날씨 -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/web/jsp/visibility/css/weather/css/weather-icons.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/web/jsp/visibility/css/weather/css/weather-icons-wind.css">
    
    
	<script language="javascript">
		var	CONTEXT_ROOT		= "${pageContext.request.contextPath}";
		var	CONTEXT_BASE_URL	= "${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}";
		
		// 다국어 처리
		var multiLang = {};
		multiLang["msg.0016"]	= '<%= MessageUtil.getString("msg.0016", "미매칭") %>';
		multiLang["msg.0026"]	= '<%= MessageUtil.getString("msg.0026", "전국") %>';
		multiLang["msg.0027"]	= '<%= MessageUtil.getString("msg.0027", "배차대기") %>';
		multiLang["msg.0028"]	= '<%= MessageUtil.getString("msg.0028", "2시간 임박") %>';
		multiLang["msg.0029"]	= '<%= MessageUtil.getString("msg.0029", "1시간 임박") %>';
		multiLang["msg.0030"]	= '<%= MessageUtil.getString("msg.0030", "배차지연") %>';
		multiLang["msg.0052"]	= '<%= MessageUtil.getString("msg.0052", "배차") %>';
		multiLang["msg.0065"]	= '<%= MessageUtil.getString("msg.0065", "주문") %>';
		multiLang["msg.0074"]	= '<%= MessageUtil.getString("msg.0075", "미배차") %>';
		multiLang["msg.0075"]	= '<%= MessageUtil.getString("msg.0075", "전체") %>';
		multiLang["msg.0077"]	= '<%= MessageUtil.getString("msg.0077", "상차지") %>';
		multiLang["msg.0078"]	= '<%= MessageUtil.getString("msg.0078", "하차지") %>';
		multiLang["msg.0085"]	= '<%= MessageUtil.getString("msg.0085", "공차") %>';
		multiLang["msg.0086"]	= '<%= MessageUtil.getString("msg.0086", "영차") %>';
		multiLang["msg.0087"]	= '<%= MessageUtil.getString("msg.0087", "완료") %>';
		multiLang["msg.0088"]	= '<%= MessageUtil.getString("msg.0088", "지연") %>';
		multiLang["msg.0089"]	= '<%= MessageUtil.getString("msg.0089", "운행중") %>';
		multiLang["msg.0092"]	= '<%= MessageUtil.getString("msg.0092", "실행거점") %>';
		multiLang["msg.0093"]	= '<%= MessageUtil.getString("msg.0093", "차량번호") %>';
		multiLang["msg.0098"]	= '<%= MessageUtil.getString("msg.0098", "고객명") %>';
		multiLang["msg.0101"]	= '<%= MessageUtil.getString("msg.0101", "차량정보") %>';
		
		multiLang["msg.0200"]	= '<%= MessageUtil.getString("msg.0200", "건") %>';
		multiLang["msg.0201"]	= '<%= MessageUtil.getString("msg.0201", "상태") %>';
		multiLang["msg.0202"]	= '<%= MessageUtil.getString("msg.0202", "차종") %>';
		multiLang["msg.0203"]	= '<%= MessageUtil.getString("msg.0203", "톤급") %>';
		multiLang["msg.0204"]	= '<%= MessageUtil.getString("msg.0204", "상차시간") %>';
		multiLang["msg.0205"]	= '<%= MessageUtil.getString("msg.0205", "하차시간") %>';
		multiLang["msg.0206"]	= '<%= MessageUtil.getString("msg.0206", "년") %>';
		multiLang["msg.0207"]	= '<%= MessageUtil.getString("msg.0207", "월") %>';
		multiLang["msg.0208"]	= '<%= MessageUtil.getString("msg.0208", "일") %>';
		multiLang["msg.0209"]	= '<%= MessageUtil.getString("msg.0209", "주문정보") %>';
		multiLang["msg.0210"]	= '<%= MessageUtil.getString("msg.0210", "주문시간") %>';
		multiLang["msg.0211"]	= '<%= MessageUtil.getString("msg.0211", "추천 주문 목록") %>';
		multiLang["msg.0212"]	= '<%= MessageUtil.getString("msg.0212", "추천 차량 목록") %>';
		multiLang["msg.0213"]	= '<%= MessageUtil.getString("msg.0213", "거리") %>';
		multiLang["msg.0214"]	= '<%= MessageUtil.getString("msg.0214", "상세보기") %>';
		multiLang["msg.0215"]	= '<%= MessageUtil.getString("msg.0215", "알고리즘 매칭률") %>';
		multiLang["msg.0216"]	= '<%= MessageUtil.getString("msg.0216", "매칭대상") %>';
		multiLang["msg.0217"]	= '<%= MessageUtil.getString("msg.0217", "매칭") %>';
		multiLang["msg.0218"]	= '<%= MessageUtil.getString("msg.0218", "매칭완료") %>';
		multiLang["msg.0219"]	= '<%= MessageUtil.getString("msg.0219", "매칭대상주문") %>';
		multiLang["msg.0220"]	= '<%= MessageUtil.getString("msg.0220", "복화추천목록") %>';
		multiLang["msg.0221"]	= '<%= MessageUtil.getString("msg.0220", "위수탁가동률") %>';
		multiLang["msg.0222"]	= '<%= MessageUtil.getString("msg.0220", "공차예정시간") %>';
		multiLang["msg.0223"]	= '<%= MessageUtil.getString("msg.0220", "하차지 분포") %>';
		multiLang["msg.0224"]	= '<%= MessageUtil.getString("msg.0220", "수도권") %>';
		multiLang["msg.0225"]	= '<%= MessageUtil.getString("msg.0220", "강원권") %>';
		multiLang["msg.0226"]	= '<%= MessageUtil.getString("msg.0220", "충청권") %>';
		multiLang["msg.0227"]	= '<%= MessageUtil.getString("msg.0220", "영남권") %>';
		multiLang["msg.0228"]	= '<%= MessageUtil.getString("msg.0220", "호남권") %>';
		multiLang["msg.0229"]	= '<%= MessageUtil.getString("msg.0229", "주요고객 (매출순)") %>';
		multiLang["msg.0230"]	= '<%= MessageUtil.getString("msg.0230", "수량") %>';
		multiLang["msg.0231"]	= '<%= MessageUtil.getString("msg.0231", "지사") %>';
		multiLang["msg.0232"]	= '<%= MessageUtil.getString("msg.0232", "주문 배차율") %>';
		multiLang["msg.0233"]	= '<%= MessageUtil.getString("msg.0233", "의 미배차 주문 하차지 분포") %>';
		multiLang["msg.0234"]	= '<%= MessageUtil.getString("msg.0234", "의 미배차 현황") %>';
		multiLang["msg.0235"]	= '<%= MessageUtil.getString("msg.0235", "지연 (분)") %>';
		multiLang["msg.0236"]	= '<%= MessageUtil.getString("msg.0236", "주변 차량 현황") %>';
		multiLang["msg.0237"]	= '<%= MessageUtil.getString("msg.0237", "상세보기") %>';
		multiLang["msg.0238"]	= '<%= MessageUtil.getString("msg.0238", "운행경로 보기") %>';
		multiLang["msg.0239"]	= '<%= MessageUtil.getString("msg.0239", "공차입니다") %>';
		multiLang["msg.0240"]	= '<%= MessageUtil.getString("msg.0240", "해당 주문이 미배차 목록에 없습니다") %>';
		
		// 스크립트에서 다국어 처리
		function lang(id, strDefault) {
			var	strLang		= multiLang["msg."+id];
			return (isNull(strLang))? strDefault : strLang;
		}
	</script>
	
	<!-- JQuery -->
	<script src="${pageContext.request.contextPath}/js/jquery.js"></script>
	<script src="${pageContext.request.contextPath}/web/js/jshashtable.js"></script>
	<script src="${pageContext.request.contextPath}/web/js/jquery.flapper.js"></script>
	
	<!-- Google Map 관련 라이센스 및 JS 파일 -->
	<script src="https://maps.googleapis.com/maps/api/js?client=gme-cjkoreaexpress&amp&region=KR"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/googleMap/control_main.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/googleMap/proj4js-combined.js"></script>
	
	<!-- rMate Chart -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/rMateChart/LicenseKey/rMateChartH5License.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/rMateChart/rMateChartH5/JS/rMateChartH5.js"></script>
	
	<!-- Visibility Script -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/js/sys/func.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/orderVariables.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/orderGmap.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/orderInfoData.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/orderInfo.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/orderChart.js"></script>

</head>

<body style="background:#2c2b2e;">

<div class="wrapper">
	<!-- 좌측 지도 영역 -->
	<div class="map_box_l">
		<div id="gmap" style="height:941px;"></div>

		<div class="map_layer01 ty02">
			<a href="#" class="btn_open_info"></a>

			<div class="board_wrap">
				<table style="border:3px solid #5af" cellspacing="0" cellpadding="0" class="board_common" summary="주문 아이콘에 대한 범례 테이블입니다.">
					<caption></caption>
					<colgroup>
						<col width="50px" />
						<col width="*" />
					</colgroup>
					<tbody id="remarkBody">
						<tr>
							<th colspan="2"><%= MessageUtil.getString("msg.0026", "전국") %> (<f>0</f>)</th>
						</tr>
						<tr>
							<td class="dot_lightgreen"></td>
							<td class="tx_l">배차대기 (<f>0</f>)</td>
						</tr>
						<tr>
							<td class="dot_green"></td>
							<td class="tx_l"><%= MessageUtil.getString("msg.0028", "2시간 임박") %> (<f>0</f>)</td>
						</tr>
						<tr>
							<td class="dot_orange"></td>
							<td class="tx_l"><%= MessageUtil.getString("msg.0029", "1시간 임박") %> (<f>0</f>)</td>
						</tr>
						<tr>
							<td class="dot_red"></td>
							<td class="tx_l"><%= MessageUtil.getString("msg.0030", "배차지연") %> (<f>0</f>)</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div id="shprList" class="board_wrap btm_info" style="">
				<table cellspacing="0" cellpadding="0" class="board_common" summary="미배차 고객 목록으로서 고객명, 수량,지사의 항목으로 구성되어 있습니다.">
					<caption>미배차 고객 목록</caption>
					<colgroup>
					<col width="45%" />
					<col width="22%" />
					<col width="*" />
					</colgroup>
					<thead>
						<tr>
							<th colspan="3"><%= MessageUtil.getString("msg.0229","주요고객 (매출순)") %></th>
						</tr>
						<tr>
							<th><%= MessageUtil.getString("msg.0098", "고객명") %></th>
							<th><%= MessageUtil.getString("msg.0230","수량") %></th>
							<th><%= MessageUtil.getString("msg.0231","지사") %></th>
						</tr>
					</thead>
					<tbody style="cursor:pointer">
					<!-- 
						<tr>
							<td>신우산업</td>
							<td>24</td>
							<td>대전</td>
						</tr>
						<tr>
							<td>신우산업</td>
							<td>24</td>
							<td>대전</td>
						</tr>
					 -->
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<!-- //좌측 지도 영역 -->
	
	
	<!-- 우측 정보 영역 -->
	<div class="info_box_r">
		<div class="top_info_box01">
			<!-- 날씨 -->
			<div class="wh_bx">
				<i class=""></i>
				<p><span></span>℃</p>
			</div>
			<!-- //날씨 -->		
			<p class="date"></p>
			<p class="time"></p>
			<div class="tx_info01">
				<table>
					<tr>
						<td width="200px" class="tx01"><span style="color:yellow; font-weight:bold;"><%= MessageUtil.getString("msg.0026", "전국") %></span><br /><span><%= MessageUtil.getString("msg.0232","주문 배차율") %></span></td>
						<td class="tx02"><b>0</b><span>%</span></td>
					</tr>
				</table>
				
			<!-- 	<div class="tx01">
					<span>전국</span><br />
					<span>위수탁 가동률</span>
				</div>				
				<div >00<span>%</span></div>-->
			</div>
		</div>
		

		<div class="in_bx_r01">

			<!-- 거점별 그래프 영역 -->
			<div id="baseCorpArea" class="board_wrap">
				<table cellspacing="0" cellpadding="0" class="board_common" summary="배차율 테이블로 수도권, 강원권, 충청권, 영남권, 호남권의 항목으로 구성되어 있습니다.">
					<caption>배차율</caption>
					<colgroup>
					<col width="25%" />
					<col width="25%" />
					<col width="25%" />
					<col width="25%" />
					</colgroup>
					<tbody id="baseCorpChartBody">
					<!-- 
						<tr>
							<th>서울지사</th>
							<th>경기지사</th>
							<th>동해지사</th>
							<th>강원지사</th>
						</tr>
						<tr>
							<td></td>
							<td></td>
							<td></td>
							<td></td>
						</tr>
					-->
					</tbody>
				</table>
			</div>
			<!-- //거점별 그래프 영역 -->
			

			<!-- 거점(고객)별 주문 현황 -->
			<div id="orderList" class="in_bx_r01 p_rl01" style="display:none">
				<p class="s_tit"><span></span><b>***</b><%= MessageUtil.getString("msg.0233","의 미배차 주문 하차지 분포") %></p>
				<!-- 테이블 영역 -->
				<div class="board_wrap">
					<table cellspacing="0" cellpadding="0" class="board_common05" summary="거점별 또는 고객별 미배차 주문의 하차지 분포 테이블로 수도권, 강원권, 충청권, 영남권, 호남권의 항목으로 구성되어 있습니다.">
						<caption>거점(고객)별 미배차 주문의 하차지 분포</caption>
						<colgroup>
						<col width="20%" />
						<col width="20%" />
						<col width="20%" />
						<col width="20%" />
						<col width="20%" />
						</colgroup>
						<thead>
							<tr>
								<th><%= MessageUtil.getString("msg.0224","수도권") %></th>
								<th><%= MessageUtil.getString("msg.0225","강원권") %></th>
								<th><%= MessageUtil.getString("msg.0226","충청권") %></th>
								<th><%= MessageUtil.getString("msg.0227","영남권") %></th>
								<th><%= MessageUtil.getString("msg.0228","호남권") %></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td id="regionCnt_R01"></td>
								<td id="regionCnt_R02"></td>
								<td id="regionCnt_R05"></td>
								<td id="regionCnt_R04"></td>
								<td id="regionCnt_R03"></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //테이블 영역 -->
	
				<div class="p_rl01">
					<p class="s_tit"><span></span><b>***</b><%= MessageUtil.getString("msg.0234","의 미배차 현황") %></p>
					<!-- 테이블 영역 -->
					<div class="board_wrap">
						<table cellspacing="0" cellpadding="0" class="board_common05" summary="거점별 또는 고객별 미배차 현황 테이블로 수도권, 강원권, 충청권, 영남권, 호남권의 항목으로 구성되어 있습니다.">
							<caption>고객의 미배차 현황</caption>
							<colgroup>
							<col width="70px" />
							<col width="70px" />
							<col width="*" />
							<col width="180px" />
							<col width="120px" />
							</colgroup>
							<thead>
								<tr>
									<th>No</th>
									<th></th>
									<th><%= MessageUtil.getString("msg.0098", "고객명") %></th>
									<th><%= MessageUtil.getString("msg.0204","상차시간") %></th>
									<th><%= MessageUtil.getString("msg.0235","지연 (분)") %></th>
								</tr>
							</thead>							
							<tbody id="orderListBody">
							<!-- 
								<tr>
									<td rowspan=2>1</td>
									<td rowspan=2>**</td>
									<td>신우산업</td>
									<td>09:00</td>
									<td>25</td>
								</tr>
								<tr>
									<td colspan=3>
										<span>경기도 성남시</span> ▶▶ <span>대전 유성구</span>
									</td>
								</tr>
							 -->
							</tbody>
						</table>
					</div>
					<!-- //테이블 영역 -->
				</div>
			</div>
			<!-- 거점(고객)별 주문 현황 -->
		

			<!-- 주문 주변 차량 현황 -->
			<div id="vhclListByOrder" class="in_bx_r01 p_rl01" style="display:none">
				<p class="s_tit"><span></span><b>***</b> <%= MessageUtil.getString("msg.0209","주문정보") %></p>
				<!-- 테이블 영역 -->
				<div class="board_wrap">
					<table cellspacing="0" cellpadding="0" class="board_common05" summary="주문정보 테이블로 고객명, 주문시간, 상차지, 지연, 하차지, 시간, 예정시간의 항목으로 구성되어 있습니다.">
						<caption>주문정보</caption>
						<colgroup>
						<col width="50px" />
						<col width="*" />
						<col width="100px" />
						<col width="180px" />
						<col width="80px" />
						<col width="180px" />
						</colgroup>
						<thead>
							<tr>
								<th style="border-right:1px solid #171616"><%= MessageUtil.getString("msg.0201","상태") %></th>
								<th><%= MessageUtil.getString("msg.0098", "고객명") %></th>
								<th><%= MessageUtil.getString("msg.0210", "주문시간") %></th>
								<th><%= MessageUtil.getString("msg.0077", "상차지") %></th>
								<th><%= MessageUtil.getString("msg.0088", "지연") %></th>
								<th><%= MessageUtil.getString("msg.0078", "하차지") %></th>
							</tr>
						</thead>
						<tbody>
							<tr height="60px">
								<td style="border-right:1px solid #171616"><img src="${pageContext.request.contextPath}/web/jsp/visibility/img/dot-green.png"/></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //테이블 영역 -->
	
				<p class="s_tit"><span></span><b>***</b> <%= MessageUtil.getString("msg.0236","주변 차량 현황") %></p>
				<!-- 테이블 영역 -->
				<div class="board_wrap">
					<table cellspacing="0" cellpadding="0" class="board_common05" summary="주변 차량 현황 테이블로 No, 차량번호, 차량정보, 목적지, 남은시간, 남은거리의 항목으로 구성되어 있습니다.">
						<caption>주변 차량 현황</caption>
						<colgroup>
						<col width="50px" />
						<col width="50px" />
						<col width="*" />
						<col width="250px" />
						<col width="120px" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th></th>
								<th><%= MessageUtil.getString("msg.0093", "차량번호") %></th>
								<th><%= MessageUtil.getString("msg.0101", "차량정보") %></th>
								<th><%= MessageUtil.getString("msg.0213", "거리") %> (Km)</th>
							</tr>
						</thead>
						<tbody id="nearVhclListBody">
						<!-- 
							<tr>
								<td>1</td>
								<td><img src="img/car-sel-VHCL_MOV_UP.png" alt="하차지 이동 차량" class="icon_ty01" /></td>
								<td>경기00버0000</td>
								<td>카고/10</td>
								<td>01</td>
							</tr>
						 -->
						</tbody>
					</table>
				</div>
				<!-- //테이블 영역 -->
			</div>			

			<!-- 주문 주변 차량 현황 -->

		</div>
		
	<!-- //우측 정보 영역 -->
</div>

</body>
</html>