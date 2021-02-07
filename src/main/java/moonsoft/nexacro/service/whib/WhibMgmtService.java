package moonsoft.nexacro.service.whib;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class WhiotestService<br>
 * whiotestService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	SCY
 * @version	1.0
 * @since	2020.02.28
 *
 */
public interface WhibMgmtService {
	

	/**
	 * 입고관리 리스트 조회<br>
	 * <br>
	 * 	입고관리 리스트 조회
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SCY
	 * @since	2020.02.28
	 */
	
	//입고예정조회
	public Parameters getWhibMgmt (Parameters inParam) throws Exception;
	//엑셀 temp 신규저장
	public Parameters insertTemp(Parameters inParam) throws Exception;
	//엑셀 temp 수정
	public Parameters updateTemp(Parameters inParam) throws Exception;
	//엑셀 temp 삭제
	public Parameters deleteTemp(Parameters inParam) throws Exception;
	//입고 확정 후 TEMP 삭제
	public Parameters saveAndDeleteTemp(Parameters inParam) throws Exception;
	//입고신규=>확정
	public Parameters saveWareiDecis(Parameters inParam) throws Exception;	
	
	
	//입고확정조회
	public Parameters getWhibDecisMgmt(Parameters inParam) throws Exception;	
	//입고확정된 데이터 USE_YN='N'
	public Parameters deleteWareiInfo(Parameters inParam) throws Exception;
	//입고확정=>재고
	public Parameters saveStcDecis(Parameters inParam) throws Exception;

}
