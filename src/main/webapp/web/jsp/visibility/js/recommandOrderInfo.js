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

	//setCntrlNo("C250271");
});


// 웹화면 로딩을 넥사크로에 알린 후, 넥사크로에서 조회대상 주문 세팅
function setCntrlNo(cntrlNo) {
	CURR_SHOW_STYLE		= MAP_SHOW_ONE_VHCL;
	
	// 넥사크로에서 여러 번 호출하는 것에 대응
	if(CURR_CNTRL_NO == null) {	
		CURR_CNTRL_NO		= cntrlNo;
		
		// 추천주문 목록 조회
		getRecommandOrderList(cntrlNo, function(result) {
			NEAR_ORD_INFO		= result;
			
			// 쿼리 결과를 맵에 적용하기 위해 정보 수정
			remapOrderInfo(NEAR_ORD_INFO.recommandOrderList);
			
			// 맵에 적용
			GMAP.setShowStyle(CURR_SHOW_STYLE, result);
	
			// 주문 주변 차량목록 페이징
			initPaging(GMAP.getMarkerDataObjByType(MARKER_TYPE_RECOMM_ORD, true), true);
			
			// 배차율 및 범례 적용
			setRemark();
		});
	}
}

// 차량을 선택 하여 넥사크로로 전달
function selectOrder(tolNo) {
	console.log("[selectOrder()] tolNo["+tolNo+"]");
	window.NEXACROHTML.FireUserNotify("ORD:"+tolNo);
}


// 차량에 대한 추천주문 조회 (실시간 주문 조회)
function getRecommandOrderList(cntrlNo, argCallback) {
	var	that	= this;
	
	callService({
		url      : "vis/getVisibilityInfo.do",
		svcId    : "getRecommandOrderList",
		param    : {CNTRL_NO : cntrlNo, RANGE : 30},
		callback : function(val) {
				console.log(JSON.stringify(val));
				argCallback(val);
			}
	});		
}	


// 쿼리 결과를 맵에 적용하기 위해 정보 수정
function remapOrderInfo(recommandOrderList) {
	recommandOrderList.forEach(function(item) {
		//
	});
}


// 주문이 선택된 경우
function onOrderSelected(tolNo) {
	console.log("[onOrderSelected()] tolNo["+tolNo+"]");
	selectOrder(tolNo);
}
// 마커가 클릭된 경우
function onOrderClicked(tolNo) {
	console.log("[onMarkerClicked()] tolNo["+tolNo+"]");
	GMAP.showMarkerInfo(tolNo);
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
	
	showNearOrderList();
}


/////////////////////////////////////////////////////////////////////////////
// EVENT 처리 - END
/////////////////////////////////////////////////////////////////////////////

//범례 업데이트 (자료범위 / 상태별 건수)
function setRemark() {
	var	vhclInfo			= NEAR_ORD_INFO.vhclInfo;
	var	recommandOrderList	= NEAR_ORD_INFO.recommandOrderList;

	// 건수 출력
	$(".top_info_box01:eq(0) .tx_info01 .tx02 b").text((recommandOrderList != null)? recommandOrderList.length+"": "0");

	// 주문정보 출력
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(0)").text(vhclInfo.VHCL_NO);
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(1)").text(vhclInfo.STATUS_NM);
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(2)").text(vhclInfo.VHCL_KND_NM+" "+vhclInfo.TON_NM);
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(3)").text((isNull(vhclInfo.DEP_SI_GU))? "":vhclInfo.DEP_SI_GU);
	$("#vhclListByOrder .board_wrap:eq(0) table td:eq(4)").text((isNull(vhclInfo.ARR_SI_GU))? "":vhclInfo.ARR_SI_GU);
}

// 선택된 주문 근처의 차량 목록 출력
function showNearOrderList() {
	var	dataIdx		= 0;
	var	data		= null;
	var	baseElm		= null;

	var	trId		= null;
	var	trElm		= null;
	var	inHtml		= null;
	
	var	vhclKnd		= null;
	console.log("## showNearOrderList CURR_LIST["+CURR_LIST.length+"] PAGE_SIZE["+PAGE_SIZE+"] CURR_PAGE["+CURR_PAGE+"]");
	
	// 목록 초기화
	baseElm		= $("#orderListBody");
	//alert(baseElm.length);
	baseElm.html("");
	
	// 목록 출력
	for(var i=0; i<PAGE_SIZE; i++) {
		dataIdx		= (CURR_PAGE * PAGE_SIZE) + i;
		data		= CURR_LIST[dataIdx];
		trId		= "nearTr_"+(i+1);
		strHtml		= ORD_INFO_HTML_BASE;

		if(data != null) {
			//console.log("[orderInfo.js-showNearOrderList()] Create new TR. "+trId);
			strHtml		= strHtml.replace(/##NO##/g				,(dataIdx+1));
			strHtml		= strHtml.replace(/##TOL_NO##/g			,data.TOL_NO);
			strHtml		= strHtml.replace(/##SHPR_NM##/g		,data.SHPR_NM);
			strHtml		= strHtml.replace(/##DEP_REQ_TIME##/g	,(isNull(data.DEP_REQ_DT))? "": (data.DEP_REQ_DT.substring(8,10)+":"+data.DEP_REQ_DT.substring(10,12)) );
			strHtml		= strHtml.replace(/##ARR_REQ_TIME##/g	,(isNull(data.ARR_REQ_DT))? "": (data.ARR_REQ_DT.substring(8,10)+":"+data.ARR_REQ_DT.substring(10,12)) );
			strHtml		= strHtml.replace(/##VHCL##/g			,data.REQ_VHCL_KND_NM+" "+data.REQ_VHCL_TON_NM);
			strHtml		= strHtml.replace(/##DEP_SI_GU##/g		,data.DEP_SI_GU);
			strHtml		= strHtml.replace(/##ARR_SI_GU##/g		,data.ARR_SI_GU);
		} else {
			return;
		}
		trElm			= $(strHtml);
		//
		baseElm.append(trElm);			
		//alert(baseElm.html());

		console.log("[orderInfo.js-showNearVhclList()] trHTML["+trElm.innerHTML+"]");
	}
}

