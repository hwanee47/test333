package moonsoft.common.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.util.Aes256Util;
import moonsoft.common.util.NexacroAdaptor;
import moonsoft.common.util.PropertiesUtil;
import moonsoft.common.util.SessionUtil;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.login.impl.SsoLoginServiceImpl;

@Controller
public class SystemIfSsoController {
	private Logger logger = LoggerFactory.getLogger(SystemIfSsoController.class);
	
	@Autowired
	private NexacroAdaptor nexacroAdaptor; 
	
	@Autowired
	private SsoLoginServiceImpl ssoLoginService;
	
	/**
	 * 타 시스템에서 SSO Login 처리 - 넥사크로 용
	 */
	@RequestMapping("/system/partnerSso.do")
	public ModelAndView ssoLogin(HttpServletRequest request, HttpServletResponse response) {

		try {
			String keyValue 	= PropertiesUtil.getString("hhm.key");
			String ssoUserId 	= StringUtil.nullToString(request.getParameter("USER_ID")).toString(); // 로그인 ID;
			String menuId	 	= StringUtil.nullToString(request.getParameter("MENU_ID")).toString(); // 로그인 ID;
			Map<String, String> inParam = new HashMap<String, String>();
			
			//복호화
			if(!"".equals(ssoUserId)) {
				try {
					Aes256Util aes256 = new Aes256Util(keyValue);
					ssoUserId 	= aes256.aesDecode(ssoUserId);
					menuId		= aes256.aesDecode(menuId);
				} catch(Exception e) {
					ssoUserId = "";
					menuId	  = "";	
				}
			} else {
				ssoUserId = "";
				menuId	  = "";	
			}
			
			ModelAndView pav = new ModelAndView("/jsp/nexa/ssoLogin.jsp");

			if(!"".equals(ssoUserId)) {
				inParam.put("SSO_ID"	, ssoUserId);
				inParam.put("MENU_ID"	, menuId);

				//SSO로그인 체크 service 실행
				Map outParams = ssoLoginService.getSysSsoLoginCheck(inParam); 	
				
				String resulCode = (String)outParams.get("RESULT_CD");
				String userId	 = (String)outParams.get("USER_ID");
				if("000".equals(resulCode)) {//로그인 성공
					pav = new ModelAndView("/index.jsp"); 
					pav.addObject("SSO_ID"	, userId);
					pav.addObject("MENU_ID"	, outParams.get("MENU_ID"));
				} else {
					pav.addObject("ERR_CODE", "400");
				}
			} else {
				pav.addObject("ERR_CODE", "400");
			}

			return pav;

		} catch(Exception e) {
			logger.error("Exception", e);
			e.printStackTrace();
			throw new NexaUserException("Occur Exception");
		}
	}
}
