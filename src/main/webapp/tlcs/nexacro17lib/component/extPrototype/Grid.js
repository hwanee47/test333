/**
*  컨설팅 표준화 작업
*  @FileName 	Grid.js 
*  @Creator 	consulting
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	consulting 	            	최초 생성 
*  2017.10.17     	consulting  	           	주석 정비
*  2017.10.18     	consulting  	           	multisort 오류 수정
*  2017.10.19		consulting			   	    찾기/바꾸기 기능 추가
*  2017.10.30       consulting			   	    그리드기능추가 및 스크립트정비
*  2018.01.16		consulting					gfnGetApplication 공통함수 변경
*******************************************************************************
*/
var pForm = nexacro.Form.prototype;

//소트
// 헤더 클릭시 정렬 false= 오름/내림 true= 오름/내림/없음
pForm.SORT_TOGGLE_CANCEL = true;
pForm.MARKER_TYPE = "text"; // 정렬 표시자 구분 (text or image)
// Grid Head 에 정렬 상태를 표시할 텍스트 또는 이미지 경로 지정 
pForm.MARKER = ["▲", "▼"];// [오름차순표시, 내림차순표시]
pForm.COM_GRID_MARK_COL      			= "STATUS_MARK";            	// GRID의 Record 상태표시 컬럼

//그리드 HEAD 용
pForm.GRD_ARR_STR_MENU_GRID   				= new Array();
pForm.GRD_ARR_OBJ_DATASET_GRID_MENU   		= new Array();
pForm.GRID_MENU_CURRENT_INDEX;
pForm.GRID_MENU_CURRENT_CELL;

//그리드 BODY 용
pForm.GRD_ARR_STR_MENU_GRID_BODY   			= new Array();
pForm.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU   	= new Array();
pForm.GRID_BODY_MENU_CURRENT_INDEX;
pForm.GRID_BODY_MENU_CURRENT_CELL;

//그리드 FILTER
pForm.GRD_STR_FILTER_IMAGE    				= "theme://images/btn_WF_Popmenuprev_O.png";    // 이미지 교체 필요
pForm.GRD_STR_UNFILTER_IMAGE 			 	= "theme://images/btn_WF_Popmenunext_O.png";  	// 이미지 교체 필요
pForm.CDS_OBJ_DISTINCT_DATA;				// 필터 Distinct 처리를 위한 임시 데이터 셋

pForm.tragetGrid = "";

/**
 * @class  그리드헤드클릭 이벤트 [Sort, Checkbox]
 * @param {Object} objGrid - 대상그리드
 * @param {Evnet}  e	   - 헤드클릭이벤트
 * @return  N/A
 * @example
 * objGrid.addEventHandler("onheadclick", 	 this.gfnGrid_onheadclick, 	 this);
 */
pForm.gfnGridSort = function(objGrid, e)
{
	var sType = objGrid.getCellProperty("head", e.cell, "displaytype");
	if (sType == "checkboxcontrol"){
		//head display type이 checkbox일 경우 all/none check기능추가
		this._gfnHeadCheckSelectAll(objGrid, e);
	}else{
		//sort
		var arr = objGrid.arrprop;
		var multiple = false;
		if ( e.ctrlkey ) multiple = true;// Ctrl 키
			// 정렬 상태 변경이 성공하면 정렬을 실행한다.
		var rtn = this._gfnGridSetSortStatus(objGrid, e.cell, multiple);
		if(rtn){
			this._gfnGridExecuteSort(objGrid);
		}
	}
};


/**
 * @class 정렬가능여부리턴
 * @param {Object} grid - 대상그리드
 * @param {Number} headCellIndex - 대상셀INDEX
 * @param {Boolean}multiple - 멀티소트여부 
 * @param {Number} sortStatus - 소트상태  
 * @return{Boolean} sort 가능/불가능 여부
 * @example
 * this._gfnGridSetSortStatus(obj, e.cell, multiple);	
 */
pForm._gfnGridSetSortStatus = function(grid, headCellIndex, isMultiple, sortStatus, bodyCellIndex)
{
	// head cell index 에 해당하는 body cell index
	if( this.gfnIsNull(bodyCellIndex)){
		bodyCellIndex = this._gfnGridGetBodyCellIndex(grid, headCellIndex);
	}
	if ( bodyCellIndex < 0 ) return false;
	
	// body cell index 에 해당하는 바인드 컬럼명
	var columnName = this._gfnGridGetBindColumnNameByIndex(grid, bodyCellIndex);
	if ( this.gfnIsNull(columnName) ){
		trace("Check Grid body cell bind value");
		return false;
	}
	
	if ( this.gfnIsNull(isMultiple) ) isMultiple = false;
	if ( this.gfnIsNull(sortStatus) ) sortStatus = -1;
	
	// 대상 grid 에 정렬정보를 가지는 사용자 속성 확인/추가
	if ( this.gfnIsNull(grid.sortInfos) ){
		grid.sortInfos = {};
	}
	
	// 정렬대상컬럼 (순서중요)
	if ( this.gfnIsNull(grid.sortItems) ){
		grid.sortItems = [];
	}
	
	var sortInfos = grid.sortInfos,
		sortItems = grid.sortItems,
		sortInfo = sortInfos[columnName],
		sortItem,
		status;
	
	if ( this.gfnIsNull(sortInfo) )
	{
		var headText = grid.getCellText(-1, headCellIndex);
		
		// executeSort에서 정렬 표시를 위해 cell index 가 필요한데
		// cell moving 될 경우 index는 변하므로 cell object 를 참조하여 값을 얻어온다. 		
		var refCell = this._gfnGridGetGridCellObject(grid, "head", headCellIndex);
		sortInfo = sortInfos[columnName] = { status: 0, text: headText, refCell: refCell};
	}
	// set sort status
	if ( isMultiple ) {		
		status = sortInfo.status;
		if ( sortStatus == -1 ) {
			if ( status == 0 ) {
				sortInfo.status = 1;
			} 
			else if ( status == 1 ) {
				sortInfo.status = 2;
			} 
			else if ( status == 2 ) {
				sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
			}
		}
		else {
			sortInfo.status = sortStatus;
		}
	}else {
		for (var p in sortInfos) {
			if ( sortInfos.hasOwnProperty(p) )
			{
				sortInfo = sortInfos[p];
				if ( p == columnName ) {
					status = sortInfo.status;
					if ( sortStatus == -1 ) {
						if ( status == 0 ) {
							sortInfo.status = 1;
						} 
						else if ( status == 1 ) {
							sortInfo.status = 2;
						} 
						else if ( status == 2) {
							sortInfo.status = ( this.SORT_TOGGLE_CANCEL ? 0 : 1);
						}
					}else {
						sortInfo.status = sortStatus;
					}
				}else {
					sortInfo.status = 0;
				}
				if ( sortInfo.status == 0 ){
					for (var j=0, len2=sortItems.length; j<len2; j++) {
						if ( sortItems[j] !== columnName ) {
							sortItems.splice(j, 1);
							break;
						}
					}
				}
			}
		}
	}
	
	// 컬럼정보 등록
	var hasItem = false;
	for (var i=0, len=sortItems.length; i<len; i++) {
		if ( sortItems[i] == columnName ) {
			hasItem = true;
			break;
		}
	}	
	if ( !hasItem ){
		sortItems.push(columnName);
	}
	return true;
}; 

/**
 * @class head cell에 match되는 body cell을 얻어온다
 * @param {Object}  grid 대상 Grid Component
 * @param {Number} eadCellIndex head cell index
 * @return{Number}  body cell index
 * @example
 * this._gfnGridSetSortStatus(obj, e.cell, multiple);	
 */ 
pForm._gfnGridGetBodyCellIndex = function(grid, headCellIndex, useColspan) 
{	//, useColspan) 
	if( this.gfnIsNull(useColspan)) useColspan=false;
	// Max Head Row Index
	var maxHeadRow = 0;
	for (var i=0, len=grid.getCellCount("head"); i<len; i++) {
		var row = grid.getCellProperty("head", i, "row");
		if (maxHeadRow < row) {
			maxHeadRow = row;
		}
	}
	// Max Body Row Index
	var maxBodyRow = 0;
	for (var i=0, len=grid.getCellCount("body"); i<len; i++) {
		var row = grid.getCellProperty("body", i, "row");
		if (maxBodyRow < row) {
			maxBodyRow = row;
		}
	}
	
	if (maxHeadRow == 0 && maxBodyRow == 0) {
// 		var headcolspan = grid.getCellProperty("head", headCellIndex, "colspan");
// 		var bodycolspan = grid.getCellProperty("body", headCellIndex, "colspan");
// 		
// 		if( headcolspan == bodycolspan ){
// 			return headCellIndex;
// 		}
		useColspan = true;
	}
	
	// Body Row 가 1개 이상일 경우
	// Head의 row 가 Body의 row 보다 클 경우 차이 row 를 뺀 것을 대상으로 찾고
	// Body의 row 가 Head의 row 보다 크거나 같을 경우 row index가 같은 대상을 찾는다.			
	var cellIndex = -1;
	var sRow = -1;
	var nRow = parseInt(grid.getCellProperty("head", headCellIndex, "row"));
	var nCol = parseInt(grid.getCellProperty("head", headCellIndex, "col"));
	var nColspan = parseInt(grid.getCellProperty("head", headCellIndex, "colspan"));				
	
	if (maxHeadRow > maxBodyRow) 
	{
		sRow = nRow - (maxHeadRow - maxBodyRow);
		sRow = (sRow < 0 ? 0 : sRow);
	}
	else 
	{
		sRow = nRow;
	}
	var cRow, cCol, cColspan, cRowspan;
	for (var i=0, len=grid.getCellCount("body"); i<len; i++) 
	{
		cRow = parseInt(grid.getCellProperty("body", i, "row"));
		cCol = parseInt(grid.getCellProperty("body", i, "col"));	
		cColspan = parseInt(grid.getCellProperty("body", i, "colspan"));					
		cRowspan = parseInt(grid.getCellProperty("body", i, "rowspan"));
		if( cRowspan > 1 )
		{
			if ( useColspan ){
				if (sRow >= cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					cellIndex = i;
					break;
				}		
			}else{
				if (sRow >= cRow && nCol == cCol && nColspan == cColspan) 
				{		
					cellIndex = i;
					break;
				}
			}
		}else{	
			if ( useColspan ){
				if (sRow == cRow && nCol <= cCol && cCol < (nCol + nColspan)) 
				{		
					cellIndex = i;
					break;
				}		
			}else{
				if (sRow == cRow && nCol == cCol && nColspan == cColspan) 
				{		
					cellIndex = i;
					break;
				}
			}
		}
	}
	return cellIndex;
};

/**
 * @class body cell index로 binding 된 컬럼명을 얻어온다.
 * @param {Object}  grid 대상 Grid Component
 * @param {Number} eadCellIndex head cell index
 * @return{String} column id
 * @example
 * this._gfnGridGetBindColumnNameByIndex(obj, e.cell);	
 */  
