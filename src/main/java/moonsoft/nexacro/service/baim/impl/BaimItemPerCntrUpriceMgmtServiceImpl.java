package moonsoft.nexacro.service.baim.impl;

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
import moonsoft.nexacro.service.baim.BaimItemPerCntrUpriceMgmtService;

/**
 * The class BaimItemPerCntrUpriceMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.17
 *
 */

@Service("baimItemPerCntrUpriceMgmtService")
public class BaimItemPerCntrUpriceMgmtServiceImpl implements BaimItemPerCntrUpriceMgmtService {

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
	 * 품목별 계약단가 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	@Override
	public Parameters getItemPerCntrUpriceInfoList(Parameters inParam) throws Exception {

		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		outParam.setOutDatasetList("ds1", nexacroService.queryForDataset(srcParam, "baimItemPerCntrUpriceMgmtService.getItemPerCntrUpriceInfoList"));
		
		return outParam;
	}
	
	
	/**
	 * 품목별 계약단가 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	@Override
	public Parameters saveItemPerCntrUpriceInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSave    = inParam.getDataSet("dsSave");
		
		int nRowCnt = dsSave.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			int nRowType = dsSave.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 중복체크
				paramMap.put("CUST_ID" , dsSave.getString(i, "CUST_ID"));
				paramMap.put("CUST_MGMT_DLCM_CD" , dsSave.getString(i, "CUST_MGMT_DLCM_CD"));
				paramMap.put("CNTR_START_YMD" , dsSave.getString(i, "CNTR_START_YMD"));
				paramMap.put("CNTR_ITEM_CD" , dsSave.getString(i, "CNTR_ITEM_CD"));
				chkCnt = (int) nexacroService.queryForObject(paramMap, "baimItemPerCntrUpriceMgmtService.checkDup");
				
				if(chkCnt > 0){
					throw new NexaUserException("이미 등록된 품목 단가 입니다.");
				}
				
				
				// 품목별 계약단가(TB_BAIM_ITEM_PER_CNTR_UPRICE_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimItemPerCntrUpriceMgmtService.insertItemPerCntrUpriceInfo");
				
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){

				// 품목별 계약단가(TB_BAIM_ITEM_PER_CNTR_UPRICE_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimItemPerCntrUpriceMgmtService.updateItemPerCntrUpriceInfo");
			}
		}
		
		return outParam;
	}


	


	
	
}
