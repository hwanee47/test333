<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<script type="text/javascript">
		var CONTEXT_PATH = "${pageContext.request.contextPath}";
		
		var multiLang = {};
		multiLang["msg.0107"] = '<%= MessageUtil.getString("msg.0107", "이전 달") %>';
		multiLang["msg.0108"] = '<%= MessageUtil.getString("msg.0108", "다음 달") %>';
		multiLang["msg.0109"] = '<%= MessageUtil.getString("msg.0109", "1월") %>';
		multiLang["msg.0110"] = '<%= MessageUtil.getString("msg.0110", "2월") %>';
		multiLang["msg.0111"] = '<%= MessageUtil.getString("msg.0110", "3월") %>';
		multiLang["msg.0112"] = '<%= MessageUtil.getString("msg.0110", "4월") %>';
		multiLang["msg.0113"] = '<%= MessageUtil.getString("msg.0110", "5월") %>';
		multiLang["msg.0114"] = '<%= MessageUtil.getString("msg.0110", "6월") %>';
		multiLang["msg.0115"] = '<%= MessageUtil.getString("msg.0110", "7월") %>';
		multiLang["msg.0116"] = '<%= MessageUtil.getString("msg.0110", "8월") %>';
		multiLang["msg.0117"] = '<%= MessageUtil.getString("msg.0110", "9월") %>';
		multiLang["msg.0118"] = '<%= MessageUtil.getString("msg.0110", "10월") %>';
		multiLang["msg.0119"] = '<%= MessageUtil.getString("msg.0110", "11월") %>';
		multiLang["msg.0120"] = '<%= MessageUtil.getString("msg.0110", "12월") %>';
		
		multiLang["msg.0121"] = '<%= MessageUtil.getString("msg.0121", "일요일") %>';
		multiLang["msg.0122"] = '<%= MessageUtil.getString("msg.0122", "월요일") %>';
		multiLang["msg.0123"] = '<%= MessageUtil.getString("msg.0123", "화요일") %>';
		multiLang["msg.0124"] = '<%= MessageUtil.getString("msg.0124", "수요일") %>';
		multiLang["msg.0125"] = '<%= MessageUtil.getString("msg.0125", "목요일") %>';
		multiLang["msg.0126"] = '<%= MessageUtil.getString("msg.0126", "금요일") %>';
		multiLang["msg.0127"] = '<%= MessageUtil.getString("msg.0127", "토요일") %>';
		multiLang["msg.0128"] = '<%= MessageUtil.getString("msg.0128", "일") %>';
		multiLang["msg.0129"] = '<%= MessageUtil.getString("msg.0129", "월") %>';
		multiLang["msg.0130"] = '<%= MessageUtil.getString("msg.0130", "화") %>';
		multiLang["msg.0131"] = '<%= MessageUtil.getString("msg.0131", "수") %>';
		multiLang["msg.0132"] = '<%= MessageUtil.getString("msg.0132", "목") %>';
		multiLang["msg.0133"] = '<%= MessageUtil.getString("msg.0133", "금") %>';
		multiLang["msg.0134"] = '<%= MessageUtil.getString("msg.0134", "토") %>';
		
		multiLang["msg.0054"] = '<%= MessageUtil.getString("msg.0054", "주문정보가 존재하지 않습니다.") %>';
		multiLang["msg.0055"] = '<%= MessageUtil.getString("msg.0055", "차량을 선택 후 사용할 수 있습니다.") %>';
		
		multiLang["msg.0135"] = '<%= MessageUtil.getString("msg.0135", "영차") %>';
		multiLang["msg.0136"] = '<%= MessageUtil.getString("msg.0136", "공차") %>';
		multiLang["msg.0137"] = '<%= MessageUtil.getString("msg.0137", "지연") %>';
		multiLang["msg.0138"] = '<%= MessageUtil.getString("msg.0138", "사고") %>';
		
		multiLang["msg.0139"] = '<%= MessageUtil.getString("msg.0139", "차량이 존재하지 않습니다.") %>';
		multiLang["msg.0047"] = '<%= MessageUtil.getString("msg.0047", "6개월 이전 데이터는 조회하실 수 없습니다.") %>';
		multiLang["msg.0143"] = '<%= MessageUtil.getString("msg.0143", "경로가 존재하지 않습니다.") %>';
		
		multiLang["msg.0140"] = '<%= MessageUtil.getString("msg.0140", "사고정보보기") %>';
		multiLang["msg.0141"] = '<%= MessageUtil.getString("msg.0141", "운행경로보기") %>';
		
		multiLang["msg.0048"] = '<%= MessageUtil.getString("msg.0048", "운송완료") %>';
		multiLang["msg.0049"] = '<%= MessageUtil.getString("msg.0049", "하차지 도착") %>';
		multiLang["msg.0050"] = '<%= MessageUtil.getString("msg.0050", "상차지 출발") %>';
		multiLang["msg.0051"] = '<%= MessageUtil.getString("msg.0051", "상차지 도착") %>';
		multiLang["msg.0052"] = '<%= MessageUtil.getString("msg.0052", "배차") %>';
		multiLang["msg.0053"] = '<%= MessageUtil.getString("msg.0053", "주문") %>';
		
		multiLang["msg.0101"] = '<%= MessageUtil.getString("msg.0101", "차량정보") %>';
		multiLang["msg.0142"] = '<%= MessageUtil.getString("msg.0142", "현재위치") %>';
		
		multiLang["msg.0066"] = '<%= MessageUtil.getString("msg.0066", "사고정보가 없습니다.") %>';
	</script>
	
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/entVhclCntr/css/entVhclCntr.css" />
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/entVhclCntr/css/pikaday.css" />

	<!-- Google Map 관련 라이센스 및 JS 파일 -->
	<script src="https://maps.googleapis.com/maps/api/js?client=gme-cjkoreaexpress&region=KR"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/googleMap/markerwithlabel.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/googleMap/control_main.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/googleMap/proj4js-combined.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/func.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/var.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/map.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/moment-with-locales.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/pikaday.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/js/entVhclCntr.js"></script>
