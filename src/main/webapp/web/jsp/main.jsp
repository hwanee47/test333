<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>

<html lang="ko">
<head>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="keywords" content="CJ 화물정보망">
<meta name="description" content="CJ 화물정보망" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="CJ 화물정보망"/>
<meta name="twitter:site" content="CJ 화물정보망" />
<meta name="twitter:creator" content="CJ 화물정보망"/>
<meta name="twitter:image" content="../img/m_img.jpg" />
<meta name="twitter:description" content="CJ 화물정보망"/>
<meta property="og:title" content="글로벌 네트워크 | CJ 화물정보망">    
<meta property="og:site_name" content="CJ 화물정보망"/>
<meta property="og:type" content="article"/>
<meta property="og:url" content="https://www.cjlogistics.com/ko/network"/>
<meta property="og:image" content="../img/m_img.jpg">
<meta property="og:description" content="CJ 화물정보망"/>
<title>CJ 화물정보망</title>
<link rel="image_src" href="../img/m_img.jpg"/>
<link rel="shortcut icon" href="../img/cj.ico" type="image/x-icon" />
<link rel="icon" href="../img/cj.ico" type="image/x-icon" />

<meta name="author" content="" />
<meta name="Resource-type" content="Document" />

<link rel="stylesheet" type="text/css" href="../dist/fullpage.css" />
<link rel="stylesheet" type="text/css" href="../css/examples.css" />
<link rel="stylesheet" type="text/css" href="../css/common.css" />

<!--[if IE]>
	<script type="text/javascript">
		 var console = { log: function() {} };
	</script>
<![endif]-->
</head>
<body class="is-pagetransition">

<script src="https://www.cjlogistics.com/static/pc/global/template/js/jquery-1.12.1.min.js"></script>
<script type="text/javascript">
	$(window).load(function(){
		//로드 시 화면 전환 모션
		setTimeout(function() {
			$("body").removeClass("is-pagetransition");
		}, 100), setTimeout(function() {
			$("body").addClass("is-pagetransitionend");
			$(".logo-article").remove();
		}, 1000), setTimeout(function() {
			$(".vis_btm_box_wrap").animate({ "bottom": "87px" }, "slow" );
		}, 4000);
		//
		calDate();
		//
		
		/*
		setTimeout(function() {
			$("body").removeClass("is-pagetransition");
		}, 80), setTimeout(function() {
			$("body").addClass("is-pagetransitionend");
			$(".logo-article").remove();
		}, 1000), setTimeout(function() {
			$("body").css({"overflow-x":"auto"});
		}, 3000);
		*/
	});
</script>
<article class="logo-article"></article>

<!-- header -->
<%@ include file="../inc/header.jsp" %>
<!-- //header -->

