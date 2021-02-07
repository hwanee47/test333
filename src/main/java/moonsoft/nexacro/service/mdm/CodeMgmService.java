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
public interface CodeMgmService {

	/**
	 * 대분류와 소분류코드 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.07.20
	 */
	public Parameters getCodeList (Parameters inParam) throws Exception;
	
	
	/**
	 * 대분류와 소분류코드 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.07.20
	 */
	public Parameters getCodeListDetail (Parameters inParam) throws Exception;
	
	/**
	 * 수정된 코드정보를 저장한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.07.20
	 */
	public Parameters saveCode (Parameters inParam) throws Exception;
}