</head>

<body>
<div class="wrapper">
	<!-- 상단 검색 영역 -->
	<div class="top_search_bx">
		<dl>
			<dt id="TO_DAY" date="${DATE_STRING}" hour="${HOUR_STRING}"><%= MessageUtil.getString("msg.0091", "날짜") %></dt>
			<dd>
				<input id="SEARCH_DATE" name="SEARCH_DATE" type="text" value="${DATE_STRING}" class="inp_ty01" readonly />
				<a class="btn_cal"><img src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/img/btn_cal.png" /></a>
			</dd>
			<dt><%= MessageUtil.getString("msg.0092", "실행거점") %></dt>
			<dd>
				<select name="EXE_CORP_ID" id="EXE_CORP_ID" class="sel_ty01"></select>
			</dd>
			<!-- dt>담당자</dt-->
			<!-- dd-->
				<input name="USER" id="USER" type="hidden" class="inp_ty01" onkeypress="return parseInput(this, event);" readonly />
				<input name="USER_ID" type="hidden" />
				<input name="AUTH_CD" type="hidden" />
			<!-- /dd-->
			<dt><%= MessageUtil.getString("msg.0093", "차량번호") %></dt>
			<dd>
				<input name="VHCL_NO" type="text" value="" class="inp_ty01" />
			</dd>
			<dt><%= MessageUtil.getString("msg.0094", "운영구분") %></dt>
			<dd>
				<select name="EQP_CLS_CD" id="EQP_CLS_CD" class="sel_ty01">
					<option value="">- <%= MessageUtil.getString("msg.0075", "전체") %> -</option>
					<option value="1"><%= MessageUtil.getString("msg.0095", "직영") %></option>
					<option value="2"><%= MessageUtil.getString("msg.0096", "위수탁") %></option>
					<option value="3"><%= MessageUtil.getString("msg.0097", "운송가맹") %></option>
				</select>
			</dd>
			<dt><%= MessageUtil.getString("msg.0098", "고객명") %></dt>
			<dd>
				<input name="SHPR" id="SHPR" type="text" class="inp_ty01" onkeypress="return parseInput(this, event);" onchange="return removeValue('SHPR_ID');" />
				<input name="SHPR_ID" id="SHPR_ID" type="hidden" />
			</dd>
			<dd>
				<button type="button" onclick="getVhclList();"><%= MessageUtil.getString("msg.0099", "검색") %></button>
			</dd>
		</dl>	
	</div>
	<!-- //상단 검색 영역 -->

	<!-- 좌측 지도 영역 -->
	<div class="map_box_l">
		<!-- 지도 -->
		<div id="map" class="map_box_l" style="height:758px;"></div>
		<!-- //지도 -->
		<!-- 상단 정보 -->
		<div class="map_in_indicate">
			<ul>
				<li class="indicateFlag_A"><p id="indicate_A_text"></p></li>
				<li class="indicateFlag_D"><p id="indicate_D_text"></p></li>
				<li class="indicateFlag_F"><p id="indicate_F_text"></p></li>
				<li class="indicateFlag_E"><p id="indicate_E_text"></p></li>
			</ul>
		</div>
		<!-- //상단 정보 -->
		<!-- 홈버튼 -->
		<div class="map_in_home" id="backButton" style="display:none;">
			<img src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/img/historyBack.png" title='<%= MessageUtil.getString("msg.0100", "목록표시") %>' onclick="getVhclList();"/>
		</div>
		<!-- //홈버튼 -->
		<!-- 하단 정보 -->
		<div class="map_in_wrap">
			<!-- 버튼 -->
			<p class="map_btn"><a href="#" class=""></a></p>
			<!-- //버튼 -->
			<div class="inner_bx">
				<!-- 좌측 영역 -->
				<div class="bx_l">
					<div class="t_info"><p id="driverInfo"></p></div><!-- 말풍선 -->
					<p class="im_bx"><img src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/img/img_truck.png" alt="" /></p>
					<p class="s_tx" id="vhclInfo"></p>
				</div>
				<!-- //좌측 영역 -->
				<!-- 우측 영역 -->
				<div class="bx_r">
					<div class="cont_t" id="vhclInfoObj">
						<ul>
							<li><p id="shprInfo"></p></li>
							<li><p id="itemInfo"></p></li>
							<li><p id="wgtInfo"></p></li>
							<li class="last"><p id="eqpClsInfo"></p></li>
						</ul>
					</div>
					<div class="cont_m">
						<span class="tx" id="frNodeInfo"></span>
						<span class="arr"><img src="${pageContext.request.contextPath}/web/jsp/entVhclCntr/img/img_arrow.png" alt=""/></span>
						<span class="tx" id="toNodeInfo"></span>
						<span class="view" id="linkInfo"></span>
					</div>
					<div class="cont_b">
						<ul>
							<li id="ORD_TIME"></li>
							<li id="MNF_TIME"></li>
							<li id="DEP_ARRD_TIME"></li>
							<li id="DEP_DEPD_TIME"></li>
							<li id="ARR_ARRD_TIME"></li>
							<li id="FIN_TIME" class="last"></li>
						</ul>
					</div>
				</div>
				<!-- //우측 영역 -->
			</div>
		</div>
		<!-- //하단 정보 -->
	</div>
	<!-- //좌측 지도 영역 -->
	
	<!-- 우측 정보 영역 -->
	<div class="info_box_r">
		<div class="in_bx_r01">
			<!-- 테이블 영역 -->
			<div class="board_wrap">
				<table class="board_common" summary='<%= MessageUtil.getString("msg.0009", "차량정보 테이블로 차량정보, 하차지, 고객명의 항목으로 구성되어 있습니다.") %>'>
					<colgroup>
					<col width="45px" />
					<col width="45px" />
					<col width="35px" />
					<col width="100px" />
					<col width="*" />
					<col width="280px" />
					<col width="110px" />
					</colgroup>
					<thead>
						<tr>
							<th>GPS</th>
							<th colspan="4"><%= MessageUtil.getString("msg.0101", "차량정보") %></th>
							<th><%= MessageUtil.getString("msg.0102", "최종위치") %></th>
							<th><%= MessageUtil.getString("msg.0103", "최종시간") %></th>
						</tr>
					</thead>
				</table>
				<div class="table_scrollbar" id="tableArea">
				<table class="board_common">
					<colgroup>
					<col width="45px" />
					<col width="45px" />
					<col width="35px" />
					<col width="100px" />
					<col width="*" />
					<col width="280px" />
					<col width="100px" />
					</colgroup>
					<tbody>
						<tr style="cursor:pointer;"><td colspan="7"><%= MessageUtil.getString("msg.0104", "검색하세요.") %></td></tr>
					</tbody>
				</table>
				</div>
			</div>
			<!-- //테이블 영역 -->
		</div>
	</div>
	<!-- //우측 정보 영역 -->
	
	<!-- 이미지 표시 영역 -->
	<div id="imageLayer" class="image_layer_close">
		<div class="image_title">
			<span class="title"><%= MessageUtil.getString("msg.0105", "사고정보") %></span>
			<span class="close" onclick="closeImage();">X</span>
		</div>
		<div class="image_names">
			<table class="info">
				<colgroup>
					<col width="70px" />
					<col width="*" />
					<col width="70px" />
					<col width="*" />
				</colgroup>
				<tbody>
					<tr>
						<td class="hd"><%= MessageUtil.getString("msg.0106", "비고") %></td>
						<td class="dt" colspan="3" id="sago_remk"></td>
					</tr>
					<tr>
						<td class="hd"><%= MessageUtil.getString("msg.0010", "사진 1") %></td>
						<td class="dt" id="sago_img_0"></td>
						<td class="hd"><%= MessageUtil.getString("msg.0011", "사진 2") %></td>
						<td class="dt" id="sago_img_1"></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="image_spot">
			<div class="spot">
				<img id="imgSrc" src="">
			</div>
		</div>
	</div>
	<!-- //이미지 표시 영역 -->

</div>
<div id="TEST_BLOCK" style="display:hidden;" ip="${IP_STRING}"></div>
</body>
</html>