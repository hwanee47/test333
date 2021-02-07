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
			<dt><%= MessageUtil.getString("msg.web.0082", "대한통운 화물정보망") %></dt>
			<dd><%= MessageUtil.getString("msg.web.0083", "CJ대한통운 화물정보망의 첨단 물류 IT 시스템으로 차별화된 물류 서비스를 경험하실 수있습니다.") %> </dd>
		</dl>
	</div>
</div>
<!-- //sub visual -->

<!-- container -->
<div class="container">
	<!-- content -->
	<div class="content">
		<h2 class="s_tit"><%= MessageUtil.getString("msg.web.0091", "회원가입 안내") %></h2>

		<div class="sub_inner_ty01">
			<!-- tab-->
			<div class="tab_join01">
				<ul>
					<li><a href="javascript:void(0);" class="tb_01 on"><%= MessageUtil.getString("msg.web.0077", "화주") %></a></li>
					<li><a href="javascript:void(0);" class="tb_02"><%= MessageUtil.getString("msg.web.0092", "주선가맹점") %></a></li>
					<li><a href="javascript:void(0);" class="tb_03"><%= MessageUtil.getString("msg.web.0093", "운송가맹점") %></a></li>
					<li class="last"><a href="javascript:void(0);" class="tb_04"><%= MessageUtil.getString("msg.web.0078", "차주") %></a></li>
				</ul>
			</div>
			<!-- //tab-->

			<div class="step_box step00">
				<ul>
					<li class="line1"><%= MessageUtil.getString("msg.web.0094", "가입신청 및 전화상담") %></li>
					<li><%= MessageUtil.getString("msg.web.0095", "가입 구비서류 FAX<br/>또는 우편 제출") %></li>
					<li><%= MessageUtil.getString("msg.web.0096", "가입승인 및<br/>서류 보완 요청") %></li>
					<li><%= MessageUtil.getString("msg.web.0097", "가입완료 후<br/>CJ대한통운 화물정보망 이용") %></li>
				</ul>
			</div>

			<div class="join_cont01 type01">
				<ul>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0098", "CJ대한통운 화물정보망 홈페이지<br/>에서 고객/가맹점 가입 신청을 통한<br/>화주 고객 신청이 가능합니다.") %>
							</div>
							<div class="bx_bt01">
								<a href="join02_01.jsp?join_type=T02" class="btn_goto"><%= MessageUtil.getString("msg.web.0099", "회원가입 바로가기") %><span class="line"></span></a>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0100", "구비 서류를 FAX, 우편, 이메일<br/>(스캔파일) 중 원하시는 방법으로<br/>제출하시면 됩니다") %>
							</div>
							<div class="bx_tx02">
								<p><span class="tx_blue">*</span><%= MessageUtil.getString("msg.web.0101", "구비서류") %> </p>
								<%= MessageUtil.getString("msg.web.0102", "1. 가입신청서") %><a href="#" class="btn_down"><%= MessageUtil.getString("msg.web.0103", "다운로드") %><span class="line"></span></a><br/>
								<%= MessageUtil.getString("msg.web.0104", "2. 사업자등록증") %>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0105", "제출하신 서류를 최대한 빠른 시간에<br/>확인을 하며, 가입승인을 합니다.<br/><br/>제출하신 서류 중, 확인이 안되거나<br/>보완해야 할 서류가 있다면 담당자가<br/>연락을 드릴 수 있습니다.") %>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0106", "이용 시, 건의/문의 사항은 언제든지") %><br/>
								
								<span class="tx_blue"><%= MessageUtil.getString("msg.web.0107", "화물정보센터") %> 1855-1234</span>
								<%= MessageUtil.getString("msg.web.0108", "을 통하여<br/>문의하여 주시기 바랍니다") %>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<div class="join_cont01 type02" style="display:none;">
				<ul>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0109", "CJ대한통운 화물정보망 홈페이지<br/>에서 고객/가맹점 가입 신청을 통한<br/>주선가맹점 고객 신청이 가능합니다.") %>
							</div>
							<div class="bx_bt01">
								<a href="join02_01.jsp?join_type=T01" class="btn_goto"><%= MessageUtil.getString("msg.web.0099", "회원가입 바로가기") %><span class="line"></span></a>
							</div>
							<div class="bx_tx01" style="margin-top:25px;">
								<%= MessageUtil.getString("msg.web.0110", "가까운 CJ대한통운 지점이나<br/>화물정보센터 전화를 통하여도 가입이<br/>가능합니다.") %><br/><br/>
								<span class="tx_blue"><%= MessageUtil.getString("msg.web.0107", "화물정보센터") %> : 1855-1234</span>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0100", "구비 서류를 FAX, 우편, 이메일<br/>(스캔파일) 중 원하시는 방법으로<br/>제출하시면 됩니다") %>
							</div>
							<div class="bx_tx02">
								<p><span class="tx_blue">*</span><%= MessageUtil.getString("msg.web.0101", "구비서류") %> </p>
								<%= MessageUtil.getString("msg.web.0102", "1. 가입신청서") %><a href="#" class="btn_down"><%= MessageUtil.getString("msg.web.0103", "다운로드") %><span class="line"></span></a><br/>
								<%= MessageUtil.getString("msg.web.0104", "2. 사업자등록증") %><br/>
								<%= MessageUtil.getString("msg.web.0111", "3. 주선사업허가증") %><br/>
								<%= MessageUtil.getString("msg.web.0112", "4. 적재물보험가입증") %>
							</div>
							<div class="bx_tx01" style="margin-top:15px;">
								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0113", "제출방법") %></span><br/>
								<%= MessageUtil.getString("msg.web.0114", "FAX, 우편 또는 메일(스캔파일) 제출") %><br/>

								<span class="in_s_ti">주소</span><br/>
								<%= MessageUtil.getString("msg.web.0115", "서울특별시 중구 세종대로 9길 53<br/>(서소문동, 대한통운빌딩)<br/>CJ대한통운 3층<br/>HELLO 화물정보망사업 담당자 앞") %><br/>

								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0116", "팩스") %></span><br/>
								02-771-9258<br/>

								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0117", "이메일") %></span><br/>
								QQQ@SDF.COM
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0105", "제출하신 서류를 최대한 빠른 시간에<br/>확인을 하며, 가입승인을 합니다.<br/><br/>제출하신 서류 중, 확인이 안되거나<br/>보완해야 할 서류가 있다면 담당자가<br/>연락을 드릴 수 있습니다.") %>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0106", "이용 시, 건의/문의 사항은 언제든지") %><br/>
								<span class="tx_blue"><%= MessageUtil.getString("msg.web.0107", "화물정보센터") %> 1855-1234</span>
								<%= MessageUtil.getString("msg.web.0108", "을 통하여<br/>문의하여 주시기 바랍니다") %>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<div class="join_cont01 type03" style="display:none;">
				<ul>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0118", "CJ대한통운 화물정보망 홈페이지<br/>에서 고객/가맹점 가입 신청을 통한<br/>운송가맹점 고객 신청이 가능합니다.") %>
							</div>
							<div class="bx_bt01">
								<a href="join02_01.jsp?join_type=T04" class="btn_goto"><%= MessageUtil.getString("msg.web.0099", "회원가입 바로가기") %><span class="line"></span></a>
							</div>
							<div class="bx_tx01" style="margin-top:25px;">
								<%= MessageUtil.getString("msg.web.0110", "가까운 CJ대한통운 지점이나<br/>화물정보센터 전화를 통하여도 가입이<br/>가능합니다.") %><br/><br/>
								<span class="tx_blue"><%= MessageUtil.getString("msg.web.0107", "화물정보센터") %> : 1855-1234</span>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0100", "구비 서류를 FAX, 우편, 이메일<br/>(스캔파일) 중 원하시는 방법으로<br/>제출하시면 됩니다") %>
								
							</div>
							<div class="bx_tx02">
								<p><span class="tx_blue">*</span> <%= MessageUtil.getString("msg.web.0101", "구비서류") %></p>
								<%= MessageUtil.getString("msg.web.0102", "1. 가입신청서") %><a href="#" class="btn_down"><%= MessageUtil.getString("msg.web.0103", "다운로드") %><span class="line"></span></a><br/>
								<%= MessageUtil.getString("msg.web.0104", "2. 사업자등록증") %><br/>
								<%= MessageUtil.getString("msg.web.0119", "3. 운전면허증") %><br/>
								<%= MessageUtil.getString("msg.web.0120", "4. 자동차등록증") %><br/>
								<%= MessageUtil.getString("msg.web.0121", "5. 적재물보험가입증") %><br/>
								<%= MessageUtil.getString("msg.web.0122", "6. 통장사본") %>
							</div>
							<div class="bx_tx01" style="margin-top:15px;">
								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0113", "제출방법") %></span><br/>
								<%= MessageUtil.getString("msg.web.0114", "FAX, 우편 또는 메일(스캔파일) 제출") %><br/>

								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0123", "주소") %></span><br/>
								<%= MessageUtil.getString("msg.web.0115", "서울특별시 중구 세종대로 9길 53<br/>(서소문동, 대한통운빌딩)<br/>CJ대한통운 3층<br/>HELLO 화물정보망사업 담당자 앞") %>
								<br/>

								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0116", "팩스") %></span><br/>
								02-771-9258<br/>

								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0117", "이메일") %></span><br/>
								QQQ@SDF.COM
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0105", "제출하신 서류를 최대한 빠른 시간에<br/>확인을 하며, 가입승인을 합니다.<br/><br/>제출하신 서류 중, 확인이 안되거나<br/>보완해야 할 서류가 있다면 담당자가<br/>연락을 드릴 수 있습니다.") %>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0106", "이용 시, 건의/문의 사항은 언제든지") %><br/>
								<span class="tx_blue"><%= MessageUtil.getString("msg.web.0107", "화물정보센터") %> 1855-1234</span>
								<%= MessageUtil.getString("msg.web.0108", "을 통하여<br/>문의하여 주시기 바랍니다") %>
							</div>
						</div>
					</li>
				</ul>
			</div>

			<div class="join_cont01 type04" style="display:none;">
				<ul>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0124", "CJ대한통운 화물정보망 홈페이지<br/>에서 고객/가맹점 가입 신청을 통한<br/>차주 고객 신청이 가능합니다.") %>
							</div>
							<div class="bx_bt01">
								<a href="join02_01.jsp?join_type=T05" class="btn_goto"><%= MessageUtil.getString("msg.web.0099", "회원가입 바로가기") %><span class="line"></span></a>
							</div>
							<div class="bx_tx01" style="margin-top:25px;">
								<%= MessageUtil.getString("msg.web.0110", "가까운 CJ대한통운 지점이나<br/>화물정보센터 전화를 통하여도 가입이<br/>가능합니다.") %>
								<br/><br/>
								<span class="tx_blue"><%= MessageUtil.getString("msg.web.0107", "화물정보센터") %> : 1855-1234</span>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0100", "구비 서류를 FAX, 우편, 이메일<br/>(스캔파일) 중 원하시는 방법으로<br/>제출하시면 됩니다") %>
							</div>
							<div class="bx_tx02">
								<p><span class="tx_blue">*</span> <%= MessageUtil.getString("msg.web.0101", "구비서류") %></p>
								<%= MessageUtil.getString("msg.web.0102", "1. 가입신청서") %><a href="#" class="btn_down"><%= MessageUtil.getString("msg.web.0103", "다운로드") %><span class="line"></span></a><br/>
								<%= MessageUtil.getString("msg.web.0104", "2. 사업자등록증") %><br/>
								<%= MessageUtil.getString("msg.web.0119", "3. 운전면허증") %><br/>
								<%= MessageUtil.getString("msg.web.0125", "4. 화물운송종사자격증") %><br/>
								<%= MessageUtil.getString("msg.web.0126", "5. 자동차등록증") %><br/>
								<%= MessageUtil.getString("msg.web.0127", "6. 적재물보험가입증") %><br/>
								<%= MessageUtil.getString("msg.web.0128", "7. 통장사본") %>
							</div>
							<div class="bx_tx01" style="margin-top:15px;">
								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0113", "제출방법") %></span><br/>
								<%= MessageUtil.getString("msg.web.0114", "FAX, 우편 또는 메일(스캔파일) 제출") %><br/>

								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0123", "주소") %></span><br/>
								<%= MessageUtil.getString("msg.web.0115", "서울특별시 중구 세종대로 9길 53<br/>(서소문동, 대한통운빌딩)<br/>CJ대한통운 3층<br/>HELLO 화물정보망사업 담당자 앞") %>
								<br/>

								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0116", "팩스") %></span><br/>
								02-771-9258<br/>

								<span class="in_s_ti"><%= MessageUtil.getString("msg.web.0117", "이메일") %></span><br/>
								QQQ@SDF.COM
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0105", "제출하신 서류를 최대한 빠른 시간에<br/>확인을 하며, 가입승인을 합니다.<br/><br/>제출하신 서류 중, 확인이 안되거나<br/>보완해야 할 서류가 있다면 담당자가<br/>연락을 드릴 수 있습니다.") %>
							</div>
						</div>
					</li>
					<li>
						<div class="in_bx">
							<div class="bx_tx01">
								<%= MessageUtil.getString("msg.web.0106", "이용 시, 건의/문의 사항은 언제든지") %><br/>
								<span class="tx_blue"><%= MessageUtil.getString("msg.web.0107", "화물정보센터") %> 1855-1234</span>
								<%= MessageUtil.getString("msg.web.0108", "을 통하여<br/>문의하여 주시기 바랍니다") %>
							</div>
						</div>
					</li>
				</ul>
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