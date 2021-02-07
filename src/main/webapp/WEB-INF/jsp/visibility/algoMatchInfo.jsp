<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>
<!DOCTYPE html>

<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/visibility/css/algoMatch_common.css" />
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
		multiLang["msg.0052"]	= '<%= MessageUtil.getString("msg.0052", "배차") %>';
		multiLang["msg.0065"]	= '<%= MessageUtil.getString("msg.0065", "주문") %>';
		multiLang["msg.0077"]	= '<%= MessageUtil.getString("msg.0077", "상차지") %>';
		multiLang["msg.0078"]	= '<%= MessageUtil.getString("msg.0078", "하차지") %>';
		multiLang["msg.0085"]	= '<%= MessageUtil.getString("msg.0085", "공차") %>';
		multiLang["msg.0092"]	= '<%= MessageUtil.getString("msg.0092", "실행거점") %>';
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
		multiLang["msg.0209"]	= '<%= MessageUtil.getString("msg.0209","주문정보") %>';
		multiLang["msg.0210"]	= '<%= MessageUtil.getString("msg.0210","주문시간") %>';
		multiLang["msg.0211"]	= '<%= MessageUtil.getString("msg.0211","추천 주문 목록") %>';
		multiLang["msg.0212"]	= '<%= MessageUtil.getString("msg.0212","추천 차량 목록") %>';
		multiLang["msg.0213"]	= '<%= MessageUtil.getString("msg.0213","거리") %>';
		multiLang["msg.0214"]	= '<%= MessageUtil.getString("msg.0214","상세보기") %>';
		multiLang["msg.0215"]	= '<%= MessageUtil.getString("msg.0215","알고리즘 매칭률") %>';
		multiLang["msg.0216"]	= '<%= MessageUtil.getString("msg.0216","매칭대상") %>';
		multiLang["msg.0217"]	= '<%= MessageUtil.getString("msg.0217","매칭") %>';
		multiLang["msg.0218"]	= '<%= MessageUtil.getString("msg.0218","매칭완료") %>';
		multiLang["msg.0219"]	= '<%= MessageUtil.getString("msg.0219","매칭대상주문") %>';
		multiLang["msg.0220"]	= '<%= MessageUtil.getString("msg.0220","복화추천목록") %>';
		
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
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/algoMatchVariables.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/algoMatchGmap.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/algoMatchInfoData.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/visibility/js/algoMatchInfo.js"></script>
</head>

<body style="background:#2c2b2e;">

