/**
 * Visibility - 차량관제 화면 메인 스크립트
 * 
 * @author	Jang. Jae-hyuk
 * @since	2018. 11. 08.
 */

/////////////////////////////////////////////////////////////////////////////
// EVENT 처리
/////////////////////////////////////////////////////////////////////////////

// Window.onload()
$(window).load(function(e) {
	// 시스템 입력이 일정기간 없는 경우 모니터링 모드로 전환
	IDLE_CHECK_TIMER	= setInterval(function() {
								checkIdleTime();
							}, 1000);
	//
	LAST_EVENT_TIME			= new Date().getTime();
	$(this).mousemove(function(e) {
		//console.log("mouse moved...");
		LAST_EVENT_TIME		= new Date().getTime();
	});
	$(this).keypress(function(e) {
		//console.log("key pressed...");
		LAST_EVENT_TIME		= new Date().getTime();
	});	

	console.log("[onLoad()] start....");
	ORD		= new clsOrderInfoData();
	GMAP	= new clsGMap();
	
	GMAP.initGMap($("#gmap"));
	
	// 주기적으로 데이터 조회
	onDataRefresh();
	//
	setInterval(function() {
		onDataRefresh();
	}, DATA_REFRESH_TIMING);

	// 고객목록 버튼 출력 토글
	$("a.btn_open_info").click(function(){
		console.log("## btn_open_info clicked... $(this)["+$(this)+"]");
		if(!$(this).data("click")){
			$(".btm_info").css("display", "block");
			$(this).addClass("open");
			$(this).data("click", true);
		}else{
			$(".btm_info").css("display", "none");
			$(this).removeClass("open");
			$(this).data("click", false);
		}
	});	
});


//미입력 기간을 체크하여 자동 모니터링
function checkIdleTime() {
	var	now		= new Date().getTime();
	//console.log("[vhclInfo.js-checkIdleTime()] IDLE_COUNTER["+IDLE_COUNTER+"] diff["+(now - LAST_EVENT_TIME)+"]");
	
	// 일정시간동안 입력이 없다면 모니터링 진행
	if((now - LAST_EVENT_TIME) > MON_START_DURATION) {
		if(	(CURR_SHOW_STYLE == MAP_SHOW_ALL_BASE) || IDLE_COUNTER > 0) {
			if(IDLE_COUNTER % MON_CHANGE_INTERVAL == 0) {		// 
				if(IDLE_COUNTER > 0 && IDLE_COUNTER % (MON_CHANGE_INTERVAL*5) == 0) {
					setShowStyle(MAP_SHOW_ALL_BASE);
				} else {
					setShowStyle(MAP_SHOW_ONE_BASE, ORD.getArrBaseCorp()[MON_IDX].id);
					MON_IDX		= (MON_IDX+1) % (ORD.getArrBaseCorp().length-1);
				}
			}
			IDLE_COUNTER ++;
		}
		
	} else {
		if(IDLE_COUNTER > 0) {
			setShowStyle(MAP_SHOW_ALL_BASE);		
		}
		IDLE_COUNTER	= 0;
		MON_IDX			= 0;
	}
}

// 데이터 리프레쉬 실행 (타이머 이벤트)
function onDataRefresh(param) {
	//console.log("[onDataRefresh()] param["+JSON.stringify(param)+"]");
	
	// 차량 데이터 조회 --> callback 실행
	ORD.getOrderList(function() {
		// 마커 데이터 삭제
		GMAP.clearAllMarkers(true);
		
		// 마커 재생성
		ORD.setBaseCorpMarker(GMAP);
		ORD.setOrderInfoMarker(GMAP);
		
		// 맵 다시 그리기
		setShowStyle(CURR_SHOW_STYLE);

		// 데이터 업데이트 시간
		setClock();
	});	
}

