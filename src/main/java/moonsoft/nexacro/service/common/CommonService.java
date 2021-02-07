/**************************************************************************************
 * 1.프로그램명  	: CommonService
 * 2.파일명		: CommonService.java
 * 3.개발자		: SSM
 * 4.개발일자		: 2018.05.24 
 * 5.버젼		: 0.1
 * 6.설명		: 넥사크로 공통 Interface
 * 7.이력		
*************************************************************************************/

package moonsoft.nexacro.service.common;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class CommonService<br>
 * CommonService interface class<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	SeungMin
 * @version	1.0
 * @since	2018.07.19
 *
 */
public interface CommonService {
	
	/**
	 * 공통 조회 서비스<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	public Parameters selectCommon (Parameters inParam) throws Exception;
	/**
	 * 공통 그리드 개인화 정보 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	public Parameters getUserGridInfo (Parameters inParam) throws Exception;
	/**
	 * 공통 그리드 개인화 정보 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	public Parameters deleteUserGridInfo (Parameters inParam) throws Exception;
	/**
	 * 공통 그리드 개인화 정보 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	public Parameters saveUserGridInfo (Parameters inParam) throws Exception;
	/**
	 * 주소정제서버 연계<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	public Map getGeoCoding(Map inParam);
	
	/**
	 * 북마크 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	KJH
	 * @since	2020.07.03
	 */
	public Parameters saveBookmark (Parameters inParam) throws Exception;
	
	
}
