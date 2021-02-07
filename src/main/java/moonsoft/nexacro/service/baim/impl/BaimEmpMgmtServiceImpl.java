package moonsoft.nexacro.service.baim.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimEmpMgmtService;

/**
 * The class BaimEmpMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	jckim
 * @version	1.0
 * @since	2020.08.31
 *
 */

@Service("baimEmpMgmtService")
public class BaimEmpMgmtServiceImpl  implements BaimEmpMgmtService {

	/**
	 * Logger<br>
	 * <br>
	 * @author	jckim
	 * @since	2020.08.31
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	
	@Override
	public Parameters getEmpInfoList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimEmpMgmtService.getEmpInfoList"));
		
		return outParam;
	}
	
	@Override
	public Parameters getEmpList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimEmpMgmtService.getEmpList"));
		
		return outParam;
	}
}
