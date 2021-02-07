package moonsoft.common.service;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.util.CommonUtil;
import moonsoft.common.vo.KilsWsEaiData;

/******************************************************************************
 * 시스템명      : Common, Admin
 * 프로그램명 : EAI I/F 모듈1 서비스
 * 파  일  명       : IFEAI1_Service.java
 * 개         요       :
 *   IF-CM-01-001 공통코드 목록 수신
 *   IF-CM-01-002 공통코드 속성 매핑 수신
 *   IF-CM-01-003 공통코드 수신
 *   IF-CM-01-013 환율 수신
 *   IF-CM-01-014 월력 수신
 *   IF-CM-01-015 우편번호 수신
 *   IF-CM-01-025 선박
 *   IF-CM-01-026 선박장비
 * 작  성  자       :
 * 최초작성일 :
 * 버    전            : v1.0
 * 변경이력      :
 ******************************************************************************/

@Service
public class IFEAI1_Service {

	private static final Log LOG = LogFactory.getLog(IFEAI1_Service.class);

	/* =============================================================================== */
	/* !!!!!!!!!!!!!!!!!!!!!!!! 소스 추가 시 주석은 필수 입니다. !!!!!!!!!!!!!!!!!!!!!!!!!! */
	/* =============================================================================== */

	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	// 로그용 메세지
	private static final String strLog = "IFEAI1_Service :: ";

