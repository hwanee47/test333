package moonsoft.common.util;

import static moonsoft.common.util.StringUtil.stackTraceToString;

import java.io.UnsupportedEncodingException;
import java.security.InvalidAlgorithmParameterException;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.EncoderException;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.net.URLCodec;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import static moonsoft.common.util.StringUtil.isNull;

/**
 * The class Aes256Util<br>
 * <br>
 * 암호화/복호화를 제공하는 Utility 클래스이다.<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.07.04
 * 
 *  
 *
 */
public class Aes256Util {

	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	protected static final Log log = LogFactory.getLog(Aes256Util.class);
	
	private String iv;
	private Key keySpec;

	/**
	 * AES256 암호화 복호화 하는 클래스이다.<br>
	 * Apache License 오픈소스 이며<br>
	 * GPL 라이선스이므로 상단 클래스 주석부에 License 주석을 추가한다.<br>
	 * <br>
	 * <br>
	 * @param	key
	 * @throws	UnsupportedEncodingException
	 * @author	OhInTaek
	 * @since	2018.07.04
	 */
	public Aes256Util( String key ) throws UnsupportedEncodingException {
		
		if( isNull(key) ) key = SessionConstants.SESSION_AES256_KEY;
		
		this.iv = key.substring(0, 16);
	
		final byte[] keyBytes = new byte[16];
		final byte[] b = key.getBytes("UTF-8");
		int len = b.length;
		if (len > keyBytes.length) {
			len = keyBytes.length;
		}
		System.arraycopy(b, 0, keyBytes, 0, len);
		SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
	
		this.keySpec = keySpec;
	}
	
	/**
	 * 문자열을 암호화 한다.<br>
	 * <br>
	 * <br>
	 * @param str
	 * @author	OhInTaek
	 * @since	2018.07.04
	 */
	public final String encode( String str ) {
		try {
			URLCodec codec = new URLCodec();
			if( str == null  ) str = "";
			return codec.encode(aesEncode(str));
		} catch (InvalidKeyException | UnsupportedEncodingException
				| NoSuchAlgorithmException | NoSuchPaddingException
				| InvalidAlgorithmParameterException
				| IllegalBlockSizeException | BadPaddingException | EncoderException exception) {
			log.error(stackTraceToString(exception));
		}
		return null;
	}

	/**
	 * 문자열을 복호화 한다.<br>
	 * <br>
	 * <br>
	 * @param str
	 * @author	OhInTaek
	 * @since	2018.07.04
	 */
	public final String decode( final String str ) {
		URLCodec codec = new URLCodec();
		try {
			return aesDecode(codec.decode(str));
		} catch (DecoderException decoderException) {
			log.error(stackTraceToString(decoderException));
		}
		return null;
	}

	/**
	 * 문자열을 암호화 한다.<br>
	 * <br>
	 * @param str
	 * @return
	 * @throws java.io.UnsupportedEncodingException
	 * @throws NoSuchAlgorithmException
	 * @throws NoSuchPaddingException
	 * @throws InvalidKeyException
	 * @throws InvalidAlgorithmParameterException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 * @author	OhInTaek
	 * @since	2018.07.04
	 */
    public final String aesEncode(String str) throws java.io.UnsupportedEncodingException, 
                                                    NoSuchAlgorithmException, 
                                                    NoSuchPaddingException, 
                                                    InvalidKeyException, 
                                                    InvalidAlgorithmParameterException, 
                                                    IllegalBlockSizeException, 
                                                    BadPaddingException {
        Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
        c.init(Cipher.ENCRYPT_MODE, keySpec, new IvParameterSpec(iv.getBytes()));
 
        byte[] encrypted = c.doFinal(str.getBytes("UTF-8"));
        String enStr = new String(Base64.encodeBase64(encrypted));
 
        return enStr;
    }
 
    /**
	 * 문자열을 복호화 한다.<br>
	 * "AES / ECB / PKCS5Padding"을 지정하여 PKCS5 패딩을 지정하면 자동으로 데이터의 끝에 몇 바이트를<br>
	 * 매우 특정한 형식으로 추가하여 암호문의 크기를 16 바이트의 배수로 만들고 암호 해독 알고리즘 일부<br>
	 * 데이터를 무시 한다.<br>
	 * <br>
     * @param str
     * @return
     * @throws java.io.UnsupportedEncodingException
     * @throws NoSuchAlgorithmException
     * @throws NoSuchPaddingException
     * @throws InvalidKeyException
     * @throws InvalidAlgorithmParameterException
     * @throws IllegalBlockSizeException
     * @throws BadPaddingException
	 * @author	OhInTaek
	 * @since	2018.07.04
     */
    public final String aesDecode(String str) {
    	
    	try{
            Cipher c = Cipher.getInstance("AES/CBC/PKCS5Padding");
            c.init(Cipher.DECRYPT_MODE, keySpec, new IvParameterSpec(iv.getBytes("UTF-8")));
            byte[] byteStr = Base64.decodeBase64(str.getBytes());
     
            return new String(c.doFinal(byteStr),"UTF-8");
            
    	} catch( UnsupportedEncodingException | NoSuchAlgorithmException | NoSuchPaddingException |
    			InvalidKeyException | InvalidAlgorithmParameterException | IllegalBlockSizeException | BadPaddingException exception ) {
    		log.error(stackTraceToString(exception));
    	}
    	return null;
    }
}
