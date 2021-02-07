/** 팝업객체 */
var POPUP = null;
var INFO_WINDOW = null;

/** 구글지도 객체 */
var MAP;
var GEOCODER;
var INIT_X     = 127.879293;
var INIT_Y     = 36.652000;
var INIT_LEVEL = 8;
var MARKER_OBJ = {};
var LINE_OBJ   = {};
var G_FLAG     = "";
var BEFORE_ID  = "";
var MAX_ZOOM   = 3;

var MARKER_ID = ""; // 지도에 클릭한 마커만 남도록 클릭한 심볼의 ID 만 저장하는 변수 <2017.08.24 이승수>
var RESIZE_CAR_DATA = ""; // 지도의 레벨에 따라 차량을 다시 그리기위한 오브젝트 리스트 <2017.08.24 이승수>
var RESIZE_DEP_ARR_DATA = ""; // 지도의 레벨에 따라 출발지 도착지 마커를 다시 그리기위한 오브젝트 리스트 <2017.09.07 이승수>
var ICON_SIZE = "";           // 지도의 레벨에 따라 그리기 위한 아이콘 사이즈 정의 <2017.09.07 이승수>
var ZOOM_LISTENER_CNT = 0; // 줌 카운트 <2018.10.19> 운영도 검색 버튼 누를때마다 ZOOM_LISTENER_CNT 변수를 0으로 초기화 해줘야 함.
var ZOOM_RESIZE_YN = "";         // 줌 여부 <2018.10.19> 차량이 1개일 경우에는 사이즈 변경하지 않음(디버깅)

/** 컬러 변수 */
var COLOR_BLACK = "#000000";
var COLOR_RED = "#FF0000";
var COLOR_BLUE = "#0000FF";