// 거점이 선택된 경우 (지도 마커 더블클릭)
function onBaseSelected(baseCoropId) {
	console.log("[onBaseSelected()] baseCoropId["+baseCoropId+"]");
	setShowStyle(MAP_SHOW_ONE_BASE, baseCoropId);
}
//거점이 클릭된 경우 (목록 또는 지도)
function onBaseClicked(baseCoropId) {
	console.log("[onBaseClicked()] baseCoropId["+baseCoropId+"]");
	GMAP.showMarkerInfo(baseCoropId);
}

// 고객이 선택된 경우 (고객목록의 Index를 인자로 받음. ORD.arrShprInfo 참고)
function onShprSelected(shprIdx) {
	console.log("[onShprSelected()] shprIdx["+shprIdx+"]");
	setShowStyle(MAP_SHOW_ONE_SHPR, shprIdx);
}

// 주문이 선택된 경우 (지도 마커 클릭, 목록 클릭)
function onOrderSelected(tolNo) {
	var	orderInfo	= ORD.getOrderData(tolNo);
	console.log("[onOrderSelected()] tolNo["+tolNo+"]");

	setShowStyle(MAP_SHOW_ONE_ORD, tolNo);
}
//고객이 클릭된 경우 (목록 또는 지도)
function onOrderClicked(tolNo) {
	console.log("[onOrderClicked()] tolNo["+tolNo+"]");
	GMAP.showMarkerInfo(tolNo);
}

// 차량 선택시
function onVhclClicked(vhclNo) {
	console.log("[onVhclSelected()] vhclNo["+vhclNo+"]");
	GMAP.showMarkerInfo(vhclNo);
}

// 초기화면이 선택된 경우 (지도의 HOME버튼)
function onHomeSelected(param) {
	var	nextShowStyle	= null;
	console.log("[onHomeSelected()] param["+JSON.stringify(param)+"]");
	
	if(CURR_SHOW_STYLE === MAP_SHOW_ALL_BASE) {
		return;
		
	} else if([MAP_SHOW_ONE_BASE, MAP_SHOW_ONE_SHPR].includes(CURR_SHOW_STYLE)) {
		setShowStyle(MAP_SHOW_ALL_BASE);
		
	} else if(CURR_SHOW_STYLE === MAP_SHOW_ONE_ORD) {
		if(CURR_BASE_CORP_ID != null) {
			setShowStyle(MAP_SHOW_ONE_BASE);
		} else if(CURR_SHPR_IDX != null) {
			setShowStyle(MAP_SHOW_ONE_SHPR);
		} else {
			setShowStyle(MAP_SHOW_ALL_BASE);
		}
	}
}


//차량목록 데이터 복사 및 페이징 준비
function initPaging(arrMapDataObj, isReset) {
	console.log("[initPaging()] arrMapDataObj["+arrMapDataObj.length+"]");

	// 출력대상 자료 생성 (해당 거점의 미배차 주문 목록 복사)
	CURR_LIST.length	= 0;
	CURR_LIST			= arrMapDataObj;

	// 페이징 초기화 (플리퍼 타이머 중지. 첫 페이지로)
	// 플리퍼 타이머 중지
	FLIPPER_TIMER.forEach(function (item) {
		clearTimeout(item);
	})
	//
	if(isReset) {
		CURR_PAGE	= -1;
	}
	
	stopPaging();
	startPaging();
}