pForm._gfnGridGetBindColumnNameByIndex = function(grid, index) 
{
	var text = "";
	var columnid = "";
	var subCell = grid.getCellProperty("body", index, "subcell");
	if ( subCell > 0 ){
		text = grid.getSubCellProperty("body", index, 0, "text");
	}
	else{
		text = grid.getCellProperty("body", index, "text");
	}
	
	if ( !this.gfnIsNull(text) ){
		if ( text.search(/^BIND\(/) > -1 ) {	
			columnid = text.replace(/^BIND\(/, "");
			columnid = columnid.substr(0, columnid.length-1);
		} 
		else if ( text.search(/^bind:/) > -1 ) {
			columnid = text.replace(/^bind:/, "");
		}
	}
	return columnid;
};

/**
 * @class 소트를 실행한다
 * @param {Object}  grid 대상 Grid Component
 * @return{String}  N/A
 * @example
 * this._gfnGridExecuteSort(obj);	
 */  
pForm._gfnGridExecuteSort = function(grid) 
{
	var sortInfo, 
		sortItem,
		sortInfos = grid.sortInfos,
		sortItems = grid.sortItems,
		columnName,
		status,
		cell,
		sortString = "";
		
	if ( this.gfnIsNull(sortInfos) || this.gfnIsNull(sortItems) ) return;

	// keystring 조합
	for (var i=0; i<sortItems.length; i++) {
		columnName = sortItems[i];
		sortInfo = sortInfos[columnName];
		status = sortInfo.status;
		cell = sortInfo.refCell;
		
		// 컬럼삭제 등으로 제거될 수 있으므로 실제 column 이 존재하는지
		// 확인하여 없으면 제거해 준다.
		if ( this.gfnIsNull(cell) || grid.getBindCellIndex("body", columnName) < 0 ){
			// 컬럼정보제거
			sortItems.splice(i, 1);
			sortInfos[columnName] = null;
			delete sortInfos[columnName];
			
			i--;
		}else if ( status > 0 ) {
			sortString += (status == 1 ? "+" : "-") + columnName;
		}
	}
	
	var ds = grid.getBindDataset();
	// keystring 확인
	var curKeyString = ds.keystring;
	var groupKeyString = "";
	
	if ( curKeyString.length > 0 && curKeyString.indexOf(",") < 0 ){
		var sIndex = curKeyString.indexOf("S:");
		var gIndex = curKeyString.indexOf("G:");

		if ( sIndex > -1 ){
			groupKeyString = "";
		}else{
			if ( gIndex < 0 )
			{
				groupKeyString = "G:"+curKeyString;
			}
			else
			{
				groupKeyString = curKeyString;
			}
		}
	}else{
		var temps = curKeyString.split(",");
		var temp;
		for (var i=0,len=temps.length; i<len; i++){
			temp = temps[i];
			if ( temp.length > 0 && temp.indexOf("S:") < 0 ){
				if ( temp.indexOf("G:") < 0 )
				{
					groupKeyString = "G:"+temp;
				}else{
					groupKeyString = temp;
				}
			}
		}
	}
	
	if ( sortString.length > 0 ){
		var sortKeyString = "S:"+sortString;
		
		if ( groupKeyString.length > 0 ){
			ds.set_keystring(sortKeyString + "," + groupKeyString);
		}else{
			ds.set_keystring(sortKeyString);
		}
		
		grid.sortKeyString = sortKeyString;
	}else{		
		ds.set_keystring(groupKeyString);
		grid.sortKeyString = "";
	}

	// 정렬표시
	var type = this.MARKER_TYPE;
	var index, marker;
	for (var p in sortInfos) {
		if ( sortInfos.hasOwnProperty(p) )
		{
			sortInfo = sortInfos[p];			
			cell = sortInfo.refCell;
			if ( cell )
			{
				index = cell._cellidx;
				marker = this.gfnDecode(sortInfo.status, 1, this.MARKER[0], 2, this.MARKER[1], "");
				grid.setCellProperty( "head", index, "text", marker + " " + sortInfo.text);
			}
		}
	}
};

/**
 * Cell object 를 반환 (Grid 내부 속성이므로 get 용도로만 사용)
 * @param {Grid} grid 대상 Grid Component
 * @param {string} band 얻고자 하는 cell 의 band (head/body/summ);
 * @param {number} index 얻고자 하는 cell 의 index
 * @return {object} cell object
 */
pForm._gfnGridGetGridCellObject = function(grid, band, index)
{
	// 내부속성을 통해 얻어온다.
	var refCell;
	var format = grid._curFormat;
	if (format){
		if ( band == "head" ){
			refCell = format._headcells[index];
		}
		else if ( band == "body" ){
			refCell = format._bodycells[index];
		}
		else if ( band == "summ" || band == "summary" ){
			refCell = format._summcells[index];
		}
	}
	return refCell;
};


/**
 * @class  그리드헤드클릭이벤트 내부함수 (헤드클릭시 체크 ALL/None)
 * @param {Object} objGrid - 대상그리드
 * @param {Evnet}  e	   - 헤드클릭이벤트
 * @return  N/A
 * @example
 * this._gfnHeadCheckSelectAll(objGrid, e); //ALL CHECK
 */
pForm._gfnHeadCheckSelectAll = function (objGrid, e)
{
	if(objGrid.readonly == true) return;
	
	var sType;
	var sChk;
	var sVal;
	var sChkVal;
	var oDsObj;
	var nHeadCell  = e.cell;
	var nBodyCell;
	var nSubCnt = objGrid.getSubCellCount("head", nHeadCell);

	oDsObj  = objGrid.getBindDataset();
	
	if(oDsObj.getRowCount() < 1) return;
	
	if(objGrid.getCellCount("body") != objGrid.getCellCount("head")) {
		nBodyCell = parseInt(objGrid.getCellProperty("head", nHeadCell, "col"));
	} else {
		nBodyCell = e.cell;
	}
	sChkVal = objGrid.getCellProperty("body", nBodyCell, "text");
	sChkVal = sChkVal.toString().replace("bind:", "");
		
	// Merge한 셀이 없는 경우
	sType = objGrid.getCellProperty("head", nHeadCell, "displaytype");

	if(sType != "checkboxcontrol") {
		return;
	}

	// Head셋팅
	sVal = this.gfnNvl(objGrid.getCellProperty("head", nHeadCell, "text"), "0");

	if (sVal == "0") {
		objGrid.setCellProperty("head", nHeadCell, "text", "1");
		sChk="1";
	} else {
		objGrid.setCellProperty("head", nHeadCell, "text", "0");
		var bodyCellIndex = this._gfnGridGetBodyCellIndex(objGrid, nHeadCell);
		// body cell index 에 해당하는 바인드 컬럼명
		var columnName = this._gfnGridGetBindColumnNameByIndex(objGrid, bodyCellIndex);
		if(columnName == "gridcmmcheck") {
			 sChk="";
		}else{
			sChk="0";
		}
	}
	
	// Body셋팅
	oDsObj.set_enableevent(false);
	for(var i=0 ; i< oDsObj.rowcount ; i++) {
		oDsObj.setColumn(i, sChkVal, sChk);
	}
	oDsObj.set_enableevent(true);
};


/********************************************************************************
 * Function Name	: gfnSetGridCheckAll										*
 * Desc				: Grid Head중 check box가 있을 경우, check box 클릭		*
 *					  이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수	*
 * Parameter		: obj = Grid												*
 *					  e = GridClickEventInfo									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnSetGridCheckAll = function (obj, e)
{
	if (obj.readonly == true) 
	{
		return;
	}

	var strVal;
	var strChkCol;
	var dsObj;

	dsObj = obj.getBindDataset();

	strChkCol = this.gfnNvl(obj.getCellProperty("body", e.col, "text"), "");
	strChkCol = strChkCol.split("bind:").join("");

	var strType = obj.getCellProperty("head", e.cell, "edittype");
	
	if (strType != "checkbox") 
	{
		return;
	}

	// Head셋팅
	strVal = obj.getCellProperty("head", e.cell, "text");
	if (this.gfnIsNull(strVal)) 
	{
		strVal = "0";
	}

	if (strVal == "0") 
	{
		obj.setCellProperty("head", e.cell, "text", '1');
		strVal = "1";
	}
	else 
	{
		obj.setCellProperty("head", e.cell, "text", '0');
		strVal = "0";
	}
	
	// Body셋팅
	obj.set_enableevent(false);
	for (var i = 0; i < dsObj.getRowCount(); i++) 
	{
		dsObj.setColumn(i, strChkCol, strVal);
	}
	obj.set_enableevent(true);
}


/********************************************************************************
 * Function Name	: gfnSetGridBodyCheckAll									*
 * Desc				: Grid Head중 check box가 있을 경우, 조회된 body row의   	*
					  check box 이벤트 발생 시 확인하여 Head check box를     	*
					  check/uncheck 설정 함수									*
 * Parameter		: obj = Grid												*
 *					  e = GridClickEventInfo									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnSetGridBodyCheckAll = function (obj, e)
{
	if (obj.readonly == true) {
		return;
	}
	
	var hChk; 
	var bChk;
	var dsObj;
	dsObj = obj.getBindDataset();
	
	headChk = this.gfnNvl(obj.getCellProperty("head", e.cell, "text"), "");
	bodyChk = dsObj.findRow("CHK", "0");

	var strType = obj.getCellProperty("head", e.cell, "edittype");

	if(strType != "checkbox") {
		return;
	}
	
	// Head셋팅
	if(headChk == 1 && bodyChk > -1) {
		obj.setCellProperty("head", e.cell, "text", '0');
	}
	else if(headChk == 0 && bodyChk == -1) {
		obj.setCellProperty("head", e.cell, "text", '1');
	}
}


/********************************************************************************
 * Function Name	: gfnGrdBandFix										*
 * Desc				: Grid Head중 check box가 있을 경우, check box 클릭		*
 *					  이벤트 발생시 전체 row에 대한 check/uncheck 설정 함수	*
 * Parameter		: obj = Grid												*
 *					  e = GridClickEventInfo									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnGrdBandFix = function(grdObj,nCell)
{
	var iCnt=0;
	
    for (var j = nCell; j >= 0; j--) 
    {
        var iColCur = grdObj.getCellProperty("Head", j, "col");
        var iCell = nCell;
		
        for (var i = iCell; i >= 0; i--) 
        {
            if (grdObj.getCellProperty("Head", i, "row") == 0 
				&& iColCur == grdObj.getCellProperty("Head", i, "col")) 
            {             
                if (iCnt==0) 
                {
                    var iCol = grdObj.getCellProperty("Head", i, "col");					
                    var iSpan = grdObj.getCellProperty("Head", i, "colspan")-1;
                    var iTotCol = iCol + iSpan;                    
                    for (var k = 0; k <= iTotCol; k++)
                    {
                        grdObj.setFormatColProperty(k, "band", "left");
                    }
					for(var l = iTotCol;l<grdObj.getCellCount("head"); l++)
					{
					   grdObj.setFormatColProperty(k, "band", "body");
					}
                }
                iCnt++;
            } 
        }
    } 
};

/********************************************************************************
 * Function Name	: gfnSaveGridFormat									     	*
 * Desc				: 해당 Grid Format 저장 처리.								*
 * Parameter		: obj = Grid												*
 *					  e = GridClickEventInfo									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnSaveGridFormat = function(obj)
{
	var objApp  = nexacro.getApplication();
	var nRow    = objApp.gdsUserGridInfo.findRowExpr("USER_ID=='"+objApp.gv_userId+"'&&MENU_ID=='"+this.name+"'&&GRID_ID=='"+obj.name+"'");
	if(nRow < 0){
		nRow = objApp.gdsUserGridInfo.addRow();
	}
	
	objApp.gdsUserGridInfo.setColumn(nRow, "USER_ID"    , objApp.gv_userId);
	objApp.gdsUserGridInfo.setColumn(nRow, "MENU_ID"    , this.name);
	objApp.gdsUserGridInfo.setColumn(nRow, "GRID_ID"    , obj.name);
	objApp.gdsUserGridInfo.setColumn(nRow, "GRID_FORMAT", obj.getCurFormatString());
	
	//히든 포맷에 현재 포맷 정보 설정.
	obj.ORG_HIDDEN_FORMAT = obj.getCurFormatString();
	
	//개인화 변경 내용이 없는 경우 리턴.
	if(objApp.gdsUserGridInfo.getRowType(nRow) == Dataset.ROWTYPE_NORMAL) {
		this.alert("개인화 변경 내용이 없습니다.");
		return;
	}
	
	this.gfnGridInfoTran("saveUserGridInfo");
};

/********************************************************************************
 * Function Name	: gfnCancelGridFormat										*
 * Desc				: 해당 Grid Format 취소 처리.								*
 * Parameter		: obj = Grid												*
 *					  e = GridClickEventInfo									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnCancelGridFormat = function(obj)
{
	var objApp  = nexacro.getApplication();
	var nRow    = objApp.gdsUserGridInfo.findRowExpr("USER_ID=='"+objApp.gv_userId+"'&&MENU_ID=='"+this.name+"'&&GRID_ID=='"+obj.name+"'");

	if(nRow > -1){ 
		objApp.gdsUserGridInfo.setColumn(nRow, "GRID_FORMAT", "");
		
		var sFormat = "<Formats>"+obj.ORG_FORMAT+"</Formats>";
		
		//히든 포맷에 오리지날 포맷정보 설정.
		obj.ORG_HIDDEN_FORMAT = obj.ORG_FORMAT;
		
		//그리드 오리지날 포맷 정보 설정.
		obj.set_enableredraw(false);
		obj.set_formats(sFormat);
		obj.set_enableredraw(true);
		
		this.gfnGridInfoTran("deleteUserGridInfo");
	}
};

/********************************************************************************
 * Function Name	: gfnGridInfoTran											*
 * Desc				: Grid Format Transaction.              				    *
 * Parameter		: sMethod = serviceMethod    								*
 * Return 			: Grid Full Path											*
 ********************************************************************************/
pForm.gfnGridInfoTran = function(sMethod)
{
	var objApp 		  = nexacro.getApplication();	
	var objEnv        = nexacro.getEnvironment();
	var sSvcUrl       = (objApp.gvSystemType == "M" ? pSvcUrl : pSvcUrlW);
	var strServiceUrl = objEnv.services["svcurl"].url + sSvcUrl;
	var sArgments     = this.gfnSetGlobalVal("serviceBeanName=commonService method="+sMethod);
	this.transaction( sMethod                       	//1.strMergeSvcID
					, strServiceUrl                 	//2.strServiceUrl
					, "ds1=gdsUserGridInfo:U"           //3.inDataSet
					, "gdsUserGridInfo=gdsUserGridInfo"  //4.outDataSet
					, sArgments                     	//5.arguments
					, "fnGridCallback"				    //6.strCallbackFunc
					, false                     		//7.bAsync
					, 0			                     	//0.nDataType : 0(XML 타입), 1((Binary 타입),  2(SSV 타입) --> HTML5에서는 Binary 타입은 지원안함
					, false);                    		//0.bCompress ( default : false ) 
}

pForm.fnGridCallback = function(svcID, errorCode, errorMsg)
{
	if(errorCode < 0) {    
		this.alert(errorMsg);
	}else{
		// TODO
		switch(svcID){
			case "saveUserGridInfo": 
				this.alert("개인화 저장되었습니다.");
				break;
			
			case "deleteUserGridInfo": 
				this.alert("개인화 삭제되었습니다.");
				break;
		}
	}
}

/********************************************************************************
 * Function Name	: gfnGetGridFormat											*
 * Desc				: 해당 Form에 Grid Format 가져오기							*
 * Parameter		: obj = Form Object											*
 *																				*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnGetGridFormat = function (type)
{
	var obj = this;
	var allObject = obj.all;
	
	for(var i=0; i<allObject.length; i++) {
 		if(allObject[i] == "[object Grid]") {

			var gridObj = allObject[i];
 			var strGrid = gridObj.id;
			var strKey = "";
			var strKeyOrg = "";
			
			if(type == "format") {
				strKey = obj.name + "_" + gridObj.id;
				strKeyOrg = obj.name + "_" + gridObj.id + "_ORG";
			} else if(type == "hidden"){
				strKey = obj.name + "_hidden_" + gridObj.id;
				strKeyOrg = obj.name + "_hidden_" + gridObj.id + "_ORG";
			}
	
			var gridFormat = nexacro.getPrivateProfile(strKey);
			var gridFormatOrg = nexacro.getPrivateProfile(strKeyOrg);
			
			if (!this.gfnIsNull(gridFormat)) {
				gridObj.set_formats(gridFormat);
			} else {
				if(this.gfnIsNull(gridFormatOrg)) {
					gridObj.set_formats(gridObj.getFormatString());
				} else {
					gridObj.set_formats(gridFormatOrg);
				}
			}
 		}
	}
};


/********************************************************************************
 * Function Name	: gfnFildRow												*
 * Desc				: 키워드 해당하는 정보 찾기 								*
 * Parameter		: obj = Grid Object  										*
 *					  strCategory = 찾을 컬럼 ID/카테고리						*
 *					  strKeyword = 찾을 키워드									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnFildRow = function(obj, strCategory, strKeyword)
{
	var bindDs = this.objects[obj.binddataset];
	var nRow = bindDs.findRow(strCategory, strKeyword);
	
	obj.selectRow(nRow, true);
	
	if(nRow == -1)
		alert("\"" + strKeyword + "\" not found.");

};

/********************************************************************************
 * Function Name	: gfnFildRowAs												*
 * Desc				: 키워드 해당하는 정보 Like% 검색							*
 * Parameter		: obj = Grid Object  										*
 *					  strCategory = 찾을 컬럼 ID/카테고리						*
 *					  strKeyword = 찾을 키워드									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnFildRowAs = function(obj, dsObj, strCategory, strKeyword)
{
	var nRow = dsObj.findRowAs(strCategory, strKeyword);
	var nCell = obj.getBindCellIndex("body", strCategory);
	
	dsObj.set_rowposition(nRow);
	obj.setCellPos(nCell);
	
	if(nRow == -1)
		alert("\"" + strKeyword + "\" not found.");
};

/********************************************************************************
 * Function Name	: gfnFildRowExpr											*
 * Desc				: 조건식에 해당하는 정보 찾기 							*
 * Parameter		: obj = Grid Object  										*
 *					  strKeyword = 찾을 조건식									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnFildRowExpr = function(obj, strKeyword)
{
	var bindDs = this.objects[obj.binddataset];
	var nRow = bindDs.findRowExpr(strKeyword);
	
	obj.selectRow(nRow, true);
	
	if(nRow == -1)
		alert("\"" + strKeyword + "\" not found.");	
};

pForm.gfnCopyPaste = function (grid)
{
	if (system.navigatorname == "nexacro" || system.navigatorname == "IE" ) {
		grid.setEventHandler("onkeydown", this.gfnCopyGridCellData1(this), this);
	} else {	
		var objTA = document.createElement("textarea");
		document.body.appendChild(objTA);
		grid.setEventHandler("onkeydown", this.gfnCopyGridCellData2(this, objTA), this);
	}
};

pForm.gfnCopyGridCellData1 = function (pThis)
{
	return function(obj, e) 
	{
		if (e.ctrlkey && !e.shiftkey && !e.altkey)
		{			
			if (e.keycode == 67)	// Ctrl + C => 복사  	
			{					
				var rtnStr = this.gfnMakeData(obj);
				
				//copy selected data to clipboard
				system.clearClipboard();						
				system.setClipboard("CF_TEXT", rtnStr); 
			} 
			else if(e.keycode == 86)	// Ctrl + V		 => 붙여넣기 	
			{	
				var bindDs = this.objects[obj.binddataset];
				var a = system.getClipboard("CF_TEXT");
				this.gfnImportExcel(obj,a);
				/*
				var rowArr = a.split(/\n/g);
				
				for(var rowIdx = 0; rowIdx < rowArr.length - 1; rowIdx++){
					var colArr = rowArr[rowIdx].split(/\t/g);
					var nRow = nexacro.toNumber(obj.selectstartrow) + nexacro.toNumber(rowIdx);
					var rowCnt = nexacro.toNumber(bindDs.rowcount);
				
					if(nRow < rowCnt) {
						for(var colIdx = 0; colIdx < colArr.length; colIdx++){
							var selectCol =  nexacro.toNumber(obj.selectstartcol);
							if(selectCol == -1) selectCol = obj.currentcell;
							var nCell = selectCol + nexacro.toNumber(colIdx);
							var cellCnt = nexacro.toNumber(obj.getCellCount("body"));
							
							if(nCell < cellCnt) {
								bindDs.setColumn(nRow, nCell, colArr[colIdx]);
							}
						}
					}
				}
				*/
			} 
			else if(e.keycode == 90) 			// Ctrl + Z => 이전값 복원  
			{
				this.gfnGridCellReset(obj);
			}
		}
	}
};

