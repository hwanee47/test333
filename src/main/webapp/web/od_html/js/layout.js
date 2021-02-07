//건설자제
var data1 = new Array();
//원주 wonju part01
data1.push(new Array("3","1"));
//대전 daejeon part02
data1.push(new Array("1","2"));
// 광주 gwangju part03
data1.push(new Array("2","1"));
//부산 pusan part04
data1.push(new Array("1","3"));


//농수산물
var data2 = new Array();
//원주 wonju part01
data2.push(new Array("3","1"));
//대전 daejeon part02
data2.push(new Array("2","1"));
// 광주 gwangju part03
data2.push(new Array("3","1"));
//부산 pusan part04
data2.push(new Array("2","3"));


//공산품
var data3 = new Array();
//원주 wonju part01
data3.push(new Array("3","1"));
//대전 daejeon part02
data3.push(new Array("1","1"));
// 광주 gwangju part03
data3.push(new Array("1","3"));
//부산 pusan part04
data3.push(new Array("2","3"));


//대표품목
var data4 = new Array();
//원주 wonju part01
data4.push(new Array("1","2"));
//대전 daejeon part02
data4.push(new Array("1","3"));
// 광주 gwangju part03
data4.push(new Array("1","2"));
//부산 pusan part04
data4.push(new Array("2","3"));


$(document).ready(function(){

	$(".map_layer01 .radiock").live('click', function(e){
//		e.preventDefault();
		var idx= $(".map_layer01 .radiock").index($(this));
		var is_data ;
		if(idx == 0 )
			is_data = data1;
		if(idx == 1 )
			is_data = data2;
		if(idx == 2 )
			is_data = data3;
		if(idx == 3 )
			is_data = data4;

		$(".map_layer .arrow").hide();
		$(".map_layer .arrow").removeClass("step0").removeClass("step1").removeClass("step2").removeClass("step3");
		$(".map_layer .arrow").removeClass("m01").removeClass("m02").removeClass("m03").removeClass("m04");

		for(var i = 0 ; i < 4 ; i++)
		{
			var dis = i+1;
			var is_dis1 = is_data[i][0];
			var is_dis2 = is_data[i][1];
			$(".part0"+dis+" .up").addClass("step"+is_data[i][0]).addClass("m0"+(idx+1));
			$(".part0"+dis+" .down").addClass("step"+is_data[i][1]).addClass("m0"+(idx+1));

			display_set(i,dis);
 


		}
		//$('html, body').stop().animate({scrollTop: scroll_h+"px"}, 500 ,function(){
		//}).dequeue();
	})

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
} 

if(mm<10) {
    mm='0'+mm
} 

var s_today = yyyy+'년 '+mm+'월 ' +dd+'일';
$(".info_box_r .date").html(s_today);
var s_time  = (today.getHours() >= 12 ? 'PM' : 'AM') + " " + ("00" + (today.getHours()%12)).slice(-2) + ":" + ("00" + today.getMinutes()).slice(-2);
$(".info_box_r .time").html(s_time);

setTimeout(function(){ autoClick(); }, 500);

});

var clickTarget = 1;
var selectArea = 1;

var area1 = [{"Month":"1월","aaa":10,"bbb":30,"ccc":20,"ddd":20},
   {"Month":"2월","aaa":25,"bbb":38,"ccc":20,"ddd":25},
    {"Month":"3월","aaa":10,"bbb":49,"ccc":25,"ddd":35},
    {"Month":"4월","aaa":25,"bbb":60,"ccc":42,"ddd":16},
    {"Month":"5월","aaa":10,"bbb":65,"ccc":45,"ddd":36},
    {"Month":"6월","aaa":25,"bbb":60,"ccc":60,"ddd":63},
    {"Month":"7월","aaa":10,"bbb":47,"ccc":37,"ddd":36},
    {"Month":"8월","aaa":30,"bbb":40,"ccc":25,"ddd":39},
    {"Month":"9월","aaa":10,"bbb":47,"ccc":20,"ddd":74},
    {"Month":"10월","aaa":30,"bbb":55,"ccc":25,"ddd":52},
    {"Month":"11월","aaa":10,"bbb":47,"ccc":20,"ddd":28},
    {"Month":"12월","aaa":10,"bbb":37,"ccc":20,"ddd":53}];

