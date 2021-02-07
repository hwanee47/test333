package moonsoft.common.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import moonsoft.common.util.PropertiesUtil;
import moonsoft.common.util.StringUtil;
import com.nexacro.uiadapter17.spring.core.NexacroException;
import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroFileResult;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;
import com.nexacro.uiadapter17.spring.core.util.CharsetUtil;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.datatype.PlatformDataType;
import com.nexacro17.xapi.tx.DataDeserializer;
import com.nexacro17.xapi.tx.DataSerializerFactory;
import com.nexacro17.xapi.tx.PlatformException;
import com.nexacro17.xapi.tx.PlatformType;

/**
 * @author  Seungmin
 * @since   2018. 06. 7.
 * @version 1.0
 * @see
 */
@Controller
public class UiAdapterFileController {
	private Logger logger = LoggerFactory.getLogger(UiAdapterFileController.class);
	
	private static final String SP 		= File.separator;
	private static final String PREFIX 	= "RECEIPT";
	
	@Autowired
    private WebApplicationContext appContext;

	/**
	 * 
	 * <pre>
	 * @desc 업로드 파일
	 * @param  
	 * @return NexacroResult
	 * @throws 
	 * </pre>
	 */
    @RequestMapping(value = "/advancedUploadFiles.do" )
    public NexacroResult uploadFiles(HttpServletRequest request, HttpServletResponse response) throws Exception {
        
        if(!(request instanceof MultipartHttpServletRequest)) {
            if(logger.isDebugEnabled()) {
            	logger.debug("Request is not a MultipartHttpServletRequest");
            }
            return new NexacroResult();
        }
        
        logger.debug("-------------------- nexacro platform uploadFiles ---------------------------");
        DataSet resultDs = createDataSet4UploadResult();
        
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

        //uploadParameters(multipartRequest);
        uploadMultipartFiles(multipartRequest, resultDs);
        
        NexacroResult nexacroResult = new NexacroResult();
        nexacroResult.addDataSet(resultDs);

        return nexacroResult;
    }

    /**
     * 
     * <pre>
     * @desc 다운로드 파일
     * @param  
     * @return NexacroFileResult
     * @throws NexacroException 
     * @throws UnsupportedEncodingException 
     * @throws 
     * </pre>
     */
    @RequestMapping(value = "/advancedDownloadFile.do")
    public NexacroFileResult downloadFile(HttpServletRequest request) throws NexacroException, UnsupportedEncodingException {
        
    	logger.debug("-------------------- nexacro platform downloadFile ---------------------------");
        String characterEncoding = request.getCharacterEncoding();
        if(characterEncoding == null) {
            characterEncoding = PlatformType.DEFAULT_CHAR_SET;
        }
        String charsetOfRequest = CharsetUtil.getCharsetOfRequest(request, characterEncoding);
        String queryString      = request.getQueryString();
        Map<String, String> queryMap = getQueryMap(queryString, charsetOfRequest);
        
        
        String fileName 		= queryMap.get("file");
        String orgFileName 		= queryMap.get("orgFile");
        String filePath			= queryMap.get("dir");
        if(fileName == null) {
            throw new NexacroException("No input fileName specified.");
        }
        
        // was의 uri encoding을 사용안함. (서버의 설정을 변경하여야 함. URIEncoding="UTF-8")
        // already decode..
        // tomcat의 기본 uriencoding 형식 + web.xml의 charsetfilter utf8 (runtime version 은  uriencoding 되지  않고 있음)
        fileName = URLDecoder.decode(fileName, charsetOfRequest);
        fileName = removedPathTraversal(fileName);
        
        orgFileName = URLDecoder.decode(orgFileName, charsetOfRequest);
        orgFileName = removedPathTraversal(orgFileName);
   
        //String filePath     	= getFilePath();
        //String realFileName 	= filePath + SP + fileName;
        String realFileName 	= filePath + fileName;

        logger.info("advancedDownloadFile.do (file path) :::" + filePath);
        logger.info("advancedDownloadFile.do (file name) :::" + fileName);
        
        File file = new File(realFileName);
        
        NexacroFileResult result = new NexacroFileResult(file);
        result.setOriginalName(orgFileName);

        
        return result;
    }
    
