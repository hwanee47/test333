package moonsoft.nexacro.service.login.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.login.SsoLoginService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("ssoLoginService")
public class SsoLoginServiceImpl extends EgovAbstractServiceImpl implements SsoLoginService {

	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	@Override
	public Map<String, String> getSsoLoginCheck(Map<String, String> inParam) throws Exception {
		Map<String, String> outParam = new HashMap<String, String>();
		
		
		//SSO로그인 체크 (통합)
		int intSsoLoginChk_kfruser = (Integer)nexacroService.queryForObject(inParam, "commonService.getSsoLoginCheck_KFRUSER");
		
		String userId = inParam.get("DECRYPT_CJWORLD_ID");
		
		if(intSsoLoginChk_kfruser <= 0) {
			outParam.put("result", "010"); // 실패 - 운송가맹정보 없음
		} else {
			outParam.put("userId", userId); 
			outParam.put("result", "000"); // 로그인 성공.
		}
		
		return outParam;
	}

	@Override
	public String getCheckOsInfo(String param) throws Exception {
		String checkYn 		= "N";
		String userId 		= param;
		int result = (int) nexacroService.queryForObject(userId, "commonService.getOScheckYn");
		
		if(result > 0) {
			checkYn = "Y";
		}

		return checkYn;
	}

	/**
	 * SSO로그인 체크 service(타 시스템 SSO 로그인) <br>
	 * <br>
	 * <br>
	 * @param	inParam		Map<String, String>
	 * @author	Seungmin
	 * @since	2018.06.28
	 */
	@SuppressWarnings("unchecked")
	public Map<String, String> getSysSsoLoginCheck(Map<String, String> inParam) throws Exception {
		Map<String, String> outParam = new HashMap<String, String>();
		
		//SSO로그인 체크 (통합)
		String userId = (String) nexacroService.queryForObject(inParam, "commonService.getSysSsoLoginCheck");
		String menuId = (String) nexacroService.queryForObject(inParam, "commonService.getSysMenuCheck");
		if(StringUtil.isNull(userId)) {
			outParam.put("RESULT_CD", "010"); // 실패 - 등록 된 사용자가 아님.
			outParam.put("USER_ID"	, "");
			outParam.put("MENU_ID"	, "");
		} else {
			outParam.put("RESULT_CD", "000"); // 로그인 성공.
			outParam.put("USER_ID"	, userId);
			outParam.put("MENU_ID"	, menuId);
		}
		
		return outParam;
	}
}
