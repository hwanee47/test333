package moonsoft.nexacro.service.baim.impl;

import java.util.HashMap;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimSendCustMgmtService;

/**
 * The class baimSendCustMgmtService<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.13
 *
 */

@Service("baimSendCustMgmtService")
public class BaimSendCustMgmtServiceImpl implements BaimSendCustMgmtService {

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
	 * 발송고객 상세정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.13
	 */
	@Override
	public Parameters saveSendCustInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSave    = inParam.getDataSet("dsSave");
		
		int nRowCnt = dsSave.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		String strNewSendCustNo = "";
		
		for(int i=0; i<nRowCnt; i++) {
			
			int nRowType = dsSave.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 발송고객 중복체크
				paramMap.put("CUST_ID" 				, dsSave.getString(i, "CUST_ID"));				// 기업고객번호
				paramMap.put("CUST_MGMT_DLCM_CD" 	, dsSave.getString(i, "CUST_MGMT_DLCM_CD"));	// 고객관리거래처코드
				
				chkCnt = (int) nexacroService.queryForObject(paramMap, "baimSendCustMgmtService.checkSendCustId");
				
				if(chkCnt > 0){
					throw new NexaUserException("이미 등록된 협력사코드 입니다.");
				}
				
				
				// 고객 중복체크
				//paramMap.put("SEND_CUST_NO" 	, dsSave.getString(i, "SEND_CUST_NO"));	// 고객관리거래처코드
				
				/*chkCnt = (int) nexacroService.queryForObject(paramMap, "baimSendCustMgmtService.checkCustId");
				
				if(chkCnt > 0){
					throw new NexaUserException("이미 등록된 발송고객번호 입니다.");
				}*/
				
				// 발송고객번호 자동 채번 
				strNewSendCustNo = (String) nexacroService.queryForObject(null, "baimSendCustMgmtService.getNextSendCustNo");
				
				dsSave.set(i, "SEND_CUST_NO", strNewSendCustNo);
				
				// 발송고객(TB_BAIM_SEND_CUST_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimSendCustMgmtService.insertSendCustInfo");
				
				// 고객 (TB_BAIM_CUST_LIST_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimSendCustMgmtService.insertCustListInfo");
				
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				
				// 계약등록된 건수가 1건이상이고 집하점소가 변경될 경우 고정거래처 계약테이블(TB_BAIM_FIXED_DLCM_CNTR_C) 집하점소 코드 UPDATE 처리.
				paramMap.put("CUST_ID" 				, dsSave.getString(i, "CUST_ID"));				// 기업고객번호
				paramMap.put("CUST_MGMT_DLCM_CD" 	, dsSave.getString(i, "CUST_MGMT_DLCM_CD"));	// 고객관리거래처코드
				
				// 계약등록건수 조회
				HashMap<String, String> resultMap = (HashMap<String, String>) nexacroService.queryForObject(paramMap, "baimSendCustMgmtService.getRegCntrCnt");
				
				int resultCnt = Integer.parseInt(String.valueOf(resultMap.get("CNT")));		// 계약등록건수
				String dbPickupBranCd = resultMap.get("PICKUP_BRAN_CD");	// DB에 등록되어있는 집하점소코드
				String inputPickupBranCd = dsSave.getString(i, "PICKUP_BRAN_CD");	// 화면에서 입력한 집하점소코드
				
				if(resultCnt > 0){
					
					// 집하점소를 변경한 경우
					if( !dbPickupBranCd.equals(inputPickupBranCd) ){
						
						// 고정거래처계약(TB_BAIM_FIXED_DLCM_CNTR_C) 수정
						nexacroService.updateDataSet(dsSave, i, "baimSendCustMgmtService.updateCntrInfo");
						
					}
					
				}
				
				
				// 발송고객(TB_BAIM_SEND_CUST_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimSendCustMgmtService.updateSendCustInfo");
				
				// 고객 (TB_BAIM_CUST_LIST_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimSendCustMgmtService.updateCustListInfo");
				
				
				
				
			}
		}
		
		return outParam;
	}


	
	
}
