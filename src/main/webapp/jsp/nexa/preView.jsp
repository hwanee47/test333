<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.io.*"%>
<%@ page trimDirectiveWhitespaces="true" %>
<%

	String filePath = request.getParameter("filePath");
	String fileName = request.getParameter("fileName");
	
	byte[] buffer = new byte[1024];
	ServletOutputStream o = response.getOutputStream();
	BufferedInputStream in = null;
	try {
		String filePullName = application.getRealPath(filePath + fileName);
		File file = new File(filePath + fileName);
		in = new BufferedInputStream(new FileInputStream(file));
		int n=0;
		while((n = in.read(buffer, 0, 1024)) != -1) {
			o.write(buffer, 0, n);
		}
		o.flush();
	} catch(Exception e) {
		e.printStackTrace();
	} finally {
		o.close();
		in.close();
	}
%>
