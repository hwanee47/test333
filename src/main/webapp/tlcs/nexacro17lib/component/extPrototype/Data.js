/*
 ===============================================================================
 == data 관련 공통함수들은 여기에 작성한다.
 ===============================================================================
 ● gfnDeleteData    : dataset object에서 키에 해당되는 Row를 찾아서 삭제
 ● gfnMoveData      : dataset object에서 키에 해당되는 Row를 찾아서 이동
 ● gfnEditData      : dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
 ● gfnGetLookupData : dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
 ● gfnFindData      : dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
 */

var pForm = nexacro.Form.prototype;

/**********************************************************************************
 * Function Name: gfnDeleteData
 * Description  : dataset object에서 키에 해당되는 Row를 찾아서 삭제
 * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값,
 strSubCol:서브키칼럼, strSubId:서브 키값
 * Return       : 없음
 **********************************************************************************/
pForm.gfnDeleteData = function (ObjDs, strIdCol, strId, strSubCol, strSubId)
{
	var curRow = this.gfnFindData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	ObjDs.deleteRow(curRow);
}

/**********************************************************************************
 * Function Name: gfnMoveData
 * Description  : dataset object에서 키에 해당되는 Row를 찾아서 이동
 * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값, newRow:이동할 Row,
 strSubCol:서브키칼럼, strSubId:서브 키값
 * Return       : 없음
 **********************************************************************************/
pForm.gfnMoveData = function (ObjDs, strIdCol, strId, newRow, strSubCol, strSubId)
{
	var curRow = this.gfnFindData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	ObjDs.moveRow(curRow, newRow);
}

/**********************************************************************************
 * Function Name: gfnEditData
 * Description  : dataset object에서 키에 해당되는 Row를 찾아서 값을 변경
 * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값, valCol:변경할 칼럼, newVal:변경값,
 strSubCol:서브키칼럼, strSubId:서브 키값
 * Return       : 없음
 **********************************************************************************/
pForm.gfnEditData = function (ObjDs, strIdCol, strId, valCol, newVal, strSubCol, strSubId)
{
	var curRow = this.gfnFindData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	return ObjDs.setColumn(curRow, valCol, newVal);
}

/**********************************************************************************
 * Function Name: gfnGetLookupData
 * Description  : dataSet object에서 키에 해당되는 Row를 찾아서 칼럼값을 전달
 * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값,  strInfo: dataSet 칼럼,
 strSubCol:서브키칼럼, strSubId:서브 키값
 * Return       : 칼럼값
 **********************************************************************************/
pForm.gfnGetLookupData = function (ObjDs, strIdCol, strId, strInfo, strSubCol, strSubId)
{
	var strVal;
	var curRow = this.gfnFindData(ObjDs, strIdCol, strId, strSubCol, strSubId);
	if (curRow < 0) 
	{
		return "";
	}
	
	strVal = ObjDs.getColumn(curRow, strInfo);
	if (this.gfnIsNull(strVal)) 
	{
		return "";
	}

	return strVal;
}

/**********************************************************************************
 * Function Name: gfnFindData
 * Description  : dataSet object에서 키에 해당되는 Row를 찾아서 rowpostion 전달
 * Arguments    : ObjDs:dataset, strIdCol:키칼럼, strId:키값,
 strSubCol:서브키칼럼, strSubId:서브 키값
 * Return       : rowpostion
 **********************************************************************************/
pForm.gfnFindData = function (ObjDs, strIdCol, strId, strSubCol, strSubId)
{
	var arrArgument = this.gfnFindData.arguments;
	
	if (this.gfnIsNull(strSubCol)) 
	{
		
		return ObjDs.findRow(strIdCol, strId);
	}
	
	return ObjDs.findRowExpr(strIdCol + " == '" + strId + "' && " + strSubCol + " == '" + strSubId + "'");
}


/*******************************************************************************
 * Function Name: gfnAllRowDataCall
 * Description	: Dataset의 모든 행을 함수의 인자로 넘겨주고 함수 호출처리
 * Arguments	: dsObj :Dataset, callFncObj:호출할 함수, bModifiedOnly:변경된 데이터만 호출할지 여부
 * Return 		: retVal
 ********************************************************************************/
pForm.gfnAllRowDataCall = function (dsObj, callFncObj, bModifiedOnly)
{
	var retVal;
	for (var i = 0; i < dsObj.getRowCount(); i++) 
	{
		if (bModifiedOnly && !(dsObj.getRowType(i) == 2 || dsObj.getRowType(i) == 4)) 
		{
			continue;
		}
		retVal = callFncObj(dsObj, i);
		if (this.gfnIsNull(retVal) == false) 
		{
			return retVal;
		}
	}
}

/*******************************************************************************
 * Function Name: gfnSetColumnAll
 * Description	: Dataset의 해당 컬럼에 넘어온 정보를 일괄 등록.
 * Arguments	: dsObj :Dataset, colName:컬럼명, strVal:Value
 * Return 		: 
 ********************************************************************************/
pForm.gfnSetColumnAll = function (dsObj, colName, strVal) 
{
	for(var i=0; i<dsObj.rowcount; i++) {
		dsObj.setColumn(i, colName, strVal);
	}
};