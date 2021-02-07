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
	LAST_EVENT_TIME		= new Date().getTime();
	$(this).mousemove(function(e) {
		//console.log("mouse moved...");
		LAST_EVENT_TIME		= new Date().getTime();
	});
	$(this).keypress(function(e) {
		//console.log("key pressed...");
		LAST_EVENT_TIME		= new Date().getTime();
	});
	
	
	//getWeather();

	console.log("[onLoad()] start....");
	VHCL	= new clsVhclInfoData();
	GMAP	= new clsGMap();
	
	GMAP.initGMap($("#gmap"));
	
	// 주기적으로 데이터 조회
	onDataRefresh();
	setInterval(function() {
		onDataRefresh();
	}, DATA_REFRESH_TIMING);
	
	//setInterval(setClock, 1000);
});

// 미입력 기간을 체크하여 자동 모니터링
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
					setShowStyle(MAP_SHOW_ONE_BASE, VHCL.getArrBaseCorp()[MON_IDX].id);
					MON_IDX		= (MON_IDX+1) % (VHCL.getArrBaseCorp().length-1);
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
	VHCL.getVhclList(function() {
		// 마커 데이터 삭제
		GMAP.clearAllMarkers(true);
		
		// 마커 재생성
		VHCL.setVhclInfoMarker(GMAP);
		VHCL.setBaseCorpMarker(GMAP);
		
		// 맵 다시 그리기
		setShowStyle(CURR_SHOW_STYLE);
		
		// 데이터 업데이트 시간
		setClock();
	});	
}

// 거점이 선택된 경우 (지도 마커 클릭)
function onBaseSelected(baseCoropId) {
	console.log("[onBaseSelected()] baseCoropId["+baseCoropId+"]");
	setShowStyle(MAP_SHOW_ONE_BASE, baseCoropId);
}
//거점이 선택된 경우 (지도 마커 클릭)
function onBaseClicked(baseCoropId) {
	console.log("[onBaseClicked()] baseCoropId["+baseCoropId+"]");
	GMAP.showMarkerInfo(baseCoropId);
}

//차량이 선택된 경우 (지도 마커 클릭, 차량목록 클릭)
function onVhclSelected(vhclNo) {
	var	vhclInfo	= VHCL.getVhclData(vhclNo);
	console.log("[onVhclSelected()] vhclNo["+vhclNo+"] vhclInfo["+vhclInfo+"]");
	
	if(vhclInfo.markerType === MARKER_TYPE_VHCL) {
		alert(lang("0239", "공차입니다"));
		return;
	}
	setShowStyle(MAP_SHOW_ONE_VHCL, vhclNo);
}
// 차량이 클릭된 경우
function onVhclClicked(vhclNo) {
	console.log("[onVhclClicked()] vhclNo["+vhclNo+"]");
	GMAP.showMarkerInfo(vhclNo);
}

// 초기화면이 선택된 경우 (지도의 HOME버튼)
function onHomeSelected(param) {
	var	nextShowStyle	= null;
	console.log("[onHomeSelected()] param["+JSON.stringify(param)+"]");
	
	if(CURR_SHOW_STYLE === MAP_SHOW_ALL_BASE) {
		return;
	} else if(CURR_SHOW_STYLE === MAP_SHOW_ONE_BASE) {
		setShowStyle(MAP_SHOW_ALL_BASE);
	} else if(CURR_SHOW_STYLE === MAP_SHOW_ONE_VHCL) {
		if(CURR_BASE_CORP_ID != null) {
			setShowStyle(MAP_SHOW_ONE_BASE);
		} else {
			setShowStyle(MAP_SHOW_ALL_BASE);
		}
	}
}

// 탭 선택시
function onTabSelected(param) {
	var	arrVhclStat		= null;
	var	tabObj			= null;
	console.log("[onTabSelected()] param["+param+"]");
	
	// 탭 선택
	for(var i=0; i<3; i++) {
		tabObj	= $("#vhclInfoArea > div > ul > li:eq("+i+") > a");
		
		if(i == param) {
			tabObj.addClass("on");
		} else {
			tabObj.removeClass("on");
		}
	}

	// 탭 선택시 출력 옵션 정의
	switch (param) {
	case 0 :
		arrVhclStat		= [MARKER_TYPE_VHCL_MOV_UP, MARKER_TYPE_VHCL_MOV_DOWN, MARKER_TYPE_VHCL_ALM, MARKER_TYPE_VHCL_FIN];	// 영차
		break;
	case 1 :
		arrVhclStat		= [MARKER_TYPE_VHCL];		// 공차
		break;
	}
	//
	initPaging(CURR_BASE_CORP_ID, arrVhclStat);
}

