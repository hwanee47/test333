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
		multiLang["msg.0073"]	= '<%= MessageUtil.getString("msg.0200", "추천") %>';
		multiLang["msg.0077"]	= '<%= MessageUtil.getString("msg.0077", "상차지") %>';
		multiLang["msg.0078"]	= '<%= MessageUtil.getString("msg.0078", "하차지") %>';
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
		multiLang["msg.0211"]	= '<%= MessageUtil.getString("msg.0211","추천 주문 목록") %>';
		
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
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/recommandOrderInfo.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/recommandOrderVariables.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/recommandOrderGmap.js"></script>

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
						<td class="tx02"><b>0</b><span><%= MessageUtil.getString("msg.0200", "건") %></span></td>
					</tr>
				</table>
			</div>
		</div>
		

		<div class="in_bx_r01">
			<!-- 주문 주변 차량 현황 -->
			<div id="vhclListByOrder" class="in_bx_r01 p_rl01" style="">
				<p class="s_tit"><span></span><b><%= MessageUtil.getString("msg.0101", "차량정보") %></p>
				<!-- 테이블 영역 -->
				<div class="board_wrap">
					<table cellspacing="0" cellpadding="0" class="board_common05" summary="차량정보 테이블입니다.">
						<caption>차량정보</caption>
						<colgroup>
						<col width="*" />
						<col width="100px" />
						<col width="150px" />
						<col width="150px" />
						<col width="150px" />
						</colgroup>
						<thead>
							<tr>
								<th><%= MessageUtil.getString("msg.0093", "차량번호") %></th>
								<th><%= MessageUtil.getString("msg.0201", "상태") %></th>
								<th><%= MessageUtil.getString("msg.0201", "차종") %>/<%= MessageUtil.getString("msg.0203", "톤급") %></th>
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
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //테이블 영역 -->
	
				<p class="s_tit"><span></span><b><%= MessageUtil.getString("msg.0211", "추천 주문 목록") %></b> <b  onclick="onNextPage();" style="cursor:pointer">&nbsp;&nbsp;&nbsp;Next page ▶▶</b></p>
				<!-- 테이블 영역 -->
				<div class="board_wrap">
					<table cellspacing="0" cellpadding="0" class="board_common05" summary="주변 주문 목록 테이블입니다.">
						<caption>추천 주문 목록</caption>
						<colgroup>
						<col width="70px" />
						<col width="*px" />
						<col width="200px" />
						<col width="200px" />
						<col width="120px" />
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th><%= MessageUtil.getString("msg.0098", "고객명") %></th>
								<th><%= MessageUtil.getString("msg.0204", "상차시간") %></th>
								<th><%= MessageUtil.getString("msg.0205", "하차시간") %></th>
								<th><%= MessageUtil.getString("msg.0201", "차종") %>/<%= MessageUtil.getString("msg.0203", "톤급") %></th>
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

			<!-- 주문 주변 차량 현황 -->

		</div>
		
	</div>
	<!-- //우측 정보 영역 -->
</div>

</body>
</html>