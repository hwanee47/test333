package moonsoft.common.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Method;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.util.HttpClientConstants;
import moonsoft.common.util.NexacroAdaptor;
import moonsoft.common.util.StringUtil;

@Controller
public class SystemInterfaceController {
	private Logger logger = LoggerFactory.getLogger(SystemInterfaceController.class);
	
	@Autowired
	private NexacroAdaptor nexacroAdaptor; 
	
	@SuppressWarnings("unchecked")
	@RequestMapping("/system/interface.do")
	public void interfaceController(HttpServletRequest request , HttpServletResponse response)throws Exception {
		logger.info("[SystemInterfaceController.interfaceController()] Start controller interfaceController");
		
		//결과 리턴 객체
		JSONObject resultJ = new JSONObject();
		
		//요청 파라미터 변수 선언.
		String param = "";
		
		//response 설정.
		response.setContentType(HttpClientConstants.CONTENT_TYPE);
		response.setCharacterEncoding(HttpClientConstants.ENCODING_UTF_8);
		PrintWriter out = response.getWriter();
		
		//요청 파라미터 정보 가져오기
		try {
			param = getParameter(request);
		} catch (Exception e) { 
			//요청 파라미터 에러(에러코드 : -1)
			resultJ.put("code"	, -1);
			resultJ.put("msg"	, StringUtil.stackTraceToString(e));
			resultJ.put("data"	, "");
		}
		
		logger.info("=============== System I/F Http Parameter Info ======================");
		logger.info("Parameter Info = > " + param);
		logger.info("================================================================="); 
		
		//파라미터 Json으로 변환.
		try {
			JSONObject paramJ = StringUtil.stringToJson(param);
			paramJ.put("gv_ipAddr", request.getRemoteAddr());
			
			//필수 값 확인.
			if(checkParameter(paramJ, resultJ)) {
				out.print(resultJ.toString());
				return;
			}
			
			String comCode = StringUtil.nullToString(paramJ.get(HttpClientConstants.COMCODE_FILED));
			
			//화물맨 인 경우 화물맨 서비스 로직 Call
			if(comCode.equals(HttpClientConstants.COMPANY_CODE_101)) {
				paramJ.put("gv_userId", "HMM");
				//서비스 호출.
				Object obj = StringUtil.getBean(HttpClientConstants.PREFIX_SERVICE);
		    	Method method = obj.getClass().getMethod(HttpClientConstants.PREFIX_METHOD, JSONObject.class);
		    	resultJ = (JSONObject) method.invoke(obj, paramJ);
			}
		} catch (Exception e) {
			
			if(e.getCause() instanceof NexaUserException) {
				//user exception(에러코드 : -2463215)
	    		NexaUserException msg = (NexaUserException) e.getCause();
		    	resultJ.put("code"	, 101);
				resultJ.put("msg"	, msg.getErrorMessage());
				resultJ.put("data"	, "");
	    	} else {
	    		logger.error(StringUtil.stackTraceToString(e));
				resultJ.put("code"	, "Interface System Error");
				resultJ.put("msg"	, e.getCause().getMessage());
				resultJ.put("data"	, "");
	    	}
		}
		
		logger.info("SystemInterfaceController Response Reuslt :: " + resultJ.toJSONString());
		
		out.print(resultJ.toString());
    }
	
	private String getParameter(HttpServletRequest request) throws IOException {
		String result = "";
		
		StringBuffer jb = new StringBuffer();
		String line = null;
		BufferedReader reader = request.getReader();
		while ((line = reader.readLine()) != null)
			jb.append(line);
		
		result = jb.toString();
		
		return result;
	}
	
	@SuppressWarnings("unchecked")
	private boolean checkParameter(JSONObject param, JSONObject resultJ) {
		Boolean result = false;
		
		//1.필수 헤더 정보 확인.
		String[] head = HttpClientConstants.CHK_HEAD_FILEDS;
		for(int i=0; i<head.length; i++) {
			String chkCol = StringUtil.nullToString(param.get(head[i]));
			if(StringUtil.isNull(chkCol)) {
				//요청 파라미터 에러(에러코드 : -1)
				resultJ.put("code"		, HttpClientConstants.EMPTY_CODE);
				resultJ.put("msg"		, "Parameter '" + head[i] + "' isEmpty");
				resultJ.put("data"		, chkCol);
				return true;
			}
		}
		
		//1_1.업체코드 확인.
		String paramComCode = StringUtil.nullToString(param.get(HttpClientConstants.COMCODE_FILED));
		if(!StringUtil.useList(HttpClientConstants.COMCODE_FILEDS, paramComCode)) {
			resultJ.put("code"		, HttpClientConstants.ERROR_CODE);
			resultJ.put("msg"		, "ComCode is Error");
			resultJ.put("data"		, paramComCode);
			return true;
		}
		
		//1_2.화물맨 인 경우
		if(paramComCode.equals(HttpClientConstants.COMPANY_CODE_101)) {
			//2.HASH 정보 확인.
			String paramHash = (String) param.get(HttpClientConstants.HASH_FILED);
			String paramDate = StringUtil.substring(paramHash, 0, 14);
			String chkHash	 = paramDate + StringUtil.encrypt((paramDate+HttpClientConstants.SHA_KEY));
			
			if(!paramHash.equals(chkHash)) {
				resultJ.put("code"		, HttpClientConstants.ERROR_CODE);
				resultJ.put("msg"		, "Hash is Error");
				resultJ.put("data"		, "");
				return true;
			}
			
			//3.서비스 유효성 검사.
			String paramSvr = StringUtil.nullToString(param.get(HttpClientConstants.SERVICE_FILED));
			if(!StringUtil.useList(HttpClientConstants.SERVICE_CODES, paramSvr)) {
				resultJ.put("code"		, HttpClientConstants.ERROR_CODE);
				resultJ.put("msg"		, "Service is Error");
				resultJ.put("data"		, paramSvr);
				return true;
			}
		}
		
		return result;
	}
}