<div class="wrapper">
	<!-- 좌측 지도 영역 -->
	<div class="map_box_l">
		<div id="gmap" style="height:941px;"></div>

		<div class="map_layer01 ty02">
			<div class="board_wrap">
				<table style="border:3px solid #5af" cellspacing="0" cellpadding="0" class="board_common" summary="주문 아이콘에 대한 범례 테이블입니다.">
					<caption></caption>
					<colgroup>
						<col width="50px" />
						<col width="*" />
					</colgroup>
					<tbody id="remarkBody">
						<tr>
							<td class="dot_white"></td>
							<td class="tx_l"><%= MessageUtil.getString("msg.0016", "미매칭") %></td>
						</tr>
						<tr>
							<td class="dot_red"></td>
							<td class="tx_l">1<%= MessageUtil.getString("msg.0065", "주문") %></td>
						</tr>
						<tr>
							<td class="dot_green"></td>
							<td class="tx_l">2<%= MessageUtil.getString("msg.0065", "주문") %></td>
						</tr>
						<tr>
							<td colspan="2">&nbsp;</td>
						</tr>
						<tr>
							<td class="arrow_blue"></td>
							<td class="tx_l">1<%= MessageUtil.getString("msg.0052", "배차") %></td>
						</tr>
						<tr>
							<td class="arrow_gray"></td>
							<td class="tx_l"><%= MessageUtil.getString("msg.0085", "공차") %></td>
						</tr>
						<tr>
							<td class="arrow_red"></td>
							<td class="tx_l">2<%= MessageUtil.getString("msg.0052", "배차") %></td>
						</tr>
					</tbody>
				</table>
			</div>
			
		</div>
	</div>
	<!-- //좌측 지도 영역 -->
	
	
	<!-- 우측 정보 영역 -->
	<div class="info_box_r">
		<div class="top_info_box01">
			<!-- 엔진호출 이력 -->
			<div class="wh_bx">
				<i width="150px">CALL ID : </i><input type="text" id="engineCallId" value=""/> <input type="button" id="btnSearch" value="SEARCH"></input>
				<select id="engineCallHist" name="job"></select>
			</div>
			<div class="tx_info01">
				<table>
					<tr>
						<td width="400px" class="tx01"><span style="color:yellow; font-weight:bold;"><%= MessageUtil.getString("msg.0215", "알고리즘 매칭률") %></span></td>
						<td rowspan="2" class="tx02"><b id="matchRate">0</b><span>%</span></td>
					</tr>
					<tr>
						<td class="tx01"><span><%= MessageUtil.getString("msg.0216", "매칭대상") %> : <b id="matchOrdCnt"></b>&nbsp;&nbsp;&nbsp;<%= MessageUtil.getString("msg.0217", "매칭") %> : <b id="matchCnt"></b></span></td>
					</tr>
				</table>
			</div>
		</div>
		
		<!-- 알고리즘 매칭 주문 목록 -->
		<div id="algoMatchOrdList" style="background:#2c2b2e;">
			<!-- tab-->
			<div class="tab_customer">
				<ul>
					<li><a href="javascript:onTabSelected(0)"><%= MessageUtil.getString("msg.0218", "매칭완료") %></a></li>
					<li class="last"><a href="javascript:onTabSelected(1)"><%= MessageUtil.getString("msg.0219", "매칭대상주문") %></a></li>
				</ul>
				<span class="nextpage" onclick="onNextPage()">▶▶ NEXT PAGE ▶▶</span>
			</div>
			<!-- //tab-->
			
			<!-- 매칭완료 목록 영역 -->
			<div id="algoMatchList" class="in_bx_r01">
				<div class="board_wrap">
					<table class="board_common01" summary="알고리즘 매칭 목록">
						<caption>알고리즘 매칭 목록</caption>
						<colgroup>
							<col width="50px" />
							<col width="375px" />
							<col width="*" />
							<col width="375px" />
						</colgroup>
						<tbody id="algoMatchListBody">
							<!-- 
							<tr>
								<td rowspan=2 class="title">1</td>
								<td colspan=3 class="title">배차완료 (강원89버3456)</td>
							</tr>
							<tr>
								<td>
									<div class="path_div" style="height:70px">
										<div class="ord">[1배차] 신무림제지 / 카고 2.5</div>
										<div class="top">
											<div class="sub1">강원도 홍천군<br>(08:00)</div>
											<div class="arrow">→</div>
											<div class="sub2">경상북도 청송군<br>(12:30)</div>
										</div>
									</div>
								</td>
								<td style="text-align:center; vertical-align:middle;">▶</td>
								<td>
									<div class="path_div" style="height:70px">
										<div class="ord">[2배차] 신무림제지 / 카고 2.5</div>
										<div class="top">
											<div class="sub1">강원도 홍천군<br>(08:00)</div>
											<div class="arrow">→</div>
											<div class="sub2">경상북도 청송군<br>(12:30)</div>
										</div>
									</div>
								</td>
							</tr>
							-->
						</tbody>
					</table>
				</div>
			</div>
			<!-- 매칭완료 목록 영역 -->
			
			<!-- 매칭대상주문 목록 영역 -->
			<div id="algoOrdList" class="in_bx_r01">
				<div class="board_wrap">
					<table class="board_common02" summary="알고리즘 매칭 대상 주문 목록">
						<caption>알고리즘 매칭 대상 주문 목록</caption>
						<colgroup>
							<col width="50px" />
							<col width="200px" />
							<col width="*" />
							<col width="150px" />
							<col width="100px" />
						</colgroup>
						<thead>
							<tr>
								<th>Ship.</th>
								<th><%= MessageUtil.getString("msg.0092", "실행거점") %></th>
								<th><%= MessageUtil.getString("msg.0098", "고객명") %></th>
								<th><%= MessageUtil.getString("msg.0101", "차량정보") %></th>
								<th><%= MessageUtil.getString("msg.0201","상태") %></th>
							</tr>
						</thead>
						<tbody id="algoOrdListBody">
							<!--
							<tr class="title">
								<td rowspan=2>1</td>
								<td>P&D)서울지사.서울</td>
								<td>신무림제지</td>
								<td>카고 2.5</td>
								<td>배차완료</td>
							</tr>
							<tr>
								<td colspan=4>
									<div class="path_div" style="height:40px">
										<div class="top">
											<div class="sub1">강원도 홍천군 (08:00)</div>
											<div class="arrow">→</div>
											<div class="sub2">경상북도 청송군 (12:30)</div>
										</div>
									</div>
								</td>							
							</tr>
							-->
						</tbody>
					</table>
				</div>
			</div>
			<!-- 매칭대상주문 목록 영역 -->
		</div>
		<!-- 알고리즘 매칭 주문 목록 -->
		
		
		<!-- 추천목록 -->
		<div id="algoRecommandList" style="background:#2c2b2e;">
			<!-- tab-->
			<div class="tab_customer">
				<ul>
					<li class="last"><a href="javascript:onTabSelected(2)" class="on"><%= MessageUtil.getString("msg.0220","복화추천목록") %></a></li>
				</ul>
				<span class="nextpage" onclick="onNextPage()">▶▶ NEXT PAGE ▶▶</span>
			</div>
			<!-- //tab-->
			
			<!-- 목록 -->
			<div class="in_bx_r01">
				<div class="board_wrap">
					<table class="board_common01" summary="알고리즘 매칭 목록">
						<caption>알고리즘 매칭 목록</caption>
						<colgroup>
							<col width="50px" />
							<col width="375px" />
							<col width="*" />
							<col width="375px" />
						</colgroup>
						<tbody id="algoRecommandListBody">
							<!--
							<tr>
								<td rowspan=2 class="title">1</td>
								<td colspan=3 class="title">배차완료 (강원89버3456)</td>
							</tr>
							<tr>
								<td>
									<div class="path_div" style="height:70px">
										<div class="ord">[1배차] 신무림제지 / 카고 2.5</div>
										<div class="top">
											<div class="sub1">강원도 홍천군<br>(08:00)</div>
											<div class="arrow">→</div>
											<div class="sub2">경상북도 청송군<br>(12:30)</div>
										</div>
									</div>
								</td>
								<td style="text-align:center; vertical-align:middle;">▶</td>
								<td>
									<div class="path_div" style="height:70px">
										<div class="ord">[2배차] 신무림제지 / 카고 2.5</div>
										<div class="top">
											<div class="sub1">강원도 홍천군<br>(08:00)</div>
											<div class="arrow">→</div>
											<div class="sub2">경상북도 청송군<br>(12:30)</div>
										</div>
									</div>
								</td>
							</tr>
							-->
						</tbody>
					</table>
				</div>
			</div>
			<!-- 목록 -->
		</div>		
		<!-- 추천목록 -->

	</div>
	<!-- //우측 정보 영역 -->
</div>

</body>
</html>