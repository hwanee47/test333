/**************************************************************************************
 * 1.프로그램명  	: CmmServiceDao
 * 2.파일명		: CmmServiceDao.java
 * 3.개발자		: SSM
 * 4.개발일자		: 2018.05.24 
 * 5.버젼		: 0.1
 * 6.설명		: 서비스단에서 QueryService 처리하기 위한 DAO
 * 7.이력		
*************************************************************************************/

package moonsoft.common.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import moonsoft.common.util.StringUtil;
import com.ibatis.sqlmap.client.SqlMapClient;

@Repository("cmmServiceDao")
public class CmmServiceDao {
	
	/**
	 * Logger<br>
	 * <br>
	 * @author	seungmin
	 * @since	2018.07.31
	 */
	private Logger log = LoggerFactory.getLogger(this.getClass());
	
	public SqlMapClient getSqlManager(String dsId) {
		log.debug("CmmServiceDao getSqlManager Datasource[" + dsId + "]");
		return (SqlMapClient) StringUtil.getBean(dsId);
	}
}
