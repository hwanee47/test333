
/**
 *	googleMap 초기화 
 */
/**
 * @param o : 맵이 표현될 영역 정보 
 */
var map;
function initMap(o){
	map = new google.maps.Map(document.getElementById(o.div), {
		zoom: 18,
		maxZoom: 19,
		minZoom: 6,
		center: {lat: 37.5619873, lng: 126.9730337},
		streetViewControl: false,
		zoomControl: true,
		zoomControlOptions: {
	        position: google.maps.ControlPosition.RIGHT_TOP
	    },
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: [
			             google.maps.MapTypeId.ROADMAP,
			             google.maps.MapTypeId.TERRAIN
			             ]
		}
	});
	
	map.addListener("zoom_changed", function(){	
		zoomChanged("ZOOM");
	});
	
	if(o.mapDragend){
		map.addListener('dragend', function(){
			o.fn_event();
	    });
	}
	
	Proj_init();
}


/**
 * 좌표 변환 
 */
function Proj_init()
{
	Proj4js.defs['WGS84_a'] = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
	Proj4js.defs['KATEC'] = 
	    '+proj=tmerc +lat_0=38 +lon_0=128 +ellps=bessel ' + 
	    '+x_0=400000 +y_0=600000 +k=0.9999 +towgs84=-146.43,507.89,681.46 ' + 
	    '+units=m +no_defs';

	var wgs84 = new Proj4js.Proj('WGS84_a');
	var katec = new Proj4js.Proj('KATEC');
}

/**
 * 좌표 변환 
 */
//Proj4js.reportError = function(msg) { alert(msg); }
function KaTechToWgs84New(la, lo)
{
	Proj4js.defs['WGS84_a'] = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
	Proj4js.defs['KATEC'] = 
	    '+proj=tmerc +lat_0=38 +lon_0=128 +ellps=bessel ' + 
	    '+x_0=400000 +y_0=600000 +k=0.9999 +towgs84=-146.43,507.89,681.46 ' + 
	    '+units=m +no_defs';

	var wgs84 = new Proj4js.Proj('WGS84_a');
	var katec = new Proj4js.Proj('KATEC');

	var p = new Proj4js.Point(lo, la);
	Proj4js.transform(katec, wgs84, p); 
	return { lo:p.x, la:p.y};
}

/**
 *  줌 이벤트
 *  @param type  : 줌 변경 시 특정 맵관련 변수 핸들링 구분명
 *			      (ZOOM : 줌이벤트 , MARKER : 마커 생성 시)
 *		   imgNm : 이미지명 (없을 경우에 전체적으로 변경)
 */
function zoomChanged(type,imgNm){
	var zommLv = map.getZoom();
	if(type == "ZOOM"){
		if(markers[0].vhcl.length >= 1){
			for(var i = 0 ; i < markers[0].vhcl.length ; i ++){
				if(markers[0].vhcl[i] != ""){
					if(zommLv < 9 ){
						markers[0].vhcl[i].icon.size.width  = 27;
						markers[0].vhcl[i].icon.size.height = 27;
					}else if(9 <= zommLv && zommLv < 14 ){
						markers[0].vhcl[i].icon.size.width  = 47;
						markers[0].vhcl[i].icon.size.height = 47;
					}else if(14 <= zommLv && zommLv <= 19){
						markers[0].vhcl[i].icon.size.width  = 77;
						markers[0].vhcl[i].icon.size.height = 77;
					}
					markers[0].vhcl[i].setMap(map);
				}
			}
		}
		//tooltip 닫기  css 변경  자식창 closeToolTip() 함수 확인
		if($(".mipGisTooltip").css("display")!="none"){
			$(".mipGisTooltip").css("display", "none");
			//현재 툴팁 display 여부 
			isToolTipYn = false;
		}
	}else if(type == "MARKER" && imgNm){
		var w = 0;
		var h = 0;
		if(zommLv < 9 ){
			w = 27;
			h = 27;
		}else if(9 <= zommLv && zommLv < 14 ){
			w = 47;
			h = 47;
		}else if(14 <= zommLv && zommLv <= 19){
			w = 77;
			h = 77;
		}
		return new google.maps.MarkerImage(imgNm, null, null, null, new google.maps.Size(w,h));
	}
}

/**
 * 마커 생성 관련 
 * vhcl : 차량
 * loc  : 거전
 * @param obj : 마커 생성 시 셋팅 값 저장 변수
 */
var marker;
var markers=[{vhcl:[]},{loc:[]}];
function addMarkersOnMap(obj){
	marker = new google.maps.Marker({
 	   mk_type  : obj.type,
 	   mk_id	: obj.id,
 	   mk_radius: nvl(obj.radius,0),
 	   mk_bg 	: obj.mBg, 
       position	: new google.maps.LatLng(obj.x,obj.y),
       imgNm    : obj.img,
       icon		: (obj.type == "loc" ? new google.maps.MarkerImage(obj.img, null, null, null, new google.maps.Size(nvl(obj.w,0),nvl(obj.h,0))) : zoomChanged("MARKER",obj.img)), 
       title	: obj.title,
       cParam   : obj.cParam
	});
	
	//마커 클릭 이벤트
	if(obj.eventYN && obj.eventYN=="Y" && obj.id){
		marker.addListener('click', function() {
			obj.cEvent(obj.cParam,obj.type);
		});
	}
	 
	marker.setMap(map);   
	
	//마커 타입에 따른 그룹 배열
	//makers[0] = vhcl , makers[1] = loc  
	if(obj.type == "vhcl"){
		markers[0].vhcl.push(marker);
	}
	if(obj.type == "loc"){
		markers[1].loc.push(marker); 
	}
}

