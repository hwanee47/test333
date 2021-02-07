package moonsoft.visibility.service;

import java.util.Map;

public interface EntVhclCntrService {

	public Map<String, Object> getVhclList(Map<String, Object> param) throws Exception;
	
	public Map<String, Object> getVhclInfo(Map<String, Object> param) throws Exception;
	
	public Map<String, Object> getVhclRoute(Map<String, Object> param) throws Exception;
	
	public Map<String, Object> getSagoImgList(Map<String, Object> param) throws Exception;
	
}
