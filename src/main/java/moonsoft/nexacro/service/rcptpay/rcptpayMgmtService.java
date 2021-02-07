package moonsoft.nexacro.service.rcptpay;

import java.util.Map;

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
public interface rcptpayMgmtService {
	
	//수불 조회
	public Parameters selectRcptpayByHour (Parameters inParam) throws Exception;
	public Parameters selectRcptpayByDay (Parameters inParam) throws Exception;
	public Parameters selectRcptpayByMon (Parameters inParam) throws Exception;
	
	//수불 생성
	public Parameters saveRcptpayByHour (Parameters inParam) throws Exception;
	public Parameters saveRcptpayByDay (Parameters inParam) throws Exception;
	public Parameters saveRcptpayByMon (Parameters inParam) throws Exception;
	
	//스케줄 수불편성
	public void saveRcptpayByHour_Scheduler(Map map) throws Exception;
}
