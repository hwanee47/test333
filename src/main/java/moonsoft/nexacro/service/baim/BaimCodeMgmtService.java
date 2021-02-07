package moonsoft.nexacro.service.baim;

import moonsoft.common.util.Parameters;

/**
 * The class BaimCodeMgmtService<br>
 * BaimCodeMgmtService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Jin Seon Ju
 * @version	1.0
 * @since	2020.02.27
 *
 */
public interface BaimCodeMgmtService {
	/**
	 * 코드 대분류 조회
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.27
	 */
	public Parameters getBaimCodeList (Parameters inParam) throws Exception;
	
	/**
	 * 코드 소분류 조회
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.27
	 */
	public Parameters getBaimCodeDetailList (Parameters inParam) throws Exception;
	
	/**
	 * 기초코드 저장
	 * @param inParam
	 * @return
	 * @throws Exception
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Jin Seon ju
	 * @since	2020.02.27
	 */
	public Parameters saveBaimCodeInfos(Parameters inParam) throws Exception;
	
}
