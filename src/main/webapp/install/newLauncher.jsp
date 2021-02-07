<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page import="moonsoft.common.util.PropertiesUtil"%>

<%
	String runMode	   = PropertiesUtil.getString("mode");
	String cjworldId   = (String)request.getAttribute("USER_ID");
	String pushUrl	   = PropertiesUtil.getString("rabbit.push.url");
	String pushUser	   = PropertiesUtil.getString("rabbit.push.user");
	String pushPw	   = PropertiesUtil.getString("rabbit.push.pw");
	String ipAddr	   = request.getRemoteAddr();
	String checkOsYn   = (String)request.getAttribute("CHECK_OS_YN");
%>

<html>
<head>
<meta http-equiv="content-type"    content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
<title>nexacro Runtime 엔진 설치 및 appliction 구동</title>

<link rel="stylesheet" href="${pageContext.request.contextPath}/install/install.css" type="text/css">

  <script language="javascript">
  
    /**
      *  TPLService 사용자 정의 항목은 고객사 프로젝트 환경에 맞게 변경하세요.
      *  변수이름의 경우 do_property, do_method 시 사용하기 때문에 변수이름 변경시 do_property, do_method 함수 내의 변수이름도 변경 필요합니다.
      *  크롬(Chorme) 브라우저의 경우 window.open 으로 이 화면을  띄워야 close 를 할 수 있습니다.
      */
     var userAgent 		   	= navigator.userAgent;
     var strEnginesetupkey 	= ""; 	// 엔진 key
     var checkOsYn			= "<%=checkOsYn%>";
	 
     
     if(checkOsYn == "Y") {
    	 strEnginesetupkey = "{DFC74642-2DFB-455B-879D-A097E4B97C9E}";
     } else {
    	 if (userAgent.indexOf("WOW64") != -1 
	     ||  userAgent.indexOf("Win64") != -1)
	  	 {
	  	 	strEnginesetupkey = "{DB2D4086-A192-4FCB-A24D-77A7373B02AA}";
	  	 //	strEnginesetupkey = "{DFC74642-2DFB-455B-879D-A097E4B97C9E}";
	  	 }
	  	 else if (userAgent.indexOf("Windows NT 5.1") != -1 
	     || 	  userAgent.indexOf("Windows XP"    ) != -1)
	    	strEnginesetupkey = "{DFC74642-2DFB-455B-879D-A097E4B97C9E}";
	     else 
	    	strEnginesetupkey = "{DFC74642-2DFB-455B-879D-A097E4B97C9E}";
     }
    
     // 아래부터는 싸이트에 맞게 수정이 필요합니다.
     var strServerPath 		  = window.location.protocol + "//" + window.location.host + "/GWDS/";		 // 고객사 프로젝트의 경로 설정
     var strKey      	   	  = "GWDS";                                                                  // 어플리케이션에서 사용하는 Key id
     var strBjson 		   	  = strServerPath + "gwds/start.json";                                       // 어플리케이션 ADL 경로를 지정하는 속성
     var strVersion 	   	  = "17.0.0.1220";                                                           // 버전정보
     var strComponentPath  	  = "%USERAPPLOCAL%Component/";                                              // 컴포넌트 위치
    
     var strLoadingimage   	  = strServerPath + "install/img/loading.gif";       	// 로딩 이미지 화면이나 데이터 로딩 시 보이는 이미지를 지정하는 속성
     var strSplashimage    	  = strServerPath + "install/img/nexacro_Splash.png";
     //  strSplashimage 	  = strServerPath;                                 		// 구동시 최초에 뜨는 이미지 안보이게 할 경우 http url를 404 주소 호출
     var strSplashmessage 	  = "엔진구동메시지가 출력됩니다."; 								// "none"; //구동시 메시지 내역  "none"지정시 메지시 출력하지 않음 그외 엔진메시지 출력
     var strWallpapericon 	  = strServerPath + "install/img/ERP.ico";          	// 아이콘 경로
     var strWallpaperposition = "desktop";                                  		// 아이콘 위치 지정 "startmenu"/ "startup" / "programs" / "desktop" 중 택일함 
     var strLocLuncherVer;                                                  		// 런처 local 버전
     var strLauncherVersion   = "1,1,0,6";                                    		// 런처 버전
     var strDownloadPath 	  = "install/engine";                                	// 런처 다운로드 서버 경로
     var strLauncherFileName  = "TPLSvc_Setup.exe";
     var bOnlyone			  = true;                                            	// nexacro only 속성 설정(true/false)
    
    // GET방식으로 넘어온 값을 가져온다.
    function getRequest(param)
    {
        if (location.search)
        { 
        	// if address has parameters 
            var baseRequest = location.search.substr(1);
            var arrVars 	= baseRequest.split("&"); 
            for (i=0;i<arrVars.length;i++)
            { 
                var tmpVar = baseRequest.split("&")[i].split("="); 
                if (param==tmpVar[0]) 
                {
                	return tmpVar[1]; 
                }
            } 
        } 
        return null; 
    }
    
    // get 방식으로 Parameter 전달 받은 값을 Application.Variable에 전달하는 방식 예제
    //var strUserId = getRequest("userId");
    //var strIpAddr = getRequest("ipAddr");
    var runMode 	= "<%=runMode%>";
    var cjworldId 	= "<%=cjworldId%>";
    var pushUrl	 	= "<%=pushUrl%>";
	var pushUser 	= "<%=pushUser%>";
	var pushPw 		= "<%=pushPw%>";
	var ipAddr 		= "<%=ipAddr%>";
	
    // Ex) http://localhost:8017/nexacro/install/newLauncher.html?userId=12080601&ipAddr=127.18.0.1
    // 변수명:av=값,변수명:ev=값  (ev는 Environment.Variable, ec는 Environment.CookieVariable, av는 Application.Variable)
    //var strGlobalvalue = "gvUserId:av="+strUserId+",gvIpAddr:av="+strIpAddr;
    var strGlobalvalue = "gvRunMode:av="+runMode + ",gv_cjworld_id:av=" + cjworldId + ",gv_pushServer:av=" + pushUrl + ",gv_pushUser:av=" + pushUser + ",gv_pushPassword:av=" + pushPw + ",gv_ipAddr:av=" + ipAddr; 
    //  alert("웹페이지에서 설정한 Variable 값 : " + strGlobalvalue);
  </script>
  
  <script type="text/javascript" src="${pageContext.request.contextPath}/install/newLauncher.js" charset="UTF-8"></script> 
  
