package moonsoft.common.util;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.sql.Clob;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.StringTokenizer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.sql.rowset.serial.SerialClob;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.ContextLoaderListener;


/**
 * The class StringUtil<br>
 * <br>
 * org.apache.commons.lang3.StringUtils 클래스를 extends 하여 사용된다.<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.06.28
 *
 */
public class StringUtil extends StringUtils{

	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	private static final Log log = LogFactory.getLog(StringUtil.class);

	/**
	 * Exception 발생시 Throwable의 printStackTrace를 문자열로 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	Throwable	Exception
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public static final String stackTraceToString( Throwable ex ) {
		final StringWriter sw = new StringWriter();
		final PrintWriter  pw = new PrintWriter(sw);
		ex.printStackTrace(pw);
		return "\r\t" + sw.toString() + "\r\t";
	}

	/**
	 * 요청된 size만큼 특정 문자열을 왼쪽에 붙여서 결과값을 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	msg
	 * @param	size
	 * @param	addSeperator
	 * @author	OhInTaek
	 * @throws UnsupportedEncodingException 
	 * @since	2018.07.05
	 */
	public static final String lPad( final String msg , final int size , final String addSeperator ) throws UnsupportedEncodingException { return pad(msg, size, addSeperator, "LEFT"); }

	/**
	 * 요청된 size만큼 특정 문자열을 오른쪽에 붙여서 결과값을 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	msg
	 * @param	size
	 * @param	addSeperator
	 * @author	OhInTaek
	 * @throws UnsupportedEncodingException 
	 * @since	2018.07.05
	 */
	public static final String rPad( final String msg , final int size , final String addSeperator ) throws UnsupportedEncodingException { return pad(msg, size, addSeperator, "RIGHT"); }
	
	
	/**
	 * 요청된 size만큼 특정 문자열을 왼쪽 , 오른쪽에 붙여서 결과값을 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	msg
	 * @param	size
	 * @param	addSeperator
	 * @author	OhInTaek
	 * @throws UnsupportedEncodingException 
	 * @since	2018.07.05
	 */
	private static final String pad( String msg , final int size , final String addSeperator , final String rightAndLeft ) throws UnsupportedEncodingException {
		
		final StringBuilder stringBuilder = new StringBuilder();
		
		if( !isNull(msg) ) {
			final int len = getByteSize(msg);
			if( len > size ) {
				return msg.substring(0,size);
			} else {
				final int count = size - len;
				if( rightAndLeft.equals("RIGHT") ) {
					stringBuilder.append(msg);
					msg = "";
				}
				for( int idx = 0; idx < count; idx++ ) {
					stringBuilder.append(addSeperator);
				}
				stringBuilder.append(msg);
			}
		}
		return stringBuilder.toString();
	}
	
	/**
	 * 검증요청 String 객체가 [ null 또는 ""]인 경우 true 를 반환.<br>
	 * <br>
	 * <br>
	 * @param	msg
	 * @return	boolean
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final boolean isNull( final String msg ) { return isEmpty(msg); }
	
	/**
	 * 검증요청 String 객체가 null인 경우 "" 반환.<br>
	 * <br>
	 * <br>
	 * @param	msg
	 * @return	boolean
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final String nullToString( final Object msg ) {
		final String checkMsg = String.valueOf(msg);
		if( isNull(checkMsg) || checkMsg.equals("null") )	return "";
		else				return checkMsg;
	}
	
	/**
	 * 검증요청 msg 객체가 null인 경우 0 반환.<br>
	 * <br>
	 * <br>
	 * @param	msg
	 * @return	boolean
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final int nullToZero( final Object msg ) {
		final String checkMsg = nullToString(msg);
		if( isNull(checkMsg) || checkMsg.equals("null") )	return 0;
		else				return Integer.parseInt(checkMsg);
	}
	
	
	/**
	 * 
	 * 검증요청 String 객체가 null인 경우 디폴트 값을 반환 (NVL과 같음)<br>
	 * <br>
	 * @param msg
	 * @param def
	 * @return String
	 * @author	Jang. Jae-hyuk
	 * @since	2018. 10. 1.
	 */
	public static final String nullToDefault(final Object msg, final Object def) {
		final String checkMsg = String.valueOf(msg);
		final String checkDef = String.valueOf(def);

		if( isNull(checkMsg) || checkMsg.equals("null") )	return checkDef;
		else return checkMsg;
	}	
	
	
	/**
	 * 검증요청 msg가 [ null 또는 "" 또는 " " ]인 경우 true 를 반환.<br>
	 * <br>
	 * <br>
	 * @param	msg
	 * @return	boolean
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final boolean isBlank( final String msg ) { return isBlank(msg); }
	
	/**
	 * msg의 byte length 를 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	msg
	 * @return  int byte length
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final int getByteSize( final String msg ) throws UnsupportedEncodingException{
		
		if( isNull(msg) || msg.length() == 0 ) return 0;
		
		byte[] bArray = msg.getBytes("utf-8");
		
		if( bArray == null ) return 0;
		
		return bArray.length;
	}
	
	/**
	 * String to jsonObject.<br>
	 * <br>
	 * <br>
	 * @param	CloseableHttpResponse	httpResponse
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@SuppressWarnings("unchecked")
	public static final JSONObject stringToJson( final String contents ) {
		JSONObject resultJson = new JSONObject();
		if( !isNull(contents) ) {
			final JSONParser parser = new JSONParser();
			try {
				resultJson = (JSONObject) parser.parse(contents);
			} catch (ParseException parseException) {
				resultJson.put("result", contents);
				log.error(stackTraceToString(parseException));
			}
		}
		return resultJson;
	}

	/**
	 * 한글만 존재하는지 체크한다.
	 * @param	String msg
	 * @author	OhInTaek
	 * @since	2018.07.12
	 */
	public static boolean isHangul( final String msg ) {
		final String p = "(^[ㄱ-ㅎㅏ-ㅣ가-힣]*$)";
		return regTest(p, msg);
	}
	
