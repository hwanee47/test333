package moonsoft.nexacro.service.main.impl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import moonsoft.common.service.NexacroService;
import moonsoft.nexacro.service.main.MainService;

@Service("mainService")
public class MainServiceImpl implements MainService {

private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	/**
	 * 지역별 현황 조회<br>
	 * <br>
	 * @author	Jin Seon Ju
	 * @since	2020.03.18
	 */
	@Override
	public Map<String,Object> getResionStatusInfo(Map<String, Object> param) throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		
		//배송예정현황
		int dlvyExpctQty = (int) nexacroService.queryForObject(param, "mainService.getDlvyExpctQty");
		
		//미배송현황
		int noDlvyExpctQty = (int) nexacroService.queryForObject(param, "mainService.getNoDlvyQty");
		
		//재고현황
		int stcQty = (int) nexacroService.queryForObject(param, "mainService.getStckQty");
		
		//미배송현황
		int wareiExpctQty = (int) nexacroService.queryForObject(param, "mainService.getWareiExpctQty");
		
		map.put("dlvyExpctQty", dlvyExpctQty);
		map.put("noDlvyExpctQty", noDlvyExpctQty);
		map.put("stcQty", stcQty);
		map.put("wareiExpctQty", wareiExpctQty);
		return map;
	}

}
