package moonsoft.common.util;

import static moonsoft.common.util.StringUtil.nullToString;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URISyntaxException;
import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.protocol.HTTP;
import org.json.simple.JSONObject;

/**
 * The class HttpClientUtil<br>
 * <br>
 * HTTP 및 관련 프로토콜에 중점을 둔 저수준 Java 구성 요소의 도구 세트를 만들고 유지 관리한다.<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.07.06
 *
 */
public class HttpClientUtil {
	
	/**
	 * CloseableHttpClient component getMethod
	 * <br>
	 * <br>
	 * @param	Map<String,?>	param
	 * @param	HttpGet			httpGet
	 * @author	OhInTaek
	 * @throws IOException 
	 * @since	2018.07.06
	 */
	public static final String httpGet( final Map<String,?> param , final HttpGet httpGet) throws IOException {
		
		final RequestConfig requestConfig = RequestConfig
											.copy(RequestConfig.DEFAULT)
											.setConnectionRequestTimeout(2000)
											.build();
		
		// Component do not close method!!()
		try(CloseableHttpClient httpClient = HttpClients
											.custom()
											.setDefaultRequestConfig(requestConfig)
											.build();
			CloseableHttpResponse httpResponse = httpClient.execute(httpGet);) {
			// Http 요청시 응답코드는 200 성공.
			final int statusCode = httpResponse.getStatusLine().getStatusCode();

			if( statusCode == 200 ) {
				return readLine(httpResponse);
			}
		}

		return null;
	}

	/**
	 * GetMethod 객체를 생성한다.<br>
	 * <br>
	 * <br>
	 * @param	CloseableHttpResponse	httpResponse
	 * @author	OhInTaek
	 * @throws URISyntaxException 
	 * @since	2018.06.28
	 */
	public static final HttpGet httpGet( final Map<String,?> param , final String url ) throws URISyntaxException {

		// parameter setting
		final URIBuilder urlBuilder = setUserParams(param,url);
		// getMethode Url 정보 설정
		final HttpGet httpGet = new HttpGet(urlBuilder.build());
		// agent 정보
		httpGet.addHeader("User-Agent", HttpClientConstants.USER_AGENT);
		
		return httpGet;
	}

	/**
	 * URIBuilder 객체를 생성하여 parameter를 추가한다.<br>
	 * <br>
	 * <br>
	 * @param	param
	 * @param	url
	 * @author	OhInTaek
	 * @throws URISyntaxException
	 * @since	2018.06.28
	 */
	private static final URIBuilder setUserParams( final Map<String,?> param , final String url ) throws URISyntaxException , NullPointerException {
		
		final List<String> params     = Arrays.asList( "CoordType","startPoint","endPoint","midPoint1","midPoint2","midPoint3","searchOpt","dirCheck","exWayOpt","onlyRightPass","resultType","SearchOption");
		final URIBuilder   uriBuilder = new URIBuilder(url);
		
		final List<String> list = new ArrayList<String>();
		
		// 지정된 URL 사용시
		if( url.equals(HttpClientConstants.URL_RP_INFO_URL) )	list.addAll(params);
		else 													param.forEach( (k,v) -> { list.add(k); });

		list.stream().forEach( key -> {
			final String val = nullToString(param.get(key));
			uriBuilder.setParameter(key, val);
		});
		
		return uriBuilder;
	}
	
	/**
	 * CloseableHttpResponse 객체의 Content정보를 문자열로 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	CloseableHttpResponse	httpResponse
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private static final String readLine( CloseableHttpResponse httpResponse ) throws UnsupportedOperationException , IOException{
		final StringBuilder stringBuilder	= new StringBuilder();
		BufferedReader		bufferedReader	= new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), "UTF-8"));
		String readLine;
		while ( (readLine = bufferedReader.readLine()) != null ) {
			stringBuilder.append(readLine);
		}
		
		bufferedReader.close();
		return stringBuilder.toString();
	}

	
	/**
	 * 에러메세지<br>
	 * <br>
	 * <br>
	 * @return	errorJson
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	@SuppressWarnings("unchecked")
	public static final JSONObject errorSet() {
		
		JSONObject rpResult = new JSONObject();
		JSONObject errMsg	= new JSONObject();
		errMsg.put("ErrorCode", "99990");
		errMsg.put("ErrorMesg", "통신 에러");
		rpResult.put("Result", errMsg);
		return errMsg;
	}

	/**
	 * 성공메세지<br>
	 * <br>
	 * <br>
	 * @return	errorJson
	 * @author	OhInTaek
	 * @since	2018.07.06
	 */
	@SuppressWarnings("unchecked")
	public static final JSONObject succSet( final JSONObject result ) {
		
		result.put("ErrorCode", "0");
		result.put("ErrorMesg", "정상");
		return result;
	}
	
	
	/**
	 * 인코딩 SHA-256 변환<br>
	 * <br>
	 * <br>
	 * @return	errorJson
	 * @author	Seungmin
	 * @since	2019.02.15
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
	 * CloseableHttpClient HttpPost
	 * <br>
	 * <br>
	 * @param	JSONObject	param
	 * @param	String	url
	 * @author	seungmin
	 * @throws IOException 
	 * @since	2019.02.21
	 */
	@SuppressWarnings({ "unchecked", "deprecation" })
	public static JSONObject httpPost(JSONObject param, String url) {
		//String resultStr = "";
		
		HttpPost post = new HttpPost(url);
		
		StringEntity postingString;
		postingString = new StringEntity(param.toJSONString(), HTTP.UTF_8);
		post.setHeader("Content-type", "application/json");
		post.setEntity(postingString);
		
		RequestConfig requestConfig = RequestConfig
										.copy(RequestConfig.DEFAULT)
										.setConnectionRequestTimeout(2000)
										.build();
		
		CloseableHttpClient httpClient = null;
		CloseableHttpResponse httpResponse = null;
		
		try {
			httpClient = HttpClients.custom()
							.setDefaultRequestConfig(requestConfig)
							.build();

			httpResponse = httpClient.execute(post);
			
			// Http 요청시 응답코드는 200 성공.
			int statusCode = httpResponse.getStatusLine().getStatusCode();
			
			// Http 요청 결과 출력
			// 요청 결롸 내용은 JSON String으로 response 처리.({RtnCode : 리턴 코드, Message:리턴 메세지})
			JSONObject result = new JSONObject();
			result.put("status", statusCode);
			result.put("result", readLine(httpResponse));
			/*if( statusCode == 200 ) {
				resultStr = readLine(httpResponse);
			} else {
				resultStr = readLine(httpResponse);
			}*/
			
			return result;
		} catch (ClientProtocolException e) {
			throw new RuntimeException(e);
		} catch (IOException e) {
			throw new RuntimeException(e);
		} finally {
			try {
				if(httpResponse != null) {
					httpResponse.close();
				}
			} catch (IOException e) {
				throw new RuntimeException(e);
			} 
			try {
				if(httpClient != null) {
					httpClient.close();
				}
			} catch (IOException e) {
				throw new RuntimeException(e);
			}
		}
	}
}
