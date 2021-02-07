package moonsoft.nexacro.service.login.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.EncryptionUtil;
import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.PropertiesUtil;
import moonsoft.common.util.SessionConstants;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.login.WebLoginService;
import moonsoft.nexacro.util.CommonUtil;

import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * The class WebLoginServiceImpl<br>
 * WebLoginServiceImpl Service class<br>
 * Web으로 접속하는 로그인 서비스를 관린한다.<br>
 * <br>
 * <br>
 * @author	Seungmin
 * @version	1.0
 * @since	2018.06.28
 *
 */
@Service("webLoginService")
public class WebLoginServiceImpl extends EgovAbstractServiceImpl implements WebLoginService {
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	/**
	 * Logger<br>
	 * <br>
	 * @author	Seungmin
	 * @since	2018.06.28
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public JSONObject webLogin(HttpServletRequest req, JSONObject inParam) throws Exception {
		// return object
		JSONObject outParam = new JSONObject();
		
		//파라미터 정보
		DataSet dsParam = NexacroConvertUtil.convertJsonObjectToDataSet(inParam, "dsParam");
		
		//로그인 정보 map
		Map<String, String> map = new HashMap<String, String>();
		
		// 세션 얻기
		HttpSession sess = req.getSession();
		
		//사용자 정보 DataSet
		DataSet dsUserInfo = new DataSet();
		
		String result = "";
		
		try {
			// 아이디, 비밀번호 추출
			String id = dsParam.getString(0, "ID");
			String pw = dsParam.getString(0, "PW");
			
			//로그인 아이디, 패스워드 정보 설정.
			map.put("ID"		, id);
			map.put("USER_IP"	, req.getRemoteAddr());
			
			//String pwHash = (String) nexacroService.queryForObject(pw, "webLoginService.getUserPwHash");
			String pwHash = EncryptionUtil.digestSHA256(pw);
			map.put("PW"		, pwHash);
			
			// 자동입력방지 문자입력값
			String str = dsParam.getString(0, "CAPTCHA_STR");
			
			// 자동입력방지 문자값
			String captChaStr = CommonUtil.parseString(sess.getAttribute("correctAnswer"), "");
			
			// 캡챠 문자 입력 필수여부
			String isCapCha = CommonUtil.parseString(PropertiesUtil.getPropValue("captcha_yn"), "N");
			
			// 6시간 경과시 로그인 실패 기록 삭제
			nexacroService.delete("webLoginService.deleteLoginFailHstBy6Hour", map);
			
			// 로그인 실패건수 조회
			int failCnt = CommonUtil.parseInt(CommonUtil.parseString(nexacroService.queryForObject(map, "webLoginService.checkLoginFailCnt"), "0"));
			
			//공통코드 90일 비밀번호 변경 체크 YN 가져오기
			map.put("cdTcd", "PW_LIMIT_YN");
			List<Map> commList = (List<Map>) nexacroService.list("webCommonService.getCommonMcCode", map);
			String pwLimitYn = CommonUtil.parseString(commList.get(0).get("OPT_VAL"), "N");
			
			// 5회 이상인 경우 - 자동입력방지 문자 표출
			if(failCnt >= 5) {
				// 필수인 경우
				if("Y".equals(isCapCha)) {
					// 미입력
					if("".equals(str)) result = "050";
					// 입력
					else {
						// 불일치
						if(!captChaStr.equals(str)) result = "060";
						// 일치
						else {
							// 로그인 체크
							if("N".equals(pwLimitYn)) {
								result = CommonUtil.parseString(nexacroService.queryForObject(map, "webLoginService.userLogin"), "050");
							} else { // 90일 비밀번호 변경 체크
								result = CommonUtil.parseString(nexacroService.queryForObject(map, "webLoginService.userLogin2"), "050");
							}
						}
					}
				}
				// 필수가 아닌 경우
				else result = "040";
			} else {
				// 로그인 체크
				if("N".equals(pwLimitYn)) {
					result = CommonUtil.parseString(nexacroService.queryForObject(map, "webLoginService.userLogin"), "050");
				} else { // 90일 비밀번호 변경 체크
					result = CommonUtil.parseString(nexacroService.queryForObject(map, "webLoginService.userLogin2"), "050");
				}
			}
			
			// 로그인 성공시
			if("000".equals(result)) {
				// 세션 얻기
				HttpSession ses = req.getSession();
				
				// 로그인 타입 세팅 S:고객사, L:협력사
				map.put("LOGIN_TYPE", "S");
				
				// 사용자 정보 조회
				dsUserInfo = nexacroService.queryForDataset(map, "webLoginService.getUserInfo");
				Map userInfo = NexacroConvertUtil.makeMap(dsUserInfo, 0);
				
				// 로그인 회원유형 조회
				String loginJoinType = CommonUtil.parseString(userInfo.get("LOGIN_JOIN_TYPE"), "");
				
				// 권한그룹 추출
				String authCd = "";
				
				// 권한그룹 리스트
				String authCdArr = "";
				
				// 겸업
				if("T07".equals(loginJoinType)) {
					// 권한그룹 정보 조회
					Map authList = (Map)nexacroService.queryForObject(map, "webLoginService.getUserAuthList");
					
					// 주선, 운송 권한코드 및 명칭 조회
					String sAuthCd = CommonUtil.parseString(authList.get("S_AUTH_CD"), "");
					String sAuthNm = CommonUtil.parseString(authList.get("S_AUTH_NM"), "");
					String lAuthCd = CommonUtil.parseString(authList.get("L_AUTH_CD"), "");
					String lAuthNm = CommonUtil.parseString(authList.get("L_AUTH_NM"), "");
					authCdArr = "S" + "@" + sAuthCd + " " + sAuthNm + "!L@" + lAuthCd + " " + lAuthNm;
					
					// 권한코드 결정
					authCd = sAuthCd;
				} else {	//그 외
					authCd = CommonUtil.parseString(userInfo.get("AUTH_CD"), "");
				}
				
				// 차주의 경우 차량정보 추출
				String vhclInfo = CommonUtil.parseString(userInfo.get("VHCL_INFO"), "-!-");
				
				// 차량번호, 관리번호
				String vhclNo = (vhclInfo.split("!")[0]).replaceAll("-", "");
				String cntrlNo = (vhclInfo.split("!")[1]).replaceAll("-", "");
				
				// 차량번호, 관리번호 세팅
				userInfo.remove("VHCL_INFO");
				userInfo.put("VHCL_NO", vhclNo);
				userInfo.put("CNTRL_NO", cntrlNo);
				
				// 세션에 저장할 객체
				HashMap<String, Object> sesUser = new HashMap<String, Object>();
				
				// 사용자 정보, 권한정보 저장
				sesUser.put("userInfo", userInfo);
				sesUser.put("authInfo", getAuthMap(authCd));
				sesUser.put("authCdArr", authCdArr);
				sesUser.put("LOGIN_TYPE", "S@" + authCd);
				
				// 세션 Key
				String sessionKey = SessionConstants.KFR_WEB_SESSIONKEY;
				
				// 세션에 사용자 정보 저장
				ses.setAttribute(sessionKey, sesUser);
				
				// 로그인 실패 카운트 삭제
				nexacroService.delete("webLoginService.deleteLoginFailHst", map);
			} 
			
			// 아이디 없음, 비밀번호 없음, 기타에러
			else if("010".equals(result) || "020".equals(result) || "030".equals(result)) {
				// 실패카운트가 5이상 실패시
				if(failCnt > 4) result = "040";
				
				map.put("IS_FIVE_CNT", failCnt == 4 ? "Y" : "N");
				nexacroService.update("webLoginService.updateLoginFailHst", map);
				
			}
			
			try {
				// 비고내용
				String remark = "";

				// 약관 미동의,  임시비밀번호, 탈퇴 로그 저장 안함
				if(!"070".equals(result) && !"080".equals(result) && !"090".equals(result) && !"100".equals(result)) {
					// 정상
					if("000".equals(result)) {
						remark = "정상";
					}
					// 아이디 없음
					else if("010".equals(result)) {
						remark = "아이디 없음";
					}
					// 비밀번호 불일치
					else if("020".equals(result)) {
						remark = "비밀번호 불일치";
					}
					// 기타
					else {
						remark = "기타";
					}
				}

				// 로그기록 파라미터
				HashMap<String, Object> param = new HashMap<String, Object>();

				param.put("LOGIN_SUCC_YN", "000".equals(result) ? "Y" : "N");
				param.put("LOGIN_IP", req.getRemoteAddr());
				param.put("REMARK", remark);
				param.put("ID", id);
				
				nexacroService.insert("webLoginService.saveLoginHist", param);
			} catch(Exception ex) {
				logger.error("Exception", ex);
				logger.debug("[Error] LoginServiceImpl.userLogin (로그인 이력) : \n" + StringUtil.stackTraceToString(ex));
			}
			
		} catch(Exception ex) {
			logger.error("Exception", ex);
			logger.debug("[Error] LoginServiceImpl.userLogin : \n" + StringUtil.stackTraceToString(ex));
			result = "030";
		}
		
		outParam.put("gv_rtnCode"		, result);
		outParam.put("gv_rtnMessage"	, getRtnMessage(result));
		outParam.put("dsUserInfo"		, NexacroConvertUtil.convertDsToJsonObject(dsUserInfo, 0));
		
		return outParam;
	}
	
	
	/**
	 * Array로 되어 있는 권한정보 HashMap으로 변환<br>
	 * <br>
	 * @param authCd
	 * @return
	 * @ahthor Seungmin
	 * @since 2018.06.28
	 */
	@SuppressWarnings("unchecked")
	protected HashMap<String, Object> getAuthMap(String authCd) {

		// 파라미터 객체
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("authCd", authCd);

		// 권한정보 조회
		List<HashMap<String, Object>> authArr = (List<HashMap<String, Object>>) nexacroService.list("webLoginService.getUserAuthInfo", param);
		int authSize = CommonUtil.getSize(authArr);

		// 권한정보 Map
		HashMap<String, Object> auth = new HashMap<String, Object>();

		for(int i = 0; i < authSize; i++) {

			// 데이터 추출
			HashMap<String, Object> data = authArr.get(i);

			// 메뉴정보 url 저장
			auth.put(CommonUtil.parseString(data.get("MENU_URL"), ""), "Y");
		}

		return auth;
	}
	
