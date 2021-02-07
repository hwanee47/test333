package moonsoft.common.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class EncryptionUtil {
	/**
	 * Logger<br>
	 * <br>
	 * @author	SeungMin
	 * @since	2018.07.05
	 */
	private static final Log log = LogFactory.getLog(EncryptionUtil.class);
	
	public static String digestSHA256(String data) {
		try {
			MessageDigest digest = MessageDigest.getInstance("SHA-256");
			digest.reset();
			byte[] e = digest.digest(data.getBytes("ISO8859-1"));
			String mdData = "";
			byte[] arr$ = e;
			int len$ = e.length;

			for (int i$ = 0; i$ < len$; ++i$) {
				byte b = arr$[i$];
				String t = Integer.toHexString(b);
				if (t.length() < 2) {
					mdData = mdData + "0" + t;
				} else {
					mdData = mdData + t.substring(t.length() - 2);
				}
			}

			return mdData;
		} catch (NoSuchAlgorithmException arg8) {
			log.error(arg8);
			return null;
		} catch (UnsupportedEncodingException arg9) {
			log.error(arg9);
			return null;
		}
	}
}
