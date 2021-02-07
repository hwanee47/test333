/**************************************************************************************
 * 1.프로그램명  	: SytemCargoServiceImpl
 * 2.파일명		: SytemCargoServiceImpl.java
 * 3.개발자		: SSM
 * 4.개발일자		: 2019.02.13 
 * 5.버젼		: 0.1
 * 6.설명		: 화물맨 공통 서비스 
 * 7.이력		
*************************************************************************************/

package moonsoft.nexacro.service.common.impl;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.lang.reflect.Method;
import java.net.URL;
import java.net.URLConnection;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.annotation.Resource;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataTypes;

import moonsoft.common.exception.NexaUserException;
import moonsoft.common.service.NexacroService;
import moonsoft.common.util.HttpClientConstants;
import moonsoft.common.util.HttpClientUtil;
import moonsoft.common.util.NexacroConvertUtil;
import moonsoft.common.util.Parameters;
import moonsoft.common.util.PropertiesUtil;
import moonsoft.common.util.StringUtil;
import moonsoft.nexacro.service.common.SystemCargoService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("systemCargoService")
public class SystemCargoServiceImpl extends EgovAbstractServiceImpl implements SystemCargoService {
	@Resource(name = "nexacroService")
    private NexacroService nexacroService;
	
	/**
	 * Logger<br>
	 * <br>
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	/**
	 * 화물맨 execute Method<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @throws Exception 
	 * @since	2019.02.13
	 */
	public JSONObject execute(JSONObject inParam) throws Exception {
		logger.info("================== HMM Interface Method[execute] Start ==================");
		String service 		= (String) inParam.get(HttpClientConstants.SERVICE_FILED);
		
		//화물맨 배차요청
		if("VHCL_REQUEST".equals(service)) {
			return callCaroVhclRequest(inParam);
		}
		
		//화물맨 배차취소
		if(service.equals("VHCL_CANCEL")) {
			return callCaroVhclCancel(inParam);
		}
		
		//화물맨 배차상태확인
		if(service.equals("VHCL_STATUS")) {
			return callCaroVhclStatus(inParam);
		}
		
		return getMessage("S");
	}
	
