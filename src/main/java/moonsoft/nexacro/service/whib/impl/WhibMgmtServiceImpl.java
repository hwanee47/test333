package moonsoft.nexacro.service.whib.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.MessageUtil;
import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.whib.WhibMgmtService;

/**
 * The class BaimCodeServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	SCY
 * @version	1.0
 * @since	2020.02.28
 *
 */

@Service("whibMgmtService")
public class WhibMgmtServiceImpl implements WhibMgmtService {

	/**
	 * Logger<br>
	 * <br>
	 * @author	SCY
	 * @since	2020.02.28
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	
	/**
	 * 입고관리  리스트 조회<br>
	 * <br>
	 * * 입고관리 상세정보 리스트를 저장한다.<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SCY
	 * @since	2020.02.28
	 */
	//입고예정 화면조회
	public Parameters getWhibMgmt(Parameters inParam) throws Exception {
		
		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibMgmt");
		
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsList", resultDs);
		}			
		return outParam;
	}

	//temp 신규저장
	@Override
	public Parameters insertTemp(Parameters inParam) throws Exception {
		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsExcelUpload = inParam.getDataSet("dsExcelUpload");
		Map<String,Object> 	searchMap = inParam.getData("dsSearch");

		//엑셀 temp 초기화
		nexacroService.delete("whibMgmtService.resetTemp", searchMap);
		
		for(int i=0; i<dsExcelUpload.getRowCount(); i++) {
			
			String lnNo = (String)nexacroService.select("whibMgmtService.selectNextLnNoTemp", searchMap);
			dsExcelUpload.set(i, "LN_NO", lnNo);
			
			nexacroService.insertDataSet(dsExcelUpload, i, "whibMgmtService.insertTemp");
		}
		
		DataSet dsTempResult = nexacroService.queryForDataset(searchMap, "whibMgmtService.getWhibMgmt");
		
		outParam.setOutDatasetList("dsList", dsTempResult);
		
		return outParam;
	}	
	
	//temp 신규저장
	/*@Override
	public Parameters saveTemp_20200707(Parameters inParam) throws Exception {
		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsTempSave = inParam.getDataSet("ds_TempSave");
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		Map searchMap = inParam.getVariableMap();
		
		//엑셀 temp 초기화
		nexacroService.delete("whibMgmtService.resetTemp", searchMap);
		
		for(int i=0; i<dsTempSave.getRowCount(); i++) {
			dsTempSave.set(i,"WAREH_CD", srcParam.get("WAREH_CD"));
			nexacroService.insertDataSet(dsTempSave, i, "whibMgmtService.saveTemp");
		}
		
		DataSet dsTempResult = nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibMgmt");
		
		outParam.setOutDatasetList("dsList", dsTempResult);
		
		return outParam;
	}*/	
	
	//tempTable 신규수정
	@Override
	public Parameters updateTemp(Parameters inParam) throws Exception {
		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsSave1 = inParam.getDataSet("ds_Save");
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		String rowType = "";
		
		for(int i=0; i<dsSave1.getRowCount(); i++) {
			
			rowType = dsSave1.getObject(i, "ROW_TYPE").toString();

			if(dsSave1.getString(i,"ORD_TYPE").equals("BI01") && "I".equals(rowType)){//엑셀수정
				nexacroService.updateDataSet(dsSave1, i, "whibMgmtService.updateTemp");
			
			}else if(dsSave1.getString(i,"ORD_TYPE").equals("BI02") && "I".equals(rowType)){//수기 저장
				nexacroService.insertDataSet(dsSave1, i, "whibMgmtService.updateTemp");
			}else if(dsSave1.getString(i,"ORD_TYPE").equals("BI02") && "U".equals(rowType)){//수기 수정
				nexacroService.insertDataSet(dsSave1, i, "whibMgmtService.saveTemp");
			}
		}
		
		DataSet dsTempResult = nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibMgmt");
		
		outParam.setOutDatasetList("dsList", dsTempResult);
		
		return outParam;
	}	
	
	//temp에서 입고테이블저장
	@Override
	public Parameters saveWareiDecis(Parameters inParam) throws Exception {
		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsList = inParam.getDataSet("dsList");
		Map<String,Object> 	searchMap = inParam.getData("dsSearch");
		


		//입고예정번호 생성
		String wareiExpctNo = (String)nexacroService.select("whibMgmtService.selectWareiExpctNo", searchMap);
		searchMap.put("WAREI_EXPCT_NO", wareiExpctNo);
		int nRowType = 0;
		
	    for (int i = 0; i < dsList.getRowCount(); i++) {
	    	
	    	// 체크된 행만 처리.
	    	if(!"1".equals(dsList.getObject(i, "CHK").toString())) continue;
	    	
	    	nRowType = dsList.getRowType(i);
	    	
	    	
	    	dsList.set(i, "WAREI_EXPCT_NO", wareiExpctNo);
	    	
	    	// 신규
	    	if(nRowType == DataSet.ROW_TYPE_INSERTED){
	    		
	    		// 입고예정행번 생성
	    		String lnNo = (String)nexacroService.select("whibMgmtService.selectNextLnNo", searchMap);
	    		dsList.set(i, "LN_NO", lnNo);
	    		
	    		nexacroService.insertDataSet(dsList, i, "whibMgmtService.insertTemp");
			}
	    	// 수정
	    	else if(nRowType == DataSet.ROW_TYPE_UPDATED){
	    		nexacroService.updateDataSet(dsList, i, "whibMgmtService.updateTemp");
			}
	    	
	    	//Validatiton Check 이전 Target Flag Update
	    	nexacroService.updateDataSet(dsList, i, "whibMgmtService.updateFlag");
	    	
	    }
		
	    
	    
	    /*
	     * 여기서 부터 Validation 체크
	     * */
	    
	    // 품목코드가 없을 경우
	    nexacroService.updateMap(searchMap, "whibMgmtService.updateCheckWhibOrdItem");
	      
	    // 수량에 값이 없거나 0 이하일 떄,
	    nexacroService.updateMap(searchMap, "whibMgmtService.updateCheckWhibExpctQtys");
	    

	    //========================================체크 끝, 저장 시작========================================

		nexacroService.insert("whibMgmtService.insertWareiInfo",searchMap);
		
		/*DataSet dsTempResult = nexacroService.queryForDataset(searchMap, "whibMgmtService.getWhibMgmt");
		
		if(dsTempResult.getRowCount()>0){
			outParam.setOutDatasetList("dsList", dsTempResult);
		}*/
		
		return outParam;
	}	
	
