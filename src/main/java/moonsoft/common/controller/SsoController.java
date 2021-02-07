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
import moonsoft.common.util.NexacroAdaptor;
import moonsoft.common.util.PropertiesUtil;
import moonsoft.common.util.SessionUtil;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.login.impl.SsoLoginServiceImpl;

@Controller
public class SsoController {
	private Logger logger = LoggerFactory.getLogger(SsoController.class);
	
	@Autowired
	private NexacroAdaptor nexacroAdaptor; 
	
	@Autowired
	private SsoLoginServiceImpl ssoLoginService;
	
	/**
	 * SSO Login 처리 - 넥사크로 용
	 */
	@SuppressWarnings("rawtypes")
	@RequestMapping("/ssoLogin.do")
	public ModelAndView ssoLogin(HttpServletRequest request, HttpServletResponse response) {

		try {
			String keyValue = PropertiesUtil.getPropValue("kfr.common.ssoKey").toString();
			String cjworld_id = StringUtil.nullToString(request.getParameter("cjworld_id")).toString(); //cj아이디;

			Map<String, String> inParam = new HashMap<String, String>();
			
			//복호화
			if(!cjworld_id.equals("")) {
				cjworld_id = SessionUtil.decrypt(cjworld_id, keyValue);
			} else {
				cjworld_id = "";
			}

			String strUserId = StringUtil.nullToString(request.getParameter("USER_ID")).toString();

			ModelAndView pav = new ModelAndView("/jsp/nexa/ssoLogin.jsp");
			if(!"".equals(strUserId)) {
				pav.addObject("USER_ID", "");
			}

			if(!"".equals(cjworld_id)) {
				pav.addObject("DECRYPT_CJWORLD_ID", cjworld_id);
				
				inParam.put("DECRYPT_CJWORLD_ID", cjworld_id);

				//SSO로그인 체크 service 실행
				Map outParams = ssoLoginService.getSsoLoginCheck(inParam); 		

				String resulCode = outParams.get("result").toString();
				String userId = "";
				
				if("000".equals(resulCode)) {//로그인 성공
					pav = new ModelAndView("/install/newLauncher.jsp"); 
					userId = outParams.get("userId").toString();
					
					//사용자 OS 32bit 여부 확인.(기준정보에 등록 된 경우 넥사크로 32bit로 기동)
					String checkOsYn = ssoLoginService.getCheckOsInfo(userId);
					
					pav.addObject("CHECK_OS_YN", checkOsYn);
				} else {
					pav.addObject("ERR_CODE", "400");
				}
				pav.addObject("USER_ID"	, userId);
				pav.addObject("MODE"	, PropertiesUtil.getPropValue("mode"));
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