pForm.clipboardTx = "";
pForm.gfnCopyGridCellData2 = function (pThis, objTA)
{
	return function(obj, e) 
	{
		//ctrl=17, shift=16, alt=18
		//// alphabet "c"= 67
		if (e.ctrlkey && !e.shiftkey && !e.altkey)
		{			
			if (e.keycode == 67)	// Ctrl + C => 복사  	
			{
				var rtnStr = this.gfnMakeData(obj);
				
				//after copying the selected data to the textarea, select it.
				objTA.value = rtnStr;
				clipboardTx = rtnStr;
				objTA.select();
			}
			else if(e.keycode == 86)	// Ctrl + V		 => 붙여넣기 
			{
				var bindDs = this.objects[obj.binddataset];
				var a = clipboardTx;
				this.gfnImportExcel(obj,a);
				/*
				var rowArr = a.split(/\n/g);

				for(var rowIdx = 0; rowIdx < rowArr.length - 1; rowIdx++){
					var colArr = rowArr[rowIdx].split(/\t/g);
					var nRow = nexacro.toNumber(obj.selectstartrow) + nexacro.toNumber(rowIdx);
					var rowCnt = nexacro.toNumber(bindDs.rowcount);

					if(nRow < rowCnt) {
						for(var colIdx = 0; colIdx < colArr.length; colIdx++){
							var selectCol =  nexacro.toNumber(obj.selectstartcol);
							if(selectCol == -1) selectCol = obj.currentcell;
							var nCell = selectCol + nexacro.toNumber(colIdx);
							var cellCnt = nexacro.toNumber(obj.getCellCount("body"));
							
							if(nCell < cellCnt) {
								bindDs.setColumn(nRow, nCell, colArr[colIdx]);
							}
						}
					}
				}
				*/
			}
			else if(e.keycode == 90) 			// Ctrl + Z => 이전값 복원  
			{
				this.gfnGridCellReset(obj);
			}
		}
		
	}
};


 /***********************************************************************************************
 * @function	: grdMain_onkeydown
 * @description	: FORM KeyEventInfo
 * @param		: obj	- nexacro.Grid
 * @return N/A
/***********************************************************************************************/
pForm.gfnImportExcel = function(obj,data) {

	var currentRow  = obj.currentrow;
	var currentCell = obj.currentcell;
	
	//var data = system.getClipboard("CF_TEXT");
	this.gfnImportExcelProc(data,obj.currentrow,obj.currentcell,obj);
}

/***********************************************************************************************
 * @function	: fnImportExcel
 * @description	: 엑셀 붙여넣기
 * @param		: data	  - String
 * @param		: row	  - Number
 * @param		: startCell - Number
 * @return N/A
/***********************************************************************************************/
pForm.gfnImportExcelProc = function(data,row,startCell,grid) {
	
	var dsObj = this.objects[grid.binddataset];
	
	// enable event
	dsObj.set_enableevent(false);
	grid.set_binddataset('');
	grid.set_enableevent(false);
	
	// start row
	var startRow  = ( row === -1 ? dsObj.addRow() : row );
	
	// end cell number
	var endCellNumer = grid.getCellCount('body');
	// startCell 1 : 0 cell = number
	var startCol = (startCell <= 0 ? 1 : startCell);
	// excel row split
	var excelList = data.split(/\n/g);
	// all row
	var allRowCount = excelList.length + startRow -1;
	var nowDsCount  = dsObj.rowcount;
	var cntGap      = allRowCount - nowDsCount;
	// 디버깅을 위한 선처리
	if( startCol === 1 && cntGap > 0 )
		for( var x = 0; x < cntGap; x++ ) dsObj.addRow();
	
	// 복사후 붙여넣기 부분은 최초 값이 전체 복사내역이 들어가는 경우가 발생하므로 지워준다.
	// 비정상 종료가 발생하여 Cell 값을 마지막에 변경한다.
	var lastSetColumnId = '';
	var lastSetColumnVl = '';
	
	// dataSet Object.set
	for( var idx = 0; idx < excelList.length; idx++ ) {
		var cellList = excelList[idx].split(/\t/g);
		if( this.gfnIsNull(excelList[idx]) ) break;
		
		// CellList index
		var cellCnt  = 0;
		for( var cellNumber = startCol; cellNumber < endCellNumer; cellNumber++ ) {
			var sColId = grid.getCellProperty('body',cellNumber,'text');
			var sColEt = grid.getCellProperty('body',cellNumber,'edittype');
			
			// none option은 제외한다.
			if( sColEt === 'none' ) continue;
			
			sColId = sColId.replace('bind:','');
			dsObj.setColumn(startRow,sColId,cellList[cellCnt++]);
			if( cellNumber === startCol && idx === 0 ) {
				lastSetColumnId = sColId;
				lastSetColumnVl = cellList[0];
			}
			// 단일 cell copy시 나머지 cell text는 무시해야한다.
			if( cellCnt === cellList.length ) break;
		}
		// dataSet rowindex++
		startRow++;
	}
	// first cell
	dsObj.setColumn(row,lastSetColumnId,lastSetColumnVl);
	
	// enable event
	dsObj.set_enableevent(true);
	grid.set_enableevent(true);
	grid.set_binddataset(dsObj.id);
}




