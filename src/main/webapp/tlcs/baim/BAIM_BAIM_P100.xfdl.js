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
            this.set_name("BAIM_BAIM_P100");
            this.set_titletext("주소 검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(910,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SIDO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SKK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">getAddrInfoList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getAddrInfoList</Col></Row><Row><Col id=\"SVC_ID\">getSidoList</Col><Col id=\"OUT_DATASET_LIST\">dsSido=dsList</Col><Col id=\"QUERY_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\"/><Col id=\"SERVICE_METHOD\">getSidoList</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col></Row><Row><Col id=\"SVC_ID\">getSkkList</Col><Col id=\"OUT_DATASET_LIST\">dsSkk=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getSkkList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col></Row><Row><Col id=\"SVC_ID\">getEmdongList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsEmdong=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getEmdongList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ROAD_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"JIBUN_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ADD_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZipAddrDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">지번</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">도로명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"ADDR\" size=\"256\" type=\"STRING\"/><Column id=\"ZIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"ADD_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSido", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSkk", this);
            obj._setContents("<ColumnInfo><Column id=\"SIDO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SKK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmdong", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","15","0","435","30",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T1310");
            obj.set_taborder("4");
            obj.set_text("주소 검색");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","2","34",null,null,"2","2",null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","15","120",null,null,"15","20",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_autosizebandtype("body");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("6");
            obj.set_suppresslevel("allcompare");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"23\"/><Column size=\"100\"/><Column size=\"340\"/><Column size=\"340\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0710\" text=\"우편번호\"/><Cell col=\"2\" accessibilitydescription=\"T1261\" text=\"도로명\"/><Cell col=\"3\" accessibilitydescription=\"T1261\" text=\"지번\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"right\"/><Cell col=\"1\" textAlign=\"center\" text=\"bind:ZIP_NO\"/><Cell col=\"2\" suppress=\"1\" textAlign=\"left\" text=\"bind:ROAD_ADDR\"/><Cell col=\"3\" suppress=\"1\" textAlign=\"left\" text=\"bind:JIBUN_ADDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staSearchArea","0","34",null,"74","0",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm","35","43","75","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1260");
            obj.set_taborder("8");
            obj.set_text("시도");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"73","68","23","86",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm00","243","43","75","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1258");
            obj.set_taborder("9");
            obj.set_text("시군구");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"7","22","22","10",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_enable("true");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staUserNm01_01","14","73","75","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1312");
            obj.set_taborder("11");
            obj.set_text("상세주소");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","74","74","396","22",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSkk","294","44","113","20",null,null,null,null,null,null,this);
            obj.set_displayrowcount("20");
            obj.set_taborder("1");
            obj.set_innerdataset("dsSkk");
            obj.set_codecolumn("SKK_NM");
            obj.set_datacolumn("SKK_NM");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSido","73","44","128","20",null,null,null,null,null,null,this);
            obj.set_codecolumn("SIDO_NM");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("SIDO_NM");
            obj.set_displayrowcount("20");
            obj.set_innerdataset("gdsSido");
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnChoice",null,"73","67","23","14",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("12");
            obj.set_text("선택");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",910,600,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboSido","value","dsSearch","SIDO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboSkk","value","dsSearch","SKK_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtDetailAddr","value","dsSearch","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_P100.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_P100.xfdl", function() {
        /**
        *  우편번호 주소 조회
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_P100.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.02.12
        *  @Desction        우편번호 주소 조회
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.12		Kim Jin Hwan			최초 생성
        *  2020.08.20       Kim Jae Cheon           수정 - 도로명/지번 구분하여 선택된 주소정보 반환
        ************************************************************************************************
        */
        /************************************************************************************************
        * include 선언부																				*
         ************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp;


         /***********************************************************************************************
         * @function: form_onload
         * @description: FORM 온로드
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//nexacro application
        	this.objApp = nexacro.getApplication() ;

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);

        	// 초기화
        	this.fnInit();


        	// 우편번호, 주소지 둘중 하나라도 있으면 조회처리.
        	var edtDetailAddrValue = this.edtDetailAddr.value;

        	if( !this.gfnIsNull(edtDetailAddrValue) ){
        		this.fnSearch();
        	}
        };
         /***********************************************************************************************
         * @function	: form_onload
         * @description	: FORM init
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.EventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnInit = function(obj,e)
        {
        	// 공통코드조회
        	//this.gfnTransaction("commonCode");


        // 	this.fnAddCodeDef(this.dsSido, "전체");
         	this.cboSido.set_index(0);
        //
        // 	this.fnAddCodeDef(this.dsSkk, "전체");
        // 	this.cboSkk.set_index(0);


        	this.fnChangeBjdongComp(this.cboSido);




        	// 주소지 포커스
        	this.edtDetailAddr.setFocus();


        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "ZIP_NO", this.getOwnerFrame().pZipNo);
        	this.dsSearch.setColumn(0, "DETAIL_ADDR", this.getOwnerFrame().pAddr);
        	this.dsSearch.setColumn(0, "ZIP_ADDR_DV", this.gfnIsNull(this.getOwnerFrame().pZipAddrDv)?"01":this.getOwnerFrame().pZipAddrDv);
        };
        /***********************************************************************************************
         * @function	: btnOnClick
         * @description	: 버튼이벤트 제어
         * @param		: obj - nexacro.Button
         * @param		: e - nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.btnOnClick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		// 조회
        		case "btnSearch" :
        			this.fnSearch();
        		break;


        		// 초기화
        		case "btnReset" :
        			this.fnInit();
        		break;

        		// 선택
        		case "btnChoice" :
        			this.fnChoise();
        		break;

        		default :
        		break;
        	}
        };
        this.fnChoise = function()
        {
        	var row = this.dsList.rowposition;
        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.fnReturnClose(row, "ROAD_ADDR");
        	}
        }
        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 우편번호 주소 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {
        	var cboSidoValue = this.cboSido.value;		//시도
        	var cboSkkValue = this.cboSkk.value;		//시군구
        	var edtDetailAddrValue = this.edtDetailAddr.value;	//주소지


        	/*var mskZipNoValue = this.mskZipNo.value;	//우편번호
        	var cboEmdongValue = this.cboEmdong.value;	//읍면동
        	var cboZipAddrDvValue = this.cboZipAddrDv.value;	//주소구분
        	*/
        	// 조회조건 필수입력 체크
        	/*
        	if(this.gfnIsNull(cboEmdongValue)){
        		this.gfnAlert("조회조건의 읍면동을 입력해주세요.");
        		this.cboEmdong.setFocus();
        		return;
        	}*/

        	if(this.gfnIsNull(cboSidoValue)){
        		this.gfnAlert("조회조건의 시도를 선택해주세요.");
        		this.cboSido.dropdown();
        		return;
        	}
        	if(this.gfnIsNull(cboSkkValue)){
        		this.gfnAlert("조회조건의 시군구를 선택해주세요.");
        		this.cboSkk.dropdown();
        		return;
        	}

        	/*if(this.gfnIsNull(mskZipNoValue)){
        		this.gfnAlert("조회조건의 주소지를 입력해주세요.");
        		this.edtDetailAddr.setFocus();
        		return;
        	}*/

        	this.gfnTransaction("getAddrInfoList");
        };
        /***********************************************************************************************
         * @function: fnCallback
         * @description: 트랜젝션 후 호출 되는 callback 함수.
         * @param : svcID - 서비스 id
         * @param : errorCode - error 코드
         * @param : errorMsg - error 메세지
         * @return N/A
        /***********************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

        	if(errorCode < 0) {
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 컴포넌트 초기화
        			this.fnCompInit();
        		break;

        		// 시도 리스트 조회
        		case "getSidoList" :
        			// 시도
        			this.fnAddCodeDef(this.dsSido, "전체");
        			this.cboSido.set_index(0);

        		break;


        		// 시군구 리스트 조회
        		case "getSkkList" :

        			// 시도
        			this.fnAddCodeDef(this.dsSkk, "전체");
        			this.cboSkk.set_index(0);

        		break;


        		// 읍면동 리스트 조회
        		case "getEmdongList" :

        			// 시도
        			this.fnAddCodeDef(this.dsEmdong, "전체");
        			this.cboEmdong.set_index(0);

        		break;


        		// 조회
        		case "getZipAddrInfoList" :
        			this.grdList.setFocus();

        		break;


        		default :
        		break;
        	}
        };
        /***********************************************************************************************
         * @function	: fnPopupCallBack
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: dsObj		- nexacro.NormalDataset
         * @return N/A
         ***********************************************************************************************/
        this.fnPopupCallback = function(sPopupId, rtnObj)
        {
        	trace("[fnPopupCallback()] sPopupId["+sPopupId+"] rtnMsg["+JSON.stringify(rtnObj)+"]");
        	switch(sPopupId) {
        		case "recommandedPopup" :
        			if(rtnObj.result == true) {
        				this.fnSearch();
        			}
        		break;

        		case "vhclSearchPopup" :
        			if(!this.gfnIsEmpty(rtnMsg.result)) {
        				this.fnSearch();
        			}
        		break;

        		default :
        		break;
        	}
        };
        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/
        /***********************************************************************************************
         * @function: fnCompInit
         * @description: 컴포넌트 초기화 함수.
         * @param  N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCompInit = function()
        {

        }
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
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
        	var columnId = this.getBindColumnIDByIndex(obj, e.cell);

        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.fnReturnClose(row, columnId);
        	}
        };
        /***********************************************************************************************
         * @function	: fnReturnClose
         * @description	:
         * @param		: row	- Number
         * @return N/A
        /***********************************************************************************************/
        this.fnReturnClose = function(row, colId) {
        	if( row !== -1 ) {
        		// return dataSet 초기화
        		this.dsResult.clearData();
        		//this.dsResult.copyRow(this.dsResult.addRow(), this.dsList, row);
        		this.dsResult.addRow();

        		if(colId == "ROAD_ADDR"){
        			this.dsResult.setColumn(0, "ZIP_NO", this.dsList.getColumn(row, "ZIP_NO"));
        			this.dsResult.setColumn(0, "ADDR", this.dsList.getColumn(row, "ADDR"));
        			this.dsResult.setColumn(0, "ADD_INFO", this.dsList.getColumn(row, "ADD_INFO"));
        		}
        		else if(colId == "JIBUN_ADDR"){
        			this.dsResult.setColumn(0, "ZIP_NO", this.dsList.getColumn(row, "ZIP_NO"));
        			this.dsResult.setColumn(0, "ADDR", this.dsList.getColumn(row, "JIBUN_ADDR"));
        			this.dsResult.setColumn(0, "ADD_INFO", this.dsList.getColumn(row, ""));
        		}
        		else{
        			// 지번 또는 도로명주소 선택 alert
        			this.gfnAlert("도로명 또는 지번 주소를 선택해 주세요.","", function(){ this.dsList.setFocus();});
        			return;
        		}

        		var json = {
        			ds : this.dsResult.saveXML(),
        			callFn : this.getOwnerFrame().callbackFn
        		}

        		this.close(JSON.stringify(json));
        	}
        }
        /***********************************************************************************************
         * @function	: fnAfterCodeDef
         * @description	: 코드조회후 선택,전체 추가
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCodeDef = function(dsObj, strText) {
        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM', strText);
        }
        this.fnEditOnKeyDown = function(obj,e)
        {
        	if( e.keycode === 13 ) {
        		obj.updateToDataset();
        		this.fnSearch();
        	}
        };
         /***********************************************************************************************
         * @function		: fnChangeBjdongComp
         * @description		: 법정동 컴포넌트 변경시 발생 이벤트
         * @param			: obj 	- Combo object
         * @param			: e 	- Combo event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnChangeBjdongComp = function(obj,e)
        {
        	obj.updateToDataset();

        	// 시도
        	if(obj.name == "cboSido"){

        		this.dsSkk.clearData();
        		this.dsEmdong.clearData();

        		// 시도를 "전체"로 시군구 조회 X.
        		if( this.gfnIsNull(this.cboSido.value) ){
        			return;
        		}

        		this.objApp.gdsSkk.filter("SIDO_NM == '"+this.cboSido.value+"'");
        		this.dsSkk.copyData(this.objApp.gdsSkk, true);
        		//this.fnAddCodeDef(this.dsSkk, "전체");

         		this.dsSkk.insertRow();
         		this.dsSkk.setColumn(0,'SIDO_NM','');
         		this.dsSkk.setColumn(0,'SKK_NM', "전체");

        		this.cboSkk.set_index(0);
        	}


        };
        /***********************************************************************************************
         * @function		: getBindColumnIDByIndex
         * @description		: 선택된 그리드 컬럼명 반환
         * @param			: grid 	- grid object
         * @param			: index	- column index
         * @return 			: columnid
        ***********************************************************************************************/
        this.getBindColumnIDByIndex = function(grid, index)
        {
        	var text = "";
        	var columnid = null;
        	var subCell = grid.getCellProperty("body", index, "subcell");
        	if ( subCell > 0 )
        	{
        		text = grid.getSubCellProperty("body", index, 0, "text");
        	}
        	else
        	{
        		text = grid.getCellProperty("body", index, "text");
        	}
        	if ( text && text.length > 0 )
        	{
        		if ( text.search(/^bind:/) > -1 )
        		{
        		columnid = text.replace(/^bind:/, "");
        		}
        			else if ( text.search(/^BIND\(/) > -1 )
        		{
        			columnid = text.replace(/^BIND\(/, "");
        			columnid = columnid.substr(0, columnid.length-1);
        		}
        	}
        	return columnid;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncelldblclick",this.gridCellDbClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.edtDetailAddr.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.cboSkk.addEventHandler("onitemchanged",this.fnChangeBjdongComp,this);
            this.cboSido.addEventHandler("onitemchanged",this.fnChangeBjdongComp,this);
            this.btnChoice.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("BAIM_BAIM_P100.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
