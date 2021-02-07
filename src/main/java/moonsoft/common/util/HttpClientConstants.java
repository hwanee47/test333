package moonsoft.common.util;

public class HttpClientConstants {

	/**
	 * rpInfo url<br>
	 * <br>
	 * 2018.11.16일이전 RP엔진 관련 사용여부를 배승진 차장님께 2번 문의 드렸지만 회신이 없으므로<br>
	 * <br>
	 * sonarq Critical 이슈 해결을 위해 url 부분을 주석처리하여 올린다.<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String URL_RP_INFO_URL		= "";//"http://52.2.11.78/getRpInfo.do?CoordType=WGS84GEO,WGS84GEO&startPoint=127.123456,37.123456&endPoint=126.98569025,37.20525466&midPoint1=&midPoint2=&midPoint3=&searchOpt=0&dirCheck=10&exWayOpt=1&onlyRightPass=0&resultType=json";
	
	/**
	 * Header agent<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String USER_AGENT			= "Mozilla/5.0";

	/**
	 * rpInfo result key Result - 응답 결과 노드<br>
	 * [{"ErrorCode":"00000","ErrorMesg":"오류 없음"}]<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String RP_INFO_RESULT		= "Result";

	/**
	 * rpInfo result key Auxiliary - 부가 정보<br>
	 * 정보도출되지 않음<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String RP_INFO_AUXILIARY	= "Auxiliary";

	/**
	 * rpInfo result key Address - DRM_RP엔진 연동규칙 미정의<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String RP_INFO_ADDRESS		= "Address";

	/**
	 * rpInfo result key Guide - 안내점 정보<br>
	 * GuideItems , GuideData
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String RP_INFO_GUIDE		= "Guide";

	/**
	 * rpInfo result key GuideData - 안내점 정보 데이터<br>
	 * [{"Name":"","Text":"출발","TurnType":"200","Index":"0","Type":"SP","Coordinate":"127.123455,37.123456","NodeType":"0","GuideOffset":"0"},...]<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String RP_INFO_GUIDE_DATE	= "GuideData";

	/**
	 * rpInfo result key Summary - 경로 요약 정보<br>
	 * [{"RouteLength":"18467","SearchResult":"1,Y","SearchOption":"0","TravelTime":"1460"}]<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String RP_INFO_SUMMARY		= "Summary";

	/**
	 * rpInfo result key Road - 도로 정보<br>
	 * "Road":{"RoadData":[...}]<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String RP_INFO_ROAD			= "Road";

	/**
	 * naver weather url<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	public static final String URL_NAVER_WEATHER_URL= "https://weather.naver.com/rgn/cityWetrMain.nhn";
	
	
	/******************** 화물맨 I/F Constants Start *********************/
	
	public static final String CONTENT_TYPE 				= "application/json";
	public static final String ENCODING_UTF_8 				= "utf-8";
	
	public static final String[] CHK_HEAD_FILEDS  			= {"COMCODE","HASH","SERVICE"};
	public static final String[] SERVICE_CODES 				= {"VHCL_REQUEST","VHCL_CANCEL","VHCL_STATUS"};
	public static final String[] COMCODE_FILEDS 			= {"101"};
	
	public static final String COMPANY_CODE_101 			= "101";				//화물맨 업체코드
	public static final String HASH_FILED 					= "HASH";
	public static final String COMCODE_FILED 				= "COMCODE";
	public static final String SERVICE_FILED 				= "SERVICE";
	public static final String SHA_KEY 						= "CJ12C88DSE2256B6";
	public static final Integer EMPTY_CODE 					= 190;
	public static final Integer ERROR_CODE 					= 191;
	public static final String PREFIX_SERVICE 				= "systemCargoService";
	public static final String PREFIX_METHOD 				= "execute";
	
	
	
	
	/******************** 화물맨 I/F Constants End *********************/
}
