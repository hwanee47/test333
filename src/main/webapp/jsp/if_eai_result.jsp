<%@ page contentType="text/xml;charset=utf-8"	%>
<%@ page import="moonsoft.common.vo.KilsWsEaiData" %>
<%@ page import="java.io.UnsupportedEncodingException" %><% 
	KilsWsEaiData retData = (KilsWsEaiData) request.getAttribute("retData");
	String sMsg = retData.getMessage();
%><?xml version="1.0" encoding="utf-8"?><Http_Reponse>
    <INTERFACE_NAME><%=retData.getInterfaceName() %></INTERFACE_NAME>
    <MODULE_NAME><%=retData.getModuleName() %></MODULE_NAME>
    <INSTANCE_ID><%=retData.getInstanceId() %></INSTANCE_ID>
    <STATUS><%=retData.getStatus() %></STATUS>
    <MSG><%=sMsg %></MSG>
</Http_Reponse>