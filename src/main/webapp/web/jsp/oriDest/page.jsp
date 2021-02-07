<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style>
        /* CSS는 여기에 */
    </style>
    <script type="text/javascript">
		var CONTEXT_PATH = "${pageContext.request.contextPath}";
	</script>
	<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/web/jsp/oriDest/css/style.css" />
	<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/oriDest/js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="${pageContext.request.contextPath}/web/jsp/oriDest/js/d3.v3.js"></script>
</head>
<body>
    <div class="menu">
	    <button onClick="fnSearch1();" title="상차지[서울](상차,하차),하차지[부산](하차)">조회</button>
	    <button onClick="fnSearch2();" title="상차지[서울](상차), 하차지[부산](상차,하차)">조회</button>
	    <button onClick="fnSearch3();" title="상차지[서울](상차), 하차지[전체]">조회</button>
	    <button onClick="fnSearch4();" title="상차지[전체], 하차지[전체]">조회</button>
	  </div>
    <div id="contianer" class="container"></div>
    <script src="${pageContext.request.contextPath}/web/jsp/oriDest/js/oriDest.js"></script>
</body>
</html>