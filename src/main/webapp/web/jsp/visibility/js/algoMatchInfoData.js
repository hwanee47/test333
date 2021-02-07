/**
 * Visibility - 미배차주문정보와 관련된 스크립트
 * 
 * @author	Jang. Jae-hyuk
 * @since	2018. 12. 04.
 */

function clsOrderInfoData() {
	"USE STRICT";
	this.arrOrdInfo					= [];	// 매칭대상 목록	
	this.arrTripInfo				= [];	// 매칭목록 (추천목록 포함)
	this.engineCallHist				= [];	// 엔진호출 이력
	this.recommandTripList			= []	//
	this.matchInfo					= null;	// 매칭률 정보
	
	
	// 매칭정보 조회
	this.getAlgoMatchInfo	= function(argCallback, engineCallId) {
		var	that	= this;
		var	param	= (isNull(engineCallId))? {} : {ENGINE_CALL_ID : engineCallId};
		
		console.log("[algoMatchInfoData.getAlgoMatchInfo()] engineCallId["+engineCallId+"]");
		callService({
			url      : "vis/getVisibilityInfo.do",
			svcId    : "getAlgoMatchInfo",
			param    : param,
			callback : function(val) {
					//console.log("[algoMatchInfoData.getAlgoMatchInfo()] val["+JSON.stringify(val)+"]");
					that.setOrdInfo(val.ordList);
					that.setTripInfo(val.tripList);
					that.engineCallHist	= val.engineCallHist;
					//
					argCallback();
				}
		});		
	}
	

	// 주문정보에 마커타입 지정
	this.setOrdInfo			= function(ordList) {
		var	that	= this;
		//console.log("[ORD.setOrderInfo()] orderList["+JSON.stringify(ordList)+"]");
		
		this.arrOrdInfo		= ordList;
		this.arrOrdInfo.forEach(function(item, index, array) {
			if("1" == item.TRIP_SEQ) {			// 복화-1배차
				item.markerType		= MARKER_TYPE_ORD_MATCH_1ST;
			} else if("2" == item.TRIP_SEQ) {	// 복화-2배차
				item.markerType		= MARKER_TYPE_ORD_MATCH_2ND;
			} else {
				item.markerType		= MARKER_TYPE_ORD_NO_MATCH;
			}
		});
	}
	
	
	// 복화정보에 1,2배차 주문정보 연결
	this.setTripInfo		= function(tripList) {
		var	that		= this;
		var	matchCnt	= 0
		var	matchRate	= 0;
		//console.log("[ORD.setTripInfo()] tripList["+JSON.stringify(tripList)+"]");
		
		this.arrTripInfo		= tripList;

		// 복화대상 주문 연결
		this.arrTripInfo.forEach(function(item, index, array) {
			item.ship1Obj	= that.getOrderInfo(item.SHIPMENT1_ID);
			item.ship2Obj	= that.getOrderInfo(item.SHIPMENT2_ID);
			
			if(item.TRIP_TYPE == "O") {
				matchCnt ++;
			}
		});
		
		matchRate	= (this.arrOrdInfo.length == 0)? 0 : (matchCnt * 2) / this.arrOrdInfo.length;
		//
		this.matchInfo	= {
				 matchOrdCnt	: this.arrOrdInfo.length
				,matchCnt		: matchCnt
				,matchRate		: Math.round(matchRate * 100)
		}
	}
	
	
	// map에 주문정보 마커 설정
	this.setOrdMarker	= function(gmap) {
		//console.log("[ORD.setOrdMarker()] this.arrOrdInfo["+this.arrOrdInfo.length+"]");
		//
		this.arrOrdInfo.forEach(function(item, index, array) {
			gmap.addMarkerData(
					 item.SHIPMENT_ID
					,{lat : parseFloat(item.DEP_LAT), lng : parseFloat(item.DEP_LNG)}
					,item.markerType
					,item
				);
		});
	}
	
	
	// 복화추천목록 관련 마커 생성
	this.setRecommandMarker	= function(gmap, shipmentId) {
		var	that				= this;
		var	shipObj				= this.getOrderInfo(shipmentId);
		
		// 추천복화목록 설정
		this.recommandTripList	= this.getTripListByShip(shipmentId);

		// 선택주문마커 생성
		gmap.addMarkerData(
				 shipObj.TRIP_ID+"_"+shipObj.SHIPMENT_ID
				,{lat : parseFloat(shipObj.DEP_LAT), lng : parseFloat(shipObj.DEP_LNG)}
				,MARKER_TYPE_CURR_ORD
				,shipObj
			);

		// 복화대상 주문 연결 및 마커 생성
		this.recommandTripList.forEach(function(item, index, array) {
			var	recommandShipObj		= null;
			
			item.ship1Obj	= that.getOrderInfo(item.SHIPMENT1_ID);
			item.ship2Obj	= that.getOrderInfo(item.SHIPMENT2_ID);
			
			if(shipmentId != item.SHIPMENT1_ID) {
				recommandShipObj	= item.ship1Obj;
				recommandShipObj.REC_TRIP_SEQ	= 1;
			} else {
				recommandShipObj	= item.ship2Obj;
				recommandShipObj.REC_TRIP_SEQ	= 2;
			}
			
			// 추천주문마커 생성
			gmap.addMarkerData(
					 item.TRIP_ID+"_"+recommandShipObj.SHIPMENT_ID
					,{lat : parseFloat(recommandShipObj.DEP_LAT), lng : parseFloat(recommandShipObj.DEP_LNG)}
					,MARKER_TYPE_ORD_RECOMMAND
					,recommandShipObj
				);			
		});
		
	}

	/*
	// map에 복화정보 마커 설정
	this.setTripMarkerByShip	= function(gmap, shipment1Id) {
		var	arrTrip		= null;
		console.log("[ORD.setTripMarkerByShip()] shipment1Id["+shipment1Id+"]");
		
		if(isNull(shipment1Id)) {
			return;
		}
		arrTrip		= this.getTripListByShip(shipment1Id);
		console.log("[ORD.setTripMarkerByShip()] arrTrip["+arrTrip+"]");
		//
		arrTrip.forEach(function(item, index, array) {
			var	markerType	= MARKER_TYPE_ORD_RECOMMAND;
			
			if("O" == item.TRIP_TYPE) {
				gmap.addMarkerData(
						 item.TRIP_ID+"_"+item.SHIPMENT1_ID
						,{lat : parseFloat(item.shipObj2.DEP_LAT), lng : parseFloat(item.shipObj2.DEP_LNG)}
						,MARKER_TYPE_ORD_MATCH_1ST
						,item
					);
				gmap.addMarkerData(
						 item.TRIP_ID+"_"+item.SHIPMENT2_ID
						,{lat : parseFloat(item.shipObj2.DEP_LAT), lng : parseFloat(item.shipObj2.DEP_LNG)}
						,MARKER_TYPE_ORD_MATCH_2ND
						,item
					);
			} else {			
				gmap.addMarkerData(
						 item.TRIP_ID+"_"+item.SHIPMENT2_ID
						,{lat : parseFloat(item.shipObj2.DEP_LAT), lng : parseFloat(item.shipObj2.DEP_LNG)}
						,MARKER_TYPE_ORD_RECOMMAND
						,item
					);
			}
		});
	}
	*/
	
	
	// SHIPMENT_ID로 주문정보 검색
	this.getOrderInfo	= function(shipmentId) {
		return this.arrOrdInfo.find(function(item) {
					return item.SHIPMENT_ID == shipmentId;
				});
	}
	// TOL_NO로 주문정보 검색
	this.getOrderData		= function(tolNo) {
		return this.arrOrdInfo.find(function(item) {
					return item.TOL_NO === tolNo;
				});
	}
	
	// TRIP_TYPE(O/C)에 따른 복화목록 조회
	this.getTripById		= function(tripId) {
		return this.arrTripInfo.find(function(item) {
					return item.TRIP_ID == tripId;
				});
	}
	// TRIP_TYPE(O/C)에 따른 복화목록 조회
	this.getTripListByType	= function(tripType) {
		return this.arrTripInfo.filter(function(item) {
					return item.TRIP_TYPE == tripType;
				});
	}
	// SHIPMENT_ID에 대한 복화추천목록 조회 (1,2배차 포함)
	this.getTripListByShip	= function(shipmentId) {
		return this.arrTripInfo.filter(function(item) {
					return (item.SHIPMENT1_ID == shipmentId || item.SHIPMENT2_ID == shipmentId) ;
				});
	}	
	
	
	// 데이터 객체 조회
	this.getArrOrdInfo		= function() {
		return this.arrOrdInfo;
	}
	this.getArrTripInfo		= function() {
		return this.arrTripInfo;
	}
	this.getEngineCallHist	= function() {
		return this.engineCallHist;
	}
	this.getRecommandTripList	= function() {
		return this.recommandTripList;
	}
}
		