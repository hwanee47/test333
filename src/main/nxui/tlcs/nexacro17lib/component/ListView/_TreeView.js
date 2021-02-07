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


if (!nexacro._TreeViewCellControl) {
	nexacro._TreeViewCellControl = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
		nexacro._CellControl.call(this, id, left, top, width, height, right, bottom, parent);
	};

	var _pTreeViewCellControl = nexacro._createPrototype(nexacro._CellControl, nexacro._TreeViewCellControl);
	nexacro._TreeViewCellControl.prototype = _pTreeViewCellControl;

	_pTreeViewCellControl._type_name = "_TreeViewCellControl";
	_pTreeViewCellControl._is_subcontrol = true;

	_pTreeViewCellControl._use_selected_status = true;
	_pTreeViewCellControl._use_readonly_status = false;


	_pTreeViewCellControl.on_create_contents = function () {
		this._setAddedCreateInfo(this.parent);

		nexacro._CellControl.prototype.on_create_contents.call(this);
	};
	_pTreeViewCellControl.on_destroy_contents = function () {
		nexacro._CellControl.prototype.on_destroy_contents.call(this);

		this._clearAddedCreateInfo();
	};
	_pTreeViewCellControl.on_created = function (_window) {
		nexacro._CellControl.prototype.on_created.call(this, _window);

		this.onApplyProperties();
	};

	_pTreeViewCellControl._setAddedCreateInfo = function (comp) {
		this._view = comp.parent;
		this._refinfo = comp._treecellinfo;
		this._rowidx = comp._rowidx;
	};
	_pTreeViewCellControl._clearAddedCreateInfo = function () {
		this._refinfo = null;
		this._view = null;
	};

	_pTreeViewCellControl._onGetBindableProperties = function () {
		return "text";
	};

	_pTreeViewCellControl._applyEditor = function (async) {
		if (this._editor && this._view && this._varbind) {
			this._view._setBindData(this._getDataRow(), this._varbind, this._editor._getValueData());
			this._editor._EditUpdateAll();
			this._view._getBindData(this._getDataRow());
		}
	};

	_pTreeViewCellControl._getActionCell = function (from_cell) {
		var cellobj = from_cell;
		while (cellobj && cellobj._type_name != this._type_name) {
			if (cellobj == this) {
				break;
			}

			if (cellobj._cellobj && cellobj._cellobj._is_alive && cellobj._cellobj._type_name == this._type_name) {
				cellobj = cellobj._cellobj;
				break;
			}

			cellobj = cellobj.parent;
		}

		if (cellobj && cellobj._type_name == this._type_name) {
			if (cellobj.parentcell) {
				cellobj = cellobj.parentcell;
			}
		}

		return cellobj;
	};
	_pTreeViewCellControl._actionEditCell = function (cell, trigger) {
		switch (trigger) {
			case "setfocus":
				{

					if (cell && cell._hasEditor()) {
						cell._showEditor(true);
					}
					break;
				}
			case "killfocus":
				{

					if (cell && cell._isShowEditor()) {
						cell._applyEditor(true);
						cell._hideEditor(true);
					}
					break;
				}
			case "lbuttondown":
			case "lbuttonup":
				{

					if (cell) {
						cell.setFocus(false, false);
					}
					break;
				}
			case "enterkey":
				{

					if (cell && cell._isShowEditor()) {
						cell._applyEditor(true);
					}
					break;
				}
			case "tabkey":
				{

					if (cell && cell._hasEditor()) {
						cell._showEditor(true);
					}
					break;
				}
		}
	};




	_pTreeViewCellControl._getDisplayText = function () {
		return this.treetext;
	};

	_pTreeViewCellControl.set_treetext = function (v) {
		if (v && v != this.treetext) {
			this.treetext = v;

			this.on_apply_treetext();
		}
	};
	_pTreeViewCellControl.set_treeicon = function (v) {
		if (v && v != this.treeicon) {
			this.treeicon = v;

			this.on_apply_treeicon();
		}
	};

	_pTreeViewCellControl.on_apply_treetext = function () {
		if (!this._is_created) {
			return;
		}

		if (this._subComp && this._subComp._text_ctrl) {
			this._subComp._text_ctrl.set_text(this.treetext);
		}
	};
	_pTreeViewCellControl.on_apply_treeicon = function () {
		if (!this._is_created) {
			return;
		}

		if (this._subComp && this._subComp._img_ctrl) {
			this._subComp._load_image(this._subComp._img_ctrl, this.treeimage);
		}
	};
	_pTreeViewCellControl.onApplyProperties = function () {
		this.on_apply_treetext();
		this.on_apply_treeicon();
	};



	_pTreeViewCellControl.on_focus_basic_action = function (self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus) {
		var ret = nexacro._CellControl.prototype.on_focus_basic_action.call(this, self_flag, evt_name, lose_focus, refer_lose_focus, new_focus, refer_new_focus);

		this._actionEditCell(this._getActionCell(refer_new_focus), "setfocus");
	};
	_pTreeViewCellControl.on_killfocus_basic_action = function (new_focus, new_refer_focus) {
		var ret = nexacro._CellControl.prototype.on_killfocus_basic_action.call(this, new_focus, new_refer_focus);

		this._actionEditCell(this._getActionCell(this), "killfocus");
	};


	_pTreeViewCellControl.on_lbuttondown_basic_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp) {
		var ret = nexacro._CellControl.prototype.on_lbuttondown_basic_action.call(this, elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp);

		this._actionEditCell(this._getActionCell(refer_comp), "lbuttondown");
	};
	_pTreeViewCellControl.on_lbuttonup_basic_action = function (elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp) {
		var ret = nexacro._CellControl.prototype.on_lbuttonup_basic_action.call(this, elem, button, alt_key, ctrl_key, shift_key, canvasX, canvasY, screenX, screenY, refer_comp);

		this._actionEditCell(this._getActionCell(refer_comp), "lbuttonup");
	};

	_pTreeViewCellControl.on_change_containerRect = function (width, height) {
		nexacro._CellControl.prototype.on_change_containerRect.call(this, width, height);

		this._updateAll();
	};

	delete _pTreeViewCellControl;
}
;