	/**
	 * 화물맨 배차요청<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @throws Exception 
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private JSONObject callCaroVhclRequest(JSONObject inParam) throws Exception {
		logger.info("HMM Interface Method[callCaroVhclRequest] Parameter =>" + inParam.toJSONString());
		
		Map searchMap 		= new HashMap();
		JSONObject resultJ 	= new JSONObject();
		
		//필수값 확인.
		String[] checkField = {"ORDERCODE", "CWNAME", "CWCARNUM", "CWCARTON", "CWCARTYPE", "CWPHONE", "BIZ_REG_NO", "BIZ_NM"}; 
		for(int i=0; i<checkField.length; i++) {
			String chkCol = StringUtil.nullToString(inParam.get(checkField[i]));
			if(StringUtil.isNull(chkCol)) {
				
				//요청 파라미터 에러(에러코드 : -1)
				resultJ.put("code"		, HttpClientConstants.EMPTY_CODE);
				resultJ.put("msg"		, "Parameter '" + checkField[i] + "' isEmpty");
				resultJ.put("data"		, chkCol);
				return resultJ;
			}
		}
		
		//1.화물정보망 오더 정보 확인.
		searchMap.put("TOL_NO"	, inParam.get("ORDERCODE"));
		Map orderMap = (Map) nexacroService.queryForObject(searchMap, "systemCargoService.getOrderCheck");
		
		//메세지 리턴.
		if(orderMap == null || orderMap.size() == 0) {
			return getMessageParam("F_ORDER_06", inParam);
		} else {
			String tolScd 	= StringUtil.nullToString(orderMap.get("TOL_SCD"));
			String sysScd 	= StringUtil.nullToString(orderMap.get("OPEN_SYS_SCD"));
			String sysCd 	= StringUtil.nullToString(orderMap.get("OPEN_SYS_CD"));
			String vhclNo 	= StringUtil.nullToString(orderMap.get("REQ_VHCL_NO"));
			String mobile	= StringUtil.nullToString(orderMap.get("MOBILE"));
			logger.info("Vhcl Request Status Check => [TOL_SCD : " + tolScd + "], [SYS_SCD : " + sysScd + "], [SYS_CD : " + sysCd + "]");
			
			//화물맨 주문이 아닌경우
			if(!"HMM".equals(sysCd)) {		
				return getMessageParam("F_ORDER_06", inParam);
			} 
			//화물맨 주문인 경우
			else {
				if("010".equals(tolScd)) {
					if(StringUtil.isNull(sysScd)) {
						return getMessageParam("F_ORDER_06", inParam);
					} 
				} else if("666".equals(tolScd)) {
					return getMessageParam("F_ORDER_06", inParam);
				} else {
					if(vhclNo.equals(inParam.get("CWCARNUM"))) {
						return getMessageParam("F_ORDER_S_03", inParam);
					} else {
						//차량번호, 전화번호를 화물정보망에 등록 된 정보로 리턴.
						inParam.put("CWCARNUM"	, vhclNo);
						inParam.put("CWPHONE"	, mobile);
						return getMessageParam("F_ORDER_03", inParam);
					}
				}
			}
		}
		
		//2.사업자번호 인증 
		searchMap.put("BIZ_REG_NO"	, inParam.get("BIZ_REG_NO"));
		searchMap.put("JOIN_TYPE"	, "T05");
		
		String bizNoCheck = bizNoCertification(searchMap);
		
		if("00".equals(bizNoCheck)) {					//이미 등록 된 사업자번호
			return getMessageParam("F_BIZ_NO_00", inParam);
		} else if("WRONG".equals(bizNoCheck)) {			//불량 사업자 
			return getMessageParam("F_BIZ_NO_WRONG", inParam);
		} else {
			if(!StringUtil.isNull(bizNoCheck)) {
				String[] bizCertArr = bizNoCheck.trim().split("§", 10);
				if("S".equals(bizCertArr[1])) {
					if("04".equals(bizCertArr[3])) {
						return getMessageParam("F_BIZ_NO_04", inParam);
					} else if("05".equals(bizCertArr[3])) {
						return getMessageParam("F_BIZ_NO_05", inParam);
					} else if("91".equals(bizCertArr[3])) {
						return getMessageParam("F_BIZ_NO_91", inParam);
					}
				} else {
					return getMessageParam("F_BIZ_NO", inParam);
				}
			}
		}
		
		//3.차량 등록 여부 확인.
		searchMap.put("VHCL_NO", inParam.get("CWCARNUM"));
		
		Map carInfo 	= (Map) nexacroService.queryForObject(searchMap, "systemCargoService.getCarInfoCheck");	
		Map saveMap		= new HashMap();
		
		//오더번호 설정.
		saveMap.put("TOL_NO", inParam.get("ORDERCODE"));
		
		String mobile1  	= StringUtil.substring((String) inParam.get("CWPHONE"), 0, 3); 
		String mobile2  	= StringUtil.substring((String) inParam.get("CWPHONE"), 3, 7); 
		String mobile3  	= StringUtil.substring((String) inParam.get("CWPHONE"), 7, 11); 
		String ton			= getComCodeFromHMM("HMM", "TON"	, (String) inParam.get("CWCARTON"));
		String kndCd		= getComCodeFromHMM("HMM", "CARTYPE", (String) inParam.get("CWCARTYPE"));
		String vhclCntrlNo 	= "";
		//3.1. 차량이 신규인 경우
		if(carInfo == null || carInfo.size() == 0) {
			//3.1.1 사용자 정보(TADM_KFR_USER) 생성.
			String seqNo 	= (String) nexacroService.queryForObject("", "systemCargoService.selectSeqNo");
			
			saveMap.put("SEQ_NO"		, seqNo);
			saveMap.put("JOIN_TYPE"		, "T05");
			saveMap.put("BIZ_TYPE"		, "I");
			saveMap.put("BIZ_NM"		, inParam.get("BIZ_NM"));
			saveMap.put("BIZ_REG_NO"	, inParam.get("BIZ_REG_NO"));
			saveMap.put("NAME"			, inParam.get("CWNAME"));
			saveMap.put("MOBILE1"		, mobile1);
			saveMap.put("MOBILE2"		, mobile2);
			saveMap.put("MOBILE3"		, mobile3);
			saveMap.put("VHCL_NO"		, inParam.get("CWCARNUM"));
			saveMap.put("DRV_NM"		, inParam.get("CWNAME"));
			saveMap.put("TON_CD"		, ton);			//차량 톤수 화물맨 -> 화물정보망 코드로 변환 필요.
			saveMap.put("VHCL_KND_CD"	, kndCd);		//차종 화물맨 -> 화물정보망 코드로 변환 필요.
			saveMap.put("VHCL_TYPE"		, "");
			saveMap.put("gv_userId"		, inParam.get("gv_userId"));
			
			logger.info("callCaroVhclRequest[User, Lsp Create] Info =>" + saveMap.toString());
			
			nexacroService.insertMap(saveMap, "systemCargoService.createUserInfo");
			
			//3.1.2 운송사 정보(TMDM_KFR_BP_LSP) 생성.
			String lspId = (String)nexacroService.queryForObject("", "systemCargoService.createLspId"); 
			saveMap.put("LSP_ID"	, lspId);
			
			nexacroService.insertMap(saveMap, "systemCargoService.insertLspInfo");
			
			//3.1.3 차량 정보(TMDM_KFR_CT_EQP) 생성.
			String cntrlNo = (String)nexacroService.queryForObject("", "systemCargoService.createCntrlNo"); 
			saveMap.put("CNTRL_NO"	, cntrlNo);
			vhclCntrlNo = cntrlNo;
			nexacroService.insertMap(saveMap, "systemCargoService.insertCtEqpInfo");
			
			//3.1.4 임시 차량 정보(TMDM_KFR_CT_EQP_TEMP) 생성.
			nexacroService.insertMap(saveMap, "systemCargoService.insertCtEqpTempInfo");
			
			//3.1.5 사용자 정보에 LSP_ID 업데이트
			nexacroService.updateMap(saveMap, "systemCargoService.updateUserLspId");
		}
		
		//3.2. 차량이 신규가 아닌 경우
		else {
			String lspId 		= (String) carInfo.get("LSP_ID");
			String vhclNo 		= (String) carInfo.get("VHCL_NO"); 
			String tempVhclNo 	= (String) carInfo.get("TEMP_VHCL_NO"); 
			String seqNo		= (String) carInfo.get("SEQ_NO"); 
			vhclCntrlNo 		= (String) carInfo.get("CNTRL_NO");
			
			saveMap.put("SEQ_NO"		, seqNo);
			saveMap.put("JOIN_TYPE"		, "T05");
			saveMap.put("BIZ_TYPE"		, "I");
			saveMap.put("BIZ_NM"		, inParam.get("BIZ_NM"));
			saveMap.put("BIZ_REG_NO"	, inParam.get("BIZ_REG_NO"));
			saveMap.put("NAME"			, inParam.get("CWNAME"));
			saveMap.put("MOBILE1"		, mobile1);
			saveMap.put("MOBILE2"		, mobile2);
			saveMap.put("MOBILE3"		, mobile3);
			saveMap.put("VHCL_NO"		, inParam.get("CWCARNUM"));
			saveMap.put("DRV_NM"		, inParam.get("CWNAME"));
			saveMap.put("TON_CD"		, ton);			//차량 톤수 화물맨 -> 화물정보망 코드로 변환 필요.
			saveMap.put("VHCL_KND_CD"	, kndCd);		//차종 화물맨 -> 화물정보망 코드로 변환 필요.
			saveMap.put("VHCL_TYPE"		, "");
			saveMap.put("LSP_ID"		, lspId);
			saveMap.put("gv_userId"		, inParam.get("gv_userId"));
			
			logger.info("callCaroVhclRequest[User, Lsp Create] Info =>" + saveMap.toString());
			
			//3.2.1 운송사 정보(TMDM_KFR_BP_LSP) 생성.
			if(StringUtil.isNull(lspId)) {
				lspId = (String)nexacroService.queryForObject("", "systemCargoService.createLspId"); 
				saveMap.put("LSP_ID", lspId);
				
				nexacroService.insertMap(saveMap, "systemCargoService.insertLspInfo");
				
				//3.2.1 사용자 정보에 LSP_ID 업데이트
				nexacroService.updateMap(saveMap, "systemCargoService.updateUserLspId");
			}
			
			//3.2.2 차량 정보(TMDM_KFR_CT_EQP) 생성.
			if(StringUtil.isNull(vhclNo)) {
				String cntrlNo = (String)nexacroService.queryForObject("", "systemCargoService.createCntrlNo"); 
				saveMap.put("CNTRL_NO"	, cntrlNo);
				vhclCntrlNo = cntrlNo;
				//3.2.3 임시 차량 정보(TMDM_KFR_CT_EQP_TEMP) 생성.
				if(StringUtil.isNull(tempVhclNo)) {	
					nexacroService.insertMap(saveMap, "systemCargoService.insertCtEqpInfo");
					
					//3.1.4 임시 차량 정보(TMDM_KFR_CT_EQP_TEMP) 생성.
					nexacroService.insertMap(saveMap, "systemCargoService.insertCtEqpTempInfo");
				} else {
					List ctEqpTempList = nexacroService.queryForObjectList(saveMap, "systemCargoService.selectCtEqpTemp");
					if(ctEqpTempList.size() > 0) {
						for(int k=0; k < ctEqpTempList.size(); k++) {
							Map hm_list = (Map)ctEqpTempList.get(k);
							hm_list.put("LSP_ID"		, saveMap.get("LSP_ID"));
							hm_list.put("SEQ_NO"		, saveMap.get("SEQ_NO"));
							hm_list.put("gv_userId"		, inParam.get("gv_userId"));
							
							nexacroService.updateMap(hm_list, "systemCargoService.insertCtEqpInfo");
							
							//TEMP 테이블에 TEMP_CON_YN(요청대기상태여부를 승인 상태로 수정)
							nexacroService.updateMap(hm_list, "systemCargoService.updateCtEqpTempConYn");
						}
					}
				}
			}
		}
		
		//4.화물정보망 배차 확정 프로세스 CALL
		//4.1주문정보 조회.
		Map<String,Object> orderInfo = (Map<String, Object>) nexacroService.queryForObject(searchMap, "systemCargoService.selectOrderInfo");
		//4.2 파라미터 설정.
		orderInfo.put("gv_userId"			, inParam.get("gv_userId"));
		orderInfo.put("gv_ipAddr"			, inParam.get("gv_ipAddr"));
		orderInfo.put("gv_siteCd"			, "GWDS");
		orderInfo.put("REQ_CNTRL_NO"		, vhclCntrlNo);
		orderInfo.put("LSP_ID"				, saveMap.get("LSP_ID"));
		orderInfo.put("REQ_VHCL_NO"			, inParam.get("CWCARNUM"));
		orderInfo.put("EQP_CLS_CD"			, "8");
		
		//4.3화물정보망 배차 확정 프로세스 CALL
		Object obj = StringUtil.getBean("orderMgmService");
    	Method method = obj.getClass().getMethod("decidedVhclInfo", Map.class);
		method.invoke(obj, orderInfo);
		
		//주문 정보(TTMS_OD_TOLEG_HD) 상태 업데이트.
		orderInfo.put("TOL_SCD"		, "");
		orderInfo.put("OPEN_SYS_CD"	, "HMM");
		orderInfo.put("OPEN_SYS_SCD", "state03");
		nexacroService.updateMap(orderInfo, "systemCargoService.updateOrderCancelIF");
		
		// *TOLEG HIST UPDATE
		nexacroService.updateMap(orderInfo, "commonService.insertTolegHdHist");
		return getMessageParam("S", inParam);
	}
	
	/**
	 * 화물맨 배차취소<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @throws Exception 
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private JSONObject callCaroVhclCancel(JSONObject inParam) throws Exception {
		logger.info("HMM Interface Method[callCaroVhclCancel] Parameter =>" + inParam.toJSONString());
		
		Map searchMap 		= new HashMap();
		JSONObject resultJ 	= new JSONObject();
		
		//필수값 확인.
		String[] checkField = {"ORDERCODE"}; 
		for(int i=0; i<checkField.length; i++) {
			String chkCol = StringUtil.nullToString(inParam.get(checkField[i]));
			if(StringUtil.isNull(chkCol)) {
				
				//요청 파라미터 에러(에러코드 : -1)
				resultJ.put("code"		, HttpClientConstants.EMPTY_CODE);
				resultJ.put("msg"		, "Parameter '" + checkField[i] + "' isEmpty");
				resultJ.put("data"		, chkCol);
				return resultJ;
			}
		}
		
		//1.화물정보망 오더 정보 확인.
		searchMap.put("TOL_NO"	, inParam.get("ORDERCODE"));
		Map orderMap = (Map) nexacroService.queryForObject(searchMap, "systemCargoService.getOrderCheck");

		//메세지 리턴.
		if(orderMap == null || orderMap.size() == 0) {
			return getMessage("F_ORDER_06");
		} else {
			String tolScd 	= StringUtil.nullToString(orderMap.get("TOL_SCD"));
			String sysScd 	= StringUtil.nullToString(orderMap.get("OPEN_SYS_SCD"));
			String sysCd 	= StringUtil.nullToString(orderMap.get("OPEN_SYS_CD"));
			
			//화물맨 주문이 아닌경우
			if(!"HMM".equals(sysCd)) {							
				return getMessage("F_ORDER_06");
			} 
			//화물맨 주문인 경우
			else {
				if(!"090".equals(tolScd)) {
					if("010".equals(tolScd)) {
						if(StringUtil.isNull(sysScd)) {
							return getMessage("F_ORDER_06");
						} else {
							return getMessage("F_ORDER_CANCEL_01");
						}
					} else if("666".equals(tolScd)) {
						return getMessage("F_ORDER_06");
					} else {
						return getMessage("F_ORDER_CANCEL_03");
					}
				}
			}
		}
		
		//2.화물정보망 배차 취소 프로세스 CALL(validation 확인 필요)
		//2.1주문정보 조회.
		Map<String,Object> orderInfo = (Map<String, Object>) nexacroService.queryForObject(searchMap, "systemCargoService.selectOrderInfo");
		orderInfo.put("SO_SCD"		, "010");
		orderInfo.put("EO_SCD"		, "010");
		orderInfo.put("TOL_SCD"		, "010");
		orderInfo.put("gv_userId"	, inParam.get("gv_userId"));
		orderInfo.put("gv_ipAddr"	, inParam.get("gv_ipAddr"));
		
		Object obj = StringUtil.getBean("orderMgmService");
    	Method method = obj.getClass().getMethod("cencelVhclInfo", Map.class);
		method.invoke(obj, orderInfo);
		
		//주문 정보(TTMS_OD_TOLEG_HD) 상태 업데이트.
		orderInfo.put("TOL_SCD"		, "");
		orderInfo.put("OPEN_SYS_CD"	, "HMM");
		orderInfo.put("OPEN_SYS_SCD", "state02");
		nexacroService.updateMap(orderInfo, "systemCargoService.updateOrderCancelIF");
		
		// *TOLEG HIST UPDATE
		nexacroService.updateMap(orderInfo, "commonService.insertTolegHdHist");
		
		return getMessage("S");
	}
	
	/**
	 * 화물맨 주문상태 확인.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @throws Exception 
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private JSONObject callCaroVhclStatus(JSONObject inParam) throws Exception {
		logger.info("HMM Interface Method[callCaroVhclStatus] Parameter =>" + inParam.toJSONString());
		
		Map searchMap 		= new HashMap();
		JSONObject resultJ 	= new JSONObject();
		
		//필수값 확인.
		String[] checkField = {"ORDERCODE"}; 
		for(int i=0; i<checkField.length; i++) {
			String chkCol = StringUtil.nullToString(inParam.get(checkField[i]));
			if(StringUtil.isNull(chkCol)) {
				
				//요청 파라미터 에러(에러코드 : -1)
				resultJ.put("code"		, HttpClientConstants.EMPTY_CODE);
				resultJ.put("msg"		, "Parameter '" + checkField[i] + "' isEmpty");
				resultJ.put("data"		, chkCol);
				return resultJ;
			}
		}
		
		//1.주문상태 정보 조회.
		resultJ.put("code"	, 200);
		resultJ.put("msg"	, "성공");
		
		searchMap.put("TOL_NO"	, inParam.get("ORDERCODE"));
		Map orderMap = (Map) nexacroService.queryForObject(searchMap, "systemCargoService.getOrderCheck");
		if(orderMap == null || orderMap.size() == 0) {			
			resultJ.put("data"	, "state06");		//취소된 화물
		} else {
			String tolScd 	= StringUtil.nullToString(orderMap.get("TOL_SCD"));
			String sysScd 	= StringUtil.nullToString(orderMap.get("OPEN_SYS_SCD"));
			String sysCd 	= StringUtil.nullToString(orderMap.get("OPEN_SYS_CD"));
			
			//화물맨 주문이 아닌경우
			if(!"HMM".equals(sysCd)) {							
				resultJ.put("data", "state06");					//취소된 화물
			} 
			//화물맨 주문인 경우
			else {
				if("010".equals(tolScd)) {
					if(StringUtil.isNull(sysScd)) {
						resultJ.put("data", "state06");			//취소된 화물
					} else {
						resultJ.put("data", sysScd);			//화물맨 상태
					}
				} else {
					resultJ.put("data", sysScd);				//화물맨 상태
				}
			}
		}
		
		
		return resultJ;
	}

	/**
	 * 화물맨 화물등록<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters executeCargoInsert(Parameters inParam) throws Exception {
		Parameters	outParam	= inParam.getClass().newInstance();
		DataSet	dsParam			= inParam.getDataSet("dsSave");
		JSONArray resultArr		= new JSONArray();
		String[] checkField		= {"ORDERCODE", "LOADAY", "LOACITY"	
									, "LOACODE", "POIX", "POIY", "DOWDAY", "DOWCITY", "DOWCODE"	
									, "POIX_OUT", "POIY_OUT", "CARTON", "CARTYPE", "NAME"			
									, "PAY", "INFO", "PHONE", "WEIGHT"};
		
		//결과 정보를 화면으로 리턴하기위한 컬럼 정보 생성.
		//타 시스템 간 I/F로 인해 NexaUserException 대신 결과 Dataset으로 리턴.
		//다건을 I/F하기에 성공한 정보와 실패한 정보를 화면으로 리턴 목적.
		//단, Validation에 걸리는 경우에는 NexaUserException로 사용하여 리턴.
		DataSet resultDs = new DataSet("dsResutl");
		resultDs.addColumn("CODE"	,DataTypes.STRING, 100);
		resultDs.addColumn("MSG" 	,DataTypes.STRING, 100);
		resultDs.addColumn("DATA" 	,DataTypes.STRING, 100);
		resultDs.addColumn("TOL_NO" ,DataTypes.STRING, 100);
		
		//화물맨 노드 정보 적재를 위한 Obejct 생성.
		Map saveNode = new HashMap();
		
		//다중 주문 정보 loop
		for(int i=0; i<dsParam.getRowCount(); i++) {
			//1.필수값 확인.
			for(int j=0; j<checkField.length; j++) {
				String chkCol = StringUtil.nullToString(dsParam.getString(i, checkField[j]));
				if(StringUtil.isNull(chkCol)) {
					String rtnMsg = i + "[row] [Order Number : " + dsParam.getString(i, "ORDERCODE") + "]";
							rtnMsg += "Parameter '" + checkField[j] + "' isEmpty";
					throw new NexaUserException(rtnMsg);
				}
			}
			
			//2.해당 주문이 이미 처리 된 주문인지 확인.
			Map search = new HashMap();
			search.put("TOL_SCD"	, "010");
			search.put("TOL_NO"		, dsParam.getString(i, "ORDERCODE"));
			DataSet dsCheck =  nexacroService.queryForDataset(search, "systemCargoService.getOrderInterfaceYn");
			if(dsCheck == null || dsCheck.getRowCount() == 0) {					//조회 된 주문이 없는 경우 I/F 처리 할 수 없음.
				String rtnMsg = "[주문번호 : " + dsParam.getString(i, "ORDERCODE") + "] 미등록 된 주문입니다.";
				throw new NexaUserException(rtnMsg);
			} else {
				if(!StringUtil.isNull(dsCheck.getString(0, "OPEN_SYS_CD"))) {	//OPEN_SYS_CD 값이 존재하는 경우 I/F 처리 된 주문임.
					String rtnMsg = "[주문번호 : " + dsParam.getString(i, "ORDERCODE") + "] 해당 주문건은 I/F 처리 된 주문 입니다.";
					throw new NexaUserException(rtnMsg);
				}
			}
			
			//추가 요청 사항 : 화물맨 상/하차지 맵핑 정보를 관리하기 위해 TMDM_ST_NODE_IF=>TPL_ATTR_01 컬럼에 화물맨 상/하차지 코드 정보 적재.
			//상차지.
			saveNode.put("HMM_NODE_ID"	, dsParam.getString(i, "LOACODE"));
			saveNode.put("NODE_ID"		, dsParam.getString(i, "DEP_NODE_ID"));
			nexacroService.updateMap(saveNode, "systemCargoService.updateStNodeIfInfo");
			//하차지.
			saveNode.put("HMM_NODE_ID"	, dsParam.getString(i, "DOWCODE"));
			saveNode.put("NODE_ID"		, dsParam.getString(i, "ARR_NODE_ID"));
			nexacroService.updateMap(saveNode, "systemCargoService.updateStNodeIfInfo");
			
			//2_1 해당 주문번호로 화물맨 이력 등록이 있는 경우 화물 수정으로 처리.
			search.put("SYS_CD"		, "HMM");
			int cnt = (int) nexacroService.queryForObject(search, "systemCargoService.getOrderHistoryCheck");
			if(cnt > 0) {
				Map updateMap = NexacroConvertUtil.makeMap(dsParam, i);		
				resultDs= executeCargoUpdate2(updateMap, resultDs);
			} else {
				//3.화물맨으로 전송되는 데이타.
				JSONObject paramJ 		= new JSONObject();
				SimpleDateFormat dt1 	= new SimpleDateFormat("yyyy-MM-dd HH:mm");
				
				Date depD = StringUtil.stringToDate(StringUtil.rPad(dsParam.getString(i, "LOADAY"), 14, "0"), "yyyyMMddHHmmss");
				String depDate = dt1.format(depD);
				
				Date arrD = StringUtil.stringToDate(StringUtil.rPad(dsParam.getString(i, "DOWDAY"), 14, "0"), "yyyyMMddHHmmss");
				String arrDate = dt1.format(arrD);
				
				paramJ.put("COMCODE"		, PropertiesUtil.getString("hhm.comcode"));			//화물맨에서 제공하는 업체코드 (*필수)				
				paramJ.put("ORDERCODE"		, dsParam.getString(i, "ORDERCODE"));          		//해당 업체에서 사용되는 화물고유 코드 (*필수)		
				paramJ.put("LOADAY"			, depDate);          								//상차시간 (*필수)				
				paramJ.put("LOACITY"		, dsParam.getString(i, "LOACITY"));          		//상차지 (*필수)				
				paramJ.put("LOACODE"		, dsParam.getString(i, "LOACODE"));          		//지역코드 (*필수)				
				paramJ.put("POIX"			, dsParam.getString(i, "POIX"));          			//상차지 x좌표 (*필수)				
				paramJ.put("POIY"			, dsParam.getString(i, "POIY"));          			//상차지 y좌표 (*필수)				
				paramJ.put("DOWDAY"			, arrDate);          								//하차시간 (*필수)				
				paramJ.put("DOWCITY"		, dsParam.getString(i, "DOWCITY"));          		//하차지 (*필수)				
				paramJ.put("DOWCODE"		, dsParam.getString(i, "DOWCODE"));          		//지역코드 (*필수)				
				paramJ.put("POIX_OUT"		, dsParam.getString(i, "POIX_OUT"));          		//하차지 x좌표 (*필수)				
				paramJ.put("POIY_OUT"		, dsParam.getString(i, "POIY_OUT"));          		//하차지 y좌표 (*필수)				
				paramJ.put("CARTON"			, dsParam.getString(i, "CARTON"));          		//차량 톤수 (*필수)				
				paramJ.put("CARTYPE"		, dsParam.getString(i, "CARTYPE"));          		//차량 종류 (*필수)				
				paramJ.put("LOADTYPE"		, "alone01");          								//독차,혼차 구분 	- 독차로 Prfix			
				paramJ.put("NAME"			, dsParam.getString(i, "NAME"));          			//화주 이름 (*필수)				
				paramJ.put("PAYMENT"		, "payMethod04");          							//결제방식 (*필수)	- 후물로 Prefix			
				paramJ.put("PAY"			, dsParam.getString(i, "PAY"));          			//운임료 (*필수)				
				paramJ.put("FEE"			, dsParam.getString(i, "FEE"));          			//수수료 				
				paramJ.put("INFO"			, dsParam.getString(i, "INFO"));          			//화물정보 (*필수)				
				paramJ.put("ETC"			, dsParam.getString(i, "ETC"));          			//기타사항				
				paramJ.put("PHONE"			, dsParam.getString(i, "PHONE"));          			//화주핸드폰번호 (*필수)				
				paramJ.put("SATYPE"			, "MoveType02");          							//상차방법(*필수) - 일반으로 Prefix					
				paramJ.put("HATYPE"			, "MoveType02");          							//하차방법(*필수) - 일반으로 Prefix				
				paramJ.put("WEIGHT"			, dsParam.getString(i, "WEIGHT"));          		//화물실중량(*필수) (단위 : 톤)				
				paramJ.put("HASH"			, getHashCode());          							//20190114131056(시간: 14자리)+암호화(sha) (*필수)
				paramJ.put("AP_RATE_AMT"	, dsParam.getString(i, "AP_RATE_AMT"));
				
				resultArr.add(paramJ);
			}
		}
		
		//4.화물맨으로 주문정보 I/F 처리.
		String url = PropertiesUtil.getString("hhm.url") + "set_cargo_regist";
		Map save = new HashMap();
		logger.info("[HMM] SYSTEM I/F CALL URL :: " + url);
		
		for(int k=0; k<resultArr.size(); k++) {
			JSONObject hmmJ 	= (JSONObject) resultArr.get(k);
			String orderNum 	= (String) hmmJ.get("ORDERCODE");
			String apRateAmt 	= (String) hmmJ.get("AP_RATE_AMT");
			
			//화물맨 통신시에는 해당 파라미터 제거.
			hmmJ.remove("AP_RATE_AMT");
			
			try {
				logger.info("화물맨 I/F Parameter  =>> " + hmmJ.toJSONString());
				JSONObject response = HttpClientUtil.httpPost(hmmJ, url);
				int status 			= (int) response.get("status");
				JSONObject resultJ 	= StringUtil.stringToJson((String)response.get("result"));
				
				logger.info("HMM I/F[executeCargoInsert] Result :: " + resultJ.toJSONString());
				
				if(status == 200) {
					if("200".equals(resultJ.get("code"))) {
						/*resultDs.set(row, "CODE"	, resultJ.get("code"));
						resultDs.set(row, "MSG"		, resultJ.get("msg"));
						resultDs.set(row, "DATA"	, resultJ.get("data"));
						resultDs.set(row, "TOL_NO"	, orderNum);*/
						
