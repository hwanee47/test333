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

if (!nexacro._ListViewItem) {
	nexacro._ListViewItem = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
		nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	};

	var _pListViewItem = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._ListViewItem);
	nexacro._ListViewItem.prototype = _pListViewItem;

	_pListViewItem._type_name = "_ListViewItem";

	_pListViewItem._is_panel_layout = true;
	_pListViewItem._is_child = true;

	_pListViewItem._use_selected_status = true;



	_pListViewItem.onCreateChild = function () {
		if (this.checkcontrol = this.createChildControl(new nexacro.CheckBox("checkbox", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.checkcontrol._setEventHandler("onclick", this.on_notify_check_onclick, this);
		}
		if (this.textcontrol = this.createChildControl(new nexacro.Static("text", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.textcontrol._setEventHandler("onclick", this.on_notify_text_onclick, this);
		}
	};

	_pListViewItem.onDestroyChild = function () {
		this.checkcontrol = null;
		this.textcontrol = null;
		this.desccontrol = null;
	};


	_pListViewItem.on_notify_check_onclick = function (obj, e) {
		nexacro._notify("_ListViewItem.on_notify_check_onclick");
	};
	_pListViewItem.on_notify_text_onclick = function (obj, e) {
		nexacro._notify("_ListViewItem.on_notify_text_onclick");
	};


	_pListViewItem._onInitPanelLayout = function () {
		var panel = this._getPanel();

		if (panel) {
			panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
			panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
			panel._setGroupingSubPanel(null, nexacro._PanelConst.GROUPING_SUBSTYLE_NONE, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
			panel._setSlotArrangeType(nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST | nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD);
			panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
			panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
			panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
			panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);

			panel._resetPanelColSizeArray(3, [20, undefined, 20], 20);
			panel._resetPanelRowSize(0, 20);
		}
	};

	delete _pListViewItem;
}
;


if (!nexacro._ListViewHead) {
	nexacro._ListViewHead = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
		nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	};

	var _pListViewHead = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._ListViewItem);
	nexacro._ListViewHead.prototype = _pListViewHead;

	_pListViewHead._type_name = "_ListViewHead";

	_pListViewHead._is_panel_layout = true;
	_pListViewHead._is_child = true;


	_pListViewHead.onCreateChild = function () {
		if (this.checkcontrol = this.createChildControl(new nexacro.CheckBox("checkbox", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.checkcontrol._setEventHandler("onclick", this.on_notify_check_onclick, this);
		}
		if (this.textcontrol = this.createChildControl(new nexacro.Static("text", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.textcontrol.set_text("Name");
			this.textcontrol._setEventHandler("onclick", this.on_notify_text_onclick, this);
		}
		if (this.desccontrol = this.createChildControl(new nexacro.Static("desc", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.desccontrol.set_text("Level");
			this.desccontrol._setEventHandler("onclick", this.on_notify_text_onclick, this);
		}
	};

	_pListViewHead.onDestroyChild = function () {
		this.checkcontrol = null;
		this.textcontrol = null;
		this.desccontrol = null;

		nexacro.ComplexComponent.prototype.onDestroyChild.call(this);
	};


	_pListViewHead.on_notify_check_onclick = function (obj, e) {
		nexacro._notify("_ListViewHead.on_notify_check_onclick");
	};
	_pListViewHead.on_notify_text_onclick = function (obj, e) {
		nexacro._notify("_ListViewHead.on_notify_text_onclick");
	};


	_pListViewHead._onInitPanelLayout = function () {
		var panel = this._getPanel();

		if (panel) {
			panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
			panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
			panel._setGroupingSubPanel(null, nexacro._PanelConst.GROUPING_SUBSTYLE_NONE, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
			panel._setSlotArrangeType(nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST | nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD);
			panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
			panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
			panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
			panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);

			panel._resetPanelColSizeArray(4, [20, undefined, 60, 20], 100);
			panel._resetPanelRowSize(1, 30);
		}
	};

	delete _pListViewHead;
}
;


if (!nexacro._ListViewTitle) {
	nexacro._ListViewTitle = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
		nexacro._ListViewItem.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	};

	var _pListViewTitle = nexacro._createPrototype(nexacro._ListViewItem, nexacro._ListViewTitle);
	nexacro._ListViewTitle.prototype = _pListViewTitle;

	_pListViewTitle._type_name = "_ListViewTitle";

	_pListViewTitle._is_panel_layout = true;
	_pListViewTitle._is_child = true;


	_pListViewTitle.onCreateChild = function () {
		nexacro._ListViewItem.prototype.onCreateChild.call(this);

		if (this.popupcontrol = this.createChildControl(new nexacro.Button("popup", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.popupcontrol._setEventHandler("onclick", this.on_notify_popup_onclick, this);
		}
	};

	_pListViewTitle.onDestroyChild = function () {
		this.popupcontrol = null;

		nexacro._ListViewItem.prototype.onDestroyChild.call(this);
	};



	_pListViewTitle._initEvents = function () {
		this._event_list = 
			{
			"onclick" : 1, 
			"ondblclick" : 1, 
			"onkillfocus" : 1, 
			"onsetfocus" : 1, 
			"oninput" : 1, 
			"onkeydown" : 1, 
			"onkeyup" : 1, 
			"onlbuttondown" : 1, 
			"onlbuttonup" : 1, 
			"onrbuttondown" : 1, 
			"onrbuttonup" : 1, 
			"onmousedown" : 1, 
			"onmouseup" : 1, 
			"onmouseenter" : 1, 
			"onmouseleave" : 1, 
			"onmousemove" : 1, 
			"onmousewheel" : 1, 
			"ondrag" : 1, 
			"ondragenter" : 1, 
			"ondragleave" : 1, 
			"ondragmove" : 1, 
			"ondrop" : 1, 
			"onmove" : 1, 
			"onsize" : 1, 
			"oncontextmenu" : 1, 
			"ontouchstart" : 1, 
			"ontouchmove" : 1, 
			"ontouchend" : 1, 

			"onpopup" : 1
		};
	};

	_pListViewTitle.on_notify_popup_onclick = function (obj, e) {
		this._on_basic_onpopup(obj, e);
		this._on_fire_onpopup(obj, e);
		this._on_default_onpopup(obj, e);

		return true;
	};
	_pListViewTitle._on_basic_onpopup = function (obj, e) {
	};
	_pListViewTitle._on_default_onpopup = function (obj, e) {
	};
	_pListViewTitle._on_fire_onpopup = function (obj, e) {
		if (this.onpopup && this.onpopup._has_handlers) {
			e.fromobject = this;
			this.onpopup._fireEvent(this, e);
		}
		return true;
	};


	_pListViewTitle._onInitPanelLayout = function () {
		nexacro._ListViewItem.prototype._onInitPanelLayout.call(this);
	};

	delete _pListViewTitle;
}
;


if (!nexacro._ListView) {
	nexacro._ListView = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
		nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	};

	var _pListView = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._ListView);
	nexacro._ListView.prototype = _pListView;

	_pListView._type_name = "_ListView";

	_pListView._is_format_layout = false;
	_pListView.formats = "";
	_pListView.formatid = "";

	_pListView._is_panel_layout = true;

	_pListView._is_child = false;
	_pListView._is_items = true;

	_pListView._is_nc_layout = false;
	_pListView._is_nc_head = true;
	_pListView._is_nc_foot = false;
	_pListView._is_nc_lead = false;
	_pListView._is_nc_tail = false;

	_pListView._is_scrollable = true;
	_pListView._is_nc_scroll = true;
	_pListView._use_scrollmanager = false;
	_pListView._use_translate_move = true;

	_pListView._is_nc_expand = false;
	_pListView._use_expandmanager = false;

	_pListView.onCreateNCHeadControl = function (child) {
		this.createNCHeadControl(new nexacro._ListViewHead("nchead", 0, 0, 0, 0, null, null, null, null, null, null, this));
	};

	_pListView.onCreateChild = function () {
	};


	_pListView.itemcount = 0;

	_pListView.set_itemcount = function (v) {
		if (v && v != this.itemcount) {
			this.itemcount = v;

			this._on_apply_itemcount();
		}
	};

	_pListView._on_apply_itemcount = function () {
		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};

	_pListView.onCreateItemBegin = function (ctxtdata, binddata) {
		if (!this.showhead && !this._is_subcontrol) {
			return;
		}

		if (this.headcontrol = this.createItemControl(new nexacro._ListViewHead("head", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.headcontrol._setEventHandler("onclick", this.on_notify_head_onclick, this);

			return this.headcontrol;
		}
	};
	_pListView.onCreateItemFinal = function (ctxtdata, binddata) {
	};
	_pListView.onCreateItem = function (ctxtdata, binddata, index) {
		if (binddata && this.subgroup != "none") {
			var level = binddata._getLevelValue();
			var group = binddata._getGroupValue();
			var item = null;

			if (group == 0) {
				if (item = this.createItemControl(new nexacro._ListViewItem("item" + index, 0, 0, 0, 0, null, null, null, null, null, null, this), index)) {
					item._setEventHandler("onclick", this.on_notify_item_onclick, this);

					return item;
				}
			}
			if (group >= 1) {
				if (item = this.createItemControl(new nexacro._ListViewTitle("title" + index, 0, 0, 0, 0, null, null, null, null, null, null, this), index)) {
					item._setEventHandler("onclick", this.on_notify_title_onclick, this);
					item._setEventHandler("onpopup", this.on_notify_title_onpopup, this);

					return item;
				}
			}
			if (group < 0) {
				if (item = this.createItemControl(new nexacro._ListViewSplit("split" + index, 0, 0, 0, 0, null, null, null, null, null, null, this), index)) {
					item._setEventHandler("onclick", this.on_notify_split_onclick, this);

					return item;
				}
			}
		}
		{

			{

				if (item = this.createItemControl(new nexacro._ListViewItem("item" + index, 0, 0, 0, 0, null, null, null, null, null, null, this), index)) {
					item._setEventHandler("onclick", this.on_notify_item_onclick, this);

					return item;
				}
			}
		}
	};
	_pComplexComponent.onDestroyItems = function () {
		this.headcontrol = null;
	};

	_pListView.on_notify_item_onclick = function (obj, e) {
		this.setSelect(this._getItemIndex(e.fromobject));
	};
	_pListView.on_notify_title_onclick = function (obj, e) {
		nexacro._notify('_ListView.on_notify_title_onclick');
	};
	_pListView.on_notify_title_onpopup = function (obj, e) {
		this._setPanelGroupToggle(this._getItemIndex(e.fromobject));
	};
	_pListView.on_notify_split_onclick = function (obj, e) {
		nexacro._notify('_ListView.on_notify_split_onclick');
	};

	_pListView._onInitPanelLayout = function () {
		var panel = this._getPanel();

		if (panel) {
			var rowfirst = this.rowfirst ? nexacro._PanelConst.SLOT_ARRANGETYPE_ROWFIRST : nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST;
			var rowsize = this.rowsize;
			var colsize = this.colsize;
			var arrange = 0;
			var subgroup = 0;

			var arr = this.arrange ? a = this.arrange.split(",") : [];

			for (var i = 0, l = arr.length; i < l; i++) {
				switch (arr[i]) {
					case "horzlead":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD;
						break;
					case "horztail":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZTAIL;
						break;
					case "horzmiddle":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZAMID;
						break;
					case "horzinvert":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZINVT;
						break;
					case "horzaround":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZARND;
						break;
					case "horzgapped":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_HORZGAPD;
						break;
					case "vertlead":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTLEAD;
						break;
					case "verttail":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTTAIL;
						break;
					case "vertmiddle":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTAMID;
						break;
					case "vertinvert":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTINVT;
						break;
					case "vertaround":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTARND;
						break;
					case "vertgapped":
						arrange |= nexacro._PanelConst.SLOT_ARRANGETYPE_VERTGAPD;
						break;
				}
			}

			switch (this.subgroup) {
				case "collpase":
					subgroup = nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_COLLAPSE;
					break;
				case "expand":
					subgroup = nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_EXPAND;
					break;
				case "popup":
					subgroup = nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_POPUP;
					break;
			}


			panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
			panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
			panel._setGroupingSubPanel(null, subgroup, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
			panel._setSlotArrangeType(rowfirst | arrange);
			panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
			panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
			panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
			panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);

			if (colsize && colsize.length) {
				panel._resetPanelColSizeArray(colsize.length, colsize);
			}
			else {
				panel._resetPanelColSize(0);
			}

			if (rowsize && rowsize.length) {
				if (this._is_subcontrol) {
					if (this.showhead) {
						panel._resetPanelRowSize(1, 40);
					}
				}
			}
			else {
				panel._resetPanelRowSizeArray(2, [0, rowsize[1]], this.itemheight, 1);
			}
			else {
				panel._resetPanelRowSizeArray(rowsize.length, rowsize, this.itemheight, this.showhead ? 1 : 0);
			}
			else {
				panel._resetPanelRowSize(0);
			}

			panel._setPanelTitleSize(30);
			panel._setPanelSplitSize(5);
		}
	};

	_pListView._onInitSubPanelNCChildLayout = function (ncchild, panel) {
	};
	_pListView._onInitSubPanelChildLayout = function (child, panel) {
	};
	_pListView._onInitSubPanelItemsLayout = function (item, panel, binddata, index) {
		if (item) {
			if (this.headcontrol) {
				item._setPanelSizeRefInfoLink(this.headcontrol, nexacro._PanelConst.SIZEINFO_REFSTYLE_COLLINK);
			}
		}
	};
	_pListView._onInitPopupSubPanelNCChildLayout = function (parent, startindex, startlevel) {
	};
	_pListView._onInitPopupSubPanelChildLayout = function (parent, startindex, startlevel) {
	};
	_pListView._onInitPopupSubPanelItemsLayout = function (parent, startindex, startlevel) {
	};


	_pListView._onCreatePopup = function () {
		var popup = null;

		if (popup = this._createPopupControl(new nexacro._PanelPopupControl("panelpopup", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			return popup;
		}
	};

	_pListView._onCreatePopupChild = function () {
		var child = null;

		if (child = this._createPopupCloneControl(new this.constructor("popupchild", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			return child;
		}
	};

	_pListView._onCloneProperities = function (source) {
		this.set_innerdataset(source.innerdataset);
		this.set_codecolumn(source.codecolumn);
		this.set_datacolumn(source.datacolumn);
		this.set_levelcolumn(source.levelcolumn);
		this.set_groupcolumn(source.groupcolumn);

		this.set_rowfirst(source.rowfirst);
		this.set_subgroup(source.subgroup);
		this.set_showhead(source.showhead);
		this.set_arrange(source.arrange);
		this.set_rowsize(JSON.stringify(source.rowsize));
		this.set_colsize(JSON.stringify(source.colsize));
	};

	_pListView.set_formats = function (str) {
		if (this.formats != str) {
			this.formats = str;

			this._setFormats(this.formats);

			this.on_apply_formats();
		}
	};

	_pListView.on_apply_formats = function () {
		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};

	_pListView.on_clear_formats = function () {
		this._clearFormats();
	};

	_pListView.set_formatid = function (v) {
		if (v && v != this.formatid) {
			this.formatid = v;

			this._changeFormatId(this.formatid);

			this._on_apply_formatid();
		}
	};
	_pListView._on_apply_formatid = function () {
		if (!this._is_created) {
			return;
		}

		this._changeFormatId(this.formatid);
	};
	_pListView.on_clear_formatid = function () {
		if (!this._is_created) {
			return;
		}

		this._clearFormatId();
	};


	_pListView._is_databind = true;
	_pListView._is_fullbind = false;
	_pListView._is_levelbind = true;


	_pListView._onGetDataColumns = function () {
		return [this.datacolumn];
	};
	_pListView._onGetDataProps = function () {
		return ["datacolumn"];
	};


	_pListView._onGetDataBindInfos = function () {
		return [this.createItemBindInfo("", "groupcolumn"), this.createItemSubControlBindInfo("textcontrol", "text", "datacolumn"), this.createItemSubControlBindInfo("desccontrol", "text", "levelcolumn")
		];
	};

	_pListView.innerdataset = null;
	_pListView.codecolumn = "";
	_pListView.datacolumn = "";
	_pListView.levelcolumn = "";
	_pListView.groupcolumn = "";

	_pListView.set_innerdataset = function (str) {
		if (this.innerdataset != str) {
			this.innerdataset = str;

			this.on_apply_innerdataset();
		}
	};

	_pListView.on_apply_innerdataset = function () {
		this._setBindDataSource();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};

	_pListView.on_clear_innerdataset = function () {
		this._clearBindDataSource();
	};

	_pListView.set_codecolumn = function (v) {
		if (v && v != this.codecolumn) {
			this.codecolumn = v;

			this.on_apply_codecolumn();
		}
	};
	_pListView.set_levelcolumn = function (v) {
		if (v && v != this.levelcolumn) {
			this.levelcolumn = v;

			this.on_apply_levelcolumn();
		}
	};
	_pListView.set_groupcolumn = function (v) {
		if (v && v != this.groupcolumn) {
			this.groupcolumn = v;

			this.on_apply_groupcolumn();
		}
	};
	_pListView.set_datacolumn = function (v) {
		if (v && v != this.datacolumn) {
			this.datacolumn = v;

			this.on_apply_datacolumn();
		}
	};

	_pListView.on_apply_codecolumn = function () {
		this._setCodeColumn();

		if (!this._is_created) {
			return;
		}

		this._applyValue();
	};
	_pListView.on_apply_levelcolumn = function () {
		this._setLevelColumn();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};
	_pListView.on_apply_groupcolumn = function () {
		this._setDataColumn();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};
	_pListView.on_apply_datacolumn = function () {
		this._setDataColumn();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};

	_pListView.on_clear_codecolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearCodeColumn();
	};
	_pListView.on_clear_levelcolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearLevelColumn();
	};
	_pListView.on_clear_groupcolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearDataColumn();
	};
	_pListView.on_clear_datacolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearDataColumn();
	};

	_pListView.onInitProperties = function () {
		this.rowfirst = false;
		this.showhead = true;
		this.arrange = 0;
		this.subgroup = 0;
		this.rowsize = [40, 30];
		this.colsize = [];
	};
	_pListView.onApplyProperties = function () {
		this.on_apply_innerdataset();
		this.on_apply_codecolumn();
		this.on_apply_levelcolumn();
		this.on_apply_datacolumn();
		this.on_apply_groupcolumn();
	};
	_pListView.onClearProperties = function () {
		this.on_clear_innerdataset();
		this.on_clear_codecolumn();
		this.on_clear_levelcolumn();
		this.on_clear_datacolumn();
		this.on_clear_groupcolumn();
	};

	_pListView.set_rowfirst = function (v) {
		var _v = nexacro._toBoolean(v);

		if (_v != this.rowfirst) {
			this.rowfirst = _v;
		}
	};
	_pListView.set_showhead = function (v) {
		var _v = nexacro._toBoolean(v);

		if (_v != this.showhead) {
			this.showhead = _v;
		}
	};
	_pListView.set_arrange = function (v) {
		if (v && v != this.arrange) {
			this.arrange = v;
		}
	};
	_pListView.set_subgroup = function (v) {
		if (v && v != this.subgroup) {
			this.subgroup = v;
		}
	};
	_pListView.set_rowsize = function (v) {
		if (v && v != this.rowsize) {
			this.rowsize = JSON.parse(v);
		}
	};
	_pListView.set_colsize = function (v) {
		if (v && v != this.colsize) {
			this.colsize = JSON.parse(v);
		}
	};

	_pListView._initEvents = function () {
		this._event_list = 
			{
			"onclick" : 1, 
			"ondblclick" : 1, 
			"onkillfocus" : 1, 
			"onsetfocus" : 1, 
			"oninput" : 1, 
			"onkeydown" : 1, 
			"onkeyup" : 1, 
			"onlbuttondown" : 1, 
			"onlbuttonup" : 1, 
			"onrbuttondown" : 1, 
			"onrbuttonup" : 1, 
			"onmousedown" : 1, 
			"onmouseup" : 1, 
			"onmouseenter" : 1, 
			"onmouseleave" : 1, 
			"onmousemove" : 1, 
			"onmousewheel" : 1, 
			"ondrag" : 1, 
			"ondragenter" : 1, 
			"ondragleave" : 1, 
			"ondragmove" : 1, 
			"ondrop" : 1, 
			"onmove" : 1, 
			"onsize" : 1, 
			"oncontextmenu" : 1, 
			"ontouchstart" : 1, 
			"ontouchmove" : 1, 
			"ontouchend" : 1, 

			"onnewevent" : 1
		};
	};


	delete _pListView;
}
;


