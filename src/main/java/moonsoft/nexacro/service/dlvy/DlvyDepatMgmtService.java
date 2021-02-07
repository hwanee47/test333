package moonsoft.nexacro.service.dlvy;

import moonsoft.common.util.Parameters;

public interface DlvyDepatMgmtService {

	/**
	 * 집배출발 조회
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.22
	 */
	public Parameters getDlvyDepatList (Parameters inParam) throws Exception;
	
	/**
	 * 집배출발 등록
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.22
	 */
	public Parameters saveDepatInfo (Parameters inParam) throws Exception;
	
	/**
	 * 집배출발 삭제
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.22
	 */
	public Parameters deleteDepatInfo (Parameters inParam) throws Exception;
}
