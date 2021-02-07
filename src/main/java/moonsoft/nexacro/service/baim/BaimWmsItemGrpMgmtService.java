package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimWmsItemMgmtService<br>
 * BaimWmsItemMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.03.08
 *
 */
public interface BaimWmsItemGrpMgmtService {
	
	
	/**
	 * 품목그룹리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.10
	 */
	public Parameters getItemGrpList (Parameters inParam) throws Exception;
	
	/**
	 * 품목그룹정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.10
	 */
	public Parameters saveItemGrpList (Parameters inParam) throws Exception;
	
	/**
	 * 품목그룹정보 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.10
	 */
	public Parameters deleteItemGrpList (Parameters inParam) throws Exception;
	
}
