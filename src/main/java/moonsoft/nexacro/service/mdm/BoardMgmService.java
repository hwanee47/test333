package moonsoft.nexacro.service.mdm;

import moonsoft.common.util.Parameters;

/**
 * The class boardMgmService<br>
 * MdmService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	yhkim
 * @version	1.0
 * @since	2018.08.13
 *
 */
public interface BoardMgmService {

	/**
	 * 게시판 답변 저장.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.13
	 */
	public Parameters saveBoardInfo (Parameters inParam) throws Exception;
}
