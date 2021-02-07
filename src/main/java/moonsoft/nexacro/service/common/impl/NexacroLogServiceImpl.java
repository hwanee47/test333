/**************************************************************************************
 * 1.프로그램명  	: NexacroLogServiceImpl
 * 2.파일명		: NexacroLogServiceImpl.java
 * 3.개발자		: SSM
 * 4.개발일자		: 2018.05.24 
 * 5.버젼		: 0.1
 * 6.설명		: 넥사크로 회원 작업 로그
 * 7.이력		
*************************************************************************************/

package moonsoft.nexacro.service.common.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.common.NexacroLogService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("nexacroLogService")
public class NexacroLogServiceImpl extends EgovAbstractServiceImpl implements NexacroLogService {
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	@SuppressWarnings({ "unchecked", "rawtypes" })
	@Override
	public Parameters saveNexacroLog(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map paramMap = inParam.getVariableMap();
		String url = inParam.getServiceBeanName() + "." + inParam.getMethodName();
		
		Map LogHashMap = new HashMap();
		LogHashMap.put("progUrl"		, url);
		LogHashMap.put("gv_progUrl"		, paramMap.get("gv_progUrl"));
		LogHashMap.put("ipAddr"			, paramMap.get("gv_ipAddr"));
		LogHashMap.put("gv_userId"		, paramMap.get("gv_userId"));
		LogHashMap.put("progCd"			, paramMap.get("gv_progCd"));
		LogHashMap.put("progNm"			, paramMap.get("gv_progNm"));
		LogHashMap.put("regSys"			, paramMap.get("gv_sysGb"));

		//nexacroService.insert("commonService.insertUserProgLog", LogHashMap);
		
		return outParam;
	}
	
}
