var NODE_TYPE = "";

var circles,
	searchCircle;

var locColor = d3.scale.linear().range(["#ff0000", "#0000ff"]).domain([0,1]);
var locText = ["상차지", "하차지"];

var volStep = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var volText = ["1KG", "10KG", "100KG", "1ton", "10ton", "100ton", "1Kton", "10Kton", "100Kton", "1Mton"];

//변수 초기화
var width = 600
  , height = 700
  , initialScale = 5620
  , initialX = -12220
  , initialY = 4120
  , centered
  , labels;


//작업공간 초기화 (SVG 영역 생성)
var svg = d3.select("#contianer")
			.append("svg")
			.attr("width", width)
			.attr("height", height);

// 축척 지정
var projection = d3.geo.mercator()	// projection - 투영법, 메르카토르 투영법 사용
					   .scale(initialScale)
					   .translate([initialX, initialY]);

// 패스 작성
var path = d3.geo.path()
				 .projection(projection);


// 파일 읽기
d3.json(CONTEXT_PATH + "/web/jsp/oriDest/data/geo_json_korea.json", function(json) {
	map.selectAll("path")
	   .data(json.features)
	   .enter().append("path")
	   .attr("d", path)
	   .attr("id", function(d) { return 'path-'+d.id; });
    
	var legendLoc = d3.select("#contianer")
					  .append("svg")
					  .attr("class", "legend_loc")
					  .attr("width", 100)
					  .attr("height", 45)
					  .selectAll("g")
					  .data(locColor.domain().slice())
					  .enter()
					  .append("g")
					  .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

	legendLoc.append("circle")
			 .attr("cx", 11)
			 .attr("cy", 11)
			 .attr("r", 7)
			 .style("fill", locColor);
		
	legendLoc.append("text")
			 .data(locText)
			 .attr("x", 24)
			 .attr("y", 9)
			 .attr("dy", ".35em")
			 .text(function(d) { return d; });
	
//	var legendVol = d3.select("#contianer")
//					  .append("svg")
//					  .attr("class", "legend_vol")
//					  .attr("width", 100)
//					  .attr("height", 315)
//					  .selectAll("g")
//					  .data(volStep)
//					  .enter()
//					  .append("g");
//	
//	legendVol.append("circle")
//			 .attr("cx", 20)
//			 .attr("cy", fnFindCGap)
//			 .attr("r", function(d) { return d * 2; });
//	
//	legendVol.append("text")
//			 .data(volText)
//			 .attr("x", 35)
//			 .attr("y", fnFindTGap)
//			 .attr("dy", ".35em")
//			 .text(function(d) { return d; });
});

var zoom = d3.behavior.zoom()
	.translate(projection.translate())
	.scale(projection.scale())
	.scaleExtent([height, 800 * height])
	.on("zoom", fnZoom);


var div = d3.select("#contianer").append("div")
	.attr("class", "tooltip")
	.attr("opacity", 0);
	
var map = svg.append("g").attr("id", "map").call(zoom);
	points = svg.append("g").attr("id", "data").call(zoom);
	lines = svg.append("g").attr("id", "line").call(zoom);

var beforeCGap = 0;
function fnFindCGap(d, i) {
	var gap = 0;
	var diameter = d * 4;
	if (diameter < 20) {
		if (i == 0) {
			gap = 10;
		} else {
			gap = 20;
		}
	} else {
		gap = diameter + 5;
	}
	gap += beforeCGap;
	beforeCGap = gap;
	return gap;
}

var beforeTGap = 0;
function fnFindTGap(d, i) {
	var gap = 0;
	var diameter = (i + 1) * 4;
	if (diameter < 20) {
		if (i == 0) {
			gap = 10;
		} else {
			gap = 20;
		}
	} else {
		gap = diameter + 5;
	}
	gap += beforeTGap;
	beforeTGap = gap;
	return gap;
}



