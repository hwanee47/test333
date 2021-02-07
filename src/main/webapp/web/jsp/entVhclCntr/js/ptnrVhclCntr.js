/**
 * Visibility - ptnrVhclCntr.jsp 화면에 대응하는 스크립트 프로그램
 * 
 * @author	Choi. Moonseop
 * @since	2018. 12. 06.
 */
var searchYN = false;
var initParam = {};
$(window).load(function () {
	searchYN = false;
	$(".map_btn a").click(function(){
		if(!$(this).data("click")){
			$(".map_in_wrap").animate({ bottom: '0' }, 400);
			$(this).addClass('open');
			$(".t_info").delay(200).fadeIn(200);
			$(this).data("click", true);
		}else{
			$(".map_in_wrap").animate({ bottom: '-200px' }, 400);
			$(this).removeClass('open');
			$(".t_info").delay(0).fadeOut(100);
			$(this).data("click", false);
		}
	});
	initMap("map");
	//setTimeout(function(){ initPage(initParam); }, 500);
});

function initPage(obj) {
	initParam = obj;
	getVhclList(obj);
}

function getVhclList(obj) {
	searchYN = false;
	var mapButton = $(".map_btn a");
	if (mapButton.hasClass("open")) {
		$(".map_in_wrap").animate({ bottom: '-200px' }, 400);
		mapButton.removeClass('open');
		$(".t_info").delay(0).fadeOut(100);
		mapButton.data("click", false);
	}
	callService({
		url : "getVhclList.do",
		params : {
			SEARCH_DATE : obj.SEARCH_DATE,
			VHCL_NO : obj.VHCL_NO
		},
		async : true,
		callback : getVhclListCallback
	});
}

function getVhclListCallback(data) {
	if (data == null || data.list == null || data.list.length < 1) {
		alert("정보가 존재하지 않습니다.");
	} else {
		getObj("objRepo").setAttribute("vhclList", JSON.stringify(data.list[0]));
		data.tableString = null;
		//setVhclMaker(data);
		getVhclInfo(data.list[0]);
	}
}

function getVhclInfo(obj, actFlag) {
	searchYN = true;
	
	if (obj.SO_NO != null && obj.SO_NO.length > 0) {
		callService({
			url : "getVhclInfo.do",
			params : {
				SO_NO : obj.SO_NO,
				TOL_NO : obj.TOL_NO
			},
			async : true,
			callback : getVhclInfoCallback,
			callbackparam : obj
		});
	} else {
		alert("주문 관련 정보가 없습니다.");
	}
	
	var data = {};
	var vhclList = [obj];
	data.list = vhclList;
	
	setVhclMaker(data);
}

