package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimSendCustMgmtService<br>
 * BaimSendCustMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.13
 *
 */
public interface BaimSendCustMgmtService {
	
	
	
	/**
	 * 발송고객 상세정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.13
	 */
	public Parameters saveSendCustInfo (Parameters inParam) throws Exception;
	
	
}