if (!nexacro._TreeViewItem) {
	nexacro._TreeViewItem = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index) {
		nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

		this._rowidx = index;
	};

	var _pTreeViewItem = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._TreeViewItem);
	nexacro._TreeViewItem.prototype = _pTreeViewItem;

	_pTreeViewItem._type_name = "_TreeViewItem";
	_pTreeViewItem._is_subcontrol = true;

	_pTreeViewItem._is_panel_layout = true;
	_pTreeViewItem._is_child = true;

	_pTreeViewItem._use_select = true;
	_pTreeViewItem._use_selected_status = true;



	_pTreeViewItem.onCreateContents = function () {
		this._setAddedCreateInfo(this.parent, this._rowidx);

		nexacro.ComplexComponent.prototype.onCreateContents.call(this);
	};
	_pTreeViewItem.onDestroyContents = function () {
		nexacro.ComplexComponent.prototype.onDestroyContents.call(this);

		this._clearAddedCreateInfo();
	};

	_pTreeViewItem._setAddedCreateInfo = function (comp, index) {
		this._treecellinfo = comp._getTreeCellinfo();
		this._rowidx = index;
	};
	_pTreeViewItem._clearAddedCreateInfo = function () {
		this._treecellinfo = null;
		this._rowidx = undefined;
	};

	_pTreeViewItem.onCreateChild = function () {
		if (this.treecontrol = this.createChildControl(new nexacro._TreeViewCellControl("treecell", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.treecontrol._setEventHandler("onclick", this.on_notify_tree_onclick, this);
		}
	};

	_pTreeViewItem.onDestroyChild = function () {
		if (this.treecontrol) {
			this.treecontrol = null;
		}
	};



	_pTreeViewItem.on_notify_tree_onclick = function (obj, e) {
		this._on_basic_onclick(obj, e);
		this._on_fire_onclick(obj, e);
		this._on_default_onclick(obj, e);
	};



	_pTreeViewItem._on_default_onselect = function (oldvalue, newvalue) {
		if (newvalue) {
			this._actionSelect(this, "setselect");
		}
		else {
			this._actionSelect(this, "unselect");
		}
	};


	_pTreeViewItem._actionSelect = function (item, trigger) {
		switch (trigger) {
			case "setselect":
				{

					break;
				}
			case "unselect":
				{

					break;
				}
		}
	};


	_pTreeViewItem._onInitPanelLayout = function () {
		var panel = this._getPanel();

		if (panel) {
			panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
			panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
			panel._setGroupingSubPanel(null, nexacro._PanelConst.GROUPING_SUBSTYLE_NONE, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
			panel._setSlotArrangeType(nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST | nexacro._PanelConst.SLOT_ARRANGETYPE_VERTAMID);
			panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
			panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
			panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
			panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);

			panel._resetPanelColSize(0, 0);
			panel._resetPanelRowSize(0, 0);
		}
	};


	delete _pTreeViewItem;
}
;


if (!nexacro._TreeViewItemHead) {
	nexacro._TreeViewItemHead = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index) {
		nexacro._TreeViewItem.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index);
	};

	var _pTreeViewItemHead = nexacro._createPrototype(nexacro._TreeViewItem, nexacro._TreeViewItemHead);
	nexacro._TreeViewItemHead.prototype = _pTreeViewItemHead;

	_pTreeViewItemHead._type_name = "_TreeViewItemHead";
	_pTreeViewItemHead._is_subcontrol = true;

	_pTreeViewItemHead._is_panel_layout = true;
	_pTreeViewItemHead._is_child = true;



	_pTreeViewItemHead.onCreateChild = function () {
		nexacro._TreeViewItem.prototype.onCreateChild.call(this);

		this.addcontrol = this.createChildControl(new nexacro.Button("add", 0, 0, 0, 0, null, null, null, null, null, null, this));
		this.subcontrol = this.createChildControl(new nexacro.Button("sub", 0, 0, 0, 0, null, null, null, null, null, null, this));
		this.delcontrol = this.createChildControl(new nexacro.Button("del", 0, 0, 0, 0, null, null, null, null, null, null, this));

		this.addcontrol._setEventHandler("onclick", this.on_notify_add_onclick, this);
		this.subcontrol._setEventHandler("onclick", this.on_notify_sub_onclick, this);
		this.delcontrol._setEventHandler("onclick", this.on_notify_del_onclick, this);
	};

	_pTreeViewItemHead.onDestroyChild = function () {
		this.addcontrol = null;
		this.subcontrol = null;
		this.delcontrol = null;

		nexacro.ComplexComponent.prototype.onDestroyChild.call(this);
	};


	_pTreeViewItemHead.on_notify_add_onclick = function (obj, e) {
		nexacro._notify("_TreeViewItemHead.on_notify_add_onclick");
	};
	_pTreeViewItemHead.on_notify_sub_onclick = function (obj, e) {
		nexacro._notify("_TreeViewItemHead.on_notify_sub_onclick");
	};
	_pTreeViewItemHead.on_notify_del_onclick = function (obj, e) {
		nexacro._notify("_TreeViewItemHead.on_notify_del_onclick");
	};



	_pTreeViewItemHead._onInitPanelLayout = function () {
		var panel = this._getPanel();

		if (panel) {
			panel._setLayoutType(nexacro._PanelConst.LAYOUTSTYLE_ROWCOL);
			panel._setSizeInfoRefPanel(null, nexacro._PanelConst.SIZEINFO_REFSTYLE_NOLINK);
			panel._setGroupingSubPanel(null, nexacro._PanelConst.GROUPING_SUBSTYLE_NONE, nexacro._PanelConst.GROUPING_SUBPLACE_NONE);
			panel._setSlotArrangeType(nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST | nexacro._PanelConst.SLOT_ARRANGETYPE_VERTAMID);
			panel._setSlotVisibleType(nexacro._PanelConst.SLOT_VISIBLETYPE_HIDESLOT);
			panel._setSlotOverFlowType(nexacro._PanelConst.SLOT_OVERFLOWTYPE_SCROLL | nexacro._PanelConst.SLOT_OVERFLOWTYPE_FULLSLOT);
			panel._setSlotAutoSizeType(nexacro._PanelConst.SLOT_AUTOSIZETYPE_HORZFIT);
			panel._setSlotSizeMoveType(nexacro._PanelConst.SLOT_SIZEMOVETYPE_NONE);

			panel._resetPanelColSizeArray(4, [undefined, 20, 20, 20], 100);
			panel._resetPanelRowSize(0, 0);
		}
	};



	_pTreeViewItemHead._actionSelect = function (item, trigger) {
		switch (trigger) {
			case "setselect":
				{

					if (item && item._showControl) {
						item._showControl(true);
					}
					break;
				}
			case "unselect":
				{

					if (item && item._showControl) {
						item._showControl(false);
					}
					break;
				}
		}
	};
	_pTreeViewItemHead._showControl = function (visible) {
		if (this.addcontrol) {
			this.addcontrol.set_visible(visible);
		}
		if (this.subcontrol) {
			this.subcontrol.set_visible(visible);
		}
		if (this.delcontrol) {
			this.delcontrol.set_visible(visible);
		}
	};

	delete _pTreeViewItemHead;
}
;


