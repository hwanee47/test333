/**************************************************************************************
 * 1.프로그램명  	: SystemCargoService
 * 2.파일명		: SystemCargoService.java
 * 3.개발자		: SSM
 * 4.개발일자		: 2019.02.13 
 * 5.버젼		: 0.1
 * 6.설명		: 화물맨 Interface 
 * 7.이력		
*************************************************************************************/

package moonsoft.nexacro.service.common;

import org.json.simple.JSONObject;

import moonsoft.common.util.Parameters;


/**
 * The class SystemCargoService<br>
 * SystemCargoService interface class<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	SeungMin
 * @version	1.0
 * @since	2019.02.13
 *
 */
public interface SystemCargoService {
	
	/**
	 * 화물맨 execute Method<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	public JSONObject execute(JSONObject inParam) throws Exception;
	
	/**
	 * 화물맨 화물등록<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	public Parameters executeCargoInsert (Parameters inParam) throws Exception;
	
	/**
	 * 화물맨 화물수정<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	public Parameters executeCargoUpdate (Parameters inParam) throws Exception;
	
	/**
	 * 화물맨 화물취소<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	public Parameters executeCargoCancel (Parameters inParam) throws Exception;
	
	/**
	 * 화물맨 화물 재등록<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	public Parameters executeCargorReopen (Parameters inParam) throws Exception;
	
	/**
	 * 화물맨 주소찾기<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	public Parameters executeCargoAddrSearch (Parameters inParam) throws Exception;
	
	/**
	 * 화물맨 공통코드<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	public Parameters executeCargoCodeConfig (Parameters inParam) throws Exception;
	
	/**
	 * 화물맨 주소정보 자동 맵핑<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	public Parameters executeAddrMapping (Parameters inParam) throws Exception;
}
