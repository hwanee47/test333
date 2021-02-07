package moonsoft.nexacro.service.login;

import moonsoft.common.util.Parameters;

/**
 * The class LoginService<br>
 * LoginService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.06.28
 *
 */
public interface LoginService {

	/**
	 * Client에서 로그인 요청이 발생한 시점에서 사용자 검증 및 세션을 생성한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public Parameters login (Parameters inParam) throws Exception;
	

	/**
	 * Client에서 로그아웃시 세션을 제거한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.27
	 */
	public Parameters logout (Parameters inParam) throws Exception;
	
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
	public Parameters webLogin (Parameters inParam) throws Exception;
	
	
	/**
	 * Client에서 로그아웃 요청 시 서버 세션 초기화 처리.<br>
	 * 고객사 로그아웃 처리
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public Parameters webLogOut (Parameters inParam) throws Exception;
	
	/**
	 * 외부 사이트 세션 정보 확인.<br>
	 * 고객사 로그아웃 처리
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public Parameters getWebSession (Parameters inParam) throws Exception;
	
	/**
	 * 서버 Locale 정보 설정.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public Parameters saveLocale (Parameters inParam) throws Exception;
	
	/**
	 * 고객 포탈 SSO 로그인.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public Parameters webSsoLogin (Parameters inParam) throws Exception;
	
	/**
	 * 다국어 정보 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public Parameters getLocaleInfo (Parameters inParam) throws Exception;
}