/*
//차량목록 데이터 복사 및 페이징 준비
function initPaging(baseCorpId, shprId, tolNo) {
	console.log("[initPaging()] baseCorpId["+baseCorpId+"] baseCorpId["+baseCorpId+"] tolNo["+tolNo+"]");

	// 출력대상 자료 생성 (해당 거점의 미배차 주문 목록 복사)
	CURR_LIST.length	= 0;
	
	if(isNull(tolNo)) {
		CURR_LIST			= ORD.getOrderDataByBase(baseCorpId, shprId
											,[MARKER_TYPE_ORD_NA, MARKER_TYPE_ORD_NA1, MARKER_TYPE_ORD_NA2, MARKER_TYPE_ORD_NA_ALM]);
		//console.log("[initPaging()] CURR_LIST["+CURR_LIST+"]");
	} else {
		CURR_LIST			= NEAR_VHCL_INFO.nearVhclList;
	}

	// 페이징 초기화 (플리퍼 타이머 중지. 첫 페이지로)
	// 플리퍼 타이머 중지
	FLIPPER_TIMER.forEach(function (item) {
		clearTimeout(item);
	})
	//
	CURR_PAGE	= -1;
	
	stopPaging();
	startPaging();	
}
*/
// 현재 보여주는 데이터의 다음 페이지 출력 (타이머 이벤트)
function onNextPage(param) {
	//console.log("[onNextPage()] param["+JSON.stringify(param)+"]");

	// 페이지 증가. 끝이면 0으로
	CURR_PAGE	= (++CURR_PAGE) % (Math.ceil(CURR_LIST.length / PAGE_SIZE));
	//console.log("[W.onNextPage()] CURR_PAGE["+CURR_PAGE+"]");
	
	if(CURR_SHOW_STYLE == MAP_SHOW_ONE_ORD) {
		showNearVhclList();
	} else {
		showOrderList();	
	}
}

//목록 자동 업데이트 타이머 설정
function startPaging() {
	if(PAGING_TIMER == null) {
		onNextPage();
		//
		PAGING_TIMER	= setInterval(
				function() {	
					onNextPage();
				}, PAGE_REFRESH_TIMING
			);
	}
}
//
function stopPaging() {
	clearInterval(PAGING_TIMER);
	PAGING_TIMER	= null;
}


/////////////////////////////////////////////////////////////////////////////
// EVENT 처리 - END
/////////////////////////////////////////////////////////////////////////////


// 고객목록 세팅
function setShprList(arrShprInfo, baseCorpId) {
	var	shprDiv		= $("#shprList");
	var	strTr		= null;
	var	item		= null;
	var	idx			= 0;
	
	$("#shprList tbody tr").remove();

	for(var i=0; i<arrShprInfo.length; i++) {
		item	= arrShprInfo[i];
		
		if(isNull(baseCorpId) || item.BASE_CORP_ID == baseCorpId) {
			strTr	= "";
			//
			strTr	+= "<tr onClick='javascript:onShprSelected(\""+i+"\")'>";
			strTr	+= "<td tooltip='"+item.SHPR_NM+"'>"+item.SHPR_NM.substring(0,6)+"</td>";
			strTr	+= "<td>"+item.NA_CNT+"</td>";
			strTr	+= "<td>"+BASE_LOC_MAP.get(item.BASE_CORP_ID).abbrNm+"</td>";
			strTr	+= "</tr>";
			$("#shprList tbody").append(strTr);
	
			// MAX_SHPR_SIZE 개수 내에서만 출력
			if(++idx >= MAX_SHPR_SIZE) break;
		}
	}
}

// 현재시간 설정
function setClock() {
    var	currentDate		= new Date();
    var	time			= ((currentDate.getHours()-1) % 12)+1;
    var	ampm			= (currentDate.getHours() < 12)? "AM":"PM";
    var	dateElm			= $('.top_info_box01 > .date')[0];
    var	timeElm			= $('.top_info_box01 > .time')[0];

    dateElm.innerText	= currentDate.getFullYear()+lang("0206", "년")+" "+(currentDate.getMonth()+1)+lang("0207", "월")+" "+currentDate.getDate()+lang("0208", "일");
    timeElm.innerText	= ampm + " "+ ("0" + time).slice(-2)  + ":" + ("0" + currentDate.getMinutes()).slice(-2);	// + ":" +  ("0" + currentDate.getSeconds()).slice(-2)
}


