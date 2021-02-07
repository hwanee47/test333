/**
*  컨설팅 표준화 작업
*  @FileName 		File.js  
*  @Creator 			seungmin
*  @CreateDate 	2018.06.20
*  @Desction   
************** 소스 수정 이력 ***************************************************
*  date          		Modifier                Description
*******************************************************************************
*  2018.06.20    	seungmin 	           최초 생성 
*******************************************************************************
*/
  
var pForm = nexacro.Form.prototype;

/**
 * @class 현재 Form 상의 FileUpload 컴포넌트를 서버에 업로드한다. <br>
 * @param {Object} objFileUpload - 파일업로드 컴포넌트
 * @param {String} [sDir] - 파일업로드 디렉토리
 * @return N/A
 * @example 
 * this.gfnFileUpload(objFileUpload);
 */
pForm.gfnFileUpload = function(objFileUpload, sDir)
{	
	var objEnv = nexacro.getEnvironment();
	var svcUrl = objEnv.services["svcurl"].url;
	var inputDs = "";
	
	//파일 업로드 directory
	if(this.gfnIsNull(sDir)) sDir = "upload";
	
	//파일업로드 서비스 호출 경로
	var sFileUrl = svcUrl + "advancedUploadFiles.do";
    
	//이벤트 헨들러
	//objFileUpload.addEventHandler("onsuccess", this.gfnfileUpload_onsuccess, this);
	objFileUpload.addEventHandler("onerror", this.gfnfileUpload_onerror, this);
	
	var bSucc = objFileUpload.upload(sFileUrl + "?" + "dir=" + sDir);
	trace("bSucc >> " + bSucc);
};

/**
 * @class 현재 Form 상의 FileDownload 컴포넌트를 이용하여 지정한 위치에서 원하는 파일을 다운로드한다. <br>
 * @param {Object} objFileDownload - 파일다운로드 컴포넌트
 * @param {String} sFilename - 다운로드 할 파일명
 * @param {String} [sOrgFilename] - 다운로드 할 오리지날 파일명
 * @param {String} [sDir] - 파일다운로드시킬 폴더 위치
 * @return N/A
 * @example this.gfnFileDownload(objFileDownload, sFilename, sOrgFilename, sDir);
 */
pForm.gfnFileDownload = function(objFileDownload, sFilename, sOrgFilename, sDir)
{
	var objEnv = nexacro.getEnvironment();
	var svcUrl = objEnv.services["svcurl"].url;
	
	//파일 다운로드 directory
	if(this.gfnIsNull(sDir)) sDir = "upload";

	//파일다운로드 서비스 호출 경로
	var sFileUrl = svcUrl + "advancedDownloadFile.do";

	objFileDownload.set_downloadfilename(sOrgFilename);
	
	sOrgFilename = encodeURI( sOrgFilename );

	//objFileDownload.addEventHandler("onsuccess", this.gfnFileDownload_onsuccess, this);
	objFileDownload.addEventHandler("onerror", this.gfnFileDownload_onerror, this);
	
	objFileDownload.download(sFileUrl + "?" + "file=" + sFilename + "&orgFile=" + sOrgFilename + "&dir=" + sDir);
};



/**
 * @class 파라미터로 넘어온 dataset에 정보를 가지고 파일 삭제 <br>
 * @param {Object} objDs - 파일 삭제할 정보 dataset
 * @param {String} sCallback - 삭제 후 callback 함수.
 * @return N/A
 * @example this.gfnFileDelete(objDs, sCallback);
 */
pForm.gfnFileDelete = function(objDs, sCallback)
{
	var objEnv = nexacro.getEnvironment();
	var svcUrl = objEnv.services["svcurl"].url;
	
	//파일다운로드 서비스 호출 경로
	var sFileUrl 		= svcUrl + "advancedDeleteFiles.do";
	
	var sInDatasets		= "input=" + objDs.name;
	var arguments 		= "";
	var isAsync			= true;
	var nDataType		= 2;
	
	if(this.gfnIsNull(sCallback)) sCallback = "gfnFileDelCallback";
	
	this.transaction( "deleteFileInfo"                 	//1.strMergeSvcID
					, sFileUrl                 			//2.strServiceUrl
					, sInDatasets                       //3.inDataSet
					, ""                     			//4.outDataSet
					, arguments                     	//5.arguments
					, sCallback				       		//6.strCallbackFunc
					, isAsync                     		//7.bAsync
					, nDataType                     	//0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                    		//0.bCompress ( default : false ) 
};

/**
 * @class File Path 문자열(예 : C:\a\b\filename.ext)에서 File명(예 : filename)을 추출 <br>
 * @param {String} sPath - File Path 문자열 (예 : "C:\a\b\filename.ext")
 * @param {String} bExt - extend를 return되는 File명에 포함시킬지 여부 ( 옵션 : Default=false )
 * @return {String} 
 * 성공 : <br>
 * bExt가 true인 경우 ==> sPath에서 File명(예 : "filename.ext") <br>
 * bExt가 false인 경우 ==> sPath에서 File명(예 : "filename") <br>
 * 실패 : "" <br>
 */
pForm.gfnGetFileName = function (sPath, bExt)
{
	var start_pos,end_pos,tmp_pos,filename;

	if (this.gfnIsNull(sPath)) 
	{
		return "";
	}
	if (this.gfnIsNull(bExt)) 
	{
		bExt = false;
	}

	start_pos = Math.max(this.gfnPosReverse(sPath, "\\"), this.gfnPosReverse(sPath, "/"));
	tmp_pos = this.gfnPosReverse(sPath, "::");
	if (tmp_pos > 0) 
	{
		tmp_pos++;
	}
	start_pos = Math.max(start_pos, tmp_pos);
	if (bExt == false) 
	{
		end_pos = this.gfnPosReverse(sPath, ".");
		if (end_pos < 0) 
		{
			end_pos = sPath.length;
		}
		filename = sPath.substr(start_pos + 1, end_pos - start_pos - 1);
	}
	else 
	{
		filename = sPath.substr(start_pos + 1);
	}

	return filename;
};

pForm.gfnFileDownload_onerror = function(obj,e)
{
	this.setWaitCursor(false);
};


pForm.gfnFileDownload_onsuccess = function(obj,e)
{
	this.setWaitCursor(false);
};

pForm.gfnfileUpload_onsuccess = function(obj,  e)
{
	this.setWaitCursor(false);
};

pForm.gfnfileUpload_onerror = function(obj, e)
{
	this.setWaitCursor(false);
	
	this.gfnAlert(e.errormsg);
};

/**
 * @class 공통 Callback 함수 <br>
 * 이 함수가 먼저 수행되고 사용자지정Callback함수가 수행된다.
 * @param {String} svcID - 서비스 ID
 * @param {Number} errorCode - 에러코드(정상 0, 에러 음수값)
 * @param {String} [errorMsg] - 에러메시지
 * @return N/A
 */
pForm.gfnFileDelCallback = function(svcID,errorCode,errorMsg)
{
	alert("File Delete Message :: " + errorMsg);
};