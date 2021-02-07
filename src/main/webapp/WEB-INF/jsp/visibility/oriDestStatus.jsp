<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"
%><%@ page import="moonsoft.common.util.MessageUtil"%>
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

    <script type="text/javascript">
		var CONTEXT_PATH = "${pageContext.request.contextPath}";
		var	CONTEXT_ROOT = "${pageContext.request.contextPath}";
	</script>
	
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/oriDest/css/style.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/oriDest/css/jquery-ui.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/oriDest/js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/oriDest/js/d3.v3.js"></script>
	
	<!-- Visibility Script -->
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/js/sys/func.js"></script>
	
	<!-- stylesheet  -->
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/entVhclCntr/css/oriDestStatus.css" />
	
	<style type="text/css">
		.lab_text { 
			font: 12px "맑은 고딕";
			color: #ffffff;
			margin-left: 10px;
		}
		.lab_text .sel_base { 
			width: 120px;
		}
		.lab_text .sel_base:first-child { 
			margin-left: 10px;
		}
		
		.tAlignC { text-align: center; }
		.tAlignL { text-align: left; }
		.tAlignR { text-align: right; }
		.label_tableTitle { 
			font: 16px "돋움";
			font-weight: bold;
		}
		
		#div_progressbar {
		    height: 100%;
		    width: 100%;
		    position: absolute;
		    top: 15%;
		    left: 0px;
		    z-index: 999999;
		    text-align: center;
		    display: none;
		}
	</style>
</head>