	/**
	 * 알파벳만 존재하는지 체크한다.
	 * @param	String msg
	 * @author	OhInTaek
	 * @since	2018.07.12
	 */
	public static boolean isAlphabet( final String msg ) {
		final String p = "(^[A-Za-z+]*$)";
		return regTest(p, msg);
	}
	
	/**
	 * 숫자만 존재하는지 체크한다.
	 * @param	String msg
	 * @author	OhInTaek
	 * @since	2018.07.12
	 */
	public static boolean isNumber( final String msg ) {
		final String p = "(^[0-9+]*$)";
		return regTest(p, msg);
	}
	
	/**
	 * 숫자와 영어만 존재하는지 체크한다.
	 * @param	String msg
	 * @author	OhInTaek
	 * @since	2018.07.12
	 */
	public static boolean isAlphabetAndNumber( final String msg ) {
		final String p = "(^[A-Za-z0-9+]*$)";
		return regTest(p, msg);
	}
	
	/**
	 * 특정패턴에 적합한 유형인지 검증한다.
	 * @param	String pattern
	 * @param	String msg
	 * @author	OhInTaek
	 * @since	2018.07.12
	 */
	public static boolean regTest( final String pattern , final String msg ) {
		
		final Pattern reg  = Pattern.compile(pattern);
		final Matcher bRet = reg.matcher(msg);
		return bRet.find();
	}
	
	/**
	 * Aes256Util을 이용한 암호화
	 * @param	data
	 * @author	OhInTaek
	 * @since	2018.07.12
	 */
	public static final String aesEnCode( final Object data ) throws UnsupportedEncodingException {

		Aes256Util aes256Util = new Aes256Util(null);
		final String msg = nullToString(data);
		return aes256Util.encode(msg);
	}
	
	/**
	 * Aes256Util을 이용한 복호화
	 * @param	data
	 * @author	OhInTaek
	 * @since	2018.07.12
	 */
	public static final String aesDeCode( final Object data ) {
		
		try {
			Aes256Util aes256Util = new Aes256Util(null);
			final String msg = nullToString(data);
			return aes256Util.decode(msg);
		} catch ( Exception exception ) {
			// TODO Auto-generated catch block
			log.error(stackTraceToString(exception));
		}
		return null;
	}
	

	/**
	 * 3번째 자리 수 마다 [,] 삽입
	 * getCurrencyType("1000000") => 1,000,000
	 * @param	value
	 * @author	SeungMin
	 * @since	2018.07.12
	 */
	public static String getCurrencyType(String value) {
		if(value != null) {
			if(value.length() > 3) {
				value = getCurrencyType(value.substring(0, value.length() - 3)) + "," + value.substring(value.length() - 3);
			}
		}
		return value;
	}
	