/*********************************************************************
* Funtion Name : gfnGridCellReset
* Desctiption  : 그리드의 선택된 영역을 Reset 한다.
* parameter    : objGrid  = Grid Object
* return       : None   
**********************************************************************/
pForm.gfnGridCellReset = function(objGrid) 
{
	var objDataset = this.objects[objGrid.binddataset];
	var strColID;
	var nAreaStartRow;
	var nAreaEndRow;
	var nAreaStartCol;
	var nAreaEndCol;

	if(objGrid.selecttype != "row" && objGrid.selecttype != "multirow") {
		nAreaStartRow = objGrid.selectstartrow;
		nAreaEndRow   = objGrid.selectendrow;
		nAreaStartCol = objGrid.selectstartcol;
		nAreaEndCol   = objGrid.selectendcol;

	} else {
		nAreaStartRow = objGrid.selectstartrow;
		nAreaEndRow   = objGrid.selectendrow;
		nAreaStartCol = objGrid.getCellProperty("body",objGrid.currentcell, "col");
		nAreaEndCol   = objGrid.getCellProperty("body",objGrid.currentcell, "col");
	}	

    // FireEvnet Default값은  False로 한다.
    var boolFireEvent = false;
    
    // Form에 DataSet의 FireEvnet변수 설정값이 있을 경우 해당변수의 값으로 설정한다.
	if(objDataset.enableevent != true) objDataset.set_enableevent(boolFireEvent);
	
	//objGrid.set_enableredraw(false);
    
	// DataSet컬럼중 Record 상태표시 컬럼이 있는지 체크한다.
	var intGridMarkCol = objDataset.getColIndex(this.COM_GRID_MARK_COL); 
	
	var strRowTitle;
	for(var nRow = nAreaStartRow; nRow <= nAreaEndRow; nRow++) {

		for(var nCol = nAreaStartCol;  nCol <= nAreaEndCol;  nCol++) {

			strColID = this.gfnGridGetColId(objGrid, nCol);
			
			objDataset.setColumn(nRow, strColID, objDataset.getOrgColumn(nRow, strColID));
		}
		
		// FireEvent가 False일 경우 OnColumnChanged 이벤트가 발생하지 않으므로 
		// Record 상태를 체크하여 상태표시 컬럼에 값을 Setting 한다.
		if(boolFireEvent == false && objDataset.getRowType(nRow) == "update" && intGridMarkCol != -1) {
			// DataSet에 Record 상태표시 컬럼의 값을 제외하고 체크하기 위해 Record 상태표시 컬럼값을 초기화한다. 
			objDataset.setColumn(nRow, this.COM_GRID_MARK_COL , "");
			
			if( objDataset.getRowType(nRow) == "update" ) 
			{
				// Record 상태표시 컬럼에 update마크값('V')를 SET한다.
				objDataset.setColumn(nRow, this.COM_GRID_MARK_COL , "v");
			}
		}

	}
    objDataset.set_enableevent(true)
	//objGrid.set_enableredraw(true);
}

pForm.gfnMakeData = function (obj)
{
	var sBody = "";
	var sSpr = "	";	//tab
	var nStartrow = obj.selectstartrow;
	var nEndrow = obj.selectendrow;
	var nStartCol = obj.selectstartcol;
	var nEndCol = obj.selectendcol;
					
	//case of selecttype is row or multirow
	var nLoop = nStartrow.length;
	
	if(nStartCol == -1 && nEndCol == -1)
	{
		nStartCol = 0;
		nEndCol = obj.getFormatColCount()-1;
	}
				
	//copy cell data from selected cell
	for(var k=0; k < nLoop; k++)
	{
	
		for (var i = nStartrow[k]; i <= nEndrow[k]; i++) 
		{			
			for (var j = nStartCol; j <= nEndCol; j++) 
			{
				if (j < nEndCol) 
				{
					sBody += obj.getCellText(i, j) + sSpr;
				} 
				else 
				{
					sBody += obj.getCellText(i, j) + "\r\n";
				}
			}
		}		
		
	}

	return sBody;
};

pForm.gfnMakeData2 = function (obj)
{
	var sBody = "";
	var sSpr = "	";	//tab
	var nStartrow = obj.selectstartrow;
	var nEndrow = obj.selectendrow;
	var nStartCol = obj.selectstartcol;
	var nEndCol = obj.selectendcol;
	var bindDs = this.objects[obj.binddataset];
					
	//case of selecttype is row or multirow
	var nLoop = nStartrow.length;
	
	if(nStartCol == -1 && nEndCol == -1)
	{
		nStartCol = 0;
		nEndCol = obj.getFormatColCount()-1;
	}
				
	//copy cell data from selected cell
	for(var k=0; k < nLoop; k++)
	{
	
		for (var i = nStartrow[k]; i <= nEndrow[k]; i++) 
		{			
			for (var j = nStartCol; j <= nEndCol; j++) 
			{
				var col_id = obj.getCellProperty("body", j, "text");
				col_id = col_id.slice(5);
				
				if (j < nEndCol) 
				{
					
					sBody += bindDs.getColumn(i, col_id) + sSpr;
				} 
				else 
				{
					sBody += bindDs.getColumn(i, col_id) + "\r\n";
				}
			}
		}		
		
	}
	
	return sBody;
};

/********************************************************************************
 * Function Name	: gfnHiddenGridColumn										*
 * Desc				: 해당 Grid Column hidden 처리.								*
 * Parameter		: obj = Grid												*
 *					  e = GridClickEventInfo									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnHiddenGridColumn = function(obj, nCell)
{
	obj.setFormatColProperty(nCell, "size", 0);
};

/********************************************************************************
 * Function Name	: gfnHiddenCancelGridColumn										*
 * Desc				: 해당 Grid Column hidden 취소.								*
 * Parameter		: obj = Grid												*
 *					  e = GridClickEventInfo									*
 * Return 			: 															*
 ********************************************************************************/
pForm.gfnHiddenCancelGridColumn = function(obj)
{
	var sFormat = "<Formats>"+obj.ORG_HIDDEN_FORMAT+"</Formats>";
	
	obj.set_enableredraw(false);
	obj.set_formats(sFormat);
	obj.set_enableredraw(true);
};



/*********************************************************************
* Funtion Name : gfnGridRButtonInit 
* Desctiption  : 그리드에서 마우스 오른쪽버튼 클릭시 Context Menu 초기화 처리 
* parameter    : objGrd       = Grid Object
*              : boolCopy     = 복사       	Menu 사용여부 // default false
*              : boolPaste    = 붙여넣기   Menu 사용여부 // default false
*              : boolFind     = 찾기       	Menu 사용여부 // default false
*              : boolFilter   = 소트       	Menu 사용여부 // default false
*              : boolFilter   = 필터       	Menu 사용여부 // default false
*              : boolColFix   = 틀고정     Menu 사용여부 // default false
*              : boolFormatSve= 포맷저장   Menu 사용여부 // default false
*              : boolFormatCan= 포맷초기화	Menu 사용여부 // default false
*              : boolExcel	  = 엑셀		Menu 사용여부 // default false
*              : boolHide 	  = 숨기기	  	Menu 사용여부 // default false
* return       : None   
**********************************************************************/
pForm.gfnGridRButtonInit = function (objGrd)
{
	//그리드 ORG 포맷 정보.
	objGrd.ORG_FORMAT = objGrd.getCurFormatString();
	
	//헤더 공통 메뉴
	this.gfnGridHeadRbutton(objGrd);
	//Body 공통 메뉴
	this.gfnGridBodyRbutton(objGrd);
	
	//마우스 오른쪽 메뉴 이벤트 활성화.
	this.gfnSetGridOnRButtonDown(objGrd);
};

pForm.gfnGridHeadRbutton = function (objGrd)
{
	var boolFormatSve =  true;
	var boolFormatCan =  true;
	var boolHide 	  =  true;
	var boolFilter    = this.gfnNvl(objGrd.UserFilter, false); // 기본값은 false
	
	var intCntMenu  = 0; // 그리드별 Context Menu수
	var objApp  	= nexacro.getApplication();
	
	// 그리드 Context Menu를 사용하는 그리드의 갯수 
	var nIndex  = this.gfnGridGetGridIndex(objGrd, this.GRD_ARR_STR_MENU_GRID);
	
	if(nIndex == -1) nIndex = this.GRD_ARR_STR_MENU_GRID.length;
	
	// Context Menu를 사용하는 그리드 ID를 기록한다.
	this.GRD_ARR_STR_MENU_GRID[nIndex] = this.name + "_" + objGrd.id;
	
	// 그리드 Context Menu 데이터 셋을 생성한다.
	if(this.isValidObject(this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex]) == false) {
		var dsObj = new Dataset;
		dsObj.load();
		this.addChild("cds_griMenu"+nIndex, dsObj);

		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex] = dsObj;
 		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("level"  ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("text"   ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("id"     ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("status" ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("image"  ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("yn_proc","STRING",   1);
	}
	
	var objDs = this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex];
	
	// 포맷저장 Menu 설정
    if(boolFormatSve) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , (objApp.gv_lang == "ko" ? "개인화 등록" : "Save Format"));
		objDs.setColumn(objDs.rowposition, "id"    , "60");
		objDs.setColumn(objDs.rowposition, "status", boolFormatSve);

		// Grid 설정 값이 있으면 Setup
		this.gfnGetGridFormat("format");
    }
   
	// 포맷초기화 Menu 설정
    if(boolFormatCan) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , (objApp.gv_lang == "ko" ? "초기화" : "Reset Format"));
		objDs.setColumn(objDs.rowposition, "id"    , "61");
		objDs.setColumn(objDs.rowposition, "status", boolFormatCan);
		
    }
	
	// 숨기기 Menu 설정
    if(boolHide) { 
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , "Hide");
		objDs.setColumn(objDs.rowposition, "id"    , "80");
		objDs.setColumn(objDs.rowposition, "status", boolHide);
		
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , "Hide(Cancel)");
		objDs.setColumn(objDs.rowposition, "id"    , "81");
		objDs.setColumn(objDs.rowposition, "status", boolHide);
    }
	
	// Grid.UserFilter true
	if (boolFilter==true || boolFilter=="true")
	{
		boolFilter = false;
	
		// 필터를 호출하는 공통함수가 있는 경우에만 필터항목 활성화 하도록 한다.
		var objFunc1 = objGrd.getEventHandler( "onheadclick"   , 0);
		var objFunc2 = objGrd.getEventHandler( "onheaddblclick", 0);
		
		if (!this.gfnIsNull(objFunc1)) 
		{
			if (objFunc1.toString().indexOf("gfnGridPopupDivFilter") > -1)
				boolFilter = true;
		}
		if (!this.gfnIsNull(objFunc2))
		{
			if (objFunc2.toString().indexOf("gfnGridPopupDivFilter") > -1)
				boolFilter = true;
		}
		
		// 필터 PopupMenu 설정
		if (boolFilter)
		{
			intCntMenu++;
			objDs.insertRow(0);
			objDs.setColumn(objDs.rowposition, "level" , "0"		);
			objDs.setColumn(objDs.rowposition, "text"  , "Filter"	);
			objDs.setColumn(objDs.rowposition, "id"    ,  "40"		);
			objDs.setColumn(objDs.rowposition, "status", boolFilter	);
			
			// Grid Filter 초기화 
			this.gfnGridPopupDivFilterInit(objGrd);
		}
	}
	
	objDs.set_keystring("S:+id"); 

// 	사용할 Context Menu가 있을 경우만 그리드에서 마우스 오른쪽버튼 이벤트 처리
//  if (intCntMenu > 0) {
//        this.gfnSetGridOnRButtonDown(objGrd);
//  }
};

pForm.gfnGridBodyRbutton = function (objGrd)
{
	var boolCopy = true;
	var boolExcel = true;
	
	var intCntMenu  = 0; // 그리드별 Context Menu수
	var objApp  	= nexacro.getApplication();
	
	// 그리드 Context Menu를 사용하는 그리드의 갯수 
	var nIndex  = this.gfnGridGetGridIndex(objGrd, this.GRD_ARR_STR_MENU_GRID_BODY);
	
	if(nIndex == -1) nIndex = this.GRD_ARR_STR_MENU_GRID_BODY.length;
	
	// Context Menu를 사용하는 그리드 ID를 기록한다.
	this.GRD_ARR_STR_MENU_GRID_BODY[nIndex] = this.name + "_" + objGrd.id;
	
	// 그리드 Context Menu 데이터 셋을 생성한다.
	if(this.isValidObject(this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex]) == false) {
		var dsObj = new Dataset;
		dsObj.load();
		this.addChild("cds_griBodyMenu"+nIndex, dsObj);

		this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex] = dsObj;
 		this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex].addColumn("level"  ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex].addColumn("text"   ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex].addColumn("id"     ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex].addColumn("status" ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex].addColumn("image"  ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex].addColumn("yn_proc","STRING", 1);
	}
	
	var objDs = this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex];
	
	// 셀 복사
    if(boolCopy) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , (objApp.gv_lang == "ko" ? "복사" : "Copy"));
		objDs.setColumn(objDs.rowposition, "id"    ,  "10");
		objDs.setColumn(objDs.rowposition, "status", boolCopy);
    }
	
	// Excel Menu 설정
    if(boolExcel) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , "Excel");
		objDs.setColumn(objDs.rowposition, "id"    , "70");
		objDs.setColumn(objDs.rowposition, "status", boolExcel);
		
    }
	
	objDs.set_keystring("S:+id"); 

    //사용할 Context Menu가 있을 경우만 그리드에서 마우스 오른쪽버튼 이벤트 처리
