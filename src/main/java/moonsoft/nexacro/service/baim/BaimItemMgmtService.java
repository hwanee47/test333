package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimItemMgmtService<br>
 * BaimItemMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.17
 *
 */
public interface BaimItemMgmtService {
	
	
	
	/**
	 * 품목 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.18
	 */
	public Parameters saveItemInfo (Parameters inParam) throws Exception;
	
	
}
