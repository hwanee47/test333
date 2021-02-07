package moonsoft.mble.controller;

import java.io.PrintWriter;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.google.gson.JsonObject;

import moonsoft.mble.service.MobileService;

/**
 * 모바일앱 공통 컨트롤러
 * 2020.02.11
 * @author JSJ 
 * 
 */
@Controller
public class MobileController {
	private Logger logger = LoggerFactory.getLogger(MobileController.class);
	private final static int RESULT_FAIL = -1;
	private final static int RESULT_SCS = 0;
	
	@Autowired
	MobileService mobileService;
	
	/**
	 * 
	 * 앱 다운로드 페이지<br>
	 * <br>
	 * @param req
	 * @param res
	 * @return
	 * @throws Exception
	 * @author JinSeonJu
	 * @since 2019. 05. 21.
	 */
	@RequestMapping("/appDown.do")
	private ModelAndView mainBoard(HttpServletRequest req, HttpServletResponse res) throws Exception{
		ModelAndView	view	= null;
		String			svcUrl  = "/WEB-INF/jsp/mble/appDown.jsp";
		view	= new ModelAndView(svcUrl);
		return view;
	}

	
	/**
	 * 모바일 앱 로그인
	 */
	@RequestMapping("/mobLogin.do")
	public void mobileLogin(HttpServletRequest request , HttpServletResponse response, @RequestBody HashMap<String, String> map)throws Exception {
		response.setCharacterEncoding("UTF-8"); 
		response.setContentType("text/html; charset=UTF-8");
		
		
		PrintWriter out = response.getWriter();
		//결과 json 객체
		JsonObject resultJson = new JsonObject();
		
		//init
		resultJson.addProperty("resultCode", RESULT_FAIL);
		resultJson.addProperty("resultMsg","로그인정보가 없습니다.");
		
		
		try {
			String result = mobileService.getUserInfo(map);
			if(result == null || result.length() == 0) {
				resultJson.addProperty("resultCode", RESULT_FAIL);
				resultJson.addProperty("resultMsg", "로그인정보가 없습니다.");
			}else {
				resultJson.addProperty("resultCode", RESULT_SCS);
				resultJson.addProperty("resultMsg","SUCCESS");
				resultJson.addProperty("resultJson", result);
			}
			
		}catch (Exception e) {
			resultJson.addProperty("resultCode", RESULT_FAIL);
			resultJson.addProperty("resultMsg", "로그인정보가 없습니다.");
		}
		
		out.print(resultJson.toString());
		out.flush();
		out.close();
	}
	
	/**
	 * 모바일 앱 작업지시 조회
	 * parameter: BRANCD, EMPNUM
	 */
	@RequestMapping("/mobGetWorkOrderList.do")
	public void mobileWorkOrderList(HttpServletRequest request, HttpServletResponse response, @RequestBody HashMap<String, String> map) throws Exception{
		
		response.setCharacterEncoding("UTF-8"); 
		response.setContentType("text/html; charset=UTF-8");
		
		PrintWriter out = response.getWriter();
		//결과 json 객체
		JsonObject resultJson = new JsonObject();
		
		//init
		resultJson.addProperty("resultCode", RESULT_FAIL);
		resultJson.addProperty("resultMsg","작업지시 조회결과가 없습니다.");
		
		
		try {
			String result = mobileService.selectWorkOrdList(map);
			if(result == null || result.length() == 0) {
				resultJson.addProperty("resultCode", RESULT_FAIL);
				resultJson.addProperty("resultMsg", "조회결과를 받아오지 못하였습니다.");
				resultJson.addProperty("resultJson", result);
			}else {
				resultJson.addProperty("resultCode", RESULT_SCS);
				resultJson.addProperty("resultMsg","SUCCESS");
				resultJson.addProperty("resultJson", result);
			}
		}catch (Exception e) {
			resultJson.addProperty("resultCode", RESULT_FAIL);
			resultJson.addProperty("resultMsg", "조회결과를 받아오지 못하였습니다.");
		}
		
		out.print(resultJson.toString());
		out.flush();
		out.close();
	}
	
