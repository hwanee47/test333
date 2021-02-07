(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmDebug");
            this.set_titletext("디버깅");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,703);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDataset", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" size=\"256\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGDS", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" size=\"256\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrid", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" size=\"256\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridDataset", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComponents", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"PATH\" size=\"256\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProperties", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" size=\"256\" type=\"STRING\"/><Column id=\"VALUE\" size=\"256\" type=\"STRING\"/><Column id=\"FUNCTION\" size=\"256\" type=\"STRING\"/><Column id=\"COLOR\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariableType", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"NAME\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">LOCAL</Col><Col id=\"NAME\">Local</Col></Row><Row><Col id=\"CODE\">GLOBAL</Col><Col id=\"NAME\">Global</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVariable", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"NAME\" size=\"256\" type=\"STRING\"/><Column id=\"VALUE\" size=\"256\" type=\"STRING\"/><Column id=\"TYPE\" size=\"256\" type=\"STRING\"/><Column id=\"LVL\" size=\"256\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0.74%","11",null,"20","85.37%",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Local");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDataset","4.35%","10",null,"20","68.8%",null,null,null,null,null,this);
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            obj.set_innerdataset("dsDataset");
            obj.set_taborder("1");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0.65%","37",null,"20","95.83%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Global");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGDS","4.26%","36",null,"20","68.80%",null,null,null,null,null,this);
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("PATH");
            obj.set_displayrowcount("25");
            obj.set_innerdataset("dsGDS");
            obj.set_taborder("3");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","67.41%","11",null,"20","25.74%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Grid");
            this.addChild(obj.name, obj);

            obj = new Combo("cboGrid","73.52%","10",null,"20","0.83%",null,null,null,null,null,this);
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("PATH");
            obj.set_displayrowcount("25");
            obj.set_innerdataset("dsGrid");
            obj.set_taborder("5");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Tab("tabComponent","6","59",null,null,"6","6",null,null,null,null,this);
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_tabindex("0");
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tabComponent);
            obj.set_text("Dataset");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdDataset","1","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage1.form);
            obj.set_binddataset("dsGridDataset");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("row");
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats/>");
            this.tabComponent.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tabComponent);
            obj.set_text("SaveXML");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSaveXML","1","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage2.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.tabComponent);
            obj.set_text("Dataset To Grid");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtSetGrid","1","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage3.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.tabComponent);
            obj.set_text("Grid Format");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtGridFormat","1","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage4.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("tabpage5",this.tabComponent);
            obj.set_text("Components");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdProperties","1","5",null,null,"719","5",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_autofittype("col");
            obj.set_binddataset("dsProperties");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"186\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Properties Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new TextArea("txtScript","355","5",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage5.form);
            obj.set_taborder("1");
            this.tabComponent.tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("tabpage6",this.tabComponent);
            obj.set_text("Variable");
            this.tabComponent.addChild(obj.name, obj);

            obj = new Grid("grdVariable","1","29",null,null,"1","5",null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_autofittype("col");
            obj.set_binddataset("dsVariable");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_selecttype("area");
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"340\"/><Column size=\"926\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"Variable Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Combo("cboVariable","85","6","136","20",null,null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsVariableType");
            obj.set_taborder("1");
            obj.set_text("Local");
            obj.set_value("LOCAL");
            obj.set_index("0");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","75","20",null,null,null,null,null,null,this.tabComponent.tabpage6.form);
            obj.set_text("Variable Type");
            obj.set_taborder("2");
            this.tabComponent.tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("tabpage7",this.tabComponent);
            obj.set_text("Run Script");
            this.tabComponent.addChild(obj.name, obj);

            obj = new TextArea("txtScript","1","5",null,null,"111","47",null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("0");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new Button("btnRunScript","959","5","108","40",null,null,null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_taborder("1");
            obj.set_text("Run Script");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new TextArea("txtResult","0.19%",null,null,"39","110","5",null,null,null,null,this.tabComponent.tabpage7.form);
            obj.set_readonly("true");
            obj.set_taborder("2");
            this.tabComponent.tabpage7.addChild(obj.name, obj);

            obj = new Static("Static03","67.41%","33",null,"20","25.74%",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Component");
            this.addChild(obj.name, obj);

            obj = new Combo("cboComponents","73.52%","33",null,"20","0.83%",null,null,null,null,null,this);
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("PATH");
            obj.set_displayrowcount("25");
            obj.set_innerdataset("dsComponents");
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("edtGlobal","37.04%","36",null,"20","33.52%",null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Edit("edtLocal","37.04%","10",null,"20","33.52%",null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Button("btnLocalFilter","339","10","59","20",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T2048");
            obj.set_taborder("12");
            obj.set_text("필터해제");
            this.addChild(obj.name, obj);

            obj = new Button("btnGlobalFilter","339","36","59","20",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T2048");
            obj.set_taborder("13");
            obj.set_text("필터해제");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreatSQL","1002","61","69","20",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1483");
            obj.set_taborder("14");
            obj.set_text("SQL 생성");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tabComponent.tabpage5.form.txtScript","value","dsProperties","FUNCTION");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("cmmDebug.xfdl","lib::cmmInclude.xjs");
        this.registerScript("cmmDebug.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName 		cmmDebug.xfdl
        *  @Creator 			kyk
        *  @CreateDate 	2017.10.17
        *  @Desction         디버그 지원
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.10.17     	kyk       	           최초 생성
        *******************************************************************************
        */

        /***********************************************************************************
        * include 선언부  													                                                                     *
        ***********************************************************************************/
        this.executeIncludeScript("lib::cmmInclude.xjs"); /*include "lib::cmmInclude.xjs"*/;

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvCurrentCombo = "cboDataset"; // 현재선택이 로컬데이터셋인지 / GDS인지의 구분처리

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// Form Load 시 공통 기능 처리
        	//this.gfnFormOnLoad(this); //초기화[필수]

            // 로컬 데이터셋을 가져온다.
        	this.fnSaveDatasetList(this.opener);
        	this.cboDataset.set_index(0);
        	this.fnMakeDatasetGrid();

        	// 글로벌 데이터셋을 가져온다.
        	this.fnSaveGDSList();
        	this.dsGDS.set_keystring("S:NAME");

            // 화면의 GRID의 목록을 가져온다.
        	this.fnSaveGridList(this.opener);
        	this.cboGrid.set_index(0);

            // 화면의 컴포넌트의 목록을 가져온다.
        	this.fnSaveComponetsList(this.opener);
        	this.cboComponents.set_index(0);

        	// 화면에서 사용되는 변수목록을 가져온다.
        	this.dsVariable.clearData();
        	this.fnSaveVariableList(this.opener);

        	// 글로벌 변수 목록을 가져온다.
        	this.fnSaveGlobalVariableList();
        	this.dsVariable.set_keystring("S:LVL+NAME");
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
         * @description 데이터셋의 목록을 찾아 저장한다.
        */
        this.fnSaveDatasetList = function(targetObj, fullpath)
        {
        	//trace("=============== targetObj.name : " + targetObj.name);
            var datasetlist = targetObj.objects;
            for(var i=0;i<datasetlist.length;i++)
            {
        		if( datasetlist[i]+"" == "[object Dataset]" )
        		{
                    var nRow = this.dsDataset.addRow();
                    this.dsDataset.setColumn(nRow, "NAME", datasetlist[i].id);

                    if( this.gfnIsNull(fullpath) )
                    {
                        this.dsDataset.setColumn(nRow, "PATH", datasetlist[i].id);
                    }
                    else
                    {
                        // div_work.form. 으로 나오는 걸 잘라낸다.
                        var displayname = nexacro.replaceAll(fullpath+"."+datasetlist[i].id, "div_work.form.", "");
                        this.dsDataset.setColumn(nRow, "NAME", displayname);
                        this.dsDataset.setColumn(nRow, "PATH", fullpath+"."+datasetlist[i].id);
                    }
                }
            }

            var objList = targetObj.components;
            var sObjType;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveDatasetList(objList[i].form, objList[i].id+".form");
                    else
                        this.fnSaveDatasetList(objList[i].form, fullpath+".form."+objList[i].id);
                }
                // TabPage
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].form.components;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveDatasetList(tabPageList[j].form, objList[i].id+".form."+tabPageList[j].id);
                        else
                            this.fnSaveDatasetList(tabPageList[j].form, fullpath+".form."+objList[i].id+"."+tabPageList[j].id);
                    }
                }
            }
        };

        /**
         * @description 화면의 그리드목록을 저장한다.
        */
        this.fnSaveGridList = function(targetObj, fullpath)
        {
            var sObjType;

            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

        		if( objList[i]+"" == "[object Grid]" )
        		{
                    var nRow = this.dsGrid.addRow();
                    this.dsGrid.setColumn(nRow, "NAME",   objList[i].name);

                    if( this.gfnIsNull(fullpath) )
                        this.dsGrid.setColumn(nRow, "PATH", objList[i].name);
                    else
                        this.dsGrid.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
                }

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveGridList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveGridList(objList[i].form, fullpath+".form."+objList[i].name);
                }
                // TabPage
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].components;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveGridList(tabPageList[j].form, objList[i].name+".form."+tabPageList[j].name);
                        else
                            this.fnSaveGridList(tabPageList[j].form, fullpath+"."+objList[i].name+".form."+tabPageList[j].name);
                    }
                }
            }
        };

        /**
         * @description 화면의 모든 Object를 저장한다.
        */
        this.fnSaveComponetsList = function(targetObj, fullpath)
        {
        	//trace("=============== fnSaveComponetsList targetObj.name : " + targetObj.name);
            var sObjType;
            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveComponetsList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveComponetsList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // TabPage
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].components;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveComponetsList(tabPageList[j].form, objList[i].name+".form."+tabPageList[j].name);
                        else
                            this.fnSaveComponetsList(tabPageList[j].form, fullpath+"."+objList[i].name+".form."+tabPageList[j].name);
                    }
                }
                else
                {
                    var nRow = this.dsComponents.addRow();
                    this.dsComponents.setColumn(nRow, "NAME",   objList[i].name);

                    if( this.gfnIsNull(fullpath) )
                        this.dsComponents.setColumn(nRow, "PATH", objList[i].name);
                    else
                        this.dsComponents.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
                }
            }
        };

        /**
         * @description 글로벌 데이터셋 목록을 만든다.
        */
        this.fnSaveGDSList = function()
        {
        	var objApp = nexacro.getApplication();
            var applicationobj = objApp.all;
            for(var i=0;i<applicationobj.length;i++)
            {
        		if( applicationobj[i]+"" == "[object Dataset]" )
        		{
        		    try
        		    {
                        if( applicationobj[i].id.indexOf(".") == -1 )
                        {
                            var nRow = this.dsGDS.addRow();
                            this.dsGDS.setColumn(nRow, "NAME", applicationobj[i].id);
                            this.dsGDS.setColumn(nRow, "PATH", applicationobj[i].id);
                        }
                    }
                    catch(e)
                    {
        				trace(">>>> e Message" + e);
                    }
        		}
            }
        };

        /**
         * @description Dataset을 GRID에 표시한다.
        */
        this.fnMakeDatasetGrid = function()
        {
            var dataset;

            if( this.fvCurrentCombo == "cboDataset" )
            {
                if( this.cboDataset.index == -1 ) return;

                dataset = eval("this.opener."+this.cboDataset.value);
            }
            else
            {
                if( this.cboGDS.index == -1 ) return;

        		var objApp = nexacro.getApplication() ;
                dataset = objApp[this.cboGDS.text];
            }

            // 데이터셋의 정보가 존재하지 않으면
            if( dataset.getColCount() < 1 )
            {
                var formats = "";
                formats += '<Formats>\n';
                formats += '<Format id="default">\n';
                formats += '<Columns></Columns>\n';
                formats += '<Rows><Row size="24" band="head" /><Row size="24" /></Rows>\n';
                formats += '<Band id="head"></Band>\n';
                formats += '<Band id="body"></Band>\n';
                formats += '</Format>\n';
                formats += '</Formats>';

                this.tabComponent.tabpage1.form.Grid00.set_formats(formats);
                return;
            }

            var columns = '    <Column size="30" />\n';
            var head    = '    <Cell col="0" text=""/>\n';
            //var body    = '    <Cell col="0" displaytype="image" text="expr:(dataset.getRowType(currow)==2)?\'theme://images/sta_n.png\':(dataset.getRowType(currow)==4)?\'theme://images/sta_u.png\':(dataset.getRowType(currow)==8)?\'theme://images/sta_d.png\':\'default\'"/>\n';
        	var body    = '    <Cell col="0" displaytype="normal" text="expr:(dataset.getRowType(currow)==2)?\'I\':(dataset.getRowType(currow)==4)?\'M\':(dataset.getRowType(currow)==8)?\'\':\'\'"/>\n';

            for(var i=0;i<dataset.getColCount();i++)
            {
                var columinfo = dataset.getColumnInfo(i);
                var columname = "";
                var columsize = "";
                var columtype = "";

                try
                {
                     columname = columinfo.name;
                     columsize = parseInt(columinfo.size);
                     columtype = columinfo.type.toUpperCase();
                }
                catch(e)
                {
                     columname = "undefined";
                     columsize = 50;
                     columtype = "STRING";
                }

                //Sonar Qube Unused local variables should be removed 조치 JBC 2016-09-20
                //var columwidth= 100;
                var align     = "";

                if( columtype == "STRING" )
                {
                    columsize = columsize*9;

                    if( columsize < columname.length*9 )
                    {
                        columsize = columname.length*9;
                    }

                    if( columsize > 200 )
                        columns += '    <Column size="200" />\n';
                    else
                        columns += '    <Column size="'+columsize+'" />\n';

                    align = 'style="align:left;"';
                }
                else if( columtype == "INT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if( columtype == "FLOAT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if( columtype == "DATE" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "TIME" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "DATETIME" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "BIGDECIMAL" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:right;"';
                }
                else
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:left;"';
                }

                head += '    <Cell col="'+(i+1)+'" text="'+columname+'"/>\n';
                body += '    <Cell col="'+(i+1)+'" '+align+' text="bind:'+columname+'" displaytype="normal" edittype="normal"/>\n';
            }

            var formats = "";
            formats += '<Formats>\n';
            formats += '<Format id="default">\n';
            formats += '<Columns>\n'+columns.substring(0,columns.length-1)+'\n</Columns>\n';
            formats += '<Rows>\n    <Row size="24" band="head" />\n    <Row size="24" />\n</Rows>\n';
            formats += '<Band id="head">\n'+head.substring(0,head.length-1)+'\n</Band>\n';
            formats += '<Band id="body">\n'+body.substring(0,body.length-1)+'\n</Band>\n';
            formats += '</Format>\n';
            formats += '</Formats>';

            this.tabComponent.tabpage1.form.grdDataset.set_binddataset(dataset);
            this.tabComponent.tabpage1.form.grdDataset.set_formats(formats);
        };

        /**
         * @description 데이터셋의 내용을 XML로 표시한다.
        */
        this.fnMakeDatasetXml = function()
        {
            var dataset;

            if( this.fvCurrentCombo == "cboDataset" )
            {
                if( this.cboDataset.index == -1 ) return;

                dataset = eval("this.opener."+this.cboDataset.value);
            }
            else
            {
                if( this.cboGDS.index == -1 ) return;

        		var objApp = nexacro.getApplication() ;
                dataset = objApp[this.cboGDS.text];
            }

            var text = nexacro.replaceAll(dataset.saveXML(), '<Dataset id="'+dataset.id+'">', '');
            text = nexacro.replaceAll(text, '</Dataset>', '');
            this.tabComponent.tabpage2.form.txtSaveXML.set_value(text);
        };

        /**
         * @description 데이터셋을 GRID로 자동생성해준다
        */
        this.fnMakeDatasetGridFormat = function()
        {
            this.tabComponent.tabpage3.form.txtSetGrid.set_value(this.tabComponent.tabpage1.form.grdDataset.formats);
        };

        /**
         * @description 화면의 그리드의 포맷을 가져온다.
        */
        this.fnMakeGridFormats = function()
        {
            if( this.cboGrid.index == -1 ) return;

            var targetgrid = eval("this.opener."+this.cboGrid.text);

            var formats = nexacro.replaceAll(targetgrid.formats, "><", ">\n<");
            formats = nexacro.replaceAll(formats, "<Column ", "    <Column ");
            formats = nexacro.replaceAll(formats, "<Cell ", "    <Cell ");
            formats = nexacro.replaceAll(formats, "<Row ", "    <Row ");

            // 리사이징한 그리드의 현재 컬럼 사이즈를 계산한다.
            var newcolumn = "";
            for(var i=0;i<targetgrid.getCellCount("Body");i++)
            {
                newcolumn += '    <Column size="'+targetgrid.getRealColSize(i, true)+'"/>\n';
            }
            formats = formats.split("<Columns>")[0]+"<Columns>\n"+newcolumn +"</Columns>"+formats.split("</Columns>")[1];

            this.tabComponent.tabpage4.form.txtGridFormat.set_value(formats);
            this.tabComponent.set_tabindex(3);
        };

        /**
         * @description 컴포넌트의 모든속성을 디스플레이한다
        */
        this.fnMakeCompoentsData = function()
        {
            if( this.cboComponents.index == -1 ) return;

            var targetobj = eval("this.opener."+this.cboComponents.text);

            this.dsProperties.clearData();
            this.dsProperties.set_enableevent(false);
            for(var name in targetobj)
            {
                var value = targetobj[name]+"";

                if( name[0] == "_" ) continue;
                if( value == "[object Object]" ) continue;
                if( value.substring(0, 8) == "function" ) continue;
                if( value.substring(0, 7) == "control" ) continue;

                if( this.gfnIsNull(value) )
                {
                    var nrow = this.dsProperties.addRow();
                    this.dsProperties.setColumn(nrow, "NAME", name);
                    this.dsProperties.setColumn(nrow, "VALUE", "");
                }
                else
                {
                    // 이벤트에 대한 처리
                    if( value.indexOf("[object") != -1 )
                    {
                        if( value.indexOf("EventListener") != -1 )
                        {
                            var eventhandler = targetobj.getEventHandler(name, 0);

                            if( !this.gfnIsNull(eventhandler) )
                            {
                                var nrow = this.dsProperties.addRow();
                                this.dsProperties.setColumn(nrow, "NAME",    name);
                                this.dsProperties.setColumn(nrow, "VALUE",   "function");
                                this.dsProperties.setColumn(nrow, "FUNCTION", eventhandler);
                                this.dsProperties.setColumn(nrow, "COLOR",    "red");
                            }
                        }
                    }
                    else
                    {
                        var nrow = this.dsProperties.addRow();
                        this.dsProperties.setColumn(nrow, "NAME",    name);
                        this.dsProperties.setColumn(nrow, "VALUE", value);
                    }
                }
            }
            this.dsProperties.set_enableevent(true);
            this.dsProperties.set_rowposition(0);
        };

        /**
         * @description 화면에서 사용되는 모든 변수를 찾아 데이터셋에 저장한다.
        */
        this.fnSaveVariableList = function(targetObj, fullpath)
        {
        	//trace("================ fnSaveVariableList targetObj : " + targetObj.name);

        	sObjType = targetObj +"";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.dsVariable.set_enableevent(false);
            for(var name in targetObj)
            {
                // 변수를 찾는방법을 x_ 또는 xx_ 로 해서 처리한다.
                if( name[1] == "_" || name[2] == "_" )
                {
                    // 제외처리대상변수명
                    var value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( !targetObj.hasOwnProperty(name)) continue;

                    // 글로벌변수
                    if( name[0].toUpperCase() == "G" )
                    {
                        // 글로벌 변수는 하나만이 존재하기 때문에..
                        if( this.dsVariable.findRow("NAME", name) == -1 )
                        {
                            var nrow = this.dsVariable.addRow();
                            this.dsVariable.setColumn(nrow, "NAME",  name);
                            this.dsVariable.setColumn(nrow, "VALUE", value);
                            this.dsVariable.setColumn(nrow, "TYPE",  "GLOBAL");
                            this.dsVariable.setColumn(nrow, "LVL",   0);
                        }
                    }
                    // 로컬변수
                    else
                    {
                        if( !this.gfnIsNull(fullpath) )
                        {
                            name = fullpath+"."+name;
                        }

                        if( this.dsVariable.findRow("NAME", name) == -1 )
                        {
                            var nrow = this.dsVariable.addRow();
                            this.dsVariable.setColumn(nrow, "NAME",  name);
                            this.dsVariable.setColumn(nrow, "VALUE", value);
                            this.dsVariable.setColumn(nrow, "TYPE",  "LOCAL");
                            this.dsVariable.setColumn(nrow, "LVL",   name.split(".").length);
                        }
                    }
                }
            }
        	this.dsVariable.set_enableevent(true);

            // 해당 폼의 하위 OBJECT에 대한 변수도 같이 찾아온다.
            var sObjType;
            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfnIsNull(fullpath) )
                        this.fnSaveVariableList(objList[i].form, objList[i].name+".form");
                    else
                        this.fnSaveVariableList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // TabPage
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].components;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfnIsNull(fullpath) )
                            this.fnSaveVariableList(tabPageList[j].form, objList[i].name+".form."+tabPageList[j].name);
                        else
                            this.fnSaveVariableList(tabPageList[j].form, fullpath+"."+objList[i].name+".form."+tabPageList[j].name);
                    }
                }
            }
        };

        /**
         * @description 글로벌 변수를 찾아 데이터셋에 저장한다.
        */
        this.fnSaveGlobalVariableList = function()
        {
        	var targetObj = nexacro.getApplication();

        	sObjType = targetObj +"";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.dsVariable.set_enableevent(false);
            for(var name in targetObj)
            {
                // 글로벌 변수는 gv로 Naming Rule 정의
                if( name.substr(0,2) == "gv")
                {
                    // 제외처리대상변수명
                    var value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( !targetObj.hasOwnProperty(name)) continue;

        			// 글로벌 변수는 하나만이 존재하기 때문에..
        			if( this.dsVariable.findRow("NAME", name) == -1 )
        			{
        				var nrow = this.dsVariable.addRow();
        				this.dsVariable.setColumn(nrow, "NAME",  name);
        				this.dsVariable.setColumn(nrow, "VALUE", value);
        				this.dsVariable.setColumn(nrow, "TYPE",  "GLOBAL");
        				this.dsVariable.setColumn(nrow, "LVL",   0);
        			}
                }
            }
        	this.dsVariable.set_enableevent(true);
        };

        /**
         * @description 화면에서 사용되는 모든 변수를 보여준다.
        */
        this.fnMakeVariableList = function()
        {
            this.dsVariable.filter("TYPE == '"+this.tabComponent.tabpage6.form.cboVariable.value+"'");
            this.dsVariable.set_rowposition(0);
        };

        /**
         * @description 문장을 스크립트로 실행한다.
        */
        this.fnExecScript = function(obj,  e)
        {
            try
            {
        	    var result = eval(this.tabComponent.tabpage7.form.txtScript.text);

        	    if( this.gfnIsNull(result) ) result = "";

        	    this.tabComponent.tabpage7.form.txtResult.set_value("★★★ 성공 : "+result);
        	}
        	catch(ex)
        	{
        	    this.tabComponent.tabpage7.form.txtResult.set_value("＠＠＠ 실패 : "+ex);
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 선택한 TAB에 대한 처리를 한다.
        */
        this.tabComponent_onchanged = function(obj, e)
        {
        	var tabindex = this.tabComponent.tabindex;

        	switch(tabindex)
        	{
        	    case 0: this.fnMakeDatasetGrid();           break;
        	    case 1: this.fnMakeDatasetXml();            break;
        	    case 2: this.fnMakeDatasetGridFormat(); break;
        	    case 3: this.fnMakeGridFormats();           break;
        	    case 4: this.fnMakeCompoentsData();     break;
        	    case 5: this.fnMakeVariableList();           break;
        	    default : break;
        	}
        };

        /**
         * @description 로컬 데이터셋의 내용을 보여준다.
        */
        this.cboDataset_onitemchanged = function(obj, e)
        {
            this.fvCurrentCombo = obj.name;
            this.edtLocal.set_value(obj.text);
        	this.edtGlobal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        /**
         * @description 글로벌 데이터셋의 내용을 보여준다.
        */
        this.cboGDS_onitemchanged = function(obj, e)
        {
            this.fvCurrentCombo = obj.name;
            this.edtGlobal.set_value(obj.value);
        	this.edtLocal.set_value("");
            this.tabComponent.set_tabindex(0);
            this.tabComponent_onchanged();
        };

        /**
         * @description 컴포넌트의 모든 속성을 디스플레이한다.
        */
        this.cboComponents_onitemchanged = function(obj, e)
        {
            this.tabComponent.set_tabindex(4);
            this.tabComponent_onchanged();
        };

        /**
         * @description 변수의 형식을 선택한 타입으로 필터링한다.
        */
        this.tabComponent_tabpage6_cboVariable_onitemchanged = function(obj, e)
        {
            this.dsVariable.filter("TYPE == '"+this.tabComponent.tabpage6.form.cboVariable.value+"'");
            this.dsVariable.set_rowposition(0);
        };

        /**
         * @description 로컬 데이터셋 바로 찾기 기능
        */
        this.edtLocal_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    var nrow = this.dsDataset.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {

        	        fvCurrentCombo = "local";
                    this.cboDataset.set_index(nrow);
                    this.fnMakeDatasetGrid();
                    this.cboDataset_onitemchanged(this.cboDataset);
                }
        	}
        };

        /**
         * @description 글로벌 데이터셋 바로 찾기 기능
        */
        this.edtGlobal_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    var nrow = this.dsGDS.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {
        	        fvCurrentCombo = "global";
                    this.cboGDS.set_index(nrow);
                    this.cboGDS_onitemchanged(this.cboGDS);
                    //this.fnMakeDatasetGrid();
        	    }
        	}
        };

        /**
         * @description  DATASET 으로 INSERT SQL 만들기
         */
        this.btnCreatSQL_onclick = function(obj,  e)
        {
            var insertsql = "";
        	var dataset = this.tabComponent.tabpage1.form.Grid00.getBindDataset();
            for(var i=0;i<dataset.getRowCount();i++)
            {

                var columlist = "";
                var valuelist = "";
                for(var j=0;j<dataset.getColCount();j++)
                {
                    var columname  = dataset.getColID(j);
                    var columvalue = this.gfnNvl(dataset.getColumn(i, columname),"NULL");

                    if( columvalue != "NULL" ) columvalue = "'"+columvalue+"'";

                    if( j == 0 )
                    {
                        columlist = columname;
                        valuelist = columvalue;
                    }
                    else
                    {
                        columlist += ", "+columname;
                        valuelist += ", "+columvalue;
                    }
                }

                insertsql += "INSERT INTO "+dataset.id+" ("+columlist+") VALUES ("+valuelist+");\n";
            }

        	trace( insertsql );
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", insertsql);
        };

        /**
         * @description 컴포넌트의 textvalue 값을 클립보드에 복사한다.
        */
        this.combo_onkeydown = function(obj,e)
        {
        	trace( obj.text );
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", obj.text);
        };

        /**
         * @description 로컬 데이터셋 필터 초기화
        */
        this.btnLocalFilter_onclick = function(obj,e)
        {
            var dataset = eval("this.opener."+this.cboDataset.value);
            dataset.filter("");
        };
        /**
         * @description 글로벌 데이타셋 필터 초기화
        */
        this.btnGlobalFilter_onclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication() ;
        	var dataset = objApp[this.cboGDS.text];
            dataset.filter("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboDataset.addEventHandler("onitemchanged",this.cboDataset_onitemchanged,this);
            this.cboDataset.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboGDS.addEventHandler("onitemchanged",this.cboGDS_onitemchanged,this);
            this.cboGDS.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.cboGrid.addEventHandler("onitemchanged",this.fnMakeGridFormats,this);
            this.cboGrid.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.tabComponent.addEventHandler("onchanged",this.tabComponent_onchanged,this);
            this.tabComponent.tabpage6.form.cboVariable.addEventHandler("onitemchanged",this.tabComponent_tabpage6_cboVariable_onitemchanged,this);
            this.tabComponent.tabpage7.form.btnRunScript.addEventHandler("onclick",this.fnExecScript,this);
            this.cboComponents.addEventHandler("onitemchanged",this.cboComponents_onitemchanged,this);
            this.cboComponents.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.edtGlobal.addEventHandler("onkeydown",this.edt_global_onkeydown,this);
            this.edtLocal.addEventHandler("onkeydown",this.edt_local_onkeydown,this);
            this.btnLocalFilter.addEventHandler("onclick",this.btnLocalFilter_onclick,this);
            this.btnGlobalFilter.addEventHandler("onclick",this.btnGlobalFilter_onclick,this);
            this.btnCreatSQL.addEventHandler("onclick",this.btnCreatSQL_onclick,this);
        };

        this.loadIncludeScript("cmmDebug.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