function getVhclRoute(vhclId, vhclNo) {
	var mapButton = $(".map_btn a");
	if (mapButton.hasClass("open")) {
		$(".map_in_wrap").animate({ bottom: '-200px' }, 400);
		mapButton.removeClass('open');
		$(".t_info").delay(0).fadeOut(100);
		mapButton.data("click", false);
	}
	
	var toDate = getObj("TO_DAY").getAttribute("date");
	var toHour = getObj("TO_DAY").getAttribute("hour");
	var searchDate = [initParam.SEARCH_DATE.slice(0, 4), initParam.SEARCH_DATE.slice(4,6), initParam.SEARCH_DATE.slice(6,8)].join('-');
	var diffDate = dateDiff(toDate, searchDate); // 2일
	var histDBType = "";
	if (diffDate <= 2) {
		histDBType = "REDIS";
	} else if (diffDate <= 60) {
		histDBType = "2M"
	} else if (diffDate <= 180) {
		histDBType = "6M"
	} else {
		alert("6개월 이전 데이터는 조회하실 수 없습니다.");
		return false;
	}
	
	//ZOOM 카운트 초기화, 현재 LINE, MARKER OBJ 삭제
	ZOOM_LISTENER_CNT = 0;
	deleteMapObject(null, "L");	
	deleteMapObject(null, "M");	
	
	var vhclObj = JSON.parse(getObj("objRepo").getAttribute("vhclList"));
	var vhclInfoObj = JSON.parse(document.getElementById("vhclInfoObj").getAttribute("vhclInfo"));
	var param = {};
	param.VHCL_ID = vhclId;
	param.SEARCH_TARGET = histDBType;
	if (vhclObj.ARR_NODE_ID == null || vhclObj.DEP_NODE_ID == null) {
		// 배차되지 않은 차량
		// dev 1, 히스토리 1시간 전 부터 현재 까지
		param.TYPE = "NO_ORDERED";
		param.DEV1_PARAM = {};
		param.DEV1_PARAM.head = "GPS_HIST";
		param.DEV1_PARAM.VHCL_NO = vhclObj.VHCL_NO;
		param.DEV1_PARAM.FROM_DATE = toHour;
		param.DEV1_PARAM.TO_DATE = toHour;
	} else if (vhclInfoObj.DEP_ARRD_TIME == null) {
		// 상차지 도착 전
		// dev 1, 2 모두 rp 현위치 -> 상차지, 상차지 -> 하차지
		param.TYPE = "BEFORE_DEP_ARRD";
		param.DEV1_PARAM = {};
		param.DEV1_PARAM.head = "Road";
		param.DEV1_PARAM.DEP_COORD_WGS84_X = vhclObj.COORD_WGS84_X;
		param.DEV1_PARAM.DEP_COORD_WGS84_Y = vhclObj.COORD_WGS84_Y;
		param.DEV1_PARAM.ARR_COORD_WGS84_X = vhclObj.DEP_WGS84_X;
		param.DEV1_PARAM.ARR_COORD_WGS84_Y = vhclObj.DEP_WGS84_Y;
		param.DEV2_PARAM = {};
		param.DEV2_PARAM.head = "Road";
		param.DEV2_PARAM.DEP_COORD_WGS84_X = vhclObj.DEP_WGS84_X;
		param.DEV2_PARAM.DEP_COORD_WGS84_Y = vhclObj.DEP_WGS84_Y;
		param.DEV2_PARAM.ARR_COORD_WGS84_X = vhclObj.ARR_WGS84_X;
		param.DEV2_PARAM.ARR_COORD_WGS84_Y = vhclObj.ARR_WGS84_Y;
	} else if (vhclInfoObj.ARR_ARRD_TIME == null) {
		// 하차지 도착 전
		// dev 1 : 상차지 도착 시간 ~ 현재 시간(hist), dev 2 : 현위치 -> 하차지 위치(rp)
		param.TYPE = "AFTER_DEP_ARRD";
		param.DEV1_PARAM = {};
		param.DEV1_PARAM.head = "GPS_HIST";
		param.DEV1_PARAM.VHCL_NO = vhclInfoObj.VHCL_NO;
		param.DEV1_PARAM.FROM_DATE = replaceAll(toDate, "-", "") + (vhclInfoObj.DEP_ARRD_TIME).substring(0, 2);
		param.DEV1_PARAM.TO_DATE = toHour;
		param.DEV2_PARAM = {};
		param.DEV2_PARAM.head = "Road";
		param.DEV2_PARAM.DEP_COORD_WGS84_X = vhclObj.COORD_WGS84_X;
		param.DEV2_PARAM.DEP_COORD_WGS84_Y = vhclObj.COORD_WGS84_Y;
		param.DEV2_PARAM.ARR_COORD_WGS84_X = vhclObj.ARR_WGS84_X;
		param.DEV2_PARAM.ARR_COORD_WGS84_Y = vhclObj.ARR_WGS84_Y;
	} else {
		// 운송 완료된 차량
		// dev 1 : 상차지 도착 시간 ~ 운송 완료 시간(hist)
		param.TYPE = "AFTER_FINISH";
		param.DEV1_PARAM = {};
		param.DEV1_PARAM.head = "GPS_HIST";
		param.DEV1_PARAM.VHCL_NO = vhclInfoObj.VHCL_NO;
		param.DEV1_PARAM.FROM_DATE = replaceAll(toDate, "-", "") + (vhclInfoObj.DEP_ARRD_TIME).substring(0, 2);
		param.DEV1_PARAM.TO_DATE = replaceAll(toDate, "-", "") + (vhclInfoObj.FIN_TIME).substring(0, 2);
	}
	
	callService({
		url : "getVhclRoute.do",
		params : param,
		async : true,
		callback : getVhclRouteCallback,
		callbackparam : param
	});	
}

