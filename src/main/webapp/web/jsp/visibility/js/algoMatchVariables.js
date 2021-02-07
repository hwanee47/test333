
/* Visibility Data */
"USE STRICT";


/////////////////////////////////////////////////////////////////////////////
// Constants Definition
/////////////////////////////////////////////////////////////////////////////

// 마커 종류
const	MARKER_TYPE_ORD					= "ORD";				// 마커그룹
const	MARKER_TYPE_ORD_NO_MATCH		= "ORD_NO_MATCH";		// 미매칭 주문
const	MARKER_TYPE_ORD_MATCH_1ST		= "ORD_MATCH_1ST_UP";	// 매칭 1주문 상차지
const	MARKER_TYPE_ORD_MATCH_1ST_DN	= "ORD_MATCH_1ST_DN";	// 매칭 1주문 하차지
const	MARKER_TYPE_ORD_MATCH_2ND		= "ORD_MATCH_2ND_UP";	// 매칭 2주문 상차지
const	MARKER_TYPE_ORD_MATCH_2ND_DN	= "ORD_MATCH_2ND_DN";	// 매칭 2주문 하차지
//
const	MARKER_TYPE_CURR_ORD			= "CURR_ORD";			// 현재 선택 주문
const	MARKER_TYPE_ORD_RECOMMAND		= "RECOMMAND_ORD";		// 추천주문

//Map Show Style
const	MAP_SHOW_ALL_MATCH				= "SHOW_ALL_MATCH";		// 모든 매칭정보 출력
const	MAP_SHOW_RECOMMAND				= "SHOW_RECOMMAND";		// 특정 주문이 포함된 복화목록 출력 

/*
//주문 STATUS별 출력 마커 종류 정의
const	MARKER_TYPE_MAP		= new Map([
	        					            [MARKER_TYPE_ORD_NO_MATCH		,{color : "white"		,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-white.png"		}]	// 미매칭
	         					           ,[MARKER_TYPE_ORD_MATCH_1ST		,{color : "red"			,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-red.png"			}]	// 매칭 1배차 상차지
	         					           ,[MARKER_TYPE_ORD_MATCH_1ST_DN	,{color : "orange"		,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-orange.png"		}]	// 매칭 1배차 하차지
	         					           ,[MARKER_TYPE_ORD_MATCH_2ND		,{color : "green"		,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-green.png"		}]	// 매칭 2배차 상차지
	         					           ,[MARKER_TYPE_ORD_MATCH_2ND_DN	,{color : "lightGreen"	,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-lightGreen.png"	}]	// 매칭 2배차 하차지
	        					           ,[MARKER_TYPE_CURR_ORD			,{color : "green"		,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/goods.png"			}]	// 현재 선택 주문
	         					           ,[MARKER_TYPE_ORD_RECOMMAND		,{color : "green"		,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/dot-blue.png"		}]	// 추천주문
         					         ]);
*/
//Marker Info Window
const	DIV_MATCH_INFO			=
	 '<div id="popupCmm" style="display:block;">'
	+' <div class="pop_cmm">'
	+'  <div class="inner">'
	+'   <button type="button" class="btn_move" onclick="onOrderSelected(\'##SHIPMENT_ID##\')"><span>'+lang('0220', '복화추천목록')+'</span></button>'
	+'   <span class="stit">[##SHIPMENT_ID## / ##STATUS_NM##] ##TRIP_SEQ##배차</span>'
	+'   <ul class="stxt">'
	+'    <li>▶ ##SHPR_NM## / ##VHCL##</li>'
	+'    <li>▶ ##DEP_SI_GU## (##DEP_REQ_TIME##) → ##ARR_SI_GU## (##ARR_REQ_TIME##)</li>'
	+'   </ul>'
	+'  </div>'
	+' </div>'
	+'</div>'
;
const	DIV_NO_MATCH_INFO			=
	 '<div id="popupCmm" style="display:block;">'
	+' <div class="pop_cmm">'
	+'  <div class="inner">'
	+'   <button type="button" class="btn_move" onclick="onOrderSelected(\'##SHIPMENT_ID##\')"><span>'+lang('0220', '복화추천목록')+'</span></button>'
	+'   <span class="stit">[##SHIPMENT_ID## / ##STATUS_NM##]</span>'
	+'   <ul class="stxt">'
	+'    <li>▶ ##SHPR_NM## / ##VHCL##</li>'
	+'    <li>▶ ##DEP_SI_GU## (##DEP_REQ_TIME##) → ##ARR_SI_GU## (##ARR_REQ_TIME##)</li>'
	+'   </ul>'
	+'  </div>'
	+' </div>'
	+'</div>'
;

//Home button
const	DIV_HOME				= "<div zIndex='255'><img src='"+CONTEXT_BASE_URL+"/web/jsp/visibility/img/homeback.PNG' style='cursor:pointer'/></div>";

// 매칭목록
const MATCH_INFO_HTML_BASE	=
 '<tr onclick="onTripClicked(\'##TRIP_ID##\')" ondblclick="onTripSelected(\'##TRIP_ID##\')" style="cursor:pointer">'
