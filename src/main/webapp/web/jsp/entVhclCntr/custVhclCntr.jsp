<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<script type="text/javascript">
		var CONTEXT_PATH = "${pageContext.request.contextPath}";
	</script>
	
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/entVhclCntr/css/custVhclCntr.css" />

	<!-- Google Map 관련 라이센스 및 JS 파일 -->
	<script src="https://maps.googleapis.com/maps/api/js?client=gme-cjkoreaexpress&region=KR"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/googleMap/markerwithlabel.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/googleMap/control_main.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/googleMap/proj4js-combined.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/func.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/var.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/map.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/custVhclCntr.js"></script>
</head>
<body>
<div class="wrapper" id="TO_DAY" date="${DATE_STRING}" hour="${HOUR_STRING}">
	<!-- 지도 영역 -->
	<div class="map_box_l" id="objRepo" vhclList="">
		<!-- 지도 -->
		<div id="map" class="map_box_l" style="height:758px;"></div>
		<!-- //지도 -->
		<!-- 하단 정보 -->
		<div class="map_in_wrap">
			<!-- 버튼 -->
			<p class="map_btn"><a href="#" class=""></a></p>
			<!-- //버튼 -->
			<div class="inner_bx">
				<!-- 좌측 영역 -->
				<div class="bx_l">
					<div class="t_info"><p id="driverInfo"></p></div><!-- 말풍선 -->
					<p class="im_bx"><img src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/img/img_truck.png" alt="" /></p>
					<p class="s_tx" id="vhclInfo"></p>
				</div>
				<!-- //좌측 영역 -->
				<!-- 우측 영역 -->
				<div class="bx_r">
					<div class="cont_t" id="vhclInfoObj">
						<ul>
							<li><p id="shprInfo"></p></li>
							<li><p id="itemInfo"></p></li>
							<li><p id="wgtInfo"></p></li>
							<li class="last"><p id="eqpClsInfo"></p></li>
						</ul>
					</div>
					<div class="cont_m">
						<span class="tx" id="frNodeInfo"></span>
						<span class="arr"><img src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/img/img_arrow.png" alt=""/></span>
						<span class="tx" id="toNodeInfo"></span>
						<span class="view" id="linkInfo"></span>
					</div>
					<div class="cont_b">
						<ul>
							<li id="ORD_TIME"></li>
							<li id="MNF_TIME"></li>
							<li id="DEP_ARRD_TIME"></li>
							<li id="DEP_DEPD_TIME"></li>
							<li id="ARR_ARRD_TIME"></li>
							<li id="FIN_TIME" class="last"></li>
						</ul>
					</div>
				</div>
				<!-- //우측 영역 -->
			</div>
		</div>
		<!-- //하단 정보 -->
	</div>
	<!-- //지도 영역 -->
</div>
</body>
</html>