function getVhclRouteCallback(data, param) {
	var vhclId = param.VHCL_ID;
	//현재 LINE OBJ 삭제
	//RESIZE_CAR_DATA = null;
	deleteMapObject(null, "L");	
	//deleteMapObject(null, "M");	
	
	var roadLineSymbol = {};
	roadLineSymbol.path = google.maps.SymbolPath.FORWARD_CLOSED_ARROW;
	roadLineSymbol.strokeOpacity = 1;
	roadLineSymbol.strokeColor = COLOR_RED;
	roadLineSymbol.fillOpacity = 1;
	roadLineSymbol.fillColor = COLOR_RED;
	
	var histLineSymbol = {};
	histLineSymbol.path = "M 0,-1 0,1";
	histLineSymbol.strokeOpacity = 1;
	histLineSymbol.scale = 4;
	
	var bounds = new google.maps.LatLngBounds();
	var route;
	var lineObj;
	
	route = data.DEV1_RESULT;
	lineObj = {};
	if (route != undefined && route.result == "success") {
		var list	= route.LIST;
		var len		= getSize(list);
		var lineArr = [];
		for (var i = 0; i < len; i++) {
			var o  		= list[i];
			var lon		= nvl(o.X, "");
			var lat		= nvl(o.Y, "");
			var lonlngList = {
				lat : Number(lat), lng : Number(lon)
			}
			lineArr.push(lonlngList);
			// setBounds
			bounds.extend(new google.maps.LatLng(Number(lat), Number(lon)));
		}
		// setBounds
		MAP.fitBounds(bounds);
		
		var polyline;
		if (route.TYPE == "Road") {
			polyline = new google.maps.Polyline({
				map	: MAP,  
				path : lineArr,
				draggable : false,
				geodestic : true,
				icons : [{
					icon : roadLineSymbol,
					offset : '100%',
					repeat : '300px'
				  }],
				strokeColor : COLOR_RED,
				strokeOpacity : 1.0,
				strokeWeight : 3
			});
		} else if (route.TYPE == "GPS_HIST") {
			polyline = new google.maps.Polyline({
				map	: MAP,  
				path : lineArr,
				draggable : false,
				geodestic : true,
				icons : [{
					icon : histLineSymbol,
					offset : '0',
					repeat : '20px'
				}, {
					icon : {
						path : google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
						offset : '100%',
						fillColor : COLOR_BLACK,
						fillOpacity : 1,
						strokeOpacity : 1
					}
				}],
				strokeOpacity : 0,
			});
		}
		LINE_OBJ["POLYLINE_ID_DEV1"] = polyline;
	}
	
	route = data.DEV2_RESULT;
	lineObj = {};
	if (route != undefined && route.result == "success") {
		var list	= route.LIST;
		var len		= getSize(list);
		var lineArr = [];
		for (var i = 0; i < len; i++) {
			var o  		= list[i];
			var lon		= nvl(o.X, "");
			var lat		= nvl(o.Y, "");
			var lonlngList = {
				lat : Number(lat), lng : Number(lon)
			}
			lineArr.push(lonlngList);
			// setBounds
			bounds.extend(new google.maps.LatLng(Number(lat), Number(lon)));
		}
		// setBounds
		MAP.fitBounds(bounds);
		
		var polyline;
		if (route.TYPE == "Road") {
			polyline = new google.maps.Polyline({
				map	: MAP,  
				path : lineArr,
				draggable : false,
				geodestic : true,
				icons : [{
					icon : roadLineSymbol,
					offset : '100%',
					repeat : '300px'
				  }],
				strokeColor : COLOR_RED,
				strokeOpacity : 1.0,
				strokeWeight : 3
			});
		} else if (route.TYPE == "GPS_HIST") {
			polyline = new google.maps.Polyline({
				map	: MAP,  
				path : lineArr,
				draggable : false,
				geodestic : true,
				icons : [{
					icon : histLineSymbol,
					offset : '0',
					repeat : '20px'
				}, {
					icon : {
						path : google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
						offset : '100%',
						fillColor : COLOR_BLACK,
						fillOpacity : 1,
						strokeOpacity : 1
					}
				}],
				strokeOpacity : 0,
			});
		}
		LINE_OBJ["POLYLINE_ID_DEV2"] = polyline;
	}

	// 상하차지 좌표 표시
	var locObj = {};
	var locList = [JSON.parse(getObj("objRepo").getAttribute("vhclList"))];
	locObj.list = locList;
	
	var locationList	= locObj.list;
	var locationListLen	= getSize(locationList);
	
	if(locationListLen > 0) {
		
		RESIZE_DEP_ARR_DATA = locObj;
		
		var slenCnt 	= 0;
		var elenCnt 	= 0;
		
		var depImgUrl 	= "/web/jsp/entVhclCntr/img/pos-Up.png";
		var arrImgUrl 	= "/web/jsp/entVhclCntr/img/pos-Down.png";
		
		var lon 			= "";
		var lat 			= "";
		var labelContent 	= "";
		
		var dep_arr_markerSizeW = "49";
		var dep_arr_markerSizeH = "53";
		
		var dep_arr_labelPointW = "30";
		var dep_arr_labelPointH = "55";
		
		// 상차 좌표 찍기
		for(var i=0; i< locationListLen; i++) {
			slenCnt					+=1;
			
			var oo 					= locationList[i];
			
		    var depNodeNm			= nvl(oo.DEP_NODE_NM, ""); 
		    var depLon				= nvl(oo.DEP_WGS84_X, ""); 
		    var depLat				= nvl(oo.DEP_WGS84_Y, ""); 
		    
			lon 	= depLon;
			lat 	= depLat;
			labelContent = depNodeNm;
			
			if (depLon != "" && depLat != "") {
				bounds.extend(new google.maps.LatLng(Number(lat), Number(lon)));
				//마커 표출
				var option =   {
					id 				: "MARKER_DEP_ID_"+ slenCnt,
					x 	    		: lon,
					y    			: lat,
					imgUrl 			: depImgUrl,	
					popupContent	: "",					        //팝업 HTML
					title			: labelContent,					//라벨 텍스트
					//labelContent	: labelContent,					//라벨 텍스트
					labelClass	 	: "custom-labels",  			//라벨 CSS CLASS
					customCallback  : "",
					customCallbackParam : {},
					imgSizeW		: dep_arr_markerSizeW,
					imgSizeH		: dep_arr_markerSizeH,
					imgPointW       : dep_arr_labelPointW,
					imgPointH       : dep_arr_labelPointH,
				}
				addMarker(option);
			}
			
		}
		
		// 하차 좌표 찍기
		for(var i=0; i< locationListLen; i++) {
			elenCnt					+=1;
			
			var oo 					= locationList[i];
			
		    var arrNodeNm			= nvl(oo.ARR_NODE_NM, ""); 
		    var arrLon				= nvl(oo.ARR_WGS84_X, ""); 
		    var arrLat				= nvl(oo.ARR_WGS84_Y, "");
		    
			lon 	= arrLon;
			lat 	= arrLat;
			labelContent = arrNodeNm;
			
			if (arrLon != "" && arrLat != "") {
				bounds.extend(new google.maps.LatLng(Number(lat), Number(lon)));
				//마커 표출
				var option =   {
					id 				: "MARKER_ARR_ID_"+ elenCnt,
					x 	    		: lon,
					y    			: lat,
					imgUrl 			: arrImgUrl,	
					popupContent	: "",					        //팝업 HTML
					title			: labelContent,					//라벨 텍스트
					//labelContent	: labelContent,					//라벨 텍스트
					labelClass	 	: "custom-labels",  			//라벨 CSS CLASS
					customCallback  : "",
					customCallbackParam : {},
					imgSizeW		: dep_arr_markerSizeW,
					imgSizeH		: dep_arr_markerSizeH,
					imgPointW       : dep_arr_labelPointW,
					imgPointH       : dep_arr_labelPointH,
				}
				addMarker(option);
			}
			
		}
		
		MAP.fitBounds(bounds);
	}
}