	/**
	 * 문자열에 특정 값을 제거한 문자열을 리턴한다.
	 * remove("2018.06.30",".") => 20180630 
	 * @param	str : 처리 할 문자열
	 *          delim : 제거할 문자
	 * @author	SeungMin
	 * @since	2018.07.12
	 */
	public static String remove(String str, String delim) {
		if(str == null) {
			str = "";
			return str;
		}

		StringBuffer sb = new StringBuffer(1024);
		StringTokenizer st = new StringTokenizer(str, delim);

		while(st.hasMoreTokens()) {
			sb.append(st.nextToken());
		}

		return sb.toString();
	}

	/**
	 * Double or String형태의 Double을 long type 으로 객체를 반환한다.
	 * @param	data
	 * @author	OhInTaek
	 * @since	2018.07.23
	 */
	public static final long doubleToLong( Object num ) throws Exception {
		final String strNum = String.valueOf(num);
		return Double.valueOf(strNum).longValue();
	}
	
	
	
	
	
	//************************************************************* Date 관련 함수 정의

	/**
	 * 년월일 8 자리의 오늘 날짜를 시스템 기준으로 반환한다.<br>
	 * ex) 20180705<br>
	 * <br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final String toDay() { return toDay("yyyyMMdd"); }
	
	/**
	 * 년월일시분초 15 자리의 오늘 날짜를 시스템 기준으로 반환한다.<br>
	 * ex) 20180705<br>
	 * <br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final String toDayFull() { return toDay("yyyyMMddHHmmss"); }
	
	/**
	 * 요청포멧으로 오늘 날짜를 시스템 기준으로 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	format
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final String toDay( final String format ) {
		final SimpleDateFormat	simpleDateFormat = new SimpleDateFormat(format);
		return simpleDateFormat.format(getCalendar().getTime());
	}

	/**
	 * Calendar<br>
	 * <br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final Calendar getCalendar() { return Calendar.getInstance(); }

	/**
	 * Calendar.TimeInMillis<br>
	 * <br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.07.05
	 */
	public static final long getCalendarTimeMillis() { return getCalendar().getTimeInMillis(); }
	
	/**
	 * String type의 8자리 년월일 from , end 날짜 차일을 구한다.
	 * @param	String fromDay
	 * @param	String endDay
	 * @author	OhInTaek
	 * @throws java.text.ParseException 
	 * @since	2018.07.05
	 */
	public static int getDateDifference( final String fromDay , final String endDay ) throws java.text.ParseException {
		
		final long lf   = stringToDate(fromDay).getTime();
		final long ef   = stringToDate(endDay).getTime();
		final int days  = (int)((ef-lf)/(1000*60*60*24)); 

		return days;
	}
	
	/**
	 * 문자열("20180707")을 Date로 변경한다.
	 * @param	String date
	 * @author	OhInTaek
	 * @throws java.text.ParseException 
	 * @since	2018.07.05
	 */
	public static Date stringToDate( final String date ) throws java.text.ParseException {

		final DateFormat dateFormat	= new SimpleDateFormat("yyyyMMdd");
		return dateFormat.parse(date);
	}
	
	/**
	 * 문자열("20180707")을 Date로 변경한다.
	 * @param	String date
	 * @author	OhInTaek
	 * @throws java.text.ParseException 
	 * @since	2018.07.05
	 */
	public static Date stringToDateParamFormat( final String date, final String pFormat ) throws java.text.ParseException {
		
		if( isNull(date) ) return null;
		
		final DateFormat dateFormat	= new SimpleDateFormat(pFormat);
		return dateFormat.parse(date);
	}

	/**
	 * System.currentTimeMillis.
	 * @param	String date
	 * @author	OhInTaek
	 * @since	2018.07.12
	 */
	public static long systemTime() {
		return System.currentTimeMillis();
	}
	
	/**
	 * 현재일 기준 이전  날짜구하기 (YYYYMMDD)<br>
	 * <br>
	 * @param	int day
	 * @author	SeunmgMin
	 * @since	2018.06.28
	 */
	@SuppressWarnings("static-access")
	public static String getbeforeDay(int day) {

		Calendar cal = getCalendar();
		DateFormat format = new SimpleDateFormat("yyyyMMdd");
		cal.add(cal.DATE, -day);
		String dateStr = format.format(cal.getTime());
		return dateStr;
	}
	
	/**
	 * 현재일 기준 이후  날짜구하기 (YYYYMMDD)<br>
	 * <br>
	 * @param	int day
	 * @author	SeunmgMin
	 * @since	2018.06.28
	 */
	@SuppressWarnings("static-access")
	public static String getbenextDay(int day) {
		Calendar cal = getCalendar();
		DateFormat format = new SimpleDateFormat("yyyyMMdd");
		cal.add(cal.DATE, +day);
		String dateStr = format.format(cal.getTime());
		return dateStr;
	}
	
