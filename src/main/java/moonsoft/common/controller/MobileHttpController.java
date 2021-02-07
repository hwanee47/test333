package moonsoft.common.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.lang.reflect.Method;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.JsonObject;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;

import moonsoft.common.NexacroConstant;
import moonsoft.common.exception.NexaUserException;
import moonsoft.common.util.MobileHttpConstants;
import moonsoft.common.util.NexacroAdaptor;
import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;

@Controller
public class MobileHttpController {
	private Logger logger = LoggerFactory.getLogger(MobileHttpController.class);
	
	@Autowired
	private NexacroAdaptor nexacroAdaptor; 
	
	@RequestMapping("/mobileHttpController.do")
	public void nexacroController(HttpServletRequest request , HttpServletResponse response)throws Exception {
		logger.debug("[MobileHttpController.mobileHttpController()] Start controller MobileHttpController");
		
		//요청 파라미터 변수 선언.
		String param = "";
		
		//결과 리턴 객체
		JsonObject resultJ = new JsonObject();
		
		//response 설정.
		response.setContentType(MobileHttpConstants.CONTENT_TYPE);
		response.setCharacterEncoding(MobileHttpConstants.ENCODING_UTF_8);
		PrintWriter out = response.getWriter();
		
		//요청 파라미터 정보 가져오기
		try {
			param = getParameter(request);
		} catch (Exception e) { 
			//요청 파라미터 에러(에러코드 : -1)
			resultJ.addProperty("RtnCode"	, NexacroConstant.ERROR_CODE_SYSTEM);
			resultJ.addProperty("Message"	, StringUtil.stackTraceToString(e));
		}
		
		logger.debug("=============== Mobile Http Parameter Info ======================");
		logger.debug("Parameter Info = > " + param);
		logger.debug("================================================================="); 
		
		//파라미터 Json으로 변환.
		try {
			JSONObject paramJ = StringUtil.stringToJson(param);
			
			//서비스, 메소드 가져오기
			String serviceInfo 	= StringUtil.nullToString(paramJ.get(MobileHttpConstants.SERVICE_NAME));
			String serviceNm 	= serviceInfo.substring(0, serviceInfo.lastIndexOf('.'));
			String methodNm 	= serviceInfo.substring(serviceInfo.lastIndexOf('.') + 1);
			String dsName 		= StringUtil.nullToDefault(paramJ.get(MobileHttpConstants.SERVICE_DS), MobileHttpConstants.SERVICE_DS_DEFAULT);
			String sessInfo  	= StringUtil.nullToString(paramJ.get(MobileHttpConstants.SERVICE_SESSION));
			
			//필수 값 확인.
			if(StringUtil.isNull(serviceNm)) {
				resultJ.addProperty("RtnCode"	, NexacroConstant.ERROR_CODE_EXCEPTION);
				resultJ.addProperty("Message"	, "Empty Service Name");
				
				out.print(resultJ.toString());
				return;
			}
			
			if(StringUtil.isNull(methodNm)) {
				resultJ.addProperty("RtnCode"	, NexacroConstant.ERROR_CODE_EXCEPTION);
				resultJ.addProperty("Message"	, "Empty Method Name");
				
				out.print(resultJ.toString());
				return;
			}
			
			//세션 정보 
			JSONObject sessJ = StringUtil.stringToJson(sessInfo);
		
			//파라미터 설정.
			//Jsonarry 문자열을 datasetList, variablelist converting
			JSONArray arr = NexacroConvertUtil.getStringToJsonArr(paramJ.get(MobileHttpConstants.SERVICE_PARAM).toString());
			
			PlatformData paramData = new PlatformData();
			VariableList varList = NexacroConvertUtil.getJsonArrToVarList(new VariableList(), arr, sessJ);
			DataSetList datasetList = NexacroConvertUtil.getJsonArrToDsList(new DataSetList(), arr, dsName);
			
			//converting 설정.
			paramData.setDataSetList(datasetList);
			paramData.setVariableList(varList);
			Parameters p = nexacroAdaptor.convertData(paramData,request,response);
			
			//서비스 호출.
			Object obj = StringUtil.getBean(serviceNm);
	    	Method method = obj.getClass().getMethod(methodNm, Parameters.class);
	    	method.invoke(obj, p);
	    	
	    	//요청 파라미터 에러(에러코드 : -1)
			resultJ.addProperty("RtnCode"	, 0);
			resultJ.addProperty("Message"	, "Success");
		
		} catch (Exception e) {
			
			if(e.getCause() instanceof NexaUserException) {
				//user exception(에러코드 : -2463215)
	    		NexaUserException msg = (NexaUserException) e.getCause();
		    	resultJ.addProperty("RtnCode"	, NexacroConstant.ERROR_CODE_EXCEPTION);
				resultJ.addProperty("Message"	, msg.getErrorMessage());
	    	} else {
	    		logger.error(StringUtil.stackTraceToString(e));
	    		//system exception(에러코드 : -1)
				resultJ.addProperty("RtnCode"	, NexacroConstant.ERROR_CODE_SYSTEM);
				resultJ.addProperty("Message"	, StringUtil.stackTraceToString(e));
	    	}
		}
		
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
}
