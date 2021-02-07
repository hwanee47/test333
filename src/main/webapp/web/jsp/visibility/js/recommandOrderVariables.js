
/* Visibility Data */
"USE STRICT";


/////////////////////////////////////////////////////////////////////////////
// Constants Definition
/////////////////////////////////////////////////////////////////////////////

// 마커 종류
const	MARKER_TYPE_CURR_VHCL		= "CURR_VHCL";			// 현재 선택 차량
const	MARKER_TYPE_UNLOAD_LOC		= "CURR_UNLOAD_LOC";	// 현재 선택 차량의 하차지
const	MARKER_TYPE_RECOMM_ORD		= "RECOMMAND_ORD";		// 추천주문

// Map Show Style
const	MAP_SHOW_ONE_VHCL		= "SHOW_ONE_VHCL";

// 주문 마커 Info
const	DIV_ORD_INFO			= 
'<div id="popupCmm" style="display:block; width:400px;">'
+' <div class="pop_cmm">'
+'  <div class="inner">'
+'   <span class="stit">##SHPR_NM## (##EXE_CORP_NM##)</span>'
+'   <button type="button" class="btn_move" onclick="onOrderSelected(\'##TOL_NO##\')"><span>주문선택</span></button>'
+'   <ul class="stxt">'
+'    <li>▶ '+lang('0101', '차량정보')+' : ##VHCL##</li>'
+'    <li>▶ '+lang('0077', '상차지')+' : ##LOAD_LOC##</li>'
+'    <li>▶ '+lang('0078', '하차지')+' : ##UNLOAD_LOC## </li>'
+'   </ul>'
+'  </div>'
+' </div>'
+'</div>'
;
//차량 마커 Info
const	DIV_VHCL_INFO			= 
 '<div id="popupCmm" style="display:block;">'
+' <div class="pop_cmm">'
+'  <div class="inner">'
+'   <span class="stit">##VHCL_NO## (##STATUS##)</span>'
+'   <ul class="stxt">'
+'    <li>▶ ##VHCL_INFO##</li>'
+'    <li>▶ '+lang('0077', '상차지')+' : ##DEP_NODE_NM##</li>'
+'    <li>▶ '+lang('0078', '하차지')+' : ##ARR_NODE_NM##</li>'
+'   </ul>'
+'  </div>'
+' </div>'
+'</div>'
;

//Home button
const	DIV_HOME				= "<div zIndex='255'><img src='./img/homeback.PNG' style='cursor:pointer'/></div>";

// 주문목록 출력시 TR태그 Layout
const ORD_INFO_HTML_BASE	=
 '<tr onclick="onOrderClicked(\'##TOL_NO##\')" ondblclick="onOrderSelected(\'##TOL_NO##\')" style="cursor:pointer">'
+'	<td style="cursor:pointer" rowspan=2>##NO##</td>'
+'	<td>##SHPR_NM##</td>'
+'	<td>##DEP_REQ_TIME##</td>'
+'	<td>##ARR_REQ_TIME##</td>'
+'	<td>##VHCL##</td>'
+'</tr>'
+'<tr>'
+'	<td colspan=4 style="width:100%"><table style="width:100%"><tbody><th>'
+'		<td style="width:45%; text-align:left" class="sub">##DEP_SI_GU##</td>'
+'		<td class="sub">&nbsp;▶▶&nbsp;</td>'
+'		<td style="width:45%; text-align:left" class="sub">##ARR_SI_GU##</td>'
+'	</th></tbody></table></td>'
+'</tr>'
;

/////////////////////////////////////////////////////////////////////////////
//Global variable definition
/////////////////////////////////////////////////////////////////////////////


//주문정보 객체
var	ORD			= null;

//구글지도 작업용 객체
var	GMAP			= null;

//알메이트 차트 작업용 객체
var	CHART			= null;


// 현재 화면 조회 유형
var	CURR_SHOW_STYLE			= MAP_SHOW_ONE_VHCL;
var	CURR_CNTRL_NO			= null;
var	NEAR_ORD_INFO			= null;		// 조회결과 저장

// 목록 페이징
var	LAST_ITEM				= null;		// 현재 출력된 거점 ID
var	CURR_LIST				= [];		// 목록조회 결과
var	CURR_PAGE				= 1;
var	PAGE_SIZE				= 5;

// 데이터 갱신 주기 (ms)
var	DATA_REFRESH_TIMING		= 60000;
var	PAGE_FLIPPER_TIMING		= 300;
var	PAGE_REFRESH_TIMING		= (PAGE_SIZE)*PAGE_FLIPPER_TIMING+3000;
var	PAGING_TIMER			= null;		// 페이징을 위한 타이머 변수 (setInterval)
