package moonsoft.common.listener;

import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * The class SessionListener<br>
 * <br>
 * 중복로그인 방지 등을 위한 Listener 이며 고객 요청이 없는 경우 사용하지 않는다.<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.06.28
 *
 */
public class SessionListener_20200527 implements HttpSessionListener {
	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private Logger logger = LoggerFactory.getLogger(this.getClass());

	/**
	 * HttpSessionListener 클래스의 Override method이다.<br>
	 * session이 생성되는 시점에 이벤트가 발생된다.<br>
	 * <br>
	 * <br>
	 * @param	se		override
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public void sessionCreated(HttpSessionEvent se) {
		// TODO Auto-generated method stub
		logger.info("SessionListener.sessionCreated ::: " + se.getSession().getId());
	}

	/**
	 * HttpSessionListener 클래스의 Override method이다.<br>
	 * session이 제거되는 시점에 이벤트가 발생된다.<br>
	 * <br>
	 * <br>
	 * @param	se		override
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	@Override
	public void sessionDestroyed(HttpSessionEvent se) {
		// TODO Auto-generated method stub
		logger.info("SessionListener.sessionDestroyed ::: " + se.getSession().isNew());
	}

}
