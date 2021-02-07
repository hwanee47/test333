package moonsoft.nexacro.service.mdm.impl;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.EncryptionUtil;
import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.mdm.UserMgmService;

import com.nexacro17.xapi.data.DataSet;

/**
 * The class UserMgmServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	JaeHyun
 * @version	1.0
 * @since	2018.08.02
 *
 */

@Service("userMgmService")
public class UserMgmServiceImpl implements UserMgmService{

	/**
	 * Logger<br>
	 * <br>
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 사용자정보 등록/수정<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters saveUserInfo(Parameters inParam) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * 사용자목록 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters deleteUserList(Parameters inParam) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * 내부사용자 정보 (실행거점, 코스트센터 리스트) 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters getInUserInfo(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 조회조건
		Map<String,Object> searchMap = inParam.getData("dsSearch");
		
		// 고객 정보 조회
		DataSet dsUserInfo	= nexacroService.queryForDataset(searchMap, "userMgmService.getInUserList");
		outParam.setOutDatasetList("dsUserInfo", dsUserInfo);

		// 실행거점 정보 조회
		searchMap.put("CORP_GB", "01");
		DataSet baseCorpList = nexacroService.queryForDataset(searchMap, "userMgmService.getInUserInfo");
		outParam.setOutDatasetList("dsBaseCorpList", baseCorpList);
		
		// 코스트센터 정보 조회
		searchMap.put("CORP_GB", "02");
		DataSet costCList = nexacroService.queryForDataset(searchMap, "userMgmService.getInUserInfo");
		outParam.setOutDatasetList("dsCostCList", costCList);

		// 고객 정보 조회
		searchMap.put("CORP_GB", "03");
		DataSet shprList = nexacroService.queryForDataset(searchMap, "userMgmService.getInUserInfo");
		outParam.setOutDatasetList("dsShprList", shprList);
		
		return outParam;
	}
	
	/**
	 * 내부사용자 정보 (실행거점, 코스트센터 리스트) 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters saveInUserInfo(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsUserInfo = inParam.getDataSet("dsUserInfo");

		// 사용자정보
		Map<String,Object> userInfo = inParam.getData("dsUserInfo");		
		
		String pw = (String) userInfo.get("PW");
		if(pw != null && !("".equals(pw))){
// TODO::암호화
			// dsUserInfo.set(0, "PW", EncryptionUtil.digestSHA256(pw));
		}
		
		// 신규:INSERT
		if("I".equals(userInfo.get("ROW_TYPE"))){		// or SEQ_NO is NULL
			// String SeqNo =
			// SELECT NEXTVAL FOR KFR.SEQ_TADM_KFR_USER  AS SEQ_NO FROM DUAL
			
		}
//		// 수정:UPDATE
//		else {
//			
//		}
		
		return outParam;
	}
	
	/**
	 * 사용자 거점정보 등록/수정<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters saveUserSubData(Parameters inParam) throws Exception {		
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsSave = inParam.getDataSet("ds1");

		// rowCount
		int rowCount = dsSave.getRowCount();
				
		// result count
		int resultCnt = 0;
		for(int i=0; i < rowCount; i++) {
			resultCnt += nexacroService.updateDataSet(dsSave, i, "userMgmService.saveUserSubData");
		}

		return outParam;
	}
	
	/**
	 * 사용자 거점정보 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters deleteUserSubData(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsDelete = inParam.getDataSet("dsDeleteBaseCorp");
		DataSet dsDelete2 = inParam.getDataSet("dsDeleteCostC");
		DataSet dsDelete3 = inParam.getDataSet("dsDeleteShpr");
		
        //삭제
		if(dsDelete != null) {
			/* delete */
			for(int i = 0; i < dsDelete.getRowCount(); i++) {

				nexacroService.updateDataSet(dsDelete, i, "userMgmService.deleteUserSubData");
			}
		}		
		
		if(dsDelete2 != null) {
			/* delete */
			for(int j = 0; j < dsDelete2.getRowCount(); j++) {

				nexacroService.updateDataSet(dsDelete2, j, "userMgmService.deleteUserSubData");
			}
		}			

		if(dsDelete3 != null) {
			/* delete */
			for(int j = 0; j < dsDelete3.getRowCount(); j++) {

				nexacroService.updateDataSet(dsDelete3, j, "userMgmService.deleteUserSubData");
			}
		}

		return outParam;
	}
	
	/**
	 * 내부사용자 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters deleteInternalUser(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsDelete = inParam.getDataSet("dsDelete");
		
        //삭제
		if(dsDelete != null) {
			/* delete */
			for(int i = 0; i < dsDelete.getRowCount(); i++) {

				nexacroService.updateDataSet(dsDelete, i, "userMgmService.deleteInternalUser");
			}
		}		
		
		return outParam;
	}	

	/**
	 * 사업자 등록 번호 인증.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters bizNoCertification(Parameters inParam) throws Exception {		
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsSearch = inParam.getDataSet("dsSearch");
		DataSet dsBizNoCert = null;
		// param Map
		final Map<String,Object> searchMap		= inParam.getData("dsSearch");
		
		String dsBizNoCheck 	= (String)nexacroService.queryForObject(searchMap, "userMgmService.getBizNoCheck");
		String dsWrongBizCheck = (String)nexacroService.queryForObject(searchMap, "userMgmService.getWrongBizCheck");
		
		// DataSet dsBizNoCert = nexacroService.queryForDataset(dsSearch, 0,"userMgmService.bizNoCertification");
		Map<String, Object> outMap		= new HashMap<String, Object>();
		
		logger.debug("bizNoCertification() dsBizNoCheck[" +dsBizNoCheck +"]");
		
		if (dsBizNoCheck == null) {
			dsBizNoCheck = "0";
		}
		
		String cnt			= dsBizNoCheck;
		String chkCnt 		= "";
		String bizNoCertification = "";		
		
		logger.debug("bizNoCertification() JOIN_TYPE["+dsSearch.getObject(0, "JOIN_TYPE")+"]");				
		if ("T01".equals(dsSearch.getObject(0, "JOIN_TYPE")) || "T02".equals(dsSearch.getObject(0, "JOIN_TYPE")) || "T03".equals(dsSearch.getObject(0, "JOIN_TYPE"))) {
			chkCnt = "0";
		}
		else  {
			chkCnt = dsBizNoCheck;
		}
		if (!"0".equals(chkCnt)) {
			bizNoCertification = "00";
			logger.debug("bizNoCertification() chkCnt["+chkCnt+"]");
		}
		else if (!"0".equals(dsWrongBizCheck)) {
			bizNoCertification = "WRONG";
			logger.debug("bizNoCertification() dsWrongBizCheck["+dsWrongBizCheck+"]");
		} else {
			BufferedReader br = null;
			StringBuffer sb = new StringBuffer();
		
			String BIZ_REG_NO = dsSearch.getString(0, "BIZ_REG_NO");         //inParams.getVariableAsString("BIZ_REG_NO");
			String ID = "cjgls01";
			String PW = "cj51581";

			try {

				String domain = "http://ecct.innohub.co.kr/Search2.jsp?data=" + ID + "%20%20%20" + PW + "%20%20%20";

				logger.debug("사업자번호 인증 URL : " + domain + BIZ_REG_NO);

				URL url = new URL(domain + BIZ_REG_NO);
				URLConnection conn = (URLConnection)url.openConnection();

				br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "EUC-KR"));
				//System.out.println("br>>>>>>>>>>>>>>>>>>>>>>>>>>>" + br);
				String line = "";

				while((line = br.readLine()) != null) {

					sb.append(line);
					bizNoCertification += line;
				}
			}

			catch(Exception ex) {
				logger.error("Exception", ex);	
				ex.printStackTrace();
				bizNoCertification = null;
			}

			finally {

				if(br != null) {
					try {
						br.close();
					} catch(Exception exx) {
						logger.error("Exception", exx);
					}
				}
			}
        }
		
		outMap.put("MSG", bizNoCertification);
			outMap.put("CNT", cnt);
			
		dsBizNoCert = NexacroConvertUtil.makeDsFromMap(outMap);
		
        outParam.setOutDatasetList("dsBizNoCert", dsBizNoCert);
        
		return outParam;
	}	

	/**
	 * 아이디 중복체크<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters getIdCheck(Parameters inParam) throws Exception {		
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsSearch = inParam.getDataSet("dsSearch");

		DataSet dsIdCheck = nexacroService.queryForDataset(dsSearch, 0,"userMgmService.getIdCheck");
		
		
		outParam.setOutDatasetList("dsIdCheck", dsIdCheck);
		
		return outParam;
	}	
	
	/**
	 * 개인화주를 제외한 나머지 회원 가입<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters createUserMgmTemp(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> dsUserList = inParam.getData("dsUserList");
		Map<String,Object> dsDetail = inParam.getData("dsDetail");
		DataSet dsDetailSet = inParam.getDataSet("dsDetail");
		
		String jobType 		= (String)dsUserList.get("JOIN_TYPE");
		String seq_no 		= (String)dsUserList.get("SEQ_NO");
		String status 		= (String)dsUserList.get("STATUS");
		String attribute04	= (String)dsUserList.get("ATTRIBUTE04");
		String attribute05	= (String)dsUserList.get("ATTRIBUTE05");
		//
		dsDetail.put("ATTRIBUTE04", attribute04);
		dsDetail.put("ATTRIBUTE05", attribute05);
		dsDetail.put("SEQ_NO"	  , seq_no);
		//		
		String lspID = (String)dsDetail.get("LSP_ID");
		String bizRegNo = (String)dsDetail.get("BIZ_REG_NO");
		
		// LSP 신규 생성 시 BIZ_REG_NO 중복 처리 로직
		if ((jobType.equals("T04")|| jobType.equals("T05")) && lspID == null) {
			String bizRegNoDup = (String)nexacroService.queryForObject(dsDetail, "userMgmService.getBizRegNoDup");
			
			if (Integer.parseInt(bizRegNoDup) > 0) {
		        Map<String, Object> retMap = new HashMap<String, Object>();
		        retMap.put("errorCode", -1);
		        retMap.put("errorMsg", "이미 등록된 사업자번호입니다.");
		        
		        List<Map<String, Object>> retList = new ArrayList();
		        retList.add(retMap);
		        
		        outParam.setOutDatasetList("dsResult", NexacroConvertUtil.makeDataSet((List)retList));
		        
		        return outParam;
			}
		}
		
		if(jobType.equals("T01") ||jobType.equals("T02")||jobType.equals("T03"))
		{
			String shprId = (String)dsDetail.get("SHPR_ID");
			
			dsUserList.put("SHPR_ID"	, shprId);
			dsUserList.put("LSP_ID"		, "");
			
			if(seq_no == null)
			{
				// user 테이블 인서트
				Map seqNoMap = (Map) nexacroService.queryForObject(dsUserList, "userMgmService.selectSeqNo");
				dsUserList.put("SEQ_NO", seqNoMap.get("SEQ_NO"));
				
				nexacroService.insertMap(dsUserList, "userMgmService.createUserMgmTemp");
				//String SEQ_NO = (String)nexacroService.queryForObject(dsUserList, "userMgmService.getSeqNo");
			
				// Shpr_id가 null이라면 (SHPR 테이블에 정보가 없다면) 신규 생성 로직으로 가고,
				// Shpr_id가 null이 아니라면 업데이트 로직으로 감
				if (shprId != null) {
					dsDetail.put("SHPR_ID"	, shprId);
					dsDetail.put("type"		, "S");			
					
					//SHPR 테이블 업데이트 
					nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_shprEdit");
				}
				else {
					//SHPR 테이블 신규 생성
					
					shprId = (String)nexacroService.queryForObject("", "userMgmService.se_userMgmTempDetailInfoPopup_shprID"); 
					
					dsDetail.put("SHPR_ID"		, shprId);
					dsDetail.put("JOIN_TYPE"	, jobType);
					dsDetail.put("BIZ_TYPE"		, dsUserList.get("BIZ_TYPE"));
					dsDetail.put("CORP_ID"		, dsDetail.get("BASE_CORP_ID"));
					
					nexacroService.insertMap(dsDetail, "userMgmService.saveShprInfo");
					
					dsUserList.put("SHPR_ID"	, shprId);
				}
				
				nexacroService.updateMap(dsUserList, "userMgmService.updateUserShprInfo");	
			
			// if (Shpr_id != null) 이면 Shpr 정보 업데이트, Shpr_id를 User 테이블에 추가
			// else 이면 Shpr 정보 추가, 생성된 Shpr_id 추출 후 User 테이블에 추가
			}
			else {
				//기본정보만 수정 되는 경우가 있어 디테일 정보에 SET.(디테일 정보에 설정 되는 정보는 기본정보에서만 수정 가능.)
				dsDetail.put("MOBILE1"	, dsUserList.get("MOBILE1"));		//휴대전화
				dsDetail.put("MOBILE2"	, dsUserList.get("MOBILE2"));		//휴대전화
				dsDetail.put("MOBILE3"	, dsUserList.get("MOBILE3"));		//휴대전화
				dsDetail.put("CORP_ID"	, dsUserList.get("CORP_ID"));		//실행거점
				dsDetail.put("UEMAIL1"	, dsUserList.get("EMAIL1"));		//이메일
				dsDetail.put("UEMAIL2"	, dsUserList.get("EMAIL2"));		//이메일
				dsDetail.put("NAME"		, dsUserList.get("NAME"));			//담당자명
				
				//user 테이블 update
				nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_infoEdit");
				
				if(shprId != null)
				{
					dsDetail.put("SHPR_ID"	, shprId);
					dsDetail.put("type"		, "S");			
					
					//SHPR 테이블 업데이트 
					nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_shprEdit");
					
					DataSet interFaceType 		= nexacroService.queryForDataset(dsDetail, "userMgmService.getInterFaceType");
					List<Map> interFaceType2 	= nexacroService.queryForList(dsDetailSet, 0, "userMgmService.getInterFaceType");
					
					String userEventType 	= "";
					String ifResult 		= "";
					String mdm_id 			= (String)dsDetail.get("MDM_SHPR_ID");
				
					if(interFaceType2.size() > 0) {
						userEventType = String.valueOf(interFaceType2.get(0).get("USER_EVENT_TYPE"));
						ifResult = String.valueOf(interFaceType2.get(0).get("IF_RESULT"));
					}
					// 입력된 데이터의 형태에 따라 수행할 작업 분기.  
					if(("I".equals(userEventType) && "SUCCESS".equals(ifResult)) || "U".equals(userEventType)) {
						// 입력된 데이터의 userEventType이 "I"이고(신규 입력), 프로시저 호출 결과가 success인 경우
						// 입력된 데이터의 userEventType이 "U"인 경우
						dsDetail.put("interfaceType", "U");
						dsDetail.put("SHPR_ID", shprId);
						nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempShpr");
					} else if ("I".equals(userEventType) && ifResult.equals("null")) {
						// 입력된 데이터의 userEventType이 "I"이고(신규 입력), 프로시저 호출 결과가 null인 경우(아직 프로시저 호출이 되지 않은 경
					} else if ("0".equals(status)) {
						// 입력된 데이터가 아직 미승인 상태인 경우
					} else if (!("SUCCESS".equals(ifResult))) {
						// 결과가 success가 아닌 경우(새 데이터를 입력 받아야 하는 경우)
						if (mdm_id != null) {
							dsDetail.put("interfaceType", "U");
						} else {
							dsDetail.put("interfaceType", "I");
						}
						dsDetail.put("SHPR_ID", shprId);
						nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempShpr");
					} else {
						// 위의 경우가 모두 아닌 경우
					}
				}
				else {
					//SHPR 테이블 신규 생성
					
					shprId = (String)nexacroService.queryForObject("", "userMgmService.se_userMgmTempDetailInfoPopup_shprID"); 
					
					dsDetail.put("SHPR_ID"		, shprId);
					dsDetail.put("JOIN_TYPE"	, jobType);
					dsDetail.put("BIZ_TYPE"		, dsUserList.get("BIZ_TYPE"));
					dsDetail.put("CORP_ID"		, dsDetail.get("BASE_CORP_ID"));
					
					nexacroService.insertMap(dsDetail, "userMgmService.saveShprInfo");
					
					// 신규 데이터인 경우 User Interface에 해당 SHPR ID / InterfaceType을 I로 데이터를 생성한다.
					// dsDetail.put("interfaceType", "I");
					// nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempShpr");
					
					dsUserList.put("SHPR_ID", shprId);
					nexacroService.updateMap(dsUserList, "userMgmService.updateUserShprInfo");					
				}
			}
		}
		else if(jobType.equals("T04") ||jobType.equals("T05"))
		{
			String lspId = (String)dsDetail.get("LSP_ID");
			
			dsUserList.put("LSP_ID"		, lspId);
			dsUserList.put("SHPR_ID"	, "");
			
			if(seq_no == null)
			{	
			//user 테이블 인서트
				Map seqNoMap = (Map) nexacroService.queryForObject(dsUserList, "userMgmService.selectSeqNo");
				dsUserList.put("SEQ_NO", seqNoMap.get("SEQ_NO"));
				
				nexacroService.insertMap(dsUserList, "userMgmService.createUserMgmTemp2");
				//String SEQ_NO = (String)nexacroService.queryForObject(dsUserList, "userMgmService.getSeqNo");
			
				// if (lsp_id != null) 이면 lsp 정보 업데이트, lsp_id를 User 테이블에 추가
				// else 이면 lsp 정보 추가, 생성된 lsp_id 추출 후 User 테이블에 추가
				
				// lsp_id가 null이라면 (SHPR 테이블에 정보가 없다면) 신규 생성 로직으로 가고,
				// lsp_id가 null이 아니라면 업데이트 로직으로 감
				if (lspId != null) {
					dsDetail.put("lspId"	, lspId);
					dsDetail.put("type"		, "L");			
					
					//LSP 테이블 업데이트 
					nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_lspEdit");
				}
				else {
					//LSP 테이블 신규 생성
					lspId = (String)nexacroService.queryForObject("", "userMgmService.se_userMgmTempDetailInfoPopup_lspID"); 
					
					dsDetail.put("LSP_ID"		, lspId);
					dsDetail.put("JOIN_TYPE"	, jobType);
					dsDetail.put("BIZ_TYPE"		, dsUserList.get("BIZ_TYPE"));
					dsDetail.put("CORP_ID"		, dsDetail.get("BASE_CORP_ID"));
					
					nexacroService.insertMap(dsDetail, "userMgmService.saveLspInfo");
					
					dsUserList.put("LSP_ID", lspId);
				}
				
				nexacroService.updateMap(dsUserList, "userMgmService.updateUserLspInfo");
			}
			else {
				//기본정보만 수정 되는 경우가 있어 디테일 정보에 SET.(디테일 정보에 설정 되는 정보는 기본정보에서만 수정 가능.)
				dsDetail.put("MOBILE1"	, dsUserList.get("MOBILE1"));		//휴대전화
				dsDetail.put("MOBILE2"	, dsUserList.get("MOBILE2"));		//휴대전화
				dsDetail.put("MOBILE3"	, dsUserList.get("MOBILE3"));		//휴대전화
				dsDetail.put("CORP_ID"	, dsUserList.get("CORP_ID"));		//실행거점
				dsDetail.put("UEMAIL1"	, dsUserList.get("EMAIL1"));		//이메일
				dsDetail.put("UEMAIL2"	, dsUserList.get("EMAIL2"));		//이메일
				dsDetail.put("NAME"		, dsUserList.get("NAME"));			//담당자명
				
				
				//user 테이블 update
				nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_infoEdit");
				
				if(lspId != null)
				{
					dsDetail.put("lspId"	, lspId);
					dsDetail.put("type"		, "L");
					
					//LSP 테이블 업데이트 
					nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_lspEdit");
					
					DataSet result 			= nexacroService.queryForDataset(dsDetail, "userMgmService.selectCustCount");
					DataSet interFaceType 	= nexacroService.queryForDataset(dsDetail, "userMgmService.getInterFaceType");

					// List<Map<String, Object>> interFaceType2 = (List<Map<String, Object>>) interFaceType;
					List<Map> interFaceType2 = nexacroService.queryForList(dsDetailSet, 0, "userMgmService.getInterFaceType");
					
					String userEventType 	= "";
					String ifResult 		= "";
					String mdm_id 			= (String)dsDetail.get("MDM_LSP_ID");
				
					if(interFaceType2.size() > 0) {
						userEventType = String.valueOf(interFaceType2.get(0).get("USER_EVENT_TYPE"));
						ifResult = String.valueOf(interFaceType2.get(0).get("IF_RESULT"));
					}
					
					// 입력된 데이터의 형태에 따라 수행할 작업 분기.  
					if(("I".equals(userEventType) && "SUCCESS".equals(ifResult)) || "U".equals(userEventType)) {
						// 입력된 데이터의 userEventType이 "I"이고(신규 입력), 프로시저 호출 결과가 success인 경우
						// 입력된 데이터의 userEventType이 "U"인 경우
						dsDetail.put("interfaceType"	, "U");
						dsDetail.put("LSP_ID"			, lspId);
						
						nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempLsp");
					} else if ("I".equals(userEventType) && ifResult.equals("null")) {
						// 입력된 데이터의 userEventType이 "I"이고(신규 입력), 프로시저 호출 결과가 null인 경우(아직 프로시저 호출이 되지 않은 경우)
					} else if ("0".equals(status)) {
						// 입력된 데이터가 아직 미승인 상태인 경우
					} else if (!("SUCCESS".equals(ifResult))) {
						// 결과가 success가 아닌 경우(새 데이터를 입력 받아야 하는 경우)
						if (mdm_id != null) {
							dsDetail.put("interfaceType", "U");
						} else {
							dsDetail.put("interfaceType", "I");
						}
						dsDetail.put("LSP_ID", lspId);
						nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempLsp");
					} else {
						// 위의 경우가 모두 아닌 경우
					}
				}
				else {
					//LSP 테이블 신규 생성
					lspId = (String)nexacroService.queryForObject("", "userMgmService.se_userMgmTempDetailInfoPopup_lspID"); 
					
					dsDetail.put("LSP_ID"		, lspId);
					dsDetail.put("JOIN_TYPE"	, jobType);
					dsDetail.put("BIZ_TYPE"		, dsUserList.get("BIZ_TYPE"));
					dsDetail.put("CORP_ID"		, dsDetail.get("BASE_CORP_ID"));
					
					nexacroService.insertMap(dsDetail, "userMgmService.saveLspInfo");
					
					// 신규 데이터인 경우 User Interface에 해당 LSP ID / InterfaceType을 I로 데이터를 생성한다.
					// dsDetail.put("interfaceType", "I");
					// nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempLsp");
					
					dsUserList.put("LSP_ID", lspId);
					nexacroService.updateMap(dsUserList, "userMgmService.updateUserLspInfo");
				}
			}
			
			//KFR.TMDM_KFR_CT_EQP_TEMP 정보 KFR.TMDM_KFR_CT_EQP 로 이관
			//차량 중복체크 (중복되면 입력 안됨) 20151229
			String v_result = (String) nexacroService.queryForObject(dsUserList, "userMgmService.checkVhclValid");
			//차량 검증 통과된 값만 차량 테이블에 인서트
			if("Y".equals(v_result)) {
				List ctEqpTempList = nexacroService.queryForObjectList(dsUserList, "userMgmService.selectCtEqpTemp");
				if(ctEqpTempList.size() > 0) {
					for(int k=0; k < ctEqpTempList.size(); k++) {
						HashMap hm_list = (HashMap)ctEqpTempList.get(k);
						hm_list.put("LSP_ID"		, dsUserList.get("LSP_ID"));
						hm_list.put("SEQ_NO"		, dsUserList.get("SEQ_NO"));
						
						nexacroService.updateMap(hm_list, "userMgmService.insertCtEqpMgmAdd");
						
						//TEMP 테이블에 TEMP_CON_YN(요청대기상태여부를 승인 상태로 수정)
						nexacroService.updateMap(hm_list, "userMgmService.updateCtEqpTempConYn");
					}
				}
			}
		}
		return outParam;
	}		
	
	/**
	 * 운송고객/가맹점 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters updateUserMgmTemp(Parameters inParam) throws Exception {		
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> dsUserList = inParam.getData("dsUserList");
		Map<String,Object> dsDetail = inParam.getData("dsDetail");
		DataSet dsDetailSet = inParam.getDataSet("dsDetail");
		
		String jobType = dsUserList.get("JOIN_TYPE").toString();
		
		if(jobType.equals("T01") ||jobType.equals("T02")||jobType.equals("T03"))
		{
            String Shpr_id = dsDetail.get("SHPR_ID").toString();
			
			dsUserList.put("SHPR_ID", Shpr_id);
			dsUserList.put("LSP_ID", "");
			//user 테이블 update
			nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_infoEdit");
			
			//SHPR 테이블 업데이트 
			nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_shprEdit");
			
			DataSet interFaceType = nexacroService.queryForDataset(dsDetail, "userMgmService.getInterFaceType");
			
			List<Map> interFaceType2 = nexacroService.queryForList(dsDetailSet, 0, "userMgmService.getInterFaceType");
			
			String userEventType = "";
			String ifResult = "";
			String mdm_id = (String)dsDetail.get("MDM_SHPR_ID");
		
			if(interFaceType2.size() > 0) {
				userEventType = String.valueOf(interFaceType2.get(0).get("USER_EVENT_TYPE"));
				ifResult = String.valueOf(interFaceType2.get(0).get("IF_RESULT"));
			}
			// 입력된 데이터의 형태에 따라 수행할 작업 분기.  
			if(("I".equals(userEventType) && "SUCCESS".equals(ifResult)) || "U".equals(userEventType)) {
				// 입력된 데이터의 userEventType이 "I"이고(신규 입력), 프로시저 호출 결과가 success인 경우
				// 입력된 데이터의 userEventType이 "U"인 경우
				dsDetail.put("interfaceType", "U");
				dsDetail.put("SHPR_ID", Shpr_id);
				nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempShpr");
			} else if ("I".equals(userEventType) && ifResult.equals("null")) {
				// 입력된 데이터의 userEventType이 "I"이고(신규 입력), 프로시저 호출 결과가 null인 경우(아직 프로시저 호출이 되지 않은 경
			} else if (!("SUCCESS".equals(ifResult))) {
				// 결과가 success가 아닌 경우(새 데이터를 입력 받아야 하는 경우)
				if (mdm_id != null) {
					dsDetail.put("interfaceType", "U");
				} else {
					dsDetail.put("interfaceType", "I");
				}
				dsDetail.put("SHPR_ID", Shpr_id);
				nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempShpr");
			} else {
				// 위의 경우가 모두 아닌 경우
			}
		}
		else if(jobType.equals("T04") ||jobType.equals("T05"))
		{
            String lsp_id = dsDetail.get("LSP_ID").toString();
			
			dsUserList.put("LSP_ID", lsp_id);
			dsUserList.put("SHPR_ID", "");
			String mdm_id = (String)dsDetail.get("MDM_LSP_ID");			
			
			//user 테이블 update
			nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_infoEdit");
    	    
			//LSP 테이블 업데이트 
			nexacroService.updateMap(dsDetail, "userMgmService.up_adminMstInfoPopup_lspEdit");
			
			DataSet result = nexacroService.queryForDataset(dsDetail, "userMgmService.selectCustCount");
			
			DataSet interFaceType = nexacroService.queryForDataset(dsDetail, "userMgmService.getInterFaceType");

			// List<Map<String, Object>> interFaceType2 = (List<Map<String, Object>>) interFaceType;
			List<Map> interFaceType2 = nexacroService.queryForList(dsDetailSet, 0, "userMgmService.getInterFaceType");
			
			String userEventType = "";
			String ifResult = "";
		
			if(interFaceType2.size() > 0) {
				userEventType = String.valueOf(interFaceType2.get(0).get("USER_EVENT_TYPE"));
				ifResult = String.valueOf(interFaceType2.get(0).get("IF_RESULT"));
			}
			
			// 입력된 데이터의 형태에 따라 수행할 작업 분기.  
			if(("I".equals(userEventType) && "SUCCESS".equals(ifResult)) || "U".equals(userEventType)) {
				// 입력된 데이터의 userEventType이 "I"이고(신규 입력), 프로시저 호출 결과가 success인 경우
				// 입력된 데이터의 userEventType이 "U"인 경우
				dsDetail.put("interfaceType", "U");
				dsDetail.put("LSP_ID", lsp_id);
				nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempLsp");
			} else if ("I".equals(userEventType) && ifResult.equals("null")) {
				// 입력된 데이터의 userEventType이 "I"이고(신규 입력), 프로시저 호출 결과가 null인 경우(아직 프로시저 호출이 되지 않은 경우)  
			} else if (!("SUCCESS".equals(ifResult))) {
				// 결과가 success가 아닌 경우(새 데이터를 입력 받아야 하는 경우)
				if (mdm_id != null) {
					dsDetail.put("interfaceType", "U");
				} else {
					dsDetail.put("interfaceType", "I");
				}
				dsDetail.put("LSP_ID", lsp_id);
				nexacroService.insertMap(dsDetail, "userMgmService.insertEventTempLsp");
			} else {
				// 위의 경우가 모두 아닌 경우
			}
		}
		
		return outParam;
	}			
	
	
	
	
	/**
	 * 일반고객 update,insert<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters insertIntertnalUser(Parameters inParam) throws Exception {		
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsUserList 	= inParam.getDataSet("dsDetail");
		DataSet dsCheck 	= inParam.getDataSet("dsCheck");
		
		String newYn = dsCheck.getString(0, "NEW_YN");
		
		if("Y".equals(newYn)) {
			//등록 된 고객인지 확인.
			DataSet ds = nexacroService.queryForDataset(dsUserList, 0, "userMgmService.getUserT04Duple");
			
			if(ds.getRowCount() > 0) {
				throw new NexaUserException("이미 등록 된 고객 입니다.");
			}
		}
		
		nexacroService.insertDataSet(dsUserList, 0, "userMgmService.insertIntertnalUser");
		
		return outParam;
	}		
	
	/**
	 * 임시회원 상세조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters getUserDetail(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 조회조건
		Map<String,Object> searchMap = inParam.getData("dsSearch");

		String jobType = (String)searchMap.get("JOIN_TYPE");
		String SHPR_ID = (String)searchMap.get("SHPR_ID");
		String LSP_ID = (String)searchMap.get("LSP_ID");
		
		logger.debug("getUserDetail jobType["+jobType+"]");
		
		if(jobType.equals("T01") ||jobType.equals("T02")||jobType.equals("T03")){

			DataSet dsDetail = nexacroService.queryForDataset(searchMap, "userMgmService.getUserDetail1");
			outParam.setOutDatasetList("dsDetail", dsDetail);
			
			
		}else if(jobType.equals("T04") ||jobType.equals("T05")){
			
			DataSet dsDetail = nexacroService.queryForDataset(searchMap, "userMgmService.getUserDetail2");
			logger.debug("getUserDetail() dsDetail["+dsDetail.getString(0, "LSP_NM")+"]");
			outParam.setOutDatasetList("dsDetail", dsDetail);			
			
		}
		
		return outParam;
	}
	
	/**
	 * 임시회원 승인<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters saveApprovalList(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		//DataSet dsApproval = inParam.getDataSet("dsApproval");
		
		List<Map<String, Object>> dsApproval = inParam.getDataList("dsApproval");
		
		
		// result count
		int resultCnt = 0;
		
		for(int i=0; i < dsApproval.size(); i++) 
		{
			Map<String,Object>	mapApproval = dsApproval.get(i);
			
			mapApproval.put("interfaceType", "I");
			                 
			//resultCnt += nexacroService.updateDataSet(dsSave, i, "userMgmService.saveUserSubData");
			nexacroService.updateMap(mapApproval, "userMgmService.insertUserTempMgmMainUserUse");
		
			String jobType = mapApproval.get("JOIN_TYPE").toString();
			
			if(jobType.equals("T01") ||jobType.equals("T02")||jobType.equals("T03"))
			{
				nexacroService.updateMap(mapApproval, "userMgmService.insertUserTempMgmMainShprUse");
			
			    if(!jobType.equals("T03"))
			    {
			    	nexacroService.insertMap(mapApproval, "userMgmService.insertEventTempShpr");
			    }
				
			}
		 
		    if(jobType.equals("T04") ||jobType.equals("T05"))
		    {
		    	nexacroService.updateMap(mapApproval, "userMgmService.insertUserTempMgmMainLspUse");
		    
		    	DataSet result = nexacroService.queryForDataset(mapApproval, "userMgmService.selectBizRegNoShpr");
		    
		    	nexacroService.insertMap(mapApproval, "userMgmService.insertEventTempLsp");
		    	
		    	/*if(result.getRowCount() > 0)
		    	{
		    		DataSet SearchDs = nexacroService.queryForDataset(mapApproval, "userMgmService.selectCtEqpTemp");
		    		
		    		if (SearchDs.getRowCount() > 0) {
			    		
			    		//insert
			    		nexacroService.insertDataSet(SearchDs, 0, "userMgmService.insertCtEqpMgmAdd");
			    		
			    		//update
			    		nexacroService.updateDataSet(SearchDs, 0, "userMgmService.updateCtEqpTempConYn");
		    		}
		    	}*/
		    	
		    	DataSet SearchDs = nexacroService.queryForDataset(mapApproval, "userMgmService.selectCtEqpTemp");
	    		
	    		if (SearchDs.getRowCount() > 0) {
	    			for(int j=0; j<SearchDs.getRowCount(); j++) {
	    				SearchDs.set(j, "LSP_ID", mapApproval.get("LSP_ID"));
	    				//insert
			    		nexacroService.insertDataSet(SearchDs, j, "userMgmService.insertCtEqpMgmAdd");
			    		
			    		//update
			    		nexacroService.updateDataSet(SearchDs, j, "userMgmService.updateCtEqpTempConYn");
	    			}
	    		}
		    }
		
		}
		return outParam;
	}	

	/**
	 * 임시회원 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters deleteinfo(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		//DataSet dsApproval = inParam.getDataSet("dsApproval");
		
		List<Map<String, Object>> dsDelete = inParam.getDataList("dsDelete");
		
		
		// result count
		int resultCnt = 0;
		
		for(int i=0; i < dsDelete.size(); i++) 
		{
			Map<String,Object>	dsDeleteval = dsDelete.get(i);
			
			String lspId = dsDeleteval.get("LSP_ID").toString();
			String shprId = dsDeleteval.get("SHPR_ID").toString();
			String joinType = dsDeleteval.get("JOIN_TYPE").toString();
			
			// 유저삭제
			nexacroService.updateMap(dsDeleteval, "userMgmService.deleteTempUserinfo");
			
			if("T04".equals(joinType) || "T05".equals(joinType)) {
				if(!"-".equals(lspId)) {
					nexacroService.updateMap(dsDeleteval, "userMgmTempService.deleteTempLspinfo"); //협력사삭제
					// nexacroService.updateMap(dsDeleteval, "userMgmTempService.deleteLspInterfaceInfo"); // 고객삭제
				}
			}			
			if("T01".equals(joinType) || "T02".equals(joinType) || "T03".equals(joinType)) {
				if(!"-".equals(shprId)) {
					nexacroService.updateMap(dsDeleteval, "userMgmTempService.deleteTempShprinfo"); // 고객삭제
					// nexacroService.updateMap(dsDeleteval, "userMgmTempService.deleteShprInterfaceInfo"); // 고객삭제
				}
			}
		
		}
		
		return outParam;
	}	

	/**
	 * 임시 PW 생성<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters updateTempPwPublic(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		String admin_yn = "Y";
		String TEMPPW_MODIFY_YN = null;
		
		// 조회조건
		Map<String,Object> searchMap = inParam.getData("dsSearch");
		String pw = (String)searchMap.get("ORDER_TEMP_PW");
		
		String status = (String)searchMap.get("STATUS");
		
		if ("1".equals(status)) {
			TEMPPW_MODIFY_YN = "Y";
		}
		else {
			TEMPPW_MODIFY_YN = "N";
		}
		searchMap.put("TEMPPW_MODIFY_YN", TEMPPW_MODIFY_YN);
		
		if (pw != null) {
			searchMap.put("ORDER_TEMP_PW", EncryptionUtil.digestSHA256(pw));
			logger.debug("updateTempPwPublic() input_PW["+pw+"] encPW["+EncryptionUtil.digestSHA256(pw)+"]");
		}
		
		if("Y".equals(admin_yn)){

		  nexacroService.updateMap(searchMap, "userMgmService.up_tempPwPublic");
			
		}
		
		return outParam;
	}	
	
	/**
	 * 내부 사용자 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters saveInternalUserData(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		List<Map<String, Object>> dsUserList = inParam.getDataList("dsUserList");
		
		for(int i=0; i < dsUserList.size(); i++) 
		{
			Map<String,Object>	dsUserListval = dsUserList.get(i);
			
			String rowtype = (String)dsUserListval.get("ROW_TYPE");
			String seq_no = (String)dsUserListval.get("SEQ_NO");
		
			//insert
			if(rowtype.equals("2")||seq_no == null)
			{
				DataSet result = nexacroService.queryForDataset(dsUserListval, "userMgmService.selectSeqNo");
				
				seq_no = result.getString(0, "SEQ_NO");
				
				dsUserListval.put("SEQ_NO", seq_no);
				
				nexacroService.insertMap(dsUserListval, "userMgmService.insertInternalUserData");
				
				//대표실행거점,
				dsUserListval.put("SUB_VALUE", "1");
				nexacroService.insertMap(dsUserListval, "userMgmService.insertListSubData");
				//대표매출코스트센터
				dsUserListval.put("SUB_VALUE", "2");
				nexacroService.insertMap(dsUserListval, "userMgmService.insertListSubData");
				//대표매입코스트센터 인서트
				dsUserListval.put("SUB_VALUE", "3");
				nexacroService.insertMap(dsUserListval, "userMgmService.insertListSubData");
				
			}
			else if(rowtype.equals("4"))
			{
//				System.out.println("======================"+dsUserListval.toString());
				nexacroService.updateMap(dsUserListval, "userMgmService.updateInternalUser");
				
				//대표실행거점,
				dsUserListval.put("SUB_VALUE", "1");
				nexacroService.insertMap(dsUserListval, "userMgmService.insertListSubData");
				//대표매출코스트센터
				dsUserListval.put("SUB_VALUE", "2");
				nexacroService.insertMap(dsUserListval, "userMgmService.insertListSubData");
				//대표매입코스트센터 인서트
				dsUserListval.put("SUB_VALUE", "3");
				nexacroService.insertMap(dsUserListval, "userMgmService.insertListSubData");
				
			}
		}	
		
		return outParam;
	}
	
	/**
	 * 내부 사용자 암호 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.11.16
	 */
	public Parameters saveInternalUserPw (Parameters inParam) throws Exception {
		
		Parameters outParam = inParam.getClass().newInstance();
		
		List<Map<String, Object>> dsUserList = inParam.getDataList("dsUserList");
		
		logger.debug("saveInternalUserPw() listSize : " + dsUserList.size());
		
		for(int i=0; i < dsUserList.size(); i++) 
		{
			Map<String,Object>	dsUserListval = dsUserList.get(i);
			
			String pw	  = (String)dsUserListval.get("PW");
			if (pw != null) {
				dsUserListval.put("PW", EncryptionUtil.digestSHA256(pw));
			}
			nexacroService.updateMap(dsUserListval, "userMgmService.updateInternalUserPw");
		}

		return outParam;
	}
	
	/**
	 * LSP의 차량 정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters updateLspVhclInfo(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 조회조건
		Map<String,Object> searchMap = inParam.getData("dsLspVhclInfo");
		
		nexacroService.updateMap(searchMap, "userMgmService.saveLspVhclInfo");
		
		return outParam;
	}	

	/**
	 * 회원의 업로드 파일 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.11.14
	 */
	public Parameters selectTbctFileList(Parameters inParam) throws Exception {
		
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 조회조건
		Map<String,Object> searchMap = inParam.getData("dsSearch");
		DataSet dsDocList = nexacroService.queryForDataset(searchMap, "userMgmService.selectTbctFileList");
		
		outParam.setOutDatasetList("dsDocList", dsDocList);		
		
		return outParam;
	}
	
	/**
	 * 회원의 문서 관리 리스트 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.11.14
	 */
	public Parameters saveDocList(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		List<Map<String,Object>> docList = inParam.getDataList("dsDocList");
		Map<String,Object> searchMap = inParam.getData("dsSearch");

		// rowCount
		int rowCount = docList.size();
				
		// result count
		int resultCnt = 0;
		for(int i=0; i < rowCount; i++) {
			Map<String,Object> docInfo = docList.get(i);
			String joinType = (String)searchMap.get("JOIN_TYPE");
			logger.debug("saveDocList() joinType["+joinType+"]");
			
			if (joinType.equals("T01") || joinType.equals("T02") || joinType.equals("T03")) {
				
				docInfo.put("ID", (String)searchMap.get("SHPR_ID"));
				logger.debug("saveDocList() ID["+docInfo.get("ID")+"]");
			}
			else if (joinType.equals("T04") || joinType.equals("T05")) {
				docInfo.put("ID", (String)searchMap.get("LSP_ID"));
				logger.debug("saveDocList() ID["+docInfo.get("ID")+"]");
			}
			
			nexacroService.insertMap(docInfo, "userMgmService.saveDocList");
			
		}

		return outParam;
	}
	
	/**
	 * 회원의 업로드 파일 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.11.14
	 */
	public Parameters selectFileList(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 조회조건
		Map<String,Object> searchMap = inParam.getData("dsSearch");
		searchMap.put("WRK_NO", searchMap.get("SEQ_NO"));
		DataSet dsFileList = nexacroService.queryForDataset(searchMap, "userMgmService.getFileList");
		
		outParam.setOutDatasetList("dsFileList", dsFileList);		
		
		return outParam;				
	}
	
	/**
	 * TMDM_IF_EVENT_KFR_USER의 IF_RESULT 컬럼 확인하고 결과 내용 리턴<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.12.07
	 */
	public Parameters getResultCheck(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 조회조건
		Map<String,Object> searchMap = inParam.getData("dsSearch");
		DataSet dsResultCheck = nexacroService.queryForDataset(searchMap, "userMgmService.getResultCheck");
		
		outParam.setOutDatasetList("dsResultCheck", dsResultCheck);
		
		
		return outParam;		
	}
	
	/**
	 * 회원 유형을 운송가맹점에서 차주로 바꾼다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	DYCho
	 * @since	2018.12.18
	 */
	public Parameters updateJoinType(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 조회조건
		Map<String,Object> searchMap = inParam.getData("dsSearch");
		
		nexacroService.updateMap(searchMap, "userMgmService.updateUserJoinType");
		nexacroService.updateMap(searchMap, "userMgmService.updateLspJoinType");
		
		return outParam;
	}
	
	/**
	 * 회원탈퇴<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.18
	 */
	public Parameters saveDeleteInfo (Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet		dsDelete 	= inParam.getDataSet("dsDelete");
		//저장
		for(int row = 0; row < dsDelete.getRowCount(); row++) {
			//
			String join_type = dsDelete.getString(row, "JOIN_TYPE");
			String outScdB	 = dsDelete.getString(row, "OUT_SCD_B");
			//회원탈퇴: KFR.TADM_KFR_USER_OUT_HIS 테이블 OUT_SCD(탈퇴상태) C로 update/insert
			//정보센터 회원관리 화면에서 직접 회원탈퇴처리 시킨경우 회원탈퇴 테이블에 OUT_SCD(탈퇴상태) C로 insert 처리하고
			//탈퇴요청관리 화면에서 처리한 경우 회원탈퇴 테이블에 OUT_SCD(탈퇴상태) C로 update
			if("".equals(outScdB)) {
				nexacroService.insertDataSet(dsDelete, row, "userMgmService.insertOutHist");
			} else {
				nexacroService.updateDataSet(dsDelete, row, "userMgmService.updateOutHist");
			}
			//회원정보 KFR.TADM_KFR_USER 테이블 STATUS = '9'로 update
			nexacroService.updateDataSet(dsDelete, row, "userMgmService.updateUserStatus");
			//
			if("T04".equals(join_type) || "T05".equals(join_type)) {
				
				nexacroService.insertDataSet(dsDelete, row, "userMgmService.insertOutBpLsp");
				nexacroService.updateDataSet(dsDelete, row, "userMgmService.updateEqpStatus");
				
				nexacroService.updateDataSet(dsDelete, row, "userMgmService.updateBpLspStatus");
			} else if("T01".equals(join_type) || "T02".equals(join_type)) {
				nexacroService.updateDataSet(dsDelete, row, "userMgmService.updateBpShprStatus");
			}
		}
		//
		
		return outParam;
	}
	
	/**
	 * 상담원 배정<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.19
	 */
	public Parameters saveDivUserData (Parameters inParam) throws Exception {
		// return object
		Parameters outParam 	= inParam.getClass().newInstance();
		//
		DataSet		dsInfo		= inParam.getDataSet("dsInfo");
		DataSet		dsDelete	= inParam.getDataSet("dsDelete");
		//저장
		List<Map<String, Object>>		dsList		= inParam.getDataList("dsList");
		//
		String	workGb			= "";
		String	divConsultId	= "";
		//
		workGb			= dsInfo.getString(0, "WORK_GB");
		divConsultId	= dsInfo.getString(0, "DIV_CONSULT_ID");
		//
		for(int delCnt=0; delCnt<dsDelete.getRowCount(); delCnt++) {
			//
			nexacroService.updateDataSet(dsDelete, delCnt, "userMgmService.deleteWorkDiv");
		}
		//
		for(int upCnt=0; upCnt<dsList.size(); upCnt++) {
			//
			Map<String,Object>	dsListMap = dsList.get(upCnt);
			//
			dsListMap.put("WORK_GB", 		workGb);
			dsListMap.put("DIV_CONSULT_ID", divConsultId);
			//
			nexacroService.insertMap(dsListMap, "userMgmService.insertWorkDiv");
		}
		//
		return outParam;
	}
	
	/**
	 * 준회원 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.20
	 */
	public Parameters deleteTempUser (Parameters inParam) throws Exception {
		// return object
		Parameters outParam 	= inParam.getClass().newInstance();
		//
		DataSet		dsDelete	= inParam.getDataSet("dsDelete");
		//
		for(int delCnt=0; delCnt<dsDelete.getRowCount(); delCnt++) {
			//
			nexacroService.updateDataSet(dsDelete, delCnt, "userMgmService.deleteTempUser");
		}
		//
		return outParam;
	}

	/**
	 * 파일 정보 업데이트<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters updateFileInfo(Parameters inParam) throws Exception {
		Parameters outParam 	= inParam.getClass().newInstance();
		DataSet dsSave			= inParam.getDataSet("dsSave");
		
		for(int i=0; i<dsSave.getRowCount(); i++) {
			nexacroService.updateDataSet(dsSave, i, "userMgmService.updateFileInfo");
		}
		return outParam;
	}
	
	/**
	 * 장비 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	public Parameters deleteLspVhclList(Parameters inParam) throws Exception {
		Parameters outParam 	= inParam.getClass().newInstance();
		DataSet dsDelete		= inParam.getDataSet("dsDelete");	
		
		for(int i=0; i<dsDelete.getRowCount(); i++) {
			nexacroService.updateDataSet(dsDelete, i, "userMgmService.updateEqpMgmDelete");				// 차량삭제
			nexacroService.updateDataSet(dsDelete, i, "userMgmService.updateEqpMgmDeleteFirstjoinYn");	// FIRSTJOIN_YN 바꾸기
			nexacroService.updateDataSet(dsDelete, i, "userMgmService.updateDeleteEqpClaim4EqpDelete");	// 클레임 삭제
			nexacroService.deleteDataSet(dsDelete, i, "userMgmService.deleteTrVehicleRegistInfo");		// 공차등록내용 삭제
			
			//TEMP_SEQ_NO가 null 아니면 TMDM_KFR_CT_EQP_TEMP 테이블도 삭제 처리
			if(!"".equals(dsDelete.getString(i, "TEMP_SEQ_NO"))) {
				nexacroService.updateDataSet(dsDelete, i, "userMgmService.updateEqpTempMgmDelete");	// 차량임시 테이블 정보 삭제
			}
		}
		return outParam;
	}

	/**
	 * 정보센터 차량 정보 승인<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.08
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters saveApprovalTransVehicle(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsSave		= inParam.getDataSet("dsLspVhclInfo");	
		
		for(int i=0; i<dsSave.getRowCount(); i++) {
			Map hm_list = NexacroConvertUtil.makeMap(dsSave, i);
			
			hm_list.put("EQP_NO", dsSave.getString(i, "VHCL_NO")); //차량번호
			hm_list.put("ORG_YN", dsSave.getString(i, "FIRSTJOIN_YN")); //원소속여부
			
			//만약 신규입력이면 중복체크수행 체크
			if(dsSave.getRowType(i) == DataSet.ROW_TYPE_INSERTED ) {
				String checkDup = (String) nexacroService.queryForObject(hm_list, "userMgmService.getCheckDup");
				if(!"OK".equals(checkDup)) {
					throw new NexaUserException(hm_list.get("VHCL_NO") + " 차량은 중복된 정보가 있습니다.");
				} else {
					//원소속 여부
					if(!"Y".equals(dsSave.getString(i, "FIRSTJOIN_YN"))) {
						//continue;
					} else {
						//FIRSTJOIN_YN Flag 체크하기
						int n = (int) nexacroService.queryForObject(hm_list, "userMgmService.checkFirstJoinYn");
						if(n < 1) { //다른데서 원소속으로 사용중인 차량이 없어야 한다.
							//continue;
						} else {
							throw new NexaUserException(hm_list.get("VHCL_NO") + " 차량은 원소속 정보가 잘못되었습니다.");
						}
					}
				}
			}
				
			if("D".equals(dsSave.getString(i, "REQ_STAT"))) {
				nexacroService.updateDataSet(dsSave, i, "userMgmService.updateEqpMgmDelete"); 				// 차량삭제
				nexacroService.updateDataSet(dsSave, i, "userMgmService.updateEqpMgmDeleteFirstjoinYn"); 	// FIRSTJOIN_YN 바꾸기
				nexacroService.updateDataSet(dsSave, i, "userMgmService.updateDeleteEqpClaim4EqpDelete"); 	// 클레임 삭제
				nexacroService.deleteDataSet(dsSave, i, "userMgmService.deleteTrVehicleRegistInfo"); 		// 공차등록내용 삭제
				

				//TEMP 테이블에 TEMP_CON_YN(요청대기상태여부를 승인 상태로 수정)
				nexacroService.deleteDataSet(dsSave, i, "userMgmService.updateEqpTempMgmDelete"); 		
			} else {
				nexacroService.updateDataSet(dsSave, i, "userMgmService.createTransVehicle"); 				

				//TEMP 테이블에 TEMP_CON_YN(요청대기상태여부를 승인 상태로 수정)
				nexacroService.updateDataSet(dsSave, i, "userMgmService.updateCenterEqpTempConYn"); 	
			}
		}
		
		return outParam;
	}

	/**
	 * 임시차량정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.08.08
	 */
	public Parameters updateUserVhclTempInfo(Parameters inParam) throws Exception {
		Parameters outParam 		= inParam.getClass().newInstance();
		Map<String,Object> saveMap 	= inParam.getData("dsSave");
		
		//같은차량으로 이미 등록되어 있는지 체크한다.
		String vhclDup = (String) nexacroService.queryForObject(saveMap, "userMgmService.checkKicVhclDup");
		
		if(!"OK".equals(vhclDup)) {
			throw new NexaUserException("중복차량이 존재합니다.");
		}
		
		//오라클 MERGE문은 ON절에서 참조되는 열은 업데이트 할 수 없기에 별도로 UPDATE문 INSERT 문 구성.
		int vhclCnt = (int) nexacroService.queryForObject(saveMap, "userMgmService.checkVhclCnt"); 
		
		if(vhclCnt > 0) {
			nexacroService.updateMap(saveMap, "userMgmService.updateReqVhclTemp");
		} else {
			
			nexacroService.insertMap(saveMap, "userMgmService.insertReqVhclTemp");
		}
		
		//nexacroService.insertMap(saveMap, "userMgmService.saveUpdateReqVhclTemp");
		
		return outParam;
	}

	/**
	 * 일반고객 MDM 고객 정보 수정 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.12.20
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters saveMdmShprInfo(Parameters inParam) throws Exception {
		Parameters outParam 		= inParam.getClass().newInstance();
		Map<String,Object> saveMap 	= inParam.getData("dsDetail");
		
		if(saveMap.size() > 0) {
			
			Map searchMap = (Map) nexacroService.queryForObject(saveMap, "userMgmService.getMdmShprInfo");
			
			if(searchMap.size() == 0) {
				throw new NexaUserException("MDM 고객정보가 없습니다.");
			} else {
				searchMap.put("SHPR_ID", saveMap.get("SHPR_ID"));
				nexacroService.updateMap(searchMap, "userMgmService.updateMdmShprInfo");
			}
		}
		
		return outParam;
	}

	/**
	 * 포탈권한부여 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.12.20
	 */
	public Parameters createAuthUser(Parameters inParam) throws Exception {
		Parameters outParam 		= inParam.getClass().newInstance();
		Map<String,Object> saveMap 	= inParam.getData("dsDetail");
		
		if(saveMap != null && saveMap.size() > 0) {
			//중복 검사
			int cnt = (int) nexacroService.queryForObject(saveMap, "userMgmService.getShprUserCheck");
			
			if(cnt > 0) {
				throw new NexaUserException("M0394");
			} else {
				nexacroService.insertMap(saveMap, "userMgmService.insertShprUser");
			}
		}
		
		return outParam;
	}

	/**
	 * 출장소 update,insert <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	tyoung
	 * @since	2018.08.08
	 */
	public Parameters insertBusinessUser(Parameters inParam) throws Exception {
		// return object
				Parameters outParam = inParam.getClass().newInstance();
				DataSet dsUserList 	= inParam.getDataSet("dsDetail");
				DataSet dsCheck 	= inParam.getDataSet("dsCheck");
				
				String newYn = dsCheck.getString(0, "NEW_YN");
				
				if("Y".equals(newYn)) {
					//등록 된 고객인지 확인.
					DataSet ds = nexacroService.queryForDataset(dsUserList, 0, "userMgmService.getUserT04Duple");
					
					if(ds.getRowCount() > 0) {
						throw new NexaUserException("이미 등록 된 고객 입니다.");
					}
					
					//신규인 경우 tmdm_kfr_bp_lsp 생성
					nexacroService.insertDataSet(dsUserList, 0, "userMgmService.insertBusinessUser");
				}
				
				nexacroService.insertDataSet(dsUserList, 0, "userMgmService.insertIntertnalUser");
				
				
				
				return outParam;
	}
}
