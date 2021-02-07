//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html
//
//==============================================================================

if (!nexacro.ExcelImportObjectEx) {
	nexacro.ExcelImportEventInfoEx = function (obj, id, url, refferObj) {
		this.id = this.eventid = id || "onsuccess";
		this.fromobject = obj;
		this.fromreferenceobject = refferObj;
		this.url = url;
	};
	var _pExcelImportEventInfoEx = nexacro._createPrototype(nexacro.Event, nexacro.ExcelImportEventInfoEx, nexacro.ExcelImportEventInfoEx);
	nexacro.ExcelImportEventInfoEx.prototype = _pExcelImportEventInfoEx;
	_pExcelImportEventInfoEx._type_name = "ExcelImportEventInfoEx";

	delete _pExcelImportEventInfoEx;

	nexacro.ExcelImportErrorEventInfoEx = function (obj, id, errortype, errormsg, errorobj, statuscode) {
		this.id = this.eventid = id || "onerror";
		this.fromobject = obj;
		this.fromreferenceobject = errorobj;
		this.errortype = errortype;
		this.errormsg = errormsg;
		this.statuscode = statuscode;
	};
	var _pExcelImportErrorEventInfoEx = nexacro._createPrototype(nexacro.ErrorEventInfo, nexacro.ExcelImportErrorEventInfoEx);
	nexacro.ExcelImportErrorEventInfoEx.prototype = _pExcelImportErrorEventInfoEx;
	_pExcelImportErrorEventInfoEx._type_name = "ExcelImportErrorEventInfoEx";

	delete _pExcelImportErrorEventInfoEx;

	nexacro.ExcelImportObjectEx = function (name, parent) {
		this.id = this.name = name;

		if (!parent) {
			var app = nexacro.getApplication();
			if (app) {
				parent = app.getActiveForm();
				if (!parent) {
					parent = app.mainframe.childframe.form;
				}
			}
		}
		this.parent = parent;
		this.onerror = new nexacro.EventListener("onerror");
		this.onsuccess = new nexacro.EventListener("onsuccess");
	};

	var _pExcelImport = nexacro.ExcelImportObjectEx.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.ExcelImportObjectEx);
	_pExcelImport._type_name = "ExcelImportObjectEx";

	_pExcelImport.importfilemode = "local";
	_pExcelImport._importfilemode = 0;
	_pExcelImport.commcompress = "none";
	_pExcelImport._commcompress = false;
	_pExcelImport.importtype = nexacro.ImportTypes.EXCEL;
	_pExcelImport.importurl = "";
	_pExcelImport._importurl = "";
	_pExcelImport._uploadurl = "";
	_pExcelImport._uploadservlet = "";

	_pExcelImport._fileurl = "";
	_pExcelImport._range = "";
	_pExcelImport._applyAllsheet = false;

	_pExcelImport._responseData = "";
	_pExcelImport._responseRVal = null;
	_pExcelImport._responseLVal = null;
	_pExcelImport._user_data = null;
	_pExcelImport._file_password = null;

	_pExcelImport._importSheet = "";
	_pExcelImport._importStartCell = null;
	_pExcelImport._importEndCell = null;

	_pExcelImport._tran_item = null;
	_pExcelImport._file_url_ds = null;

	_pExcelImport._event_list = 
		{
		"onerror" : 1, 
		"onsuccess" : 1
	};
	
	_pExcelImport.XLSOLE = 
	{
		ExtensionLib 	: null,
		objExtURL 		: "NexaXlsAutomation.dll",
		bCreateLib 		: false
	};

	_pExcelImport.on_created = nexacro._emptyFn;
	
	_pExcelImport.set_modulePath = function (v) {
        if (v != this.XLSOLE.objExtURL) {
            this.XLSOLE.objExtURL = v;
			this.modulepath = v;
        }
	};

    _pExcelImport.load_Module = function() {
        this.XLSOLE.ExtensionLib = nexacro._addExtensionModule(this.XLSOLE.objExtURL);
        return this.XLSOLE.ExtensionLib;
    };
	
    _pExcelImport.unload_Module = function() {
        this.XLSOLE.bCreateLib = false;
        nexacro._clearExtensionModule(this.XLSOLE.objExtURL);
        if (this.parent) {
            this.destroy();
        }
    };
	
   _pExcelImport.excelGetSheetRowAndColCnt = function(filePath, sheetIndex) {
        if (!this.XLSOLE.ExtensionLib) {
			this.importEnd(-1,"DLL Load Failed : " + this.XLSOLE.objExtURL,filePath);
            return false;
        }
        var m_filepath = filePath;
        var m_sheetIndex;
        var m_sheetName = "";

        if (typeof(sheetIndex) == "number") {
            m_sheetIndex = sheetIndex;
        } else {
            m_sheetName = sheetIndex;
        }
		var XLSAUTO = this.XLSOLE.ExtensionLib.XLSAUTO;
        var b_xlsReturn = XLSAUTO._CreateExcel(m_filepath);
        if (!b_xlsReturn) {
			this.importEnd(-1,"Open Not File : ",filePath);
            XLSAUTO._CloseExcel();
            return false;
        }
        b_xlsReturn = XLSAUTO._GetWorksheets();
        if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet Not File : ",filePath);
            XLSAUTO._CloseExcel();
            return false;
        }
        if (typeof(m_sheetName) == "string" && m_sheetName.length > 0) {
            m_sheetIndex = XLSAUTO._Worksheet_GetName(m_sheetName);
            if (m_sheetIndex == 0) {
				this.importEnd(-1,"WorkSheet Get Item Naem Not File : " + m_sheetName,filePath);
                XLSAUTO._CloseExcel();
                return false;
            }
        }
        b_xlsReturn = XLSAUTO._Worksheets_GetItem(m_sheetIndex);
        if (!b_xlsReturn) {
			this.importEnd(-1,"WorkSheet Get Item Not File : " + m_sheetIndex,filePath);
            XLSAUTO._CloseExcel();
            return false;
        }
        b_xlsReturn = XLSAUTO._Worksheet_GetUsedRange();
        if (!b_xlsReturn) {
			this.importEnd(-1,"WorkSheet Get Item Not File--",filePath);
            XLSAUTO._CloseExcel();
            return false;
        }

        var RangeArray;
        RangeArray = XLSAUTO._Range_value();

        var xlsRowCount = RangeArray[0];
        var xlsColCount = RangeArray[1];

        XLSAUTO._CloseExcel();

        var nArrayCnt = new Array(2);
        nArrayCnt[0] = xlsRowCount;
        nArrayCnt[1] = xlsColCount;
		
		XLSAUTO = null;
		this.importEnd(0,"success",filePath);

        return nArrayCnt;
    };
	
    _pExcelImport.excelGetSheetList = function(filePath) {
		if (!this.XLSOLE.ExtensionLib) {
			this.importEnd(-1,"DLL Load Failed : " + this.XLSOLE.objExtURL,filePath);
			return false;
		}
		var XLSAUTO = this.XLSOLE.ExtensionLib.XLSAUTO;
		var b_xlsReturn = XLSAUTO._CreateExcel(filePath);
		if (!b_xlsReturn) {
			this.importEnd(-1,"Open Not File : ",filePath);
			XLSAUTO._CloseExcel();
			return false;
		}
		b_xlsReturn = XLSAUTO._GetWorksheets();
		if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet Not File : ",filePath);
			XLSAUTO._CloseExcel();
			return false;
		}
		var nCont = XLSAUTO._Worksheets_GetCount();
		var SheetNameArry = new Array();
		for (var SheetInx = 1; SheetInx <= nCont; SheetInx++) {
			b_xlsReturn = XLSAUTO._Worksheets_GetItem(SheetInx);
			if (!b_xlsReturn) {
				this.importEnd(-1,"WorkSheet Get Item Not File : " + m_sheetIndex,filePath);
				XLSAUTO._CloseExcel();
				return false;
			} else {
				var SheetName = XLSAUTO._Worksheet_GetNowName();
				SheetNameArry.push(SheetName);
			}
		}
		this.importEnd(0,"success",filePath);
		XLSAUTO._CloseExcel();
		XLSAUTO = null;
		
		return SheetNameArry;
	};
	
    _pExcelImport.excelSaveAsEx = function(filePath, wstOutputName, strType, bDispAlert, bSaveFlag, strPWD) {
        if (!this.XLSOLE.ExtensionLib) {
			this.importEnd(-1,"DLL Load Failed : " + this.XLSOLE.objExtURL,filePath);
            return false;
        }
		var XLSAUTO = this.XLSOLE.ExtensionLib.XLSAUTO;
        var m_filepath = filePath;
        var b_xlsReturn = XLSAUTO._CreateExcel(m_filepath);
        if (!b_xlsReturn) {
			this.importEnd(-1,"Open Not File",filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        b_xlsReturn = XLSAUTO._GetWorksheets();
        if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet Not File : ",filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        b_xlsReturn = XLSAUTO._Worksheets_GetItem(1);
        if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet GetItem Not File : ",filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        if (bDispAlert == false) {
            b_xlsReturn = XLSAUTO._Workbook_DisplayAlerts(false);
            if (!b_xlsReturn) {
				this.importEnd(-1,"GetWorkSheet DisplayAlerts Not File : ",filePath);
                XLSAUTO._CloseExcel();
				XLSAUTO = null;
                return false;
            }
            b_xlsReturn = XLSAUTO._Workbook_CheckCompatibility(false);
            if (!b_xlsReturn) {
				this.importEnd(-1,"GetWorkSheet CheckCompatibility Not File : ",filePath);
                XLSAUTO._CloseExcel();
				XLSAUTO = null;
                return false;
            }
        }

        var bPWDFlag = false;
        if (bSaveFlag == true) {
            bPWDFlag = true;
        }
        b_xlsReturn = XLSAUTO._Worksheet_SaveAsEx(strType, wstOutputName, bPWDFlag, strPWD);
        if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet _Worksheet_SaveAsEx Not File",filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        if (bDispAlert == false) {
            b_xlsReturn = XLSAUTO._Workbook_DisplayAlerts(true);
            if (!b_xlsReturn) {
				this.importEnd(-1,"GetWorkSheet DisplayAlerts Not File",filePath);
                XLSAUTO._CloseExcel();
				XLSAUTO = null;
                return false;
            }
            b_xlsReturn = XLSAUTO._Workbook_CheckCompatibility(true);
            if (!b_xlsReturn) {
				this.importEnd(-1,"GetWorkSheet CheckCompatibility Not File",filePath);
                XLSAUTO._CloseExcel();
				XLSAUTO = null;
                return false;
            }
        }

        XLSAUTO._CloseExcel();
		XLSAUTO = null;
		this.importEnd(0,"success",filePath);
        return true;
    };	
	
    //==========================================================================================================//
    /* Excel Component excelImportByName
    // Arg : 
    		filePath 	: 파일 경로.
    		sheetIndex 	: Excel file Sheet Index
    		dataSet 	: Dataset Object
    		bDatasetOpt : Dataset Column 사용 유무 . 
    					  false : dataset.clear 하여 모두 제거 후 column 생성. 
    					  true : 생성 되어 있는 column type을 사용.
    					  
    		bFirstRowColumn : 엑셀 파일의 첫 번째 로우를 column id 로 사용 유무.
    						true : 엑셀 파일을 사용.
    						false : 사용하지 않음.
    					
    		StartRow 	: 시작 Row
    		nSkipRow 	: 해당 Column 의 데이터가 없을 때에 해당 Row 의 Skip 기능 //2015.11.02 추가.
    		strColumnID : 입력한 String 데이터를 이용하여, Column ID 생성.  [Ex : "strColumnID" + 0, "strColumnID" + 1] //[2015.11.16 추가]
    					   조건 bDatasetOpt 이 false 이고, strColumnID 의 데이터가 null, empty 가 아닐경우에만, 한함. 
    		bSetCellTrim: cell 의 데이터를 trim 설정.  //[2015.11.16 추가]
    					false : trim 안함 
    					true : left. right 모두 trim
    		bNumRelValue : cell 의 서식이 일반이고 숫자 형식(자릿수 표현범위를 넘을 경우 "E+" 형식으로 표현) 또는 시간 의 경우 지수 형식으로 데이터를 읽어오게 되는데, 
    					이때 보여지는 값 그대로 취득할 경우 사용.(속도느려짐을 유의)
    					false : 지수형식 (default)
    					true : cell 에 표현 되는 형식 그대로 취득.
    //*/
    //==========================================================================================================//	
    _pExcelImport.excelImportByIndex = function(filePath, sheetIndex, dataSet, bDatasetOpt, bFirstRowColumn, StartRow, nEmptyCol_SkipRow, strColumnID, bSetCellTrim, bNumRelValue) {
        if (!this.XLSOLE.ExtensionLib) {
			this.importEnd(-1,"DLL Load Failed : " + this.XLSOLE.objExtURL,filePath);
            return false;
        }
		var XLSAUTO = this.XLSOLE.ExtensionLib.XLSAUTO;
        var m_filepath = filePath;
        var m_sheetIndex = sheetIndex;
        var m_dataset = dataSet;

        var m_datasetSet = false;
        if (bDatasetOpt) {
            m_datasetSet = bDatasetOpt;
        }
        var m_excelColumn = false;
        if (bFirstRowColumn === true) {
            m_excelColumn = bFirstRowColumn;
        }

        var b_xlsReturn = XLSAUTO._CreateExcel(m_filepath);
        if (!b_xlsReturn) {
			this.importEnd(-1,"Open Not File",filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        b_xlsReturn = XLSAUTO._GetWorksheets();
        if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet Not File",filePath);
            this.ExtensionLib.XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        b_xlsReturn = XLSAUTO._Worksheets_GetItem(m_sheetIndex);

        if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet Item Not File index:" + m_sheetIndex,filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        b_xlsReturn = XLSAUTO._Worksheet_GetUsedRange();
        if (!b_xlsReturn) {
			this.importEnd(-1,"WorkSheet Get Range Item Not File",filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        var RangeArray = XLSAUTO._Range_value();
        var xlsRowCount = RangeArray[0];
        var xlsColCount = RangeArray[1];

        var SafeArrayData;
        var m_MultiArray;
        var bRealValue = false;
        if (bNumRelValue == true) {
            bRealValue = true;
        }
        m_MultiArray = XLSAUTO._Range_valueArray(xlsRowCount, xlsColCount, bRealValue);
        m_dataset.set_enableevent(false);
		m_dataset.set_updatecontrol(false);
        var m_getColCnt = 0;
        if (m_datasetSet === false) {
            m_getColCnt = xlsColCount;
        } else {
            m_getColCnt = m_dataset.getColCount();
        }
        var CellData;
        var nRow = 0;
        var nCol = 0;
        if (StartRow > 0) {
            nRow = StartRow;
        }
        if (m_datasetSet === false) {
            m_dataset.clear();
            if (m_excelColumn == false) {
                for (var datset_nC = 0; datset_nC < m_getColCnt; datset_nC++) {
                    if (!strColumnID) {
                        strColumnID = "";
                    }
                    if (strColumnID.length > 0) {
                        m_dataset.addColumn(strColumnID + "" + datset_nC, "String", 256);
                    } else {
                        m_dataset.addColumn("Column" + datset_nC, "String", 256);
                    }
                }
            } else {
                for (var nR = 0; nR < 1; nR++) {
                    for (var datset_nC = 0; datset_nC < m_getColCnt; datset_nC++) {
                        CellData = (m_MultiArray[nR][datset_nC + nCol]);
                        m_dataset.addColumn(CellData, "String", 256);
                    }
                }
                if (nRow === 0) {
                    nRow += 1;
                }
            }
        } else {
            m_dataset.deleteAll();
            if (m_excelColumn == true) {
                for (var nR = 0; nR < 1; nR++) {
                    for (var datset_nC = 0; datset_nC < m_getColCnt; datset_nC++) {
                        CellData = (m_MultiArray[nR][datset_nC + nCol]);
                        m_dataset.updateColID(datset_nC, CellData);
                    }
                }
                if (nRow === 0) {
                    nRow += 1;
                }
            }
        }
        var nSkipCnt = 0;
        var bSucc = false;
        if (!bSetCellTrim) {
            bSetCellTrim = false;
        }

        for (var nR = 0; nR < (xlsRowCount - nRow); nR++) {
            m_dataset.addRow();

            for (var nC = 0; nC < (m_getColCnt - nCol); nC++) {
                CellData = (m_MultiArray[nR + nRow][nC + nCol]);
                if ((nEmptyCol_SkipRow >= 0) && ((nC + nCol) == nEmptyCol_SkipRow) && !CellData) {
                    bSucc = m_dataset.deleteRow(nR - nSkipCnt);
                    nSkipCnt++;
                    break;
                } else {
                    var szData = "";
                    if (bSetCellTrim) {
                        if ((CellData != undefined) && CellData.length > 0) {
                            szData = CellData.trim();
                        } else {
                            szData = CellData;
                        }
                    } else {
                        szData = CellData;
                    }
                    m_dataset.setColumn(nR - nSkipCnt, nC, szData);
                }

            }
        }
		m_dataset.set_updatecontrol(true);
        m_dataset.set_enableevent(true);

        XLSAUTO._CloseExcel();
		XLSAUTO = null;
		
		this.importEnd(0,"success",filePath);

        return true;
    };	
	
    //nSkipRow 	: 해당 Column 의 데이터가 없을 때에 해당 Row 의 Skip 기능 //2015.11.02 추가.
    /* Excel Component excelImportByName
    // Arg : 
    		filePath 	: 파일 경로.
    		sheetName 	: Excel file Sheet Name
    		dataSet 	: Dataset Object
    		bDatasetOpt : Dataset Column 사용 유무 . 
    					  false : dataset.clear 하여 모두 제거 후 column 생성. 
    					  true : 생성 되어 있는 column type을 사용.
    					  
    		bFirstRowColumn : 엑셀 파일의 첫 번째 로우를 column id 로 사용 유무.
    						true : 엑셀 파일을 사용.
    						false : 사용하지 않음.
    					
    		StartRow 	: 시작 Row
    		nSkipRow 	: 해당 Column 의 데이터가 없을 때에 해당 Row 의 Skip 기능 //2015.11.02 추가.
    		strColumnID : 입력한 String 데이터를 이용하여, Column ID 생성.  [Ex : "strColumnID" + 0, "strColumnID" + 1] //[2015.11.16 추가]
    					   조건 bDatasetOpt 이 false 이고, strColumnID 의 데이터가 null, empty 가 아닐경우에만, 한함. 
    		bSetCellTrim	: cell 의 데이터를 trim 설정.  //[2015.11.16 추가]
    					false : trim 안함 
    					true : left. right 모두 trim
    					
    		bNumRelValue : cell 의 서식이 일반이고 숫자 형식(자릿수 표현범위를 넘을 경우 "E+" 형식으로 표현) 또는 시간 의 경우 지수 형식으로 데이터를 읽어오게 되는데, 
    					이때 보여지는 값 그대로 취득할 경우 사용.(속도느려짐을 유의)
    					false : 지수형식 (default)
    					true : cell 에 표현 되는 형식 그대로 취득.
    //*/
    _pExcelImport.excelImportByName = function(filePath, sheetName, dataSet, bDatasetOpt, bFirstRowColumn, StartRow, nEmptyCol_SkipRow, strColumnID, bSetCellTrim, bNumRelValue) {
        if (!this.XLSOLE.ExtensionLib) {
			this.importEnd(-1,"DLL Load Failed : " + this.XLSOLE.objExtURL,filePath);
            return false;
        }
		var XLSAUTO = this.XLSOLE.ExtensionLib.XLSAUTO;

        var m_filepath = filePath;
        var m_sheetIndex = sheetName;
        var m_dataset = dataSet;
        var m_datasetSet = false;
        if (bDatasetOpt) {
            m_datasetSet = bDatasetOpt;
        }
        var m_excelColumn = false;
        if (bFirstRowColumn === true) {
            m_excelColumn = bFirstRowColumn;
        }
        var b_xlsReturn = XLSAUTO._CreateExcel(m_filepath);
        if (!b_xlsReturn) {
			this.importEnd(-1,"Open Not File",filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }
        b_xlsReturn = XLSAUTO._GetWorksheets();
        if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet Not File",filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }
        var SheetIndex = XLSAUTO._Worksheet_GetName(m_sheetIndex);
        if (SheetIndex == 0) {
			this.importEnd(-1,"GetWorkSheet Item Not File index:" + m_sheetIndex,filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }

        b_xlsReturn = XLSAUTO._Worksheets_GetItem(SheetIndex);
        if (!b_xlsReturn) {
			this.importEnd(-1,"GetWorkSheet Item Not File-- index:" + m_sheetIndex,filePath);
            XLSAUTO._CloseExcel();
			XLSAUTO = null;
            return false;
        }
        b_xlsReturn = XLSAUTO._Worksheet_GetUsedRange();
        if (!b_xlsReturn) {
			this.importEnd(-1,"WorkSheet Get Range Item Not File",filePath);
            XLSAUTO._CloseExcel();
            return false;
        }

        var RangeArray;
        RangeArray = XLSAUTO._Range_value();
        var xlsRowCount = RangeArray[0];
        var xlsColCount = RangeArray[1];
        var SafeArrayData;
        var m_MultiArray;
        var bRealValue = false;
        if (bNumRelValue == true) {
            bRealValue = true;
        }
        m_MultiArray = XLSAUTO._Range_valueArray(xlsRowCount, xlsColCount, bRealValue);
        m_dataset.set_enableevent(false);
		m_dataset.set_updatecontrol(false);
        var m_getColCnt = 0;
        if (m_datasetSet === false) {
            m_getColCnt = xlsColCount;
        } else {
            m_getColCnt = m_dataset.getColCount();
        }
        var CellData;
        var nRow = 0;
        var nCol = 0;
        if (StartRow > 0) {
            nRow = StartRow;
        }
        if (m_datasetSet === false) {
            m_dataset.clear();
            if (m_excelColumn == false) {
                for (var datset_nC = 0; datset_nC < m_getColCnt; datset_nC++) {
                    if (!strColumnID) {
                        strColumnID = "";
                    }
                    if (strColumnID.length > 0) {
                        m_dataset.addColumn(strColumnID + "" + datset_nC, "String", 256);
                    } else {
                        m_dataset.addColumn("Column" + datset_nC, "String", 256);
                    }
                }
            } else {
                for (var nR = 0; nR < 1; nR++) {
                    for (var datset_nC = 0; datset_nC < m_getColCnt; datset_nC++) {
                        CellData = (m_MultiArray[nR][datset_nC + nCol]);
                        m_dataset.addColumn(CellData, "String", 256);
                    }
                }
                if (nRow === 0) {
                    nRow += 1;
                }
            }
        } else {
            m_dataset.deleteAll();
            if (m_excelColumn == true) {
                for (var nR = 0; nR < 1; nR++) {
                    for (var datset_nC = 0; datset_nC < m_getColCnt; datset_nC++) {
                        CellData = (m_MultiArray[nR][datset_nC + nCol]);
                        m_dataset.updateColID(datset_nC, CellData);
                    }
                }
                if (nRow === 0) {
                    nRow += 1;
                }
            }
        }
        var nSkipCnt = 0;
        var bSucc = false;
        if (!bSetCellTrim) {
            bSetCellTrim = false;
        }
        for (var nR = 0; nR < (xlsRowCount - nRow); nR++) {
            m_dataset.addRow();
            for (var nC = 0; nC < (m_getColCnt - nCol); nC++) {
                CellData = (m_MultiArray[nR + nRow][nC + nCol]);

                if ((nEmptyCol_SkipRow >= 0) && ((nC + nCol) == nEmptyCol_SkipRow) && !CellData) {
                    bSucc = m_dataset.deleteRow(nR - nSkipCnt);
                    nSkipCnt++;
                    break;
                } else {
                    var szData = "";
                    if (bSetCellTrim) {
                        if ((CellData != undefined) && CellData.length > 0) {
                            szData = CellData.trim();
                        } else {
                            szData = CellData;
                        }
                    } else {
                        szData = CellData;
                    }
                    m_dataset.setColumn(nR - nSkipCnt, nC, szData);
                }
            }
        }
        m_dataset.set_enableevent(true);
		m_dataset.set_updatecontrol(true);
        XLSAUTO._CloseExcel();
		this.importEnd(0,"success",filePath);
        return true;
    };
	
	_pExcelImport.importEnd = function (code,msg,fileUrl) {
		var evt;
		if (code < 0) {
			evt = new nexacro.ExcelImportErrorEventInfoEx(this, "onerror", "ObjectError", msg, this, 9901);
			this.on_fire_onerror(this, evt);
		} else {
			evt = new nexacro.ExcelImportEventInfoEx(this, "onsuccess", fileUrl, this);
			this.on_fire_onsuccess(this, evt);
		}	
	};
	
	_pExcelImport.set_importtype = function (v) {
		switch ((v + "").toUpperCase()) {
			case "EXCEL":
				v = 0x0100;
				break;
			case "EXCEL97":
				v = 0x0110;
				break;
			case "EXCEL2007":
				v = 0x0120;
				break;
			case "HANCELL2010":
				v = 0x0400;
				break;
			case "HANCELL2014":
				v = 0x0410;
				break;
			case "CSV":
				v = 0x0500;
				break;
		}
		if (v != this.importtype) {
			this.importtype = v;
		}
		return v;
	};

	_pExcelImport.set_importurl = function (v) {
		return false;
	};

	_pExcelImport.set_commcompress = function (v) {
		return false;
	};

	_pExcelImport.set_importfilemode = function (v) {
		return false;
	};

	_pExcelImport.destroy = function () {
		var unique_id = this._unique_id;
		if (this.parent) {
			this.parent.removeChild(this.id);
		}
		this.parent = null;
		return true;
	};

	_pExcelImport.on_fire_onerror = function (obj, e) {
		this._setWaitCursor(false);
		var event = this.onerror;
		if (event && event._has_handlers) {
			event._fireEvent(this, e);
		}
	};

	_pExcelImport.on_fire_onsuccess = function (obj, e) {
		this._setWaitCursor(false);
		var event = this.onsuccess;
		if (event && event._has_handlers) {
			event._fireEvent(this, e);
		}
	};

	_pExcelImport._waitCursor = nexacro._emptyFn;
	_pExcelImport._setParamter = nexacro._emptyFn;

	_pExcelImport._getForm = function () {
		var app = nexacro.getApplication();
		var form;
		if (app) {
			form = app.getActiveForm();
			if (!form) {
				var mainframe = app.getActiveFrame();
				var pThis = this;
				while (pThis && mainframe != pThis) {
					if (!pThis._is_frame) {
						pThis = pThis.parent;
					}
					else if (pThis.form) {
						return pThis.form;
					}
				}
			}
		}
		return form;
	};

	_pExcelImport._setWaitCursor = function (wait_flag) {
		var form = this._getForm();
		if (form) {
			form.setWaitCursor(wait_flag, true);
		}
	};

	_pExcelImport._getWindow = function () {
		var form = this.parent;
		if (form._is_form) {
			return form._getWindow();
		}
		return null;
	};

	_pExcelImport._getWindowHandle = function () {
		var form = this.parent;
		if (form._is_form) {
			return form._getWindowHandle();
		}
		return null;
	};

	_pExcelImport._changeFiles = nexacro._emptyFn;

	delete _pExcelImport;
}