	/**
	 * 인터페이스 모듈id 별로 처리함수로 분기한다.
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	public KilsWsEaiData switchService(KilsWsEaiData eData) {
		String strModuleName = eData.getModuleName();
		
		if("IF-CM-01-001".equals(strModuleName)) { // 공통코드
			eData = this.ifCm01001(eData);
		} else if("IF-CM-01-003".equals(strModuleName)) {
			eData = this.ifCm01003(eData);
		}

		return eData;
	}

	/**
	 * I/F 처리 내용 : 환율정보 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 국가정보, 법인코드
	 *       오류시 temp 테이블에 남길 메세지와 오류 코드를 만든다.
	 * 3. eai_op 코드에 따라 진행한다.
	 * 		'I','U' : merge
	 *      'D' : delete
	 * 4. temp 테이블에 결과를 남기고 최종 결과를 리턴한다.
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private KilsWsEaiData ifCm01013(KilsWsEaiData eData) {
		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		LOG.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifGsExrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_IF_GS_EXR_SELECT");

		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifGsExrMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		// 2. 필수 체크 : 국가코드, 법인코드
		paramMap = new HashMap();
		paramMap.put("CD_TCD", "CM046");
		strMsg += checkDataNotNull(ifGsExrMap, "PV_EXRATE_CD", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_COUNTRY_CD1", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_COMP_CD2", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_EFFECT_DATE", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_REFF_CURR", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_TARGET_CURR", paramMap);
		//strMsg += checkDataNull(ifGsExrMap, "PV_EXRATE_CD", paramMap);

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		// 국가코드 체크
		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_COUNTRY_CD1")) {
			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_GS_NATION_SELECT");
			if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_COUNTRY_CD1", (String)ifGsExrMap.get("PV_COUNTRY_CD1")) + strAdd;
			}
		}

		// 법인코드 체크
		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_COMP_CD2")) {
			Map compMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_MC_CODE_B_SELECT");
			if(compMap == null || CommonUtil.isEmpty(compMap, "CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_COMP_CD2", (String)ifGsExrMap.get("PV_COMP_CD2")) + strAdd;
			}
				
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				paramMap = new HashMap();
				paramMap.put("INSTANCEID", eData.getInstanceId());
				paramMap.put("PV_EXRATE_CD", ifGsExrMap.get("PV_EXRATE_CD"));

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete
				String sEaiOp = getOpCode(ifGsExrMap);
				if("D".equals(sEaiOp))
					
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_EXR_DELETE", paramMap);
				else
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_EXR_MERGE", paramMap);

				LOG.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
				}
				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				LOG.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		}
		//LOG.info(strLog+" result::"+"  Status="+eData.getStatus()+"  EAI_STATE="+paramMap.get("EAI_STATE") );

		// 최종 결과를 업데이트 하고 리턴한다.
		nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IF_GS_EXR_UPDATE", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 월력정보 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 국가정보, 법인코드
	 *       오류시 temp 테이블에 남길 메세지와 오류 코드를 만든다.
	 * 3. eai_op 코드에 따라 진행한다.
	 * 		'I','U' : merge
	 *      'D' : delete
	 * 4. temp 테이블에 결과를 남기고 최종 결과를 리턴한다.
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private KilsWsEaiData ifCm01014(KilsWsEaiData eData) {
		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		LOG.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifGsExrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_IF_CI_HOLICALENDAR_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifGsExrMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		// 2. 체크 : 국가코드, 법인코드
		paramMap = new HashMap();
		paramMap.put("CD_TCD", "CM046");
		strMsg += checkDataNull(ifGsExrMap, "PV_COUNTRY_CD1", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_COMP_CD1", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_CALENDAR_CD", paramMap); // 요건추가.
		strMsg += checkDataNotNull(ifGsExrMap, "PV_CAL_DATE", paramMap); // 요건추가.
		strMsg += checkDataNull(ifGsExrMap, "PV_WORKTYPE", paramMap);
		strMsg += checkDataNull(ifGsExrMap, "PV_HOLIDAYTYPE", paramMap);

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		// 국가코드 체크
		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_COUNTRY_CD1")) {
			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_GS_NATION_SELECT");
			if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_COUNTRY_CD1", (String)ifGsExrMap.get("PV_COUNTRY_CD1")) + strAdd;
			}
		}

		// 법인코드 체크
		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_COMP_CD1")) {
			paramMap.put("PV_COMP_CD2", ifGsExrMap.get("PV_COMP_CD1"));
			Map compMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_MC_CODE_B_SELECT");
			if(compMap == null || CommonUtil.isEmpty(compMap, "CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_COMP_CD1", (String)ifGsExrMap.get("PV_COMP_CD1")) + strAdd;
			}
				
		}
		
		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수1
				int iCnt1 = 0; // 실행건수2

				paramMap = new HashMap();
				paramMap.put("INSTANCEID", eData.getInstanceId());
				paramMap.put("PV_COMP_CD1", ifGsExrMap.get("PV_COMP_CD1"));
				paramMap.put("PV_CALENDAR_CD", ifGsExrMap.get("PV_CALENDAR_CD"));

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete
				String sEaiOp = getOpCode(ifGsExrMap);
				if("D".equals(sEaiOp)) {
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_CI_HOLICALENDAR_UPDATE", paramMap);
				} else {
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_CI_HOLICALENDAR_MERGE1", paramMap);
					iCnt1 = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_CI_HOLICALENDAR_MERGE2", paramMap);
				}
				LOG.info(strLog + " iCnt=" + iCnt + "  iCnt1=" + iCnt1);

				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt != 1) {
					strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
				}

				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				LOG.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IF_GS_EXR_UPDATE_CAL", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 우편번호정보 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 국가정보, 법인코드
	 *       오류시 temp 테이블에 남길 메세지와 오류 코드를 만든다.
	 * 3. eai_op 코드에 따라 진행한다.
	 * 		'I','U' : merge
	 *      'D' : delete
	 * 4. temp 테이블에 결과를 남기고 최종 결과를 리턴한다.
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private KilsWsEaiData ifCm01015(KilsWsEaiData eData) {
		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		LOG.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifGsExrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_IF_GS_ZIP_SELECT"); // TODO: 쿼리문이 이상하다. 필수값을 조회 안한다.

		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifGsExrMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			//return eData;
		}

		// 2. 체크 : 국가코드, 법인코드
		paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		paramMap.put("CD_TCD", "CM046");
		strMsg += checkDataNotNull(ifGsExrMap, "PV_COUNTRY_CD", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_ZIP_CD", paramMap);
		strMsg += checkDataNotNull(ifGsExrMap, "PV_ZIPCODE", paramMap);
		strMsg += checkDataNull(ifGsExrMap, "PV_COMP_CD2", paramMap);// TODO: 요건에는 없는데, 자바소스에는 있네?

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		// 국가코드 체크
		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_COUNTRY_CD")) {
			paramMap.put("PV_COUNTRY_CD1", ifGsExrMap.get("PV_COUNTRY_CD"));
			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_GS_NATION_SELECT");
			if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_COUNTRY_CD", (String)ifGsExrMap.get("PV_COUNTRY_CD")) + strAdd;
			}
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				paramMap = new HashMap();
				paramMap.put("INSTANCEID", eData.getInstanceId());
				checkDataNotNull(ifGsExrMap, "PV_ZIP_CD", paramMap);//paramMap.put("PV_ZIP_CD", ifGsExrMap.get("PV_ZIP_CD") );

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete
				String sEaiOp = getOpCode(ifGsExrMap);
				if("D".equals(sEaiOp))
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_ZIP_UPDATE", paramMap);
				else
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_ZIP_MERGE", paramMap);

				LOG.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
				}

				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				LOG.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IF_GS_EXR_UPDATE_ZIP", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 공통코드정보(H) 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 국가정보, 법인코드
	 *       오류시 temp 테이블에 남길 메세지와 오류 코드를 만든다.
	 * 3. eai_op 코드에 따라 진행한다.
	 * 		'I','U' : merge
	 *      'D' : delete
	 * 4. temp 테이블에 결과를 남기고 최종 결과를 리턴한다.
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private KilsWsEaiData ifCm01001(KilsWsEaiData eData) {
		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		LOG.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifGsExrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_IF_MC_CODE_H_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifGsExrMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		paramMap.put("PV_CODEGROUP_CD", ifGsExrMap.get("PV_CODEGROUP_CD"));
		paramMap.put("PV_IFCHK", ifGsExrMap.get("PV_IFCHK"));
		if(paramMap.get("PV_CODEGROUP_CD").equals("RC00010") || paramMap.get("PV_CODEGROUP_CD").equals("RC00015")
				|| paramMap.get("PV_CODEGROUP_CD").equals("RC00017") || paramMap.get("PV_CODEGROUP_CD").equals("RC00019")
				|| paramMap.get("PV_CODEGROUP_CD").equals("RC00021") || paramMap.get("PV_CODEGROUP_CD").equals("RC00023")
				|| paramMap.get("PV_CODEGROUP_CD").equals("RC00024") || paramMap.get("PV_CODEGROUP_CD").equals("RC00026")
				|| paramMap.get("PV_CODEGROUP_CD").equals("RC00029") || paramMap.get("PV_CODEGROUP_CD").equals("RC00066")
				|| paramMap.get("PV_CODEGROUP_CD").equals("RC00225") || paramMap.get("PV_IFCHK").equals("0")) { // 전사MDM의 PV_IFTARGET에 AP020이 없는 코드는 SKIP
			checkSuccess(eData, paramMap);
			nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IF_MC_CODE_H_UPDATE", paramMap);
			return eData;

		}
		Map ifGsExrMap1 = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_MC_CODE_MPG_SELECT"); // CD_TCD 조회
		if(ifGsExrMap1 == null) {
			String cdTcd = (String)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_MC_CODE_CD_TCD");
			paramMap.put("CD_TCD", cdTcd);
		} else {
			paramMap.put("CD_TCD", ifGsExrMap1.get("CD_TCD"));
		}

		/*
		strMsg = checkDataFirst(ifGsExrMap1);		
		if (false == "".equals(strMsg))
		{
			setFailSetting(eData, paramMap, strMsg );
			return eData;
		}
		*/