if (!nexacro._TreeViewItemBranch) {
	nexacro._TreeViewItemBranch = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index) {
		nexacro._TreeViewItemHead.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent, index);
	};

	var _pTreeViewItemBranch = nexacro._createPrototype(nexacro._TreeViewItemHead, nexacro._TreeViewItemBranch);
	nexacro._TreeViewItemBranch.prototype = _pTreeViewItemBranch;

	_pTreeViewItemBranch._type_name = "_TreeViewItemBranch";
	_pTreeViewItemBranch._is_subcontrol = true;

	_pTreeViewItemBranch._is_panel_layout = true;
	_pTreeViewItemBranch._is_child = true;



	_pTreeViewItemBranch.onCreateChild = function () {
		nexacro._TreeViewItemHead.prototype.onCreateChild.call(this);
	};

	_pTreeViewItemBranch.onDestroyChild = function () {
		nexacro._TreeViewItemHead.prototype.onDestroyChild.call(this);
	};



	_pTreeViewItemBranch._initEvents = function () {
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

			"onadd" : 1, 
			"onsub" : 1, 
			"ondel" : 1
		};
	};

	_pTreeViewItemBranch.on_notify_add_onclick = function (obj, e) {
		this._on_basic_onadd(obj, e);
		this._on_fire_onadd(obj, e);
		this._on_default_onadd(obj, e);

		return true;
	};
	_pTreeViewItemBranch.on_notify_sub_onclick = function (obj, e) {
		this._on_basic_onsub(obj, e);
		this._on_fire_onsub(obj, e);
		this._on_default_onsub(obj, e);

		return true;
	};
	_pTreeViewItemBranch.on_notify_del_onclick = function (obj, e) {
		this._on_basic_ondel(obj, e);
		this._on_fire_ondel(obj, e);
		this._on_default_ondel(obj, e);

		return true;
	};
	_pTreeViewItemBranch._on_basic_onadd = function (obj, e) {
	};
	_pTreeViewItemBranch._on_default_onadd = function (obj, e) {
	};
	_pTreeViewItemBranch._on_fire_onadd = function (obj, e) {
		return this._fire_event(this.onadd, obj, e);
	};
	_pTreeViewItemBranch._on_basic_onsub = function (obj, e) {
	};
	_pTreeViewItemBranch._on_default_onsub = function (obj, e) {
	};
	_pTreeViewItemBranch._on_fire_onsub = function (obj, e) {
		return this._fire_event(this.onsub, obj, e);
	};
	_pTreeViewItemBranch._on_basic_ondel = function (obj, e) {
	};
	_pTreeViewItemBranch._on_default_ondel = function (obj, e) {
	};
	_pTreeViewItemBranch._on_fire_ondel = function (obj, e) {
		return this._fire_event(this.ondel, obj, e);
	};


	_pTreeViewItemBranch._onInitPanelLayout = function () {
		nexacro._TreeViewItemHead.prototype._onInitPanelLayout.call(this);
	};

	delete _pTreeViewItemBranch;
}
;