						//주문정보(TTMS_OD_TOLEG_HD)에 I/F결과 업데이트
						save.put("TOL_NO"			, orderNum);
						save.put("OPEN_SYS_CD"		, "HMM");		//시스템구분 HMM(화물맨) Prefix
						save.put("OPEN_SYS_SCD"		, "state02");	//배차대기로 Prefix
						save.put("TOL_SCD"			, "010");	
						
						save.put("AP_AMT"			, hmmJ.get("PAY"));		//매입금액
						save.put("AP_RATE_AMT"		, apRateAmt);			//매입요율금액
						save.put("AP_RATE_CLS_CD"	, "3");					//대당
						save.put("gv_userId"		, dsParam.getString(0, "gv_userId"));	
						save.put("REMK"				, hmmJ.get("ETC"));	
						
						nexacroService.update("systemCargoService.updateOrderInfoIF", save); 
						
						// *TOLEG HIST UPDATE
						Map<String,Object> orderInfo = (Map<String, Object>) nexacroService.queryForObject(save, "systemCargoService.selectOrderInfo");
						nexacroService.updateMap(orderInfo, "commonService.insertTolegHdHist");
						
						save.put("LOACODE"	, hmmJ.get("LOACODE"));					
						save.put("DOWCODE"	, hmmJ.get("DOWCODE"));					
						save.put("CARTON"	, hmmJ.get("CARTON"));					
						save.put("CARTYPE"	, hmmJ.get("CARTYPE"));		
						save.put("PAYMENT"	, hmmJ.get("PAYMENT"));		
						save.put("SATYPE"	, hmmJ.get("SATYPE"));		
						save.put("LOADTYPE"	, hmmJ.get("LOADTYPE"));		
						
