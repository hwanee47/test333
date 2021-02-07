<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<head>
<script type="text/javascript"
	src="http://maps.googleapis.com/maps/api/js" async="" defer=""></script>
<%-- <script src="${pageContext.request.contextPath}/js/jquery.js"></script> --%>
<script language="JavaScript" type="text/javascript">
	var map;
	var marker;
	
	function initialize(lat, lng) {

		var currentLocation = new google.maps.LatLng(lat, lng);

		var mapOptions = { //구글 맵 옵션 설정
			zoom : 14, //기본 확대율
			center : currentLocation, // 지도 중앙 위치
			mapTypeId : google.maps.MapTypeId.ROADMAP
		/* scrollwheel : false, 									//마우스 휠로 확대 축소 사용 여부
		mapTypeControl : false									//맵 타입 컨트롤 사용 여부 */

		};

		map = new google.maps.Map(document.getElementById('map'),
				mapOptions); //구글 맵을 사용할 타겟

		/* 지도 위에 마커 달아주기 */
		marker = new google.maps.Marker({
			position : currentLocation,
			map : map
		});
				
		google.maps.event.addListener(marker, 'click', toggleBounce(marker));

		// This event listener will call addMarker() when the map is clicked.
		/* 지도에서 마우스 클릭시 마커 생성 */
		google.maps.event.addListener(map, 'click', function(event) {
			addMarker(event.latLng);
		});
	}
	
	function foundLocation(position) {
		/* 위도 */var latitude = position.coords.latitude;
		/* 경도 */var longitude = position.coords.longitude;
		alert("Your current position is: latitude(" + latitude + "), longitude(" + longitude + ")");

		/* Google Map으로 위도와 경도 초기화 */
		var currentLocation = new google.maps.LatLng(latitude, longitude);
		addMarker(currentLocation);
	}

	function noLocation(error) {
		alert("Error: " + error.message);
	}

	

	// Add a marker to the map and push to the array.
	/*
	 * 이 소스는 마커를 하나만 추가할 수 있도록 구현해놓습니다.
	 * 개발자분들 재량에 따라 코드를 응용하도록 하세요.  
	 */
	function addMarker(location) {
		/* 기존에 있던 마커 삭제 후 */
		/*새 마커 추가하기. */
		marker.setMap(null);
		marker = new google.maps.Marker({
			position : location,
			map : map
		});
		/* 마커 토글바운스 이벤트 걸어주기(마커가 통통 튀도록 애니메이션을 걸어줌) */
		google.maps.event.addListener(marker, 'click', toggleBounce(marker));
	}

	function toggleBounce(marker) {
		if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}

	function fn_btnClick()
	{
		watchId = navigator.geolocation.getCurrentPosition(foundLocation, noLocation);
	}
	
</script>
</head>
<body>
	<button type="button" onclick="fn_btnClick()">위치 정보 수집</button>
	<div id="map" style="width: 100%; height: 100%"></div>
</body>
