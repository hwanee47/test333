/**
 * Visibility - 구글맵 적용과 관련된 스크립트
 * 
 * 
 * @author	Jang. Jae-hyuk
 * @since	2018. 11. 08.
 */

function clsGMap() {
	this.GMAP;
	this.SHOW_STYLE				= MAP_SHOW_ALL_MATCH;
	
	this.INIT_X					= 127.500000;
	this.INIT_Y					= 36.400000;
	this.MIN_ZOOM				= 7;
	this.MAX_ZOOM				= 15;
	this.INIT_ZOOM				= 8;
	
	this.ZOOM_LEVEL				= new Map([	[7,1],[8,1],[9,1],
											[10,2],[11,2],[13,2],
											[14,3],[15,3],[16,3]	]	);	// ZOOM에 따른 ICON 변경 레벨 정의
	
	this.MARKER_ICONS			= new Map([
	          					            [MARKER_TYPE_ORD_NO_MATCH		,{zIndex:1		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-white.png"		, size:{w:38, h:64}}]
	          					           ,[MARKER_TYPE_ORD_MATCH_1ST		,{zIndex:101	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/center-red.png"		, size:{w:38, h:64}}]
	          					           ,[MARKER_TYPE_ORD_MATCH_1ST_DN	,{zIndex:91		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-orange.png"		, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_ORD_MATCH_2ND		,{zIndex:100	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/center-blue.png"		, size:{w:38, h:64}}]
	          					           ,[MARKER_TYPE_ORD_MATCH_2ND_DN	,{zIndex:90		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-lightGreen.png"	, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_CURR_ORD			,{zIndex:200	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/goods.png"			, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_ORD_RECOMMAND		,{zIndex:50		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/center-blue.png"		, size:{w:38, h:64}}]
	          					         ]);
	/* Marker */
	this.MARKERS					= [];
	this.MAP_OBJS					= new Map([
												 ["CIRCLE"	, []]
												,["POLY"	, []]
												,["LINE"	, []]
												,["POINT"	, []]
												,["TIMER"	, []]
											]);
	this.INFO_WIN					= [];
	
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
		
		this.SHOW_STYLE		= showStyle;
		//
		switch(this.SHOW_STYLE) {
			// 모든 매칭정보 출력
			case MAP_SHOW_ALL_MATCH :			
				// 추천목록 마커 삭제
				this.clearMarkers([MARKER_TYPE_CURR_ORD, MARKER_TYPE_ORD_RECOMMAND], true);

				this.GMAP.setZoom(8);
				this.GMAP.setCenter(new google.maps.LatLng(this.INIT_Y, this.INIT_X));
				
				// 주문목록 출력
				this.setMarkerShow([MARKER_TYPE_ORD_NO_MATCH, MARKER_TYPE_ORD_MATCH_1ST, MARKER_TYPE_ORD_MATCH_2ND], true, true);			
			break;
			
			// 1개의 매칭정보 출력 + 추천주문
			case MAP_SHOW_RECOMMAND :
				this.GMAP.setZoom(8);
				this.GMAP.setCenter(new google.maps.LatLng(this.INIT_Y, this.INIT_X));
				
				// 주문목록 출력
				this.setMarkerShow([MARKER_TYPE_CURR_ORD, MARKER_TYPE_ORD_RECOMMAND], true, true);			
			break;
				
			default :
			break;
		}
		
		this.redraw();
	}

	// Marker Object 생성하여 저장. Redraw() 실행시 지도에 적용. 필요할 경우 dataObj를 사용하여 추가요소 적용
	this.addMarkerData	= function(id, latLng, type, dataObj) {
		console.log("[clsGMap.addMarkerData()] id["+id+"] type["+type+"]");
		var	markerData		= {
				 id			: id+""
				,position	: latLng
				,type		: type
				,dataObj	: dataObj
				,isShow		: true
			};
		this.MARKERS.push(markerData);
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
		
	// 타입, 거점ID, 고객ID에 따라 마커의 출력여부를 세팅한다.
	// arrType = null : 전체 데이터에 적용
	// isOtherApply = true : 대상이 아닌 데이터는 반대로 적용
	this.setMarkerShow	= function(arrType, isShow, isOtherApply) {
		console.log("[clsGMap.setMarkerShow()] arrType["+arrType+"] isShow["+isShow+"] isOtherApply["+isOtherApply+"]");
		this.MARKERS.forEach(function(item) {
			// 타입체크
			if(arrType == null || arrType.includes(item.type)) {
				item.isShow	= isShow;
			} else if(isOtherApply) {
				item.isShow	= !isShow;
			}
		});
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
						if("TIMER" == key) {
							window.clearTimeout(val);
						} else {
							// 지도에서 삭제
							item.setMap(null);
						}
					});
					// 데이터 삭제
					if(isDelete) {
						val.length	= 0;
					}
				}				
			}	
		});
		
		//this.closeAllInfoWindow();
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
		this.clearMapObjects(null, true);
		
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
								,labelOrigin: new google.maps.Point(icon.size.w/2, icon.size.h/3)
								,origin		: new google.maps.Point(0,0)
								//,anchor		: new google.maps.Point(iconSize.w/2, iconSize.h/2)
							};
			
			// 툴팁정보
			markerTitle		= "● "+dataObj.STATUS_NM + " "+(!(isNull(item.TRIP_SEQ))? "("+item.TRIP_SEQ+"배차"+")":"") + "\n"
								+ "● "+dataObj.SHPR_NM+" / "+dataObj.REQ_VHCL_KND_NM +" "+dataObj.REQ_VHCL_TON_NM + "\n"
								+ "● "+ dataObj.DEP_SI_GU + " → " + dataObj.ARR_SI_GU;
			
			if([MARKER_TYPE_ORD_MATCH_1ST, MARKER_TYPE_ORD_MATCH_2ND, MARKER_TYPE_ORD_RECOMMAND].includes(item.type)) {
				markerLabel		= {
						 text		: ""+dataObj.SHIPMENT_ID
						,color		: "darkblue"
						//,fontFamily	: "consolas"
						,fontWeight	: "bold"
						,fontSize	: "15px"
					}
			}
			
			if(item.marker == null) {
				mapMarker	= new google.maps.Marker();
				//
				mapMarker.setPosition(item.position);
				mapMarker.setIcon(mapIcon);
				mapMarker.setZIndex(markerZindex);
				mapMarker.setTitle(markerTitle);
				mapMarker.setLabel(markerLabel);
				
			} else {
				mapMarker	= item.marker;
			}
			
			// 데이터와 마커 연결
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
		
		// 현재 선택된 복화건 출력
		if(CURR_TRIP_INFO != null) {
			this.drawTrip(CURR_TRIP_INFO);
		}
	}	// end of redraw;
	
	
	// 복화내용을 지도에 출력
	this.drawTrip		= function(tripObj) {
		var	ship1Obj		= tripObj.ship1Obj;
		var	ship2Obj		= tripObj.ship2Obj;
		var	coords			= new Array();
		var	ship1UpLoc		= {lat:parseFloat(ship1Obj.DEP_LAT), lng:parseFloat(ship1Obj.DEP_LNG)};
		var	ship1DnLoc		= {lat:parseFloat(ship1Obj.ARR_LAT), lng:parseFloat(ship1Obj.ARR_LNG)}
		var	ship2UpLoc		= {lat:parseFloat(ship2Obj.DEP_LAT), lng:parseFloat(ship2Obj.DEP_LNG)};
		var	ship2DnLoc		= {lat:parseFloat(ship2Obj.ARR_LAT), lng:parseFloat(ship2Obj.ARR_LNG)}
	    var ship1UpCircle	= null;
	    var ship2UpCircle	= null;
	    
		this.clearMapObjects(null, true);

	    ship1UpCircle	= new google.maps.Circle({
								 strokeColor: '#FF0000'
								,strokeOpacity: 0.3
								,strokeWeight: 2
								,fillColor: '#FF0000'
								,fillOpacity: 0.2
								,center: ship1UpLoc
	    						,radius: 50*1000
	    						,zIndex : 1
	    					});
	    ship2UpCircle	= new google.maps.Circle({
								 strokeColor: '#00FF00'
								,strokeOpacity: 0.3
								,strokeWeight: 2
								,fillColor: '#00FF00'
								,fillOpacity: 0.2
								,center: ship2UpLoc
								,radius: 50*1000
	    						,zIndex : 1
							});
	    
		this.MAP_OBJS.get("CIRCLE").push(ship1UpCircle);
		this.MAP_OBJS.get("CIRCLE").push(ship2UpCircle);
		//
		ship1UpCircle.setMap(this.GMAP);
		ship2UpCircle.setMap(this.GMAP);

	    // 1상차지 --> 1하차지
	    this.drawArcPoly(
				 new google.maps.LatLng(ship1UpLoc)
				,new google.maps.LatLng(ship1DnLoc)
				,1
				,"blue"
				,(TRIP_DRAW_STEP * TRIP_DRAW_SPEED)*0.5
	    	);

	    // 1하차지 --> 2상차지
	    this.drawArcPoly(
				 new google.maps.LatLng(ship1DnLoc)
				,new google.maps.LatLng(ship2UpLoc)
				,1
				,"#555555"
				,(TRIP_DRAW_STEP * TRIP_DRAW_SPEED)*1.5
	    	);

	    // 상차지 --> 하차지
	    this.drawArcPoly(
				 new google.maps.LatLng(ship2UpLoc)
				,new google.maps.LatLng(ship2DnLoc)
				,1
				,"red"
				,(TRIP_DRAW_STEP * TRIP_DRAW_SPEED)*2.5
	    	);
	    
	    // 인포윈도우 출력
		var	infoTimer	= window.setTimeout(function(marker1Id, marker2Id) {
			GMAP.showMarkerInfo(marker1Id);
			GMAP.showMarkerInfo(marker2Id);
		}, (TRIP_DRAW_STEP * TRIP_DRAW_SPEED)*4, ship1Obj.SHIPMENT_ID, ship2Obj.SHIPMENT_ID);
		this.MAP_OBJS.get("TIMER").push(infoTimer);
	}
	
	// 원호를 출력
	this.drawArcPoly	= function(pos1, pos2, ratio, color, delay) {
		var	coords		= [];
		var	path		= null;
		var	step		= TRIP_DRAW_STEP;
		var	speed		= TRIP_DRAW_SPEED;
		var	stepIdx		= 0;
		var	headingGap	= 0;
		//
		var	center		= null;
		var	distance	= 0;
		var	heading		= 0;
		var	arcCenter	= null;
		var	arcRadius	= 0;
		var	fromHeading	= -1;
		var	toHeading	= -1;
		
		center		= new google.maps.LatLng({
							 lat	: (pos1.lat() + pos2.lat()) / 2
							,lng	: (pos1.lng() + pos2.lng()) / 2
						});
		distance	= google.maps.geometry.spherical.computeDistanceBetween(pos1, pos2);
		heading		= google.maps.geometry.spherical.computeHeading(pos1, pos2);		
		arcRadius	= distance * ratio;
		arcCenter	= google.maps.geometry.spherical.computeOffsetOrigin(
							 center
							,Math.sqrt(Math.pow(arcRadius,2)-Math.pow(distance/2,2))
							,heading + 90.0
						);
		fromHeading	= google.maps.geometry.spherical.computeHeading(arcCenter, pos1);
		toHeading	= google.maps.geometry.spherical.computeHeading(arcCenter, pos2);
		//console.log("[algoMatchGmap.js-drawArcPoly()] fromHeading["+fromHeading+"] toHeading["+toHeading+"]");

		if(Math.abs(fromHeading - toHeading) > 180) {
			fromHeading	= (fromHeading < 0)? fromHeading+360 : fromHeading;
			toHeading	= (toHeading < 0)? toHeading+360 : toHeading;
		}
		
		headingGap	= (toHeading-fromHeading)/step;
		//console.log("[algoMatchGmap.js-drawArcPoly()] fromHeading["+fromHeading+"] toHeading["+toHeading+"] headingGap["+headingGap+"]");
		//
		while(stepIdx < step) {
			coords.push(
					google.maps.geometry.spherical.computeOffset(
						arcCenter, arcRadius, fromHeading + headingGap*stepIdx
					)
				);
			//
			stepIdx++;
		}

		// 맵에 출력
		path	= new google.maps.Polyline({
			 strokeColor	: color
			,strokeWeight	: 5
			,icons			: [	
			      			   		 {icon : {path : google.maps.SymbolPath.FORWARD_CLOSED_ARROW, scale : 3, offset:"100%"}}
			      			   		,{icon : {path : "M 0, -1, 0, 1", scale : 4, repeat : "20px", offset:"0%"}}
								]
			,path			: []
		});
		path.setMap(this.GMAP);
		this.MAP_OBJS.get("POLY").push(path);
		
		//var	pathMarker	= new google.maps.Marker({icon : google.maps.SymbolPath.FORWARD_CLOSED_ARROW});
		for(var i=0; i<coords.length; i++) {
			window.setTimeout(function(coord) {
				var	latlng	= new google.maps.LatLng(coord.lat(), coord.lng());
				path.getPath().push(latlng);
			}, i * speed + delay, coords[i]);
		}

	}
	
	
	// 지도 위의 마커를 클릭할 경우
	this.onMarkerClicked	= function(markerItem) {
		console.log("[onMarkerClicked()] markerItem["+markerItem.id+"]");
		if(markerItem.type.indexOf(MARKER_TYPE_ORD) >= 0) {
			onOrderClicked(markerItem.dataObj.SHIPMENT_ID);
		}
	}
	
	// 지도 위의 마커를 선택할 경우
	this.onMarkerSelected	= function(markerItem) {
		var	param	= null;
		console.log("[onMarkerSelected()] markerItem["+markerItem.id+"]");
		if(markerItem.type.indexOf(MARKER_TYPE_ORD) >= 0) {
			onOrderSelected(markerItem.dataObj.SHIPMENT_ID);
		}
	}

	
	// 열려있는 인포 윈도우 전체를 닫는다
	this.closeAllInfoWindow		= function() {
		this.INFO_WIN.forEach(function(w) {
			w.setMap(null);
			w.close();
		});
		this.INFO_WIN.length	= 0;
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
		
		if([MARKER_TYPE_ORD_MATCH_1ST, MARKER_TYPE_ORD_MATCH_2ND, MARKER_TYPE_ORD_MATCH_1ST_DN, MARKER_TYPE_ORD_MATCH_2ND_DN, MARKER_TYPE_CURR_ORD].includes(type)) {
			infoCont	= DIV_MATCH_INFO;
			infoCont	= infoCont.replace(/##TRIP_SEQ##/g		,dataObj.TRIP_SEQ);
		} else if([MARKER_TYPE_ORD_RECOMMAND].includes(type)) {
			infoCont	= DIV_MATCH_INFO;
			infoCont	= infoCont.replace(/##TRIP_SEQ##/g	,nvl(dataObj.REC_TRIP_SEQ));
		} else if([MARKER_TYPE_ORD_NO_MATCH].includes(type)) {
			infoCont		= DIV_NO_MATCH_INFO;
		}
		infoCont	= infoCont.replace(/##SHIPMENT_ID##/g	,dataObj.SHIPMENT_ID);
		infoCont	= infoCont.replace(/##STATUS_NM##/g		,dataObj.STATUS_NM);
		infoCont	= infoCont.replace(/##SHPR_NM##/g		,dataObj.SHPR_NM);
		infoCont	= infoCont.replace(/##VHCL##/g			,dataObj.REQ_VHCL_KND_NM+" "+dataObj.REQ_VHCL_TON_NM);
		infoCont	= infoCont.replace(/##DEP_SI_GU##/g		,dataObj.DEP_SI_GU);
		infoCont	= infoCont.replace(/##ARR_SI_GU##/g		,dataObj.ARR_SI_GU);
		infoCont	= infoCont.replace(/##DEP_REQ_TIME##/g	,dataObj.DEP_REQ_TIME.substr(0,2)+":"+dataObj.DEP_REQ_TIME.substr(2,2));
		infoCont	= infoCont.replace(/##ARR_REQ_TIME##/g	,dataObj.ARR_REQ_TIME.substr(0,2)+":"+dataObj.ARR_REQ_TIME.substr(2,2));
		
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
		
	
	// 버튼 컨트롤 정의
	this.setButtons	= function() {
		var	that		= this;
		var	divHome		= document.createElement("div");
		
		divHome.innerHTML	= DIV_HOME;
		
		// Setup click-event listener: simply set the map to Suwon
		google.maps.event.addDomListener(divHome, 'click', function() {
			onHomeSelected();
		});
		
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

		