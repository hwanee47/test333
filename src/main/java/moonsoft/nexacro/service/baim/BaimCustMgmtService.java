package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimCustMgmtService<br>
 * BaimCustMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.07.15
 * 창고 & 배송 고객사관리 공통서비스
 *
 */
public interface BaimCustMgmtService {
	
	
	/**
	 * 고객사 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.15
	 */
	public Parameters getCustList (Parameters inParam) throws Exception;
	
	/**
	 * 고객사 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.15
	 */
	public Parameters saveCustList (Parameters inParam) throws Exception;
	
	
	/**
	 * 고객사 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.15
	 */
	public Parameters deleteCustList (Parameters inParam) throws Exception;
	
}