//범례 업데이트 (자료범위 / 상태별 건수)
function setRemark() {
	var	op	= getOpRate(CURR_BASE_CORP_ID, CURR_SHPR_IDX);

	if(CURR_SHOW_STYLE != MAP_SHOW_ONE_ORD) {
		// 배차율 설정
		$('.top_info_box01 > .tx_info01 .tx02 b').text(op.opRate);
	
		// 거점-거래처 전체 미배차 건수 설정
		$("#remarkBody th").text(op.baseCorpNm + " ("+(op.cnt - op.vhclCnt)+")");
		
		// 날씨 하단 거점명 설정
		$('.top_info_box01 > .tx_info01 .tx01 span:eq(0)').text(op.baseCorpNm);
	    
		// 상태별 미배차 건수 설정
		$("#remarkBody .tx_l:eq(0) f").text(getNaCount(CURR_BASE_CORP_ID, CURR_SHPR_IDX, "10", null).naCnt);
		$("#remarkBody .tx_l:eq(1) f").text(getNaCount(CURR_BASE_CORP_ID, CURR_SHPR_IDX, "20", null).naCnt);
		$("#remarkBody .tx_l:eq(2) f").text(getNaCount(CURR_BASE_CORP_ID, CURR_SHPR_IDX, "30", null).naCnt);
		$("#remarkBody .tx_l:eq(3) f").text(getNaCount(CURR_BASE_CORP_ID, CURR_SHPR_IDX, "90", null).naCnt);
	
		// 하차지 분포 및 목록 타이틀 변경
		$("#orderList .s_tit b").text(op.title);
		
		setWeather(CURR_BASE_CORP_ID);
		
	} else {
		var	orderInfo	= NEAR_VHCL_INFO.orderInfo;
		var	baseCorpId	= orderInfo.BASE_CORP_ID;
		var	shprNm		= orderInfo.SHPR_NM;
		
		$("#vhclListByOrder .s_tit b").text(BASE_LOC_MAP.get(baseCorpId).name + " - " +shprNm);

		// 주문정보 출력
		$("#vhclListByOrder .board_wrap:eq(0) table td:eq(0) img").attr("src", ORD_STATUS_TYPE_MAP.get(orderInfo.STATUS).listIcon);
		$("#vhclListByOrder .board_wrap:eq(0) table td:eq(1)").text(orderInfo.SHPR_NM);
		$("#vhclListByOrder .board_wrap:eq(0) table td:eq(2)").text(orderInfo.DEP_REQ_DT.substring(8,10) + ":" +orderInfo.DEP_REQ_DT.substring(10,12));
		$("#vhclListByOrder .board_wrap:eq(0) table td:eq(3)").text(orderInfo.DEP_SI_GU);
		$("#vhclListByOrder .board_wrap:eq(0) table td:eq(4)").text(orderInfo.LATE_TM);
		$("#vhclListByOrder .board_wrap:eq(0) table td:eq(5)").text(orderInfo.ARR_SI_GU);
		$("#vhclListByOrder .board_wrap:eq(0) table td:eq(6)").text("-");
		$("#vhclListByOrder .board_wrap:eq(0) table td:eq(7)").text("-");

		setWeather(baseCorpId);
	}
}

//미배차 주문 하차지 분포 설정
function setArrLocCnt() {
	var	result	= null;
	
	for(var i=1; i<=5; i++) {
		result	= getNaCount(CURR_BASE_CORP_ID, CURR_SHPR_IDX, null, "R0"+i);
		$("#regionCnt_R0"+i).text(result.naCnt + " / " + result.rate +"%");
	}
}


