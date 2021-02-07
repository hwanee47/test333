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
import moonsoft.nexacro.service.baim.BaimWmsItemMgmtService;

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

@Service("baimWmsItemMgmtService")
public class BaimWmsItemMgmtServiceImpl implements BaimWmsItemMgmtService {

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
	 * 품목 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.15
	 */
	@Override
	public Parameters getItemList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimWmsItemMgmtService.getItemList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsItemList", resultDs);
		}

		return outParam;
	}
	
	
	/**
	 * 품목 바코드 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.08.20
	 */
	@Override
	public Parameters getItemBarcodeList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimWmsItemMgmtService.getItemBarcodeList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsItemBarcodeList", resultDs);
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
	public Parameters saveItemList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsItemList    = inParam.getDataSet("dsItemList");
		DataSet dsItemBarcodeList    = inParam.getDataSet("dsItemBarcodeList");
		
		int nRowCnt = dsItemList.getRowCount();
		int nRowCnt2 = dsItemBarcodeList.getRowCount();
		
		int chkCnt = 0;
		int nRowType = 0;
		String strChk = "";
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {

			strChk = dsItemList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			nRowType = dsItemList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 중복조회
				paramMap.put("SHIPPER_ID" , dsItemList.getString(i, "SHIPPER_ID"));
				paramMap.put("ITEM_CD" , dsItemList.getString(i, "ITEM_CD"));
				chkCnt = (int) nexacroService.queryForObject(paramMap, "baimWmsItemMgmtService.checkDupItem");
				
				if(chkCnt > 0){
					String errMsg = dsItemList.getString(i, "ITEM_CD")+"는 중복된 품목코드 입니다.";
					errMsg += "\n☞ [화주ID] : "+dsItemList.getString(i, "SHIPPER_ID");
					
					throw new NexaUserException(errMsg);
				}
				
				
				// 품목관리(TB_WMS_ITEM_MGMT_C) 추가
				nexacroService.insertDataSet(dsItemList, i, "baimWmsItemMgmtService.insertItemInfo");
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 품목관리(TB_WMS_ITEM_MGMT_C) 수정
				nexacroService.updateDataSet(dsItemList, i, "baimWmsItemMgmtService.updateItemInfo");
				
			}
			
			
			// 품목바코드 추가
			for(int j=0; j<nRowCnt2; j++){
				String strChk2 = dsItemBarcodeList.getString(j, "CHK");
				
				if(!"1".equals(strChk2)) continue;
				
				nRowType = dsItemBarcodeList.getRowType(j);
				
				if(nRowType == DataSet.ROW_TYPE_INSERTED){
					
					// 중복조회
					paramMap.put("SHIPPER_ID" , dsItemBarcodeList.getString(j, "SHIPPER_ID"));
					paramMap.put("ITEM_CD" , dsItemBarcodeList.getString(j, "ITEM_CD"));
					paramMap.put("ITEM_BARCODE" , dsItemBarcodeList.getString(j, "ITEM_BARCODE"));
					chkCnt = (int) nexacroService.queryForObject(paramMap, "baimWmsItemMgmtService.checkDupItemBarcode");
					
					if(chkCnt > 0){
						String errMsg = dsItemBarcodeList.getString(j, "ITEM_BARCODE")+"는 중복된 품목바코드 입니다.";
						errMsg += "\n☞ [화주ID] : "+dsItemBarcodeList.getString(j, "SHIPPER_ID");
						errMsg += "\n☞ [품목코드] : "+dsItemBarcodeList.getString(j, "ITEM_CD");
						
						throw new NexaUserException(errMsg);
					}
					
					// 품목바코드(TB_WMS_ITEM_BRCD_C) 추가
					nexacroService.insertDataSet(dsItemBarcodeList, j, "baimWmsItemMgmtService.insertItemBarcodeInfo");
					
				}
				
			}
			
		}
		
		return outParam;
	}
	
	/**
	 * 품목정보 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.09
	 */
	@Override
	public Parameters deleteItemList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsItemList    = inParam.getDataSet("dsItemList");
		
		int nRowCnt = dsItemList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsItemList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsItemList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 품목관리(TB_WMS_ITEM_MGMT_C) 수정
				nexacroService.deleteDataSet(dsItemList, i, "baimWmsItemMgmtService.deleteItem");
				
				// 품목바코드(TB_WMS_ITEM_BRCD_C) 삭제
				nexacroService.deleteDataSet(dsItemList, i, "baimWmsItemMgmtService.deleteItemBarcode");
				
			}
		}
		
		return outParam;
	}
	
	
	/**
	 * 품목바코드 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.08.20
	 */
	@Override
	public Parameters deleteItemBarcodeList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsItemBarcodeList    = inParam.getDataSet("dsItemBarcodeList");
		
		int nRowCnt = dsItemBarcodeList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsItemBarcodeList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsItemBarcodeList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 품목바코드(TB_WMS_ITEM_BRCD_C) 삭제
				nexacroService.deleteDataSet(dsItemBarcodeList, i, "baimWmsItemMgmtService.deleteItemBarcode");
				
			}
		}
		
		return outParam;
	}

}
