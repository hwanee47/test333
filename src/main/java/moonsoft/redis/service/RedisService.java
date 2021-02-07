package moonsoft.redis.service;

import moonsoft.common.util.Parameters;

/**
 * The class RedisService<br>
 * RedisService interface class<br>
 * <br>
 * <br>
 * <br>
 * @author	Seungmin
 * @version	1.0
 * @since	2018.08.23
 *
 */
public interface RedisService {

	/**
	 * Redis에서 WebPush 정보 조회.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.08.23
	 */
	public Parameters selectUserPush (Parameters inParam) throws Exception;	
	
	/**
	 * Redis에서 WebPush 정보 등록<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.08.23
	 */
	public Parameters insertUserPush (Parameters inParam) throws Exception;	
	
	/**
	 * Redis에서 WebPush 정보 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Seungmin
	 * @since	2018.08.23
	 */
	public Parameters deleteUserPush (Parameters inParam) throws Exception;	
}
