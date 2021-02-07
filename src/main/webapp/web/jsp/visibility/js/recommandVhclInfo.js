/**
 * Visibility - 차량관제 화면 메인 스크립트
 * 
 * @author	Jang. Jae-hyuk
 * @since	2018. 11. 08.
 */

// window.NEXACROHTML 객체 초기화
if (! window.NEXACROHTML) 
{
	window.NEXACROHTML = {};
}

window.NEXACROHTML.FireUserNotify = function(userdata) {
	
	//넥사크로 호출 유형에 맞게 분기해서 처리한다.
	if(window.NEXACROWEBBROWSER)
	{
		//넥사크로 런타임 버전 
		window.NEXACROWEBBROWSER.on_fire_onusernotify(window.NEXACROWEBBROWSER, userdata);
	}
	else
	{
		//런타임 버전
		window.document.title = userdata;
	}
}



// ///////////////////////////////////////////////////////////////////////////
// EVENT 처리
/////////////////////////////////////////////////////////////////////////////

// Window.onload()
$(window).load(function(e) {
	GMAP	= new clsGMap();
	GMAP.initGMap($("#gmap"));
	
	window.NEXACROHTML.FireUserNotify("LOAD:HIHI");

	//setTolNo("TO190128279272");
});

// 웹화면 로딩을 넥사크로에 알린 후, 넥사크로에서 조회대상 주문 세팅
function setTolNo(tolNo) {
	CURR_SHOW_STYLE		= MAP_SHOW_ONE_ORD;
	
	// 넥사크로에서 여러 번 호출하는 것에 대응
	if(CURR_TOL_NO == null) {	
		CURR_TOL_NO		= tolNo;
		
		// 차량 경로 조회 및 출력
		getRecommandVhclList(tolNo, function(result) {
			NEAR_VHCL_INFO	= result;
			
			// 
			remapVhclInfo(NEAR_VHCL_INFO.recommandVhclList);
			
			// 맵에 적용
			GMAP.setShowStyle(CURR_SHOW_STYLE, result);
	
			// 주문 주변 차량목록 페이징
			initPaging(GMAP.getMarkerDataObjByType(MARKER_TYPE_VHCL, true), true);
			
			// 배차율 및 범례 적용
			setRemark();
		});
	}
}

// 차량을 선택 하여 넥사크로로 전달
function selectVhcl(cntrlNo) {
	window.NEXACROHTML.FireUserNotify("VHCL:"+cntrlNo);
}


// 주문 주변 차량 목록 조회 (실시간 차량 조회 알고리즘)
function getRecommandVhclList(tolNo, argCallback) {
	var	that	= this;
	
	callService({
		url      : "vis/getVisibilityInfo.do",
		svcId    : "getRecommandVhclList",
		param    : {TOL_NO : tolNo},
		callback : function(val) {
				argCallback(val);
			}
	});		
}	


