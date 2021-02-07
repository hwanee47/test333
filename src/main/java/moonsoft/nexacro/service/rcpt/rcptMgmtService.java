package moonsoft.nexacro.service.rcpt;

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
public interface rcptMgmtService {
	
	/**
	 * 주문접수
	 */
	public Parameters selectRcptOrdTemp (Parameters inParam) throws Exception;
	public Parameters insertRcptOrdTemp (Parameters inParam) throws Exception;
	public Parameters updateRcptOrdTempModi(Parameters inParam) throws Exception;
	public Parameters insertRcptOrdDecis (Parameters inParam) throws Exception;
	public Parameters deleteRcptOrdTemp(Parameters inParam) throws Exception;
	
	public Parameters getRcptOrdExcelForm (Parameters inParam) throws Exception;
	public Parameters saveRcptOrdExcelForm (Parameters inParam) throws Exception;
	public Parameters deleteRcptOrdExcelForm (Parameters inParam) throws Exception;
	
		
	/**
	 * 주문확정
	 */
	public Parameters selectRcptOrdList (Parameters inParam) throws Exception;
	public Parameters selectRcptOrdDetailList (Parameters inParam) throws Exception;
	public Parameters insertRcptOrdList(Parameters inParam) throws Exception;
}
