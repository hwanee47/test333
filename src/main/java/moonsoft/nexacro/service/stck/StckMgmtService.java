package moonsoft.nexacro.service.stck;

import moonsoft.common.util.Parameters;

/**
 * The class stckMgmtService<br>
 * stckMgmtService interface class<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	kjh
 * @version	1.0
 * @since	2020.03.11
 *
 */
public interface StckMgmtService {

	
	/**
	 * 재고관리 저장.<br>
	 * <br>
	 * 재고수정
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.03.09
	 */
	public Parameters saveStckList(Parameters inParam) throws Exception;
	
	

	/**
	 * 재고이동 (창고) .<br>
	 * <br>
	 * 재고이동
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.03.11
	 */
	public Parameters saveMoveWarehStckList(Parameters inParam) throws Exception;
	
	/**
	 * 재고 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon Ju
	 * @since	2020.03.09
	 */
	public Parameters getStckInquList (Parameters inParam) throws Exception;
	
	/**
	 * 팝업-  품목 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon Ju
	 * @since	2020.03.09
	 */
	public Parameters getItemInfoList (Parameters inParam) throws Exception;
}
