package moonsoft.nexacro.service.whob;

import moonsoft.common.util.Parameters;

/**
 * The class RpService<br>
 * RpService interface class<br>
 * 대한통운 RP엔진 관련 자료 및 테스트 가능 시스템 요청.<br>
 * <br>
 * <br>
 * This software is the proprietary information of CJ Systems<br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.07.06
 *
 */
public interface whobMgmtService {
	
	// 할당 관련
	public Parameters selectWhobOrd (Parameters inParam) throws Exception;
	public Parameters selectWhobStck (Parameters inParam) throws Exception;
	public Parameters insertAlloList (Parameters inParam) throws Exception;
	
	// 피킹 관련
	public Parameters selectPickOrd (Parameters inParam) throws Exception;
	public Parameters insertPickOrd (Parameters inParam) throws Exception;
	
	//확정 관련
	public Parameters selectDecisOrd (Parameters inParam) throws Exception;
	public Parameters insertDecisOrd (Parameters inParam) throws Exception;
}
