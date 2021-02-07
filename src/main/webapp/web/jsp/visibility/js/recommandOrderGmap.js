/**
 * Visibility - 구글맵 적용과 관련된 스크립트
 * 
 * 
 * @author	Jang. Jae-hyuk
 * @since	2018. 11. 08.
 */

function clsGMap() {
	this.GMAP;
	//this.GEOCODER;
	
	this.SHOW_STYLE				= MAP_SHOW_ONE_VHCL;
	
	this.INIT_X					= 127.500000;
	this.INIT_Y					= 36.400000;
	this.MIN_ZOOM				= 7;
	this.MAX_ZOOM				= 15;
	this.INIT_ZOOM				= 8;
	
	this.ZOOM_LEVEL				= new Map([	[7,1],[8,1],[9,1],
											[10,2],[11,2],[13,2],
											[14,3],[15,3],[16,3]	]	);	// ZOOM에 따른 ICON 변경 레벨 정의
	
	this.MARKER_ICONS			= new Map([
	          					            [MARKER_TYPE_CURR_VHCL			,{zIndex:100	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL_FIN.png", size:{w:38, h:42}}]
	          					           ,[MARKER_TYPE_UNLOAD_LOC			,{zIndex:101	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/pos-Down.PNG"		, size:{w:49, h:53}}]
	          					           ,[MARKER_TYPE_RECOMM_ORD			,{zIndex:100	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/goods.png"			, size:{w:24, h:24}}]
	          					         ]);
	/* Marker */
	this.MARKERS					= [];
	this.MAP_OBJS					= new Map([
												 ["PATH", []]
												,["LINE", []]
											]);
	this.INFO_WIN					= [];
	//this.VHCL_ROUTE					= null;	// 경로정보. {ROUTE_TYPE:#TYPE#, GPS_ROUTE:[], RP_ROUTE[]}
	
	// Initialize Map
	this.initGMap	= function(divGMap) {
		var center		= new google.maps.LatLng(this.INIT_Y, this.INIT_X);
	    var mapOpt		= {
			         center				: center
			        ,maxZoom			: this.MAX_ZOOM
			        ,minZoom			: this.MIN_ZOOM
			        ,zoom				: this.INIT_ZOOM
			        ,disableDefaultUI	: true
			        ,zoomControl		: true
			        ,zoomControlOptions	: {	style:google.maps.ZoomControlStyle.SMALL }
	    			//,mapTypeId			: DEF_STYLE
			    };

	    console.log("[clsGMap.initGMap()] divGMap["+divGMap+"]");
	    var	directionsDisplay = new google.maps.DirectionsRenderer({
	        polylineOptions: {
	          strokeColor: "white"
	        }
	      });
	    
	    this.GMAP	= new google.maps.Map(document.getElementById("gmap"), mapOpt);
	    this.GMAP.mapTypes.set("DEF_STYLE", new google.maps.StyledMapType(this.DEF_STYLE, { name: 'Default Style' }));
	    directionsDisplay.setMap(this.GMAP);
	    // 버튼설정
	    this.setButtons();
	    
	    // 시도경계지도 설정
	    //this.setRegionArea();
	}
	

	// 지도 표시 유형 변경
	this.setShowStyle		= function(showStyle, param) {
		var	that		= this;
		console.log("[clsGMap.setShowStyle()] showStyle["+showStyle+"] param["+param+"]");
		
		//if(showStyle != null && this.SHOW_STYLE !== showStyle) {
			this.SHOW_STYLE		= showStyle;
			
			// 선택주문 및 주변차량 마커 삭제
			//this.clearMarkers([MARKER_TYPE_CURR_ORD, MARKER_TYPE_VHCL, MARKER_TYPE_VHCL_MOV_UP, MARKER_TYPE_VHCL_MOV_DOWN, MARKER_TYPE_VHCL_FIN, MARKER_TYPE_VHCL_ALM], true);

			switch(this.SHOW_STYLE) {
				// 전체거점 + 사고차량
				case MAP_SHOW_ONE_VHCL :			
					var	vhclInfo		= param.vhclInfo;
					var	nearOrderList	= param.recommandOrderList;
					var	isVhclOrdered	= !isNull(vhclInfo.TOL_NO);	// 차량의 배차여부 확인
					var	vhclPos			= null;
					
					if(vhclInfo == null || isNull(vhclInfo.LNG) || isNull(vhclInfo.LNG)) {
						return;
					} 
					
					// 차량위치를 설정. 미배차라면 차량 현재위치, 배차된 상태라면 하차지 위치를 표시
					if(isVhclOrdered) {
						vhclPos		= new google.maps.LatLng(vhclInfo.ARR_LAT, vhclInfo.ARR_LNG);
					} else {
						vhclPos		= new google.maps.LatLng(vhclInfo.LAT, vhclInfo.LNG);
					}
					console.log("[clsGMap.setShowStyle()] vhclPos["+showStyle+"] param["+param+"]");

					// 맵 중심 설정
					this.GMAP.setZoom(10);
					this.GMAP.setCenter(vhclPos);

					// 차량 마커 생성
					this.addMarkerData(
							MARKER_TYPE_CURR_VHCL
							,{lat : parseFloat(vhclInfo.LAT), lng : parseFloat(vhclInfo.LNG)}
							,MARKER_TYPE_CURR_VHCL
							,vhclInfo
						);
					
					// 차량이 배차된 경우 하차지 마커 생성
					if(isVhclOrdered) {
						this.addMarkerData(
								MARKER_TYPE_UNLOAD_LOC
								,{lat : parseFloat(vhclInfo.ARR_LAT), lng : parseFloat(vhclInfo.ARR_LNG)}
								,MARKER_TYPE_UNLOAD_LOC
								,vhclInfo
							);
					}
					
					// 추천주문 마커 생성
					nearOrderList.forEach(function(item) {
						that.addMarkerData(
								 item.TOL_NO
								,{lat : parseFloat(item.DEP_LAT), lng : parseFloat(item.DEP_LNG)}
								,MARKER_TYPE_RECOMM_ORD
								,item
							);					
						
					});
					
					// 현재 주문 및 주변차량 마커를 표시하고 그 외에는 지도에서 제거
					//this.setMarkerShow([MARKER_TYPE_CURR_ORD, MARKER_TYPE_VHCL, MARKER_TYPE_VHCL_MOV_UP, MARKER_TYPE_VHCL_MOV_DOWN, MARKER_TYPE_VHCL_FIN, MARKER_TYPE_VHCL_ALM], null, null, true, true);
				break;
				
				default :
				break;
			}
			
			this.redraw();
		//}
	}

	// Marker Object 생성하여 저장. Redraw() 실행시 지도에 적용. 필요할 경우 dataObj를 사용하여 추가요소 적용
	this.addMarkerData	= function(id, latLng, type, dataObj) {
		console.log("[clsGMap.addMarkerData()] id["+id+"] type["+type+"]");
		var	markerData		= {
				 id			: id
				,position	: latLng
				,type		: type
				,dataObj	: dataObj
				,isShow		: true
			};
		this.MARKERS.push(markerData);
	}	
	
	// GMap에서 마커 정보를 삭제한다.
	this.clearAllMarkers	= function(isDelete) {
		this.clearMarkers(null, isDelete);
	}
	// GMap에서 특정 타입의 마커 정보를 삭제한다. isDelete=true이면 마커 데이터 자체를 삭제한다.
	this.clearMarkers	= function(arrType, isDelete) {
		var	item;
		
		for(var i=(this.MARKERS.length-1); i>=0; i--) {
			item	= this.MARKERS[i];
			//
			if(arrType === null || arrType.includes(item.type)) {
				// 지도에서 삭제
				if(item.marker != null) item.marker.setMap(null);
				// 데이터 삭제
				if(isDelete) {
					this.MARKERS.splice(i, 1);
				}
			}
		}		
	}
		
	// 맵에서 특정 타입의 객체를 제거한다.
	this.clearMapObjects	= function(arrObjType, isDelete) {
		this.MAP_OBJS.forEach(function(val, key) {
			if(arrObjType === null || arrObjType.includes(key)) {
				if(val != null) {
					val.forEach(function(item) {
						// 지도에서 삭제
						item.setMap(null);
					});
					// 데이터 삭제
					if(isDelete) {
						val.length	= 0;
					}
				}				
			}	
		});
	}
	
	
	// 맵의 마커 그룹 및 출력여부를 확인하여 Data Object를 리턴한다.
	this.getMarkerDataObjByType	= function(typeGrp, isShow) {
		var	arrDataObj	= new Array();
		
		this.MARKERS.forEach(function(item) {
			if(typeGrp == null || item.type.indexOf(typeGrp) >= 0) {
				if(isShow == null || item.isShow) {
					arrDataObj.push(item.dataObj);
				}
			}
		});
		return arrDataObj;
	}
	
	
	// 변경된 데이터를 지도에 업데이트 한다.
	this.redraw		= function() {
		var	that		= this;
		var	currZoom	= this.GMAP.getZoom();
		var	zoomLevel	= this.ZOOM_LEVEL.get(Math.floor(currZoom));	// return 1~3
		var	msg			= null;
		var	arrMsg		= [];		
		
		console.log("[clsGMap.redraw()] MARKERS.length["+this.MARKERS.length+"]");
		this.closeAllInfoWindow();
		
		// 마커를 확인하여 Icon, Label 등을 정의
		this.MARKERS.forEach(function(item, index, array) {
			var	dataObj			= item.dataObj;
			var	icon			= null;
			var	mapIcon			= null;
			var	mapShape		= null;
			var	mapMarker		= null;
			var	markerLabel		= null;
			var	markerTitle		= null;
			var	markerZindex	= 0;

			if(!item.isShow || isNaN(item.position.lat)) {
				if(item.marker != null) item.marker.setMap(null);
				return;
			}
			//console.log("[clsGMap.redraw()-forEach] id["+item.id+"] isShow["+item.isShow+"] index["+index+"] GMAP["+that.GMAP+"]");
			
			// Set Map ICON
			icon			= that.MARKER_ICONS.get(item.type);
			icon.url		= icon.url.replace("##MARKER_TYPE##", item.type);
			
			markerZindex	= icon.zIndex;
			mapIcon			= {	
								 url		: icon.url
								,origin		: new google.maps.Point(0,0)
								//,anchor		: new google.maps.Point(iconSize.w/2, iconSize.h/2)
							};

			// 마커 설명
			markerTitle		= item.type + " / " + item.id;
						
			//console.log("[clsGMap.redraw()-forEach] iconSize["+mapIcon.scaledSize+"] mapIcon["+mapIcon.url+"]");
			if(item.marker == null) {
				mapMarker	= new google.maps.Marker();
				//
				mapMarker.setPosition(item.position);
				mapMarker.setIcon(mapIcon);
				mapMarker.setZIndex(markerZindex);
				mapMarker.setTitle(markerTitle);
				
			} else {
				mapMarker	= item.marker;
			}
			mapMarker.setLabel(markerLabel);
			item.marker	= mapMarker;

			// Event 제거
			google.maps.event.clearInstanceListeners(mapMarker);

			// 클릭하여 마커 선택
			mapMarker.addListener("click", function(e) {
				that.onMarkerClicked(item);
			});
			// 더블클릭하여 마커 선택
			mapMarker.addListener("dblclick", function(e) {
				that.onMarkerSelected(item);
			});
			//
			mapMarker.setAnimation(google.maps.Animation.DROP);	
			
			mapMarker.setMap(that.GMAP);
		});
		
		
		// 경로정보 출력
		if(this.VHCL_ROUTE != null) {
			var	gpsCoords	= new Array();
			var	gpsPath		= null;
			var	rp1Coords	= new Array();
			var	rp1Path		= null;
			var	rp2Coords	= new Array();
			var	rp2Path		= null;
			
			this.VHCL_ROUTE.GPS_ROUTE.forEach(function(item) {
				gpsCoords.push(new google.maps.LatLng(item.y, item.x));
			});
			this.VHCL_ROUTE.RP_ROUTE1.forEach(function(item) {
				rp1Coords.push(new google.maps.LatLng(item.y, item.x));
			});
			this.VHCL_ROUTE.RP_ROUTE2.forEach(function(item) {
				rp2Coords.push(new google.maps.LatLng(item.y, item.x));
			});
			
			if(gpsCoords.length > 0) {
				gpsPath	= new google.maps.Polyline({
					 path			: gpsCoords
					,strokeColor	: "black"
					,strokeWeight	: 2
				});
				gpsPath.setMap(that.GMAP);
				//
				this.MAP_OBJS.get("PATH").push(gpsPath);
			}
			if(rp1Coords.length > 0) {
				rp1Path	= new google.maps.Polyline({
					 path			: rp1Coords
					,strokeColor	: "blue"
					,strokeWeight	: 3
				});
				rp1Path.setMap(that.GMAP);
				//
				this.MAP_OBJS.get("PATH").push(rp1Path);
			}
			if(rp2Coords.length > 0) {
				rp2Path	= new google.maps.Polyline({
					 path			: rp2Coords
					,strokeColor	: "red"
					,strokeWeight	: 3
				});
				rp2Path.setMap(that.GMAP);
				//
				this.MAP_OBJS.get("PATH").push(rp2Path);
			}			
		}
		
	}	// end of redraw;
	
	
	// 지도 위의 마커를 클릭할 경우
	this.onMarkerClicked	= function(item) {
		var	param	= null;
		console.log("[onMarkerClicked()] item["+item.ID+"]");
		this.showMarkerInfo(item.id);
	}
	
	// 지도 위의 마커를 선택할 경우
	this.onMarkerSelected	= function(item) {
		var	param	= null;
		console.log("[onMarkerSelected()] item["+item.ID+"]");
		if(item.type.indexOf(MARKER_TYPE_RECOMM_ORD) >= 0) {
			onOrderSelected(item.dataObj.VHCL_NO);
		}
	}

	// markerId 에 해당하는 마커의 Info Window를 출력한다.
	this.showMarkerInfo			= function(markerId) {
		console.log("[clsGMap.showMarkerInfo()] markerId["+markerId+"]");
		var	item	= this.MARKERS.find(function(item) {
							if( (item.id == markerId || item.id.indexOf("_"+markerId) > 0) && item.isShow) return true;
							else return false;
						});
		this.setInfoWindow(item);
	}
		
	// 마커에 Info Window 세팅
	this.setInfoWindow	= function(item) {
		var	mapMarker		= item.marker;
		var	type			= item.type;
		var	dataObj			= item.dataObj;
		var	that			= this;
		var	infoWin			= null;
		var	infoCont		= null;
		var	isStatic		= false;
		console.log("[clsGMap.setInfoWindow()] id["+item.id+"] type["+type+"] mapMarker["+mapMarker+"]");

		if(this.INFO_WIN.length >= 50) {
			console.log("[clsGMap.setInfoWindow()] Too much info required...");
			return "Too much info required...";
		}
		
		// 차량마커
		if([MARKER_TYPE_CURR_VHCL, MARKER_TYPE_UNLOAD_LOC].includes(type)) {
			infoCont	= DIV_VHCL_INFO;
			infoCont	= infoCont.replace(/##VHCL_NO##/g		,dataObj.VHCL_NO);
			infoCont	= infoCont.replace(/##STATUS##/g		,dataObj.STATUS_NM);
			infoCont	= infoCont.replace(/##VHCL_INFO##/g		,dataObj.VHCL_KND_NM + " " + dataObj.TON_NM);
			infoCont	= infoCont.replace(/##DEP_NODE_NM##/g	,nvl(dataObj.DEP_SI_GU, ""));
			infoCont	= infoCont.replace(/##ARR_NODE_NM##/g	,nvl(dataObj.ARR_SI_GU, ""));
		}
		// 주문마커
		else if([MARKER_TYPE_RECOMM_ORD].includes(type)) {
			infoCont	= DIV_ORD_INFO;
			infoCont	= infoCont.replace(/##SHPR_NM##/g		,dataObj.SHPR_NM);
			infoCont	= infoCont.replace(/##EXE_CORP_NM##/g	,dataObj.EXE_CORP_NM);
			infoCont	= infoCont.replace(/##TOL_NO##/g		,dataObj.TOL_NO);
			infoCont	= infoCont.replace(/##VHCL##/g			,dataObj.REQ_VHCL_KND_NM + " " + dataObj.REQ_VHCL_TON_NM);
			infoCont	= infoCont.replace(/##LOAD_LOC##/g		,dataObj.DEP_SI_GU);
			infoCont	= infoCont.replace(/##UNLOAD_LOC##/g	,dataObj.ARR_SI_GU);
		} else {
			return;
		}

		infoWin			= new google.maps.InfoWindow({
			 content : infoCont
			,zIndex	: 255
		});
		//
		infoWin.open(this.GMAP, mapMarker);
		this.INFO_WIN.push(infoWin);
		
		// 정적/동적 인포윈도우 처리
		if(isStatic) {
			//this.INFO_WIN.push(infoWin);
			setTimeout(function() {
				infoWin.close();
			}, 10000);
			
		} else {
			setTimeout(function() {
				infoWin.close();
			}, 3000);
		}
	}	
	
	
	// 열려있는 인포 윈도우 전체를 닫는다
	this.closeAllInfoWindow		= function() {
		this.INFO_WIN.forEach(function(w) {
			w.close();
		});
		this.INFO_WIN.length	= 0;
	}
	
	// markerId 에 해당하는 마커의 Info Window를 출력한다.
	this.showMarkerInfo			= function(markerId) {
		var	item	= this.MARKERS.find(function(item) {
							if(item.id == markerId) return true;
							else return false;
						});
		if(item != null) {
			//alert("item.position ::: "+item.position);
			this.GMAP.setCenter(new google.maps.LatLng(item.position.lat, item.position.lng));
			this.setInfoWindow(item);
		}
	}
		
	
	// 버튼 컨트롤 정의
	this.setButtons	= function() {
		var	that		= this;
		var	divHome		= document.createElement("div");
		/*
		divHome.innerHTML	= DIV_HOME;
		
		// Setup click-event listener: simply set the map to Suwon
		google.maps.event.addDomListener(divHome, 'click', function() {
			onHomeSelected();
		});
		*/
		this.GMAP.controls[google.maps.ControlPosition.TOP_RIGHT].push(divHome);
	}
		

	// 시도경계지도 설정
	this.setRegionArea	= function() {
		var	mapData		= this.GMAP.data; 
		
		mapData.loadGeoJson(FILE_GEOJSON_SIDO, { idPropertyName: 'CTP_KOR_NM' });		    
		mapData.setStyle(function (feature) {
	        var color = "lightblue";//feature.getProperty('fillColor');
	        return {
	            fillColor: color,
	            strokeWeight:1
	        };
	    });
	    
		//mapData.setStyle(styleFeature);
		mapData.addListener('mouseover', mouseInToRegion);
		mapData.addListener('mouseout', mouseOutOfRegion);	    
	}
	function mouseInToRegion(e) {
		e.feature.setProperty("state", "hover");
	}
	function mouseOutOfRegion(e) {
		e.feature.setProperty("state", "normal");
	}		
	function styleFeature(feature) {
        var	zIndex			= (feature.getProperty("state") === "hover")? 2:1;
        var	outlineWeight	= zIndex;
        var	code			= feature.getProperty("CTP_KOR_NM");
        //var	color			= "hsl("+zIndex*100+", "+code.substring(0,1)*20+"%, "+code.substring(1,2)*10+"%)";
        var	color			= (feature.getProperty("state") === "hover")? "blue":"yellow";
        //console.log("#### zIndex["+zIndex+"]  code["+code+"] color["+color+"]");
		
		return {
					strokeWeight: outlineWeight
					//,strokeColor: '#fff'
					,zIndex: zIndex
					,fillColor: color
					,fillOpacity: .2
					,visible: true			
				};			
	}	
		
};

		