package moonsoft.nexacro.service.dlvy;

import moonsoft.common.util.Parameters;

public interface DlvyDelayMgmtService {
	/**
	 * 미배송사유 조회
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.22
	 */
	public Parameters getDlvyDelayList (Parameters inParam) throws Exception;
	
	/**
	 * 미배송사유 저장
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.22
	 */
	public Parameters saveDlvyDelayInfo (Parameters inParam) throws Exception;
	
	/**
	 * 미배송사유 삭제
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.22
	 */
	public Parameters deleteDlvyDelayInfo (Parameters inParam) throws Exception;
	

	/**
	 * 미배송현황 조회
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.22
	 */
	public Parameters getDlvyDelayStsList (Parameters inParam) throws Exception;
	
	/**
	 * 미배송현황 상세리스트조회
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.22
	 */
	public Parameters getDlvyDelayStsDetailList (Parameters inParam) throws Exception;
}
