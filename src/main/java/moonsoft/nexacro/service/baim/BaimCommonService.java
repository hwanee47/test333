package moonsoft.nexacro.service.baim;

import java.util.Map;

import moonsoft.common.util.Parameters;

/**
 * The class BaimCodeService<br>
 * BaimCodeService interface class<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.06
 *
 */
public interface BaimCommonService {
	
	/**
	 * 공통코드 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	public Parameters getCommonCode (Parameters inParam) throws Exception;
	
	
	/**
	 * 우편번호 시도 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	public Parameters getSidoList (Parameters inParam) throws Exception;
	
	
	/**
	 * 우편번호 시군구 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	public Parameters getSkkList (Parameters inParam) throws Exception;
	

	/**
	 * 우편번호 시군구 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	jckim
	 * @since	2020.08.27
	 */
	public Parameters getSkkListBySido(Parameters inParam) throws Exception;
	
	
	/**
	 * 우편번호 읍면동 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	public Parameters getEmdongList (Parameters inParam) throws Exception;
	
	public Parameters getEmdongListBySkk (Parameters inParam) throws Exception;
	
	
	/**
	 * 우편번호 주소 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.12
	 */
	public Parameters getZipAddrInfoList (Parameters inParam) throws Exception;
	


	/**
	 * 주소 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	
	 * @since	2020.08.19
	 */
	public Parameters getAddrInfoList (Parameters inParam) throws Exception;
	

	
	
	/**
	 * 엑셀양식  리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.25
	 */
	public Parameters getExcelFormList (Parameters inParam) throws Exception;



}