//     if(intCntMenu > 0) {
//        this.gfnSetGridOnRButtonDown(objGrd);
//    }
};

pForm.gfnGridRButtonInit_back = function(objGrd, boolFind, boolSort, boolFilter, boolColFix, boolFormatSve, boolFormatCan, boolExcel, boolHide)
{
	objGrd.ORG_FORMAT = objGrd.getCurFormatString();
	
	var intCntMenu  = 0; // 그리드별 Context Menu수
	var objApp  	= nexacro.getApplication();
	
	//defalut 설정.
	boolFind = this.gfnNvl(boolFind, false);
	boolSort = this.gfnNvl(boolSort, false);
	boolFilter = this.gfnNvl(boolFilter, false);
	boolColFix = this.gfnNvl(boolColFix, false);
	boolFormatSve = this.gfnNvl(boolFormatSve, true);
	boolFormatCan = this.gfnNvl(boolFormatCan, true);
	boolExcel = this.gfnNvl(boolExcel, false);
	boolHide = this.gfnNvl(boolHide, false);
	
	
	// 그리드 Context Menu를 사용하는 그리드의 갯수 
	var nIndex  = this.gfnGridGetGridIndex(objGrd, this.GRD_ARR_STR_MENU_GRID);
	
	if(nIndex == -1) nIndex = this.GRD_ARR_STR_MENU_GRID.length;

	// Context Menu를 사용하는 그리드 ID를 기록한다.
	this.GRD_ARR_STR_MENU_GRID[nIndex] = this.name + "_" + objGrd.id;

	// 그리드 Context Menu 데이터 셋을 생성한다.
	if(this.isValidObject(this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex]) == false) {
		var dsObj = new Dataset;
		dsObj.load();
		this.addChild("cds_griMenu"+nIndex, dsObj);

		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex] = dsObj;
 		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("level"  ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("text"   ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("id"     ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("status" ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("image"  ,"STRING", 256);
		this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].addColumn("yn_proc","STRING", 1);
	}
	
	var objDs = this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex];

	// 찾기 설정
    if(boolFind) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , "Find");
		objDs.setColumn(objDs.rowposition, "id"    ,  "20");
		objDs.setColumn(objDs.rowposition, "status", boolFind);
    }
    
	// 소트 Menu 설정
    if(boolSort) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , "Multi Sort");
		objDs.setColumn(objDs.rowposition, "id"    ,  "30");
		objDs.setColumn(objDs.rowposition, "status", boolSort);
    }
    
	// 틀고정 Menu 설정
    if(boolColFix) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level"  , "0");
		objDs.setColumn(objDs.rowposition, "text"   , "Fix Column");
		objDs.setColumn(objDs.rowposition, "id"     , "50");
		objDs.setColumn(objDs.rowposition, "status" , boolColFix);
		objDs.setColumn(objDs.rowposition, "yn_proc", "N");
    }

	// 포맷저장 Menu 설정
    if(boolFormatSve) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , (objApp.gv_lang == "ko" ? "개인화 등록" : "Save Format"));
		objDs.setColumn(objDs.rowposition, "id"    , "60");
		objDs.setColumn(objDs.rowposition, "status", boolFormatSve);

		// Grid 설정 값이 있으면 Setup
		this.gfnGetGridFormat("format");
    }
   
	// 포맷초기화 Menu 설정
    if(boolFormatCan) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , (objApp.gv_lang == "ko" ? "초기화" : "Reset Format"));
		objDs.setColumn(objDs.rowposition, "id"    , "61");
		objDs.setColumn(objDs.rowposition, "status", boolFormatCan);
		
    }
 
	// Excel Menu 설정
    if(boolExcel) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , "Excel");
		objDs.setColumn(objDs.rowposition, "id"    , "70");
		objDs.setColumn(objDs.rowposition, "status", boolExcel);
		
    }

	// 숨기기 Menu 설정
    if(boolHide) {
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , "Hide");
		objDs.setColumn(objDs.rowposition, "id"    , "80");
		objDs.setColumn(objDs.rowposition, "status", boolHide);
		
        intCntMenu++;
		objDs.insertRow(0);
		objDs.setColumn(objDs.rowposition, "level" , "0");
		objDs.setColumn(objDs.rowposition, "text"  , "Hide(Cancel)");
		objDs.setColumn(objDs.rowposition, "id"    , "81");
		objDs.setColumn(objDs.rowposition, "status", boolHide);
    }
	
    objDs.set_keystring("S:+id"); 

    //사용할 Context Menu가 있을 경우만 그리드에서 마우스 오른쪽버튼 이벤트 처리
    if(intCntMenu > 0) {
       this.gfnSetGridOnRButtonDown(objGrd);
   }
   
   //Copy/Paste 공통 기능. gfnImportExcel 참조하여 각자개발
	//this.gfnCopyPaste(objGrd);
};

/*********************************************************************
* Funtion Name : gfnSetGridOnRButtonDown 
* Desctiption  : 그리드에서 마우스 오른쪽버튼 이벤트 처리시 
*                원본 이벤트가 있을 경우 해당 함수명을 폼 변수에 저장
* parameter    : objGrd       = Grid Object
* return       : None   
**********************************************************************/
pForm.gfnSetGridOnRButtonDown = function(objGrd)
{	
	//원본 이벤트 함수가 존재하는 경우 어떻게 처리 할지 고민 필요.
	
	
	objGrd.setEventHandler("onrbuttondown", this.gfnGridOnRButtonDown, this);
};


/*********************************************************************
* Funtion Name : gfnGridOnRButtonDown 
* Desctiption  : 그리드에서 마우스 오른쪽버튼 클릭시 Context Menu 처리 
* parameter    : obj       = Grid Object
*                e         = Object Event
* return       : None   
**********************************************************************/
pForm.gfnGridOnRButtonDown = function(obj,e)
{
	var formObj = obj.parent;
	
	//그리드 헤더 이벤트
	if(e.row < 0) 
	{
		var nIndex  = this.gfnGridGetGridIndex(obj, this.GRD_ARR_STR_MENU_GRID);	
		this.GRID_MENU_CURRENT_INDEX = nIndex;
		this.GRID_MENU_CURRENT_CELL  = e.col;
		
		// 원본 이벤트가 있을 경우 해당 이벤트를 먼저 처리 한다.
		if (!this.gfnIsNull(this.lookupFunc(obj.id + "_onrbuttondown")))
		{
			var strExpr = "this." + obj.id + "_onrbuttondown" + "('" + obj + "', '" + e + "')";
			eval(strExpr);
		}

		if (formObj.isValidObject("PopupMenuHead") != true) 
		{
			var objComp = new PopupMenu();  
			objComp.init( "MenuItem", 30, 120, 196, 46 );
			objComp.set_captioncolumn("text");
			objComp.set_enablecolumn("status");
			objComp.set_idcolumn("id");
			objComp.set_levelcolumn("level");
			objComp.set_innerdataset(this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].id);
			objComp.setEventHandler("onmenuclick", this.gfnGridOnTrackPopupGridMenu, this);
			// Add Object to Parent Form  
			formObj.addChild("PopupMenuHead", objComp); 
			objComp.show();
		}
		else
		{
			//  초기화 후 다시 바인딩
			formObj.PopupMenuHead.set_innerdataset("");
			formObj.PopupMenuHead.set_innerdataset(this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].id);
		}
		
		//오른쪽 마우스 버튼 클릭시 이벤트  
		formObj.PopupMenuHead.trackPopupByComponent(obj, e.canvasx, e.canvasy);
		//TrackPopupMenu(this.GRD_ARR_OBJ_DATASET_GRID_MENU[nIndex].id , "level","id", "text", "status","",nPosX ,nPosY , "gfnGridOnTrackPopupGridMenu", obj, nRow, nCell);
	} 
	//그리드 Body 이벤트
	else 
	{
		var nIndex  = this.gfnGridGetGridIndex(obj, this.GRD_ARR_STR_MENU_GRID_BODY);	
		this.GRID_BODY_MENU_CURRENT_INDEX = nIndex;
		this.GRID_BODY_MENU_CURRENT_CELL = e.cell;
		this.GRID_BODY_MENU_CURRENT_ROW  = e.row;
		
		// 원본 이벤트가 있을 경우 해당 이벤트를 먼저 처리 한다.
		if (!this.gfnIsNull(this.lookupFunc(obj.id + "_onrbuttondown")))
		{
			var strExpr = "this." + obj.id + "_onrbuttondown" + "('" + obj + "', '" + e + "')";
			eval(strExpr);
		}

		if(formObj.isValidObject("PopupMenuBody") != true) {
			var objComp = new PopupMenu();  
			objComp.init( "MenuItem", 30, 120, 196, 46 );
			objComp.set_captioncolumn("text");
			objComp.set_enablecolumn("status");
			objComp.set_idcolumn("id");
			objComp.set_levelcolumn("level");
			objComp.set_innerdataset(this.GRD_ARR_OBJ_DATASET_GRID_BODY_MENU[nIndex].id);
			objComp.setEventHandler("onmenuclick", this.gfnGridOnTrackPopupGridBodyMenu, this);
			// Add Object to Parent Form  
			formObj.addChild("PopupMenuBody", objComp); 
			objComp.show();
		}

		//오른쪽 마우스 버튼 클릭시 이벤트  
		formObj.PopupMenuBody.trackPopupByComponent(obj, e.canvasx, e.canvasy);
	}
};

/*********************************************************************
* Funtion Name : gfnGridOnTrackPopupGridBodyMenu 
* Desctiption  : 그리드 Body에서 우측 버튼 클릭하여 메뉴 클릭시 호출되는 함수
* parameter    : obj        = PopupMenu Object
*                e         = 클릭한 Context MenuClickEventInfo
* return       : None   
**********************************************************************/
pForm.gfnGridOnTrackPopupGridBodyMenu = function (obj,e)
{
	trace("=== 그리드 body 메뉴 이벤트 ===");
	var sGridID = this.GRD_ARR_STR_MENU_GRID_BODY[this.GRID_BODY_MENU_CURRENT_INDEX].replace(this.name + "_", "");
	var objGrid = this.gfnGetComponentObject(this, sGridID);
	switch(e.id){
		case "10" : // Copy
			this.gfnGridCellTextCopy(objGrid);
			break;
		case "70" : // excel download
			this.gfnExcelExport(objGrid, ""); 
			break;
		
		default	: break;
	}

};

pForm.gfnGetComponentObject = function(obj, sCompId)
{
	var arrComp = obj.components;
	var nLength = arrComp.length;
	for(var i=0; i<nLength; i++){
		if (arrComp[i] instanceof nexacro.Div){
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.gfnIsNull(arrComp[i].url)){
				var objComp = this.gfnGetComponentObject(arrComp[i].form, sCompId); //재귀함수
				if(objComp instanceof nexacro.Grid){
					return objComp;
				}
			}
		}else if (arrComp[i] instanceof nexacro.Tab){
			var nPages = arrComp[i].tabpages.length;
			for (var j=0; j<nPages;j++){
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.gfnIsNull(arrComp[i].tabpages[j].url)){
					var objComp = this.gfnGetComponentObject(arrComp[i].tabpages[j].form, sCompId); //재귀함수
					if(objComp instanceof nexacro.Grid){
						return objComp;
					}
				}
			}
		}
		
		if (arrComp[i] instanceof nexacro.Grid){
			if(arrComp[i].visible && arrComp[i].name == sCompId){
				return arrComp[i];
			}
		}
	}
}

