<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>

<%
	String url		   = request.getRequestURI();
	String ssoId	   = (String)request.getAttribute("SSO_ID");
	String menuId	   = (String)request.getAttribute("MENU_ID");
	
	if(ssoId == null) {
		ssoId = "";
	}
	
	if(menuId == null) {
		menuId = "";
	}
%>

<html>
<head>
<link rel="shortcut icon" href="#">

<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.11.3.min.js"></script>
<script language="javascript">
	$( document ).ready(function() {
		fn_onload();
	});

	function fn_onload()
	{
		var url = "<%=url%>";
		var checkUrl = url.substring(url.lastIndexOf("/") + 1);
		var pageUrl = "${pageContext.request.contextPath}/gwds/index.jsp";

		if (checkUrl == "runtime") 
		{
			//pageUrl = "${pageContext.request.contextPath}/install/newLauncher.jsp";		
			//window.location.href = "./install/newLauncher.html?userId=12080601&ipAddr=127.18.0.1";
		}
		else
		{
			$("#ssoId").val("<%=ssoId%>");
			$("#menuId").val("<%=menuId%>");
			//pageUrl = "${pageContext.request.contextPath}/gwds/index_w.jsp";	
			//window.location.href = "./nkfr/index.html;
		}
		
		$("#form").attr("action", pageUrl);
		$("#form").submit();
		
		
	}
	
	
	
</script>

</head>
<body>
	<form id="form" action="" method="post">
		<input id="ssoId" type="hidden"  name="SSO_ID" value="">
		<input id="menuId" type="hidden"  name="MENU_ID" value="">
	</form>
</body>
</html>