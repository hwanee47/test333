(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmMultiCombo");
            this.set_titletext("멀티콤보");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtCombo","0","0","179","21",null,null,null,null,null,null,this);
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnCombo","179","0","21","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCombo","0","21","200","171",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",200,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmMultiCombo.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmMultiCombo.xfdl (공통 멀티콤보)
        *  @FileName 		cmmMultiCombo.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.10.19
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	soojeong 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this._objBindDs;
        this._objTarget;
        this._sTarget;

        this.comboinnerdataset;
        this.allcheck;
        this.callbackfunc;
        this.combocodecolumn;
        this.combodatacolumn;
        this.comboinnerdataset;
        this.displaycount;
        this.maxcount;
        this.cellwidth;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this); //초기화[필수]

        	this.fnSetCombo();
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 콤보세팅
        */
        this.fnSetCombo = function ()
        {

        	var objTarget = this.parent;	 //div
        	var sTarget = "this.parent";
        	var pdvComboList = this.pdvCombo;
        	var compComboHeight = 0;

        	this.comboinnerdataset 		= objTarget.comboinnerdataset;
        	this.allcheck 						= objTarget.allcheck;
        	this.callbackfunc 				= objTarget.callbackfunc;
        	this.combocodecolumn 		= objTarget.combocodecolumn;
        	this.combodatacolumn		= objTarget.combodatacolumn;
        	this.comboinnerdataset		= objTarget.comboinnerdataset;
        	this.displaycount				= objTarget.displaycount;
        	this.maxcount					= objTarget.maxcount;
        	this.cellwidth						= objTarget.cellwidth;

        	while(1)
         	{
         		if (objTarget.name == "divWorkSpace")
         		{
         			break;
         		}
         		else if(objTarget == "[object Form]")
         		{
         			break;
         		}
         		else if(objTarget == "[object Tabpage]" && !this.gfnIsNull(objTarget.url))
         		{
        			break;
         		}
         		else
         		{
         			objTarget = objTarget.parent;
         			sTarget = sTarget+".parent";
         		}
         	}

         	this._objTarget = objTarget;
         	this._sTarget = sTarget;

         	if (this.gfnIsNull(this.allcheck)) this.allcheck = "false";
        	if (!this.gfnIsNull(this.comboinnerdataset))
         	{
        		if (this.gfnIsNull(objTarget.objects[this.comboinnerdataset]))
        		{
        			alert("invalid comboinnerdataset");
        			return false;
        		}
        		else
        		{
        			this._objBindDs = objTarget.objects[this.comboinnerdataset];
        			this._objBindDs.addColumn("multComboChk", "STRING", 1);

        			this._objBindDs.set_enableevent(false);
        			for (var i=0; i<this._objBindDs.rowcount; i++)
        			{
        				this._objBindDs.setColumn(i, "multComboChk", "0");
        			}

        			this._objBindDs.set_enableevent(true);

        			var nDisplayCount = this.displaycount;

        			if (this.gfnIsNull(nDisplayCount)) nDisplayCount = 10;
        			if (nDisplayCount > this._objBindDs.rowcount) nDisplayCount = this._objBindDs.rowcount;

        			if (nexacro.toNumber(nDisplayCount) != 0)
        			{
        				compComboHeight =  24 * nDisplayCount;
        				if (this.allcheck == "true") compComboHeight = compComboHeight + 40;
        			}

        			this.pdvCombo.set_height(compComboHeight+4);
        			if (this.allcheck == "false") this._CreateCombo(this.pdvCombo);
        			else this._CreateAllCheck();
        		}
        	}

        };

        /**
         * @description 전체선택/해제 추가
        */
        this._CreateAllCheck = function()
        {
        	var compDiv = new Div("divComboList", 0, 0, this.width, null, null, 40);
        	this.pdvCombo.addChild(compDiv.name, compDiv);
        	compDiv.show();

        	var compStaBg = new Static("staBg", 0, null, null, 38, 0, 0);
        	this.pdvCombo.addChild(compStaBg.name, compStaBg);
        	//compStaBg.set_cssclass("sta_POP_BtnArea");
        	compStaBg.show();

        	var nLeft = (nexacro.toNumber(this.width) - (23*2+2)) / 2;
        	var compBtnAllCheck = new Button("btnAllCheck", nLeft, null, 23, 23, null, 8);
        	this.pdvCombo.addChild(compBtnAllCheck.name, compBtnAllCheck);
        	compBtnAllCheck.addEventHandler("onclick", this._compBtnAllCheck_onclick, this);
        	//compBtnAllCheck.set_cssclass("btn_WF_AllCheck");
        	compBtnAllCheck.show();

        	var compBtnNonCheck = new Button("btnNonCheck", nLeft+compBtnAllCheck.getOffsetWidth()+2, null, 23, 23, null, 8);
        	this.pdvCombo.addChild(compBtnNonCheck.name, compBtnNonCheck);
        	compBtnNonCheck.addEventHandler("onclick", this._compBtnNonCheck_onclick, this);
        	//compBtnNonCheck.set_cssclass("btn_WF_NonCheck");
        	compBtnNonCheck.show();

        	this._CreateCombo(compDiv);
        };

        /**
         * @description ALL버튼 클릭 이벤트
        */
        this._compBtnAllCheck_onclick = function(obj,  e)
        {
        	var objBindDs = this._objBindDs;
        	for (var i=0; i<objBindDs.rowcount; i++)
        	{
        		objBindDs.setColumn(i, "multComboChk", "1");
        	}
        };

        /**
         * @description none버튼 클릭이벤트
        */
        this._compBtnNonCheck_onclick = function(obj,  e)
        {
        	var objBindDs = this._objBindDs;
        	for (var i=0; i<objBindDs.rowcount; i++)
        	{
        		objBindDs.setColumn(i, "multComboChk", "0");
        	}
        };

        /**
         * @description  동적 Grid Como List 생성
        */
        this._CreateCombo = function(compComboList)
        {
        	if(this.isValidObject("grdCombo")) this.removeChild("grdCombo");

        	var compGrid = new Grid("grdCombo", 0, 0, null, 100, 0, null);
        	compComboList.addChild(compGrid.name, compGrid);
        	compGrid.set_binddataset(this.comboinnerdataset);
        	compGrid.set_tooltiptype("hover");
        	compGrid.set_autofittype("col");
        	//compGrid.set_cssclass("grd_WF_MultiCombo");
        	compGrid.set_wheelscrollrow(1);
        	compGrid.setgrid = "false";
        	compGrid.show();

        	var objDs = compGrid.getBindDataset();
        	compGrid.set_enableevent(false);
        	compGrid.set_enableredraw(false)

        	if (this.combocommcode == "true")
        	{
        		compGrid.appendContentsRow("body");
        		compGrid.appendContentsCol();

        		compGrid.setFormatColProperty(0, "size", 60);
        		compGrid.setFormatColProperty(1, "size", 110);
        		compGrid.setCellProperty("Body", 0, "text", "bind:"+this.combocodecolumn);
        		compGrid.setCellProperty("Body", 0, "align", "left middle");
        		compGrid.setCellProperty("Body", 1, "text", "bind:"+this.combodatacolumn);
        		compGrid.setCellProperty("Body", 1, "align", "left middle");
        	}
        	else
        	{
        		compGrid.createFormat();
        		compGrid.deleteContentsRow("head", 0);
        	}

        	compGrid.deleteContentsCol("body", compGrid.getBindCellIndex("body", "multComboChk"));

        	compGrid.insertContentsCol(0);
        	compGrid.setCellProperty("Body", 0, "displaytype", "checkbox");
        	compGrid.setCellProperty("Body", 0, "edittype", "checkbox");
        	compGrid.setCellProperty("Body", 0, "text", "bind:multComboChk");

        	compGrid.setFormatColProperty(0, "size", 30);
        	compGrid.setFormatColProperty(0, "band", "left");

        	compGrid.addEventHandler("oncellclick", this._Grid_oncellclick, this);

        	compGrid.set_enableevent(true);
        	compGrid.set_enableredraw(true);

        	var nWidth = 0;

        	for (var i=1; i<compGrid.getCellCount("body"); i++)
        	{
        		compGrid.setCellProperty("Body", i, "tooltiptext", compGrid.getCellProperty("Body", i, "text"));


        		if (this.gfnIsNull(this.cellwidth))
        		{
        			nWidth = nWidth + compGrid.getFormatColProperty(i, "size");;
        		}
        		else
        		{
        			arrCellWidth = this.cellwidth.split("^");
        			nUserCellWidth = arrCellWidth[i-1];
        			if (this.gfnIsNull(nUserCellWidth)) nUserCellWidth = 80;
        			compGrid.setFormatColProperty(i, "size", nUserCellWidth);
        			nWidth = nWidth + nexacro.toNumber(nUserCellWidth);
        		}
        	}

        	var nLine = 2;
        	var nScrollbar = 15;
        	var nRowHeight = 24;
        	var nCellWidth = 80;

        	var nHeight = this._objBindDs.rowcount * nRowHeight + nLine;

        	if (compGrid.getCellCount("body") > 3)
        	{
        		if (this.width < nWidth)
        		{
        			this.pdvCombo.set_height(nexacro.toNumber(this.pdvCombo.height)+nScrollbar);
        			compGrid.set_width(nWidth);
        		}
        	}

         	compGrid.set_height(nHeight);
         //	compComboList.set_scrollbars("autoboth");

        //	compComboList.resetScroll();

        	if (this.gfnIsNull(this.selectvalue)) this.edtCombo.set_value("선택");
        	else this.setValue(this.selectvalue);
        };

        /**
         * @description  fnReplace(문자열치환)
        */
        this.fnReplace = function (sValue, sOrg, sNew)
        {
        	var varRtnValue = "";

        	if (this.gfnIsNull(sValue)) {
        		return varRtnValue;
        	}
        	varRtnValue = sValue.toString().replace(sOrg, sNew);

        	return varRtnValue;
        };

        /**
         * @description  공통함수 호출 후 생성함수
        */
        this.setCombo = function()
        {

        	var rtn = this.removeChild("pdvCombo");

        	var compPdvComboList = new PopupDiv("pdvCombo", 0, 21, null, 100, 0, null);
        	this.addChild(compPdvComboList.name, compPdvComboList);
        	compPdvComboList.set_cssclass("pdiv_WF_MultiCombo");
        	compPdvComboList.show();

        	compPdvComboList.addEventHandler("oncloseup", this.pdvCombo_oncloseup, this);

        	this.edtCombo.set_value("");

        	this.edtCombo.retrunvalue = "";
        	this.edtCombo.returntext = "";

        	this.fnSetCombo();
        };

        /**
         * @description  부모창에서 value 가져갈 수 있는 함수
        */
        this.getValue = function()
        {
        	return this.edtCombo.retrunvalue;
        };

        /**
         * @description  부모창에서 text 가져갈 수 있는 함수
        */
        this.getText = function()
        {
        	return this.edtCombo.returntext;
        };

        /**
         * @description  부모창에서 값 세팅하는 함수
        */
        this.setValue = function(sValue)
        {
        	this.fnInit();
        	var arrValueList = sValue.split(",");
        	var arrTextList = [];
        	var objDs = this._objBindDs;
        	var nFindRow;

        	for (var i=0; i<arrValueList.length; i++)
        	{
        		nFindRow = objDs.findRow(this.combocodecolumn, arrValueList[i]);
        		if (nFindRow != -1)
        		{
        			arrTextList.push(objDs.getColumn(nFindRow, this.combodatacolumn));
        			objDs.setColumn(nFindRow, "multComboChk", "1");
        		}
        	}

        	this.fnSetComboText(arrTextList, arrValueList);
        };

        /**
         * @description  필수상태
        */
        this.setEssential = function()
        {
        	//this.edtCombo.set_cssclass("edt_WF_Essential");
        	this.edtCombo.set_background("yellow");
        };

        /**
         * @description  값 세팅
        */
        this.fnSetComboText = function(arrTextList, arrValueList)
        {
        	var sComboText = arrTextList.toString();
        	this.edtCombo.retrunvalue = arrValueList.toString();
        	this.edtCombo.returntext = sComboText;
        	var objRtn = nexacro.getTextSize(sComboText, "9 Dotum");
        	var nComboTextWidth = objRtn.nx;

        	var nWidth = this.edtCombo.getOffsetWidth() - this.btnCombo.width;
        	if (nComboTextWidth > nWidth)
        	{
        		this.edtCombo.set_value(arrTextList.length+"개 선택");
        		this.edtCombo.set_tooltiptext(sComboText);
        		this.edtCombo.set_tooltiptype("hover");
        	}
        	else
        	{
        		this.edtCombo.set_value(sComboText);
        	}

        	if (this.gfnIsNull(arrTextList)) this.edtCombo.set_value("선택");
        };

        /**
         * @description  초기화(전체해제)
        */
        this.fnInit = function ()
        {
        	var objBindDs = this._objBindDs;
        	for (var i=0; i<objBindDs.rowcount; i++)
        	{
        		objBindDs.setColumn(i, "multComboChk", "0");
        	}
        	this.edtCombo.set_value("선택");
        };

        /**
         * @description   Popup Div Open
        */
        this.fnOpenCombo = function()
        {
        	 var objApp = nexacro.getApplication();
        	 var nMainHeight = objApp.mainframe.height;
        	if (!this.gfnIsNull(this.comboinnerdataset))
         	{
        		if (this.gfnIsNull(this._objBindDs))
        		{
        			return false;
        		}
        		else
        		{
        			var nTop = 21;
        			var nBottom = nexacro.toNumber(nMainHeight) - nexacro.toNumber(this.getOffsetBottom());
        			var nHeight = nexacro.toNumber(this.pdvCombo.height) + nexacro.toNumber(this.btnCombo.height) + 4;

        			if (nHeight > nBottom) nTop = -(this.pdvCombo.height-1);

        			this.pdvCombo.trackPopupByComponent(this.edtCombo, 0, nTop);
        			this._objBindDs.set_rowposition(-1);
        		}
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description   button click popupdiv open
        */
        this.btnCombo_onclick = function(obj,e)
        {
        	this.fnOpenCombo();
        };

        /**
         * @description  Popup Div 닫힐때 값세팅
        */
        this.pdvCombo_oncloseup = function(obj,e)
        {
        	var objDs = this._objBindDs;
        	var arrTextList = [];
        	var arrValueList = [];

        	if (this.gfnIsNull(objDs.getColumnInfo(this.combodatacolumn))) return false;
        	if (this.gfnIsNull(objDs.getColumnInfo(this.combocodecolumn))) return false;

        	for (var i=0; i<objDs.rowcount; i++)
        	{
        		if (objDs.getColumn(i, "multComboChk") == "1")
        		{
        			arrTextList.push(objDs.getColumn(i, this.combodatacolumn));
        			arrValueList.push(objDs.getColumn(i, this.combocodecolumn));
        		}
        	}

        	this.fnSetComboText(arrTextList, arrValueList);

        	if (!this.gfnIsNull(this.callbackfunc))
        	{
        		var sCallbackFunc= this._sTarget+"."+this.callbackfunc+"()";
        		eval(sCallbackFunc);
        	}
        };

        /**
         * @description  Combo 클릭
        */
        this._Grid_oncellclick = function(obj, e)
        {
        	var objDs = obj.getBindDataset();

        	if (e.col !=0)
        	{
        		if (objDs.getColumn(e.row, "multComboChk") == "1") objDs.setColumn(e.row, "multComboChk", "0");
        		else objDs.setColumn(e.row, "multComboChk", "1");
        	}

        	if (!this.gfnIsNull(this.maxcount))
        	{
        		var nSelectCount = objDs.getCaseCount("multComboChk == '1'");
        		if (this.maxcount < nSelectCount)
        		{
        			objDs.setColumn(e.row, "multComboChk", "0");
        			var arr = [];
        			arr.push(this.maxcount);
        			this.gfnAlert("msg.err.validator.multicombo.maxcnt", arr);
        		}
        	}
        };

        /**
         * @description  edit click popupdiv open
        */
        this.edtCombo_oneditclick = function(obj,e)
        {
        	this.fnOpenCombo();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCombo.addEventHandler("oneditclick",this.edtCombo_oneditclick,this);
            this.btnCombo.addEventHandler("onclick",this.btnCombo_onclick,this);
            this.pdvCombo.addEventHandler("oncloseup",this.pdvCombo_oncloseup,this);
        };

        this.loadIncludeScript("cmmMultiCombo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
