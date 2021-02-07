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
		multiLang["msg.0073"]	= '<%= MessageUtil.getString("msg.0073", "추천") %>';
		multiLang["msg.0074"]	= '<%= MessageUtil.getString("msg.0074", "미배차") %>';
		multiLang["msg.0077"]	= '<%= MessageUtil.getString("msg.0077", "상차지") %>';
		multiLang["msg.0078"]	= '<%= MessageUtil.getString("msg.0078", "하차지") %>';
		multiLang["msg.0081"]	= '<%= MessageUtil.getString("msg.0081", "배차확정") %>';
		multiLang["msg.0082"]	= '<%= MessageUtil.getString("msg.0082", "수송중") %>';
		multiLang["msg.0083"]	= '<%= MessageUtil.getString("msg.0083", "하차지도착") %>';
		multiLang["msg.0084"]	= '<%= MessageUtil.getString("msg.0084", "하차완료") %>';
		multiLang["msg.0093"]	= '<%= MessageUtil.getString("msg.0093", "차량번호") %>';
		multiLang["msg.0098"]	= '<%= MessageUtil.getString("msg.0098", "고객명") %>';
		multiLang["msg.0101"]	= '<%= MessageUtil.getString("msg.0101", "차량정보") %>';
		
		multiLang["msg.0200"]	= '<%= MessageUtil.getString("msg.0200","건") %>';
		multiLang["msg.0201"]	= '<%= MessageUtil.getString("msg.0201","상태") %>';
		multiLang["msg.0202"]	= '<%= MessageUtil.getString("msg.0202","차종") %>';
		multiLang["msg.0203"]	= '<%= MessageUtil.getString("msg.0203","톤급") %>';
		multiLang["msg.0204"]	= '<%= MessageUtil.getString("msg.0204","상차시간") %>';
		multiLang["msg.0205"]	= '<%= MessageUtil.getString("msg.0205","하차시간") %>';
		multiLang["msg.0206"]	= '<%= MessageUtil.getString("msg.0206","년") %>';
		multiLang["msg.0207"]	= '<%= MessageUtil.getString("msg.0207","월") %>';
		multiLang["msg.0208"]	= '<%= MessageUtil.getString("msg.0208","일") %>';
		multiLang["msg.0212"]	= '<%= MessageUtil.getString("msg.0212","추천 차량 목록") %>';
		multiLang["msg.0213"]	= '<%= MessageUtil.getString("msg.0213","거리") %>';
		multiLang["msg.0214"]	= '<%= MessageUtil.getString("msg.0214","상세보기") %>';
		
		
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
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/recommandVhclInfo.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/recommandVhclVariables.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/recommandVhclGmap.js"></script>

</head>

<body style="background:#2c2b2e;">

<div class="wrapper">
	<!-- 좌측 지도 영역 -->
	<div class="map_box_l">
		<div id="gmap" style="height:941px;"></div>
	</div>
	<!-- //좌측 지도 영역 -->
	
	
	<!-- 우측 정보 영역 -->
	<div class="info_box_r">
		<div class="top_info_box01">
			<div class="tx_info01">
				<table>
					<tr>
						<td width="200px" class="tx01"><span style="color:yellow; font-weight:bold;"></span><br /><span><%= MessageUtil.getString("msg.0073", "추천") %></span></td>
						<td class="tx02"><b>0</b><span><%= MessageUtil.getString("msg.0200","건") %></span></td>
					</tr>
				</table>
			</div>
		</div>
		

		<div class="in_bx_r01">
			<!-- 주문 주변 차량 현황 -->
			<div id="vhclListByOrder" class="in_bx_r01 p_rl01" style="">
				<p class="s_tit"><span></span><b><%= MessageUtil.getString("msg.0209", "주문정보") %></p>
				<!-- 테이블 영역 -->
				<div class="board_wrap">
					<table cellspacing="0" cellpadding="0" class="board_common05" summary="주문정보 테이블로 고객명, 주문시간, 상차지, 지연, 하차지, 시간, 예정시간의 항목으로 구성되어 있습니다.">
						<caption>주문정보</caption>
						<colgroup>
						<col width="*" />
						<col width="100px" />
						<col width="250px" />
						<col width="250px" />
						</colgroup>
						<thead>
							<tr>
								<th><%= MessageUtil.getString("msg.0098", "고객명") %></th>
								<th><%= MessageUtil.getString("msg.0098", "주문시간") %></th>
								<th><%= MessageUtil.getString("msg.0077", "상차지") %></th>
								<th><%= MessageUtil.getString("msg.0078", "하차지") %></th>
							</tr>
						</thead>
						<tbody>
							<tr height="60px">
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //테이블 영역 -->
	
				<p class="s_tit"><span></span><b><%= MessageUtil.getString("msg.0212", "추천 차량 목록") %></b> <b  onclick="onNextPage();">&nbsp;&nbsp;&nbsp;Next page ▶▶</b></p>
				<!-- 테이블 영역 -->
				<div class="board_wrap">
					<table cellspacing="0" cellpadding="0" class="board_common05" summary="주변 차량 현황 테이블로 No, 차량번호, 차량정보, 목적지, 남은시간, 남은거리의 항목으로 구성되어 있습니다.">
						<caption>추천 차량 목록</caption>
						<colgroup>
						<col width="80px" />
						<col width="80px" />
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
								<th><%= MessageUtil.getString("msg.0213", "거리") %> (KM)</th>
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
		
	</div>
	<!-- //우측 정보 영역 -->
</div>

</body>
</html>