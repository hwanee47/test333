package moonsoft.nexacro.service.mdm;

import moonsoft.common.util.Parameters;

/**
 * The class ItemMgmService<br>
 * MdmService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	yhkim
 * @version	1.0
 * @since	2018.08.09
 *
 */
public interface ItemMgmService {

	/**
	 * MDM물품 정보 저장.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.09
	 */
	public Parameters saveItemInfo (Parameters inParam) throws Exception;
	
	/**
	 * 하위 물품 목록 삭제.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.13
	 */
	public Parameters deleteItemInfo (Parameters inParam) throws Exception;
}
