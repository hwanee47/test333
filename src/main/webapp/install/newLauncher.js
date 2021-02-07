   var openurl  = "http://127.0.0.1";  // 고정(변경불가) https 를 사용 할 경우 https://127.0.1 로 변경 
   var setport  = -1;                  // -p옵션을 통해 넣었던 포트번호가 있으면 그 번호를 넣어야 함; 없을 경우 -1
   var openport = -1;                  // openport가 실패할 경우 시도할 처음 port 번호
   var findport = false;               // setport 혹은 쿠키값으로 먼제 port 찾을때 false;
   var minport  = 7895;                // 연결 가능한 port를 찾을때 시작 port  (http는 7895~7935, https는 7936~7966)
   var maxport  = 7935;                // 연결 가능한 port를 찾을때 최대 범위
   
    // ssl 설정으로 인해 임시적으로 http로 통신 
   if ((navigator.userAgent.indexOf("MSIE") > -1) || ( navigator.userAgent.indexOf("Trident") != -1)) 
   { 
	   if (runMode == "QA" || runMode == "PRD")
	   { 
		openurl  = "https://127.0.1"; 	// 고정(변경불가) https 를 사용 할 경우 https://127.0.1 로 변경 
		setport  = -1; 					// -p옵션을 통해 넣었던 포트번호가 있으면 그 번호를 넣어야 함; 없을 경우 -1 
		openport = -1; 					// openport가 실패할 경우 시도할 처음 port 번호 
		findport = false; 				// setport 혹은 쿠키값으로 먼제 port 찾을때 false; 
		minport  = 7936; 				// 연결 가능한 port를 찾을때 시작 port (http는 7895~7935, https는 7936~7966) 
		maxport  = 7966; 				// 연결 가능한 port를 찾을때 최대 범위 
	   }
   }
   
   function download_All(type) 
   {
	   	var SetupRuntimeName = "";
		var userAgent 		 = navigator.userAgent;
		
		if(checkOsYn == "Y") {
			SetupRuntimeName += "GWDS - Nexacro Runtime(x86) 2018.10.19.exe";
		} else {
			if (userAgent.indexOf("WOW64") != -1 
		    ||  userAgent.indexOf("Win64") != -1)
		        SetupRuntimeName += "GWDS - Nexacro Runtime(x64) 2018.10.18.exe";
		    else if(userAgent.indexOf("Windows NT 5.1") != -1 
		    || 		userAgent.indexOf("Windows XP"    ) != -1)
		        SetupRuntimeName += "GWDS - Nexacro Runtime(x86) 2018.10.19.exe";
		    else 
		        SetupRuntimeName += "GWDS - Nexacro Runtime(x86) 2018.10.19.exe";
		}
		
		var downURL 	= strServerPath + "install/setup" + "/" + SetupRuntimeName;
		
		var divCon 		= document.getElementById("All")
			divCon.href = downURL;
				
		document.location = downURL;
   }
   
   /**
    *  TPL 프로그램 다운로드 시 function 정의
    */
    // TPLSvc.exe 다운 받기
    function download_TPLSvc(type) 
    {
		if (type == "newlanucher") 
		{
			var downURL = strServerPath + strDownloadPath + "/" + strLauncherFileName;
			return downURL;
		} 
		else 
		{   
			var SetupRuntimeName = "";
			var userAgent 		 = navigator.userAgent;
			
			if(checkOsYn == "Y") {
				SetupRuntimeName += "nexacro17_SetupRuntime_x86.exe";
			} else {
				if (userAgent.indexOf("WOW64") != -1 
			    ||  userAgent.indexOf("Win64") != -1)
			        SetupRuntimeName += "nexacro17_SetupRuntime_x64.exe";
			    else if(userAgent.indexOf("Windows NT 5.1") != -1 
			    || 		userAgent.indexOf("Windows XP"    ) != -1)
			        SetupRuntimeName += "nexacro17_SetupRuntime_XP.exe";
			    else 
			        SetupRuntimeName += "nexacro17_SetupRuntime_x86.exe";
			}
			
			var downURL 	= strServerPath + strDownloadPath + "/" + SetupRuntimeName;
			
			var divCon 		= document.getElementById("linkEngine")
				divCon.href = downURL;
					
			return downURL;
		}
    }
    
    /**
     * [TPL_Download description]
     * TPLSvc 프로그램 다운로드 
     */
    function TPL_LauncherDownload (str) 
    {
      // var msg="Insall";
      // if(str=="update") { msg="Update";}
      var msg="설치 되지 않았습니다.";
      if (str=="update") {msg="업데이트 되었습니다.";}
 
      var contents 		   = "TPLSvc가 " + msg + " TPLSvc를 다운로드 후 설치를 진행해 주시기 바랍니다.";
      var divCon 		   = document.getElementById("errorDiv")
      	  divCon.innerHTML = "<H3>"+ contents +"</H3>";
      
      document.location    = download_TPLSvc("newlanucher");      
    }
    
    /**
     * [EngineDownload description]
     * Engine 다운로드 
     */
    function EngineDownload() 
    {
      //var contents = "Please Install engine \nthan close browser and run browser again";
      var contents = "Engine 이 설치 되지 않았습니다. 다운로드 후 설치를 진행해 주시기 바랍니다.";
      //alert(contents);
      var divCon = document.getElementById("errorDiv")
      	  divCon.innerHTML = "<H3>"+contents+"</H3>";
      
      document.location = download_TPLSvc();
    }

    function istalledMsg(str) 
    {
      if (str=="newlanucher") 
      {
	    var aDom = document.getElementById("linklaucher");
	      //aDom.className = "disabled";
	    	aDom.innerHTML = "재설치";
	    
	    document.getElementById("linklaucher_txt").innerHTML = "설치완료";
      } 
      else 
      {
        var aDom = document.getElementById("linkEngine");
          //aDom.className = "disabled";
        	aDom.innerHTML = "재설치";
        
        document.getElementById("linkEngine_txt").innerHTML = "설치완료";
      }
    }
    
    /**
     * [fn_close description]
     * WebBrowser(IE,Chorme) 종료 스크립트
     * 크롬(Chorme) 브라우저의 경우 window.open 으로 뛰운 창이 아닐 경우 close 를 할 수 없음
     */
    function fn_close() 
    {
      if (navigator.appVersion.indexOf("MSIE 7.") >= 0 || navigator.appVersion.indexOf("MSIE 8.") >= 0  ||
          navigator.appVersion.indexOf("MSIE 9.") >= 0 || navigator.appVersion.indexOf("MSIE 10.") >=0  || 
          navigator.appVersion.indexOf("Trident") >= 0  ) 
      {
    	 window.open('about:blank','_self').close();
      }
      else 
      {
    	  self.opener = self;
    	  window.close();
      }  
    }

    function fn_closeMessage() 
    {
      var contents = "<H1>잠시 후 화면은 자동 종료 됩니다.</H1>";
      
      // 크롬은 window.open으로 호출된 화면이 아니라면 자동 종료처리 할 수 없다.
      if (navigator.userAgent.indexOf("Chrome") >= 0)
      {
    	  contents = "<H1>현재화면을 종료하시기 바랍니다.</H1>";
      }	
     
      var divCon   = document.getElementById("errorDiv")
      	  divCon.innerHTML = contents; 
    }

   /**
    ***************** TPLService 사용자 정의 항목 끝  ******************************************************************
    */

  /**
   * [TPLService 사용 예]
   * TPL Service 의 경우 local 통신을 하게 되며 TPL Service 모듈의 설치 여부는 최초 통신의 성공 여부를 통해 통신이 실패 할 경우 모듈 설치를 진행
   * TPL Service 는 Window OS(XP SP3 이상) 의 services 항목에 추가 되어 구동 되기 때문에 Window services 에 정상 등록 되지 않을 경우 사용이 불가능 할 수 있으며
   * TPL Service 에서 사용하고 있는 port 를 혹시라도 PC 에서 사용을 막는 작업을 할 경우 사용 제한이 생길 수 있습니다.
   */
  
  var objNexacro = {};
  var xhrObject  = null;
  var xhrCreateObject = null;
  var openurl_add= "/launcher/nexacro";               		// 고정(변경불가)
  var debugmode  = {debug:false,loglevel:"debug"};      	// loglevel debug, info, error
  var console    = window.console || {log: function(){}}; 	// console 객체가 없는 IE 를 위한 처리 (IE8 이하)

  /**
   *  [trace description]
   *  Debug mode 를 위한 trace function 정의
   */
  var trace = function() 
  {
      var msg = "";
      if (debugmode.debug) 
      {
        var domText = document.getElementById('debugTextBox');        
        if (domText) 
        {
          domText.style.display = "block";
          msg += arguments[0];
            for (var i = 1, len = arguments.length; i < len; i++) 
            {
                msg += ", " + arguments[i];
            }
          domText.value += msg + "\n";
          console.log(msg);
        }
      }
   }

   // firefox, IE9, 파이어폭스, 오페라, 사파리, 크롬 전용
   if (window.addEventListener) 
   { 
       window.addEventListener("load"  	, function() { tpl_start(); 	});
       window.addEventListener("unload"	, function() { tpl_finish(); 	});
       window.addEventListener("error" 	, function() { http_onerror(); 	});
   } 
   else if (window.attachEvent) 
   { 
	   //IE 전용
       window.attachEvent("onload"		, function() { tpl_start(); 	});
       window.attachEvent("onunload"	, function() { tpl_finish(); 	});
       window.attachEvent("onerror"		, function() { http_onerror(); 	});
   }

    /**
    *  [tpl_start description]
    *  TPLService 와 통신을 하기 위한 준비 function 
    */
    function tpl_start() 
    {
      //생성 및 id 할당
      trace("tpl start", "생성 및 id 할당");
      objNexacro.platform = 'nexacro';  // 필수 세팅
      objNexacro.action   = 'create';   // 필수 세팅
    //objNexacro.id 	  = '';         // 통신이 성공하면 정보가 채워지므로 생략해도 무방

      if (setport > 0) 
      {
         openport = setport;
      } 
      else 
      {
         openport = parseInt(getCookie("tplsvcopenport"), 10) | 0;
      }
      if (openport > 0) 
      {
         findport = false;
      } 
      else 
      {
         findport = true;
         openport = minport;
      }
      
      sendData(true, true, createProcess); // sendData(openpost, is_create, resultCallback)
    }

    function tpl_finish() 
    {
      // 종료 ==> 종료는 생략할 수 있으나 런처 서비스에서 관련 정보를 일정 시간 동안 가지고 있지 않게 하려면 호출해야 함;
      if(debugmode.loglevel=="debug") 
      {
        objNexacro.action = 'destroy';
      }     
      sendData(true, false, resultProcess);
    }

    function setCookie(name, value, expiredays) 
    {
    	var todayDate = new Date();
       		todayDate.setDate(todayDate.getDate() + expiredays);
       	
       	document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }

   function getCookie(name) 
   {
       var nameOfCookie = name + '=';
       var x = 0;
       while (x <= document.cookie.length) {
           var y = (x + nameOfCookie.length);
           if (document.cookie.substring(x, y) == nameOfCookie) {
               if ((endOfCookie = document.cookie.indexOf(';', y)) == -1) {
                   endOfCookie = document.cookie.length;
               }
               return unescape(document.cookie.substring(y, endOfCookie));
           }
           x = document.cookie.indexOf(' ', x) + 1;
            if (x == 0) {
              break;
            }
       }
       return '';
   }

   function sendData(openpost, is_create, resultCallback) 
   {
      if (is_create && xhrCreateObject != null) 
      {
         delete xhrCreateObject;
         xhrCreateObject = null;
      } 
      else if (is_create == false && xhrObject != null) 
      {
         delete xhrObject;
         xhrObject = null;
      }
  
      //XMLHttpRequest, XDomainRequest(ie8,9) 객체로 서버와 연결하기 위해 사용한다
      //W3C에서 낸 CORS 를 사용해서 CrossDomain 데이터처리 할때, XMLHttpRequest(이하 XHR)이없는 IE계열에서는 
      //IE8+ 부터 XDomainRequest(이하 XDR)를 사용해서 CORS를 지원한다고 합니다.
      //따라서, IE8,9 버전에서 돌아가도록 하기위해 XDomainRequest 프로토콜을 추가로 사용합니다.          
      var xhrObj = null;
  
      if (window.XDomainRequest) 
      {
         xhrObj = new XDomainRequest();
         xhrObj.reqType = 2;
      } 
      else if (window.XMLHttpRequest) 
      {
         xhrObj = new XMLHttpRequest();
         xhrObj.reqType = 1;
      }

      if (xhrObj == null) 
      {
        trace("It can not create XMLHttpRequest or XDomainRequestx");
        return null;
      }
  
      if (is_create) 
      {
        xhrCreateObject = xhrObj;
      } 
      else 
      {
        xhrObject = xhrObj;
      }
      if (xhrObj.reqType != 2) 
      {
         xhrObj.onreadystatechange = resultCallback;
      } 
      else 
      {
         xhrObj.onload 		= resultCallback;
         xhrObj.onerror 	= http_onerror;
         xhrObj.ontimeout 	= http_ontimeout;
      }

      var jsonData;
      	  jsonData = JSON.stringify(objNexacro);
  
      var timestamp = "/" + new Date().getTime(); // cache 방지용
      var send_url  = openurl + ":" + openport + openurl_add + timestamp;
      
      if (xhrObj.reqType != 2) 
      {
    	 if (openpost) 
         {
             xhrObj.open("POST", send_url, "true");
             xhrObj.send(jsonData);
         } 
         else 
         {
             xhrObj.open("GET", send_url + "?" + jsonData, "true");
             xhrObj.send();
         }
      } 
      else 
      {
         if (openpost) 
         {
             xhrObj.open("POST", send_url);
             xhrObj.send(jsonData);
         } 
         else 
         {
             xhrObj.open("GET", send_url);               
             setTimeout(function () {xhrObj.send();}, 0);
         }
      }
      //return xhrObj;
    }

    /**
     * [createProcess description]
     * TPLSvc 통신준비 callback function Error 가 발생 할 경우 http_onerror function 에서 설치 유무 확인
     * 통신이 성공 할 경우 TPLSvc launcher version 확인 
     */
    function createProcess() 
    {
    	if (xhrCreateObject.readyState  == 4   || xhrCreateObject.reqType == 2) 
		{
			if ((xhrCreateObject.status == 200 || xhrCreateObject.reqType == 2) && launcher_response(xhrCreateObject.responseText)) 
			{
				setCookie("tplsvcopenport", openport, 14);
				if (debugmode.loglevel=="debug") 
				{
					trace("createProcess", "after setCookie", "action : " + objNexacro.action);
				}
				
				objNexacro.action = 'check';
				objNexacro.value  = {"getlauncherversion": {}};
				sendData(true, false, checkUpdateLauncher);
			} 
			else if (xhrCreateObject.status == 0) 
			{
				if(debugmode.loglevel=="debug") 
				{
					trace("createProcess function Error XMLHttpRequest status : " + xhrCreateObject.status);
				}
				return http_onerror();
			} 
			else 
			{
				  trace("http error : " + xhrCreateObject.status);
			}
		}
    }

    function checkUpdateLauncher() 
    {
    	if (xhrObject.readyState == 4   || xhrObject.reqType == 2) 
    	{
	        if (xhrObject.status == 200 || xhrObject.reqType == 2 && launcher_response(xhrObject.responseText)) 
	        {
	        	var resultJson = JSON.parse(xhrObject.responseText);
	        	strLocLuncherVer = resultJson.value["getlauncherversion"].productversion;
	
		        if (strLauncherVersion > strLocLuncherVer) 
		        {
		        	TPL_LauncherDownload("update");
		        } 
		        else 
		        {
		            istalledMsg("newlanucher");
		            objNexacro.action = "method";            
		            objNexacro.value  = { "getengineversion": { "param": [strEnginesetupkey], "result": null } };
		            sendData(true, false, checkNexacroEngine); 
		        }
	        }         
    	}      
    }

    function checkNexacroEngine() 
    {
      if (xhrObject.readyState == 4 || xhrObject.reqType == 2) 
      {
    	  if (xhrObject.status == 200 || xhrObject.reqType == 2 && launcher_response(xhrObject.responseText)) 
    	  {
	          var resultJson 	= JSON.parse(xhrObject.responseText);
	          var reg 		 	= new RegExp(strVersion, "i");
	          var rtnEngineVer 	= resultJson.value["getengineversion"].result;
	          var strEgine 		= reg.test(rtnEngineVer);
	          
	          if (!strEgine) 
	          {
	            EngineDownload();
	          } 
	          else 
	          {
	            istalledMsg();
	            do_property('setproperty', 'basic'); // nexacro 구동을 위한 기본 속성 설정
	            do_method('makeshortcut');           // 단축아이콘  생성
	            do_method('launch');                 // nexacro 실행
	          }
    	  }
      	}
    }

    function resultProcess() 
    {
      if (xhrObject.readyState == 4 || xhrObject.reqType == 2) 
      {
    	  if (xhrObject.status == 200 || xhrObject.reqType == 2 && launcher_response(xhrObject.responseText)) 
    	  {
	          if (debugmode.loglevel=="debug") 
	          {
	        	  trace(xhrObject.responseText);
	          }
	          
	          var result = JSON.parse(xhrObject.responseText);
	          
	          if (result.value.launch = "ok") 
	          {
	        	  fn_closeMessage();
	        	  setTimeout(fn_close, 1500);            
	          }
    	  }
      }
    }

    function http_ontimeout() 
    {
    	if (debugmode.loglevel=="debug"||debugmode.loglevel=="error") 
    	{
    		trace("http_ontimeout");
    	}
    	
    	return http_onerror();
    }

    function http_onerror() 
    {
      if (debugmode.loglevel=="debug"||debugmode.loglevel=="error") 
      {
    	  trace("http_onerror ", "first line", "action : " + objNexacro.action, "oepnport : "+openport);
      }

      if (objNexacro.action == 'create') 
      {  
        localStorage.setItem("isAttempt", "ok"); // TPLSvc 파일 다운로드 flag 값 
        TPL_LauncherDownload();
      }
    }

    function launcher_response(result)
    {
      // var result = resultObject.responseText;
      if (result.length <= 0)
      {
         return false;
      }
      try 
      {
        var objResult = JSON.parse(result);
          //var objResult = eval('(' + result + ')');
          if (objResult.result == "success" && objResult.id.length > 0) 
          {
             objNexacro = objResult;
             return true;
          } 
          else 
          {
            if (debugmode.loglevel=="debug"||debugmode.loglevel=="error")
               trace("launcher_response error msg", objResult.result);
               return false;
            }
      } 
      catch (e) 
      {
        if (debugmode.loglevel=="debug"||debugmode.loglevel=="error") 
        {
        	trace("launcher_response : " + e.message)
        	return false;
        }
      }
    }

   /**
    * 속성 및 메소드를 가져오기 위해서느 json 형식으로 값을 전달 후 json 으로 값을 받을 수 있습니다.
    * TPlSvc 의 proeryt 값을 가져오기 위한 셋팅 - json 형식으로 값을 전달 후 json 형식으로 값을 전달 받음
    * @param  {[action string]}
    * @param  {[action_sub string]}
    * @return 
    */
    function do_property(action, action_sub) 
    {
      if (action == 'setproperty') 
      {
         //property 설정 ==> action = 'property' value = {"property명" : "property값", ... };
         objNexacro.action = 'setproperty';
         if (action_sub == 'basic') 
         {
        	 objNexacro.value = 
             {
                 "key"			 : strKey,
                 "bjson"		 : strBjson,
                 "splashimage"	 : strSplashimage,
                 "splashmessage" : strSplashmessage,
                 "loadingimage"	 : strLoadingimage,
                 "globalvalue"	 : strGlobalvalue,
                 "onlyone"		 : bOnlyone,
                 "enginesetupkey": strEnginesetupkey
             };
         }
      } 
      else if (action == 'getproperty') 
      {
         //property 설정 ==> action = 'property' value = {"property명" : "property값", ... };
         objNexacro.action = 'getproperty';
         objNexacro.value  = 
         {
             "key"			 : "",
             "bjson"		 : "",
             "splashimage"	 : "",
             "splashmessage" : "",
             "loadingimage"	 : "",
             "globalvalue"	 : "",
             "onlyone"		 : bOnlyone,
             "enginesetupkey": ""
         };
      } 
      else 
      {
         return;
      }

      sendData(true, false, resultProcess);
    }

    /**
    * @param  {[action string]}
    * @return 
    */
    function do_method(action) 
    {
      objNexacro.action = 'method';

      if (action == 'makeshortcut') 
      {
         //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array }};
         // do_property('setproperty', 'basic');
    	 //shortcut 미사용 2018.10.17
    	 
         objNexacro.value = 
         {
             "makeshortcut": 
             {
                 "param"	: [strKey, strWallpapericon, strWallpaperposition, false]
             }
         };
         
      } 
      else if (action == 'launch') 
      {
         //method 실행 ==> action = 'method' value = {"method명" :  };
         objNexacro.value = 
         {
             "launch"	: "ok"
         };
         check_event = true;
      } 
      else if (action == 'isexistshortcut') 
      {
         //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
         objNexacro.value = 
         {
             "isexistshortcut": 
             {
                 "param"	: [strKey, "startmenu", true],
                 "result"	: null
             }
         };
      } 
      else if (action == 'download') 
      {
         //method 실행 ==> action = 'method' value = {"method명" : };
         objNexacro.value = 
         {
             "download"	: null
         };
      } 
      else if (action == 'addWebInfo') 
      {
         //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array }};
         objNexacro.value = 
         {
             "addWebInfo": 
             {
                 "param"	: [window.document.cookie]
             }
         };
      } else if (action == 'getengineversion') 
      {
         //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
         objNexacro.value = 
         {
             "getengineversion": 
             {
                 "param"	: [strEnginesetupkey],
                 "result"	: null
             }
         };
      } 
      else if (action == 'deleteshortcut') 
      {
         //method 실행 ==> action = 'method' value = {"method명" : {"param" : method 입력값 array, "result" : 결과값 }};
         objNexacro.value = 
         {
             "deleteshortcut": 
             {
                 "param"	: [strKey, "startmenu", true],
                 "result"	: null
             }
         };
      } 
      else 
      {
         return;
      }

      sendData(true, false, resultProcess);
    }

    function get_event(action) 
    {
      objNexacro.action = 'event';
      if (action == 'error') 
      {
         //get event info  ==> action = 'event' value = {"event명" : {...}};
         if (add_value) 
         {
             objNexacro.value = '{ "error": { "code": 0, "message": "" } }';
         } 
         else 
         {
             objNexacro.value = 
             {
                 "error": 
                 {
                     "code"		: 0,
                     "message"	: ""
                 }
             };
         }
      } else {
         return;
      }

      sendData(true, false, resultProcess);
    }