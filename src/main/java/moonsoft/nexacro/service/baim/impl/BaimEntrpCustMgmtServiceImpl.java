package moonsoft.nexacro.service.baim.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.Variable;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimEntrpCustMgmtService;

/**
 * The class BaimEntrpCustMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.12
 *
 */

@Service("baimEntrpCustMgmtService")
public class BaimEntrpCustMgmtServiceImpl implements BaimEntrpCustMgmtService {

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
	 * 기업고객 상세정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.12
	 */
	@Override
	public Parameters saveEntrpCustInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSave    = inParam.getDataSet("dsSave");
		
		int nRowCnt = dsSave.getRowCount();
		
		
		int chkCnt = 0;
		String strChk = "";
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			strChk = dsSave.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsSave.getRowType(i);
			if(nRowType == DataSet.ROW_TYPE_INSERTED){

				
				// 고객번호 중복 체크
				paramMap.put("CUST_ID" , dsSave.getString(i, "CUST_ID"));
				chkCnt = (int) nexacroService.queryForObject(paramMap, "baimEntrpCustMgmtService.checkCustId");
				
				if(chkCnt > 0){
					throw new NexaUserException("이미 등록된 고객번호 입니다.");
				}
				
				
				// 사업자 등록번호 중복 체크.
				paramMap.put("ENTRP_REG_NO" , dsSave.getString(i, "ENTRP_REG_NO"));
				chkCnt = (int) nexacroService.queryForObject(paramMap, "baimEntrpCustMgmtService.checkEntrpRegNo");
				
				if(chkCnt > 0){
					throw new NexaUserException("이미 등록된 사업자등록번호 입니다.");
				}
				
				
				// 기업고객(TB_BAIM_ENTER_CUST_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimEntrpCustMgmtService.insertEnterCustInfo");
				
				// 고객(TB_BAIM_CUST_LIST_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimEntrpCustMgmtService.insertCustInfo");
				
				// 발송고객(TB_BAIM_SEND_CUST_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimEntrpCustMgmtService.insertSendCustInfo");
				
				
				// WMS쪽 기업고객(TB_WMS_CUST_MGMT_C) 저장
				nexacroService.insertDataSet(dsSave, i, "baimEntrpCustMgmtService.insertWMSCustInfo");
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 기업고객(TB_BAIM_ENTER_CUST_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimEntrpCustMgmtService.updateEnterCustInfo");
				
				// 고객(TB_BAIM_CUST_LIST_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimEntrpCustMgmtService.updateCustInfo");
				
				// 발송고객(TB_BAIM_SEND_CUST_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimEntrpCustMgmtService.updateSendCustInfo");
				
				// WMS쪽 기업고객(TB_WMS_CUST_MGMT_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimEntrpCustMgmtService.updateWMSCustInfo");
			}
			
		}
		
		
		return outParam;
	}


	
	
}
