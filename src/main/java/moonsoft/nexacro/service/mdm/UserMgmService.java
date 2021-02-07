package moonsoft.nexacro.service.mdm;

import moonsoft.common.util.Parameters;

/**
 * The class UserMgmService<br>
 * MdmService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	JaeHyun
 * @version	1.0
 * @since	2018.08.08
 *
 */
public interface UserMgmService {

//	/**
//	 * 사용자목록 조회<br>
//	 * <br>
//	 * <br>
//	 * @param	inParam		NexacroPlatform parameters
//	 * @author	JaeHyun
//	 * @since	2018.08.08
//	 */
//	public Parameters getUserList (Parameters inParam) throws Exception;
	
	/**
	 * 사용자정보 등록/수정<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters saveUserInfo (Parameters inParam) throws Exception;
	
	/**
	 * 사용자목록 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters deleteUserList (Parameters inParam) throws Exception;
	
	/**
	 * 내부사용자 정보 (실행거점, 코스트센터 리스트) 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters getInUserInfo (Parameters inParam) throws Exception;
	
	/**
	 * 내부사용자 정보 (실행거점, 코스트센터 리스트) 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters saveInUserInfo (Parameters inParam) throws Exception;
	
	/**
	 * 사용자 거점정보 등록/수정 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters saveUserSubData (Parameters inParam) throws Exception;
	
	/**
	 * 사용자 거점/코스트 정보 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters deleteUserSubData (Parameters inParam) throws Exception;
	
	/**
	 * 사업자 등록번호 인증 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters bizNoCertification (Parameters inParam) throws Exception;	
	
	/**
	 * 사업자 등록번호 인증 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters getIdCheck (Parameters inParam) throws Exception;		

	
	/**
	 * 개인화주를 제외한 나머지 회원 가입 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters createUserMgmTemp (Parameters inParam) throws Exception;			
	
	/**
	 * 일반고객 update,insert <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters insertIntertnalUser (Parameters inParam) throws Exception;	
	
	/**
	 * 임시회원 상세조회 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters getUserDetail (Parameters inParam) throws Exception;	
	
	/**
	 * 임시회원 승인 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters saveApprovalList (Parameters inParam) throws Exception;		

	
	
	/**
	 * 임시회원 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters deleteinfo (Parameters inParam) throws Exception;		
	
	/**
	 * 임시 PW 생성<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters updateTempPwPublic (Parameters inParam) throws Exception;		
	
	/**
	 * 임시 PW 생성<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters deleteInternalUser (Parameters inParam) throws Exception;			
	
	/**
	 * 내부 사용자 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters saveInternalUserData (Parameters inParam) throws Exception;
	
	/**
	 * 내부 사용자 암호 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.11.16
	 */
	public Parameters saveInternalUserPw (Parameters inParam) throws Exception;

	/**
	 * 운송고객/가맹점 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters updateUserMgmTemp (Parameters inParam) throws Exception;
	
	/**
	 * LSP의 차량 정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.11.01
	 */
	public Parameters updateLspVhclInfo(Parameters inParam) throws Exception;
	
	/**
	 * 회원의 문서 관리 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.11.14
	 */
	public Parameters selectTbctFileList(Parameters inParam) throws Exception;
	
	/**
	 * 회원의 문서 관리 리스트 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.11.14
	 */
	public Parameters saveDocList(Parameters inParam) throws Exception;
	
	/**
	 * 회원의 업로드 파일 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.11.14
	 */
	public Parameters selectFileList(Parameters inParam) throws Exception;
	
	/**
	 * TMDM_IF_EVENT_KFR_USER의 IF_RESULT 컬럼 확인하고 결과 내용 리턴<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.12.07
	 */
	public Parameters getResultCheck(Parameters inParam) throws Exception;
	
	
	/**
	 * 회원 유형을 운송가맹점에서 차주로 바꾼다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.12.18
	 */
	public Parameters updateJoinType(Parameters inParam) throws Exception;
	
	/**
	 * 회원 탈퇴<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.18
	 */
	public Parameters saveDeleteInfo (Parameters inParam) throws Exception;

	/**
	 * 임시회원 분배<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.19
	 */
	public Parameters saveDivUserData (Parameters inParam) throws Exception;
	
	/**
	 * 준회원 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.20
	 */
	public Parameters deleteTempUser (Parameters inParam) throws Exception;
	
	/**
	 * 파일 정보 업데이트 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.20
	 */
	public Parameters updateFileInfo (Parameters inParam) throws Exception;
	
	/**
	 * 장비 삭제 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.20
	 */
	public Parameters deleteLspVhclList (Parameters inParam) throws Exception;
	
	/**
	 * 정보센터 차량 정보 승인 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.20
	 */
	public Parameters saveApprovalTransVehicle (Parameters inParam) throws Exception;
	
	/**
	 * 임시차량정보 저장 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.12.20
	 */
	public Parameters updateUserVhclTempInfo (Parameters inParam) throws Exception;
	
	/**
	 * 일반고객 MDM 고객 정보 수정 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.12.20
	 */
	public Parameters saveMdmShprInfo (Parameters inParam) throws Exception;
	
	/**
	 * 포탈권한부여 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.12.20
	 */
	public Parameters createAuthUser (Parameters inParam) throws Exception;
	
	/**
	 * 출장소 update,insert <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters insertBusinessUser (Parameters inParam) throws Exception;	
}
