/**
 * 지도 표출
 * @param div : 지도영역 ID
 */
function initMap(div) {
	
	ZOOM_LISTENER_CNT = 0;
	
	// 지오코딩, 리버스 지오코딩 객체
	GEOCODER = new google.maps.Geocoder();
	
	// 맵 스타일
	var	mapStyle = [{
	   	                featureType: "administrative",
	   	                elementType: "labels",
	   	                stylers: [{ visibility: "off" }]
 	                 },{
 		   	      	    featureType: "poi",
 		   	      	    elementType: "labels.text",
 		   	      	    stylers: [{ visibility: "off" }]
 		   	      	 },{
 		   	      	    featureType: "water",
 		   	      	    elementType: "labels",
 		   	      	    stylers: [{ visibility: "off" }]
 		   	      	 },{
 		   	      	    featureType: "road",
 		   	      	    elementType: "labels",
 		   	      	    stylers: [{ visibility: "off" }]
 		   	      	 }];
	
	// 맵 옵션
	var mapOptions = {
			maxZoom : 18,
			minZoom : 7,
			center : new google.maps.LatLng(INIT_Y, INIT_X),
			scrollwheel : true,
			zoom : INIT_LEVEL,
			disableDefaultUI : true,
	        zoomControl : true,
	        zoomControlOptions : { style:google.maps.ZoomControlStyle.SMALL },
			styles : mapStyle
	};

	// 맵 생성
	MAP = new google.maps.Map(document.getElementById(div), mapOptions);
	
	MAP.addListener("zoom_changed", function(){	
    	if(ZOOM_LISTENER_CNT > 0 && ZOOM_RESIZE_YN != "Y"){ //초기화에는 타지 않는다.
    		markerResize();
    	}
    	ZOOM_LISTENER_CNT++;
	});
	
	// 객체 저장 객체 초기화
	MARKER_OBJ = {};
	LINE_OBJ   = {};
	ZOOM_RESIZE_YN = 'N';
}


/**
 * 마커 표출 (사용 객체 : google.maps.MarkerWithLabel)
 * @param o
 */
function addMarker(o) {
	
	var id 			  	= o.id;				// 마커 아이디
	var lng 		  	= Number(o.x);		// 경도 (X)
	var lat 		  	= Number(o.y);		// 위도 (Y)
	var imgUrl 		  	= o.imgUrl;			// 마커 이미지 경로
	var popupContent  	= o.popupContent;	// 마커 팝업 HTML
	var labelContent  	= o.labelContent;	// 마커 라벨 텍스트
	var labelClass 	  	= o.labelClass;		// 마커 라벨 CSS CLASS
	var	imgSizeW		= o.imgSizeW		// 마커사이즈
	var	imgSizeH		= o.imgSizeH		// 마커사이즈
	var	imgPointW		= o.imgPointW		// 라벨 위치 값 
	var	imgPointH		= o.imgPointH		// 라벨 위치 값
	
	
	// 라벨 유무에 따른 라벨 표출 여부
	var chkLabel      = false;
	//if(labelContent == "") { chkLabel = false; }
	
	if(nvl(imgSizeW, "") == "") {
		imgSizeW = 30;
		imgSizeH = 30;
	}
	
	// Icon 생성
	var icon          = {
		iconAnchor : new google.maps.Point(imgSizeW, imgSizeH),		// 마커 좌표로 부터 이미지의 위치  // 2017.09.07 지도 축소 확대시 아이콘 움직이는 부분 해결 <이승수>
		scaledSize : new google.maps.Size(imgSizeW, imgSizeH),		// 마커 이미지의 사이즈
		url 	   : CONTEXT_PATH + imgUrl
	};
	
	// 라벨 디자인이 가능한 Marker
	var mWithLabel    = new MarkerWithLabel({
		  map				: MAP,											// 생략시 지도에 표출되지 않음(객체는 생성됨)
		  id				: id,
		  animation			: google.maps.Animation.DROP,					// 마커 생성시 애니매이션
		  position			: { lat : lat , lng : lng },					// 위치 좌표 (lat : Y, lng : X)
		  icon				: icon,											// 마커 이미지 객체
		  title             :  o.title,
		  draggable			: false,										// 마커 드래그 여부
		  labelAnchor		: new google.maps.Point(imgPointW, imgPointH),	// 라벨위치 Offset
		  labelClass		: labelClass,									// 라벨 css 클래스
		  labelContent		: nvl(labelContent, ""),						// 라벨 html
		  labelInBackground	: false,					      				// false : 드래그 시 라벨이 마커 위로 표출
		  labelVisible		: chkLabel										// 마커 라벨 표출 여부
	});
	
	
	
	// 마커 마우스 오버 기능 2017.08.24 이승수
	var labelMouseOver = nvl(o.labelContent, "-1");
	if (labelMouseOver != "-1") {
		google.maps.event.addListener(mWithLabel, 'mouseover', function() {
			mWithLabel.set('labelVisible', true);
		});
		google.maps.event.addListener(mWithLabel, 'mouseout', function() {
			mWithLabel.set('labelVisible', false);
		});
	}
	
	// 마커 클릭 이벤트
	var customCallback = nvl(o.customCallback, "-1");
	if (customCallback != "-1") {
		mWithLabel.addListener("click", function() {
			customCallback(mWithLabel, o.customCallbackParam);
		});
	}
	
	// 클릭한게 없으면
	if (MARKER_ID != ""){
		if (MARKER_ID != id){
			if (labelMouseOver != "-1"){
				
			}else{
				mWithLabel.set('icon', " ");
			}
			
		}else{
		}
	}
	
	MARKER_OBJ[id] = mWithLabel;
}