<body style="padding: 10px; min-width: 1800px;">
	<!-- 
	<div class="menu">
	<button onClick="fnSearch();" title="상차지[서울](상차,하차),하차지[부산](하차)">조회</button>
	<button onClick="fnSearch2();" title="상차지[서울](상차), 하차지[부산](상차,하차)">조회</button>
	<button onClick="fnSearch3();" title="상차지[서울](상차), 하차지[전체]">조회</button>
	<button onClick="fnSearch4();" title="상차지[전체], 하차지[전체]">조회</button>
	</div>
	-->   
    <!-- body -->
    <div class="user_css_border" style="width:100%; height: 900px;">

		<!-- 상단 검색 영역 -->
		<div id="frame_top_bar" class="top_search_bx">
			<div style="padding-left: 9px;">
				<dl>
					<dt id="">상차지</dt>
					<dd>
						<select id="sel_depNodeNmList" name="sel_nodeListGroup" data-type="DEP" class="sel_ty01">
							<option value="" selected="selected">전체</option>
						</select>
						<input type="number" id="txt_depRange" name="inp_range" value="0" style="width:40px;">
					</dd>					
					<dt id="">하차지</dt>
					<dd>
						<select id="sel_arrNodeNmList" name="sel_nodeListGroup" data-type="ARR" class="sel_ty01">
						</select>
						<input type="number" id="txt_arrRange" name="inp_range" value="0" style="width:40px;">
					</dd>
					<!-- 
					<dd><div style="margin-top:3px; color:#ffffff;">
						<input type="checkbox" name="locType" value="D" checked="checked"><label style="margin-left:5px;">상차</label>
						<input type="checkbox" name="locType" value="A" style="margin-left:5px;"><label style="margin-left:5px;">하차</label>
						</div>
					</dd>
					 -->
					<dt id="TO_DAY">상차일자</dt>
					<dd>
						<input id="txt_fromDate" name="txt_fromDate" type="text" class="inp_ty01" />
						<a class="btn_cal"><img src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/img/btn_cal.png" id="img_fromDate" /></a>
					</dd>
					<dd>
						<input id="txt_toDate" name="txt_toDate" type="text" class="inp_ty01" />
						<a class="btn_cal"><img src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/img/btn_cal.png" id="img_toDate" /></a>
					</dd>
					
					<dt>차종</dt>
					<dd><select name="sel_vhclKndList" id="sel_vhclKndList" class="sel_ty01">
							<option value="" selected="selected">전체</option>					
						</select>
					</dd>
					
					<dt>톤급</dt>
					<dd>
						<select name="sel_vhclTonList" id="sel_vhclTonList" class="sel_ty01">	
							<option value="" selected="selected">전체</option>
						</select>
				 	</dd>
				 	
					<dt>물자그룹</dt>
					<dd><select name="sel_ctgryList" id="sel_ctgryList" class="sel_ty01">
							<option value="" selected="selected">전체</option>
						</select>
					</dd>
					
					<dt>물자상세</dt>
					<dd><select name="sel_itemCdList" id="sel_itemCdList" class="sel_ty01">
							<option value="" selected="selected">전체</option>
						</select>
					</dd>
				</dl>	
			</div>
			<div id=div_btnGroup" style="padding-right: 9px; float: right;">
				<input type="button" id="btn_search" value="조회" style="height:23px; width:55px; background:#cb8a45; border:1px solid #ba7b39; color:#ffffff; border-radius:1px;"/>  
			</div>
		</div>
    	
    	<div style="width: 100%; height: 100%;">
    	
    		<!-- contents left -->
	    	<div id="frame_con_left" style="width: 600px; height: 100%; margin-top: 10px; float: left;">
		   		<div id="contianer" class="container"></div>
		   		<script src="${pageContext.request.contextPath}/web/jsp/oriDest/js/oriDest.js"></script>
	    	</div>
	    
	    	<!-- contents right -->
	    	
	    	<div id="frame_con_right" style="width: 1100px; height: 100%; float:right;">
	    		<label class="label_tableTitle">· 링크 집계내역</label>
	    		<div class="board_wrap" style="overflow: scroll;">
					<table class="board_common">
						<colgroup>
							<col width="30">
							<col width="200">
							<col width="200">
							<col width="80">
							<col width="80*">
							<col width="120">
							<col width="120">
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>상차지</th>
								<th>하차지</th>
								<th>총톤수</th>
								<th>배차건수</th>
								<th>총매출가</th>
								<th>총매입가</th>
							</tr>
						</thead>
						<tbody id="grid_main_tbody">
							<tr>
								<td colspan="7" style="text-align: center;">조회된 데이터가 없습니다.</td>
							</tr>
						</tbody>
					</table>
				</div>		

	    	
		    	<label class="label_tableTitle">· 링크 상세내역</label>
	    		<div class="board_wrap" style="overflow: scroll;">
					<table class="board_common">
						<colgroup>
							<col width="30">
							<col width="200">
							<col width="200">
							<col width="300">
							<col width="300">
							<col width="80">
							<col width="80">
							<col width="80">
							<col width="80">
							<col width="120">
							<col width="120">
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>상차지</th>
								<th>하차지</th>
								<th>고객</th>
								<th>파트너</th>
								<th>물자</th>
								<th>차종</th>
								<th>총톤수</th>
								<th>배차건수</th>
								<th>총매출가</th>
								<th>총매입가</th>			
							</tr>
						</thead>
						<tbody id="grid_sub_tbody">
							<tr>
								<td colspan="11" style="text-align: center;">조회된 데이터가 없습니다.</td>		
							</tr>
						</tbody>
					</table>
				</div>		
	    	
	    		<label class="label_tableTitle">· 데이터 상세내역</label>
	    		<div class="board_wrap" style="overflow: scroll;">
					<table class="board_common">
						<colgroup>
							<col width="30">
							<col width="100">
							<col width="200">
							<col width="200">
							<col width="300">
							<col width="300">
							<col width="80">
							<col width="80">
							<col width="80">
							<col width="80">
							<col width="120">
							<col width="120">
						</colgroup>
						<thead>
							<tr>
								<th>No</th>
								<th>월별</th>
								<th>상차지</th>
								<th>하차지</th>
								<th>고객</th>
								<th>파트너</th>
								<th>물자</th>
								<th>차종</th>
								<th>총톤수</th>
								<th>배차건수</th>
								<th>총매출가</th>
								<th>총매입가</th>			
							</tr>
						</thead>
						<tbody id="grid_detail_tbody">
							<tr>
								<td colspan="12" style="text-align: center;">조회된 데이터가 없습니다.</td>	
							</tr>
						</tbody>
					</table>
				</div>		
				
	    	</div>
	    	
    	</div>
    </div>
    <div id="div_progressbar">
    	<img src="${pageContext.request.contextPath}/nkfr/_resource_/_theme_/default/images/loading.gif">
    </div>
</body>
</html>