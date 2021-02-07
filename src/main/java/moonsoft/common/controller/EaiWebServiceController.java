package moonsoft.common.controller;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import moonsoft.common.service.IFEAI1_Service;
import moonsoft.common.service.IFEAI2_Service;
import moonsoft.common.service.IFEAI3_Service;
import moonsoft.common.util.NexacroAdaptor;
import moonsoft.common.vo.KilsWsEaiData;
import moonsoft.nexacro.service.login.impl.SsoLoginServiceImpl;

@Controller
public class EaiWebServiceController {
	private Logger logger = LoggerFactory.getLogger(EaiWebServiceController.class);
	
	@Autowired
	private NexacroAdaptor nexacroAdaptor; 
	
	@Autowired
	private SsoLoginServiceImpl ssoLoginService;
	
	@Autowired
	IFEAI1_Service ifeai1_Service;
	
	@Autowired
	IFEAI2_Service ifeai2_Service;
	
	@Autowired
	IFEAI3_Service ifeai3_Service;
	
	private static final String strLog = "EaiWebService :: ";
	
	/**
	 * EAI I/F
	 */
	@RequestMapping("/eaiWebService.do")
	public ModelAndView eaiWebService(HttpServletRequest request, HttpServletResponse response) throws Exception {

		// �꽆�뼱�삤�뒗 �뙆�씪誘명꽣 泥댄겕.
		String chkParam = getParamString(request);
		logger.info(strLog + "handleRequest >>> getParamString :: " + chkParam);

		String strInterfaceName = request.getParameter("INTERFACE_NAME");
		String strModuleName = request.getParameter("MODULE_NAME");
		String strInstanceId = request.getParameter("INSTANCE_ID");
		
		logger.info(strLog + "handleRequest >>> strInterfaceName :: " + strInterfaceName);
		logger.info(strLog + "handleRequest >>> strModuleName :: " + strModuleName);
		logger.info(strLog + "handleRequest >>> strInstanceId :: " + strInstanceId);
		
		// null
		boolean isNull = false;
		StringBuffer sb = new StringBuffer();
		if(strInterfaceName == null) {
			//sb.append(msgSvc.getMessage("INTERFACE_NAME is null")).append(strAdd);
			isNull = true;
		}
		if(strModuleName == null) {
			//sb.append(msgSvc.getMessage("MODULE_NAME is null")).append(strAdd);
			isNull = true;
		}
		if(strInstanceId == null) {
			//sb.append(msgSvc.getMessage("INSTANCE_ID is null")).append(strAdd);
			isNull = true;
		}

		//
		KilsWsEaiData paramData = new KilsWsEaiData();
		KilsWsEaiData retData = new KilsWsEaiData();

		if(isNull == true) {
			retData.setInterfaceName(strInterfaceName);
			retData.setModuleName(strModuleName);
			retData.setInstanceId(strInstanceId);
			retData.setStatus("F");
			retData.setMessage(sb.toString());
		} else {
			String eaiId = strModuleName;
			String localId = getLocalId(strModuleName); //
			logger.info(strLog + "handleRequest >>> eaiId=" + eaiId + " ===> localId=" + localId + " ===> strInstanceId=" + strInstanceId);

			paramData.setInterfaceName(strInterfaceName);
			paramData.setModuleName(localId);
			paramData.setInstanceId(strInstanceId);

			retData = doTransaction(paramData); //doTransaction()

			// eai
			retData.setModuleName(eaiId);
		}

		logRunTime(strLog + "End ===================== <<<< ");
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("/jsp/if_eai_result.jsp"); // 寃쎈줈�뒗 /jsp瑜� �젣�쇅�븳 寃쎈줈�엫. if_eai_result.jsp
		//mv.addObject( "result", retData);
		request.setAttribute("retData", retData);

		return mv;
	}
	