/**
 *  경로 생성 관련 
 *  exRoute : 예상경로
 *  route	 : 실제경로
 *  @param obj : 경로 생성 시 셋팅 값 저장 변수
 */
var paths;
var pathsGrp=[{exroute:[]},{route:[]}];
function drawRouteOnMap(obj){
	//routeStopArr = routeStopArr.reverse();
	if(obj.point.length > 0){
		var pointList = [];		
		for(var i=0; i < obj.point.length; i++){
			var stop = obj.point[i];	
			pointList.push({lat: parseFloat(stop.la), lng: parseFloat(stop.lo)});
		}
		paths = new google.maps.Polyline({
	          path: pointList,
	          geodesic: true,
	          strokeColor: nvl(obj.color,"red"),
	          strokeOpacity: 1.0,
	          strokeWeight : 3.0,
	          icons : [{ 
	        	  icon : {
	        		  		path : google.maps.SymbolPath.BACKWARD_CLOSED_ARROW
	        		  	 }
				, offset  : '100%'
				, repeat  : '100px'
	          }],
	    });
		paths.setMap(map);
		if(obj.type=="exroute"){
			pathsGrp[0].exroute.push(paths);
		}else if(obj.type=="route"){  
			pathsGrp[1].route.push(paths);
		}
	} 
}

/**
 *  반경 생성 관련
 *  @param obj : 반경 생성 시 셋팅 값 저장 변수
 */
var circle;
var circleGrp=[];
function drawCircleOnMap(obj){
	if(obj){
		circle = new google.maps.Circle({
			strokeColor	 : obj.color,
			strokeOpacity: 0.8,
		    strokeWeight : 1,
		    fillColor	 : color,
		    fillOpacity	 : 0.2,
		    center		 : {lat: y, lng: x},
		    radius		 : Number(obj.radius),
		    map			 : map
		});
		circleGrp.push(circle);
	}
}

/**
 * 지도 중심 이동
 * @param x 	: 위도좌표
 * @param y		: 경도좌표
 * @param zoom	: 줌레벨
 */
function moveMap(y,x,zoom){
	//맵 줌 레벨 변경
	map.setZoom(zoom);
	// 좌표이동
	var newCenter = new google.maps.LatLng(x,y);
	map.setCenter(newCenter);
}

/**
 * 매개변수로 넘어온 좌표정보를 px 화 return  
 * @param lat : x
 * @param lng : y  
 */
function getLatLngPx(lat,lng){
	var projection = map.getProjection();
	var point = projection.fromLatLngToPoint({lat:function(){return Number(lat)},lng:function(){return Number(lng)}});
	var ne = projection.fromLatLngToPoint(map.getBounds().getNorthEast());
    var sw = projection.fromLatLngToPoint(map.getBounds().getSouthWest());
    var scale = Math.pow(2, map.getZoom());
    
    return {
    		 x : (point.x - sw.x) * scale
    	    ,y : (point.y - ne.y) * scale
    	   };
}

/**
 * 맵 관련 마커,경로,반경 삭제
 * @param id   : 마커,경로,반경 관련 데이터 저장 변수명
 * @param type : id에 대한 상세 분류 값
 */
function clearArray(id,type){
	if(id){
		if(type=="vhcl"){//차량
			if(markers[0].vhcl.length >= 1 && markers[0].vhcl[0] != ""){
				for(var i = 0 ; i < markers[0].vhcl.length ; i ++){
					markers[0].vhcl[i].setMap(null);
					markers[0].vhcl.splice(i,1);
					i=i-1;
				}
			} 
		}else if(type=="loc"){//거점
			if(markers[1].loc.length >= 1 && markers[1].loc[0] != ""){
				for(var i = 0 ; i < markers[1].loc.length ; i ++){
					markers[1].loc[i].setMap(null);
					markers[1].loc.splice(i,1);
					i=i-1;
				}
			}
		}else if(type=="cir"){//반경
			if(circleGrp.length >= 1 && circleGrp[0] != ""){
				for(var i = 0 ; i < circleGrp.length ; i ++){
					circleGrp[i].setMap(null);
					circleGrp.splice(i,1);
					i=i-1;
				}				
			}			
		}else if(type=="route"){//경로
			if(pathsGrp[1].route.length >= 1 && pathsGrp[1].route[0] != ""){
				for(var i = 0 ; i < pathsGrp[1].route.length ; i ++){
					pathsGrp[1].route[i].setMap(null);
					pathsGrp[1].route.splice(i,1);
					i=i-1;
				}				
			}
		}else if(type=="exroute"){//예상경로
			if(pathsGrp[0].exroute.length >= 1 && pathsGrp[0].exroute[0] != ""){
				for(var i = 0 ; i < pathsGrp[0].exroute.length ; i ++){
					pathsGrp[0].exroute[i].setMap(null);
					pathsGrp[0].exroute.splice(i,1);
					i=i-1;
				}				
			}
		}
	}
}


/**
 * 두 지점간 거리 계산
 * @param stPntX
 * @param stPntY
 * @param enPntX
 * @param enPntY
 * @returns
 */
function getDistance(stPntX, stPntY, enPntX, enPntY) {
	// 거리
	var dist   = 0;
	
	try        { dist = Math.sqrt(Math.pow(stPntX - enPntX, 2) + Math.pow(stPntY - enPntY, 2)); }
	catch(err) { dist = 0;                                                                                      }
	
	return Number(dist).toFixed(2);
}

/**
 * 구글맵 관련 이벤트 등록
 * @param evtSt : 이벤트 구분
 */
function googleObjMouseEvt(evtSt){
	
}

/**
 * 메세지 박스 생성 관련
 */
function msgBox(){
	
}