var truckFlag = false;
function getVhclInfoCallback(data, moreInfo) {
	if (data.result == "success") {
		var targetObj = getObj("vhclInfoObj");
		targetObj.setAttribute("vhclInfo", JSON.stringify(data.map));
		getObj("driverInfo").innerHTML = moreInfo.DRIVER_NM + "(" + moreInfo.DRIVER_CORP_NM + ")<br/>" + moreInfo.DRIVER_TEL;
		getObj("vhclInfo").innerHTML = moreInfo.VHCL_NO + "<br/>" + moreInfo.VHCL_KND_NM + " / " + moreInfo.VHCL_TON_NM;
		getObj("shprInfo").innerHTML = moreInfo.SHPR_NM;
		getObj("itemInfo").innerHTML = data.map.ITEM_NM;
		getObj("wgtInfo").innerHTML = data.map.LOAD_WGT;
		getObj("eqpClsInfo").innerHTML = moreInfo.EQP_CLS_NM;
		getObj("frNodeInfo").innerHTML = moreInfo.DEP_NODE_NM;
		getObj("toNodeInfo").innerHTML = moreInfo.ARR_NODE_NM;
		getObj("linkInfo").innerHTML = "<a onclick=\"getVhclRoute('" + moreInfo.VHCL_ID + "', '" + moreInfo.VHCL_NO + "');\" href=\"javascript:void(0);\" class=\"btn_view_r\"><span>운행경로보기</span></a>";
		truckFlag = false;
		setTimeTable("FIN_TIME", data.map);
		setTimeTable("ARR_ARRD_TIME", data.map);
		setTimeTable("DEP_DEPD_TIME", data.map);
		setTimeTable("DEP_ARRD_TIME", data.map);
		setTimeTable("MNF_TIME", data.map);
		setTimeTable("ORD_TIME", data.map);
		if (moreInfo.actFlag != null && moreInfo.actFlag != undefined) {
			getVhclRoute(moreInfo.VHCL_ID, moreInfo.VHCL_NO);
		}
	}
}

