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
if (!nexacro.ExcelExportObjectEx) {

    nexacro.ExportItemTypes.DATASET = 77;
    nexacro.ExportItemTypes.DATASETXML = 78;
	
	nexacro.ExcelExportProgressEventInfoEx = function (obj, id, itemindex, itemtype, recordindex, errorobj) {
		this.id = this.eventid = id || "onprogress";
		this.fromobject = obj;
		this.fromreferenceobject = errorobj;

		this.itemindex = itemindex;
		this.itemtype = itemtype;
		this.recordindex = recordindex;
	};
	var _pExportEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.ExcelExportProgressEventInfoEx);
	nexacro.ExcelExportProgressEventInfoEx.prototype = _pExportEventInfo;
	_pExportEventInfo._type_name = "ExcelExportProgressEventInfoEx";
	delete _pExportEventInfo;

	nexacro.ExcelExportEventInfoEx = function (obj, id, url, errorobj) {
		this.id = this.eventid = id || "onsuccess";
		this.fromobject = obj;
		this.fromreferenceobject = errorobj;

		this.url = url;
	};
	var _pExcelExportEventInfoEx = nexacro._createPrototype(nexacro.Event, nexacro.ExcelExportEventInfoEx);
	nexacro.ExcelExportEventInfoEx.prototype = _pExcelExportEventInfoEx;
	_pExcelExportEventInfoEx._type_name = "ExcelExportEventInfoEx";
	delete _pExcelExportEventInfoEx;

	nexacro.ExcelExportErrorEventInfoEx = function (obj, id, errortype, errormsg, errorobj, statuscode) {
		this.id = this.eventid = id || "onerror";
		this.fromobject = obj;
		this.fromreferenceobject = errorobj;

		this.errortype = errortype;
		this.errormsg = errormsg;
		this.statuscode = statuscode;
	};
	var _pExportErrorEventInfo = nexacro._createPrototype(nexacro.ErrorEventInfo, nexacro.ExcelExportErrorEventInfoEx);
	nexacro.ExcelExportErrorEventInfoEx.prototype = _pExportErrorEventInfo;
	_pExportErrorEventInfo._type_name = "ExcelExportErrorEventInfoEx";
	delete _pExportErrorEventInfo;

	nexacro.ExcelExportObjectEx = function (name, parent) {
		 if(nexacro._Browser != "Runtime") {
			 alert("RUNTIME에서만 가능합니다.");
			 return;
		 }

		if (!parent) {
			var app = nexacro.getApplication();
			if (app) {
				parent = app.getActiveForm();
				if (!parent) {
					var currwin = app.mainframe._window;
					var cur_focus_paths = currwin.getCurrentFocusPaths();
					var cur_focus_paths_len = (cur_focus_paths ? cur_focus_paths.length : 0);
					for (var i = 0; i < cur_focus_paths_len; i++) {
						var _comp = cur_focus_paths[i];
						if (!_comp) {
							continue;
						}
						if (_comp._is_form) {
							parent = _comp;
							break;
						}
					}
				}
			}
		}
		this.parent = parent;
		if(!name) name = parent.id + "_ExportEx_"; 
		this.id = this.name = name;

		this._grids = [];
		this._dataset = [];
		this._xml = [];

		this.onsuccess = new nexacro.EventListener("onsuccess");
		this.onprogress = new nexacro.EventListener("onprogress");
		this.onerror = new nexacro.EventListener("onerror");
		
		this.deleteDatasetGrid();
//		this._hidden_frame_handle = null;
//		nexacro._create_filedownload_handle(nexacro._emptyFn, this);
	};

	var _pExcelExport = nexacro.ExcelExportObjectEx.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.ExcelExportObjectEx);
	_pExcelExport._type_name = "ExportObjectEx";

	_pExcelExport.activepagename = "";
	_pExcelExport.exportactivemode = "active";
	_pExcelExport.exporteventtype = "itemrecord";
	_pExcelExport.exportfilename = "";

	_pExcelExport.exportmessagealert = "";
	_pExcelExport.exportmessagecomplete = "";
	_pExcelExport.exportmessageprocess = "";
	_pExcelExport.exportmessageready = "";

	_pExcelExport.exportopenmode = "noopen";

	_pExcelExport._exporttype = nexacro.ExportTypes.EXCEL;
	_pExcelExport.exporttype = nexacro.ExportTypes.EXCEL;
	_pExcelExport.exportuitype = "none";

	_pExcelExport.templatefilename = "";
	_pExcelExport.commdataformat = "";

	_pExcelExport.commcompress = "none";
	_pExcelExport.exporturl = "";

	_pExcelExport._exportuitype = 0;
	_pExcelExport._exporturl = "";
	_pExcelExport._commcompress = false;
	_pExcelExport._commdataformat = 2;

	_pExcelExport._allRowCount = 0;
	_pExcelExport._progress_pos = 0;
	_pExcelExport._uniqueIndex = 0;
	_pExcelExport._fileURL = "";
	_pExcelExport._itemsIndex = 0;

	_pExcelExport._argsParam = null;
	_pExcelExport._argsDsParam = null;
	_pExcelExport._is_orgval = false;
	_pExcelExport._file_password = null;

	_pExcelExport._exportBar = null;
	_pExcelExport._tempSaveMethod = null;
	_pExcelExport.modulepath = null;

	_pExcelExport.excelTypeTable = 
		{
		EXCEL : 0x0100, 
		EXCEL97 : 0x0110, 
		EXCEL2007 : 0x0120, 
		HANCELL2010 : 0x0400, 
		HANCELL2014 : 0x0410, 
		CSV : 0x0500, 
		256 : 0x0100, 
		272 : 0x0110, 
		288 : 0x0120, 
		1024 : 0x0400, 
		1040 : 0x0410, 
		1280 : 0x0500
	};
	
	// LIB ---------------------------------------------
	_pExcelExport.LIBExcel = 
	{
		ExtensionLib 	: null,
		objExtURL 		: "NexaExportObject.dll",
		bCreateLib 		: false,
		exportBar 		: null,
		activeSheetName : null,
		progressvalue	: 0,
		dummyid		: null
	};

    _pExcelExport.load_Module = function() {
        this.LIBExcel.ExtensionLib = nexacro._addExtensionModule(this.LIBExcel.objExtURL);
        return this.LIBExcel.ExtensionLib;
    };
	_pExcelExport.destroy = function () {
		
		this.deleteDatasetGrid();
		
		var exportbar = this._exportBar;
		if (exportbar) {
			exportbar.destroy();
		}
		if(this._grids) {
			for (var i = 0, len = this._grids.length; i < len; i++) {
				var item = this._grids.pop();
				if (item) {
					item._clear();
					item = null;
				}
			}
		}
		this._grids = null;
		this._dataset = null;
		this._grids = null;
		this._dataset = null;

		this._excel_suppress_info = null;
		this._merge_datas = null;
		this._xml.length = 0;
		
		this.LIBExcel = null;

		if (this.parent) {
			this.parent.removeChild(this.id);
		}
		nexacro._EventSinkObject.prototype.destroy.call(this);
		return true;
	};

    _pExcelExport.unload_Module = function() {
		//this.clear();
		var exportbar = this._exportBar;
		if (exportbar) {
			exportbar.destroy();
		}
		
		this.clearEventHandler("onsuccess");
		this.clearEventHandler("onprogress");
		this.clearEventHandler("onerror");
		
		this.onprogress = this.onerror = this.onsuccess = null;
        nexacro._clearExtensionModule(this.LIBExcel.objExtURL);
        this.LIBExcel.bCreateLib = false;
		this.LIBExcel.ExtensionLib = null;

        if (this.parent) {
            this.destroy();
        }
    };	
	_pExcelExport.set_modulePath = function (v) {
        if (v != this.LIBExcel.objExtURL) {
            this.LIBExcel.objExtURL = v;
			this.modulepath = v;
        }
	};
	_pExcelExport._event_list = 
		{
		"onsuccess" : 1, 
		"onerror" : 1, 
		"onprogress" : 1
	};
		
	_pExcelExport.on_created = nexacro._emptyFn;
	_pExcelExport.set_templatefilename = function (v) {
		if (v != this.templatefilename) {
			this.templatefilename = v;
		}
		return v;
	};

	_pExcelExport.set_commdataformat = function (v) {
		return false;
	};

	_pExcelExport.set_commcompress = function (v) {
		return false;
	};

	_pExcelExport.set_exporturl = function (v) {
		return false;
	};

	_pExcelExport.set_exporttype = function (v) {
		if (v != this.exporttype) {
			this.exporttype = v;
			var export_type = this.excelTypeTable[(v + "").toUpperCase()];
			if (!export_type) {
				export_type = 256;
			}
			this._exporttype = export_type;
		}
		return v;
	};

	_pExcelExport.set_activepagename = function (v) {
		if (v != this.activepagename) {
			this.activepagename = v;
		}
		return v;
	};

	_pExcelExport.set_exportactivemode = function (v) {
		if (v != this.exportactivemode) {
			this.exportactivemode = v;
		}
		return v;
	};

	_pExcelExport.set_exporteventtype = function (v) {
		if (v != this.exporteventtype) {
			this.exporteventtype = v;
		}
		return v;
	};

	_pExcelExport.set_exportopenmode = function (v) {
		if (v != this.exportopenmode) {
			this.exportopenmode = v;
		}
		return v;
	};

	_pExcelExport.set_exportfilename = function (v) {
		if (v != this.exportfilename) {
			var special_xmlchar = /[&"'\<\>\r\n\t\\\/]/g;
			if (v) {
				v.match(special_xmlchar);
			}
			this.exportfilename = v;
		}
		return v;
	};

	_pExcelExport.set_exportmessagealert = function (v) {
		if (v != this.exportmessagealert) {
			this.exportmessagealert = v;
		}
		return v;
	};

	_pExcelExport.set_exportuitype = function (v) {
		if (v != this.exportuitype) {
			this.exportuitype = v;
			switch (v) {
				case "exportprogress":
					this._exportuitype = 1;
					break;
				case "statusbar":
					this._exportuitype = 2;
					break;
				default:
					this._exportuitype = 0;
					break;
			}
		}
		return v;
	};

	_pExcelExport.set_exportmessageready = function (v) {
		if (v != this.exportmessageready) {
			this.exportmessageready = v;
		}

		return v;
	};

	_pExcelExport.set_exportmessageprocess = function (v) {
		if (v != this.exportmessageprocess) {
			this.exportmessageprocess = v;
		}

		return v;
	};

	_pExcelExport.set_exportmessagecomplete = function (v) {
		if (v != this.exportmessagecomplete) {
			this.exportmessagecomplete = v;
		}

		return v;
	};
    _pExcelExport.set_activeSheetName = function(v) {
        this.LIBExcel.activeSheetName = v;
    };

    _pExcelExport.set_progressvalue = function(v) {
        this.LIBExcel.progressvalue = v;
    };
	
   _pExcelExport.deleteDatasetGrid = function() {
	   var grd = this.LIBExcel.dummyid;
		if (grd) {
			var form = this._getForm();
			for (var i = 0; i < grd.length; i++) {
				var id = "exportds" + grd[i];
				var comp = form.components[id];
				if (comp) {
					try {
						comp.clear();
						form.removeChild(comp);
						comp.destroy();
					} catch (e) {
					}
					comp = null
				}
				id = "exportgrd" + grd[i];
				comp = form.components[id];
				if (comp) {
					try {
						form.removeChild(comp);
						comp.destroy();
					} catch (e) {

					}
					comp = null;
				}
			}
			form = null;
		}
		grd = this.LIBExcel.dummyid = null;
	};
	
    _pExcelExport.removeDatasetGrid = function(eitem, type) {
        var oDs = eitem.source._binddataset;
        var oGrd = eitem.source;
        var form = this._getForm();
        try {
            if (type == nexacro.ExportItemTypes.DATASETXML) {
                form.removeChild(oDs.name);
                oDs.destroy();
            }
            form.removeChild(oGrd.name);
            oGrd.destroy();
        } catch (e) {
        } finally {
			oGrd = oDs = form = null;
		}
    };

    _pExcelExport.makeDatasetGrid = function(type, item) {
        var form = this._getForm();
        var uid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        if (type == nexacro.ExportItemTypes.DATASETXML) {
            var ds = new Dataset;
            form.addChild("exportds" + uid, ds);
            ds.name = "exportds" + uid;
            ds.loadXML(item);
            item = ds;
        }
        var objGrid = new Grid();
        var sgrdid = "exportgrd" + uid;
        objGrid.init(sgrdid, 0, 0, 0, 0, null, null);
        objGrid.set_visible(false);
        form.addChild(sgrdid, objGrid);
        objGrid.show();
        objGrid.set_binddataset(item.name);
        objGrid.createFormat();
        if (!this.LIBExcel.dummyid) this.LIBExcel.dummyid = [];
        this.LIBExcel.dummyid[this.LIBExcel.dummyid.length] = uid;

        item = objGrid;
		/*
        for (var i = 0; i < objGrid.getCellCount("Body"); i++) {
            objGrid.setCellProperty("Body", i, "displaytype", "text");
        }
		*/
        return item;
    };

	_pExcelExport.addExportItem = function (type, item) {
		var size = -1;
		var eItem;
		if (arguments.length == 2) {
			if (type && item && item instanceof nexacro.ExportItemEx) {
				eItem = item;
				eItem.parent = this;
				eItem._setEventHandler("onprogress", this.on_notify_onprogress, this);
				eItem._setEventHandler("onsuccess", this.on_notify_onsuccess, this);
				eItem._setEventHandler("onerror", this.on_notify_onerror, this);
			} else {
				return -1;
			}
		} else {
            if (type == nexacro.ExportItemTypes.DATASET || type == nexacro.ExportItemTypes.DATASETXML) {
                if ((type == nexacro.ExportItemTypes.DATASET) && item._type_name != "Dataset") {
                    trace("Dataset not found : " + item);
                    this.deleteDatasetGrid();
                    return -1;
                }
                if ((type == nexacro.ExportItemTypes.DATASETXML) && typeof item != "string") {
                    trace("DATASETXML Error : " + item);
                    this.deleteDatasetGrid();
                    return -1;
                }
                item = this.makeDatasetGrid(type, item);
                type = nexacro.ExportItemTypes.GRID;
            }
			if (type && item && type == this._getItemType(item)) {
				eItem = new nexacro.ExportItemEx(this.id + "item" + this._uniqueIndex++, this);

				eItem._setEventHandler("onprogress", this.on_notify_onprogress, this);
				eItem._setEventHandler("onsuccess", this.on_notify_onsuccess, this);
				eItem._setEventHandler("onerror", this.on_notify_onerror, this);

				var len = arguments.length;
				switch (len) {
					case 11:
					case 10:
						arguments[9] && eItem.set_exportsize(arguments[9]);
					case 9:
						arguments[8] && eItem.set_exceptstyle(arguments[8]);
					case 8:
						arguments[7] && eItem.set_exportimage(arguments[7]);
					case 7:
						arguments[6] && eItem.set_exportvalue(arguments[6]);
					case 6:
						arguments[5] && eItem.set_exportmerge(arguments[5]);
					/*
					case 5:
						arguments[4] && eItem.set_exportselect(arguments[4]);
					*/	
					case 5:
						arguments[4] && eItem.set_exportfomular(arguments[4]);
					case 4:
						arguments[3] && eItem.set_exporthead(arguments[3]);
					case 3:
						arguments[2] && eItem.set_range(arguments[2]);
					case 2:
                        if ((type == nexacro.ExportItemTypes.DATASET) && item._type_name != "Dataset") {
                            arguments[1] && eItem["set_source"](item);
                        } else {
                            arguments[1] && eItem["set_source"](arguments[1]);
                        }						
						break;
				}
			} else {
				return -1;
			}
		}
		switch (type) {
			case nexacro.ExportItemTypes.GRID:
				eItem.set_type(type);
				size = this._grids.push(eItem) - 1;
				break;
			default :
		}
		return size;
	};

	_pExcelExport.clear = function () {
		
		this.deleteDatasetGrid();
		
		var count = 0;

		count += this._grids.length;
		count += this._dataset.length;
		count += this._xml.length;

		for (var i = 0, len = this._grids.length; i < len; i++) {
			var item = this._grids.pop();
			if (item) {
				item._clear();
				item = null;
			}
		}
		this._grids = [];
		this._dataset = [];
		this._xml = [];
		
		this.LIBExcel.dummyid = null;

		return count;
	};

	_pExcelExport.count = function () {
		var count = 0;

		count += this._grids.length;
		count += this._dataset.length;
		count += this._xml.length;

		return count;
	};

	_pExcelExport.exportData = function (argsParam, argsDsParam, bOrgValue) {
		if(!this.onsuccess) this.onsuccess = new nexacro.EventListener("onsuccess");
		if(!this.onprogress) this.onprogress = new nexacro.EventListener("onprogress");
		if(!this.onerror) this.onerror = new nexacro.EventListener("onerror");
		
		try {
			if (!this.LIBExcel.ExtensionLib) {
				this.on_fire_onerror(this, "SAVE", "DLL Load Failed : " + this.LIBExcel.objExtURL, -1);
				return false;
			}
			var exporttype = this.exporttype;
			if (exporttype != 0x0100 && exporttype != 0x0110 && exporttype != 0x0120) {
				return ret;
			}
			if (exporttype == 0x0100) {
				this.LIBExcel.bCreateLib = this.LIBExcel.ExtensionLib.LIBXL._libxl_xlCreateBook(false);
			} else if (exporttype == 0x0120) {
				this.LIBExcel.bCreateLib = this.LIBExcel.ExtensionLib.LIBXL._libxl_xlCreateBook(true);
			}
			if (!this.LIBExcel.bCreateLib) {
				this.on_fire_onerror(this, "SAVE", "Create WorkBook FAIL : " + this.LIBExcel.bCreateLib, -1);
				return false;
			}
			
			this._formats = new Array();
			this._customformats = new Array();
			
			this._argsParam = argsParam;
			this._argsDsParam = argsDsParam;
			this._is_orgval = bOrgValue ? true : false;
			var i;
			if (argsParam) {
				this._file_password = null;
				var userDatas = argsParam.split(",");
				for (i = 0, u_len = userDatas.length; i < u_len; i++) {
					var dataArr = userDatas[i].split("=");
					if (dataArr[0] == "filepassword") {
						this._file_password = dataArr[1];
						userDatas.splice(i, 1);
						argsParam = userDatas.join(",");
						break;
					}
					else if (dataArr[0] == "wraptext") {
						this._wrap_text = nexacro._toBoolean(dataArr[1]);
						userDatas.splice(i, 1);
					}
					else if (dataArr[0] == "contenttype") {
						var datatype = dataArr[1].toLowerCase();
						if (datatype == "csv") {
							this._commdataformat = 3;
						}
						else {
							this._commdataformat = 2;
						}
					}
				}
				argsParam = userDatas.join(",");
				this._argsParam = argsParam;
			}

			var ret = -1;
			var grid_items = this._grids;
			var g_len = this._gCount = grid_items.length;
			this._allCount = g_len;
			if (this._allCount > 0 && this.exportmessagealert != "") {
				alert(this.exportmessagealert);
			}
			var bRetArray = [];
			for (i = 0; i < g_len; i++) {
				this._allRowCount += grid_items[i].source._getGridRowCount();
				var bRetReturn = grid_items[i]._gridItemExport(this, i);
				bRetArray.push(bRetReturn);
			}

			var argFilePath = this.exportfilename;
			var ret = false;

			var nSuccCnt = 0;
			for (var index = 0; index < bRetArray.length; index++) {
				if (bRetArray[index] == true) {
					nSuccCnt++;
				}
			}
			if (nSuccCnt > 0) {
				ret = this.LIBExcel.ExtensionLib.LIBXL._book_save(argFilePath);
			}

			if (ret == true) {
				this.on_fire_onsuccess(this, argFilePath);
			} else {
				this.on_fire_onerror(this, "SAVE", "Save Error:" + argFilePath, -1);	
				this._formats = null;
				this._customformats = null;
				return false;
			}

			//2019.11.27 Add
			if(this._exportBar) {
				this._exportBar._hide();
				this._exportBar._set_pos(0);
				this._exportBar._set_text("");				
			}
						
		} catch (e) {
			this.on_fire_onerror(this, "SAVE", "Save Error:" + e.message, -1);	
			if(this._exportBar) {
				this._exportBar._hide();
				this._exportBar._set_pos(0);
				this._exportBar._set_text("");				
			}
			this._formats = null;
			this._customformats = null;
			return false;
		}

        this._formats = null;
		this._customformats = null;
		return this.count();
	};

	_pExcelExport.on_fire_onprogress = function (obj, e) {
		var event = this.onprogress;

		if (event && event._has_handlers) {
			event._fireEvent(this, e);
		}
	};

	_pExcelExport.on_fire_onsuccess = function (obj, url) {
		var event = this.onsuccess;
		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportEventInfo(obj, "onsuccess", url, this);
			event._fireEvent(this, evt);
		}		
	};

	_pExcelExport.on_fire_onerror = function (obj, type, msg, code) {
		var event = this.onerror;
		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportErrorEventInfoEx(this, "onerror", type, msg, this, code);
			event._fireEvent(this, evt);
		}
	};

	_pExcelExport.on_notify_onprogress = function (obj, e) {
		this.on_fire_onprogress(obj, e);
		return false;
	};

	_pExcelExport.on_notify_onsuccess = function (obj, e) {
		this.on_fire_onsuccess(obj, e);
		return false;
	};

	_pExcelExport.on_notify_onerror = function (obj, e) {
		this.on_fire_onerror(obj, e);
		return false;
	};

	_pExcelExport._getItemType = function (item) {
		var rt;
		switch (item && item._type_name) {
			case "Grid":
				rt = nexacro.ExportItemTypes.GRID;
				break;
            case "Dataset":
                rt = nexacro.ExportItemTypes.DATASET;
                break;
            case "Xml":
                rt = nexacro.ExportItemTypes.DATASETXML;
                break;				
			default:
				if (item instanceof nexacro.Grid) {
					rt = nexacro.ExportItemTypes.GRID;
				}
				break;
		}
		return rt;
	};

	_pExcelExport._getProcessStr = function (item, itemrecord, totalrecord) {
		var str = "";
		str = this.exportmessageprocess.replace("%d", item);
		str = str.replace("%d", itemrecord);
		str = str.replace("%d", totalrecord);

		return str;
	};

	_pExcelExport._getForm = function () {
		if (this.parent instanceof nexacro.Form) {
			return this.parent;
		}
		return null;
	};

	_pExcelExport._getExportBar = function (uiType) {
		var form = this._getForm();
		var pbar_name = "_exportBar";
		var obj = form[pbar_name];
		if (obj) {
			obj.destroy();
		}
		obj = new nexacro.ExportProgress(pbar_name, 0, 0, 10, 10, null, null, null, null, null, null, form);
		form.addChild(obj.name, obj);
		obj._uitype = uiType;
		if (obj.createComponent(true)) {
			obj.on_created();
		}
		return obj;
	};

	_pExcelExport._excelCharToNum = function(alpha) {
		var index = 0
		for (var i = 0, j = 1; i < j; i++, j++) {
			if (alpha == this._excelNumToChar(i)) {
				index = i;
				j = i;
			}
		}
		return index;
	};

	_pExcelExport._excelNumToChar = function(number) {
		var numeric = (number - 1) % 26;
		var letter = this._excelChr(65 + numeric);
		var number2 = parseInt((number - 1) / 26);
		if (number2 > 0) {
			return this._excelNumToChar(number2) + letter;
		} else {
			return letter;
		}
	};

	_pExcelExport._excelChr = function(codePt) {
		if (codePt > 0xFFFF) {
			codePt -= 0x10000;
			return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
		}
		return String.fromCharCode(codePt);
	};

	delete _pExcelExport;

	nexacro.ExportItemEx = function (name, parent) {
		this.id = this.name = name;
		this.parent = parent || null;

		this._gridTempInfo = null;
		this._merge_datas = null;
		this._tmpSuppressInfos = undefined;
		this._stylecache = {
		};
		this._excel_suppress_info = {
		};
	};

	var _pExportItem = nexacro.ExportItemEx.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.ExportItemEx);
	_pExportItem._type_name = "ExportItemEx";


	_pExportItem.exceptstyle = "";
	_pExportItem.exporthead = "allband";
	_pExportItem._exporthead = "";
	_pExportItem.exportimage = "none";
	_pExportItem.exportmerge = "suppress";
	_pExportItem._exportmerge = 1;
	_pExportItem.exportselect = "allrecord";
	_pExportItem.exportvalue = "allstyle";
	_pExportItem.exportsize = "width";

	_pExportItem.range = "";
	_pExportItem.source = "";
	_pExportItem.type = "";
	_pExportItem.rowIndex = -1;

	_pExportItem._applyA = true;
	_pExportItem._applyB = true;
	_pExportItem._applyC = true;
	_pExportItem._applyF = true;
	_pExportItem._applyS = true;
	_pExportItem._applyHead = true;
	_pExportItem._applySumm = true;
	_pExportItem._applyFomular = false;
	_pExportItem._applyL = true;
	_pExportItem._d_BLColor = "";

	_pExportItem._seq = 1;
	_pExportItem._preStartRow = 0;
	_pExportItem._startRow = 0;
	_pExportItem._eof = false;
	_pExportItem._instanceId = "";

	_pExportItem._a_ct = 0;
	_pExportItem._bg_ct = 0;
	_pExportItem._c_ct = 0;
	_pExportItem._f_ct = 0;
	_pExportItem._l_ct = 0;
	_pExportItem._t_ct = 0;
	_pExportItem._sm_ct = 0;
	_pExportItem._g_ct = 0;
	_pExportItem._s_ct = 0;
	//_pExportItem._stylecache = {
	//};
	_pExportItem._selectcount = 0;
	//_pExportItem._merge_datas = null;
	//_pExportItem._excel_suppress_info = {
	//};

	//_pExportItem._gridTempInfo = null;

	//_pExportItem._tmpSuppressInfos = undefined;
	_pExportItem._event_list = {
		"onsuccess" : 1, 
		"onprogress" : 1, 
		"onerror" : 1
	};

	_pExportItem._suppress_align_table = {
		"first" : "top", 
		"first,over" : "top", 
		"middle" : "middle", 
		"middle,over" : "middle", 
		"last" : "bottom", 
		"last,over" : "bottom"
	};

	_pExportItem._clear = function () {

		if (this._merge_datas) {
			this._merge_datas = null;
		}
		if (this._stylecache) {
			this._stylecache = null;
		}
		if (this.source) {
			this.source = null;
		}
		if (this._gridTempInfo) {
			this._gridTempInfo = null;
		}
		if (this._excel_suppress_info) {
			this._excel_suppress_info = null;
		}

		if (this._tmpSuppressInfos) {
			this._tmpSuppressInfos = null;
		}
	};

	_pExportItem.set_exceptstyle = function (v) {
		if (v != this.exceptstyle) {
			this.exceptstyle = v;
			var except = v.replace(/ /g, "").split(",");
			var eLen = except.length;
			for (var i = 0; i < eLen; i++) {
				switch (except[i].toLowerCase()) {
					case "align":
						this._applyA = false;
						break;
					case "background":
						this._applyB = false;
						break;
					case "color":
						this._applyC = false;
						break;
					case "font":
						this._applyF = false;
						break;
					case "border":
						this._applyL = false;
						break;
					case "suppress":
						this._applyS = false;
						break;
					case "none":
						this._applyA = true;
						this._applyB = true;
						this._applyC = true;
						this._applyF = true;
						this._applyL = true;
						this._applyS = true;
				}
			}
		}

		return v;
	};

	_pExportItem.set_exporthead = function (v) {
		if (v != this.exporthead) {
			this.exporthead = v;
			var except = v.replace(/ /g, "").split(",");
			var eLen = except.length;
			for (var i = 0; i < eLen; i++) {
				switch (except[i].toLowerCase()) {
					case "nohead":
						this._applyHead = false;
						break;
					case "nosumm":
						this._applySumm = false;
						break;
					default:
						this._applySumm = true;
						this._applySumm = true;
						break;
				}
			}
		}
		if (!this._applyHead || !this._applySumm) {
			if (!this._applyHead && !this._applySumm) {
				this._exporthead = "nohead, nosumm";
			}
			else if (!this._applyHead) {
				this._exporthead = "nohead";
			}
			else {
				this._exporthead = "nosumm";
			}
		}
		else {
			this._exporthead = "allband";
		}

		return v;
	};

	_pExportItem.set_exportimage = function (v) {
		if (v != this.exportimage) {
			this.exportimage = v;
		}

		return v;
	};

	_pExportItem.set_exportmerge = function (v) {
		if (v != this.exportmerge) {
			this.exportmerge = v;
			switch (v) {
				case "nosuppress":
					this._exportmerge = 0;
					break;
				case "merge":
					this._exportmerge = 2;
					break;
				default:
					this._exportmerge = 1;
					break;
			}
		}
		return v;
	};

	_pExportItem.set_exportfomular = function (v) {
		if(v !== true) v = false;
		if (v != this._applyFomular) {
			this._applyFomular = v;
		}
		return v;
	};
	_pExportItem.set_exportselect = function (v) {
		if (v != this.exportselect) {
			this.exportselect = v;
		}
		return v;
	};
	_pExportItem.set_exportvalue = function (v) {
		if (v != this.exportvalue) {
			this.exportvalue = v;
		}
		return v;
	};

	_pExportItem.set_range = function (v) {
		if (v != this.range) {
			this.range = v;
		}

		return v;
	};

	_pExportItem.set_source = function (v) {
		if (v != this.source) {
			this.source = v;
		}

		return v;
	};

	_pExportItem.set_type = function (v) {
		if (v != this.type) {
			this.type = v;
		}

		return v;
	};

	_pExportItem.set_exportsize = function (v) {
		if (v != this.exportsize) {
			this.exportsize = v;
		}
		return v;
	};

	_pExportItem.on_fire_onprogress = function (obj, itemindex, itemtype, recordindex) {
		var event = this.parent.onprogress;

		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportProgressEventInfoEx(obj, "onprogress", itemindex, itemtype, recordindex, this);
			event._fireEvent(this, evt);
		}
	};

	_pExportItem.on_fire_onsuccess = function (obj, referObj, url) {
		var event = this.parent.onsuccess;

		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportEventInfoEx(obj, "onsuccess", url, this);
			event._fireEvent(this, evt);
		}
	};

	_pExportItem.on_fire_onerror = function (obj, errortype, errormsg, statuscode) {
		var event = this.parent.onerror;

		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportErrorEventInfoEx(obj, "onerror", errortype, errormsg, this, statuscode);
			event._fireEvent(this, evt);
		}
	};

	_pExportItem._getWindow = function () {
		var excelexport = this.parent;
		if (excelexport) {
			var form = excelexport.parent;
			if (form._is_form) {
				return form._getWindow();
			}
		}
		return null;
	};

	_pExportItem._getWindowHandle = function () {
		var excelexport = this.parent;
		if (excelexport) {
			var form = excelexport.parent;
			if (form._is_form) {
				return form._getWindowHandle();
			}
		}
		return null;
	};
	
	_pExportItem._getFixedCellType = function (cell, rowidx) {
		var cell_type = cell._getDisplaytype(rowidx);
		var displaytype = "";
		switch (cell_type) {
			case "number":
				break;
			case "maskeditcontrol":
			case "mask":
				var format = cell._getAttrValue(cell.maskeditformat, rowidx);
				if (format != null && format.length != 0) {
					displaytype = format;
				}

				var masktype = cell._getAttrValue(cell.maskedittype, rowidx);
				if (masktype == "number") {
					cell_type = "number";
				}
				else {
					cell_type = "text";
				}

				break;
			case "calendarcontrol":
			case "date":
			case "time":
			case "datetime":
				cell_type = "date";
				var format = cell._getAttrValue(cell.calendardateformat, rowidx);
				if (format == null || format.length == 0 || !format.match(/LONGDATE|SHORTDATE|[yMdHhms]/)) {
					format = "yyyy-MM-dd";
				}
				else {
					var locale = cell._getAttrValue(cell.locale, rowidx);
					if (!locale) {
						locale = nexacro._BrowserLang;
					}

					if (format == "SHORTDATE") {
						format = nexacro.Locale._makeDateMaskString(locale, format);
						if (format == "") {
							format = nexacro.Locale._default_shortdate_format;
						}
					}
					else if (format == "LONGDATE") {
						format = nexacro.Locale._makeDateMaskString(locale, "SHORTDATE");
						if (format == "") {
							format = nexacro.Locale._default_longdate_format;
						}
					}
				}
				displaytype = format;
				break;
			case "imagecontrol":
				if (this.exportimage.toLowerCase() == "image") {
					displaytype += "image";
				}
				cell_type = "text";
				break;
			case "text":
				if (cell._getAttrValue(cell.displaytype, rowidx) == "normal") {
					cell_type = "normal";
				}
				else {
					cell_type = "text";
				}
				break;
			default:
				cell_type = "text";
				break;
		}
		return cell_type + (displaytype ? ":" + displaytype : "");
	};
	
	//2019.11.22 Arg 추가.bSubCellUse: SubCell 의 Style 을 취득 하려 함. / nCell: Sub Cell 로 구성된 Cell 의 인덱스를 설정합니다
	_pExportItem._getCellStyle2 = function (cell, rowIdx, odd, sn, status, bSubCellUse, nCellIndex) {
		var cellStyleinfo;
		var userstatus = status == true ? "selected" : undefined;
		
		switch (sn) {
			case "align":
				if(rowIdx < 0) {
					var grd = cell._grid;
					var band = rowIdx==-1?"head":"summ";
					var ha = "";
					var va = "";
					if(bSubCellUse){
						ha = grd.getSubCellProperty(band,nCellIndex,cell._cellidx,"textAlign");
						va = grd.getSubCellProperty(band,nCellIndex,cell._cellidx,"verticalAlign");
					}else{
						ha = grd.getCellProperty(band,cell._cellidx,"textAlign");
						va = grd.getCellProperty(band,cell._cellidx,"verticalAlign");
					}

					if(!ha) ha = "";
					if(!va) va = "";
					cellStyleinfo = ha + "," + va;
					grd = band = null;
				} else {
					cellStyleinfo = cell._query_status_align(rowIdx, cell.displaytype, userstatus);
				}
				break;
			case "background":
				if(rowIdx < 0) {
					var grd = cell._grid;
					var band = rowIdx==-1?"head":"summ";
					var bg = "";

					if(bSubCellUse){
						bg = grd.getSubCellProperty(band,nCellIndex,cell._cellidx,"background");
					}else{
						bg = grd.getCellProperty(band,cell._cellidx,"background");
					}

					if(bg) {
						var arr = bg.split(",");
						cellStyleinfo = arr[0];
					} else {
						cellStyleinfo = cell._query_status_background(rowIdx, userstatus);
						if(!cellStyleinfo || cellStyleinfo == "") {
							cellStyleinfo = cell._grid._getCellStyleInfo(cell._cellidx, "background", rowIdx, userstatus);
						}
					}
					grd = band = null;
				} 
				else 
				{
					cellStyleinfo = cell._query_status_background(rowIdx, userstatus);
				}
				break;
			case "border":
				cellStyleinfo = cell._query_status_border(rowIdx, userstatus);
				cellStyleinfo = nexacro.BorderObject(cellStyleinfo);
				break;
			case "color":
				cellStyleinfo = cell._query_status_color(rowIdx, userstatus);
				break;
			case "font":
				cellStyleinfo = cell._query_status_font(rowIdx, userstatus);
				break;
			case "textDecoration":
				cellStyleinfo = cell._grid._getCellStyleInfo(cell._cellidx, "textDecoration", rowIdx, userstatus);
				if (cellStyleinfo) {
					cellStyleinfo = cellStyleinfo.match(/underline|line-through/g);
					if (cellStyleinfo) {
						cellStyleinfo = cellStyleinfo.join(",");
						cellStyleinfo = cellStyleinfo.replace("line-through", "strikeout");
					}
				}
				break;	
		}
		cell = null;
		return cellStyleinfo;
	};

	_pExportItem._getCellText = function (source, rowidx, cellidx) {
		var celltext;
		if (source && source instanceof nexacro.Grid) {
			var band;
			if (rowidx == -1) {
				band = "head";
			} else if (rowidx == -2) {
				band = "summ";
			} else {
				band = "body";
			}

			var export_obj = this.parent;
			if (source.getSubCellCount(band, cellidx)) {
				if (export_obj._is_orgval) {
					celltext = source.getSubCellValue(rowidx, cellidx, 0);
				}
				else {
					celltext = source.getSubCellText(rowidx, cellidx, 0);
				}
			}
			else {
				if (export_obj._is_orgval) {
					celltext = source.getCellValue(rowidx, cellidx);
				}
				else {
					celltext = source.getCellText(rowidx, cellidx);
				}
			}
		}
		return celltext;
	};

	_pExportItem._getFitValue = function (obj) {
		if (!obj) {
			return;
		}

		var str = this._fontParseInfo(obj._sysvalue);

		return str;
	};

	_pExportItem._getFitFontValue = function (fontval) {
		if(fontval.indexOf("/")>=0) {
			var fv = fontval.split(" ");
			fontval = "";
			if(fv.length == 4) {
				fontval += fv[0];
				var x = fv[2];
				if(fv[2].indexOf("/")>=0) {
					x = fv[2].split("/")[0];
				}
				fontval += "," + nexacro.replaceAll(x,'px',"");
				fontval += "," + nexacro.replaceAll(fv[3],'"',"");
				return fontval;
			}
		}
		var size = this._default_size, face = this._default_face, type;

		if (fontval) {
			var font = new nexacro._FontObject();
			font._parseInfo(fontval);

			size = font.size;
			type = font.type;
			face = font.face;
		}

		return type + "," + size + "," + face;
	};

	_pExportItem._getHEXtoRGB2 = function (color) {
		var rgb = "transparent";
		if (color) {
			if (typeof color == "object") {
				rgb = this._getHexColor(color.value.split(" ")[0]);
			}
			else if (typeof (color) == "string" && (color.indexOf("rgb(") >= 0) || (color.indexOf("RGB(") >= 0)) {
				rgb = "rgbstring";
			}
			else if (typeof (color) == "string" && (color.indexOf("rgba(") >= 0) || (color.indexOf("RGBA(") >= 0)) {
				rgb = "rgbastring";
			}
			else {
				rgb = this._getHexColor(color);
			}
			var style_a = [];

			if (rgb === "") {
				rgb = color._value;
			}
			else {
				if (rgb.indexOf("#") > -1) {
					style_a.push(parseInt(rgb.substring(1, 3), 16));
					style_a.push(parseInt(rgb.substring(3, 5), 16));
					style_a.push(parseInt(rgb.substring(5, 7), 16));
					rgb = style_a.join(",");
				}
				else if (rgb == "rgbstring") {
					color = color.substring(4, 17);
					color = color.split(",");

					for (var i = 0; i < color.length; i++) {
						color[i] = parseInt(color[i]);
					}
					rgb = color.join(",");
				}
				else if (rgb == "rgbastring" || rgb == "transparent") {
					rgb = "transparent";
				}
				else {
					var start = rgb.indexOf("(");
					var end = rgb.indexOf(")");
					style_a = rgb.substring(start + 1, end - 1).split(",");
					style_a.pop();
					rgb = style_a.join(",");
				}
			}
		}
		return rgb;
	};

	_pExportItem._checkExpr = function (obj, cssclass) {
		if (cssclass && cssclass._bindtype > 0) {
			return true;
		}

		if (obj && obj._bindtype > 0) {
			return true;
		}

		return false;
	};

	_pExportItem._checkGradation = function (background) {
		return false;
	};

	_pExportItem._getHexColor = function (color) {
		var v = nexacro._xreNamedColorList[color];
		if (v) {
			return v;
		}

		len = color.length;
		if (color.substring(0, 1) == '#') {
			if (len == 7) {
				return color;
			}
			if (len > 7) {
				return color.substr(0, 7);
			}
		}
		if (color.substring(0, 2) == "0x") {
			if (len == 8) {
				return "#" + color.substring(2);
			}
			if (len == 10) {
				return "#" + color.substring(2, 8);
			}
		}
		return "";
	};

	_pExportItem._getGradationColor = function (gradation) {
		var gColor;
		var gColor2;
		var gArr = [];
		if (gradation) {
			gColor = gradation._value;
			if (gColor != "") {
				gColor = this._getHexColor(gradation.start_color);
				gColor2 = this._getHexColor(gradation.end_color);

				if (gColor.indexOf("#") > -1) {
					var name = gColor + gColor2;
					if (this._stylecache[name]) {
						return this._stylecache[name];
					}
					else {
						gArr.push(Math.round((parseInt(gColor.substring(1, 3), 16) + parseInt(gColor2.substring(1, 3), 16)) / 2));
						gArr.push(Math.round((parseInt(gColor.substring(3, 5), 16) + parseInt(gColor2.substring(3, 5), 16)) / 2));
						gArr.push(Math.round((parseInt(gColor.substring(5), 16) + parseInt(gColor2.substring(5), 16)) / 2));
						gColor = gArr.join(",");
						this._stylecache[name] = gColor;
					}
				}
				return gColor;
			}
		}
		return "";
	};
	
	_pExportItem._getCellBodyStyle2 = function (cell, idx, nDataType, sMask) {
		var align, background, background2, color, color2, font, line, gradation, gradation2, c_style, c_style2, _background2, _color2;

		var str = "";
		var viewType = cell.displaytype._value;
		var _linestyle = "empty:empty:empty:empty";
		var linecolor;

		align = cell._query_status_align(0, viewType);
		if(align == "undefined,undefined") align = ",";
		background = cell._query_status_background(0);
		color = cell._query_status_color(0);
		font = cell._query_status_font(0);

		if (this._applyL) {
			line = cell._query_status_border(0);
			line = nexacro.BorderObject(line);
		}

		background2 = cell._query_status_background(1);
		color2 = cell._query_status_color(1);

		if (this._checkGradation(background)) {
		} else {
			var _background = this._getHEXtoRGB2(background);
		}

		var _color = this._getHEXtoRGB2(color);
		var _font = this._getFitFontValue(font);

		if (this._applyL && line) {
			if (line.right && line.right.style != "none" && line.right._width != 0) {
				linecolor = this._getHEXtoRGB2(line.right.color);
				if(!linecolor) {
					linecolor = this._getHEXtoRGB2(line.bottom.color);
				}
			}
		}
		if (align == ",") {
			 align = "left,";
			if(nDataType > 1 && nDataType < 5) {
				align = "right,";
			}
			if(viewType == "normal") {
				if(nDataType>4) align = "center,";
			}
			if(viewType == "number") {
				align = "right,";
			}
			if(cell.textAlign == "right") align = "right,";
		}
		var _align = align;
		if (this._checkExpr(align, cell.cssclass)) {
			if(cell.textAlign == "right") {
				this._stylecache[idx + "align"] = _align;
			} else {
				_align = undefined;
			}
		} else {
			this._stylecache[idx + "align"] = _align;
		}
		if (this._checkExpr(background, cell.cssclass)) {
			_background = undefined;
		} else {
			this._stylecache[idx + "background0"] = _background;
		}
		if (this._checkExpr(color, cell.cssclass)) {
			_color = undefined;
		}
		else {
			this._stylecache[idx + "color0"] = _color;
		}
		if (this._checkExpr(font, cell.cssclass)) {
			_font = undefined;
		} else {
			this._stylecache[idx + "font"] = _font;
		}
		if (this._checkExpr(line, cell.cssclass)) {
			_line = undefined;
		} else {
			this._stylecache[idx + "line"] = linecolor;
		}

		if (background2) {
			if (this._checkGradation(background2)) {
				gradation2 = cell._stylecache.gradationtruefalsenormal;
				if (!gradation2) {
					gradation2 = cell.style.gradation2;
					if (!gradation2) {
						gradation2 = cell._query_pseudo_gradation(0, true, false, "enabled");
					}
				}
				var _background2 = this._getGradationColor(gradation2);
			}
			else {
				var _background2 = this._getHEXtoRGB2(background2);
			}
			if (this._checkExpr(background2, cell.cssclass)) {
				_background2 = undefined;
			}
			else {
				this._stylecache[idx + "background1"] = _background2;
			}
		} else {
			this._stylecache[idx + "background1"] = _background2 = _background;
		}
		if (color2) {
			var _color2 = this._getHEXtoRGB2(color2);
			if (this._checkExpr(color2, cell.cssclass)) {
			} else {
				this._stylecache[idx + "color1"] = _color2;
			}
		}
		else {
			this._stylecache[idx + "color1"] = _color2 = _color;
		}
	};
	
	_pExportItem._getForm = function () {
		return this.parent.parent;
	};

	_pExportItem._updateBarPos = function (exportObj, eventtype) {
		if (eventtype != "none" && exportObj._exportuitype) {
			var itemIndex = exportObj._itemsIndex;
			var exportbar = exportObj._exportBar;
			
			exportObj._progress_pos += this._startRow - this._preStartRow;
			var processStr = "";
			var is_end = this._startRow == this._bodyRowCnt;
			if (eventtype == "item" && is_end) {
				processStr = exportObj._getProcessStr(itemIndex + 1, exportObj._progress_pos, exportObj._allRowCount);
				exportbar._set_text(processStr);
				exportbar._set_pos((itemIndex + 1) / exportObj._allCount * 100);
			}
			else if (eventtype == "itemrecord") {
				processStr = exportObj._getProcessStr(itemIndex + 1, this._startRow, this._bodyRowCnt);
				exportbar._set_text(processStr);
				exportbar._set_pos(this._startRow / this._bodyRowCnt * 100);
			}
			else if (eventtype == "totalrecord") {
				processStr = exportObj._getProcessStr(itemIndex + 1, exportObj._progress_pos, exportObj._allRowCount);
				exportbar._set_text(processStr);
				exportbar._set_pos(exportObj._progress_pos / exportObj._allRowCount * 100);
			}
			if (exportObj._progress_pos == exportObj._allRowCount && exportObj.exportmessagecomplete != "") {
				exportbar._set_text(exportObj.exportmessagecomplete);
			}
		}
	};

	_pExportItem._rollbackSuppressInfo = function () {
		var cells = this.source._curFormat._bodycells;
		var supLen = this._tmpSuppressInfos && this._tmpSuppressInfos.length;
		for (var i = 0; i < supLen; i++) {
			cells[i]._suppress_infos = this._tmpSuppressInfos.shift();
		}
	};

	_pExportItem._gridSuppressUpdate = function (grid, rowcount) {
		var cells = grid._curFormat._bodycells;
		var cLen = cells.length;
		this._tmpSuppressInfos = [];
		for (var i = 0; i < cLen; i++) {
			this._tmpSuppressInfos.push(cells[i]._suppress_infos);
		}

		grid._analyzeSuppress(true);

		for (var i = 0; i < rowcount; i++) {
			grid._suppressUpdateRow(i, 0, rowcount - 1, true);
		}
	};

	_pExportItem._gridItemExport = function(exportObj, idx) {
		var uiType = exportObj._exportuitype;
		var exportbar = exportObj._exportBar;
		if (exportObj.exporteventtype != "none" && uiType) {
			if (!exportbar || exportbar._uitype != uiType) {
				exportbar = exportObj._exportBar = exportObj._getExportBar(uiType);
				var str = exportObj._getProcessStr(exportObj.count(), exportObj._allRowCount, exportObj._allRowCount);
				str = nexacro._getLongerStr(str, exportObj.exportmessagecomplete, exportObj.exportmessageready);
				var font = exportbar.font || exportbar._getCurrentStyleInheritValue("font");
				var tSize = nexacro._getTextSize(str, font);
				exportbar._textWidth = tSize[0];
				exportbar._textHeight = tSize[1];
			}

			if (exportObj._itemsIndex == 0 && exportObj.exportmessageready != "") {
				exportbar._set_text(exportObj.exportmessageready);
			}

			exportbar._set_text("작업 중");
			exportbar._show();
		}

		var grid = this.source;
        if (grid.getCellCount("body") <= 0) {
            var event = this.parent.onerror;
            if (event && event._has_handlers) {
                var evt = new nexacro.ExcelExportErrorEventInfoEx(obj, "onerror", "Grid Not Column", grid.name, this, 101);
                event._fireEvent(this, evt);
            }
            return false;
        }
		if (grid._hasTree) {
			this._gridTempInfo = {
			};
			exportObj._tempSaveMethod = nexacro.Grid.prototype._recreate_contents_all;
			nexacro.Grid.prototype._recreate_contents_all = nexacro._emptyFn;
			this._gridTempInfo.enableevent = grid.enableevent;
			grid.enableevent = false;
			this._gridTempInfo.treeIndexes = grid._treeIndexes.slice(0);
			this._gridTempInfo.treeStates = grid._treeStates.slice(0);
			this._gridTempInfo.treeinitstatus = grid.treeinitstatus;
			grid.set_treeinitstatus("expand,all");
		}		
		var rowStart = 1;
		var colStart = 1;
		var strSheetName = this.range.split("!");

		var nPos = -1;
		var sRange = strSheetName[1];
		for (var i = 0; i < sRange.length; i++) {
			if (nexacro.isNumeric(sRange.substr(i, 1))) {
				nPos = i;
				break;
			}
		}
		if (nPos < 1) {
			rowStart = 1;
			colStart = 1;
		}
		var alpha = sRange.substr(0, nPos);
		rowStart = nexacro.toNumber(sRange.substr(nPos));
		colStart = nexacro.toNumber(exportObj._excelCharToNum(alpha));
		var LIBExcel = exportObj.LIBExcel.ExtensionLib.LIBXL;
		var nSheetCnt = LIBExcel._book_sheetCount();
		var bSheetCreate = false;
		if (nSheetCnt <= 0) {
			bSheetCreate = LIBExcel._book_addSheet(strSheetName[0]);
		} else {
			var nIndex = LIBExcel._book_setCurrentSheet(strSheetName[0]);
			if (nIndex < 0) {
				bSheetCreate = LIBExcel._book_addSheet(strSheetName[0]);
			}
		}

		var nExcelRowIndex = 0;
		if (this._applyHead == false) {
			nExcelRowIndex = rowStart;
		} else {
			try {
				nExcelRowIndex = this._ExportGridHeader(grid, exportObj, rowStart - 1, colStart - 1);
			} catch(e) {
				var event = this.parent.onerror;
				if (event && event._has_handlers) {
					var evt = new nexacro.ExcelExportErrorEventInfoEx(obj, "onerror", e.message, grid.name, this, 101);
					event._fireEvent(this, evt);
				}
			}
		}

		var grdheadcells = grid._curFormat._headcells;
		if (grdheadcells == null || nExcelRowIndex == 0) {	// NO HEADER
			if (nExcelRowIndex < 0) {
				nExcelRowIndex = 1;
			} else {
				nExcelRowIndex = rowStart;
			}
		}
		grdheadcells = null;
		if (grid.summary != null) {
			if (grid.summarytype == "top") {
				if (this._applySumm) {
					try {
						nExcelRowIndex = this._ExportGridSummary(grid, exportObj, nExcelRowIndex - 1, colStart - 1);
					} catch(e) {
						var event = this.parent.onerror;
						if (event && event._has_handlers) {
							var evt = new nexacro.ExcelExportErrorEventInfoEx(obj, "onerror", e.message, grid.name, this, 101);
							event._fireEvent(this, evt);
						}
					}					
				}
			}
		}
		if (grid._getGridRowCount(true) != 0) {
			try {
				nExcelRowIndex = this._ExportGridBody(grid, exportObj, nExcelRowIndex - 1, colStart - 1);
			} catch(e) {
				var event = this.parent.onerror;
				if (event && event._has_handlers) {
					var evt = new nexacro.ExcelExportErrorEventInfoEx(obj, "onerror", e.message, grid.name, this, 101);
					event._fireEvent(this, evt);
				}
			}
		}
		if (grid.summary != null) {
			if (grid.summarytype == "default") {
				if (this._applySumm) {
					try {
						nExcelRowIndex = this._ExportGridSummary(grid, exportObj, nExcelRowIndex, colStart - 1);
					} catch(e) {
						var event = this.parent.onerror;
						if (event && event._has_handlers) {
							var evt = new nexacro.ExcelExportErrorEventInfoEx(obj, "onerror", e.message, grid.name, this, 101);
							event._fireEvent(this, evt);
						}
					}						
				}
			}
		}
		if (grid._hasTree) {
			grid.set_treeinitstatus(this._gridTempInfo.treeinitstatus);
			nexacro.Grid.prototype._recreate_contents_all = exportObj._tempSaveMethod;
			exportObj._tempSaveMethod = null;
			grid._treeIndexes = this._gridTempInfo.treeIndexes;
			grid._treeStates = this._gridTempInfo.treeStates;
			grid.enableevent = this._gridTempInfo.enableevent;
			this._gridTempInfo = null;
		}		

		this._updateBarPos(exportObj, exportObj.exporteventtype);
		
		var _win = this._getWindow();
		if (nexacro._Browser == "Runtime") {
			if(typeof(nexacro._peekWindowHandleMessageQueuePassing) == "function") {
				nexacro._peekWindowHandleMessageQueuePassing(_win,"keyboard","mouse");
			} else {
				LIBExcel._progress_Idle();
			}
		}

		if (exportbar) {
			exportbar._set_pos(0);
			exportbar._set_text("");
		}

		if (exportObj.LIBExcel.activeSheetName) {
			var strSheetNamem = [];
			strSheetName = this.range.split("!");
			if (strSheetName[0] == exportObj.LIBExcel.activeSheetName) {
				exportObj.LIBExcel.ExtensionLib.LIBXL._book_setActiveSheet(idx);
			}
		}
		LIBExcel = grid = null;
		
		return true;
	};
	
    _pExportItem._isDecValue = function(strText) {
		if(!strText || strText == "") return false;
		if(strText.toString().indexOf(".")>=0) return true;
		
		return false;
    };

    _pExportItem._findStyle = function(exportObj, st) {
        var arrFormat = exportObj._formats;
        for (var iii = 0; iii < arrFormat.length; iii++) {
            if (arrFormat[iii] == st) {
                exportObj.LIBExcel.ExtensionLib.LIBXL._xls_setCurrentData(0, iii);
                return iii;
            }
        }
        exportObj.LIBExcel.ExtensionLib.LIBXL._book_addFormatArray(arrFormat.length);
        arrFormat[arrFormat.length] = st;
		return -1;
	};
	
	_pExportItem._getCovertMaskStyle = function(szDipType, mask)
	{
		var szDisplayType = szDipType;
		var maskData = mask;
		if(szDisplayType != "date" || szDisplayType != "date2" ) //날짜가 아닌 경우에만.
		{
			if ((maskData.indexOf("!") >= 0) || (maskData.indexOf("+") >= 0 ) || (maskData.indexOf("-") >= 0 ))
			{
				maskData = maskData.substring(1);
			}
			if(maskData && maskData.indexOf("9")>=0) 
			{
				maskData = nexacro._replaceAll(maskData,'9', '#');
			}
			maskData = nexacro._replaceAll(maskData,"#.", "0.");
			maskData = nexacro._replaceAll(maskData,".#", ".0");
		}
		return maskData;
	}
	
	_pExportItem._setFormatStyle = function(grid, exportObj, nRow, nCell, cellInfo, sType, nDataType, rowcnt, j, rowStart, 
											nCol, colStart, is_suppress, bShowText, cellText, cellValue, cell_Displaytype, m_mask, border_value, bSubCellUse ) {

		var cacheA, cacheB, cacheC, cacheF, cacheL, right_linecolor,bottom_linecolor;
		var _write = {
					"type" 	: "S",
					"row" 	: -1,
					"col" 	: -1,
					"wrap" 	: false,
					"value"	: (!cellText?"":cellText),
					"dumm"	: null
		};
		var LIBExcel = exportObj.LIBExcel.ExtensionLib.LIBXL;
		_write.row = (j * rowcnt) + (nRow + rowStart);
		_write.col = nCol + colStart;
		
		if(sType=="head") nRow = -1;
		else if(sType=="summ") nRow = -2;
		
		var styleList = "";
		var backgroundCell, alignCell, fontCell, colorCell, lineCell;
		var odd = 0;
		var nStyleRow;
		if(nRow >= 0) {
			nStyleRow = j;
			odd = nRow % 2;
		} else {
			nStyleRow = nRow;
		}
		// NUM FORMAT
		var NUM_FORMAT_TYPE;
		if(m_mask == "") m_mask = null;

        switch (nDataType) {
            case 1:
                if (cellText === null || cellText === undefined || cellText === "") {
					_write.type = "B";
				} else {
                    if (is_suppress >= 1 && bShowText == false) {
						_write.type = "B";
                    } else {
                        if (cellText.indexOf("\n") >= 0) {
							_write.type = "S";
							_write.wrap = true;
                        }
						if (cell_Displaytype == "mask" || cell_Displaytype == "maskeditcontrol") {
							if(m_mask) {
								if(!isNaN(cellValue)) {
									var currencyFormat = /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/;
									var rtn = currencyFormat.test(cellText);
									if(rtn == true) {
										var bValueType = this._isDecValue(cellText);
										var FLOAT_CUSTOM_FORMAT = -1;
										if (exportObj.exporttype != 0x0120) {
											FLOAT_CUSTOM_FORMAT = this._getMaskCustomFormat(exportObj, "#,##0.########");
										}
										var NUMFORMAT_NUMBER_SEP = 3;
										if (bValueType) {
											NUM_FORMAT_TYPE = FLOAT_CUSTOM_FORMAT;
											_write.dumm = 1;
										} else {
											NUM_FORMAT_TYPE = NUMFORMAT_NUMBER_SEP;
										}
										_write.type = "N";
										_write.value = cellValue;
									}
								} else {
									NUM_FORMAT_TYPE = this._getMaskCustomFormat(exportObj, m_mask);
									_write.type = "S";
								}
							} else {
								_write.type = "S";
								_write.value = cellText;
							}
						} else if(sType != "body" && cell_Displaytype == "number" && cellText == "0") {
							_write.type = "N";
							NUM_FORMAT_TYPE = this._getMaskCustomFormat(exportObj, "#,##0");
							_write.value = 0;
						} else if ((this._applyFomular === true) && (cell_Displaytype == "normal" || cell_Displaytype == "text") && (this._WriteFormula(cellText) == true)) {
                            var nlen = cellText.length;
                            var strFormula = cellText.substring(1, nlen).toUpperCase();
							_write.type = "F";
							_write.value = strFormula;
                        } else {
							_write.type = "S";
                            if (cell_Displaytype == "text") {
								NUM_FORMAT_TYPE = 49;
							}
                        }
                    }
                }
                break;
            case 2:
				/* [2019.07.08 ADD 주석 처리. 2 ~ 4 번가지 모두 숫자. ]
                if (is_suppress >= 1 && bShowText == false) {
					_write.type = "B";
                } else {
                    if (m_mask && m_mask.length > 0) {
                        NUM_FORMAT_TYPE = this._getMaskCustomFormat(exportObj, m_mask);
                    } else {
						var bValueType = this._isDecValue(cellText);
						trace("number: " + bValueType + " Value[ " + cellText + " ]");
                        var FLOAT_CUSTOM_FORMAT = -1;
                        if (exportObj.exporttype != 0x0120) {
                            FLOAT_CUSTOM_FORMAT = this._getMaskCustomFormat(exportObj, "#,##0.########"); //[2016.09.12] excel 2003 표현 소수점 마스크 처리
                        }
                        var NUMFORMAT_NUMBER_SEP = 3;
                        if (bValueType) {
							NUM_FORMAT_TYPE = FLOAT_CUSTOM_FORMAT;
                        } else {
							NUM_FORMAT_TYPE = this._getMaskCustomFormat(exportObj, "#,###");;
                        }
                    }
					_write.type = "N";
					_write.value = cellValue;
					_write.dumm = 1;
                }
				break;
				//*/
            case 3:
            case 4:
                if (cellText === null || cellText === undefined || cellText === "" || cellValue === null || cellValue === undefined || cellValue === "") {
					_write.type = "B";
                } else {
                    if (is_suppress >= 1 && bShowText == false) {
						_write.type = "B";
                    } else {
                        if (m_mask && m_mask.length > 0) {
                            NUM_FORMAT_TYPE = this._getMaskCustomFormat(exportObj, m_mask);
                        } else {
                            var bValueType = this._isDecValue(cellValue);
                            var FLOAT_CUSTOM_FORMAT = -1;
                            if (exportObj.exporttype != 0x0120) {
                                FLOAT_CUSTOM_FORMAT = this._getMaskCustomFormat(exportObj, "#,##0.########"); //[2016.09.12] excel 2003 표현 소수점 마스크 처리
                            }
                            if (bValueType) {
								NUM_FORMAT_TYPE = FLOAT_CUSTOM_FORMAT;
                            } else {
								NUM_FORMAT_TYPE = 3;
                            }
                        }
						_write.type = "N";
						_write.value = cellValue;
						_write.dumm = 1;
                    }
				}
				
			
                break;
            case 6:
            case 7:
            case 5:
                if (cellValue != null && cellValue != "" && cellValue != undefined) {
                    if (is_suppress >= 1 && bShowText == false) {
						_write.type = "B";
                    } else {
                        var year = 0;
                        var month = 0;
                        var date = 0;
                        var hour = 0;
                        var minuties = 0;
                        var sec = 0;
                        var msec = 0;
                        if (typeof(cellValue) == "string" || cellValue.length > 7) {
                            year = cellValue.substring(0, 4);
                            month = cellValue.substring(4, 6);
                            date = cellValue.substring(6, 8);
							hour = cellValue.substring(8, 10);
							minuties = cellValue.substring(10, 12);
							sec = cellValue.substring(12, 14);
                        } else {
                            year = cellValue.getFullYear();
                            month = cellValue.getMonth() + 1;
                            date = cellValue.getDate();
							if(cellText.length<11) {
								hour = minuties = sec = msec = null;
							} else {
								hour = cellValue.getHours();
								minuties = cellValue.getMinutes();
								sec = cellValue.getSeconds();
								msec = cellValue.getMilliseconds();
							}
                        }
						/*
                        var timeonly = false;
                        if (m_mask && m_mask.length > 0 && m_mask != "SHORTDATE" && m_mask != "LONGDATE") {
                            timeonly = true;
                            var controlcalendar = grid.controlcalendar;
                            for (var i = 0, l = m_mask.length; i < l; i++) {
                                if (controlcalendar._isDateMaskString(m_mask.charAt(i))) {
                                    timeonly = false;
                                    break;
                                }
                            }
                            if (timeonly) {
                                year = 0;
                                month = 0;
                                date = 0;
								if( hour == null || minuties == null || sec == null || msec == null ) {
									hour = cellValue.getHours();
									minuties = cellValue.getMinutes();
									sec = cellValue.getSeconds();
									msec = cellValue.getMilliseconds(); 
								}
                            }
                        }
						*/
						
                        var NUMFORMAT_DATE = 14;
                        if (nDataType == 7 || nDataType == 6) {
                            NUMFORMAT_DATE = 22;
                        }

                        if (is_suppress >= 1 && bShowText == false) {
							_write.type = "B";
                        } else {
                            var bDateMaskFormat = true;
                            if (m_mask && m_mask.length > 0) {
                                if (m_mask.indexOf("@@") >= 0 || m_mask.indexOf("##") >= 0) {
                                    bDateMaskFormat = false;
                                }
                            }
							if(!msec) msec = 0;
                            if (bDateMaskFormat == true) {
                                if (m_mask && m_mask.length > 0) {
									if(cellValue.length == 6 && (m_mask.toLowerCase() == "yyyy/mm" || m_mask.toLowerCase() == "yyyy-mm") && (date == null || date < 1))
									{
										_write.type = "S";
										_write.value = cellText;
									} else {
										NUM_FORMAT_TYPE = this._getMaskCustomFormat(exportObj, m_mask);
										var datePackTmp = LIBExcel._book_datePack(year, month, date, hour, minuties, sec, msec);
										_write.type = "N";
										_write.value = datePackTmp;
										_write.dumm = 1;
									}
                                } else {
                                    if (nDataType == 6 || (year == 0 && month == 1 && date == 1)) { 
										_write.type = "S";
										_write.value = cellText;
                                    } else {
										NUM_FORMAT_TYPE = NUMFORMAT_DATE;
                                        var datePackA = LIBExcel._book_datePack(year, month, date, hour, minuties, sec, msec);
										_write.type = "N";
										_write.value = datePackA;
										_write.dumm = 1;
                                    }
                                }
                            } else {
                                var datePack = LIBExcel._book_datePack(year, month, date, hour, minuties, sec, msec);
								NUM_FORMAT_TYPE = NUMFORMAT_DATE;
								_write.type = "N";
								_write.value = datePack;
								_write.dumm = 1;
                            }
                        }
                    }
                } else {
                    _write.type = "B";
                }
				
                break;
            default:
                break;
        }
		styleList += "|MASK:" + m_mask;
		styleList += "|NUMFORMAT:" + NUM_FORMAT_TYPE;
		styleList += "|DATATYPE:" + _write.type;
		styleList += "|WRAP:" + _write.wrap;
		
		var cacheindex = nCell;
		if(sType == "body") 
		{
			var iscssclassexpr = this._checkExpr(null, cellInfo.cssclass);
			var cssclasses = iscssclassexpr ? cellInfo._getAttrValue(cellInfo.cssclass, nStyleRow) : "";
			cacheindex = nCell + (cssclasses ? cssclasses : "");
			
			cacheA = this._stylecache[cacheindex + "align"];
			cacheL = this._stylecache[cacheindex + "line"];
			cacheB = this._stylecache[cacheindex + "background" + odd];
			cacheC = this._stylecache[cacheindex + "color" + odd];
			cacheF = this._stylecache[cacheindex + "font" ];

			if(nexacro._isNull(cacheA)) cacheA = null;
			if(nexacro._isNull(cacheB)) cacheB = null;
			if(nexacro._isNull(cacheC)) cacheC = null;
			if(nexacro._isNull(cacheF)) cacheF = null;
			if(nexacro._isNull(cacheL)) cacheL = null;
		}

		if(this._applyA == false) {
			alignCell = null;
		} else {
			//if (cacheA) {
			if (!nexacro._isNull(cacheA)) {
				alignCell = cacheA;
			} else {
				//2019.11.22 Arg 추가.
				//bSubCellUse: SubCell 의 Style 을 취득 하려 함.
				//nCell: Sub Cell 로 구성된 Cell 의 인덱스를 설정합니다
				alignCell = this._getCellStyle2(cellInfo, nStyleRow, odd, "align", false, bSubCellUse, nCell);

				if (iscssclassexpr) {
					this._stylecache[cacheindex + "align"] = alignCell;
				}
			}
			if(alignCell == "undefined,undefined") alignCell = "left,middle";
		}
		styleList += "|ALIGN:" + alignCell;
		
		

		if(this._applyB == false) {
			backgroundCell = null;
		} else {		
			//if (cacheB) {
			if (!nexacro._isNull(cacheB)) {
				backgroundCell = cacheB;
			} else {
				//2019.11.22 Arg 추가.
				//bSubCellUse: SubCell 의 Style 을 취득 하려 함.
				//nCellIndex: Sub Cell 로 구성된 Cell 의 인덱스를 설정합니다
				var col = this._getCellStyle2(cellInfo, nStyleRow, odd, "background", false, bSubCellUse, nCell);

				if(col == "") {
					if(sType != "body") {
						exportObj.parent.sleep(5);	// style 처리가 정상적으로 되지 않는다.
					}
					//2019.11.22 Arg 추가.
					//bSubCellUse: SubCell 의 Style 을 취득 하려 함.
					//nCellIndex: Sub Cell 로 구성된 Cell 의 인덱스를 설정합니다
					col = this._getCellStyle2(cellInfo, nStyleRow, odd, "background", false, bSubCellUse, nCell);
				}
				backgroundCell = this._getHEXtoRGB2(col);

				if (iscssclassexpr) {
					this._stylecache[cacheindex + "background" + odd] = backgroundCell;
				}

				if(backgroundCell == "255,255,255") backgroundCell = null;
			}
			//if(backgroundCell == "transparent") backgroundCell = "255,255,255";
		}
		styleList += "|BACKCOLOR:" + backgroundCell;
		
		if(this._applyC == false) {
			colorCell = "0,0,0";
		} else {		
			//if (cacheC) {
			if (!nexacro._isNull(cacheC)) {
				colorCell = cacheC;
			} else {
				colorCell = this._getHEXtoRGB2(this._getCellStyle2(cellInfo, nStyleRow, odd, "color", false));

				if (iscssclassexpr) {
					this._stylecache[cacheindex + "color" + odd] = colorCell;
				}

				if(!colorCell || colorCell == "") colorCell = "0,0,0";
			}
		}
		styleList += "|COLOR:" + colorCell;

		if(this._applyF == false) {
			fontCell = null;
		} else {
			//if (cacheF) {
			if (!nexacro._isNull(cacheF)) {
				fontCell = cacheF;
			} else {
				fontCell = this._getFitFontValue(this._getCellStyle2(cellInfo, nStyleRow, odd, "font", false));

				if (iscssclassexpr) {
					this._stylecache[cacheindex + "font"] = fontCell;
				}

			}
			if(fontCell == "undefined,undefined,undefined") fontCell = null;
		}
		styleList += "|FONT:" + fontCell;

		if (this._applyL == false) {
			border_value = null;
			lineCell = null;
		} else {
			//if (cacheL) {
			if (!nexacro._isNull(cacheL)) {
				lineCell = cacheL;
			} else {
				if (this._applyL) {
					var line;
					line = this._getCellStyle2(cellInfo, nStyleRow, odd, "border", false);
					if(line.right) {
						linecolor = this._getHEXtoRGB2(line.right.color);
					} else if(line.top) {
						linecolor = this._getHEXtoRGB2(line.top.color);
					}
					lineCell = linecolor;
				} else {
					lineCell = "0,0,0";
				}
				
				if (iscssclassexpr) {
					this._stylecache[cacheindex + "line"] = lineCell;
				}
			}
			if(!lineCell) {
				lineCell = "0,0,0";
			} else {
				var arrLineCell = lineCell.split(":")
				for(var iline=0;iline<arrLineCell.length;iline++) {
					if(arrLineCell[iline].indexOf(",")>=0) {
						lineCell = arrLineCell[iline];
						break;
					}
				}
			}
		}
		styleList += "|LINE:" + lineCell;
		
		if(border_value) {
			styleList += "|BORDER:" + border_value;
		}
		
		var supp = -1;
		var supp_top = true;
		var supp_btm = true;
		if (this._applyS == true) {
			if (sType == "body") {
				var is_suppress = cellInfo.suppress;
				if (is_suppress && is_suppress._value >= 1) {
					var suppress_infos = cellInfo._suppress_infos;
					supp = suppress_infos[j].border_proc;
					supp_top = suppress_infos[j].first;
					supp_btm = suppress_infos[j].last;
					/*
					var psuppinfo = cellInfo._getSuppressInfo(nStyleRow);
					supp = psuppinfo.border_proc;
					supp_top = psuppinfo.first;
					supp_btm = psuppinfo.last;
					psuppinfo = null;
					*/
					is_suppress = true;
				} else {
					is_suppress = false;
				}
			}
		}
		styleList += "|SUPPRESS:" + supp +"_" + supp_top + "_" + supp_btm;
		var nFindStyle = this._findStyle(exportObj, styleList);
		if(nFindStyle<0) {
			if (alignCell) {
				var spAlign = alignCell.split(",");
				if(spAlign.length == 2) {
					var halign = spAlign[0];
					var valign = spAlign[1];
					if(halign == "center" || halign == "" || !halign) halign = "middle";
					if(valign == "center" || valign == "" || !valign) valign = "middle";
					LIBExcel._fomat_setAlignH(halign);
					LIBExcel._fomat_setAlignV(valign);
				} else {
					LIBExcel._fomat_setAlignH("midlle");
					LIBExcel._fomat_setAlignV("middle");
				}
			}
				
			if(fontCell) {
				var arrFontCell = fontCell.split(",");
				if(arrFontCell.length>2) {
					var fs = arrFontCell[arrFontCell.length-2];
					var ft = arrFontCell[arrFontCell.length-1];
					if(!fs) fs = 12;
					fs = parseInt(fs * 72 / 96);
					LIBExcel._font_setSize(fs);
					LIBExcel._font_setName("arial");
				}
				arrFontCell = null;
				
				var UpperfontCell = fontCell.toUpperCase();
				if(UpperfontCell.indexOf("BOLD")>=0) LIBExcel._font_setBold(true);
				if(UpperfontCell.indexOf("STRIKEOUT")>=0) LIBExcel._font_setStrikeOut(true);
				if(UpperfontCell.indexOf("ITALIC")>=0) LIBExcel._font_setItalic(true);
				if(UpperfontCell.indexOf("UNDERLINE")>=0) LIBExcel._font_setUnderline(true);
				
				var arrColorCell = colorCell.split(",");
				if(arrColorCell.length == 3) {
					LIBExcel._font_setColor(arrColorCell[0], arrColorCell[1], arrColorCell[2]);
				} else if(arrColorCell.length >= 1) {
					LIBExcel._font_setColor(arrColorCell[0], arrColorCell[0], arrColorCell[0]);
				} else {
					LIBExcel._font_setColor(0, 0, 0);
				}
				arrColorCell = null;
				LIBExcel._fomat_setFont();
			}

			if (lineCell) {
				var arrLine = lineCell.split(",");
				LIBExcel._fomat_setBorderColor(arrLine[0], arrLine[1], arrLine[2]);
				LIBExcel._fomat_setBorder();		
				arrLine = null;
			}

			if(backgroundCell) {
				if(backgroundCell == "transparent") LIBExcel._fomat_setPatternForegroundColor(255, 255, 255);
				else {
					var arrBG = backgroundCell.split(",");
					LIBExcel._fomat_setPatternForegroundColor(arrBG[0], arrBG[1], arrBG[2]);
					arrBG = null;
				}
				LIBExcel._fomat_setFillPattern();		
			}

		   if (supp != -1) {
				if (supp_top == true && supp_btm == false) {
					LIBExcel._fomat_setBorderBottom();
				} else if (supp_top == false && supp_btm == true) {
					LIBExcel._fomat_setBorderTop();
				} else if (supp_top == false && supp_btm == false) {
					LIBExcel._fomat_setBorderTop();
					LIBExcel._fomat_setBorderBottom();
				}
			} else if(border_value) {
				if(border_value.indexOf("L")>=0) LIBExcel._fomat_setBorderLeft();
				if(border_value.indexOf("T")>=0) LIBExcel._fomat_setBorderTop();
				if(border_value.indexOf("B")>=0) LIBExcel._fomat_setBorderBottom();
				if(border_value.indexOf("R")>=0) LIBExcel._fomat_setBorderRight();
			}
			if(NUM_FORMAT_TYPE) {
				LIBExcel._fomat_setNumFormat(NUM_FORMAT_TYPE);
			}
		}

		if(_write.type == "B") {
			LIBExcel._sheet_writeBlank(_write.row, _write.col);
		} else if(_write.type == "S") {
			LIBExcel._sheet_writeStr(_write.row, _write.col, _write.value);
			if(_write.wrap == true) {
				LIBExcel._fomat_setWrap();
			}
		} else if(_write.type == "F") {
			LIBExcel._sheet_writeFormula(_write.row, _write.col, _write.value);
		} else if(_write.type == "N") {
			LIBExcel._sheet_writeNum(_write.row, _write.col, _write.value, _write.dumm);
		}
		LIBExcel = null;
	};
	
    _pExportItem._WriteFormula = function(strCelldata) {
        var m_strData;
        m_strData = strCelldata;
        var m_bReturn = false;
        if (m_strData.indexOf("=") == 0) {
            m_bReturn = true;
        }
        return m_bReturn;
    };

    _pExportItem._getMaskCustomFormat = function(exportObj, mask) {
        if (mask.length <= 0)
            return -1;
		
		var arrFormat = exportObj._customformats;
        for (var iii = 0; iii < arrFormat.length; iii++) {
            if (arrFormat[iii] == mask) {
				var strCustom = exportObj.LIBExcel.ExtensionLib.LIBXL._book_CustomNumFormat(iii); //mask index
                return iii;
            }
        }

        var nIdx = exportObj.LIBExcel.ExtensionLib.LIBXL._book_addCustomNumFormat(mask); //mask add
        var strCustom = exportObj.LIBExcel.ExtensionLib.LIBXL._book_CustomNumFormat(nIdx); //mask index
        return nIdx;
    };
	
	_pExportItem._getDataType = function(exportObj, cell_Displaytype, nDataType, cellText, cellValue, mask, expr) {
		switch (cell_Displaytype) {
			case "text":
				nDataType = 1;
				break;
			case "normal":
				if(nDataType == 5 || nDataType == 6 || nDataType == 7) {	// normal + dataset = date
					nDataType = 1;
				}
				break;
			case "mask":
			case "maskeditcontrol":
				if(cellValue == undefined || cellValue == null) {
					nDataType = 1;
				} else if(isNaN(cellValue)) {
					nDataType = 1;
				}
				break;
			case "number":
			case "exponent":
			case "currency":
				if(!cellValue || !cellText) {
					if(cellValue !== 0 && cellText !== "0") {
						nDataType = 1;
						cellText = "";
					}
				} else {
					if(typeof(cellValue) == "string") {
						cellValue = nexacro.toNumber(cellValue);
					}
				}
				if(isNaN(cellValue)) {
					cellValue = cellText;
				}				
				break;
			case "date":
			case "date2":
				nDataType = 5;
				break;
			case "time":
				nDataType = 6;
				break;
			case "datetime":
				nDataType = 7;
				break;
			case "decoratetext":
			case "image":
			default:
				nDataType = 1;
				break;
		}
		if(expr) {
			if(cellText) {
				if(!isNaN(cellValue)) {
					var currencyFormat = /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/;
					var rtn = currencyFormat.test(cellText);
					if(rtn) {
						nDataType = 4;
					}
				}
			}
		}
		//----------------------------------------------------------------------------------------------
		//	1 : STRING	2 : INT	3 : FLOAT	4 : BIGDECIMAL	5 : DATE	6 : TIME	7 : DATETIME	
		//----------------------------------------------------------------------------------------------
		var sType = "STRING";
		switch (nDataType) {
			case 1:
				sType = "STRING";
				break;
			case 2:
			case 3:
			case 4:
				if(!cellValue || !cellText) {
					if(cellValue !== 0 && cellText !== "0") {
						nDataType = 1;
						cellText = "";
					} else {
						sType = "NUMBER";
					}
				} else {
					var bDecValue = this._isDecValue(cellText); //소수점이 있으면, DECIMAL
					if (bDecValue) {
						sType = "DECIMAL";
					} else {
						sType = "NUMBER";
					}
					if(typeof(cellValue) == "string") {
						cellValue = nexacro.toNumber(cellValue);
					}					
				}
				break;
			case 5:
			case 6:
			case 7:
				sType = "DATE";
				/*
				if (typeof(cellValue) == "string") {
					cellValue = this._getDisplayText_To_Date(grid, bodyCells[i], j);
				}
				*/
				break;
			default:
				break;
		}
		if(nDataType == undefined) {
			nDataType = 1;
			sType = "STRING";
		}
		return [nDataType,sType,cellText,cellValue];
	};
	
    _pExportItem._ExportGridHeader = function(grid, exportObj, rowStart, colStart) {
        var format = grid._curFormat;
        var hCells = headcells = format._headcells;
        var nCells = grid.getCellCount("Head");

        var nCol, nRow;
        var rowHeight, colWidth;

        var HEAD_ROW = -1;
        var cellText;
        var beforeRows = -1;
        //for merge
        var rowFirst = 0;
        var rowLast = 0;
        var colFirst = 0;
        var colLast = 0;
		var cell;
		var displaytype = "";

        if (headcells == null)
            return rowStart;
		
		var _win = this._getWindow();

		var LIBExcel = exportObj.LIBExcel.ExtensionLib.LIBXL;
        for (var i = 0; i < headcells.length; i++) {
			
			if (nexacro._Browser == "Runtime") {
				if(typeof(nexacro._peekWindowHandleMessageQueuePassing) == "function") {
					nexacro._peekWindowHandleMessageQueuePassing(_win,"keyboard","mouse");
				} else {
					LIBExcel._progress_Idle();
				}
			}

            cell = headcells[i];

            nCol = cell._col;
            nRow = cell._row;

            colWidth = grid.getRealColSize(nCol);
            rowHeight = grid.getFormatRowSize(nRow);
            cellText = grid.getCellText(HEAD_ROW, i);
			
			displaytype = grid.getCellProperty("head",i,"displaytype");
			if("decoratetext" == displaytype) {
				cellText = nexacro._getDisplayTextfromDecorateText(cellText)
			}

            var cellsubcnt = grid.getSubCellCount("head", i);
            if (cellText == undefined || cellText == null || cellText == "") {
                if (cellsubcnt >= 2) {
                    var cellsubText = "";
                    for (var j = 0; j < cellsubcnt; j++) {
                        cellsubText += grid.getSubCellText(HEAD_ROW, i, j);
                        if (cellsubcnt > j + 1) {
                            cellsubText += "\r\n";
                        }
                    }
                    cellText = cellsubText;
                }
            }
            var nType = "";
			this._setFormatStyle(grid, exportObj, nRow, i, cell, "head", 1, 0, 0, rowStart, 
								 nCol, colStart, false, true, cellText, cellText, "normal", null);			
						
            LIBExcel._sheet_setRow(nRow + rowStart, rowHeight * 0.75);
            LIBExcel._sheet_setCol(nCol + colStart, nCol + colStart, colWidth * 0.143);

            rowFirst = rowLast = nRow;
            colFirst = colLast = nCol;

            colLast += headcells[i]._colspan - 1;
            rowLast += headcells[i]._rowspan - 1;

            if (rowFirst != rowLast || colFirst != colLast) {
                LIBExcel._sheet_setMerge(rowFirst + rowStart, rowLast + rowStart, colFirst + colStart, colLast + colStart);
            }
            beforeRows = nRow;

            if (cellsubcnt >= 2 || (cellText && (cellText.indexOf("\n") >= 0))) {
                LIBExcel._sheet_writeStr(nRow + rowStart, nCol + colStart, cellText);
            }
        }

        this.rowIndex = format._headrows.length + rowStart + 1;
		LIBExcel = null;

        return this.rowIndex;
    };	

   _pExportItem._ExportGridSummary = function(grid, exportObj, rowStart, colStart) {
        var format = grid._curFormat;
        var summcells = format._summcells;
		var sLen = summcells ? summcells.length : 0;
		
		var nHeadRows = 0;
        var objGrd = grid;
        var nCol, nRow;
		var rowHeight = 0;
		var colWidth = 0;
		
		var nSummCols = grid.getFormatColCount();
        var nSummRows = grid.getFormatRowCount();
        var SUMM_ROW = -2;

        var cellText;
        var cellValue;
        var beforeRows = -1;

        var rowFirst = 0;
        var rowLast = 0;
        var colFirst = 0;
        var colLast = 0;
		var cell,cell_DisplayFormatType,mask,m_mask,cell_Displaytype,expr;

        var sType = "";
		var nDataType = 0;
		var rtnData;
		var displaytype = "";
		var LIBExcel = exportObj.LIBExcel.ExtensionLib.LIBXL;
		
		var _win = this._getWindow();

		for (var i = 0; i < summcells.length; i++) {

			if (nexacro._Browser == "Runtime") {
				if(typeof(nexacro._peekWindowHandleMessageQueuePassing) == "function") {
					nexacro._peekWindowHandleMessageQueuePassing(_win,"keyboard","mouse");
				} else {
					LIBExcel._progress_Idle();
				}
			}

            cell = summcells[i];

            nCol = cell._col;
            nRow = cell._row;

            colWidth = grid.getRealColSize(nCol);
			var TmpHeight = grid.getRealRowSize(nCol, nRow);
			if( rowHeight < TmpHeight){
				rowHeight = TmpHeight;
			}

            cellText = grid.getCellText(SUMM_ROW, i);
            cellValue = cell._getDisplayText_text(nRow);	//cellValue = grid.getCellValue(SUMM_ROW, i);
			mask = grid.getCellProperty("summ",i,"maskeditformat");
			expr = grid.getCellProperty("summ",i,"expr");
			displaytype = grid.getCellProperty("summ",i,"displaytype");

			if("decoratetext" == displaytype) {
				cellText = nexacro._getDisplayTextfromDecorateText(cellText)
			}				
			if(mask.indexOf("expr")>=0) {
				cell_DisplayFormatType = this._getFixedCellType(cell,nRow);
			} else {
				cell_DisplayFormatType = mask?mask:"";
			}
			m_mask = "";
			if (cell_DisplayFormatType.indexOf(":")>=0) {
				var as = cell_DisplayFormatType.split(":");
				if(as.length>1) {
					m_mask = as[1];
					if(m_mask && m_mask.indexOf("9")>=0) {
						if(cellText == "" || cellText == undefined || cellText == "0"  ) {
							m_mask = "#,##0";
						} else {
							m_mask = this._getCovertMaskStyle(cell._getDisplaytype(SUMM_ROW),m_mask);
						}
					}
				}
				as = null;
			}
			nDataType = 1;
            if (cellText == undefined || cellText == null || cellText == "") {
                sType = "STRING";
            } else {
                cell_Displaytype = cell._getDisplaytype(SUMM_ROW);
				switch (cell_Displaytype) {
					case "text":
						sType = "STRING";
						break;					
					case "normal":
					case "number":
					case "exponent":
					case "currency":
						if(!cellValue || isNaN(cellValue)) {
							nDataType = 1;
							cellText = "";
						} else {
							nDataType = 4;
							sType = "NUMBER";
							var bDecValue = this._isDecValue(cellText);
							if (bDecValue) {
								sType = "DECIMAL";
							}
							cellValue = nexacro.toNumber(cellValue);
							if(cellValue == 0 && nexacro.toNumber(cellText) != 0) {
								cellValue = nexacro.toNumber(cellText);
							}
						}
						break;
					case "date":
					case "date2":
						nDataType = 5;
						break;
					case "time":
						nDataType = 6;
						break;
					case "datetime":
						nDataType = 7;
						break;
					case "decoratetext":
					case "image":
					default:
						nDataType = 1;
						break;
				}
			 }

			rtnData = this._getDataType(exportObj, cell_Displaytype, nDataType, cellText, cellValue, m_mask, 1);
			nDataType = rtnData[0];
			sType = rtnData[1];
			cellText = rtnData[2];
			cellValue = rtnData[3];
			this._setFormatStyle(grid, exportObj, nRow, i, cell, "summ", nDataType, 0, 0,
							 rowStart, nCol, colStart, false, true, cellText, cellValue, cell_Displaytype, m_mask);

			if(cell._subcells.length > 0)
			{
				var subCell = cell._subcells;
				var subLen = cell._subcells.length;

				scellText = "";
                for (var jj = 0; jj < subLen; jj++) {

					var oSubCell = subCell[jj];
					var colspan = oSubCell._colspan;
					var rowspan = oSubCell._rowspan;
					var row = oSubCell._row;
					var col = oSubCell._col;
					var _row = row;
					var _col = col;

					cellText = oSubCell._getDisplayText(SUMM_ROW);
					if (oSubCell._getDisplaytype(SUMM_ROW) == "decoratetext") {
						cellText = nexacro._getDisplayTextfromDecorateText(cellText);
					}
					cellValue = oSubCell._getDisplayText_text(SUMM_ROW);

					cell_Displaytype = grid.getSubCellProperty("summ",i,jj,"displaytype");
					var Subexpr = grid.getSubCellProperty("summ",i,jj,"expr");
					var Submask = grid.getSubCellProperty("summ",i,jj,"maskeditformat");
					var Submaskedittype = grid.getSubCellProperty("summ",i,jj,"maskedittype");

					if(Submask.indexOf("expr")>=0) {
						cell_DisplayFormatType = this._getFixedCellType(oSubCell,row);
					} else {
						cell_DisplayFormatType = Submask?Submask:"";
					}

					m_mask = cell_DisplayFormatType;
					if ( cell_Displaytype != "date" && cell_DisplayFormatType.indexOf(":")>=0) {
						var as = cell_DisplayFormatType.split(":");
						if(as.length>1) {
							m_mask = as[1];
							if(m_mask && m_mask.indexOf("9")>=0) {
								if(cellText == "" || cellText == undefined || cellText == "0"  ) {
									m_mask = "#,##0";
								} else {
									m_mask = this._getCovertMaskStyle(oSubCell._getDisplaytype(SUMM_ROW),m_mask);
								}
							}
						}
						as = null;
					}
					if(m_mask && m_mask.indexOf("9")>=0) {
						if(cellText == "" || cellText == undefined || cellText == "0" ) {
							m_mask = "#,##0";
						} else {
							m_mask = this._getCovertMaskStyle(cell_Displaytype,m_mask);
						}
					}
					if(cell_Displaytype && (cell_Displaytype.indexOf("mask") < 0) && (cell_Displaytype.indexOf("date") < 0) && m_mask) {
						m_mask = "";
					}

					nDataType = 1;
					if (cellText == undefined || cellText == null || cellText == "") {
						sType = "STRING";
					} else {
						cell_Displaytype = oSubCell._getDisplaytype(SUMM_ROW);

						if(cell_Displaytype == "mask")
						{
							cell_Displaytype = Submaskedittype;
						}

						switch (cell_Displaytype) {
							case "text":
								sType = "STRING";
								break;					
							case "normal":
							case "number":
							case "exponent":
							case "currency":
								if(!cellValue || isNaN(cellValue)) {
									if(cellValue !== 0 && cellText !== "0") {
										nDataType = 1;
										cellText = "";
									}else{
										cellValue = nexacro.toNumber(cellValue);
										if(cellValue == 0 && nexacro.toNumber(cellText) != 0) {
											cellValue = nexacro.toNumber(cellText);
										}
									}
								} else {
									nDataType = 4;
									sType = "NUMBER";
									var bDecValue = this._isDecValue(cellText);
									if (bDecValue) {
										sType = "DECIMAL";
									}
									cellValue = nexacro.toNumber(cellValue);
									if(cellValue == 0 && nexacro.toNumber(cellText) != 0) {
										cellValue = nexacro.toNumber(cellText);
									}
								}
								break;
							case "date":
							case "date2":
								nDataType = 5;
								break;
							case "time":
								nDataType = 6;
								break;
							case "datetime":
								nDataType = 7;
								break;
							case "decoratetext":
							case "image":
							default:
								nDataType = 1;
								break;
						}
					}
					
					rtnData = this._getDataType(exportObj, cell_Displaytype, nDataType, cellText, cellValue, m_mask, 1);
					nDataType = rtnData[0];
					sType = rtnData[1];
					cellText = rtnData[2];
					cellValue = rtnData[3];

					var border_value = "";
					if (colspan > 1) {
						if ((colspan - 1) == _col) {
							border_value += "L";
						} else {
							border_value += "L";
							border_value += "R";
						}
					}
					if (rowspan > 1) {
						if ((rowspan - 1) == _row) {
							border_value += "T";
						} else {
							border_value += "T";
							border_value += "B";
						}
					}

					var bSubCellUse = true; //SubCell Style 속성을 얻기 위함.
					this._setFormatStyle(grid, exportObj, _row, i, oSubCell, "summ", nDataType, 0, 0, rowStart, 
										 nCol+_col, colStart, false, true, cellText, cellValue, cell_Displaytype, m_mask, border_value, bSubCellUse);
				}
			}

            LIBExcel._sheet_setRow(nRow + rowStart, rowHeight * 0.75);
            //LIBExcel._sheet_setCol(nCol + colStart, nCol + colStart, colWidth * 0.143);

            rowFirst = rowLast = nRow;
			colFirst = colLast = nCol;

            colLast += summcells[i]._colspan - 1;
            rowLast += summcells[i]._rowspan - 1;

			if (rowFirst != rowLast || colFirst != colLast) {
				if (summcells[i]._subcells.length > 0) {} else {
					   LIBExcel._sheet_setMerge(rowFirst + rowStart, rowLast + rowStart, colFirst + colStart, colLast + colStart);
				}
			}
			
			
            beforeRows = nRow;
        }
        this.rowIndex = format._summrows.length + rowStart + 1;
        return this.rowIndex;
    };	

    _pExportItem._ExportGridBody = function(grid, exportObj, rowStart, colStart) {
        var format = grid._curFormat;
        var bCells = format._bodycells;
        if (!bCells) return;

        var nCol, nRow;
		var nRowSave = -1;
        var rowHeight, colWidth;

        var cellText, cellValue, dispType;

        var rowFirst = 0;
        var rowLast = 0;
        var colFirst = 0;
        var colLast = 0;

        var dataset = grid._binddataset;

        var bodycntcell = bCells.length;
        var bodycntrow = this._bodyRowCnt = grid._getGridRowCount(true);
        var nDataType = 1;

        var bodyallcntcell = 0;
        var subcellcnt = 0;
        for (var i = 0; i < bodycntcell; i++) {
            if (bCells[i]._subcells.length) {
                subcellcnt += bCells[i]._subcells.length;
            }
        }
        bodyallcntcell = bodycntcell + subcellcnt;

        var nBeforeRow = 0;
        var bodyrows = grid._curFormat._bodyrows;
        var rowcnt = bodyrows.length;

		if(exportObj.LIBExcel.progressvalue > 0) {
			progress_update = exportObj.LIBExcel.progressvalue;
		} else {
			progress_update = parseInt(bodycntrow*0.08);
		}

        if (grid._is_use_suppress == true) {
            this._gridSuppressUpdate(grid, bodycntrow);
        }

        var bDecValue = false;
        var scellText, scellValue;
        var nAddSubCell = 0;
        var sType = "";
        var oColorInfo = {};
        var t, rtnData, exprs;
		
		var arrDataType = [];
		var arrDispType = [];
		var arrMaskType = [];
		var arrExprType = [];
		var arrColSize = [];
		
		var LIBExcel = exportObj.LIBExcel.ExtensionLib.LIBXL;
		
		
		var _win = this._getWindow();
		

		for (var i = 0; i < bodycntcell; i++) {

			if (nexacro._Browser == "Runtime") {
				if(typeof(nexacro._peekWindowHandleMessageQueuePassing) == "function") {
					nexacro._peekWindowHandleMessageQueuePassing(_win,"keyboard","mouse");
				} else {
					LIBExcel._progress_Idle();
				}
			}
			
			var disptype = grid.getCellProperty("body",i,"displaytype");
			if(disptype.indexOf("expr")>=0) {
				arrDispType[i] = null;
			} else {
				arrDispType[i] = disptype;
			}
			t = bCells[i].text;
			arrDataType[i] = 1;
			if(t && t._bindexpr) {
				arrDataType[i] = dataset._getColumnType(t._bindexpr);
				if(disptype == "number" && arrDataType[i] == 1) {
					arrDataType[i] = 4;
				}
			}
			var mask = grid.getCellProperty("body",i,"maskeditformat");
			if(mask.indexOf("expr")>=0 || mask.indexOf("bind:")>=0) {
				arrMaskType[i] = "expr";
			} else {
				arrMaskType[i] = mask?mask:"";
				if(disptype == "date") {
					mask = grid.getCellProperty("body",i,"calendardateformat");
					if(mask.indexOf("expr")>=0) {
						arrMaskType[i] = "expr";
					} else {
						arrMaskType[i] = mask?mask.toLowerCase():"";
					}
				}
			}
			exprs = grid.getCellProperty("body",i,"expr");
			if(exprs && exprs.length > 5) {
				arrExprType[i] = true;
			} else {
				arrExprType[i] = false;
			}
			arrColSize[i] = grid.getRealColSize(bCells[i]._col);
			this._getCellBodyStyle2(bCells[i], i, arrDataType[i],arrMaskType[i]);
		}

		if(this._exportmerge == 0) {	// nosuppress
			this._applyS = false;
		}
					
        for (var j = 0, nBeforeRow = 0; j < bodycntrow; j++) {

			exportObj._itemsIndex = j;
			this._startRow = j + 1;
			this._preStartRow = this._startRow;
			
			this._updateBarPos(exportObj, exportObj.exporteventtype);
			if (exportObj.onprogress) {
				exportObj.on_fire_onprogress(exportObj, exportObj, j, exportObj.exporteventtype, this._startRow);
			}

			if (nexacro._Browser == "Runtime") {
				if(typeof(nexacro._peekWindowHandleMessageQueuePassing) == "function") {
					nexacro._peekWindowHandleMessageQueuePassing(_win,"keyboard","mouse");
				} else {
					LIBExcel._progress_Idle();
				}
			}

            nAddSubCell = 0;
			nRowSave = -1;
            for (var i = 0; i < bodycntcell; i++) {
                cellText = grid.getCellText(j, i);
				cellValue = bCells[i]._getDisplayText_text(j);	//cellValue = grid.getCellValue(j, i);

                nCol = bCells[i]._col;
                nRow = bCells[i]._row;
				nDataType = arrDataType[i];
                var cell_Displaytype = arrDispType[i];
				if(!arrDispType[i]) cell_Displaytype = bCells[i]._getDisplaytype(j);
				
				var cell_DisplayFormatType = arrMaskType[i];
				if(arrMaskType[i] == "expr") {
					cell_DisplayFormatType = this._getFixedCellType(bCells[i],j);
				}
                var m_mask = cell_DisplayFormatType;
                if (cell_Displaytype != "date" && cell_DisplayFormatType.indexOf(":")>=0) {
					var as = cell_DisplayFormatType.split(":");
					if(as.length>1) {
						m_mask = as[1];
						if(m_mask && m_mask.indexOf("9")>=0) {
							if(cellText == "" || cellText == undefined || cellText == "0" ) {
								m_mask = "#,##0";
							} else {
								m_mask = this._getCovertMaskStyle(cell_Displaytype,m_mask);
							}
						}
					}
					as = null;
				}
				if(!arrDispType[i] && cell_Displaytype == "date" && (!m_mask || m_mask == "") ) {
					var format = bCells[i]._getAttrValue(bCells[i].calendardateformat, j);
					if (format == null || format.length == 0 || !format.match(/[yMdHhms]/)) {
						format = "yyyy-mm-dd";
					}
					m_mask = format; //grid.getCellProperty("body",i,"calendardateformat");
				}
				rtnData = this._getDataType(exportObj, cell_Displaytype, nDataType, cellText, cellValue, m_mask, arrExprType[i]);
				nDataType = rtnData[0];
				sType = rtnData[1];
				cellText = rtnData[2];
				cellValue = rtnData[3];

				/*
				colWidth = arrColSize[i];
                if (j < 2) {
                    LIBExcel._sheet_setCol(nCol + colStart, nCol + colStart, colWidth * 0.143);
                }
				*/

				if(m_mask && m_mask.indexOf("9")>=0) {
					if(cellText == "" || cellText == undefined || cellText == "0" ) {
						m_mask = "#,##0";
					} else {
						m_mask = this._getCovertMaskStyle(cell_Displaytype,m_mask);
					}
				}

				if(cell_Displaytype && (cell_Displaytype.indexOf("mask") < 0) && (cell_Displaytype.indexOf("date") < 0) && m_mask) {
					m_mask = "";
				}
				
				if(nRowSave != nRow) {
					rowHeight = grid.getRealRowSize(j, nRow);
					LIBExcel._sheet_setRow(j * rowcnt + rowStart + nRow, rowHeight * 0.75);
					nRowSave = nRow;
				}
                var bShowText = true;
                var is_suppress = false;
				if(this._exportmerge != 0) {
					is_suppress = bCells[i].suppress;
					if (is_suppress && is_suppress._value >= 1) {
						var suppress_infos = bCells[i]._suppress_infos;
						if(suppress_infos[j].text_proc) {
							bShowText = false;
						}
						is_suppress = true;
					} else {
						is_suppress = false;
					}
				}
				this._setFormatStyle(grid, exportObj, nRow, i, bCells[i], "body", nDataType, rowcnt, j,
								 rowStart, nCol, colStart, is_suppress, bShowText, cellText, cellValue, cell_Displaytype, m_mask);

                if (bCells[i]._subcells.length > 0) {
                    var subCell = bCells[i]._subcells;
                    var subL = bCells[i]._subcells.length;

                    scellText = "";
                    for (var jj = 0; jj < subL; jj++) {
                        nAddSubCell++;
                        cellText = grid.getSubCellText(j, i, jj);
						cellValue = subCell[jj]._getDisplayText_text(j);	//grid.getSubCellValue(j, i, jj);

                        var nnCol = subCell[jj]._col;
                        var nnRow = subCell[jj]._row;

						t = subCell[jj].text;
						nDataType = 1;
						if(t && t._bindexpr) {
							nDataType = dataset._getColumnType(t._bindexpr);
						}
						var disptype = grid.getSubCellProperty("body",i,jj,"displaytype");
						if(disptype.indexOf("expr")>=0) {
							cell_Displaytype = subCell[jj]._getDisplaytype(j);						
						} else {
							cell_Displaytype = disptype;
						}						
						var mask = grid.getSubCellProperty("body",i,jj,"maskeditformat");
						if(mask.indexOf("expr")>=0) {
							cell_DisplayFormatType = this._getFixedCellType(subCell[jj],j);
						} else {
							cell_DisplayFormatType = mask?mask:"";
						}
						var m_mask = cell_DisplayFormatType;
						if (cell_Displaytype != "date" && cell_DisplayFormatType.indexOf(":")>=0) {
							var as = cell_DisplayFormatType.split(":");
							if(as.length>1) {
								m_mask = as[1];
								if(m_mask && m_mask.indexOf("9")>=0) {
									if(cellText == "" || cellText == undefined || cellText == "0" ) {
										m_mask = "#,##0";
									} else {
										m_mask = this._getCovertMaskStyle(cell_Displaytype,m_mask);
									}
								}
							}
							as = null;
						}
						if(disptype == "date" && (!m_mask || m_mask == "")) {
							var format = subCell[jj]._getAttrValue(subCell[jj].calendardateformat, j);
							if (format == null || format.length == 0 || !format.match(/[yMdHhms]/)) {
								format = "yyyy-mm-dd";
							}
							m_mask = format; //grid.getCellProperty("body",i,"calendardateformat");							
						}
						rtnData = this._getDataType(exportObj, cell_Displaytype, nDataType, cellText, cellValue, m_mask);
						nDataType = rtnData[0];
						sType = rtnData[1];
						cellText = rtnData[2];
						cellValue = rtnData[3];

						var border_value = "";
						if (bodyCells[i]._colspan > 1) {
							if ((bodyCells[i]._colspan - 1) == nnCol) {
								border_value += "L";
							} else {
								border_value += "L";
								border_value += "R";
							}
						}
						if (bCells[i]._rowspan > 1) {
							if ((bCells[i]._rowspan - 1) == nnRow) {
								border_value += "T";
							} else {
								border_value += "T";
								border_value += "B";
							}
						}
						this._setFormatStyle(grid, exportObj, j, i, subCell[jj], "body", nDataType, rowcnt, nRow + nnRow,
										 rowStart, nCol + nnCol, colStart, is_suppress, bShowText, cellText, cellValue, cell_Displaytype, m_mask, border_value);
                    }
                }

                rowFirst = rowLast = j * rowcnt + nRow + rowStart;
                colFirst = colLast = nCol + colStart;

                colLast += bCells[i]._colspan - 1;
                rowLast += bCells[i]._rowspan - 1;

                if (rowFirst != rowLast || colFirst != colLast) {
                    if (bCells[i]._subcells.length > 0) {} else {
                        LIBExcel._sheet_setMerge(rowFirst, rowLast, colFirst, colLast);
                    }
                }
            }
			rtnData = null;
        }
		
		arrDataType = arrMaskType = arrExprType = arrColSize = null;
		this._rollbackSuppressInfo();
        this.rowIndex = rowLast + 1;
        return this.rowIndex;
    };

	_pExportItem._waitCursor = nexacro._emptyFn;
	delete _pExportItem;
	
	if(!nexacro.ExportProgress) {
		nexacro.ExportProgress = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
			nexacro.PopupControl.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

			this._uitype = 0;
			this.visible = false;

			this.progressbar = null;
			this._textWidth = 0;
			this._textHeight = 0;
		};
		var _pExportProgress = nexacro.ExportProgress.prototype = nexacro._createPrototype(nexacro.PopupControl, nexacro.ExportProgress);

		_pExportProgress._type_name = "ExportProgress";


		_pExportProgress.on_apply_color = function (color) {
			var textbox = this._textbox;
			if (textbox) {
				if (color) {
					textbox.set_color(color);
				}
				else {
					textbox.set_color("");
				}
			}
		};

		_pExportProgress.on_apply_font = function (font) {
			var textbox = this._textbox;
			if (textbox) {
				textbox.set_font(font);
			}
		};

		_pExportProgress.on_create_contents = function () {
			var control_elem = this.getElement();
			if (control_elem) {
				switch (this._uitype) {
					case 1:
						var progressbar = new nexacro.ProgressBar("progressbar", 0, 0, 1, 1, null, null, null, null, null, null, this);
						progressbar.createComponent();
						this.progressbar = progressbar;
						var textbox = new nexacro.Static("progressbar:text", 0, 0, 1, 1, null, null, null, null, null, null, this);
						textbox.createComponent();
						this._textbox = textbox;
						break;
					case 2:
						var app = nexacro.getApplication();
						if (app) {
							this.progressbar = app.mainframe.statusbar;
						}
						break;
				}
			}
		};

		_pExportProgress.createCommand = function () {
			return "";
		};

		_pExportProgress.on_created_contents = function (_window) {
			nexacro.PopupControl.prototype.on_created_contents.call(this, _window);
			_window = _window || this._getWindow();
			switch (this._uitype) {
				case 1:
					var textbox = this._textbox;
					var progressbar = this.progressbar;
					if (progressbar) {
						progressbar.on_created();
					}
					if (textbox) {
						textbox.on_created();
					}
					break;
				case 2:
					break;
			}
		};

		_pExportProgress.on_change_containerRect = function (width, height) {
			switch (this._uitype) {
				case 1:
					var textbox = this._textbox;
					if (textbox) {
						textbox.move(0, 0, width, height);
						var textwidth = this._textWidth;
						var textheight = this._textHeight;
					}
					var progressbar = this.progressbar;
					if (progressbar) {
						progressbar.move(null, null, width, 20, 0, 0);
					}
					break;
				case 2:
					break;
			}
		};

		_pExportProgress.on_destroy_contents = function () {
			switch (this._uitype) {
				case 1:
					var textbox = this._textbox;
					if (textbox) {
						textbox.destroy();
					}
					this.progressbar.destroy();
					this.progressbar = null;
					break;
				case 2:
					this.textbox = null;
					this.progressbar = null;
					break;
			}
		};



		_pExportProgress._getWindow = function () {
			return nexacro.Component.prototype._getWindow.call(this);
		};

		_pExportProgress.on_fire_onlbuttondown = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp) {
			return true;
		};

		_pExportProgress._on_keydown = function (elem, keycode, altKey, ctrlKey, shiftKey) {
			if (keycode == nexacro.Event.KEY_TAB) {
				elem._event_stop = true;
			}
			else if (keycode == nexacro.Event.KEY_ESC) {
				nexacro._stopTransaction(this, 2);
			}

			return true;
		};


		_pExportProgress._show = function () {
			if (!this._is_created || !this.parent) {
				return;
			}

			var _window = this._getWindow();
			if (_window) {
				var left, top, width, height;

				left = _window.getLeft();
				top = _window.getTop();

				if (_window.frame) {
					var frame = _window.frame;
					width = frame.getOffsetWidth();
					height = frame.getOffsetHeight();
				}
				else {
					width = _window.getClientWidth();
					height = _window.getClientHeight();
				}

				var capture_comp = _window._getCaptureComp(true, true, this);
				if (capture_comp != this) {
					_window._setCaptureLock(this, true, true);
				}

				var cpd = this._getCurrentStylePadding();
				var pWidth = 0;
				var pHeight = 0;
				var _left = 0;
				var _top = 0;

				if (this._uitype == 1) {
					pWidth = (this._textWidth < 100 ? 100 : this._textWidth);
					pHeight = this._textHeight;
					if (cpd) {
						pWidth += cpd.left + cpd.right;
						pHeight += cpd.top + cpd.bottom;
					}
					_left = Math.round((width - pWidth) / 2);
					_top = Math.round((height - pHeight) / 2);
				}

				this.move(_left, _top, pWidth, pHeight, null, null);
				this.set_visible(true);
			}
		};

		_pExportProgress._hide = function () {
			var excelexport = this.parent;
			if (excelexport) {
				var _window = excelexport._getWindow();
				if (_window) {
					_window._releaseCaptureLock(this);

					if (nexacro._resize_popup_inbound == true) {
						var control_elem = this._control_element;
						if (control_elem) {
							control_elem.setElementSize(1, 1);
						}
					}
				}
			}
			if (this._is_created && this._is_alive) {
				this.set_visible(false);
			}
		};

		nexacro._getLongerStr = function (str1, str2, str3) {
			var len = arguments.length;
			if (len < 2) {
				return;
			}

			var str = arguments[0];
			for (var i = 1; i < len; i++) {
				if (str.length < arguments[i].length) {
					str = arguments[i];
				}
			}
			return str;
		};

		_pExportProgress._set_text = function (v) {
			switch (this._uitype) {
				case 1:
					this._textbox.set_text(v);
					break;
				case 2:
					var form = this._getForm();
					form.set_statustext(v);
					break;
			}
		};
		_pExportProgress._set_pos = function (v) {
			switch (this._uitype) {
				case 1:
					if (this.progressbar) {
						this.progressbar.set_pos(v);
					}
					break;
				case 2:
					var comp = this;
					while (comp && !comp._is_top_frame) {
						if (comp._is_frame) {
							comp.statusbar && comp.statusbar.progressbar.set_pos(v);
						}
						comp = comp.parent;
					}
					break;
			}
		};

		delete _pExportProgress;	
	}	
}