/*********************************************************************
* Funtion Name : gfnGridCellTextCopy 
* Desctiption  : 그리드 Body에서 Cell Text를 복사한다.
* parameter    : obj        = Grid Object
* return       : None   
**********************************************************************/
pForm.gfnGridCellTextCopy = function(obj)
{
	var sCopyVal = obj.getCellText(this.GRID_BODY_MENU_CURRENT_ROW, this.GRID_BODY_MENU_CURRENT_CELL);
	var sBrowser = system.navigatorname;
	if( sBrowser == "nexacro" || sBrowser == "IE"){
		system.clearClipboard();
		system.setClipboard("CF_TEXT", sCopyVal);
	}else{
		var ta            = document.createElement('textarea');
		ta.id             = "cellCopy";
		ta.style.position = 'absolute';
		ta.style.left     = '-1000px';
		ta.style.top      = document.body.scrollTop + 'px';
		ta.value          = sCopyVal;
		
		document.body.appendChild(ta);
		ta.select();
		document.execCommand("copy");
		document.body.removeChild(ta);
	}
}

/*********************************************************************
 * Function Name  : gfnGridGetGridIndex 
 * Description    : Array에 담겨있는 Grid의 인덱스를 Return 
 * Parameter      : 1) obj	        - Grid 또는 Dataset Object 
 *                  2) arrGridList	- Grid가 담겨있는 Array 
 * Return         : 인덱스(Number) 
 * ex) gfnGridGetGridIndex(obj, GRD_ARR_STR_FORMAT_GRID_ID); 
**********************************************************************/
pForm.gfnGridGetGridIndex = function(obj,arrGridList)
{
	var nRtnIdx = -1;
	var findNm = this.name + "_" + obj.id;
	
	if(obj.valueOf() instanceof Grid) {
		for(var i = 0; i < arrGridList.length; i++) {
			if(findNm == arrGridList[i]) {
				nRtnIdx = i;
				i = arrGridList.length;
			}
		}
	} else if(obj.valueOf() instanceof Dataset) {
		for(var i = 0; i < arrGridList.length; i++) {
			if(findNm == this.components[arrGridList[i]].binddataset) {
				nRtnIdx = i;
				i = arrGridList.length;
			}
		}
	}
	
	return nRtnIdx;
};

/*********************************************************************
* Funtion Name : gfnGridOnTrackPopupGridMenu 
* Desctiption  : 그리드에서 우측 버튼 클릭하여 메뉴 클릭시 호출되는 함수
* parameter    : obj        = PopupMenu Object
*                e         = 클릭한 Context MenuClickEventInfo
* return       : None   
**********************************************************************/
pForm.gfnGridOnTrackPopupGridMenu = function (obj,e)
{
	var sGridID = this.GRD_ARR_STR_MENU_GRID[this.GRID_MENU_CURRENT_INDEX].replace(this.name + "_", "");
	var grdObj  = this.gfnGetComponentObject(this, sGridID);

	//var nIndex     = gfnGridGetGridIndex(obj, this.GRD_ARR_STR_MENU_GRID);	
	var objDsMenu  = this.GRD_ARR_OBJ_DATASET_GRID_MENU[this.GRID_MENU_CURRENT_INDEX]; // 그리드 Context Menu DataSet 	
	var objDataset = eval("'" + grdObj.binddataset + "'");
	var id = e.id;
	
    // 메뉴에 따른 기능 구현     
    switch (id)
	{
		case "10": // 복사(Text) 기능 
		    //gfn_gridClipboardCopy(obj, "10");
			return;
		case "11": // 복사(값) 기능 
		    //gfn_gridClipboardCopy(obj, "11");
			return;
		case 15: // 붙여넣기 기능 
		    //gfn_gridClipboardPaste(obj);
			return;
		case "20": // 찾기 기능 
			this.gfnFrmFindForm(grdObj);
			return;
		case "30": // 소트 기능  
		
//  			var strArg, strResult;
//  			strArg    = "arg_grid=" + quote(obj.id);
//          	var strOpenStyle = "status=false AutoSize=false Resize=false";
//  			strResult = Dialog("comm::CommMultiSortPopup.xml", strArg, 320, 350, strOpenStyle, -1, -1);
//  	
//  			if ( (strResult <> null)  && (strResult <> "") )
//  			{
//  				objDataset.Sort(strResult);
//  			}
	
			return;
		case "40": // 필터 기능 
			/*
	        var oArg = {
				pvGrid : grdObj
			};
			var oOption = {
				popuptype : "modeless",
				width : 590,
				height : 370
			};
			var sPopupCallBack = "";
			this.gfnOpenPopup("popup", "cmm::cmmGridFilter.xfdl", oArg, sPopupCallBack, oOption);
			*/
			
			this._gfnGridPopupDivFilterSet(grdObj);
			
			return;
		case "50": // 틀고정 기능
 		    var intRowMenu = objDsMenu.findRow("id", "50");
		    
 	        //처리여부  컬럼이 'N'일 경우 
 		    if( objDsMenu.getColumn(intRowMenu, "yn_proc") == "N") {
 		        // 틀고정 처리후 yn_proc = 'Y'로 변경. Title은 취소 메뉴로 변경.
 				grdObj.setFormatColProperty(this.GRID_MENU_CURRENT_CELL, "band","left");
 		        objDsMenu.setColumn(intRowMenu, "text"   , "Fix Column(Cancel)");
 		        objDsMenu.setColumn(intRowMenu, "yn_proc", "Y");
 		    } else {
 		        // 틀고정 취소처리후 yn_proc = 'N' 로 변경.  
 				grdObj.setFormatColProperty(1, "band", "body");
 		        objDsMenu.setColumn(intRowMenu, "text"   , "Fix Column");
 		        objDsMenu.setColumn(intRowMenu, "yn_proc", "N");
 		    }
		    
			return;
		case "60": // 포맷저장 기능 
			this.gfnSaveGridFormat(grdObj);
			return;
		case "61": // 포맷초기화 기능 
			this.gfnCancelGridFormat(grdObj);
			return;
		case "70": // Exlcel 기능 
			this.gfnExcelExport(this.grdMain, "");
			return;
		case "80": // 숨기기 기능  
			this.gfnHiddenGridColumn(grdObj, this.GRID_MENU_CURRENT_CELL);
			return;
		case "81": // 숨기기 취소 기능  
		    this.gfnHiddenCancelGridColumn(grdObj);
			return;
	}	 
};

/*********************************************************************
 * Function Name  : gfnGridGetColId
 * Description    : 그리드 Body영역의 Column Index로 Colid 정보 가져오기
 * Parameter      : 1) objGrid - Grid Object 
 *                  2) nCol	   - Column Index
 * Return         : 컬럼ID
 * ex) gfnGridGetColId(objGrid, nCol); 
**********************************************************************/
pForm.gfnGridGetColId = function(objGrid, nCol)
{
    var strColId = ""; 
	var nCellCnt = objGrid.getCellCount("body");  // Grid 컬럼수 
   
	for (var j=0; j<nCellCnt; j++ ) 
	{
		// 그리드의 컬럼번호를 찾아서 순서대로 setting
		if (objGrid.getCellProperty("body", j, "col")==nCol) 
		{
			var BodyColId = this.gfnToString(objGrid.getCellProperty("body", j, "text")).split(":");
			strColId = BodyColId[1];
			break;
		}
	}
	return strColId;
};
 
/*********************************************************************
* Funtion Name : gfn_frmOnlyOpen
* Desctiption  : Find 기능 호출 함수
* parameter    : objGrid      = Grid Object
* return       : None   
 *********************************************************************/
pForm.gfnFrmFindForm = function(objGrid)
{
	var option = {
		titletext : "찾기(Find) PopUp",
		width : 320,
		height : 150
	}
	var oParam = { GRID : objGrid };	
	this.gfnOpen("modeless", "cmm::cmmFindPopUp.xfdl", oParam, option);
};

/*********************************************************************
* Funtion Name : gfnSetGrdChk
* Desctiption  : 그리드 내에 체크박스 전체 처리 함수.
* parameter    : 1) obj = Grid Object
			     2) nCell = Grid Cell
				 3) chk_val = 체크 된 VALUE
			     4) objDs = 그리드 binddataset
			     5) chk_col = check column
* return       : None   
 *********************************************************************/
pForm.gfnSetGrdChk = function (obj, nCell, chk_val, objDs, chk_col)
{
	objDs.set_enableevent(false);
	obj.set_enableevent(false);
	
	if(chk_val == 1) {
		obj.setCellProperty("head", nCell, "text", 0);
		chk_val = 0;
	} else {
		obj.setCellProperty("head", nCell, "text", 1);
		chk_val = 1;
	}
	
	for(var i=0; i<objDs.getRowCount(); i++) {
		objDs.setColumn(i, chk_col, chk_val);
	}
	
	obj.set_enableevent(true);
	objDs.set_enableevent(true);
};

//////////////////////////////////////////////////////////////////////////FILTER//////////////////////////////////////////////////////////////////////////

// 2018.11.13 TOBESOFT JJH 추가

/*********************************************************************
* Funtion Name : gfnGridPopupDivFilterInit
* Desctiption  : Grid Filter 초기화 함수
* parameter    : objGrid	-	Grid Object
* return       : None   
* ex) gfn_gridPopupDivFilterInit(objGrid)
 *********************************************************************/
pForm.gfnGridPopupDivFilterInit = function (objGrid)
{
	// 필터링 정보 저장 데이터셋을 생성한다.
	if (this.isValidObject(objGrid["_filterInfo"]) == false)  // 대상 그리드와 동일한 데이터셋을 생성
	{
		var dsObj = new Dataset;
		var dstNm = objGrid.name + "_cds_filterInfo";
		this.addChild(dstNm, dsObj);
	
		objGrid["_filterInfo"] = this.objects[dstNm];
		objGrid["_filterInfo"].addColumn("COL_ID"	   ,"string");
		objGrid["_filterInfo"].addColumn("FILTER_VALUE","string");
	}

	// 필터링 메뉴 데이터 셋을 생성한다.
	if (this.isValidObject(objGrid["_filterMenu"]) == false) // 대상 그리드와 동일한 데이터셋을 생성
	{
		var dsObj = new Dataset;
		var dstNm = objGrid.name + "_cds_filterMenu";
		this.addChild(dstNm, dsObj);
		
		objGrid["_filterMenu"] = this.objects[dstNm];
	}
};

/*********************************************************************
* Funtion Name : gfnGridPopupDivFilterSet
* Desctiption  : 필터 상태 세팅/초기화 (그리드 헤드에 필터 콤보 생성/삭제)
* parameter    : objGrid	-	Grid Object
 * return      : None   
 * ex) _gfnGridPopupDivFilterSet(objGrid)
**********************************************************************/ 
pForm._gfnGridPopupDivFilterSet = function (objGrid)
{
	var objDtst 	   	= objGrid.getBindDataset();

	var arrExpandShow  	= objGrid["_filterShow"];
	var arrExpandImge 	= objGrid["_filterIcon"];

    var nCellCnt  		= objGrid.getCellCount("head");
    var strColID;
    
	objGrid.set_enableredraw(false);
	
	if (!this.gfnIsNull(arrExpandImge) && arrExpandImge.length > 0) 
	{
		// Cell Moving 을 풀어준다.
		objGrid["_cellmovingtype"] = "";
		objGrid.set_cellmovingtype(objGrid["_cellmovingtype"]);
		
		for (var i=0; i<nCellCnt; i++) 
		{
			strColId = this._gfnGridGetBindColumnNameByIndex(objGrid, this._gfnGridGetBodyCellIndex(objGrid, i, true));
			if (strColId=="" || strColId == this.COM_GRID_MARK_COL) continue;
			
			// Merge된 header 일 경우 Skip 
			if (objGrid.getCellProperty("head", i, "colspan") > 1 ) continue;
			
			objGrid.setCellProperty("head",i,"expandshow" ,arrExpandShow[i]);
			objGrid.setCellProperty("head",i,"expandimage",arrExpandImge[i]);
		}
	
		objGrid["_filterShow"] = new Array();
		objGrid["_filterIcon"] = new Array();
		
		// 필터 정보 및 필터링 초기화
		if (this.isValidObject(objGrid["_filterInfo"]) == true) 
		{
			objGrid["_filterInfo"].clearData();
			objDtst.filter("");
		}
	} 
	else
	{
		// PopupDiv 처리를 위해 Cell Moving 을 막는다.
		// 기존 설정은 백업
		objGrid["_cellmovingtype"] = objGrid.cellmovingtype;
		objGrid.set_cellmovingtype("none");
		
		arrExpandShow = new Array();
		arrExpandImge = new Array(); 
		
		for (var i = 0; i<nCellCnt; i++) 
		{
		    strColId = this._gfnGridGetBindColumnNameByIndex(objGrid, this._gfnGridGetBodyCellIndex(objGrid, i, true));
			if (strColId=="" || strColId == this.COM_GRID_MARK_COL) continue;
			
			// Merge된 header 일 경우 Skip 
			if (objGrid.getCellProperty("head", i, "colspan") > 1 ) continue;
			
			var bFlag = false;
			
			if ((objGrid.getCellProperty("head",i,"displaytype")).toLowerCase() != "checkboxcontrol"
			&&   objGrid.getCellProperty("head",i,"text") !=  "No"
			&&   !this.gfnIsNull(objGrid.getCellProperty("head",i,"text")))
			{
				// cell displaytype != imagecontrol 
				if ((objGrid.getCellProperty("body",this._gfnGridGetBodyCellIndex(objGrid, i, true),"displaytype")).toLowerCase() != "imagecontrol"
				&&  (objGrid.getCellProperty("body",this._gfnGridGetBodyCellIndex(objGrid, i, true),"displaytype")).toLowerCase() != "checkboxcontrol")
					bFlag = true;
			}
			
			if (bFlag)
			{
				arrExpandShow[i] = objGrid.getCellProperty("head",i,"expandshow" );
				arrExpandImge[i] = objGrid.getCellProperty("head",i,"expandimage");
				
				objGrid.setCellProperty("head",i,"expandshow" ,"show"				 	   );
				objGrid.setCellProperty("head",i,"expandimage", this.GRD_STR_UNFILTER_IMAGE);
				objGrid.setCellProperty("head",i,"expandsize ", 30						   );
			}
		}
		
		objGrid["_filterShow"] = arrExpandShow;
		objGrid["_filterIcon"] = arrExpandImge;
	}
	
	objGrid.set_enableredraw(true);
};

