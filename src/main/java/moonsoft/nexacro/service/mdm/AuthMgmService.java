package moonsoft.nexacro.service.mdm;

import moonsoft.common.util.Parameters;

/**
 * The class MdmService<br>
 * MdmService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.07.19
 *
 */
public interface AuthMgmService {

	/**
	 * 권한관리 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public Parameters getAuthList (Parameters inParam) throws Exception;
	
	/**
	 * 권한관리 상세정보 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public Parameters getAuthDetailList (Parameters inParam) throws Exception;
	
	/**
	 * 메뉴별 버튼 권한 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.07.21
	 */
	public Parameters getMenuBtnAuthList (Parameters inParam) throws Exception;
	
	/**
	 * 권한관리 정보를 수정한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public Parameters saveAuthList (Parameters inParam) throws Exception;
	
	/**
	 * 권한정보를 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public Parameters deleteAuth (Parameters inParam) throws Exception;
	
	

	/**
	 * 권한메뉴를 추가한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.02.26
	 */
	public Parameters insertMenuList (Parameters inParam) throws Exception;
	
	

	/**
	 * 권한메뉴를 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.02.26
	 */
	public Parameters deleteMenuList (Parameters inParam) throws Exception;
	
	
	/**
	 * 메뉴버튼권한 정보를 저장한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	KJH
	 * @since	2020.07.22
	 */
	public Parameters saveMenuBtnAuthList (Parameters inParam) throws Exception;
}
