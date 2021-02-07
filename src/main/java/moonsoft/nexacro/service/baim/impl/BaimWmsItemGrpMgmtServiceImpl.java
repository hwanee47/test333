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
import moonsoft.nexacro.service.baim.BaimWmsItemGrpMgmtService;

/**
 * The class BaimWmsItemMgmtService<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.03.08
 *
 */

@Service("baimWmsItemGrpMgmtService")
public class BaimWmsItemGrpMgmtServiceImpl implements BaimWmsItemGrpMgmtService {

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
	 * 품목그룹 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	@Override
	public Parameters getItemGrpList(Parameters inParam) throws Exception {

		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(srcParam, "baimWmsItemGrpMgmtService.getItemGrpList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsItemGrpList", resultDs);
		}
		return outParam;
	}
	
	/**
	 * 품목정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.08
	 */
	@Override
	public Parameters saveItemGrpList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsItemGrpList    = inParam.getDataSet("dsItemGrpList");
		
		int nRowCnt = dsItemGrpList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {

			String strChk = dsItemGrpList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsItemGrpList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 중복조회
				paramMap.put("ITEM_GRP_CD" , dsItemGrpList.getString(i, "ITEM_GRP_CD"));
				chkCnt = (int) nexacroService.queryForObject(paramMap, "baimWmsItemGrpMgmtService.checkDupItemGrp");
				
				if(chkCnt > 0){
					String errMsg = dsItemGrpList.getString(i, "ITEM_GRP_CD")+"는 중복된 품목그룹코드 입니다.";
					errMsg += "\n☞ [품목그룹코드] : "+dsItemGrpList.getString(i, "ITEM_GRP_CD");
					
					throw new NexaUserException(errMsg);
				}
				
				
				// 품목그룹관리(TB_WMS_ITEM_GRP_C) 추가
				nexacroService.insertDataSet(dsItemGrpList, i, "baimWmsItemGrpMgmtService.insertItemGrpInfo");
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 품목그룹관리(TB_WMS_ITEM_GRP_C) 수정
				nexacroService.updateDataSet(dsItemGrpList, i, "baimWmsItemGrpMgmtService.updateItemGrpInfo");
				
			}
		}
		
		return outParam;
	}
	
	/**
	 * 품목그룹정보 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.09
	 */
	@Override
	public Parameters deleteItemGrpList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsItemGrpList    = inParam.getDataSet("dsItemGrpList");
		
		int nRowCnt = dsItemGrpList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsItemGrpList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsItemGrpList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 품목그룹관리(TB_WMS_ITEM_GRP_C) 수정
				nexacroService.deleteDataSet(dsItemGrpList, i, "baimWmsItemGrpMgmtService.deleteItemGrp");
				
			}
		}
		
		return outParam;
	}

}