/*	@Override
	public Parameters saveWareiDecis_20200707(Parameters inParam) throws Exception {
		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsDecis = inParam.getDataSet("ds_Decis");
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		Map searchMap = inParam.getVariableMap();
		searchMap.put("CENT_CD", dsDecis.getObject(0, "CENT_CD"));
		searchMap.put("WAREH_CD", dsDecis.getObject(0, "CENT_CD"));
		searchMap.put("CUST_CD", dsDecis.getObject(0, "CUST_CD"));
		
		
		//입고예정번호 생성
		String wareiExpctNo = (String)nexacroService.select("whibMgmtService.selectWareiExpctNo", searchMap);
		
		for (int i = 0; i < dsDecis.getRowCount(); i++) {
			dsDecis.set(i, "WAREI_EXPCT_NO", wareiExpctNo);
			nexacroService.updateDataSet(dsDecis, i, "whibMgmtService.updateFlag");
		}
		
		
		 * 여기서 부터 Validation 체크
		 * 
		for (int i = 0; i < dsDecis.getRowCount(); i++) {
			searchMap.put("LN_NO", dsDecis.getObject(i, "LN_NO"));
			searchMap.put("EXPCT_QTY", dsDecis.getObject(i, "EXPCT_QTY"));
			// 품목코드가 없을 경우
			nexacroService.updateMap(searchMap, "whibMgmtService.updateCheckWhibOrdItem");
			
			// 수량에 값이 없거나 0 이하일 떄,
			nexacroService.updateMap(searchMap, "whibMgmtService.updateCheckWhibExpctQtys");
		}
		// ~ 가 없을 경우
		
		//========================================체크 끝, 저장 시작========================================
		
		nexacroService.insert("whibMgmtService.insertWareiInfo",searchMap);
		
		DataSet dsTempResult = nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibMgmt");
		
		outParam.setOutDatasetList("dsList", dsTempResult);
		
		return outParam;
	}	
*/	
	//입고신규 삭제
	@Override
	public Parameters deleteTemp(Parameters inParam) throws Exception {

		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsDelete = inParam.getDataSet("ds_Delete");
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		for(int i=0; i<dsDelete.getRowCount(); i++) {
			nexacroService.deleteDataSet(dsDelete, i, "whibMgmtService.deleteTemp");
		}
		
		DataSet dsTempResult = nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibMgmt");
		
		outParam.setOutDatasetList("dsList", dsTempResult);
		
		return outParam;
	}	
	
	//입고 저장 후 temp 삭제
	@Override
	public Parameters saveAndDeleteTemp(Parameters inParam) throws Exception {

		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		Map searchMap = inParam.getVariableMap();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		nexacroService.delete("whibMgmtService.saveAndDeleteTemp", searchMap);
		
		/*DataSet dsTempResult = nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibMgmt");
		
		outParam.setOutDatasetList("dsList", dsTempResult);*/
		
		return outParam;
	}	
	
	//입고확정조회
	public Parameters getWhibDecisMgmt(Parameters inParam) throws Exception {
		
		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		Map<String,Object> 	srcParam2 = inParam.getData("ds2");

		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibDecisMgmt"));
		outParam.setOutDatasetList("dsItemBarcodeList", nexacroService.queryForDataset(srcParam2, "whibMgmtService.getWhibDecisMgmt_itemBarcodeList"));
					
		return outParam;
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	

	//입고확정 삭제
	@Override
	public Parameters deleteWareiInfo(Parameters inParam) throws Exception {

		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsDelete = inParam.getDataSet("ds_Delete");
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		for(int i=0; i<dsDelete.getRowCount(); i++) {
			nexacroService.updateDataSet(dsDelete, i, "whibMgmtService.deleteWareiInfo");
		}
		
		DataSet dsTempResult = nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibMgmt");
		
		outParam.setOutDatasetList("dsList", dsTempResult);
		
		return outParam;
	}	
	
	//입고확정->재고신규
	@Override
	public Parameters saveStcDecis(Parameters inParam) throws Exception {

		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsDecis = inParam.getDataSet("ds_Decis");
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		Map<String,Object> searchMap = inParam.getVariableMap();
		searchMap.put("CENT_CD", dsDecis.getObject(0, "CENT_CD"));
		searchMap.put("CUST_CD", dsDecis.getObject(0, "CUST_CD"));

		int totCnt = 0;		// 총건수
		int successCnt = 0;	// 성공건수
		int searchCnt = 0;	// 조회건수
		String strExprDateStd = "";		// 유통기한관리기준
		String strEfctvYmd = "";		// 유효일자
		String strExprYmd = "";			// 유통기한
		String strProdYmd = "";			// 생산일자
		String strDecisQty = "";		// 확정수량
		
		Date date1 = null;
		Date date2 = null;
		
		HashMap<String, String> itemInfo = null;	// 품목 정보
		
	
		for(int i=0; i<dsDecis.getRowCount(); i++) {
			
			
			// 체크된 행만 처리.
			if(!"1".equals(dsDecis.getObject(i, "CHK").toString())) continue;
			totCnt++;
			
			Boolean bErrFlag = false;
			String strErrMsg = "";
			
			
			
			strExprDateStd = dsDecis.getString(i, "EXPR_DATE_STD");
			strEfctvYmd = dsDecis.getString(i, "EFCTV_YMD");
			strExprYmd = dsDecis.getString(i, "EXPR_YMD");
			strProdYmd = dsDecis.getString(i, "PROD_YMD");
			strDecisQty = dsDecis.getString(i, "DECIS_QTY");
			
			date1 = StringUtil.stringToDateParamFormat(strEfctvYmd, "yyyyMMdd");
			
			/*
			 * # 유효일자 체크
			 * 1) 관리기준이 미경우(01)인 경우 체크안함.
			 * 2) 관리기준이 생산일자(02)인 경우 유효일자 > 생산일자이면 에러처리.
			 * 3) 관리기준이 유통기한(03)인 경우 유효일자 > 유통기한이면 에러처리.
			 */
			
			//2) 관리기준이 생산일자인경우
			if("02".equals(strExprDateStd)){
				date2 = StringUtil.stringToDateParamFormat(strProdYmd, "yyyyMMdd");
				
				// 날짜값이 없는경우
				if(date2 == null){
					bErrFlag = true;
					strErrMsg = MessageUtil.getString("msg.custom.whib.0001", "생산일자에 값이 존재하지 않습니다.");
				}
			}
			//3) 관리기준이 유통기한인경우
			else if("03".equals(strExprDateStd)){
				date2 = StringUtil.stringToDateParamFormat(strExprYmd, "yyyyMMdd");
				
				// 날짜값이 없는경우
				if(date2 == null){
					bErrFlag = true;
					strErrMsg = MessageUtil.getString("msg.custom.whib.0002", "유통기한에 값이 존재하지 않습니다.");
				}
			}
			
			// 유효기간이 더 큰경우 에러처리
			if(!"01".equals(strExprDateStd) && date2 != null && date1.compareTo(date2) > 0){
				bErrFlag = true;
				strErrMsg = MessageUtil.getString("msg.custom.whib.0003", "유효기간을 확인해주세요.");
			}
			
			// 확정수량이 0 인경우 에러처리
			if(StringUtil.isNull(strDecisQty)){
				bErrFlag = true;
				strErrMsg = MessageUtil.getString("msg.custom.whib.0004", "확정수량을 확인해주세요.");
			}
			
			
			searchMap.put("ZN_CD", dsDecis.getObject(i, "ZN_CD"));
			searchMap.put("LOC_CD", dsDecis.getObject(i, "LOC_CD"));
			searchMap.put("RACK_CD", dsDecis.getObject(i, "RACK_CD"));
			
			// 존 정보 체크
			searchCnt = (int) nexacroService.select("whibMgmtService.checkZnInfo", searchMap);
			if(searchCnt == 0){
				bErrFlag = true;
				strErrMsg = MessageUtil.getString("msg.custom.whib.0005", "해당 창고에 입력한 존 정보가 존재하지 않습니다.");
			}
			
			// 로케이션 정보 체크
			if(searchCnt > 0){
				searchCnt = (int) nexacroService.select("whibMgmtService.checkLocInfo", searchMap);
				if(searchCnt == 0){
					bErrFlag = true;
					strErrMsg = MessageUtil.getString("msg.custom.whib.0006", "해당 존에 입력한 로케이션 정보가 존재하지 않습니다.");
				}
			}
			
			// 랙 정보 체크
			if(searchCnt > 0){
				searchCnt = (int) nexacroService.select("whibMgmtService.checkRackInfo", searchMap);
				if(searchCnt == 0){
					bErrFlag = true;
					strErrMsg = MessageUtil.getString("msg.custom.whib.0007", "해당 로케이션에 입력한 랙 정보가 존재하지 않습니다.");
				}
			}
			
			if(bErrFlag){
				dsDecis.set(i, "RSN_CONT", strErrMsg);
				nexacroService.updateDataSet(dsDecis, i, "whibMgmtService.updateWhibErr");
				continue;
				
			}
			
			
			
			
			
			
			//재고번호 생성
			String stcDvLot = (String)nexacroService.select("whibMgmtService.selectStcDvLot", searchMap);
			String transType = dsDecis.getString(i, "TRANSACTION_TYPE");
			String lotDvVal1 = dsDecis.getString(i, "LOT_DV_VAL_1");
			String strGdsCd = dsDecis.getString(i, "GDS_CD");
			
			searchMap.put("GDS_CD", strGdsCd);
			
			// 품목 정보 조회
			itemInfo = (HashMap<String, String>) nexacroService.queryForObject(searchMap, "baimCommonService.getItemInfo");
			
			
			
			
			dsDecis.set(i, "STC_DV_LOT", stcDvLot);
			
			nexacroService.updateDataSet(dsDecis, i, "whibMgmtService.saveStcDecis");
			
			//일반입고일 경우 OR 이송입고 이동가용일 경우
			if("T1".equals(transType) || ("T12".equals(transType) && "T9".equals(lotDvVal1))){
					nexacroService.insertDataSet(dsDecis, i, "whibMgmtService.insertStcDecisT1_T9");
			}
			//반품입고일 경우 OR 이송입고 이동보류일 경우
			if("T5".equals(transType) || ("T12".equals(transType) && "T10".equals(lotDvVal1))){
					nexacroService.insertDataSet(dsDecis, i, "whibMgmtService.insertStcDecisT5_T10");
			}
			
			//이송입고 이동불용일 경우
			if("T12".equals(transType) && "T11".equals(lotDvVal1)){
					nexacroService.insertDataSet(dsDecis, i, "whibMgmtService.insertStcDecisT11");
			}			
			
			nexacroService.insertDataSet(dsDecis, i, "whibMgmtService.insertWhibHistory");
			
			
			successCnt++;
		}
		
		
		
		String strResultMsg = "접수결과 :: 성공("+successCnt+")건, 실패("+(totCnt-successCnt)+")건"; 
		
		Map<String, Object> resultMap = new HashMap<String, Object>(); 
		resultMap.put("RESULT_CD", "GWDS_OK");
		resultMap.put("RESULT_MSG", strResultMsg);
		
		DataSet dsResult = NexacroConvertUtil.makeDsFromMap(resultMap);
		
		DataSet dsTempResult = nexacroService.queryForDataset(srcParam, "whibMgmtService.getWhibMgmt");
		
		
		// 화면으로 결과 리턴.
		outParam.setOutDatasetList("dsResult", dsResult);
		outParam.setOutDatasetList("dsList", dsTempResult);
				
		return outParam;
	}

}
