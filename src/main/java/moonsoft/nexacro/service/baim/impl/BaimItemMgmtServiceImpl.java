package moonsoft.nexacro.service.baim.impl;

import java.util.HashMap;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimItemMgmtService;

/**
 * The class BaimItemMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.18
 *
 */

@Service("baimItemMgmtService")
public class BaimItemMgmtServiceImpl implements BaimItemMgmtService {

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
	 * 품목 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.18
	 */
	@Override
	public Parameters saveItemInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSave    = inParam.getDataSet("dsSave");
		
		int nRowCnt = dsSave.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			int nRowType = dsSave.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 계약 품목 (TB_BAIM_CNTR_ITEM_C) 등록
				nexacroService.insertDataSet(dsSave, i, "baimItemMgmtService.insertItemInfo");
				
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){

				// 계약 품목(TB_BAIM_CNTR_ITEM_C) 수정
				nexacroService.updateDataSet(dsSave, i, "baimItemMgmtService.updateItemInfo");
			}
		}
		
		return outParam;
	}


	
	
}