    /**
     * <pre>
     * @desc 삭제 파일 
     * @param  
     * @return NexacroResult
     * @throws NexacroException 
     * @throws 
     * </pre>
     */
    @RequestMapping(value = "/advancedDeleteFiles.do")
    public NexacroResult deleteFiles(@ParamDataSet(name="input") DataSet dsInput) throws NexacroException {
    	logger.debug("-------------------- nexacro platform deleteFiles ---------------------------");
    	
        if(dsInput == null) {
            throw new NexacroException("No input DataSet('input') specified.");
        }
        
        NexacroResult result = new NexacroResult(); 
        String errorMessage = "";
        int errorCd	= 0;
        int rowCount = dsInput.getRowCount();
        
       
        logger.debug("    rowCount :" + rowCount);
        
        for (int i = 0; i < rowCount; i++) {
        	String filePath     = dsInput.getString(i, "FILE_PATH");
            String fileRealNm 	= dsInput.getString(i, "FILE_NAME");
            String fileOrgNm	= dsInput.getString(i, "ORG_FILE_NAME");
            if(fileRealNm == null || fileRealNm.length() == 0) {
                continue;
            }
            
            String fileName = removedPathTraversal(fileRealNm);
            logger.debug("    filePath 		:" + filePath);
            logger.debug("    fileName 		:" + fileName);
            logger.debug("    orgfileName 	:" + fileOrgNm);
            
            if (errorMessage.length() > 0) {
                errorMessage += "\r\n";
            }

            try {
                //File f = new File(filePath + File.separator, fileName);
            	File f = new File(filePath, fileName);
                if (f.exists()) {
                    if (f.delete()) {
                    	errorCd = 0;
                        errorMessage += "'" + fileOrgNm + "' Delete Success";
                    } else {
                    	errorCd = -1;
                        errorMessage += "'" + fileOrgNm + "' Delete failed";
                    }
                } else {
                	errorCd = -1;
                    errorMessage += "'" + fileOrgNm + "' File not available";
                }
            } catch (Exception e) {
                errorMessage += "'" + fileOrgNm + "' " + e;
                NexacroException nexacroException = new NexacroException();
                nexacroException.setErrorCode(-1);
                nexacroException.setErrorMsg(errorMessage);
            }
            
            logger.debug("    errorMessage :" + errorMessage);
        }
        
        result.addVariable("ErrorCode", errorCd);
        result.addVariable("ErrorMsg" , errorMessage);
        
        return result;
    }
    
    
    @SuppressWarnings("unused")
	private void uploadParameters(MultipartHttpServletRequest multipartRequest) throws NexacroException {
        // parameter and multipart parameter
        Enumeration<String> parameterNames = multipartRequest.getParameterNames();

        while(parameterNames.hasMoreElements()) {
            
            String parameterName = parameterNames.nextElement();
            if(parameterName == null || parameterName.length() == 0) {
                continue;
            }
            
            String value = multipartRequest.getParameter(parameterName);
            
            if("inputDatasets".equals(parameterName)) {
                
                PlatformData platformData = new PlatformData();
                StringReader reader = new StringReader(value);
                DataDeserializer deserializer = DataSerializerFactory.getDeserializer(PlatformType.CONTENT_TYPE_SSV);
                try {
                    platformData = deserializer.readData(reader, null, PlatformType.DEFAULT_CHAR_SET);
                } catch (PlatformException e) {
                    //logger.error("xml data not deserialize. data=" + value);
                	logger.error("xml data not deserialize. data=" + e);
                    // throw new NexacroException("get platformData failed. e="
                    // + e);
                    continue;
                }
                
                DataSet dsInput = platformData.getDataSet("ds_input");

                //TODO
                //이후 처리는 각 업무로직에 맞게 사용할 것.
                continue;
                
            } else {
                String filePath = getFilePath();
                String fileName = removedPathTraversal(value);
                File f = new File(filePath + SP, fileName);
                if (f.exists()) {
                    f.delete();
                }
            }
            
        }
        
    }
    
    
    private String getFilePath() {
        //ServletContext sc = appContext.getServletContext();
        //String realPath = sc.getRealPath("/");
    	String realPath = PropertiesUtil.getString("kfr.common.uploadPath");
        String uploadPath = realPath + "KFR" + StringUtil.toDay() + SP + PREFIX;
        return uploadPath;
    }
    