// 배차율 조회
// shprIdx	!= null 이면 주문-거점별 배차율
// baseCorpId != null 이면 거점별 배차율
// 둘 다 null이면 전국 배차율
function getOpRate(baseCorpId, shprIdx) {
	var	title		= null;
	var baseCorpNm	= null;
	var	cnt			= 0;	// 주문건수
	var	vhclCnt		= 0;	// 배차건수
	var	dataObj		= null;
	var	opRate		= 0;
	
	//
	if(shprIdx != null) {
		dataObj			= ORD.getArrShprInfo()[shprIdx];
		title			= BASE_LOC_MAP.get(dataObj.BASE_CORP_ID).name + " - " + dataObj.SHPR_NM.substring(0,8);
		baseCorpNm		= BASE_LOC_MAP.get(dataObj.BASE_CORP_ID).abbrNm;
		cnt				= dataObj.CNT;
		vhclCnt			= cnt - dataObj.NA_CNT;
	} else if(baseCorpId != null) {
		dataObj			= ORD.getBaseCorpData(baseCorpId); 
		title			= BASE_LOC_MAP.get(dataObj.BASE_CORP_ID).name;
		baseCorpNm		= BASE_LOC_MAP.get(dataObj.BASE_CORP_ID).abbrNm;
		cnt				= dataObj.TOT_CNT;
		vhclCnt			= dataObj.VHCL_CNT;
	} else {
		title			= lang("0026", "전국");
		baseCorpNm		= lang("0026", "전국");
		ORD.getArrBaseCorp().forEach(function(item) {
			cnt			+= item.TOT_CNT;
			vhclCnt		+= item.VHCL_CNT;
		});
	}
	
	if(cnt == 0) {
		opRate	= 0;
	} else {
		opRate	= Math.round(vhclCnt / cnt * 100);
	}
	
	return {title : title, opRate : opRate, vhclCnt : vhclCnt, cnt : cnt, baseCorpNm : baseCorpNm};
}

// 미배차 건수 조회
// status != null : 상태별, regionCd != null : 하차지 권역별 건수, 둘 다 null이면 전체 미배차 건수
function getNaCount(bCorpId, shprIdx, status, regionCd) {
	var	cnt			= 0;	// 미배차 주문 전체건수
	var	naCnt		= 0;	// 상태/권역에 맞는 미배차 주문건수
	var	rate		= 0;	// 권역(상태)별 비율
	var	baseCorpId	= bCorpId;
	var	shprId		= null;
	
	if(shprIdx != null) {
		baseCorpId	= ORD.getArrShprInfo()[shprIdx].BASE_CORP_ID;
		shprId	= ORD.getArrShprInfo()[shprIdx].SHPR_ID;
	}
	
	ORD.getArrOrderInfo().forEach(function(item) {
		if(	(baseCorpId == null || item.BASE_CORP_ID == baseCorpId)	
				&& (shprId == null || item.SHPR_ID == shprId)	) {
			cnt ++;
			//
			if(status != null && item.STATUS == status) {
				naCnt ++;
			} else if(regionCd != null && item.ARR_REGION == regionCd) {
				naCnt ++;
			} else if(status == null && regionCd == null) {
				naCnt ++;
			}			
		}
	});

	if(cnt == 0) {
		rate	= 0;
	} else {
		rate	= Math.round(naCnt / cnt * 100);
	}
	
	return {rate : rate, naCnt : naCnt};
}


