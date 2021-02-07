package moonsoft.nexacro.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStreamReader;
import java.net.URL;
import java.security.SecureRandom;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import moonsoft.common.util.PropertiesUtil;

import com.google.gson.JsonArray;
import com.google.gson.internal.LinkedTreeMap;

public class CommonUtil {
	 
	private static final Logger LOG = LoggerFactory.getLogger(CommonUtil.class);
	
	/**
	 * String 변환
	 * @param obj
	 * @param replacement
	 * @return
	 */
	public static String parseString(Object obj, String replacement) {

		// 변환해서 return할 값
		String str = "";

		try {
			// Null이면 replacement로 교체
			if(obj == null) {
				str = replacement;
			}
			// Null이 아니면
			else {
				// String 변환
				String strr = String.valueOf(obj);
				// Null인지 체크
				if(strr == null) {
					str = replacement;
				}
				// Null이 아닌 경우
				else {
					// 공백제거
					String val = strr.trim().toLowerCase();
					// 공백이거나 null 텍스트인 경우 대체문자로 대체
					if("".equals(val) || "null".equals(val)) {
						str = replacement;
					}

					// 아닌 경우 String 변환객체 return
					else {
						str = strr;
					}
				}
			}
		} catch(Exception ex) {
			LOG.error("Exception", ex);
			// 에러발생시 공백 return
			str = replacement;
		}
		return str;
	}
	
	/**
	 * String 변환<br>
	 * <br>
	 * @param obj
	 * @return
	 */
	public static String parseString(Object obj) {

		String str = "";

		try {
			str = String.valueOf(obj);
			if(str == null || "null".equals(str) || "".equals(str) || " ".equals(str)) {
				str = "";
			}
		} catch(Exception ex) {
			LOG.error("Exception", ex);
			str = "";
		}

		return str;
	}
	
	/**
	 * int 변환
	 * @param obj
	 * @return
	 */
	public static int parseInt(Object obj) {
		// return할 값
		int num = 0;

		try {
			// double인 경우
			if(obj instanceof Double) {
				num = (int)Double.parseDouble(String.valueOf(obj));
			}
			// 그 외
			else {
				num = Integer.parseInt(String.valueOf(obj));
			}
		} catch(Exception ex) {
			LOG.error("Exception", ex);
			// 에러발생시 0 return
			num = 0;
		}

		return num;
	}
	
	/**
	 * double 변환
	 * @param obj
	 * @return
	 */
	public static double parseDouble(Object obj) {
		// return할 값
		double num = 0.0;
		try {
			// double로 변환
			num = Double.parseDouble(String.valueOf(obj));
		} catch(Exception ex) {
			LOG.error("Exception", ex);
			// 에러발생시 0.0 return
			num = 0.0;
		}
		return num;
	}
	
	/**
	 * Long으로 변환
	 * @param obj
	 * @return
	 */
	public static long parseLong(Object obj) {
		// Long
		long lon = 0;
		try {
			// Long으로 변환
			lon = Long.parseLong(String.valueOf(obj));
		} catch(Exception ex) {
			LOG.error("Exception", ex);
			// 에러 발생시 0 return
			lon = 0;
		}
		return lon;
	}

	
	/**
	 * TODO 임시 비밀번호 생성<br>
	 * <br>
	 * @param cnt
	 * @return
	 */
	public static String makeTempPw(int cnt) {
		SecureRandom r = new SecureRandom();
		r.setSeed(new Date().getTime());
		
		//String password = "";
		String pass_no = "";
		StringBuffer sb = new StringBuffer();
		StringBuffer sc = new StringBuffer("!@#%^&*-=?~"); // 특수문자 모음, {}[] 같은 비호감문자는 뺌. $ => replaceAll 사용시 Illegal group reference 에러 발생 $ 제외!!!

		// 대문자 4개를 임의 발생 
		sb.append((char)((r.nextDouble() * 26) + 65)); // 첫글자는 대문자,  첫글자부터 특수문자 나오면 안 이쁨

		for(int i = 0; i < 3; i++) {
			sb.append((char)((r.nextDouble() * 26) + 65)); // 아스키번호 65(A) 부터 26글자 중에서 택일
		}

		// 소문자 4개를 임의발생
		for(int i = 0; i < 4; i++) {
			sb.append((char)((r.nextDouble() * 26) + 97)); // 아스키번호 97(a) 부터 26글자 중에서 택일
		}

		// 숫자 2개를 임의 발생
		for(int i = 0; i < 2; i++) {
			sb.append((char)((r.nextDouble() * 10) + 48)); //아스키번호 48(1) 부터 10글자 중에서 택일
		}

		// 특수문자를 두개  발생시켜 랜덤하게 중간에 끼워 넣는다 
		sb.setCharAt(((int)(r.nextDouble() * 3) + 1), sc.charAt((int)(r.nextDouble() * sc.length() - 1))); //대문자3개중 하나
		sb.setCharAt(((int)(r.nextDouble() * 4) + 4), sc.charAt((int)(r.nextDouble() * sc.length() - 1))); //소문자4개중 하나

		//password = sb.toString();
		//return password;
		pass_no = sb.toString();
		return pass_no;
	}
	
