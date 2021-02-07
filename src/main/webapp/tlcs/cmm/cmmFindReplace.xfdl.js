(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_border("0px none");
            this.set_name("cmmFindReplace");
            this.set_titletext("찾기/바꾸기");
            if (Form == this.constructor)
            {
                this._setFormPosition(310,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"index\" size=\"256\" type=\"STRING\"/><Column id=\"name\" size=\"256\" type=\"STRING\"/><Column id=\"displaytype\" size=\"256\" type=\"STRING\"/><Column id=\"edittype\" size=\"256\" type=\"STRING\"/><Column id=\"body\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5","10",null,"21","15",null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1604");
            obj.set_taborder("0");
            obj.set_text("데이터 찾기/바꾸기");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","5","48","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1593");
            obj.set_taborder("1");
            obj.set_text("대상칼럼");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","78","50","217","21",null,null,null,null,null,null,this);
            obj.set_codecolumn("index");
            obj.set_datacolumn("name");
            obj.set_innerdataset("ds00");
            obj.set_taborder("2");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","5","79","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1980");
            obj.set_taborder("3");
            obj.set_text("찾을 문자열");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","5","110","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1682");
            obj.set_taborder("5");
            obj.set_text("바꿀 문자열");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","5","141","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1981");
            obj.set_taborder("7");
            obj.set_text("찾을 방향");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","78","149","227","21",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_taborder("8");
            var rdo00_innerdataset = new nexacro.NormalDataset("rdo00_innerdataset", obj);
            rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">prev</Col><Col id=\"datacolumn\">이전</Col></Row><Row><Col id=\"datacolumn\">다음</Col><Col id=\"codecolumn\">next</Col></Row></Rows>");
            obj.set_innerdataset(rdo00_innerdataset);
            obj.set_value("next");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","5","172","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1982");
            obj.set_taborder("9");
            obj.set_text("찾을 위치");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo01","78","177","227","21",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_taborder("10");
            var rdo01_innerdataset = new nexacro.NormalDataset("rdo01_innerdataset", obj);
            rdo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">current</Col><Col id=\"datacolumn\">현재위치</Col></Row><Row><Col id=\"datacolumn\">처음부터</Col><Col id=\"codecolumn\">first</Col></Row></Rows>");
            obj.set_innerdataset(rdo01_innerdataset);
            obj.set_value("current");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","5","203","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1983");
            obj.set_taborder("11");
            obj.set_text("찾을 조건");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo02","78","205","110","21",null,null,null,null,null,null,this);
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_taborder("12");
            var rdo02_innerdataset = new nexacro.NormalDataset("rdo02_innerdataset", obj);
            rdo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">equal</Col><Col id=\"datacolumn\">일치</Col></Row><Row><Col id=\"datacolumn\">포함</Col><Col id=\"codecolumn\">inclusion</Col></Row></Rows>");
            obj.set_innerdataset(rdo02_innerdataset);
            obj.set_value("equal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","190","206","100","21",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1587");
            obj.set_taborder("13");
            obj.set_text("대/소문자 구분");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","12","259","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1979");
            obj.set_taborder("14");
            obj.set_text("찾기");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","84","259","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1681");
            obj.set_taborder("15");
            obj.set_text("바꾸기");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","155","259","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1661");
            obj.set_taborder("16");
            obj.set_text("모두바꾸기");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","226","259","70","30",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0237");
            obj.set_taborder("17");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","78","84","217","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","78","112","217","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",310,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmFindReplace.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmFindReplace.xfdl (공통 그리드 찾기/바꾸기)
        *  @FileName 		cmmFindReplace.xfdl
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
        this.fvGrid;
        this.fvDs;
        this.fvSelectRow;
        this.fvCellname;
        this.fvCellindex;
        this.fvSelectType;
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this); //초기화[필수]

        	this.fvGrid = this.getOwnerFrame().pvGrid;
        	this.fvGrid.set_selecttype("cell");
        	this.fvDs = this.fvGrid.getBindDataset();
        	this.fvSelectRow = this.getOwnerFrame().pvStrartRow;
        	this.fvSelectType = this.getOwnerFrame().pvSelectType;
        	this.fnGetHeadText();
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fnGetHeadText = function ()
        {
        // 	var sDisplaytype;
        // 	var sEdittype;
        // 	var stxt;
        // 	var nHeadCell;

        	this.ds00.clearData();
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0; i<this.fvGrid.getCellCount("Body"); i++)
            {
                if( this.fvGrid.getCellProperty("Body", i, "displaytype") != "image" )
                {
        			var sText = this.fvGrid.getCellProperty("Body", i, "text");
        			if( sText == "bind:gridcmmcheck") continue; //공통체크박스 제외
        			var sBind;
        			if ( this.gfnIsNull(sText) == false ){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.ds00.addRow();

        				this.ds00.setColumn(nrow, "body", 		 this.fvGrid.getCellProperty("Body", i, "text"));
        				this.ds00.setColumn(nrow, "displaytype", this.fvGrid.getCellProperty("Body", i, "displaytype"));
        				this.ds00.setColumn(nrow, "edittype", 	 this.fvGrid.getCellProperty("Body", i, "edittype"));
        				this.ds00.setColumn(nrow, "index",   i);
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var i=0;i<this.fvGrid.getCellCount("Head");i++)
            {
                var title  = this.fvGrid.getCellProperty("Head", i,   "text");
                var col    = this.fvGrid.getCellProperty("Head", i,   "col");
                var body   = this.fvGrid.getCellProperty("Body", col, "text");


                var nrow = this.ds00.findRow("body", body);
                if( nrow != -1 )
                {
                    this.ds00.setColumn(nrow, "index",   col);
                    this.ds00.setColumn(nrow, "name",    title);
                }
            }

        	// 현재 선택된 셀을 선택하도록
        	// 현재 선택된 셀이 검색/바꾸기에 해당되지 않을 경우 INDEX=0으로 세팅
        	var nRow = this.ds00.findRow("index", this.fvGrid.currentcell);
        	if( nRow > -1 ){
        		this.cbo00.set_value(this.ds00.getColumn(nRow,"index"));
        	}else{
        		this.cbo00.set_index(0);
        	}

        	this.fvCellindex = this.cbo00.value;
        	this.fnSetBtnInfo();
        };

        /**
         * @description 찾기옵션세팅
        */
        this.fnGetFindOption = function()
        {
        	var option = {
        		'direction': this.rdo00.value,
        		'position': this.rdo01.value,
        		'scope': 'col',
        		'condition': this.rdo02.value,
        		'strict': this.chk00.value,
        		'cell': this.cbo00.value,
        	};

        	return option;
        };

        /**
         * @description 각 컬럼 타입별 바꾸기 가능/불가능 설정
        */
        this.fnCheckType = function (val)
        {
        	var arr = ["normal","text","calendarcontrol","date","editcontrol","number","text","textareacontrol"];
        	for( var i=0; i<arr.length; i++){
        		if ( arr[i] == val ){
        			return true;
        		}
        	}
        	return false;
        };

        /**
         * @description 바꾸기
        */
        this.replaceText = function (bAllChg)
        {
        	var findText = this.edt00.value;
        	if ( this.gfnIsNull(findText) )
        	{
        		return;
        	}

        	var grid = this.fvGrid;
        	var option = this.fnGetFindOption();
        	var replaceText = this.edt01.value;
        	if ( this.gfnIsNull(replaceText) )
        	{
        		replaceText = "";
        	}

        	var results = this.gfnReplaceGridText(grid, findText, replaceText, option, bAllChg);

        	var resultCnt = results.length;
        	if ( resultCnt > 0 )
        	{
        		var result;
        		var replaceCnt = 0;
        		for (var i=0; i<resultCnt; i++)
        		{
        			result = results[i];
        			if ( result.replace )
        			{
        				replaceCnt += 1;
        			}
        		}

        		// 모두 바꾸기
        		if ( bAllChg )
        		{
        			if ( resultCnt == replaceCnt )
        			{
        				// 마지막 변경된 셀로 이동
        				this.markGridFindResult(grid, grid._lastReplaceRow, option.cell);
        				this.setFocus();
        				this.gfnAlert("M0175");
        			}
        			else
        			{
        				var errorCnt = resultCnt - replaceCnt;
        				var message = resultCnt + "건 변경 중 " + errorCnt + "건 오류 발생";
        				this.alert(message);
        			}
        		}
        		else
        		{
        			if ( replaceCnt == 0 )
        			{
        				this.alert(results[0].message);
        				return;
        			}

        			// 다음 찾기 대상으로 이동
        			findRowCell = this.gfnFindGridText(grid, findText, option);
        			findRow = findRowCell[0];
        			findCell = findRowCell[1];
        			if ( findRow > -1 && findCell > -1 )
        			{
        				this.markGridFindResult(grid, findRow, findCell);
        			}
        			else
        			{
        				// 다음 대상이 없으면 마지막 찾은 셀로 이동
        				this.markGridFindResult(grid, grid.lastReplaceRow, option.cell);
        			}
        			this.setFocus();
        		}
        	}
        	else
        	{
        		this.gfnAlert("M0176");
        	}
        };

        /**
         * @description 바꾸기 결과
        */
        this.markGridFindResult = function(grid, findRow, findCell)
        {
        	var dataset = this.fvDs;
        	dataset.set_rowposition(findRow);
        	grid.setCellPos(findCell);
        };

        /**
         * @description 버튼세팅
        */
        this.fnSetBtnInfo = function ()
        {
        	var sDisplaytype = this.fvGrid.getCellProperty("body", this.fvCellindex, "displaytype");

        	if( !this.fnCheckType(sDisplaytype) ){
        		this.btn01.set_enable(false);
        		this.btn02.set_enable(false);
        	}else{
        		this.btn01.set_enable(true);
        		this.btn02.set_enable(true);
        	}
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description [닫기]버튼이벤트
        */
        this.btn03_onclick = function(obj,e)
        {
        	this.fvGrid.set_selecttype(this.fvSelectType);
        	this.close();
        };

        /**
         * @description [찾기]버튼이벤트
        */
        this.btn00_onclick = function(obj,e)
        {
        	var txt = this.edt00.value;
        	var option = this.fnGetFindOption();
        	var findRowCell = this.gfnFindGridText(this.fvGrid, txt, option);

        	var findRow = findRowCell[0];
        	var findCell = findRowCell[1];

        	if ( findRow > -1 && findCell > -1 )
        	{
        		this.fvDs.set_rowposition(findRow);
        		this.fvGrid.setCellPos(findCell);
        	}
        	else
        	{
        		this.gfnAlert("M0486");
        	}
        };

        /**
         * @description [대상컬럼콤보] 변경이벤트
        */
        this.cbo00_onitemchanged = function(obj,e)
        {
        	this.fvCellindex = e.postvalue;
        	this.fnSetBtnInfo();
        };

        /**
         * @description [바꾸기] 변경이벤트
        */
        this.btn01_onclick = function(obj,e)
        {
        	this.replaceText(false);
        };

        /**
         * @description [모두바꾸기] 변경이벤트
        */
        this.btn02_onclick = function(obj,e)
        {
        	this.replaceText(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cbo00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
        };

        this.loadIncludeScript("cmmFindReplace.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
