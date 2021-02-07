package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimBranMgmtService<br>
 * BaimBranMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.12
 *
 */
public interface BaimBranMgmtService {
	
	/**
	 * 점소관리 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	public Parameters saveBranInfo (Parameters inParam) throws Exception;
	
	
}
