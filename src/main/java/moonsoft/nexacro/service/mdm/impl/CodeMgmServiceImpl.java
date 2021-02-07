package moonsoft.nexacro.service.mdm.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.mdm.CodeMgmService;

import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * The class CodeMgmServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.07.19
 *
 */

@Service("codeMgmService")
public class CodeMgmServiceImpl extends EgovAbstractServiceImpl implements CodeMgmService{

	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@SuppressWarnings("unused")
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	/**
	 * 코드 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public Parameters getCodeList(Parameters inParam) throws Exception {

		// Master Select
		final String			 selectMaster	= "codeMgmService.getCodeList";
		// return object
		final Parameters		 outParam		= inParam.getClass().newInstance();
		// param Map
		final Map<String,Object> searchMap		= inParam.getData("dsSearch");
		// Master select
		final DataSet			 dsMaster		= nexacroService.queryForDataset(searchMap, selectMaster);
		outParam.setOutDatasetList("dsCode", dsMaster);

		return outParam;
	}

	/**
	 * 대분류에 해당하는 상세 코드정보를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public Parameters getCodeListDetail(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam 	  = inParam.getClass().newInstance();
		// param Map
		final Map<String,Object> searchMap	  = inParam.getData("dsSearchSub");
		// Detail Select
		final String			 selectDetail = "codeMgmService.getCodeDetail";
		// Detail select
		DataSet					 dsDetail	  = nexacroService.queryForDataset(searchMap, selectDetail);
		outParam.setOutDatasetList("dsCodeDetail", dsDetail);
		
		return outParam;
	}
	
	
	/**
	 * 코드 리스트를 등록 수정 한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@SuppressWarnings("unused")
	@Override
	public Parameters saveCode(Parameters inParam) throws Exception {
		
		// return object
		final Parameters  outParam		= inParam.getClass().newInstance();
		final DataSet	  dsCode		= inParam.getDataSet("dsCode");
		final DataSet	  dsCodeDetail	= inParam.getDataSet("dsCodeDetail");
		
		// codeDetail INSERT
		final String codeDetailInsert = "codeMgmService.insertCodeDetail";
		// codeDetail UPDATE
		final String codeDetailUpdate = "codeMgmService.updateCodeDetail";
		// codeMaster UPDATE
		final String codeMasterUpdate = "codeMgmService.updateCode";
		
		// result count
		int detailCount = 0;
		int masterCount = 0;
		
		// rowCount
		int detailRowCount = dsCodeDetail.getRowCount();
		int masterRowCount = dsCode.getRowCount();
		
		// codeDetail insert&&update
		for( int detailIndex = 0; detailIndex < detailRowCount; detailIndex++ ) {
			switch ( dsCodeDetail.getRowType(detailIndex)) {
				case DataSet.ROW_TYPE_INSERTED	: detailCount += nexacroService.updateDataSet(dsCodeDetail, detailIndex, codeDetailInsert);
					break;
				case DataSet.ROW_TYPE_UPDATED	: detailCount += nexacroService.updateDataSet(dsCodeDetail, detailIndex, codeDetailUpdate);
					break;
				default:
					break;
			}
		}

		// codeMaster update
		for( int masterIndex = 0; masterIndex < masterRowCount; masterIndex++ ) {
			masterCount += nexacroService.updateDataSet(dsCode, masterIndex, codeMasterUpdate);
		}
		
		return outParam;
	}
}
