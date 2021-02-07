package moonsoft.nexacro.service.login;

import javax.servlet.http.HttpServletRequest;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import moonsoft.common.util.Parameters;

/**
 * The class WebLoginService<br>
 * LoginService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	Seungmin
 * @version	1.0
 * @since	2018.06.28
 *
 */
public interface WebLoginService {

	/**
	 * Client에서 로그인 요청이 발생한 시점에서 사용자 검증 및 세션을 생성한다.<br>
	 * 고객사 로그인 처리
	 * 000 : 정상, 010 : ID없음, 020 : 비밀번호 불일치, 030 : 기타
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public JSONObject webLogin (HttpServletRequest req, JSONObject inParam) throws Exception;
	
	/**
	 * 외부 사이트 세션 정보 확인.<br>
	 * 고객사 로그아웃 처리
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public JSONObject getWebSession (HttpServletRequest req) throws Exception;
}