	private String getRtnMessage(String rtnCode) {
		String rtnMessage = "";
		
		if("000".equals(rtnCode)) rtnMessage = "성공";
		else if("010".equals(rtnCode)) rtnMessage = "아이디 또는 비밀번호를 확인하시기 바랍니다.";
		else if("040".equals(rtnCode)) rtnMessage = "실패카운트가 5이상 실패 하였습니다.";
		else if("050".equals(rtnCode)) rtnMessage = "자동입력 방지문자를 입력하여 주십시오.";
		else if("060".equals(rtnCode)) rtnMessage = "자동입력 방지문자를 잘못 입력하셨습니다.";
		else if("070".equals(rtnCode)) rtnMessage = "약관에 동의하지 않으셨습니다. 약관동의 후 사용할 수 있습니다.";
		else if("080".equals(rtnCode)) rtnMessage = "임시 비밀번호 입니다. 비밀번호 변경 후 로그인 할 수 있습니다.";
		else if("090".equals(rtnCode)) rtnMessage = "이미 탈퇴처리된 회원입니다. 회원가입 후 이용바랍니다.";
		else if("100".equals(rtnCode)) rtnMessage = "비밀번호를 변경하신 지 90일이 경과됐었습니다.<br>비밀번호 변경바랍니다.";
		else if("999".equals(rtnCode)) rtnMessage = "세션이 종료 되었습니다.";
		else rtnMessage = "실패하였습니다. 관리자에게 문의하시기 바랍니다.";
		
		return rtnMessage;
	}


