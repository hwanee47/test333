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
            this.set_name("cmmAddr");
            this.set_titletext("주소 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"LCL_ADDR_STATES\" size=\"256\" type=\"STRING\"/><Column id=\"LCL_ADDR_CUNTY\" size=\"256\" type=\"STRING\"/><Column id=\"LCL_ADDR1\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">cmmCode</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch ds2=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCodeStates=ds1 dsCodeCunty=ds2</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonCodeService.getAddrSido q2=commonCodeService.getAddrSIgun</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row><Row><Col id=\"SVC_ID\">searchList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=commonPopupService.getAddrList</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ZIP\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_ISLAND\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_COURIER_CD\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_CUNTY\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_CUNTY\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_MNT_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_STATES\" size=\"100\" type=\"STRING\"/><Column id=\"ZIP_TYPE\" size=\"100\" type=\"STRING\"/><Column id=\"ADD_ADDR_TXT\" size=\"100\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_RI\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_STAT_SUB_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_END_MAIN_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_END_SUB_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"FROM_LON\" size=\"100\" type=\"STRING\"/><Column id=\"ZIP_CD\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_DONG\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_ISLAND\" size=\"100\" type=\"STRING\"/><Column id=\"FROM_LAT\" size=\"100\" type=\"STRING\"/><Column id=\"TO_LAT\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_RI\" size=\"100\" type=\"STRING\"/><Column id=\"SITE_CD\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_CITY_CD\" size=\"100\" type=\"STRING\"/><Column id=\"STATE_PRV_CD\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_STATES\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR1\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_STAT_MAIN_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR2\" size=\"100\" type=\"STRING\"/><Column id=\"NATION_CD\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_DONG\" size=\"100\" type=\"STRING\"/><Column id=\"TO_LON\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_BUILDING_NM\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR2\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR1\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"ZIP\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_ISLAND\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_COURIER_CD\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_CUNTY\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_CUNTY\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_MNT_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_STATES\" size=\"100\" type=\"STRING\"/><Column id=\"ZIP_TYPE\" size=\"100\" type=\"STRING\"/><Column id=\"ADD_ADDR_TXT\" size=\"100\" type=\"STRING\"/><Column id=\"DEL_YN\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_RI\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_STAT_SUB_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_END_MAIN_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_END_SUB_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"FROM_LON\" size=\"100\" type=\"STRING\"/><Column id=\"ZIP_CD\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_DONG\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_ISLAND\" size=\"100\" type=\"STRING\"/><Column id=\"FROM_LAT\" size=\"100\" type=\"STRING\"/><Column id=\"TO_LAT\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_RI\" size=\"100\" type=\"STRING\"/><Column id=\"SITE_CD\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_CITY_CD\" size=\"100\" type=\"STRING\"/><Column id=\"STATE_PRV_CD\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR_STATES\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR1\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_STAT_MAIN_BUNJI\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR2\" size=\"100\" type=\"STRING\"/><Column id=\"NATION_CD\" size=\"100\" type=\"STRING\"/><Column id=\"GLBL_ADDR_DONG\" size=\"100\" type=\"STRING\"/><Column id=\"TO_LON\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_BUILDING_NM\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR2\" size=\"100\" type=\"STRING\"/><Column id=\"LCL_ADDR1\" size=\"100\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeStates", this);
            obj._setContents("<ColumnInfo><Column id=\"LCL_ADDR_STATES\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeCunty", this);
            obj._setContents("<ColumnInfo><Column id=\"LCL_ADDR_STATES\" size=\"256\" type=\"STRING\"/><Column id=\"LCL_ADDR_CUNTY\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","15","0","435","30",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T1310");
            obj.set_taborder("2");
            obj.set_text("주소 검색");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","2","34",null,null,"2","2",null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","15","89",null,null,"15","15",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("body");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell accessibilitydescription=\"T1261\" col=\"1\" text=\"시도, 주(Local)\"/><Cell accessibilitydescription=\"T1259\" col=\"2\" text=\"시군구, 도시(Local)\"/><Cell accessibilitydescription=\"T1287\" col=\"3\" text=\"읍면동(Local)\"/><Cell accessibilitydescription=\"T1201\" col=\"4\" text=\"리(Local)\"/><Cell accessibilitydescription=\"T0710\" col=\"5\" text=\"우편번호\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"right\"/><Cell col=\"1\" suppress=\"1\" text=\"bind:LCL_ADDR_STATES\" textAlign=\"left\" tooltiptext=\"bind:LCL_ADDR_STATES\"/><Cell col=\"2\" text=\"bind:LCL_ADDR_CUNTY\" tooltiptext=\"bind:LCL_ADDR_CUNTY\"/><Cell col=\"3\" text=\"bind:LCL_ADDR_DONG\" tooltiptext=\"bind:LCL_ADDR_DONG\"/><Cell col=\"4\" text=\"bind:LCL_ADDR_RI\" tooltiptext=\"bind:LCL_ADDR_RI\"/><Cell col=\"5\" text=\"bind:ZIP\" textAlign=\"center\" tooltiptext=\"bind:ZIP\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchArea","0","34",null,"40","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm","15","43","75","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1260");
            obj.set_taborder("6");
            obj.set_text("시도");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"44","60","21","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00","207","43","75","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1258");
            obj.set_taborder("7");
            obj.set_text("시군구");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAddr","462","44","140","20",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm01","413","43","75","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1312");
            obj.set_taborder("8");
            obj.set_text("주소지");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSido","53","44","140","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("LCL_ADDR_STATES");
            obj.set_datacolumn("LCL_ADDR_STATES");
            obj.set_displayrowcount("20");
            obj.set_innerdataset("dsCodeStates");
            obj.set_taborder("9");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSigun","258","44","140","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("LCL_ADDR_CUNTY");
            obj.set_datacolumn("LCL_ADDR_CUNTY");
            obj.set_displayrowcount("20");
            obj.set_innerdataset("dsCodeCunty");
            obj.set_taborder("10");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"7","22","22","10",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_enable("true");
            obj.set_fittocontents("none");
            obj.set_taborder("11");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",800,600,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboSido","value","dsSearch","LCL_ADDR_STATES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboSigun","value","dsSearch","LCL_ADDR_CUNTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtAddr","value","dsSearch","LCL_ADDR1");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("cmmAddr.xfdl","lib::lib_Form.xjs");
        this.registerScript("cmmAddr.xfdl", function() {
        /**
        *  공통 > 담당자정보
        *  @MenuPath		cmm > cmmAddr
        *  @FileName		cmmAddr.xfdl
        *  @Creator			itOh
        *  @CreateDate		2018.09.14
        *  @Desction		담당자정보를 조회한다.
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2018.08.21		intaekOh				최초 생성
        ************************************************************************************************
        */
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
         this.objApp;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.formOnload = function(obj,e)
        {

        };

        /***********************************************************************************************
         * @function	: forOninit
         * @description	: FORM init
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.EventInfo
         * @return N/A
        /***********************************************************************************************/
        this.formOninit = function(obj,e)
        {
        	// 코드 transaction
        	this.gfnTransaction("cmmCode");
        	//nexacro application
        	this.objApp = nexacro.getApplication();
        	// 운송가맹점 코드 && 명칭 param
        	this.dsSearch.setColumn(0,'LCL_ADDR1',this.getOwnerFrame().pNm);
        	this.edtAddr.setFocus();
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 차량정보 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {
        	if( this.gfnIsNull(this.edtAddr.value) ) {
        		this.gfnAlert("M0743");
        		this.edtAddr.setFocus();
        		return;
        	}
        	// 조회 transaction
        	this.gfnTransaction("searchList");
        };

        /***********************************************************************************************
         * @function	: fnCallback
         * @description	: 트랜젝션 후 호출 되는 callback 함수.
         * @param		: svcID - 서비스 id
         * @param		: errorCode - error 코드
         * @param		: errorMsg - error 메세지
         * @return N/A
        /***********************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0) {
        		this.alert(errorMsg);
        	}else{
        		if( svcID === 'searchList' ) {
        			if( this.dsList.rowcount === 1 ) {
        				this.fnReturnClose(0);
        			}
        		} else if( svcID === 'cmmCode' ) {
        			this.dsCodeStates.insertRow(0);
        			this.dsCodeStates.setColumn(0,'LCL_ADDR_STATES','전체');

        			this.dsCodeCunty.insertRow(0);
        			this.dsCodeCunty.setColumn(0,'LCL_ADDR_STATES','전체');
        			this.dsCodeCunty.setColumn(0,'LCL_ADDR_CUNTY' ,'전체');

        			this.cboSido.set_index(0);
        			this.cboSigun.set_index(0);
        			this.fnSigunFilter();
        			// 자동 재조회 여부가 Y면 조회.
        			if(this.getOwnerFrame().pAutosearchGb == "Y"){
        				this.fnSearch();
        			}
        		}
         	}
        };

        /***********************************************************************************************
         * @function	: btnOnClick
         * @description	: button onClick event
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.btnOnClick = function(obj,e) {

        	switch( obj.name ) {
        		case	'btnClose'	: this.close();
        			break;
        		case	'btnSearch'	: this.fnSearch();
        			break;
        		default	: break;
        	}
        };


        /***********************************************************************************************
         * @function	: gridCellDbClick
         * @description	: button onClick event
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.gridCellDbClick = function(obj,e)
        {
        	var row = e.row;
        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.fnReturnClose(row);
        	}
        };

        /***********************************************************************************************
         * @function	: cboSido_onitemchanged
         * @description	: combox onitemchanged event
         * @param		: obj	- nexacro.Combo
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cboSido_onitemchanged = function(obj,e)
        {
        	this.fnSigunFilter();
        };

        /***********************************************************************************************
         * @function	: editOnkeydown
         * @description	: edit onKeyDown
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.editOnkeydown = function(obj,e)
        {
        	if( e.keycode === 13 ) {
        		obj.updateToDataset();
        		this.btnSearch.click();
        	}
        };

        /***********************************************************************************************
         * @function	: edtCustNm_onkeydown
         * @description	: edit onKeyDown
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnReturnClose = function(row) {

        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.dsResult.clearData();
        		this.dsResult.copyRow(this.dsResult.addRow(), this.dsList, row);

        		var json = {
        			ds : this.dsResult.saveXML(),
        			callFn : this.getOwnerFrame().callbackFn
        		}

        		this.close(JSON.stringify(json));
        	}
        }


        /***********************************************************************************************
         * @function	: fnSigunFilter
         * @description	: 시군정보가 변경될때 filter
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSigunFilter = function() {
        	var sido = this.cboSido.value;
        	var filter = 'LCL_ADDR_STATES == "' + sido + '" || LCL_ADDR_STATES == "전체"';
        	this.dsCodeCunty.set_filterstr(filter);
        	this.cboSigun.set_index(0);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.formOninit,this);
            this.addEventHandler("onload",this.formOnload,this);
            this.grdList.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
            this.grdList.addEventHandler("onheadclick",this.gfnGridSort,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.edtAddr.addEventHandler("onkeydown",this.editOnkeydown,this);
            this.cboSido.addEventHandler("onitemchanged",this.cboSido_onitemchanged,this);
            this.btnClose.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("cmmAddr.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
