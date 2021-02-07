package moonsoft.nexacro.service.mdm;

import moonsoft.common.util.Parameters;

/**
 * The class MenuMgmService<br>
 * MdmService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	SeungMin
 * @version	1.0
 * @since	2018.07.19
 *
 */
public interface MenuMgmService {

	/**
	 * 대메뉴 등록 메소드<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.07.20
	 */
	public Parameters saveMainMenu (Parameters inParam) throws Exception;
	
	/**
	 * 대메뉴 삭제 메소드<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.07.20
	 */
	public Parameters deleteMenu (Parameters inParam) throws Exception;
	
	/**
	 * 소메뉴 등록 메소드<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.07.20
	 */
	public Parameters saveSubMenu (Parameters inParam) throws Exception;
}
