(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_background("red");
            this.set_name("cmmFilter");
            this.set_scrollbartype("none none");
            this.set_titletext("그리드 필터");
            if (Form == this.constructor)
            {
                this._setFormPosition(240,217);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilter", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdFilter","0","0",null,null,"0","-1",null,null,null,null,this);
            obj.set_cssclass("gridFilter");
            obj.set_scrollbartype("none auto");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"260\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",240,217,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmFilter.xfdl", function() {
        /*******************************************************************************
         * 업무구분		: cmmFilter.xfdl
         * 화 면 명		:
         * 화면설명		: 공통팝업 (필터)
         * 작 성 자		: TOBESOFT
         * 작 성 일		: 2018-07-24
         * 수정이력
         *******************************************************************************
         *	수 정 일		수 정 자		수정 내용
         *******************************************************************************
         *2018-07-24		TOBESOFT
         ******************************************************************************/

        /*******************************************************************************
         *	공통 라이브러리 Include 영역
         ******************************************************************************/

        /*******************************************************************************
         *	Form 전역변수 영역
         ******************************************************************************/
        this.fvArguments = {};

        /*******************************************************************************
         *	Form Event 영역
         ******************************************************************************/
        this.formOnload = function(obj,e)
        {
        };

        // 필터데이터 셋팅
        this.fnLoadFilterInfo = function (oArguments)
        {
        	this.fvArguments = oArguments;
        	this.dsFilter.assign(this.fvArguments.dataset);

        	var sColID 		= this.fvArguments.codecolumn;
        	var sDispColId  = this.fvArguments.datacolumn;

        	 // 정렬해서 담아온 값이므로 빈값있다면 첫번째 행에 존재함
        	 if (this.gfnIsEmpty(this.gfnTrim(this.gfnToString(this.dsFilter.getColumn(0, sColID)))))
        	 {
        		this.dsFilter.deleteRow(0);

        		var nNewRow = this.dsFilter.addRow();
        		this.dsFilter.setColumn(nNewRow,sColID	 	, "(empty)"	   );
        		this.dsFilter.setColumn(nNewRow,sDispColId	, "(empty)"	   );

        		var nNewRow = this.dsFilter.addRow();
        		this.dsFilter.setColumn(nNewRow,sColID	    , "(not empty)");
        		this.dsFilter.setColumn(nNewRow,sDispColId  , "(not empty)");
        	}

        	this.dsFilter.insertRow(0);
        	this.dsFilter.setColumn(0,sColID,    "(all)");
        	this.dsFilter.setColumn(0,sDispColId,"(all)");

        	this.grdFilter.setBindDataset(this.dsFilter);
        	this.grdFilter.setCellProperty("body", 0, "text", "bind:" + this.fvArguments.datacolumn);

        	// 이전 선택한 값으로 포지션 셋팅
        	var nRow = 0;
        	if (!this.gfnIsNull(this.fvArguments.selectvalue))
        	{
        		nRow = this.dsFilter.findRow(sColID,this.fvArguments.selectvalue);
        		if (nRow < 0) nRow = 0;
        	}

        	this.dsFilter.set_rowposition(nRow);
        };

        // 필터 데이터 선택 시
        this.grdFilter_oncelldblclick = function(obj,e)
        {
        	var oResultArg = { code 	 : this.dsFilter.getColumn(this.dsFilter.rowposition, this.fvArguments.codecolumn)
        					 , text 	 : this.dsFilter.getColumn(this.dsFilter.rowposition, this.fvArguments.datacolumn)
        					 , oldindex  : this.fvArguments.rowposition
        					 , newindex  : this.dsFilter.rowposition};

        	this.parent.parent._gfnGridPopupDivFilterList_OnDblClick(oResultArg);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.grdFilter.addEventHandler("oncelldblclick",this.grdFilter_oncelldblclick,this);
        };

        this.loadIncludeScript("cmmFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
