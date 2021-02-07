
/* Visibility Data */
"USE STRICT";


/////////////////////////////////////////////////////////////////////////////
// Constants Definition
/////////////////////////////////////////////////////////////////////////////

// 마커 종류
const	MARKER_TYPE_BASE			= "BASE";			// 거점
const	MARKER_TYPE_BASE_ALM		= "BASE_ALM";		// 거점 (지연차량 있는 경우)
const	MARKER_TYPE_VHCL			= "VHCL";			// 공차
const	MARKER_TYPE_VHCL_MOV_UP		= "VHCL_MOV_UP";	// 영차-상차지행
const	MARKER_TYPE_VHCL_MOV_DOWN	= "VHCL_MOV_DOWN";	// 영차-하차지행
const	MARKER_TYPE_VHCL_FIN		= "VHCL_FIN";		// 완료
const	MARKER_TYPE_VHCL_ALM		= "VHCL_ALM";		// 지연
//
const	MARKER_TYPE_CURR_VHCL		= "CURR_VHCL";		// 현재 선택된 차량
const	MARKER_TYPE_LOAD_LOC		= "LOAD_LOC";		// 상차지
const	MARKER_TYPE_UNLOAD_LOC		= "UNLOAD_LOC";		// 하차지


// 경로정보 타입 (VhclRouteInfo.java 참고)
const	VHCL_ROUTE_TYPE_BEFORE_LOADING	= "BEFORE_LOADING";		// 상차전
const	VHCL_ROUTE_TYPE_AFTER_LOADING	= "AFTER_LOADING";		// 상차후
const	VHCL_ROUTE_TYPE_AFTER_UNLOADING	= "AFTER_UNLOADING";	// 하차후
const	VHCL_ROUTE_TYPE_UNKNOWN			= "UNKNOWN";			// 모름


