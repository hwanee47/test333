package moonsoft.nexacro.service.baim.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimWmsCustMgmtService;

/**
 * The class BaimCodeMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Jin Seon Ju
 * @version	1.0
 * @since	2020.02.27
 *
 */

@Service("baimWmsCustMgmtService")
public class BaimWmsCustMgmtServiceImpl implements BaimWmsCustMgmtService{

	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 고객 리스트 조회
	 */
	@Override
	public Parameters getWmsCustList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimWmsCustMgmtService.getWmsCustList"));
		
		return outParam;
	}

	/**
	 * 고객 정보 저장
	 */
	@Override
	public Parameters saveWmsCustInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		HashMap<String, String> paramMap = new HashMap<String, String>();
		DataSet dsSave    = inParam.getDataSet("dsSave");
		
		int nRowCnt = dsSave.getRowCount();
		for(int i=0; i<nRowCnt; i++) {
			paramMap.put("SHIPPER_ID" , dsSave.getString(i, "SHIPPER_ID"));
			String insertYn = dsSave.getString(i, "INSERT_YN");
			if(insertYn.equals("Y")){
				int chkCnt = (int) nexacroService.queryForObject(paramMap, "baimWmsCustMgmtService.checkShipperId");
				
				if(chkCnt == 0){
				// WMS고객(TB_WMS_CUST_MGMT_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimWmsCustMgmtService.insertWmsCustInfo");
				
				// 기업고객(TB_BAIM_ENTER_CUST_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimEntrpCustMgmtService.insertEnterCustInfo");
				
				// 고객(TB_BAIM_CUST_LIST_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimEntrpCustMgmtService.insertCustInfo");
				
				// 발송고객(TB_BAIM_SEND_CUST_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimEntrpCustMgmtService.insertSendCustInfo");
				
				}else{
					throw new NexaUserException("이미 등록된 고객사입니다.");
				}
			}else if(insertYn.equals("N")){
				// WMS고객(TB_WMS_CUST_MGMT_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimWmsCustMgmtService.updateWmsCustInfo");
				
				// 기업고객(TB_BAIM_ENTER_CUST_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimEntrpCustMgmtService.updateEnterCustInfo");
				
				// 고객(TB_BAIM_CUST_LIST_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimEntrpCustMgmtService.updateCustInfo");
				
				// 발송고객(TB_BAIM_SEND_CUST_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimEntrpCustMgmtService.updateSendCustInfo");
			}
		}
		
		return outParam;
	}
	

}