function fnCheckLength(strValue) {
	var length = 0;
	for (var i = 0; i < strValue.length; i++) {
	    if (escape(strValue.charAt(i)).length > 4) {
	        length += 2;
	    } else {
	        length ++;
	    }
	}
	return length;
}



function fnZoom() {
	return;
	projection.translate(d3.event.translate).scale(d3.event.scale);
	map.selectAll("path").attr("d", path);

	points.selectAll("circle")
	.attr("cx", function(d) { return projection([d.LON, d.LAT])[0]; })
	.attr("cy", function(d) { return projection([d.LON, d.LAT])[1]; })
	.attr("r", function(d) { return 3 * parseInt(d.VOL_STEP); });
	
    circles = points.selectAll("circle").sort(function(a, b) {
      return a.IDX - b.IDX;
    });
    lines.selectAll("line").remove();
    circles.each(fnDrawLine);
}


/****************************************************************** 화면 초기화 ******************************************************************/
var MAP_DATE_JSON = {"RESULT" : "FAIL", "LOC_LIST" : []};

/**
 * onLoad Event
 */
$(window).load(function(e) {
	// 기준정보 조회
	this.setSelectList();
});

/**
 * Event init 
 * 즉시 실행 함수
 */
$(function() {
	// set Frame size
	var a = $("#frame_top_bar").width();
	var b = $("#frame_con_left").width();
	$("#frame_con_right").width(a-b-20);
	
	// 달력설정
	$("#txt_fromDate, #txt_toDate").datepicker({
		dateFormat: 'yy-mm-dd',
		prevText: '이전 달',
		nextText: '다음 달',
		monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		showMonthAfterYear: true,
		changeMonth: true,
		changeYear: true,
		yearSuffix: '년'
	});
	
	// set date(toDay)
	$("#txt_fromDate, #txt_toDate").datepicker('setDate', new Date);
	
	// 조회버튼 onClick Event
	$("#btn_search").click(function(e) {
		// OD현황 조회
		fnSearch();
	});
	
	
	// 상차일자 img click
	$("#img_fromDate").click(function(e) {
		$("#txt_fromDate").focus();
	});
	// 상차일자 img click
	$("#img_toDate").click(function(e) {
		$("#txt_toDate").focus();
	});
	
	$("select[name='sel_nodeListGroup']").change(function(e) 
	{
		var dataType = $(this).data("type");
		var depNodeId = $("#sel_depNodeNmList").val();
		var arrNodeId = $("#sel_arrNodeNmList").val();
		
		// 전체
		if(utilIsNull($(this).val())) {
			$(this).siblings("[name=inp_range]").val("0");
		}
		//
		if(utilIsNull(depNodeId) && utilIsNull(arrNodeId)) {
			//
			var $comp = (dataType == "DEP") ? $("#sel_arrNodeNmList") : $("#sel_depNodeNmList");
			$("option", $comp).not("[value='']").eq(0).attr('selected', 'selected');
		}
		
		// 상/하차지 지역선택
		if(!utilIsNull(depNodeId) && !utilIsNull(arrNodeId)) {
			NODE_TYPE = "C";
		}
		// 상차지 만 지역선택
		else if(!utilIsNull(depNodeId) && utilIsNull(arrNodeId)) {
			NODE_TYPE = "A";
		}
		// 하차지 만 지역선택
		else if(utilIsNull(depNodeId) && !utilIsNull(arrNodeId)) {
			NODE_TYPE = "B";
		}
	});
	
	// 링크 집계내역 Row click event
	$(document).on("click", "#grid_main_tbody tr", function() {	
		// progressBar 실행
		conProgressBar(true);
		
		callService({
			url      : "vis/getVisibilityInfo.do",
			svcId    : "getOriDestStatusList",
			param    : {
				DEP_NODE_ID 	: $(this).children("td[name='depNodeId']").attr("value")	// 상차지노드
				, DEP_RANGE 	: $("#txt_depRange").val()									// 상차지 조회범위
				, ARR_NODE_ID 	: $(this).children("td[name='arrNodeId']").attr("value")	// 히차지노드
				, ARR_RANGE 	: $("#txt_arrRange").val()									// 히차지 조회범위
				, FROM_DATE 	: $("#txt_fromDate").val().split("-").join("")				// 상차일자(From)
				, TO_DATE 		: $("#txt_toDate").val().split("-").join("")				// 상차일자(To)
				, VHCL_KND_CD 	: $("#sel_vhclKndList").val()								// 차종
				, VHCL_TON_CD 	: $("#sel_vhclTonList").val()								// 톤급
				, CTGRY_CD 		: $("#sel_ctgryList").val()									// 물자그룹
				, ITEM_CD 		: $("#sel_itemCdList").val()								// 물자상세
				, SRC_TYPE		: "SUB"
				, NODE_TYPE		: NODE_TYPE
			},
			callback : function(jsonObj) {
				// 링크 상세내역 Grid Data Set 
				var subGrid = jsonObj["oriDestSubGrid"];
				
				// 일크 상세내역 Grid Draw
				$("#grid_sub_tbody tr").remove();
				$("#grid_sub_tbody").append(subGrid);
				
				// 데이터 상세내역 Grid 초기화
				$("#grid_detail_tbody tr").remove();
				
				// progressBar 중지
				conProgressBar(false);
			},
			error : "serviceErrorCallback"
		});		
	});
	
	// 링크 상세내역 click event
	$(document).on("click", "#grid_sub_tbody tr", function() {
		// progressBar 실행
		conProgressBar(true);
		
		callService({
			url      : "vis/getVisibilityInfo.do",
			svcId    : "getOriDestStatusList",
			param    : {
				DEP_NODE_ID 	: $(this).children("td[name='depNodeId']").attr("value")	// 상차지노드
				, DEP_RANGE 	: $("#txt_depRange").val()									// 상차지 조회범위
				, ARR_NODE_ID 	: $(this).children("td[name='arrNodeId']").attr("value")	// 히차지노드
				, ARR_RANGE 	: $("#txt_arrRange").val()									// 히차지 조회범위
				, FROM_DATE 	: $("#txt_fromDate").val().split("-").join("")				// 상차일자(From)
				, TO_DATE 		: $("#txt_toDate").val().split("-").join("")				// 상차일자(To)
				, VHCL_KND_CD 	: $(this).children("td[name='vhclKndId']").attr("value")	// 차종
				, VHCL_TON_CD 	: $("#sel_vhclTonList").val()								// 톤급
				, CTGRY_CD 		: $("#sel_ctgryList").val()									// 물자그룹
				, ITEM_CD 		: $(this).children("td[name='itemId']").attr("value")		// 물자상세
				, SHPR_ID		: $(this).children("td[name='shprId']").attr("value")		// 화주ID
				, LSP_ID		: $(this).children("td[name='lspId']").attr("value")		// 파트너ID
				, SRC_TYPE		: "DETAIL"
				, NODE_TYPE		: NODE_TYPE
			},
			callback : function(jsonObj) {
				// 데이터 상세내역 Grid Data Set 
				var detailGrid = jsonObj["oriDestDetailGrid"];
				
				// 데이터 상세내역 Grid Draw
				$("#grid_detail_tbody tr").remove();
				$("#grid_detail_tbody").append(detailGrid);

				// progressBar 중지
				conProgressBar(false);
			},
			error : "serviceErrorCallback"
		});		
	});
});

