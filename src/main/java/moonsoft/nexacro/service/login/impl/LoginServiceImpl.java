package moonsoft.nexacro.service.login.impl;

import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.servlet.LocaleResolver;

import moonsoft.common.listener.SessionListener;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.EncryptionUtil;
import moonsoft.common.util.MessageUtil;
import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.PropertiesUtil;
import moonsoft.common.util.SessionConstants;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.login.LoginService;
import moonsoft.nexacro.util.CommonUtil;
import moonsoft.rabbitmq.producer.com.QueueConfirm;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.Variable;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * The class LoginService<br>
 * LoginService Service class<br>
 * 로그인 프로그램의 모든 서비스를 관린한다.<br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.06.28
 *
 */
@Service("loginService")
public class LoginServiceImpl extends EgovAbstractServiceImpl implements LoginService {
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	@Autowired
	private LocaleResolver localeResolver;

	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	/**
	 * Client에서 로그인 요청이 발생한 시점에서 사용자 검증 및 세션을 생성한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Parameters login (Parameters inParam) throws Exception {
		
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		//파라미터
		DataSet dsUser = inParam.getDataSet("dsUser");
		String errMsg = "";
		
		if(dsUser.getRowCount() == 0) {
			//errMsg = selectMsg("M000512", userLang);
			errMsg = "로그인 ID 정보가 없습니다.";
			outParam.setOutVariableList("gv_rtnCode"		, "900");
			outParam.setOutVariableList("gv_rtnMessage"		, errMsg);
			
			return outParam;
		}
		
		String pass_no 		= StringUtil.nullToDefault(dsUser.getString(0, "PASSWORD")		, "");
		String userLang 	= StringUtil.nullToDefault(dsUser.getString(0, "gv_lang")		, "ko");
		String sServerType 	= StringUtil.nullToDefault(dsUser.getString(0, "SERVER_TYPE")	, "");
		String loginType	= StringUtil.nullToDefault(dsUser.getString(0, "LOGINTYPE")		, "NEXA");
		String loginId		= StringUtil.nullToDefault(dsUser.getString(0, "LOGIN_ID")		, "");
		//String pdaYn		= StringUtil.nullToDefault(dsUser.getString(0, "PDA_YN")		, "N");
		String sessionInvalidByForceYn		= StringUtil.nullToDefault(dsUser.getString(0, "gv_sessionInvalidByForceYn")		, "");
		
		// 로그인 사용자 정보 조회
		List resultMapList = new ArrayList();
		if("SSO".equals(loginType)) {

			if("".equals(loginId)) {
				//errMsg = selectMsg("M000512", userLang);
				errMsg = "시스템에 등록되지 않은 사용자입니다.";
				outParam.setOutVariableList("gv_rtnCode"		, "400");
				outParam.setOutVariableList("gv_rtnMessage"		, errMsg);
				
				return outParam;
			}
		}
		
		resultMapList = nexacroService.queryForList(dsUser, 0, "loginService.selectUserInfo");

		Map resultMap = new HashMap();

		// 사용자 정보가 없음.
		if(resultMapList == null || resultMapList.isEmpty() == true) {
			//M000512 //시스템에 등록되지 않은 사용자입니다.
			//errMsg = selectMsg("M000512", userLang);
			errMsg = "시스템에 등록되지 않은 사용자입니다.";
			outParam.setOutVariableList("gv_rtnCode"		, "400");
			outParam.setOutVariableList("gv_rtnMessage"		, errMsg);
			
			return outParam;
		}

		resultMap = (Map)resultMapList.get(0);
		
		// 비밀번호 체크 : SSO 는 제외.
		if(!"SSO".equals(loginType)) {
			String loginPw = "";
			if(resultMap.get("LOGIN_PW") != null) {
				loginPw = (String)resultMap.get("LOGIN_PW");
			}

			//String pwHash = (String) nexacroService.queryForObject(pass_no, "loginService.getUserPwHash");
			/*String pwHash = EncryptionUtil.digestSHA256(pass_no);
			if(!loginPw.equals(pwHash)) {
				//M100174 // 입력한 암호가 올바르지 않습니다.
				//errMsg = selectMsg("M100174", userLang);
				errMsg = "입력하신 암호가 올바르지 않습니다.";
				outParam.setOutVariableList("gv_rtnCode"		, "300");
				outParam.setOutVariableList("gv_rtnMessage"		, errMsg);
				return outParam;
			}*/
			HashMap<String, Object> paramMap = new HashMap<String, Object>();
			paramMap.put("LOGIN_ID", loginId);
			paramMap.put("LOGIN_PW", pass_no);
			int cnt = (Integer) nexacroService.queryForObject(paramMap, "loginService.checkLoginPw");
			if(cnt==0){
				errMsg = "입력하신 암호가 올바르지 않습니다.";
				outParam.setOutVariableList("gv_rtnCode"		, "300");
				outParam.setOutVariableList("gv_rtnMessage"		, errMsg);
				return outParam;
			}
		}
		
		
		
		// 세션 강제 종료 할것인지 Confirm, 로컬인경우 체크 X		
		String mode = PropertiesUtil.getString("mode");
		if(!mode.equals("LOCAL") && !mode.equals("WKR")){
			if( StringUtil.isNull(sessionInvalidByForceYn) || "N".equals(sessionInvalidByForceYn)){
				// 2020.06.01 세션확인 추가 (해당 계정이 로그인 중이고 세션이 다르다면 세션을 종료시킬건지 confirm창 띄우기)
				if( !SessionListener.getInstance().checkSessionId(loginId, inParam.getRequest().getSession().getId() )){
					
					errMsg = "이미 로그인 되어있는 아이디입니다. 강제 로그아웃하고 로그인하시겠습니까?";
					outParam.setOutVariableList("gv_rtnCode"		, "950");
					outParam.setOutVariableList("gv_rtnMessage"		, errMsg);
					return outParam;
				}
			}
			// 해당 사용자 모든 세션 강제 종료후 로그인 처리
			else{
				SessionListener.getInstance().deleteSessionById(loginId);
			}
		}
		
		
		
		
		//패스워드 삭제.
		resultMap.remove("LOGIN_PW");
		
		
		
		// SERVER TYPE 추가
		resultMap.put("SERVER_TYPE", sServerType);
		
		// 세션에 사용자 정보 저장
		registerSessionUserInfo(resultMap, dsUser, inParam);
		
		// 사용자 정보를 조회한다. ========================================
		// ds_last_login, ds_login, ds_app, ds_security	
		DataSet dsUserInfo = NexacroConvertUtil.makeDsFromMap(resultMap);
		
		//다국어 lang 설정.
		Locale locale = new Locale(userLang);
		MessageUtil.setLang(userLang);
		localeResolver.setLocale(inParam.getRequest(), inParam.getResponse(), locale);
		
		//Rabbitmq 사용자별 Queue 정보 확인 및 생성.
		try {
			//QueueConfirm.createQueue(resultMap.get("USER_ID").toString());
		} catch (Exception e) {
			logger.info("User Queue Create Error ::", e);
		}
		
		
		outParam.setOutVariableList("gv_rtnCode"		, "000");
		outParam.setOutVariableList("gv_rtnMessage"		, "Success");
		outParam.setOutDatasetList("dsUserInfo"			, dsUserInfo);
		return outParam;
	}
	
	/**
	 * Client에서 로그아웃 요청 시 서버 세션 초기화 처리.<br>
	 * 고객사 로그아웃 처리
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	@SuppressWarnings("unchecked")
	public Parameters logout (Parameters inParam) throws Exception {
		// return object
		final Parameters outParam = inParam.getClass().newInstance();
		
		// 세션 얻기
		HttpServletRequest req = inParam.getRequest();
		HttpSession sess = req.getSession();
		
		if(sess == null) {
			return outParam;
		} else {
			// 세션 Key
			String sessionKey = SessionConstants.KFR_WEB_SESSIONKEY;
			
			try {
				
				Map<String, Object> sessInfo = (Map<String, Object>) sess.getAttribute(sessionKey);
				
				if(sessInfo != null) {
					logger.debug("============== 세션 삭제 전 ===================");
					logger.debug(sess.getAttribute(sessionKey).toString());
					logger.debug("============================================");
				}
			} catch (Exception e) {
				logger.error("WebLogOut Exception :: ", e);
			}

			sess.invalidate();
			
			Variable v = inParam.getVariableList().get("gv_userId");
			//SessionListener.getInstance().removeSession(v.getString());
		}
		return outParam;
	}
	

	/**
	 * Client에서 로그인 요청이 발생한 시점에서 사용자 검증 및 세션을 생성한다.<br>
	 * 고객사 로그인 처리
	 * 000 : 정상, 010 : ID없음, 020 : 비밀번호 불일치, 030 : 기타
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters webLogin (Parameters inParam) throws Exception {
		// return object
		final Parameters outParam = inParam.getClass().newInstance();
		
		//파라미터 정보
		DataSet dsParam = inParam.getDataSet("dsSearch");
		
		//로그인 정보 map
		Map<String, String> map = new HashMap<String, String>();
		
		// 세션 얻기
		HttpServletRequest req = inParam.getRequest();
		HttpSession sess = req.getSession();
		
		//사용자 정보 DataSet
		DataSet dsUserInfo = new DataSet();
		
		String result = "";
		
		try {
			// 아이디, 비밀번호 추출
			String id 			= dsParam.getString(0, "ID");
			String pw 			= dsParam.getString(0, "PW");
			String userLang 	= StringUtil.nullToDefault(dsParam.getString(0, "gv_lang"), "ko");
			
			id = URLDecoder.decode(id,"UTF-8");
			pw = URLDecoder.decode(pw,"UTF-8");
			
			//로그인 아이디, 패스워드 정보 설정.
			map.put("ID"		, id);
			map.put("USER_IP"	, req.getRemoteAddr());
			
			//String pwHash = (String) nexacroService.queryForObject(pw, "webLoginService.getUserPwHash");
			String pwHash = EncryptionUtil.digestSHA256(pw);
			map.put("PW"		, pwHash);
			
			// 자동입력방지 문자입력값
			String str = dsParam.getString(0, "CAPTCHA_STR");
			if(str != null && !str.equals("")){
				str = URLDecoder.decode(str,"UTF-8");
			}
			
			// 자동입력방지 문자값
			String captChaStr = (String) sess.getAttribute("correctAnswer");
			
			// 캡챠 문자 입력 필수여부 (기준정보에서 가져오는걸로 벼경)
			//String isCapCha = CommonUtil.parseString(PropertiesUtil.getPropValue("captcha_yn"), "N");
			String isCapCha = (String) nexacroService.select("webLoginService.getCaptchaYn");
						
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
					if(str == null || "".equals(str)) result = "050";
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
				
				//다국어 lang 설정.
				MessageUtil.setLang(userLang);
				Locale locale = new Locale(userLang);
				localeResolver.setLocale(inParam.getRequest(), inParam.getResponse(), locale);
				
				// 로그인 실패 카운트 삭제
				nexacroService.delete("webLoginService.deleteLoginFailHst", map);
				
				//Rabbitmq 사용자별 Queue 정보 확인 및 생성.
				try {
					QueueConfirm.createQueue(userInfo.get("ID").toString());
				} catch (Exception e) {
					logger.info("User Queue Create Error ::", e);
				}
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
		
		outParam.setOutVariableList("gv_rtnCode"		, result);
		outParam.setOutVariableList("gv_rtnMessage"		, getRtnMessage(result));
		outParam.setOutDatasetList("dsUserInfo"			, dsUserInfo);
		return outParam;
	}
	
	/**
	 * Array로 되어 있는 권한정보 HashMap으로 변환<br>
	 * <br>
	 * @param authCd
	 * @return
	 * @ahthor HJ LEE
	 * @since 2015. 5. 28.
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
		else if("999".equals(rtnCode)) rtnMessage = "SSO로그인을 실패하였습니다. SSO 로그인 ID를 확인 하세요.";
		else rtnMessage = "실패하였습니다. 관리자에게 문의하시기 바랍니다.";
		
		return rtnMessage;
	}
	
	/**
	 * Client에서 로그아웃 요청 시 서버 세션 초기화 처리.<br>
	 * 고객사 로그아웃 처리
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	@SuppressWarnings("unchecked")
	public Parameters webLogOut (Parameters inParam) throws Exception {
		// return object
		final Parameters outParam = inParam.getClass().newInstance();
		
		// 세션 얻기
		HttpServletRequest req = inParam.getRequest();
		HttpSession sess = req.getSession();
		
		if(sess == null) {
			return outParam;
		} else {
			// 세션 Key
			String sessionKey = SessionConstants.KFR_WEB_SESSIONKEY;
			
			try {
				Map<String, Object> sessInfo = (Map<String, Object>) sess.getAttribute(sessionKey);
				
				if(sessInfo != null) {
					logger.debug("============== 세션 삭제 전 ===================");
					logger.debug(sess.getAttribute(sessionKey).toString());
					logger.debug("============================================");
				}
			} catch (Exception e) {
				logger.error("WebLogOut Exception :: ", e);
			}

			sess.invalidate();
		}
		return outParam;
	}
	
	/**
	 * 외부 사이트 세션 정보 확인.<br>
	 * 고객사 로그아웃 처리
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	@SuppressWarnings("unchecked")
	public Parameters getWebSession (Parameters inParam) throws Exception {
		// return object
		final Parameters outParam = inParam.getClass().newInstance();
		
		// 세션 얻기
		HttpServletRequest req = inParam.getRequest();
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
						outParam.setOutDatasetList("dsUserInfo", dsUserInfo);
					}
				}
			} catch (Exception e) {
				logger.error("Session Confirm Exception :: ", e);
			}
		}
		return outParam;
	}
	
	/**
	 * 로그인 처리 시 발생된 오류에 대한 메세지 정보 가져오기.
	 * 
	 * @ahthor Seungmin
	 * @since 2018.09.27
	 *
	 * @param inParams
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public String selectMsg(String msgId, String gvLang) {
		String returnMsg = "";
		Map msgMap = new HashMap();
		msgMap.put("MSG_ID", msgId);
		msgMap.put("GV_LANG", gvLang);

		List resultMapList = new ArrayList();

		//로그인 사용자 정보 조회
		resultMapList = (List) nexacroService.queryForObject(msgMap, "loginService.getMessageInfo");

		if(resultMapList != null && !resultMapList.isEmpty()) {
			Map resultMap = new HashMap();
			resultMap = (Map)resultMapList.get(0);
			returnMsg = (String)resultMap.get("MSG_DESC");
			if(returnMsg == null) {
				returnMsg = "";
			}
		}

		return returnMsg;
	}
	
	/**
	 * 사용자정보를 세션에 저장한다.
	 * 
	 * @since 2015. 5. 19.
	 *
	 * @param userInfoMap
	 * @param inParams
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void registerSessionUserInfo(Map resultMap, DataSet inParams, Parameters inParam) {
		// TODO Auto-generated method stub
		Map userMap = new HashMap();
		userMap.put("USER_ID", (String)resultMap.get("USER_ID"));
		userMap.put("LOGIN_ID", (String)resultMap.get("LOGIN_ID"));
		userMap.put("USER_NM", (String)resultMap.get("USER_NM"));
		userMap.put("LOGIN_DATETIME", (String)resultMap.get("LOGIN_DATETIME"));
		userMap.put("LANG_CD", (String)resultMap.get("LANG_CD"));
		userMap.put("EMAIL", (String)resultMap.get("EMAIL"));
		userMap.put("TEL_NO", (String)resultMap.get("TEL_NO"));
		userMap.put("FAX_NO", (String)resultMap.get("FAX_NO"));
		userMap.put("HP_NO", (String)resultMap.get("HP_NO"));
		userMap.put("TRNS_GRP_ID", (String)resultMap.get("TRNS_GRP_ID"));
		userMap.put("DATA_TRNS_GRP", (List<String>)resultMap.get("DATA_TRNS_GRP"));

		userMap.put("USER_WH", (String)resultMap.get("USER_WH")); // 사용자 창고 권한
		userMap.put("USER_SHPR", (List<String>)resultMap.get("USER_SHPR")); // 사용자 화주 권한

		userMap.put("BRANCH_CD", "CNTSN"); //  임시로 강제 삽입함. ( FIS 요청 )

		userMap.put("CORP_ID", (String)resultMap.get("CORP_ID"));
		userMap.put("INDIR_CORP_ID", (String)resultMap.get("INDIR_CORP_ID"));
		userMap.put("LOCAL_CURR", (String)resultMap.get("LOCAL_CURR"));
		userMap.put("NATION_CD", (String)resultMap.get("NATION_CD"));
		userMap.put("PNL_CURR", (String)resultMap.get("PNL_CURR"));
		userMap.put("ROUND_YN", (String)resultMap.get("ROUND_YN"));
		userMap.put("OWNERROLE", (String)resultMap.get("OWNERROLE"));
		userMap.put("WCODEROLE", (String)resultMap.get("WCODEROLE"));

		userMap.put("EMP_ID", (String)resultMap.get("EMP_ID"));
		userMap.put("USERGROUPCODE", (String)resultMap.get("USERGROUPCODE"));
		userMap.put("BASE_AUTH", (List<String>)resultMap.get("BASE_AUTH"));
		userMap.put("AUTH", (List<String>)resultMap.get("AUTH"));

		userMap.put("PASSWORD", inParams.getString(0, "PASSWORD"));
//		userMap.put("DR_MENU_CD", inParams.getVariableAsString("DR_MENU_CD"));
		userMap.put("GV_LANG", (String)resultMap.get("LANG_CD"));

		// 부서정보 추가
		userMap.put("DEPT_ID", (String)resultMap.get("DEPT_ID"));

		// Server Type
		userMap.put("SERVER_TYPE", (String)resultMap.get("SERVER_TYPE"));

		userMap.put("AR_COSTC", (String)resultMap.get("AR_COSTC"));
		userMap.put("AR_COSTC_NM", (String)resultMap.get("AR_COSTC_NM"));
		userMap.put("AP_COSTC", (String)resultMap.get("AP_COSTC"));
		userMap.put("AP_COSTC_NM", (String)resultMap.get("AP_COSTC_NM"));
		userMap.put("BASE_CORP_ID", (String)resultMap.get("BASE_CORP_ID"));
		userMap.put("BASE_CORP_NM", (String)resultMap.get("BASE_CORP_NM"));
		userMap.put("JOIN_TYPE", (String)resultMap.get("JOIN_TYPE"));
		userMap.put("MASTER_YN", (String)resultMap.get("MASTER_YN"));
		userMap.put("ADMIN_YN", (String)resultMap.get("ADMIN_YN"));
		userMap.put("CORP_MSTR_YN", (String)resultMap.get("CORP_MSTR_YN"));
		userMap.put("AUTH_CD", (String)resultMap.get("AUTH_CD"));
		userMap.put("SEQ_NO", resultMap.get("SEQ_NO"));
		userMap.put("AGENT_ID", (String)resultMap.get("AGENT_ID"));
		userMap.put("AGENT_PW", (String)resultMap.get("AGENT_PW"));
		userMap.put("TENANT_NAME", (String)resultMap.get("TENANT_NAME"));
		userMap.put("TENANT_TEL_NO", (String)resultMap.get("TENANT_TEL_NO"));
		userMap.put("AGENT_GB", (String)resultMap.get("AGENT_GB"));
		userMap.put("MENU_SYS", (String)resultMap.get("MENU_SYS"));
		userMap.put("BLNG_DV", (String)resultMap.get("BLNG_DV"));				// 소속구분
		userMap.put("CUST_ID", (String)resultMap.get("CUST_ID"));				// 소속
		userMap.put("BRAN_CD", (String)resultMap.get("BRAN_CD"));				// 점소
		userMap.put("USER_TYPE", (String)resultMap.get("USER_TYPE"));			// 사용자 유형
		userMap.put("SYS_DV", (String)resultMap.get("SYS_DV"));					// 시스템 구분
		//userMap.put("CJWORLD_ID", inParams.getString(0, "CJWORLD_ID"));

		RequestContextHolder.getRequestAttributes().setAttribute(SessionConstants.KFR_SESSIONKEY, userMap, RequestAttributes.SCOPE_SESSION);
		
		
		//SessionListener.getInstance().printloginUsers();
		 
		// 세션 얻기
		HttpServletRequest req = inParam.getRequest();
		HttpSession session = req.getSession();
		
		
		SessionListener.getInstance().setSession((String)resultMap.get("USER_ID"), session);
		userMap.put("USER_SESSION_ID", session.getId());
		resultMap.put("USER_SESSION_ID", session.getId());
		
		
		

	}


	/**
	 * 서버 Locale 정보 설정.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public Parameters saveLocale(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		Map<String, Object> paramMap = inParam.getData("dsParam");
		
		if(paramMap != null && paramMap.size() > 0) {
			String langCd = (String) paramMap.get("gv_lang");
			//다국어 lang 설정.
			Locale locale = new Locale(langCd);
			MessageUtil.setLang(langCd);
			localeResolver.setLocale(inParam.getRequest(), inParam.getResponse(), locale);
		}
		
		return outParam;
	}
	
	/**
	 * 고객 포탈 SSO 로그인.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters webSsoLogin(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		//파라미터 정보
		DataSet dsParam = inParam.getDataSet("dsSearch");
		
		//로그인 정보 map
		Map<String, String> map = new HashMap<String, String>();
		
		// 세션 얻기
		HttpServletRequest req = inParam.getRequest();
		HttpSession sess = req.getSession();
		
		//사용자 정보 DataSet
		DataSet dsUserInfo = new DataSet();
		
		String result = "";
		
		try {
			//2019.03.22 에코프로 SSO 로그인 추가.
			String ssoId = StringUtil.nullToString(dsParam.getString(0, "SSO_ID"));
			ssoId 		 = URLDecoder.decode(ssoId,"UTF-8");
			
			if(!StringUtil.isNull(ssoId)) {
				Map ssoMap = (Map)nexacroService.queryForObject(ssoId, "commonService.getSysSsoLoginInfo");
				if(ssoMap != null && ssoMap.size() > 0) {
					//로그인 아이디, 패스워드 정보 설정.
					String userLang 	= StringUtil.nullToDefault(dsParam.getString(0, "gv_lang"), "ko");
					String id			= (String) ssoMap.get("ID");
					String pw			= (String) ssoMap.get("PW");
					
					map.put("ID"		, id);
					map.put("PW"		, pw);
					map.put("USER_IP"	, req.getRemoteAddr());
					
					result = CommonUtil.parseString(nexacroService.queryForObject(map, "webLoginService.userLogin"), "050");
					
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
						userInfo.put("VHCL_NO"	, vhclNo);
						userInfo.put("CNTRL_NO"	, cntrlNo);
						
						// 세션에 저장할 객체
						HashMap<String, Object> sesUser = new HashMap<String, Object>();
						
						// 사용자 정보, 권한정보 저장
						sesUser.put("userInfo"	, userInfo);
						sesUser.put("authInfo"	, getAuthMap(authCd));
						sesUser.put("authCdArr"	, authCdArr);
						sesUser.put("LOGIN_TYPE", "S@" + authCd);
						
						// 세션 Key
						String sessionKey = SessionConstants.KFR_WEB_SESSIONKEY;
						
						// 세션에 사용자 정보 저장
						ses.setAttribute(sessionKey, sesUser);
						
						//다국어 lang 설정.
						MessageUtil.setLang(userLang);
						Locale locale = new Locale(userLang);
						localeResolver.setLocale(inParam.getRequest(), inParam.getResponse(), locale);
						
						// 로그인 실패 카운트 삭제
						nexacroService.delete("webLoginService.deleteLoginFailHst", map);
						
						//Rabbitmq 사용자별 Queue 정보 확인 및 생성.
						try {
							QueueConfirm.createQueue(userInfo.get("ID").toString());
						} catch (Exception e) {
							logger.info("User Queue Create Error ::", e);
						}
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

						param.put("LOGIN_SUCC_YN"	, "000".equals(result) ? "Y" : "N");
						param.put("LOGIN_IP"		, req.getRemoteAddr());
						param.put("REMARK"			, remark);
						param.put("ID"				, id);
						
						nexacroService.insert("webLoginService.saveLoginHist", param);
					} catch(Exception ex) {
						logger.error("Exception", ex);
						logger.debug("[Error] LoginServiceImpl.userLogin (로그인 이력) : \n" + StringUtil.stackTraceToString(ex));
					}
				} else {
					//로그인 실패 시 SSO 실패 
					result = "999";
				}
			} else {
				//로그인 실패 시 SSO 실패 
				result = "999";
			}
		} catch(Exception ex) {
			logger.error("Exception", ex);
			logger.debug("[Error] LoginServiceImpl.userLogin : \n" + StringUtil.stackTraceToString(ex));
			result = "030";
		}
		
		outParam.setOutVariableList("gv_rtnCode"		, result);
		outParam.setOutVariableList("gv_rtnMessage"		, getRtnMessage(result));
		outParam.setOutDatasetList("dsUserInfo"			, dsUserInfo);
		return outParam;
	}


	/**
	 * 다국어 정보 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.09.27
	 */
	public Parameters getLocaleInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		//파라미터 정보
		DataSet dsParam = inParam.getDataSet("dsSearch");
		
		DataSet result = nexacroService.queryForDataset(dsParam, 0, "commonService.getLocaleMessage");
		
		outParam.setOutDatasetList("dsResult", result);
		
		return outParam;
	}
}
