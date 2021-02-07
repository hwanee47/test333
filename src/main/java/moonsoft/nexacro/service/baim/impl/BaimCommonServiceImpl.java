package moonsoft.nexacro.service.baim.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.Variable;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.constants.CommonCodeSqlIdConstants;
import moonsoft.nexacro.service.baim.BaimCommonService;

/**
 * The class BaimCodeServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.02.06
 *
 */

@Service("baimCommonService")
public class BaimCommonServiceImpl implements BaimCommonService {

	/**
	 * Logger<br>
	 * <br>
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 공통코드 조회<br>
	 * <br>
	 * * 조회시 코드값을 DataSet Column의 QUERY_LIST에 코드 파라메터를 추가한다 <br>
	 * 예시) q1=HE0170 q2=HE0180 <br>
	 * 향후 로직부분은 변경될 경우의 수가 있으며 임시로 사용된다.
	 * 선택, 전체, ==== , all 등 값이 없이 지정되어 사용되는 데이터는 Nexacro에서 insert Row로 임시적 사용을 해야한다.<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
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
				final DataSet resultDs = nexacroService.queryForDataset(searchParam, "baimCommonService.getCodeList");
				outParam.setOutDatasetList(dsName, resultDs);
			}
		}
		return outParam;
	}

	
	/**
	 * 시도 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	@Override
	public Parameters getSidoList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(null, "baimCommonService.getSidoList"));
		
		return outParam;
	}
	
	/**
	 * 시군구 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	@Override
	public Parameters getSkkList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimCommonService.getSkkList"));
		
		return outParam;
	}
	
	/**
	 * 시군구 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	jckim
	 * @since	2020.08.27
	 */
	@Override
	public Parameters getSkkListBySido(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimCommonService.getSkkListBySido"));
		
		return outParam;
	}

	/**
	 * 읍면동 리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.17
	 */
	@Override
	public Parameters getEmdongList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimCommonService.getEmdongList"));
		
		return outParam;
	}

	@Override
	public Parameters getEmdongListBySkk(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimCommonService.getEmdongListBySkk"));
		
		return outParam;
	}
	
	/**
	 * 우편번호 주소 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.12
	 */
	@Override
	public Parameters getZipAddrInfoList(Parameters inParam) throws Exception {
		final Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		String strZipAddrDv = (String) srcParam.get("ZIP_ADDR_DV");	// 주소구분
		
		// 지번인경우
		if( "01".equals(strZipAddrDv) ){
			outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimCommonService.getZipJibunAddrInfoList"));
		}
		// 도로명인경우
		else if ( "02".equals(strZipAddrDv) ){
			outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimCommonService.getZipRoadAddrInfoList"));
		}

		
		
		return outParam;
	}
	
	
	/**
	 * 엑셀양식  리스트 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.25
	 */
	@Override
	public Parameters getExcelFormList(Parameters inParam) throws Exception {
		final Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(srcParam, "baimCommonService.getExcelFormList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsXlsFrmNm", resultDs);
		}
		
		
		return outParam;
	}


	
	
	
	
	/**
	 * 주소 조회<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	
	 * @since	2020.08.19
	 */
	@Override
	public Parameters getAddrInfoList(Parameters inParam) throws Exception {		
		final Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> 	srcParam = inParam.getData("dsSearch");
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		String strParam = (String) srcParam.get("DETAIL_ADDR");	// 상세주소
		String[] strAddr = strParam.split(" ");
		String strCommonService = "";
		
		paramMap.put("SIDO_NM" , (String) srcParam.get("SIDO_NM"));
		paramMap.put("SKK_NM" , (String) srcParam.get("SKK_NM"));
		
		
		if(strAddr.length == 1){
			String[] strDetail = strAddr[0].split("-");
			
			if(strDetail.length == 1){
				if(isNumeric(strDetail[0])){
					// case 4: 본번
					paramMap.put("MAIN_BUN", strDetail[0]);	// 본번
					strCommonService = "baimCommonService.getAddrInfoList";
				}
				else {
					// case 5: 건물명 + 도로명 + 읍/면/동명
					paramMap.put("ROAD_NM", strDetail[0]);
					strCommonService = "baimCommonService.getBldgInfoList";
				}
			}
			else {
				// case 3: 본번 + 부번
				paramMap.put("MAIN_BUN", strDetail[0]);	// 본번
				paramMap.put("SUB_BUN",  strDetail[1]);	// 부번
				strCommonService = "baimCommonService.getAddrInfoList";
			}
		}
		else if(strAddr.length == 2) {
			String[] strDetail = strAddr[1].split("-");
			
			if(strDetail.length == 1){
				// case 2: 도로명(읍/면/동) + 본번
				paramMap.put("ROAD_NM", strAddr[0]);
				paramMap.put("MAIN_BUN", strDetail[0]);	// 본번
				strCommonService = "baimCommonService.getAddrInfoList";
			}
			else {
				// case 1: 도로명(읍/면/동) + 본번 + 부번
				paramMap.put("ROAD_NM", strAddr[0]);
				paramMap.put("MAIN_BUN", strDetail[0]);	// 본번
				paramMap.put("SUB_BUN",  strDetail[1]);	// 부번
				strCommonService = "baimCommonService.getAddrInfoList";
			}
		}
		else {
			// error
			return outParam;
		}
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(paramMap, strCommonService));
		
		return outParam;
	}
	
	public static boolean isNumeric(String str){
		try{
			Double.parseDouble(str);
			return true;
		} catch(NumberFormatException e){
			return false;
		}
	}

	
	
}
