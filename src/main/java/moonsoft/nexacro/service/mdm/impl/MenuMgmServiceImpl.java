package moonsoft.nexacro.service.mdm.impl;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.mdm.MenuMgmService;

/**
 * The class MenuMgmServiceImpl<br>
 * <br>
 * <br>
 * <br>
 * @author	SeungMin
 * @version	1.0
 * @since	2018.07.19
 *
 */

@Service("menuMgmService")
public class MenuMgmServiceImpl implements MenuMgmService{

	/**
	 * Logger<br>
	 * <br>
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 대메뉴 등록 메소드<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	@Override
	public Parameters saveMainMenu(Parameters inParam) throws Exception {

		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsSave = inParam.getDataSet("ds_Save");
		
		for(int i=0; i<dsSave.getRowCount(); i++) {
			if("1".equals(dsSave.getString(i, "CHK"))) {
				int rowType = dsSave.getRowType(i);
				
				//신규인 경우
				if(rowType == 1 || StringUtil.isNull(dsSave.getString(i, "MENU_CD"))) {
					//SORT_MAIN 중복여부 체크
					DataSet result = nexacroService.queryForDataset(dsSave, i, "menuMgmService.selectMenuSortChk");
					if(result.getRowCount() > 0) {
						throw new NexaUserException("순번이 중복됩니다.");
					} else {
						//대분류메뉴 등록
						nexacroService.insertDataSet(dsSave, i, "menuMgmService.insertMenu");
					}
				} else if(rowType == 2) {		//변경된 경우
					//대분류메뉴 수정
					nexacroService.updateDataSet(dsSave, i, "menuMgmService.updateMenu");
					
					//대메뉴 수정시 하위메뉴 SORT_MAIN 값 수정 
					nexacroService.updateDataSet(dsSave, i, "menuMgmService.updateSortMain");	
				}
			}
		}
		

		return outParam;
	}
	
	/**
	 * 소메뉴 등록 메소드<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	@Override
	public Parameters saveSubMenu(Parameters inParam) throws Exception {
		
		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsSave = inParam.getDataSet("ds_Save");

		for(int i=0; i<dsSave.getRowCount(); i++) {
			if("1".equals(dsSave.getString(i, "CHK"))) {
				int rowType = dsSave.getRowType(i);
				
				//신규인 경우
				if(rowType == 1 || StringUtil.isNull(dsSave.getString(i, "MENU_CD"))) {
					//SORT_SUB 중복여부 체크
					DataSet result = nexacroService.queryForDataset(dsSave, i, "menuMgmService.selectMenuSortChk");
					if(result.getRowCount() > 0) {
						throw new NexaUserException("순번이 중복됩니다.");
					} else {
						//소분류메뉴 등록
						nexacroService.insertDataSet(dsSave, i, "menuMgmService.insertMenu");
					}
				} else if(rowType == 2) {		//변경된 경우
					//소분류메뉴 수정
					nexacroService.updateDataSet(dsSave, i, "menuMgmService.updateMenu");
				}
			}
		}
		
		return outParam;
	}
	/**
	 * 대메뉴/소메뉴 삭제 메소드<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2018.06.28
	 */
	@Override
	public Parameters deleteMenu(Parameters inParam) throws Exception {

		// return object
		Parameters outParam  = inParam.getClass().newInstance();
		DataSet dsDelete = inParam.getDataSet("ds_Delete");
		
		for(int i=0; i<dsDelete.getRowCount(); i++) {
			nexacroService.deleteDataSet(dsDelete, i, "menuMgmService.deleteMenu");
		}
		
		return outParam;
	}
}