function setTimeTable(target, data) {
	var targetObj = getObj(target);
	var timeTable = getTimeTable(target, data);
	targetObj.setAttribute("class", timeTable.className);
	targetObj.innerHTML = timeTable.html;
}

function getTimeTable(target, data) {
	var timeTable = {};
	timeTable.className = "";
	timeTable.html = "";
	var targetValue = eval("data." + target);
	if (target == "FIN_TIME") {
		if (targetValue == null) {
			timeTable.className = "last";
			timeTable.html += "<p class='in_line'></p>";
			timeTable.html += "<p class='tx_bx'>운송완료</br></p>";
			timeTable.html += "<p class='round_bx'></p>";
		} else {
			truckFlag = true;
			timeTable.className = "laston";
			timeTable.html += "<p class='in_line'></p>";
			timeTable.html += "<p class='tx_bx'>운송완료</br>" + targetValue + "</p>";
			timeTable.html += "<p class='round_bx'></p>";
		}
	} else {
		var statusNm = "";
		if (target == "ARR_ARRD_TIME") {
			statusNm = "하차지 도착"
		} else if (target == "DEP_DEPD_TIME") {
			statusNm = "상차지 출발"
		} else if (target == "DEP_ARRD_TIME") {
			statusNm = "상차지 도착"
		} else if (target == "MNF_TIME") {
			statusNm = "배차"
		} else if (target == "ORD_TIME") {
			statusNm = "주문"
		}
		if (targetValue == null) {
			timeTable.className = "off";
			timeTable.html += "<p class='in_line'></p>";
			timeTable.html += "<p class='tx_bx'>" + statusNm + "</br></p>";
			timeTable.html += "<p class='round_bx'></p>";
		} else {
			timeTable.className = "on";
			if (!truckFlag) {
				truckFlag = true;
				timeTable.html += "<p class='in_line' style='width:50%;'></p>";
				timeTable.html += "<p class='tx_bx'>" + statusNm + "</br>" + targetValue + "</p>";
				timeTable.html += "<p class='round_bx'></p>";
				timeTable.html += "<span class='truck'></span>";
			} else {
				timeTable.html += "<p class='in_line' style='width:100%;'></p>";
				timeTable.html += "<p class='tx_bx'>" + statusNm + "</br>" + targetValue + "</p>";
				timeTable.html += "<p class='round_bx'></p>";
			}
		}
	}
	return timeTable;
}

