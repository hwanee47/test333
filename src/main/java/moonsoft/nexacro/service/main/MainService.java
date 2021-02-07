package moonsoft.nexacro.service.main;

import java.util.Map;

public interface MainService {

	/**
	 * 지역별 현황 조회<br>
	 * <br>
	 * <br>
	 * @param	ZN_DV		NexacroPlatform parameters
	 * @author	Jin Seon Ju
	 * @since	2020.03.17
	 */
	public Map<String,Object> getResionStatusInfo (Map<String, Object> param) throws Exception;
}