						//화물맨 화물등록 이력 저장.(TMDM_IF_SYS_HIST)
						try{
							nexacroService.insert("systemCargoService.insertSysHistory", save);
						} catch(Exception e) {
							logger.error("HMM I/F HISTORY(TMDM_IF_SYS_HIST) INSERT ERROR =>>", e);
						}
						
					} else {
						int row = resultDs.newRow();
						resultDs.set(row, "CODE"	, resultJ.get("code"));
						resultDs.set(row, "MSG"		, resultJ.get("msg"));
						resultDs.set(row, "DATA"	, resultJ.get("data"));
						resultDs.set(row, "TOL_NO"	, orderNum);
					}
				} else {
					int row = resultDs.newRow();
					resultDs.set(row, "CODE"	, status);
					resultDs.set(row, "MSG"		, resultJ.get("error"));
					resultDs.set(row, "DATA"	, resultJ.get("path"));
					resultDs.set(row, "TOL_NO"	, orderNum);
				}
			} catch(Exception e) {
				logger.error("HttpClient Exception =>", e);
				int row = resultDs.newRow();
				resultDs.set(row, "CODE"	, -1);
				resultDs.set(row, "MSG"		, e.getCause().getMessage());
				resultDs.set(row, "DATA"	, "");
				resultDs.set(row, "TOL_NO"	, orderNum);
			}
		}
		
		outParam.setOutDatasetList("dsResult", resultDs);
		return outParam;
	}

	/**
	 * 화물맨 화물수정<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters executeCargoUpdate(Parameters inParam) throws Exception {
		Parameters	outParam	= inParam.getClass().newInstance();
		DataSet	dsParam			= inParam.getDataSet("dsSave");
		JSONArray resultArr		= new JSONArray();
		String[] checkField		= {"ORDERCODE", "LOADAY", "LOACITY"	
									, "LOACODE", "POIX", "POIY", "DOWDAY", "DOWCITY", "DOWCODE"	
									, "POIX_OUT", "POIY_OUT", "CARTON", "CARTYPE", "NAME"			
									, "PAY", "INFO", "PHONE", "WEIGHT"};
		
		//결과 정보를 화면으로 리턴하기위한 컬럼 정보 생성.
		//타 시스템 간 I/F로 인해 NexaUserException 대신 결과 Dataset으로 리턴.
		//다건을 I/F하기에 성공한 정보와 실패한 정보를 화면으로 리턴 목적.
		//단, Validation에 걸리는 경우에는 NexaUserException로 사용하여 리턴.
		DataSet resultDs = new DataSet("dsResutl");
		resultDs.addColumn("CODE"	,DataTypes.STRING, 100);
		resultDs.addColumn("MSG" 	,DataTypes.STRING, 100);
		resultDs.addColumn("DATA" 	,DataTypes.STRING, 100);
		resultDs.addColumn("TOL_NO" ,DataTypes.STRING, 100);
		
		//화물맨 노드 정보 적재를 위한 Obejct 생성.
		Map saveNode = new HashMap();
		
		//다중 주문 정보 loop
		for(int i=0; i<dsParam.getRowCount(); i++) {
			//1.체크 된 항목만 처리.
			if("1".equals(dsParam.getString(i, "CHK"))) {	
				//1.1공개화물 수정 시 기존 등록 된 정보를 HISTORY에서 조회 한다.
				DataSet dsSave = nexacroService.queryForDataset(dsParam, i, "systemCargoService.getOrderInterfaceInfo");
				
				if(dsSave == null || dsSave.getRowCount() == 0) {
					throw new NexaUserException("공개화물 수정 처리 할 정보가 존재 하지 않습니다.");
				}
				
				//2.필수값 확인.
				for(int j=0; j<checkField.length; j++) {
					String chkCol = StringUtil.nullToString(dsSave.getString(0, checkField[j]));
					if(StringUtil.isNull(chkCol)) {
						String rtnMsg = i + "[row] [Order Number : " + dsParam.getString(i, "TOL_NO") + "]";
								rtnMsg += "Parameter '" + checkField[j] + "' isEmpty";
						throw new NexaUserException(rtnMsg);
					}
				}
				
				//3.해당 주문이 이미 처리 된 주문인지 확인.
				Map search = new HashMap();
				search.put("TOL_SCD"		, "010");
				search.put("OPEN_SYS_CD"	, "HMM");
				search.put("TOL_NO"			, dsParam.getString(i, "TOL_NO"));
				DataSet dsCheck =  nexacroService.queryForDataset(search, "systemCargoService.getOrderInterfaceYn");
				if(dsCheck == null || dsCheck.getRowCount() == 0) {					//조회 된 주문이 없는 경우 I/F 처리 할 수 없음.
					String rtnMsg = "[주문번호 : " + dsParam.getString(i, "TOL_NO") + "] 화물수정이 불가능한 주문입니다.";
					throw new NexaUserException(rtnMsg);
				}
				
				//추가 요청 사항 : 화물맨 상/하차지 맵핑 정보를 관리하기 위해 TMDM_ST_NODE_IF=>TPL_ATTR_01 컬럼에 화물맨 상/하차지 코드 정보 적재.
				//상차지.
				saveNode.put("HMM_NODE_ID"	, dsSave.getString(0, "LOACODE"));
				saveNode.put("NODE_ID"		, dsSave.getString(0, "DEP_NODE_ID"));
				nexacroService.updateMap(saveNode, "systemCargoService.updateStNodeIfInfo");
				//하차지.
				saveNode.put("HMM_NODE_ID"	, dsSave.getString(0, "DOWCODE"));
				saveNode.put("NODE_ID"		, dsSave.getString(0, "ARR_NODE_ID"));
				nexacroService.updateMap(saveNode, "systemCargoService.updateStNodeIfInfo");
				
				//4.화물맨으로 전송되는 데이타.
				JSONObject paramJ 	= new JSONObject();
				SimpleDateFormat dt1 	= new SimpleDateFormat("yyyy-MM-dd HH:mm");
				
				Date depD = StringUtil.stringToDate(StringUtil.rPad(dsSave.getString(0, "LOADAY"), 14, "0"), "yyyyMMddHHmmss");
				String depDate = dt1.format(depD);
				
				Date arrD = StringUtil.stringToDate(StringUtil.rPad(dsSave.getString(0, "DOWDAY"), 14, "0"), "yyyyMMddHHmmss");
				String arrDate = dt1.format(arrD);
				
				paramJ.put("COMCODE"		, PropertiesUtil.getString("hhm.comcode"));			//화물맨에서 제공하는 업체코드 (*필수)				
				paramJ.put("ORDERCODE"		, dsSave.getString(0, "ORDERCODE"));          		//해당 업체에서 사용되는 화물고유 코드 (*필수)		
				paramJ.put("LOADAY"			, depDate);          								//상차시간 (*필수)				
				paramJ.put("LOACITY"		, dsSave.getString(0, "LOACITY"));          		//상차지 (*필수)				
				paramJ.put("LOACODE"		, dsSave.getString(0, "LOACODE"));          		//지역코드 (*필수)				
				paramJ.put("POIX"			, dsSave.getString(0, "POIX"));          			//상차지 x좌표 (*필수)				
				paramJ.put("POIY"			, dsSave.getString(0, "POIY"));          			//상차지 y좌표 (*필수)				
				paramJ.put("DOWDAY"			, arrDate);          								//하차시간 (*필수)				
				paramJ.put("DOWCITY"		, dsSave.getString(0, "DOWCITY"));          		//하차지 (*필수)				
				paramJ.put("DOWCODE"		, dsSave.getString(0, "DOWCODE"));          		//지역코드 (*필수)				
				paramJ.put("POIX_OUT"		, dsSave.getString(0, "POIX_OUT"));          		//하차지 x좌표 (*필수)				
				paramJ.put("POIY_OUT"		, dsSave.getString(0, "POIY_OUT"));          		//하차지 y좌표 (*필수)				
				paramJ.put("CARTON"			, dsSave.getString(0, "CARTON"));          			//차량 톤수 (*필수)				
				paramJ.put("CARTYPE"		, dsSave.getString(0, "CARTYPE"));          		//차량 종류 (*필수)				
				paramJ.put("LOADTYPE"		, "alone01");          								//독차,혼차 구분 	- 독차로 Prfix			
				paramJ.put("NAME"			, dsSave.getString(0, "NAME"));          			//화주 이름 (*필수)				
				paramJ.put("PAYMENT"		, "payMethod04");          							//결제방식 (*필수)	- 후물로 Prefix			
				paramJ.put("PAY"			, dsSave.getString(0, "PAY"));          			//운임료 (*필수)				
				paramJ.put("FEE"			, "");          									//수수료 				
				paramJ.put("INFO"			, dsSave.getString(0, "INFO"));          			//화물정보 (*필수)				
				paramJ.put("ETC"			, dsSave.getString(0, "ETC"));          			//기타사항				
				paramJ.put("PHONE"			, dsSave.getString(0, "PHONE"));          			//화주핸드폰번호 (*필수)				
				paramJ.put("SATYPE"			, "MoveType02");          							//상차방법(*필수) - 일반으로 Prefix					
				paramJ.put("HATYPE"			, "MoveType02");          							//하차방법(*필수) - 일반으로 Prefix				
				paramJ.put("WEIGHT"			, dsSave.getString(0, "WEIGHT"));          			//화물실중량(*필수) (단위 : 톤)				
				paramJ.put("HASH"			, getHashCode());          							//20190114131056(시간: 14자리)+암호화(sha) (*필수)
				paramJ.put("AP_RATE_AMT"	, dsSave.getString(0, "AP_RATE_AMT"));
				
				resultArr.add(paramJ);
			}
		}
		
		//5.화물맨으로 주문정보 I/F 처리.
		String url 	= PropertiesUtil.getString("hhm.url") + "set_cargo_update";
		Map save 	= new HashMap();
		logger.info("[HMM] SYSTEM I/F CALL URL :: " + url);
		
		for(int k=0; k<resultArr.size(); k++) {
			JSONObject hmmJ 	= (JSONObject) resultArr.get(k);
			String orderNum 	= (String) hmmJ.get("ORDERCODE");
			String apRateAmt 	= (String) hmmJ.get("AP_RATE_AMT");
			
			//화물맨 통신시에는 해당 파라미터 제거.
			hmmJ.remove("AP_RATE_AMT");
			
			try {
				logger.info("HMM executeCargoUpdate Request Parameter =>" + hmmJ.toJSONString());
				
				JSONObject response = HttpClientUtil.httpPost(hmmJ, url);
				
				logger.info("HMM executeCargoUpdate Response =>" + response.toJSONString());
				
				int status 			= (int) response.get("status");
				JSONObject resultJ 	= StringUtil.stringToJson((String)response.get("result"));
				if(status == 200) {
					if("200".equals(resultJ.get("code"))) {	
						//주문정보(TTMS_OD_TOLEG_HD)에 I/F결과 업데이트
						save.put("TOL_NO"			, orderNum);
						save.put("OPEN_SYS_CD"		, "HMM");		//시스템구분 HMM(화물맨) Prefix
						save.put("OPEN_SYS_SCD"		, "state02");	//배차대기로 Prefix
						save.put("TOL_SCD"			, "010");	
						
						save.put("AP_AMT"			, hmmJ.get("PAY"));		//매입금액
						save.put("AP_RATE_AMT"		, apRateAmt);			//매입요율금액
						save.put("AP_RATE_CLS_CD"	, "3");					//대당
						save.put("gv_userId"		, dsParam.getString(0, "gv_userId"));	
						save.put("REMK"				, hmmJ.get("ETC"));	
						
						nexacroService.update("systemCargoService.updateOrderInfoIF", save); 
						
						// *TOLEG HIST UPDATE
						Map<String,Object> orderInfo = (Map<String, Object>) nexacroService.queryForObject(save, "systemCargoService.selectOrderInfo");
						nexacroService.updateMap(orderInfo, "commonService.insertTolegHdHist");
						
						save.put("LOACODE"	, hmmJ.get("LOACODE"));					
						save.put("DOWCODE"	, hmmJ.get("DOWCODE"));					
						save.put("CARTON"	, hmmJ.get("CARTON"));					
						save.put("CARTYPE"	, hmmJ.get("CARTYPE"));		
						save.put("PAYMENT"	, hmmJ.get("PAYMENT"));		
						save.put("SATYPE"	, hmmJ.get("SATYPE"));		
						save.put("LOADTYPE"	, hmmJ.get("LOADTYPE"));		
						
						//화물맨 화물등록 이력 저장.(TMDM_IF_SYS_HIST)
						try{
							nexacroService.insert("systemCargoService.insertSysHistory", save);
						} catch(Exception e) {
							logger.error("HMM I/F HISTORY(TMDM_IF_SYS_HIST) INSERT ERROR =>>", e);
						}
					} else {
						int row = resultDs.newRow();
						resultDs.set(row, "CODE"	, resultJ.get("code"));
						resultDs.set(row, "MSG"		, resultJ.get("msg"));
						resultDs.set(row, "DATA"	, resultJ.get("data"));
						resultDs.set(row, "TOL_NO"	, orderNum);
					}
				} else {
					int row = resultDs.newRow();
					resultDs.set(row, "CODE"	, status);
					resultDs.set(row, "MSG"		, resultJ.get("error"));
					resultDs.set(row, "DATA"	, resultJ.get("path"));
					resultDs.set(row, "TOL_NO"	, orderNum);
				}
			} catch(Exception e) {
				logger.error("HttpClient Exception =>", e);
				
				int row = resultDs.newRow();
				resultDs.set(row, "CODE"	, -1);
				resultDs.set(row, "MSG"		, e.getCause().getMessage());
				resultDs.set(row, "DATA"	, "");
				resultDs.set(row, "TOL_NO"	, orderNum);
			}
		}
		
		outParam.setOutDatasetList("dsResult", resultDs);
		return outParam;
	}

	/**
	 * 화물맨 화물취소<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters executeCargoCancel(Parameters inParam) throws Exception {
		Parameters	outParam	= inParam.getClass().newInstance();
		DataSet	dsParam			= inParam.getDataSet("dsSave");
		JSONArray resultArr		= new JSONArray();
		String[] checkField		= {"TOL_NO"};
		
		//결과 정보를 화면으로 리턴하기위한 컬럼 정보 생성.
		//타 시스템 간 I/F로 인해 NexaUserException 대신 결과 Dataset으로 리턴.
		//다건을 I/F하기에 성공한 정보와 실패한 정보를 화면으로 리턴 목적.
		//단, Validation에 걸리는 경우에는 NexaUserException로 사용하여 리턴.
		DataSet resultDs = new DataSet("dsResutl");
		resultDs.addColumn("CODE"	,DataTypes.STRING, 100);
		resultDs.addColumn("MSG" 	,DataTypes.STRING, 100);
		resultDs.addColumn("DATA" 	,DataTypes.STRING, 100);
		resultDs.addColumn("TOL_NO" ,DataTypes.STRING, 100);
		
		//다중 주문 정보 loop
		for(int i=0; i<dsParam.getRowCount(); i++) {
			//1.체크 된 항목만 처리.
			if("1".equals(dsParam.getString(i, "CHK"))) {	
				//2.필수값 확인.
				for(int j=0; j<checkField.length; j++) {
					String chkCol = StringUtil.nullToString(dsParam.getString(i, checkField[j]));
					if(StringUtil.isNull(chkCol)) {
						String rtnMsg = i + "[row] [Order Number : " + dsParam.getString(i, "TOL_NO") + "]";
								rtnMsg += "Parameter '" + checkField[j] + "' isEmpty";
						throw new NexaUserException(rtnMsg);
					}
				}
				
				//3.해당 주문이 이미 처리 된 주문인지 확인.
				Map search = new HashMap();
				search.put("OPEN_SYS_CD", "HMM");
				search.put("TOL_NO"		, dsParam.getString(i, "TOL_NO"));
				search.put("TOL_SCD"	, "010");
				DataSet dsCheck =  nexacroService.queryForDataset(search, "systemCargoService.getOrderInterfaceYn");
				if(dsCheck == null || dsCheck.getRowCount() == 0) {					//조회 된 주문이 없는 경우 I/F 처리 할 수 없음.
					String rtnMsg = "[주문번호 : " + dsParam.getString(i, "TOL_NO") + "] 미등록 된 주문입니다.";
					throw new NexaUserException(rtnMsg);
				}
				
				//4.화물맨으로 전송되는 데이타.
				JSONObject paramJ 	= new JSONObject();
				paramJ.put("COMCODE"		, PropertiesUtil.getString("hhm.comcode"));			//화물맨에서 제공하는 업체코드 (*필수)				
				paramJ.put("ORDERCODE"		, dsParam.getString(i, "TOL_NO"));          		//해당 업체에서 사용되는 화물고유 코드 (*필수)		
				paramJ.put("HASH"			, getHashCode());          							//20190114131056(시간: 14자리)+암호화(sha) (*필수)
				
				resultArr.add(paramJ);
			}
		}
		
		//5.화물맨으로 주문취소 I/F 처리.
		String url = PropertiesUtil.getString("hhm.url") + "set_cargo_cancel";
		Map save = new HashMap();
		logger.info("[HMM] SYSTEM I/F CALL URL :: " + url);
		
		for(int k=0; k<resultArr.size(); k++) {
			JSONObject hmmJ = (JSONObject) resultArr.get(k);
			String orderNum = (String) hmmJ.get("ORDERCODE");
			
			try {
				logger.info("HMM executeCargoCancel Request =>" + hmmJ.toJSONString());
				
				JSONObject response = HttpClientUtil.httpPost(hmmJ, url);
				
				logger.info("HMM executeCargoCancel Response =>" + response.toJSONString());
				
				int status 			= (int) response.get("status");
				JSONObject resultJ 	= StringUtil.stringToJson((String)response.get("result"));
				if(status == 200) {
					if("200".equals(resultJ.get("code"))) {
						/*resultDs.set(row, "CODE"	, resultJ.get("code"));
						resultDs.set(row, "MSG"		, resultJ.get("msg"));
						resultDs.set(row, "DATA"	, resultJ.get("data"));
						resultDs.set(row, "TOL_NO"	, orderNum);*/
						
						//주문정보(TTMS_OD_TOLEG_HD)에 I/F결과 업데이트
						save.put("TOL_NO"			, orderNum);
						save.put("OPEN_SYS_CD"		, "");		//시스템구분 초기화 Prefix
						save.put("OPEN_SYS_SCD"		, "");		//상태값 초기화
						save.put("gv_userId"        , dsParam.getString(0, "gv_userId"));
						
						nexacroService.update("systemCargoService.updateOrderCancelIF", save); 
						
						// *TOLEG HIST UPDATE
						Map<String,Object> orderInfo = (Map<String, Object>) nexacroService.queryForObject(save, "systemCargoService.selectOrderInfo");
						nexacroService.updateMap(orderInfo, "commonService.insertTolegHdHist");
					} else {
						int row = resultDs.newRow();
						resultDs.set(row, "CODE"	, resultJ.get("code"));
						resultDs.set(row, "MSG"		, resultJ.get("msg"));
						resultDs.set(row, "DATA"	, resultJ.get("data"));
						resultDs.set(row, "TOL_NO"	, orderNum);
					}
				} else {
					int row = resultDs.newRow();
					resultDs.set(row, "CODE"	, status);
					resultDs.set(row, "MSG"		, resultJ.get("error"));
					resultDs.set(row, "DATA"	, resultJ.get("path"));
					resultDs.set(row, "TOL_NO"	, orderNum);
				}
			} catch(Exception e) {
				logger.error("HttpClient executeCargoCancel Exception =>", e);
				int row = resultDs.newRow();
				resultDs.set(row, "CODE"	, -1);
				resultDs.set(row, "MSG"		, e.getCause().getMessage());
				resultDs.set(row, "DATA"	, "");
				resultDs.set(row, "TOL_NO"	, orderNum);
			}
		}
				
		outParam.setOutDatasetList("dsResult", resultDs);
		return outParam;
	}

	/**
	 * 화물맨 화물 재등록<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters executeCargorReopen(Parameters inParam) throws Exception {
		Parameters	outParam	= inParam.getClass().newInstance();
		
		DataSet	dsParam			= inParam.getDataSet("dsSave");
		JSONArray resultArr		= new JSONArray();
		String[] checkField		= {"TOL_NO"};
		
		//결과 정보를 화면으로 리턴하기위한 컬럼 정보 생성.
		//타 시스템 간 I/F로 인해 NexaUserException 대신 결과 Dataset으로 리턴.
		//다건을 I/F하기에 성공한 정보와 실패한 정보를 화면으로 리턴 목적.
		//단, Validation에 걸리는 경우에는 NexaUserException로 사용하여 리턴.
		DataSet resultDs = new DataSet("dsResutl");
		resultDs.addColumn("CODE"	,DataTypes.STRING, 100);
		resultDs.addColumn("MSG" 	,DataTypes.STRING, 100);
		resultDs.addColumn("DATA" 	,DataTypes.STRING, 100);
		resultDs.addColumn("TOL_NO" ,DataTypes.STRING, 100);
		
		//다중 주문 정보 loop
		for(int i=0; i<dsParam.getRowCount(); i++) {
			//1.체크 된 항목만 처리.
			if("1".equals(dsParam.getString(i, "CHK"))) {	
				//2.필수값 확인.
				for(int j=0; j<checkField.length; j++) {
					String chkCol = StringUtil.nullToString(dsParam.getString(i, checkField[j]));
					if(StringUtil.isNull(chkCol)) {
						String rtnMsg = i + "[row] [Order Number : " + dsParam.getString(i, "TOL_NO") + "]";
								rtnMsg += "Parameter '" + checkField[j] + "' isEmpty";
						throw new NexaUserException(rtnMsg);
					}
				}
				
				//3.해당 주문이 이미 처리 된 주문인지 확인.
				Map search = new HashMap();
				search.put("OPEN_SYS_CD", "HMM");
				search.put("TOL_SCD"	, "090");
				search.put("TOL_NO"		, dsParam.getString(i, "TOL_NO"));
				DataSet dsCheck =  nexacroService.queryForDataset(search, "systemCargoService.getOrderInterfaceYn");
				if(dsCheck == null || dsCheck.getRowCount() == 0) {					//조회 된 주문이 없는 경우 I/F 처리 할 수 없음.
					String rtnMsg = "[주문번호 : " + dsParam.getString(i, "TOL_NO") + "] 미등록 된 주문입니다.";
					throw new NexaUserException(rtnMsg);
				} 
				
				//4.화물맨으로 전송되는 데이타.
				JSONObject paramJ 	= new JSONObject();
				paramJ.put("COMCODE"		, PropertiesUtil.getString("hhm.comcode"));			//화물맨에서 제공하는 업체코드 (*필수)				
				paramJ.put("ORDERCODE"		, dsParam.getString(i, "TOL_NO"));          		//해당 업체에서 사용되는 화물고유 코드 (*필수)		
				paramJ.put("HASH"			, getHashCode());          							//20190114131056(시간: 14자리)+암호화(sha) (*필수)
				
				resultArr.add(paramJ);
			}
		}
		
		//5.화물맨으로 주문취소 I/F 처리.
		String url = PropertiesUtil.getString("hhm.url") + "set_cargo_reopen";
		Map save = new HashMap();
		logger.info("[HMM] SYSTEM I/F CALL URL :: " + url);
		
		for(int k=0; k<resultArr.size(); k++) {
			JSONObject hmmJ = (JSONObject) resultArr.get(k);
			String orderNum = (String) hmmJ.get("ORDERCODE");
			
			try {
				logger.info("HMM executeCargorReopen Request =>" + hmmJ.toJSONString());
				
				JSONObject response = HttpClientUtil.httpPost(hmmJ, url);
				
				logger.info("HMM executeCargorReopen Response =>" + response.toJSONString());
				
				int status 			= (int) response.get("status");
				JSONObject resultJ 	= StringUtil.stringToJson((String)response.get("result"));
				if(status == 200) {
					if("200".equals(resultJ.get("code"))) {
						/*resultDs.set(row, "CODE"	, resultJ.get("code"));
						resultDs.set(row, "MSG"		, resultJ.get("msg"));
						resultDs.set(row, "DATA"	, resultJ.get("data"));
						resultDs.set(row, "TOL_NO"	, orderNum);*/
						
						//주문정보(TTMS_OD_TOLEG_HD)에 I/F결과 업데이트
						save.put("TOL_NO"			, orderNum);
						save.put("OPEN_SYS_CD"		, "HMM");		//시스템구분 초기화 Prefix
						save.put("OPEN_SYS_SCD"		, "state02");	//상태값 초기화(배차대기)
						save.put("gv_userId"		, dsParam.getString(0, "gv_userId"));
						save.put("gv_ipAddr"		, dsParam.getString(0, "gv_ipAddr"));
						
						nexacroService.update("systemCargoService.updateOrderCancelIF", save); 
						
						// *TOLEG HIST UPDATE
						Map<String,Object> orderInfo = (Map<String, Object>) nexacroService.queryForObject(save, "systemCargoService.selectOrderInfo");
						nexacroService.updateMap(orderInfo, "commonService.insertTolegHdHist");
						
						//배차 취소 프로세스 Call
						callVhclCancel(save);
					} else {
						int row = resultDs.newRow();
						resultDs.set(row, "CODE"	, resultJ.get("code"));
						resultDs.set(row, "MSG"		, resultJ.get("msg"));
						resultDs.set(row, "DATA"	, resultJ.get("data"));
						resultDs.set(row, "TOL_NO"	, orderNum);
					}
				} else {
					int row = resultDs.newRow();
					resultDs.set(row, "CODE"	, status);
					resultDs.set(row, "MSG"		, resultJ.get("error"));
					resultDs.set(row, "DATA"	, resultJ.get("path"));
					resultDs.set(row, "TOL_NO"	, orderNum);
				}
			} catch(Exception e) {
				logger.error("HttpClient executeCargorReopen Exception =>", e);
				
				int row = resultDs.newRow();
				resultDs.set(row, "CODE"	, -1);
				resultDs.set(row, "MSG"		, e.getCause().getMessage());
				resultDs.set(row, "DATA"	, "");
				resultDs.set(row, "TOL_NO"	, orderNum);
			}
		}
				
		outParam.setOutDatasetList("dsResult", resultDs);
		
		return outParam;
	}

	/**
	 * 화물맨 주소찾기<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings("unchecked")
	public Parameters executeCargoAddrSearch(Parameters inParam) throws Exception {
		Parameters	outParam	= inParam.getClass().newInstance();
		DataSet	dsParam			= inParam.getDataSet("dsSave");
		
		DataSet resultDs 		= new DataSet("dsResutl");
		resultDs.addColumn("CODE"	,DataTypes.STRING, 100);
		resultDs.addColumn("GU" 	,DataTypes.STRING, 100);
		resultDs.addColumn("DONG" 	,DataTypes.STRING, 100);
		resultDs.addColumn("GUN" 	,DataTypes.STRING, 100);
		resultDs.addColumn("SIDO" 	,DataTypes.STRING, 100);
		resultDs.addColumn("POIX" 	,DataTypes.STRING, 100);
		resultDs.addColumn("POIY" 	,DataTypes.STRING, 100);
		
		if(dsParam != null && dsParam.getRowCount() > 0) {
			String url 	= PropertiesUtil.getString("hhm.url") + "get_addr_search";
			String step = dsParam.getString(0, "STEP");
			String code = dsParam.getString(0, "CODE");
			
			JSONObject json 	= new JSONObject();
			json.put("COMCODE"	, PropertiesUtil.getString("hhm.comcode"));
			json.put("HASH"		, getHashCode());
			json.put("STEP"		, step);
			json.put("CODE"		, code);
			
			JSONObject response = HttpClientUtil.httpPost(json, url);
			int status 			= (int) response.get("status");
			JSONObject resultJ 	= StringUtil.stringToJson((String)response.get("result"));
			if(status == 200) {
				if("200".equals(resultJ.get("code"))) {
					JSONArray arrJ = (JSONArray) resultJ.get("data");
					for(int i=0; i<arrJ.size(); i++) {
						JSONObject dataJ 	= (JSONObject) arrJ.get(i);
						int row 			= resultDs.newRow();
						
						resultDs.set(row, "CODE"	, dataJ.get("CODE"));
						resultDs.set(row, "GU" 		, dataJ.get("GU"));
						resultDs.set(row, "DONG" 	, dataJ.get("DONG"));
						resultDs.set(row, "GUN" 	, dataJ.get("GUN"));
						resultDs.set(row, "SIDO" 	, dataJ.get("SIDO"));
						resultDs.set(row, "POIX" 	, dataJ.get("POIX"));
						resultDs.set(row, "POIY" 	, dataJ.get("POIY"));
					}
				}
			}
		}
		
		outParam.setOutDatasetList("dsResult", resultDs);
		return outParam;
	}

	/**
	 * 화물맨 공통코드<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Parameters executeCargoCodeConfig(Parameters inParam) throws Exception {
		Parameters	outParam	= inParam.getClass().newInstance();	
		DataSet	dsParam			= inParam.getDataSet("dsSave");
		
		DataSet resultDs 		= new DataSet("dsResutl");
		resultDs.addColumn("CD_TCD"	,DataTypes.STRING, 100);
		resultDs.addColumn("CD"		,DataTypes.STRING, 100);
		resultDs.addColumn("CD_NM" 	,DataTypes.STRING, 100);
		
		if(dsParam != null && dsParam.getRowCount() > 0) {
			String url 	= PropertiesUtil.getString("hhm.url") + "get_code_config";
			
			JSONObject json 	= new JSONObject();
			json.put("COMCODE"	, PropertiesUtil.getString("hhm.comcode"));
			json.put("HASH"		, getHashCode());
			
			JSONObject response = HttpClientUtil.httpPost(json, url);
			int status 			= (int) response.get("status");
			JSONObject resultJ 	= StringUtil.stringToJson((String)response.get("result"));
			if(status == 200) {
				if("200".equals(resultJ.get("code"))) {
					JSONObject dataJ = (JSONObject) resultJ.get("data");
					// key set 받아오기 
					Set key = dataJ.keySet();
					 // Iterator 설정
		            Iterator<String> iter = key.iterator();
					while(iter.hasNext()) {
						String keyName = iter.next();
						JSONArray arr = (JSONArray) dataJ.get(keyName);
						for(int i=0; i<arr.size(); i++) {
							JSONObject data = (JSONObject) arr.get(i);
							int row = resultDs.newRow();
							resultDs.set(row, "CD_TCD"	, keyName);
							resultDs.set(row, "CD"		, data.get("key"));
							resultDs.set(row, "CD_NM"	, data.get("value"));
						}
					}
				}
			}
		}
		
		outParam.setOutDatasetList("dsResult", resultDs);
		return outParam;
	}
	
	/**
	 * 리턴 메세지 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings("unchecked")
	private JSONObject getMessage(String args) {
		JSONObject resultJ 	= new JSONObject();
		int code 	= 200;
		String msg 	= "";
		String data = "";
		
		if("S".equals(args)) {
			code 	= 200;
			msg 	= "성공"; 
			data	= "";
		} else if("F_ORDER_03".equals(args)) {
			code 	= 101;
			msg 	= "이미 배차 된 주문입니다."; 
			data	= "state03";
		} else if("F_ORDER_06".equals(args)) {
			code 	= 101;
			msg 	= "취소 된 주문입니다."; 
			data	= "state06";
		} else if("F_BIZ_NO".equals(args)) {
			code 	= 101;
			msg 	= "사업자번호 인증 실패 하였습니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_04".equals(args)) {
			code 	= 101;
			msg 	= "폐업 신고된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_05".equals(args)) {
			code 	= 101;
			msg 	= "휴업 신고된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_91".equals(args)) {
			code 	= 101;
			msg 	= "미등록된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_WRONG".equals(args)) {
			code 	= 101;
			msg 	= "불량 사업자로 등록된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_00".equals(args)) {
			code 	= 101;
			msg 	= "이미 등록된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_ORDER_CANCEL_01".equals(args)) {
			code 	= 101;
			msg 	= "이미 배차 취소 된 주문입니다."; 
			data	= "state01";
		} else if("F_ORDER_CANCEL_03".equals(args)) {
			code 	= 101;
			msg 	= "배차취소 가능한 상태가 아닙니다."; 
			data	= "state03";
		} 
		
		resultJ.put("code"	, code);
		resultJ.put("msg"	, msg);
		resultJ.put("data"	, data);
		
		logger.info("Validation Check Reulst =>" + resultJ.toJSONString());
		
		return resultJ;
	}
	
	/**
	 * 리턴 메세지 <br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings("unchecked")
	private JSONObject getMessageParam(String args, JSONObject param) {
		JSONObject resultJ 	= new JSONObject();
		int code 	= 200;
		String msg 	= "";
		String data = "";
		
		if("S".equals(args)) {
			code 	= 200;
			msg 	= "성공"; 
			data	= "";
		}  else if("F_ORDER_03".equals(args)) {
			code 	= 101;
			msg 	= "이미 배차 된 주문입니다."; 
			data	= "state03";
		} else if("F_ORDER_S_03".equals(args)) {
			code 	= 200;
			msg 	= "이미 배차 된 주문입니다."; 
			data	= "";
		} else if("F_ORDER_06".equals(args)) {
			code 	= 101;
			msg 	= "취소 된 주문입니다."; 
			data	= "state06";
		} else if("F_BIZ_NO".equals(args)) {
			code 	= 101;
			msg 	= "사업자번호 인증 실패 하였습니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_04".equals(args)) {
			code 	= 101;
			msg 	= "폐업 신고된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_05".equals(args)) {
			code 	= 101;
			msg 	= "휴업 신고된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_91".equals(args)) {
			code 	= 101;
			msg 	= "미등록된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_WRONG".equals(args)) {
			code 	= 101;
			msg 	= "불량 사업자로 등록된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_BIZ_NO_00".equals(args)) {
			code 	= 101;
			msg 	= "이미 등록된 사업자 번호입니다."; 
			data	= "state01";
		} else if("F_ORDER_CANCEL_01".equals(args)) {
			code 	= 101;
			msg 	= "이미 배차 취소 된 주문입니다."; 
			data	= "state01";
		} else if("F_ORDER_CANCEL_03".equals(args)) {
			code 	= 101;
			msg 	= "배차취소 가능한 상태가 아닙니다."; 
			data	= "state03";
		} 
		
		resultJ.put("code"		, code);
		resultJ.put("msg"		, msg);
		resultJ.put("data"		, data);
		resultJ.put("ORDERCODE"	, param.get("ORDERCODE"));
		resultJ.put("CWPHONE"	, param.get("CWPHONE"));
		resultJ.put("CWCARNUM"	, param.get("CWCARNUM"));
		
		logger.info("Validation Check getMessageParam Result =>" + resultJ.toJSONString());
		
		return resultJ;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	private String getComCodeFromHMM(String sysCd, String tcd, String cd) {
		String code = "";
		
		Map param = new HashMap();
		
		param.put("SYS_CD"	, sysCd);
		param.put("CD_TCD"	, tcd);
		param.put("CD"		, cd);
		
		Map result = (Map) nexacroService.queryForObject(param, "systemCargoService.getComCodeFromHMM");
		code = (String) result.get("REF_1");
		return code;
	}
	
	@SuppressWarnings("rawtypes")
	private String bizNoCertification(Map param) {
		String result = "";
		
		Map bizNoChkMap			= (Map) nexacroService.queryForObject(param, "systemCargoService.getBizNoCheck");
		String dsBizNoCheck 	= (String) bizNoChkMap.get("CNT");
		String chKJoinType		= (String) bizNoChkMap.get("JOIN_TYPE");
		String dsWrongBizCheck 	= (String)nexacroService.queryForObject(param, "userMgmService.getWrongBizCheck");
		
		if (StringUtil.isNull(dsBizNoCheck)) {
			dsBizNoCheck = "0";
		}
		
		if (!"0".equals(dsBizNoCheck)) {
			if("T04".equals(chKJoinType)) {
				result = "00";
			} else {
				result = "";
			}
		}
		else if (!"0".equals(dsWrongBizCheck)) {
			result = "WRONG";
		} else {
			BufferedReader br = null;
			StringBuffer sb = new StringBuffer();
		
			String BIZ_REG_NO = (String) param.get("BIZ_REG_NO");
			String ID = "cjgls01";
			String PW = "cj51581";

			try {
				String domain = "http://ecct.innohub.co.kr/Search2.jsp?data=" + ID + "%20%20%20" + PW + "%20%20%20";

				logger.debug("사업자번호 인증 URL : " + domain + BIZ_REG_NO);

				URL url = new URL(domain + BIZ_REG_NO);
				URLConnection conn = (URLConnection)url.openConnection();
				br = new BufferedReader(new InputStreamReader(conn.getInputStream(), "EUC-KR"));
				
				String line = "";
				while((line = br.readLine()) != null) {

					sb.append(line);
					result += line;
				}
			} catch(Exception ex) {
				logger.error("Exception", ex);	
				ex.printStackTrace();
				result = null;
			} finally {
				if(br != null) {
					try {
						br.close();
					} catch(Exception exx) {
						logger.error("Exception", exx);
					}
				}
			}
        }
		
		return result;
	}
	
	private String getHashCode() {
		String key 	= PropertiesUtil.getString("hhm.key");
		String date = StringUtil.toDay("yyyyMMddHHmmss");
		String hash = date + HttpClientUtil.encrypt(date + key);
		
		return hash;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private void callVhclCancel(Map inParam)  throws Exception{
		//1.화물정보망 배차 취소 프로세스 CALL(validation 확인 필요)
		//1.1주문정보 조회.
		inParam.put("TOL_SCD", "090");
		Map<String,Object> orderInfo = (Map<String, Object>) nexacroService.queryForObject(inParam, "systemCargoService.selectOrderInfo");
		orderInfo.put("SO_SCD"		, "010");
		orderInfo.put("EO_SCD"		, "010");
		orderInfo.put("TOL_SCD"		, "010");
		orderInfo.put("gv_userId"	, inParam.get("gv_userId"));
		orderInfo.put("gv_ipAddr"	, inParam.get("gv_ipAddr"));
		
		Object obj = StringUtil.getBean("orderMgmService");
    	Method method = obj.getClass().getMethod("cencelVhclInfo", Map.class);
		method.invoke(obj, orderInfo);
	}

	/**
	 * 화물맨 주소정보 자동 맵핑<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Parameters executeAddrMapping(Parameters inParam) throws Exception {
		Parameters	outParam	= inParam.getClass().newInstance();
		DataSet	dsParam			= inParam.getDataSet("dsParam");
		Map search				= new HashMap();
		Map result				= new HashMap();
		
		DataSet resultDs = new DataSet("dsAddrResult");
		resultDs.addColumn("SYS_DEP_NODE_ID"	,DataTypes.STRING, 100);
		resultDs.addColumn("SYS_DEP_NODE_NM" 	,DataTypes.STRING, 100);
		resultDs.addColumn("SYS_DEP_POIX" 		,DataTypes.STRING, 100);
		resultDs.addColumn("SYS_DEP_POIY" 		,DataTypes.STRING, 100);
		resultDs.addColumn("SYS_ARR_NODE_ID"	,DataTypes.STRING, 100);
		resultDs.addColumn("SYS_ARR_NODE_NM" 	,DataTypes.STRING, 100);
		resultDs.addColumn("SYS_ARR_POIX" 		,DataTypes.STRING, 100);
		resultDs.addColumn("SYS_ARR_POIY" 		,DataTypes.STRING, 100);
		resultDs.addColumn("TOL_NO" 			,DataTypes.STRING, 100);
		resultDs.addColumn("AP_RATE_AMT" 		,DataTypes.STRING, 100);
		
		for(int i=0; i<dsParam.getRowCount(); i++) {
			int nRow = resultDs.newRow();
			resultDs.set(nRow, "TOL_NO", dsParam.getString(i, "TOL_NO"));
			
			search.put("SYS_CD"	, "HMM");
			
			//상차지
			search.put("NODE_ID"	, dsParam.getString(i, "DEP_NODE_ID"));
			search.put("ADDR"		, dsParam.getString(i, "DEP_NODE_NM"));
			
			//1차 맵핑
			result = (Map) nexacroService.queryForObject(search, "ictHmmMngService.getNodeAddrMapping");
			
			if(result == null || result.size() == 0) {
				//2차 맵핑
				result = (Map) nexacroService.queryForObject(search, "ictHmmMngService.getSysAddrMapping");
				if(result !=null && result.size() > 0) {
					resultDs.set(nRow, "SYS_DEP_NODE_ID"	, result.get("CODE"));
					resultDs.set(nRow, "SYS_DEP_NODE_NM"	, result.get("ADDR"));
					resultDs.set(nRow, "SYS_DEP_POIX"		, result.get("POIX"));
					resultDs.set(nRow, "SYS_DEP_POIY"		, result.get("POIY"));
				}
			} else {
				resultDs.set(nRow, "SYS_DEP_NODE_ID"	, result.get("CODE"));
				resultDs.set(nRow, "SYS_DEP_NODE_NM"	, result.get("ADDR"));
				resultDs.set(nRow, "SYS_DEP_POIX"		, result.get("POIX"));
				resultDs.set(nRow, "SYS_DEP_POIY"		, result.get("POIY"));
			}
			
			//하차지
			search.put("NODE_ID"	, dsParam.getString(i, "ARR_NODE_ID"));
			search.put("ADDR"		, dsParam.getString(i, "ARR_NODE_NM"));
			
			//1차 맵핑
			result = (Map) nexacroService.queryForObject(search, "ictHmmMngService.getNodeAddrMapping");
			if(result == null || result.size() == 0) {
				//2차 맵핑
				result = (Map) nexacroService.queryForObject(search, "ictHmmMngService.getSysAddrMapping");
				if(result !=null && result.size() > 0) {
					resultDs.set(nRow, "SYS_ARR_NODE_ID"	, result.get("CODE"));
					resultDs.set(nRow, "SYS_ARR_NODE_NM"	, result.get("ADDR"));
					resultDs.set(nRow, "SYS_ARR_POIX"		, result.get("POIX"));
					resultDs.set(nRow, "SYS_ARR_POIY"		, result.get("POIY"));
				}
			} else {
				resultDs.set(nRow, "SYS_ARR_NODE_ID"	, result.get("CODE"));
				resultDs.set(nRow, "SYS_ARR_NODE_NM"	, result.get("ADDR"));
				resultDs.set(nRow, "SYS_ARR_POIX"		, result.get("POIX"));
				resultDs.set(nRow, "SYS_ARR_POIY"		, result.get("POIY"));
			}
			
			//계약 매입 금액 맵핑.
			DataSet apAmtDs = nexacroService.queryForDataset(dsParam, i, "ictHmmMngService.getSysApRateAmt");
			
			if(apAmtDs == null || apAmtDs.getRowCount() == 0) {
				resultDs.set(nRow, "AP_RATE_AMT", "0");	
			} else {
				resultDs.set(nRow, "AP_RATE_AMT", apAmtDs.getString(0, "AP_RATE_AMT"));	
			}
		}
		
		outParam.setOutDatasetList("dsAddrResult", resultDs);
		return outParam;
	}
	
	
	/**
	 * 화물맨 화물등록<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public DataSet executeCargoUpdate2(Map inParam, DataSet resultDs) throws Exception {
		logger.info("[HMM] SYSTEM I/F executeCargoUpdate2 CALL");
		
		//1.화물맨으로 전송되는 데이타.
		JSONObject paramJ 		= new JSONObject();
		SimpleDateFormat dt1 	= new SimpleDateFormat("yyyy-MM-dd HH:mm");
		
		Date depD = StringUtil.stringToDate(StringUtil.rPad((String)inParam.get("LOADAY"), 14, "0"), "yyyyMMddHHmmss");
		String depDate = dt1.format(depD);
		
		Date arrD = StringUtil.stringToDate(StringUtil.rPad((String)inParam.get("DOWDAY"), 14, "0"), "yyyyMMddHHmmss");
		String arrDate = dt1.format(arrD);
		
		paramJ.put("COMCODE"		, PropertiesUtil.getString("hhm.comcode"));			//화물맨에서 제공하는 업체코드 (*필수)				
		paramJ.put("ORDERCODE"		, inParam.get("ORDERCODE"));          		//해당 업체에서 사용되는 화물고유 코드 (*필수)		
		paramJ.put("LOADAY"			, depDate);          								//상차시간 (*필수)				
		paramJ.put("LOACITY"		, inParam.get("LOACITY"));          		//상차지 (*필수)				
		paramJ.put("LOACODE"		, inParam.get("LOACODE"));          		//지역코드 (*필수)				
		paramJ.put("POIX"			, inParam.get("POIX"));          			//상차지 x좌표 (*필수)				
		paramJ.put("POIY"			, inParam.get("POIY"));          			//상차지 y좌표 (*필수)				
		paramJ.put("DOWDAY"			, arrDate);          								//하차시간 (*필수)				
		paramJ.put("DOWCITY"		, inParam.get("DOWCITY"));          		//하차지 (*필수)				
		paramJ.put("DOWCODE"		, inParam.get("DOWCODE"));          		//지역코드 (*필수)				
		paramJ.put("POIX_OUT"		, inParam.get("POIX_OUT"));          		//하차지 x좌표 (*필수)				
		paramJ.put("POIY_OUT"		, inParam.get("POIY_OUT"));          		//하차지 y좌표 (*필수)				
		paramJ.put("CARTON"			, inParam.get("CARTON"));          			//차량 톤수 (*필수)				
		paramJ.put("CARTYPE"		, inParam.get("CARTYPE"));          		//차량 종류 (*필수)				
		paramJ.put("LOADTYPE"		, "alone01");          								//독차,혼차 구분 	- 독차로 Prfix			
		paramJ.put("NAME"			, inParam.get("NAME"));          			//화주 이름 (*필수)				
		paramJ.put("PAYMENT"		, "payMethod04");          							//결제방식 (*필수)	- 후물로 Prefix			
		paramJ.put("PAY"			, inParam.get("PAY"));          			//운임료 (*필수)				
		paramJ.put("FEE"			, inParam.get("FEE"));          			//수수료 				
		paramJ.put("INFO"			, inParam.get("INFO"));          			//화물정보 (*필수)				
		paramJ.put("ETC"			, inParam.get("ETC"));          			//기타사항				
		paramJ.put("PHONE"			, inParam.get("PHONE"));          			//화주핸드폰번호 (*필수)				
		paramJ.put("SATYPE"			, "MoveType02");          							//상차방법(*필수) - 일반으로 Prefix					
		paramJ.put("HATYPE"			, "MoveType02");          							//하차방법(*필수) - 일반으로 Prefix				
		paramJ.put("WEIGHT"			, inParam.get("WEIGHT"));          			//화물실중량(*필수) (단위 : 톤)				
		paramJ.put("HASH"			, getHashCode());          							//20190114131056(시간: 14자리)+암호화(sha) (*필수)
		
		logger.info("화물맨 I/F Parameter [executeCargoUpdate2]  =>> " + paramJ.toJSONString());
		
		//4.화물맨으로 주문정보 I/F 처리.
		String url = PropertiesUtil.getString("hhm.url") + "set_cargo_update";
		//Map save = new HashMap();
		logger.info("[HMM] SYSTEM I/F CALL URL :: " + url);
		
		try {
			JSONObject response = HttpClientUtil.httpPost(paramJ, url);
			int status 			= (int) response.get("status");
			JSONObject resultJ 	= StringUtil.stringToJson((String)response.get("result"));
			
			logger.info("HMM I/F[executeCargoInsert] Result :: " + resultJ.toJSONString());
			
			if(status == 200) {
				if("200".equals(resultJ.get("code"))) {
					//주문정보(TTMS_OD_TOLEG_HD)에 I/F결과 업데이트
					/*save.put("TOL_NO"			, inParam.get("ORDERCODE"));
					save.put("OPEN_SYS_CD"		, "HMM");		//시스템구분 HMM(화물맨) Prefix
					save.put("OPEN_SYS_SCD"		, "state02");	//배차대기로 Prefix
					save.put("TOL_SCD"			, "010");	
					
					save.put("AP_AMT"			, inParam.get("PAY"));		//매입금액
					save.put("AP_RATE_AMT"		, inParam.get("PAY"));	
					save.put("AP_RATE_CLS_CD"	, "3");					//대당
					save.put("gv_userId"		, inParam.get("gv_userId"));	
					
					nexacroService.update("systemCargoService.updateOrderInfoIF", save); 
					
					save.put("LOACODE"	, inParam.get("LOACODE"));					
					save.put("DOWCODE"	, inParam.get("DOWCODE"));					
					save.put("CARTON"	, inParam.get("CARTON"));					
					save.put("CARTYPE"	, inParam.get("CARTYPE"));		
					save.put("PAYMENT"	, inParam.get("PAYMENT"));		
					save.put("SATYPE"	, inParam.get("SATYPE"));		
					save.put("LOADTYPE"	, inParam.get("LOADTYPE"));		
					
					//화물맨 화물등록 이력 저장.(TMDM_IF_SYS_HIST)
					try{
						nexacroService.insert("systemCargoService.insertSysHistory", save);
					} catch(Exception e) {
						logger.error("HMM I/F HISTORY(TMDM_IF_SYS_HIST) INSERT ERROR =>>", e);
					}*/
					
					//화물맨 화물 상태 변경 요청
					paramJ.put("gv_userId"	, inParam.get("gv_userId"));
					paramJ.put("AP_RATE_AMT", inParam.get("AP_RATE_AMT"));
					resultDs = executeCargorReopen2(paramJ, resultDs);
				} else {
					int row = resultDs.newRow();
					resultDs.set(row, "CODE"	, resultJ.get("code"));
					resultDs.set(row, "MSG"		, resultJ.get("msg"));
					resultDs.set(row, "DATA"	, resultJ.get("data"));
					resultDs.set(row, "TOL_NO"	, inParam.get("ORDERCODE"));
				}
			} else {
				int row = resultDs.newRow();
				resultDs.set(row, "CODE"	, status);
				resultDs.set(row, "MSG"		, resultJ.get("error"));
				resultDs.set(row, "DATA"	, resultJ.get("path"));
				resultDs.set(row, "TOL_NO"	, inParam.get("ORDERCODE"));
			}
		} catch(Exception e) {
			logger.error("HttpClient Exception =>", e);
			int row = resultDs.newRow();
			resultDs.set(row, "CODE"	, -1);
			resultDs.set(row, "MSG"		, e.getCause().getMessage());
			resultDs.set(row, "DATA"	, "");
			resultDs.set(row, "TOL_NO"	, inParam.get("ORDERCODE"));
		}
		
		return resultDs;
	}
	
	/**
	 * 화물맨 화물 상태 변경 요청<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	SeungMin
	 * @since	2019.02.13
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public DataSet executeCargorReopen2(Map inParam, DataSet resultDs) throws Exception {
		logger.info("[HMM] SYSTEM I/F executeCargorReopen2 CALL");
		
		//1.화물맨으로 전송되는 데이타.
		JSONObject paramJ 		= new JSONObject();
		
		paramJ.put("COMCODE"		, PropertiesUtil.getString("hhm.comcode"));			//화물맨에서 제공하는 업체코드 (*필수)				
		paramJ.put("ORDERCODE"		, inParam.get("ORDERCODE"));          				//해당 업체에서 사용되는 화물고유 코드 (*필수)	
		paramJ.put("HASH"			, getHashCode());          							//20190114131056(시간: 14자리)+암호화(sha) (*필수)
		
		logger.info("화물맨 I/F Parameter [executeCargorReopen2] =>> " + paramJ.toJSONString());
		
		//2.화물맨 상태 변경 요청.
		String url = PropertiesUtil.getString("hhm.url") + "set_cargo_reopen";
		Map save = new HashMap();
		logger.info("[HMM] SYSTEM I/F CALL URL :: " + url);
				
		try {
			JSONObject response = HttpClientUtil.httpPost(paramJ, url);
			int status 			= (int) response.get("status");
			JSONObject resultJ 	= StringUtil.stringToJson((String)response.get("result"));
			
			logger.info("HMM I/F[executeCargoInsert] Result :: " + resultJ.toJSONString());
			
			if(status == 200) {
				if("200".equals(resultJ.get("code"))) {
					
					//주문정보(TTMS_OD_TOLEG_HD)에 I/F결과 업데이트
					save.put("TOL_NO"			, inParam.get("ORDERCODE"));
					save.put("OPEN_SYS_CD"		, "HMM");					//시스템구분 HMM(화물맨) Prefix
					save.put("OPEN_SYS_SCD"		, "state02");				//배차대기로 Prefix
					save.put("TOL_SCD"			, "010");	
					
					save.put("AP_AMT"			, inParam.get("PAY"));						//매입금액
					save.put("AP_RATE_AMT"		, inParam.get("AP_RATE_AMT"));				//매입요율금액
					save.put("AP_RATE_CLS_CD"	, "3");										//대당
					save.put("gv_userId"		, inParam.get("gv_userId"));	
					save.put("REMK"				, inParam.get("ETC"));	
					
					nexacroService.update("systemCargoService.updateOrderInfoIF", save); 
					
					// *TOLEG HIST UPDATE
					Map<String,Object> orderInfo = (Map<String, Object>) nexacroService.queryForObject(save, "systemCargoService.selectOrderInfo");
					nexacroService.updateMap(orderInfo, "commonService.insertTolegHdHist");
					
					save.put("LOACODE"	, inParam.get("LOACODE"));					
					save.put("DOWCODE"	, inParam.get("DOWCODE"));					
					save.put("CARTON"	, inParam.get("CARTON"));					
					save.put("CARTYPE"	, inParam.get("CARTYPE"));		
					save.put("PAYMENT"	, inParam.get("PAYMENT"));		
					save.put("SATYPE"	, inParam.get("SATYPE"));		
					save.put("LOADTYPE"	, inParam.get("LOADTYPE"));		
					
					//화물맨 화물등록 이력 저장.(TMDM_IF_SYS_HIST)
					try{
						nexacroService.insert("systemCargoService.insertSysHistory", save);
					} catch(Exception e) {
						logger.error("HMM I/F HISTORY(TMDM_IF_SYS_HIST) INSERT ERROR =>>", e);
					}
	
				} else {
					int row = resultDs.newRow();
					resultDs.set(row, "CODE"	, resultJ.get("code"));
					resultDs.set(row, "MSG"		, resultJ.get("msg"));
					resultDs.set(row, "DATA"	, resultJ.get("data"));
					resultDs.set(row, "TOL_NO"	, inParam.get("ORDERCODE"));
				}
			} else {
				int row = resultDs.newRow();
				resultDs.set(row, "CODE"	, status);
				resultDs.set(row, "MSG"		, resultJ.get("error"));
				resultDs.set(row, "DATA"	, resultJ.get("path"));
				resultDs.set(row, "TOL_NO"	, inParam.get("ORDERCODE"));
			}
		} catch(Exception e) {
			logger.error("HttpClient Exception =>", e);
			int row = resultDs.newRow();
			resultDs.set(row, "CODE"	, -1);
			resultDs.set(row, "MSG"		, e.getCause().getMessage());
			resultDs.set(row, "DATA"	, "");
			resultDs.set(row, "TOL_NO"	, inParam.get("ORDERCODE"));
		}
		
		return resultDs;
	}
}
