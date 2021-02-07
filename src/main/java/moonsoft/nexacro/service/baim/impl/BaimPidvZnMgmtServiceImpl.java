package moonsoft.nexacro.service.baim.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.Variable;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimPidvZnMgmtService;

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

@Service("baimPidvZnMgmtService")
public class BaimPidvZnMgmtServiceImpl implements BaimPidvZnMgmtService {

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
	 * 집배구역  리스트 조회<br>
	 * <br>
	 * * 집배구역 상세정보 리스트를 저장한다.<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	@Override
	public Parameters getPiDvZnMgmtList(Parameters inParam) throws Exception {
		
		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		String strZipAddrDv = (String) srcParam.get("ZIP_ADDR_DV");	// 주소구분
		String strDv 		= (String) srcParam.get("DV");			// 등록구분
		
		
		// 지번일경우
		if("01".equals(strZipAddrDv)){
			
			outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimPidvZnMgmtService.getPiDvZnMgmtList"));
			
		}
		// 도로명일 경우
		else if("02".equals(strZipAddrDv)){
			
			outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimPidvZnMgmtService.getRoadPiDvZnMgmtList"));
			
		}
		
		return outParam;
	}
	
	@Override
	public Parameters getPiDvZnMstList(Parameters inParam) throws Exception {
		Parameters 			outParam = inParam.getClass().newInstance();
		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimPidvZnMgmtService.getPiDvZnMstList"));
		
		return outParam;
	}


	
	/**
	 * 집배구역 관리예하 점소 리스트 조회<br>
	 * <br>
	 * * 점소관리번호로 점소 리스트를 조회한다.<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.12
	 */
	@Override
	public Parameters getSubBranInfoList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		// 관리상위점소코드
		String strMgmtUpBranCd = "";

		for(int i=0; i<inParam.getVariableList().size(); i++) {
			final Variable val = inParam.getVariable(i);
			
			// 점소코드
			if(val.getName().equals("pMgmtUpBranCd")) {
				strMgmtUpBranCd = val.getString();
			}
			
		}
		
		// 파라미터 설정
		Map<String, String>	map = new HashMap<String, String>();
		map.put("MGMT_UP_BRAN_CD"	, strMgmtUpBranCd);
		
		
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(map, "baimPidvZnMgmtService.getSubBranInfoList"));
		
		
		return outParam;
	}


	
	
	
	/**
	 * 집배구역 상세정보 리스트 저장<br>
	 * <br>
	 * * 집배구역 상세정보 리스트를 저장한다.<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	@Override
	public Parameters savePidvZnDetailInfoList(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 회사구분, 전담조직 셋팅
		String strCpDv = "";
		String strFchrgOrgnz = "";
		for(int i=0; i<inParam.getVariableList().size(); i++) {
			final Variable val = inParam.getVariable(i);
			// 회사구분
			if(val.getName().equals("pCpDv")) {
				strCpDv = val.getString();
			}
			// 전담조직
			if(val.getName().equals("pFchrgOrgnz")) {
				strFchrgOrgnz = val.getString();
			}
		}
		
		
		List<Map<String, Object>> dsSaveList = inParam.getDataList("dsSaveList");
		
		for(int i=0; i < dsSaveList.size(); i++) 
		{
			Map<String,Object>	map = dsSaveList.get(i);
			map.put("CP_DV"			, strCpDv);				// 회사구분
			map.put("FCHRG_ORGNZ"	, strFchrgOrgnz);		// 전담조직
			
			String strZipAddrDv = (String) map.get("ZIP_ADDR_DV");	//주소구분 (지번, 도로명)
			
//			// 지번인경우
//			if(strZipAddrDv.equals("01")){
//				// 저장
//				nexacroService.insertMap(map, "baimPidvZnMgmtService.mergeJibunPidvZnDetailInfo");
//			}
//			// 도로명인경우
//			else if(strZipAddrDv.equals("02")){
//				// 저장
//				nexacroService.insertMap(map, "baimPidvZnMgmtService.mergeRoadPidvZnDetailInfo");
//			}
			
			nexacroService.insertMap(map, "baimPidvZnMgmtService.mergePidvZnDetailInfo");
			
		}
		
		return outParam;
	}

	
	/**
	 * 집배구역 구역변경 저장<br>
	 * <br>
	 * * 집배구역 구역변경 저장한다.<br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.02.06
	 */
	@Override
	public Parameters savePidvZnChgList(Parameters inParam) throws Exception {
		// return object
		Parameters outParam = inParam.getClass().newInstance();
		
		// 회사구분, 전담조직 셋팅
		String strCpDv = "";
		String strFchrgOrgnz = "";
		for(int i=0; i<inParam.getVariableList().size(); i++) {
			final Variable val = inParam.getVariable(i);
			// 회사구분
			if(val.getName().equals("pCpDv")) {
				strCpDv = val.getString();
			}
			// 전담조직
			if(val.getName().equals("pFchrgOrgnz")) {
				strFchrgOrgnz = val.getString();
			}
		}
		
		
		List<Map<String, Object>> dsSaveList = inParam.getDataList("dsSaveList");
		
		for(int i=0; i < dsSaveList.size(); i++) 
		{
			Map<String,Object>	map = dsSaveList.get(i);
			map.put("CP_DV"			, strCpDv);				// 회사구분
			map.put("FCHRG_ORGNZ"	, strFchrgOrgnz);		// 전담조직
			
			
			String strZipAddrDv = (String) map.get("ZIP_ADDR_DV");	//주소구분 (지번, 도로명)
			
//			// 지번인경우
//			if(strZipAddrDv.equals("01")){
//				// 저장
//				nexacroService.insertMap(map, "baimPidvZnMgmtService.mergeJibunPidvZnChg");
//			}
//			// 도로명인경우
//			else if(strZipAddrDv.equals("02")){
//				// 저장
//				nexacroService.insertMap(map, "baimPidvZnMgmtService.mergeRoadPidvZnChg");
//			}
			
			nexacroService.insertMap(map, "baimPidvZnMgmtService.mergePidvZnChg");			
		}
		
		return outParam;
	}
}
