package moonsoft.common.controller;

import java.lang.reflect.Method;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro17.xapi.data.PlatformData;
import moonsoft.common.NexacroConstant;
import moonsoft.common.exception.NexaUserException;
import moonsoft.common.util.NexacroAdaptor;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.login.impl.SsoLoginServiceImpl;
//import nl.captcha.Captcha;
//import nl.captcha.backgrounds.GradiatedBackgroundProducer;
//import nl.captcha.gimpy.FishEyeGimpyRenderer;
//import nl.captcha.servlet.CaptchaServletUtil;

@Controller
public class LoginController {
	private Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	private NexacroAdaptor nexacroAdaptor; 
	
	@Autowired
	private SsoLoginServiceImpl ssoLoginService;
	
	@RequestMapping("/loginInOut.do")
	public NexacroResult loginController(PlatformData data , HttpServletRequest request , HttpServletResponse response)throws Exception {
		logger.debug("[LoginController.loginController()] Start controller LoginController");

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
	
	/**
	 * Logout errorCode,errorMsg 로그아웃으로 반환
	 * @param data
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	@RequestMapping("/logout.do")
	public NexacroResult nexacroLogoutController(HttpServletRequest request , HttpServletResponse response)throws Exception {
		//ModelAndView pav = new ModelAndView("/web/jsp/error.jsp");
		NexacroResult rtn = new NexacroResult();
		rtn.setErrorCode(NexacroConstant.ERROR_CODE_LOGOUT);
    	rtn.setErrorMsg("Logout");
		return rtn;
	}
	
	/**
	 * 캡챠 이미지 생성
	 * <br>
	 * @param req
	 * @param res
	 * @param inParams
	 * @throws Exception
	 * @author HJ LEE
	 * @since 2015. 10. 8.
	 */
	@RequestMapping("/action/getCaptChaStr")
	public void getCaptChaStr(HttpServletRequest req, HttpServletResponse res, Parameters inParams) {
		try {
			// 자동로그인 방지 문자 생성
			//Captcha captcha =
			//		new Captcha.Builder(150, 50).addText()
			//		.addBackground(new GradiatedBackgroundProducer())
			//		.addNoise()
					//.gimp(new FishEyeGimpyRenderer())
			//		.addBorder().build();

			// 캐쉬를 지우기 위해 헤더값을 설정
			res.setHeader("Cache-Control", "no-store");
			res.setHeader("Pragma", "no-cache");
			res.setDateHeader("Expires", 0);

			// 리턴값을 image형태로 설정
			res.setContentType("image/jpeg");

			// Image를 write 한다
			//CaptchaServletUtil.writeImage(res, captcha.getImage());

			// 세션에 자동가입방지 문자를 저장한다.
			//req.getSession().setAttribute("correctAnswer", captcha.getAnswer());
		}

		catch(Exception ex) {
			logger.error("Exception", ex);
			logger.debug("[Error] webLoginService.getCaptChaStr : \n" + ex.getLocalizedMessage());
			throw new NexaUserException("Occur Exception");
		}
	}
}
