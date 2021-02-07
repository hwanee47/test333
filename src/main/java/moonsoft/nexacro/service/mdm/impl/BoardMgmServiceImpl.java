package moonsoft.nexacro.service.mdm.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.mdm.BoardMgmService;
import moonsoft.nexacro.service.mdm.ItemMgmService;

import com.nexacro17.xapi.data.DataSet;

/**
 * The class BoardMgmServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	yhkim
 * @version	1.0
 * @since	2018.08.13
 *
 */

@Service("BoardMgmService")
public class BoardMgmServiceImpl implements BoardMgmService{

	/**
	 * Logger<br>
	 * <br>
	 * @author	yhkim
	 * @since	2018.08.13
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 게시판 답변을 등록한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.13
	 */
	@Override
	public Parameters saveBoardInfo(Parameters inParam) throws Exception {
		// return object
		Parameters	outParam	= inParam.getClass().newInstance();
		//
		DataSet		dsSave 		= inParam.getDataSet("dsSave");
		//
		for(int saveCnt=0; saveCnt<dsSave.getRowCount(); saveCnt++) {
			//
			DataSet result = nexacroService.queryForDataset(dsSave, saveCnt, "boardMgmService.selectReplyChek");
			//
			if(result.getRowCount() > 0) {
				// UPDATE
				nexacroService.updateDataSet(dsSave, saveCnt, "boardMgmService.updateReplyInfo");
			}else{
				// INSERT
				nexacroService.insertDataSet(dsSave, saveCnt, "boardMgmService.insertReplyInfo");				
			}
		}
		//
		return outParam;
	}
	
}
