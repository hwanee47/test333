package moonsoft.nexacro.service.mdm.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.mdm.AuthMgmService;

import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import static moonsoft.common.util.StringUtil.isNull;

/**
 * The class AuthMgmServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.07.19
 *
 */

@Service("authMgmService")
public class AuthMgmServiceImpl extends EgovAbstractServiceImpl implements AuthMgmService{

	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 권한관리 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public Parameters getAuthList(Parameters inParam) throws Exception {

		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearch");
		// 조회결과
		DataSet resultDs = new DataSet();
		// SQL ID
		final String queryId = "authMgmService.getAuthList";
		
		// SQL
		resultDs = nexacroService.queryForDataset(searchMap, queryId);
		
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsAuthList", resultDs);
		}

		return outParam;
	}
	
	/**
	 * 권한관리 상세정보를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public Parameters getAuthDetailList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearchSub");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		// SQL
		resultDs = nexacroService.queryForDataset(searchMap, "authMgmService.getAuthDetailList");
		
		outParam.setOutDatasetList("dsAuthDetailList", resultDs);
		
		
		resultDs = nexacroService.queryForDataset(searchMap, "authMgmService.getMenuList");
		
		outParam.setOutDatasetList("dsMenuList", resultDs);

		return outParam;
	}
	
	/**
	 * 메뉴별 버튼권한 리스트를 조회한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public Parameters getMenuBtnAuthList(Parameters inParam) throws Exception {
		
		// return object
		final Parameters		 outParam  = inParam.getClass().newInstance();
		// 조회조건
		final Map<String,Object> searchMap = inParam.getData("dsSearchSub");
		// 조회결과
		DataSet resultDs = new DataSet();
		
		
		resultDs = nexacroService.queryForDataset(searchMap, "authMgmService.getMenuBtnAuthList");
		
		outParam.setOutDatasetList("dsMenuBtnAuthList", resultDs);
		
		return outParam;
	}

	/**
	 * 권한관리 정보를 수정한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public Parameters saveAuthList(Parameters inParam) throws Exception {

		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsAuthList    = inParam.getDataSet("dsAuthList");
		
		int nRowCnt = dsAuthList.getRowCount();
		
		int chkCnt = 0;
		String strChk = ""; 
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
		
			strChk = dsAuthList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			int nRowType = dsAuthList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_INSERTED){

				// 권한그룹코드 중복 체크
				
				// 권한관리 (TMDM_KFR_AUTH) 추가
				nexacroService.insertDataSet(dsAuthList, i, "authMgmService.insertAuth");
				
				
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){

				// 권한관리 (TMDM_KFR_AUTH) 수정
				nexacroService.updateDataSet(dsAuthList, i, "authMgmService.updateAuth");
			}
		}
		


		
		return outParam;
	}

	
	
	/**
	 * 권한정보를 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public Parameters deleteAuth(Parameters inParam) throws Exception {
		
		// return object
		final Parameters outParam = inParam.getClass().newInstance();
		
		DataSet dsAuthList = inParam.getDataSet("dsAuthList");
		
		
		int nRowCnt = dsAuthList.getRowCount();
		
		String strChk = ""; 
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
		
			strChk = dsAuthList.getString(i, "CHK");
			
			if(!"1".equals(strChk)) continue;
			
			nexacroService.updateDataSet(dsAuthList, i, "authMgmService.updateAuthDelYn");
				
				
		}
		
		return outParam;
	}
	
	/**
	 * 권한정보를 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @since	2018.06.28
	 *//*
	@Override
	public Parameters deleteAuth_20200710(Parameters inParam) throws Exception {
		
		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		// param dataSet
		final Map<String,Object>		masterMap		= inParam.getData("dsAuthDel");
		// 저장전 최초 데이터를활용하여 삭제한다.
		final String					masterQueryId	= "authMgmService.deleteAuthMaster";
		final String					detailQueryId	= "authMgmService.deleteAuthDetail";
		// 권한에 해당하는 모든 데이터를 삭제한다. Detail delete
		nexacroService.deleteMap(masterMap, detailQueryId);
		// 권한에 해당하는 모든 데이터를 삭제한다. Master delete
		nexacroService.deleteMap(masterMap, masterQueryId);
		
		return outParam;
	}*/

	
	/**
	 * 권한메뉴를 추가한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.02.26
	 */
	@Override
	public Parameters insertMenuList(Parameters inParam) throws Exception {
		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsMenuList    = inParam.getDataSet("dsMenuList");
		
		int nRowCnt = dsMenuList.getRowCount();
		
		int cnt = 0;
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			String strChk = dsMenuList.getString(i, "CHK");
			String strAuthCd = dsMenuList.getString(i, "AUTH_CD");
			String strMenuCd = dsMenuList.getString(i, "MENU_CD");
			String strParentMenuCd = dsMenuList.getString(i, "PARENT_MENU_CD");
			
			// 체크되지 않은 행은 추가 X
			if("1".equals(strChk)==false) continue;
			
			// 추가하려는 메뉴의 부모메뉴 중복체크
			if( !StringUtil.isNull(strParentMenuCd) ){
				paramMap.put("AUTH_CD" , strAuthCd);		// 권한코드
				paramMap.put("MENU_CD" , strParentMenuCd);	// 부모메뉴코드
				
				cnt = (int) nexacroService.queryForObject(paramMap, "authMgmService.checkParentMenu");
				
				if(cnt == 0){
					nexacroService.insertMap(paramMap, "authMgmService.insertAuthDetail");
				}
			}
					
			
			// 권한관리상세 (TMDM_KFR_AUTH) 추가
			nexacroService.insertDataSet(dsMenuList, i, "authMgmService.insertAuthDetail");
		}
		
		
		// 메뉴별 버튼권한 처리 (해당 권한에 있는 모든 메뉴 버튼권한 부여)
		paramMap.put("MENU_CD", "");
		nexacroService.insertMap(paramMap, "authMgmService.mergeMenuBtnAuth");
		
		return outParam;
	}

	
	
	/**
	 * 권한메뉴를 삭제한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	kjh
	 * @since	2020.02.26
	 */
	@Override
	public Parameters deleteMenuList(Parameters inParam) throws Exception {
		// return object
				final Parameters				outParam		= inParam.getClass().newInstance();
				
				DataSet dsAuthDetailList    = inParam.getDataSet("dsAuthDetailList");
				
				int nRowCnt = dsAuthDetailList.getRowCount();
				
				int cnt = 0;
				HashMap<String, Object> paramMap = new HashMap<String, Object>();
				
				for(int i=0; i<nRowCnt; i++) {
					
					String strChk = dsAuthDetailList.getString(i, "CHK");
					String strAuthCd = dsAuthDetailList.getString(i, "AUTH_CD");
					String strMenuCd = dsAuthDetailList.getString(i, "MENU_CD");
					String strParentMenuCd = dsAuthDetailList.getString(i, "PARENT_MENU_CD");
					String strUserType = dsAuthDetailList.getString(i, "gv_userType");
					String strAuthDv = dsAuthDetailList.getString(i, "AUTH_DV");
					
					// 체크되지 않은 행은 추가 X
					if("1".equals(strChk)==false) continue;
					
					
					// 권한관리상세 (TMDM_KFR_AUTH) 삭제
					nexacroService.deleteDataSet(dsAuthDetailList, i, "authMgmService.deleteAuthDetail");
					
					
					// RGB시스템관리자(SUPER)가 권한구분이(ADMIN)인 권한에 부여된 메뉴를 삭제했을 경우 => 모든 권한에 부여된 해당메뉴를 삭제한다.
					if("SUPER".equals(StringUtil.upperCase(strUserType))){
						
						
						if("ADMIN".equals(strAuthDv)){
							
							paramMap.put("AUTH_CD" , strAuthCd);		// 권한코드
							paramMap.put("MSTR_MENU_CD" , strParentMenuCd);	// 부모메뉴코드
							
							nexacroService.deleteDataSet(dsAuthDetailList, i, "authMgmService.deleteAuthDetailByMenuCd");
							
							// 삭제된 메뉴의 부모로 자식메뉴들을 기준으로  각 권한에 자식메뉴들이 없다면 부모메뉴 삭제...(말이어려움.. 쿼리보세요..)
							
							nexacroService.deleteMap(paramMap, "authMgmService.deleteAuthDetailParentAll");
						}
						
					}
					
					
					// 자식메뉴들이 다삭제 되었을경우 부모메뉴를 삭제한다.
					if( !StringUtil.isNull(strParentMenuCd) ){
						
						paramMap.put("AUTH_CD" , strAuthCd);		// 권한코드
						paramMap.put("MSTR_MENU_CD" , strParentMenuCd);	// 부모메뉴코드
						
						// 자식메뉴들이 다삭제 되었는지 체크
						cnt = (int) nexacroService.queryForObject(paramMap, "authMgmService.checkDeletedChildMenuAll");
						
						// 부모메뉴 삭제
						if(cnt == 0){
							paramMap.put("MENU_CD" , strParentMenuCd);	// 부모메뉴코드
							nexacroService.deleteMap(paramMap, "authMgmService.deleteAuthDetail");
						}
					}
					
				}
				
				// 권한 메뉴리스트에서 제거된 메뉴 메뉴버튼권한에서 삭제처리.
				nexacroService.deleteMap(paramMap, "authMgmService.deleteMenuBtnAuth");
				
				return outParam;
	}
	
	
	/**
	 * 메뉴버튼권한 정보를 저장한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	KJH
	 * @since	2020.07.22
	 */
	@Override
	public Parameters saveMenuBtnAuthList(Parameters inParam) throws Exception {

		// return object
		final Parameters				outParam		= inParam.getClass().newInstance();
		
		DataSet dsMenuBtnAuthList    = inParam.getDataSet("dsMenuBtnAuthList");
		
		int nRowCnt = dsMenuBtnAuthList.getRowCount();
		
		int chkCnt = 0;
		String strChk = ""; 
		HashMap<String, String> paramMap = new HashMap<String, String>();
		
		for(int i=0; i<nRowCnt; i++) {
			
			int nRowType = dsMenuBtnAuthList.getRowType(i);
			
			if(nRowType == DataSet.ROW_TYPE_UPDATED){

				// 메뉴버튼권한 (TMDM_KFR_AUTH_DETAIL_BTN) 수정
				nexacroService.updateDataSet(dsMenuBtnAuthList, i, "authMgmService.updateMenuBtnAuth");
			}
		}
		


		
		return outParam;
	}
}
