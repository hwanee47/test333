package moonsoft.nexacro.service.baim;

import moonsoft.common.util.Parameters;

/**
 * The class NoticeMgmService<br>
 * MdmService interface class<br>
 * <br>
 * <br>
 * This software is the proprietary information of CJ Systems<br>
 * <br>
 * @author	JinSeonJu
 * @version	1.0
 * @since	2018.08.16
 *
 */
public interface BaimNoticeMgmService {
	
	/**
	 * 공지사항 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JinSeonJu
	 * @since	2020.03.13
	 */
	public Parameters getNoticeList (Parameters inParam) throws Exception;

	/**
	 * 공지사항 정보 저장.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JinSeonJu
	 * @since	2020.03.13
	 */
	public Parameters saveNoticeInfo (Parameters inParam) throws Exception;
	
	/**
	 * 공지사항 정보 삭제.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JinSeonJu
	 * @since	2020.03.13
	 */
	public Parameters deleteNoticeInfo (Parameters inParam) throws Exception;
	
	/**
	 * 포털 공지사항 목록 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JinSeonJu
	 * @since	2018.03.13
	 */
	public Parameters searchNoticePop (Parameters inParam) throws Exception;
}
