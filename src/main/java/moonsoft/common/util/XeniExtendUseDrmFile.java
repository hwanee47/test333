package moonsoft.common.util;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import javax.servlet.http.HttpServletResponse;
import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.VariableList;
import com.nexacro17.xapi.tx.HttpPlatformResponse;
import com.nexacro17.xapi.tx.PlatformType;
import com.nexacro17.xeni.extend.XeniExcelDataStorageBase;
import com.nexacro17.xeni.util.CommUtil;

public class XeniExtendUseDrmFile implements XeniExcelDataStorageBase {

	/**
	 * read excel file 
	 */
	public InputStream loadTargetStream(String filepath) throws Exception {
		File file = null;
		
		//암호화 된 파일인지 체크
		int fileType = 29; //FasooUtil.getFileType(filepath);
		
		//암호화 된 파일이 아닌경우 
		if(fileType == 29) {
			file = new File(filepath);
		} else {
			//file = FasooUtil.extractFromExcelImport(filepath);
		}
 
		return new FileInputStream(file);
	}

	/**
	 * stream 으로 입력 받은 excel 을 file 로 저장.
	 */
	public String saveImportStream(VariableList varlist, 
									InputStream in, 
									String filepath) throws Exception {
		int nIdx = filepath.lastIndexOf('/');
		String sPath = filepath.substring(0, nIdx);
		File file = new File(sPath);
		
		if (file.exists() == false) {
			file.mkdirs();
		}
		
		// write input stream to file
		//
		
		OutputStream out = new FileOutputStream(filepath);

		byte[] buf = new byte[1024];
		int length = 0;
		while ((length = in.read(buf)) > 0) {
			out.write(buf, 0, length);
		}
		
		out.flush(); 
		out.close(); 
		in.close();

		return null;
	}

	/**
	 * export 된 excel 파일을 저장 후 url 을 전달.
	 */
	public int saveExportStream(VariableList varlist, 
								DataSet dscmd,
								ByteArrayOutputStream out, 
								String filepath, String fileurl,
								HttpServletResponse response)  throws Exception {
		int nIdx = filepath.lastIndexOf('/');
		String sPath = filepath.substring(0, nIdx);
		
		File file = new File(sPath);
		if (file.exists() == false) {
			file.mkdirs();
		}
		
		FileOutputStream fout = new FileOutputStream(filepath);
		fout.write(out.toByteArray());
		
		fout.close();
		out.close();
		
		DataSet dsRes = CommUtil.getDatasetExportResponse(dscmd);

		PlatformData resData = new PlatformData();
		VariableList varList = resData.getVariableList();
		
		varList.add("ErrorCode", 0);
		varList.add("ErrorMsg", "SUCCESS");

		dsRes.set(0, "url", fileurl);
		resData.addDataSet(dsRes);
		
		HttpPlatformResponse platformRes = new HttpPlatformResponse(
							response, PlatformType.CONTENT_TYPE_SSV, "UTF-8");
		platformRes.setData(resData);
		platformRes.sendData();
		
		return 0;
	}

	@Override
	public DataSet saveExportStream(VariableList arg0, DataSet arg1,
			ByteArrayOutputStream arg2, String arg3, String arg4)
			throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
}
