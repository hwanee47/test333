package moonsoft.common.interceptor;

import static moonsoft.common.util.StringUtil.stackTraceToString;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import moonsoft.common.NexacroConstant;
import moonsoft.common.listener.SessionListener;
import moonsoft.common.util.NexacroAdaptor;
import moonsoft.common.util.PropertiesUtil;
import moonsoft.common.util.SessionConstants;

/**
 * The class SessionInterceptor<br>
 * <br>
 * session interceptor를 하는 객체<br>
 * 세션 유무를 확인하며 특정 서비스 호출시 검증 제외를 한다.<br>
 * 세션 만료시 RedirectURL을 통한 세션만료정보를 nexacro에 전달한다.
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.06.28
 *
 */
public class SessionInterceptor extends HandlerInterceptorAdapter {

	/**
	 * 객체정보<br>
	 * request , response
	 * <br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Autowired
	private NexacroAdaptor nexacroAdaptor; 
	
	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	/**
	 * controller로 service 실행전 진행하는 HandlerInterceptorAdapter 클래스의 preHandle<br>
	 * 세션 유무를 확인하며 특정 서비스 호출시 검증 제외를 한다.<br>
	 * 세션 만료시 RedirectURL을 통한 세션만료정보를 nexacro에 전달한다.
	 * <br>
	 * <br>
	 * @param	request		override
	 * @param	response	override
	 * @param	handler		override
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@SuppressWarnings("unchecked")
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
		boolean bRet = true;	// return

		// 세션체크를 진행하지 않는 대상 
		final List<String> negativeList = Arrays.asList("/ssoLogin.do","/ssoLogin.fo","/logout.do","/loginInOut.do","mobileHttpController.do","XExportImport.do","vis/goVisibilityView.do","vis/getVisibilityInfo.do"
														,"/pageEntVhclCntr.do","/getVhclList.do","/getVhclInfo.do","/getVhclRoute.do","/pageCustVhclCntr.do","/pagePtnrVhclCntr.do","/getCaptChaStr.do","/eaiWebService.do"
														,"/webservice","/advancedDownloadFile.do","/advancedUploadFiles.do","/system/interface.do","/system/partnerSso.do","/mainChart.do");
		// 로그아웃시 리디렉션 순환오류 제어를 위한 선처리 및 세션제외대상
		final String requestUrl = request.getRequestURL().toString();
		
		//logger.debug("requestUrl ========== >   " + requestUrl);
		
		//로컬인 경우 세션 체크 안함.
		try {
			String mode = PropertiesUtil.getString("mode");
			
			if(mode.equals("LOCAL") || mode.equals("WKR")) return true;
			
		} catch (Exception e) {
			logger.error("Session Check error => " , e);
		}
		
		// negativeList를 기준으로 url을 체크. enum으로 변경할..??? 향후 고려..
		final boolean  negative	= negativeList
								 .stream()
								 .filter( url -> requestUrl.contains(url))
								 .findFirst()
								 .isPresent()
								 ;
		
		// 제외대상인경우 skip한다. logout.do는 리디렉션 순환오류 주요대상이므로 필수로 제외대상으로 포함한다.
		if( negative ) return true;
		
		try {
			// 암호화된 세션정보
			HttpSession sess = request.getSession();
			
			if(sess == null) {
				bRet = false;
			} else {
				String sessionKey = "";
				
				if(requestUrl.contains(SessionConstants.KFR_KEY_CONTROLLER)) {
					sessionKey = SessionConstants.KFR_SESSIONKEY;
				} else {
					sessionKey = SessionConstants.KFR_WEB_SESSIONKEY;
				}
				
				Map<String, Object> sessInfo = (Map<String, Object>) sess.getAttribute(sessionKey);
				
				// 세션이 없는경우
				if(sessInfo == null || sessInfo.size() == 0) {
					//sess.invalidate();
					bRet = false;
				}
				else{
				
					// 2020.05.27 세션 체크 추가 (중복로그인 방지)
					String userId = (String) sessInfo.get("USER_ID");
					String sessionId = (String) sessInfo.get("USER_SESSION_ID");
					
					if(!SessionListener.getInstance().checkSessionId(userId, sessionId)){
						bRet = false;
					}
				}
			}
			
			if(!bRet) sendRedirectURL(request, response);
			
		} catch (Exception exception) {
			bRet = false;
    		logger.error(stackTraceToString(exception));
			sendRedirectURL(request, response);
		}
		return bRet;
	}
	
	/**
	 * session 정보가 없거나 비정상적인 접근을 한 경우 logout 처리한다.<br>
	 * <br>
	 * <br>
	 * @param	request		HttpServletRequest
	 * @param	response	HttpServletResponse
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private void sendRedirectURL( HttpServletRequest request, HttpServletResponse response ) {
		try{
			final String sContextPath = request.getContextPath();
			response.sendRedirect(sContextPath + "/logout.do");
		} catch( IOException ioException ) {
    		logger.error(stackTraceToString(ioException));
		}
	}
}
