package moonsoft.nexacro.service.mdm;

import moonsoft.common.util.Parameters;

/**
 * The class NoticeMgmService<br>
 * MdmService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	yhkim
 * @version	1.0
 * @since	2018.08.16
 *
 */
public interface NoticeMgmService {

	/**
	 * 공지사항 정보 저장.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.16
	 */
	public Parameters saveNoticeInfo (Parameters inParam) throws Exception;
	
	/**
	 * 공지사항 정보 삭제.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.17
	 */
	public Parameters deleteNoticeInfo (Parameters inParam) throws Exception;
	
	/**
	 * 포털 공지사항 목록 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.04
	 */
	public Parameters searchNoticePop (Parameters inParam) throws Exception;
}
