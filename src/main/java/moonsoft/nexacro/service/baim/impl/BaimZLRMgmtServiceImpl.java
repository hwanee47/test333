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
import moonsoft.nexacro.service.baim.BaimZLRMgmtService;

/**
 * The class BaimZLRMgmtService<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.03.04
 *
 */

@Service("baimZLRMgmtService")
public class BaimZLRMgmtServiceImpl implements BaimZLRMgmtService {

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
	 * 존 목록을 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	@Override
	public Parameters getZnList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimZLRMgmtService.getZnList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsZnList", resultDs);
		}

		return outParam;
	}
	
	/**
	 * 로케이션 목록을 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	@Override
	public Parameters getLocList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSubSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimZLRMgmtService.getLocList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsLocList", resultDs);
		}
		
		return outParam;
	}
	
	/**
	 * 랙 목록을 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	@Override
	public Parameters getRackList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSubSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimZLRMgmtService.getRackList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsRackList", resultDs);
		}
		
		return outParam;
	}
	
	
	/**
	 * 존/로케이션/랙 정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	@Override
	public Parameters saveZLRList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsZoneList    = inParam.getDataSet("dsZnList");
		DataSet dsLocList    = inParam.getDataSet("dsLocList");
		DataSet dsRackList    = inParam.getDataSet("dsRackList");
		
		int nRowCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		int chkCnt = 0;
		if(dsZoneList != null){
			nRowCnt = dsZoneList.getRowCount();
			
			/** 존 저장 **/
			for(int i=0; i<nRowCnt; i++) {
	
				String strChk = dsZoneList.getString(i, "CHK");
		
				int nRowType = dsZoneList.getRowType(i);
				
				if(nRowType == DataSet.ROW_TYPE_INSERTED){
					
					// 로케이션 중복조회
					paramMap.put("WAREH_CD" , dsZoneList.getString(i, "WAREH_CD"));
					paramMap.put("ZN_CD" , dsZoneList.getString(i, "ZN_CD"));
					chkCnt = (int) nexacroService.queryForObject(paramMap, "baimZLRMgmtService.checkDupZn");
					
					if(chkCnt > 0){
						String errMsg = dsZoneList.getString(i, "ZN_CD")+"는 중복된 로케이션코드 입니다.";
						errMsg += "\n☞ [창고코드] : "+dsZoneList.getString(i, "WAREH_CD");
						
						throw new NexaUserException(errMsg);
					}
					
					// 존마스터(TB_WMS_ZN_MST_C) 추가
					nexacroService.insertDataSet(dsZoneList, i, "baimZLRMgmtService.insertZoneInfo");
					
				}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
					
					if(!"1".equals(strChk)) continue;
					
					// 존마스터(TB_WMS_ZN_MST_C) 수정
					nexacroService.updateDataSet(dsZoneList, i, "baimZLRMgmtService.updateZoneInfo");
					
				}
			}
		}
		
		
		if(dsLocList != null){
			/** 로케이션 저장 **/
			nRowCnt = dsLocList.getRowCount();
			
			for(int i=0; i<nRowCnt; i++) {
	
				String strChk = dsLocList.getString(i, "CHK");
		
				int nRowType = dsLocList.getRowType(i);
				
				if(nRowType == DataSet.ROW_TYPE_INSERTED){
					
					// 로케이션 중복조회
					paramMap.put("WAREH_CD" , dsLocList.getString(i, "WAREH_CD"));
					paramMap.put("ZN_CD" , dsLocList.getString(i, "ZN_CD"));
					paramMap.put("LOC_CD" , dsLocList.getString(i, "LOC_CD"));
					chkCnt = (int) nexacroService.queryForObject(paramMap, "baimZLRMgmtService.checkDupLoc");
					
					if(chkCnt > 0){
						String errMsg = dsLocList.getString(i, "LOC_CD")+"는 중복된 로케이션코드 입니다.";
						errMsg += "\n☞ [창고코드] : "+dsLocList.getString(i, "WAREH_CD");
						errMsg += "\n☞ [존] : "+dsLocList.getString(i, "ZN_CD");
						
						throw new NexaUserException(errMsg);
					}
					
					// 로케이션마스터(TB_WMS_LOC_MGMT_C) 추가
					nexacroService.insertDataSet(dsLocList, i, "baimZLRMgmtService.insertLocInfo");
					
				}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
					
					if(!"1".equals(strChk)) continue;
					
					// 로케이션마스터(TB_WMS_LOC_MGMT_C) 수정
					nexacroService.updateDataSet(dsLocList, i, "baimZLRMgmtService.updateLocInfo");
					
				}
			}
		}
		
		
		if(dsRackList != null){
			/** 랙 저장 **/
			nRowCnt = dsRackList.getRowCount();
			
			for(int i=0; i<nRowCnt; i++) {
				
				String strChk = dsRackList.getString(i, "CHK");
				
				int nRowType = dsRackList.getRowType(i);
				
				if(nRowType == DataSet.ROW_TYPE_INSERTED){
					
					// 랙 중복조회
					paramMap.put("WAREH_CD" , dsRackList.getString(i, "WAREH_CD"));
					paramMap.put("ZN_CD" , dsRackList.getString(i, "ZN_CD"));
					paramMap.put("LOC_CD" , dsRackList.getString(i, "LOC_CD"));
					paramMap.put("RACK_CD" , dsRackList.getString(i, "RACK_CD"));
					chkCnt = (int) nexacroService.queryForObject(paramMap, "baimZLRMgmtService.checkDupRack");
					
					if(chkCnt > 0){
						String errMsg = dsRackList.getString(i, "RACK_CD")+"는 중복된 랙코드 입니다.";
						errMsg += "\n☞ [창고코드] : "+dsRackList.getString(i, "WAREH_CD");
						errMsg += "\n☞ [존] : "+dsRackList.getString(i, "ZN_CD");
						errMsg += "\n☞ [로케이션] : "+dsRackList.getString(i, "LOC_CD");
						
						throw new NexaUserException(errMsg);
					}
					
					
					// 랙마스터(TB_WMS_RACK_MGMT_C) 추가
					nexacroService.insertDataSet(dsRackList, i, "baimZLRMgmtService.insertRackInfo");
					
				}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
					
					if(!"1".equals(strChk)) continue;
					
					// 랙마스터(TB_WMS_RACK_MGMT_C) 수정
					nexacroService.updateDataSet(dsRackList, i, "baimZLRMgmtService.updateRackInfo");
					
				}
			}
		}
		
		return outParam;
	}


	@Override
	public Parameters deleteZnList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsZnList    = inParam.getDataSet("dsZnList");
		
		int nRowCnt = dsZnList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsZnList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsZnList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 존마스터(TB_WMS_ZN_MST_C) 삭제
				nexacroService.updateDataSet(dsZnList, i, "baimZLRMgmtService.deleteZnList");
				
				// 로케이션 삭제
				nexacroService.updateDataSet(dsZnList, i, "baimZLRMgmtService.deleteLocList");
				
				// 랙삭제
				nexacroService.updateDataSet(dsZnList, i, "baimZLRMgmtService.deleteRackList");
			}
		}
		
		return outParam;
	}
	
	@Override
	public Parameters deleteLocList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsLocList    = inParam.getDataSet("dsLocList");
		
		int nRowCnt = dsLocList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsLocList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsLocList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 로케이션마스터(TB_WMS_LOC_MGMT_C) 수정
				nexacroService.updateDataSet(dsLocList, i, "baimZLRMgmtService.deleteLocList");
				
				// 랙삭제
				nexacroService.updateDataSet(dsLocList, i, "baimZLRMgmtService.deleteRackList");
				
			}
		}
		
		return outParam;
	}
	
	@Override
	public Parameters deleteRackList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsRackList    = inParam.getDataSet("dsRackList");
		
		int nRowCnt = dsRackList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsRackList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsRackList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 랙마스터(TB_WMS_RACK_MGMT_C) 수정
				nexacroService.updateDataSet(dsRackList, i, "baimZLRMgmtService.deleteRackList");
				
			}
		}
		
		return outParam;
	}
	

}
