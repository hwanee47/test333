package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimWarehMgmtService<br>
 * BaimWarehMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.03.04
 *
 */
public interface BaimWarehMgmtService {
	
	
	
	/**
	 * 창고 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.15
	 */
	public Parameters getWarehList (Parameters inParam) throws Exception;
	
	/**
	 * 창고정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	public Parameters saveWarehList (Parameters inParam) throws Exception;
	
	/**
	 * 창고정보 삭제 (사용여부 업데이트처리)<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	public Parameters deleteWarehList (Parameters inParam) throws Exception;
	
}
