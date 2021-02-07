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

import moonsoft.common.util.Parameters;

/**
 * The class NexacroLogService<br>
 * NexacroLogService interface class<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	SeungMin
 * @version	1.0
 * @since	2018.07.19
 *
 */
public interface NexacroLogService {
	
	/**
	 * 회원 작업 로그 등록 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	public Parameters saveNexacroLog (Parameters inParam) throws Exception;
}