/**
 * 지도에 마커 표시
 */
function setVhclMaker(data) {
	
	ZOOM_LISTENER_CNT = 0;
	
	RESIZE_CAR_DATA = data;
	
	MARKER_ID = "";
		
	// 현재 LINE OBJ 삭제
	deleteMapObject(null, "L");
	
	// 마커삭제후 재생성
	deleteMapObject(null, "M");
	
	// 이전에 클릭한 id값 초기화
	BEFORE_ID = "";
	
	var list 	= data.list;
	var len		= getSize(list);
	
	var bounds = new google.maps.LatLngBounds();
	var coordinates = [];
   
	var makerExList = [];
	var markerList;
	
	var maxLat = 0;
	var maxLon = 0;
	var minLat = 9999999;
	var minLon = 9999999;
	
	if(len > 0) {
		
		for(var i = 0; i < len; i ++) {
			var oo                  = list[i];
			var lon                 = Number(nvl(oo.COORD_WGS84_X, "0"));
			var lat                 = Number(nvl(oo.COORD_WGS84_Y, "0"));
			var indicateFlag        = oo.INDICATE_FLAG;                  // 차량 표시
			
			var mkId                = oo.VHCL_ID;        // 마커 ID
			var vhclNo              = nvl(oo.VHCL_NO, "-");              // 차량번호
			var currLoc             = oo.CURR_LOC;                       // 현재 위치 주소
			var driverNm            = oo.DRIVER_NM                       // 운전자 명
			var driverTel           = oo.DRIVER_TEL;                     // 운전자 연락처
			
			var gpsYn 				= oo.GPS_YN;                         // GPS 수신 여부
			var mnfYn 				= oo.MNF_YN;                         // 배차 여부
			
			var driverTelNo 		= nvl(oo.DRIVER_TEL_NO, "-");        // 운전원 연락처
			var driverTelNo2		= nvl(oo.DRIVER_TEL_NO2, "-");       // 운전원 연락처 마스킹
			var centerNm 			= oo.CENTER_NM;                      // 센터명
			var addr 				= oo.LAST_POSITION;                  // 최종 추적 위치
			var lastTime			= oo.LAST_UPD_TIME;                  // 최종 추적 일시
			
			
			var orgNm 				= oo.ORG_NM;
			var realMobileNo		= nvl(oo.REAL_MOBILE_NO, "-");
			var realMobileNo2		= nvl(oo.REAL_MOBILE_NO2, "-");
			var realVhclNo			= nvl(oo.REAL_VHCL_NO, "-");
			var trkgCd				= oo.TRKG_CD;
			var type                = oo.TYPE;
			var calc1				= replaceAll($("#calc1").val(),"-","");
			var gubunCd             = oo.GUBUN_CD
			var mnfNo               = oo.MNF_NO; // 2017.09.05 <빠져있어서 추가 : 이승수>
			var mnfCd               = oo.MNF_CD;
			
			
			
			var sts = "";
			
			if (addr == "-") {
			} else {
				sts = "C";
			}
			
			if (lon != 0 && lat != 0) {
				maxLat             = Math.max(lat, maxLat);
				maxLon             = Math.max(lon, maxLon);
				minLat             = Math.min(lat, minLat);
				minLon             = Math.min(lon, minLon);
			}
			
			var iconImg = "";
			var markerSizeW  = "";
			var markerSizeH  = "";
			if (len > 1) {
				iconImg = "/web/jsp/entVhclCntr/img/indicate_M_" + indicateFlag + ".png";
				markerSizeW = 30;
				markerSizeH = 30;
			} else {
				iconImg = "/web/jsp/entVhclCntr/img/indicate_L_" + indicateFlag + ".png";
				markerSizeW = 38;
				markerSizeH = 42;
			}
			
			//마커 표출
			var option = {
				id 					: mkId,
				x 	    			: lon,
				y    				: lat,
				imgUrl 				: iconImg,	
				title               : vhclNo,
				popupContent		: "",									//팝업 HTML
				labelContent		: "",									//라벨 텍스트
				labelClass	 		: "my-custom-class-for-label",			//라벨 CSS CLASS
				customCallback  	: markerPopup,
				imgSizeW			: markerSizeW,
				imgSizeH			: markerSizeH,
				customCallbackParam : { mkId : mkId, vhclNo : vhclNo, currLoc : currLoc, driverNm : driverNm, driverTel : driverTel, mkLength : len }
			}
			
			addMarker(option);

			ZOOM_RESIZE_YN = 'Y';		
		}
		
		
		if (maxLon != 0 && maxLat != 0 && minLon != 0 && minLat != 0) {
			bounds.extend(new google.maps.LatLng(maxLat, maxLon));
			bounds.extend(new google.maps.LatLng(minLat, minLon));
			
			// 리스트 내에 최대/최소 좌표만 보이도록
			MAP.fitBounds(bounds);
			var zoom = MAP.getZoom();
			if (zoom < MAX_ZOOM) {
				MAP.setZoom(zoom - 1);
			}
		}
	}
	
	ZOOM_RESIZE_YN = 'N';
	
	
}

