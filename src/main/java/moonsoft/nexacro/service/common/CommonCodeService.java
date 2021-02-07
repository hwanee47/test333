/**
 * The class CommonCodeService<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.08.02
 *
 */
package moonsoft.nexacro.service.common;

import moonsoft.common.util.Parameters;

public interface CommonCodeService {
	
	/**
	 * 공통코드를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.08.02
	 */
	public Parameters getCommonCode (Parameters inParam) throws Exception;
	
	/**
	 * 실행거점을 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.08.02
	 */
	public Parameters getCommonCodeCorp (Parameters inParam) throws Exception;
	
	/**
	 * 직영 위수탁 정보를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.08.02
	 */
	public Parameters getCommonCodeEqp (Parameters inParam) throws Exception;
}