var area5 = [{"Month":"1월","aaa":60,"bbb":30,"ccc":20,"ddd":40},
   {"Month":"2월","aaa":55,"bbb":38,"ccc":30,"ddd":30},
    {"Month":"3월","aaa":23,"bbb":44,"ccc":26,"ddd":45},
    {"Month":"4월","aaa":27,"bbb":20,"ccc":22,"ddd":32},
    {"Month":"5월","aaa":40,"bbb":68,"ccc":85,"ddd":65},
    {"Month":"6월","aaa":75,"bbb":50,"ccc":63,"ddd":34},
    {"Month":"7월","aaa":14,"bbb":27,"ccc":57,"ddd":87},
    {"Month":"8월","aaa":70,"bbb":43,"ccc":27,"ddd":23},
    {"Month":"9월","aaa":40,"bbb":87,"ccc":30,"ddd":37},
    {"Month":"10월","aaa":36,"bbb":52,"ccc":29,"ddd":47},
    {"Month":"11월","aaa":30,"bbb":43,"ccc":30,"ddd":36},
    {"Month":"12월","aaa":19,"bbb":65,"ccc":26,"ddd":48}];

function autoClick() {
	if (clickTarget > 4) {
		clickTarget = 1;
		$("#" + "AREA_" + selectArea).removeClass('select');
		$("#" + "AREA_" + selectArea + "_DATA").removeClass('viewDisplay');
		$("#" + "AREA_" + selectArea + "_DATA").addClass('noneDisplay');
		if (selectArea == 5) {
			selectArea = 1;
		} else {
			selectArea += 4;
		}
		$("#" + "AREA_" + selectArea).addClass('select');
		$("#" + "AREA_" + selectArea + "_DATA").removeClass('noneDisplay');
		$("#" + "AREA_" + selectArea + "_DATA").addClass('viewDisplay');

		if (selectArea == 1) {
			document.getElementById("chart1").setData(area1);
		} else {
			document.getElementById("chart1").setData(area5);
		}

	}
	$("#" + "rdo" + clickTarget).trigger('click');
	clickTarget += 1;
	setTimeout(function(){ autoClick(); }, 5000);

}

function display_set(time,dis)
{
	setTimeout(function(){
		if(!$(".part0"+dis+" .arrow").eq(0).hasClass("step0"))
			$(".part0"+dis+" .arrow").eq(0).fadeIn();
		setTimeout(function(){
			if(!$(".part0"+dis+" .arrow").eq(1).hasClass("step0"))
				$(".part0"+dis+" .arrow").eq(1).fadeIn();
		},200)
	},time*1000)
}
$(window).load(function(){


})
$(window).scroll(function(){
 
})

// -----------------------차트 설정 시작-----------------------
 
// rMate 차트 생성 준비가 완료된 상태 시 호출할 함수를 지정합니다.
var chartVars = "rMateOnLoadCallFunction=chartReadyHandler";
 
// rMateChart 를 생성합니다.
// 파라메터 (순서대로) 
//  1. 차트의 id ( 임의로 지정하십시오. ) 
//  2. 차트가 위치할 div 의 id (즉, 차트의 부모 div 의 id 입니다.)
//  3. 차트 생성 시 필요한 환경 변수들의 묶음인 chartVars
//  4. 차트의 가로 사이즈 (생략 가능, 생략 시 100%)
//  5. 차트의 세로 사이즈 (생략 가능, 생략 시 100%)
rMateChartH5.create("chart1", "chartHolder", chartVars, "100%", "100%"); 
 
// 차트의 속성인 rMateOnLoadCallFunction 으로 설정된 함수.
// rMate 차트 준비가 완료된 경우 이 함수가 호출됩니다.
// 이 함수를 통해 차트에 레이아웃과 데이터를 삽입합니다.
// 파라메터 : id - rMateChartH5.create() 사용 시 사용자가 지정한 id 입니다.
function chartReadyHandler(id) {
 document.getElementById(id).setLayout(layoutStr);
   document.getElementById(id).setData(chartData);
}
 