// 쿼리 결과를 맵에 적용하기 위해 정보 수정
function remapVhclInfo(recommandVhclList) {
	recommandVhclList.forEach(function(item) {
		item.LNG		= item.COORD_WGS84_X;
		item.LAT		= item.COORD_WGS84_Y;
		item.DIST		= item.XY_KM;
		item.VHCL_NO	= item.EQP_NO;
		
		if(item.TOL_SCD < '090') {
			item.STATUS		= "20";
			item.STATUS_NM	= lang("0074", "미배차");
		} else if(["090"].includes(item.TOL_SCD)) {
			item.STATUS		= "30";
			item.STATUS_NM	= lang("0081", "배차확정");
		} else if(item.TOL_SCD < "120") {
			item.STATUS		= "40";
			item.STATUS_NM	= lang("0082", "수송중");
		} else if(["120"].includes(item.TOL_SCD)) {
			item.STATUS		= "50";
			item.STATUS_NM	= lang("0083", "하차지도착");
		} else if(["130","200","210","300"].includes(item.TOL_SCD)) {
			item.STATUS		= "60";
			item.STATUS_NM	= lang("0084", "하차완료");
		} else {
			item.STATUS		= "10";
			item.STATUS_NM	= lang("0074", "미배차");
		}		
	});
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

//차량 선택시
function onVhclSelected(vhclNo) {
	console.log("[onVhclSelected()] vhclNo["+vhclNo+"]");
	GMAP.showMarkerInfo(vhclNo);
}

// 차량 클릭시
function onVhclClicked(vhclNo) {
	console.log("[onVhclClicked()] vhclNo["+vhclNo+"]");
	GMAP.showMarkerInfo(vhclNo);
}



//차량목록 데이터 복사 및 페이징 준비
function initPaging(arrMapDataObj, isReset) {
	console.log("[initPaging()] arrMapDataObj["+arrMapDataObj.length+"]");

	// 출력대상 자료 생성 (해당 거점의 미배차 주문 목록 복사)
	CURR_LIST.length	= 0;
	CURR_LIST			= arrMapDataObj;

	if(isReset) {
		CURR_PAGE	= -1;
	}
	
	onNextPage();
}


// 현재 보여주는 데이터의 다음 페이지 출력 (타이머 이벤트)
function onNextPage(param) {
	//console.log("[onNextPage()] param["+JSON.stringify(param)+"]");

	// 페이지 증가. 끝이면 0으로
	CURR_PAGE	= (++CURR_PAGE) % (Math.ceil(CURR_LIST.length / PAGE_SIZE));
	//console.log("[W.onNextPage()] CURR_PAGE["+CURR_PAGE+"]");
	
	showNearVhclList();
}


/////////////////////////////////////////////////////////////////////////////
// EVENT 처리 - END
/////////////////////////////////////////////////////////////////////////////

//범례 업데이트 (자료범위 / 상태별 건수)
function setRemark() {
	var	orderInfo	= NEAR_VHCL_INFO.orderInfo;
	var	baseCorpId	= orderInfo.BASE_CORP_ID;
	var	shprNm		= orderInfo.SHPR_NM;

	// 건수 출력
	$(".top_info_box01:eq(0) .tx_info01 .tx02 b").text((NEAR_VHCL_INFO.recommandVhclList != null)? NEAR_VHCL_INFO.recommandVhclList.length+"": "0");

	// 주문정보 출력
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(0)").text(orderInfo.SHPR_NM);
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(1)").text(orderInfo.DEP_REQ_DT.substring(8,10) + ":" +orderInfo.DEP_REQ_DT.substring(10,12));
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(2)").text(orderInfo.DEP_SI_GU);
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(3)").text(orderInfo.ARR_SI_GU);
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
	//alert("## showNearVhclList CURR_LIST["+CURR_LIST.length+"] PAGE_SIZE["+PAGE_SIZE+"] CURR_PAGE["+CURR_PAGE+"]");
	console.log("[orderInfo.js-showNearVhclList()]");
	
	// 목록 초기화
	baseElm		= $("#nearVhclListBody");
	//alert(baseElm.length);
	baseElm.html("");
	
	// 목록 출력
	for(var i=0; i<PAGE_SIZE; i++) {
		dataIdx		= (CURR_PAGE * PAGE_SIZE) + i;
		data		= CURR_LIST[dataIdx];
		trId		= "nearTr_"+(i+1);
		
		//console.log("[orderInfo.js-showNearVhclList()] Create new TR. "+trId);
		//alert("[orderInfo.js-showNearVhclList()] Create new TR. "+trId);
		trElm			= $(NEAR_VHCL_HTML_BASE.replace(/##TR_ID##/g, trId));
		//
		baseElm.append(trElm);			
		//alert(baseElm.html());

		if(data == null) continue;

		// 차량 클릭 이벤트 설정
		(function(vhclNo, cntrlNo) {
			trElm.bind("dblclick", function(e) {selectVhcl(cntrlNo);});
			trElm.bind("click", function(e) {onVhclClicked(vhclNo);});
		}(data.VHCL_NO, data.CNTRL_NO));

		(function(trId, dataIdx, data) {
			FLIPPER_TIMER[i]	= setTimeout(
					function() {
						//console.log("[flipper timeout] trId["+trId+"]");
						vhclKnd		= (data.REQ_VHCL_KND_NM != null)? (pad(data.REQ_VHCL_KND_NM,3)+"/"+pad(Math.floor(data.REQ_VHCL_TON_NM),2)) : "";

						$("#"+trId+"_1").text(""+(dataIdx+1));
						$("#"+trId+"_2").html("<img src='"+VHCL_STATUS_TYPE_MAP.get(data.STATUS).listIcon+"'/>");
						$("#"+trId+"_3").text(data.VHCL_NO);
						$("#"+trId+"_4").text(vhclKnd);
						$("#"+trId+"_5").text(Math.round(data.DIST));
						$("#"+trId+"_6").text(nvl(data.DEP_NODE_NM,""));
						$("#"+trId+"_7").text(nvl(data.ARR_NODE_NM,""));
					}
					, i*PAGE_FLIPPER_TIMING)
		}(trId, dataIdx, data));
		//alert(trElm.innerHTML);
		console.log("[orderInfo.js-showNearVhclList()] trHTML["+trElm.innerHTML+"]");
	}
}

