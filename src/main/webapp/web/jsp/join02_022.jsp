<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

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

<script type="text/javascript" src="../js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="../js/common.js"></script>

</head>
<body>

<!-- header -->
<%@ include file="../inc/header.jsp" %>
<!-- //header -->

<!-- sub visual -->
<div class="sub_vis_wrap s_vis04">
	<div class="inner_box">
		<dl>
			<dt>대한통운 화물정보망</dt>
			<dd>CJ대한통운 화물정보망의 첨단 물류 IT 시스템으로 차별화된 물류 서비스를 경험하실 수있습니다. </dd>
		</dl>
	</div>
</div>
<!-- //sub visual -->

<!-- container -->
<div class="container">
	<!-- content -->
	<div class="content">
		<h2 class="s_tit"><span style="color:#027ac4;">차주</span> 회원가입</h2><!-- 차주 일 경우 <span style="color:#027ac4;">차주</span> -->

		<div class="sub_inner_ty01">
			<p class="tb_top_tx01"><span>*</span>  표시는 필수 입력 항목입니다.</p>
			<div class="board_wrap bg_line">
				<table cellspacing="0" cellpadding="0" class="board_join" summary="정보입력 테이블로 이전글, 다음글의 항목으로 구성되어 있습니다.">
					<caption>정보입력</caption>
					<colgroup>
					<col width="180" />
					<col width="*" />
					</colgroup>
					<thead>
						<th colspan="2"><span>회원정보 입력</span><!--  - 화주 --></th>
					</thead>
					<tbody>
						<tr>
							<th valign="top">아이디 <span class="imp">*</span></th>
							<td>
								<input type="text" class="inp_ty01" />
								<a href="#" class="btn_dupi">아이디 중복확인</a>
							</td>
						</tr>
						<tr>
							<th valign="top" style="line-height:22px; padding:4px 0 0 30px;">비밀번호 <span class="imp">*</span></th>
							<td>
								<p class="tx01">특수문자/숫자조합 8자리 이상</p>
								<input type="text" class="inp_ty01" />
							</td>
						</tr>
						<tr>
							<th valign="top">비밀번호 확인 <span class="imp">*</span></th>
							<td>
								<input type="text" class="inp_ty01" />
							</td>
						</tr>
						<tr>
							<th valign="top">이름 <span class="imp">*</span></th>
							<td>
								<input type="text" class="inp_ty01" />
							</td>
						</tr>
						<tr>
							<th valign="top">휴대전화 <span class="imp">*</span></th>
							<td>
								<select class="sel_ty01">
									<option></option>
								</select>
								<span class="line01">-</span>
								<input type="text" class="inp_ty02" />
								<span class="line01">-</span>
								<input type="text" class="inp_ty02" />
								<a href="#" class="btn_phone">휴대폰 인증</a>
							</td>
						</tr>
						<tr>
							<th valign="top">담당자 이메일</th>
							<td>
								<input type="text" class="inp_ty03" />
								<span class="line02">@</span>
								<select class="sel_ty02">
									<option></option>
								</select>
								<input type="text" class="inp_ty04" />
								<p class="tx02">세금계산서 발행, 문의 응답 회신 등을 위한 정확한 이메일을 기재해 주시기 바랍니다.</p>
							</td>
						</tr>
						<tr>
							<th valign="top">차량번호 <span class="imp">*</span></th>
							<td>
								<input type="text" class="inp_ty01" />
								<a href="#" class="btn_dupi">차량번호 중복확인</a>
							</td>
						</tr>
						<tr>
							<th valign="top">차량종류 <span class="imp">*</span></th>
							<td>
								<select class="sel_ty02">
									<option></option>
								</select>
							</td>
						</tr>
						<tr>
							<th valign="top">차량톤급 <span class="imp">*</span></th>
							<td>
								<select class="sel_ty02">
									<option></option>
								</select>
							</td>
						</tr>
						<tr>
							<th valign="top">원소속 여부 <span class="imp">*</span></th>
							<td>
								<select class="sel_ty02" style="width:70px;">
									<option>N</option>
								</select>
							</td>
						</tr>
						<tr>
							<th valign="top">가맹점 용차정보</th>
							<td>
								<span style="float:left; padding-right:10px;">차량구분</span>
								<select class="sel_ty02" style="margin-right:30px;">
									<option>N</option>
								</select>
								<span style="float:left; padding-right:10px;">직영/위수탁</span>
								<select class="sel_ty02">
									<option>N</option>
								</select>
							</td>
						</tr>
						<tr>
							<th valign="top">원소속명</th>
							<td>
								<input type="text" class="inp_ty01" />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="btm_btns center">
				<a href="join02_03.jsp" class="btn_next01">다음</a>
			</div>
		</div>
	</div>
	<!-- //content -->
</div>
<!-- //container -->


<!-- footer -->
<%@ include file="../inc/footer.jsp" %>
<!-- //footer -->

</body>
</html>