package moonsoft.wsdl.ws.cargo;

import java.lang.reflect.Field;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import moonsoft.wsdl.vo.CargoInfoVo;

public class webServiceUtil {
	private static final Log LOG = LogFactory.getLog(webServiceUtil.class);
	
	// CargoInfoVo, Map으로 변환
	public static Map<String, Object> voToMap(CargoInfoVo rCargoInfo) {
        Map<String, Object> map = new HashMap<String, Object>();

        Field[] fields = rCargoInfo.getClass().getDeclaredFields();

        for(Field field : fields){
            String filedName = field.getName();
            String methodName = filedName.replaceFirst(filedName.substring(0, 1), filedName.substring(0, 1).toUpperCase());
            
			try {
				map.put(camelToUnderbar(filedName), rCargoInfo.getClass().getDeclaredMethod("get" + methodName).invoke(rCargoInfo));
			} 
			catch (Exception e) { 
				LOG.error("voToMap Exception", e);
			} 
        }
        return map;
    }
	
	public static String camelToUnderbar(String cpCase){
		LinkedList<Character> list = new LinkedList<Character>();
		int length = cpCase.length();
		for(int i=0 ;  i < length ; i++){
			list.add(i, cpCase.charAt(i));
		}
		for(int i=0; ;i++){
			int toInteger = (int)list.get(i);
			if(toInteger <= 90){
				toInteger += 32;
				list.set(i, (char)toInteger);
				if(i != 0){
					list.add(i, '_');
				}
			}
			if(i == list.size()-1)
				break;
		}
		
		String potholeCase = "";
		for(Character ch : list){
			potholeCase += ch;
		}
		
		return potholeCase.toUpperCase();
	}
	
	/**
	 * Object Null 값 체크
	 * <br>
	 * @param obj
	 * @return
	 * @ahthor JAEHYUN
	 * @since 2018. 5. 23.
	 */
	public static boolean isNull(Object obj) {
		if(obj == null || "".equals(obj.toString().trim())) {
			return true;
		} else {
			return false;
		}

	}
	
	/**
	 * 
	 * yyyyMMdd 형 Date Format 체크.
	 * @param date
	 * @return
	 * @ahthor JAEHYUN
	 * @since 2018. 5. 23.
	 */
	public static boolean checkDateFormat(String dateStr) 
	{
        try {
            DateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");
            df.setLenient(false);
            df.parse(dateStr);
            return true;
        } 
        catch (ParseException e) {
            return false;
        }
	}
}
