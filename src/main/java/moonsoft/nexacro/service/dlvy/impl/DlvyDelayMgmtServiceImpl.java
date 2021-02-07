package moonsoft.nexacro.service.dlvy.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.dlvy.DlvyDelayMgmtService;

@Service("dlvyDelayMgmtService")
public class DlvyDelayMgmtServiceImpl implements DlvyDelayMgmtService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 미배송사유 조회
	 */
	@Override
	public Parameters getDlvyDelayList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "dlvyDelayMgmtService.getDlvyDelayList"));
		
		return outParam;
	}

	/**
	 * 미배송사유 저장
	 */
	@Override
	public Parameters saveDlvyDelayInfo(Parameters inParam) throws Exception {
		final Parameters outParam = inParam.getClass().newInstance();
		int duplCnt = 0;
		Map<String,Object> 	srcParam = inParam.getData("ds1");

		//중복체크
		duplCnt = (int) nexacroService.queryForObject(srcParam,"dlvyDelayMgmtService.getChkDelayDupl");
		
		
		if(duplCnt == 0) {
			//INSERT
			nexacroService.insertMap(srcParam, "dlvyDelayMgmtService.insertDelayInfo");
		}else {
			//UPDATE
			nexacroService.insertMap(srcParam, "dlvyDelayMgmtService.updateDelayInfo");
		}
		return outParam;
	}

	/**
	 * 미배송사유 삭제
	 */
	@Override
	public Parameters deleteDlvyDelayInfo(Parameters inParam) throws Exception {
		final Parameters outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		//삭제
		nexacroService.deleteMap(srcParam, "dlvyDelayMgmtService.deleteDelayInfo");
		return outParam;
		//return null;
	}

	/**
	 * 미배송 현황조회
	 */
	@Override
	public Parameters getDlvyDelayStsList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		String strDiv = (String)srcParam.get("DS_DIV");
		
		if(strDiv.equals("01")){		//운송장등록기준
			outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "dlvyDelayMgmtService.getDlvyDelayStsListBywabillNo"));
		}else if(strDiv.equals("02")) {	//배송출발등록기준
			outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "dlvyDelayMgmtService.getDlvyDelayStsListByDepatScan"));
		}else if(strDiv.equals("03")) {	//사유등록기준
			outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "dlvyDelayMgmtService.getDlvyDelayStsListByDelayRsn"));
		}
		
		return outParam;
	}

	/**
	 * 미배송 현황 상세조회
	 */
	@Override
	public Parameters getDlvyDelayStsDetailList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		String strDiv = (String)srcParam.get("DS_DIV");
		
		if(strDiv.equals("01")){		//운송장등록기준
			outParam.setOutDatasetList("dsDetailList", nexacroService.queryForDataset(srcParam, "dlvyDelayMgmtService.getDlvyDelayDetailByWaybillNo"));
		}else if(strDiv.equals("02")) {	//배송출발등록기준
			outParam.setOutDatasetList("dsDetailList", nexacroService.queryForDataset(srcParam, "dlvyDelayMgmtService.getDlvyDelayStstDetailByDepatScan"));
		}else if(strDiv.equals("03")) {	//사유등록기준
			outParam.setOutDatasetList("dsDetailList", nexacroService.queryForDataset(srcParam, "dlvyDelayMgmtService.getDlvyDelayStsDetailByDelayRsn"));
		}
		
		return outParam;
	}

}