// 지도의 이벤트에 따라 화면 유형 적용
function setShowStyle(showStyle, param) {
	var	divBaseCorp			= $("#baseCorpArea");
	var	divOrderList		= $("#orderList");
	var	divVhclListByOrder	= $("#vhclListByOrder");
	
	CURR_SHOW_STYLE		= showStyle;
	console.log("[W.setShowStyle()] CURR_SHOW_STYLE["+CURR_SHOW_STYLE+"] param["+param+"]");
	
	switch(CURR_SHOW_STYLE) {
		// 전체거점 + 사고차량
		case MAP_SHOW_ALL_BASE :
			// 페이징 중지
			stopPaging();
			
			// Show-Hide
			divBaseCorp.show()
			divOrderList.hide();
			divVhclListByOrder.hide();

			CURR_BASE_CORP_ID				= null;
			CURR_SHPR_IDX					= null;
			CURR_TOL_NO						= null;
			
			// 맵에 적용
			GMAP.setShowStyle(showStyle);

			// Chart...
			initChart();

			// 배차율 및 범례 적용
			setRemark();

			// 고객목록 업데이트
			setShprList(ORD.getArrShprInfo());
		break;
		
		// 1거점 + 거점차량 전체
		case MAP_SHOW_ONE_BASE :
			// Show-Hide
			divBaseCorp.hide()
			divOrderList.show();
			divVhclListByOrder.hide();

			CURR_BASE_CORP_ID				= (param != null)? param:CURR_BASE_CORP_ID;
			CURR_SHPR_IDX					= null;
			CURR_TOL_NO						= null;
			
			// 맵에 적용
			GMAP.setShowStyle(showStyle, CURR_BASE_CORP_ID);

			// 거점의 주문목록 페이징
			initPaging(GMAP.getMarkerDataObjByType(MARKER_TYPE_ORD, true), !isNull(param));
			
			// 배차율 및 범례 적용
			setRemark();
			// 하차지 분포 적용
			setArrLocCnt();
			
			// 고객목록 업데이트
			setShprList(ORD.getArrShprInfo(), CURR_BASE_CORP_ID);
		break;
		
		// 1차량 (상/하차지+현재위치+경로)
		case MAP_SHOW_ONE_SHPR :
			// Show-Hide
			divBaseCorp.hide()
			divOrderList.show();
			divVhclListByOrder.hide();

			CURR_BASE_CORP_ID				= null;
			CURR_SHPR_IDX					= (param != null)? param:CURR_SHPR_IDX;
			CURR_TOL_NO						= null;

			// 맵에 적용
			GMAP.setShowStyle(showStyle, {shprId : ORD.getArrShprInfo()[CURR_SHPR_IDX].SHPR_ID , baseCorpId : ORD.getArrShprInfo()[CURR_SHPR_IDX].BASE_CORP_ID});
			
			// 고객의 주문목록 페이징
			initPaging(GMAP.getMarkerDataObjByType(MARKER_TYPE_ORD, true), !isNull(param));
			
			// 배차율 및 범례 적용
			setRemark();
			// 하차지 분포 적용
			setArrLocCnt();		

		break;

		// 1주문 (주변 차량위치 표시)
		case MAP_SHOW_ONE_ORD :
			var	orderData	= ORD.getOrderData(param);	// 주문의 데이터 조회
			
			// Show-Hide
			divBaseCorp.hide()
			divOrderList.hide();
			divVhclListByOrder.show();

			CURR_BASE_CORP_ID				= null;
			CURR_SHPR_IDX					= null;
			CURR_TOL_NO						= (param != null)? param:CURR_TOL_NO;

			// 차량 경로 조회 및 출력
			ORD.getNearVhclList(CURR_TOL_NO, function(result) {
				NEAR_VHCL_INFO	= result;
				
				// 맵에 적용
				GMAP.setShowStyle(showStyle, result);

				// 주문 주변 차량목록 페이징
				initPaging(GMAP.getMarkerDataObjByType(MARKER_TYPE_VHCL, true), !isNull(param));
				
				// 배차율 및 범례 적용
				setRemark();
			});
			
		break;

		default :
		break;
	}
	
}


