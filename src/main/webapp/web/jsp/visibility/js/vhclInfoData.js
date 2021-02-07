/**
 * Visibility -차량정보와 관련된 스크립트
 * 
 * @author	Jang. Jae-hyuk
 * @since	2018. 11. 08.
 */

function clsVhclInfoData() {
	"USE STRICT";
	this.arrBaseCorp					= [];	// 거점별 차량 현황
	this.arrVhclInfo					= [];	// 위수탁차량 현황
	this.opRate							= null;	// 위수탁 가동률
	
	
	// 차량 목록 조회
	this.getVhclList	= function(argCallback) {
		var	that	= this;
		
		callService({
			url      : "vis/getVisibilityInfo.do",
			svcId    : "getVhclList",
			param    : {},
			callback : function(val) {
					that.setBaseInfo(val.baseCorpList);
					that.setVhclInfo(val.vhclList);
					argCallback();
				}
		});		
	}

	// 차량 경로 정보 조회
	this.getVhclInfo	= function(vhclNo, argCallback) {
		var	that	= this;
		
		callService({
			url      : "vis/getVisibilityInfo.do",
			svcId    : "getVhclRoute",
			param    : { 
				VHCL_NO : vhclNo
			},
			callback : function(val) {
					argCallback(val);
				}
		});		
	}

	
	// 거점정보 설정
	this.setBaseInfo	= function(baseCorpList) {
		var	that	= this;
		var	totSum	= 0;
		var	movSum	= 0;

		this.arrBaseCorp	= baseCorpList;

		//
		// 거점 위치좌표는 BASE_LOC_MAP에 정의된 내용을 복사함
		this.arrBaseCorp.forEach(function(item, index, array) {
			$.extend(array[index], array[index], BASE_LOC_MAP.get(item.BASE_CORP_ID));
			
			item.markerType		= (item.ALM_CNT == 0)? MARKER_TYPE_BASE:MARKER_TYPE_BASE_ALM;
			item.opRate	= Math.round(item.MOV_CNT / item.TOT_CNT * 100);;
			//
			totSum	+= item.TOT_CNT;
			movSum	+= item.MOV_CNT;
		});

		// 가동률 순으로 정렬 (낮은 --> 높은)
		this.arrBaseCorp.sort(function(a, b) {
			return b.opRate - a.opRate;  
		})

		this.opRate		= Math.round(movSum / totSum * 100);
		//console.log("[VHCL.setBaseInfo()] copied... baseCorpList["+JSON.stringify(this.arrBaseCorp)+"]");
	}
	
	
	this.sortBaseInfo	= function() {
		// 가동률 순으로 정렬 (낮은 --> 높은)
		this.arrBaseCorp.sort(function(a, b) {
			return getOpRate(b.BASE_CORP_ID).opRate - getOpRate(a.BASE_CORP_ID).opRate  
		})
	}
	
	// 차량정보 설정
	this.setVhclInfo		= function(vhclList) {
		//console.log("[VHCL.setVhclInfo()] vhclList["+JSON.stringify(vhclList)+"]");
		this.arrVhclInfo	= vhclList;

		this.arrVhclInfo.forEach(function(item, index, array) {
			item.markerType		= VHCL_STATUS_TYPE_MAP.get(item.STATUS).markerType;
		});
	}


	// map에 거점정보 마커 설정
	this.setBaseCorpMarker	= function(gmap) {
		console.log("[clsVhclInfoData.setBaseCorpMarker()] this.arrBaseCorp["+this.arrBaseCorp.length+"]");
		
		this.arrBaseCorp.forEach(function(item, index, array) {
			//console.log("[clsVhclInfoData.setBaseCorpMarker()-forEach] item["+JSON.stringify(item)+"]");
			gmap.addMarkerData(
					 item.id
					,item.id
					,{lat : parseFloat(item.lat), lng : parseFloat(item.lng)}
					,item.markerType
					,item
				);
		});
	}	
	
	// map에 차량정보 마커 설정
	this.setVhclInfoMarker	= function(gmap) {
		console.log("[clsVhclInfoData.setVhclInfoMarker()] this.arrVhclInfo["+this.arrVhclInfo.length+"]");
		
		this.arrVhclInfo.forEach(function(item, index, array) {
			//console.log("[clsVhclInfoData.setVhclInfoMarker()-forEach] item["+JSON.stringify(item)+"]");
			gmap.addMarkerData(
					 item.VHCL_NO
					,item.BASE_CORP_ID
					,{lat : parseFloat(item.LAT), lng : parseFloat(item.LNG)}
					,item.markerType
					,item
				);
		});
	}

	// 거점목록 조회
	this.getArrBaseCorp	= function(baseCorpId) {
		return this.arrBaseCorp;
	}
	
	// 거점정보 조회
	this.getBaseCorpData	= function(baseCorpId) {
		return this.arrBaseCorp.find(function(item) {
					return item.BASE_CORP_ID === baseCorpId;
				});
	}

	// 차량목록 리턴
	this.getArrVhclInfo		= function() {
		return this.arrVhclInfo;
	}
	
	// 차량정보 조회
	this.getVhclData		= function(vhclNo) {
		return this.arrVhclInfo.find(function(item) {
					return item.VHCL_NO === vhclNo;
				});
	}
	
	// 거점의 차량정보 조회 (전달된 상태에 맞는 목록만 리턴)
	this.getVhclDataByBase	= function(baseCorpId, arrStat) {
		return this.arrVhclInfo.filter(function(item) {
					return (item.BASE_CORP_ID != baseCorpId)? false : 
									(arrStat == null)? true : arrStat.includes(item.markerType)
				});
		/*
		var	arrReturn	= [];
		
		this.arrVhclInfo.forEach(function(item) {
			if(item.BASE_CORP_ID == baseCorpId) arrReturn.push(item);
		});
		
		return arrReturn;
		*/
	}	
	
	// 위수탁 가동률 조회
	this.getOpRate			= function() {
		return this.opRate;
	}
}
		