	/**
	 * Bean 등록 된 서비스 가져오기<br>
	 * <br>
	 * @param	int day
	 * @author	SeunmgMin
	 * @throws ParseException 
	 * @since	2018.06.28
	 */
	public static Object getBean(String beanId) {
		ApplicationContext appContext = ContextLoaderListener.getCurrentWebApplicationContext();
		return appContext.getBean(beanId);
	}
	
	/**
	 * Data Type Clob을 String으로 변환<br>
	 * <br>
	 * @param	Clob clob
	 * @author	SeunmgMin
	 * @throws  
	 * @since	2018.06.28
	 */
	public static String getClobConvertToStr(Clob clob) {
	   int size;
	   String str = "";
	
	   try {
	      if(clob == null) {
	         size = 0;
	      } else {
	         size = (int)clob.length();
	      }
	
	      if(size != 0) { 
	    	 //Reader reader = clob.getCharacterStream(1, size);
	    	  if(clob != null) {
	    		  char[] c_arr = clob.getSubString(1, size).toCharArray();
		    	  
		    	  if(c_arr.length > 0) {
		    		  StringBuffer buff = new StringBuffer();
			    	  buff.append(c_arr);
			    	  str = buff.toString();
		    	  }
	    	  }
	      } else {
	         str = "";
	      }
	   } catch(SQLException se) {
		   log.error(stackTraceToString(se));
		   str = "";
	   }
	   return str;
	}
	
	/**
	 * Data Type String을 Clob으로 변환<br>
	 * <br>
	 * @param	String param
	 * @author	SeunmgMin
	 * @throws  
	 * @throws  
	 * @since	2018.06.28
	 */
	public static Clob getStrConvertToClob(String param){
		Clob clob = null;
		
		char[] c_arr = param.toCharArray();
		try {
			clob = new SerialClob(c_arr);
		} catch (SQLException e) {
			log.error(stackTraceToString(e));
			clob = null;
		}
		
	   return clob;
	}
	
	/**
	 * String을 List로 변환<br>
	 * <br>
	 * @param	String param - List로 변환 할 문자열
	 * @param	String param - List로 변환 할 구분자
	 * @author	SeunmgMin
	 * @throws  
	 * @throws  
	 * @since	2018.06.28
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static List getStringToList(String param, String split){
		List list = new ArrayList();
		
		if(isNull(split)) split = ",";
		
		if(!isNull(param)) {
			String[] strArr = param.split(split);
			
			for(int i=0; i<strArr.length; i++) {
				list.add(i, strArr[i]);
			}
		}
		
	   return list;
	}
	
	/**
	 * Ip 주소를 Long 형으로 변환
	 * 
	 * @ahthor SeunmgMin
	 * @since 2018.06.28
	 *
	 * @param addr
	 * @return
	 */
	public static long ipToLong(String addr) {
		String[] addrArray = addr.split("\\.");

		long num = 0;
		for(int i = 0; i < addrArray.length; i++) {
			int power = 3 - i;

			num += ((Integer.parseInt(addrArray[i]) % 256 * Math.pow(256, power)));
		}
		return num;
	}
	
	/**
	 * Array Value 존재 유무 확인하기
	 * 
	 * @ahthor SeunmgMin
	 * @since 2018.06.28
	 *
	 * @param addr
	 * @return
	 */
	public static boolean useList(String[] arr, String targetValue) {
		return Arrays.asList(arr).contains(targetValue);
	}
	
	/**
	 * SHA-256 암호화
	 * 
	 * @ahthor SeunmgMin
	 * @since 2018.06.28
	 *
	 * @param addr
	 * @return
	 */
	public static String encrypt(String base) {
        try{
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hash = digest.digest(base.getBytes("UTF-8"));
            StringBuffer hexString = new StringBuffer();

           for (int i = 0; i < hash.length; i++) {
                String hex = Integer.toHexString(0xff & hash[i]);
                if(hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }

           return hexString.toString();
        } catch(Exception ex){
            throw new RuntimeException(ex);
        }
    }
	
	/**
	 * 문자열을 Date로 변경한다.
	 * @param	String date
	 * @author	OhInTaek
	 * @throws java.text.ParseException 
	 * @since	2018.07.05
	 */
	public static Date stringToDate(String date, String format) throws java.text.ParseException {

		DateFormat dateFormat	= new SimpleDateFormat(format);
		return dateFormat.parse(date);
	}
}
