package moonsoft.nexacro.controller.map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MapController {
	
	/**
	 * 
	 * 구글맵 지도 호출.<br>
	 * <br>
	 * @param req
	 * @param res
	 * @param inParams
	 * @return
	 * @throws Exception
	 * @author SSM
	 * @since 2018. 6. 9.
	 */
	@RequestMapping("/googleMap.do")
	public ModelAndView order(HttpServletRequest req, HttpServletResponse res) {
		ModelAndView view = new ModelAndView("map/googleMap");
		return view;
	}
}
