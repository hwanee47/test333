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
	
	this.SHOW_STYLE				= MAP_SHOW_ALL_BASE;
	
	this.INIT_X					= 127.500000;
	this.INIT_Y					= 36.400000;
	this.MIN_ZOOM				= 7;
	this.MAX_ZOOM				= 15;
	this.INIT_ZOOM				= 8;
	
	this.DEF_STYLE					= [
	         	  {
	         	    featureType: "administrative",
	         	    elementType: "labels",
	         	    stylers: [
	         	      { visibility: "off" }
	         	    ]
	         	  },{
	         	    featureType: "poi",
	         	    elementType: "labels.text",
	         	    stylers: [
	         	      { visibility: "off" }
	         	    ]
	         	  },{
	         	    featureType: "water",
	         	    elementType: "labels",
	         	    stylers: [
	         	      { visibility: "off" }
	         	    ]
	         	  },{
	         	    featureType: "road",
	         	    elementType: "labels",
	         	    stylers: [
	         	      { visibility: "off" }
	         	    ]
	         	  }
	         	];	
	
	this.ZOOM_LEVEL				= new Map([	[7,1],[8,1],[9,1],
											[10,2],[11,2],[13,2],
											[14,3],[15,3],[16,3]	]	);	// ZOOM에 따른 ICON 변경 레벨 정의
	
	this.MARKER_ICONS			= new Map([
	          					            [MARKER_TYPE_BASE			,{zIndex:100	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/center-blue.png"		, size:{w:38, h:64}}]
	          					           ,[MARKER_TYPE_BASE_ALM		,{zIndex:101	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/center-red.png"		, size:{w:38, h:64}}]
	          					           ,[MARKER_TYPE_ORD_VR			,{zIndex:10		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-white.png"		, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_ORD_V			,{zIndex:10		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-white.png"		, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_ORD_NA			,{zIndex:20		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-lightGreen.png"	, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_ORD_NA1		,{zIndex:30		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-green.png"		, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_ORD_NA2		,{zIndex:40		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-orange.png"		, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_ORD_NA_ALM		,{zIndex:110	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-red.png"			, size:{w:15, h:15}}]
	          					            //
	          					           ,[MARKER_TYPE_CURR_ORD		,{zIndex:100	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/goods.png"			, size:{w:24, h:24}}]
	          					            //
	          					           ,[MARKER_TYPE_VHCL			,{zIndex:10		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-##MARKER_TYPE##.png"		, size:{w:49, h:53}}]
	          					           ,[MARKER_TYPE_VHCL_MOV_UP	,{zIndex:20		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-##MARKER_TYPE##.png"		, size:{w:30, h:30}}]
	          					           ,[MARKER_TYPE_VHCL_MOV_DOWN	,{zIndex:20		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-##MARKER_TYPE##.png"		, size:{w:30, h:30}}]
	          					           ,[MARKER_TYPE_VHCL_ALM		,{zIndex:102	,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-##MARKER_TYPE##.png"		, size:{w:15, h:15}}]
	          					           ,[MARKER_TYPE_VHCL_FIN		,{zIndex:10		,url:CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-##MARKER_TYPE##.png"		, size:{w:15, h:15}}]
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
			this.clearMarkers([MARKER_TYPE_CURR_ORD, MARKER_TYPE_VHCL, MARKER_TYPE_VHCL_MOV_UP, MARKER_TYPE_VHCL_MOV_DOWN, MARKER_TYPE_VHCL_FIN, MARKER_TYPE_VHCL_ALM], true);

			switch(this.SHOW_STYLE) {
				// 전체거점 + 사고차량
				case MAP_SHOW_ALL_BASE :			
					this.GMAP.setZoom(8);
					this.GMAP.setCenter(new google.maps.LatLng(this.INIT_Y, this.INIT_X));
					
					// 거점 및 지연차량만 출력
					this.setMarkerShow([MARKER_TYPE_BASE, MARKER_TYPE_BASE_ALM, MARKER_TYPE_ORD_NA_ALM], null, null, true, true);					
				break;
				
				// 1거점 + 거점주문 전체
				case MAP_SHOW_ONE_BASE :
					this.GMAP.setZoom(9);
					this.GMAP.setCenter({
							 lat:parseFloat(BASE_LOC_MAP.get(param).lat)
							,lng:parseFloat(BASE_LOC_MAP.get(param).lng)
						});
					
					// 특정 거점의 주문만 출력
					this.setMarkerShow(null, [param], null, true, true);
				break;
				
				// 고객-거점 주문
				case MAP_SHOW_ONE_SHPR :
					this.GMAP.setZoom(9);
					this.GMAP.setCenter({
							 lat:parseFloat(BASE_LOC_MAP.get(param.baseCorpId).lat)
							,lng:parseFloat(BASE_LOC_MAP.get(param.baseCorpId).lng)
						});
					
					// 특정 고객의 주문만 출력
					this.setMarkerShow(null, [param.baseCorpId], [param.shprId], true, true);
					
					// 해당 거점 출력
					this.setMarkerShow([MARKER_TYPE_BASE, MARKER_TYPE_BASE_ALM], [param.baseCorpId], null, true, false);
				break;

				// 1주문 (주변 차량위치 표시)
				case MAP_SHOW_ONE_ORD :
					var	orderInfo		= param.orderInfo;
					var	nearVhclList	= param.nearVhclList;
					
					this.GMAP.setZoom(10);
					this.GMAP.setCenter(new google.maps.LatLng(orderInfo.DEP_LAT, orderInfo.DEP_LNG));

					if(orderInfo == null || isNull(orderInfo.LNG) || isNull(orderInfo.LNG)) {
						return;
					} else {
						// 선택주문 마커 생성
						this.addMarkerData(
								 MARKER_TYPE_CURR_ORD
								,null
								,{lat : parseFloat(orderInfo.LAT), lng : parseFloat(orderInfo.LNG)}
								,MARKER_TYPE_CURR_ORD
								,orderInfo
							);
						
						// 주변차량 마커 생성
						nearVhclList.forEach(function(item) {
							item.markerType	= VHCL_STATUS_TYPE_MAP.get(item.STATUS).markerType;
							//
							that.addMarkerData(
									 item.VHCL_NO
									,null
									,{lat : parseFloat(item.LAT), lng : parseFloat(item.LNG)}
									,item.markerType
									,item
								);					
							
						});
						
						// 현재 주문 및 주변차량 마커를 표시하고 그 외에는 지도에서 제거
						this.setMarkerShow([MARKER_TYPE_CURR_ORD, MARKER_TYPE_VHCL, MARKER_TYPE_VHCL_MOV_UP, MARKER_TYPE_VHCL_MOV_DOWN, MARKER_TYPE_VHCL_FIN, MARKER_TYPE_VHCL_ALM], null, null, true, true);
					}
				break;				
				
				default :
				break;
			}
			
			this.redraw();
		//}
	}

	// Marker Object 생성하여 저장. Redraw() 실행시 지도에 적용. 필요할 경우 dataObj를 사용하여 추가요소 적용
	this.addMarkerData	= function(id, baseCorpId, latLng, type, dataObj) {
		//console.log("[clsGMap.addMarkerData()] id["+id+"] baseCorpId["+baseCorpId+"] type["+type+"]");
		var	markerData		= {
				 id			: id
				,baseCorpId	: baseCorpId
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
	// arrType, arrBaseCorpId, arrShprId = null : 전체 데이터에 적용
	// isOtherApply = true : 대상이 아닌 데이터는 반대로 적용
	this.setMarkerShow	= function(arrType, arrBaseCorpId, arrShprId, isShow, isOtherApply) {
		this.MARKERS.forEach(function(item) {
			// 타입체크
			if(arrType == null || arrType.includes(item.type)) {
				// 거점ID 체크
				if(arrBaseCorpId == null || arrBaseCorpId.includes(item.baseCorpId)) {
					// 고객 ID 체크
					if(arrShprId == null || arrShprId.includes(item.dataObj.SHPR_ID)) {
						item.isShow	= isShow;
					} else if(isOtherApply) {
						item.isShow	= !isShow;
					}
				} else if(isOtherApply) {
					item.isShow	= !isShow;
				}
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
								,labelOrigin: new google.maps.Point(icon.size.w/2, icon.size.h/3)
								,origin		: new google.maps.Point(0,0)
								//,anchor		: new google.maps.Point(iconSize.w/2, iconSize.h/2)
							};

			// Type에 따른 마커 설정
			if([MARKER_TYPE_BASE, MARKER_TYPE_BASE_ALM].includes(item.type)) {
				markerTitle		= dataObj.name;
				markerLabel		= {
										 text		: ""+getOpRate(dataObj.BASE_CORP_ID, CURR_SHPR_IDX).opRate+"%"
										,color		: "darkblue"
										,fontFamily	: "consolas"
										,fontWeight	: "bold"
										,fontSize	: "15px"
									}
			} else if(item.type.indexOf(MARKER_TYPE_VHCL) >= 0 ) {	// 차량마커
				markerTitle		= dataObj.VHCL_NO;
				
			} else {	// 주문마커
				markerTitle		= dataObj.SHPR_NM+"\n("+dataObj.REQ_VHCL_KND_NM+"/"+dataObj.REQ_VHCL_TON_NM+")";
			}
						
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
			mapMarker.setMap(that.GMAP);
			
			item.marker	= mapMarker;
			msg			= that.setMarkerEvent(item);
			//if(msg != null) arrMsg.push(msg);
			//
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
		if(item.type.indexOf(MARKER_TYPE_BASE) >= 0) {
			onBaseClicked(item.id);
		} else if(item.type.indexOf(MARKER_TYPE_ORD) >= 0) {
			onOrderClicked(item.dataObj.TOL_NO);
		} else if(item.type.indexOf(MARKER_TYPE_VHCL) >= 0) {
			onVhclClicked(item.dataObj.VHCL_NO);
		} else {
			this.showMarkerInfo(item);
		}
	}
	
	// 지도 위의 마커를 선택할 경우
	this.onMarkerSelected	= function(item) {
		var	param	= null;
		console.log("[onMarkerSelected()] item["+item.ID+"]");
		if(item.type.indexOf(MARKER_TYPE_BASE) >= 0) {
			onBaseSelected(item.id);
		} else if(item.type.indexOf(MARKER_TYPE_ORD) >= 0) {
			onOrderSelected(item.dataObj.TOL_NO);
		} else if(item.type.indexOf(MARKER_TYPE_VHCL) >= 0) {
			onVhclSelected(item.dataObj.VHCL_NO);
		}
	}

	
	// 마커의 타입 및 상황에 따라 이벤트를 적용
	// item : MARKERS 배열의 item
	this.setMarkerEvent		= function(item) {
		var	that			= this;
		var	mapMarker		= item.marker;
		var	type			= item.type;
		var	dataObj			= item.dataObj;
		var	isInfo			= false;
		var	animation		= null;
		var	resultMsg		= null;
		
		// Event 제거
		google.maps.event.clearInstanceListeners(mapMarker);
		
		// Style에 따라 마커 표시
		switch(this.SHOW_STYLE) {
			case MAP_SHOW_ALL_BASE : // 전체거점 + 사고차량		
				if(type.indexOf(MARKER_TYPE_BASE) >= 0) {
					animation	= google.maps.Animation.DROP;
					
				} else if(type === MARKER_TYPE_ORD_NA_ALM ) {
					//isInfo		= true;
					animation	= google.maps.Animation.DROP;
				}
			break;
			
			// 1거점 + 거점주문 전체
			case MAP_SHOW_ONE_BASE :
			// 고객주문 전체
			case MAP_SHOW_ONE_BASE :
				if(type.indexOf(MARKER_TYPE_BASE) >= 0) {
					if(CURR_BASE_CORP_ID === dataObj.id) {
						animation	= google.maps.Animation.DROP;
						isInfo		= true;
					}
					
				} else if(type.indexOf(MARKER_TYPE_ORD_NA) >= 0) {
					if(CURR_BASE_CORP_ID === dataObj.BASE_CORP_ID) {
						animation	= google.maps.Animation.DROP;
						//
						if(type === MARKER_TYPE_ORD_NA_ALM) {
							//isInfo	= true;
						}
					}
				}
			break;
			
			// 고객주문 전체
			case MAP_SHOW_ONE_ORD :
				if(type == MARKER_TYPE_CURR_ORD) {
					animation	= google.maps.Animation.DROP;
					isInfo		= true;
				}
			break;
		}
		
		// 클릭하여 마커 선택
		mapMarker.addListener("click", function(e) {
			that.onMarkerClicked(item);
		});
		// 더블클릭하여 마커 선택
		mapMarker.addListener("dblclick", function(e) {
			that.onMarkerSelected(item);
		});
		//
		mapMarker.setAnimation(animation);
		//
		if(isInfo) {
			resultMsg	= this.setInfoWindow(item);
		}
		
		return resultMsg;
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
		if(CURR_SHOW_STYLE != MAP_SHOW_ALL_BASE) {
			this.GMAP.setCenter(new google.maps.LatLng(item.position.lat, item.position.lng));
		}
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
		//console.log("[clsGMap.setInfoWindow()] id["+item.id+"] type["+type+"] mapMarker["+mapMarker+"]");

		if(this.INFO_WIN.length >= 50) {
			console.log("[clsGMap.setInfoWindow()] Too much info required...");
			return "Too much info required...";
		}
		
		if(type == MARKER_TYPE_BASE || type == MARKER_TYPE_BASE_ALM) {
			infoCont		= DIV_BASE_INFO.replace("##TITLE##", dataObj.name)
											.replace("##BASE_CORP_ID##", dataObj.id)
											.replace("##INFO_01##", lang("0075", "전체")+":"+dataObj.TOT_CNT+"/"+lang("0074", "미배차")+":"+dataObj.NA_CNT+"/"+lang("0076", "배차지연")+":"+dataObj.ALM_CNT);
			
		} else if(type.indexOf(MARKER_TYPE_ORD) >= 0 || type == MARKER_TYPE_CURR_ORD) {
			infoCont		= DIV_ORD_INFO;
			infoCont		= infoCont.replace("##BASE_CORP##", BASE_LOC_MAP.get(dataObj.BASE_CORP_ID).name)
											.replace("##SHPR_NM##", dataObj.SHPR_NM)
											.replace("##TOL_NO##", dataObj.TOL_NO)
											.replace("##VHCL##", dataObj.REQ_VHCL_KND_NM+" "+dataObj.REQ_VHCL_TON_NM)
											.replace("##LOAD_LOC##", dataObj.DEP_NODE_NM.substring(0,10))
											.replace("##UNLOAD_LOC##", dataObj.ARR_NODE_NM.substring(0,10));
			//
			if([MARKER_TYPE_ORD_NA_ALM].includes(type)) {
				//isStatic		= true;
			}
	
		} else if(type.indexOf(MARKER_TYPE_VHCL) >= 0) {
			strInfo			= nvl(dataObj.DRV_NM,"") + " / " + nvl(dataObj.MOBILE_NM,"")
			infoCont		= DIV_VHCL_INFO.replace(/##VHCL_NO##/g, dataObj.VHCL_NO)
											.replace("##STATUS##", dataObj.STATUS_NM)
											.replace("##VHCL_INFO##", strInfo)
											.replace("##VHCL_ADDR##", dataObj.VHCL_ADDR);
		
		} else if([MARKER_TYPE_LOAD_LOC].includes(type)) {
			infoCont		= DIV_INFO.replace("##TITLE##", lang("0077","상차지"))
											.replace("##INFO_01##", nvl(dataObj.DEP_NODE_NM,""));
			//isStatic		= true;
			
		} else if([MARKER_TYPE_UNLOAD_LOC].includes(type)) {
			infoCont		= DIV_INFO.replace("##TITLE##", lang("0078","하차지"))
											.replace("##INFO_01##", nvl(dataObj.ARR_NODE_NM,""));
			//isStatic		= true;
			
		} else {
			infoCont		= type;
			//isStatic		= false;
		}	
		
		infoWin			= new google.maps.InfoWindow({
			 content : infoCont
			,zIndex	: 255
		});
		//
		infoWin.open(this.GMAP, mapMarker);
		
		// 정적/동적 인포윈도우 처리
		if(isStatic) {
			//this.INFO_WIN.push(infoWin);
			setTimeout(function() {
				infoWin.close();
			}, 10000);
			
		} else {
			setTimeout(function() {
				infoWin.close();
			}, 4000);
		}
			
		/*
		if(this.INFO_WIN == null) {
			this.INFO_WIN	= new google.maps.InfoWindow();
		}
		mapMarker.addListener("click", function(e) {
			var	thisEvent	= e;
			
			if(that.INFO_WIN) {
				that.INFO_WIN.close();
			};
			that.INFO_WIN.setContent(infoCont);
			that.INFO_WIN.open(this.GMAP, mapMarker);
			that.INFO_WIN.id	= JSON.stringify(e.latLng);

			setTimeout(function() {
				if(that.INFO_WIN.id == JSON.stringify(thisEvent.latLng)) {
					that.INFO_WIN.close();
				}
			}, 3000);
		});
		*/
	
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

		