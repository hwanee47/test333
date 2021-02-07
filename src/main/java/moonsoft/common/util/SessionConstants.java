package moonsoft.common.util;

/**
 * The class SessionConstants<br>
 * <br>
 * session interceptor를 하는 객체<br>
 * 세션 생성시 필요한 상수를 정의한 클래스이다.<br>
 * <br>
 * <br>
 * <br>
 * <br>
 * @author	OhInTaek
 * @version	1.0
 * @since	2018.06.28
 *
 */
public class SessionConstants {

	/**
	 * session 객체에 로그인시 사용자 정보를 기록하기위한 key 구분자<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public static final String SESSION_CONSTANT			= "cj";
	
	/**
	 * SESSION_CONSTANT 에 Map 객체로 사용자 정보를 기록할 때 사용되는 사용자 아이디 구분자<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public static final String SESSION_KEY_USER_ID		= "hello.userId";
	
	/**
	 * SESSION_CONSTANT 에 Map 객체로 사용자 정보를 기록할 때 사용되는 사용자 이름 구분자<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public static final String SESSION_KEY_USER_NAME	= "hello.userName";
	
	/**
	 * SESSION_CONSTANT 에 Map 객체로 사용자 정보를 기록할 때 사용되는 사용자 이메일 구분자<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public static final String SESSION_KEY_USER_EMAIL	= "hello.email";

	/**
	 * session 객체에 사용자 정보를 기록시 암호화/복호화를 위한 key 구분자<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	public static final String SESSION_AES256_KEY		= "aes256-hello-cj-pjt";
	
	/**
	 * session 객체에 로그인 정보가 등록된 key 구분자(외부 시스템)<br>
	 * <br>
	 * @author	Seungmin
	 * @since	2018.09.28
	 */
	public static final String KFR_WEB_SESSIONKEY			= "__userInfo__";	
	
	/**
	 * session 객체에 사용자 정보가 등록된 key 구분자<br>
	 * <br>
	 * @author	Seungmin
	 * @since	2018.09.28
	 */
	public static final String SESSION_KEY_USERINFO			= "userInfo";	
	
	/**
	 * session 객체에 로그인 정보가 등록된 key 구분자(업무 시스템)<br>
	 * <br>
	 * @author	Seungmin
	 * @since	2018.09.28
	 */
	public static final String KFR_SESSIONKEY				= "USERINFO";	
	
	
	public static final String KFR_KEY_CONTROLLER			= "nexacroController.do";	
	public static final String KFR_KEY_WEB_CONTROLLER		= "nexacroWebController.do";	
}
