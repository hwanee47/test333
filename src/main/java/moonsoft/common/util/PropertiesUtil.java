package moonsoft.common.util;

import java.io.Reader;
import java.util.Properties;

import org.apache.ibatis.io.Resources;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class PropertiesUtil {
	private static final Logger logger = LoggerFactory.getLogger(PropertiesUtil.class);
	
	private static final String path = "egovframework/config/conf.properties";
	
	public static String getPropValue(String key) throws Exception{
		Properties prop = readPropFile();
		return prop.getProperty(key);
	}
	
	public static Properties readPropFile() throws Exception{
		Properties properties = new Properties();
		
		Reader reader = Resources.getResourceAsReader(path);
		properties.load(reader);
		
		return properties;
	}
	
	public static String getString(String key) {
		String value = "";
		try {
			Properties prop = readPropFile();
			value 			= prop.getProperty(key);
			value 			= StringUtil.nullToString(value);
		} catch(Exception e) {
			logger.debug("PropertiesUtil Error =>", e);
		}

		return value;
	}
}
