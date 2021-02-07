package moonsoft.visibility.controller;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import moonsoft.visibility.service.EntVhclCntrService;

@Controller
public class EntVhclCntrController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private EntVhclCntrService entVhclCntrService;
	
	@RequestMapping("/pageEntVhclCntr.do")
	public ModelAndView pageEntVhclCntr(HttpServletRequest req, HttpServletResponse res) {
		if (logger.isDebugEnabled()) {
			logger.debug("==============   pageEntVhclCntr.do Start   ==============");
		}
		
		ModelAndView view = new ModelAndView("/web/jsp/entVhclCntr/entVhclCntr.jsp");
		Date date = new Date();
		SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdfHour = new SimpleDateFormat("yyyyMMddHH");
		String dateString = sdfDate.format(date);
		String hourString = sdfHour.format(date);
		
		String ipString = this.getClientIP(req);

		view.addObject("DATE_STRING", dateString);
		view.addObject("HOUR_STRING", hourString);
		view.addObject("IP_STRING", ipString);
		
		if (logger.isDebugEnabled()) {
			logger.debug("==============   pageEntVhclCntr.do End   ==============");
		}
		return view;
	}
	
	@RequestMapping("/getVhclList.do")
	@ResponseBody
	public Map<String, Object> getVhclList(@RequestBody Map<String, Object> param) throws Exception {
		return entVhclCntrService.getVhclList(param);
	}
	
	@RequestMapping("/getVhclInfo.do")
	@ResponseBody
	public Map<String, Object> getVhclInfo(@RequestBody Map<String, Object> param) throws Exception {
		return entVhclCntrService.getVhclInfo(param);
	}
	
	@RequestMapping("/getVhclRoute.do")
	@ResponseBody
	public Map<String, Object> getVhclRoute(@RequestBody Map<String, Object> param) throws Exception {
		return entVhclCntrService.getVhclRoute(param);
	}
	
	@RequestMapping("/getSagoImgList.do")
	@ResponseBody
	public Map<String, Object> getSagoImgList(@RequestBody Map<String, Object> param) throws Exception {
		return entVhclCntrService.getSagoImgList(param);
	}
	
	@RequestMapping("/pageCustVhclCntr.do")
	public ModelAndView pageCustVhclCntr(HttpServletRequest req, HttpServletResponse res) {
		if (logger.isDebugEnabled()) {
			logger.debug("==============   pageCustVhclCntr.do Start   ==============");
		}
		
		ModelAndView view = new ModelAndView("/web/jsp/entVhclCntr/custVhclCntr.jsp");
		Date date = new Date();
		SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdfHour = new SimpleDateFormat("yyyyMMddHH");
		String dateString = sdfDate.format(date);
		String hourString = sdfHour.format(date);

		view.addObject("DATE_STRING", dateString);
		view.addObject("HOUR_STRING", hourString);
		
		if (logger.isDebugEnabled()) {
			logger.debug("==============   pageCustVhclCntr.do End   ==============");
		}
		return view;
	}
	
	@RequestMapping("/pagePtnrVhclCntr.do")
	public ModelAndView pagePtnrVhclCntr(HttpServletRequest req, HttpServletResponse res) {
		if (logger.isDebugEnabled()) {
			logger.debug("==============   pagePtnrVhclCntr.do Start   ==============");
		}
		
		ModelAndView view = new ModelAndView("/web/jsp/entVhclCntr/ptnrVhclCntr.jsp");
		Date date = new Date();
		SimpleDateFormat sdfDate = new SimpleDateFormat("yyyy-MM-dd");
		SimpleDateFormat sdfHour = new SimpleDateFormat("yyyyMMddHH");
		String dateString = sdfDate.format(date);
		String hourString = sdfHour.format(date);

		view.addObject("DATE_STRING", dateString);
		view.addObject("HOUR_STRING", hourString);
		
		if (logger.isDebugEnabled()) {
			logger.debug("==============   pagePtnrVhclCntr.do End   ==============");
		}
		return view;
	}
	
	private String getClientIP(HttpServletRequest req) {
		String ip = req.getHeader("X-FORWARDED-FOR"); 
	    
	    if (ip == null || ip.length() == 0) {
	        ip = req.getHeader("Proxy-Client-IP");
	    }
	
	    if (ip == null || ip.length() == 0) {
	        ip = req.getRemoteAddr() ;
	    }
	    
	    return ip;
	}
	
	@RequestMapping("/pageOriDestCntr.do")
	public ModelAndView pageOriDestCntr(HttpServletRequest req, HttpServletResponse res) 
	{	
		if(logger.isDebugEnabled()) {
			logger.debug("==============   pageOriDestCntr.do Start   ==============");
		}
		
		ModelAndView view = new ModelAndView("/web/jsp/oriDest/page.jsp");
		
		if (logger.isDebugEnabled()) {
			logger.debug("==============   pageOriDestCntr.do End   ==============");
		}
		return view;
	}
	
}