var layoutStr = '<rMateChart borderStyle="none">'
              +'<Options>'
                  +'<Caption text=""/>'
                   +'<SubCaption text="(Ton)" textAlign="right" />'
                  +'<Legend defaultMouseOverAction="true" useVisibleCheck="true" backgorundColor="#232323"/>'
                +'</Options>'
             +'<Line2DChart showDataTips="true" paddingTop="0">'
                   +'<horizontalAxis>'
                       +'<CategoryAxis categoryField="Month" padding="1"/> '
                 +'</horizontalAxis>'
                  +'<verticalAxis>'
                     +'<LinearAxis maximum="100" interval="10"/>'
                  +'</verticalAxis>'
                    +'<series>'
                       +'<Line2DSeries labelPosition="up" yField="aaa" form="curve" displayName="폐비닐" itemRenderer="CircleItemRenderer" showValueLabels="[11]">'
                          + '<lineStroke><Stroke color="#77cf00" weight="2" /></lineStroke>'
                          +'<showDataEffect>'
                               +'<SeriesInterpolate duration="1000" elementOffset="60" /> '
                          +'</showDataEffect>'
                      +'</Line2DSeries>'
                       +'<Line2DSeries labelPosition="up" yField="bbb" form="curve" displayName="마늘" itemRenderer="CircleItemRenderer" showValueLabels="[11]">'
                       + '<lineStroke><Stroke color="#007fd6" weight="2" /></lineStroke>'
                          +'<showDataEffect>'
                               +'<SeriesInterpolate duration="1000"/> '
                          +'</showDataEffect>'
                      +'</Line2DSeries>'
                       +'<Line2DSeries labelPosition="up" yField="ccc" form="curve" displayName="시험지" itemRenderer="CircleItemRenderer" showValueLabels="[11]">'
                       + '<lineStroke><Stroke color="#862ad8" weight="2" /></lineStroke>'
                          +'<showDataEffect>'
                               +'<SeriesInterpolate duration="1000"/> '
                          +'</showDataEffect>'
                      +'</Line2DSeries>'
                      +'<Line2DSeries labelPosition="up" yField="ddd" form="curve" displayName="폐슬러지" itemRenderer="CircleItemRenderer" showValueLabels="[11]">'
                      + '<lineStroke><Stroke color="#fb9400" weight="2" /></lineStroke>'
                          +'<showDataEffect>'
                               +'<SeriesInterpolate duration="1000"/> '
                          +'</showDataEffect>'
                      +'</Line2DSeries>'
                    +'</series>'
              +'</Line2DChart>'
         +'</rMateChart>';
 
// 차트 데이터
var chartData = [{"Month":"1월","aaa":10,"bbb":30,"ccc":20,"ddd":20},
   {"Month":"2월","aaa":25,"bbb":38,"ccc":20,"ddd":25},
    {"Month":"3월","aaa":10,"bbb":49,"ccc":25,"ddd":35},
    {"Month":"4월","aaa":25,"bbb":60,"ccc":42,"ddd":16},
    {"Month":"5월","aaa":10,"bbb":65,"ccc":45,"ddd":36},
    {"Month":"6월","aaa":25,"bbb":60,"ccc":60,"ddd":63},
    {"Month":"7월","aaa":10,"bbb":47,"ccc":37,"ddd":36},
    {"Month":"8월","aaa":30,"bbb":40,"ccc":25,"ddd":39},
    {"Month":"9월","aaa":10,"bbb":47,"ccc":20,"ddd":74},
    {"Month":"10월","aaa":30,"bbb":55,"ccc":25,"ddd":52},
    {"Month":"11월","aaa":10,"bbb":47,"ccc":20,"ddd":28},
    {"Month":"12월","aaa":10,"bbb":37,"ccc":20,"ddd":53}];
 
/**
 * rMateChartH5 3.0이후 버전에서 제공하고 있는 테마기능을 사용하시려면 아래 내용을 설정하여 주십시오.
 * 테마 기능을 사용하지 않으시려면 아래 내용은 삭제 혹은 주석처리 하셔도 됩니다.
 *
 * -- rMateChartH5.themes에 등록되어있는 테마 목록 --
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * -------------------------------------------------
 *
 * rMateChartH5.themes 변수는 theme.js에서 정의하고 있습니다.
 */
rMateChartH5.registerTheme(rMateChartH5.themes);
 
/**
 * 샘플 내의 테마 버튼 클릭 시 호출되는 함수입니다.
 * 접근하는 차트 객체의 테마를 변경합니다.
 * 파라메터로 넘어오는 값
 * - simple
 * - cyber
 * - modern
 * - lovely
 * - pastel
 * - default
 *
 * default : 테마를 적용하기 전 기본 형태를 출력합니다.
 */
function rMateChartH5ChangeTheme(theme){
   document.getElementById("chart1").setTheme(theme);
}
 
// -----------------------차트 설정 끝 -----------------------