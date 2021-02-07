<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="moonsoft.common.util.MessageUtil"%>

<script language="JavaScript" type="text/javascript">
		$( document ).ready(function() {
			if(gv_langCd != "ko") {
				$('#ft06').hide();
				$('#ft02').hide();
				$('#ft04').hide();
			}
		});
</script>
<div class="footer myContent"><!-- 서브페이지 경우 클래스 sub 추가 되어야 함 -->
	<div class="ft_menu">
		<div class="inner_box">
			<ul>
				<li><a href="https://www.cjlogistics.com/ko/main" target="_blank" style="color:#006ecd;"><%= MessageUtil.getString("msg.web.0008", "CJ대한통운") %></a></li>
				<li id="ft06"><a href="ft06.jsp"><%= MessageUtil.getString("msg.web.0009", "개인정보처리방침") %></a></li>
				<li id="ft02"><a href="ft02.jsp"><%= MessageUtil.getString("msg.web.0010", "법적고지") %></a></li>
				<li id="ft03"><a href="ft03.jsp"><%= MessageUtil.getString("msg.web.0011", "이용약관") %></a></li>
				<li id="ft04"><a href="ft04.jsp"><%= MessageUtil.getString("msg.web.0012", "이메일 무단수집거부") %></a></li>
				<li class="last"><a href="ft05.jsp"><%= MessageUtil.getString("msg.web.0013", "위치기반 서비스 이용약관") %></a></li>
			</ul>
			<div class="sel_group box-familySite">
				<a href="javascript:void(0);" class="btn_family"><%= MessageUtil.getString("msg.web.0014", "그룹 계열사 바로가기") %><span class="icon"></span></a>
				<div class="list-family">
					<ul>
						<li>
							<span class="tt-1"><%= MessageUtil.getString("msg.web.0015", "CJ그룹") %></span>
							<ul>
								<li><a href="http://www.cj.net/" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0016", "CJ주식회사") %></a></li>
							</ul>
						</li>
						<li>
							<span class="tt-1"><%= MessageUtil.getString("msg.web.0017", "식품&amp;식품 서비스") %></span>
							<ul>
								<li><a href="http://www.cj.co.kr/cj-kr/" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0018", "CJ제일제당(식품)") %></a></li>
								<li><a href="http://www.cjfreshway.com" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0019", "CJ프레시웨이") %></a></li>
								<li><a href="https://www.cjfoodville.co.kr" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0020", "CJ푸드빌") %></a></li>
								<li><a href="http://www.md1.co.kr" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0021", "CJ엠디원") %></a></li>
							</ul>
						</li>
					
						<li>
							<span class="tt-1"><%= MessageUtil.getString("msg.web.0022", "생명공학") %></span>
							<ul>
								<li><a href="http://www.cj.co.kr/cj-kr/businesses/4/main" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0023", "CJ제일제당(바이오)") %></a></li>
							</ul>
						</li>
					
						<li>
							<span class="tt-1"><%= MessageUtil.getString("msg.web.0024", "신유통") %></span>
							<ul>
								<li><a href="http://www.cjoshopping.com" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0025", "CJ ENM(오쇼핑)") %></a></li>
								<li><a href="http://www.cjlogistics.com/ko/main" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0008", "CJ대한통운") %></a></li>
								<li><a href="http://www.cjtelenix.com" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0027", "CJ텔레닉스") %></a></li>
								<li><a href="http://www.oliveyoung.co.kr/store/main/main.do" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0028", "CJ올리브네트웍스(올리브영)") %></a></li>
							</ul>
						</li>
					
						<li>
							<span class="tt-1"><%= MessageUtil.getString("msg.web.0029", "엔터테인먼트&amp;미디어") %></span>
							<ul>
								<li><a href="http://www.cjenm.com" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0030", "CJ ENM(E&amp;M)") %></a></li>
								<li><a href="http://www.cgv.co.kr" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0031", "CJ CGV") %></a></li>
								<li><a href="http://www.cjhello.com" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0032", "CJ Hello") %></a></li>
								<li><a href="http://www.cjpowercast.com" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0033", "CJ파워캐스트") %></a></li>
							</ul>
						</li>
						<li>
							<span class="tt-1"><%= MessageUtil.getString("msg.web.0034", "인프라") %></span>
							<ul>
								<li><a href="http://www.cjenc.co.kr" target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0035", "CJ대한통운(건설)") %></a></li>
								<li><a href="http://www.cjolivenetworks.co.kr/itbusiness/ " target="_blank" title="새창"><%= MessageUtil.getString("msg.web.0036", "CJ올리브네트웍스(IT사업)") %></a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<div class="ft_btm">
		<div class="inner_box">
			<p class="ft_logo"><img src="../img/ft_logo.png" alt="" /></p>
			<p class="ft_info">
				<%= MessageUtil.getString("msg.web.0037") %><br/>
				<%= MessageUtil.getString("msg.web.0038") %>
			</p>
			<p class="ft_copyright">COPYRIGHT 2017 BY CJ Logistics Corporation ALL RIGHT RESERVED.</p>
		</div>
	</div>
</div>