/* 조회 */
function fnSearch() {
	// OD현황 데이터 조회
	getOriDestStatusInfo();
}

/* OD현황 데이터 조회 */
this.getOriDestStatusInfo = function() {	
	// progressBar 실행
	conProgressBar(true);
	
	// 주문 목록 조회
	callService({
		url      : "vis/getVisibilityInfo.do",
		svcId    : "getOriDestStatusList",
		param    : {
			DEP_NODE_ID 	: $("#sel_depNodeNmList").val()							// 상차지노드
			, DEP_RANGE 	: $("#txt_depRange").val()								// 상차지 조회범위
			, ARR_NODE_ID 	: $("#sel_arrNodeNmList").val()							// 히차지노드
			, ARR_RANGE 	: $("#txt_arrRange").val()								// 히차지 조회범위
			, FROM_DATE 	: $("#txt_fromDate").val().split("-").join("")			// 상차일자(From)
			, TO_DATE 		: $("#txt_toDate").val().split("-").join("")			// 상차일자(To)
			, VHCL_KND_CD 	: $("#sel_vhclKndList").val()							// 차종
			, VHCL_TON_CD 	: $("#sel_vhclTonList").val()							// 톤급
			, CTGRY_CD 		: $("#sel_ctgryList").val()								// 물자그룹
			, ITEM_CD 		: $("#sel_itemCdList").val()							// 물자상세
			, SRC_TYPE		: "MAIN"
			, NODE_TYPE		: NODE_TYPE
		},
		callback : function(jsonObj) {
			// OD현황 Map Data Set 
			var odList = jsonObj["oriDestList"];
			
			if(odList.length > 0) {
				// OD현황 Map Draw
				MAP_DATE_JSON["LOC_LIST"] = odList;
				fnDrawFrgtVol(MAP_DATE_JSON);
				
				// 링크 집계내역 Grid Draw
				drawGrid(jsonObj);
			}
			else {
				// SET 조회된 내역이 없습니다.
			}
			
			// progressBar 중지
			conProgressBar(false);
		},
		error : "serviceErrorCallback"
	});		
}

