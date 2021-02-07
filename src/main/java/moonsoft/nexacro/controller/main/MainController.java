package moonsoft.nexacro.controller.main;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import moonsoft.nexacro.service.main.MainService;

@Controller
public class MainController {
	private Logger logger = LoggerFactory.getLogger(MainController.class);
	
	@Autowired
	MainService mobileService;
	
	
	/**
	 * 
	 * 지도차트 화면 <br>
	 * <br>
	 * @param req
	 * @param res
	 * @return
	 * @throws Exception
	 * @author JinSeonJu
	 * @since 2019. 03. 17.
	 */
	@RequestMapping("/mainChart.do")
	private ModelAndView mainBoard(HttpServletRequest req, HttpServletResponse res) throws Exception{
		ModelAndView	view	= null;
		String			svcUrl  = "/WEB-INF/jsp/main/mainChart.jsp";
		view	= new ModelAndView(svcUrl);
		return view;
	}
	
	/**
	 * 
	 * 메인화면 지역별 현황조회 <br>
	 * <br>
	 * @param req
	 * @param res
	 * @return
	 * @throws Exception
	 * @author JinSeonJu
	 * @since 2019. 03. 17.
	 */
	
	@RequestMapping(value="/getResionStatusInfo.do", method = RequestMethod.POST)
	@ResponseBody
	public Map<String,Object> getResionStatusInfo(HttpServletRequest req,Model model,@RequestBody Map<String, Object> param) throws Exception{
		return mobileService.getResionStatusInfo(param);
	}
}
