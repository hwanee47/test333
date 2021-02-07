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

if (nexacro._TreeView) {
	var _pTreeView = nexacro._TreeView.prototype;



	_pTreeView._onCreateCssDesignContents = function (mode) {
		var _innerdataset = new nexacro.NormalDataset("_innerdataset", this);
		_innerdataset._setContents("<ColumnInfo><Column id=\"column1\" size=\"256\"/><Column id=\"column2\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"column1\">1</Col><Col id=\"column2\">Item 1</Col></Row><Row><Col id=\"column1\">2</Col><Col id=\"column2\">Item 2</Col></Row><Row><Col id=\"column1\">3</Col><Col id=\"column2\">Item 3</Col></Row></Rows>");

		this.set_binddatasource(_innerdataset);
		this.set_codecolumn("column1");
		this.set_datacolumn("column2");
		this.set_levelcolumn("column3");
		this.set_iconcolumn("column4");
	};
	_pTreeView._onShowCssDesignContents = function () {
		this.setSelect(1);
	};
	_pTreeView._onDestroyCssDesignContents = function () {
		this.set_binddatasource(null);
	};





	delete _pTreeView;
}
