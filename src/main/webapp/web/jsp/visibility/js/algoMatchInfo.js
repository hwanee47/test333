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
	initialize();
	
	/*
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
	*/
	
	console.log("[onLoad()] start....");
	ORD		= new clsOrderInfoData();
	GMAP	= new clsGMap();
	
	GMAP.initGMap($("#gmap"));
	
	// 주기적으로 데이터 조회
	onDataRefresh();
	//
	/*
	setInterval(function() {
		onDataRefresh();
	}, DATA_REFRESH_TIMING);
	*/
});


// 화면 로딩시 처리할 사항
function initialize() {
	// 엔진호출ID 입력 관련 이벤트 처리
	$("#engineCallId").keydown(function(key) {
			//console.log(">>> keydown "+ key);
			if (key.keyCode == 13) {
				$("#btnSearch").click();
			}
		});
	$("#btnSearch").click(function(e) {
			//console.log(">>> btnSearch click "+ e);
			onDataRefresh($("#engineCallId").val());
		});
	
	$("#engineCallHist").change(function(e) {
			//console.log(">>> engineCallHist change "+ $("#engineCallHist option:selected").val());
			$("#engineCallId").val($("#engineCallHist option:selected").val());
			$("#engineCallId").focus();
		});
}


//미입력 기간을 체크하여 자동 모니터링
/*
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
*/


// 데이터 리프레쉬 실행 (타이머 이벤트)
function onDataRefresh(engineCallId) {
	console.log("[onDataRefresh()] engineCallId["+engineCallId+"]");
	
	// 알고리즘 결과 데이터 조회 --> callback 실행
	ORD.getAlgoMatchInfo(function() {
		if(!isNull(engineCallId)) {
			CURR_SHOW_STYLE	= MAP_SHOW_ALL_MATCH;
		}
		
		// 엔진호출이력 출력
		setEngineCallHist(ORD.getEngineCallHist(), engineCallId);
		
		// 매칭률 출력
		setMatchRate(ORD.matchInfo);
		
		// 마커 데이터 삭제
		GMAP.clearAllMarkers(true);
		
		// 마커 재생성
		ORD.setOrdMarker(GMAP);
		
		// 맵 다시 그리기
		setShowStyle(CURR_SHOW_STYLE);

		// 데이터 업데이트 시간
		//setClock();
	}, engineCallId);	
}