	/**
	 * TODO URL 호출<br>
	 * <br>
	 * @param requesturl
	 * @return
	 */
	public String urlCall(String requesturl) {

		URL url = null;
		String requestMsg = "";
		String line = "";
		BufferedReader input = null;

		try {
			// Request
			url = new URL(requesturl);

			// Response
			input = new BufferedReader(new InputStreamReader(url.openStream()));

			while((line = input.readLine()) != null) {
				requestMsg += line;
			}

			input.close();
		} catch(Exception e) {
			LOG.error("Exception", e);
			e.printStackTrace();
		}

		return requestMsg;
	}
	
	/**
	 * 각종 객체 사이즈 얻기<br>
	 * <br>
	 * @param obj
	 * @return
	 * @author HJ LEE
	 * @since 2014. 2. 24.
	 */
	@SuppressWarnings("rawtypes")
	public static int getSize(Object obj) {

		// return할 size값
		int size = 0;

		try {

			// Map
			if(obj instanceof Map) {

				size = ((Map)obj).size();
			}

			// HashMap
			else if(obj instanceof HashMap) {

				size = ((HashMap)obj).size();
			}

			// LinkedHashMap
			else if(obj instanceof LinkedHashMap) {

				size = ((LinkedHashMap)obj).size();
			}

			// LinkedTreeMap
			else if(obj instanceof LinkedTreeMap) {

				size = ((LinkedTreeMap)obj).size();
			}

			// List
			else if(obj instanceof List) {

				size = ((List)obj).size();
			}

			// ArrayList
			else if(obj instanceof ArrayList) {

				size = ((ArrayList)obj).size();
			}

			// String 배열
			else if(obj instanceof String[]) {

				size = ((String[])obj).length;
			}

			// int 배열
			else if(obj instanceof int[]) {

				size = ((int[])obj).length;
			}

			// double 배열
			else if(obj instanceof double[]) {

				size = ((double[])obj).length;
			}

			// byte 배열
			else if(obj instanceof byte[]) {

				size = ((byte[])obj).length;
			}

			// File 배열
			else if(obj instanceof File[]) {

				size = ((File[])obj).length;
			}

			// StackTraceElement
			else if(obj instanceof StackTraceElement[]) {

				size = ((StackTraceElement[])obj).length;
			}

			// String 문자열 길이
			else if(obj instanceof String) {

				size = (String.valueOf(obj)).length();
			}

			// Gson JsonArray
			else if(obj instanceof JsonArray) {

				size = ((JsonArray)obj).size();
			}
		}

		catch(Exception ex) {
			LOG.error("Exception", ex);
			// 에러 발생시 객체의 size는 0으로 간주
			size = 0;
		}

		return size;
	}
	
	/**
	 * 도메인 정보 얻기
	 * <br>
	 * @param req
	 * @param contextRootFlag
	 * @return
	 * @author HJ LEE
	 * @since 2015. 6. 30.
	 */
	public static String getDomain(HttpServletRequest req, boolean contextRootFlag) {

		String domain = "";
		String contextRoot = "";
		try {
			contextRoot = PropertiesUtil.getPropValue("kfr.common.contextRoot");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		String url = req.getRequestURL().toString();
		String uri = req.getRequestURI();

		domain = url.replaceAll(uri, "");

		contextRoot = convertXSS(contextRoot);
		domain = convertXSS(domain);
		return domain + (contextRootFlag == true ? contextRoot : "");
	}
	
	public static String convertXSS(String str) {
		if(str != null) {
			str = str.trim();
			str = str.replaceAll("&", "&amp");
			str = str.replaceAll("<", "&lt");
			str = str.replaceAll(">", "&gt");
			str = str.replaceAll("\"", "&quot");
			str = str.replaceAll("--", "");
			str = str.replaceAll("[(]", "&#40;");
			str = str.replaceAll("[)]", "&#41;");
			str = str.replaceAll("[{]", "&#123");
			str = str.replaceAll("[}]", "&#125");
			str = str.replaceAll(";", "&#59");
			str = str.replaceAll("'", "&#39");
		}
		return str;
	}
	
	/**
	 * 현재 날짜 구하기
	 * @param pattern
	 * @return
	 */
	public static String getToday(String pattern) {

		// 날짜 형식 결정
		SimpleDateFormat sdf = new SimpleDateFormat(parseString(pattern, "yyyy-MM-dd"));

		// 현재 날짜 구하기
		Calendar cal = Calendar.getInstance();

		return sdf.format(cal.getTime());
	}
	
	/**
	 * 주어진 형식에 맞는 현재 날짜 구하기
	 * @param pattern
	 * @param pFormat
	 * @return
	 */
	public static String getDate(String pattern) {

		// 날짜 형식 결정
		SimpleDateFormat sdf = new SimpleDateFormat(pattern);

		// 현재 날짜 구하기
		Calendar cal = Calendar.getInstance();

		return sdf.format(cal.getTime());
	}
	
}