<div id="fullpage">
	<!-- /main -->
	<div class="section" id="section0">
		<video id="myVideo" loop muted data-autoplay style="/*background:#0c3e5d; opacity:0.5; z-index:10000;*/">
			<source src="../vod/a_main.mp4" type="video/mp4">
			<source src="../vod/a_main.webm" type="video/webm">
		</video>
		<div class="layer" style="z-index:100000;">
			<div class="vis_tx_wrap">
				<p class="tx01"><%= MessageUtil.getString("msg.web.0039", "언제 어디서나 모두의") %> <span class="spc_f">“</span><span class="eng">HELLO</span><span class="spc_l">”</span></p>
				<p class="tx02">
					<span style="font-family:'NSKB';"><%= MessageUtil.getString("msg.web.0040", "최상의 물류서비스 최고의 가치를 추구하는 Hello 화물정보망") %></span><br/>
					<!-- Hello가 지향하는  최고의 가치는 차주님의 성장과 발전입니다 -->
				</p>
			</div>
		</div>
		<div class="vis_btm_box_wrap">
			<div class="vis_btm_box">
				<div class="bx01">
					<%= MessageUtil.getString("msg.web.0076", "고객문의") %> <span class="num">1855-1234</span>
					<p class="time">09:00 ~18:00 <%= MessageUtil.getString("msg.web.0041", "(토,일,공휴일 휴무)") %></p>
				</div>
				<div class="bx02">
					<%= MessageUtil.getString("msg.web.0042", "고객의 관점으로 새롭게 바뀌었습니다.") %>
					<!-- <a href="/NKFR/nkfr/index_w.html" class="btn01">Hello 고객시스템<img src="../img/vis_btn_bg01.png" alt="" style="position:absolute; right:-12px; bottom:-3px;" /></a>사용자단 링크 버튼 -->
					<a href="javascript:fn_loginCheck();" class="btn01 flash"><%= MessageUtil.getString("msg.web.0043", "Hello 고객시스템") %><img src="../img/vis_btn_bg01.png" alt="" style="position:absolute; right:-12px; bottom:-3px;" /></a><!-- 사용자단 링크 버튼 -->
				</div>
				<div class="bx03">
					<%= MessageUtil.getString("msg.web.0044", "보다 빠르게 물류서비스를 이용하세요.") %>
					<a href="#" onClick="popOpen('pop_ty01');" class="btn01"><%= MessageUtil.getString("msg.web.0045", "빠른 화물 등록") %><img src="../img/vis_btn_bg01.png" alt="" style="position:absolute; right:-12px; bottom:-3px;" /></a>
				</div>
			</div>
		</div>
	</div>
	<!-- //main -->

	<!-- order -->
	<!-- <div class="section z_pl" id="section1" style="/*background:url('../img/img01.png') no-repeat center top;*/">
		<p style="position:absolute; top:343px; left:0; width:200px; height:90px; background:#0079c3; z-index:10;"></p> line
		<p id="move04_01"></p>
		<p id="move04_02"></p>
		<p id="move04_03"></p>
		<p id="move01"></p>
		<p id="move03_01"></p>
		<p id="move03_02"></p>
		<div class="wrap_sec1">
			<div class="tit_area">
				<p class="tit">SERVICE</p>
				<p class="tit_tx">대한민국 최대 물류 네트워크 및 인프라를 바탕으로 최상의 서비스를 제공합니다</p>
			</div>
			<div class="tab_area">
				<ul>
					<li class="a_right on">
						<p><a href="javascript:void(0);">화물 현황</a><span>1,278</span></p>
						<img src="../img/bg_menu_l.png" alt="" class="img_bg" />
					</li>
					<li class="a_left off">
						<img src="../img/bg_menu_r.png" alt="" class="img_bg" />
						<p><a href="javascript:void(0);">공차 현황</a><span>678</span></p>
					</li>
				</ul>
			</div>
			<div class="cont_wrap" style="position:relative; height:362px; padding-top:37px; background:#fff; z-index:100;">
				tab
				<div class="tab_ty01">
					<ul>
						<li class="active">
							<p>수도권</p>
							<div class="inner_tb" style="display:block;">
								<div class="board_wrap">
									<table cellspacing="0" cellpadding="0" class="board_common" summary="강원권 테이블로 상차지, 하차지, 품목, 차종, 톤수, 운임요금, 남은시간의 항목으로 구성되어 있습니다.">
										<caption>수도권</caption>
										<colgroup>
										<col width="80" />
										<col width="110" />
										<col width="*" />
										<col width="255" />
										<col width="190" />
										<col width="105" />
										<col width="105" />
										<col width="105" />
										</colgroup>
										<thead>
										<tr>
											<th>의뢰상태</th>
											<th>남은시간</th>
											<th>상하차일시</th>
											<th>상차지</th>
											<th>하차지</th>
											<th>품목</th>
											<th>요청차량</th>
											<th>운송료</th>
										</tr>
										</thead>
										<tbody>
											<tr>
												<td>배차요청</td>
												<td>0일 01:53분</td>
												<td>11/12 15:00 ~ 11/12 15:00</td>
												<td class="title01">경기도 군포시 부곡동 한국복합물류(주)</td>
												<td class="title01">경남 창원시 성산동76번지</td>
												<td>일반컨테이너</td>
												<td>트렉터 30톤</td>
												<td>***,***원</td>
											</tr>
											<tr>
												<td>배차요청</td>
												<td>0일 01:53분</td>
												<td>11/12 15:00 ~ 11/12 15:00</td>
												<td class="title01">경기도 가평군 북면</td>
												<td class="title01">경남 창원시 성산동76번지</td>
												<td>일반컨테이너</td>
												<td>트렉터 30톤</td>
												<td>***,***원</td>
											</tr>
											<tr>
												<td>배차요청</td>
												<td>0일 01:52분</td>
												<td>11/12 15:00 ~ 11/12 15:00</td>
												<td class="title01">경기도 화성시 양감면</td>
												<td class="title01">경남 창원시 성산동76번지</td>
												<td>일반컨테이너</td>
												<td>트렉터 30톤</td>
												<td>***,***원</td>
											</tr>
											<tr>
												<td>배차요청</td>
												<td>0일 01:52분</td>
												<td>11/12 15:00 ~ 11/13 09:00</td>
												<td class="title01">경기도 안성시 미양면</td>
												<td class="title01">부산</td>
												<td>자동차부품</td>
												<td>카고 5톤</td>
												<td>***,***원</td>
											</tr>
											<tr class="last">
												<td>배차요청</td>
												<td>0일 02:52분</td>
												<td>11/12 16:00 ~ 11/13 09:00</td>
												<td class="title01">경기도 화성시 향남읍</td>
												<td class="title01">부산</td>
												<td>자동차부품</td>
												<td>카고 18톤</td>
												<td>***,***원</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</li>
						<li>
							<p>강원권</p>
							<div class="inner_tb">
								<div class="board_wrap">
									<table cellspacing="0" cellpadding="0" class="board_common" summary="강원권 테이블로 상차지, 하차지, 품목, 차종, 톤수, 운임요금, 남은시간의 항목으로 구성되어 있습니다.">
										<caption>강원권</caption>
										<colgroup>
										<col width="80" />
										<col width="110" />
										<col width="*" />
										<col width="255" />
										<col width="190" />
										<col width="105" />
										<col width="105" />
										<col width="105" />
										</colgroup>
										<thead>
										<tr>
											<th>의뢰상태</th>
											<th>남은시간</th>
											<th>상하차일시</th>
											<th>상차지</th>
											<th>하차지</th>
											<th>품목</th>
											<th>요청차량</th>
											<th>운송료</th>
										</tr>
										</thead>
										<tbody>
											<tr>
												<td>배차요청</td>
												<td>0일 02:52분</td>
												<td>11/12 16:00 ~ 11/13 09:00</td>
												<td class="title01">강원도 화천군 화천읍</td>
												<td class="title01">서울특별시 강서구</td>
												<td>식품류</td>
												<td>트렉터 30톤</td>
												<td>***,***원</td>
											</tr>
											<tr>
												<td>배차요청</td>
												<td>0일 02:51분</td>
												<td>11/12 16:00 ~ 11/13 09:00</td>
												<td class="title01">강원도 화천군 화천읍</td>
												<td class="title01">경남 창원시 성산동76번지</td>
												<td>식품류</td>
												<td>카고 2.5톤</td>
												<td>***,***원</td>
											</tr>
											<tr>
												<td>배차요청</td>
												<td>0일 02:51분</td>
												<td>11/12 16:00 ~ 11/13 09:00</td>
												<td class="title01">강원도 평창군 대관령면</td>
												<td class="title01">충남 천안시 동남구</td>
												<td>식품류</td>
												<td>카고 5톤</td>
												<td>***,***원</td>
											</tr>
											<tr>
												<td>배차요청</td>
												<td>0일 02:51분</td>
												<td>11/12 16:00 ~ 11/13 09:00</td>
												<td class="title01">강원도 화천군 화천읍</td>
												<td class="title01">경기 김포시</td>
												<td>식품류</td>
												<td>카고 5톤</td>
												<td>***,***원</td>
											</tr>
											<tr class="last">
												<td>배차요청</td>
												<td>0일 02:51분</td>
												<td>11/12 16:00 ~ 11/13 09:00</td>
												<td class="title01">강원도 평창군 대관령면</td>
												<td class="title01">충남 천안시 동남구</td>
												<td>식품류</td>
												<td>카고 11톤</td>
												<td>***,***원</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</li>
						<li>
							<p>호남권</p>
							<div class="inner_tb">
								<div class="board_wrap">
									<table cellspacing="0" cellpadding="0" class="board_common" summary="호남권 테이블로 상차지, 하차지, 품목, 차종, 톤수, 운임요금, 남은시간의 항목으로 구성되어 있습니다.">
										<caption>호남권</caption>
										<colgroup>
										<col width="80" />
										<col width="110" />
										<col width="*" />
										<col width="255" />
										<col width="190" />
										<col width="105" />
										<col width="105" />
										<col width="105" />
										</colgroup>
										<thead>
										<tr>
											<th>의뢰상태</th>
											<th>남은시간</th>
											<th>상하차일시</th>
											<th>상차지</th>
											<th>하차지</th>
											<th>품목</th>
											<th>요청차량</th>
											<th>운송료</th>
										</tr>
										</thead>
										<tbody>
											<tr clas="last">
												<td colspan="8">
													<div style="height:204px; line-height:204px; text-align:center;">데이터가 없습니다</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</li>
						<li>
							<p>영남권</p>
							<div class="inner_tb">
								<div class="board_wrap">
									<table cellspacing="0" cellpadding="0" class="board_common" summary="영남권 테이블로 상차지, 하차지, 품목, 차종, 톤수, 운임요금, 남은시간의 항목으로 구성되어 있습니다.">
										<caption>영남권</caption>
										<colgroup>
										<col width="80" />
										<col width="110" />
										<col width="*" />
										<col width="255" />
										<col width="190" />
										<col width="105" />
										<col width="105" />
										<col width="105" />
										</colgroup>
										<thead>
										<tr>
											<th>의뢰상태</th>
											<th>남은시간</th>
											<th>상하차일시</th>
											<th>상차지</th>
											<th>하차지</th>
											<th>품목</th>
											<th>요청차량</th>
											<th>운송료</th>
										</tr>
										</thead>
										<tbody>
											<tr clas="last">
												<td colspan="8">
													<div style="height:204px; line-height:204px; text-align:center;">데이터가 없습니다</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</li>
						<li class="last">
							<p>충청권</p>
							<div class="inner_tb">
								<div class="board_wrap">
									<table cellspacing="0" cellpadding="0" class="board_common" summary="충청권 테이블로 상차지, 하차지, 품목, 차종, 톤수, 운임요금, 남은시간의 항목으로 구성되어 있습니다.">
										<caption>충청권</caption>
										<colgroup>
										<col width="80" />
										<col width="110" />
										<col width="*" />
										<col width="255" />
										<col width="190" />
										<col width="105" />
										<col width="105" />
										<col width="105" />
										</colgroup>
										<thead>
										<tr>
											<th>의뢰상태</th>
											<th>남은시간</th>
											<th>상하차일시</th>
											<th>상차지</th>
											<th>하차지</th>
											<th>품목</th>
											<th>요청차량</th>
											<th>운송료</th>
										</tr>
										</thead>
										<tbody>
											<tr clas="last">
												<td colspan="8">
													<div style="height:204px; line-height:204px; text-align:center;">데이터가 없습니다</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</li>
					</ul>
				</div>
				//tab
			</div>

			<div class="btn_area">
				<a id="userInfo" href="javascript:fn_loginCheck();" class="btn01">더 많은 운송오더를 확인하세요</a>
			</div>
		</div>
	</div> -->
	<!-- //order -->

	<!-- service -->
	<div class="section" id="section2">
		<script src="../js/jquery.min.js"></script>
		<script src="../js/jquery.bxslider.min.js"></script>
		<div class="main_visual">
			<div class="box">
				<div class="sec2_top_area">
					<div class="inner_box">
						<div class="tit">BENEFITS</div>
						<div class="service_tab bt_control">
							<a href="#" data-slide-index="0" style="border-right:none;"><%= MessageUtil.getString("msg.web.0077", "화주") %></a>
							<a href="#" data-slide-index="1"><%= MessageUtil.getString("msg.web.0078", "차주") %></a>
						</div>
					</div>
				</div>
				<ul class="rolling">
					<li class="ct_01">
						<div class="sc2_wrap">
							<div class="sec2_tx_box">
								<div class="in_bx">
									<p class="tx_line">
										<%= MessageUtil.getString("msg.web.0046", "운송서비스가 필요하신가요?") %>
										<span class="line01"></span>
									</p>
									<dl>
										<dt><%= MessageUtil.getString("msg.web.0047", "01. 편리한 운송요청 및 결제") %></dt>
										<dd><%= MessageUtil.getString("msg.web.0048", "모바일APP과 전문화 된 고객시스템을 통해 <br/>편리하게 운송요청과 결제가 가능합니다.") %>
										</dd>
									</dl>
									<dl>
										<dt><%= MessageUtil.getString("msg.web.0049", "02. 전국 어디나 가능") %></dt>
										<dd><%= MessageUtil.getString("msg.web.0050", "CJ 대한통운의 전국 네트워크를 통해 <br/>전국 어디에나 차주분들이 대기하고 있습니다.") %>
										</dd>
									</dl>
									<dl>
										<dt><%= MessageUtil.getString("msg.web.0051", "03. 더욱 안전하고 정확한 운송") %></dt>
										<dd><%= MessageUtil.getString("msg.web.0052", "검증된 차주분들이 고객님의 화물을 운송하며, <br/>모바일 APP을 통해 운송상태를 알 수 있습니다.") %>
										</dd>
									</dl>
								</div>
							</div>
							<div class="inner_box"></div>
						</div>
					</li>
	    			<li class="ct_02">
	    				<div class="sc2_wrap">
		    				<div class="sec2_tx_box">
								<div class="in_bx">
									<p class="tx_line">
										<%= MessageUtil.getString("msg.web.0053", "더 많은 일감이 필요하세요?") %>
										<span class="line01"></span>
									</p>
									<dl>
										<dt><%= MessageUtil.getString("msg.web.0054", "01. 한 번의 터치로 운송요청") %></dt>
										<dd><%= MessageUtil.getString("msg.web.0055", "전용 모바일앱을 통해화물을 검색하고 <br/>한 번의 터치로 운송요청이 가능합니다.") %>
										</dd>
									</dl>
									<dl>
										<dt><%= MessageUtil.getString("msg.web.0056", "02. 신뢰의 CJ대한통운") %></dt>
										<dd><%= MessageUtil.getString("msg.web.0057", "Hello 화물정보망이 보증하는 투명한 결제시스템으로<br/>더 이상 운송료 분쟁이 없습니다.") %> 
										</dd>
									</dl>
									<dl>
										<dt><%= MessageUtil.getString("msg.web.0058", "03. 더 많은 일감, 더 많은 수익") %></dt>
										<dd><%= MessageUtil.getString("msg.web.0059", "원하는 지역, 금액을 직접 선택하여 운송할 수 있습니다. <br/>지금 바로 운송오더를 확인하세요.") %>
										</dd>
									</dl>
								</div>
							</div>
		    				<div class="inner_box"></div>
		    			</div>
	    			</li>
	    		</ul>
	    		<div class="control_wrap">
					<div class="btns_lr_n" id="btns_lr_n">
						<span class="slider-prev"></span>
						<div id="pager_n" class="pager_n bt_control">
							<a data-slide-index="0" href="">1</a>
							<a data-slide-index="1" href="">2</a>
						</div>
						<!-- <img src="../img/btn_stop.png" alt="" style="display:inline-block; margin-left:4px; vertical-align:top;" /> -->
						<span class="slider-next"></span>
					</div>
				</div>
	    	</div>
		</div>
		<script>
		$(function() {
			$('.main_visual .box .rolling').bxSlider({
				mode:'horizontal',
				auto: false,
				autoControls: false,
				pagerCustom: '.bt_control',
				nextSelector: '.slider-next',
				prevSelector: '.slider-prev'
			});
		});
		</script>

		<div id="move02"></div>
	</div>
	<!-- //service -->

	<!-- footer -->
	<div class="section fp-auto-height" id="section3" style="overflow:auto;/*background:url('../img/ft_common.png') no-repeat center top;*/">
		<%@ include file="../inc/footer.jsp" %>
	</div>
	<!-- //footer -->
