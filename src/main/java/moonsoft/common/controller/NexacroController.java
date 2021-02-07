/**
 * 
 * <pre>
 * @desc    넥사크로 공통 Controller
 *          
 * @package moonsoft.common.controller
 * <pre>
 * 
 * @author  SSM
 * @since   2018. 5. 24.
 * @version 1.0
 * @see
 */
package moonsoft.common.controller;

import java.lang.reflect.Method;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import moonsoft.common.NexacroConstant;
import moonsoft.common.exception.NexaUserException;
import moonsoft.common.listener.SessionListener;
import moonsoft.common.util.NexacroAdaptor;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.PlatformData;

@Controller
public class NexacroController{
	private Logger logger = LoggerFactory.getLogger(NexacroController.class);
	
	@Autowired
	private NexacroAdaptor nexacroAdaptor; 
	
	@RequestMapping("/nexacroController.do")
	public NexacroResult nexacroController(PlatformData data , HttpServletRequest request , HttpServletResponse response)throws Exception {
		logger.debug("[NexacroController.nexacroController()] Start controller NexacroController");

		// 2018.06.27 request,response 추가
		Parameters param = nexacroAdaptor.convertData(data,request,response);
		PlatformData outPD = new PlatformData();
		NexacroResult rtn = new NexacroResult();
		
		
		if (logger.isDebugEnabled()) {
			logger.debug("===========================================================");
			logger.debug("service bean name : " + param.getServiceBeanName());
			logger.debug("method name : " + param.getMethodName());
			logger.debug("params : " + data.saveXml());
			logger.debug("===========================================================");
		}
		
		try {
			//회원 작업 로그 저장.
			//runNexacroLog(param);
			
	    	//class 정보 가져오기.
			Object obj = StringUtil.getBean(param.getServiceBeanName());
	    	Method method = obj.getClass().getMethod(param.getMethodName(), Parameters.class);
	    	Parameters outParam = (Parameters)method.invoke(obj, param);
	    	outPD.setVariableList(outParam.getOutVariableList());
	    	outPD.setDataSetList(outParam.getOutDatasetList());
	    } catch(Exception e) {
	    	if(e.getCause() instanceof NexaUserException) {
	    		NexaUserException msg = (NexaUserException) e.getCause();
	    		rtn.setErrorCode(NexacroConstant.ERROR_CODE_EXCEPTION);
		    	rtn.setErrorMsg(msg.getErrorMessage());
	    	} else {
	    		logger.error(StringUtil.stackTraceToString(e));
	    		rtn.setErrorCode(NexacroConstant.ERROR_CODE_SYSTEM);
		    	rtn.setErrorMsg(e.toString());
	    	}
	    } finally {
	    	rtn.setPlatformData(outPD);
	    	param = null;
	    	outPD = null;
	    }
		
		return rtn;
    }
	
	@RequestMapping("/nexacroWebController.do")
	public NexacroResult nexacroWebController(PlatformData data , HttpServletRequest request , HttpServletResponse response)throws Exception {
		logger.debug("[NexacroController.nexacroWebController()] Start controller NexacroController");

		// 2018.06.27 request,response 추가
		Parameters param = nexacroAdaptor.convertData(data,request,response);
		PlatformData outPD = new PlatformData();
		NexacroResult rtn = new NexacroResult();
		
		if (logger.isDebugEnabled()) {
			logger.debug("===========================================================");
			logger.debug("service bean name : " + param.getServiceBeanName());
			logger.debug("method name : " + param.getMethodName());
			logger.debug("params : " + data.saveXml());
			logger.debug("===========================================================");
		}
	    
		try {
			
			//회원 작업 로그 저장.
			//runNexacroLog(param);
			
	    	//class 정보 가져오기.
			Object obj = StringUtil.getBean(param.getServiceBeanName());
	    	Method method = obj.getClass().getMethod(param.getMethodName(), Parameters.class);
	    	Parameters outParam = (Parameters)method.invoke(obj, param);
	    	outPD.setVariableList(outParam.getOutVariableList());
	    	outPD.setDataSetList(outParam.getOutDatasetList());
	    } catch(Exception e) {
	    	if(e.getCause() instanceof NexaUserException) {
	    		NexaUserException msg = (NexaUserException) e.getCause();
	    		rtn.setErrorCode(NexacroConstant.ERROR_CODE_EXCEPTION);
		    	rtn.setErrorMsg(msg.getErrorMessage());
	    	} else {
	    		logger.error(StringUtil.stackTraceToString(e));
	    		rtn.setErrorCode(NexacroConstant.ERROR_CODE_SYSTEM);
		    	rtn.setErrorMsg(e.toString());
	    	}
	    } finally {
	    	rtn.setPlatformData(outPD);
	    	param = null;
	    	outPD = null;
	    }
		
		return rtn;
    }
	
	
	private void runNexacroLog(Parameters param) throws Exception {
		Object obj = StringUtil.getBean("nexacroLogService");
		Method method = obj.getClass().getMethod("saveNexacroLog", Parameters.class);
		method.invoke(obj, param);
	}
}
