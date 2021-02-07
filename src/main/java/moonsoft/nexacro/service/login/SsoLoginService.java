package moonsoft.nexacro.service.login;

import java.util.Map;

/**
 * The class SsoLoginService<br>
 * SsoLoginService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	Seungmin
 * @version	1.0
 * @since	2018.06.28
 *
 */
public interface SsoLoginService {

	/**
	 * SSO로그인 체크 service <br>
	 * <br>
	 * <br>
	 * @param	inParam		Map<String, String>
	 * @author	Seungmin
	 * @since	2018.06.28
	 */
	public Map<String, String> getSsoLoginCheck (Map<String, String> inParam) throws Exception;
	
	/**
	 * OS 32bit 체크 서비스 <br>
	 * <br>
	 * <br>
	 * @param	inParam		Map<String, String>
	 * @author	Seungmin
	 * @since	2018.06.28
	 */
	public String getCheckOsInfo (String param) throws Exception;
	
	/**
	 * SSO로그인 체크 service(타 시스템 SSO 로그인) <br>
	 * <br>
	 * <br>
	 * @param	inParam		Map<String, String>
	 * @author	Seungmin
	 * @since	2018.06.28
	 */
	public Map<String, String> getSysSsoLoginCheck (Map<String, String> inParam) throws Exception;
}
