(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_cssclass("bg_pop01");
            this.set_name("commFindPopUp");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCombo", this);
            obj._setContents("<ColumnInfo><Column id=\"value\" size=\"256\" type=\"STRING\"/><Column id=\"body\" size=\"256\" type=\"STRING\"/><Column id=\"displaytype\" size=\"256\" type=\"STRING\"/><Column id=\"edittype\" size=\"256\" type=\"STRING\"/><Column id=\"index\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("cbo_category","10","6","179","28",null,null,null,null,null,null,this);
            obj.set_codecolumn("index");
            obj.set_datacolumn("value");
            obj.set_innerdataset("dsCombo");
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_keyword","10","46","179","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","212","6","93","28",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1979");
            obj.set_taborder("2");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next","212","btn_search:12","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Next");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back","214","btn_next:12","93","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Back");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","10","86","179","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Close");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",320,130,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("cmmFindPopUp.xfdl","lib::lib_Form.xjs");
        this.registerScript("cmmFindPopUp.xfdl", function() {
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/

        this.pGrid;
        this.pDsObj;

        this.btn_search_onclick = function(obj,e)
        {
        	var colId = this.dsCombo.lookup("index", this.cbo_category.value, "body").replace("bind:", "");
        	this.gfnFildRowAs(this.pGrid, this.pDsObj, colId, this.edt_keyword.text);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.Form_com_onload = function(obj,e)
        {
        	var objOwnerFrame = this.getOwnerFrame();
        	this.pGrid = objOwnerFrame.param.GRID;
        	this.pDsObj = objOwnerFrame.form.lookup(this.pGrid.binddataset);


        	this.fnGetHeadText();

        // 	var pGridColCnt = pGrid.getCellCount("body");
        //
        // 	for(var i=0; i<pGridColCnt; i++) {
        // 		var colStr = pGrid.getCellProperty("body", i, "text");
        // 		var colId = colStr.replace("bind:", "");
        // 		var value = pGrid.getCellProperty("head", i, "text");
        // 		var nRow = this.dsCombo.addRow();
        //
        // 		this.dsCombo.setColumn(nRow, "CODE", colId);
        // 		this.dsCombo.setColumn(nRow, "VALUE", value);
        // 	}
        };


        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fnGetHeadText = function ()
        {
        	this.dsCombo.clearData();
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0; i<this.pGrid.getCellCount("Body"); i++)
            {
                if( this.pGrid.getCellProperty("Body", i, "displaytype") != "image" )
                {
        			var sText = this.pGrid.getCellProperty("Body", i, "text");
        			if( sText == "bind:CHK") continue; //공통체크박스 제외
        			var sBind;
        			if ( this.gfnIsNull(sText) == false ){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.dsCombo.addRow();

        				this.dsCombo.setColumn(nrow, "body"			, this.pGrid.getCellProperty("Body", i, "text"));
        				this.dsCombo.setColumn(nrow, "displaytype"	, this.pGrid.getCellProperty("Body", i, "displaytype"));
        				this.dsCombo.setColumn(nrow, "edittype"		, this.pGrid.getCellProperty("Body", i, "edittype"));
        				this.dsCombo.setColumn(nrow, "index"		,   i);
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var i=0;i<this.pGrid.getCellCount("Head");i++)
            {
                var title  = this.pGrid.getCellProperty("Head", i,   "text");
                var col    = this.pGrid.getCellProperty("Head", i,   "col");
                var body   = this.pGrid.getCellProperty("Body", col, "text");


                var nrow = this.dsCombo.findRow("body", body);
                if( nrow != -1 )
                {
                    this.dsCombo.setColumn(nrow, "index"	,   col);
                    this.dsCombo.setColumn(nrow, "value"	,    title);
                }
            }
        };

        this.edt_keyword_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		var colId = this.dsCombo.lookup("index", this.cbo_category.value, "body").replace("bind:", "");
        		this.gfnFildRowAs(this.pGrid, this.pDsObj, colId, this.edt_keyword.text);
        	}
        };


        this.btn_next_onclick = function(obj,e)
        {

        };

        this.btn_back_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_com_onload,this);
            this.edt_keyword.addEventHandler("onkeydown",this.edt_keyword_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_next.addEventHandler("onclick",this.btn_next_onclick,this);
            this.btn_back.addEventHandler("onclick",this.btn_back_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };

        this.loadIncludeScript("cmmFindPopUp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
