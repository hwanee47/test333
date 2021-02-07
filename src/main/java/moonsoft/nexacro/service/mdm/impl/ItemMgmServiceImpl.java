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
import moonsoft.nexacro.service.mdm.ItemMgmService;

import com.nexacro17.xapi.data.DataSet;

/**
 * The class ItemMgmServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	yhkim
 * @version	1.0
 * @since	2018.08.09
 *
 */

@Service("ItemMgmService")
public class ItemMgmServiceImpl implements ItemMgmService{

	/**
	 * Logger<br>
	 * <br>
	 * @author	yhkim
	 * @since	2018.08.09
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 하위 물품목록을 등록한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.10
	 */
	@Override
	public Parameters saveItemInfo(Parameters inParam) throws Exception {
		// return object
		Parameters	outParam	= inParam.getClass().newInstance();
		//
		DataSet		dsSave 		= inParam.getDataSet("dsSave");
		//
		for(int saveCnt=0; saveCnt<dsSave.getRowCount(); saveCnt++) {
			//
			if(StringUtil.isNull(dsSave.getString(saveCnt, "ITEM_CD"))){
				// INSERT
				nexacroService.insertDataSet(dsSave, saveCnt, "itemMgmService.insertItemInfo");
			}else{
				// UPDATE
				nexacroService.updateDataSet(dsSave, saveCnt, "itemMgmService.updateItemInfo");
			}
		}
		//
		return outParam;
	}
	/**
	 * 하위 물품목록을 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.13
	 */
	@Override
	public Parameters deleteItemInfo(Parameters inParam) throws Exception {
		// return object
		Parameters	outParam	= inParam.getClass().newInstance();
		//
		DataSet		dsDelete 		= inParam.getDataSet("dsDelete");
		//
		for(int delCnt=0; delCnt<dsDelete.getRowCount(); delCnt++) {
			//
			if(!StringUtil.isNull(dsDelete.getString(delCnt, "ITEM_CD"))){
				// UPDATE
				nexacroService.updateDataSet(dsDelete, delCnt, "itemMgmService.deleteItemInfo");
			}
		}
		//
		return outParam;
	}
	
}
