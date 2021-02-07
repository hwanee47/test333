package moonsoft.nexacro.service.mdm;

import moonsoft.common.util.Parameters;

/**
 * The class MsgMgmService<br>
 * MdmService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	JaeHyun
 * @version	1.0
 * @since	2018.08.02
 *
 */
public interface MsgMgmService {

	/**
	 * 메세지코드 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.02
	 */
	public Parameters getMsgMsgList (Parameters inParam) throws Exception;
	
	/**
	 * 메세지코드 등록/수정.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.02
	 */
	public Parameters saveMsgMsgList (Parameters inParam) throws Exception;
	
	/**
	 * 메세지코드 삭제.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.02
	 */
	public Parameters deleteMsgMsgList (Parameters inParam) throws Exception;
}
