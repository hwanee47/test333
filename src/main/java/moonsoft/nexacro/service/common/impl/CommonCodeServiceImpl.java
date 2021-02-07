/**
 * The class CommonCodeServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.08.02
 *
 */
package moonsoft.nexacro.service.common.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.constants.CommonCodeSqlIdConstants;
import moonsoft.nexacro.service.common.CommonCodeService;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.Variable;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import static moonsoft.common.util.StringUtil.isNull;

@Service("commonCodeService")
public class CommonCodeServiceImpl extends EgovAbstractServiceImpl implements CommonCodeService {
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 공통코드를 조회한다.<br>
	 * 조회시 코드값을 DataSet Column의 QUERY_LIST에 코드 파라메터를 추가한다 <br>
	 * 예시) q1=HE0170 q2=HE0180 <br>
	 * 향후 로직부분은 변경될 경우의 수가 있으며 임시로 사용된다.
	 * 선택, 전체, ==== , all 등 값이 없이 지정되어 사용되는 데이터는 Nexacro에서 insert Row로 임시적 사용을 해야한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.08.02
	 */
	@Override
	public Parameters getCommonCode(Parameters inParam) throws Exception {
		
		final Parameters outParam = inParam.getClass().newInstance();
		for(int i=0; i<inParam.getVariableList().size(); i++) {
			final Variable val = inParam.getVariable(i);
			if(val.getName().indexOf("q") == 0 && val.getName().length() == 2) {
				final String searchCode = val.getString();
				final String dsName = val.getName().replace("q", "ds");
				final Map<String,String> searchParam = new HashMap<String,String>();
				searchParam.put("CD_TCD", searchCode);
				final DataSet resultDs = nexacroService.queryForDataset(searchParam, CommonCodeSqlIdConstants.SQL_COMMON_CODE);
				outParam.setOutDatasetList(dsName, resultDs);
			}
		}
		return outParam;
	}

	/**
	 * 실행거점을 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.08.03
	 */
	@Override
	public Parameters getCommonCodeCorp(Parameters inParam) throws Exception {
		
		final Parameters		 outParam	 = inParam.getClass().newInstance();
		final Map<String,Object> searchParam = inParam.getData("dsSearchCorp");
		
		if( searchParam.isEmpty() ) {
			final String ip = inParam.getRequest().getRemoteAddr();
			searchParam.put("CLIENTIP"	, ip);
			searchParam.put("SEQ_NO"	, "");
			/*searchParam.put("ID"		, inParam.getUserId());
			searchParam.put("USER_ID"	, inParam.getUserId()); */
			searchParam.put("SELECT_ALL", "Y");
		}
		
		final String searchCombo = (String)searchParam.get("COMBO");
		String sqlId;
		if( !isNull(searchCombo) && "Y".equals(searchCombo) ) {
			sqlId = CommonCodeSqlIdConstants.SQL_COMMON_CODE_CORP2;
		} else {
			sqlId = CommonCodeSqlIdConstants.SQL_COMMON_CODE_CORP;
		}
		
		final DataSet resultDs = nexacroService.queryForDataset(searchParam, sqlId);
		outParam.setOutDatasetList("ds1", resultDs);
		return outParam;
	}

	/**
	 * 직영 위수탁 정보를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.08.02
	 */
	@Override
	public Parameters getCommonCodeEqp(Parameters inParam) throws Exception {

		final Parameters		 outParam	 = inParam.getClass().newInstance();
		final Map<String,Object> searchParam = inParam.getData("dsSearchPop");
		final DataSet resultDs = nexacroService.queryForDataset(searchParam, CommonCodeSqlIdConstants.SQL_COMMON_CODE_EQP);
		outParam.setOutDatasetList("dsCodeEqp", resultDs);
		return outParam;
	}
}
