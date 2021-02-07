package moonsoft.redis.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.redis.constants.RedisConstants;
import moonsoft.redis.service.RedisService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * The class RedisServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	SeungMin
 * @version	1.0
 * @since	2018.08.23
 *
 */

@Service("redisService")
public class RedisServiceImpl extends EgovAbstractServiceImpl implements RedisService {
	
	/**
	 * Logger<br>
	 * <br>
	 * @author	SeungMin
	 * @since	2018.08.23
	 */
	private static final Logger logger = LoggerFactory.getLogger(RedisServiceImpl.class);
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * Redis Connect<br>
	 * <br>
	 * <br>
	 * @param	
	 * @author	SeungMin
	 * @since	2018.08.23
	 */
	@Autowired
	private RedisTemplate<String, ?> redisTemplateMap;

	/**
	 * Redis에서 WebPush 정보 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.08.23
	 */
	public Parameters selectUserPush(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		//사용자 id
		String userId = inParam.getVariableList().getString("gv_userId");

		//Redis 조회 하기 위한 key 정보(미배차, 실적확인요청, RTM실행, Hello Talk)
		String diskey 		= getWebPushKey(RedisConstants.WEB_PUSH_DISPATCH	, userId);
		String diskeyW 		= getWebPushKey(RedisConstants.WEB_PUSH_DISPATCH_W	, userId);
		String resultkey 	= getWebPushKey(RedisConstants.WEB_PUSH_RESULT		, userId);
		String rtmkey 		= getWebPushKey(RedisConstants.WEB_PUSH_RTM			, userId);
		String talkkey 		= getWebPushKey(RedisConstants.WEB_PUSH_TALK		, userId);
		String returnkey 	= getWebPushKey(RedisConstants.WEB_PUSH_RETURN		, userId);
		
		//결과 리턴 DATASET
		DataSet resultDs = new DataSet();
		resultDs.addColumn(RedisConstants.WEB_PUSH_COLUMN, DataTypes.STRING, 256);

		//WebPush 정보 조회.(미배차, 실적확인요청, RTM실행, Hello Talk)
		List<?> disList 	= redisTemplateMap.opsForList().range(diskey		, 0, -1);
		List<?> disListW 	= redisTemplateMap.opsForList().range(diskeyW		, 0, -1);
		List<?> resulList 	= redisTemplateMap.opsForList().range(resultkey		, 0, -1);
		List<?> rtmList 	= redisTemplateMap.opsForList().range(rtmkey		, 0, -1);
		List<?> talkList 	= redisTemplateMap.opsForList().range(talkkey		, 0, -1);
		List<?> returnList 	= redisTemplateMap.opsForList().range(returnkey		, 0, -1);
		
		//조회 결과를 dataSet setting
		resultDs = setDsFromList(disList		, resultDs);
		resultDs = setDsFromList(disListW		, resultDs);
		resultDs = setDsFromList(resulList		, resultDs);
		resultDs = setDsFromList(rtmList		, resultDs);
		resultDs = setDsFromList(talkList		, resultDs);
		resultDs = setDsFromList(returnList		, resultDs);
		
		outParam.setOutDatasetList("dsWebPush", resultDs);
		
		return outParam;
	}
	
	/**
	 * Redis에서 WebPush 정보 등록<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.08.23
	 */
	@SuppressWarnings("unchecked")
	public Parameters insertUserPush(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsSave = inParam.getDataSet("dsSave");
		
		String userId = inParam.getVariableList().getString("gv_userId");
		String head = RedisConstants.WEB_PUSH_TALK;
		
		//Redis 조회 하기 위한 key 정보
		String key = getWebPushKey(head, userId);
		
		JSONArray arry = new JSONArray();
		JSONObject json = null;
		
		for(int i=0; i<dsSave.getRowCount(); i++) {
			json = new JSONObject();
			
			json.put("head"		, head);
			json.put("sender"	, userId);
			json.put("receiver"	, userId);
			json.put("message"	, dsSave.getString(i, "MESSAGE"));
			
			arry.add(json);
		}
		
		logger.debug("==============================================");
		logger.debug("Redis Insert WebPush Message Key	:: " + key);
		logger.debug("Redis Insert WebPush Message 		:: " + arry.toJSONString());
		logger.debug("==============================================");
		
		redisTemplateMap.opsForList().leftPushAll(key, arry);
		
		return outParam;
	}
	
	/**
	 * Redis에서 WebPush 정보 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.08.23
	 */
	public Parameters deleteUserPush(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		DataSet dsSave 		= inParam.getDataSet("dsSave");
		DataSet dsDispatch 	= inParam.getDataSet("dsDispatch");

		//주문을 담당자가 확인 한 걸로 처리.
		if(dsDispatch != null && dsDispatch.getRowCount() > 0) {
			for(int i=0; i<dsDispatch.getRowCount(); i++) {
				nexacroService.updateDataSet(dsDispatch, i, "orderMgmService.updateOrderConfirm");
			}
		}
		
		String userId = inParam.getVariableList().getString("gv_userId");
		String head   = dsSave.getString(0, "HEAD");
		
		String key = getWebPushKey(head, userId);
				
		redisTemplateMap.delete(key);
		
		return outParam;
	}
	
	private String getWebPushKey(String head, String userId) {
		//Redis 조회 하기 위한 key 정보
		String key = head + ":" + userId;
		
		return key;
	}
	
	private DataSet setDsFromList(List<?> list, DataSet ds) {

		//조회 된 WebPush 정보를 결과 DATASET에 셋팅.
		if(list != null && list.size() > 0) {
			for(int i=0; i<list.size(); i++) {
				JSONObject json = (JSONObject) list.get(i);
				
				ds.newRow(0);
				ds.set(0, RedisConstants.WEB_PUSH_COLUMN, json.toString());
			}
		}
		
		return ds;
	}
}