/*********************************************************************
* Funtion Name : gfn_gridPopupDivFilter
* Desctiption  : 그리드 셀의 값을 Distinct처리하여 PopupDiv로 보여줌
* parameter    : objGrid	-	Grid Object
 *               nCell		-	PopupDiv가 보여질 Grid Cell
 * return      : None   
 * ex) gfn_gridPopupDivFilter(objGrid, 2)
**********************************************************************/ 
pForm.gfnGridPopupDivFilter = function (objGrid, e)
{
	var nCell = e.cell;

	var nBodyCellIdx = this._gfnGridGetBodyCellIndex(objGrid, nCell, true);
	var sColID       = this._gfnGridGetBindColumnNameByIndex(objGrid, this._gfnGridGetBodyCellIndex(objGrid, nCell, true));
	var sDispColId   = "COMMON_FILTER_TEXT";
	
	var objDstInfo	 = objGrid["_filterInfo"];
	var objDstMenu	 = objGrid["_filterMenu"];

	// 기존 다른 컬럼이 필터링 되어 있으면, 필터링 조건을 만들어 준다.
	var nTotalRow 		= objDstInfo.getRowCount();
	var strFilterString = "";
	var sFilterValue;
	
	for (var i=0; i< nTotalRow; i++) 
	{
		sFilterValue = this.gfnToString(objDstInfo.getColumn(i,"FILTER_VALUE"));
		
		if (this.gfnLength(sFilterValue) > 0)
		{
			// 자신 컬럼일 경우   필터링 조건 생성을 중지
			if (objDstInfo.getColumn(i,"COL_ID") == sColID) 
				continue;
			
				 if (sFilterValue == "(empty)"	  ) strFilterString += "&& (String(" + objDstInfo.getColumn(i,"COL_ID") + ").trim() == '' || " + objDstInfo.getColumn(i,"COL_ID") + "== null)"; 
			else if (sFilterValue == "(not empty)") strFilterString += "&& (String(" + objDstInfo.getColumn(i,"COL_ID") + ").trim() != '' && " + objDstInfo.getColumn(i,"COL_ID") + "!= null)";
			else 									strFilterString += '&&' + objDstInfo.getColumn(i,"COL_ID") + "=='" + sFilterValue + "'";
		}
	}
	
	strFilterString = this.gfnScrArrangeCondition(strFilterString,"&&");
	
	objDstMenu.set_enableevent(false);
	
	// 필터링 조건이 있으면 필터링 후에 Distinct 처리한다.
	objDstMenu.copyData(objGrid.getBindDataset(), true);
	
	// FILTER용 컬럼 - TEXT표시할 컬럼.
	objDstMenu.addColumn(sDispColId, "string", 256); 
	
	// 첫번째 필터링 컬럼을 클릭했어도 자신 컬럼을 제외한 필터링 조건을 Filter한다.
	objDstMenu.filter("");
	if (this.gfnLength(strFilterString) > 0) 
		objDstMenu.filter(strFilterString);
	
	// Distinct 처리하고, 필터링 취소용 로우를 추가한다.
	objDstMenu.loadCSV(this._gfnDsDistinctData(objDstMenu, sColID));
	
	// Combo DataSet Object 
	var objCboDs;
	var strIdComboCd, strIdComboNm;
	
    // Cell의 내용을 Display 할 때 표현되는 형식. 
	var sDisplayType = objGrid.getCellProperty("body", nBodyCellIdx, "displaytype" );
	var sInnerDst    = objGrid.getCellProperty("body", nBodyCellIdx, "combodataset");
	
	// Expr 식으로 구성된 경우 식에 combo가 있다면 innerdataset도 함께 적용
	if ((sDisplayType.indexOf("expr:") > -1) || (sDisplayType != "combotext" && sDisplayType != "combocontrol"))
	{
		if (sDisplayType.indexOf("combo")<0)
			sInnerDst = null;
	}
	
	if (sDisplayType == "combotext" || sDisplayType == "combocontrol" || !this.gfnIsNull(sInnerDst))
	{
	    objCboDs     = this.objects[objGrid.getCellProperty("Body", nBodyCellIdx, "combodataset")];
	    strIdComboCd = objGrid.getCellProperty("Body",nBodyCellIdx,"combocodecol");    // Combo의 Code를 구성하는 ComboDataset의 Column ID.
	    strIdComboNm = objGrid.getCellProperty("Body",nBodyCellIdx,"combodatacol");    // Combo의 Data를 구성하는 ComboDataset의 Column ID.
    }
	
	// 필드에 값이 없을 경우 필드가 없음/있음 처리
	var nDisTotRow = objDstMenu.getRowCount();
	var bFind 	   = false;
	
	for (var i=0; i<objDstMenu.getRowCount(); i++) 
	{    
		// Combo의 경우 바인딩 된 컬럼 값을 읽어서 넣어준다.
	    if (sDisplayType == "combotext" || sDisplayType == "combocontrol" || !this.gfnIsNull(sInnerDst))
			objDstMenu.setColumn(i,sDispColId, objCboDs.lookup(strIdComboCd, objDstMenu.getColumn(i,sColID), strIdComboNm));
	    else 
			objDstMenu.setColumn(i,sDispColId, objDstMenu.getColumn(i,sColID));
	}
	
	// 이전 선택위치로 세팅
	var nFindRow = objDstInfo.findRow("COL_ID",sColID);
	if (nFindRow < 0 || (this.gfnLength(strFilterString ) <= 0
					 &&  objDstInfo.getColumn(0,"COL_ID") != sColID)) 
		nFindRow = 0;
	
	objDstMenu.set_enableevent(true);

	this._gfnGridPopupDivFilterOpen(objGrid,0,nCell,objDstMenu.id,sColID,sDispColId,objDstInfo.getColumn(nFindRow,"FILTER_VALUE"));
};

/*********************************************************************
* Funtion Name : _gfnGridPopupDivFilterOpen (직접 호출금지)
* Desctiption  : PopupDiv TrackPopup (공통) 
* parameter    : objGrid		-	Grid Object
 *               nRow			-	Grid Row
 *               nCell			-	Grid Cell
 *               strInnerDSID	-	PopupDiv 필터를 만들기 위한 InnerDataset id
 *               strCodeColumn	-	CodeColumn
 *               strDataColumn	-	DataColumn
 *               sSelValue		-	PopupDiv Open 될때 선택될 item
 * return      : None   
 * ex) gfn_gridPopupDivFilterOpen(objGrid,nRow,nCell,strInnerDSID,strCodeColumn,strDataColumn,sSelValue)
**********************************************************************/ 
pForm._gfnGridPopupDivFilterOpen = function (objGrid,nRow,nCell,strInnerDSID,strCodeColumn,strDataColumn,sSelValue)
{
	// 컬럼 타입별 필터 타입 정보 지정 및 Popup 크기 지정
	var objRect		= objGrid.getCellRect(-1, nCell);
	var nRectLeft	= objRect.left;
	var nRectTop	= objRect.bottom;
	var nWidth		= 240;
	var nHeight		= 217;
	
	var sPdivId		= "_pdiv_filter";
	var objPopupDiv	;
	
	if (this.isValidObject(sPdivId))
		objPopupDiv = this.components[sPdivId];
	
	// 생성되어 있지 않다면 신규로 생성한다.
	if (this.gfnIsEmpty(objPopupDiv))
	{
		objPopupDiv = new PopupDiv();  
		objPopupDiv.init(sPdivId, "absolute", 0, 0, nWidth, nHeight);
		objPopupDiv.set_url("cmm::cmmFilter.xfdl");
		objPopupDiv.set_async(false);
		objPopupDiv.set_background("#ffffff");
		objPopupDiv.set_border("1px solid #021c79");
		objPopupDiv.addEventHandler("oncloseup", function (obj, e) 
												 {}, this);

		this.addChild(sPdivId, objPopupDiv);
		objPopupDiv.show();
	}
	
	var oArguments = { target	  : objGrid
					 , dataset	  : this.objects[strInnerDSID]
					 , codecolumn : strCodeColumn
					 , datacolumn : strDataColumn
					 , selectvalue: sSelValue};
					 
	objPopupDiv.form.fnLoadFilterInfo(oArguments);

	// 팝업 호출
	objPopupDiv["_UseGrid"] = objGrid;		// 대상 그리드 정보 셋팅
	objPopupDiv["_UseCell"] = nCell;		// 대상 셀정보 셋팅
	objPopupDiv["_UseCode"] = strCodeColumn;// 대상 셀정보 셋팅
	objPopupDiv["_UseText"] = strDataColumn;// 대상 셀정보 셋팅
	
	objPopupDiv.trackPopupByComponent(objGrid, nRectLeft, nRectTop, nWidth, nHeight);
};

/*********************************************************************
* Funtion Name : gfnScrArrangeCondition 
* Desctiption  : Dataset Filter Condition String 의 중복조건 제거 함수
* parameter    : strCondition -	Filter 조건 스트링
* return       : String		  - Filter 조건 스트링 
* ex) this.gfnScrArrangeCondition(strCond);
**********************************************************************/  
pForm.gfnScrArrangeCondition = function (sCondition, sText) 
{
	while (sCondition.indexOf(sText+sText) >= 0) 
		   sCondition = sCondition.replace(sText+sText, sText);
	
	var nText = sText.length;
	var nCond = sCondition.length;
	
	sCondition = this.gfnLeft (sCondition,nText) == sText ? sCondition.substr(nText		   ) : sCondition;
	sCondition = this.gfnRight(sCondition,nText) == sText ? sCondition.substr(0,nCond-nText) : sCondition;

	return sCondition;
};

/*********************************************************************
* Funtion Name : gfnDsDistinctData 
* Desctiption  : Dataset 의 특정 Column 을 Distinct 하여 결과 리턴
* parameter    : objSourceDS	- Source Dataset
 *               strColumn		- Distinct 할 Column
 * return      : String			- Dataset CSV Contents   
 * ex) gfnDsDistinctData(objDs,"MEASUREVIEW")
**********************************************************************/  
pForm._gfnDsDistinctData = function (objSourceDS,strColumn)
{
	var objDs = this._gfnDsDistinctDataset(objSourceDS,strColumn);
	return objDs.saveCSV();
};

