/*
 ===============================================================================
 == 업무와 관련된 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnSearchAddrInfo      : 주소 조회 처리
 */
 
 var pForm = nexacro.Form.prototype;
 this.objApp = nexacro.getApplication() ;
 /*******************************************************************************
 * Function Name: gfnSearchAddrInfo
 * Description	: 주소 조회 처리
 * Arguments	: zipNo : 우편번호
 * Arguments	: addr  : 주소
 * Return 		: None
 ********************************************************************************/
pForm.gfnSearchAddrInfo = function (zipNo, addr)
{
	// 조회조건 셋팅
	this.objApp.gdsAddrSearch.setColumn(0, "ZIP_NO", zipNo);
	this.objApp.gdsAddrSearch.setColumn(0, "DETAIL_ADDR", addr);
	
	
	// 우편번호가 5자리면 도로명주소로 조회
	if( this.gfnTrim(zipNo).length == "5" ){
		this.objApp.gdsAddrSearch.setColumn(0, "ZIP_ADDR_DV", "02");
	}
	else{
		this.objApp.gdsAddrSearch.setColumn(0, "ZIP_ADDR_DV", "01");
	}
	
	
	this.gfnTransaction("getZipAddrInfoList");
}