	@SuppressWarnings("unchecked")
	@Override
	public JSONObject getWebSession(HttpServletRequest req) throws Exception {
		// return object
		JSONObject outParam = new JSONObject();
		
		// 세션 얻기
		HttpSession sess = req.getSession();
		
		if(sess == null) {
			return outParam;
		} else {
			
			logger.debug("########## 세션 ID " + sess.getId());
			
			// 세션 Key
			String sessionKey = SessionConstants.KFR_WEB_SESSIONKEY;
			
			try {
				Map<String, Object> sessInfo = (Map<String, Object>) sess.getAttribute(sessionKey);
				
				if(sessInfo != null) {
					Map<String, Object> userInfo = (Map<String, Object>)sessInfo.get(SessionConstants.SESSION_KEY_USERINFO);
					
					if(userInfo != null && userInfo.size() > 0) {
						logger.debug("============== 세션 사용자 정보 ===================");
						logger.debug(userInfo.toString());
						logger.debug("============================================");
						
						DataSet dsUserInfo = NexacroConvertUtil.makeDsFromMap(userInfo);
						outParam.put("gv_rtnCode"		, "000");
						outParam.put("gv_rtnMessage"	, getRtnMessage("000"));
						outParam.put("dsUserInfo"		, NexacroConvertUtil.convertDsToJsonObject(dsUserInfo, 0));
					}
				}
			} catch (Exception e) {
				logger.error("Session Confirm Exception :: ", e);
				outParam.put("gv_rtnCode"		, "999");
				outParam.put("gv_rtnMessage"	, getRtnMessage("999"));
			}
		}
		
		return outParam;
	}

}
