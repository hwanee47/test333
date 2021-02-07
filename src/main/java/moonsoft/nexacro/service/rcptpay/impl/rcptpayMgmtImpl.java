package moonsoft.nexacro.service.rcptpay.impl;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.rcptpay.rcptpayMgmtService;

@Service("rcptpayMgmtService")
public class rcptpayMgmtImpl extends EgovAbstractServiceImpl implements rcptpayMgmtService{

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Resource(name = "nexacroService")
	private NexacroService nexacroService;

	@Override
	public Parameters selectRcptpayByHour(Parameters inParam) throws Exception {
		// 시간별 수불 조회
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "rcptpayMgmtService.selectRcptpayByHour");
		
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}

	@Override
	public Parameters saveRcptpayByHour(Parameters inParam) throws Exception {
		// 시간 수불 저장
		Parameters outParam = inParam.getClass().newInstance();
		Map map = inParam.getData("dsSearch");
		
		//저장할 재고 조회
		DataSet dsRow = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectStcHour");
		
		for (int i = 0; i < dsRow.getRowCount(); i++) {
			//시간수불 INSERT
			nexacroService.insertDataSet(dsRow, i, "rcptpayMgmtService.saveRcptpayByHour");
		}
		
		//결과값 조회
		DataSet dsResult = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectRcptpayByHour");
		
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}

	@Override
	public Parameters selectRcptpayByDay(Parameters inParam) throws Exception {
		// 일별 수불 조회
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsSumResult = nexacroService.queryForDataset(searchMap, "rcptpayMgmtService.selectRcptpayByDaySum");
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "rcptpayMgmtService.selectRcptpayByDay");
		
		outParam.setOutDatasetList("dsSumResult", dsSumResult);
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}
	
	@Override
	public Parameters saveRcptpayByDay(Parameters inParam) throws Exception {
		//일별 수불 저장
		Parameters outParam = inParam.getClass().newInstance();
		Map<String, Object> map = inParam.getData("dsSearch");
		
		
		String strStaDt = (String) map.get("STA_DT");	// 조회일자 FROM
		String strEndDt = (String) map.get("END_DT");	// 조회일자 TO
		
		int differDayCnt = StringUtil.getDateDifference(strStaDt, strEndDt);	// 차이일수
		
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd"); 
		Calendar cal = Calendar.getInstance();
		cal.setTime(sdf.parse(strStaDt));
		
		for(int i=0; i<=differDayCnt; i++){
			System.out.println(sdf.format(cal.getTime()));
			map.put("STD_YMD", sdf.format(cal.getTime()));						// 수불편성 기준일자
			
			
			//DataSet dsRow = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectStcDay");
			List list =  nexacroService.queryForObjectList(map, "rcptpayMgmtService.selectStcDay");
			
			nexacroService.batch("rcptpayMgmtService.saveRcptpayByDay", list);
			/*for (int j=0; j < dsRow.getRowCount(); j++) {
				
				nexacroService.insertDataSet(dsRow, j, "rcptpayMgmtService.saveRcptpayByDay");
				
			}*/
			
			
			// 1일씩 증가
			cal.add(Calendar.DATE, 1);
		}
		
		/*
		DataSet dsRow = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectStcDay");
		
		for (int i = 0; i < dsRow.getRowCount(); i++) {
			
			nexacroService.insertDataSet(dsRow, i, "rcptpayMgmtService.saveRcptpayByDay");
			
		}
		
		DataSet dsSumResult = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectRcptpayByDaySum");
		DataSet dsResult = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectRcptpayByDay");
		
		outParam.setOutDatasetList("dsSumResult", dsSumResult);
		outParam.setOutDatasetList("dsResult", dsResult);*/
		
		return outParam;
	}
	
	/*@Override
	public Parameters saveRcptpayByDay(Parameters inParam) throws Exception {
		//일별 수불 저장
		Parameters outParam = inParam.getClass().newInstance();
		Map map = inParam.getData("dsSearch");
		
		DataSet dsRow = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectStcDay");
		
		for (int i = 0; i < dsRow.getRowCount(); i++) {
			
			nexacroService.insertDataSet(dsRow, i, "rcptpayMgmtService.saveRcptpayByDay");
			
		}
		
		DataSet dsSumResult = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectRcptpayByDaySum");
		DataSet dsResult = nexacroService.queryForDataset(map, "rcptpayMgmtService.selectRcptpayByDay");
		
		outParam.setOutDatasetList("dsSumResult", dsSumResult);
		outParam.setOutDatasetList("dsResult", dsResult);
		
		return outParam;
	}*/

	@Override
	public Parameters selectRcptpayByMon(Parameters inParam) throws Exception {
		// 월별 수불 조회
		Parameters outParam = inParam.getClass().newInstance();

		Map searchMap = inParam.getData("dsSearch");
		
		DataSet dsSumResult = nexacroService.queryForDataset(searchMap, "rcptpayMgmtService.selectRcptpayByMonSum");
		DataSet dsResult = nexacroService.queryForDataset(searchMap, "rcptpayMgmtService.selectRcptpayByMon");
		
		outParam.setOutDatasetList("dsSumResult", dsSumResult);
		outParam.setOutDatasetList("dsResult", dsResult);

		return outParam;
	}
	
	@Override
	public Parameters saveRcptpayByMon(Parameters inParam) throws Exception {
		// 2020. 03. 14. KSH
		// 현재까진 월 수불 저장 X, 조회만함, 이전달 마지막 날짜 기준으로 월수불 조회함
		return null;
	}
	
	@Override
	public void saveRcptpayByHour_Scheduler(Map map) throws Exception {
		
		
		//저장할 재고 조회
		List list = nexacroService.queryForObjectList(map, "rcptpayMgmtService.selectStcHour_Scheduler");
		
		nexacroService.batch("rcptpayMgmtService.saveRcptpayByHour_Scheduler", list);
		
	}
	
}