	/* (non-Javadoc)
	 * @see com.gscl.ws.util.KilsWsTransactionCtr#doTransaction(com.gscl.ws.util.KilsWsEaiData)
	 * WebService �샇異쒖쓣 諛쏆븘�꽌 泥섎━�븯怨� �쓳�떟�븯�뒗 硫붿룜�뱶.	 * 
	 */
	public KilsWsEaiData doTransaction(KilsWsEaiData paramData) {
		logger.info(strLog + "doTransaction ************** ");

		// �긽�깭媛� 珥덇린�솕
		paramData.setStatus("S");
		paramData.setMessage(""); //msgSvc.getMessage("Success"));
		paramData.setCode("OK");

		String strModuleName = paramData.getModuleName();
		logger.info("strModuleName = " + strModuleName);
		
		if("IF-CM-01-001".equals(strModuleName) || "IF-CM-01-003".equals(strModuleName)){
			paramData = ifeai1_Service.switchService(paramData);
		}else if("IF-CM-01-004".equals(strModuleName) || "IF-CM-01-005".equals(strModuleName) || "IF-CM-01-006".equals(strModuleName) || "IF-CM-01-018".equals(strModuleName)){
			paramData = ifeai2_Service.switchService(paramData);
		}else if("IF-CM-01-008".equals(strModuleName) || "IF-CM-01-009".equals(strModuleName) || "IF-CM-01-012".equals(strModuleName)){
			paramData = ifeai3_Service.switchService(paramData);
		}
		
		logger.info(strLog + "STATUS >>>" + paramData.getStatus());
		logger.info(strLog + "MSG >>>" + paramData.getMessage());
		logger.info(strLog + "code>>>" + paramData.getCode());

		logger.info(strLog + "doTransaction  end ************** ");
		return paramData;
	}
	
	/**
	 * 泥섎━�떆媛� 泥댄겕
	 * @param msg
	 */
	private void logRunTime(String msg) {
		Timestamp ts = new Timestamp(System.currentTimeMillis());
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd-HHmmss:SSS");
		logger.info("logRunTime" + msg + sdf.format(ts));
	}
	
	/**
	 * �궡�슜 : request �뿉�꽌 �꽆�뼱�삤�뒗 �뙆�씪誘명꽣瑜� 李띿뼱蹂몃떎. 
	 * @param request
	 * @throws Exception
	 */
	@SuppressWarnings("rawtypes")
	private String getParamString(HttpServletRequest request) {
		Enumeration enumeration = request.getParameterNames();
		StringBuffer sb = new StringBuffer();
		String key = "";
		while(enumeration.hasMoreElements()) {
			key = (String)enumeration.nextElement();
			sb.append(key).append("=").append(request.getParameter(key)).append("\n");
		}

		return sb.toString();
	}
	
	/**
	 * @param eaiId
	 * @return
	 * @throws Exception
	 */
	private String getLocalId(String eaiId) {
		String id = eaiId;
		
		if("MD_KFR_S_0010".equals(eaiId)){			//공통코드
			id = "IF-CM-01-001";
		}else if("MD_KFR_S_0013".equals(eaiId)){	//공통코드
			id = "IF-CM-01-003";
		}else if("MD_KFR_S_0014".equals(eaiId)){	//고객정보
			id = "IF-CM-01-004";
		}else if("MD_KFR_S_0015".equals(eaiId)){	//협력사정보
			id = "IF-CM-01-005";
		}else if("MD_KFR_S_0016".equals(eaiId)){	//거점정보
			id = "IF-CM-01-006";
		}else if("MD_CM_S_0017".equals(eaiId)){		//노드정보
			id = "IF-CM-01-018";
		}else if("MD_CM_S_0008".equals(eaiId)){		//사용자정보
			id = "IF-CM-01-008";
		}else if("MD_KFR_S_0019".equals(eaiId)){	//장비정보
			id = "IF-CM-01-009";
		}else if("MD_KFR_S_0020".equals(eaiId)){	//품목정보
			id = "IF-CM-01-012";
		}
		
		return id;
	}
}
