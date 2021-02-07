package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimPidvZnMgmtService<br>
 * BaimPidvZnMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.06
 *
 */
public interface BaimPidvZnMgmtService {
	

	/**
	 * 집배구역 리스트 조회<br>
	 * <br>
	 * 	집배구역 구역 리스트 조회
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	public Parameters getPiDvZnMgmtList (Parameters inParam) throws Exception;
	
	public Parameters getPiDvZnMstList (Parameters inParam) throws Exception;

	/**
	 * 집배구역 관리예하 점소 리스트 조회<br>
	 * <br>
	 * 	점소관리번호로 점소 리스트를 조회한다.
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.12
	 */
	public Parameters getSubBranInfoList (Parameters inParam) throws Exception;
	
	
	/**
	 * 집배구역 상세정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	public Parameters savePidvZnDetailInfoList (Parameters inParam) throws Exception;
	
	
	/**
	 * 집배구역 구역변경 저장<br>
	 * <br>
	 * 	집배구역 필드 변경
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	public Parameters savePidvZnChgList (Parameters inParam) throws Exception;
	
	
}
