package moonsoft.nexacro.service.baim.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
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
import moonsoft.nexacro.service.baim.BaimCntrMgmtService;

/**
 * The class BaimCntrMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.17
 *
 */

@Service("baimCntrMgmtService")
public class BaimCntrMgmtServiceImpl implements BaimCntrMgmtService {

	/**
	 * Logger<br>
	 * <br>
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	
	
	/**
	 * 계약 등록 정보 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.19
	 */
	@Override
	public Parameters getCntrInfo(Parameters inParam) throws Exception {
		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		// 계약정보 조회
		outParam.setOutDatasetList("ds1", nexacroService.queryForDataset(srcParam, "baimCntrMgmtService.getCntrInfo"));
		
		// 계약단가 등록 정보 조회
		outParam.setOutDatasetList("ds2", nexacroService.queryForDataset(srcParam, "baimCntrMgmtService.getItemPerCntrUpriceList"));
		
		return outParam;
	}
	
	
	/**
	 * 계약 리스트,기업정보 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	@Override
	public Parameters getCntrInfoList(Parameters inParam) throws Exception {

		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		// 계약리스트
		outParam.setOutDatasetList("ds1", nexacroService.queryForDataset(srcParam, "baimCntrMgmtService.getCntrInfoList"));
		
		// 기업정보
		outParam.setOutDatasetList("ds2", nexacroService.queryForDataset(srcParam, "baimCntrMgmtService.getEntrpInfo"));
		
		return outParam;
	}
	
	
	/**
	 * 계약 상세정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	@Override
	public Parameters saveCntrInfoList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSave    = inParam.getDataSet("dsSave");
		
		int nRowCnt = dsSave.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			int nRowType = dsSave.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 계약 시작일 중복체크
				paramMap.put("CUST_ID" 				, dsSave.getString(i, "CUST_ID"));				// 기업고객번호
				paramMap.put("CUST_MGMT_DLCM_CD" 	, dsSave.getString(i, "CUST_MGMT_DLCM_CD"));	// 고객관리거래처코드
				paramMap.put("CNTR_START_YMD" 		, dsSave.getString(i, "CNTR_START_YMD"));		// 계약시작일자
				
				chkCnt = (int) nexacroService.queryForObject(paramMap, "baimCntrMgmtService.checkCntrStartYmd");
				
				if(chkCnt > 0){
					SimpleDateFormat dt = new SimpleDateFormat("yyyyMMdd");
					Date date = dt.parse(dsSave.getString(i, "CNTR_START_YMD"));
					
					throw new NexaUserException("계약 시작일("+dt.format(date)+")이 중복됩니다.");
				}
				
				
				// 고정거래처계약(TB_BAIM_FIXED_DLCM_CNTR_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimCntrMgmtService.insertCntrInfo");
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){

				// 고정거래처계약(TB_BAIM_FIXED_DLCM_CNTR_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimCntrMgmtService.updateCntrInfo");
			}
		}
		
		return outParam;
	}


	/**
	 * 계약 갱신<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.19
	 */
	@Override
	public Parameters saveRenewalCntr(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsDetail    = inParam.getDataSet("ds1");
		int nRowCnt = dsDetail.getRowCount();
		
		HashMap<String, String> paramMap = new HashMap<String, String>();
		HashMap<String, Object> paramMap2 = null;
		for(int i=0; i<nRowCnt; i++) {
			// 계약 시작일 중복체크
			paramMap.put("CUST_ID" 				, dsDetail.getString(i, "CUST_ID"));				// 기업고객번호
			paramMap.put("CUST_MGMT_DLCM_CD" 	, dsDetail.getString(i, "CUST_MGMT_DLCM_CD"));		// 고객관리거래처코드
			
			// 갱신일자 조회
			paramMap2 = (HashMap<String, Object>) nexacroService.queryForObject(paramMap, "baimCntrMgmtService.getRenewalYmd");
			paramMap2.put("CUST_ID" 			, dsDetail.getString(i, "CUST_ID"));				// 기업고객번호
			paramMap2.put("CUST_MGMT_DLCM_CD" 	, dsDetail.getString(i, "CUST_MGMT_DLCM_CD"));		// 고객관리거래처코드
			paramMap2.put("gv_userId"			, dsDetail.getString(i, "gv_userId"));				// 작업자
			
			// 고정거래처계약(TB_BAIM_FIXED_DLCM_CNTR_C) 추가
			nexacroService.insertMap(paramMap2, "baimCntrMgmtService.insertCntrInfo2");
			
			// 품목별 계약단가(TB_BAIM_ITEM_PER_CNTR_UPRICE_C) 추가
			nexacroService.insertMap(paramMap2, "baimCntrMgmtService.insertItemPerCntrUprice");
			
			// 계약품목(TB_BAIM_CNTR_ITEM_C) 추가
			nexacroService.insertMap(paramMap2, "baimCntrMgmtService.insertCntrItem");
		}
		
		
		return outParam;
	}


	


	
	
}
