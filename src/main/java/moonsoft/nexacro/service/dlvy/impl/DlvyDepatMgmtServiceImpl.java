package moonsoft.nexacro.service.dlvy.impl;

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
import moonsoft.nexacro.service.dlvy.DlvyDepatMgmtService;


@Service("dlvyDepatMgmtService")
public class DlvyDepatMgmtServiceImpl implements DlvyDepatMgmtService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;


	/**
	 * 집배출발 조회
	 */
	@Override
	public Parameters getDlvyDepatList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		
		DataSet resultDs = nexacroService.queryForDataset(srcParam, "dlvyDepatMgmtService.getDlvyDepatList");
		
		if(resultDs.getRowCount() > 0){
			outParam.setOutDatasetList("dsList", resultDs);
		}
		return outParam;
	}

	/**
	 * 집배출발 저장
	 */
	@Override
	public Parameters saveDepatInfo(Parameters inParam) throws Exception {
		final Parameters outParam = inParam.getClass().newInstance();
	
		
		DataSet dsSaveList    = inParam.getDataSet("dsSaveList");
		DataSet dsSaveInfo    = inParam.getDataSet("dsSaveInfo");
		
		int nRowType = 0;
		int dupCnt = 0;
		int nRowCnt = dsSaveList.getRowCount();
		
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++){
		
			nRowType = dsSaveList.getRowType(i);
			
			dsSaveList.set(i, "WORK_YMD", dsSaveInfo.getString(0, "WORK_YMD"));
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				paramMap.put("WAYBILL_NO", dsSaveInfo.getString(i, "WAYBILL_NO"));
				paramMap.put("WORK_YMD", dsSaveInfo.getString(i, "WORK_YMD"));
				paramMap.put("CRG_ST", dsSaveInfo.getString(i, "CRG_ST"));
				
				dupCnt = (int) nexacroService.queryForObject(paramMap, "dlvyDepatMgmtService.getChkDepatDupl");
				
				if(dupCnt >0){
					String strErrMsg = "해당 운송장번호는 중복입니다.";
					strErrMsg += "\n☞ 운송장번호 : "+dsSaveInfo.getString(i, "WAYBILL_NO");
					throw new NexaUserException(strErrMsg);
					
				}
				
				nexacroService.insertDataSet(dsSaveList, i, "dlvyDepatMgmtService.insertDepatInfo");
			}
			else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				nexacroService.updateDataSet(dsSaveList, i, "dlvyDepatMgmtService.updateDepatInfo");
			}
		}

		//중복체크
		//duplCnt = (int) nexacroService.queryForObject(srcParam,"dlvyDepatMgmtService.getChkDepatDupl");
		
		/*if(duplCnt == 0) {
			//INSERT
			nexacroService.insertMap(srcParam, "dlvyDepatMgmtService.insertDepatInfo");
		}else {
			//UPDATE
			nexacroService.insertMap(srcParam, "dlvyDepatMgmtService.updateDepatInfo");
		}*/
		
		//String msg = "";
		//if(duplCnt > 0) msg = "운송장번호 중복입니다.";
		//resultDs.set(0,"MSG",msg);
		//outParam.setOutDatasetList("dsSaveResult",resultDs);
		return outParam;
	}
	/*@Override
	public Parameters saveDepatInfo_20200610(Parameters inParam) throws Exception {
		final Parameters outParam = inParam.getClass().newInstance();
		int duplCnt = 0;
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		///DataSet resultDs = new DataSet("dsSaveResult");
		//resultDs.addColumn("MSG" 	,DataTypes.STRING, 100);
		//resultDs.newRow();

		//중복체크
		duplCnt = (int) nexacroService.queryForObject(srcParam,"dlvyDepatMgmtService.getChkDepatDupl");
		
		if(duplCnt == 0) {
			//INSERT
			nexacroService.insertMap(srcParam, "dlvyDepatMgmtService.insertDepatInfo");
		}else {
			//UPDATE
			nexacroService.insertMap(srcParam, "dlvyDepatMgmtService.updateDepatInfo");
		}
		
		//String msg = "";
		//if(duplCnt > 0) msg = "운송장번호 중복입니다.";
		//resultDs.set(0,"MSG",msg);
		//outParam.setOutDatasetList("dsSaveResult",resultDs);
		return outParam;
	}*/

	/**
	 * 집배출발 삭제
	 */
	@Override
	public Parameters deleteDepatInfo(Parameters inParam) throws Exception {
		final Parameters outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		//삭제 전 _H insert
		nexacroService.insertMap(srcParam, "dlvyDepatMgmtService.insertDepatInfo_H");
		//삭제
		nexacroService.deleteMap(srcParam, "dlvyDepatMgmtService.deleteDepatInfo");
		return outParam;
	}

}
