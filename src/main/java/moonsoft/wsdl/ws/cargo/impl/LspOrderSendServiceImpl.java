package moonsoft.wsdl.ws.cargo.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.jws.WebService;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.transaction.annotation.Transactional;

import moonsoft.common.service.NexacroService;
import moonsoft.wsdl.vo.CargoInfoVo;
import moonsoft.wsdl.vo.ResultVo;
import moonsoft.wsdl.ws.cargo.LspOrderSendService;
import moonsoft.wsdl.ws.cargo.webServiceUtil;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

/**
 * 협력사에  할당된 주문정보를 전달한다.
 */
@WebService(endpointInterface = "moonsoft.wsdl.ws.cargo.LspOrderSendService")
public class LspOrderSendServiceImpl extends EgovAbstractServiceImpl implements LspOrderSendService {

	private static final Log LOG = LogFactory.getLog(LspOrderSendServiceImpl.class);
	
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	@SuppressWarnings("unchecked")
	@Transactional
	@Override
	public ResultVo sendLspOrder(CargoInfoVo pCargoInfo) {

		// #. return vo - [ResultVo] 변수생성
		ResultVo resultVo = new ResultVo();
		// #. 전송받은 주문정보 null 체크
		if(pCargoInfo == null){
			LOG.info("==========> send param is null");
			
			// #. 전송받은 조회정보 없음
			resultVo.setRtnValue("201");		
			resultVo.setErrorMsg("전송받은 조회정보가 없습니다.");
			return resultVo;
		} 
		else {
			// #. 전송받은 vo, Map으로 변환
			Map<String, Object> pMap = webServiceUtil.voToMap(pCargoInfo);
			// #. [LOG]전송받은 주문정보
			LOG.info("==========> send param : " + pMap);
			
			// 1. 전송받은 조회정보 - 협려사코드(LSP_ID), 사용자아이디(USER_ID) 검사
			int cnt = (Integer)nexacroService.queryForObject(pMap, "lspOrderSendService.checkUserLspId");
			if(cnt == 0){
				resultVo.setRtnValue("202");
				resultVo.setErrorMsg("잘못된 협력사코드/사용자 아이디 입니다.");
				return resultVo;
			}

			// 2. 공통코드에서 조회일시 조회
			Map<String, Object> dateMap = new HashMap<String, Object>();
			dateMap = (HashMap<String, Object>)nexacroService.queryForObject(pMap, "lspOrderSendService.getFromToDate");
			if(webServiceUtil.isNull(dateMap)){
				// #. 등록된 협력사 기준정보 없음
				resultVo.setRtnValue("203");
				resultVo.setErrorMsg("사용자 기준정보가 존재하지 않습니다.");
				return resultVo;
			}else{
				// 3. 조회된 FROM/TO DATE 조회조건으로 SET
				pMap.put("FROM_DATE"	, dateMap.get("FROM_DATE"));
				pMap.put("TO_DATE"		, dateMap.get("TO_DATE"));
				
				// 4. 전송받은 요청일자 존재할경우, 일자 형식 확인 후 FROM_DATE에 SET
				if(!webServiceUtil.isNull(pCargoInfo.getReqDate())){
					// #. 전송받은 조회정보 - 요청일자(REQ_DATE) 검사
					if(!webServiceUtil.checkDateFormat(pCargoInfo.getReqDate())){
						// #. 전송받은 요청일자 형식 문제.
						resultVo.setRtnValue("204");
						resultVo.setErrorMsg("전송한 요청일자 형식이 맞지 않습니다. (년월일시분초)형태로 전송바랍니다.");
						return resultVo;
					} 
					// 5. 요청일자 SET
					pMap.put("FROM_DATE", pCargoInfo.getReqDate());
				} 
				// 6. 협력사 주문 할당정보 조회
				resultVo.setCargoInfoVo((List<CargoInfoVo>)nexacroService.queryForObjectList(pMap, "lspOrderSendService.selectLspOrderSendService"));
				// 7. 협력사 기준정보 SEND_LOG에 조회된 TO_DATE SET
				nexacroService.update("lspOrderSendService.setFromDate", pMap);
			}
			// [LOG]전달 파라미터 SIZE
			LOG.info("<========== sql return param : " + resultVo.getCargoInfoVo().size());
		}
		
		// #. 주문조회 완료(정상)
		resultVo.setRtnValue("0000");
		// return vo
		return resultVo;
	}
}
