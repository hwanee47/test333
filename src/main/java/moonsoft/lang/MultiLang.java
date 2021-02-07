package moonsoft.lang;

import java.io.File;
import java.io.FileWriter;
import java.io.Writer;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;

import org.w3c.dom.CharacterData;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class MultiLang {

	public static void main(String[] args) {
		MultiLang multiLang = new MultiLang();
		File path = new File("C:/NKFR/workspace/NKFR/src/main/nxui/nkfr/");
		List<File> fileList = new ArrayList<File>();
		Document doc = null;
		
		// path 하위 모든 파일을 List에 담는다.
		fileList = multiLang.getFileList(fileList, path);
		System.out.println(fileList.size());
		
		Connection con = null;
		
		try {
			
			con = multiLang.getConnection();
			
			// List의 파일별로 처리
			for (File file : fileList) {
				System.out.println(file.getAbsolutePath());
				// 파일을 파싱한다.
				doc = multiLang.getXMLDoc(file);
				// 파싱한 객체에 코드를 세팅한다.
				doc = multiLang.setCode(file, doc, con);
				try {
					// 객체를 다시 파일에 덮어쓴다.
					multiLang.writeXMLDoc(doc, new FileWriter(file));
				} catch (Exception e1) {
					System.out.println("Document 저장 실패");
					e1.printStackTrace();
				}
			}
			
		} catch (Exception e2) {
			System.out.println("예외 발생");
			e2.printStackTrace();
		} finally {
			if (con != null) {
				try {
					con.close();
				} catch (Exception e3) {
					System.out.println("Oracle 접속종료 실패");
					e3.printStackTrace();
				}
			}
		}
	}
	
	// path 하위 모든 파일을 List에 담는다.
	private List<File> getFileList(List<File> fileList, File path) {
		File[] fileArray = path.listFiles(); 
		if (fileArray.length > 0) {
			for (int i=0; i < fileArray.length; i++) {
				String name = fileArray[i].getName();
				if (fileArray[i].isDirectory()) {
					// 포함할 하위 폴더 명시..
					if (
							   name.equals("frame") || name.equals("cmm") || name.equals("contract")|| 
							name.equals("order")
							|| name.equals("account") || name.equals("counseling") 
							|| name.equals("rtm") || name.equals("mdm") || name.equals("frameW") 
							|| name.equals("ptl") || name.equals("vis")
							) {
//					if(name.equals("account")) {
						this.getFileList(fileList, fileArray[i]);
					}
				} else {
					String extension = name.substring(name.lastIndexOf(".") + 1);
					if (extension.equals("xfdl")) {
						fileList.add(fileArray[i]);
					}
				}
			}
		}
		
		return fileList;
	}
	
	// 파일을 파싱한다.
	private Document getXMLDoc(File file) {
		Document doc = null;
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		try {
			DocumentBuilder builder = factory.newDocumentBuilder();
			doc = builder.parse(file);
		} catch (Exception e) {
			System.out.println("Document 생성 실패");
			e.printStackTrace();
		}
		return doc;
	}
	
	// 파싱한 객체에 코드를 세팅한다.
	private Document setCode(File file, Document doc, Connection con) {
		XPathFactory xpathFactory = XPathFactory.newInstance();
		XPath xpath = xpathFactory.newXPath();
		try {
			// Static, Button, Tabpage, Band/Cell*, Script Tag만 추출
			XPathExpression expr = xpath.compile("//CheckBox[@text] | //GroupBox[@text] | //Static[@text] | //Button[@text] | //Tabpage[@text] | //Band[@id='head']/descendant::* | //Script");
			NodeList nodeList = (NodeList) expr.evaluate(doc, XPathConstants.NODESET);
			String nodeName = "";
			String text = "";
			String mcode = "";
			for (int i = 0; i < nodeList.getLength(); i++) {
				Element el = (Element) nodeList.item(i);
				nodeName = el.getNodeName();
//				System.out.printf("%-30s", "NodeName : " + nodeName);
				if ("GroupBox".equalsIgnoreCase(nodeName) || "CheckBox".equalsIgnoreCase(nodeName) || "Static".equalsIgnoreCase(nodeName) || 
					"Button".equalsIgnoreCase(nodeName)   || "Tabpage".equalsIgnoreCase(nodeName)) {
					// Static, Button, Tabpage 처리
					text = el.getAttribute("text");
					mcode = el.getAttribute("domainId");
					if (mcode == null || mcode.isEmpty()) {
						this.setType1Change(el, con, text);
					}
//					System.out.printf("%-50s", "text : " + text);
//					System.out.println("domainId : [" + mcode + "]");
				} else if ("Cell".equalsIgnoreCase(nodeName)) {
					// Band/Cell 처리
					text = el.getAttribute("text");
					mcode = el.getAttribute("accessibilitydescription");
					if (mcode == null || mcode.isEmpty()) {
						this.setType2Change(el, con, text);
					}
//					System.out.printf("%-50s", "text : " + text);
//					System.out.println("accessibilitydescription : [" + mcode + "]");
				} else if ("Script".equalsIgnoreCase(nodeName)) {
					// Script 처리
					Node node = el.getFirstChild();
					if (node instanceof CharacterData) {
						this.setType3Change(el, con, node, doc);
					}
//					System.out.println(el.getTextContent());
				}
			}
		} catch (Exception e) {
			System.out.println("XML 파싱 실패");
			e.printStackTrace();
		}
		
		return doc;

	}
	
	// 객체를 다시 파일에 덮어쓴다.
	private void writeXMLDoc(Document doc, Writer writer) throws Exception {
		try {
			Transformer tf = TransformerFactory.newInstance().newTransformer();
			tf.transform(new DOMSource(doc), new StreamResult(writer));
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			writer.close();
		} 
	}
	
	// msg 에 해당하는 코드를 DB에서 조회한다. msg 에서 \t, \r, \n 공백 등을 모두 삭제하고 비교
	private String getCode(Connection con, String msgType, String msg) {
		String code = "";
		
		PreparedStatement pstm = null;
        ResultSet rs = null;

		try {
			String query = "SELECT MSG_CD FROM (SELECT MSG_CD FROM TMDM_LOCALE_MSG WHERE LANG_CD = 'ko' AND DEL_YN = 'N' AND MSG_TYPE = ? AND REGEXP_REPLACE(MSG, '( )', '') = ? ORDER BY MSG_CD) WHERE ROWNUM = 1";
			pstm = con.prepareStatement(query);
			pstm.setString(1, msgType);
			pstm.setString(2, msg.replaceAll("\\s", ""));
			rs = pstm.executeQuery();
			
			while(rs.next()) {
				code = rs.getString(1);
			}
			
			if (rs != null) {
				try { rs.close(); } catch (Exception e) {}
			}
			
			if (pstm != null) {
				try { pstm.close(); } catch (Exception e) {}
			}
		} catch (Exception e) {
			System.out.println("쿼리문 예외발생");
			e.printStackTrace();
		}
		
		return code;
	}
	
	// DB 커넥션을 생성한다.
	private Connection getConnection() {
		Connection con = null;
		
		try {
			String user = "DEV05";
			String pw = "1qaz2wsx!";
			String url = "jdbc:oracle:thin:@128.11.1.74:1534:HELLOPRD";
			
			Class.forName("oracle.jdbc.driver.OracleDriver");        
            con = DriverManager.getConnection(url, user, pw);
		} catch (Exception e) {
			System.out.println("Oracle 접속 실패");
			e.printStackTrace();
		}
		
		return con;
	}
	
	// Static, Button, Tabpage Element 에 코드 설정
	private void setType1Change(Element el, Connection con, String text) {
		String mcode = this.getCode(con, "T", text);
		if (mcode != null && !mcode.isEmpty()) {
			el.setAttribute("domainId", mcode);
		}
	}
	
	// Band/Cell Element 에 코드 설정
	private void setType2Change(Element el, Connection con, String text) {
		String mcode = this.getCode(con, "T", text);
		if (mcode != null && !mcode.isEmpty()) {
			el.setAttribute("accessibilitydescription", mcode);
		}
	}
	
	// Script Element 에 코드 설정
	private void setType3Change(Element el, Connection con, Node node, Document doc) {
		CharacterData cd = (CharacterData) node;
		String textContent = cd.getData();
		String text = "";
		String mcode = "";
		StringBuffer sb = null;
		
		// alert 처리 this. 유무와 상관없이 작은따옴표, 큰따옴표 상관없이 처리
		Pattern pAlert = Pattern.compile("(this.)?+(\\w*alert\\s?\\(){1}+((\'(.+)\')|(\"(.+)\")){1}+\\);", Pattern.CASE_INSENSITIVE);
		Matcher mAlert = pAlert.matcher(textContent);
		sb = new StringBuffer();
		while(mAlert.find()) {
//			System.out.println(mAlert.group(1));
//			System.out.println(mAlert.group(2));
//			System.out.println(mAlert.group(5));
//			System.out.println(mAlert.group(7));
//			System.out.println(mAlert.group());
			text = (mAlert.group(5) != null) ? mAlert.group(5) : mAlert.group(7);
			mcode = this.getCode(con, "M", text);
			String strReplace = "this.gfnAlert(\"" + mcode + "\");";
			
//			System.out.println("### text : " + text);
//			System.out.println("### mcode : " + mcode);
//			System.out.println("### strReplace : " + strReplace);
			
			if (mcode != null && !mcode.isEmpty()) {
				mAlert.appendReplacement(sb, strReplace);
			}
		}
		mAlert.appendTail(sb);
		
		// message 처리 this. 유무와 상관없이 작은따옴표, 큰따옴표 상관없이 처리
		Pattern pMessage = Pattern.compile("(this.)?+(\\w*message\\s?\\(){1}+((\'(.+)\')|(\"(.+)\")){1}+\\);", Pattern.CASE_INSENSITIVE);
		Matcher mMessage = pMessage.matcher(sb.toString());
		sb = new StringBuffer();
		while(mMessage.find()) {
//			System.out.println(mMessage.group(1));
//			System.out.println(mMessage.group(2));
//			System.out.println(mMessage.group(5));
//			System.out.println(mMessage.group(7));
//			System.out.println(mMessage.group());
			text = (mMessage.group(5) != null) ? mMessage.group(5) : mMessage.group(7);
			mcode = this.getCode(con, "M", text);
			String strReplace = "this.gfnMessage(\"" + mcode + "\");";
			if (mcode != null && !mcode.isEmpty()) {
				mMessage.appendReplacement(sb, strReplace);
			}
		}
		mMessage.appendTail(sb);
		
		// confirm 처리 this. 유무와 상관없이 작은따옴표, 큰따옴표 상관없이 처리
		Pattern pConfirm = Pattern.compile("(this.)?+(\\w*confirm\\s?\\(){1}+((\'(.+)\')|(\"(.+)\")){1}+\\)", Pattern.CASE_INSENSITIVE);
		Matcher mConfirm = pConfirm.matcher(sb.toString());
		sb = new StringBuffer();
		while(mConfirm.find()) {
//			System.out.println(mConfirm.group(1));
//			System.out.println(mConfirm.group(2));
//			System.out.println(mConfirm.group(5));
//			System.out.println(mConfirm.group(7));
//			System.out.println(mConfirm.group());
			text = (mConfirm.group(5) != null) ? mConfirm.group(5) : mConfirm.group(7);
			mcode = this.getCode(con, "M", text);
			String strReplace = "this.gfnConfirm(\"" + mcode + "\")";
			if (mcode != null && !mcode.isEmpty()) {
				mConfirm.appendReplacement(sb, strReplace);
			}
		}
		mConfirm.appendTail(sb);
		
//		System.out.println(sb.toString());
		
		Node cdata = doc.createCDATASection(sb.toString());
		el.replaceChild(cdata, node);
	}

}
