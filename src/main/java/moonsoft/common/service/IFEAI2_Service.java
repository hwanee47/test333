package moonsoft.common.service;

import java.text.DecimalFormat;
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
 * 프로그램명 : EAI I/F 모듈2 서비스
 * 파  일  명       : IFEAI2_Service.java
 * 개         요       :
 *   IF-CM-01-004 고객사 수신
 *   IF-CM-01-005 협력사 수신
 *   IF-CM-01-006 조직 수신
 *   IF-CM-01-016 거점 수신
 *   IF-CM-01-017 포트 수신
 *   IF-CM-01-018 지역 수신
 *   IF-CM-01-020 고객의 거래처 수신
 * 작  성  자       :
 * 최초작성일 :
 * 버    전            : v1.0
 * 변경이력      :
 ******************************************************************************/
@Service
public class IFEAI2_Service {

	private static final Log logger = LogFactory.getLog(IFEAI2_Service.class);

	/* =============================================================================== */
	/* !!!!!!!!!!!!!!!!!!!!!!!! 소스 추가 시 주석은 필수 입니다. !!!!!!!!!!!!!!!!!!!!!!!!!! */
	/* =============================================================================== */
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	// 메세지 추가 구분자.
	private static final String strAdd = " +";

	// 로그용 메세지
	private static final String strLog = "IFEAI2_Service :: ";

	/**
	 * 인터페이스 모듈id 별로 처리함수로 분기한다.
	 * @param eData
	 * @return
	 * @throws Exception
	 */
	public KilsWsEaiData switchService(KilsWsEaiData eData) {
		String strModuleName = eData.getModuleName();

		if("IF-CM-01-004".equals(strModuleName)){
			eData = this.ifCm01004(eData); // 고객사 정보  수신
		}else if("IF-CM-01-005".equals(strModuleName)){
			eData = this.ifCm01005(eData); // 고객사 정보  수신
		}else if("IF-CM-01-006".equals(strModuleName)){
			eData = this.ifCm01006(eData); // 조직정보 수신
		}else if("IF-CM-01-018".equals(strModuleName)){
			eData = this.ifCm01018(eData); // 지역정보 수신
		}
		return eData;
	}

	/**
	 * I/F 처리 내용 : 고객사 정보 수신
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
	private KilsWsEaiData ifCm01004(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifBpCustCMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_BP_CUST_C_SELECT");
		String strMsg = "";

//			//	NullPointException 방지.
			if(false == CommonUtil.isEmpty(ifBpCustCMap, "PV_KUNNR"))
				paramMap.put("PV_KUNNR", ifBpCustCMap.get("PV_KUNNR"));
//
//		// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
		String sEaiOp = getOpCode(ifBpCustCMap);
		String sEaiStatus = (String)ifBpCustCMap.get("PV_STATUS");

//		//신주소 정제를 위한 키값 획득
		String sZip = (String)ifBpCustCMap.get("PV_ADDRESS_ZIPCODE");
		String sAddr = (String)ifBpCustCMap.get("PV_ADDRESS_ADDR1");

//		// 3. 담당자 체크
//		// 담당자를 조회해서  존재 하지 않으면 담당자와 거래처 담당자를 등록하지 않는다.		
		boolean hasRepreNm = true;
		try {
			int iCnt = 0; // 실행건수
			int iCnt2 = 0; // 실행건수2			

			paramMap.put("INSTANCEID", eData.getInstanceId());

			// 시작시간 업데이트
			//this.dao.updateTmdmBpCustCStart(paramMap);			

			//사용중지
			if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {

				//				if("C".equals(sPvPartType)){
				// 고객 , 화주 정보 삭제
				paramMap.put("RCP_TCD", "CSTS");
				//iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CUST_UPDATE", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_SHPR_UPDATE", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_KFR_BP_SHPR_UPDATE", paramMap);

				// 업체명, 업체주소, 업체담당자  정보 삭제
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);
				iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
				iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_UPDATE", paramMap);

				paramMap.put("RCP_TCD", "SHPR");
				// 업체명, 업체주소, 업체담당자  정보 삭제
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);
				iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
				iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_UPDATE", paramMap);
			} else {

				//지번주소를 이용해 OPENMATE에서 도로명 주소 가져옴
				paramMap = makeRoadAddr(paramMap, sZip, sAddr);

				//			    if ("C".equals(sPvPartType)) {
				// 고객사, 화주  정보 입력
				//iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CUST_MERGE04", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_SHPR_MERGE04", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_KFR_BP_SHPR_UPDATE04", paramMap);

				paramMap.put("RCP_TCD", "CSTS");

				// 계좌정보 IF 추가 2014.08.16
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_BANKN_DELETE", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_BANKN_INSERT_C", paramMap);

				// 고객사 업체명, 주소(LOCAL), 주소(EN), 담당자, 담당자 매핑  입력
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE04", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE04", paramMap);

//				if(false == CommonUtil.isEmpty(ifBpCustCMap, "GLBL_ADDR")){
//					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE04", paramMap);
//				}
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CONT_MERGE04", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_MERGE04", paramMap);

				paramMap.put("RCP_TCD", "SHPR");

				// 계좌정보 IF 추가 2014.08.16
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_BANKN_DELETE", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_BANKN_INSERT_C", paramMap);

				// 고객사 업체명, 주소(LOCAL), 주소(EN), 담당자, 담당자 매핑  입력
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE04", paramMap);
				iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE04", paramMap);
//				if(false == CommonUtil.isEmpty(ifBpCustCMap, "GLBL_ADDR"))
//					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE04", paramMap);
				
				// 2018-11-26 :: always evaluate to "true"
				// if(hasRepreNm == true) {
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CONT_MERGE04", paramMap);
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_MERGE04", paramMap);
				// }
			}

			logger.info(strLog + "iCnt = " + iCnt);
			// 실행 건수가 1이 아니면 오류 처리한다.
			// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
			// 인터페이스 정의서의 상황에 맞게 수정 바람.
			if(iCnt == 0) {
				if("D".equals(sEaiOp) && "NRML".equals(sEaiStatus)) //  사용중지 해제의 경우 수정 "U"로 표시
					strMsg += getOpMsg("U");
//				else
//					strMsg += getOpMsg(sEaiOp);
				// 오류 셋팅
//				setFailSetting(eData, paramMap, strMsg);
			}
			logger.info(strLog + "^_________________^");

			// 성공 체크 및 처리
//			if(isReuse)
			setReuseSetting(eData, paramMap);
//			else
//				checkSuccess(eData, paramMap);

		} catch(Exception e) {
			logger.debug(strLog + e);
			strMsg = e.getMessage();
			setFailSetting(eData, paramMap, strMsg); // 에러 체크 및 처리
		}

		// 최종 결과를 업데이트 해서 리턴한다.
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CUST_C_UPDATE", paramMap);
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CUST_C_NM_UPDATE", paramMap);

		return eData;
	}

	/**
	 * TODO 신주소 인터페이스 수정 
	 * 
	 * @ahthor jeon hong sik
	 * @since 2014. 1. 3.
	 *
	 * @param inParams
	 * @return
	 */
	@SuppressWarnings({"rawtypes", "unchecked"})
	private Map makeRoadAddr(Map inParams, String repZip, String repAddr) {

		String repAddr1 = "";
		String repAddr2 = "";
		int procResult = 0;

		try {
			Map repAddrmap1 = new HashMap();

			repAddrmap1.put("ZIP", repZip);
			repAddrmap1.put("DETL_ADDR", repAddr);

//			getSqlManager("sqlManagerGisOra").update("adm-gis-sql.REP_ADDR_SELECT", repAddrmap1);
			procResult = Integer.parseInt((String)repAddrmap1.get("O_PROC_CLSS"));
			if(procResult == 1 || procResult == 2) {
				repAddr1 = (String)repAddrmap1.get("O_NEW_ADDR1");
				repAddr2 = (String)repAddrmap1.get("O_NEW_ADDR2");

				inParams.put("O_NEW_ADDR1", repAddr1);
				inParams.put("O_NEW_ADDR2", repAddr2);
			}
		} catch(Exception e) {
			logger.debug(strLog + e);
			inParams.put("O_NEW_ADDR1", "");
			inParams.put("O_NEW_ADDR2", "");
		}

		return inParams;
	}

