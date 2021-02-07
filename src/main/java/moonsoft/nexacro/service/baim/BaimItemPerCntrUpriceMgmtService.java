package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimItemPerCntrUpriceMgmtService<br>
 * BaimItemPerCntrUpriceMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.17
 *
 */
public interface BaimItemPerCntrUpriceMgmtService {
	

	/**
	 * 품목별 계약단가 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	public Parameters getItemPerCntrUpriceInfoList (Parameters inParam) throws Exception;
	
	
	/**
	 * 품목별 계약단가 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	public Parameters saveItemPerCntrUpriceInfo (Parameters inParam) throws Exception;
	
	
}