		// 여기에서 대상 테이블로 데이타를 복사한다.		
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifGsExrMap);
				String sEaiStatus = (String)ifGsExrMap.get("PV_STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus))
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_MC_CODE_H_UPDATE", paramMap);
				else
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_MC_CODE_H_MERGE", paramMap);

				LOG.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
				}
				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				LOG.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IF_MC_CODE_H_UPDATE", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 공통코드정보(H) 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 국가정보, 법인코드
	 *       오류시 temp 테이블에 남길 메세지와 오류 코드를 만든다.
	 * 3. eai_op 코드에 따라 진행한다.
	 * 		'I','U' : merge
	 *      'D' : delete
	 * 4. temp 테이블에 결과를 남기고 최종 결과를 리턴한다.
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private KilsWsEaiData ifCm01003(KilsWsEaiData eData) {
		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		LOG.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifGsExrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_IF_MC_CODE_M_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifGsExrMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		paramMap.put("PV_CODE_GROUP_CD", ifGsExrMap.get("PV_CODE_GROUP_CD"));

		if(false == (paramMap.get("PV_CODE_GROUP_CD").equals("RC00010") || paramMap.get("PV_CODE_GROUP_CD").equals("RC00015")
				|| paramMap.get("PV_CODE_GROUP_CD").equals("RC00017") || paramMap.get("PV_CODE_GROUP_CD").equals("RC00019")
				|| paramMap.get("PV_CODE_GROUP_CD").equals("RC00021") || paramMap.get("PV_CODE_GROUP_CD").equals("RC00023")
				|| paramMap.get("PV_CODE_GROUP_CD").equals("RC00024") || paramMap.get("PV_CODE_GROUP_CD").equals("RC00026")
				|| paramMap.get("PV_CODE_GROUP_CD").equals("RC00066") || paramMap.get("PV_CODE_GROUP_CD").equals("RC00225"))) {

			Map ifGsExrMap1 = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_IF_MC_CODE_MPG_SELECT");

			if(ifGsExrMap1 == null) {
//				strMsg += msgSvc.getMessage("Not Exists", "CD_TCD", (String)ifGsExrMap.get("CD_TCD")) + strAdd;
			}
			if(false == "".equals(strMsg)) {
				setFailSetting(eData, paramMap, strMsg);
				return eData;
			}

			if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00029")) {
				if(ifGsExrMap.get("PV_CTL_1").equals("A")) { // 대분류
					paramMap.put("CD_TCD", "CM043");
				} else if(ifGsExrMap.get("PV_CTL_1").equals("B")) { // 중분류
					paramMap.put("CD_TCD", "CM044");
				} else if(ifGsExrMap.get("PV_CTL_1").equals("C")) { // 소분류
					paramMap.put("CD_TCD", "CM070");
				}
			} else {
				paramMap.put("CD_TCD", ifGsExrMap1.get("CD_TCD"));
			}

		}

		// 공통코드 명 체크 
		int compNmMap = ((Integer)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI2_TMDM_IF_MC_CODE_B_EMP_SELECT")).intValue();
		if(compNmMap > 0)
//			strMsg += msgSvc.getMessage("Not Exists", "PV_NAME", "") + strAdd;

		//체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
		}

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				int iCnt2 = 0; // 실행건수			
				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifGsExrMap);
				String sEaiStatus = (String)ifGsExrMap.get("PV_STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00019")) { // 운송사코드
						//iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_CARR_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00024")) { // 통화코드
						//iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_CURR_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00017")) { // 언어코드
						iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_LANG_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00023")) { // 국가코드
						iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_NATION_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00015")) { // 주코드
						iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_STATE_PRV_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00026")) { // TIME ZONE
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_TZ_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00021")) { // UOM					
						//iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TWMS_MA_UNIT_TYP_MERGE", paramMap);/* WMS UOM 입력 */
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_UOM_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00010")) {
						// 실적집계분류
						paramMap.put("P_ITEM_TYP_CCD", "PC");
						//nexacroService.update("ifeai3-sql.IFEAI3_TWMS_MA_ITEM_GRP_MERGE", paramMap);/* WMS 품목그룹 입력  */
						//nexacroService.update("ifeai3-sql.IFEAI3_TWMS_MA_STRR_ITEM_GRP_MERGE", paramMap);/* WMS 창고 품목그룹 입력 */
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IT_ITEM_TYPE_GRP_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00066")) { // 위험물
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IT_IMDG_UN_NO_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00225")) { // 사업장정보
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_BIZ_PLACE_UPDATE", paramMap);
					} else {
						iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_MC_COD_M_UPDATE", paramMap);
						iCnt2 = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_MC_COD_B_UPDATE", paramMap);
					}
				}

				else {
					if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00019")) { // 운송사코드
						//iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_CARR_MERGE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00024")) { // 통화코드
						//iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_CURR_MERGE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00017")) { // 언어코드
						iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_LANG_MERGE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00023")) { // 국가코드
						iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_NATION_MERGE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00015")) { // 주코드
						iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_GS_STATE_PRV_MERGE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00026")) { // TIME ZONE
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_TZ_MERGE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00021")) { //UOM
						//iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TWMS_MA_UNIT_TYP_MERGE", paramMap);/* WMS UOM 입력 */
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_UOM_MERGE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00010")) { // 대한통운 품목유형군                                                    
						// 실적집계분류
						paramMap.put("P_ITEM_TYP_CCD", "PC");
						//nexacroService.update("ifeai3-sql.IFEAI3_TWMS_MA_ITEM_GRP_MERGE", paramMap);/* WMS 품목그룹 입력  */
						//nexacroService.update("ifeai3-sql.IFEAI3_TWMS_MA_STRR_ITEM_GRP_MERGE", paramMap);/* WMS 창고 품목그룹 입력 */
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IT_ITEM_TYPE_GRP_MERGE", paramMap);
						//iCnt2 = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IT_ITEM_TYPE_GRP_HRCHY_UPDATE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00066")) { // 위험물
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IT_IMDG_UN_NO_MERGE", paramMap);
					} else if(paramMap.get("PV_CODE_GROUP_CD").equals("RC00225")) { // 사업장
						//iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_BIZ_PLACE_MERGE", paramMap);
					} else {
						iCnt = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_MC_CODE_M_MERGE", paramMap);
						iCnt2 = nexacroService.update("ifeai1-sql.IAEAI1_TMDM_MC_CODE_B_MERGE", paramMap);
					}
				}

				LOG.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
				}

				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				LOG.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai1-sql.IAEAI1_TMDM_IF_MC_CODE_M_UPDATE", paramMap);
		nexacroService.update("ifeai1-sql.IAEAI1_TMDM_IF_MC_CODE_B_UPDATE", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 선박정보 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 선박구분,국가정보,선사정보
	 *       오류시 temp 테이블에 남길 메세지와 오류 코드를 만든다.
	 * 3. eai_op 코드에 따라 진행한다.
	 * 		'I','U' : merge
	 *      'D' : delete
	 * 4. temp 테이블에 결과를 남기고 최종 결과를 리턴한다.
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private KilsWsEaiData ifCm01025(KilsWsEaiData eData) {
		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		LOG.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifGsExrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_IF_GS_VSL_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifGsExrMap);

		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		strMsg += checkDataNull(ifGsExrMap, "PV_VSL_CLS", paramMap);
		strMsg += checkDataNull(ifGsExrMap, "PV_COUNTRY1", paramMap);
		strMsg += checkDataNull(ifGsExrMap, "PV_CARR_CD", paramMap);

		// null 이 아닌경우 체크(NULL 인경우 체크 안됨 EAI 인터페이스 할때 NULL 여부 체크 할것인지 ?)
		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_VSL_CLS")) {
			paramMap.put("PV_VSL_CLS", ifGsExrMap.get("PV_VSL_CLS"));
			Map vslCcd = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_MC_CODE_B_VSL_SELECT");
			if(vslCcd == null || CommonUtil.isEmpty(vslCcd, "CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_VSL_CLS", (String)ifGsExrMap.get("PV_VSL_CLS")) + strAdd;
			}
		}

		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_COUNTRY1")) {
			paramMap.put("PV_COUNTRY1", ifGsExrMap.get("PV_COUNTRY1"));
			Map nation = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_GS_NATION_VSL_SELECT");
			if(nation == null || CommonUtil.isEmpty(nation, "NATION_CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_COUNTRY1", (String)ifGsExrMap.get("PV_COUNTRY1")) + strAdd;
			}
		}

		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_CARR_CD")) {
			paramMap.put("PV_CARR_CD", ifGsExrMap.get("PV_CARR_CD"));
			Map carrRepCd = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_GS_CARR_SELECT");
			if(carrRepCd == null || CommonUtil.isEmpty(carrRepCd, "CARR_REP_CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_CARR_CD", (String)ifGsExrMap.get("PV_CARR_CD")) + strAdd;
			}
		}

		//체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			//			return eData;
		}

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifGsExrMap);
				paramMap.put("PV_CODE", ifGsExrMap.get("PV_CODE"));
				String sEaiStatus = (String)ifGsExrMap.get("STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus))
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_VSL_DELETE", paramMap);
				else
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_VSL_MERGE", paramMap);

				LOG.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt != 1) {
					strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
				}
				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				LOG.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IF_GS_VSL_UPDATE", paramMap);
		nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IF_GS_VSL_NM_UPDATE", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 선박장비정보 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 차량장비종류,선박정보
	 *       오류시 temp 테이블에 남길 메세지와 오류 코드를 만든다.
	 * 3. eai_op 코드에 따라 진행한다.
	 * 		'I','U' : merge
	 *      'D' : delete
	 * 4. temp 테이블에 결과를 남기고 최종 결과를 리턴한다.
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private KilsWsEaiData ifCm01026(KilsWsEaiData eData) {
		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		LOG.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifGsExrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_IF_GS_VSL_EQP_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifGsExrMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		strMsg += checkDataNull(ifGsExrMap, "PV_EQUIP_CATE", paramMap);
		strMsg += checkDataNull(ifGsExrMap, "PV_SHIP_CD", paramMap);

		if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_SHIP_CD")) {
			paramMap.put("PV_SHIP_CD", ifGsExrMap.get("PV_SHIP_CD"));
			Map vslChk = (Map)nexacroService.queryForObject(paramMap, "ifeai1-sql.IFEAI1_TMDM_GS_VSL_CHECK"); // 선박정보
			if(vslChk == null || CommonUtil.isEmpty(vslChk, "VSL_CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_SHIP_CD", (String)ifGsExrMap.get("PV_SHIP_CD")) + strAdd;
			}
		}

		//체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			//			return eData;
		}

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifGsExrMap);
				paramMap.put("PV_CODE", ifGsExrMap.get("PV_CODE"));
				String sEaiStatus = (String)ifGsExrMap.get("STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus))
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_VSL_EQP_DELETE", paramMap);
				else
					iCnt = nexacroService.update("ifeai1-sql.IFEAI1_TMDM_GS_VSL_EQP_MERGE", paramMap);

				LOG.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
				}
				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				LOG.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai1-sql.IFEAI1_TMDM_IF_GS_VSL_EQP_UPDATE", paramMap);

		return eData;
	}

	// ============  내부함수 ====================================================================//
	/*
	 * I/F 성공인 경우에는 EAI_STATE='S', EAI_MSG="Success" 로 업데이트 한다.
	 * I/F 오류인 경우에는 EAI_STATE='F', EAI_MSG=에러메세지  로 업데이트 한다.
	 */

	/**
	 * 내용 : 최종 성공했을때 셋팅이다.
	 * @param eData
	 * @param paramMap
	 * @throws Exception
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	private void checkSuccess(KilsWsEaiData eData, Map paramMap) {
		if("OK".equals(eData.getCode())) {
			// 리턴값 셋팅
			eData.setCode("OK");
			eData.setStatus("S");
//			eData.setMessage(msgSvc.getMessage("Success"));

			// temp 테이블 등록값
			paramMap.put("EAI_STATE", "S");
//			paramMap.put("EAI_MSG", msgSvc.getMessage("Success"));
			paramMap.put("INSTANCEID", eData.getInstanceId());
		} else {
			//msgSvc.rollbackAction();
			LOG.info(strLog + " checkSuccess RollBack ");
		}
	}

	/**
	 * 내용 : 실패 처리를 셋팅한다.
	 * @param eData
	 * @param paramMap
	 * @param sMsg
	 * @throws Exception
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	private void setFailSetting(KilsWsEaiData eData, Map paramMap, String sMsg) {
		// 리턴값 셋팅
		eData.setCode("NG");
		eData.setStatus("F");
		eData.setMessage(sMsg);

		// temp 테이블 등록값
		paramMap.put("EAI_STATE", "F");
		paramMap.put("EAI_MSG", sMsg);
		paramMap.put("INSTANCEID", eData.getInstanceId());
	}

	/**
	 * 내용 : eai data select 이후 초기 체크 조건 처리.
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	private String checkDataFirst(Map map) {
		if(map == null){
			LOG.info("INSTANCE_ID Not Exists");
//			return msgSvc.getMessage("INSTANCE_ID Not Exists");
		}
		else {
			//EAI_STATE : Y 인 경우만 처리가능
			String sEaiState = "N";
			if(!CommonUtil.isEmpty(map, "EAI_STATE")){
				sEaiState = (String)map.get("EAI_STATE");
			}
		}
		return "";
	}

	/**
	 * 내용 : Not Null 컬럼 체크
	 * @param map
	 * @param sCol
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private String checkDataNotNull(Map map, String sCol, Map paramMap) {
		if(CommonUtil.isEmpty(map, sCol)) {
			paramMap.put(sCol, "X"); // TODO: Not Null 처리에 대해 전사 mdm과 추가 협의후 제거 여부 결정 예정.
			//return (msgSvc.getMessage("is Null", sCol) +strAdd); //null 이 들어와도 쿼리에서 NVL 처리한다.
		} else {
			paramMap.put(sCol, map.get(sCol));
		}
		return "";
	}

	/**
	 * 내용 : Null 컬럼 체크
	 *       전사 MDM과의 협의에 따라 변화의 소지가 있어서 함수로 제어한다.
	 * @param map
	 * @param sCol
	 * @param paramMap
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private String checkDataNull(Map map, String sCol, Map paramMap) {
		// Map 에 null 값을 넣으면 NullPointException 이 뜬다.
		if(false == CommonUtil.isEmpty(map, sCol))
			paramMap.put(sCol, map.get(sCol));

		return "";
	}

	/**
	 * 내용 : eai op 코드에 따른 오류 메세지를 리턴한다.
	 *       메세지 코드 변경에 대비해서 최대한 함수화 하는거다.
	 * @param sEaiOp
	 * @return
	 * @throws Exception
	 */
	private String getOpMsg(String sEaiOp) {
		String strMsg = "";

		if("D".equals(sEaiOp)){
//			strMsg = msgSvc.getMessage("Delete Error");
		}else if("U".equals(sEaiOp)){
//			strMsg = msgSvc.getMessage("Update Error");
		}else{
//			strMsg = msgSvc.getMessage("Insert Error");
		}
		
		return strMsg;
	}

	/**
	 * 내용 : op코드를 가져오는 함수. 코드 단순화. NullPointException 방지.
	 * @param map
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes"})
	private String getOpCode(Map map) {
		String sEaiOp = "";
		if(false == CommonUtil.isEmpty(map, "EAI_OP"))
			sEaiOp = (String)map.get("EAI_OP");

		return sEaiOp;
	}

} // end of class
