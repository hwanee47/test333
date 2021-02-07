package moonsoft.common.exception;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.multipart.MaxUploadSizeExceededException;
import moonsoft.common.NexacroConstant;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

@ControllerAdvice 
public class CommonExceptionAdvice {
	
	private  Log log = LogFactory.getLog(CommonExceptionAdvice.class);
	
	/* common메소드는  Exception 타입으로 처리하는 모든 예외를 처리하도록 설정 */
	@ExceptionHandler(MaxUploadSizeExceededException.class)
	public NexacroResult common(Exception e) {
		NexacroResult rtn = new NexacroResult();
		
		log.info("MaxUploadSizeExceededException Exception Handler =>", e);
		rtn.setErrorCode(NexacroConstant.ERROR_FILEUPLOAD_MAX_LIMIT);
		rtn.setErrorMsg("File Size Check Please!");
		return rtn;
	}
}
