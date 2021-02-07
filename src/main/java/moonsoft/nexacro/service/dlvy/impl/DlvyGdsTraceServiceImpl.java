package moonsoft.nexacro.service.dlvy.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.Variable;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.dlvy.DlvyGdsTraceService;

/**
 * The class DlvyGdsTraceServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.24
 *
 */

@Service("dlvyGdsTraceService")
public class DlvyGdsTraceServiceImpl implements DlvyGdsTraceService {

	/**
	 * Logger<br>
	 * <br>
	 * @author	Kim Jin Hwan
	 * @since	2020.02.24
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	
	/**
	 * 상품추적 정보 조회<br>
	 * <br>
	 * * 기본정보, 집배정보, 스캔내역을  조회 한다.<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.24
	 */
	@Override
	public Parameters getGdsTraceInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		
		// 운송장번호로 운송장등록마스터(TB_WAYBILL_REG_MST_C)에 정보가 있는지 확인.		
		int chkCnt = (int) nexacroService.queryForObject(srcParam, "dlvyGdsTraceService.checkWaybillReg");
		
		
		// 운송장정보
		if(chkCnt > 0){
			outParam.setOutDatasetList("ds1", nexacroService.queryForDataset(srcParam, "dlvyGdsTraceService.getBasicInfo1"));
		}
		// 접수정보
		else{
			outParam.setOutDatasetList("ds1", nexacroService.queryForDataset(srcParam, "dlvyGdsTraceService.getBasicInfo2"));
		}

		// 집배정보
		outParam.setOutDatasetList("ds2", nexacroService.queryForDataset(srcParam, "dlvyGdsTraceService.getPidvInfo"));
		
		// 스캔 내역
		outParam.setOutDatasetList("ds3", nexacroService.queryForDataset(srcParam, "dlvyGdsTraceService.getScanInfoList"));
		
		
		// 관련송장 조회
		outParam.setOutDatasetList("ds4", nexacroService.queryForDataset(srcParam, "dlvyGdsTraceService.getRlvtWaybillList"));
		
		
		// 운송장 최종상태 조회
		outParam.setOutDatasetList("ds5", nexacroService.queryForDataset(srcParam, "dlvyGdsTraceService.getWaybillLastStatus"));
		
		
		//q1=dlvyGdsTraceService.getBasicInfo q2=dlvyGdsTraceService.getPidvInfo q3=dlvyGdsTraceService.getScanInfoList
		
		//outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(map, "baimPidvZnMgmtService.getSubBranInfoList"));
		
		
		return outParam;
	}

		
	
}
