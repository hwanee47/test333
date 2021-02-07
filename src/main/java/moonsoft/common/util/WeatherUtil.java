package moonsoft.common.util;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.parser.JSONParser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class WeatherUtil {
	
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private static Map<String, Map<String, Object>> locWeather = initMap();
	
	private static Map<String, Map<String, Object>> initMap() {
		Map<String, Map<String, Object>> map = new HashMap<String, Map<String, Object>>();
		map.put("00001004", setMap("56§127")); // 서울지사
		map.put("00001005", setMap("62§127")); // 경기지사
		map.put("00001006", setMap("96§127")); // 동해지사
		map.put("00001007", setMap("76§122")); // 강원지사
		map.put("00001021", setMap("54§125")); // 인천지사
		map.put("00001022", setMap("58§114")); // 평택지사
		map.put("00001023", setMap("51§113")); // 충남지사
		map.put("00001037", setMap("55§92"));  // 군산지사
		map.put("00001038", setMap("63§89"));  // 전북지사
		map.put("00001039", setMap("68§103")); // 대전지사
		map.put("00001040", setMap("69§107")); // 충북지사
		map.put("00001054", setMap("73§70"));  // 광양지사
		map.put("00001055", setMap("59§73"));  // 광주지사
		map.put("00001056", setMap("50§67"));  // 목포지사
		map.put("00001057", setMap("53§38"));  // 제주지사
		map.put("00001071", setMap("102§94")); // 포항지사
		map.put("00001072", setMap("102§84")); // 울산지사
		map.put("00001073", setMap("88§90"));  // 대구지사
		map.put("00001087", setMap("89§76"));  // 창원지사
		map.put("00001088", setMap("97§74"));  // 부산지사
		return map;
	}
	
	private static Map<String, Object> setMap(String axis) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("AXIS", axis);
		map.put("WEATHER_LIST", new ArrayList<Map<String, String>>());
		return map;
	}
			
	@SuppressWarnings("unchecked")
	public Map<String, String> getWeather(String baseLoc) throws Exception {
		Map<String, Object> baseMap = locWeather.get(baseLoc);
		String axis = (String) baseMap.get("AXIS");
		List<Map<String, String>> weatherList = (List<Map<String, String>>) baseMap.get("WEATHER_LIST");
		
		Calendar cal = null;
		cal = Calendar.getInstance();
		cal.add(Calendar.HOUR_OF_DAY, 1);
		SimpleDateFormat findDateFormat = new SimpleDateFormat("ddHHmm");
		String findDate = (findDateFormat.format(cal.getTime())).substring(0, 4) + "00";
		
		cal = Calendar.getInstance();
		int minute = Integer.parseInt((findDateFormat.format(cal.getTime())).substring(4));
		if (minute < 45) {
			cal.add(Calendar.HOUR_OF_DAY, -1);
		}
		SimpleDateFormat reqDateFormat = new SimpleDateFormat("yyyyMMdd§HH");
		String reqDate = reqDateFormat.format(cal.getTime()) + "30";
		
		Map<String, String> weatherMap;
		if (weatherList.isEmpty()) {
			weatherMap = this.getNewWeather(axis, reqDate, findDate);
			weatherList.add(weatherMap);
		} else {
			weatherMap = weatherList.get(weatherList.size() - 1);
			String timeStamp = weatherMap.get("TIME_STAMP");
			if (!timeStamp.equals(findDate)) {
				// 날짜 변경 시 날씨 목록 초기화
				if (!timeStamp.startsWith(findDate.substring(0, 2))) {
					weatherList = new ArrayList<Map<String, String>>();
				}
				weatherMap = this.getNewWeather(axis, reqDate, findDate);
				weatherList.add(weatherMap);
			}
		}
		
		return weatherMap;
	}
	
	@SuppressWarnings("unchecked")
	public Map<String, String> getNewWeather(String axis, String reqDate, String timeStamp) throws Exception {
		logger.debug(">> new weather param : " + axis + " / " + timeStamp);
		Map<String, String> weatherMap = new HashMap<String, String>();
		weatherMap.put("TIME_STAMP", timeStamp);
		
		String[] arrDate = reqDate.split("§");
		String[] arrAxis = axis.split("§");
		
		StringBuilder sbParam = new StringBuilder("http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastTimeData");
		sbParam.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=PHyVhTMqjd%2BBy6XRlrylhTBGnWpk3W%2BC016Oj768je9LI%2BrXI24L8j4Bx%2B7Or2cyB5LWzWO9%2BZoBmHLVaZCv2Q%3D%3D");
		sbParam.append("&" + URLEncoder.encode("base_date","UTF-8") + "=" + URLEncoder.encode(arrDate[0], "UTF-8"));
		sbParam.append("&" + URLEncoder.encode("base_time","UTF-8") + "=" + URLEncoder.encode(arrDate[1], "UTF-8"));
		sbParam.append("&" + URLEncoder.encode("nx","UTF-8") + "=" + URLEncoder.encode(arrAxis[0], "UTF-8"));
		sbParam.append("&" + URLEncoder.encode("ny","UTF-8") + "=" + URLEncoder.encode(arrAxis[1], "UTF-8"));
		sbParam.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode("20", "UTF-8"));
		sbParam.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode("1", "UTF-8"));
		sbParam.append("&" + URLEncoder.encode("_type","UTF-8") + "=" + URLEncoder.encode("json", "UTF-8"));
		URL url = new URL(sbParam.toString());
		
		String weatherString = this.getKMAWeather(url);
		logger.debug(">> weather result json : " + weatherString);
		
		JSONParser parser = new JSONParser();
		Map<String, Object> resultMap = (Map<String, Object>) parser.parse(weatherString);
		
		Map<String, String> dispMap = this.getDispMap(resultMap, timeStamp);
		weatherMap.putAll(dispMap);
		
		return weatherMap;
	}
	
	private String getKMAWeather(URL url) throws Exception {
        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
        conn.setRequestMethod("GET");
        conn.setRequestProperty("Content-type", "application/json");
        BufferedReader rd;
        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        } else {
            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
        }
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = rd.readLine()) != null) {
            sb.append(line);
        }
        rd.close();
        conn.disconnect();
        
		return sb.toString();
	}
	
	@SuppressWarnings("unchecked")
	private Map<String, String> getDispMap(Map<String, Object> map, String timeStamp) {
		Map<String, String> dispMap = new HashMap<String, String>();
		String SKY = "";
		String PTY = "";
		String LGT = "";
		
		int intHOUR = Integer.parseInt(timeStamp.substring(2, 4));
		boolean dayFlag = true;
		if (intHOUR < 7 || intHOUR > 19) {
			dayFlag = false;
		}
		
		Map<String, String> headerMap = (Map<String, String>) ((Map<String, Object>) map.get("response")).get("header");
		if (!"OK".equals(headerMap.get("resultMsg"))) {
			dispMap.put("TEMP", "26");
			dispMap.put("CSS_CLASS", dayFlag == true ? "wi-day-sunny" : "wi-night-clear");
		} else {
			Map<String, Object> bodyMap = (Map<String, Object>) ((Map<String, Object>) map.get("response")).get("body");
			List<Map<String, Object>> weatherList = (List<Map<String, Object>>) ((Map<String, Object>) bodyMap.get("items")).get("item");
			String findBaseTime = timeStamp.substring(2);
			String tempBaseTime = "";
			String category = "";
			for (Map<String, Object> weatherMap : weatherList) {
				tempBaseTime = String.valueOf(weatherMap.get("fcstTime"));
				if (!findBaseTime.equals(tempBaseTime)) {
					continue;
				}
				category = (String) weatherMap.get("category");
				if ("T1H".equals(category)) {
					dispMap.put("TEMP", String.valueOf(weatherMap.get("fcstValue")));
				} else if ("SKY".equals(category)) {
					SKY = String.valueOf(weatherMap.get("fcstValue"));
				} else if ("PTY".equals(category)) {
					PTY = String.valueOf(weatherMap.get("fcstValue"));
				} else if ("LGT".equals(category)) {
					LGT = String.valueOf(weatherMap.get("fcstValue"));
				}
			}
		}
		
		String SC; // 하늘 상태
		if ("1".equals(SKY)) {
			SC = "N";
		} else if ("2".equals(SKY) || "3".equals(SKY)) {
			SC = "P";
		} else { //if ("4".equals(SKY)) {
			SC = "C";
		}
		String RS; // 강수 형태
		if ("0".equals(PTY)) {
			RS = "N";
		} else if ("1".equals(PTY)) {
			RS = "R";
		} else if ("2".equals(PTY)) {
			RS = "M";
		} else { //if ("3".equals(PTY)) {
			RS = "S";
		}
		String LT; // 낙뢰 유무
		if ("0".equals(LGT) || "1".equals(LGT)) {
			LT = "N";
		} else { //if ("2".equals(LGT) || "3".equals(LGT)) {
			LT = "Y";
		}
		
		String cssClass = "";
		if ("N".equals(SC) && "N".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-sunny" : "wi-night-clear";
		} else if ("P".equals(SC) && "N".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-cloudy" : "wi-night-alt-cloudy";
		} else if ("C".equals(SC) && "N".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-cloud" : "wi-cloud";
		} else if ("N".equals(SC) && "R".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-rain" : "wi-night-alt-rain";
		} else if ("P".equals(SC) && "R".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-rain" : "wi-night-alt-rain";
		} else if ("C".equals(SC) && "R".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-rain" : "wi-rain";
		} else if ("N".equals(SC) && "S".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-snow" : "wi-night-alt-snow";
		} else if ("P".equals(SC) && "S".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-snow" : "wi-night-alt-snow";
		} else if ("C".equals(SC) && "S".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-snow" : "wi-snow";
		} else if ("N".equals(SC) && "M".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-rain-mix" : "wi-night-alt-rain-mix";
		} else if ("P".equals(SC) && "M".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-rain-mix" : "wi-night-alt-rain-mix";
		} else if ("C".equals(SC) && "M".equals(RS) && "N".equals(LT)) {
			cssClass = dayFlag == true ? "wi-rain-mix" : "wi-rain-mix";
		} else if ("N".equals(SC) && "N".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-lightning" : "wi-night-alt-lightning";
		} else if ("P".equals(SC) && "N".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-lightning" : "wi-night-alt-lightning";
		} else if ("C".equals(SC) && "N".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-lightning" : "wi-night-alt-lightning";
		} else if ("N".equals(SC) && "R".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-thunderstorm" : "wi-night-alt-thunderstorm";
		} else if ("P".equals(SC) && "R".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-thunderstorm" : "wi-night-alt-thunderstorm";
		} else if ("C".equals(SC) && "R".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-thunderstorm" : "wi-thunderstorm";
		} else if ("N".equals(SC) && "S".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-snow-thunderstorm" : "wi-night-snow-thunderstorm";
		} else if ("P".equals(SC) && "S".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-snow-thunderstorm" : "wi-night-snow-thunderstorm";
		} else if ("C".equals(SC) && "S".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-storm-showers" : "wi-storm-showers";
		} else if ("N".equals(SC) && "M".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-sleet-storm" : "wi-night-sleet-storm";
		} else if ("P".equals(SC) && "M".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-day-sleet-storm" : "wi-night-sleet-storm";
		} else if ("C".equals(SC) && "M".equals(RS) && "Y".equals(LT)) {
			cssClass = dayFlag == true ? "wi-storm-showers" : "wi-storm-showers";
		}
		
		dispMap.put("CSS_CLASS", cssClass);
		
		return dispMap;
	}
	
}
