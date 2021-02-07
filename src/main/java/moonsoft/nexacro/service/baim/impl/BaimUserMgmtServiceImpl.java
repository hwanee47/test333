package moonsoft.nexacro.service.baim.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.redis.connection.DataType;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.datatype.PlatformDataType;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.baim.BaimUserMgmtService;

/**
 * The class baimUserMgmtService<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.03.02
 *
 */

@Service("baimUserMgmtService")
public class BaimUserMgmtServiceImpl implements BaimUserMgmtService {

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
	 * 사용자 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.05.15
	 */
	@Override
	public Parameters getUserList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(searchMap, "baimUserMgmtService.getUserList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsUserList", resultDs);
		}

		return outParam;
	}
	
	
	/**
	 * 사용자 권한을 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.03
	 */
	@Override
	public Parameters getAuthList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSubSearch1");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		// 등록되지않은 그룹권한 조회 
		resultDs = nexacroService.queryForDataset(searchMap, "baimUserMgmtService.getGroupAuthListBefore");
		outParam.setOutDatasetList("dsGroupAuthListBefore", resultDs);
		
		// 등록된 그룹권한 조회
		resultDs = nexacroService.queryForDataset(searchMap, "baimUserMgmtService.getGroupAuthListAfter");
		outParam.setOutDatasetList("dsGroupAuthListAfter", resultDs);
		
		// 등록되지않은 창고권한 조회
		resultDs = nexacroService.queryForDataset(searchMap, "baimUserMgmtService.getWarehAuthListBefore");
		outParam.setOutDatasetList("dsWarehAuthListBefore", resultDs);
		
		// 등록된 창고권한 조회
		resultDs = nexacroService.queryForDataset(searchMap, "baimUserMgmtService.getWarehAuthListAfter");
		outParam.setOutDatasetList("dsWarehAuthListAfter", resultDs);
		
		
		// 등록된 고객권한 조회
		resultDs = nexacroService.queryForDataset(searchMap, "baimUserMgmtService.getCustAuthList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsCustAuthList", resultDs);
		}
		
		
		

		return outParam;
	}
	
	
	/**
	 * 사용자 저장<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.02
	 */
	@Override
	public Parameters saveUserInfoList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSaveList    = inParam.getDataSet("dsSaveList");
		
		int nRowCnt = dsSaveList.getRowCount();
		
		int chkCnt = 0;
		String strChk = "";
		String strUserType = "";
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			strChk = dsSaveList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsSaveList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				dsSaveList.set(i, "SYS_DV", dsSaveList.getString(i, "gv_sysDv"));
				
				// 사용자(TADM_KFR_USER) 추가
				nexacroService.insertDataSet(dsSaveList, i, "baimUserMgmtService.insertUserInfo");
				
				// 사용자(TB_BAIM_EMP_MGT_C) 추가
				nexacroService.insertDataSet(dsSaveList, i, "baimUserMgmtService.insertUserInfo2");
				
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 사용자(TADM_KFR_USER) 수정
				nexacroService.updateDataSet(dsSaveList, i, "baimUserMgmtService.updateUserInfo");
				
				
				// 사용자(TB_BAIM_EMP_MGT_C) 수정
				nexacroService.updateDataSet(dsSaveList, i, "baimUserMgmtService.updateUserInfo2");
			}
			
			
			
			// 외부사용자로 저장시 지정한 고객사는 자동으로 창고고객권한으로  INSERT 처리. ( 고객사를 변경하는 경우도 있으니 기존에 있는 창고고객권한은 삭제후 INSERT )
			strUserType = dsSaveList.getString(i, "USER_TYPE");
			if("U01".equals(strUserType)){
				nexacroService.deleteDataSet(dsSaveList, i, "baimUserMgmtService.deleteCustAuthAll");
				nexacroService.insertDataSet(dsSaveList, i, "baimUserMgmtService.mergeCustAuth");
			}
		}
		
		return outParam;
	}
	
	
	/**
	 * 사용자 저장(관리자용)<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.10
	 */
	@Override
	public Parameters saveUserInfoList_syst(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsSaveList    = inParam.getDataSet("dsSaveList");
		
		int nRowCnt = dsSaveList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			int nRowType = dsSaveList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				
				// 사용자(TADM_KFR_USER) 추가
				nexacroService.insertDataSet(dsSaveList, i, "baimUserMgmtService.insertUserInfo");
				
				// 사용자(TB_BAIM_EMP_MGT_C) 추가
				nexacroService.insertDataSet(dsSaveList, i, "baimUserMgmtService.insertUserInfo2");
				
				
				// 관리자 권한 추가 ( 권한 코드  = 화면에서 지정한 시스템구분코드 (GWDS, GWMS, GDS) )
				nexacroService.insertDataSet(dsSaveList, i, "baimUserMgmtService.insertGroupAuthList");
				
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				// 사용자(TADM_KFR_USER) 수정
				nexacroService.updateDataSet(dsSaveList, i, "baimUserMgmtService.updateUserInfo");
				
				
				// 사용자(TB_BAIM_EMP_MGT_C) 수정
				nexacroService.updateDataSet(dsSaveList, i, "baimUserMgmtService.updateUserInfo2");
			}
		}
		
		return outParam;
	}

	/**
	 * 비밀번호 변경<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.03.02
	 */
	@Override
	public Parameters updateUserPw(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		Map<String,Object> dsUserInfo    = inParam.getData("dsUserInfo");
		
	
		// 사용자(TADM_KFR_USER) 수정
		nexacroService.updateMap(dsUserInfo, "baimUserMgmtService.updateUserPw");
		
		
		return outParam;
	}
	
	
	/**
	 * 사용자 그룹권한을 추가한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.03.03
	 */
	@Override
	public Parameters insertGroupAuthList(Parameters inParam) throws Exception {
		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsGroupAuthListBefore    = inParam.getDataSet("dsGroupAuthListBefore");
		
		int nRowCnt = dsGroupAuthListBefore.getRowCount();
		
		int cnt = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsGroupAuthListBefore.getString(i, "CHK");
			
			// 체크되지 않은 행은 추가 X
			if("1".equals(strChk)==false) continue;
			
			// 사용자별 그룹권한 추가
			nexacroService.insertDataSet(dsGroupAuthListBefore, i, "baimUserMgmtService.insertGroupAuthList");
		}
		
		return outParam;
	}
	
	/**
	 * 사용자 그룹권한을 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.03.03
	 */
	@Override
	public Parameters deleteGroupAuthList(Parameters inParam) throws Exception {
		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsGroupAuthListAfter    = inParam.getDataSet("dsGroupAuthListAfter");
		
		int nRowCnt = dsGroupAuthListAfter.getRowCount();
		
		int cnt = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsGroupAuthListAfter.getString(i, "CHK");
			
			// 체크되지 않은 행은 추가 X
			if("1".equals(strChk)==false) continue;
			
			// 사용자별 그룹권한 추가
			nexacroService.insertDataSet(dsGroupAuthListAfter, i, "baimUserMgmtService.deleteGroupAuthList");
		}
		
		return outParam;
	}
	
	
	/**
	 * 사용자 창고권한을 추가한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.03.03
	 */
	@Override
	public Parameters insertWarehAuthList(Parameters inParam) throws Exception {
		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsWarehAuthListBefore    = inParam.getDataSet("dsWarehAuthListBefore");
		
		int nRowCnt = dsWarehAuthListBefore.getRowCount();
		
		int cnt = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsWarehAuthListBefore.getString(i, "CHK");
			
			// 체크되지 않은 행은 추가 X
			if("1".equals(strChk)==false) continue;
			
			// 사용자별 창고권한 추가
			nexacroService.insertDataSet(dsWarehAuthListBefore, i, "baimUserMgmtService.insertWarehAuthList");
		}
		
		return outParam;
	}
	
	/**
	 * 사용자 창고권한을 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.03.03
	 */
	@Override
	public Parameters deleteWarehAuthList(Parameters inParam) throws Exception {
		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsWarehAuthListAfter    = inParam.getDataSet("dsWarehAuthListAfter");
		
		int nRowCnt = dsWarehAuthListAfter.getRowCount();
		
		int cnt = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsWarehAuthListAfter.getString(i, "CHK");
			
			// 체크되지 않은 행은 추가 X
			if("1".equals(strChk)==false) continue;
			
			// 사용자별 창고권한 추가
			nexacroService.insertDataSet(dsWarehAuthListAfter, i, "baimUserMgmtService.deleteWarehAuthList");
		}
		
		return outParam;
	}
	

	/**
	 * 사용자 고객권한을 추가한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.03.03
	 */
	@Override
	public Parameters insertCustAuthList(Parameters inParam) throws Exception {
		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsCustAuthList    = inParam.getDataSet("dsCustAuthListBefore");
		
		int nRowCnt = dsCustAuthList.getRowCount();
		
		int chkCnt = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsCustAuthList.getString(i, "CHK");
			String strUserId = dsCustAuthList.getString(i, "USER_ID");
			String strCustId = dsCustAuthList.getString(i, "CUST_ID");
			
			
			// 체크되지 않은 행은 추가 X
			if("1".equals(strChk)==false) continue;
			
			// 고객번호 중복 체크
			/*paramMap.put("USER_ID" , strUserId);
			paramMap.put("CUST_ID" , strCustId);
			chkCnt = (int) nexacroService.queryForObject(paramMap, "baimUserMgmtService.checkCustId");
			
			if(chkCnt > 0){
				throw new NexaUserException("고객코드 "+strCustId+"는 이미 등록된 고객코드 입니다.");
			}
			*/
			
			// 사용자별 고객권한 추가
			nexacroService.insertDataSet(dsCustAuthList, i, "baimUserMgmtService.insertCustAuthList");
		}
		
		return outParam;
	}
	
	/**
	 * 사용자 고객권한을 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.03.03
	 */
	@Override
	public Parameters deleteCustAuthList(Parameters inParam) throws Exception {
		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsCustAuthList    = inParam.getDataSet("dsCustAuthListAfter");
		
		int nRowCnt = dsCustAuthList.getRowCount();
		
		int cnt = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsCustAuthList.getString(i, "CHK");
			
			// 체크되지 않은 행은 추가 X
			if("1".equals(strChk)==false) continue;
			
			// 사용자별 고객권한 삭제
			nexacroService.insertDataSet(dsCustAuthList, i, "baimUserMgmtService.deleteCustAuthList");
		}
		
		return outParam;
	}
	
	

	/**
	 * 사용자 비밀번호 초기화 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.13
	 */
	@Override
	public Parameters updateResetUserPw(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		
		final Map<String,Object> paramMap = inParam.getData("dsSubSearch1");
		
		nexacroService.updateMap(paramMap, "baimUserMgmtService.updateResetUserPw");
		
		return outParam;
	}
	
	
	
	/**
	 * 사용자 삭제<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	Kim Jin Hwan
	 * @since	2020.07.14
	 */
	@Override
	public Parameters deleteUserInfoList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsUserList    = inParam.getDataSet("dsUserList");
		
		int nRowCnt = dsUserList.getRowCount();
		
		String strChk = "";
		
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			strChk = dsUserList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsUserList.getRowType(i);
			
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){
				
				dsUserList.set(i, "DEL_YN", "Y");
				
				// 사용자 삭제
				nexacroService.updateDataSet(dsUserList, i, "baimUserMgmtService.updateUserDelYn_1");
				nexacroService.updateDataSet(dsUserList, i, "baimUserMgmtService.updateUserDelYn_2");
				
			}
		}
		
		return outParam;
	}
			
	
	

	/**
	 * RGB시스템관리자를 생성한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.07.17
	 */
	@Override
	public Parameters createSuper_syst(Parameters inParam) throws Exception {
		// return object
		final Parameters outParam = inParam.getClass().newInstance();
		
		
		// SUPER 계정생성
		nexacroService.insert("baimUserMgmtService.insertSuper_1");
		nexacroService.insert("baimUserMgmtService.insertSuper_2");
		
		
		// SUPER 권한생성 
		nexacroService.insert("baimUserMgmtService.insertSuperAuth");
		
		// SUPER 권한 메뉴생성
		nexacroService.insert("baimUserMgmtService.insertSuperAuthDetail");
		
		// SUPER 메뉴 버튼권한생성
		nexacroService.insert("baimUserMgmtService.insertSuperMenuBtnAuthDetail");
		
		// 생성된 계정과 권한연결
		nexacroService.insert("baimUserMgmtService.insertSuperUserPerAuth");
		
		return outParam;
	}
}
