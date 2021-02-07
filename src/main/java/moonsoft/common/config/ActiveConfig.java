package moonsoft.common.config;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;
import org.springframework.web.context.ContextLoaderListener;

import moonsoft.common.service.NexacroService;
import egovframework.rte.psl.orm.ibatis.SqlMapClientTemplate;


/**
 * The class ActiveConfig<br>
 * <br>
 * 주기적으로 DB(TADM_SYS_ENV)의 시스템 설정정보를 갱신하여 조회하는 프로그램<br>
 * COMM/CONFIG_REFRESH_PERIOD 항목을 설정하여 새로고침 주기를 적용할 수 있음.<br>
 * 
 * ex) String refreshPeriod	= ActiveConfig.get("COMM","CONFIG_REFRESH_PERIOD");
 * <br>
 * <br>
 * <br>
 * @author	
 * @version	1.0
 * @since	2018. 9. 13.
 */
@Service("sf")
public class ActiveConfig {
	private Logger logger = LoggerFactory.getLogger(ActiveConfig.class);
	
	// Period of Property refresh. (Milisecond)
	private	static final	long		REFRESH_PERIOD_DEFAULT	= 300000;
	
	// PropertyName	= ENV_GRP + PROPERTY_SEPARATOR + ENV_CD (ex: "COMM$$DEFAULT_PERIOD" )
	private	static final	String		PROPERTY_SEPARATOR		= "$$";		
	
	// Set refresh period at "COMM/REFRESH_PERIOD"
	private	static final	String		ENV_GRP_REFRESH_PERIOD	= "COMM";			
	private	static final	String		ENV_CD_REFRESH_PERIOD	= "CONFIG_REFRESH_PERIOD";

	// Singleton SELF Object.
	private	static	ActiveConfig		__SELF__		= null;	
	
	// Singleton Object Variables
	private	Map<String,String>	propMap			= new HashMap<String,String>();
	private	long		lastRefreshedTime		= 0;
	private	long		refreshPeriod			= REFRESH_PERIOD_DEFAULT;
	
	
	/**
	 * 환경변수 조회<br>
	 * <br>
	 * @param envGrp
	 * @param envCd
	 * @return
	 * @author	
	 * @since	2018. 9. 13.
	 */
	public static String get(SqlMapClientTemplate sqlClient, String envGrp, String envCd) {
		return getInstance().getProperty(sqlClient, envGrp, envCd);
	}

	
	/**
	 * Get Singleton SELF Object<br>
	 * <br>
	 * @return
	 * @author	
	 * @since	2018. 9. 13.
	 */
	private static ActiveConfig getInstance() {
		if(ActiveConfig.__SELF__ == null) {
			ActiveConfig.__SELF__	= new ActiveConfig();
		}
		return ActiveConfig.__SELF__;
	}

	
	/**
	 * 환경변수를 조회하면 주기적으로 DB의 환경정보를 Refresh한 후 결과를 Return<br>
	 * <br>
	 * @param envGrp
	 * @param envCd
	 * @return
	 * @author	
	 * @since	2018. 9. 13.
	 */
	private	String getProperty(SqlMapClientTemplate sqlClient, String envGrp, String envCd) {
		String	propName	= getPropertyName(envGrp, envCd);
		long	nowTime		= System.currentTimeMillis();
		
		//logger.debug("[ActiveConfig.getProperty()] envGrp["+envGrp+"] envCd["+envCd+"] lastRefreshedTime["+lastRefreshedTime+"] nowTime["+nowTime+"]");
		
		if((nowTime - this.lastRefreshedTime) > refreshPeriod) {
			resetProperty(sqlClient);
		}
		return this.propMap.get(propName);
	}
	
	
	/**
	 * 그룹명과 코드명을 조합하여 Map에 저장된 환경변수명을 생성<br>
	 * <br>
	 * @param envGrp
	 * @param envCd
	 * @return
	 * @author	
	 * @since	2018. 9. 13.
	 */
	private String getPropertyName(String envGrp, String envCd) {
		return envGrp + ActiveConfig.PROPERTY_SEPARATOR + envCd;
	}
	

	/**
	 * DB의 환경정보를 읽어 Map에 적재<br>
	 * Refresh 주기 역시 환경정보 설정으로 적용 가능함<br>
	 * <br>
	 * @author	
	 * @since	2018. 9. 13.
	 */
	@SuppressWarnings("rawtypes")
	private void resetProperty(SqlMapClientTemplate sqlClient) {
		//ApplicationContext appContext = ContextLoaderListener.getCurrentWebApplicationContext();
		//NexacroService nexacroService	= (NexacroService)appContext.getBean("nexacroService");
		
		List	result		= null;
		Map		map			= null;
		//
		String	envGrp		= null;
		String	envCd		= null;
		String	envVal		= null;
		
		logger.debug("[ActiveConfig.resetProperty()] Run...");
		result	= (List)sqlClient.queryForList("activeConfig.getSysEnv");
		
		for(int i=0; i<result.size(); i++) {
			map	= (Map)result.get(i);
			//
			envGrp	= (String)map.get("ENV_GRP");
			envCd	= (String)map.get("ENV_CD");
			envVal	= (String)map.get("ENV_VAL");

			// Reset refresh period from setting.
			if(ActiveConfig.ENV_GRP_REFRESH_PERIOD.equals(envGrp) && ActiveConfig.ENV_CD_REFRESH_PERIOD.equals(envCd)) {
				try {
					this.refreshPeriod	= Long.parseLong(envVal);
				} catch(NumberFormatException ex) {
					this.refreshPeriod	= ActiveConfig.REFRESH_PERIOD_DEFAULT;
					ex.printStackTrace();
				}
			}
			this.propMap.put(getPropertyName(envGrp, envCd), envVal);
		}
		this.lastRefreshedTime	= System.currentTimeMillis();
		logger.debug("[ActiveConfig.resetProperty()] End... PropMap["+this.propMap+"]");
	}
}
