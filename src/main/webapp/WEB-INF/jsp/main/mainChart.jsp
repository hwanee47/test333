<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=yes">
<style type="text/css">
	table tbody tr{
	 	text-align: left;
	 	line-height: 30px;
	}
	
	#chartInfo table{
		width: inherit;
	}
	
	#chartInfo{
		position: absolute;
		/* margin: 100px 40px 50px 500px; */
    	width: 200px;
/* 		margin: 378px 50px 50px 420px;
	    width: 160px; */
	    border: 1px solid #ddd;
	    background: white;
	    border-radius: 3px;
	    left: 77%;
    	top: 10%;
	}
	
	svg{
		/* overflow: hidden; */
	}
	
	html,body{
		/* overflow: hidden; */
	}
	
	
</style>
<title>mainchart</title>
</head>
<body>
<div id="container" class="container">
   <!-- <div id="radio" style="visibility: hidden;">
		<span class="title">지명표시</span>
    <input type="radio" id="radio1" name="radio" value="on" checked><label for="radio1">On</label>
    <input type="radio" id="radio2" name="radio" value="off"><label for="radio2">Off</label>
  </div> -->
  
  <div id="control" class="ui-widget-header ui-corner-all" style="top:140px;visibility: hidden">
	  <button id="zoomin">확대</button>
	  <button id="zoomout">축소</button>
	</div>

	<!-- 지역별 현황 정보 -->
	<div id="chartInfo">
		<table>
			<colgroup>
				<col width="75%">
				<col width="25%">
			</colgroup>
			<tbody>
				<tr>
					<th colspan="2" id="selRegion" style="font-size: 18px;color: #6092c8"> - </th>
				</tr>
				<tr>
					<th>입고예정수량</th>
					<td id="wareiExpctQty">0</td>
				</tr>
				<tr>
					<th>재고현황</th>
					<td id="stckQty">0</td>
				</tr>
				<tr>
					<th>배송예정현황</th>
					<td id="dlvyExpctQty">0</td>
				</tr>
				<tr>
					<th>미배송현황</th>
					<td id="noDlvyQty">0</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</body>
