package moonsoft.nexacro.service.whob.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.whob.whobMgmtService;

@Service("whobMgmtService")
public class whobMgmtImpl extends EgovAbstractServiceImpl implements whobMgmtService{

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "nexacroService")
	private NexacroService nexacroService;
	
	@Override
	public Parameters selectWhobOrd(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "whobMgmtService.selectRcptOrdList");
		
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}
	
	@Override
	public Parameters selectWhobStck(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String, Object> searchMap = inParam.getData("dsSearch");
		
		DataSet dsResult 	= nexacroService.queryForDataset(searchMap, "whobMgmtService.selectWhobStck");		// 재고정보조회
		DataSet dsOrderInfo = nexacroService.queryForDataset(searchMap, "whobMgmtService.selectWhobOrderInfo");	// 주문정보조회
		DataSet dsRow		= null;
		int gdsQty 			= dsOrderInfo.getInt(0, "GDS_QTY");	// 주문수량
		int dsResultRowCnt	= dsResult.getRowCount();			// Dataset row count
		
		searchMap.put("CENT_CD"		, dsOrderInfo.getString(0, "CENT_CD"));
		searchMap.put("CUST_ID"		, dsOrderInfo.getString(0, "CUST_ID"));
		searchMap.put("RCPT_YMD"	, dsOrderInfo.getString(0, "RCPT_YMD"));
		searchMap.put("CUST_USE_NO"	, dsOrderInfo.getString(0, "CUST_USE_NO"));
		
		// 재고조회 (주문수량에 재고가 충분한지)
		dsRow = nexacroService.queryForDataset(searchMap, "whobMgmtService.selectOrdAllocStc");
		
		// 재고가 부족하면 체크하지 않는다.
		if(dsRow.getRowCount()!=0){
		}else{
		
			// 할당화면에서 처음 재고현황 조회시 자동할당으로 주문수량에 맞게 재고에 체크처리 해준다. 
			for(int i=0; i<dsResultRowCnt; i++){
				
				// 주문수량보다 Lot재고가 더 많을 떄 
				/*if((dsResult.getInt(i, "USBL_STC") - gdsQty) > 0 ) {
					
					dsResult.set(i, "CHK", "1");
					
					break;
				}
				// 주문수량보다 Lot재고가 더 적을 때 ( Lot 분할되어 있을 때 )
				else{
					dsResult.set(i, "CHK", "1");
					
					gdsQty = gdsQty - dsResult.getInt(i, "USBL_STC");
				}*/
				
				
				
				dsResult.set(i, "CHK", "1");
				
				if((dsResult.getInt(i, "USBL_STC") - gdsQty) > 0 ) break;
				
				
				gdsQty = gdsQty - dsResult.getInt(i, "USBL_STC");
				
			}
		}
		
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}
	
	@Override
	public Parameters insertAlloList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsList = inParam.getDataSet("dsList");
		DataSet dsSelectLotList = inParam.getDataSet("dsSelectLotList");
		
		DataSet dsRow = null;
		int gdsQty = 0;

		List<String> lotList = new ArrayList<String>();
		
		int totCnt = 0;		// 총건수
		int successCnt = 0;	// 성공건수
		
		/*	WORK_DV_CD ::  00 : 신규,  10 : 주문접수,  20 : 주문확정,  30 : 할당완료,  40 : 피킹완료,  50 : 출고확정		*/
		
		// Transaction 관리 해야함 (NewTx 이용, ex) 할당타겟 : 31 )
		
		//==============================할당시작==============================
		for (int i = 0; i < dsList.getRowCount(); i++) {
			totCnt++;
			lotList.clear();
			
			// 선택할당 처리.
			for (int k=0; k<dsSelectLotList.getRowCount(); k++){
				
				if(!dsList.getObject(i, "CUST_USE_NO").equals(dsSelectLotList.getObject(k, "CUST_USE_NO"))) continue;
				
				
				lotList.add(dsSelectLotList.getString(k, "STC_DV_LOT"));
			}
			
			
			
			// 선택할당인경우
			if(lotList.size()>0){
			
				
				// param Map
				Map<String,Object> paramMap = new HashMap<String, Object>();
				paramMap.put("CENT_CD"		, dsList.getString(i, "CENT_CD"));
				paramMap.put("CUST_ID"		, dsList.getString(i, "CUST_ID"));
				paramMap.put("RCPT_YMD"		, dsList.getString(i, "RCPT_YMD"));
				paramMap.put("CUST_USE_NO"	, dsList.getString(i, "CUST_USE_NO"));
				paramMap.put("GDS_CD"		, dsList.getString(i, "GDS_CD"));
				paramMap.put("gv_userId"	, dsList.getString(i, "gv_userId"));
				paramMap.put("lotList"		, lotList);
				
				
				
				// 1. 재고조회 (재고가 충분한지)
				dsRow = nexacroService.queryForDataset(paramMap, "whobMgmtService.selectOrdAllocStc_selectAlloc");
				
				
				// 재고가 부족하면 패스
				if(dsList.getObject(i, "CUST_USE_NO").equals(dsRow.getObject(0, "CUST_USE_NO")) ){
					continue;
				}
				
				// 2. 재고가 충분하다면, Lot가 나눠졌는지 확인 및 각각의 품목코드, 수량	
				dsRow = nexacroService.queryForDataset(paramMap, "whobMgmtService.selectAllocStc_selectAlloc"); // 재고 조회시 유통기한 
				
			}
			// 선택할당이 아닌경우
			else{
				
				// 1. 재고조회 (재고가 충분한지)
				dsRow = nexacroService.queryForDataset(dsList, i, "whobMgmtService.selectOrdAllocStc");
				
				
				// 재고가 부족하면 패스
				if(dsList.getObject(i, "CUST_USE_NO").equals(dsRow.getObject(0, "CUST_USE_NO")) ){
					continue;
				}
				
				// 2. 재고가 충분하다면, Lot가 나눠졌는지 확인 및 각각의 품목코드, 수량	
				dsRow = nexacroService.queryForDataset(dsList, i, "whobMgmtService.selectAllocStc"); // 재고 조회시 유통기한 
				
			}
			
			/*if(true){
			throw new NexaUserException("TEST!!");
			}*/
			gdsQty = dsList.getInt(i, "GDS_QTY");
			
			for (int j = 0; j < dsRow.getRowCount(); j++) {
				// 2-1. 주문수량보다 재고가 더 많을 떄 ( 재고수량 - 주문수량 ) => 주문수량 그대로 update
				if((dsRow.getInt(j, "USBL_STC") - gdsQty) > 0 ) {
					dsRow.set(j, "GDS_QTY", gdsQty);
					nexacroService.updateDataSet(dsRow, j, "whobMgmtService.updateStcAlloc");
					break;
				}
				// 2-2. 주문수량보다 재고가 더 적을 때 ( Lot 분할되어 있을 때 )
				else {
					dsRow.set(j, "GDS_QTY", dsRow.getInt(j, "USBL_STC"));
					nexacroService.updateDataSet(dsRow, j, "whobMgmtService.updateStcAlloc");
					
					gdsQty = gdsQty - dsRow.getInt(j, "USBL_STC");
				}
			}
			
			// 3. 재고 트랜잭션 추가 (트랜잭션타입 :: T1:입고, T2:출고, T3:할당, T4:피킹, T8:이동, T9:조정)
			nexacroService.insertDataSet(dsList, i, "whobMgmtService.insertStcMvMgmtAlloc");
			
			// 4. 주문 Update
			dsList.set(i, "WORK_DV_CD", "30");
			successCnt += nexacroService.updateDataSet(dsList, i, "whobMgmtService.updateWhodOrd");
		}
		
		// 5. 주문정보 조회
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "whobMgmtService.selectRcptOrdList");
		outParam.setOutDatasetList("dsResult", dsResult);
		
		
		String strResultMsg = "할당결과 :: 성공("+successCnt+")건, 실패("+(totCnt-successCnt)+")건"; 
		
		Map<String, Object> resultMap = new HashMap<String, Object>(); 
		resultMap.put("RESULT_CD", "GWDS_OK");
		resultMap.put("RESULT_MSG", strResultMsg);
		
		DataSet dsResult2 = NexacroConvertUtil.makeDsFromMap(resultMap);
		
		outParam.setOutDatasetList("dsResult2", dsResult2);

		return outParam;
	}

	@Override
	public Parameters selectPickOrd(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "whobMgmtService.selectPickOrdList");
		
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}

	@Override
	public Parameters insertPickOrd(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsList = inParam.getDataSet("dsList");
		DataSet dsRow = null;
		int gdsQty = 0;
		
		/*	WORK_DV_CD ::  00 : 신규,  10 : 주문접수,  20 : 주문확정,  30 : 할당완료,  40 : 피킹완료,  50 : 출고확정		*/
		
		//==============================피킹시작==============================
		for (int i = 0; i < dsList.getRowCount(); i++) {
			
			// 2. 재고가 충분하다면, Lot가 나눠졌는지 확인 및 각각의 품목코드, 수량	
			dsRow = nexacroService.queryForDataset(dsList, i, "whobMgmtService.selectPickStc"); // 재고 조회시 유통기한 
			gdsQty = dsList.getInt(i, "GDS_QTY");
			
			for (int j = 0; j < dsRow.getRowCount(); j++) {
				// 2-1. 주문수량보다 재고가 더 많을 떄 ( 재고수량 - 주문수량 ) => 주문수량 그대로 update
				if((dsRow.getInt(j, "ALLOC_QTY") - gdsQty) > 0 ) {
					dsRow.set(j, "GDS_QTY", gdsQty);
					nexacroService.updateDataSet(dsRow, j, "whobMgmtService.updateStcPick");
					break;
				}
				// 2-2. 주문수량보다 재고가 더 적을 때 ( Lot 분할되어 있을 때 )
				else {
					dsRow.set(j, "GDS_QTY", dsRow.getInt(j, "ALLOC_QTY"));
					nexacroService.updateDataSet(dsRow, j, "whobMgmtService.updateStcPick");
					
					gdsQty = gdsQty - dsRow.getInt(j, "ALLOC_QTY");
				}
			}
			
			// 3. 재고 트랜잭션 추가 (트랜잭션타입 :: T1:입고, T2:출고, T3:할당, T4:피킹, T8:이동, T9:조정)
			nexacroService.insertDataSet(dsList, i, "whobMgmtService.insertStcMvMgmtPick");
			
			// 4. 주문 Update
			dsList.set(i, "WORK_DV_CD", "40");
			nexacroService.updateDataSet(dsList, i, "whobMgmtService.updateWhodOrd");
		}
		
		// 5. 주문정보 조회
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "whobMgmtService.selectPickOrdList");
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}

	@Override
	public Parameters selectDecisOrd(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "whobMgmtService.selectDecisOrd");
		
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}

	@Override
	public Parameters insertDecisOrd(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsList = inParam.getDataSet("dsList");
		DataSet dsRow = null;
		HashMap<String, String> waybillNo = null;
		
		int gdsQty = 0;
		
		/*	WORK_DV_CD ::  00 : 신규,  10 : 주문접수,  20 : 주문확정,  30 : 할당완료,  40 : 피킹완료,  50 : 출고확정		*/
		
		//==============================피킹시작==============================
		for (int i = 0; i < dsList.getRowCount(); i++) {
			
			// 1. Lot가 나눠졌는지 확인 및 각각의 품목코드, 수량	
			dsRow = nexacroService.queryForDataset(dsList, i, "whobMgmtService.selectDecisStc"); // 재고 조회시 유통기한 
			gdsQty = dsList.getInt(i, "GDS_QTY");
			
			// 운송장번호 생성
			waybillNo = (HashMap<String, String>)nexacroService.queryForObject(null, "whobMgmtService.selectWaybillNo");
			dsList.set(i, "WAYBILL_NO", waybillNo.get("WAYBILL_NO"));
			
			System.out.println(waybillNo.get("WAYBILL_NO")+"zzzzzzzzzzzz");
			
			for (int j = 0; j < dsRow.getRowCount(); j++) {
				// 수량이 충분할 떄
				if((dsRow.getInt(j, "PICKING_QTY") - gdsQty) > 0 ) {
					dsRow.set(j, "GDS_QTY", gdsQty);
					nexacroService.updateDataSet(dsRow, j, "whobMgmtService.updateStcDecis");
					break;
				}
				// Lot 분할되어 있을 때 
				else {
					dsRow.set(j, "GDS_QTY", dsRow.getInt(j, "PICKING_QTY"));
					nexacroService.updateDataSet(dsRow, j, "whobMgmtService.updateStcDecis");
					
					gdsQty = gdsQty - dsRow.getInt(j, "PICKING_QTY");
				}
			}
			
			// 2. 재고 트랜잭션 (트랜잭션타입 :: T1:입고, T2:출고, T3:할당, T4:피킹, T8:이동, T9:조정)
			nexacroService.insertDataSet(dsList, i, "whobMgmtService.insertStcMvMgmtDecis");
			
			// 3. 주문 상태 Update
			dsList.set(i, "WORK_DV_CD", "50");
			nexacroService.updateDataSet(dsList, i, "whobMgmtService.updateWhodOrd");
			
			// 4. 택배 I/F
			nexacroService.insertDataSet(dsList, i, "whobMgmtService.insertIfStRsrvDecis");
		}
		
		// 5. 주문정보 조회
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "whobMgmtService.selectDecisOrd");
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}
	
}