// 차량 STATUS별 출력 마커 종류 정의
const	VHCL_STATUS_TYPE_MAP	= new Map([
	         					            ["10"	,{markerType : MARKER_TYPE_VHCL				,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL.png"				}]	// 미배차
	         					           ,["20"	,{markerType : MARKER_TYPE_VHCL				,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL.png"				}]	// 미배차
	         					           ,["30"	,{markerType : MARKER_TYPE_VHCL_MOV_UP		,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL_MOV_UP.png"		}]	// 배차확정
	         					           ,["40"	,{markerType : MARKER_TYPE_VHCL_MOV_DOWN	,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL_MOV_DOWN.png"		}]	// 수송중
	         					           ,["50"	,{markerType : MARKER_TYPE_VHCL_MOV_DOWN	,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL_MOV_DOWN.png"		}]	// 하차지도착
	         					           ,["60"	,{markerType : MARKER_TYPE_VHCL_FIN			,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL_FIN.png"			}]	// 하차완료
	         					           ,["90"	,{markerType : MARKER_TYPE_VHCL_ALM			,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL_ALM.png"			}]	// 상차지연
	         					           ,["91"	,{markerType : MARKER_TYPE_VHCL_ALM			,listIcon : CONTEXT_BASE_URL+"/web/jsp/visibility/img/car-sel-VHCL_ALM.png"			}]	// 하차지연
         					         ]);

// Map Show Style
const	MAP_SHOW_ALL_BASE		= "SHOW_ALL_BASE";	// 전체거점 + 사고차량
const	MAP_SHOW_ONE_BASE		= "SHOW_ONE_BASE";	// 1거점 + 거점차량 전체
const	MAP_SHOW_ONE_VHCL		= "SHOW_ONE_VHCL";	// 1차량 (상/하차지+현재위치+경로)

/* 시도경계 데이터 */
const	FILE_GEOJSON_SIDO		= "data/SIDO_37.geojson";

//Marker Info Window
const	DIV_INFO			=
	 '<div id="popupCmm" style="display:block;">'
	+' <div class="pop_cmm">'
	+'  <div class="inner">'
	+'   <span class="stit">##TITLE##</span>'
	+'   <ul class="stxt">'
	+'    <li>▶ ##INFO_01##</li>'
	+'   </ul>'
	+'  </div>'
	+' </div>'
	+'</div>'
;
const	DIV_BASE_INFO			=
	 '<div id="popupCmm" style="display:block;">'
	+' <div class="pop_cmm">'
	+'  <div class="inner">'
	+'   <button type="button" class="btn_move" onclick="onBaseSelected(\'##BASE_CORP_ID##\')"><span>'+lang("0237", "상세보기")+'</span></button>'
	+'   <span class="stit">##TITLE##</span>'
	+'   <ul class="stxt">'
	+'    <li>▶ ##INFO_01##</li>'
	+'   </ul>'
	+'  </div>'
	+' </div>'
	+'</div>'
;
const	DIV_VHCL_INFO			= 
 '<div id="popupCmm" style="display:block;">'
+' <div class="pop_cmm">'
+'  <div class="inner">'
+'   <button type="button" class="btn_move" onclick="onVhclSelected(\'##VHCL_NO##\')"><span>'+lang("0238", "운행경로 보기")+'</span></button>'
+'   <span class="stit">##VHCL_NO## (##STATUS##)</span>'
+'   <ul class="stxt">'
+'    <li>▶ ##VHCL_INFO##</li>'
+'    <li>▶ ##VHCL_ADDR##</li>'
+'   </ul>'
+'  </div>'
+' </div>'
+'</div>'
;


//Home button
//const	DIV_HOME				= "<div zIndex='255' style='padding:5px; background-color:yellow; border:1px solid; text-align:center; font:14px bold'>HOME</div>";
const	DIV_HOME				= "<div zIndex='255'><img src='"+CONTEXT_BASE_URL+"/web/jsp/visibility/img/homeback.PNG' style='cursor:pointer'/></div>";


// 차량목록 출력시 TR태그 Layout
const VHCL_INFO_HTML_BASE	= 
'<tr id="##TR_ID##">'
+'    <td id="##TR_ID##_1"></td>'
+'    <td id="##TR_ID##_2"></td>'
+'    <td><div class="display"><div><input class="header dark L" id="##TR_ID##_3"/></div></div></td>'
+'    <td><div class="display"><div><input class="header dark L" id="##TR_ID##_4"/></div></div></td>'
+'    <td><div class="display"><div><input class="header dark L" id="##TR_ID##_5"/></div></div></td>'
+'</tr> '
;

//거점위치목록 List / Map (순서가 필요할 경우가 있을 수 있음)
const	BASE_LOC					= new Array(
			{id:"00001004", name:"서울지사", abbrNm:"서울", lat:37.599115, lng:126.785912, addr:"경기도 김포시 고촌읍 아라육로20"},
			{id:"00001005", name:"경기지사", abbrNm:"경기", lat:37.220206, lng:127.104943, addr:"경기도 용인시 기흥구 원고매로2번길29(고매동)"},
			{id:"00001006", name:"동해지사", abbrNm:"동해", lat:37.503689, lng:129.125874, addr:"강원도 동해시 용정로171(용정동)"},
			{id:"00001007", name:"강원지사", abbrNm:"강원", lat:37.343488, lng:127.882466, addr:"강원도 원주시 원문로898"},
			{id:"00001021", name:"인천지사", abbrNm:"인천", lat:37.460693, lng:126.629388, addr:"인천광역시 중구 서해대로353(항동7가)"},
			{id:"00001022", name:"평택지사", abbrNm:"평택", lat:36.959606, lng:126.848289, addr:"경기도 평택시 포승읍 평택항만길86"},
			{id:"00001023", name:"충남지사", abbrNm:"충남", lat:37.006922, lng:126.419248, addr:"충청남도 서산시 대산읍 대죽1로413"},
			{id:"00001037", name:"군산지사", abbrNm:"군산", lat:35.974692, lng:126.587309, addr:"전라북도 군산시 서해로194(소룡동)"},
			{id:"00001038", name:"전북지사", abbrNm:"전북", lat:35.854338, lng:127.087431, addr:"전라북도 전주시 덕진구 팔복로173(팔복동3가)"},
			{id:"00001039", name:"대전지사", abbrNm:"대전", lat:36.382769, lng:127.424751, addr:"대전광역시 대덕구 신탄진로1(읍내동)"},
			{id:"00001040", name:"충북지사", abbrNm:"충북", lat:36.655487, lng:127.471478, addr:"충청북도 청주시 흥덕구 사운로375(신봉동)"},
			{id:"00001054", name:"광양지사", abbrNm:"광양", lat:34.942864, lng:127.761819, addr:"전라남도 광양시 태인4길33"},
			{id:"00001055", name:"광주지사", abbrNm:"광주", lat:35.114179, lng:126.872617, addr:"광주광역시 남구 송암로114(송하동)"},
			{id:"00001056", name:"목포지사", abbrNm:"목포", lat:34.776843, lng:126.428427, addr:"전라남도 영암군 삼호읍 대불역로39"},
			{id:"00001057", name:"제주지사", abbrNm:"제주", lat:33.520214, lng:126.537048, addr:"제주특별자치도 제주시 임항로97(건입동)"},
			{id:"00001071", name:"포항지사", abbrNm:"포항", lat:35.997269, lng:129.36544 , addr:"경상북도 포항시 남구 섬안로59(괴동동)"},
			{id:"00001072", name:"울산지사", abbrNm:"울산", lat:35.506488, lng:129.385388, addr:"울산광역시 남구 장생포고래로292(매암동)"},
			{id:"00001073", name:"대구지사", abbrNm:"대구", lat:35.836537, lng:128.508043, addr:"대구광역시 달서구 성서공단로235(장동)"},
			{id:"00001087", name:"창원지사", abbrNm:"창원", lat:35.198385, lng:128.570729, addr:"경상남도 창원시 마산합포구 해안대로234(신포동1가)"},
			{id:"00001088", name:"부산지사", abbrNm:"부산", lat:35.100817, lng:129.037387, addr:"부산광역시 중구 대교로119 CJ대한통운빌딩7층(중앙동)"}
		);
//
const	BASE_LOC_MAP		= new Map(BASE_LOC.map(function(item, index, array) {
										return [item.id, item];
									}));



/////////////////////////////////////////////////////////////////////////////
//Global variable definition
/////////////////////////////////////////////////////////////////////////////


//차량정보 객체 (거점별 정보, 차량목록)
var	VHCL			= null;

//구글지도 작업용 객체
var	GMAP			= null;

//알메이트 차트 작업용 객체
var	CHART			= null;


// 현재 화면 조회 유형
var	CURR_SHOW_STYLE			= MAP_SHOW_ALL_BASE;
var	CURR_BASE_CORP_ID		= null;
var	CURR_VHCL_NO			= null;
var	CURR_VHCL_INFO			= null;

// 목록 페이징
var	LAST_ITEM				= null;		// 현재 출력된 거점 ID
var	CURR_LIST				= [];		// 목록조회 결과
var	CURR_PAGE				= 1;
var	PAGE_SIZE				= 7;

// 데이터 갱신 주기 (ms)
var	DATA_REFRESH_TIMING		= 60000;
var	PAGE_FLIPPER_TIMING		= 1000;
var	PAGE_REFRESH_TIMING		= (PAGE_SIZE)*PAGE_FLIPPER_TIMING+4000;
var	PAGING_TIMER			= null;		// 페이징을 위한 타이머 변수 (setInterval)
var	FLIPPER_TIMER			= [];

// 거점별 모니터링 상태
var	LAST_EVENT_TIME			= 0;		// 최종 입력이 있었던 시간
var	IDLE_CHECK_TIMER		= null;		// 입력이 있었는지 체크하는 타이머 객체
var	IDLE_CHECK_INTERVAL		= 1000;		// 입력 체크 주기 (ms)
var	IDLE_COUNTER			= 0;		// 화면 입력이 없을 경우 카운트가 올라감
var	MON_START_DURATION		= 30000;	// 모니터링 모드가 시작되는 IDLE 시간 간격
var	MON_CHANGE_INTERVAL		= 10;		// 모니터링 전환 인터벌 카운트
var	MON_IDX					= 0;		// 모니터링 중인 데이터의 인덱스

