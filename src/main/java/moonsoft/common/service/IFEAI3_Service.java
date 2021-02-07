package moonsoft.common.service;


import java.util.HashMap;
import java.util.List;
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
 *   IF-CM-01-008 사용자 수신
 *   IF-CM-01-009 장비 수신
 *   IF-CM-01-010 장비제원 수신
 *   IF-CM-01-011 구매품목 수신
 *   IF-CM-01-012 화주품목 수신
 *   IF-CM-01-019 권역 수신
 *   IF-CM-01-021 사용자-역할 맵핑 수신  --1:N 처리 방식
 *   IF-CM-01-022 사용자-창고 맵핑 수신  --1:N 처리 방식
 *   IF-CM-01-023 사용자-조직 맵핑 수신  --1:N 처리 방식
 *   IF-CM-01-024 사용자-화주 맵핑 수신  --1:N 처리 방식
 * 작  성  자       :
 * 최초작성일      :
 * 버    전         :
 * 변경이력        :
 ******************************************************************************/

@Service
public class IFEAI3_Service {

	private static final Log logger = LogFactory.getLog(IFEAI3_Service.class);

	/* =============================================================================== */
	/* !!!!!!!!!!!!!!!!!!!!!!!! 소스 추가 시 주석은 필수 입니다. !!!!!!!!!!!!!!!!!!!!!!!!!! */
	/* =============================================================================== */

	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	// 메세지 추가 구분자.
	private static final String strAdd = " +";

	// 로그용 메세지
	private static final String strLog = "IFEAI3_Service :: ";

	/**
	 * 인터페이스 모듈id 별로 처리함수로 분기한다.
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	public KilsWsEaiData switchService(KilsWsEaiData eData) {
		String strModuleName = eData.getModuleName();

		if("IF-CM-01-008".equals(strModuleName)) { //사용자  정보
			eData = this.ifCm01008(eData);
		}else if("IF-CM-01-012".equals(strModuleName)) { //화주 품목 수신 
			eData = this.ifCm01012(eData);
		}else if("IF-CM-01-009".equals(strModuleName)) { //장비 수신 
			eData = this.ifCm01009(eData);
		}

		return eData;
	}

	/**
	 *  IF-CM-01-008 사용자 수신
	 *  I/F 처리 내용 : 전사 MDM으로 부터 수신된 사용자 정보 Temp table (GCOM.TADM_IF_USER)로부터
	 *  사용자 정보(GCOM.TADM_USER) 운전자정보(GMDMS.TMDM_DR_INFO)에 데이터 입력
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	public KilsWsEaiData ifCm01008(KilsWsEaiData eData) {
		int iCnt = 0; // 사용자 실행건수

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - Temp table (GCOM.TADM_IF_USER)
		Map ifGsExrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_USER_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifGsExrMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		strMsg += checkDataNotNull(ifGsExrMap, "PV_USERID", paramMap);

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(!"".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.
		}

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifGsExrMap);
				String sEaiStatus = (String)ifGsExrMap.get("PV_STATUS");

				if("BLCK".equals(sEaiStatus) && ("U".equals(sEaiOp) || "D".equals(sEaiOp))) {
					nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IF_USER_DELETE", paramMap); // 사용자 정보 삭제
					nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IF_DR_INFO_DELETE", paramMap); // 운전자 정보 삭제 (정산 김태훈님 요청)					
				} else {

					int iSeCnt = 0; // 운전원 실행건수
					int vCnt = 0; // 운전원여부

					// 2. 체크 : 1>국가코드 , 2>회사ID , 3>조직정보, 4>사용자유형
					/*****************************************************************************
					 * DATA CHECK 
					 ***************************************************************************** */
					strMsg += checkDataNotNull(ifGsExrMap, "PV_COUNTRY_CD", paramMap); //NATION_CD ?
					strMsg += checkDataNull(ifGsExrMap, "PV_DEPT_CD", paramMap);
					strMsg += checkDataNull(ifGsExrMap, "PV_COMP_CD", paramMap);
					strMsg += checkDataNull(ifGsExrMap, "PV_EMP_NM_LO", paramMap);//사용자명 체크
					strMsg += checkDataNull(ifGsExrMap, "PV_OFFI_TYPE", paramMap);//상세 재직 유형 체크
					strMsg += checkDataNull(ifGsExrMap, "PV_JOB_KIND_CD2", paramMap); //직종코드 유형 체크
					strMsg += checkDataNull(ifGsExrMap, "PV_IN_OFFI_NY", paramMap); //재직 여부 체크 오류

					// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
					// 국가코드 체크
					if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_COUNTRY_CD")) {
						Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_NATION_SELECT");
						if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
							logger.info("Not Exists");
						}
					}

					// 2>회사 ID 체크
					if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_COMP_CD")) {
						paramMap.put("CD_TCD", "CM046");
						paramMap.put("PV_CD", (String)ifGsExrMap.get("PV_COMP_CD"));
						Map compMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_MC_CODE_B_SELECT");
						if(compMap == null || CommonUtil.isEmpty(compMap, "CD")){
							logger.info("Not Exists");
						}
					}

					// 3> 조직 정보
					if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_DEPT_CD")) {
						Map deptMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.TMDM_BP_CORP_SELECT");
						if(deptMap == null || CommonUtil.isEmpty(deptMap, "CORP_ID")){
							logger.info("Not Exists");
						}
					}

					// 4>사용자 유형 체크
					if(false == CommonUtil.isEmpty(ifGsExrMap, "PV_USER_TYPE")) {
						paramMap.put("CD_TCD", "CM079");
						paramMap.put("PV_CD", (String)ifGsExrMap.get("PV_USER_TYPE"));
						Map compMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_MC_CODE_B_SELECT");
						if(compMap == null || CommonUtil.isEmpty(compMap, "CD")){
							logger.info("Not Exists");
						}
					}

					// 체크 오류가 발생하면 리턴값을 셋팅한다.
					if(!"".equals(strMsg)) {
						setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.
					}

					/*****************************************************************************
					 * DATA CHECK END
					 ***************************************************************************** */

					if("OK".equals(eData.getCode())) {
						// 1> 운전원정보의 파라미터 국가코드 체크시 lang 가져와 셋팅한다.(OFFICL_LANG_CD)
						Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_NATION_SELECT");
						if(nationMap != null && false == CommonUtil.isEmpty(nationMap, "OFFICL_LANG_CD"))
							paramMap.put("OFFICL_LANG_CD", nationMap.get("OFFICL_LANG_CD"));

						if(false == CommonUtil.isEmpty(paramMap, "PV_DEPT_CD")) {
							// 2 >운전원 정보의 파라미터 셋팅 (직종 코드명 가져와서 셋팅한다)
							Map deptMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.TMDM_BP_CORP_SELECT");
							if(deptMap != null && false == CommonUtil.isEmpty(deptMap, "ABBR_NM")) {
								paramMap.put("WORK_TYP_NM", deptMap.get("ABBR_NM"));
								logger.info(strLog + "WORK_TYP_NM = " + deptMap.get("ABBR_NM"));
							}
						}
						paramMap.put("INSTANCEID", eData.getInstanceId());

						// 수신된 데이터가 운전원인지 여부 체크 로직
						vCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.TMDM_DRIVER_CHK")).intValue();
						iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IF_USER_MERGE", paramMap); // 사용자 정보 입력
//						if(vCnt == 1)
							//iSeCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IF_DR_INFO_MERGE", paramMap); // 운전원 정보 입력						
					}
				}

				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);
			} catch(Exception e) {
				logger.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IF_USER_UPDATE", paramMap);

		return eData;
	}

	/**
	 *  IF-CM-01-021 사용자 역활정보 수신 - 1대N 처리 방식 임
	 *  I/F 처리 내용 : 전사 MDM으로 부터 수신된 사용자 정보 Temp table (GCOM.TADM_IF_USER_ROLE 로부터
	 *  GCOM.TADM_USER_ROLE 데이터 입력
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	public KilsWsEaiData ifCm01021(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - Temp table (GCOM.TADM_IF_USER)
		List ifGsExrList = (List)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_BP_CORP_SELECT");

		boolean isOkAll = true;
		String strMsg = "";
		HashMap map = null;
		int sUserCnt = 0;
		int sRoleCnt = 0;
		int iCnt = 0;
		String sEaiOp = "";

		// 1대 N 처리 방식임.
		for(int i = 0; i < ifGsExrList.size(); i++) {
			strMsg = "";
			map = (HashMap)ifGsExrList.get(i);
			if(map == null)
				continue;

			strMsg += checkDataNotNull(map, "PV_USER_ID", paramMap);
			strMsg += checkDataNotNull(map, "PV_AUTHORIZATION_CD", paramMap);
			/*
						logger.info(strLog+"PV_USER_ID = "+map.get("PV_USER_ID"));
						logger.info(strLog+"PV_AUTHORIZATION_CD = "+map.get("PV_AUTHORIZATION_CD"));
						logger.info(strLog+"EAI_OP = "+map.get("EAI_OP"));
			*/
			// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
			// 1>사용자이상유무 체크
			if(false == CommonUtil.isEmpty(map, "PV_USER_ID")) {
				sUserCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TADM_USER_SELECT")).intValue();
				if(sUserCnt == 0){
					logger.info("Not Exists");
				}
			}
			// 2>역할 이상유무
			if(false == CommonUtil.isEmpty(map, "PV_AUTHORIZATION_CD")) {
				sRoleCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TADM_ROLE_SELECT")).intValue();
				if(sRoleCnt == 0){
					logger.info("Not Exists");
				}
			}

			// 체크 오류가 발생하면 리턴값을 셋팅한다.
			if(false == "".equals(strMsg)) {
				setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.
				isOkAll = false;
			} else {
				// 여기에서 대상 테이블로 데이타를 복사한다.
				iCnt = 0; // 실행건수
				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				sEaiOp = getOpCode(map);
				String sEaiStatus = (String)map.get("STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus))
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TADM_ROLE_USER_UPDATE", paramMap); // 사용자 역활정보 삭제
				else
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TADM_ROLE_USER_MERGE", paramMap); // 사용자 역활정보 입력

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
			}
		}

		// 성공 체크 및 처리
		checkSuccessLoop(eData, paramMap, isOkAll);

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI3_TADM_IF_ROLE_USER_UPDATE", paramMap);

		return eData;
	}

	/**
	 *  IF-CM-01-023 사용자 조직  수신 - 1대N 처리 방식 임
	 *  I/F 처리 내용 : 전사 MDM으로 부터 수신된 사용자 정보 Temp table GCOM.TADM_IF_USER_CORP 로부터
	 *   (GCOM.TADM_USER_CORP 데이터 입력
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	public KilsWsEaiData ifCm01023(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();

		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - Temp table (GCOM.TADM_IF_USER)
		List ifGsExrList = (List)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CORP_SELECT");

		boolean isOkAll = true;
		String strMsg = "";
		HashMap map = null;
		Map deptMap = null;
		int sUserCnt = 0;
		int iCnt = 0;
		String sEaiOp = "";

		// 1대 N 처리 방식임.
		for(int i = 0; i < ifGsExrList.size(); i++) {
			strMsg = "";

			map = (HashMap)ifGsExrList.get(i);
			if(map == null)
				continue;

			strMsg += checkDataNotNull(map, "PV_USER_ID", paramMap);
			strMsg += checkDataNotNull(map, "PV_ORGANIZATION_CD", paramMap);
			/*
						logger.info(strLog+"PV_USER_ID = "+map.get("PV_USER_ID"));
						logger.info(strLog+"PV_PLACE_CD = "+map.get("PV_ORGANIZATION_CD"));
						logger.info(strLog+"EAI_OP = "+map.get("EAI_OP"));
			*/
			// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
			// 1>사용자이상유무 체크
			if(false == CommonUtil.isEmpty(map, "PV_USER_ID")) {
				sUserCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TADM_USER_SELECT")).intValue();
				if(sUserCnt == 0){
					logger.info("Not Exists");
				}
			}

			// 2>조직 이상유무
			if(false == CommonUtil.isEmpty(map, "PV_ORGANIZATION_CD")) {
				paramMap.put("PV_DEPT_CD", map.get("PV_ORGANIZATION_CD"));
				deptMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.TMDM_BP_CORP_SELECT");
				if(deptMap == null || CommonUtil.isEmpty(deptMap, "CORP_ID")){
					logger.info("Not Exists");
				}
			}

			// 체크 오류가 발생하면 리턴값을 셋팅한다.
			if(false == "".equals(strMsg)) {
				setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.
				isOkAll = false;
			} else {
				// 여기에서 대상 테이블로 데이타를 복사한다.
				iCnt = 0; // 실행건수

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				sEaiOp = getOpCode(map);
				String sEaiStatus = (String)map.get("STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TADM_USER_CORP_DELETE", paramMap); // 사용자 조직정보 삭제
				} else {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TADM_USER_CORP_MERGE", paramMap); // 사용자 조직정보 입력
				}

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
			}
		}

		// 성공 체크 및 처리
		checkSuccessLoop(eData, paramMap, isOkAll);

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI3_TADM_IF_USER_CORP_UPDATE", paramMap);

		return eData;
	}

	/**
	 *  IF-CM-01-022 사용자 창고 수신 - 1대N 처리 방식 임
	 *  I/F 처리 내용 : 전사 MDM으로 부터 수신된 사용자 정보 Temp table GCOM.TADM_IF_USER_WH 로부터
	 *   (GCOM.TADM_USER_WH 데이터 입력
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	public KilsWsEaiData ifCm01022(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - Temp table (GCOM.TADM_IF_USER)
		List ifGsExrList = (List)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TADM_IF_USER_WH_SELECT");

		boolean isOkAll = true;
		String strMsg = "";
		HashMap map = null;
		int sUserCnt = 0;
		int sWhMstrCnt = 0;
		int iCnt = 0;
		String sEaiOp = "";

		// 1대 N 처리 방식임.
		for(int i = 0; i < ifGsExrList.size(); i++) {
			strMsg = "";
			map = (HashMap)ifGsExrList.get(i);
			if(map == null)
				continue;

			strMsg += checkDataNotNull(map, "PV_USER_ID", paramMap);
			strMsg += checkDataNotNull(map, "PV_PLACE_CD", paramMap);

			logger.info(strLog + "PV_USER_ID = " + map.get("PV_USER_ID"));
			logger.info(strLog + "PV_PLACE_CD = " + map.get("PV_PLACE_CD"));
			logger.info(strLog + "EAI_OP = " + map.get("EAI_OP"));

			// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
			// 1>사용자이상유무 체크
			if(false == CommonUtil.isEmpty(map, "PV_USER_ID")) {
				sUserCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TADM_USER_SELECT")).intValue();
				if(sUserCnt == 0){
					logger.info("Not Exists");
				}
			}

			// 2>창고 이상유무
			if(false == CommonUtil.isEmpty(map, "PV_PLACE_CD")) {
				sWhMstrCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_WH_MSTR_SELECT")).intValue();
				if(sWhMstrCnt == 0){
					logger.info("Not Exists");
				}
			}

			// 체크 오류가 발생하면 리턴값을 셋팅한다.
			if(false == "".equals(strMsg)) {
				setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.
				isOkAll = false;
			} else {
				// 여기에서 대상 테이블로 데이타를 복사한다.
				iCnt = 0; // 실행건수

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete
				sEaiOp = getOpCode(map);
				String sEaiStatus = (String)map.get("STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TADM_USER_WH_DELETE", paramMap); // 창고 정보 삭제
				} else {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TADM_USER_WH_MERGE", paramMap); // 창고 정보 입력
				}

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
			}
		}

		// 성공 체크 및 처리
		checkSuccessLoop(eData, paramMap, isOkAll);

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI3_TADM_IF_USER_WH_UPDATE", paramMap);

		return eData;
	}

	/**
	 *  IF-CM-01-024 사용자 화주 수신 - 1대N 처리 방식 임
	 *  I/F 처리 내용 : 전사 MDM으로 부터 수신된 사용자 정보 Temp table GCOM.TADM_IF_USER_SHPR 로부터
	 *   (GCOM.TADM_USER_SHPR 데이터 입력
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	public KilsWsEaiData ifCm01024(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - Temp table (GCOM.TADM_IF_USER)
		List ifGsExrList = (List)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TADM_IF_USER_SHPR_SELECT");

		boolean isOkAll = true;
		String strMsg = "";
		HashMap map = null;
		int sUserCnt = 0;
		int sWhMstrCnt = 0;
		int iCnt = 0;
		String sEaiOp = "";

		// 1대 N 처리 방식임.
		for(int i = 0; i < ifGsExrList.size(); i++) {
			strMsg = "";
			map = (HashMap)ifGsExrList.get(i);
			if(map == null)
				continue;

			strMsg += checkDataNotNull(map, "PV_USER_ID", paramMap);
			strMsg += checkDataNotNull(map, "PV_PARTNER_CD", paramMap);
			/*
						logger.info(strLog+"PV_USER_ID = "+map.get("PV_USER_ID"));
						logger.info(strLog+"PV_PARTNER_CD = "+map.get("PV_PARTNER_CD"));
						logger.info(strLog+"EAI_OP = "+map.get("EAI_OP"));
			*/
			// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
			// 1>사용자이상유무 체크
			if(false == CommonUtil.isEmpty(map, "PV_USER_ID")) {
				sUserCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TADM_USER_SELECT")).intValue();
				if(sUserCnt == 0){
					logger.info("Not Exists");
				}
			}

			// 2>화주 이상유무
			if(false == CommonUtil.isEmpty(map, "PV_PARTNER_CD")) {
				sWhMstrCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_SHPR_SELECT")).intValue();
				if(sWhMstrCnt == 0){
					logger.info("Not Exists");
				}
			}

			// 체크 오류가 발생하면 리턴값을 셋팅한다.
			if(false == "".equals(strMsg)) {
				setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.
				isOkAll = false;
			} else {
				// 여기에서 대상 테이블로 데이타를 복사한다.
				iCnt = 0; // 실행건수

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				sEaiOp = getOpCode(map);
				String sEaiStatus = (String)map.get("STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TADM_SHPR_DELETE", paramMap); // 창고 정보 삭제
				} else {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TADM_SHPR_MERGE", paramMap); // 창고 정보 입력
				}

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
			}
		}

		// 성공 체크 및 처리
		checkSuccessLoop(eData, paramMap, isOkAll);

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI3_TADM_IF_SHPR_UPDATE", paramMap);

		return eData;
	}

	/**
	 *  IF-CM-01-011 구매 품목 수신
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	private KilsWsEaiData ifCm01011(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - 
		Map iftempMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CT_PART_SELECT");

		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(iftempMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		logger.info(strLog + "PV_MATNR = " + iftempMap.get("PV_MATNR"));
		logger.info(strLog + "EAI_OP = " + iftempMap.get("EAI_OP"));

		strMsg += checkDataNotNull(iftempMap, "PV_MATNR", paramMap);
		strMsg += checkDataNotNull(iftempMap, "EAI_OP", paramMap);

		//null check
		//if (false == CommonUtil.isEmpty(iftempMap, "PV_MATNR")) {
		if((String)iftempMap.get("PV_MATNR") == null) {
			logger.info("Not Exists");
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		//3>   #PV_ITEM_EN# 값 가져오기 
		Map ifenMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CT_PART_NM_SELECT_EN");

		if(ifenMap != null) {

			if((String)ifenMap.get("PV_ITEM") == null) {
				paramMap.put("PV_ITEM_EN", " "); // 값이 null 이면 공백 처리 
			} else {
				paramMap.put("PV_ITEM_EN", (String)ifenMap.get("PV_ITEM")); // 값이 null 이면 공백 처리 
			}
		} else {
			paramMap.put("PV_ITEM_EN", " "); // 값이 null 이면 공백 처리 
		}

		//paramMap.put("PV_MATNR", (String)iftempMap.get("PV_MATNR") );
		//4>  #PV_ALTER_ITEM1# ,   #PV_PARTS_MAKER_Q1#  값 가져오기 
		Map ifpartFrMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CT_PART_ALT_SELECT_1");

		if(ifpartFrMap != null) {
			paramMap.put("PV_ALTER_ITEM1", (String)ifpartFrMap.get("PV_ALTER_ITEM")); // 값이 null 이면 공백 처리
			paramMap.put("PV_PARTS_MAKER_Q1", (String)ifpartFrMap.get("PV_PARTS_MAKER_Q")); // 값이 null 이면 공백 처리		
		} else {
			paramMap.put("PV_ALTER_ITEM1", " "); // 값이 null 이면 공백 처리 
			paramMap.put("PV_PARTS_MAKER_Q1", " "); // 값이 null 이면 공백 처리 
		}

		//5>  #PV_ALTER_ITEM2# ,   #PV_PARTS_MAKER_Q2#  값 가져오기 
		Map ifpartSeMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CT_PART_ALT_SELECT_2");

		if(ifpartSeMap != null) {
			paramMap.put("PV_ALTER_ITEM2", (String)ifpartSeMap.get("PV_ALTER_ITEM")); // 값이 null 이면 공백 처리
			paramMap.put("PV_PARTS_MAKER_Q2", (String)ifpartSeMap.get("PV_PARTS_MAKER_Q")); // 값이 null 이면 공백 처리						
		} else {
			paramMap.put("PV_ALTER_ITEM2", " "); // 값이 null 이면 공백 처리 
			paramMap.put("PV_PARTS_MAKER_Q2", " "); // 값이 null 이면 공백 처리 
		}

		//6>  #PV_ALTER_ITEM3# ,   #PV_PARTS_MAKER_Q3#  값 가져오기 
		Map ifpartThMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CT_PART_ALT_SELECT_3");

		if(ifpartThMap != null) {
			paramMap.put("PV_ALTER_ITEM3", (String)ifpartThMap.get("PV_ALTER_ITEM")); // 값이 null 이면 공백 처리
			paramMap.put("PV_PARTS_MAKER_Q3", (String)ifpartThMap.get("PV_PARTS_MAKER_Q")); // 값이 null 이면 공백 처리					
		} else {
			paramMap.put("PV_ALTER_ITEM3", " "); // 값이 null 이면 공백 처리 
			paramMap.put("PV_PARTS_MAKER_Q3", " "); // 값이 null 이면 공백 처리 
		}

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 구매품목 입력 
				int iSeCnt = 0; // 구매품목 재원목록 입력

				paramMap.put("INSTANCEID", eData.getInstanceId());

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete
				String sEaiOp = getOpCode(iftempMap);
				String sEaiStatus = (String)iftempMap.get("PV_STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_CT_PART_UPDATE", paramMap); //구매정보 삭제 
					//iSeCnt = nexacroService.update(paramMap, "ifeai3-sql.IFEAI3_TMDM_CT_PART_MPG_UPDATE");  //구매정보 재원코드 삭제 
				} else {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_CT_PART_MERGE", paramMap); //구매품목 입력
					//iSeCnt =nexacroService.update(paramMap, "ifeai3-sql.IFEAI3_TMDM_CT_PART_MPG_MERGE");  //구매품목 재원코드 입력 
				}

				/*
				logger.info(strLog+"iCnt = "+iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				if (iCnt != 1 || iSeCnt!=1 ) {
					strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg );
				}
				 */
				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				logger.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		} else {
			setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI2_TMDM_IF_CT_PART_UPDATE", paramMap);

		return eData;

	}

	/**
	 *  IF-CM-01-009 장비 수신
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	private KilsWsEaiData ifCm01009(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - 
		Map iftempMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CT_EQP_SELECT");

		String strMsg = "";
		// 1-1.Data 유무 체크, EAI_STATE=Y 체크
		strMsg = checkDataFirst(iftempMap);

		// 에러 메시지 체크
		if(!"".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		//logger.info(strLog+"PV_CNTRL_BL = "+iftempMap.get("PV_CNTRL_BL"));
		//logger.info(strLog+"PV_DEPT_CD = "+iftempMap.get("PV_OP_BL"));
		//logger.info(strLog+"EAI_OP = "+iftempMap.get("EAI_OP"));

		// 1> #PV_CNTRL_BL# - 관리소속 체크
		if(!CommonUtil.isEmpty(iftempMap, "PV_CNTRL_BL")) {

			paramMap.put("PV_DEPT_CD", iftempMap.get("PV_CNTRL_BL"));
			Map cntrlMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.TMDM_BP_CORP_SELECT");

			if(cntrlMap == null || cntrlMap.size() == 0) {
				logger.info("Not Exists");
			}
		}

		// 2> #PV_OP_BL#  - 운영소속 체크
		if(!CommonUtil.isEmpty(iftempMap, "PV_OP_BL")) {

			paramMap.put("PV_DEPT_CD", iftempMap.get("PV_OP_BL"));
			Map opblMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.TMDM_BP_CORP_SELECT");

			if(opblMap == null || opblMap.size() == 0) {
				logger.info("Not Exists");
			}
		}

		// 3> 선사,항공사 정보 체크
//		if(!CommonUtil.isEmpty(iftempMap, "PV_CARR_CD")) {
//
//			paramMap.put("CARR_REP_CD", iftempMap.get("PV_CARR_CD"));
//			int gsCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_CARR_CHECK")).intValue();
//
//			if(gsCnt == 0) {
//				logger.info("Not Exists");
//			}
//		}

		// 4> 선적(국가) 정보 체크
//		if(!CommonUtil.isEmpty(iftempMap, "PV_NATION_CD")) {
//
//			paramMap.put("PV_COUNTRY_CD", iftempMap.get("PV_NATION_CD"));
//			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_NATION_SELECT");
//
//			if(nationMap == null || nationMap.size() == 0) {
//				logger.info("Not Exists");
//			}
//		}

		// 5> 공통코드 정보 체크 /////////////////////////////////////////////////////////////////////////
		// 장비 대 분류
		if(!CommonUtil.isEmpty(iftempMap, "PV_EQP_BIG_CTGRY")) {
			strMsg += chkValidCmCode(paramMap, "CM043", "PV_EQP_BIG_CTGRY", iftempMap.get("PV_EQP_BIG_CTGRY").toString());
		}
		// 장비 중 분류
		if(!CommonUtil.isEmpty(iftempMap, "PV_EQP_MID_CTGRY")) {
			strMsg += chkValidCmCode(paramMap, "CM044", "PV_EQP_MID_CTGRY", iftempMap.get("PV_EQP_MID_CTGRY").toString());
		}
		// 제작사
		if(!CommonUtil.isEmpty(iftempMap, "PV_MFER_CODE")) {
			strMsg += chkValidCmCode(paramMap, "CT131", "PV_MFER_CODE", iftempMap.get("PV_MFER_CODE").toString());
		}
		// 장비 소유구분
		if(!CommonUtil.isEmpty(iftempMap, "PV_EQP_CLS")) {
			strMsg += chkValidCmCode(paramMap, "CM036", "PV_EQP_CLS", iftempMap.get("PV_EQP_CLS").toString());
		}
		// 장비 상태
		if(!CommonUtil.isEmpty(iftempMap, "PV_EQP_STATUS")) {
			strMsg += chkValidCmCode(paramMap, "CM048", "PV_EQP_STATUS", iftempMap.get("PV_EQP_STATUS").toString());
		}
		// 차종코드
		if(!CommonUtil.isEmpty(iftempMap, "PV_EQUIP_TYPE")) {
			strMsg += chkValidCmCode(paramMap, "CM038", "PV_EQUIP_TYPE", iftempMap.get("PV_EQUIP_TYPE").toString());
		}
		// 장비 운영 상세
		if(!CommonUtil.isEmpty(iftempMap, "PV_MGMT_KND")) {
			strMsg += chkValidCmCode(paramMap, "CM037", "PV_MGMT_KND", iftempMap.get("PV_MGMT_KND").toString());
		}
		// 장비 업종 구분
		if(!CommonUtil.isEmpty(iftempMap, "PV_BIZ_CATE")) {
			strMsg += chkValidCmCode(paramMap, "CM056", "PV_BIZ_CATE", iftempMap.get("PV_BIZ_CATE").toString());
		}
		// 제원코드
		if(!CommonUtil.isEmpty(iftempMap, "PV_SPEC_CD")) {
			strMsg += chkValidCmCode(paramMap, "CM061", "PV_SPEC_CD", iftempMap.get("PV_SPEC_CD").toString());
		}
		// 톤급
		if(!CommonUtil.isEmpty(iftempMap, "PV_CAR_TON_CD")) {
			strMsg += chkValidCmCode(paramMap, "CM039", "PV_CAR_TON_CD", iftempMap.get("PV_CAR_TON_CD").toString());
		}
		// 사업부문
		if(!CommonUtil.isEmpty(iftempMap, "PV_BIZ_PART")) {
			strMsg += chkValidCmCode(paramMap, "CM084", "PV_BIZ_PART", iftempMap.get("PV_BIZ_PART").toString());
		}
		// 종목코드
		if(!CommonUtil.isEmpty(iftempMap, "PV_ITEM_CD")) {
			strMsg += chkValidCmCode(paramMap, "CM062", "PV_ITEM_CD", iftempMap.get("PV_ITEM_CD").toString());
		}
		// 장비 등록지
		if(!CommonUtil.isEmpty(iftempMap, "PV_EQP_REG_CITY")) {
			strMsg += chkValidCmCode(paramMap, "CM041", "PV_EQP_REG_CITY", iftempMap.get("PV_EQP_REG_CITY").toString());
		}
		// 장비 등록지 관할 관청
		if(!CommonUtil.isEmpty(iftempMap, "PV_EQP_REG_GOV")) {
			strMsg += chkValidCmCode(paramMap, "CM042", "PV_EQP_REG_GOV", iftempMap.get("PV_EQP_REG_GOV").toString());
		}
		// 연료종류
		if(!CommonUtil.isEmpty(iftempMap, "PV_FUEL")) {
			strMsg += chkValidCmCode(paramMap, "CM054", "PV_FUEL", iftempMap.get("PV_FUEL").toString());
		}
		// 매연저감장치 코드
		if(!CommonUtil.isEmpty(iftempMap, "PV_EXHT_CUT_DEVC_CD")) {
			strMsg += chkValidCmCode(paramMap, "CT354", "PV_EXHT_CUT_DEVC_CD", iftempMap.get("PV_EXHT_CUT_DEVC_CD").toString());
		}
		// 용차인경우
		if("5".equals(CommonUtil.getStr(iftempMap, "PV_EQP_CLS"))) {
			if(CommonUtil.isEmpty(iftempMap, "PV_COMP_CD")) {
				strMsg += "PV_COMP_CD NULL ERROR!";
			}
			if(CommonUtil.isEmpty(iftempMap, "PV_OP_BL")) {
				strMsg += "PV_OP_BL NULL ERROR!";
			}
		}
		/////////////////////////////////////////////////////////////////////////////////////////////

		Map eqpMap = new HashMap();

		if(strMsg.equals("")) {
			try {
				if(!CommonUtil.isEmpty(iftempMap, "EAI_OP")) {

					paramMap.put("CNTRL_NO", iftempMap.get("PV_MNG_NO"));
					String sEaiStatus = (String)iftempMap.get("PV_STATUS");

					if(iftempMap.get("EAI_OP").toString().equals("D") && "BLCK".equals(sEaiStatus)) {
						// 6> 장비 정보 삭제
						nexacroService.update("ifeai3-sql.IFEAI3_TMDM_CT_EQP_UPDATE", paramMap);

					} else {

						// 변경내용을 CT_EQP TABLE에 반영하기 전에 원래 값을 가져온다.
						eqpMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_CT_EQP_SELECT");

						// 7> 장비 정보 입력
						nexacroService.update("ifeai3-sql.IFEAI3_TMDM_CT_EQP_MERGE", paramMap);

						if("3".equals(CommonUtil.getStr(iftempMap, "PV_EQP_CLS")) || "5".equals(CommonUtil.getStr(iftempMap, "PV_EQP_CLS"))) { // 용차인경우

							paramMap.put("COMP_CD", iftempMap.get("PV_COMP_CD"));
							paramMap.put("OP_BL", iftempMap.get("PV_OP_BL"));
							paramMap.put("USER_ID", iftempMap.get("LASTMODIFICATIONUSRID"));

							//nexacroService.update("ifeai3-sql.TBCT_CT_EQP_LSP_MERGE", paramMap);
							//nexacroService.update("ifeai3-sql.TMDM_BP_CORP_MPG_MERGE", paramMap);
						}

					}
				}
				checkSuccess(eData, paramMap); // 성공 체크 및 처리

			} catch(Exception e) {
				logger.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		} else {
			setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		// 8> 장비 인터페이스 정보 수정
		nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IF_CT_EQP_UPDATE", paramMap);

		// 9> 장비명 인터페이스 정보 수정
		nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IF_CT_EQP_NM_UPDATE", paramMap);

		// 장비변경 내역 테이블 반영
//		if(!CommonUtil.isEmpty(iftempMap, "PV_MNG_NO") && strMsg.length() == 0) {

			//if ( eqpMap == null || eqpMap.isEmpty() ) {									// 장비 신규
//			if(iftempMap.get("EAI_OP").toString().equals("I")) { // 장비 신규
//
//				paramMap.put("CHG_ITEM", "00"); // 신규
//				paramMap.put("CHG_DATE", iftempMap.get("PV_EQP_REG_DATE")); // 변경 일자
//				paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_MNG_NO")); // 변경 후 내용
//
//			} else { // 장비 변경
//
//				paramMap.put("SALE_NO", iftempMap.get("PV_EQP_NO")); // 영업번호
//
//				if(iftempMap.get("EAI_OP").toString().equals("U1")) {
//					//if (!CommonUtil.isEmpty(iftempMap, "PV_VALIDFROM_01")) {					// 운영소속 적용일
//
//					paramMap.put("CHG_ITEM", "01"); // 변경 항목 : 이관 : OP_BL
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VALIDFROM_01")); // 변경 일자
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("OP_BL")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_OP_BL")); // 변경 후 내용
//
//					//} else if (!CommonUtil.isEmpty(iftempMap, "PV_VALIDFROM_02")) {			// 장비업종구분 적용일
//				} else if(iftempMap.get("EAI_OP").toString().equals("U2")) { // 장비업종구분 적용일
//
//					paramMap.put("CHG_ITEM", "02"); // 업종 : CAT_BUSI_CD
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VALIDFROM_02"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("CAT_BUSI_CD")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_BIZ_CATE")); // 변경 후 내용
//
//					//} else if (!CommonUtil.isEmpty(iftempMap, "PV_VALIDFROM_03")) {			// 휴차구분 적용일
//				} else if(iftempMap.get("EAI_OP").toString().equals("U3")) { // 휴차구분 적용일
//
//					paramMap.put("CHG_ITEM", "03"); // 휴차 : HALT_STATUS
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VALIDFROM_03"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("HALT_STATUS")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_HALT_STATUS")); // 변경 후 내용
//
//					//} else if (!CommonUtil.isEmpty(iftempMap, "PV_VALIDFROM_04")) {			// 장비관리구분 적용일
//				} else if(iftempMap.get("EAI_OP").toString().equals("U4")) { // 장비관리구분 적용일
//
//					paramMap.put("CHG_ITEM", "08"); // 차량관리 : EQP_CNTRL_CCD
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VALIDFROM_04"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("EQP_CNTRL_CCD")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_MGMT_KND")); // 변경 후 내용
//
//					//} else if (!CommonUtil.isEmpty(iftempMap, "PV_VALIDFROM_05")) {			// 장비 영업번호 적용일
//				} else if(iftempMap.get("EAI_OP").toString().equals("U5")) { // 장비 영업번호 적용일
//
//					paramMap.put("CHG_ITEM", "07"); // 영업번호
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VALIDFROM_05"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("SALE_NO")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_EQP_NO")); // 변경 후 내용
//
//					//} else if (!CommonUtil.isEmpty(iftempMap, "PV_VALIDFROM_06")) {			// 차량상태변경 적용일
//				} else if(iftempMap.get("EAI_OP").toString().equals("U6")) { // 차량상태변경 적용일
//
//					paramMap.put("CHG_ITEM", "04"); // 차량상태 : EQP_SCD 
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VALIDFROM_06"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("EQP_SCD")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_EQP_STATUS")); // 변경 후 내용
//
//					//} else if (!CommonUtil.isEmpty(iftempMap, "PV_VALIDFROM_07")) {			// 제원코드변경 적용일
//				} else if(iftempMap.get("EAI_OP").toString().equals("U7")) { // 제원코드변경 적용일
//
//					paramMap.put("CHG_ITEM", "05"); // BEF_SPEC_CD 변경
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VALIDFROM_07"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("BEF_SPEC_CD")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_SPEC_CD")); // 변경 후 내용
//
//				} else if(iftempMap.get("EAI_OP").toString().equals("U8")) { // 위수탁업체변경
//
//					paramMap.put("CHG_ITEM", "09"); // 위수탁업체변경 적용일
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VALIDFROM_08"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("CONSIGN_COMP")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_CONSIGN_COMP")); // 변경 후 내용
//				} else if(iftempMap.get("EAI_OP").toString().equals("U9")) { // 코스트센터 변경
//
//					paramMap.put("CHG_ITEM", "10");
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VLDFR_COSTC"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("COSTC")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_COSTC")); // 변경 후 내용
//
//				} else if(iftempMap.get("EAI_OP").toString().equals("UA")) { // 코스트센터 변경
//					paramMap.put("CHG_ITEM", "11");
//					paramMap.put("CHG_DATE", iftempMap.get("PV_VLDFR_EQP_REG_GOV"));
//					paramMap.put("CHG_BEF_CONTENT", eqpMap.get("EQP_REG_GOV")); // 변경 전 내용
//					paramMap.put("CHG_AFT_CONTENT", iftempMap.get("PV_EQP_REG_GOV")); // 변경 후 내용
//				} else {
//					//그외 변경건의 경우
//					//eqpMap : iftempMap의 PV_EQP_REG_CITY 값 변경여부 확인
//					if(!StringUtils.equals((String)eqpMap.get("EQP_REG_CITY"), (String)iftempMap.get("PV_EQP_REG_CITY"))) {
//						paramMap.put("CHG_ITEM", "99");
//						paramMap.put("BF_EQP_REG_CITY", eqpMap.get("EQP_REG_CITY"));
//					}
//				}
//			}
//
//			if("1".equals(CommonUtil.getStr(iftempMap, "PV_EQP_CLS")) //직영
//					|| "2".equals(CommonUtil.getStr(iftempMap, "PV_EQP_CLS")) //위수탁
//					|| "3".equals(CommonUtil.getStr(iftempMap, "PV_EQP_CLS")) //출장소
//					|| "4".equals(CommonUtil.getStr(iftempMap, "PV_EQP_CLS")) //승용/업무용	나원상님 추가요청 2013.02.07
//					|| "7".equals(CommonUtil.getStr(iftempMap, "PV_EQP_CLS"))) { // PV_EQP_CLS 가 7인 데이터도 I/F 권영욱님 추가 요청
//
//				if(!CommonUtil.isEmpty(paramMap, "CHG_ITEM")) {
//
//					// 장비 변경 내역 테이블 반영
//					paramMap.put("USER_ID", iftempMap.get("LASTMODIFICATIONUSRID"));
//					paramMap.put("PV_EQP_CLS", iftempMap.get("PV_EQP_CLS"));
//
//					paramMap.put("PV_EQP_REG_CITY", iftempMap.get("PV_EQP_REG_CITY"));
//					paramMap.put("PV_EQP_REG_GOV", iftempMap.get("PV_EQP_REG_GOV"));
//
//					if(iftempMap.get("EAI_OP").toString().equals("U9")) { // 코스트센터 변경
//						String stat =
//								(String)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_EQ_EQP_HIST_LAST_STA_DATE_SELECT");
//
//						if("N".equals(stat)) {
//							//코스트센터 정보가 중간에 끼어든 경우
//							String chgDate =
//									(String)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_EQ_EQP_HIST_MIN_CHG_DATE_SELECT");
//							if(chgDate == null || "".equals(chgDate)) {
//								chgDate =
//										(String)nexacroService.queryForObject(paramMap,
//												"ifeai3-sql.IFEAI3_TMDM_EQ_EQP_HIST_MIN_STA_DATE_SELECT");
//							} else {
//								paramMap.put("PRM_CHG_DATE", chgDate);
//								nexacroService.update("ifeai3-sql.IFEAI3_TMDM_EQ_EQP_HIST_CHG_DATE_UPDATE", paramMap);
//
//							}
//
//							paramMap.put("PRM_CHG_DATE", chgDate);
//
//							nexacroService.insert("ifeai3-sql.IFEAI3_TMDM_EQ_EQP_CHANGE_INSERT_COSTC", paramMap);
//							// 신규건 오류로 수정 2013.01.23
//							Map transacEqpMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_CT_EQP_SELECT");
//							if(transacEqpMap != null) {
//								paramMap.putAll(transacEqpMap);
//								nexacroService.insert("ifeai3-sql.IFEAI3_TMDM_EQ_EQP_HIST_INSERT_COSTC", paramMap);
//							}
//
//						} else {
//							nexacroService.insert("ifeai3-sql.IFEAI3_GTMS_EQ_EQP_CHANGE_INSERT", paramMap);
//							//장비변경이력 단위공통으로 이관
//							nexacroService.insert("ifeai3-sql.IFEAI3_TMDM_EQ_EQP_CHANGE_INSERT", paramMap);
//
//							// 신규건 오류로 수정 2013.01.23
//							Map transacEqpMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_CT_EQP_SELECT");
//							if(transacEqpMap != null) {
//								paramMap.putAll(transacEqpMap);
//								nexacroService.insert("ifeai3-sql.IFEAI3_GTMS_EQ_EQP_HIST_INSERT", paramMap);
//								//장비변경이력 단위공통으로 이관
//								nexacroService.insert("ifeai3-sql.IFEAI3_TMDM_EQ_EQP_HIST_INSERT", paramMap);
//							}
//						}
//					} else if(StringUtils.equals("99", (String)paramMap.get("CHG_ITEM"))) {
//						nexacroService.update("ifeai3-sql.IFEAI3_TMDM_EQ_EQP_HIST_CHG_REG_CITY", paramMap);
//					} else {
//						nexacroService.insert("ifeai3-sql.IFEAI3_GTMS_EQ_EQP_CHANGE_INSERT", paramMap);
//						//장비변경이력 단위공통으로 이관
//						nexacroService.insert("ifeai3-sql.IFEAI3_TMDM_EQ_EQP_CHANGE_INSERT", paramMap);
//
//						// 신규건 오류로 수정 2013.01.23
//						Map transacEqpMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_CT_EQP_SELECT");
//						if(transacEqpMap != null) {
//							paramMap.putAll(transacEqpMap);
//							nexacroService.insert("ifeai3-sql.IFEAI3_GTMS_EQ_EQP_HIST_INSERT", paramMap);
//							//장비변경이력 단위공통으로 이관
//							nexacroService.insert("ifeai3-sql.IFEAI3_TMDM_EQ_EQP_HIST_INSERT", paramMap);
//						}
//					}
//
//					///////////////////////////////////////
//
//					if(paramMap.get("CHG_ITEM").toString().equals("07")) {
//
//						paramMap.put("REG_CORP_ID", eqpMap.get("CNTRL_BL"));
//						paramMap.put("REG_DATE", paramMap.get("CHG_DATE"));
//						paramMap.put("NEW_CORP_ID", iftempMap.get("PV_OP_BL"));
//						paramMap.put("NEW_CNTRL_NO", iftempMap.get("PV_MNG_NO"));
//
//						if(!CommonUtil.isEmpty(eqpMap, "SALE_NO")) {
//							// NEW_SALE_NO 영업번호 적용
//							nexacroService.insert("ifeai3-sql.TBCT_EQ_TE_MGT_MERGE", paramMap);
//
//							int maxSeq1 =
//									((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.TBCT_EQ_TE_MGT_HIST_SEQ_SELECT")).intValue();
//							paramMap.put("SEQ", maxSeq1);
//
//							// NEW_SALE_NO 영업번호 내역(Hist) 적용
//							nexacroService.insert("ifeai3-sql.TBCT_EQ_TE_MGT_HIST_INSERT", paramMap);
//
//							paramMap.put("SALE_NO", eqpMap.get("SALE_NO"));
//							paramMap.put("NEW_CORP_ID", "");
//							paramMap.put("NEW_CNTRL_NO", "");
//
//							if(!CommonUtil.isEmpty(paramMap, "SALE_NO")) {
//								// OLD_SALE_NO 영업번호 적용
//								nexacroService.insert("ifeai3-sql.TBCT_EQ_TE_MGT_MERGE", paramMap);
//							}
//
//							int maxSeq2 =
//									((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.TBCT_EQ_TE_MGT_HIST_SEQ_SELECT")).intValue();
//							paramMap.put("SEQ", maxSeq2);
//
//							// OLD_SALE_NO 영업번호 내역(Hist) 적용
//							nexacroService.insert("ifeai3-sql.TBCT_EQ_TE_MGT_HIST_INSERT", paramMap);
//						}
//					}
//				}
//			}
//		}

		return eData;

	}

	// 공통 코드 체크
	private String chkValidCmCode(Map paramMap, String cdTcd, String colName, String pvCd) {

		String strMsg = "";

		paramMap.put("CD_TCD", cdTcd);
		paramMap.put("PV_CD", pvCd);

		Map cmCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_MC_CODE_B_SELECT");

		if(cmCdMap == null || cmCdMap.size() == 0) {
			logger.info("Not Exists");
		}

		return strMsg;
	}

	/**
	 *  IF-CM-01-010 장비 제원  품목 수신
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	private KilsWsEaiData ifCm01010(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - 
		Map iftempMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CT_JEWON_SELECT");

		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(iftempMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		logger.info(strLog + "PV_CNTRL_NO = " + iftempMap.get("PV_CNTRL_NO"));
		logger.info(strLog + "EAI_OP = " + iftempMap.get("EAI_OP"));

		strMsg += checkDataNotNull(iftempMap, "PV_CNTRL_NO", paramMap);
		strMsg += checkDataNotNull(iftempMap, "EAI_OP", paramMap);

		//null check
		//if (false == CommonUtil.isEmpty(iftempMap, "PV_MATNR")) {
		if((String)iftempMap.get("PV_CNTRL_NO") == null) {
			logger.info("Not Exists");
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 구매품목 입력 

				paramMap.put("INSTANCEID", eData.getInstanceId());

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(iftempMap);
				String sEaiStatus = (String)iftempMap.get("STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_JEWON_UPDATE", paramMap);
				} else {
					iCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_CT_JEWON_MERGE", paramMap);
				}

				logger.info(strLog + "iCnt = " + iCnt);

				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);
			} catch(Exception e) {
				logger.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		} else {
			setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI2_TMDM_IF_CT_JEWON_UPDATE", paramMap);

		return eData;
	}

	/**
	 *  IF-CM-01-012 화주 품목 수신
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	private KilsWsEaiData ifCm01012(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - 
		Map iftempMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_IT_ITEM_MSTR_SELECT");

		String sysDiv = "";
		String strMsg = "";
		int AGGR_ANAL_SEQ = 0; // 집계분석순번
		int PERFOR_CRIT_SEQ = 0; // 실적기준순번

		// System 구분
		sysDiv = (String)iftempMap.get("SYS_DIV");

		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(iftempMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}
		logger.info(strLog + "PV_ITEM_CD = " + iftempMap.get("PV_ITEM_CD"));
		logger.info(strLog + "PV_SHIPPER_CD = " + iftempMap.get("PV_SHIPPER_CD"));
		logger.info(strLog + "PV_CUST_ITEM_NO = " + iftempMap.get("PV_CUST_ITEM_NO"));
		logger.info(strLog + "PV_AGGR_ANAL = " + iftempMap.get("PV_AGGR_ANAL"));
		logger.info(strLog + "PV_PERFOR_CRIT = " + iftempMap.get("PV_PERFOR_CRIT"));

		strMsg += checkDataNotNull(iftempMap, "PV_ITEM_CD", paramMap);
		strMsg += checkDataNotNull(iftempMap, "PV_SHIPPER_CD", paramMap);
		strMsg += checkDataNotNull(iftempMap, "PV_CUST_ITEM_NO", paramMap);
		//		strMsg += checkDataNotNull(iftempMap, "PV_AGGR_ANAL", paramMap);
		//		strMsg += checkDataNotNull(iftempMap, "PV_PERFOR_CRIT", paramMap);
		strMsg += checkDataNotNull(iftempMap, "EAI_OP", paramMap);
		//null check

		
		if(((String)iftempMap.get("PV_ITEM_CD") == null) || ((String)iftempMap.get("PV_SHIPPER_CD") == null) || ((String)iftempMap.get("PV_CUST_ITEM_NO") == null)) {
			logger.info("Not Exists");
		}
			
//		if((String)iftempMap.get("PV_ITEM_CD") == null) {
//			logger.info("Not Exists");
//		} else if((String)iftempMap.get("PV_SHIPPER_CD") == null) {
//			logger.info("Not Exists");
//		} else if((String)iftempMap.get("PV_CUST_ITEM_NO") == null) {
//			logger.info("Not Exists");
//		}

		// 고객품목, 대한통운 품목코드 중복 체크
		paramMap.put("PV_ITEM_CD", (String)iftempMap.get("PV_ITEM_CD"));
		paramMap.put("PV_SHIPPER_CD", (String)iftempMap.get("PV_SHIPPER_CD"));
		paramMap.put("PV_CUST_ITEM_NO", (String)iftempMap.get("PV_CUST_ITEM_NO"));

		int ItemDupMap = ((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IT_ITEM_DUP_CHK")).intValue();
		if(ItemDupMap != 0) {
			logger.info("Dup Check");
		}

		// 집계분석코드 공통코드(CM017) 체크
		if(false == CommonUtil.isEmpty(iftempMap, "PV_AGGR_ANAL")) {
			paramMap.put("CD_TCD", "CM017");
			paramMap.put("PV_CD", (String)iftempMap.get("PV_AGGR_ANAL"));
			Map compMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_MC_CODE_B_SELECT");
			if(compMap == null || CommonUtil.isEmpty(compMap, "CD")){
				logger.info("Not Exists");
			}
		}

		// 물자관리코드 공통코드(CM094) 체크
		if(false == CommonUtil.isEmpty(iftempMap, "PV_MTRL_MGMT")) {
			paramMap.put("CD_TCD", "CM094");
			paramMap.put("PV_CD", (String)iftempMap.get("PV_MTRL_MGMT"));
			Map compMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_GS_MC_CODE_B_SELECT");
			if(compMap == null || CommonUtil.isEmpty(compMap, "CD")){
				logger.info("Not Exists");
			}
		}

		//1>   SHPR_ID 데이타 체크  값 가져오기 
		Map ifShprMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_BP_SHPR_EMP_SELECT");

		if(ifShprMap == null) { //데이타가 없으면 바로 에러  
			logger.info("Not Exists");
		}

//		if(ifShprMap != null) { //데이타가 있을때만 체크		
//			if("10069897".equals((String)ifShprMap.get("SHPR_ID"))) {
//				if(CommonUtil.isNotEmpty(iftempMap, "PV_PERFOR_CRIT")) { //실적 기준 분류 데이타가 있으면
//					paramMap.put("ITEM_TYP_CCD", "PC");
//					paramMap.put("SHPR_ITEM_TYP_CD", (String)iftempMap.get("PV_PERFOR_CRIT"));
//					//2>  상품유형군 순번 데이타 조회
//					PERFOR_CRIT_SEQ =
//							((Integer)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IT_ITEM_TYPE_GRP_SELECT")).intValue();
//
//					if(PERFOR_CRIT_SEQ == 0) {
//						logger.info("Not Exists");
//					}
//				}
//			}
//		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.		

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				paramMap.put("INSTANCEID", eData.getInstanceId());

				logger.info("===================================================");
				logger.info(paramMap);
				logger.info("===================================================");

				//			
				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete
				String sEaiOp = getOpCode(iftempMap);
				String sEaiStatus = (String)iftempMap.get("PV_STATUS");

				if("D".equals(sEaiOp)) {
					nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IT_ITEM_MSTR_UPDATE", paramMap); //화주 정보 삭제 
//					if(0 != PERFOR_CRIT_SEQ) {
//						paramMap.put("ITEM_TYP_CCD", "PC");
//						paramMap.put("PV_ITEM_TYP_SEQ_NO", PERFOR_CRIT_SEQ);
//						nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IT_ITEM_TYPE_GRP_MPG_UPDATE", paramMap); //화주품목 유형군 매핑 정보삭제 => 실적집계
//					}

				} else {
					nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IT_ITEM_MSTR_MERGE", paramMap); //화주품목 정보입력 
//					if(0 != PERFOR_CRIT_SEQ) {
//						paramMap.put("ITEM_TYP_CCD", "PC");
//						paramMap.put("PV_ITEM_TYP_SEQ_NO", PERFOR_CRIT_SEQ);
//						nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IT_ITEM_TYPE_GRP_MPG_MERGE", paramMap); //화주품목 정보입력2  => 실적집계
//					}
				}

				/*--------------------------------------------------------------------------------------------------
				   품목 데이터 보관 시스템 I/F
				   : GLS 는 I/F 하지 않고, KX 일 때만 I/F 함.  
				--------------------------------------------------------------------------------------------------*/