// 선택된 거점(고객)의 차량 목록 출력
function showOrderList() {
	var	dataIdx		= 0;
	var	data		= null;
	var	baseElm		= null;

	var	trId		= null;
	var	trElm		= null;
	var	inHtml		= null;
	
	var	vhclKnd		= null;
	
	console.log("[orderInfo.js-showOrderList()]");
	
	// 목록 초기화
	baseElm		= $("#orderListBody");
	baseElm.html("");
	
	// 목록 출력
	for(var i=0; i<PAGE_SIZE; i++) {
		dataIdx		= (CURR_PAGE * PAGE_SIZE) + i;
		data		= CURR_LIST[dataIdx];
		trId		= "ordTr_"+(i+1);
		
		//console.log("[orderInfo.js-showVhclList()] Create new TR. "+trId);
		trElm			= $(ORD_INFO_HTML_BASE.replace(/##TR_ID##/g, trId));
		//
		baseElm.append(trElm);			

		if(data == null) continue;

		// 차량 클릭 이벤트 설정
		(function(tolNo) {
			trElm.bind("click", function(e) {onOrderClicked(tolNo);});
			trElm.bind("dblclick", function(e) {onOrderSelected(tolNo);});
		}(data.TOL_NO));

		(function(trId, dataIdx, data) {
			FLIPPER_TIMER[i]	= setTimeout(
					function() {
						//console.log("[flipper timeout] trId["+trId+"]");
						$("#"+trId+"_1").text(""+(dataIdx+1));
						$("#"+trId+"_2").html("<img src='"+ORD_STATUS_TYPE_MAP.get(data.STATUS).listIcon+"'/>");
						$("#"+trId+"_3").text(data.SHPR_NM);
						$("#"+trId+"_4").text(data.DEP_REQ_DT.substring(8,10)+":"+data.DEP_REQ_DT.substring(10,12));
						$("#"+trId+"_5").text(data.LATE_TM);
						$("#"+trId+"_6").text(data.DEP_SI_GU);
						$("#"+trId+"_7").text(data.ARR_SI_GU);
					}
					, i*PAGE_FLIPPER_TIMING)
		}(trId, dataIdx, data));
		console.log("[orderInfo.js-showOrderList()] trHTML["+trElm.innerHTML+"]");
	}
}


// 선택된 주문 근처의 차량 목록 출력
function showNearVhclList() {
	var	dataIdx		= 0;
	var	data		= null;
	var	baseElm		= null;

	var	trId		= null;
	var	trElm		= null;
	var	inHtml		= null;
	
	var	vhclKnd		= null;
	
	console.log("[orderInfo.js-showNearVhclList()]");
	
	// 목록 초기화
	baseElm		= $("#nearVhclListBody");
	baseElm.html("");
	
	// 목록 출력
	for(var i=0; i<PAGE_SIZE; i++) {
		dataIdx		= (CURR_PAGE * PAGE_SIZE) + i;
		data		= CURR_LIST[dataIdx];
		trId		= "nearTr_"+(i+1);
		
		//console.log("[orderInfo.js-showNearVhclList()] Create new TR. "+trId);
		trElm			= $(NEAR_VHCL_HTML_BASE.replace(/##TR_ID##/g, trId));
		//
		baseElm.append(trElm);			

		if(data == null) continue;

		// 차량 클릭 이벤트 설정
		(function(vhclNo) {
			trElm.bind("click", function(e) {onVhclClicked(vhclNo);});
			trElm.bind("dblclick", function(e) {onVhclClicked(vhclNo);});
		}(data.VHCL_NO));

		(function(trId, dataIdx, data) {
			FLIPPER_TIMER[i]	= setTimeout(
					function() {
						//console.log("[flipper timeout] trId["+trId+"]");
						vhclKnd		= (data.VHCL_KND_NM != null)? (pad(data.VHCL_KND_NM,3)+"/"+pad(Math.floor(data.TON_NM),2)) : "";

						$("#"+trId+"_1").text(""+(dataIdx+1));
						$("#"+trId+"_2").html("<img src='"+VHCL_STATUS_TYPE_MAP.get(data.STATUS).listIcon+"'/>");
						$("#"+trId+"_3").text(data.VHCL_NO);
						$("#"+trId+"_4").text(vhclKnd);
						$("#"+trId+"_5").text(Math.round(data.DIST));
						$("#"+trId+"_6").text(nvl(data.DEP_SI_GU,""));
						$("#"+trId+"_7").text(nvl(data.ARR_SI_GU,""));
					}
					, i*PAGE_FLIPPER_TIMING)
		}(trId, dataIdx, data));
		console.log("[orderInfo.js-showNearVhclList()] trHTML["+trElm.innerHTML+"]");
	}
}


//거점별 날씨정보 설정
function setWeather(baseCorpId) {
	var	that	= this;
	
	callService({
		url      : "vis/getVisibilityInfo.do",
		svcId    : "getWeather",
		param    : { 
			BASE_LOC : nvl(baseCorpId, "00001004")	// 디폴트 서울지사
		},
		callback : function(val) {
			console.log("[vhclInfo.js-setWeather()] result["+JSON.stringify(val)+"]");
			
				if(val != null) {			
					$('.top_info_box01 > .wh_bx i').attr("class", "wi "+val.CSS_CLASS);
					$('.top_info_box01 > .wh_bx p span').text(val.TEMP);
				}
			}
	});		
}