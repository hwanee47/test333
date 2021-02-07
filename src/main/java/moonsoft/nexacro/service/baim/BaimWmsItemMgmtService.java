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
public interface BaimWmsItemMgmtService {
	
	
	
	/**
	 * 품목 리스트 저조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.15
	 */
	public Parameters getItemList (Parameters inParam) throws Exception;
	
	
	
	/**
	 * 품목 바코드 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.08.20
	 */
	public Parameters getItemBarcodeList (Parameters inParam) throws Exception;
	
	
	/**
	 * 품목정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.08
	 */
	public Parameters saveItemList (Parameters inParam) throws Exception;
	
	
	/**
	 * 품목정보 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.08
	 */
	public Parameters deleteItemList (Parameters inParam) throws Exception;
	
	
	/**
	 * 품목바코드 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.08.20
	 */
	public Parameters deleteItemBarcodeList (Parameters inParam) throws Exception;
	
}
