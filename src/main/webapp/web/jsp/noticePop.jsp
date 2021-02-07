<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
 	String	type	= request.getParameter("type") ;
	String	autoSeq	= request.getParameter("seqNo") ;
	String	id		= "";
	String	style	= "";
	String	chkId	= "";
	//
	if(type.equals("0")){
		id 		= "pop_common01";
		style	= "position:absolute; top:20px; left:30px;";
		chkId 	= "chk_pop_common01";
	}else if(type.equals("1")){
		id		= "pop_common02";
		style	= "position:absolute; top:20px; left:650px; margin:120px 0 0 0; z-index:1000;";
		chkId 	= "chk_pop_common02";
	}else if(type.equals("2")){
		id		= "pop_common03";
		style	= "position:absolute; top:20px; left:1270px; margin:120px 0 0 0; z-index:1000;";
		chkId 	= "chk_pop_common03";
	}
%>
<div class="main_pop_ty02" id="<%=id %>" style="<%=style %>">
	<div class="pop_tit_area">
		<p>공지사항</p>
		<a href="#" class="btn_pop_close" onClick="popClose('<%=id %>');"><img src="../img/btn_pop_close.png" alt="닫기" /></a>
	</div>
	<div class="pop_cont">
		<div class="board_wrap bg_line">
			<table cellspacing="0" cellpadding="0" class="board_join" summary="공지사항 테이블로 제목, 내용의 항목으로 구성되어 있습니다.">
				<caption>공지사항</caption>
				<colgroup>
				<col width="140" />
				<col width="*" />
				</colgroup>
				<tbody>
					<tr>
						<th valign="top">제목</th>
						<td><%=request.getParameter("subject") %></td>
					</tr>
					<tr>
						<th valign="top">내용</th>
						<td>
							<div style="height:158px; line-height:24px; padding:10px 0; overflow-y:scroll;"><%=request.getParameter("contents") %></div>
						</td>
					</tr>
					<tr>
						<th valign="top">첨부파일</th>
						<td><%
								String fileNm = request.getParameter("fileNm");
								if(fileNm !=null){
							%>
								<a href="#" onClick="popClose('<%=id %>');"><%=request.getParameter("fileNm") %></a>
							<%
								}
							%>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<div class="btm_btns center">
			<a href="#" class="btn_next01" onClick="popClose('<%=id %>');">닫기</a>
		</div>

		<div style="height:30px;">
			<span class="input_chk">
				<input type="checkbox"	id="<%=chkId %>"	name=""/>
				<label for="<%=chkId %>" class="">오늘 하루 보지 않음</label>
			</span>
		</div>
		<input type="hidden"	id="seqNo_<%=id%>"  value="<%=autoSeq%>"/>
	</div>
</div>