</div>

<!-- 팝업 -->
<div id="pop_ty01" class="pop_wrap01">
	<div class="pop_opa"></div>
	<div class="main_pop_ty01">
		<div class="pop_tit_area">
			<p><%= MessageUtil.getString("msg.web.0045", "빠른 화물 등록") %></p>
			<a href="#" class="btn_pop_close" onClick="popClose('pop_ty01');"><img src="../img/btn_pop_close.png" alt="닫기" /></a>
		</div>
		<div class="pop_cont">
			<div class="board_wrap bg_line">
				<table cellspacing="0" cellpadding="0" class="board_join" summary=<%= MessageUtil.getString("msg.web.0060", "빠른 화물 등록 테이블로 고객명, 연락처, 상차일시, 화물정보의 항목으로 구성되어 있습니다.") %>>
					<caption><%= MessageUtil.getString("msg.web.0045", "빠른 화물 등록") %></caption>
					<colgroup>
					<col width="140" />
					<col width="*" />
					</colgroup>
					<thead>
						<th colspan="2"><span><%= MessageUtil.getString("msg.web.0061", "정보 입력") %></span></th>
					</thead>
					<tbody>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.0098", "고객명") %></th>
							<td>
								<input type="text" class="inp_ty01" style="width:250px;" tabindex="1" id="shprId"/>
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.web.0062", "연락처") %></th>
							<td>
								<input type="text" class="inp_ty02" style="width:100px;" maxlength="3" tabindex="2" id="phone1"/>
								<span class="line01">-</span>
								<input type="text" class="inp_ty02" style="width:100px;" maxlength="4" tabindex="3" id="phone2"/>
								<span class="line01">-</span>
								<input type="text" class="inp_ty02" style="width:100px;" maxlength="4" tabindex="4" id="phone3"/>
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.web.0063", "상차일시") %></th>
							<td>
								<!-- <input type="text" class="inp_ty01" style="width:140px;" disabled="disabled" id="calDate"/> -->
								<select class="sel_ty01" style="width:140px;" id="calDate">
								</select>
								<!-- <a href="javascript:calDate();" class="btn_cal"><img src="../img/icon_cal.png" alt="달력" /></a> -->
								<select class="sel_ty01" style="width:90px; margin-left:12px;" id="calTime">
									<option>01</option>
									<option>02</option>
									<option>03</option>
									<option>04</option>
									<option>05</option>
									<option>06</option>
									<option>07</option>
									<option>08</option>
									<option>09</option>
									<option>10</option>
									<option>11</option>
									<option>12</option>
									<option>13</option>
									<option>14</option>
									<option>15</option>
									<option>16</option>
									<option>17</option>
									<option>18</option>
									<option>19</option>
									<option>20</option>
									<option>21</option>
									<option>22</option>
									<option>23</option>
									<option>24</option>
								</select>
								<span class="line01">:</span>
								<select class="sel_ty01" style="width:90px; margin-left:12px;" id="calMinute">
									<option>00</option>
									<option>30</option>
								</select>
							</td>
						</tr>
						<tr>
							<th valign="top"><%= MessageUtil.getString("msg.web.0064", "화물정보") %></th>
							<td>
								<textarea class="txa_pop01" id="contents">
									<%= MessageUtil.getString("msg.web.0065", "1. 하차일시 :") %>
									<%= MessageUtil.getString("msg.web.0066", "2. 상 차 지 :") %> 
									<%= MessageUtil.getString("msg.web.0067", "3. 하 차 지 :") %> 
									<%= MessageUtil.getString("msg.web.0068", "4. 품    목 :") %> 
									<%= MessageUtil.getString("msg.web.0069", "5. 중    량 :") %> 
									<%= MessageUtil.getString("msg.web.0070", "6. 요청차종 :") %> 
									<%= MessageUtil.getString("msg.web.0071", "7. 요청톤급 :") %> 
								</textarea>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="btm_btns center">
				<a href="javascript:sendData();" class="btn_next01"><%= MessageUtil.getString("msg.web.0072", "화물등록") %></a>
			</div>
		</div>
	</div>
