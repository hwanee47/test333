package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimCntrMgmtService<br>
 * BaimCntrMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.17
 *
 */
public interface BaimCntrMgmtService {
	
	
	/**
	 * 계약 등록정보 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.19
	 */
	public Parameters getCntrInfo (Parameters inParam) throws Exception;
	
	
	
	/**
	 * 계약 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	public Parameters getCntrInfoList (Parameters inParam) throws Exception;
	
	
	/**
	 * 계약 상세정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	public Parameters saveCntrInfoList (Parameters inParam) throws Exception;
	

	/**
	 * 계약 갱신<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.19
	 */
	public Parameters saveRenewalCntr (Parameters inParam) throws Exception;
	
}
