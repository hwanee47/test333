package moonsoft.nexacro.service.dlvy.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.dlvy.DlvyRsrvService;

/**
 * The class DlvyRsrvServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.06.11
 *
 */

@Service("dlvyRsrvService")
public class DlvyRsrvServiceImpl implements DlvyRsrvService {

	/**
	 * Logger<br>
	 * <br>
	 * @author	Kim Jin Hwan
	 * @since	2020.06.11
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	
	
	/**
	 * 기업고객 건별접수 원운송장번호로 정보조회 <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.12
	 */
	@Override
	public Parameters getOrinvcInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		
		HashMap<String, String> paramMap = new HashMap<String, String>();
		paramMap.put("CUST_ID", String.valueOf(searchMap.get("CUST_ID")));
		paramMap.put("ORINVC_NO", String.valueOf(searchMap.get("ORINVC_NO")));
		
		// 해당 원 운송장번호로 이미 예약접수가 되어있는지 체크.
		HashMap<String, Object> arrErr = checkReturnRsrv(paramMap);
		
		
		if( "Y".equals((arrErr.get("RCPT_ERR_YN"))) ){
			throw new NexaUserException(String.valueOf(arrErr.get("RCPT_ERR_MSG")));
		}
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "dlvyRsrvService.selectOrinvcInfo");
		
		outParam.setOutDatasetList("dsInfo", resultDs);

		return outParam;
	}
	
	
	/**
	 * 기업고객 건별접수 리스트 조회<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.11
	 */
	@Override
	public Parameters getDlvyRsrvList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map searchMap = inParam.getData("dsSearch");
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "dlvyRsrvService.selectDlvyRsrvList");
		
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsList", resultDs);
		}
		
		return outParam;
	}
	
	
	/**
	 * 기업고객 파일접수 오류리스트 조회<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.17
	 */
	@Override
	public Parameters getDlvyRsrvErrList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map searchMap = inParam.getData("dsSearch");
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "dlvyRsrvService.selectDlvyRsrvErrList");
		
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsList", resultDs);
		}
		
		return outParam;
	}
	
	
	/**
	 * 기업고객 파일접수 리스트 조회<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.16
	 */
	@Override
	public Parameters getFileRsrvList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map searchMap = inParam.getData("dsSearch");
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "dlvyRsrvService.selectFileRsrvList");
		
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsList", resultDs);
		}
		
		return outParam;
	}

	
	
	/**
	 * 기업고객 건별접수<br>
	 * <br>
	 * * 배송할 내용을 1건씩 예약접수 한다 .<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.11
	 */
	@Override
	public Parameters saveDlvyRsrv(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		DataSet dsSaveInfo    = inParam.getDataSet("dsSaveInfo");
		
		int nRowCnt = dsSaveInfo.getRowCount();
		
		
		
		//dsSaveInfo.set(arg0, arg1, arg2);
		for(int i=0; i<nRowCnt; i++) {
			
			
			int nRowType = dsSaveInfo.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 운송장번호 채번
				String waybillNo = (String) nexacroService.queryForObject(null, "commonService.selectWaybillNo");
				
				dsSaveInfo.set(i, "WAYBILL_NO", waybillNo);
				dsSaveInfo.set(i, "MPCK_KEY", waybillNo);
				dsSaveInfo.set(i, "MPCK_SEQ", 1);
				
				// 요청구분코드 (택배건별접수 "02")
				dsSaveInfo.set(i, "REQ_DV_CD", "01");
				
				nexacroService.insertDataSet(dsSaveInfo, i, "dlvyRsrvService.insertDlvyRsrv");
			}
			else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				nexacroService.updateDataSet(dsSaveInfo, i, "dlvyRsrvService.updateDlvyRsrv");
			}
			
			
		}
		
		return outParam;
	}
	
	
	/**
	 * 기업고객 파일접수<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.16
	 */
	@Override
	public Parameters saveDlvyRsrvList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsExcelUpload    = inParam.getDataSet("dsExcelUpload");
		
		int nRowCnt = dsExcelUpload.getRowCount();
		
		HashMap<String, Object> arrErr = new HashMap<String, Object>();
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strCustId	= dsExcelUpload.getString(i, "CUST_ID");			// 고객ID
			String strRcptDv	= dsExcelUpload.getString(i, "RCPT_DV");			// 접수구분
			String strWaybillNo = dsExcelUpload.getString(i, "WAYBILL_NO");			// 운송장번호
			String strOrinvcNo 	= dsExcelUpload.getString(i, "ORINVC_NO");			// 원운송장번호
			String strSendrZipNo = dsExcelUpload.getString(i, "SENDR_ZIP_NO");		// 송화인우편번호
			String strRcvrZipNo = dsExcelUpload.getString(i, "RCVR_ZIP_NO");		// 수화인우편번호
			String strOrdrrZipNo = dsExcelUpload.getString(i, "ORDRR_ZIP_NO");		// 주문자우편번호
			
			// 엑셀에 운송장번호가 없는경우 채번된 번호로 저장.
			if(  strWaybillNo == null || strWaybillNo.length()==0 ){
				strWaybillNo = (String) nexacroService.queryForObject(null, "commonService.selectWaybillNo");
				dsExcelUpload.set(i, "WAYBILL_NO", strWaybillNo);
			}
			
			// 운송장번호 채번
			dsExcelUpload.set(i, "MPCK_KEY", strWaybillNo);
			dsExcelUpload.set(i, "MPCK_SEQ", 1);
			
			/**에러체크*****************************************************************************************************/
			/* # 반품인경우 처리사항
			 * 1) 원운송장번호가 운송장번호에 존재하는지 확인.
			 * 2) 원운송장번호로 이미 반품 예약접수 되었는지 확인.
			 * */ 
			if("02".equals(strRcptDv)){
				
				paramMap.put("CUST_ID", strCustId);
				paramMap.put("WAYBILL_NO", strOrinvcNo);
				paramMap.put("ORINVC_NO", strOrinvcNo);
				
				arrErr = checkReturnRsrv(paramMap);
				
				dsExcelUpload.set(i, "RCPT_ERR_YN", arrErr.get("RCPT_ERR_YN"));
				dsExcelUpload.set(i, "RCPT_ERR_MSG", arrErr.get("RCPT_ERR_MSG"));
			}
			
			
			
			
			
			// 주문자 우편번호 체크
			Object test = dsExcelUpload.getColumn("RCVR_ZIP_NO");
			if(dsExcelUpload.getColumn("ORDRR_ZIP_NO") != null){
				arrErr = checkZipNo(strOrdrrZipNo);
				
				if("Y".equals((arrErr.get("RCPT_ERR_YN")))){
					arrErr.put("RCPT_ERR_MSG", "주문자 우편번호를 확인해주세요.");
					dsExcelUpload.set(i, "RCPT_ERR_YN", arrErr.get("RCPT_ERR_YN"));
					dsExcelUpload.set(i, "RCPT_ERR_MSG", arrErr.get("RCPT_ERR_MSG"));
				}
			}
			
			
			
			// 수화인 우편번호 체크
			if(dsExcelUpload.getColumn("RCVR_ZIP_NO") != null){
				arrErr = checkZipNo(strRcvrZipNo);
				
				if("Y".equals((arrErr.get("RCPT_ERR_YN")))){
					arrErr.put("RCPT_ERR_MSG", "수화인 우편번호를 확인해주세요.");
					dsExcelUpload.set(i, "RCPT_ERR_YN", arrErr.get("RCPT_ERR_YN"));
					dsExcelUpload.set(i, "RCPT_ERR_MSG", arrErr.get("RCPT_ERR_MSG"));
				}
			}
			
			// 송화인 우편번호 체크
			if(dsExcelUpload.getColumn("SENDR_ZIP_NO") != null){
				arrErr = checkZipNo(strSendrZipNo);
				
				if("Y".equals((arrErr.get("RCPT_ERR_YN")))){
					arrErr.put("RCPT_ERR_MSG", "송화인 우편번호를 확인해주세요.");
					dsExcelUpload.set(i, "RCPT_ERR_YN", arrErr.get("RCPT_ERR_YN"));
					dsExcelUpload.set(i, "RCPT_ERR_MSG", arrErr.get("RCPT_ERR_MSG"));
				}
			}
			
			
			
			/***********************************************************************************************************/
			
			// 요청구분코드 (택배파일접수 "02")
			dsExcelUpload.set(i, "REQ_DV_CD", "02");
			
			
			
			nexacroService.insertDataSet(dsExcelUpload, i, "dlvyRsrvService.insertDlvyRsrv");
			
		}
		
		return outParam;
	}


	/**
	 * 기업고객 파일접수 오류리스트 저장<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.17
	 */
	@Override
	public Parameters saveDlvyRsrvErrList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsList    = inParam.getDataSet("dsList");
		
		int nRowCnt = dsList.getRowCount();
		String strChk	 	 = "";		// 체크여부
		String strCustId	 = "";		// 고객ID
		String strRcptDv	 = "";		// 예약구분(접수구분)
		String strOrinvcNo	 = "";		// 원운송장번호
		String strSendrZipNo = "";		// 송화인우편번호
		String strRcvrZipNo  = "";		// 수화인우편번호
		String strOrdrrZipNo = "";
		
		HashMap<String, Object> arrErr = new HashMap<String, Object>();
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			strChk 		= dsList.getString(i, "CHK");
			strCustId 	= dsList.getString(i, "CUST_ID");
			strRcptDv 	= dsList.getString(i, "RCPT_DV");
			strOrinvcNo = dsList.getString(i, "ORINVC_NO");
			strSendrZipNo = dsList.getString(i, "SENDR_ZIP_NO");		// 송화인우편번호
			strRcvrZipNo = dsList.getString(i, "RCVR_ZIP_NO");		// 수화인우편번호
			strOrdrrZipNo = dsList.getString(i, "ORDRR_ZIP_NO");		// 주문자우편번호
			
			
			// 체크되지 않은 행은 저장하지않음.
			if("1".equals(strChk) == false) continue;
			
			
			
			/* # 반품인경우 처리사항
			 * 1) 원운송장번호가 운송장번호에 존재하는지 확인.
			 * 2) 원운송장번호로 이미 반품 예약접수 되었는지 확인.
			 * */ 
			if("02".equals(strRcptDv)){
				
				paramMap.put("CUST_ID", strCustId);
				paramMap.put("WAYBILL_NO", strOrinvcNo);
				paramMap.put("ORINVC_NO", strOrinvcNo);
				
				arrErr = checkReturnRsrv(paramMap);
				
			}
			
			dsList.set(i, "RCPT_ERR_YN", "");
			dsList.set(i, "RCPT_ERR_MSG", "");
			
			
			// 주문자 우편번호 체크
			if(dsList.getColumn("ORDRR_ZIP_NO") != null){
				arrErr = checkZipNo(strOrdrrZipNo);
				
				if("Y".equals((arrErr.get("RCPT_ERR_YN")))){
					arrErr.put("RCPT_ERR_MSG", "주문자 우편번호를 확인해주세요.");
					dsList.set(i, "RCPT_ERR_YN", arrErr.get("RCPT_ERR_YN"));
					dsList.set(i, "RCPT_ERR_MSG", arrErr.get("RCPT_ERR_MSG"));
				}
			}
			
			
			
			// 수화인 우편번호 체크
			if(dsList.getColumn("RCVR_ZIP_NO") != null){
				arrErr = checkZipNo(strRcvrZipNo);
				
				if("Y".equals((arrErr.get("RCPT_ERR_YN")))){
					arrErr.put("RCPT_ERR_MSG", "수화인 우편번호를 확인해주세요.");
					dsList.set(i, "RCPT_ERR_YN", arrErr.get("RCPT_ERR_YN"));
					dsList.set(i, "RCPT_ERR_MSG", arrErr.get("RCPT_ERR_MSG"));
				}
			}
			
			// 송화인 우편번호 체크
			if(dsList.getColumn("SENDR_ZIP_NO") != null){
				arrErr = checkZipNo(strSendrZipNo);
				
				if("Y".equals((arrErr.get("RCPT_ERR_YN")))){
					arrErr.put("RCPT_ERR_MSG", "송화인 우편번호를 확인해주세요.");
					dsList.set(i, "RCPT_ERR_YN", arrErr.get("RCPT_ERR_YN"));
					dsList.set(i, "RCPT_ERR_MSG", arrErr.get("RCPT_ERR_MSG"));
				}
			}
			
			
			nexacroService.updateDataSet(dsList, i, "dlvyRsrvService.updateDlvyRsrv");
			
			
		}
		
		return outParam;
	}
	
	
	
	/**
	 * 기업고객 파일접수 고객레이아웃 리스트 조회<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.15
	 */
	@Override
	public Parameters getCustLayoutList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "dlvyRsrvService.getCustLayoutList");
		
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsMaster", resultDs);
		}

		return outParam;
	}
	

	
	/**
	 * 기업고객 파일접수 고객레이아웃  조회<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.15
	 */
	@Override
	public Parameters getCustLayout(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "dlvyRsrvService.getCustLayout");
		
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsDetail2", resultDs);
		}

		return outParam;
	}


	/**
	 * 기업고객 파일접수 고객레이아웃  저장<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.15
	 */
	@Override
	public Parameters saveCustLayout(Parameters inParam) throws Exception {
		
		Parameters outParam = inParam.getClass().newInstance();

		DataSet dsSave    = inParam.getDataSet("dsSave");
		
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		paramMap.put("CUST_ID"			, dsSave.getString(0, "CUST_ID"));
		paramMap.put("WAREIO_DV"		, dsSave.getString(0, "WAREIO_DV"));
		paramMap.put("XLS_FRM_NM"		, dsSave.getString(0, "XLS_FRM_NM"));
		paramMap.put("XLS_FRM_NM_NEW"	, dsSave.getString(0, "XLS_FRM_NM_NEW"));		// 양식명 변경시 사용.
		paramMap.put("gv_userId"		, dsSave.getString(0, "gv_userId"));
		
		if( "insert".equals(dsSave.getString(0, "MASTER_ROW_TYPE")) ){
		
			int nDupCnt = (Integer) nexacroService.queryForObject(paramMap, "dlvyRsrvService.checkDupCustLayout");
			
			if(nDupCnt >0){
				String errMsg = "해당 양식명이 이미 존재합니다.";
				errMsg += "\n☞ [고객ID] : "+dsSave.getString(0, "CUST_ID");
				errMsg += "\n☞ [양식명] : "+dsSave.getString(0, "XLS_FRM_NM");
				
				throw new NexaUserException(errMsg);
			}
			
		}
		
		nexacroService.updateDataSet(dsSave, 0, "dlvyRsrvService.mergeCustLayout");
		
		return outParam;
	}
	
	/**
	 * 기업고객 파일접수 고객레이아웃  삭제<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.15
	 */
	@Override
	public Parameters deleteCustLayout(Parameters inParam) throws Exception {
		
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsDelete    = inParam.getDataSet("dsDelete");
		
		nexacroService.deleteDataSet(dsDelete, 0, "dlvyRsrvService.deleteCustLayout");
		
		return outParam;
	}
	
	
	
	
	/**
	 * 반품인경우 원운송장 체크사항<br>
	 * <br>
	 * 1) 원운송장번호가 운송장번호에 존재하는지 확인.
	 * 2) 원운송장번호로 이미 반품 예약접수 되었는지 확인.
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.16
	 */
	public HashMap<String, Object> checkReturnRsrv(HashMap<String, String> paramMap)
	{
		HashMap<String, Object> errMap = new HashMap<String, Object>();
		String strRcptErrYn = "";
		String strRcptErrMsg = "";
		
		// 1) 원운송장번호가 운송장번호에 존재하는지 확인.
		int cnt = (int)nexacroService.queryForObject(paramMap, "dlvyRsrvService.checkIsOrinvcNo");
		
		
		if(cnt == 0){
			
			strRcptErrYn = "Y";
			strRcptErrMsg = "해당 원운송장번호로  일반예약 접수된 정보가 없습니다.";
			
		}else{
			
			// 2) 원운송장번호로 이미 반품 예약접수 되었는지 확인.
			cnt = (int)nexacroService.queryForObject(paramMap, "dlvyRsrvService.checkDupOrinvcNo");
			
			if( cnt > 0){
				strRcptErrYn = "Y";
				strRcptErrMsg = "이미 반품예약 접수된 운송장번호입니다.";
			}
		}
		
		errMap.put("RCPT_ERR_YN", strRcptErrYn);
		errMap.put("RCPT_ERR_MSG", strRcptErrMsg);
		
		
		return errMap;
	}
	
	
	
	/**
	 * 우편번호 마스터 테이블에 우편번호 체크.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.06.16
	 */
	public HashMap<String, Object> checkZipNo(String strZipNo)
	{
		HashMap<String, Object> errMap = new HashMap<String, Object>();
		HashMap<String, String> paramMap = new HashMap<String, String>();
		String strRcptErrYn = "";
		String strRcptErrMsg = "";
		int cnt = 0;
		
		
		if( strZipNo == null ){
			strRcptErrYn = "Y";
			strRcptErrMsg = "우편번호를 확인해주세요.";
		}
		else if ( strZipNo.length()!=5 && strZipNo.length()!=6 ){
			strRcptErrYn = "Y";
			strRcptErrMsg = "우편번호를 확인해주세요.";
		}
		else{
			
			paramMap.put("ZIP_NO", strZipNo);
			
			// 도로명
			if(strZipNo.length()==5){
				cnt = (int)nexacroService.queryForObject(paramMap, "baimCommonService.checkIsRoadZipNo");
			}
			// 지번
			else{
				cnt = (int)nexacroService.queryForObject(paramMap, "baimCommonService.checkIsJiBunZipNo");
			}
			
			if(cnt == 0){
				strRcptErrYn = "Y";
				strRcptErrMsg = "우편번호를 확인해주세요.";
			}
			
		}
		
		
		errMap.put("RCPT_ERR_YN", strRcptErrYn);
		errMap.put("RCPT_ERR_MSG", strRcptErrMsg);
		
		
		return errMap;
	}
}
