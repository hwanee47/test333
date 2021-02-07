package moonsoft.nexacro.service.dlvy;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class DlvyRsrvService<br>
 * DlvyRsrvService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.06.11
 *
 */
public interface DlvyRsrvService {
	
	
	/**
	 * 기업고객 건별접수 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.11
	 */
	public Parameters getDlvyRsrvList(Parameters inParam) throws Exception;
	
	
	/**
	 * 기업고객 파일접수 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.16
	 */
	public Parameters getFileRsrvList(Parameters inParam) throws Exception;
	

	/**
	 * 기업고객 파일접수 오류수정 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.17
	 */
	public Parameters getDlvyRsrvErrList(Parameters inParam) throws Exception;

	
	/**
	 * 기업고객 건별접수 원운송장번호로 정보조회 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.12
	 */
	public Parameters getOrinvcInfo(Parameters inParam) throws Exception;
	
	
	/**
	 * 기업고객 건별접수<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.11
	 */
	public Parameters saveDlvyRsrv(Parameters inParam) throws Exception;
	
	

	/**
	 * 기업고객 파일접수<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.16
	 */
	public Parameters saveDlvyRsrvList(Parameters inParam) throws Exception;
	
	

	/**
	 * 기업고객 파일접수 오류수정 리스트 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.17
	 */
	public Parameters saveDlvyRsrvErrList(Parameters inParam) throws Exception;
	
	
	

	/**
	 * 기업고객 파일접수 고객레이아웃 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.15
	 */
	public Parameters getCustLayoutList(Parameters inParam) throws Exception;
	
	

	/**
	 * 기업고객 파일접수 고객레이아웃  조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.15
	 */
	public Parameters getCustLayout(Parameters inParam) throws Exception;
	
	

	/**
	 * 기업고객 파일접수 고객레이아웃  저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.15
	 */
	public Parameters saveCustLayout(Parameters inParam) throws Exception;
	
	
	
	/**
	 * 기업고객 파일접수 고객레이아웃  삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.15
	 */
	public Parameters deleteCustLayout(Parameters inParam) throws Exception;
	
}
