package moonsoft.nexacro.service.mdm.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.mdm.MsgMgmService;

import com.nexacro17.xapi.data.DataSet;

/**
 * The class MsgMgmServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	JaeHyun
 * @version	1.0
 * @since	2018.08.02
 *
 */

@Service("msgMgmService")
public class MsgMgmServiceImpl implements MsgMgmService{

	/**
	 * Logger<br>
	 * <br>
	 * @author	JaeHyun
	 * @since	2018.08.02
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 메세지코드를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.06
	 */
	@SuppressWarnings("unchecked")
	@Override
	public Parameters getMsgMsgList(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// param Map
		Map<String,Object> searchMap = inParam.getData("dsSearch");
		
		// getLangList
		List<Map<String, String>> langCdList = null;
		langCdList = (List<Map<String, String>>) nexacroService.list("msgMgmService.getLangList", searchMap);
		searchMap.put("langCdList", langCdList);
		
		// 메세지코드 조회
		DataSet dsMaster = nexacroService.queryForDataset(searchMap, "msgMgmService.getMsgMsgList");
		outParam.setOutDatasetList("dsList", dsMaster);

		return outParam;
	}
	
	/**
	 * 메세지코드 등록/수정<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.06
	 */
	@Override
	public Parameters saveMsgMsgList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters outParam = inParam.getClass().newInstance();
		final DataSet dsSave = inParam.getDataSet("dsSave");

		for(int i=0; i < dsSave.getRowCount(); i++) {
			//신규 이면 중복 검사.
			if("2".equals(dsSave.getString(i, "ROW_TYPE"))) {
				DataSet dsCheck = nexacroService.queryForDataset(dsSave, i, "msgMgmService.checkMsgDupl");
				
				if(dsCheck.getRowCount() > 0) {
					throw new NexaUserException("중복 된 정보가 있습니다.");
				}
			}
			
			nexacroService.updateDataSet(dsSave, i, "msgMgmService.saveMsgMsgList");
		}
		
		return outParam;
	}

	/**
	 * 메세지코드 삭제.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JaeHyun
	 * @since	2018.08.06
	 */
	@Override
	public Parameters deleteMsgMsgList(Parameters inParam) throws Exception {
		// return object
		final Parameters outParam = inParam.getClass().newInstance();
		final DataSet dsDelete = inParam.getDataSet("dsDelete");
		
		for(int i=0; i<dsDelete.getRowCount(); i++) {
			nexacroService.deleteDataSet(dsDelete, i, "msgMgmService.deleteMsgMsgList");
		}
		
		return outParam;
	}
}