</head>
<body>
	<div id="container" class="container">
		<div id="contents">
			<div id="divtxt" class="divtxt">
				<div>
					<span class="title">프로그램 설치 안내</span>
				</div>
				<div class="div_info">
					<div style="width:85%;float:left;"> 
					<span class="info"> 
					<a class="big">시스템 사용을 위해 프로그램 설치가 필요합니다.</a><br>
					<br> 전체설치 버튼을 클릭하시면 서비스 이용에 필요한 모든 프로그램을 통합 설치할 수 있는 파일을<br> 다운로드할 수 있습니다.
					<br>
					</span>
					</div>
					<div style="float:left;margin-top:30px;">					
					<span><a id="All" class="button" href="javascript:download_All();">전체설치</a></span>
					</div>
				</div>
				<div id="installFile">
				<table>
					<colgroup>
						<col width="150px"/>
						<col width="*"/>	
						<col width="80px"/>	
						<col width="150px"/>	
					</colgroup>
					<thead>
						<tr>
							<td>프로그램명</th>
							<td>내용</th>
							<td>설치현황</th>
							<td>설치</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="pgmList1">런처<br>(TPLSvc)</td>
							<td class="left">넥사크로 엔진을 기동시켜주는 런처 프로그램입니다.</td>
							<td><span id="linklaucher_txt" class="install_stat">미설치</span></td>
							<td>
								<a id="linklaucher" class="download" href="javascript:TPL_LauncherDownload('update');"><span>다운로드</span></a>
							</td>
						</tr>
						<tr>
							<td class="pgmList2">넥사크로 엔진<br>(nexacro Engine)</td>
							<td class="left">시스템 구동을 위한 엔진 프로그램입니다.</td>
							<td><span id="linkEngine_txt" class="install_stat">미설치</span></td>
							<td>
								<a id="linkEngine" class="download" href="javascript:EngineDownload();"><span>다운로드</span></a>						
							</td>
						</tr>
					</tbody>
				</table>
				<br>
				<span class="info02"><span class="warnnig">·</span> nexacro Engine 설치 시  <span class="warnnig">강제 재부팅</span>이 진행될 수 있으니, 반드시 중요한 자료는 저장 후 설치를 진행하시기 바랍니다.
				</span>
				<span class="info02"><span class="warnnig">·</span> 프로그램 삭제는 [제어판] > [프로그램 관리] 또는 [프로그램 추가/제거] 에서 진행 가능합니다.</span>
				<span class="info02"><span class="warnnig">·</span> 프로그램 설치 후에는 반드시 <span class="warnnig">새로고침</span> 또는 <span class="warnnig">재접속</span>하여 설치여부를 확인하시기 바랍니다.</span>
				</div>
			</div>
		</div>
		<div id="errorDiv" class="errorDiv"></div>
	</div>
	<br>
	<br>
	<div id="debugDiv">
		<!-- result -->
		<textarea id="debugTextBox" rows="50" cols="150" style="display: none;"></textarea>
	</div>
</body>
</html>
