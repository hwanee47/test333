package moonsoft.nexacro.service.baim.impl;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimBranMgmtService;

/**
 * The class BaimBranMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.10
 *
 */

@Service("baimBranMgmtService")
public class BaimBranMgmtServiceImpl implements BaimBranMgmtService {

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
	 * 점소관리 저장<br>
	 * <br>
	 * * 점소정보를 저장한다.<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.12
	 */
	@Override
	public Parameters saveBranInfo(Parameters inParam) throws Exception {
		
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSave    = inParam.getDataSet("dsSave");
		
		int nRowCnt = dsSave.getRowCount();
		for(int i=0; i<nRowCnt; i++) {
			
			int nRowType = dsSave.getRowType(i);
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				nexacroService.insertDataSet(dsSave, i, "baimBranMgmtService.insertBranInfo");
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				nexacroService.updateDataSet(dsSave, i, "baimBranMgmtService.updateBranInfo");
			}
			
		}
		
		
		return outParam;
	}

	/**
	 * 점소 정보 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.10
	 */
	/*@Override
	public Parameters getBranInfo(Parameters inParam) throws Exception {
		
		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	dsParam = inParam.getData("ds1");
		
		
		
		return null;
	}*/

	
	
	
	
}
