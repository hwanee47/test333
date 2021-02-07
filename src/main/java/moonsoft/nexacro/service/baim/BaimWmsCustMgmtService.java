package moonsoft.nexacro.service.baim;

import moonsoft.common.util.Parameters;

/**
 * The class BaimWmsCustMgmtService<br>
 * BaimWmsCustMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Jin Seon Ju
 * @version	1.0
 * @since	2020.03.02
 *
 */
public interface BaimWmsCustMgmtService {
	/**
	 * 고객 리스트조회
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.27
	 */
	public Parameters getWmsCustList (Parameters inParam) throws Exception;
	
	/**
	 * 고객 정보 저장
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.27
	 */
	public Parameters saveWmsCustInfo (Parameters inParam) throws Exception;
}
