/**************************************************************************************
 * 1.프로그램명  	: NexacroService
 * 2.파일명		: NexacroService.java
 * 3.개발자		: SSM
 * 4.개발일자		: 2018.05.24 
 * 5.버젼		: 0.1
 * 6.설명		: 서비스단에서 QueryService 처리하기 위한 DAO
 * 7.이력		
*************************************************************************************/

package moonsoft.common.service;

import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import org.springframework.util.StopWatch;

import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.nexacro.spring.dao.ibatis.NexacroIbatisAbstractDAO;

import com.nexacro17.xapi.data.DataSet;

@Repository("nexacroService")
public class NexacroService extends NexacroIbatisAbstractDAO {
	
	/**
	 * Logger<br>
	 * <br>
	 * @author	seungmin
	 * @since	2018.07.31
	 */
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	@SuppressWarnings("unchecked")
	public DataSet queryForDataset(DataSet param, int row, String queryId) throws SQLException {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		DataSet resultDs = NexacroConvertUtil.makeDataSet((List<Object>)list(queryId, NexacroConvertUtil.makeMap(param, row)));
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
		return resultDs;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public List<Map> queryForList(DataSet param, int row, String queryId) throws SQLException {
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		List<Map> result = (List<Map>)list(queryId, NexacroConvertUtil.makeMap(param, row));
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
		return result;
	}
	
	@SuppressWarnings("unchecked")
	public DataSet queryForDataset(Map<String,?> param, String queryId){
		StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		DataSet result = NexacroConvertUtil.makeDataSet((List<Object>)list(queryId, param));
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
		return result;
	}
	
    @SuppressWarnings({ "unchecked", "rawtypes" })
	public List<Map> selectMapList(Map<String,?> param, String queryId) {
    	StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		List<Map> result = (List<Map>) list(queryId, param);
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
    	return result;
    }
    
    public Object queryForObject(Object param, String queryId) {
    	StopWatch stopWatch = new StopWatch();
		stopWatch.start();	
		Object obj = select(queryId, param);
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
    	return obj;
    }
    
    @SuppressWarnings("rawtypes")
	public List queryForObjectList(Map<String,?> param, String queryId) {
    	StopWatch stopWatch = new StopWatch();
    	stopWatch.start();	
    	List obj = list(queryId, param);
    	stopWatch.stop();
    	this.loggingElapsedTime(stopWatch, queryId);
    	return obj;
    }

    //==================== MAP 데이터 처리 ===================
    // insert selectKey
    public Object insertMap(Map<String,Object> param, String queryId) {
    	StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		Object obj = insert(queryId, param);
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
        return obj;
    }

    // return type Integer succ count
    public int updateMap(Map<String,Object> param, String queryId) {
    	StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int r = update(queryId, param);
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
        return r;
    }
    
    // return type Integer succ count
    public int deleteMap(Map<String,Object> param, String queryId) {
    	StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int r = delete(queryId, param);
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
        return r;
    }
    
    //==================== DATASET 데이터 처리 ===================

    // insert selectKey
    public Object insertDataSet(DataSet param, int row, String queryId) {
    	StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		Object obj = insert(queryId, NexacroConvertUtil.makeMap(param, row));
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
        return obj;
    }
    
    // return type Integer succ count
    public int updateDataSet(DataSet param, int row, String queryId) {
    	StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int r = update(queryId, NexacroConvertUtil.makeMap(param, row));
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
        return r;
    }

    // return type Integer succ count
    public int deleteDataSet(DataSet param, int row, String queryId) {
    	StopWatch stopWatch = new StopWatch();
		stopWatch.start();
		int r = delete(queryId, NexacroConvertUtil.makeMap(param, row));
		stopWatch.stop();
		this.loggingElapsedTime(stopWatch, queryId);
        return r;
    }
    
    private void loggingElapsedTime(StopWatch stopWatch, String sqlId) {
        if(log.isInfoEnabled()) {
           StringBuffer elapsedTime = new StringBuffer("Sql [");
           elapsedTime.append(sqlId).append("] elapsed time : ");
           elapsedTime.append(stopWatch.getTotalTimeMillis()).append(" ms.");
           log.info(elapsedTime.toString());
        }
     }
}
