package moonsoft.nexacro.controller.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import moonsoft.common.util.MobileHttpConstants;
import moonsoft.nexacro.service.login.impl.WebLoginServiceImpl;

@Controller
public class WebLoginController {
	
	private Logger logger = LoggerFactory.getLogger(WebLoginController.class);
	
	@Autowired
	WebLoginServiceImpl webLoginServiceImpl;
	
	/**
	 * 
	 * 외부 사용자 로그인<br>
	 * <br>
	 * @param req
	 * @param res
	 * @param inParams
	 * @return
	 * @throws Exception
	 * @author SSM
	 * @since 2018. 6. 9.
	 */ 
	@SuppressWarnings("unchecked")
	@RequestMapping("/webLogin.do")
	public void webLogin(HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.debug("============== Controller webLogin Start =================== ");
		
		JSONObject param = new JSONObject();
		
		param.put("ID", req.getParameter("ID"));
		param.put("PW", req.getParameter("PW"));
		
		JSONObject result = webLoginServiceImpl.webLogin(req, param);
		
		logger.debug("==================  Result Login Data   :::  " + result.toJSONString() );
		res.setContentType("application/json");
		res.setCharacterEncoding("utf-8");
		res.getWriter().print(result);
		
		logger.debug("============== Controller webLogin End =================== ");
	}
	
	/**
	 * 
	 * 외부 사용자 로그인<br>
	 * <br>
	 * @param req
	 * @param res
	 * @param inParams
	 * @return
	 * @throws Exception
	 * @author SSM
	 * @since 2018. 6. 9.
	 */ 
	@RequestMapping("/getSession.do")
	public void getSession(HttpServletRequest req, HttpServletResponse res) throws Exception {
		logger.debug("============== Controller getSession Start =================== ");
		
		JSONObject result = webLoginServiceImpl.getWebSession(req);
		
		logger.debug("==================  Result Session Data   :::  " + result.toJSONString() );
		res.setContentType("application/json");
		res.setCharacterEncoding("utf-8");
		res.getWriter().print(result);
		
		logger.debug("============== Controller getSession End =================== ");
	}
}