	/**
	 * 모바일 기초코드 조회
	 * param: BRANCD
	 */
	@RequestMapping("/mobGetCodeList.do")
	public void mobileCodeList(HttpServletRequest request, HttpServletResponse response, @RequestBody HashMap<String, String> map) throws Exception{
		
		response.setCharacterEncoding("UTF-8"); 
		response.setContentType("text/html; charset=UTF-8");
		
		PrintWriter out = response.getWriter();
		//결과 json 객체
		JsonObject resultJson = new JsonObject();
		
		//init
		resultJson.addProperty("resultCode", RESULT_FAIL);
		resultJson.addProperty("resultMsg","기초코드 조회결과가 없습니다.");
		
		try {
			String result = mobileService.selectCodeList();
			if(result == null || result.length() == 0) {
				//init
				resultJson.addProperty("resultCode", RESULT_FAIL);
				resultJson.addProperty("resultMsg","기초코드 조회결과가 없습니다.");
			}else {
				//init
				resultJson.addProperty("resultCode", RESULT_SCS);
				resultJson.addProperty("resultMsg","SUCCESS");
			}
			resultJson.addProperty("resultJson", result);
			
		}catch (Exception e) {
			logger.error("mobGetCodeList EXCEPTION: "+e.toString());
			resultJson.addProperty("resultCode", RESULT_FAIL);
			resultJson.addProperty("resultMsg", "기초코드 조회결과를 받아오지 못하였습니다.");
			logger.error(e.getMessage());
		}
		out.print(resultJson.toString());
		out.flush();
		out.close();
	}
	
	/**
	 * 배송 업무 전송
	 * @param map 스캔정보
	 * @throws Exception
	 */
	@RequestMapping("/mobInsertScanDealtList.do")
	public void mobInsertScanDealtList(HttpServletRequest request, HttpServletResponse response, @RequestBody List<HashMap<String, Object>> list) throws Exception{
		
		response.setCharacterEncoding("UTF-8"); 
		response.setContentType("text/html; charset=UTF-8");
		
		PrintWriter out = response.getWriter();
		
		//결과 json 객체
		JsonObject resultJson = new JsonObject();
		
		//init
		resultJson.addProperty("resultCode", RESULT_FAIL);
		resultJson.addProperty("resultMsg","insert fail");
		
		try {
			String result = mobileService.insertScanDelatList(list);
			resultJson.addProperty("resultCode", RESULT_SCS);
			resultJson.addProperty("resultMsg","SUCCESS");
			resultJson.addProperty("resultJson", result);
		}catch (Exception e) {
			logger.error("mobGetCodeList EXCEPTION: "+e.toString());
			resultJson.addProperty("resultCode", RESULT_FAIL);
			resultJson.addProperty("resultMsg", "insert fail," + e.toString());
			logger.error(e.getMessage());
		}
		out.print(resultJson.toString());
		out.flush();
		out.close();
	}
	
	/**
	 * 모바일 앱 화물추적조회
	 * parameter: BRANCD, EMPNUM
	 */
	@RequestMapping("/mobileGetCrgStInfo.do")
	public void mobileGetCrgStInfo(HttpServletRequest request, HttpServletResponse response, @RequestBody HashMap<String, String> map) throws Exception{
		
		response.setCharacterEncoding("UTF-8"); 
		response.setContentType("text/html; charset=UTF-8");
		
		PrintWriter out = response.getWriter();
		
		//결과 json 객체
		JsonObject resultJson = new JsonObject();
		
		//init
		resultJson.addProperty("resultCode", RESULT_FAIL);
		resultJson.addProperty("resultMsg","화물 추적정보가 없습니다.");
		
		try {
			String result = mobileService.selectCrsStInfo(map);
			if(result == null || result.length() == 0) {
				//init
				resultJson.addProperty("resultCode", RESULT_FAIL);
				resultJson.addProperty("resultMsg","화물 추적정보가 없습니다.");
			}else {
				//init
				resultJson.addProperty("resultCode", RESULT_SCS);
				resultJson.addProperty("resultMsg","SUCCESS");
			}
			resultJson.addProperty("resultJson", result);
			
		}catch (Exception e) {
			logger.error("mobGetCodeList EXCEPTION: "+e.toString());
			resultJson.addProperty("resultCode", RESULT_FAIL);
			resultJson.addProperty("resultMsg", "화물 추적정보를 받아오지 못하였습니다.");
			logger.error(e.getMessage());
		}
		out.print(resultJson.toString());
		out.flush();
		out.close();
		
	}
	
}
