package moonsoft.nexacro.service.dlvy;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class DlvyGdsTraceService<br>
 * DlvyGdsTraceService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.24
 *
 */
public interface DlvyGdsTraceService {
	
	
	
	/**
	 * 상품추적 정보 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.24
	 */
	public Parameters getGdsTraceInfo(Parameters inParam) throws Exception;
	
	
}