+'	<td rowspan=2 class="title">##NO##</td>'
+'	<td colspan=3 class="title">##STATUS_NM## ##VHCL_NO##</td>'
+'</tr>'
+'<tr>'
+'	<td style="cursor:pointer">'
+'		<div class="path_div" style="height:70px" onclick="onOrderClicked(\'##SHIPMENT_ID_1##\')" ondblclick="onOrderSelected(\'##SHIPMENT_ID_1##\')">'
+'			<div class="ord">[##SHIPMENT_ID_1## / 1'+lang('0052', '배차')+'] ##SHPR_NM_1## / ##VHCL_1##</div>'
+'			<div class="top">'
+'				<div class="sub1">##DEP_SI_GU_1##<br>(##DEP_REQ_TIME_1##)</div>'
+'				<div class="arrow">→</div>'
+'				<div class="sub2">##ARR_SI_GU_1##<br>(##ARR_REQ_TIME_1##)</div>'
+'			</div>'
+'		</div>'
+'	</td>'
+'	<td style="text-align:center; vertical-align:middle;">▶</td>'
+'	<td style="cursor:pointer">'
+'		<div class="path_div" style="height:70px" onclick="onOrderClicked(\'##SHIPMENT_ID_2##\')" ondblclick="onOrderSelected(\'##SHIPMENT_ID_2##\')">'
+'			<div class="ord">[##SHIPMENT_ID_2## / 2'+lang('0052', '배차')+'] ##SHPR_NM_2## / ##VHCL_2##</div>'
+'			<div class="top">'
+'				<div class="sub2">##DEP_SI_GU_2##<br>(##DEP_REQ_TIME_2##)</div>'
+'				<div class="arrow">→</div>'
+'				<div class="sub2">##ARR_SI_GU_2##<br>(##ARR_REQ_TIME_2##)</div>'
+'			</div>'
+'		</div>'
+'	</td>'
+'</tr>'
;


// 매칭대상목록
const ORD_INFO_HTML_BASE	=
 '<tr class="title"  onclick="onOrderClicked(\'##SHIPMENT_ID##\')" ondblclick="onOrderSelected(\'##SHIPMENT_ID##\')">'
+'	<td rowspan=2>##NO##</td>'
+'	<td>##EXE_CORP_NM##</td>'
+'	<td>##SHPR_NM##</td>'
+'	<td>##VHCL##</td>'
+'	<td>##STATUS_NM##</td>'
+'</tr>'
+'<tr>'
+'	<td colspan=4>'
+'		<div class="path_div" style="height:40px">'
+'			<div class="top">'
+'				<div class="sub1">##DEP_SI_GU## (##DEP_REQ_TIME##)</div>'
+'				<div class="arrow">→</div>'
+'				<div class="sub2">##ARR_SI_GU## (##ARR_REQ_TIME##)</div>'
+'			</div>'
+'		</div>'
+'	</td>'
+'</tr>'
;


/////////////////////////////////////////////////////////////////////////////
//Global variable definition
/////////////////////////////////////////////////////////////////////////////

// 매칭정보 객체
var	ORD				= null;

//구글지도 작업용 객체
var	GMAP			= null;

// 현재 화면 조회 유형
var	CURR_SHOW_STYLE			= MAP_SHOW_ALL_MATCH;
var	CURR_TAB_IDX			= 0;	// 탭페이지 인덱스. 0: 매칭완료 주문, 1:매칭대상 주문, 2:추천목록
var	CURR_SHIPMENT_INFO		= null;	// 현재 선택된 SHIPMENT 데이터
var	CURR_TRIP_INFO			= null;	// 현재 선택된 TRIP 데이터

// 매칭결과 출력
var	TRIP_DRAW_STEP			= 100;
var	TRIP_DRAW_SPEED			= 5;


// 목록 페이징
var	LAST_ITEM				= null;		// 현재 출력된 거점 ID
var	CURR_LIST				= [];		// 목록조회 결과
var	CURR_PAGE				= 1;
var	PAGE_SIZE				= [5, 7, 5];	// 매칭완료, 미매칭, 추천목록

// 데이터 갱신 주기 (ms)
var	DATA_REFRESH_TIMING		= 60000;
var	PAGE_FLIPPER_TIMING		= 1000;
var	PAGE_REFRESH_TIMING		= (PAGE_SIZE)*PAGE_FLIPPER_TIMING+3000;
var	PAGING_TIMER			= null;		// 페이징을 위한 타이머 변수 (setInterval)

// 모니터링 상태
var	LAST_EVENT_TIME			= 0;		// 최종 입력이 있었던 시간
var	IDLE_CHECK_TIMER		= null;		// 입력이 있었는지 체크하는 타이머 객체
var	IDLE_CHECK_INTERVAL		= 1000;		// 입력 체크 주기 (ms)
var	IDLE_COUNTER			= 0;		// 화면 입력이 없을 경우 카운트가 올라감
var	MON_START_DURATION		= 30000;	// 모니터링 모드가 시작되는 IDLE 시간 간격
var	MON_CHANGE_INTERVAL		= 10;		// 모니터링 전환 인터벌 카운트
var	MON_IDX					= 0;		// 모니터링 중인 데이터의 인덱스


