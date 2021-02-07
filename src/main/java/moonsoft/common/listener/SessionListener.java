package moonsoft.common.listener;

import java.util.Collection;
import java.util.Enumeration;
import java.util.Hashtable;

import javax.servlet.http.HttpSession;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionBindingListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * The class SessionListener<br>
 * <br>
 * 중복로그인 방지 등을 위한 Listener.<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	Kim Jin Hwan
 * @version	1.0
 * @since	2020.05.27
 *
 */
public class SessionListener implements HttpSessionBindingListener {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	 // 싱글톤 객체를 담을 변수
    private static SessionListener sessionListener = null;
    
    // 로그인한 접속자를 저장한 해시테이블 (데이터를 해시하여 테이블 내의 주소를 계산하고 데이터를 담는 것 , 해시함수 알고리즘은 나눗셈 법. 자릿수 접기 등등)
    private static Hashtable loginUsers = new Hashtable();
    
    // 싱글톤 처리
    public static synchronized SessionListener getInstance()
    {
        if(sessionListener == null) {
            sessionListener = new SessionListener();
        }
        return sessionListener;
    }



    // 세션이 연결시 자동호출 (해시테이블 {접속자,세션} 저장)
    @Override
    public void valueBound(HttpSessionBindingEvent event)
    {
    	loginUsers.put(event.getName(), event.getSession());
    }

    // 세션이 끊겼을시 자동호출 (해시테이블 {접속자,세션} 삭제)
    @Override
    public void valueUnbound(HttpSessionBindingEvent event)
    {
    	System.out.println("세션삭제!!!!");
        loginUsers.remove(event.getName(), event.getSession());
    }


	/*
	* 로그인을 완료한 사용자의 아이디를 세션에 저장한다
	*/
	public void setSession(String userId, HttpSession session)
	{
	   session.setAttribute(userId, this);//login에 자기자신을 집어넣는다.
	}
	
	
	/*
	 * 입력받은 사용자ID로 세션을 리턴한다.
	 * @param String : 접속자 사용자 아이디
	 * @return String : 세션
	*/
	public Object getSessionByUserId(String userId)
	{
		HttpSession session = null;
		
		session = (HttpSession)loginUsers.get(userId);
		
		return session;
	}
	
	
	/*
	 * 입력받은 세션Object로 아이디를 리턴한다.
	 * @param session : 접속한 사용자의 session Object
	 * @return String : 접속자 사용자 아이디
	*/
	public String getUserID(HttpSession session)
	{
	   return (String)loginUsers.get(session);
	}
	
	
	/*
	 * 입력받은 계정과 세션으로 해시테이블에 존재하는지 체크한다. (중복 로그인 방지)
	 * @param session : 접속한 사용자의 session Object
	 * @return Boolean : 세션이 없는경우 false , 있는경우 true
	*/
	public boolean checkSessionId(String userId, String sessionId)
	{
		if(loginUsers == null || sessionId == null || loginUsers.get(userId) == null){
			return true;
		}
		
		HttpSession session= (HttpSession)loginUsers.get(userId);
		//System.out.println("서버 세션 ::"+session.getId());
		//System.out.println("클라이언트 세션 ::"+sessionId);
		if(session.getId().equals(sessionId)){
			return true;
		}else{
			return false;
		}
		
	}
	
	
	public void deleteSessionById(String userId)
	{
		loginUsers.remove(userId);
	}
	

}