if (!nexacro._TreeView) {
	nexacro._TreeView = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
		nexacro.ComplexComponent.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	};

	var _pTreeView = nexacro._createPrototype(nexacro.ComplexComponent, nexacro._TreeView);
	nexacro._TreeView.prototype = _pTreeView;

	_pTreeView._type_name = "_TreeView";

	_pTreeView._is_format_layout = false;
	_pTreeView.formats = "";
	_pTreeView.formatid = "";

	_pTreeView._is_panel_layout = true;

	_pTreeView._is_child = false;
	_pTreeView._is_items = true;

	_pTreeView._is_nc_layout = false;
	_pTreeView._is_nc_head = false;
	_pTreeView._is_nc_foot = false;
	_pTreeView._is_nc_lead = false;
	_pTreeView._is_nc_tail = false;

	_pTreeView._is_scrollable = true;
	_pTreeView._is_nc_scroll = true;
	_pTreeView._use_scrollmanager = false;
	_pTreeView._use_translate_move = true;

	_pTreeView._is_nc_expand = false;
	_pTreeView._use_expandmanager = false;






















	_pTreeView.onCreateContents = function () {
		this._setAddedCreateInfo(this);

		nexacro.ComplexComponent.prototype.onCreateContents.call(this);
	};
	_pTreeView.onDestroyContents = function () {
		nexacro.ComplexComponent.prototype.onDestroyContents.call(this);

		this._clearAddedCreateInfo();
	};

	_pTreeView._setAddedCreateInfo = function (comp) {
		this._initTreeCellInfo();
	};
	_pTreeView._clearAddedCreateInfo = function () {
		this._clearTreeCellInfo();
	};

	_pTreeView.onCreateItemBegin = function (ctxtdata, binddata) {
		if (!this.showhead && !this._is_subcontrol) {
			return;
		}

		if (this.headcontrol = this.createItemControl(new nexacro._TreeViewItemHead("head", 0, 0, 0, 0, null, null, null, null, null, null, this))) {
			this.headcontrol._setEventHandler("onclick", this.on_notify_head_onclick, this);

			return this.headcontrol;
		}
	};
	_pTreeView.onCreateItemFinal = function (ctxtdata, binddata) {
	};
	_pTreeView.onCreateItem = function (ctxtdata, binddata, index) {
		if (binddata && this.subgroup != "none") {
			var level = binddata._getLevelValue();
			var group = binddata._getGroupValue();
			var item = null;

			if (group) {
				if (item = this.createItemControl(new nexacro._TreeViewItemBranch("branch" + index, 0, 0, 0, 0, null, null, null, null, null, null, this, index), index)) {
					if (this.useeditbutton != "unuse") {
						item._setEventHandler("onclick", this.on_notify_branch_onclick, this);
						item._setEventHandler("onadd", this.on_notify_branch_onadd, this);
						item._setEventHandler("onsub", this.on_notify_branch_onsub, this);
						item._setEventHandler("ondel", this.on_notify_branch_ondel, this);
					}
					if (this.useeditbutton != "usecurrent") {
						if (item._showControl) {
							item._showControl(false);
						}
					}

					return item;
				}
			}
			else {
				if (item = this.createItemControl(new nexacro._TreeViewItem("item" + index, 0, 0, 0, 0, null, null, null, null, null, null, this, index), index)) {
					item._setEventHandler("onclick", this.on_notify_item_onclick, this);

					return item;
				}
			}
		}
	};

	_pComplexComponent.onDestroyItems = function () {
		this.headcontrol = null;
	};


	_pTreeView.on_notify_item_onclick = function (obj, e) {
		this._on_basic_onclick(obj, e);
		this._on_fire_onclick(obj, e);
		this._on_default_onclick(obj, e);
	};
	_pTreeView.on_notify_branch_onclick = function (obj, e) {
		this._on_basic_onclick(obj, e);
		this._on_fire_onclick(obj, e);
		this._on_default_onclick(obj, e);
	};

	_pTreeView.on_notify_branch_onadd = function (obj, e) {
		this._on_basic_onadd(obj, e);
		this._on_fire_onadd(obj, e);
		this._on_default_onadd(obj, e);
	};
	_pTreeView.on_notify_branch_onsub = function (obj, e) {
		this._on_basic_onsub(obj, e);
		this._on_fire_onsub(obj, e);
		this._on_default_onsub(obj, e);
	};
	_pTreeView.on_notify_branch_ondel = function (obj, e) {
		this._on_basic_ondel(obj, e);
		this._on_fire_ondel(obj, e);
		this._on_default_ondel(obj, e);
	};



	_pTreeView._initTreeCellInfo = function () {
		this._clearTreeCellInfo();

		this._treeCellinfo = new nexacro.CellInfo("tree", null, this, "body", 0);
		this._treeCellinfo.set_displaytype("treeitemcontrol");
		this._treeCellinfo.set_edittype("tree");

		this._setTree(true);
	};
	_pTreeView._clearTreeCellInfo = function () {
		if (this._treeCellinfo) {
			this._setTree(false);

			delete this._treeCellinfo;
		}
	};

	_pTreeView._getTreeCellinfo = function () {
		return this._treeCellinfo;
	};
	_pTreeView._setTreeCellinfo = function (v) {
		if (this._treeCellinfo != v) {
			this._treeCellinfo = v;
			this._setTree(true);
		}
	};
	_pTreeView._removeTreeCellinfo = function (v) {
		if (this._treeCellinfo == v) {
			this._treeCellinfo = null;
			this._setTree(false);
		}
	};

	_pTreeView._setTree = function (v) {
		v = nexacro._toBoolean(v);

		if (this._hasTree != v) {
			this._hasTree = v;

			if (v == true) {
				this._initTreeStats();
			}
			else {
				this._clearTreeStats();
			}
		}
	};

	_pTreeView._initTreeStats = function () {
		this._treeStats = [];
		this._treeCheck = [];
		this._treeLevel = [];

		this._treeStatsBindIndex = -1;
		this._treeCheckBindIndex = -1;
		this._treeLevelBindIndex = -1;

		this._hasSameNextNode = [];
		this._hasSameNextNode.length = this._getBindCount();
	};
	_pTreeView._clearTreeStats = function () {
		this._treeStats = null;
		this._treeCheck = null;
		this._treeLevel = null;

		if (this._hasSameNextNode) {
			delete this._hasSameNextNode;
			this._hasSameNextNode = null;
		}
	};

	_pTreeView._getTreeStats = function (rowidx) {
		var ret = 1;
		var arr = this._treeStats;

		if (arr) {
			if (arr.length <= rowidx) {
				arr.length = this._getBindCount();
			}

			if ((ret = arr[rowidx]) == undefined) {
				ret = arr[rowidx] = this._getBindTreeStats(rowidx);
			}
		}

		return ret;
	};
	_pTreeView._setTreeStats = function (rowidx, data) {
		var arr = this._treeStats;

		if (arr) {
			if (arr.length <= rowidx) {
				arr.length = this._getBindCount();
			}

			if (arr[rowidx] != data) {
				this._setBindTreeStats(rowidx, arr[rowidx] = data);
			}
		}

		return data;
	};

	_pTreeView._getTreeCheck = function (rowidx) {
		var ret = 0;
		var arr = this._treeCheck;

		if (arr) {
			if (arr.length <= rowidx) {
				arr.length = this._getBindCount();
			}

			if ((ret = arr[rowidx]) == undefined) {
				ret = arr[rowidx] = this._getBindTreeCheck(rowidx);
			}
		}

		return ret;
	};
	_pTreeView._setTreeStats = function (rowidx, data) {
		var arr = this._treeCheck;

		if (arr) {
			if (arr.length <= rowidx) {
				arr.length = this._getBindCount();
			}

			if (arr[rowidx] != data) {
				this._setBindTreeCheck(rowidx, arr[rowidx] = data);
			}
		}

		return data;
	};

	_pTreeView._getTreeLevel = function (rowidx) {
		var ret = 0;
		var arr = this._treeLevel;

		if (arr) {
			if (arr.length <= rowidx) {
				arr.length = this._getBindCount();
			}

			if ((ret = arr[rowidx]) == undefined) {
				ret = arr[rowidx] = this._getBindTreeLevel(rowidx);
			}
		}

		return ret;
	};
	_pTreeView._setTreeLevel = function (rowidx, data) {
		var arr = this._treeLevel;

		if (arr) {
			if (arr.length <= rowidx) {
				arr.length = this._getBindCount();
			}

			if (arr[rowidx] != data) {
				this._setBindTreeLevel(rowidx, arr[rowidx] = data);
			}
		}

		return data;
	};

	_pTreeView._getBindTreeStats = function (rowidx) {
		return this._treeStatsBindIndex >= 0 ? this._fetchDataBindValue(rowidx, this._treeStatsBindIndex) : 1;
	};
	_pTreeView._getBindTreeCheck = function (rowidx) {
		return this._treeCheckBindIndex >= 0 ? this._fetchDataBindValue(rowidx, this._treeCheckBindIndex) : this.isAboveSelected(rowidx);
	};
	_pTreeView._getBindTreeLevel = function (rowidx) {
		return this._treeLevelBindIndex >= 0 ? this._fetchDataBindValue(rowidx, this._treeLevelBindIndex) : this._fetchLevelBindValue(rowidx);
	};

	_pTreeView._setBindTreeStats = function (rowidx, data) {
		return this._treeStatsBindIndex >= 0 ? this._setBindData(rowidx, this._getDataBindInfo(this._treeStatsBindIndex), data) : 1;
	};
	_pTreeView._setBindTreeCheck = function (rowidx, data) {
		return this._treeCheckBindIndex >= 0 ? this._setBindData(rowidx, this._getDataBindInfo(this._treeCheckBindIndex), data) : this.setSelect(rowidx);
	};
	_pTreeView._setBindTreeLevel = function (rowidx, data) {
		return this._treeLevelBindIndex >= 0 ? this._setBindData(rowidx, this._getDataBindInfo(this._treeLevelBindIndex), data) : this._setBindData(rowidx, this._getLevelBindInfo(), data);
	};









	_pTreeView._onInitPanelLayout = function () {
		var panel = this._getPanel();

		if (panel) {
			var rowfirst = this.rowfirst ? nexacro._PanelConst.SLOT_ARRANGETYPE_ROWFIRST : nexacro._PanelConst.SLOT_ARRANGETYPE_COLFIRST;
			var arrange = nexacro._PanelConst.SLOT_ARRANGETYPE_HORZLEAD | nexacro._PanelConst.SLOT_ARRANGETYPE_VERTLEAD;
			var subgroup = nexacro._PanelConst.GROUPING_SUBSTYLE_GROUP_EXPAND;

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

			var rowsize = this.rowsize;
			var colsize = this.colsize;

			if (colsize && colsize.length) {
				panel._resetPanelColSizeArray(colsize.length, colsize);
			}
			else {
				panel._resetPanelColSize(0);
			}

			if (rowsize && rowsize.length) {
				panel._resetPanelRowSizeArray(rowsize.length, rowsize, this._itemheight, this.showhead ? 1 : 0);
			}
			else {
				panel._resetPanelRowSize(0);
			}

			panel._setPanelTitleSize(this._titleheight);
		}
	};

	_pTreeView._onInitSubPanelNCChildLayout = function (ncchild, panel) {
	};
	_pTreeView._onInitSubPanelChildLayout = function (child, panel) {
	};
	_pTreeView._onInitSubPanelItemsLayout = function (item, panel, binddata, index) {
	};
	_pTreeView._onInitPopupSubPanelNCChildLayout = function (parent, startindex, startlevel) {
	};
	_pTreeView._onInitPopupSubPanelChildLayout = function (parent, startindex, startlevel) {
	};
	_pTreeView._onInitPopupSubPanelItemsLayout = function (parent, startindex, startlevel) {
	};

















	_pTreeView._is_databind = true;
	_pTreeView._is_fullbind = false;
	_pTreeView._is_levelbind = true;
	_pTreeView._is_xmlbind = true;
	_pTreeView._is_jsonbind = true;



	_pTreeView._onGetBindDataSource = function () {
		return this.binddatasource;
	};


	_pTreeView._onGetDataColumns = function () {
		return [this.datacolumn ? this.datacolumn : "#nodename", this.iconcolumn ? this.iconcolumn : ""
		];
	};
	_pTreeView._onGetDataProps = function () {
		return ["datacolumn", "iconcolumn"];
	};


	_pTreeView._onGetDataBindInfos = function () {
		return [this.createItemSubControlBindInfo("treecontrol", "treetext", "datacolumn"), this.createItemSubControlBindInfo("treecontrol", "treeicon", "iconcolumn")
		];
	};



	_pTreeView.binddatasource = null;
	_pTreeView.codecolumn = "";
	_pTreeView.datacolumn = "";
	_pTreeView.levelcolumn = "";
	_pTreeView.iconcolumn = "";

	_pTreeView.set_binddatasource = function (str) {
		if (this.binddatasource != str) {
			this.binddatasource = str;

			this.on_apply_binddatasource();
		}
	};

	_pTreeView.on_apply_binddatasource = function () {
		this._setBindDataSource();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};

	_pTreeView.on_clear_binddatasource = function () {
		this._clearBindDataSource();
	};

	_pTreeView.set_codecolumn = function (v) {
		if (v && v != this.codecolumn) {
			this.codecolumn = v;

			this.on_apply_codecolumn();
		}
	};
	_pTreeView.set_levelcolumn = function (v) {
		if (v && v != this.levelcolumn) {
			this.levelcolumn = v;

			this.on_apply_levelcolumn();
		}
	};
	_pTreeView.set_groupcolumn = function (v) {
		if (v && v != this.groupcolumn) {
			this.groupcolumn = v;

			this.on_apply_groupcolumn();
		}
	};
	_pTreeView.set_datacolumn = function (v) {
		if (v && v != this.datacolumn) {
			this.datacolumn = v;

			this.on_apply_datacolumn();
		}
	};
	_pTreeView.set_iconcolumn = function (v) {
		if (v && v != this.iconcolumn) {
			this.iconcolumn = v;

			this.on_apply_iconcolumn();
		}
	};

	_pTreeView.on_apply_codecolumn = function () {
		this._setCodeColumn();

		if (!this._is_created) {
			return;
		}

		this._applyValue();
	};
	_pTreeView.on_apply_levelcolumn = function () {
		this._setLevelColumn();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};
	_pTreeView.on_apply_groupcolumn = function () {
		this._setGroupColumn();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};
	_pTreeView.on_apply_datacolumn = function () {
		this._setDataColumn();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};
	_pTreeView.on_apply_iconcolumn = function () {
		this._setDataColumn();

		if (!this._is_created) {
			return;
		}

		this._recreateItems();
	};

	_pTreeView.on_clear_codecolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearCodeColumn();
	};
	_pTreeView.on_clear_levelcolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearLevelColumn();
	};
	_pTreeView.on_clear_groupcolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearLevelColumn();
	};
	_pTreeView.on_clear_datacolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearDataColumn();
	};
	_pTreeView.on_clear_iconcolumn = function () {
		if (!this._is_created) {
			return;
		}

		this._clearDataColumn();
	};

	_pTreeView._setCtxtString = function (str) {
		return this.set_binddatasource(str);
	};
	_pTreeView._getCtxtString = function () {
		return this._fetchBindDataCtxStr();
	};
	_pTreeView._getCtxtObject = function () {
		return this._fetchBindDataCtxObj();
	};
	_pTreeView._getCtxtRow = function (index) {
		return this._getBindRow(index ? index : this.getSelect());
	};
	_pTreeView._addCtxtRow = function (index, item) {
		return this._appendBindRow(index ? index : this.getSelect(), item);
	};
	_pTreeView._insCtxtRow = function (index, item) {
		return this._insertBindRow(index ? index : this.getSelect(), item);
	};
	_pTreeView._subCtxtRow = function (index, item, last) {
		return this._subsetBindRow(index ? index : this.getSelect(), item, last);
	};
	_pTreeView._delCtxtRow = function (index, item) {
		return this._deleteBindRow(index ? index : this.getSelect());
	};
	_pTreeView._findCtxtRow = function (attr, data) {
		return this._searchBindRow(attr, data);
	};
	_pTreeView._getCtxtAttr = function (index, attr) {
		return this._getBindColumn(index, attr);
	};
	_pTreeView._setCtxtAttr = function (index, attr, data) {
		return this._setBindColumnByID(index, attr, data);
	};



	_pTreeView._use_select = true;


























	_pTreeView.onInitProperties = function () {
		this.showhead = false;
		this.showsummary = false;
		this.subgroup = 0;

		this.rootusehead = false;
		this.leafusebranch = false;

		this.useedittext = "unuse";
		this.useeditbutton = "use";
		this.useeditnewrow = "unuse";

		this.treeusebutton = "use";
		this.treeusecheckbox = false;
		this.treeuseimage = false;

		this.rowsize = this.showhead ? [30, 24] : [24];
		this.colsize = [];

		this._itemheight = 30;
		this._titleheight = 30;
	};
	_pTreeView.onApplyProperties = function () {
		this.on_apply_binddatasource();
		this.on_apply_codecolumn();
		this.on_apply_levelcolumn();
		this.on_apply_groupcolumn();
		this.on_apply_datacolumn();
		this.on_apply_iconcolumn();
	};
	_pTreeView.onClearProperties = function () {
		this.on_clear_binddatasource();
		this.on_clear_codecolumn();
		this.on_clear_levelcolumn();
		this.on_clear_groupcolumn();
		this.on_clear_datacolumn();
		this.on_clear_iconcolumn();
	};

	_pTreeView.set_showhead = function (v) {
		var _v = nexacro._toBoolean(v);

		if (_v != this.showhead) {
			this.showhead = _v;
		}
	};
	_pTreeView.set_showsummary = function (v) {
		var _v = nexacro._toBoolean(v);

		if (_v != this.showsummary) {
			this.showsummary = _v;
		}
	};
	_pTreeView.set_subgroup = function (v) {
		if (v && v != this.subgroup) {
			this.subgroup = v;
		}
	};

	_pTreeView.set_rootusehead = function (v) {
		var _v = nexacro._toBoolean(v);

		if (_v != this.rootusehead) {
			this.rootusehead = _v;
		}
	};
	_pTreeView.set_leafusebranch = function (v) {
		var _v = nexacro._toBoolean(v);

		if (_v != this.leafusebranch) {
			this.leafusebranch = _v;
		}
	};
	_pTreeView.set_treeusebutton = function (v) {
		if (v && v != this.treeusebutton) {
			this.treeusebutton = v;
		}
	};
	_pTreeView.set_treeusecheck = function (v) {
		if (v && v != this.treeusecheck) {
			this.treeusecheck = v;
		}
	};
	_pTreeView.set_treeuseimage = function (v) {
		if (v && v != this.treeuseimage) {
			this.treeuseimage = v;
		}
	};

	_pTreeView.set_rowsize = function (v) {
		if (v && v != this.rowsize) {
			this.rowsize = JSON.parse(v);
		}
	};
	_pTreeView.set_colsize = function (v) {
		if (v && v != this.colsize) {
			this.colsize = JSON.parse(v);
		}
	};









	_pTreeView._initEvents = function () {
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

			"onselect" : 1, 
			"onadd" : 1, 
			"onsub" : 1, 
			"ondel" : 1
		};
	};

	_pTreeView._on_basic_onclick = function (obj, e) {
		this.setSelect(this._getItemIndex(e.fromobject));
	};
	_pTreeView._on_default_onclick = function (obj, e) {
	};
	_pTreeView._on_fire_onclick = function (obj, e) {
		if (this.onclick && this.onclick._has_handlers) {
			return this.onclick._fireEvent(this, new nexacro.ClickEventInfo(this, "onclick", e.button, e.alt_key, e.ctrl_key, e.shift_key, e.screenX, e.screenY, e.canvasX, e.canvasY, e.clientX, e.clientY, this, e.from_refer_comp));
		}
		return true;
	};

	_pTreeView._on_basic_onadd = function (obj, e) {
	};
	_pTreeView._on_default_onadd = function (obj, e) {
	};
	_pTreeView._on_fire_onadd = function (obj, e) {
		return this._fire_event(this.onadd, obj, e);
	};
	_pTreeView._on_basic_onsub = function (obj, e) {
	};
	_pTreeView._on_default_onsub = function (obj, e) {
	};
	_pTreeView._on_fire_onsub = function (obj, e) {
		return this._fire_event(this.onsub, obj, e);
	};
	_pTreeView._on_basic_ondel = function (obj, e) {
	};
	_pTreeView._on_default_ondel = function (obj, e) {
	};
	_pTreeView._on_fire_ondel = function (obj, e) {
		return this._fire_event(this.ondel, obj, e);
	};






	delete _pTreeView;
}
;