//엔진호출이력 출력
function setEngineCallHist(engineCallHist, engineCallId) {
	var	strOptBase	= "<option value=\"##ENGINE_CALL_ID##\" ##SELECTED##>##DT## (##ENGINE_CALL_ID##)</option>";
	var	strOpt		= "";
	var	item		= null;
	var	selected	= "";
	var	dt			= "";
	
	for(var i=0; i<engineCallHist.length; i++) {
		item		= engineCallHist[i];
		
		if(isNull(engineCallId) && i==0) {
			selected	= "selected";
		} else if(item.ENGINE_CALL_ID == engineCallId) {
			selected	= "selected";
		} else {
			selected	= "";
		}
		dt			= item.CALL_START_DT.substr(0,4)+"-"+item.CALL_START_DT.substr(4,2)+"-"+item.CALL_START_DT.substr(6,2)+" "
						+item.CALL_START_DT.substr(8,2)+":"+item.CALL_START_DT.substr(10,2)+":"+item.CALL_START_DT.substr(12,2);
		strOpt		+= strOptBase.replace(/##ENGINE_CALL_ID##/g, item.ENGINE_CALL_ID)
								.replace(/##SELECTED##/g, selected)
								.replace(/##DT##/, dt);
	}
	$("#engineCallHist").html(strOpt);
	$("#engineCallId").val($("#engineCallHist option:selected").val());
}


// 매칭률 등을 출력
function setMatchRate(matchInfo) {
	$("#matchRate").html(matchInfo.matchRate);
	$("#matchOrdCnt").html(matchInfo.matchOrdCnt);
	$("#matchCnt").html(matchInfo.matchCnt);
}


//주문이 클릭된 경우 (목록 또는 지도)
function onOrderClicked(shipmentId) {
	var	orderInfo	= ORD.getOrderInfo(shipmentId);
	console.log("[onOrderClicked()] shipmentId["+shipmentId+"]");
	
	GMAP.showMarkerInfo(shipmentId);
}

// 주문이 선택된 경우
function onOrderSelected(shipmentId) {
	console.log("[onOrderSelected()] shipmentId["+shipmentId+"]");
	setShowStyle(MAP_SHOW_RECOMMAND, shipmentId);
}

// 복화건이 클릭된 경우
function onTripClicked(tripId) {
	var	tripObj	= ORD.getTripById(tripId);
	console.log("[onTripClicked()] tripId["+tripId+"] tripObj["+tripObj+"]");
	
	GMAP.drawTrip(tripObj);
}

// 복화건이 선택된 경우
function onTripSelected(tripId) {
	console.log("[onTripSelected()] tripId["+tripId+"]");
	/*
	CURR_TRIP_INFO	= ORD.getTripById(tripId);
	CURR_SHOW_STYLE	= MAP_SHOW_ONE_MATCH
	GMAP.redraw();
	*/
}

// 초기화면이 선택된 경우 (지도의 HOME버튼)
function onHomeSelected() {
	var	nextShowStyle	= null;
	console.log("[onHomeSelected()]");
	
	setShowStyle(MAP_SHOW_ALL_MATCH);
}


// 탭 선택시 해당 탭의 데이터를 출력하도록 조정
// param=0: 매칭완료 주문, 1:매칭대상 주문, 2:추천목록
function onTabSelected(param) {
	console.log("[algoMatchInfo.js-onTabSelected()] CURR_TAB_IDX["+param+"]");
	switch (param) {
		case 0 :
			$("#algoMatchOrdList").show();
			$("#algoRecommandList").hide();
			//
			$("#algoMatchOrdList li:eq(0) > a").addClass("on");
			$("#algoMatchOrdList li:eq(1) > a").removeClass("on");
			//
			$("#algoMatchList").show();
			$("#algoOrdList").hide();
			
			// 복화매칭 목록
			CURR_LIST	= ORD.getTripListByType("O");
		break;
		
		case 1 :
			$("#algoMatchOrdList").show();
			$("#algoRecommandList").hide();
			//
			$("#algoMatchOrdList li:eq(0) > a").removeClass("on");
			$("#algoMatchOrdList li:eq(1) > a").addClass("on");
			//
			$("#algoMatchList").hide();
			$("#algoOrdList").show();

			// 매칭대상 주문 목록
			CURR_LIST	= ORD.getArrOrdInfo();
		break;
	
		case 2 :
			$("#algoMatchOrdList").hide();
			$("#algoRecommandList").show();

			// 복화추천 목록
			CURR_LIST	= ORD.getRecommandTripList();
		break;
	
		default :
			return;
		break;
	}
	CURR_TAB_IDX	= param;
	//console.log("[algoMatchInfo.js-onTabSelected()] CURR_TAB_IDX["+CURR_TAB_IDX+"] CURR_LIST["+JSON.stringify(CURR_LIST)+"]");

	initPaging(true);
}


//차량목록 데이터 복사 및 페이징 준비
function initPaging(isReset) {
	console.log("[initPaging()] isReset["+isReset+"]");

	if(isReset) {
		CURR_PAGE	= -1;
	}
	//
	stopPaging();
	startPaging();
}


// 현재 보여주는 데이터의 다음 페이지 출력 (타이머 이벤트)
function onNextPage() {
	console.log("[onNextPage()]");

	// 페이지 증가. 끝이면 0으로
	CURR_PAGE	= (++CURR_PAGE) % (Math.ceil(CURR_LIST.length / PAGE_SIZE[CURR_TAB_IDX]));
	//console.log("[W.onNextPage()] CURR_PAGE["+CURR_PAGE+"]");
	
	if("0" == CURR_TAB_IDX) {
		showMatchList();
	} else if("1" == CURR_TAB_IDX) {
		showAlgoOrdList();
	} else if("2" == CURR_TAB_IDX) {
		showRecommandList();
	}
}

//목록 자동 업데이트 타이머 설정
function startPaging() {
	if(PAGING_TIMER == null) {
		onNextPage();
		//
		PAGING_TIMER	= setInterval(
				function() {	
					//onNextPage();
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



// 현재시간 설정
function setClock() {
    var	currentDate		= new Date();
    var	time			= ((currentDate.getHours()-1) % 12)+1;
    var	ampm			= (currentDate.getHours() < 12)? "AM":"PM";
    var	dateElm			= $('.top_info_box01 > .date')[0];
    var	timeElm			= $('.top_info_box01 > .time')[0];

    dateElm.innerText	= currentDate.getFullYear()+lang("0206", "년")+" "+(currentDate.getMonth()+1)+lang("0208", "월")+" "+currentDate.getDate()+lang("0209", "일");
    timeElm.innerText	= ampm + " "+ ("0" + time).slice(-2)  + ":" + ("0" + currentDate.getMinutes()).slice(-2);	// + ":" +  ("0" + currentDate.getSeconds()).slice(-2)
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
		case MAP_SHOW_ALL_MATCH :
			CURR_SHIPMENT_INFO				= null;
			CURR_TRIP_INFO					= null;
			
			// Show-Hide
			onTabSelected(0);
			
			// 맵에 적용
			GMAP.setShowStyle(showStyle);

			// 배차율 및 범례 적용
			//setRemark();

		break;
		
		// 특정 주문이 포함된 복화목록
		case MAP_SHOW_RECOMMAND :
			// 현재 선택 주문 설정
			CURR_SHIPMENT_INFO				= ORD.getOrderInfo(param);
			
			// 추천주문 마커 생성
			GMAP.clearMarkers([MARKER_TYPE_CURR_ORD, MARKER_TYPE_ORD_RECOMMAND], true);
			ORD.setRecommandMarker(GMAP, CURR_SHIPMENT_INFO.SHIPMENT_ID);
			
			// Show-Hide
			onTabSelected(2);

			// 맵에 적용
			GMAP.setShowStyle(showStyle);

			// 배차율 및 범례 적용
			//setRemark();
		break;

		default :
		break;
	}
	
}


//매칭완료 목록 세팅
function showMatchList(arrShprInfo, baseCorpId) {
	var	listDiv		= $("#algoMatchListBody");
	var	strTr		= null;
	var	dataIdx		= -1;
	var	item		= null;
	var	idx			= 0;
	
	listDiv.html("");

	for(var i=0; i<PAGE_SIZE[CURR_TAB_IDX]; i++) {
		dataIdx		= (CURR_PAGE * PAGE_SIZE[CURR_TAB_IDX]) + i;
		item		= CURR_LIST[dataIdx];
		trId		= "nearTr_"+(i+1);
		
		if(item == null) {
			continue;
		}
		
		strTr	= MATCH_INFO_HTML_BASE;
		//
		strTr	= strTr.replace(/##NO##/g				,i+1);
		strTr	= strTr.replace(/##TRIP_ID##/g			,item.TRIP_ID);
		strTr	= strTr.replace(/##STATUS_NM##/g		,item.ship1Obj.STATUS_NM);
		strTr	= strTr.replace(/##VHCL_NO##/g			,nvl(item.ship1Obj.VHCL_NO, ""));
		strTr	= strTr.replace(/##SHIPMENT_ID_1##/g	,item.ship1Obj.SHIPMENT_ID);
		strTr	= strTr.replace(/##SHPR_NM_1##/g		,item.ship1Obj.SHPR_NM);
		strTr	= strTr.replace(/##VHCL_1##/g			,item.ship1Obj.REQ_VHCL_KND_NM+" "+item.ship1Obj.REQ_VHCL_TON_NM);
		strTr	= strTr.replace(/##DEP_SI_GU_1##/g		,item.ship1Obj.DEP_SI_GU);
		strTr	= strTr.replace(/##DEP_REQ_TIME_1##/g	,item.ship1Obj.DEP_REQ_TIME.substr(0,2)+":"+item.ship1Obj.DEP_REQ_TIME.substr(2,2));
		strTr	= strTr.replace(/##ARR_SI_GU_1##/g		,item.ship1Obj.ARR_SI_GU);
		strTr	= strTr.replace(/##ARR_REQ_TIME_1##/g	,item.ship1Obj.DEP_REQ_TIME.substr(0,2)+":"+item.ship1Obj.DEP_REQ_TIME.substr(2,2));
		strTr	= strTr.replace(/##SHIPMENT_ID_2##/g	,item.ship2Obj.SHIPMENT_ID);
		strTr	= strTr.replace(/##SHPR_NM_2##/g		,item.ship2Obj.SHPR_NM);
		strTr	= strTr.replace(/##VHCL_2##/g			,item.ship2Obj.REQ_VHCL_KND_NM+" "+item.ship2Obj.REQ_VHCL_TON_NM);
		strTr	= strTr.replace(/##DEP_SI_GU_2##/g		,item.ship2Obj.DEP_SI_GU);
		strTr	= strTr.replace(/##DEP_REQ_TIME_2##/g	,item.ship2Obj.DEP_REQ_TIME.substr(0,2)+":"+item.ship2Obj.DEP_REQ_TIME.substr(2,2));
		strTr	= strTr.replace(/##ARR_SI_GU_2##/g		,item.ship2Obj.ARR_SI_GU);
		strTr	= strTr.replace(/##ARR_REQ_TIME_2##/g	,item.ship2Obj.DEP_REQ_TIME.substr(0,2)+":"+item.ship2Obj.DEP_REQ_TIME.substr(2,2));
		
		listDiv.append(strTr);
	}
}


//매칭대상 주문 목록 세팅
function showAlgoOrdList(arrShprInfo, baseCorpId) {
	var	listDiv		= $("#algoOrdListBody");
	var	strTr		= null;
	var	dataIdx		= -1;
	var	item		= null;
	var	idx			= 0;
	
	listDiv.html("");

	for(var i=0; i<PAGE_SIZE[CURR_TAB_IDX]; i++) {
		dataIdx		= (CURR_PAGE * PAGE_SIZE[CURR_TAB_IDX]) + i;
		item		= CURR_LIST[dataIdx];	// 주문목록
		trId		= "nearTr_"+(i+1);
		
		if(item == null) {
			continue;
		}
		
		strTr	= ORD_INFO_HTML_BASE;
		//
		strTr	= strTr.replace(/##NO##/g				,item.SHIPMENT_ID);
		strTr	= strTr.replace(/##SHIPMENT_ID##/g		,item.SHIPMENT_ID);
		strTr	= strTr.replace(/##EXE_CORP_NM##/g		,item.EXE_CORP_NM);
		strTr	= strTr.replace(/##STATUS_NM##/g		,item.STATUS_NM);
		strTr	= strTr.replace(/##VHCL_NO##/g			,nvl(item.VHCL_NO, ""));
		strTr	= strTr.replace(/##SHPR_NM##/g			,item.SHPR_NM);
		strTr	= strTr.replace(/##VHCL##/g				,item.REQ_VHCL_KND_NM+" "+item.REQ_VHCL_TON_NM);
		strTr	= strTr.replace(/##DEP_SI_GU##/g		,item.DEP_SI_GU);
		strTr	= strTr.replace(/##DEP_REQ_TIME##/g		,item.DEP_REQ_TIME.substr(0,2)+":"+item.DEP_REQ_TIME.substr(2,2));
		strTr	= strTr.replace(/##ARR_SI_GU##/g		,item.ARR_SI_GU);
		strTr	= strTr.replace(/##ARR_REQ_TIME##/g		,item.DEP_REQ_TIME.substr(0,2)+":"+item.DEP_REQ_TIME.substr(2,2));
		//
		listDiv.append(strTr);
	}
}


// 복화추천목록 세팅
function showRecommandList(arrShprInfo, baseCorpId) {
	var	listDiv		= $("#algoRecommandListBody");
	var	strTr		= null;
	var	dataIdx		= -1;
	var	item		= null;
	var	idx			= 0;
	
	listDiv.html("");

	for(var i=0; i<PAGE_SIZE[CURR_TAB_IDX]; i++) {
		dataIdx		= (CURR_PAGE * PAGE_SIZE[CURR_TAB_IDX]) + i;
		item		= CURR_LIST[dataIdx];
		trId		= "nearTr_"+(i+1);
		
		if(item == null) {
			continue;
		}
		
		strTr	= MATCH_INFO_HTML_BASE;
		//
		strTr	= strTr.replace(/##NO##/g				,i+1);
		strTr	= strTr.replace(/##TRIP_ID##/g			,item.TRIP_ID);
		strTr	= strTr.replace(/##STATUS_NM##/g		,(item.TRIP_TYPE == "O")? "최적복화" : "추천") ;
		strTr	= strTr.replace(/##VHCL_NO##/g			,nvl(item.ship1Obj.VHCL_NO, ""));
		strTr	= strTr.replace(/##SHIPMENT_ID_1##/g	,item.ship1Obj.SHIPMENT_ID);
		strTr	= strTr.replace(/##SHPR_NM_1##/g		,item.ship1Obj.SHPR_NM);
		strTr	= strTr.replace(/##VHCL_1##/g			,item.ship1Obj.REQ_VHCL_KND_NM+" "+item.ship1Obj.REQ_VHCL_TON_NM);
		strTr	= strTr.replace(/##DEP_SI_GU_1##/g		,item.ship1Obj.DEP_SI_GU);
		strTr	= strTr.replace(/##DEP_REQ_TIME_1##/g	,item.ship1Obj.DEP_REQ_TIME.substr(0,2)+":"+item.ship1Obj.DEP_REQ_TIME.substr(2,2));
		strTr	= strTr.replace(/##ARR_SI_GU_1##/g		,item.ship1Obj.ARR_SI_GU);
		strTr	= strTr.replace(/##ARR_REQ_TIME_1##/g	,item.ship1Obj.DEP_REQ_TIME.substr(0,2)+":"+item.ship1Obj.DEP_REQ_TIME.substr(2,2));
		strTr	= strTr.replace(/##SHIPMENT_ID_2##/g	,item.ship2Obj.SHIPMENT_ID);
		strTr	= strTr.replace(/##SHPR_NM_2##/g		,item.ship2Obj.SHPR_NM);
		strTr	= strTr.replace(/##VHCL_2##/g			,item.ship2Obj.REQ_VHCL_KND_NM+" "+item.ship2Obj.REQ_VHCL_TON_NM);
		strTr	= strTr.replace(/##DEP_SI_GU_2##/g		,item.ship2Obj.DEP_SI_GU);
		strTr	= strTr.replace(/##DEP_REQ_TIME_2##/g	,item.ship2Obj.DEP_REQ_TIME.substr(0,2)+":"+item.ship2Obj.DEP_REQ_TIME.substr(2,2));
		strTr	= strTr.replace(/##ARR_SI_GU_2##/g		,item.ship2Obj.ARR_SI_GU);
		strTr	= strTr.replace(/##ARR_REQ_TIME_2##/g	,item.ship2Obj.DEP_REQ_TIME.substr(0,2)+":"+item.ship2Obj.DEP_REQ_TIME.substr(2,2));
		
		listDiv.append(strTr);
	}
}
