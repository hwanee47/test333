/**************************************************************************************
 * 1.프로그램명  	: CommonServiceImpl
 * 2.파일명		: CommonServiceImpl.java
 * 3.개발자		: SSM
 * 4.개발일자		: 2018.05.24 
 * 5.버젼		: 0.1
 * 6.설명		: 넥사크로 공통 서비스 
 * 7.이력		
*************************************************************************************/

package moonsoft.nexacro.service.common.impl;
import java.sql.Clob;
import java.sql.SQLException;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import moonsoft.common.service.CmmServiceDao;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.common.CommonService;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.Variable;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("commonService")
public class CommonServiceImpl extends EgovAbstractServiceImpl implements CommonService {
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	@Resource(name = "cmmServiceDao")
    private CmmServiceDao cmmServiceDao;
	/**
	 * 공통 조회 서비스<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	public Parameters selectCommon (Parameters inParam) throws Exception{
		Parameters outParam = inParam.getClass().newInstance();
		DataSet searchDs = new DataSet();
		DataSet resultDs = new DataSet();
				
		//1.query list 존재 여부 확인.
		//2.화면에서 요청한 Query를 가져와서 조회 후 리턴.
		for(int i=0; i<inParam.getVariableList().size(); i++) {
			Variable val = inParam.getVariable(i);
			
			if(val.getName().indexOf("q") == 0 && val.getName().length() == 2) {
				String queryId = val.getString();
				String dsName = val.getName().replace("q", "ds");
				searchDs = inParam.getDataSet(dsName);
				resultDs = nexacroService.queryForDataset(searchDs, 0, queryId);
				
				/*if(resultDs.getRowCount()>0){
					outParam.setOutDatasetList(dsName, resultDs);
				}*/
				outParam.setOutDatasetList(dsName, resultDs);
				
			}
		}
		
		searchDs = null;
		resultDs = null;
		
		return outParam;
	}

	/**
	 * 공통 그리드 개인화 정보 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	@Override
	public Parameters getUserGridInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsSearch = inParam.getDataSet("dsSearch");
		
		if(dsSearch.getRowCount() > 0) {
			DataSet result = nexacroService.queryForDataset(dsSearch, 0, "commonService.getUserGridInfo");
			for(int i=0; i<result.getRowCount(); i++) {
				result.set(i, "GRID_FORMAT", StringUtil.getClobConvertToStr((Clob)result.getObject(i, "GRID_FORMAT")));
				
			}
			outParam.setOutDatasetList("dsUserGridInfo", result);
		}
		
		return outParam;
	}

	/**
	 * 공통 그리드 개인화 정보 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	@Override
	public Parameters deleteUserGridInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSave = inParam.getDataSet("ds1");
		
		for(int i=0; i<dsSave.getRowCount(); i++) {
			nexacroService.deleteDataSet(dsSave, i, "commonService.deleteUserGridInfo");
		}
		
		DataSet result = nexacroService.queryForDataset(dsSave, 0, "commonService.getUserGridInfo");
		for(int i=0; i<result.getRowCount(); i++) {
			result.set(i, "GRID_FORMAT", StringUtil.getClobConvertToStr((Clob)result.getObject(i, "GRID_FORMAT")));
		}
		outParam.setOutDatasetList("gdsUserGridInfo", result);
		return outParam;
	}

	/**
	 * 공통 그리드 개인화 정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	@Override
	public Parameters saveUserGridInfo(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet saveDs = inParam.getDataSet("ds1");
		
		for(int j=0; j<saveDs.getRowCount(); j++) {
			DataSet infoCnt = nexacroService.queryForDataset(saveDs, j, "commonService.getUserGridConfrim");
			
			if(infoCnt.getRowCount() < 1) {
				nexacroService.insertDataSet(saveDs, j, "commonService.insertUserGridInfo");
			}
			
			nexacroService.updateDataSet(saveDs, j, "commonService.updateUserGridInfo");
		}
		
		DataSet result = nexacroService.queryForDataset(saveDs, 0, "commonService.getUserGridInfo");
		for(int i=0; i<result.getRowCount(); i++) {
			result.set(i, "GRID_FORMAT", StringUtil.getClobConvertToStr((Clob)result.getObject(i, "GRID_FORMAT")));
		}
		outParam.setOutDatasetList("gdsUserGridInfo", result);
		return outParam;
	}
	
	/**
	 * 주소정제서버 연계<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungJin
	 * @since	2019.02.13
	 */
	@SuppressWarnings("rawtypes")
	@Override
	public Map getGeoCoding(Map inParam){
		try {
			cmmServiceDao.getSqlManager("sqlMapClient_gis").update("commonService.getGeocoding", inParam);
			
			System.out.println("inParam.get(O_LONGITUDE) = " + inParam.get("O_LONGITUDE"));
			System.out.println("inParam.get(O_LATITUDE) = " + inParam.get("O_LATITUDE"));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return inParam;
	}
	
	
	/**
	 * 북마크 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.03
	 */
	@Override
	public Parameters saveBookmark(Parameters inParam) throws Exception {
		
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsBookmarkSaveInfo    = inParam.getDataSet("dsBookmarkSaveInfo");
		
		
		String saveFlag = dsBookmarkSaveInfo.getString(0, "SAVE_FLAG");
		
		
		if("insert".equals(saveFlag)){
			
			nexacroService.insertDataSet(dsBookmarkSaveInfo, 0, "commonService.insertBookmark");
		}else{
			
			nexacroService.insertDataSet(dsBookmarkSaveInfo, 0, "commonService.deleteBookmark");
		}
		
		return outParam;
	}
}