</div>
<!-- //팝업 -->

<!-- 공통팝업 -->
<div id="noticePop"></div>
<!-- //공통팝업 -->


<script type="text/javascript" src="../dist/fullpage.js"></script>
<script type="text/javascript" src="../js/examples.js"></script>
<script type="text/javascript" src="../js/sys/func.js"></script>

<script type="text/javascript">
    $(document).ready(function () {
		$('#fullpage').fullpage({
		verticalCentered: true,
        sectionsColor: ['#000000', '#ffffff', '#ffffff', '#ffffff'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['MAIN', 'ORDER', 'SERVICE', ''],
        showActiveTooltip: true,
		})
		
		noticeCall();
	})
	
	//
	//--------------빠른화물------------------- 
	function sendData() {
		//
		var shprId		= $("#shprId").val();
		var phone1		= $("#phone1").val();
		var phone2		= $("#phone2").val();
		var phone3		= $("#phone3").val();
		var calDate		= $("#calDate option:selected").val();
		var calTime		= $("#calTime option:selected").val();
		var calMinute	= $("#calMinute option:selected").val();
		var contents	= $("#contents").val();
		//
		if(isNull(shprId)){
			alert('<%= MessageUtil.getString("msg.web.0073", "고객명을 입력해주십시오.") %>');
			return;
		}
		//
		if(isNull(phone1) || isNull(phone2) || isNull(phone3) ){
			alert('<%= MessageUtil.getString("msg.web.0074", "연락처를 빠짐없이 입력해주십시오.") %>');
			return;
		}
		//
		if(isNull(contents)){
			alert('<%= MessageUtil.getString("msg.web.0075", "화물정보를 입력해주십시오.") %>');
			return;
		}
		//encodeURIComponent
		var json = {
				head			: "sendData",
				shprId			: shprId,
				phone1			: phone1,		
				phone2			: phone2,
				phone3			: phone3,
				calDate			: calDate,
				calTime			: calTime,
				calMinute		: calMinute,
				contents		: contents,
				type 			: "main"
		}
		//
		fn_sendDataCall(json);
	}
	//
	//-------------오늘날짜 및 내일 날짜 가져오기----------------
	function calDate() {
		//
		var toDay 	= new Date();
		var yyyy	= toDay.getFullYear();
		var mm		= toDay.getMonth() + 1;
			mm		= mm < 10 ? "0"+mm : mm ;
		var dd		= toDay.getDate();
			dd		= dd < 10 ? "0"+dd : dd ;
		//
		var fromDay		= new Date(toDay.getFullYear(),toDay.getMonth(),toDay.getDate() + 1);
		var form_yyyy	= fromDay.getFullYear();
		var form_mm		= fromDay.getMonth() + 1;
			form_mm		= form_mm < 10 ? "0"+form_mm : form_mm;	
		var form_dd		= fromDay.getDate();
			form_dd		= form_dd < 10 ? "0"+form_dd : form_dd; 
		//
		var toDate		= yyyy+"-"+mm+"-"+dd;
		var formDate	= form_yyyy+"-"+form_mm+"-"+form_dd;
		//
		$('#calDate').append("<option>"+toDate+"</option>");
		$('#calDate').append("<option>"+formDate+"</option>");
		//
	}
	//
	//------------------- 공지사항 요청 ------------------
	function noticeCall() {
		//
		//encodeURIComponent
		var json = {
				head			: "notice",
				type 			: "main"
		}
		//
		fn_noticeCall(json);
		//
	}
	//---------------- 팝업 화면 호출 ---------------------
	function fn_noticePop(json){
		//
		var autoSeq		= json.autoSeq;
		var subSeq		= "";
		var count		= json.count;
		var subject		= json.popSubject;
		var contents	= json.contents;
		var fileNm		= json.fileNm;
		var cookieChk	= "";
		//
		if(count > 0){
			//
			subSeq	= autoSeq.split(',');
			//
			for(var i in subSeq){
				//
				cookieChk	=	getCookie(subSeq[i]);
				//
				if(isNull(cookieChk)){
					//
					$.ajax({
						
						 type	: "POST"
						,url	: "noticePop.jsp"
						,data	: {	  type		: i
									, seqNo 	: subSeq[i]
									, subject	: subject[i]
									, contents	: contents[i]
									, fileNm	: fileNm[i]
								  }
						,dataType : "html"
						,error : function(){
							alert("실패");
						 }
						,success : function(data){
							$("#noticePop").append(data) ;
						 }
					});
					//
				}
				//
			}
			//
		}
		//
	}
	//
</script>

<script>
$(document).ready(function(){
	
	$(".tab_ty01 li p").click(function(){
		$(".inner_tb").css("display", "none");
		$(".tab_ty01 li").removeClass("active");
		$(this).parent().addClass("active");
		$(this).parent().find(".inner_tb").css("display", "block");
	});

	$(".tab_area li.a_right a").click(function(){
		$("li.a_right").removeClass("off");
		$("li.a_right").addClass("on");
		$("li.a_left").removeClass("on");
		$("li.a_left").addClass("off");
	});
	$(".tab_area li.a_left a").click(function(){
		$("li.a_left").removeClass("off");
		$("li.a_left").addClass("on");
		$("li.a_right").removeClass("on");
		$("li.a_right").addClass("off");
	});

});
</script>

</body>
</html>