/**
 * 마커 팝업 객체 생성
 * 
 * @param marker
 */
function makeMarkerPopup(marker) {
	// 팝업내용
	var popupContent = marker.popupContent;

	// 팝업객체가 없는 경우
	if (INFO_WINDOW == null) {
		INFO_WINDOW = new google.maps.InfoWindow({
			// 팝업 HTML/TEXT
			maxWidth 	: 1000,							// 팝업의 가로 길이
			pixelOffset : new google.maps.Size(0, 0),	// 마커 위치 기준으로 팝업의 위치
			position 	: { 
				lat : marker.position.lat(),
				lng : marker.position.lng()
			}
		});
	} else {
		INFO_WINDOW.setPosition({
			lat : marker.position.lat(),
			lng : marker.position.lng()
		});
	}
	
	INFO_WINDOW.setContent(popupContent);
	INFO_WINDOW.open(MAP, marker);
}


/**
 * 라인 그리기
 * @param o
 */
function addLine(o) {

	var id 			  = o.id;				// 아이디
	var points 		  = o.lonlngList;		// 좌표
	var strokeColor   = o.strokeColor;		// 선 색
	var strokeOpacity = o.strokeOpacity;	// 선 투명도
	var strokeWeight  = o.strokeWeight;		// 선 뚜께

	// 라인 객체
	var polyline      = new google.maps.Polyline({
		map				: MAP,  
		path 			: points,
		draggable 		: false,
		geodestic 		: true, 							// 가장자리가 직선으로 렌더링
		icons 			: null, 							// 폴리라인을 따라 렌더링 할 아이콘
		strokeColor 	: nvl(strokeColor	, "#FF0000"),	// 라인 컬러
		strokeOpacity 	: nvl(strokeOpacity	, 1.0),			// 라인 불투명도
		strokeWeight 	: nvl(strokeWeight	, 3),			// 라인 두께
	});
	
	if(nvl(id) == "") {id = "POLYLINE_ID_1";}

	LINE_OBJ[id]    = polyline;
}

/**
 * 지오코딩
 * @param address  : 검색할 주소
 * @param callback : callback함수
 */
function fnGeoCoding(address, callback) {
	
	// 지오코딩 실행
	GEOCODER.geocode({ "address" : address }, function(results, status) {
		
		// 정상
		if(status == google.maps.GeocoderStatus.OK) {
			
			callback(results[0].geometry.location.lng(), results[0].geometry.location.lat());
		} 
		
		// 에러발생
		else {
			
			showMessage("검색된 결과가 없습니다.");
		}
	})
}

/**
 * 리버스 지오코딩
 * @param x
 * @param y
 * @param callback
 */
function fnReverseGeocoding(x, y, callback) {
	
	// 리버스 지오코딩 실행
	GEOCODER.geocode({ "location" : { lat : Number(y), lng : Number(x) } }, function(results, status) {

		// 정상조회
		if(status == google.maps.GeocoderStatus.OK) {
			
			// 결과가 조회된 경우
			if (results[1]) {
				
				var address = results[1].formatted_address;
				callback(x, y, address);
			}

			// 결과가 없는 경우
			else {

				showMessage("검색된 결과가 없습니다.");
			}
		}

		// 에러
		else {

			showMessage("검색된 결과가 없습니다.");
		}
	});
}

/**
 * 맵에 있는 객체 삭제
 * @param id      : 특정객체 삭제시 사용, null이면 전체삭제
 * @param objType : M (마커), L (라인)
 */
function deleteMapObject(id, objType) {
	
	// 객체ID
	var objId = nvl(id, "");
	
	//console.log('onecode : objId [1]: ' +  objId);

	// 전체삭제
	if(objId == "") {
		// 마커
		if(objType == "M") {

			// 삭제처리
			for(var key in MARKER_OBJ) {
				//console.log('onecode : MARKER_OBJ [2]: ' ,  MARKER_OBJ);
				//console.log('onecode : MARKER_OBJ [2-1]: ' ,  MARKER_OBJ[key]);
				MARKER_OBJ[key].setMap(null);
			}
			
			MARKER_OBJ = {};
		}

		// 라인
		else if(objType == "L") {

			// 삭제처리
			for(var key in LINE_OBJ) {

				LINE_OBJ[key].setMap(null);
			}
			
			LINE_OBJ = {};
		}
	}
	
	// 일부삭제
	else {
		var mo = MARKER_OBJ[objId];
		var lo = LINE_OBJ[objId];
		
		// 마커
		if(objType == "M") {
			//console.log('onecode : mo [3]: ',  mo);
			if(mo != undefined && mo != null) {
				//console.log('onecode : mo [4]: ' ,  mo);
				mo.setMap(null);
				delete MARKER_OBJ[objId];
			}
		}
		
		// 라인
		if(objType == "L") {
			if(lo != undefined && lo != null) {
				lo.setMap(null);
				delete LINE_OBJ[objId];
			}
		}
	}
}