function markerPopup(marker, param) {
	var mkId = param.mkId;
	var vhclNo = param.vhclNo;
	var currLoc = param.currLoc;
	var driverNm = param.driverNm;
    var driverTel = param.driverTel;
    var mkLength = param.mkLength;
    
	var popup_string = '';
	popup_string +='	<div id="popupCmm" style="display:block;">';
	popup_string +='		<div class="pop_cmm">';
	popup_string +='			<div class="inner">';
	if (mkLength == 1) {
		popup_string +='				<button type="button" class="btn_move" onclick="getVhclRoute(\''+mkId+'\',\''+vhclNo+'\');"><span>운행경로보기</span></button>';
	} else {
		popup_string +='				<button type="button" class="btn_move" onclick="getVhclRouteBefore(\''+mkId+'\',\''+vhclNo+'\');"><span>운행경로보기</span></button>';
	}
	popup_string +='				<span class="stit">차량정보</span>';
	popup_string +='				<ul class="stxt">';
	popup_string +='					<li>' + vhclNo + ' / ' + driverNm + ' / ' + driverTel + '</li>';
	popup_string +='					<li>현재위치 : ' + currLoc + '</li>';
	popup_string +='				</ul>';
	popup_string +='			</div>';
	popup_string +='		</div>';
	popup_string +='	</div>';		
			
	marker["popupContent"] = popup_string;
	makeMarkerPopup(marker);
}

/**
 * 맵 레벨에 따른 아이콘 정의
 */