/****************************************************************** OD맵 DRQW ******************************************************************/
/** OD맵 DRQW **/
function fnDrawLine(d, i) {
	if (d.SEARCH_LOC_YN == "Y" && i == 0) {
		searchCircle = d3.select(this);
	} else {
		// line
		lines.append("line")
	    	 .attr("x1", searchCircle.attr("cx"))
	    	 .attr("y1", searchCircle.attr("cy"))
	    	 .attr("x2", d3.select(this).attr("cx"))
	    	 .attr("y2", d3.select(this).attr("cy"))
	    	 .style("stroke", "yellow");
	}
}

// point dbclick event
function onClick(d) {
	console.log(d);
}

function fnDrawFrgtVol(obj) {	
	$("#data circle").remove();
	$("#line line").remove();
	
	// points init
	points.selectAll("circle")
		  .data(obj.LOC_LIST)
		  .enter().append("circle")
		  .attr("class", function(d) { return d.LOC_TYPE; })
		  .attr("searchLoc", function(d) { return d.SEARCH_LOC_YN; })
		  .attr("cx", function(d) { return projection([d.LON, d.LAT])[0]; })
		  .attr("cy", function(d) { return projection([d.LON, d.LAT])[1]; })
		  .attr("r", function(d) { return 3 * parseInt(d.VOL_STEP); })
		  .on("mouseover", function(d) {
										div.transition()        
										   .duration(200)      
										   .style("opacity", .9)
										   .attr("width", (fnCheckLength(d.NAME) + 6) + "px");      
										div.text(d.NAME)
										   .style("left", (d3.event.pageX + 10) + "px")     
										   .style("top", (d3.event.pageY - 28) + "px");    
										})   
          .on("mouseout", function(d) {       
										div.transition()        
										   .duration(500)      
										   .style("opacity", 0);   
          								})
          .on("click", onClick);
    
    circles = points.selectAll("circle").sort(function(a, b) {
    	return a.IDX - b.IDX;
    });
    circles.each(fnDrawLine);
}
/****************************************************************** OD맵 DRQW ******************************************************************/
function setSelectList() {
	
	// progressBar 실행
	conProgressBar(true);
	
	callService({
		url      : "vis/getVisibilityInfo.do",
		svcId    : "getCommCodeInfo",
		param    : {},
		callback : function(obj) {	
			// 상차지 노드
			$("#sel_depNodeNmList").append(JSON.stringify(obj["nodeList"]));
			// 하차지 노드
			$("#sel_depNodeNmList option").clone().appendTo("#sel_arrNodeNmList");
			
			// 상차지 노드 전체제외 index0번 selected
			$("#sel_depNodeNmList option").not("[value='']").eq(0).attr('selected', 'selected');
			
			// 차종
			$("#sel_vhclKndList").append(JSON.stringify(obj["vhclKndList"]));
			
			// 톤급
			$("#sel_vhclTonList").append(JSON.stringify(obj["vhclTonList"]));
			
			// 물자그룹
			$("#sel_ctgryList").append(JSON.stringify(obj["ctgryCdList"]));
			
			// 물자상세
			$("#sel_itemCdList").append(JSON.stringify(obj["itemCdList"]));
			
			// progressBar 중지
			conProgressBar(false);
		},
		error : "serviceErrorCallback"
	});		
}