pForm._gfnDsDistinctDataset = function (objSourceDS,strColumn)
{
	if (!this.isValidObject(this.CDS_OBJ_DISTINCT_DATA)) 
	{
		var dsObj = new Dataset;
		this.addChild("cds_DistinctData", dsObj);
		
		this.CDS_OBJ_DISTINCT_DATA = this.objects["cds_DistinctData"];
	}

	this.CDS_OBJ_DISTINCT_DATA.set_enableevent(false);
	this.CDS_OBJ_DISTINCT_DATA.clear();
	
	var nTotalCol = objSourceDS.getColCount();
	
	// 대상 데이터셋 컬럼 정보로 복제
	this.CDS_OBJ_DISTINCT_DATA.assign(objSourceDS);
	this.CDS_OBJ_DISTINCT_DATA.clearData();
	
	var nRow;
	var nTotalRow = objSourceDS.getRowCount();
	
	// 정렬하여 중복 제거한다.
	objSourceDS.set_keystring("S:"+strColumn); 
	
	if (this.gfnIsNull(this.gfnTrim(objSourceDS.getColumn(i, strColumn))))
	{
		nRow = this.CDS_OBJ_DISTINCT_DATA.addRow();
		this.CDS_OBJ_DISTINCT_DATA.copyRow(nRow,objSourceDS,0);
	}
	
	for (var i=0; i<nTotalRow; i++)
	{
		if (objSourceDS.getColumn(i-1, strColumn) == objSourceDS.getColumn(i, strColumn)) continue;
		if (this.gfnIsNull(this.gfnTrim(objSourceDS.getColumn(i, strColumn)))) continue;
		
		nRow = this.CDS_OBJ_DISTINCT_DATA.addRow();
		this.CDS_OBJ_DISTINCT_DATA.copyRow(nRow,objSourceDS,i);
	}
	objSourceDS.set_keystring(null);
	
	this.CDS_OBJ_DISTINCT_DATA.set_enableevent(true);
	
	return this.CDS_OBJ_DISTINCT_DATA;
};

/*********************************************************************
* Funtion Name : _gfnGridPopupDivFilterList_OnDblClick
* Desctiption  : PopupDiv Filter Set Contents (공통) ==> 필터링 조건 생성 
* parameter    : obj    		- 	Object 이 Event가 발생된 Component.
 *               strCode		-	Variant 선택된 Item의 Code값.
 *        					        Code값은 InnerDataset의 CodeColumn을 참조합니다.
 *               strText		-	String 선택된 Item의 Text값.
 *        					        Text값은 InnerDataset의 TextColumn을 참조합니다.
 *               nOldIndex		-	Integer 선택 이전의 Index.
 *               nNewIndex		-	Integer 선택 항목의 Index.
 * return       : None   
 * ex) _gfnGridPopupDivFilterList_OnDblClick(obj,strCode,strText,nOldIndex,nNewIndex)
**********************************************************************/
pForm._gfnGridPopupDivFilterList_OnDblClick = function (oArguments)
{
	var strCode	 	 = oArguments.code;
	var strText		 = oArguments.text
	var nOldIndex	 = oArguments.oldindex;
	var nNewIndex	 = oArguments.newindex;
	
	var sPdivId		= "_pdiv_filter";
	var objPopupDiv	= this.components[sPdivId];
	var objGrid 	= objPopupDiv["_UseGrid"];
	var strColID    = objPopupDiv["_UseCode"];
	var nRow 		= objGrid["_filterInfo"].findRow("COL_ID",strColID);
	
	// 필터링 취소 Item 을 선택하면, GRD_ARR_OBJ_DATASET_FILTER_INFO[nIndex]에서 삭제한다.
	if (strCode == "(all)") 
	{
		// 자신만 초기화 기능
		objGrid["_filterInfo"].deleteRow(nRow);
		
		// 언필터상태 이미지로 변경
		objGrid.setCellProperty("head",objPopupDiv["_UseCell"],"expandimage",this.GRD_STR_UNFILTER_IMAGE);
	} 
	else 
	{
		if (nRow < 0) 
		{
			// Item을 선택하면 필터링 조건을 만들 수 있는 GRD_ARR_OBJ_DATASET_FILTER_INFO[nIndex]에 값을 세팅한다.
			nRow = objGrid["_filterInfo"].addRow();
			objGrid["_filterInfo"].setColumn(nRow,"COL_ID",strColID);
		}
		
		objGrid["_filterInfo"].setColumn(nRow,"FILTER_VALUE",strCode	);

		// 필터상태 이미지로 변경
		objGrid.setCellProperty("head",objPopupDiv["_UseCell"],"expandimage",this.GRD_STR_FILTER_IMAGE);
	}

	// 필터링 조건을 만들어 준다.
	var nTotalRow 		= objGrid["_filterInfo"].getRowCount();
	var strFilterString = "";
	var strFilterColID;
	var strFilterValue;
	
	for (var i = 0; i < nTotalRow; i++) 
	{
		strFilterValue = (objGrid["_filterInfo"].getColumn(i,"FILTER_VALUE")).toString();

		if (this.gfnLength(strFilterValue) > 0) 
		{
			strFilterColID = objGrid["_filterInfo"].getColumn(i,"COL_ID");
			switch (strFilterValue)
			{
				case "(empty)"     : strFilterString += "&& (String(" + strFilterColID + ").trim() == '' || " + strFilterColID + "== null)"; break;
				case "(not empty)" : strFilterString += "&& (String(" + strFilterColID + ").trim() != '' && " + strFilterColID + "!= null)"; break;
				default			   : strFilterString += '&&' + strFilterColID + "=='" + strFilterValue + "'"; 								 break;
			}
			
			if (objGrid["_filterInfo"].getColumn(i,"COL_ID") == strColID) 
				continue;
		}
	}

	strFilterString = this.gfnScrArrangeCondition(strFilterString, "&&");
	
	objGrid.getBindDataset().filter(strFilterString);
	objPopupDiv.closePopup();
};

//////////////////////////////////////////////////////////////////////////CELL COPY AND PASTE//////////////////////////////////////////////////////////////////////////
/**
 * @class  그리드키다운 이벤트 [cellcopypaste]
 * @param {Object} objGrid - 대상그리드
 * @param {Evnet}  e	   - 키다운이벤트
 * @return  N/A
 * @example
 * objGrid.addEventHandler("onheadclick", 	 this.gfnGrid_onheadclick, 	 this);
 */
pForm.gfnGrid_onkeydown =function(objGrid, e)
{
	var keycode = e.keycode;
	var sBrowser = system.navigatorname;
	if(e.ctrlkey){
		if(keycode == 67){
			//copy
			if( sBrowser == "nexacro" || sBrowser == "IE"){
				this._gfnGridCopyEventForRuntime(objGrid, e);
			}else {
				this._gfnGridCopyEventForChrome(objGrid, e);
			}
		}else if(keycode == 86){
			//paste
			this._gfnGridPasteEvent(objGrid, e);
		}
	}
};

/**
 * @class copy event(nexacro, ie)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridCopyEventForRuntime(obj, e);	
*/
pForm._gfnGridCopyEventForRuntime = function (obj, e)
{
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}
	var colSeperator = "\t";
	var copyData = "";
	var checkIndex = {};
	
	for (var i = startrow; i <= endrow; i++) {
		for (var j = startcol; j <= endcol; j++) {
			var value = obj.getCellValue(i,j);
			if(!this.gfnIsNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(i,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(i,j);
				}
			}
		}
		if (i < obj.selectendrow) {
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	system.clearClipboard();
	system.setClipboard("CF_TEXT",copyData);


	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
};

/**
 * @class paste데이터생성
 * @param {String} browser - 브라우저
 * @return paste데이터 
 * @example
 * this._gfnGirdGetPasteData("nexacro");	
*/
pForm._gfnGirdGetPasteData = function (browser)
{
	var copyData = "";
	if( browser == "nexacro" || browser == "IE"){
		copyData = system.getClipboard("CF_TEXT");
		copyData = new String(copyData);
	}else{
		var ta = this.tragetGrid["ta"];

		if(!ta) return;

		copyData = ta.value;
		document.body.removeChild(ta);
		
		this.tragetGrid["ta"] = undefined;
	}
	return copyData;
	
};

/**
 * @class paste event
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridPasteEvent(obj, e);	
*/
pForm._gfnGridPasteEvent = function (obj, e)
{
	var browser = system.navigatorname;
	var copyData = this._gfnGirdGetPasteData(browser);
	
	if( this.gfnIsNull(copyData)) return;
	
	var colSeperator = "\t";
	var rowData ="";
	if( browser == "nexacro" || browser =="IE"){
		rowData = copyData.split("\r\n");
		if(rowDataCount < 1) {
			e.stopPropagation();
			return;
		}
	}else{
		rowData = copyData.split(/[\n\f\r]/); 
	}
	var rowDataCount = rowData.length - 1;

			
	
	obj.set_enableevent(false);
	obj.set_enableredraw(false); 

	var datasetName = obj.binddataset;
	var ds = obj.getBindDataset();

	ds.set_enableevent(false); 

	var grdCellCount = obj.getCellCount("body");
	var rowCount = ds.getRowCount();
	
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}

	var currRow = startrow;
	var cellIndex = startcol;
	var maxColumnCount = 0;
	var checkIndex = {};	

	for (var i = 0; i < rowDataCount; i++)
	{
		if(rowCount <= currRow)
		{
			ds.addRow();
		}

		var columnData = rowData[i].split(colSeperator);
		var columnLoopCount = cellIndex + columnData.length;

		if(columnLoopCount > grdCellCount) {
			columnLoopCount = grdCellCount;
		}

		if(maxColumnCount < columnLoopCount) {
			maxColumnCount = columnLoopCount;
		}

		var k = 0;
		for(var j = cellIndex; j < columnLoopCount; j++) 
		{
			var colTemp = obj.getCellProperty("body", j, "text");
			var colid;
			if( this.gfnIsNull(colTemp) )
			{
				colid = obj.getCellProperty("body", j, "text");
			}
			else
			{
				colid = obj.getCellProperty("body", j, "text").substr(5);
			}
			
			var tempValue = columnData[k];
			if(!this.gfnIsNull(tempValue))
			{
				ds.setColumn(currRow, colid, tempValue);
			}
			k++;
		}
		currRow++;
	}

	ds.rowposition = currRow;	

	endrow = endrow + rowDataCount - 1;
	endcol = maxColumnCount - 1;
	
	system.clearClipboard();

	obj.set_enableredraw(true);
	obj.set_enableevent(true);
	ds.set_enableevent(true); 

	obj.selectArea(startrow, startcol, endrow, endcol);

	
	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
	e.stopPropagation();
};

/**
 * @class copy event(chrome)
 * @param {Object} obj- 대상그리드
 * @param {Event}  e - key down event
 * @return N/A
 * @example
 * this._gfnGridCopyEventForChrome(obj, e);	
*/
pForm._gfnGridCopyEventForChrome = function (obj, e)
{
	var startrow = nexacro.toNumber(obj.selectstartrow);
	if( startrow == -9) return;

	var endrow   = nexacro.toNumber(obj.selectendrow);
	if( endrow == -9) return;
	
	var startcol = 0;
	var endcol = 0;
	
	if( obj.selecttype == "row" || obj.selecttype == "multirow"){
		startcol = 0;
		endcol = obj.getCellCount("body")-1;
	}else{
		startcol = nexacro.toNumber(obj.selectstartcol);
		endcol   = nexacro.toNumber(obj.selectendcol);
	}

	var colSeperator = "\t";
	var copyData = "";
	
	for (var i = startrow; i <= endrow; i++) {
		for (var j = startcol; j <= endcol; j++) {
			var value = obj.getCellValue(i,j);
			if(!this.gfnIsNull(value)) {
				if (j < endcol) {
					copyData += obj.getCellValue(i,j) + colSeperator;
				} else {
					copyData += obj.getCellValue(i,j);
				}
			}
		}
		if (i < obj.selectendrow) {
				copyData += "\r\n";
		}
	}

	copyData += "\r\n";
	
	var ta = this._createTextarea(copyData);
	this.tragetGrid = obj;
	this.tragetGrid["ta"] = ta;
	var areaInfo = {"startrow": startrow, "startcol": startcol, "endrow": endrow, "endcol": endcol};
	e.stopPropagation();
};

/**
 * @class cell copy and paste (크롬용 텍스트에어리어생성)
 * @param {String} innerText- value
 * @return{Object} 텍스트에어리어 오브젝트
 * @example
 * this._createTextarea("꼬부기");	
*/
pForm._createTextarea = function(innerText)
{
	var ta = document.createElement('textarea');
	ta.id = "textAreabyCopyAndPaste";
	ta.style.position = 'absolute';
	ta.style.left = '-1000px';
	ta.style.top = document.body.scrollTop + 'px';
	ta.value = innerText;
	
	document.body.appendChild(ta);
	ta.select();

	return ta;
};