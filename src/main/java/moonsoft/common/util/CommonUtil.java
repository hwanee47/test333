package moonsoft.common.util;

import java.math.BigDecimal;
import java.util.Date;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * 서비스에 필요한 함수모음
 * @author wwwoong
 * @since 2010.01.08
 */
public class CommonUtil {

	private static final Log logger = LogFactory.getLog(CommonUtil.class);

	/**
	 * 맵에 특정파라미터값이 널이거나 비어있는지 체크
	 */
	@SuppressWarnings("rawtypes")
	public static boolean isEmpty(Map rowMap, String paramStr) {
		if(!rowMap.containsKey(paramStr)) {
			return true;
		}

		Object obj = rowMap.get(paramStr);
		if(obj == null) {
			return true;
		}

		String str = "";
		if(obj instanceof BigDecimal) {
			str = ((BigDecimal)obj).toString();
		} else if(obj instanceof Double) {
			str = ((Double)obj).toString();
		} else if(obj instanceof Integer) {
			str = ((Integer)obj).toString();
		} else if(obj instanceof String) {
			str = (String)obj;
		} else if(obj instanceof Date) {
			str = ((Date)obj).toString();
		} else if(obj instanceof Long) {
			str = ((Long)obj).toString();
		} else{
			logger.debug("비교할수있는  데이타타입이 아님");
		}

		if(StringUtils.isEmpty(str) || "NULL".equals(str)) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * Map의 파라미터값을 문자열로 변환하여 리턴한다.
	 */
	public static String getStr(Map rowMap, String paramStr) {

		Object obj = rowMap.get(paramStr);
		if(obj == null) {
			return "";
		}
		String str;
		if(obj instanceof BigDecimal) {
			str = ((BigDecimal)obj).toString();
		} else if(obj instanceof Double) {
			str = ((Double)obj).toString();
		} else if(obj instanceof Integer) {
			str = ((Integer)obj).toString();
		} else if(obj instanceof String) {
			str = (String)obj;
		} else if(obj instanceof Date) {
			str = ((Date)obj).toString();
		} else {
			str = obj.toString();
		}

		return str;
	}
	
	/**
	 * isEmpty의 반대
	 * {@link #isEmpty}  
	 */
	public static boolean isNotEmpty(Map rowMap, String paramStr) {
		return !CommonUtil.isEmpty(rowMap, paramStr);
	}
	

}
