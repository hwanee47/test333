package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimUserMgmtService<br>
 * BaimUserMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.03.02
 *
 */
public interface BaimUserMgmtService {
	
	
	/**
	 * 사용자 목록 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	public Parameters getUserList (Parameters inParam) throws Exception;
	
	
	/**
	 * 사용자 권한 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	public Parameters getAuthList (Parameters inParam) throws Exception;
	
	/**
	 * 사용자 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.02
	 */
	public Parameters saveUserInfoList (Parameters inParam) throws Exception;
	
	
	/**
	 * 사용자 저장(관리자용)<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.10
	 */
	public Parameters saveUserInfoList_syst (Parameters inParam) throws Exception;
	
	
	/**
	 * 비밀번호 변경 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.02
	 */
	public Parameters updateUserPw (Parameters inParam) throws Exception;
	
	
	/**
	 * 사용자 그룹권한 추가 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	public Parameters insertGroupAuthList (Parameters inParam) throws Exception;
	
	
	/**
	 * 사용자 그룹권한 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	public Parameters deleteGroupAuthList (Parameters inParam) throws Exception;
	
	
	
	/**
	 * 사용자 창고권한 추가 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	public Parameters insertWarehAuthList (Parameters inParam) throws Exception;
	
	
	/**
	 * 사용자 창고권한 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	public Parameters deleteWarehAuthList (Parameters inParam) throws Exception;
	
	
	/**
	 * 사용자 고객권한 추가 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	public Parameters insertCustAuthList (Parameters inParam) throws Exception;
	
	/**
	 * 사용자 고객권한 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	public Parameters deleteCustAuthList (Parameters inParam) throws Exception;
	
	
	
	/**
	 * 사용자 비밀번호 초기화 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.13
	 */
	public Parameters updateResetUserPw (Parameters inParam) throws Exception;
	
	
	/**
	 * 사용자 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.14
	 */
	public Parameters deleteUserInfoList (Parameters inParam) throws Exception;
	
	
	/**
	 * RGB 시스템관리자 생성<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.17
	 */
	public Parameters createSuper_syst (Parameters inParam) throws Exception;
	
	
}
