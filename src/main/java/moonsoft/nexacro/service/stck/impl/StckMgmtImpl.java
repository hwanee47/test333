package moonsoft.nexacro.service.stck.impl;

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
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.stck.StckMgmtService;
import moonsoft.nexacro.util.CommonUtil;

/**
 * 
 * <br>
 * <br>
 * <br>
 * @author	kjh
 * @version	1.0
 * @since	2020.03.11
 *
 */
@Service("stckMgmtService")
public class StckMgmtImpl extends EgovAbstractServiceImpl implements StckMgmtService{

	
	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	
	/**
	 * 재고관리 저장.<br>
	 * <br>
	 * 재고수정
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.09
	 */
	@Override
	public Parameters saveStckList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsList    = inParam.getDataSet("dsList");
		
		int nRowCnt = dsList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		HashMap<String, Object> savedInfoMap = new HashMap<String, Object>();
		HashMap<String, Object> saveInfoMap = new HashMap<String, Object>();
		
		String strDate = CommonUtil.getDate("yyyyMMddHHmmss"); 
		
		for(int i=0; i<nRowCnt; i++) {

			String strChk = dsList.getString(i, "CHK");
			
			// 체크된 행만 처리.
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsList.getRowType(i);
			
			/*****************************************************************
			 * # 조정수량은 마이너스 입력 불가
			   # 가용수량만 조정하는경우 체크사항
				 - 없음, 수량 업데이트만 처리 
				 -> 총수량    = 변경전총수량 +(변경후가용수량-변경전가용수량) + (변경후보류수량 - 변경전보류수량) + (변경후불용수량 - 변경전불용수량) 
				           가용수량 = 변경후가용수량
				
				
			   # 가용수량, 보류수량, 불용수량 2개이상 조정되는 경우 체크사항.
				 - 저장처리도중 수량이 변경된경우 에러처리 (화면의 총수량과 저장되어있는 총수량이 다른경우, 재조회후 처리요청.) 
				 
				 - 수량업데이트처리
				   -> 총수량 = 변경전총수량 + (변경후가용수량-변경전가용수량(입력이없다면 0)) + (변경후보류수량 - 변경전보류수량(입력이없다면 0)) + (변경후불용수량 - 변경전불용수량(입력이없다면 0)) 
				                가용수량 = 조정가용수량(입력이없다면 원본수량)
				                보류수량 = 조정가용수량(입력이없다면 원본수량)
				                불용수량 = 조정가용수량(입력이없다면 원본수량)
			 ******************************************************************/ 
			
			String strCentCd   		= dsList.getString(i, "CENT_CD");		// 창고코드
			String strCentNm   		= dsList.getString(i, "CENT_NM");		// 창고명
			String strCustCd   		= dsList.getString(i, "CUST_CD");		// 고객(화주)코드
			String strCustNm   		= dsList.getString(i, "CUST_NM");		// 고객(화주)명
			String strGdsCd    		= dsList.getString(i, "GDS_CD");		// 품목(상품)코드
			String strGdsNm    		= dsList.getString(i, "GDS_NM");		// 품목(상품)명
			String strStcDvLot 		= dsList.getString(i, "STC_DV_LOT");	// 재고구분LOT
			String strUserId		= dsList.getString(i, "gv_userId");		// 작업자
			String strServiceFlag 	= dsList.getString(i, "SERVICE_FLAG");	// 서비스플래그(가용재고증가/감소인지 , 기존재고수량변경인지)
			String strStcQty		= dsList.getString(i, "STC_QTY");		// 총수량
			
			String strInPutUsblStc 		= dsList.getString(i, "INPUT_USBL_STC");		// 입력한 조정가용수량
			String strInPutHoldingQty 	= dsList.getString(i, "INPUT_HOLDING_QTY");		// 입력한 조정보류수량
			String strInPutNoUseStcQty 	= dsList.getString(i, "INPUT_NO_USE_STC_QTY");	// 입력한 조정불용수량
			
			paramMap.put("CENT_CD"		, strCentCd);
			paramMap.put("CUST_CD"		, strCustCd);
			paramMap.put("GDS_CD"		, strGdsCd);
			paramMap.put("STC_DV_LOT"	, strStcDvLot);
			
			// 저장되어있는 재고정보 조회
			savedInfoMap = (HashMap<String, Object>) nexacroService.queryForObject(paramMap, "stckMgmtService.getStckInfo");
			
			String strSavedStcQty 	 	= String.valueOf(savedInfoMap.get("STC_QTY"));			// 저장되어있는 총수량
			String strSavedUsblStc  	= String.valueOf(savedInfoMap.get("USBL_STC"));			// 저장되어있는 가용수량
			String strSavedHoldingQty 	= String.valueOf(savedInfoMap.get("HOLDING_QTY"));		// 저장되어있는 보류수량
			String strSavedNoUseStcQty	= String.valueOf(savedInfoMap.get("NO_USE_STC_QTY"));	// 저장되어있는 불용수량
			
			int intStcQty       = Integer.parseInt(strStcQty);
			int intSavedStcQty  = Integer.parseInt(strSavedStcQty);
			int intSavedUsblStc = Integer.parseInt(strSavedUsblStc);
			int intInputUsblStc = Integer.parseInt(StringUtil.nullToDefault(strInPutUsblStc,"0"));
			int intSavedHoldingQty = Integer.parseInt(strSavedHoldingQty);
			int intInPutHoldingQty = Integer.parseInt(StringUtil.nullToDefault(strInPutHoldingQty,"0"));
			int intSavedNoUseStcQty = Integer.parseInt(strSavedNoUseStcQty);
			int intInPutNoUseStcQty = Integer.parseInt(StringUtil.nullToDefault(strInPutNoUseStcQty,"0"));
			
			
			/* 저장될 데이터 셋팅 */
			// 가용재고증가/감소
			if( "onlyUsblStcChg".equals(strServiceFlag) ){
				
				saveInfoMap.put("CENT_CD"					, strCentCd);				// 창고코드
				saveInfoMap.put("CUST_CD"					, strCustCd);				// 고객코드
				saveInfoMap.put("GDS_CD"					, strGdsCd);				// 상품코드
				saveInfoMap.put("STC_DV_LOT"				, strStcDvLot);				// LOT
				saveInfoMap.put("gv_userId"					, strUserId);				// 작업자
				saveInfoMap.put("TOTAL_USBL_STC"    		, String.valueOf(intInputUsblStc - intSavedUsblStc));			// 총수량에 계산될 가용수량
				saveInfoMap.put("TOTAL_HOLDING_QTY"    		, "0");						// 총수량에 계산될 보류수량
				saveInfoMap.put("TOTAL_NO_USE_STC_QTY"    	, "0");						// 총수량에 계산될 불용수량
				saveInfoMap.put("USBL_STC"    				, strInPutUsblStc);			// 입력한 가용수량
				saveInfoMap.put("HOLDING_QTY" 				, strSavedHoldingQty);		// 저장되어있는 보류수량
				saveInfoMap.put("NO_USE_STC_QTY"			, strSavedNoUseStcQty);		// 저장되어있는 불용수량
				
				
				/* 재고 히스토리테이블 INSERT */
				// 트랜잭션키
				saveInfoMap.put("TRANSACTION_KEY"			, "STCK"+strDate);			
				// 트랜잭션타입 T1(입고), T2(출고), T3(할당), T4(피킹), T5(반품입고), T6(조정(가용)), T7(조정(보류)), T8(조정(불용)), T9(이동(가용)), T10(이동(보류)), T11(이동(불용))
				saveInfoMap.put("TRANSACTION_TYPE"			, "T6");					 						
				// 트랜잭션수량
				saveInfoMap.put("TRANSACTION_QTY"			, String.valueOf(intInputUsblStc - intSavedUsblStc));	
				
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertStckHistory");
			}
			// 기존재고수량변경
			else{
				
				
				// 저장중 조정수량에 변경이 생겻을경우 에러처리.
				if( 
					(
						(StringUtil.isNull(strInPutUsblStc)?intSavedUsblStc:intInputUsblStc)+
						(StringUtil.isNull(strInPutHoldingQty)?intSavedHoldingQty:intInPutHoldingQty)+
						(StringUtil.isNull(strInPutNoUseStcQty)?intSavedNoUseStcQty:intInPutNoUseStcQty)
					) != (intSavedUsblStc+intSavedHoldingQty+intSavedNoUseStcQty) 
				){
					
					String errMsg = "해당 재고의 수량이 변경되었습니다. 다시 조회후 처리해주세요.";
					errMsg += "\n☞ [창고명] : "+strCentNm;
					errMsg += "\n☞ [고객명] : "+strCustNm;
					errMsg += "\n☞ [품목명] : "+strGdsNm;
					errMsg += "\n☞ [로트번호] : "+strStcDvLot;
					
					throw new NexaUserException(errMsg);
					
				}
				
				saveInfoMap.put("CENT_CD"					, strCentCd);				// 창고코드
				saveInfoMap.put("CUST_CD"					, strCustCd);				// 고객코드
				saveInfoMap.put("GDS_CD"					, strGdsCd);				// 상품코드
				saveInfoMap.put("STC_DV_LOT"				, strStcDvLot);				// LOT
				saveInfoMap.put("gv_userId"					, strUserId);				// 작업자
				// 총수량에 계산될 가용수량 (입력이없다면 0)
				saveInfoMap.put("TOTAL_USBL_STC"    		, StringUtil.isNull(strInPutUsblStc) ? "0" : String.valueOf(intInputUsblStc - intSavedUsblStc));	
				// 총수량에 계산될 보류수량 (입력이없다면 0)
				saveInfoMap.put("TOTAL_HOLDING_QTY"    		, StringUtil.isNull(strInPutHoldingQty) ? "0" : String.valueOf(intInPutHoldingQty - intSavedHoldingQty));
				// 총수량에 계산될 불용수량 (입력이없다면 0)
				saveInfoMap.put("TOTAL_NO_USE_STC_QTY"    	, StringUtil.isNull(strInPutNoUseStcQty)? "0" : String.valueOf(intInPutNoUseStcQty - intSavedNoUseStcQty));	
				// 조정가용수량(입력이없다면 원본수량)
				saveInfoMap.put("USBL_STC"    				, StringUtil.isNull(strInPutUsblStc)	? strSavedUsblStc : strInPutUsblStc);		
				// 조정보류수량(입력이없다면 원본수량)
				saveInfoMap.put("HOLDING_QTY" 				, StringUtil.isNull(strInPutHoldingQty)	? strSavedHoldingQty : strInPutHoldingQty);		
				// 조정불용수량(입력이없다면 원본수량)
				saveInfoMap.put("NO_USE_STC_QTY"			, StringUtil.isNull(strInPutNoUseStcQty)? strSavedNoUseStcQty : strInPutNoUseStcQty);	
				
				
				/* 재고 히스토리테이블 INSERT( 변경된 항목마다 히스토리에 추가한다. ) */
				
				// 가용수량
				if( !StringUtil.isNull(strInPutUsblStc) ){
					// 트랜잭션키
					saveInfoMap.put("TRANSACTION_KEY"			, "STCK"+strDate);
					// 트랜잭션타입 T1(입고), T2(출고), T3(할당), T4(피킹), T5(반품입고), T6(조정(가용)), T7(조정(보류)), T8(조정(불용)), T9(이동(가용)), T10(이동(보류)), T11(이동(불용))
					saveInfoMap.put("TRANSACTION_TYPE"			, "T6");					 						
					// 트랜잭션수량
					saveInfoMap.put("TRANSACTION_QTY"			, String.valueOf(intInputUsblStc - intSavedUsblStc));	
					
					nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertStckHistory");
				}
				
				// 보류수량
				if( !StringUtil.isNull(strInPutHoldingQty) ){
					// 트랜잭션키
					saveInfoMap.put("TRANSACTION_KEY"			, "STCK"+strDate);
					// 트랜잭션타입 T1(입고), T2(출고), T3(할당), T4(피킹), T5(반품입고), T6(조정(가용)), T7(조정(보류)), T8(조정(불용)), T9(이동(가용)), T10(이동(보류)), T11(이동(불용))
					saveInfoMap.put("TRANSACTION_TYPE"			, "T7");					 						
					// 트랜잭션수량
					saveInfoMap.put("TRANSACTION_QTY"			, String.valueOf(intInPutHoldingQty - intSavedHoldingQty));	
					
					nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertStckHistory");
				}
				
				// 불용수량
				if( !StringUtil.isNull(strInPutNoUseStcQty) ){
					// 트랜잭션키
					saveInfoMap.put("TRANSACTION_KEY"			, "STCK"+strDate);
					// 트랜잭션타입 T1(입고), T2(출고), T3(할당), T4(피킹), T5(반품입고), T6(조정(가용)), T7(조정(보류)), T8(조정(불용)), T9(이동(가용)), T10(이동(보류)), T11(이동(불용))
					saveInfoMap.put("TRANSACTION_TYPE"			, "T8");					 						
					// 트랜잭션수량
					saveInfoMap.put("TRANSACTION_QTY"			, String.valueOf(intInPutNoUseStcQty - intSavedNoUseStcQty));	
					
					nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertStckHistory");
				}
				
				
			}
			
			// 재고테이블 수량 UPDATE
			nexacroService.updateMap(saveInfoMap, "stckMgmtService.updateStckInfoChgQty");
			
		}
		
		
		return outParam;
	}
	
	
	
	
	/**
	 * 재고이동 (창고).<br>
	 * <br>
	 * 재고이동
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.11
	 */
	@Override
	public Parameters saveMoveWarehStckList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsList    = inParam.getDataSet("dsList");
		
		int nRowCnt = dsList.getRowCount();
		
		int chkCnt = 0;
		int listSize = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		HashMap<String, Object> savedInfoMap = new HashMap<String, Object>();
		HashMap<String, Object> saveInfoMap = new HashMap<String, Object>();
		
		// 로트별 재고 
		List<HashMap<String, Object>> savedListGrpLot = new ArrayList<HashMap<String, Object>>();
		
		String strDate = CommonUtil.getDate("yyyyMMddHHmmss"); 
		
		for(int i=0; i<nRowCnt; i++) {

			String strChk = dsList.getString(i, "CHK");
			
			// 체크된 행만 처리.
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsList.getRowType(i);
			
			
			/*****************************************************************
			 * 창고간 이동은 FROM창고에서는 이동내역, TO창고에서는 신규입고로 처리한다.
			 * # 보낼수량은 마이너스 입력불가.
			 * # 처리사항
			   1) FROM 창고 재고수량 수정.
			      - 화면이 품목별 조회 이기때문에 입력한 수량과 재고테이블의 해당상품의 각 LOT별재고수량과 계산하여 처리함.
			      - A상품 200개 이동이면 , LOT별 재고는 A상품-30개, A상품-100개, A상품-150개 데이터가 존재할수도 있기 때문에 이동수량에서 각 LOT별 수량을 차감하면서 계산처리한다.  
			       
			   2) 재고 히스토리에 이동내역 생성.
			   3) 입고예정주문 생성.
			   
			 * ※ 에러체크사항
			   1) 저장되어있는 수량 < 입력받은 수량인 경우 에러처리.
			 ******************************************************************/
			
			
			String strCentCd   		= dsList.getString(i, "CENT_CD");		// 창고코드
			String strCentNm   		= dsList.getString(i, "CENT_NM");		// 창고명
			String strCustCd   		= dsList.getString(i, "CUST_CD");		// 고객(화주)코드
			String strCustNm   		= dsList.getString(i, "CUST_NM");		// 고객(화주)명
			String strGdsCd    		= dsList.getString(i, "GDS_CD");		// 품목(상품)코드
			String strGdsNm    		= dsList.getString(i, "GDS_NM");		// 품목(상품)명
			String strZnCd    		= dsList.getString(i, "ZN_CD");			// 존
			String strLocCd    		= dsList.getString(i, "LOC_CD");		// 로케이션
			String strRackCd    	= dsList.getString(i, "RACK_CD");		// 랙
			String strUserId		= dsList.getString(i, "gv_userId");		// 작업자
			
			String strInPutCentCd 		= dsList.getString(i, "INPUT_CENT_CD");			// 입력한 보낼창고코드
			String strInPutCentNm 		= dsList.getString(i, "INPUT_CENT_NM");			// 입력한 보낼창고명
			String strInPutUsblStc 		= dsList.getString(i, "INPUT_USBL_STC");		// 입력한 조정가용수량
			String strInPutHoldingQty 	= dsList.getString(i, "INPUT_HOLDING_QTY");		// 입력한 조정보류수량
			String strInPutNoUseStcQty 	= dsList.getString(i, "INPUT_NO_USE_STC_QTY");	// 입력한 조정불용수량
			
			paramMap.put("CENT_CD"		, strCentCd);
			paramMap.put("CUST_CD"		, strCustCd);
			paramMap.put("GDS_CD"		, strGdsCd);
			paramMap.put("ZN_CD"		, strZnCd);
			paramMap.put("LOC_CD"		, strLocCd);
			paramMap.put("RACK_CD"		, strRackCd);
			paramMap.put("TO_CENT_CD"	, strInPutCentCd);
			
			// 저장되어있는 재고정보 조회 (수량체크용)
			savedInfoMap = (HashMap<String, Object>) nexacroService.queryForObject(paramMap, "stckMgmtService.getStckInfoGrpItem");
			
			String strSavedUsblStc  	= String.valueOf(savedInfoMap.get("USBL_STC"));			// 저장되어있는 가용수량
			String strSavedHoldingQty 	= String.valueOf(savedInfoMap.get("HOLDING_QTY"));		// 저장되어있는 보류수량
			String strSavedNoUseStcQty	= String.valueOf(savedInfoMap.get("NO_USE_STC_QTY"));	// 저장되어있는 불용수량
			
			int intSavedUsblStc = Integer.parseInt(strSavedUsblStc);
			int intInputUsblStc = Integer.parseInt(StringUtil.nullToDefault(strInPutUsblStc,"0"));
			int intSavedHoldingQty = Integer.parseInt(strSavedHoldingQty);
			int intInPutHoldingQty = Integer.parseInt(StringUtil.nullToDefault(strInPutHoldingQty,"0"));
			int intSavedNoUseStcQty = Integer.parseInt(strSavedNoUseStcQty);
			int intInPutNoUseStcQty = Integer.parseInt(StringUtil.nullToDefault(strInPutNoUseStcQty,"0"));
			int remainQty = 0;	// 수량계산용(나머지)
			
			// 가용수량 체크. ( 입력한가용수량 > 가용수량인경우 에러처리)
			if( intInputUsblStc > intSavedUsblStc ){
				String errMsg = "해당 재고의 가용수량이 변경되었습니다. 다시 조회후 처리해주세요.";
				errMsg += "\n☞ [창고명] : "+strCentNm;
				errMsg += "\n☞ [고객명] : "+strCustNm;
				errMsg += "\n☞ [품목명] : "+strGdsNm;
				
				throw new NexaUserException(errMsg);
			}
			
			// 보류수량 체크. ( 입력한보류수량 > 보류수량인경우 에러처리)
			if( intInPutHoldingQty > intSavedHoldingQty ){
				String errMsg = "해당 재고의 보류수량이 변경되었습니다. 다시 조회후 처리해주세요.";
				errMsg += "\n☞ [창고명] : "+strCentNm;
				errMsg += "\n☞ [고객명] : "+strCustNm;
				errMsg += "\n☞ [품목명] : "+strGdsNm;
				
				throw new NexaUserException(errMsg);
			}
			
			// 불용수량 체크. ( 입력한불용수량 > 불용수량인경우 에러처리)
			if( intInPutNoUseStcQty > intSavedNoUseStcQty ){
				String errMsg = "해당 재고의 불용수량이 변경되었습니다. 다시 조회후 처리해주세요.";
				errMsg += "\n☞ [창고명] : "+strCentNm;
				errMsg += "\n☞ [고객명] : "+strCustNm;
				errMsg += "\n☞ [품목명] : "+strGdsNm;
				
				throw new NexaUserException(errMsg);
			}
			
			
			/* 생성할 입고번호 조회 */
			String wareiExpctNo = (String) nexacroService.queryForObject(paramMap, "stckMgmtService.getNewWareiExpctNo");
			int lnNo = 1;
			
			/* 로트별 상품 수량 계산 처리 (가용재고) */
			paramMap.put("CUSTOM_ORDER_COLUMN", "A.USBL_STC");	// 가용재고수량 내림차순
			savedListGrpLot = (ArrayList<HashMap<String, Object>>) nexacroService.queryForObjectList(paramMap, "stckMgmtService.getStckInfoGrpLot");
			listSize = savedListGrpLot.size();
			// 나머지 수량 초기값 (화면입력값)
			remainQty = intInputUsblStc;	
			
			for(int j=0; j<listSize; j++){
				
				// 나머지수량이 0보다 작은 경우 빠져 나감.  
				if(remainQty <= 0) break;
				
				// 로트별 재고정보
				HashMap<String, Object> map = savedListGrpLot.get(j);
				
				String strStcDvLot = (String) map.get("STC_DV_LOT");		// 재고구분로트
				String strUsblStc = (String) map.get("USBL_STC");			// 가용수량
				String strHoldingQty = (String) map.get("HOLDING_QTY");		// 가용수량
				String strNoUseStcQty = (String) map.get("NO_USE_STC_QTY");			// 가용수량
				
				int intUsblStc = Integer.parseInt(strUsblStc);
				
				saveInfoMap.put("CENT_CD"		, strCentCd);
				saveInfoMap.put("CUST_CD"		, strCustCd);
				saveInfoMap.put("GDS_CD"		, strGdsCd);
				saveInfoMap.put("STC_DV_LOT"	, strStcDvLot);
				saveInfoMap.put("gv_userId"		, strUserId);				// 작업자
				int calQty = (remainQty - intUsblStc)>=0?intUsblStc:remainQty;
				saveInfoMap.put("USBL_STC"		, calQty);
				saveInfoMap.put("HOLDING_QTY"	, "0");
				saveInfoMap.put("NO_USE_STC_QTY", "0");
				
				// 나머지계산
				remainQty = (remainQty - intUsblStc);
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.updateStckInfoMoveWareh");
				
				
				/* 히스토리 추가 */
				// 트랜잭션키
				saveInfoMap.put("TRANSACTION_KEY"			, "STCK"+strDate);
				// 트랜잭션타입 T1(입고), T2(출고), T3(할당), T4(피킹), T5(반품입고), T6(조정(가용)), T7(조정(보류)), T8(조정(불용)), T9(이동(가용)), T10(이동(보류)), T11(이동(불용))
				saveInfoMap.put("TRANSACTION_TYPE"			, "T9");					 						
				// 트랜잭션수량
				saveInfoMap.put("TRANSACTION_QTY"			, calQty*(-1));	
				// FROM 창고
				saveInfoMap.put("FR_CENT_CD"	, strCentCd);
				saveInfoMap.put("FR_ZN"			, strZnCd);
				saveInfoMap.put("FR_LOC"		, strLocCd);
				saveInfoMap.put("FR_RACK"		, strRackCd);
				saveInfoMap.put("FR_STC_DV_LOT"	, strStcDvLot);
				saveInfoMap.put("FR_MV_QTY"		, calQty);
				
				// TO 창고
				saveInfoMap.put("TO_CENT_CD"	, strInPutCentCd);
				saveInfoMap.put("TO_MV_QTY"		, calQty);
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertStckHistory");
				
				
				/* 입고예정 추가 */
				saveInfoMap.put("CENT_CD"		, strInPutCentCd);
				saveInfoMap.put("WARE_EXPCT_NO"	, wareiExpctNo);
				saveInfoMap.put("LN_NO"			, lnNo++);
				saveInfoMap.put("WAREI_TYPE"	, "I3");			// 이송입고
				saveInfoMap.put("LOT_DV_VAL_1"	, "T9");			// 트랜잭션타입 T9 이동(가용)
				saveInfoMap.put("EXPCT_QTY"		, calQty);  		// 이동수량
				saveInfoMap.put("EXPR_DATE"		, map.get("EXPR_DATE"));  	// 유통기한
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertWarei");
				
			}
			
			/* 로트별 상품 수량 계산 처리 (보류재고) */
			paramMap.put("CUSTOM_ORDER_COLUMN", "A.HOLDING_QTY");	// 불용재고수량 내림차순
			savedListGrpLot = (ArrayList<HashMap<String, Object>>) nexacroService.queryForObjectList(paramMap, "stckMgmtService.getStckInfoGrpLot");
			listSize = savedListGrpLot.size();
			// 나머지 수량 초기값 (화면입력값)
			remainQty = intInPutHoldingQty;	
			
			for(int j=0; j<listSize; j++){
				
				// 나머지수량이 0보다 작은 경우 빠져 나감.  
				if(remainQty <= 0) break;
				
				// 로트별 재고정보
				HashMap<String, Object> map = savedListGrpLot.get(j);
				
				String strStcDvLot = (String) map.get("STC_DV_LOT");		// 재고구분로트
				String strHoldingQty = (String) map.get("HOLDING_QTY");		// 보류수량
				int intHoldingQty = Integer.parseInt(strHoldingQty);
				
				saveInfoMap.put("CENT_CD"		, strCentCd);
				saveInfoMap.put("CUST_CD"		, strCustCd);
				saveInfoMap.put("GDS_CD"		, strGdsCd);
				saveInfoMap.put("STC_DV_LOT"	, strStcDvLot);
				saveInfoMap.put("gv_userId"		, strUserId);				// 작업자
				int calQty = (remainQty - intHoldingQty)>=0?intHoldingQty:remainQty;
				saveInfoMap.put("USBL_STC"		, "0");
				saveInfoMap.put("HOLDING_QTY"	, calQty);
				saveInfoMap.put("NO_USE_STC_QTY", "0");
				
				// 나머지계산
				remainQty = (remainQty - intHoldingQty);
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.updateStckInfoMoveWareh");
				
				
				// 트랜잭션키
				saveInfoMap.put("TRANSACTION_KEY"			, "STCK"+strDate);
				// 트랜잭션타입 T1(입고), T2(출고), T3(할당), T4(피킹), T5(반품입고), T6(조정(가용)), T7(조정(보류)), T8(조정(불용)), T9(이동(가용)), T10(이동(보류)), T11(이동(불용))
				saveInfoMap.put("TRANSACTION_TYPE"			, "T10");					 						
				// 트랜잭션수량
				saveInfoMap.put("TRANSACTION_QTY"			, calQty*(-1));	
				// FROM 창고
				saveInfoMap.put("FR_CENT_CD"	, strCentCd);
				saveInfoMap.put("FR_ZN"			, strZnCd);
				saveInfoMap.put("FR_LOC"		, strLocCd);
				saveInfoMap.put("FR_RACK"		, strRackCd);
				saveInfoMap.put("FR_STC_DV_LOT"	, strStcDvLot);
				saveInfoMap.put("FR_MV_QTY"		, calQty);
				
				// TO 창고
				saveInfoMap.put("TO_CENT_CD"	, strInPutCentCd);
				saveInfoMap.put("TO_MV_QTY"		, calQty);
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertStckHistory");
				
				
				/* 입고예정 추가 */
				saveInfoMap.put("CENT_CD"		, strInPutCentCd);
				saveInfoMap.put("WARE_EXPCT_NO"	, wareiExpctNo);
				saveInfoMap.put("LN_NO"			, lnNo++);
				saveInfoMap.put("WAREI_TYPE"	, "I3");			// 이송입고
				saveInfoMap.put("LOT_DV_VAL_1"	, "T10");			// 트랜잭션타입 T10 이동(보류)
				saveInfoMap.put("EXPCT_QTY"		, calQty);  		// 이동수량
				saveInfoMap.put("EXPR_DATE"		, map.get("EXPR_DATE"));  	// 유통기한
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertWarei");
			}
			
			
			/* 로트별 상품 수량 계산 처리 (불용재고) */
			paramMap.put("CUSTOM_ORDER_COLUMN", "A.NO_USE_STC_QTY");	// 불용재고수량 내림차순
			savedListGrpLot = (ArrayList<HashMap<String, Object>>) nexacroService.queryForObjectList(paramMap, "stckMgmtService.getStckInfoGrpLot");
			listSize = savedListGrpLot.size();
			// 나머지 수량 초기값 (화면입력값)
			remainQty = intInPutNoUseStcQty;	
			
			for(int j=0; j<listSize; j++){
				
				// 나머지수량이 0보다 작은 경우 빠져 나감.  
				if(remainQty <= 0) break;
				
				// 로트별 재고정보
				HashMap<String, Object> map = savedListGrpLot.get(j);
				
				String strStcDvLot = (String) map.get("STC_DV_LOT");		// 재고구분로트
				String strNoUseStcQty = (String) map.get("NO_USE_STC_QTY");			// 가용수량
				int intNoUseStcQty = Integer.parseInt(strNoUseStcQty);
				
				saveInfoMap.put("CENT_CD"		, strCentCd);
				saveInfoMap.put("CUST_CD"		, strCustCd);
				saveInfoMap.put("GDS_CD"		, strGdsCd);
				saveInfoMap.put("STC_DV_LOT"	, strStcDvLot);
				saveInfoMap.put("gv_userId"		, strUserId);				// 작업자
				int calQty = (remainQty - intNoUseStcQty)>=0?intNoUseStcQty:remainQty;
				saveInfoMap.put("USBL_STC"		, "0");
				saveInfoMap.put("HOLDING_QTY"	, "0");
				saveInfoMap.put("NO_USE_STC_QTY", calQty);
				
				// 나머지계산
				remainQty = (remainQty - intNoUseStcQty);
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.updateStckInfoMoveWareh");
				
				
				// 트랜잭션키
				saveInfoMap.put("TRANSACTION_KEY"			, "STCK"+strDate);
				// 트랜잭션타입 T1(입고), T2(출고), T3(할당), T4(피킹), T5(반품입고), T6(조정(가용)), T7(조정(보류)), T8(조정(불용)), T9(이동(가용)), T10(이동(보류)), T11(이동(불용))
				saveInfoMap.put("TRANSACTION_TYPE"			, "T11");					 						
				// 트랜잭션수량
				saveInfoMap.put("TRANSACTION_QTY"			, calQty*(-1));	
				// FROM 창고
				saveInfoMap.put("FR_CENT_CD"	, strCentCd);
				saveInfoMap.put("FR_ZN"			, strZnCd);
				saveInfoMap.put("FR_LOC"		, strLocCd);
				saveInfoMap.put("FR_RACK"		, strRackCd);
				saveInfoMap.put("FR_STC_DV_LOT"	, strStcDvLot);
				saveInfoMap.put("FR_MV_QTY"		, calQty);
				
				// TO 창고
				saveInfoMap.put("TO_CENT_CD"	, strInPutCentCd);
				saveInfoMap.put("TO_MV_QTY"		, calQty);
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertStckHistory");
				
				
				/* 입고예정 추가 */
				saveInfoMap.put("CENT_CD"		, strInPutCentCd);
				saveInfoMap.put("WARE_EXPCT_NO"	, wareiExpctNo);
				saveInfoMap.put("LN_NO"			, lnNo++);
				saveInfoMap.put("WAREI_TYPE"	, "I3");			// 이송입고
				saveInfoMap.put("LOT_DV_VAL_1"	, "T11");			// 트랜잭션타입 T11 이동(불용)
				saveInfoMap.put("EXPCT_QTY"		, calQty);  		// 이동수량
				saveInfoMap.put("EXPR_DATE"		, map.get("EXPR_DATE"));  	// 유통기한
				
				nexacroService.insertMap(saveInfoMap, "stckMgmtService.insertWarei");
				
			}
			
			
			/* 입고 테이블에 입고예정으로 데이터 생성 */
			if(intInputUsblStc>0){
				
			}
			
			if(intInPutHoldingQty>0){
				
			}
			
			if(intInPutNoUseStcQty>0){
				
			}
			
			
		}
		
		
		return outParam;
	}
	
	/**
	 * 재고조회<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon Ju
	 * @since	2020.03.09
	 */
	@Override
	public Parameters getStckInquList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "stckMgmtService.getStckInquList"));
		
		return outParam;
	}

	/**
	 * 팝업 품목조회<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon Ju
	 * @since	2020.03.09
	 */
	@Override
	public Parameters getItemInfoList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "stckMgmtService.getItemInfoList"));
		
		return outParam;
	}

}