function markerResize() {
	ICON_SIZE = "";
	var mapLevel = MAP.getZoom();
	
	if(mapLevel >= 12 && mapLevel <= 18) {
		ICON_SIZE='L';
	} else if(mapLevel >= 9 && mapLevel <= 11) {
		ICON_SIZE='M';
	} else if(mapLevel >= 7 && mapLevel <= 8) {
		ICON_SIZE='S';
	} 	
	
	if (RESIZE_CAR_DATA != null) {
		// 이전에 클릭한 id값 초기화
		BEFORE_ID = "";
		
		var list 	= RESIZE_CAR_DATA.list;
		var len		= getSize(list);
		var bounds = new google.maps.LatLngBounds();
		var coordinates = [];
	   
		var makerExList = [];
		var markerList;
		
		var maxLat = 0;
		var maxLon = 0;
		var minLat = 9999999;
		var minLon = 9999999;
		
		var lenCnt = 1;
		
		if (len > 0) {
			for (var i=0; i < len; i++) {
				lenCnt					+=1;
				var oo 					= list[i];
				var lon                 = Number(nvl(oo.COORD_WGS84_X, "0"));
				var lat                 = Number(nvl(oo.COORD_WGS84_Y, "0"));
				var indicateFlag        = oo.INDICATE_FLAG;                  // 차량 표시
				
				var mkId                = oo.VHCL_ID;              // 마커 ID
				var vhclNo              = nvl(oo.VHCL_NO, "-");              // 차량번호
				var currLoc             = oo.CURR_LOC;                       // 현재 위치 주소
				var driverNm            = oo.DRIVER_NM                       // 운전자 명
				var driverTel           = oo.DRIVER_TEL;                     // 운전자 연락처
				
				var gpsYn 				= oo.GPS_YN;                         // GPS 수신 여부
				var mnfYn 				= oo.MNF_YN;                         // 배차 여부
				var driverTelNo 		= nvl(oo.DRIVER_TEL_NO, "-");        // 운전원 연락처
				var driverTelNo2		= nvl(oo.DRIVER_TEL_NO2, "-");       // 운전원 연락처 마스킹
				var centerNm 			= oo.CENTER_NM;                      // 센터명
				var addr 				= oo.LAST_POSITION;                  // 최종 추적 위치
				var lastTime			= oo.LAST_UPD_TIME;                  // 최종 추적 일시
				
				var orgNm 				= oo.ORG_NM;
				var realMobileNo		= nvl(oo.REAL_MOBILE_NO, "-");
				var realMobileNo2		= nvl(oo.REAL_MOBILE_NO2, "-");
				var realVhclNo			= nvl(oo.REAL_VHCL_NO, "-");
				var trkgCd				= oo.TRKG_CD;
				var type                = oo.TYPE;
				var calc1				= replaceAll($("#calc1").val(),"-","");
				var gubunCd             = oo.GUBUN_CD
				var mnfNo               = oo.MNF_NO; // 2017.09.05 <빠져있어서 추가 : 이승수>
				var mnfCd               = oo.MNF_CD;
				
				var markerSizeW  = "";
				var markerSizeH  = "";
				
				deleteMapObject(mkId, "M");				

				var iconImg = "";
				if (ICON_SIZE == "S") {
					iconImg = "/web/jsp/entVhclCntr/img/indicate_S_" + indicateFlag + ".png";
					markerSizeW = 15;
					markerSizeH = 15;
				} else if (ICON_SIZE == "M") {
					iconImg = "/web/jsp/entVhclCntr/img/indicate_M_" + indicateFlag + ".png";
					markerSizeW = 30;
					markerSizeH = 30;
				} else if (ICON_SIZE == "L") {
					iconImg = "/web/jsp/entVhclCntr/img/indicate_L_" + indicateFlag + ".png";
					markerSizeW = 38;
					markerSizeH = 42;
				}
				
				if(lon != 0 && lat != 0) {
					//마커 표출
					var option =   {
						id 					: mkId,
						x 	    			: lon,
						y    				: lat,
						imgUrl 				: iconImg,	
						title               : vhclNo,
						popupContent		: "",									//팝업 HTML
						labelContent		: "",									//라벨 텍스트
						labelClass	 		: "my-custom-class-for-label",			//라벨 CSS CLASS
						customCallback  	: markerPopup,
						imgSizeW			: markerSizeW,
						imgSizeH			: markerSizeH,
						customCallbackParam : { mkId : mkId, vhclNo : vhclNo, currLoc : currLoc, driverNm : driverNm, driverTel : driverTel, mkLength : len }
					}
					addMarker(option);
				}
			} 
			
		}
		
		if(maxLon != 0 && maxLat != 0 && minLon != 0 && minLat != 0) {
			bounds.extend(new google.maps.LatLng(maxLat, maxLon));
			bounds.extend(new google.maps.LatLng(minLat, minLon));
			
			// 리스트 내에 최대/최소 좌표만 보이도록
			MAP.fitBounds(bounds);
			var zoom = MAP.getZoom();
			//console.log('onecode : zoom (1):  ' + zoom);
			if(zoom < MAX_ZOOM) {
				//console.log('onecode :  MAX_ZOOM (2) ' + MAX_ZOOM );
				MAP.setZoom(zoom - 1);
			}
		}
		
		if(INFO_WINDOW != null) { INFO_WINDOW.close(); }
		
	}

}