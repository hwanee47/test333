
package moonsoft.nexacro.service.baim;

import moonsoft.common.util.Parameters;
import java.util.Map;

/**
 * The class BaimEmpMgmtService<br>
 * BaimEmpMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	jckim
 * @version	1.0
 * @since	2020.08.31
 *
 */

public interface BaimEmpMgmtService {
	
	/**
	 * 사원 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	jckim
	 * @since	2020.08.31
	 */
	public Parameters getEmpInfoList (Parameters inParam) throws Exception;

	public Parameters getEmpList (Parameters inParam) throws Exception;
}
