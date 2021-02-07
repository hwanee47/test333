package moonsoft.nexacro.service.rcpt.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.rcpt.rcptMgmtService;

@Service("rcptMgmtService")
public class rcptMgmtServiceImpl implements rcptMgmtService {

	@Resource(name = "nexacroService")
	private NexacroService nexacroService;

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	//주문접수 조회
	@Override
	public Parameters selectRcptOrdTemp(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "rcptMgmtService.selectRcptOrdTemp");
		
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsList", resultDs);
		}

		return outParam;
	}

	//주문접수 엑셀 저장
	@Override
	public Parameters insertRcptOrdTemp(Parameters inParam) throws Exception {
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsTemp = inParam.getDataSet("dsTemp");
		Map searchMap = inParam.getData("dsSearch");
		
		nexacroService.delete("rcptMgmtService.deleteRcptOrd", searchMap);
		
		for(int i=0; i<dsTemp.getRowCount(); i++) {
			nexacroService.insertDataSet(dsTemp, i, "rcptMgmtService.insertRcptOrdTemp");
		}
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "rcptMgmtService.selectRcptOrdTemp");
		outParam.setOutDatasetList("dsList", resultDs);
		
		return outParam;
	}
	
	//주문 접수 Temp 수정 저장
	@Override
	public Parameters updateRcptOrdTempModi(Parameters inParam) throws Exception {
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsList = inParam.getDataSet("dsList");
		Map searchMap = inParam.getData("dsSearch");
		String rowType = "";
		
		for (int i = 0; i < dsList.getRowCount(); i++) {
			rowType = dsList.getObject(i, "ROW_TYPE").toString();
			
			if("I".equals(rowType)){
				
				
				nexacroService.insertDataSet(dsList, i, "rcptMgmtService.insertRcptOrdTempModi");
			}else if("U".equals(rowType)){
				nexacroService.updateDataSet(dsList, i, "rcptMgmtService.updateRcptOrdTempModi");
			}
		}
		
		/**주문접수 엑셀데이터  유효성 처리 ****************************************************************/
		// 품목코드가 없을 경우
		nexacroService.updateMap(searchMap, "rcptMgmtService.updateCheckRcptOrdItem");
		
		// 수량에 값이 없거나 0 미만일 떄,
		nexacroService.updateMap(searchMap, "rcptMgmtService.updateCheckRcptOrdQty");
		
		/*************************************************************************************/
		
		
		//주문번호 생성
		nexacroService.updateMap(searchMap, "rcptMgmtService.updateRcptOrdTempSlipNo");
		
		//Insert Order Data
		nexacroService.insertMap(searchMap, "rcptMgmtService.insertRcptOrdDecisDetail");
		//Insert Order 
		nexacroService.insertMap(searchMap, "rcptMgmtService.insertRcptOrdDecisHeader");
		
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "rcptMgmtService.selectRcptOrdTemp");
		outParam.setOutDatasetList("dsList", resultDs);
		
		return outParam;
	}
	
	//주문 접수 Temp 삭제
	@Override
	public Parameters deleteRcptOrdTemp(Parameters inParam) throws Exception {
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsList = inParam.getDataSet("dsList");
		Map searchMap = inParam.getData("dsSearch");
		
		for (int i = 0; i < dsList.getRowCount(); i++) {
			nexacroService.deleteDataSet(dsList, i, "rcptMgmtService.deleteRcptOrdTemp");
		}
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "rcptMgmtService.selectRcptOrdTemp");
		outParam.setOutDatasetList("dsList", resultDs);
		
		return outParam;
	}
	
	//접수( Temp -> Real )
	@Override
	public Parameters insertRcptOrdDecis(Parameters inParam) throws Exception {
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsList = inParam.getDataSet("dsList");
		Map searchMap = inParam.getData("dsSearch");
		
		String rowType = "";
		
		int totCnt = 0;		// 총건수
		int successCnt = 0;	// 성공건수
		
		for (int i = 0; i < dsList.getRowCount(); i++) {
			
			// 체크된 행만 처리.
			if(!"1".equals(dsList.getObject(i, "CHK").toString())) continue;
			
			
			// 신규 또는 수정사항이 있는경우 TEMP테이블에 처리
			rowType = dsList.getObject(i, "ROW_TYPE").toString();
			
			if("I".equals(rowType)){
				
				HashMap<String, String> param = new HashMap<String, String>();
				param.put("gv_userId", dsList.getObject(i, "gv_userId").toString());
				String lnNo = (String) nexacroService.queryForObject(param, "rcptMgmtService.getLnNoNextValOrdTemp");
				
				dsList.set(i, "LN_NO", String.valueOf(lnNo));
				//dsList.setSavedData(i, "LN_NO", String.valueOf(lnNo));
				
				nexacroService.insertDataSet(dsList, i, "rcptMgmtService.insertRcptOrdTempModi");
			}else if("U".equals(rowType)){
				nexacroService.updateDataSet(dsList, i, "rcptMgmtService.updateRcptOrdTempModi");
			}
			
			//주문접수 Validatiton Check 이전 Target Flag Update
			nexacroService.updateDataSet(dsList, i, "rcptMgmtService.updateRcptOrdDecis");
			
			totCnt++;
		}
		
		/*
		 * 
		 * 
		 * 여기서 부터 Validation 체크
		 * 
		 * 
		 * */
		
		// 품목코드가 없을 경우
		nexacroService.updateMap(searchMap, "rcptMgmtService.updateCheckRcptOrdItem");
		
		// 수량에 값이 없거나 0 미만일 떄,
		nexacroService.updateMap(searchMap, "rcptMgmtService.updateCheckRcptOrdQty");
		
		// Ex ) ~ 가 없을 경우
		//nexacroService.update("rcptMgmtService.updateRcptOrd~");
		
		//========================================체크 끝, 저장 시작========================================
		
		//주문번호 생성
		nexacroService.updateMap(searchMap, "rcptMgmtService.updateRcptOrdTempSlipNo");
		
		//Insert Order Data
		nexacroService.insertMap(searchMap, "rcptMgmtService.insertRcptOrdDecisDetail");
		//Insert Order 
		nexacroService.insertMap(searchMap, "rcptMgmtService.insertRcptOrdDecisHeader");

		//Insert Order Delete
		successCnt = nexacroService.deleteMap(searchMap, "rcptMgmtService.deleteRcptTemp");
		
		
		String strResultMsg = "접수결과 :: 성공("+successCnt+")건, 실패("+(totCnt-successCnt)+")건"; 
		
		Map<String, Object> resultMap = new HashMap<String, Object>(); 
		resultMap.put("RESULT_CD", "GWDS_OK");
		resultMap.put("RESULT_MSG", strResultMsg);
		
		DataSet dsResult = NexacroConvertUtil.makeDsFromMap(resultMap);
		
		outParam.setOutDatasetList("dsResult", dsResult);
		
		return outParam;
	}
	
	//주문확정 조회
	@Override
	public Parameters selectRcptOrdList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "rcptMgmtService.selectRcptOrdList");
		
		outParam.setOutDatasetList("dsList", resultDs);

		return outParam;
	}

	//주문확정 상세 조회
	@Override
	public Parameters selectRcptOrdDetailList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "rcptMgmtService.selectRcptOrdDetailList");
		
		outParam.setOutDatasetList("dsDetail", resultDs);

		return outParam;
	}

	//주문확정 
	@Override
	public Parameters insertRcptOrdList(Parameters inParam) throws Exception {
		Parameters outParam  = inParam.getClass().newInstance();
		
		DataSet dsList = inParam.getDataSet("dsList");
		Map searchMap = inParam.getData("dsSearch");
		
		//분할확정 여부
		DataSet detailList;
		String qtyDivYn = (String)searchMap.get("QTY_DIV_YN");
		int ordQty = 0;
		
		//임의로 생성
		int mpckSeq = 0;
		
		int totCnt = 0;		// 총건수
		int successCnt = 0;	// 성공건수
		
		//분할 확정일 경우
		if("Y".equals(qtyDivYn)){
			
			
			for (int i = 0; i < dsList.getRowCount(); i++) {
				
				// 주문상태가 접수(10)인 건만 처리.
				String strWorkDvCd = dsList.getString(i, "WORK_DV_CD");
				
				if(!"10".equals(strWorkDvCd)) continue;
				
				
				
				//상세 품목 갯수만큼
				detailList = nexacroService.queryForDataset(dsList, i, "rcptMgmtService.selectRcptOrdListItemQty");
				mpckSeq = 0;
				
				for (int j = 0; j < detailList.getRowCount(); j++) {
					detailList.set(j, "EMP_ID", searchMap.get("gv_userId") );
					ordQty = detailList.getInt(j, "ORD_QTY");
					
					//품목수량만큼 .. MySql 어려워서 노가다 .. 차후 개선 포인트
					for (int k = 0; k < ordQty; k++) {
						mpckSeq++;
						detailList.set(j, "MPCK_SEQ", mpckSeq);
						
						nexacroService.insertDataSet(detailList, j, "rcptMgmtService.insertRcptOrdListDivision");
					}
				}
				
				dsList.set(i, "WORK_DV_CD", "20");
				successCnt = nexacroService.updateDataSet(dsList, i, "rcptMgmtService.updateRcptOrdList");
				
				totCnt++;
			}
		}
		else{
			//일반 확정
			for (int i = 0; i < dsList.getRowCount(); i++) {
				
				// 주문상태가 접수(10)인 건만 처리.
				String strWorkDvCd = dsList.getString(i, "WORK_DV_CD");
				
				if(!"10".equals(strWorkDvCd)) continue;
				
				//출고주문관리 insert
				nexacroService.insertDataSet(dsList, i, "rcptMgmtService.insertRcptOrdList");
				
				//주문상태 Update
				dsList.set(i, "WORK_DV_CD", "20");
				successCnt = nexacroService.updateDataSet(dsList, i, "rcptMgmtService.updateRcptOrdList");
				
				totCnt++;
			}
		}
		
		DataSet resultDs = nexacroService.queryForDataset(searchMap, "rcptMgmtService.selectRcptOrdList");
		outParam.setOutDatasetList("dsList", resultDs);
		
		
		String strResultMsg = "확정결과 :: 성공("+successCnt+")건, 실패("+(totCnt-successCnt)+")건"; 
		
		Map<String, Object> resultMap = new HashMap<String, Object>(); 
		resultMap.put("RESULT_CD", "GWDS_OK");
		resultMap.put("RESULT_MSG", strResultMsg);
		
		DataSet dsResult = NexacroConvertUtil.makeDsFromMap(resultMap);
		
		outParam.setOutDatasetList("dsResult", dsResult);
		
		return outParam;
	}

	/**
	 * 사용자 주문접수 엑셀 양식 조회
	 */
	@Override
	public Parameters getRcptOrdExcelForm(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("dsSearch");
		DataSet resultDs = new DataSet();
		//outParam.setOutDatasetList("dsList", resultDs);
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "rcptMgmtService.getRcptOrdExcelForm"));
		
		return outParam;
	}

	/**
	 * 사용자 주문접수 엑셀 양식 저장
	 */
	@Override
	public Parameters saveRcptOrdExcelForm(Parameters inParam) throws Exception {
		
		Parameters outParam = inParam.getClass().newInstance();
		
		
		DataSet dsSave    = inParam.getDataSet("dsSave");
		DataSet dsSaveMaster    = inParam.getDataSet("dsSaveMaster");
		
		String strSaveMode = dsSaveMaster.getString(0, "SAVE_MODE");
		String strColumnIdList = "";
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		paramMap.put("CUST_ID"			, dsSaveMaster.getString(0, "CUST_ID"));
		paramMap.put("WAREIO_DV"		, dsSaveMaster.getString(0, "WAREIO_DV"));
		paramMap.put("XLS_FRM_NM"		, dsSaveMaster.getString(0, "XLS_FRM_NM"));
		paramMap.put("XLS_FRM_NM_NEW"	, dsSaveMaster.getString(0, "XLS_FRM_NM_NEW"));		// 양식명 변경시 사용.
		paramMap.put("gv_userId"		, dsSaveMaster.getString(0, "gv_userId"));
		
		
		/* ************************************************************
		 * # 유효성 체크 
		 * 1) 신규입력일때, 이미 저장되어있는 양식명인지 체크
		 * ************************************************************/
		if("INSERT".equals(strSaveMode)){
			int nDupCnt = (Integer) nexacroService.queryForObject(paramMap, "rcptMgmtService.checkDupUserExcelForm");
		
			if(nDupCnt >0){
				String errMsg = "해당 양식명이 이미 존재합니다.";
				errMsg += "\n☞ [고객ID] : "+dsSaveMaster.getString(0, "CUST_ID");
				errMsg += "\n☞ [양식명] : "+dsSaveMaster.getString(0, "XLS_FRM_NM");
				
				throw new NexaUserException(errMsg);
			}
		}
		
		
		
		int nRowCnt = dsSave.getRowCount();
		
		for(int i=0; i<nRowCnt; i++) {
			
			strColumnIdList += dsSave.getString(i, "COL_ID")+"|";
			
			// 마지막 컬럼인경우 기호(|) 제거.
			if(i == (nRowCnt-1)){
				
				strColumnIdList = strColumnIdList.substring(0, strColumnIdList.length() - 1);
			}
		}
		
		paramMap.put("XLS_HD_LIST"		, strColumnIdList);
		
		
		nexacroService.updateMap(paramMap, "rcptMgmtService.mergeUserExcelForm");
		
		return outParam;
		
	}
	
	
	/**
	 * 사용자 주문접수 엑셀 양식 삭제
	 */
	@Override
	public Parameters deleteRcptOrdExcelForm(Parameters inParam) throws Exception {
		
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSaveMaster    = inParam.getDataSet("dsSaveMaster");
		
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		paramMap.put("CUST_ID"			, dsSaveMaster.getString(0, "CUST_ID"));
		paramMap.put("WAREIO_DV"		, dsSaveMaster.getString(0, "WAREIO_DV"));
		paramMap.put("XLS_FRM_NM"		, dsSaveMaster.getString(0, "XLS_FRM_NM"));
		paramMap.put("gv_userId"		, dsSaveMaster.getString(0, "gv_userId"));
		
		nexacroService.updateMap(paramMap, "rcptMgmtService.deleteUserExcelForm");
		
		return outParam;
		
	}
}