//				if("KX".equals(sysDiv)) {
//					/*
//					 * 보관 품목 마스터 I/F START
//					 */
//					nexacroService.update("ifeai3-sql.IFEAI3_TWMS_IF_MA_ITEM_MERGE", paramMap); // TWMS_MA_ITEM 등록
//					nexacroService.update("ifeai3-sql.IFEAI3_TWMS_IF_MA_STRR_ITEM_MERGE", paramMap); // TWMS_MA_STRR_ITEM 등록
//
//					/*
//					 * 금호타이어 화주에 대해서는 ULS를 MDM으로 부터 I/F 받아 갱신하지 않는다.
//					 */
//					paramMap.put("EAI_OP", sEaiOp);
//					if("I".equals(sEaiOp)) { // 신규 생성 이라면
//						nexacroService.insert("ifeai3-sql.IF_TWMS_MA_UNIT_CFG_INSERT", paramMap); // TWMS_MA_UNIT_CFG 등록
//					}
//
//					if("10049104".equals((String)ifShprMap.get("SHPR_ID"))) {
//						if("D".equals(sEaiOp)) { // 삭제라면
//							nexacroService.delete("ifeai3-sql.IF_TWMS_MA_UNIT_CFG_DELETE", paramMap); // TWMS_MA_UNIT_CFG 삭제
//						}
//					} else {
//						if("U".equals(sEaiOp)) { // 수정 이라면
//							nexacroService.delete("ifeai3-sql.IF_TWMS_MA_UNIT_CFG_DELETE", paramMap); // TWMS_MA_UNIT_CFG 기존단위 삭제
//							nexacroService.insert("ifeai3-sql.IF_TWMS_MA_UNIT_CFG_INSERT", paramMap); // TWMS_MA_UNIT_CFG 등록 재 등록
//						} else if("D".equals(sEaiOp)) { // 삭제라면
//							nexacroService.delete("ifeai3-sql.IF_TWMS_MA_UNIT_CFG_DELETE", paramMap); // TWMS_MA_UNIT_CFG 삭제
//						}
//						nexacroService.delete("ifeai3-sql.IFEAI3_TWMS_MA_UNIT_CFG_MERGE", paramMap); //추가 입수 관리
//					}
//
//					int insCout = nexacroService.update("ifeai3-sql.IFEAI3_TWMS_IF_BOM_P_INSERT", paramMap); // BOM TEMP HEADER TABLE 데이타 생성
//					if(insCout > 0) { // BOM TEMP HEADER 생성 되었다면
//						nexacroService.delete("ifeai3-sql.IFEAI3_TWMS_IF_BOM_C_DELETE", paramMap); // 기존 BOM TEMP DETAIL TABLE 데이타 삭제
//						nexacroService.insert("ifeai3-sql.IFEAI3_TWMS_IF_BOM_C_INSERT", paramMap); // BOM TEMP DETAIL TABLE 데이타 재 생성 
//						nexacroService.insert("ifeai3-sql.IFEAI3_TWMS_IF_BOM_H_INSERT", paramMap); // GWMS.TWMS_MA_BOM_H TABLE 정보 갱신
//					}
//				}

				/*
				 * 보관 품목 마스터 I/F END
				 */
				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);
			} catch(Exception e) {
				logger.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		} else {
			setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI2_TMDM_IF_ITEM_MSTR_UPDATE", paramMap); //화주 품목 인터페이스 수정 
		nexacroService.update("ifeai3-sql.IFEAI2_TMDM_IF_ITEM_PRODUCT_UPDATE", paramMap); //화주 구성품 인터페이스 수정
		return eData;
	}

	/**
	 *  IF-CM-01-029 장비모델 장비부품 맵핑
		1. 인터페이스 이상유무 체크
		 ==> 이상 있을 경우 IF결과 수정,에러 데이터 RET
		2 EAI_OP 가 I,U일 경우 MEARGE 처리
		                  D 일경우 UPDATE
		3 인터페이스 결과 데이터 RETURN 데이터UPDATE
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	private KilsWsEaiData ifCm01029(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다. - 
		Map iftempMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IF_CT_PART_MPG_SELECT");

		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(iftempMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		logger.info(strLog + "EAI_OP = " + iftempMap.get("EAI_OP"));

		strMsg += checkDataNotNull(iftempMap, "PV_EQP_PART_NO", paramMap);
		strMsg += checkDataNotNull(iftempMap, "EAI_OP", paramMap);

		//null check
		//if (false == CommonUtil.isEmpty(iftempMap, "PV_MATNR")) {
		if((String)iftempMap.get("PV_EQP_PART_NO") == null) {
			logger.info("Not Exists");
		}

		// 1> #PV_SPEC_CD# - 장비모델 체크

		if(!CommonUtil.isEmpty(iftempMap, "PV_EQP_MODEL_NO")) {

			paramMap.put("PV_SPEC_CD", iftempMap.get("PV_EQP_MODEL_NO"));
			Map CtJewonMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_CT_JEWON_SELECT");

			if(CtJewonMap == null || CtJewonMap.size() == 0) {
				logger.info("Not Exists");
			}
		}

		// 2> #PV_MATNR# - 구매품목 품목 체크
		if(!CommonUtil.isEmpty(iftempMap, "PV_EQP_PART_NO")) {

			paramMap.put("PV_MATNR", iftempMap.get("PV_EQP_PART_NO"));
			Map CtPartMap = (Map)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_CT_PART_SELECT");

			if(CtPartMap == null || CtPartMap.size() == 0) {
				logger.info("Not Exists");
			}
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.	

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 구매품목 입력 
				int iSeCnt = 0; // 구매품목 재원목록 입력

				paramMap.put("INSTANCEID", eData.getInstanceId());

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(iftempMap);
				String sEaiStatus = (String)iftempMap.get("STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					iSeCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_CT_PART_MPG_UPDATE", paramMap); //구매정보 장비모델 삭제 
				} else {
					iSeCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_CT_PART_MPG_MERGE", paramMap); //구매품목 장비모델 입력 
				}

				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				logger.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		} else {
			setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IF_CT_PART_MPG_UPDATE", paramMap);

		return eData;

	}

	/**
	 *  IF-CM-01-031 품목 수신
	 *
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	private KilsWsEaiData ifCm01031(KilsWsEaiData eData) {
		int returnCnt = 0;

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map iftempMap = (HashMap)nexacroService.queryForObject(paramMap, "ifeai3-sql.IFEAI3_TMDM_IT_ITEM_TYPE_STATUS_SELECT");

		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(iftempMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		logger.info(strLog + "EAI_OP = " + iftempMap.get("EAI_OP"));

		strMsg += checkDataNotNull(iftempMap, "INSTANCEID", paramMap);
		strMsg += checkDataNotNull(iftempMap, "CODEID", paramMap);

		// 체크 오류가 발생하면 리턴값을 셋팅한다. 
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.	

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				paramMap.put("INSTANCEID", eData.getInstanceId());
				paramMap.put("USER_ID", iftempMap.get("LASTMODIFICATIONUSRID"));

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(iftempMap);
				String sEaiStatus = (String)iftempMap.get("STATUS");

				if("D".equals(sEaiOp)) {
					returnCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IT_ITEM_TYPE_DELETE", paramMap); //구매정보 장비모델 삭제 
				} else {
					returnCnt = nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IT_ITEM_TYPE_MERGE", paramMap); //구매품목 장비모델 입력 
				}

				// 성공 체크 및 처리
				checkSuccess(eData, paramMap);

			} catch(Exception e) {
				logger.debug(strLog + e);
				strMsg = e.getMessage();
				setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
			}
		} else {
			setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
		}

		nexacroService.update("ifeai3-sql.IFEAI3_TMDM_IT_ITEM_TYPE_STATUS_UPDATE", paramMap);

		return eData;

	}

	// ============  내부함수 ====================================================================//
	/*
	 * I/F 성공인 경우에는 EAI_STATE='S', EAI_MSG="Success" 로 업데이트 한다.
	 * I/F 오류인 경우에는 EAI_STATE='F', EAI_MSG=에러메세지  로 업데이트 한다.
	 */
	/**
	 * 내용 : 최종 성공했을때 셋팅이다. For 루프를 사용할 때 롤백 처리를 위한 메쏘드.
	 * @param eData
	 * @param paramMap
	 * @throws Exception
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	private void checkSuccessLoop(KilsWsEaiData eData, Map paramMap, boolean isOk) {
		if(isOk) {
			// 리턴값 셋팅
			eData.setCode("OK");
			eData.setStatus("S");
//			eData.setMessage(msgSvc.getMessage("Success"));

			// temp 테이블 등록값
			paramMap.put("EAI_STATE", "S");
//			paramMap.put("EAI_MSG", msgSvc.getMessage("Success"));
			paramMap.put("INSTANCEID", eData.getInstanceId());
		}
	}

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
		sMsg = eData.getMessage() + sMsg;

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
			logger.info("INSTANCE_ID Not Exists");
		}
		else {
			//EAI_STATE : Y 인 경우만 처리가능
			String sEaiState = "";
			if(false == CommonUtil.isEmpty(map, "EAI_STATE")) {
				sEaiState = (String)map.get("EAI_STATE");
			}
			//logger.info(strLog+"checkDataFirst EAI_STATE ===="+sEaiState+"===");
			if(!"Y".equals(sEaiState)){
				logger.info("Eai_state [Y] Error");
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

		if("D".equals(sEaiOp))
			logger.info("Delete Error");
		else if("U".equals(sEaiOp))
			logger.info("Update Error");
		else
			logger.info("Insert Error");

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
