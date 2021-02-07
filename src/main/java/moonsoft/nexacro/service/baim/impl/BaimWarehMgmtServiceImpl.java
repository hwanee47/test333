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
import moonsoft.nexacro.service.baim.BaimWarehMgmtService;

/**
 * The class BaimWarehMgmtService<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.03.04
 *
 */

@Service("baimWarehMgmtService")
public class BaimWarehMgmtServiceImpl implements BaimWarehMgmtService {

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
	 * 창고 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.15
	 */
	@Override
	public Parameters getWarehList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimWarehMgmtService.getWarehList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsWarehList", resultDs);
		}

		return outParam;
	}
	
	
	/**
	 * 창고정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	@Override
	public Parameters saveWarehList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsWarehList    = inParam.getDataSet("dsWarehList");
		
		int nRowCnt = dsWarehList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {

			String strChk = dsWarehList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsWarehList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 창고코드 중복 체크.
				paramMap.put("WAREH_CD", dsWarehList.getString(i, "WAREH_CD"));
				chkCnt = (Integer)nexacroService.queryForObject(paramMap, "baimWarehMgmtService.checkDupWarehCd");
				
				if(chkCnt > 0){
					String errMsg = dsWarehList.getString(i, "WAREH_CD")+"는 중복된 창고코드 입니다.";
					errMsg += "\n☞ [창고코드] : "+dsWarehList.getString(i, "WAREH_CD");
					
					throw new NexaUserException(errMsg);
				}
				
				
				// 창고관리마스터(TB_WMS_WAREH_MGMT_MST_C) 추가
				nexacroService.insertDataSet(dsWarehList, i, "baimWarehMgmtService.insertWarehInfo");
				
				
				dsWarehList.set(i, "USER_ID", dsWarehList.getString(i, "gv_userId"));
				
				// 창고권한 생성.
				nexacroService.insertDataSet(dsWarehList, i, "baimUserMgmtService.insertWarehAuthList");
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 창고관리마스터(TB_WMS_WAREH_MGMT_MST_C) 수정
				nexacroService.updateDataSet(dsWarehList, i, "baimWarehMgmtService.updateWarehInfo");
				
			}
		}
		
		return outParam;
	}
	
	/**
	 * 창고정보 삭제(사용여부 업데이트처리)<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.04
	 */
	@Override
	public Parameters deleteWarehList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsWarehList    = inParam.getDataSet("dsWarehList");
		
		int nRowCnt = dsWarehList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsWarehList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsWarehList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 창고관리마스터(TB_WMS_WAREH_MGMT_MST_C) 수정
				nexacroService.updateDataSet(dsWarehList, i, "baimWarehMgmtService.updateWarehUseYn");
				
			}
		}
		
		return outParam;
	}

}
