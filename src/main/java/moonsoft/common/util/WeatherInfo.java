package moonsoft.common.util;

import static moonsoft.common.util.StringUtil.toDay;

import java.io.IOException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import static moonsoft.common.util.StringUtil.stackTraceToString;

/**
 * The class WeatherInfo<br>
 * <br>
 * 네이버 날씨 홈페이지 정보를 스크래핑하여 날씨정보를 획득하는 클래스이다.<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.07.11
 *
 */
public class WeatherInfo {

	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	private static final Log log = LogFactory.getLog(WeatherInfo.class);


	/**
	 * 네이버 날씨 홈페이지 정보를 스크래핑하여 날씨정보를 획득한다.<br>
	 * <br>
	 * <br>
	 * @param	Throwable	Exception
	 * @author	OhInTaek
	 * @throws IOException 
	 * @since	2018.06.28
	 */
	@SuppressWarnings("unchecked")
	public static JSONArray getWeatherInfoWithNaver() {

		final String	detailUrl		= "https://weather.naver.com";
		final Document	doc				= getDoc(HttpClientConstants.URL_NAVER_WEATHER_URL);
		
		if( doc == null ) return null;
		
		final Elements	weatherElements	= doc.select("table.tbl_today > tbody > tr");
		final JSONArray result			= new JSONArray();
		
		for( final Element node : weatherElements ) {
			
			// 도시별 정보
			final JSONObject weatherInfoCity = new JSONObject();
			weatherInfoCity.put("toDay", toDay());
			
			final String cityName					= node.select("th > a").get(0).text();		// 도시이름
			final String citySubCodeUrl				= node.select("th > a").attr("href");		// 도시상세정보URL
			final String cityCodeUrl				= detailUrl + citySubCodeUrl;				// 도시상세정보URL
			
			weatherInfoCity.put("cityName"		, cityName);		// 도시이름
			weatherInfoCity.put("cityCode"		, (citySubCodeUrl.split("cityRgnCd=")[1]));		// 도시코드
			weatherInfoCity.put("cityDetailURL"	, cityCodeUrl);		// 도시상세정보URL
			
			// 오전날씨 정보
			final JSONObject weatherInfoMorning		= new JSONObject();
			final String cityMorningWeatherImg		= node.select("td > p > img").attr("src");	// 이미지아이콘
			final String cityMorningWeatherNow		= node.select("td > p > img").attr("alt");	// 날씨 상태
			final String cityMorningWeatherPerTemp	= node.select("td > ul > li > span.temp").get(0).text();	// 날씨
			final String cityMorningWeatherPerRain	= node.select("td > ul > li > span.rain").get(0).text();	// 강수확률
			
			weatherInfoMorning.put("imgUrl"	, cityMorningWeatherImg);
			weatherInfoMorning.put("now"	, cityMorningWeatherNow);
			weatherInfoMorning.put("weather", cityMorningWeatherPerTemp);
			weatherInfoMorning.put("rainRt"	, cityMorningWeatherPerRain);
			
			weatherInfoCity.put("morning", weatherInfoMorning);

			final JSONObject weatherInfoNight		= new JSONObject();
			final Elements	night = node.select("td.line");												// 오후정보의 모든것
			final String	cityNightWeatherImg		= night.select("td > p > img").attr("src");			// 날씨정보 이미지
			final String	cityNightWeatherNow		= night.select("td > ul > li.nm").text();			// 날씨정보
			final String	cityNightWeatherPerTemp	= night.select("td > ul > li > span.temp").text();	// 기온
			final String	cityNightWeatherPerRain	= night.select("td > ul > li > span.rain").text();	// 강수확률

			weatherInfoNight.put("imgUrl"	, cityNightWeatherImg);
			weatherInfoNight.put("now"		, cityNightWeatherNow);
			weatherInfoNight.put("weather"	, cityNightWeatherPerTemp);
			weatherInfoNight.put("rainRt"	, cityNightWeatherPerRain);
			
			weatherInfoCity.put("night", weatherInfoNight);
			
			result.add(weatherInfoCity);
		}
		
		return result;
	}

	/**
	 * 요청 url로 해당 url의 html을 Docment로 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	Throwable	Exception
	 * @author	OhInTaek
	 * @throws IOException 
	 * @since	2018.06.28
	 */
	private static final Document getDoc( final String url ) {
		try {
			return Jsoup.connect(url).get();
		} catch (IOException ioException) {
			log.error(stackTraceToString(ioException));
		}
		return null;
	}
}
