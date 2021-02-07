package moonsoft.visibility.service.impl;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.rabbitmq.producer.rp.ProducerGps;
import moonsoft.visibility.service.EntVhclCntrService;
import moonsoft.visibility.util.VisibilityConstant;

@Service("entVhclCntrService")
public class EntVhclCntrServiceImpl implements EntVhclCntrService {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
	private NexacroService nexacroService;

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public Map<String, Object> getVhclList(Map<String, Object> param) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		List list = nexacroService.selectMapList(param, "entVhclCntrService.getVhclList");
		if (list != null && list.size() > 0) {
			result.put("list", list);
			result.put("tableString", this.getTableString(list));
			result.put("result", VisibilityConstant.RESULT_SUCCESS);
		} else {
			result.put("result", VisibilityConstant.RESULT_FAILURE);
		}
		return result;
	}
	
	@SuppressWarnings("rawtypes")
	@Override
	public Map<String, Object> getVhclInfo(Map<String, Object> param) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		List list = nexacroService.selectMapList(param, "entVhclCntrService.getVhclInfo");
		if (list != null && list.size() > 0) {
			result.put("map", list.get(0));
			result.put("result", VisibilityConstant.RESULT_SUCCESS);
		} else {
			result.put("result", VisibilityConstant.RESULT_FAILURE);
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Map<String, Object> getVhclRoute(Map<String, Object> param) throws Exception {
		if (logger.isDebugEnabled()) {
			logger.debug("==============   entVhclCntrService.getVhclRoute Start   ==============");
		}
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		Map<String, Object> devReqMap = null;
		Map<String, Object> unFormattedMap = null;
		Map<String, Object> formattedMap = null;
		
		if ("AFTER_FINISH".equals(String.valueOf(param.get("TYPE")))) {
			Map<String, Object> resultMap = new HashMap<String, Object>();
			if ("2M".equals(String.valueOf(param.get("SEARCH_TARGET")))) {
				devReqMap = param.containsKey("DEV1_PARAM") == false ? null : (Map<String, Object>) param.get("DEV1_PARAM");
				List list = nexacroService.selectMapList(devReqMap, "entVhclCntrService.getVhclList2M");
				if (list != null && !list.isEmpty()) {
					resultMap.put("LIST", list);
					resultMap.put("TYPE", "GPS_HIST");
					resultMap.put("result", VisibilityConstant.RESULT_SUCCESS);
				} else {
					resultMap.put("result", VisibilityConstant.RESULT_FAILURE);
				}
				returnMap.put("DEV1_RESULT", resultMap);
			} else if ("6M".equals(String.valueOf(param.get("SEARCH_TARGET")))) {
				devReqMap = param.containsKey("DEV1_PARAM") == false ? null : (Map<String, Object>) param.get("DEV1_PARAM");
				List list = nexacroService.selectMapList(devReqMap, "entVhclCntrService.getVhclList6M");
				if (list != null && !list.isEmpty()) {
					resultMap.put("LIST", list);
					resultMap.put("TYPE", "GPS_HIST");
					resultMap.put("result", VisibilityConstant.RESULT_SUCCESS);
				} else {
					resultMap.put("result", VisibilityConstant.RESULT_FAILURE);
				}
				returnMap.put("DEV1_RESULT", resultMap);
			}
		} else {
			devReqMap = param.containsKey("DEV1_PARAM") == false ? null : (Map<String, Object>) param.get("DEV1_PARAM");
			if (devReqMap != null) {
				unFormattedMap = this.getProducerResult(devReqMap);
				String type = String.valueOf(devReqMap.get("head"));
				if ("Road".equals(type)) {
					formattedMap = this.formatDataForRP(type, unFormattedMap);
				} else if ("GPS_HIST".equals(type)) {
					formattedMap = this.formatDataForHist(type, unFormattedMap);
				}
				returnMap.put("DEV1_RESULT", formattedMap);
			}
			
			devReqMap = param.containsKey("DEV2_PARAM") == false ? null : (Map<String, Object>) param.get("DEV2_PARAM");
			if (devReqMap != null) {
				unFormattedMap = this.getProducerResult(devReqMap);
				String type = String.valueOf(devReqMap.get("head"));
				if ("Road".equals(type)) {
					formattedMap = this.formatDataForRP(type, unFormattedMap);
				} else if ("GPS_HIST".equals(type)) {
					formattedMap = this.formatDataForHist(type, unFormattedMap);
				}
				returnMap.put("DEV2_RESULT", formattedMap);
			}
		}
		
		if (logger.isDebugEnabled()) {
			logger.debug("==============   entVhclCntrService.getVhclRoute End   ==============");
		}
		
		return returnMap;
	}
	
	@SuppressWarnings("rawtypes")
	@Override
	public Map<String, Object> getSagoImgList(Map<String, Object> param) throws Exception {
		Map<String, Object> result = new HashMap<String, Object>();
		List list = nexacroService.selectMapList(param, "entVhclCntrService.getSagoImgList");
		if (list != null && list.size() > 0) {
			result.put("list", list);
			result.put("result", VisibilityConstant.RESULT_SUCCESS);
		} else {
			result.put("result", VisibilityConstant.RESULT_FAILURE);
		}
		return result;
	}
	
	private String getTableString(List<Map<String, Object>> list) throws Exception {
		StringBuilder sb = new StringBuilder();
		sb.append("<table cellspacing='0' cellpadding='0' class='board_common'");
		sb.append("<colgroup>");
		sb.append("<col width='45px' />");
		sb.append("<col width='45px' />");
		sb.append("<col width='35px' />");
		sb.append("<col width='100px' />");
		sb.append("<col width='*' />");
		sb.append("<col width='280px' />");
		sb.append("<col width='100px' />");
		sb.append("</colgroup>");
		sb.append("<tbody>");
		int i = 1;
		String eqpClsText = "";
		String vhclNo = "";
		String vhclKndNm = "";
		String vhclTonNm = "";
		String currLoc = "";
		String lastTime = "";
		
//		String arrNodeNm = "";
//		String shprNm = "";
		for (Map<String, Object> map : list) {
			map.put("VHCL_ID", "MARKER_VHCL_ID_" + i);
			String json = JSONValue.toJSONString(map);
			
			eqpClsText = map.get("EQP_CLS_TEXT") == null ? "-" : String.valueOf(map.get("EQP_CLS_TEXT"));
			vhclNo = map.get("VHCL_NO") == null ? "-" : String.valueOf(map.get("VHCL_NO"));
			vhclKndNm = map.get("VHCL_KND_NM") == null ? "-" : String.valueOf(map.get("VHCL_KND_NM"));
			vhclTonNm = map.get("VHCL_TON_NM") == null ? "-" : String.valueOf(map.get("VHCL_TON_NM"));
			currLoc = map.get("CURR_LOC") == null ? "-" : String.valueOf(map.get("CURR_LOC"));
			lastTime = map.get("LAST_TIME") == null ? "-" : String.valueOf(map.get("LAST_TIME"));
			
//			arrNodeNm = map.get("ARR_NODE_NM") == null ? "-" : String.valueOf(map.get("ARR_NODE_NM"));
//			shprNm = map.get("SHPR_NM") == null ? "-" : String.valueOf(map.get("SHPR_NM"));
			
			sb.append("<tr id='MARKER_VHCL_ID_").append(i).append("' style='cursor:pointer;' onclick='getVhclInfo(this);' objString='").append(json).append("'>");
			sb.append("<td class='gpsYN_").append(map.get("GPS_YN")).append("'>").append("</td>");
			sb.append("<td class='indicateFlag_").append(map.get("INDICATE_FLAG")).append("'>").append("</td>");
			sb.append("<td>").append(eqpClsText).append("</td>");
			sb.append("<td>").append(vhclNo).append("</td>");
			sb.append("<td>").append(vhclKndNm).append(" / ").append(vhclTonNm).append("</td>");
			sb.append("<td class='ellipse'>").append(currLoc).append("</td>");
			sb.append("<td>").append(lastTime).append("</td>");
			
//			sb.append("<td>").append(arrNodeNm).append("</td>");
//			sb.append("<td>").append(shprNm).append("</td>");
			sb.append("</tr>");
			i ++;
		}
		sb.append("</tbody>");
		sb.append("</table>");
		return sb.toString();
	}
	
	@SuppressWarnings("unchecked")
	private Map<String, Object> getProducerResult(Map<String, Object> param) throws Exception {
		String jsonString = JSONValue.toJSONString(param);
		JSONParser parser = new JSONParser();
		JSONObject jsonParam = (JSONObject) parser.parse(jsonString);
		
		JSONObject jsonResult = ProducerGps.rpProducerRun(jsonParam);
		String resultString = JSONValue.toJSONString(jsonResult);
		
		Map<String, Object> resultMap = (Map<String, Object>) parser.parse(resultString);
		
		return resultMap;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private Map<String, Object> formatDataForRP(String type, Map<String, Object> param) {
		Map<String, Object> resultMap = new HashMap<String, Object>();

		if ("0".equals(String.valueOf(param.get("ErrorCode")))) {
			List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
			
			Map<String, Object> roadDataMap = (Map)((ArrayList)param.get("Road")).get(0);
			ArrayList<Map<String, Object>> roadDataList = (ArrayList<Map<String, Object>>) roadDataMap.get("RoadData");
			for (int i = 0; i < roadDataList.size(); i ++) {
				Map<String, Object> tempMap = roadDataList.get(i);
				String coords = String.valueOf(tempMap.get("Coordinates"));
				String[] coordArr = StringUtils.split(coords, "_");
				Map<String, Object> innerMap = null;
				for (int j = 0; j < coordArr.length; j ++) {
					String[] coord = StringUtils.split(coordArr[j], ",");
					innerMap = new HashMap<String, Object>();
					innerMap.put("SEQ", i + StringUtils.leftPad(String.valueOf(j), 5, "0"));
					innerMap.put("X", coord[0]);
					innerMap.put("Y", coord[1]);
					list.add(innerMap);
				}
			}
			resultMap.put("LIST", list);
			resultMap.put("TYPE", type);
			resultMap.put("result", VisibilityConstant.RESULT_SUCCESS);
		} else {
			resultMap.put("result", VisibilityConstant.RESULT_FAILURE);
		}
		return resultMap;
	}
	
	@SuppressWarnings("unchecked")
	private Map<String, Object> formatDataForHist(String type, Map<String, Object> param) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		
		if ("0".equals(String.valueOf(param.get("ErrorCode")))) {
			List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
			
			ArrayList<Map<String, Object>> dataList = (ArrayList<Map<String, Object>>) param.get("Data");
			for (int i = 0; i < dataList.size(); i ++) {
				Map<String, Object> tempMap = dataList.get(i);
				ArrayList<Map<String, Object>> rowDataList = (ArrayList<Map<String, Object>>) tempMap.get("rowData");
				rowDataList.sort(Comparator.comparing(m -> Long.valueOf(m.get("INFO_OCCUR_DTTM").toString())));
				Map<String, Object> innerMap = null;
				for (int j = 0; j < rowDataList.size(); j ++) {
					Map<String, Object> tempInnerMap = rowDataList.get(j);
					if (tempInnerMap.get("MILEAGETYPE") != null) {
						continue;
					}
					innerMap = new HashMap<String, Object>();
					innerMap.put("SEQ", tempInnerMap.get("INFO_OCCUR_DTTM"));
					innerMap.put("X", tempInnerMap.get("COORD_WGS84_X"));
					innerMap.put("Y", tempInnerMap.get("COORD_WGS84_Y"));
					list.add(innerMap);
				}
			}
			resultMap.put("LIST", list);
			resultMap.put("TYPE", type);
			resultMap.put("result", VisibilityConstant.RESULT_SUCCESS);
		} else {
			resultMap.put("result", VisibilityConstant.RESULT_FAILURE);
		}
		return resultMap;
	}

}