<link href="${pageContext.request.contextPath}/css/mainchart/jquery-ui.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/mainchart/style.css" rel="stylesheet">
<script src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery-1.11.3.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery-ui.min.js"></script>
<script src="${pageContext.request.contextPath}/js/mainchart/json2.js"></script>
<script src="${pageContext.request.contextPath}/js/mainchart/d3.js"></script>
<%-- <script src="${pageContext.request.contextPath}/js/mainchart/d3.v3.min.js"></script> --%>
<script type="text/javascript">
	
	var url = "${pageContext.request.contextPath}/js/mainchart/korea.json";
	
	var width = 400,		//svg width
	height = 600,			//svg height
	initialScale = 5500,	//scale
	initialX = -12110,		//x
	initialY = 4050,		//y
	centered,
	labels,
	selRegionNm,			//select region name
	selZnDv,
	center;			
	
	var size = {width: window.innerWidth*0.7 || document.body.clientWidth,
			  height: window.innerHeight-100 || document.body.clientHeight};
	
	var projection,path,zoom,svg,states;

	var classNm = '';
	$( document ).ready(function() {
		//width, height 초기화
		//width = (size.width < 400) ? 400 : size.height;
		//height = (size.height<671) ? 671 : size.height;
		
		
		//좌표, scale 초기화
		projection = d3.geo.mercator()
		.scale(initialScale)
		.translate([initialX, initialY]);
		//.scale(initialScale)
		//.translate([initialX, initialY]);
		
		//path
		path = d3.geo.path().projection(projection);
		
		/*zoom = d3.behavior.zoom()
		.translate(projection.translate())
		.scale(projection.scale())
		.scaleExtent([width * 800, 800 * height])
		.on("zoom", zoom);*/
		
		//zoom
		zoom = d3.behavior.zoom().translate([100,50]).scale(0.3);
		svg = d3.select("#container").append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr('id', 'map')
	           .append("svg:g")
	           .attr("transform","translate(100,50)scale(.83,.83)");
		states = svg.append("g")
		.attr("id", "states")
		.call(zoom);
		
		states.append("rect")
		    .attr("class", "background")
		    .attr("width", width)
		    .attr("height", height);
	

		d3.json(url, function(json) {
		  	states.selectAll("path")
		      	.data(json.features)
		    	.enter().append("path")
		      	.attr("d", path)
		      	.attr("id", function(d) {
		    	  	return 'path-'+d.id; })
		    	.attr('class','')
		      	.on("click", click);
		  
		  labels = states.selectAll("text")
		    .data(json.features)
		    .enter().append("text")
		      .attr("transform", labelsTransform)
		      .attr("id", function(d) { return 'label-'+d.id; })
		      .attr('text-anchor', 'middle')
		      .attr("dy", ".35em")
		      .on("click", click)
		      .text(function(d) { return d.properties.Name; });
		});
		

		d3.select('rect#no-drag').on('mousedown.drag', null);	//drag disable
		d3.select("#map").attr("align","center");
		
		//버튼 초기화
		initComponent();
		
		//최초 화면 로드시 서울특별시로 설정
		setTimeout(function(){
			fnGetInfo("서울특별시","D");
			$('#path-1').addClass('active');
		}, 500)
	});
	
	function initComponent(){
		// 버튼
		$('#radio').buttonset();
		$('#zoomin').button({
		  text: false,
		  icons: {
		    primary: "ui-icon-plus"
		  }
		}).click(function() {
		  var arr = projection.translate(),
		      scale = projection.scale();
		      
		  arr[0] = arr[0] * 1.2;
		  arr[1] = arr[1] * 1.2;
		  scale = scale * 1.2;
		  
		  projection.translate(arr).scale(scale);
		  states.selectAll("path").attr("d", path);
		  
		  labels.attr("transform", labelsTransform);
		});
		
		//줌아웃 버튼
		$('#zoomout').button({
		  text: false,
		  icons: {
		    primary: "ui-icon-minus"
		  }
		}).click(function() {
		  var arr = projection.translate(),
		      arr2 = projection.translate(),
		      scale = projection.scale();
		      
		  arr[0] = arr[0] * 0.8;
		  arr[1] = arr[1] * 0.8;
		  scale = scale * 0.8;
		  
		  projection.translate(arr).scale(scale);
		  states.selectAll("path").attr("d", path);
		  
		  labels.attr("transform", labelsTransform);
		});
		      
		// 지명표시
		$('#radio').find('input').on('click', function() {
		  if (this.value == 'on') {
		    labels.style('display', 'block');
		  } else if (this.value == 'off') {
		    labels.style('display', 'none');
		  }
		});
	}
	
	function d3_formatPrefix(d, i) {
	    var k = Math.pow(10, Math.abs(8 - i) * 3);
	    return {
	      scale: i > 8 ? function(d) {
	        return d / k;
	      } : function(d) {
	        return d * k;
	      },
	      symbol: d
	    };
	  }
	
	/**
	 * 지역별 현황 조회
	 * @param selRegionNm 선택지역명
	 */
	function fnGetInfo(selRegionNm,selZnDv){
		$('#chartInfo #selRegion').text(selRegionNm);	//선택 지역명 설정
		
		//지역별 현황 조회
		var obj = {};
		obj.ZN_DV = selZnDv;
		$.ajax({
			 type: 'post',
	         url: '${pageContext.request.contextPath}/getResionStatusInfo.do',
	         contentType: 'application/json',
	         data: JSON.stringify(obj),
	         dataType: "json",
			 async: false,
	         success: function (data) {
	         	$('#chartInfo #dlvyExpctQty').val(data.dlvyExpctQty);
	         	$('#chartInfo #wareiExpctQty').val(data.wareiExpctQty);
	         	$('#chartInfo #stckQty').val(data.stckQty);
	         	$('#chartInfo #noDlvyQty').val(data.noDlvyQty);
	         },error : function(e) {
                 //console.info(e);
             }
		});
	}
	
</script>
<script src="${pageContext.request.contextPath}/js/mainchart/script.js"></script>
</html>

