package moonsoft.mble.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;

import moonsoft.common.service.NexacroService;
import moonsoft.mble.service.MobileService;

@Service("mobileService")
public class MobileServiceImpl implements MobileService {
	private Logger logger = LoggerFactory.getLogger(MobileService.class);
	
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	

	@Override
	public String getUserInfo(HashMap<String, String> paramMap) throws Exception {
		int loginChk = (int)nexacroService.queryForObject(paramMap, "mobileService.chkUserPw");
		
		logger.info("loginChk:" + loginChk);
		
		if(loginChk > 0) {
			Map resultMap = (Map)nexacroService.queryForObject(paramMap, "mobileService.getUserInfo");
			if(resultMap != null) {
				Gson gson = new Gson();
				String json = gson.toJson(resultMap, new TypeToken<Map>() {}.getType());
				if(json!= null) logger.info(json);
				return json;
			}else {
				logger.info("resultMap null");
				
				return null;
			}
		}else {
			return null;
		}
		
	}

	@Override
	public String selectWorkOrdList(HashMap<String,String> paramMap) throws Exception {
		List resultList = nexacroService.queryForObjectList(paramMap, "mobileService.getWorkOrdList");
		Gson gson = new Gson();
		String json = gson.toJson(resultList, new TypeToken<List>() {}.getType());
		return json;
	}


	@Override
	public String selectCodeList() throws Exception {
		List resultList = nexacroService.queryForObjectList(null,"mobileService.getCodeList");
		Gson gson = new Gson();
		String json = gson.toJson(resultList, new TypeToken<List>() {}.getType());
		return json;
	}



	@Override
	public String insertScanDelatList(List<HashMap<String, Object>> list) throws Exception {
		logger.info("listsize:"+list.size());
		String ymd = new SimpleDateFormat("yyyyMMdd",Locale.KOREA).format(new Date());
		String hour = new SimpleDateFormat("HHmmss",Locale.KOREA).format(new Date());
		
		JsonObject outputJson = new JsonObject();
		JsonArray insertWaybillNums = new JsonArray();
		JsonArray failWaybillNums = new JsonArray();
		int totCnt = 0;		
		for(int i =0; i < list.size(); i++) {
			HashMap<String ,Object> map = list.get(i);
			try {
				//스캔데이터 insert
				nexacroService.insertMap(map,"mobileService.insertScanInfo");
				insertWaybillNums.add(map.get("WAYBILL_NO").toString());
				totCnt += 1;
			}catch(Exception e) {
				JsonObject failJson = new JsonObject();
				failJson.addProperty("waybillNo", map.get("WAYBILL_NO").toString());
				failJson.addProperty("msg", e.toString());
				failWaybillNums.add(failJson);
			}
		}
		
		outputJson.addProperty("totCnt", totCnt);
		outputJson.add("insertWaybillNums", insertWaybillNums);
		outputJson.add("failWaybillNums", failWaybillNums);
		
		logger.info(outputJson.toString());
		return outputJson.toString();
	}

	@Override
	public String selectCrsStInfo(HashMap<String, String> map) throws Exception {
		List resultList = nexacroService.queryForObjectList(map,"mobileService.getCrgStInfo");
		Gson gson = new Gson();
		String json = gson.toJson(resultList, new TypeToken<List>() {}.getType());
		return json;
	}


}
