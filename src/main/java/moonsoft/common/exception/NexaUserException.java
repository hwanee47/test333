/**************************************************************************************
 * 1.프로그램명  	: NexaUserException
 * 2.파일명		: NexaUserException.java
 * 3.개발자		: SSM
 * 4.개발일자		: 2018.05.24 
 * 5.버젼		: 0.1
 * 6.설명		: NexaUserException 발생시 공통 처리 부분
 * 7.이력		
 * 8.추가사항		: 화면에서 메시지 출력시 메시지 처리 부분 추가 
*************************************************************************************/
package moonsoft.common.exception;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import moonsoft.common.util.MessageUtil;

public class NexaUserException extends RuntimeException {
	
	private static final long serialVersionUID = -1121094779090553561L;
	
	protected static final Log log = LogFactory.getLog(NexaUserException.class);
	private String errorCode;
	private String errorMessage;
	
	public NexaUserException() {
		super();		
	}

	public NexaUserException(String message, Throwable cause) {
		super(message, cause);
		this.errorCode = message;
		this.errorMessage = message;
	}

	public NexaUserException(String message) {
		super(message);
		this.errorCode = message;
		this.errorMessage = message;
	}
	
	public NexaUserException(String message, String[] args) {
		super(message);
		this.errorCode = message;
		this.errorMessage = MessageUtil.getMessage(message, args);
	}

	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	public String getErrorMessage() {
		return errorMessage;
	}

	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}

	public NexaUserException(Throwable cause) {
		super(cause);
	}
}