//차량목록 데이터 복사 및 페이징 준비
function initPaging(baseCorpId, arrVhclStat) {
	console.log("[initPaging()] baseCorpId["+baseCorpId+"] arrVhclStat["+arrVhclStat+"]");

	// 출력대상 자료 생성 (해당 거점의 차량 데이터 복사)
	CURR_LIST.length	= 0;
	CURR_LIST			= VHCL.getVhclDataByBase(baseCorpId, arrVhclStat);
	//console.log("[initPaging()] CURR_LIST["+CURR_LIST+"]");

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
// 현재 보여주는 데이터의 다음 페이지 출력 (타이머 이벤트)
function onNextPage() {
	//console.log("[onNextPage()] param["+JSON.stringify(param)+"]");

	// 페이지 증가. 끝이면 0으로
	CURR_PAGE	= (++CURR_PAGE) % (Math.ceil(CURR_LIST.length / PAGE_SIZE));
	//console.log("[W.onNextPage()] CURR_PAGE["+CURR_PAGE+"]");
	
	showVhclList();	
}

// 목록 자동 업데이트 타이머 설정
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
	var	op	= getOpRate(CURR_BASE_CORP_ID);

	if(CURR_SHOW_STYLE != MAP_SHOW_ONE_VHCL) {
		// 가동률 설정
		$('.top_info_box01 > .tx_info01 .tx02 b').text(op.opRate);
	
		// 전체 위수탁 차량 건수 설정
		$("#remarkBody th").text(op.baseCorpNm + " ("+op.cnt+")");
		
		// 날씨 하단 거점명 설정
		$('.top_info_box01 > .tx_info01 .tx01 span:eq(0)').text(op.baseCorpNm);
		//$("#currBaseCorpName b").text(op.baseCorpNm);
	    
		// 상태별 위수탁 차량 건수 설정
		$("#remarkBody .tx_l:eq(0) f").text(getVhclCount(CURR_BASE_CORP_ID, ["10","20"], null).naCnt);
		$("#remarkBody .tx_l:eq(1) f").text(getVhclCount(CURR_BASE_CORP_ID, ["30","40","50"], null).naCnt);
		$("#remarkBody .tx_l:eq(2) f").text(getVhclCount(CURR_BASE_CORP_ID, ["90","91"], null).naCnt);
		$("#remarkBody .tx_l:eq(3) f").text(getVhclCount(CURR_BASE_CORP_ID, ["60"], null).naCnt);
	
		// 하차지 분포 및 목록 타이틀 변경
		$("#orderList .s_tit b").text(op.title);
	}
	
	// 날씨 업데이트
	setWeather(CURR_BASE_CORP_ID);
}

// 위수탁 차량 하차지 분포 설정
function setArrLocCnt() {
	var	result	= null;
	
	for(var i=1; i<=5; i++) {
		result	= getVhclCount(CURR_BASE_CORP_ID, null, "R0"+i);
		$("#regionCnt_R0"+i).text(result.naCnt + " / " + result.rate +"%");
	}
}


//위수탁가동률 조회
//baseCorpId != null 이면 거점별 위수탁가동률
function getOpRate(baseCorpId) {
	var	title		= null;
	var	baseCorpNm	= null;
	var	cnt			= 0;	// 주문건수
	var	movCnt		= 0;	// 가동건수
	var	dataObj		= null;
	var	opRate		= 0;
	
	if(baseCorpId != null) {
		dataObj			= VHCL.getBaseCorpData(baseCorpId); 
		title			= BASE_LOC_MAP.get(dataObj.BASE_CORP_ID).abbrNm;
		baseCorpNm		= BASE_LOC_MAP.get(dataObj.BASE_CORP_ID).abbrNm;
		cnt				= dataObj.TOT_CNT;
		movCnt			= dataObj.MOV_CNT;
	} else {
		title			= lang("0026", "전국");
		baseCorpNm		= lang("0026", "전국");
		VHCL.getArrBaseCorp().forEach(function(item) {
			cnt			+= item.TOT_CNT;
			movCnt		+= item.MOV_CNT;
		});
	}
	
	if(cnt == 0) {
		opRate	= 0;
	} else {
		opRate	= Math.round(movCnt / cnt * 100);
	}
	
	return {title : title, opRate : opRate, movCnt : movCnt, cnt : cnt, baseCorpNm : baseCorpNm};
}

