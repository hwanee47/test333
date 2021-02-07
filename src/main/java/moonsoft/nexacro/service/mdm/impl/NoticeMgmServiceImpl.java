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
import moonsoft.nexacro.service.mdm.NoticeMgmService;

import com.nexacro17.xapi.data.DataSet;

/**
 * The class NoticeMgmServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	yhkim
 * @version	1.0
 * @since	2018.08.16
 *
 */

@Service("NoticeMgmService")
public class NoticeMgmServiceImpl implements NoticeMgmService{

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
	 * 공지사항 정보 저장.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.16
	 */
	@Override
	public Parameters saveNoticeInfo(Parameters inParam) throws Exception {
		// return object
		Parameters	outParam	= inParam.getClass().newInstance();
		//
		DataSet		dsSave 		= inParam.getDataSet("dsSave");
		//
		for(int saveCnt=0; saveCnt<dsSave.getRowCount(); saveCnt++) {
			//
			nexacroService.insertDataSet(dsSave, saveCnt, "noticeMgmService.saveNoticeInfo");
			//
		}
		//
		return outParam;
	}
	
	/**
	 * 공지사항 정보 삭제.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.08.17
	 */
	@Override
	public Parameters deleteNoticeInfo(Parameters inParam) throws Exception {
		// return object
		Parameters	outParam	= inParam.getClass().newInstance();
		//
		DataSet		dsDelete 	= inParam.getDataSet("dsDelete");
		//
		for(int deleteCnt=0; deleteCnt<dsDelete.getRowCount(); deleteCnt++) {
			//
			nexacroService.deleteDataSet(dsDelete, deleteCnt, "noticeMgmService.deleteNoticeInfo");
			//
		}
		//
		return outParam;
	}
	
	/**
	 * 포탈 공지사항 목록 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	yhkim
	 * @since	2018.12.04
	 */
	@Override
	public Parameters searchNoticePop(Parameters inParam) throws Exception {
		// return object
		Parameters	outParam		= inParam.getClass().newInstance();
		//
		DataSet		dsSearch 		= inParam.getDataSet("dsSearch");
		DataSet		dsNoticeList	= null;
		//
		for(int deleteCnt=0; deleteCnt<dsSearch.getRowCount(); deleteCnt++) {
			//
			dsNoticeList	=	nexacroService.queryForDataset(dsSearch, deleteCnt, "noticeMgmService.getNoticePop");
			//
		}
		//
		outParam.setOutDatasetList("dsNoticeList", dsNoticeList);
		//
		return outParam;
	}
}
