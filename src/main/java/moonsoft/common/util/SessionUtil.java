package moonsoft.common.util;

import static moonsoft.common.util.StringUtil.aesEnCode;
import static moonsoft.common.util.StringUtil.aesDeCode;

import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.HashMap;
import java.util.Map;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESedeKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.commons.codec.binary.Base64;

/**
 * The class SessionUtil<br>
 * <br>
 * 세션을 관리하는 session Utility<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.06.28
 *
 */
public class SessionUtil {

	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	protected static final Log log = LogFactory.getLog(SessionUtil.class);

	/**
	 * 로그인 프로세스 처리중 사용자 인증이 완료된 시점에서 사용자 정보를 세션객체에 기록한다.<br>
	 * <br>
	 * <br>
	 * @param	request		session을 생성하기 위한 HttpServletRequest
	 * @param	user		사용자 정보를 조회한 데이터
	 * @author	OhInTaek
	 * @throws UnsupportedEncodingException 
	 * @since	2018.06.28
	 */
	public static final boolean ceateNewSession( HttpServletRequest request , Map<String,Object> user) throws UnsupportedEncodingException {
		return setUserInfo(isNewSession(request),user);
	}
	
	/**
	 * 기록된 세션 정보를 제거한다.<br>
	 * <br>
	 * <br>
	 * @param	request		session을 생성하기 위한 HttpServletRequest
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public static final void removeSession( HttpServletRequest request ) {
		removeSession(request.getSession());
	}

	/**
	 * 세션정보 만료 또는 세션생성 한다.<br>
	 * <br>
	 * <br>
	 * @param	request		session을 생성하기 위한 HttpServletRequest
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private static final HttpSession isNewSession( HttpServletRequest request ) {
		
		HttpSession session = request.getSession();
		if( !session.isNew() ) {
			removeSession(session);
			// 세션생성
			session = request.getSession();
		}
		return session;
	}
	
	/**
	 * logout && craetSession 세션 정보를 clear 한다.<br>
	 * <br>
	 * <br>
	 * @param	session		clear할 session 객체
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private static final void removeSession( HttpSession session ) {
		
		@SuppressWarnings("unchecked")
		final Map<String,String> sessionMap = (Map<String, String>) session.getAttribute(SessionConstants.SESSION_CONSTANT);
		if( sessionMap != null ) {
			session.removeAttribute(SessionConstants.SESSION_CONSTANT);
		}
		session.invalidate();
	}
	
	/**
	 * 사용자 정보를 세션에 기록한다.<br>
	 * <br>
	 * <br>
	 * @param	request		session객체에 기록하기 위한 HttpServletRequest
	 * @param	user		사용자 정보를 조회한 데이터
	 * @author	OhInTaek
	 * @throws UnsupportedEncodingException 
	 * @since	2018.06.28
	 */
	private static final boolean setUserInfo( HttpSession session , Map<String,Object> user) throws UnsupportedEncodingException {
		
		// 세션 생서시 추가 이벤트 발생해야 할 사항이 생길지 모르므로 return true
		boolean bRet = true;
		
		final Map<String,Object> sessionMap = new HashMap<String, Object>();
		
		sessionMap.put(SessionConstants.SESSION_KEY_USER_ID		, aesEnCode((String)user.get("USER_ID")));
		sessionMap.put(SessionConstants.SESSION_KEY_USER_EMAIL	, aesEnCode((String)user.get("USER_EMAIL")));
		sessionMap.put(SessionConstants.SESSION_KEY_USER_NAME	, aesEnCode((String)user.get("USER_NAME")));
		
		session.setAttribute(SessionConstants.SESSION_CONSTANT, sessionMap);
		
		return bRet;
	}
	
	/**
	 * 사용자 정보를 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	request		session객체에 기록하기 위한 HttpServletRequest
	 * @param	user		사용자 정보를 조회한 데이터
	 * @author	OhInTaek
	 * @throws UnsupportedEncodingException 
	 * @since	2018.06.28
	 */
	public static final String getUserInfo( HttpServletRequest request , String attr) {
		return getSessionAttribute(request,attr);
	}
	
	/**
	 * 지정한 key에 해당하는 사용자 정보를 반환한다.<br>
	 * 사용자 정보 취득시 사용자 정보가 없거나 세션이 새로 생긴 타입이라면 세션만료로 간주한다.<br>
	 * <br>
	 * <br>
	 * @param	request		
	 * @param	response	세션정보가 없을시 Redirect을 위한 response
	 * @param	key			사용자 정보를 찾을 key 구분자
	 * @author	OhInTaek
	 * @throws UnsupportedEncodingException 
	 * @since	2018.06.28
	 */
	private static final String getSessionAttribute( HttpServletRequest request, String key ) {
		return getUserInfo(isNewSession(request), key);
	}
	
	/**
	 * session Attribute map 개체에서 사용자 정보를 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	session		사용자 정보를 기록한 session 객체
	 * @param	key			사용자 정보를 찾을 key 구분자
	 * @author	OhInTaek
	 * @throws UnsupportedEncodingException 
	 * @since	2018.06.28
	 */
	private static final String getUserInfo( HttpSession session , String key ) {
		@SuppressWarnings("unchecked")
		final Map<String,String> map = (Map<String, String>) session.getAttribute(SessionConstants.SESSION_CONSTANT);
		return aesDeCode(map.get(key));
	}
	
	public static String decrypt(String encryptedStr, String keyValue)
			throws InvalidKeyException, NoSuchAlgorithmException,
			UnsupportedEncodingException, InvalidKeySpecException,
			NoSuchPaddingException, IllegalBlockSizeException,
			BadPaddingException {
		byte[] message = Base64.decodeBase64(encryptedStr);
		SecretKey key = generateKey(keyValue);
		Cipher decipher = Cipher.getInstance("DESede/ECB/PKCS5Padding");
		decipher.init(2, key);
		byte[] plainText = decipher.doFinal(message);
		String decodedtext = new String(plainText, "UTF-8");
		return decodedtext.substring(0, decodedtext.length() - 7);
	}
	
	public static SecretKey generateKey(String keyValue)
			throws NoSuchAlgorithmException, UnsupportedEncodingException,
			InvalidKeyException, InvalidKeySpecException {
		MessageDigest md = MessageDigest.getInstance("md5");
		byte[] digestOfPassword = md.digest(keyValue.getBytes("utf-8"));
		byte[] keyBytes = new byte[24];
		System.arraycopy(digestOfPassword, 0, keyBytes, 0,
				digestOfPassword.length);
		int key = 0;

	// Reliability > Instruction  상수/이슈: 2min
	//	Empty statements, i.e. ;, are usually introduced by mistake, for example because:
	//	It was meant to be replaced by an actual statement, but this was forgotten.
	// There was a typo which lead the semicolon to be doubled, i.e. ;;.
	// Noncompliant Code Example
	// sonarq 2018.11.01
	// SSO key byte로 인해 주석 제거 (주석 하면 안됨.)	
		for (int keyFactory = 16; key < 8; keyBytes[keyFactory++] = keyBytes[key++]) {
			;
		}

		DESedeKeySpec arg6 = new DESedeKeySpec(keyBytes);
		SecretKeyFactory arg7 = SecretKeyFactory.getInstance("DESede");
		return arg7.generateSecret(arg6);
	}
}
