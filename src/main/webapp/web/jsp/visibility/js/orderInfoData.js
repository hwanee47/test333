/**
 * Visibility - 미배차주문정보와 관련된 스크립트
 * 
 * @author	Jang. Jae-hyuk
 * @since	2018. 12. 04.
 */

function clsOrderInfoData() {
	"USE STRICT";
	this.arrBaseCorp					= [];	// 거점별 차량 현황
	this.arrOrderInfo					= [];	// 미배차 주문 정보
	this.arrShprInfo					= [];	// 미배차 주문 고객목록	
	this.opRate							= null;	// 배차율
	
	
	// 주문 목록 조회
	this.getOrderList	= function(argCallback) {
		var	that	= this;
		
		callService({
			url      : "vis/getVisibilityInfo.do",
			svcId    : "getOrderList",
			param    : {},
			callback : function(val) {
					that.setBaseInfo(val.baseCorpList);
					that.setOrderInfo(val.orderList);
					that.arrShprInfo	= val.shprList;
					argCallback();
				}
		});		
	}
	
	
	// 주문 주변 차량 목록 조회
	this.getNearVhclList	= function(tolNo, argCallback) {
		var	that	= this;
		
		callService({
			url      : "vis/getVisibilityInfo.do",
			svcId    : "getNearVhclList",
			param    : {TOL_NO : tolNo, RANGE : 30},
			callback : function(val) {
					var	result	= val.result;
					
					if(result == "NO_ORDER") {
						alert(lang("0240", "해당 주문이 미배차 목록에 없습니다."));
					} else {
						argCallback(val);
					}
				}
		});		
	}	

	
	// 거점정보 설정
	this.setBaseInfo	= function(baseCorpList) {
		var	that	= this;
		var	totSum	= 0;
		var	vhclSum	= 0;

		this.arrBaseCorp	= baseCorpList;
		
		// 거점 위치좌표는 BASE_LOC_MAP에 정의된 내용을 복사함
		this.arrBaseCorp.forEach(function(item, index, array) {
			var	opRate	= 
			$.extend(array[index], array[index], BASE_LOC_MAP.get(item.BASE_CORP_ID));
			
			item.markerType		= (item.ALM_CNT == 0)? MARKER_TYPE_BASE:MARKER_TYPE_BASE_ALM;
			item.opRate			= Math.round((item.CNT-item.NA_CNT) / item.CNT * 100); 
			//
			totSum	+= item.TOT_CNT;
			vhclSum	+= item.VHCL_CNT;
		});

		// 배차율 순으로 정렬 (낮은 --> 높은)
		this.arrBaseCorp.sort(function(a, b) {
			return b.opRate - a.opRate;  
		})

		this.opRate		= Math.round(vhclSum / totSum * 100);
		//console.log("[ORD.setBaseInfo()] copied... baseCorpList["+JSON.stringify(this.arrBaseCorp)+"]");
	}
	
	// 주문정보 설정
	this.setOrderInfo		= function(orderList) {
		//console.log("[ORD.setOrderInfo()] orderList["+JSON.stringify(orderList)+"]");
		this.arrOrderInfo		= orderList;
		this.arrOrderInfo.forEach(function(item, index, array) {
			item.markerType		= ORD_STATUS_TYPE_MAP.get(item.STATUS).markerType;
		});
	}


	// map에 거점정보 마커 설정
	this.setBaseCorpMarker	= function(gmap) {
		console.log("[ORD.setBaseCorpMarker()] this.arrBaseCorp["+this.arrBaseCorp.length+"]");
		
		this.arrBaseCorp.forEach(function(item, index, array) {
			//console.log("[ORD.setBaseCorpMarker()-forEach] item["+JSON.stringify(item)+"]");
			gmap.addMarkerData(
					 item.id
					,item.id
					,{lat : parseFloat(item.lat), lng : parseFloat(item.lng)}
					,item.markerType
					,item
				);
		});
	}	
	
	// map에 주문정보 마커 설정
	this.setOrderInfoMarker	= function(gmap) {
		console.log("[ORD.setOrderInfoMarker()] this.arrOrderInfo["+this.arrOrderInfo.length+"]");
		
		this.arrOrderInfo.forEach(function(item, index, array) {
			//console.log("[ORD.setVhclInfoMarker()-forEach] item["+JSON.stringify(item)+"]");
			
			// 배차된 건은 마커로 표시하지 않음
			if(["00", "01"].includes(item.STATUS)) return;
			
			// 마커 등록
			gmap.addMarkerData(
					 item.TOL_NO
					,item.BASE_CORP_ID
					,{lat : parseFloat(item.LAT), lng : parseFloat(item.LNG)}
					,item.markerType
					,item
				);
		});
	}

	this.getArrBaseCorp		= function() {
		return this.arrBaseCorp;
	}
	this.getArrOrderInfo	= function() {
		return this.arrOrderInfo;
	}
	this.getArrShprInfo		= function() {
		return this.arrShprInfo;
	}
	
	// 거점정보 조회
	this.getBaseCorpData	= function(baseCorpId) {
		return this.arrBaseCorp.find(function(item) {
					return item.BASE_CORP_ID === baseCorpId;
				});
	}
	
	// 주문정보 조회
	this.getOrderData		= function(tolNo) {
		return this.arrOrderInfo.find(function(item) {
					return item.TOL_NO === tolNo;
				});
	}
	
	// 거점 및 고객의 주문정보 조회 (전달된 상태에 맞는 목록만 리턴)
	this.getOrderDataByBase	= function(baseCorpId, shprId, arrStat) {
		return this.arrOrderInfo.filter(function(item) {
					return (baseCorpId != null && item.BASE_CORP_ID != baseCorpId)? false : (
								(shprId != null && item.SHPR_ID != shprId)? false : 
										(arrStat == null)? true : arrStat.includes(item.markerType)
							);
				});
	}	
	
	// 고객코드에 해당하는 고객명을 찾는다
	this.getShprName		= function(shprId) {
		var	shprObj	= this.arrShprInfo.find(function(item) {
			return (item.SHPR_ID == shprId);
		});
		
		if(shprObj != null) {
			return shprObj.SHRP_NM;
		} else {
			return "";
		}
	}
}
		