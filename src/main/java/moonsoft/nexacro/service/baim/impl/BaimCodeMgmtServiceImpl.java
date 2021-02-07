package moonsoft.nexacro.service.baim.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.nexacro.service.baim.BaimCodeMgmtService;

/**
 * The class BaimCodeMgmtServiceImpl<br>
 * <br>
 * <br>
 * 
 * <br>
 * @author	Jin Seon Ju
 * @version	1.0
 * @since	2020.02.27
 *
 */

@Service("baimCodeMgmtService")
public class BaimCodeMgmtServiceImpl implements BaimCodeMgmtService {
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;

	/**
	 * 코드 대분류 조회
	 */
	@Override
	public Parameters getBaimCodeList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		outParam.setOutDatasetList("dsList", nexacroService.queryForDataset(srcParam, "baimCodeMgmtService.getBaimCodeList"));
		
		return outParam;
	}

	/**
	 * 코드 소분류 조회
	 */
	@Override
	public Parameters getBaimCodeDetailList(Parameters inParam) throws Exception {
		Parameters outParam = inParam.getClass().newInstance();

		Map<String,Object> 	srcParam = inParam.getData("ds1");
		
		// 조회결과
		DataSet resultDs = new DataSet();
		
		resultDs = nexacroService.queryForDataset(srcParam, "baimCodeMgmtService.getBaimCodeDetailList");
		// 조회된 행이 없다면 데이터셋의 컬럼정보가 없어지기 때문에 , 조회된 행이 있을경우만 되돌려준다.
		if(resultDs.getRowCount()>0){
			outParam.setOutDatasetList("dsDetailList", resultDs);
		}
		
		return outParam;
	}

	/**
	 * 코드 저장
	 */
	@Override
	public Parameters saveBaimCodeInfos(Parameters inParam) throws Exception {
Parameters outParam = inParam.getClass().newInstance();
		Map<String,Object> dsEmp  = inParam.getData("dsEmp");
		DataSet dsSave    = inParam.getDataSet("dsSave1");
		DataSet dsSave2    = inParam.getDataSet("dsSave2");
		
		String empId = (String)dsEmp.get("EMP_ID");
		
		int nRowCnt = dsSave.getRowCount();
		for(int i=0; i<nRowCnt; i++) {
			//dsSave.set(i, "EMP_ID", empId);
			int nRowType = dsSave.getRowType(i);
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				String strCdTcd = dsSave.getString(i, "CD_TCD");
				int chkRow = (int)nexacroService.queryForObject(strCdTcd, "baimCodeMgmtService.getBaimCodeCuplChk");
				if(chkRow == 0) {
					nexacroService.insertDataSet(dsSave, i, "baimCodeMgmtService.insertCodeList");
				}else {
					//CD_TCD 코드  중복이면 update
					nexacroService.updateDataSet(dsSave, i, "baimCodeMgmtService.updateCodeList");
				}
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				nexacroService.updateDataSet(dsSave, i, "baimCodeMgmtService.updateCodeList");
			}
		}
		
		int nRowCnt2 = dsSave2.getRowCount();
		for(int i=0; i<nRowCnt2; i++) {
			//dsSave2.set(i, "EMP_ID", empId);
			
			int nRowType = dsSave2.getRowType(i);
			if(nRowType == DataSet.ROW_TYPE_INSERTED){
				nexacroService.insertDataSet(dsSave2, i, "baimCodeMgmtService.insertCodeDetailList");
				nexacroService.insertDataSet(dsSave2, i, "baimCodeMgmtService.insertCodeDetailList_M");
			}else if(nRowType == DataSet.ROW_TYPE_UPDATED){
				nexacroService.updateDataSet(dsSave2, i, "baimCodeMgmtService.updateCodeDetailList");
				nexacroService.updateDataSet(dsSave2, i, "baimCodeMgmtService.updateCodeDetailList_M");
			}
		}
		return outParam;
	}

}
