package moonsoft.nexacro.service.baim.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.baim.BaimNoticeMgmService;

import com.nexacro17.xapi.data.DataSet;

/**
 * The class baimNoticeMgmServiceImpl<br>
 * <br>
 * <br>
 * This software is the proprietary information of CJ Systems<br>
 * <br>
 * @author	JinSeonJu
 * @version	1.0
 * @since	2018.08.16
 *
 */

@Service("baimNoticeMgmService")
public class BaimNoticeMgmServiceImpl implements BaimNoticeMgmService{

	/**
	 * Logger<br>
	 * <br>
	 * @author	JinSeonJu
	 * @since	2020.03.13
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 공지사항을 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.15
	 */
	@Override
	public Parameters getNoticeList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimNoticeMgmService.getNoticeList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsNoticeList", resultDs);
		}

		return outParam;
	}
	
	
	/**
	 * 공지사항 정보 저장.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @since	2020.03.13
	 */
	@Override
	public Parameters saveNoticeInfo(Parameters inParam) throws Exception {
		// return object
		Parameters	outParam	= inParam.getClass().newInstance();
		//
		DataSet		dsSave 		= inParam.getDataSet("dsSave");
		//
		for(int saveCnt=0; saveCnt<dsSave.getRowCount(); saveCnt++) {
			
			String strChk = dsSave.getString(saveCnt, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			String key = dsSave.getString(saveCnt, "AUTO_SEQ");
			logger.info("key:" + key);
			if(key != null && key.length() == 10){
				//update
				nexacroService.insertDataSet(dsSave, saveCnt, "baimNoticeMgmService.updateNoticeInfo");
			}else{
				//insert
				/*String insertKey = (String)nexacroService.queryForObject(null, "baimNoticeMgmService.getAtuoSeq");
				dsSave.set(saveCnt, "AUTO_SEQ", insertKey);*/
				nexacroService.insertDataSet(dsSave, saveCnt, "baimNoticeMgmService.insertNoticeInfo");
				//
			}
			//nexacroService.insertDataSet(dsSave, saveCnt, "baimNoticeMgmService.saveNoticeInfo");
		}
		//
		return outParam;
	}
	
	/**
	 * 공지사항 정보 삭제.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	JinSeonJu
	 * @since	2020.03.13
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
			nexacroService.deleteDataSet(dsDelete, deleteCnt, "baimNoticeMgmService.deleteNoticeInfo");
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
	 * @author	JinSeonJu
	 * @since	2020.03.13
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
			dsNoticeList	=	nexacroService.queryForDataset(dsSearch, deleteCnt, "baimNoticeMgmService.getNoticePop");
			//
		}
		//
		outParam.setOutDatasetList("dsNoticeList", dsNoticeList);
		//
		return outParam;
	}
}