// 서비스호출 error callback
function serviceErrorCallback(e) {
	console.log("[error] : " + e);
	
	// progressBar 중지
	conProgressBar(false);
}

// (common) select list 생성
function drawSelectList(selectId, data, strCode, strName, firstFlag) 
{
	console.log("### selectId : " + data.length);
	
	if(data.length > 0 ) 
	{
		var option = "";
		for (var i=0 ; i<data.length ; i++) 
		{
			option += "<option value='" + data[i][strCode] + "'";
			if (firstFlag && i == 0) {
				option += " selected";
			}
			option += ">" + data[i][strName] + "</option>";
		}
		$("#"+selectId).append(option);
	}
}

function setExeCorpCombo(objExeCorp) {
	var option = "";
	for (var i = 0; i < objExeCorp.length; i ++) {
		option += "<option value='" + objExeCorp[i].EXE_CORP_ID + "'";
		if (i == 0) {
			option += " selected";
		}
		option += ">" + objExeCorp[i].EXE_CORP_NM + "</option>";
	}
	$("#EXE_CORP_ID").append(option);
	
	callNexa("USER_INFO", "", "parseCallback");
}

/* reSize */

function drawGrid(data) 
{	
	// subGird, detailGird
	$("#grid_sub_tbody tr").remove();
	$("#grid_detail_tbody tr").remove();
		
	// mainGird
	$("#grid_main_tbody tr").remove();
	$("#grid_main_tbody").append(data["oriDestMainGrid"]);
	
	
//	var subGrid 	= data["oriDestSubGrid"];
//	var detailGrid 	= data["oriDestDetailGrid"];
//
//	// subGird
//	$("#grid_sub_tbody tr").remove();
//	$("#grid_sub_tbody").append(subGrid);
//	
//	// detailGird
//	$("#grid_detail_tbody tr").remove();
//	$("#grid_detail_tbody").append(detailGrid);
}

/****************************************************************** Util Common Function******************************************************************/

function conProgressBar(flag) {
	if(flag) {
		$("#div_progressbar").show();
	}
	else {
		$("#div_progressbar").hide();
	}
}


/**
 * @class 값이 존재하는지 여부 체크 <br>
 * @param {String} sValue	
 * @return {Boolean} true/false
 * @example
 * var bNull = this.gfnIsNull("aaa");	// false
 */
function utilIsNull(sValue)
{
    if (new String(sValue).valueOf() == "undefined") return true;
    if (sValue == null) return true;
    
    var ChkStr = new String(sValue);

    if (ChkStr == null) return true;
    if (ChkStr.toString().length == 0 ) return true;
    return false;
};
/****************************************************************** Util Common Function******************************************************************/