//미배차 건수 조회
//status != null : 상태별, regionCd != null : 하차지 권역별 건수, 둘 다 null이면 전체 미배차 건수
function getVhclCount(bCorpId, arrStatus, regionCd) {
	var	cnt			= 0;	// 위수탁 차량 전체건수
	var	naCnt		= 0;	// 상태/권역에 맞는 위수탁 차량 건수
	var	rate		= 0;	// 권역(상태)별 비율
	var	baseCorpId	= bCorpId;
	var	shprId		= null;
	
	VHCL.getArrVhclInfo().forEach(function(item) {
		if(	(baseCorpId == null || item.BASE_CORP_ID == baseCorpId)	) {
			cnt ++;
			//
			if(arrStatus != null && arrStatus.includes(item.STATUS)) {
				naCnt ++;
			} else if(regionCd != null && item.ARR_REGION == regionCd) {
				naCnt ++;
			} else if(arrStatus == null && regionCd == null) {
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
	var	divBaseCorp		= $("#baseCorpArea")[0];
	var	divVhclList		= $("#vhclInfoArea")[0];
	
	CURR_SHOW_STYLE		= showStyle;
	console.log("[W.setShowStyle()] CURR_SHOW_STYLE["+CURR_SHOW_STYLE+"] param["+param+"]");
	
	switch(CURR_SHOW_STYLE) {
		// 전체거점 + 사고차량
		case MAP_SHOW_ALL_BASE :			
			// 페이징 중지
			stopPaging();

			divBaseCorp.style.display		= "";
			divVhclList.style.display		= "none";
			//
			CURR_BASE_CORP_ID				= null;
			CURR_VHCL_NO					= null;
			
			// 맵에 적용
			GMAP.setShowStyle(showStyle);

			// Chart...
			initChart();
			
			// 가동률 및 범례 적용
			setRemark();
		break;
		
		// 1거점 + 거점차량 전체
		case MAP_SHOW_ONE_BASE :
			divBaseCorp.style.display		= "none";
			divVhclList.style.display		= "";
			//
			CURR_BASE_CORP_ID				= (param != null)? param:CURR_BASE_CORP_ID;
			CURR_VHCL_NO					= null;

			// 탭 초기화
			if(param != null) {
				onTabSelected(0);
			} else {
				startPaging();
			}
			
			// 맵에 적용
			GMAP.setShowStyle(showStyle, CURR_BASE_CORP_ID);
			
			// 가동률 및 범례 적용
			setRemark();
			// 하차지 분포 적용
			setArrLocCnt();
		break;
		
		// 1차량 (상/하차지+현재위치+경로)
		case MAP_SHOW_ONE_VHCL :
			CURR_VHCL_NO					= (param != null)? param:CURR_VHCL_NO;
			
			// 페이징 중지
			stopPaging();
			
			// 차량 경로 조회 및 출력
			VHCL.getVhclInfo(CURR_VHCL_NO, function(result) {
				CURR_VHCL_INFO	= result;
				
				// 맵에 적용
				GMAP.setShowStyle(showStyle, result);
				
				// 가동률 및 범례 적용
				setRemark();
			});
			
		break;
	
		default :
		break;
	}
	
}


// 선택된 거점의 차량 목록 출력
function showVhclList() {
	var	dataIdx		= 0;
	var	data		= null;
	var	baseElm		= null;

	var	trId		= null;
	var	trElm		= null;
	var	inHtml		= null;
	
	var	vhclKnd		= null;
	
	console.log("[vhclInfo.js-showVhclList()]");
	
	// 목록 초기화
	baseElm		= $("#vhclListBody");
	baseElm.html("");
	
	// 목록 출력
	for(var i=0; i<PAGE_SIZE; i++) {
		dataIdx		= (CURR_PAGE * PAGE_SIZE) + i;
		data		= CURR_LIST[dataIdx];
		trId		= "vhclTr_"+(i+1);
		trElm		= $("#"+trId)[0];
		
		if(data == null) break;
		
		if(trElm == null) {
			//console.log("[vhclInfo.js-showVhclList()] Create new TR. "+trId);
			trElm			= $(VHCL_INFO_HTML_BASE.replace(/##TR_ID##/g, trId));
			
			// 차량 클릭 이벤트 설정
			(function(vhclNo) {
				trElm.bind("click", function(e) {onVhclClicked(vhclNo);});
				trElm.bind("dblclick", function(e) {onVhclSelected(vhclNo);});
			}(data.VHCL_NO));

			baseElm.append(trElm);
			//
			$("#"+trId+"_3").flapper({	 width			: 9
										,chars_preset	: 'num'
										,align			: 'left'
										//,timing 		: 10
										});
			$("#"+trId+"_4").flapper({	 width			: 6
										,chars_preset	: 'num'
										,align			: 'right'
										//,timing 		: 10
										});
			$("#"+trId+"_5").flapper({	 width			: 5
										,chars_preset	: 'num'
										,align			: 'left'
										//,timing 		: 10
										});
		}
		
		(function(trId, dataIdx, data) {
			FLIPPER_TIMER[i]	= setTimeout(
					function() {
						//console.log("[flipper timeout] trId["+trId+"]");
						vhclKnd		= (data.VHCL_KND_NM != null)? (pad(data.VHCL_KND_NM,3)+"/"+pad(Math.floor(data.TON_NM),2)) : "";
						
						$("#"+trId+"_1").text(""+(dataIdx+1));
						$("#"+trId+"_2").html("<img src='"+VHCL_STATUS_TYPE_MAP.get(data.STATUS).listIcon+"'/>");
						$("#"+trId+"_3").val(data.VHCL_NO).change();
						$("#"+trId+"_4").val(vhclKnd).change();
						$("#"+trId+"_5").val(data.FREE_VHCL_TM).change();
					}
					, i*PAGE_FLIPPER_TIMING)
		}(trId, dataIdx, data));
		//console.log("[W.showVhclList()] trHTML["+trElm.innerHTML+"]");
	}
}


// 거점별 날씨정보 설정
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