	/**
	 * I/F 처리 내용 : 협력사 정보 수신
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
	private KilsWsEaiData ifCm01005(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifBpCustVMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_BP_CUST_V_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifBpCustVMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		logger.info(strLog + "PV_LAND1 = " + ifBpCustVMap.get("PV_LAND1"));
		logger.info(strLog + "PV_PART_TYPE = " + ifBpCustVMap.get("PV_PART_TYPE"));
		logger.info(strLog + "EAI_OP = " + ifBpCustVMap.get("EAI_OP"));

		// 2. 체크 : 국가코드, 거래처유형코드, 업체명, 언어정보
		//paramMap = new HashMap();
		paramMap.put("CD_TCD", "CUST_TCD");
		//strMsg += checkDataNotNull(ifBpCustVMap, "PV_PART_TYPE", paramMap);
		strMsg += checkDataNotNull(ifBpCustVMap, "PV_VEND_CLS", paramMap);
		strMsg += checkDataNull(ifBpCustVMap, "PV_LAND1", paramMap);
		//strMsg += checkDataNull(ifBpCustCMap, "LANG", paramMap);

		//신주소 정제를 위한 키값 획득
		String sZip = (String)ifBpCustVMap.get("PV_ADDRESS_ZIPCODE");
		String sAddr = (String)ifBpCustVMap.get("PV_ADDRESS_ADDR1");

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		paramMap.put("PV_COMP_CD2", paramMap.get("PV_PART_TYPE"));
		if(false == CommonUtil.isEmpty(ifBpCustVMap, "PV_LAND1")) {
			paramMap.put("PV_COUNTRY_CD1", ifBpCustVMap.get("PV_LAND1"));
			// 국가코드 체크
			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_NATION_SELECT");
			if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_LAND1", (String)ifBpCustVMap.get("PV_LAND1")) + strAdd;
			}

//			2018-11-26 :: 사용되지 않는 구문
//			if(nationMap == null || CommonUtil.isEmpty(nationMap, "OFFICL_LANG_CD"));
			//strMsg += msgSvc.getMessage("Not Exists", "LANG_CD", "") +strAdd;
			else {

				// PV_PART_TYPE(C 고객사, B(고객사 & 협력사 ), A(대리점)  체크
				//Map compMap = this.dao.selectTmdmMcCodeB(paramMap);
				//if (compMap == null || CommonUtil.isEmpty(compMap, "CD") )
				//	strMsg += msgSvc.getMessage("Not Exists", "PV_PART_TYPE", (String)ifBpCustVMap.get("PV_PART_TYPE")) +strAdd;

				// 국가정보에서 받아온  언어 코드를 셋팅 한다. ex) "KO"
				paramMap.put("LANG_CD", nationMap.get("OFFICL_LANG_CD"));

				// 언어정보   체크
				//Map langMap = this.dao.selectTmdmIfGsLang(paramMap);
				//if (langMap == null || CommonUtil.isEmpty(langMap, "LANG_CD") )
				//	strMsg += msgSvc.getMessage("Not Exists", "LANG_CD", (String)nationMap.get("OFFICL_LANG_CD")) +strAdd;
			}
		}

		// 3. 담당자 체크
		// 담당자를 조회해서  존재 하지 않으면 담당자와 거래처 담당자를 등록하지 않는다.			
		String sAttnId = "";
		int iAttnId = 0;

		// 담당자를 조회해서  존재 하지 않으면 담당자를 등록하지 않는다.
		boolean hasRepreNm = true;
		if(CommonUtil.isEmpty(ifBpCustVMap, "PV_REPRE_NM"))
			hasRepreNm = false;

		if(hasRepreNm == true) {

			paramMap.put("PV_REPRE_NM", ifBpCustVMap.get("PV_REPRE_NM"));
			Map attnIdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_BP_CONT_SELECT");

			if(attnIdMap == null) {
				iAttnId = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.ATTN_ID_CONT_SEQ")).intValue();

				DecimalFormat format = new DecimalFormat("00000000");
				sAttnId = "AT" + format.format(iAttnId);
				paramMap.put("PV_ATTN_ID", sAttnId);
			} else if(false == CommonUtil.isEmpty(attnIdMap, "ATTN_ID")) {
				paramMap.put("PV_ATTN_ID", attnIdMap.get("ATTN_ID"));
			}
		}

		// 업체명 체크
		int compNmMap = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_BP_CUST_V_NM_EMP_SELECT")).intValue();
		if(compNmMap != 0){
//			strMsg += msgSvc.getMessage("Not Exists", "PV_ZAHLS", "") + strAdd;
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				int iCnt2 = 0; // 실행건수

				paramMap.put("INSTANCEID", eData.getInstanceId());
				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifBpCustVMap);
				String sEaiStatus = (String)ifBpCustVMap.get("PV_STATUS");

				// NullPointException 방지.
				if(false == CommonUtil.isEmpty(ifBpCustVMap, "PV_KUNNR"))
					paramMap.put("PV_KUNNR", ifBpCustVMap.get("PV_KUNNR"));

				// 운송 조직 협력사 맵핑 정보 체크
				int BpCorpmpgMap = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_BP_CORP_MPG_SELECT")).intValue();

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {

					//				if("V".equals(sPvPartType)) {
					// 고객 , 협력사 정보 삭제
					paramMap.put("RCP_TCD", "CSTB");
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CUST_UPDATE", paramMap);
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_LSP_UPDATE", paramMap);
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_KFR_BP_LSP_UPDATE", paramMap);

					// 업체명, 업체주소, 업체담당자  정보 삭제
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_UPDATE", paramMap);

					paramMap.put("RCP_TCD", "LSP");
					// 업체명, 업체주소, 업체담당자  정보 삭제
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_UPDATE", paramMap);

					// 조직 협력사 맵핑 정보가 있을 경우 UPDATE
					if(BpCorpmpgMap != 0) {
						paramMap.put("DEL_YN", "Y");
						paramMap.put("PV_VEND_CLS", ifBpCustVMap.get("PV_VEND_CLS"));
						nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CORP_MPG_UPDATE", paramMap);
					}
				} else {

					//지번주소를 이용해 OPENMATE에서 도로명 주소 가져옴
					paramMap = makeRoadAddr(paramMap, sZip, sAddr);

					//			    if ("V".equals(sPvPartType)) {
					// 고객사, 협력사  정보 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CUST_MERGE05", paramMap);
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_LSP_MERGE05", paramMap);

					paramMap.put("RCP_TCD", "CSTB");
					// 고객사 업체명, 주소(LOCAL), 주소(EN), 담당자, 담당자 매핑  입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE05", paramMap);
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE05", paramMap);
					if(false == CommonUtil.isEmpty(ifBpCustVMap, "GLBL_ADDR"))
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE05", paramMap);
					if(hasRepreNm == true) {
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CONT_MERGE05", paramMap);
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_MERGE05", paramMap);
					}

					paramMap.put("RCP_TCD", "LSP");
					// 고객사 업체명, 주소(LOCAL), 주소(EN), 담당자, 담당자 매핑  입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE05", paramMap);
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE05", paramMap);

					if(false == CommonUtil.isEmpty(ifBpCustVMap, "GLBL_ADDR"))
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE05", paramMap);
					if(hasRepreNm == true) {
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CONT_MERGE05", paramMap);
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_MERGE05", paramMap);
					}
					// 조직 협력사 맵핑 정보가 있을 경우 UPDATE
					if(BpCorpmpgMap != 0) {
						paramMap.put("DEL_YN", "N");
						paramMap.put("PV_VEND_CLS", ifBpCustVMap.get("PV_VEND_CLS"));
						nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CORP_MPG_UPDATE", paramMap);
					}
				}

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					if("D".equals(sEaiOp) && "NRML".equals(sEaiStatus)) //  사용중지 해제의 경우 수정 "U"로 표시
						strMsg += getOpMsg("U");
					else
						strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
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
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CUST_V_UPDATE", paramMap);
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CUST_V_NM_UPDATE", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 조직정보 수신
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
	private KilsWsEaiData ifCm01006(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifBpCorpMap = (Map) nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_BP_CORP_SELECT");
		String strMsg = "";
		
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifBpCorpMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

//		logger.info(strLog + "PV_COUNTRY = " + ifBpCorpMap.get("PV_COUNTRY"));
//		logger.info(strLog + "PV_ORG_CD = " + ifBpCorpMap.get("PV_ORG_CD"));
//		logger.info(strLog + "PV_COMP_CD3 = " + ifBpCorpMap.get("PV_COMP_CD3"));
//		logger.info(strLog + "EAI_OP = " + ifBpCorpMap.get("EAI_OP"));

		// 2. 체크 : 국가코드, 법인코드
		paramMap = new HashMap();
		paramMap.put("CD_TCD", "CM046");
		strMsg += checkDataNotNull(ifBpCorpMap, "PV_ORG_CD", paramMap);
		//strMsg += checkDataNotNull(ifBpCorpMap, "PV_OFFICE_TYPE", paramMap); // TODO: 쿼리에 추가해야 한다.
		strMsg += checkDataNull(ifBpCorpMap, "PV_COUNTRY", paramMap);
		strMsg += checkDataNull(ifBpCorpMap, "PV_COMP_CD3", paramMap);

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		//if(false == CommonUtil.isEmpty(ifBpCorpMap, "PV_COUNTRY")) {
		//	paramMap.put("PV_COUNTRY_CD1", ifBpCorpMap.get("PV_COUNTRY"));
			// 국가코드 체크
		//	Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_NATION_SELECT");
		//	if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_COUNTRY", (String)ifBpCorpMap.get("PV_COUNTRY")) + strAdd;
		//	}
		//}

		if(false == CommonUtil.isEmpty(ifBpCorpMap, "PV_COMP_CD3")) {
			paramMap.put("PV_COMP_CD2", ifBpCorpMap.get("PV_COMP_CD3"));
			// 법인코드 체크
			Map compMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_MC_CODE_B_SELECT");
			if(compMap == null || CommonUtil.isEmpty(compMap, "CD")){
//				strMsg += msgSvc.getMessage("Not Exists", "PV_COMP_CD3", (String)ifBpCorpMap.get("PV_COMP_CD3")) + strAdd;
			}
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(false == "".equals(strMsg))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				int iCnt2 = 0; // 실행건수
				//paramMap = new HashMap();
				paramMap.put("INSTANCEID", eData.getInstanceId());

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifBpCorpMap);
				String sEaiStatus = (String)ifBpCorpMap.get("PV_STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CORP_UPDATE", paramMap);
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE", paramMap);
				} else {
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CORP_MERGE", paramMap);
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE", paramMap);
				}

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt != 1 || iCnt2 == 0) {
					if("D".equals(sEaiOp) && "NRML".equals(sEaiStatus)) //  사용중지 해제의 경우 수정 "U"로 표시
						strMsg += getOpMsg("U");
					else
						strMsg += getOpMsg(sEaiOp);

					// 오류 셋팅.
					setFailSetting(eData, paramMap, strMsg);
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
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_BP_CORP_UPDATE", paramMap);
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_BP_NAME_UPDATE", paramMap);

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
			logger.info(strLog + " checkSuccess RollBack ");
		}
	}

	/**
	 * 내용 : 재사용요청 셋팅이다.
	 * @param eData
	 * @param paramMap
	 * @throws Exception
	 */
	@SuppressWarnings({"unchecked", "rawtypes"})
	private void setReuseSetting(KilsWsEaiData eData, Map paramMap) {
		if("OK".equals(eData.getCode())) {
			// 리턴값 셋팅
			eData.setCode("OK");
			eData.setStatus("S");
//			eData.setMessage(msgSvc.getMessage("Success"));

			paramMap.put("EAI_STATE", "S");
			paramMap.put("EAI_MSG", "재사용요청");
			paramMap.put("INSTANCEID", eData.getInstanceId());
		} else {
			//msgSvc.rollbackAction();
			logger.info(strLog + " checkSuccess RollBack ");
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
			logger.info("INSTANCE_ID Not Exists");
//			return msgSvc.getMessage("INSTANCE_ID Not Exists");
		}
		else {
			//EAI_STATE : Y 인 경우만 처리가능
			String sEaiState = "";
			if(!CommonUtil.isEmpty(map, "EAI_STATE")) {
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
			//paramMap.put(sCol, "X"); // TODO: Not Null 처리에 대해 전사 mdm과 추가 협의후 제거 여부 결정 예정.
			//return msgSvc.getMessage("is Null", sCol) + strAdd; //null 이 들어와도 쿼리에서 NVL 처리한다.
			return strAdd; //null 이 들어와도 쿼리에서 NVL 처리한다.
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
			logger.info("Delete Error");
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

	/**
	 * I/F 처리 내용 : 포트 정보 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 국가정보, 업체, 언어, 조직, 주코드
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
	private KilsWsEaiData ifCm01017(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifPortMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_PORT_SELECT");

		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifPortMap);
		if(!"".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		// 2. 체크 : 국가코드, 법인코드
		paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		paramMap.put("CD_TCD", "NODE_TCD");
		strMsg += checkDataNotNull(ifPortMap, "PV_PLACE_CD", paramMap);
		//strMsg += checkDataNotNull(ifBpCorpMap, "PV_OFFICE_TYPE", paramMap); // TODO: 쿼리에 추가해야 한다.
		strMsg += checkDataNull(ifPortMap, "PV_LAND1", paramMap);
		//strMsg += checkDataNull(ifPortMap, "PV_COMP_CD3", paramMap);

		//신주소 정제를 위한 키값 획득
		String sZip = (String)ifPortMap.get("PV_ADDRESS_ZIPCODE");
		String sAddr = (String)ifPortMap.get("PV_ADDRESS_ADDR1");

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		if(!CommonUtil.isEmpty(ifPortMap, "PV_LAND1")) {
			paramMap.put("PV_COUNTRY_CD1", ifPortMap.get("PV_LAND1"));
			// 국가코드 체크
			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_NATION_SELECT");
			if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
				logger.info("Not Exists");
			}

			if(!CommonUtil.isEmpty(ifPortMap, "PV_STATE_CD")) {
				// 주코드 체크
				paramMap.put("PV_STATE_CD", ifPortMap.get("PV_STATE_CD"));
				paramMap.put("PV_COUNTRY_CD1", ifPortMap.get("PV_LAND1"));
				Map statePrvCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_STATEPRV_SELECT");
				if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
					logger.info("Not Exists");
				}
				if(statePrvCdMap == null || CommonUtil.isEmpty(statePrvCdMap, "STATE_PRV_CD")){
					logger.info("Not Exists");
				}
			}
		}

		if(!CommonUtil.isEmpty(ifPortMap, "PV_FUNC_CD")) {
			// 노드타입 코드 체크
			paramMap.put("PV_COMP_CD2", ifPortMap.get("PV_FUNC_CD"));
			Map cdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_MC_CODE_B_SELECT");
			if(cdMap == null || CommonUtil.isEmpty(cdMap, "CD")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifPortMap, "PV_MNG_BRCH")) {
			// 조직정보 체크
			paramMap.put("PV_MNG_BRCH", ifPortMap.get("PV_MNG_BRCH"));
			Map corpidMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_BP_CORP_SELECT");
			if(corpidMap == null || CommonUtil.isEmpty(corpidMap, "CORP_ID")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifPortMap, "PV_CITY_CD")) {
			// 국제도시 체크
			paramMap.put("PV_CITY_CD", ifPortMap.get("PV_CITY_CD"));
			Map glblCityCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_GLBLCITY_SELECT");
			if(glblCityCdMap == null || CommonUtil.isEmpty(glblCityCdMap, "GLBL_CITY_CD")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifPortMap, "PV_ADDRESS_ZIPCODE")) {
			// 우편번호 체크
			paramMap.put("PV_ADDRESS_ZIPCODE", ifPortMap.get("PV_ADDRESS_ZIPCODE"));
			Map gsZipMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_ZIP_SELECT");
			if(gsZipMap == null || CommonUtil.isEmpty(gsZipMap, "ZIP_CD")){
				logger.info("Not Exists");
			}
		}

		// PLACE명  체크
		int placeCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_PORT_NM_SELECT")).intValue();
		if(placeCnt > 0){
			logger.info("Not Exists");
		}

		// 언어정보   체크
		int langCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_PORT_LANG_EMP_SELECT")).intValue();
		if(langCnt > 0){
			logger.info("Not Exists");
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(!strMsg.equals(""))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				int iCnt2 = 0; // 실행건수2	

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifPortMap);
				String sEaiStatus = (String)ifPortMap.get("PV_STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					// NullPointException 방지.
					if(!CommonUtil.isEmpty(ifPortMap, "PV_PLACE_CD"))
						paramMap.put("PV_PLACE_CD", ifPortMap.get("PV_PLACE_CD"));
					if(!CommonUtil.isEmpty(ifPortMap, "PV_PLACE_CD"))
						paramMap.put("PV_KUNNR", ifPortMap.get("PV_PLACE_CD"));
					paramMap.put("RCP_TCD", "NODE");

					// STNODE 삭제
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_ST_NODE_UPDATE", paramMap);

					if(!CommonUtil.isEmpty(ifPortMap, "PV_UNLOC_CD"))
						paramMap.put("PV_UNLOC_CD", ifPortMap.get("PV_UNLOC_CD"));

					//if(ifPortMap.get("PV_FUNC_CD").equals("CT") || ifPortMap.get("PV_FUNC_CD").equals("SP")){				
					// 국제도시 정보 삭제
					//		iCnt2 = nexacroService.update(paramMap, "ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04_TEST");
					//}

					// 업체명 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);

					// 업제 주소 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
				} else {

					//지번주소를 이용해 OPENMATE에서 도로명 주소 가져옴
					paramMap = makeRoadAddr(paramMap, sZip, sAddr);

					// STNODE	
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_ST_NODE_MERGE17", paramMap);

					// 업체명 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE17", paramMap);

					// 업체 LOC 주소 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE17", paramMap);

					// 업체 LOC EN 주소 입력
					if(!CommonUtil.isEmpty(ifPortMap, "GLBL_ADDR"))
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE17", paramMap);

					if(ifPortMap.get("PV_FUNC_CD").equals("CT") || ifPortMap.get("PV_FUNC_CD").equals("SP")) {
						// 국제 도시 입력
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_GS_GLBLCITY_MERGE", paramMap);
					}
				}

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					if("D".equals(sEaiOp) && "NRML".equals(sEaiStatus)) //  사용중지 해제의 경우 수정 "U"로 표시
						strMsg += getOpMsg("U");
					else
						strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
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
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_PORT_UPDATE", paramMap);
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_PORT_NM_UPDATE", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 지역 정보 수신
	 * 1. 인터페이스 temp 테이블을 조회한다.
	 * 2. 체크 : 국가정보, 업체, 언어, 조직, 주코드
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
	private KilsWsEaiData ifCm01018(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifRegionMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_REGION_SELECT");

		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifRegionMap);
		if(!"".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		//LOG.info(strLog+"PV_COUNTRY = "+ifPortMap.get("PV_COUNTRY"));
		//LOG.info(strLog+"PV_ORG_CD = "+ifPortMap.get("PV_ORG_CD"));
		//LOG.info(strLog+"INSTANCEID = "+ifPortMap.get("INSTANCEID"));
		//LOG.info(strLog+"PV_CITY_CD = "+ifPortMap.get("PV_CITY_CD"));
		//LOG.info(strLog+"PV_STATE_CD = "+ifPortMap.get("PV_STATE_CD"));
		//LOG.info(strLog+"PV_MNG_BRCH = "+ifPortMap.get("PV_MNG_BRCH"));
		//LOG.info(strLog+"PV_FUNC_CD = "+ifPortMap.get("PV_FUNC_CD"));
		//LOG.info(strLog+"PV_PLACE_NM = "+ifPortMap.get("PV_PLACE_NM"));
		//LOG.info(strLog+"LANG = "+ifPortMap.get("LANG"));
		//LOG.info(strLog+"PV_LAND1 = "+ifPortMap.get("PV_LAND1"));
		//LOG.info(strLog+"EAI_OP = "+ifPortMap.get("EAI_OP"));
		//LOG.info(strLog+"OFFICL_LANG_CD = "+nationMap.get("OFFICL_LANG_CD"));

		// 2. 체크 : 국가코드, 법인코드
		paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		paramMap.put("CD_TCD", "NODE_TCD");
		strMsg += checkDataNotNull(ifRegionMap, "PV_PLACE_CD", paramMap);
		//strMsg += checkDataNotNull(ifBpCorpMap, "PV_OFFICE_TYPE", paramMap); // TODO: 쿼리에 추가해야 한다.
		strMsg += checkDataNull(ifRegionMap, "PV_LAND1", paramMap);
		//strMsg += checkDataNull(ifPortMap, "PV_COMP_CD3", paramMap);

		//신주소 정제를 위한 키값 획득
		String sZip = (String)ifRegionMap.get("PV_ADDRESS_ZIPCODE");
		String sAddr = (String)ifRegionMap.get("PV_ADDRESS_ADDR1");

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		if(!CommonUtil.isEmpty(ifRegionMap, "PV_LAND1")) {
			paramMap.put("PV_COUNTRY_CD1", ifRegionMap.get("PV_LAND1"));
			// 국가코드 체크
			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_NATION_SELECT");
			if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
				logger.info("Not Exists");
			}

			if(!CommonUtil.isEmpty(ifRegionMap, "PV_STATE_CD")) {
				// 주코드 체크
				paramMap.put("PV_STATE_CD", ifRegionMap.get("PV_STATE_CD"));
				paramMap.put("PV_COUNTRY_CD1", ifRegionMap.get("PV_LAND1"));
				Map statePrvCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_STATEPRV_SELECT");
				if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
					logger.info("Not Exists");
				}
				if(statePrvCdMap == null || CommonUtil.isEmpty(statePrvCdMap, "STATE_PRV_CD")){
					logger.info("Not Exists");
				}
			}
		}

		if(!CommonUtil.isEmpty(ifRegionMap, "PV_MNG_BRCH")) {
			// 조직정보 체크
			paramMap.put("PV_MNG_BRCH", ifRegionMap.get("PV_MNG_BRCH"));
			Map corpidMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_BP_CORP_SELECT");
			if(corpidMap == null || CommonUtil.isEmpty(corpidMap, "CORP_ID")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifRegionMap, "PV_CITY_CD")) {
			// 국제도시 체크
			paramMap.put("PV_CITY_CD", ifRegionMap.get("PV_CITY_CD"));
			Map glblCityCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_GLBLCITY_SELECT");
			if(glblCityCdMap == null || CommonUtil.isEmpty(glblCityCdMap, "GLBL_CITY_CD")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifRegionMap, "PV_CITY_CD")) {
			// 우편번호 체크
			paramMap.put("PV_ADDRESS_ZIPCODE", ifRegionMap.get("PV_ADDRESS_ZIPCODE"));
			Map gsZipMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_ZIP_SELECT");
			if(gsZipMap == null || CommonUtil.isEmpty(gsZipMap, "ZIP_CD")){
				logger.info("Not Exists");
			}
		}

		// PLACE명  체크
		int placeCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_REGION_NM_SELECT")).intValue();
		if(placeCnt > 0){
			logger.info("Not Exists");
		}

		// 언어정보   체크
		int langCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_REGION_LANG_EMP_SELECT")).intValue();
		if(langCnt > 0){
			logger.info("Not Exists");
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(!strMsg.equals(""))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				int iCnt2 = 0; // 실행건수2	

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifRegionMap);
				String sEaiStatus = (String)ifRegionMap.get("PV_STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					// NullPointException 방지.
					if(!CommonUtil.isEmpty(ifRegionMap, "PV_PLACE_CD"))
						paramMap.put("PV_PLACE_CD", ifRegionMap.get("PV_PLACE_CD"));
					if(!CommonUtil.isEmpty(ifRegionMap, "PV_PLACE_CD"))
						paramMap.put("PV_KUNNR", ifRegionMap.get("PV_PLACE_CD"));
					paramMap.put("RCP_TCD", "NODE");

					// STNODE 삭제
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_ST_NODE_UPDATE", paramMap);

					// 업체명 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);

					// 업제 주소 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
				} else {
					//지번주소를 이용해 OPENMATE에서 도로명 주소 가져옴
					paramMap = makeRoadAddr(paramMap, sZip, sAddr);

					// STNODE

					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_ST_NODE_MERGE18", paramMap);

					// 업체명 입력

					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE18", paramMap);

					// 업체 LOC 주소 입력

					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE18", paramMap);

					// 업체 LOC EN 주소 입력
					if(!CommonUtil.isEmpty(ifRegionMap, "GLBL_ADDR"))
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE18", paramMap);
				}

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					if("D".equals(sEaiOp) && "NRML".equals(sEaiStatus)) //  사용중지 해제의 경우 수정 "U"로 표시
						strMsg += getOpMsg("U");
					else
						strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
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
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_REGION_UPDATE", paramMap);
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_REGION_NM_UPDATE", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 거점 정보 수신
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
	private KilsWsEaiData ifCm01016(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifBaseMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_BASE_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifBaseMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		// 2. 체크 : 국가코드, 노드 타입코드, 조직정보, 주코드, 국제도시, 우편번호, 노드명, 언어정보 
		paramMap.put("CD_TCD", "NODE_TCD");
		strMsg += checkDataNotNull(ifBaseMap, "PV_PLACE_CD", paramMap);
		strMsg += checkDataNull(ifBaseMap, "PV_LAND1", paramMap);

		//신주소 정제를 위한 키값 획득
		String sZip = (String)ifBaseMap.get("PV_ADDRESS_ZIPCODE");
		String sAddr = (String)ifBaseMap.get("PV_ADDRESS_ADDR1");

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		if(!CommonUtil.isEmpty(ifBaseMap, "PV_LAND1")) {
			paramMap.put("PV_COUNTRY_CD1", ifBaseMap.get("PV_LAND1"));
			// 국가코드 체크
			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_NATION_SELECT");
			if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
				logger.info("Not Exists");
			}

			if(!CommonUtil.isEmpty(ifBaseMap, "PV_STATE_CD")) {
				// 주코드 체크
				paramMap.put("PV_STATE_CD", ifBaseMap.get("PV_STATE_CD"));
				paramMap.put("PV_COUNTRY_CD1", ifBaseMap.get("PV_LAND1"));
				Map statePrvCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_STATEPRV_SELECT");
				if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
					logger.info("Not Exists");
				}
				if(statePrvCdMap == null || CommonUtil.isEmpty(statePrvCdMap, "STATE_PRV_CD")){
					logger.info("Not Exists");
				}
			}
		}

		if(!CommonUtil.isEmpty(ifBaseMap, "PV_FUNC_CD")) {
			// 노드타입 코드 체크
			paramMap.put("PV_COMP_CD2", ifBaseMap.get("PV_FUNC_CD"));
			Map cdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_MC_CODE_B_SELECT");
			if(cdMap == null || CommonUtil.isEmpty(cdMap, "CD")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifBaseMap, "PV_MNG_BRCH")) {
			// 조직정보 체크
			paramMap.put("PV_MNG_BRCH", ifBaseMap.get("PV_MNG_BRCH"));
			Map corpidMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_BP_CORP_SELECT");
			if(corpidMap == null || CommonUtil.isEmpty(corpidMap, "CORP_ID")){
				logger.info("Not Exists");
			}
		} else {
			logger.info("Not Exists");
		}

		if(!CommonUtil.isEmpty(ifBaseMap, "PV_CITY_CD")) {
			// 국제도시 체크
			paramMap.put("PV_CITY_CD", ifBaseMap.get("PV_CITY_CD"));
			Map glblCityCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_GLBLCITY_SELECT");
			if(glblCityCdMap == null || CommonUtil.isEmpty(glblCityCdMap, "GLBL_CITY_CD")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifBaseMap, "PV_ADDRESS_ZIPCODE")) {
			// 우편번호 체크
			paramMap.put("PV_ADDRESS_ZIPCODE", ifBaseMap.get("PV_ADDRESS_ZIPCODE"));
			Map gsZipMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_ZIP_SELECT");
			if(gsZipMap == null || CommonUtil.isEmpty(gsZipMap, "ZIP_CD")){
				logger.info("Not Exists");
			}
		}

		// PLACE명  체크
		int placeCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_BASE_NM_EMP_SELECT")).intValue();
		if(placeCnt > 0){
			logger.info("Not Exists");
		}

		// 언어정보   체크
		int langCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_BASE_NM_LANG_EMP_CHECK")).intValue();
		if(langCnt > 0){
			logger.info("Not Exists");
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(!strMsg.equals(""))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				int iCnt2 = 0; // 실행건수2	

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifBaseMap);
				String sEaiStatus = (String)ifBaseMap.get("PV_STATUS");

				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					// NullPointException 방지.
					if(!CommonUtil.isEmpty(ifBaseMap, "PV_PLACE_CD"))
						paramMap.put("PV_PLACE_CD", ifBaseMap.get("PV_PLACE_CD"));
					if(!CommonUtil.isEmpty(ifBaseMap, "PV_PLACE_CD"))
						paramMap.put("PV_KUNNR", ifBaseMap.get("PV_PLACE_CD"));
					paramMap.put("RCP_TCD", "NODE");

					// STNODE 삭제
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_ST_NODE_UPDATE", paramMap);
					// 업체명 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);
					// 업제 주소 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
					// 거점 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BASE_MSTR_UPDATE", paramMap);

					//if ("GW".equals(ifBaseMap.get("PV_POINT_TYPE"))) {  // 거점 정보 전체 수신으로 변경 보관 한창수부장님 요청 4/4
					paramMap.put("RCP_TCD", "WHSE");
					// 업체명 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);
					// 업제 주소 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
					// 창고 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_WH_MSTR_UPDATE", paramMap);
					//}
				} else {
					//지번주소를 이용해 OPENMATE에서 도로명 주소 가져옴
					paramMap = makeRoadAddr(paramMap, sZip, sAddr);

					// STNODE
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_ST_NODE_MERGE16", paramMap);

					paramMap.put("RCP_TCD", "NODE");
					// 업체명 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE16", paramMap);
					// 업체 LOC 주소 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE16", paramMap);
					// 업체 LOC EN 주소 입력
					if(!CommonUtil.isEmpty(ifBaseMap, "GLBL_ADDR"))
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE16", paramMap);
					// 거점 정보 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BASE_MSTR_MERGE16", paramMap);

					//if ("GW".equals(ifBaseMap.get("PV_POINT_TYPE"))) {   // 거점 정보 전체 수신으로 변경 보관 한창수부장님 요청 4/4
					paramMap.put("RCP_TCD", "WHSE");
					// 업체명 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE16", paramMap);
					// 업체 LOC 주소 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE16", paramMap);
					// 업체 LOC EN 주소 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE16", paramMap);
					// 창고 정보 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_WH_MSTR_MERGE16", paramMap);
					//}
				}

				logger.info(strLog + "iCnt = " + iCnt);

				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					if("D".equals(sEaiOp) && "NRML".equals(sEaiStatus)) //  사용중지 해제의 경우 수정 "U"로 표시
						strMsg += getOpMsg("U");
					else
						strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
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
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_BASE_MSTR_UPDATE", paramMap);
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_BASE_MSTR_NM_UPDATE", paramMap);

		return eData;
	}

	/**
	 * I/F 처리 내용 : 고객의 거래처 수신
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
	private KilsWsEaiData ifCm01020(KilsWsEaiData eData) {

		// INSTANCEID 를 paramMap 에 담는다.
		Map paramMap = new HashMap();
		paramMap.put("INSTANCEID", eData.getInstanceId());
		logger.info(strLog + "INSTANCEID = " + eData.getInstanceId());

		// 1. 인터페이스 temp 테이블을 조회한다.
		Map ifPlaceCMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_PLACE_C_SELECT");
		String strMsg = "";
		// 1-1.data 유무 체크, eai_state=Y 체크
		strMsg = checkDataFirst(ifPlaceCMap);
		if(false == "".equals(strMsg)) {
			setFailSetting(eData, paramMap, strMsg);
			return eData;
		}

		// 2. 체크 : 국가코드, 노드 타입코드, 조직정보, 주코드, 국제도시, 우편번호, 노드명, 언어정보 
		paramMap.put("CD_TCD", "NODE_TCD");
		strMsg += checkDataNotNull(ifPlaceCMap, "PV_PLACE_CD", paramMap);
		strMsg += checkDataNotNull(ifPlaceCMap, "PV_CUST_CD", paramMap);
		strMsg += checkDataNotNull(ifPlaceCMap, "PV_CUST_PLACE_CD", paramMap);
		strMsg += checkDataNotNull(ifPlaceCMap, "PV_CUST_PLACE_TYPE", paramMap);
		strMsg += checkDataNull(ifPlaceCMap, "PV_LAND1", paramMap);

		//신주소 정제를 위한 키값 획득
		String sZip = (String)ifPlaceCMap.get("PV_ADDRESS_ZIPCODE");
		String sAddr = (String)ifPlaceCMap.get("PV_ADDRESS_ADDR1");

		// 2-1. data가 null 이 아닌 경우에만 정합성 체크.
		if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_LAND1")) {
			paramMap.put("PV_COUNTRY_CD1", ifPlaceCMap.get("PV_LAND1"));
			// 국가코드 체크
			Map nationMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_NATION_SELECT");
			if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
				logger.info("Not Exists");
			}

			if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_STATE_CD")) {
				// 주코드 체크
				paramMap.put("PV_STATE_CD", ifPlaceCMap.get("PV_STATE_CD"));
				paramMap.put("PV_COUNTRY_CD1", ifPlaceCMap.get("PV_LAND1"));
				Map statePrvCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_STATEPRV_SELECT");
				if(nationMap == null || CommonUtil.isEmpty(nationMap, "NATION_CD")){
					logger.info("Not Exists");
				}
				if(statePrvCdMap == null || CommonUtil.isEmpty(statePrvCdMap, "STATE_PRV_CD")){
					logger.info("Not Exists");
				}
			}
		}

		if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_FUNC_CD")) {
			// 노드타입 코드 체크
			paramMap.put("PV_COMP_CD2", ifPlaceCMap.get("PV_FUNC_CD"));
			Map cdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_MC_CODE_B_SELECT");
			if(cdMap == null || CommonUtil.isEmpty(cdMap, "CD")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_MNG_BRCH")) {
			// 조직정보 체크
			paramMap.put("PV_MNG_BRCH", ifPlaceCMap.get("PV_MNG_BRCH"));
			Map corpidMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_BP_CORP_SELECT");
			if(corpidMap == null || CommonUtil.isEmpty(corpidMap, "CORP_ID")){
				logger.info("Not Exists");
			}
		}

		if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_CITY_CD")) {
			// 국제도시 체크
			paramMap.put("PV_CITY_CD", ifPlaceCMap.get("PV_CITY_CD"));
			Map glblCityCdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_GS_GLBLCITY_SELECT");
			if(glblCityCdMap == null || CommonUtil.isEmpty(glblCityCdMap, "GLBL_CITY_CD")){
				logger.info("Not Exists");
			}
		}

		// PLACE명  체크
		int placeCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_PLACE_C_NM_EMP_SELECT")).intValue();
		if(placeCnt > 0){
			logger.info("Not Exists");
		}

		// 언어정보   체크
		int langCnt = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_IF_PLACE_C_NM_LANG_EMP_CHECK")).intValue();
		if(langCnt > 0){
			logger.info("Not Exists");
		}

		// 체크 오류가 발생하면 리턴값을 셋팅한다.
		if(!strMsg.equals(""))
			setFailSetting(eData, paramMap, strMsg); // 오류 셋팅.

		// 여기에서 대상 테이블로 데이타를 복사한다.
		if("OK".equals(eData.getCode())) {
			try {
				int iCnt = 0; // 실행건수
				int iCnt2 = 0; // 실행건수2	

				// 3. eai_op 코드에 따라 진행한다. 'I','U' : merge   'D' : delete, PV_STATUS  "BLCK" 중지, "NRML" 사용중지해제
				String sEaiOp = getOpCode(ifPlaceCMap);
				String sEaiStatus = (String)ifPlaceCMap.get("PV_STATUS");

				paramMap.put("RCP_TCD", "NODE");
				if("D".equals(sEaiOp) && "BLCK".equals(sEaiStatus)) {
					// NullPointException 방지.
					if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_PLACE_CD"))
						paramMap.put("PV_PLACE_CD", ifPlaceCMap.get("PV_PLACE_CD"));
					if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_PLACE_CD"))
						paramMap.put("PV_KUNNR", ifPlaceCMap.get("PV_PLACE_CD"));
					if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_CUST_CD"))
						paramMap.put("PV_CUST_CD", ifPlaceCMap.get("PV_CUST_CD"));

					paramMap.put("PV_CUST_PLACE_CD", ifPlaceCMap.get("PV_CUST_PLACE_CD"));

					// STNODE 삭제
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_ST_NODE_UPDATE", paramMap);
					// 업체명 정보 삭제
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE04", paramMap);
					// 업제 주소 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE", paramMap);
					// 업체 담당자 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_UPDATE", paramMap);
					// 거점 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_INDIRECT_CUST_UPDATE", paramMap);

					paramMap.put("RCP_TCD", "IDIR");
					paramMap.put("PV_CUST_CD", ifPlaceCMap.get("PV_CUST_CD"));

					// 업체명 정보 삭제
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_UPDATE20", paramMap);
					// 업제 주소 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_UPDATE20", paramMap);
					// 업체 담당자 정보 삭제
					iCnt2 = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_UPDATE", paramMap);
				} else {

					//지번주소를 이용해 OPENMATE에서 도로명 주소 가져옴
					paramMap = makeRoadAddr(paramMap, sZip, sAddr);

					// 담당자를 조회해서  존재 하지 않으면 담당자를 등록하지 않는다.
					boolean hasRepreNm = true;
					if(CommonUtil.isEmpty(ifPlaceCMap, "PV_CHARGE_NM"))
						hasRepreNm = false;
					//					if (CommonUtil.isEmpty(ifPlaceCMap, "PV_CHARGE_TEL")) 
					//						hasRepreNm = false;
					if(!CommonUtil.isEmpty(ifPlaceCMap, "PV_CUST_CD"))
						paramMap.put("PV_CUST_CD", ifPlaceCMap.get("PV_CUST_CD"));

					// 담당자가 있는 경우에만 attn_id를 가져온다.				
					String sAttnId = "";
					int iAttnId = 0;
					if(hasRepreNm == true) {
						paramMap.put("PV_REPRE_NM", ifPlaceCMap.get("PV_CHARGE_NM"));
						Map attnIdMap = (Map)nexacroService.queryForObject(paramMap, "ifeai2-sql.IFEAI2_TMDM_BP_CONT_SELECT");

						if(attnIdMap == null) {
							iAttnId = ((Integer)nexacroService.queryForObject(paramMap, "ifeai2-sql.ATTN_ID_CONT_SEQ")).intValue();

							DecimalFormat format = new DecimalFormat("00000000");
							sAttnId = "AT" + format.format(iAttnId);
							paramMap.put("PV_ATTN_ID", sAttnId);
						} else if(false == CommonUtil.isEmpty(attnIdMap, "ATTN_ID")) {
							paramMap.put("PV_ATTN_ID", attnIdMap.get("ATTN_ID"));
						}
					}

					// STNODE
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_ST_NODE_MERGE20", paramMap);
					// 업체명 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE20", paramMap);
					// 업체 LOC 주소 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE20", paramMap);
					// 업체 LOC EN 주소 입력
					if(!CommonUtil.isEmpty(ifPlaceCMap, "GLBL_ADDR"))
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE20", paramMap);
					if(hasRepreNm == true) {
						// 담당자 정보 입력
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CONT_MERGE20", paramMap);
						// 업체별 담당자 맵핑 정보 입력
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_MERGE20", paramMap);
					}
					// 간접거래처 정보 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_INDIRECT_CUST_MERGE20", paramMap);

					paramMap.put("RCP_TCD", "IDIR");
					// 업체명 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_NAME_MERGE20", paramMap);
					// 업체 LOC 주소 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_LOC_MERGE20", paramMap);
					// 업체 LOC EN 주소 입력
					iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_ADDR_EN_MERGE20", paramMap);
					if(hasRepreNm == true) {
						// 업체별 담당자 맵핑 정보 입력
						iCnt = nexacroService.update("ifeai2-sql.IFEAI2_TMDM_BP_CPCT_MPG_MERGE20", paramMap);
					}
				}

				logger.info(strLog + "iCnt = " + iCnt);
				// 실행 건수가 1이 아니면 오류 처리한다.
				// 이 부분은 INSTANCEID 당 하나씩 처리되어야 정상인데 다른 상황이 발생할 여지가 있으면
				// 인터페이스 정의서의 상황에 맞게 수정 바람.
				if(iCnt == 0) {
					if("D".equals(sEaiOp) && "NRML".equals(sEaiStatus)) //  사용중지 해제의 경우 수정 "U"로 표시
						strMsg += getOpMsg("U");
					else
						strMsg += getOpMsg(sEaiOp);
					// 오류 셋팅
					setFailSetting(eData, paramMap, strMsg);
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
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_PLACE_C_UPDATE", paramMap);
		nexacroService.update("ifeai2-sql.IFEAI2_TMDM_IF_PLACE_C_NM_UPDATE", paramMap);

		return eData;
	}

	@SuppressWarnings({"unchecked", "rawtypes"})
	private KilsWsEaiData ifCm01032(KilsWsEaiData eData) {
		return null;
	}

} // end of class
