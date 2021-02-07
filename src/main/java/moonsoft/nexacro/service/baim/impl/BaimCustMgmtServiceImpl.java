package moonsoft.nexacro.service.baim.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimCustMgmtService;

/**
 * The class BaimCustMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.07.15
 *
 */

@Service("baimCustMgmtService")
public class BaimCustMgmtServiceImpl implements BaimCustMgmtService {

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
	 * 고객사 목록을 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.15
	 */
	@Override
	public Parameters getCustList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimCustMgmtService.getCustList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsList", resultDs);
		}

		return outParam;
	}
	
	/**
	 * 고객사 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.15
	 */
	@Override
	public Parameters saveCustList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsList    = inParam.getDataSet("dsList");
		
		int nRowCnt = dsList.getRowCount();
		
		int chkCnt = 0;
		String strChk = "";
		String strCpDv = "";
		String strCustId = "";
		
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {

			strChk = dsList.getString(i, "CHK");
			strCpDv = dsList.getString(i, "CP_DV");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				strCustId = (String) nexacroService.queryForObject(null, "baimCustMgmtService.getNextCustId");
				
				dsList.set(i, "CUST_ID", strCustId);
				
				// 배송쪽 고객테이블
				nexacroService.insertDataSet(dsList, i, "baimCustMgmtService.insertCust_1");
				
				// 창고쪽 고객테이블
				nexacroService.insertDataSet(dsList, i, "baimCustMgmtService.insertCust_2");
				
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){

				// 배송쪽 고객테이블
				nexacroService.updateDataSet(dsList, i, "baimCustMgmtService.updateCust_1");
				
				// 창고쪽 고객테이블
				nexacroService.updateDataSet(dsList, i, "baimCustMgmtService.updateCust_2");
				
			}
			
			
			// 고객사 구분이 공통 또는 배송고객이면  배송관련 테이블 insert/update
			if("CP01".equals(strCpDv) || "CP03".equals(strCpDv)){
				
			}
			
			// 고객(TB_BAIM_CUST_LIST_C) 저장
			nexacroService.insertDataSet(dsList, i, "baimCustMgmtService.mergeCustInfo");
			
			// 발송고객(TB_BAIM_SEND_CUST_C) 저장
			nexacroService.insertDataSet(dsList, i, "baimCustMgmtService.mergeSendCustInfo");
			
		}
		
		return outParam;
	}
	
	
	/**
	 * 고객사 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.15
	 */
	@Override
	public Parameters deleteCustList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsList    = inParam.getDataSet("dsList");
		
		int nRowCnt = dsList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				dsList.set(i, "DEL_YN", "Y");
				
				nexacroService.updateDataSet(dsList, i, "baimCustMgmtService.updateCustDelYn_1");
				nexacroService.updateDataSet(dsList, i, "baimCustMgmtService.updateCustDelYn_2");
				
				
			}
		}
		
		return outParam;
	}
	

}