    private void uploadMultipartFiles(MultipartHttpServletRequest multipartRequest, DataSet resultDs) throws IOException {
        
        // files..
        Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();
        String filePath = getFilePath();
        
        Set<String> keySet = fileMap.keySet();
        for(String name: keySet) {
            
            MultipartFile multipartFile = fileMap.get(name);

            String originalFilename = multipartFile.getOriginalFilename();

            // IE에서 파일업로드 시 DataSet 파라매터의 Content-Type이 설정되지 않아 여기로 옴. 무시.
            if(originalFilename == null || originalFilename.length() == 0) {
                continue;
            }
            
            File destination = new File(filePath);
            
            if( destination.exists() == false) {
            	boolean mkdirs = destination.mkdirs();
            	destination.setWritable(true);
            	
            	logger.debug("-------------- create directory ----------------------" + mkdirs);
            }
            
            //파일명 인증키 적용하여 생성
            Integer iPos 		= originalFilename.lastIndexOf('.');
    		String ExtShell 	= originalFilename.substring(iPos);
    		String fileId		= StringUtil.toDay("yyyyMMddHHmmssSSS");
            String newFileName 	= fileId + ExtShell;
            
            File targetFile = new File(filePath+ SP + newFileName);
            
            InputStream inputStream = multipartFile.getInputStream();
            FileCopyUtils.copy(inputStream, new FileOutputStream(targetFile));
            
            int row = resultDs.newRow();
            
            //original Filename, file Path, fileSerialNumber, new fileName
            resultDs.set(row, "FILE_ID"			, fileId);
            resultDs.set(row, "FILE_NAME"		, newFileName);
            resultDs.set(row, "ORG_FILE_NAME"	, originalFilename);
            resultDs.set(row, "FILE_PATH"		, filePath+ SP);
           
            
            if(logger.isDebugEnabled()) {
                logger.debug("uploaded file write success. file="+originalFilename);
            }
        }
    }
    
    private String removedPathTraversal(String fileName) {
        if(fileName == null) {
            return null;
        }
        
        fileName = fileName.replace("/", "");
        fileName = fileName.replace("\\", "");
//        fileName = fileName.replace(".", "");
        fileName = fileName.replace("&", "");
        return fileName;
    }
    
    private DataSet createDataSet4UploadResult() {
        
        DataSet ds = new DataSet("ds_output");
        ds.addColumn("FILE_ID"			, PlatformDataType.STRING);
        ds.addColumn("FILE_NAME"		, PlatformDataType.STRING);
        ds.addColumn("ORG_FILE_NAME"	, PlatformDataType.STRING);
        ds.addColumn("FILE_PATH"		, PlatformDataType.STRING);
        
        return ds;
    }
    
    private Map<String, String> getQueryMap(String queryString, String charset) throws UnsupportedEncodingException {

        String decodeQs = URLDecoder.decode(queryString, charset);
        int questionIndex = decodeQs.indexOf('?');
        String parameterString = decodeQs.substring(questionIndex + 1);
        String[] parameterPairs = parameterString.split("&");

        String parameterName;
        String parameterValue;
        Map<String, String> map = new HashMap<String, String>();
        for(int i=0; i<parameterPairs.length; i++) {
            String[] keyAndValue = parameterPairs[i].split("=");
            parameterName = null;
            parameterValue = null;
            if(keyAndValue.length>0) {
                parameterName = keyAndValue[0];
                parameterValue = keyAndValue[1];
                map.put(parameterName, parameterValue);
            }
        }
        
        return map;
    }
}
