package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimZLRMgmtService<br>
 * BaimZLRMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.03.04
 *
 */
public interface BaimZLRMgmtService {
	
	
	
	/**
	 * 존 목록 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	public Parameters getZnList (Parameters inParam) throws Exception;
	
	/**
	 * 로케이션 목록 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	public Parameters getLocList (Parameters inParam) throws Exception;
	
	/**
	 * 랙 목록 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	public Parameters getRackList (Parameters inParam) throws Exception;
	
	/**
	 * 존/로케이션/랙정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	public Parameters saveZLRList (Parameters inParam) throws Exception;
	
	/**
	 * 존 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.05
	 */
	public Parameters deleteZnList (Parameters inParam) throws Exception;
	
	/**
	 * 로케이션 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.05
	 */
	public Parameters deleteLocList (Parameters inParam) throws Exception;
	
	/**
	 * 랙 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.05
	 */
	public Parameters deleteRackList (Parameters inParam) throws Exception;
	
}
