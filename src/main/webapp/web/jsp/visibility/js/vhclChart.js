/**
 * Visibility - 차트 적용과 관련된 스크립트
 * 
 * 
 * @author	Jang. Jae-hyuk
 * @since	2018. 11. 17.
 */

var	CHART_INITIALIZED		= false;
var	CHART_DATA_MAP			= null;
/*	["ID", [	{"STATUS":"ETC", "CNT":30},
	          	{"STATUS":"MOV", "CNT":10},
	          	{"STATUS":"FIN", "CNT":10},
				{"STATUS":"ALM", "CNT":2}	]];	*/

var	CHART_LAYOUT_MAP		= null;
var	CHART_LAYOUT_BASE		= 
'<rMateChart borderStyle="none">'+
'	<Pie2DChart id="chart"	innerRadius="0.5" showDataTips="true" selectionMode="single">'+
'		<series>'+
'			<Pie2DSeries nameField="STATUS"	field="CNT" startAngle="20" renderDirection="clockwise" labelPosition=""	color="#ffffff">'+
'				<fills>$$FILLS$$</fills>'+
'				<showDataEffect>'+
'					<SeriesZoom duration="1000"/>'+
'				</showDataEffect>'+
'			</Pie2DSeries>'+
'		</series>'+
'		<backgroundElements>'+
'			<CanvasElement>'+
'				<Label	text="$$MOV_RATE$$%" height="24" horizontalCenter="0" verticalCenter="0" fontSize="19" color="#FFFFFF" backgroundAlpha="0"/>'+
'			</CanvasElement>'+
'		</backgroundElements>'+
'	</Pie2DChart>'+
'</rMateChart>'
;


// Initialize
function initChart() {
	var	chartVars		= "rMateOnLoadCallFunction=chartReadyHandler";
	var	arrBaseCorp		= VHCL.getArrBaseCorp();
	var	item			= null;
	
	var	tbodyElm		= $("#baseCorpChartBody")[0];
	var	chartId			= null;
	var	chartDivId		= null;
	var	nameTr			= null;
	var	nameTh			= null;
	var	chartTr			= null;
	var	chartTd			= null;
	
	var	arrData			= new Array();
	var	fills			= null;

	// 데이터 초기화
	CHART_DATA_MAP		= new Map();
	CHART_LAYOUT_MAP	= new Map();
	
	tbodyElm.innerHTML	= "";
	//
	for(var i=0; i<arrBaseCorp.length; i++) {
		item			= arrBaseCorp[i];
		chartId			= "chart_"+item.id;
		chartDivId		= "cdv_"+item.id;
		//console.log("[chart.js-initChart()] item["+JSON.stringify(item)+"] chartId["+chartId+"] ");
		
		// 차트 Data 설정
		arrData		= [	{"STATUS":lang("0085", "공차")	,"FILL":"#aaaaaa"	,"CNT":(item.TOT_CNT - item.MOV_CNT)},
		          		{"STATUS":lang("0086", "영차")	,"FILL":"#008000"	,"CNT":(item.MOV_CNT - item.FIN_CNT - item.ALM_CNT)},
		          		{"STATUS":lang("0087", "완료")	,"FILL":"#90ee90"	,"CNT":item.FIN_CNT},
						{"STATUS":lang("0088", "지연")	,"FILL":"#800000"	,"CNT":item.ALM_CNT}	];
		
		fills	= "";
		//
		for(var j=(arrData.length-1); j>=0; j--) {
			if(arrData[j].CNT > 0) {
				fills	= '<SolidColor color="'+arrData[j].FILL+'"/>' + fills;
			} else {
				arrData.splice(j, 1);
			}
		}
		
		CHART_DATA_MAP.set(chartId, arrData);
			
		// 차트 Layout 설정 (가동률 적용)
		CHART_LAYOUT_MAP.set(chartId, CHART_LAYOUT_BASE.replace("$$FILLS$$", fills).replace("$$MOV_RATE$$", Math.round(item.MOV_CNT/item.TOT_CNT*100)	));
		//console.log("[chart.js-initChart()] id["+chartId+"] layout["+CHART_LAYOUT_MAP.get(chartId)+"] data["+CHART_DATA_MAP.get(chartId)+"]");
		
		// 차트를 초기화해야 하는 경우 HTML에 차트관련 Object설정
		//if(!CHART_INITIALIZED) {
			if(i%4 == 0) {
				nameTr				= document.createElement("tr");
				chartTr				= document.createElement("tr");
				
				tbodyElm.appendChild(nameTr);
				tbodyElm.appendChild(chartTr);
			}
			
			// 거점명
			nameTh				= document.createElement("th");
			nameTh.innerHTML	= item.name;
			nameTr.appendChild(nameTh);
			
			// 차트삽입
			chartTd				= document.createElement("td");
			chartTd.innerHTML	= "<div id='"+chartDivId+"' style='height:108px'></div>";
			chartTr.appendChild(chartTd);

			rMateChartH5.create(chartId, chartDivId, chartVars, "100%", "100%");
			//console.log("[chart.js-initChart()] 1 ...");
		//}

	}
	
	CHART_INITIALIZED	= true;
}


// Chart object ready event handler
function chartReadyHandler(id) {
	//console.log("[clsChart.chartReadyHandler()] id["+id+"] layout["+CHART_LAYOUT_MAP.get(id)+"] data["+CHART_DATA_MAP.get(id)+"]");
	document.getElementById(id).setLayout(CHART_LAYOUT_MAP.get(id));
	document.getElementById(id).setData(CHART_DATA_MAP.get(id));
}
