package moonsoft.common.util;

import javax.servlet.http.HttpServletRequest;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.servlet.LocaleResolver;

public class MessageUtil {
	private static String LANG 						= "ko";
	private static MessageSourceAccessor msAcc 		= null;
	private static LocaleResolver localeResolver 	= null;
	
	public void setMessageSourceAccessor(MessageSourceAccessor msAcc) {
		MessageUtil.msAcc = msAcc;
	}
	
	public void setLocaleResolver(LocaleResolver localeResolver) {
		MessageUtil.localeResolver = localeResolver;
	}
	
	
	public static String getMessage(String key, String[] args) {
		StringBuffer buffer = new StringBuffer(1024);
	
		if(key == null) {
			key = "";
		}
		
		if(args == null || args.length == 0) {
			buffer.append(key);
		} else {
			String keyArgs = key + ",";
			buffer.append(keyArgs);
			for(int i=0; i<args.length; i++) {
				buffer.append(args[i]);
				if(i != args.length -1) {
					buffer.append("|");
				}
			}
		}
		
		return buffer.toString();
	}
	
	public static String getString(String key) {
		return msAcc.getMessage(key, localeResolver.resolveLocale(getRequest()));
	}
	
	public static String getString(String key, String[] args) {
		return msAcc.getMessage(key, args, localeResolver.resolveLocale(getRequest()));
	}
	
	public static String getString(String key, String[] args, String defaultStr) {
		return msAcc.getMessage(key, args, defaultStr, localeResolver.resolveLocale(getRequest()));
	}
	
	public static String getString(String key, String defaultStr) {
		return msAcc.getMessage(key, null, defaultStr, localeResolver.resolveLocale(getRequest()));
	}
	
	public static void setLang(String lang) {
		LANG = lang;
	}
	
	public static String getLang() {
		return localeResolver.resolveLocale(getRequest()).getLanguage();
	}
	
	private static HttpServletRequest getRequest() {
		HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
		return request;
	}
}
