(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameMain");
            this.set_titletext("frameMain");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"TOL_SCD\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsService", this);
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">selectDashboardMain</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch ds2=dsSearch ds3=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsMain01=ds1 dsMain02=ds2 dsMain03=ds3</Col><Col id=\"QUERY_LIST\">q1=commonService.selectDashboardMain01 q2=commonService.selectDashboardMain02 q3=commonService.selectDashboardMain03</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">selectDashboardMain01</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsMain01=ds1</Col><Col id=\"QUERY_LIST\">q1=commonService.selectDashboardMain01</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">selectDashboardMain02</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsMain02=ds1</Col><Col id=\"QUERY_LIST\">q1=commonService.selectDashboardMain02</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">selectDashboardMain03</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsMain03=ds1</Col><Col id=\"QUERY_LIST\">q1=commonService.selectDashboardMain03</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">searchNotiList</Col><Col id=\"OUT_DATASET_LIST\">dsNotiList=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"IN_DATASET_LIST\">ds1=dsNotiSearch</Col><Col id=\"QUERY_LIST\">q1=baimNoticeMgmService.getNoticeList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain01", this);
            obj._setContents("<ColumnInfo><Column id=\"TOT_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"TOT_ORDER_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"MNF_CNT1\" size=\"256\" type=\"STRING\"/><Column id=\"ORDER_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"MNF_CNT2\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain02", this);
            obj._setContents("<ColumnInfo><Column id=\"PARTNER_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"TOT_ORDER_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"PARTNER_RATIO\" size=\"256\" type=\"STRING\"/><Column id=\"FINISH_RATIO\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMain03", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"SHPR_TOT_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"TOT_CNT\" size=\"256\" type=\"STRING\"/><Column id=\"AR_AMT\" size=\"256\" type=\"STRING\"/><Column id=\"AP_AMT\" size=\"256\" type=\"STRING\"/><Column id=\"REDUCTION\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotiSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH\" size=\"256\" type=\"STRING\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH\"/><Col id=\"DEL_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotiList", this);
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT\" size=\"256\" type=\"STRING\"/><Column id=\"REG_NM\" size=\"256\" type=\"STRING\"/><Column id=\"REG_DT\" size=\"256\" type=\"STRING\"/><Column id=\"POSTED_DT\" size=\"256\" type=\"STRING\"/><Column id=\"AUTO_SEQ\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gdsRainfall", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"mean\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">A</Col><Col id=\"rainfall\">69</Col><Col id=\"mean\">66.2</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">B</Col><Col id=\"rainfall\">49.6</Col><Col id=\"mean\">48.6</Col></Row><Row><Col id=\"name\">C</Col><Col id=\"rainfall\">94.1</Col><Col id=\"mean\">68.2</Col></Row><Row><Col id=\"name\">D</Col><Col id=\"rainfall\">78</Col><Col id=\"mean\">51</Col></Row><Row><Col id=\"name\">E</Col><Col id=\"rainfall\">11.2</Col><Col id=\"mean\">59.1</Col></Row><Row><Col id=\"name\">F</Col><Col id=\"rainfall\">56</Col><Col id=\"mean\">55.9</Col></Row><Row><Col id=\"name\">G</Col><Col id=\"rainfall\">66.6</Col><Col id=\"mean\">60.3</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">H</Col><Col id=\"rainfall\">53.2</Col><Col id=\"mean\">56.8</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gdsCountryLitres", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"valuedata\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">Czech Republic</Col><Col id=\"value\">356.9</Col><Col id=\"select\"/><Col id=\"data\">test1</Col><Col id=\"valuedata\">100</Col></Row><Row><Col id=\"country\">Ireland</Col><Col id=\"value\">54</Col><Col id=\"select\"/><Col id=\"data\">tes2</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Germany</Col><Col id=\"value\">115.8</Col><Col id=\"data\">test3</Col><Col id=\"valuedata\">200.11</Col></Row><Row><Col id=\"country\">Australia</Col><Col id=\"value\">109.9</Col><Col id=\"select\"/><Col id=\"data\">test4</Col><Col id=\"valuedata\">19.1</Col></Row><Row><Col id=\"country\">Austria</Col><Col id=\"value\">108.3</Col><Col id=\"select\">1</Col><Col id=\"data\">test5</Col><Col id=\"valuedata\">30.12</Col></Row><Row><Col id=\"country\">UK</Col><Col id=\"value\">65</Col><Col id=\"select\"/><Col id=\"data\">test6</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Belgium</Col><Col id=\"value\">110</Col><Col id=\"select\"/><Col id=\"data\">test7</Col><Col id=\"valuedata\">19.100</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("gdsCostProfit", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"profit\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue\" type=\"FLOAT\" size=\"256\"/><Column id=\"profit1\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost1\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue1\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">1</Col><Col id=\"profit\">600</Col><Col id=\"cost\">700</Col><Col id=\"revenue\">9999</Col><Col id=\"profit1\">400</Col><Col id=\"cost1\">200</Col><Col id=\"revenue1\">8000</Col></Row><Row><Col id=\"category\">2</Col><Col id=\"profit\">1000</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">5500</Col><Col id=\"profit1\">2200</Col><Col id=\"cost1\">4000</Col><Col id=\"revenue1\">4040</Col></Row><Row><Col id=\"category\">3</Col><Col id=\"profit\">1500</Col><Col id=\"cost\">1550</Col><Col id=\"revenue\">2200</Col><Col id=\"profit1\">1900</Col><Col id=\"cost1\">2000</Col><Col id=\"revenue1\">3000</Col></Row><Row><Col id=\"category\">4</Col><Col id=\"profit\">2200</Col><Col id=\"cost\">1300</Col><Col id=\"revenue\">1900</Col><Col id=\"profit1\">50</Col><Col id=\"cost1\">660</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">5</Col><Col id=\"profit\">1400</Col><Col id=\"cost\">900</Col><Col id=\"revenue\">9900</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row><Row><Col id=\"category\">6</Col><Col id=\"profit\">2000</Col><Col id=\"cost\">500</Col><Col id=\"revenue\">27000</Col><Col id=\"profit1\">80</Col><Col id=\"cost1\">2900</Col><Col id=\"revenue1\">3050</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"profit\">1800</Col><Col id=\"category\">7</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">8000</Col><Col id=\"profit1\">2500</Col><Col id=\"cost1\">800</Col><Col id=\"revenue1\">2000</Col></Row><Row><Col id=\"category\">8</Col><Col id=\"profit\">2500</Col><Col id=\"cost\">800</Col><Col id=\"revenue\">5700</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1900</Col><Col id=\"revenue1\">1900</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"category\">9</Col><Col id=\"profit\">2550</Col><Col id=\"cost\">600</Col><Col id=\"revenue\">3000</Col><Col id=\"profit1\">1500</Col><Col id=\"cost1\">1300</Col><Col id=\"revenue1\">440</Col></Row><Row><Col id=\"category\">10</Col><Col id=\"profit\">1600</Col><Col id=\"cost\">1200</Col><Col id=\"revenue\">5000</Col><Col id=\"profit1\">8989</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">11</Col><Col id=\"profit\">650</Col><Col id=\"cost\">550</Col><Col id=\"revenue\">3087</Col><Col id=\"profit1\">2000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDashboard","800","10",null,null,"30","20","660",null,"700",null,this);
            obj.set_background("#ffffff");
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("main_box_ty01");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","13","4","126","40",null,null,null,null,null,null,this.divDashboard.form);
            obj.set_cssclass("main_tit01");
            obj.set_taborder("0");
            obj.set_text("지역별 현황");
            obj.set_font("normal 700 15px/normal \"맑은 고딕\"");
            this.divDashboard.addChild(obj.name, obj);

            obj = new WebBrowser("webChart","10","51",null,"93.36%","30",null,"600",null,null,null,this.divDashboard.form);
            obj.set_taborder("1");
            obj.set_border("0px #ffffff");
            obj.set_visible("false");
            this.divDashboard.addChild(obj.name, obj);

            obj = new Div("divNotice","3","10",null,null,"divDashboard:10","48.63%","350",null,"350",null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_cssclass("main_box_ty01");
            obj.set_formscrollbartype("none default");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","12","4","255","42",null,null,null,null,null,null,this.divNotice.form);
            obj.set_cssclass("main_tit01");
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_font("normal 700 15px/normal \"맑은 고딕\"");
            this.divNotice.addChild(obj.name, obj);

            obj = new Grid("grdNoti","0","52",null,null,"0","1",null,null,null,null,this.divNotice.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsNotiList");
            obj.set_scrollbartype("none default");
            obj.set_cssclass("tb_ty_main");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"491\"/><Column size=\"134\"/><Column size=\"156\"/></Columns><Rows><Row size=\"47\"/></Rows><Band id=\"body\"><Cell text=\"bind:SUBJECT\" textAlign=\"left\" font=\"normal 13px/normal &quot;나눔고딕&quot;\" cssclass=\"top_search_tx01\" padding=\"0px 0px 0px 14px\"/><Cell col=\"1\" text=\"bind:REG_NM\" font=\"normal 13px/normal &quot;나눔고딕&quot;\"/><Cell col=\"2\" text=\"bind:REG_DT\" font=\"normal 13px/normal &quot;나눔고딕&quot;\"/></Band></Format></Formats>");
            this.divNotice.addChild(obj.name, obj);

            obj = new Button("btnNoticeMore","695","24","81","19",null,null,null,null,null,null,this.divNotice.form);
            obj.set_taborder("2");
            obj.set_text("MORE");
            obj.set_cssclass("btn_main_noice_more");
            this.divNotice.addChild(obj.name, obj);

            obj = new Div("divChart02","3","divNotice:10",null,null,"divDashboard:10","25","350",null,"350",null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_background("#ffffff");
            obj.set_cssclass("main_box_ty01");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","12","9","255","42",null,null,null,null,null,null,this.divChart02.form);
            obj.set_cssclass("main_tit01");
            obj.set_taborder("1");
            obj.set_text("-");
            this.divChart02.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameMain.xfdl", function() {
        /************************************************************************************************
        *  업무포탈 > Dashboard
        *  @MenuPath		[frame][frameMain]
        *  @FileName		[frameMain.xfdl]
        *  @Creator			yun
        *  @CreateDate		2019/02/28
        *  @Desction		Dashboard.
        ************** 소스 수정 이력 ******************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2019/02/28      yun						최초 생성
        ************************************************************************************************/

        /***********************************************************************************************
         * FORM 변수 선언 영역
         ***********************************************************************************************/
        this.objApp        = nexacro.getApplication();

        /***********************************************************************************************
         * FORM EVENT
         ***********************************************************************************************/

        /***********************************************************************************************
         * @function	: formOnload
         * @description	: FORM onload
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.LoadEventInfo
         * @return N/A
         ***********************************************************************************************/
        this.formOnload = function(obj,e)
        {
        	this.fnInitForm();
        };

        /***********************************************************************************************
         * TRANSACTION
         ***********************************************************************************************/

        /***********************************************************************************************
         * POPUP FUNCTION
        /***********************************************************************************************/

        /***********************************************************************************************
         * CALLBACK FUNCTION
         ***********************************************************************************************/

        /***********************************************************************************************
         * @function	: fnCallback
         * @description	: 트랜젝션 후 호출 되는 callback 함수.
         * @param		: svcID - 서비스 id
         * @param		: errorCode - error 코드
         * @param		: errorMsg - error 메세지
         * @return N/A
         ***********************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(errorCode < 0) {
        		this.alert(errorMsg);
        	}else{
        		var sDivUrl   = this.divDashboard.url;
        		var arrDivUrl = ["frame::frameMain_S01.xfdl", "frame::frameMain_S02.xfdl", "frame::frameMain_S03.xfdl"];
        		switch(svcID){
        			case "selectDashboardMain" :
        				this.divDashboard.set_url(arrDivUrl[0]);
        				break;

        			case "selectDashboardMain01" :
        			case "selectDashboardMain02" :
        			case "selectDashboardMain03" :
        				var nFocusIdx = nexacro.toNumber(svcID.substr(svcID.length-1, 1))-1;
        				if(this.divDashboard.url == arrDivUrl[nFocusIdx]){
        					this.divDashboard.form.fnSearch();
        				}else{
        					this.divDashboard.set_url(arrDivUrl[nFocusIdx]);
        				}
        				break;
        		}
        	}
        };

        /***********************************************************************************************
         * USER FUNCTION
         ***********************************************************************************************/
        this.fnInitForm = function()
        {
        	var nRow = this.fnInitDataset(this.dsSearch, true);
        	//this.dsNotiSearch.setColumn(nRow, "AUTH", this.objApp.gv_authCd);
        	this.dsNotiSearch.setColumn(nRow, "AUTH", 'T00');
        	//this.divNotice.form.divNotiList.set_url("frame::frameMain_C02.xfdl");	//공지사항
        	this.divDashboard.form.webChart.set_url(this.objApp.gv_svcUrl_WKR + "mainChart.do");
        	//trace('url:'+this.objApp.gv_svcUrl_WKR + "mainChart.do");

        	//공지사항조회
        	this.fn_SearchNotiList();
        };

        this.fnInitDataset = function(objDS, bAddRow)
        {
        	var nRow = -1;
        	objDS.clearData();
        	if(bAddRow){
        		nRow = objDS.addRow();
        	}
        	return nRow;
        };

        this.fnSetDivCssClass = function(objDiv)
        {
        	var arrDivMain = ["divWork1", "divWork2", "divWork3", "divWork4"];
        	for(var i=0; i<arrDivMain.length; i++){
        		var objCompDiv = this.components[arrDivMain[i]];
        		if(arrDivMain[i] == objDiv.name){
        			if(objDiv.name == "divWork1"){
        				objCompDiv.set_cssclass("bx_n_ty01_on_first");
        			}else{
        				objCompDiv.set_cssclass("bx_n_ty01_on");
        			}
        		}else{
        			if(objDiv.name == "divWork1"){
        				objCompDiv.set_cssclass("bx_n_ty01_off_first");
        			}else{
        				objCompDiv.set_cssclass("bx_n_ty01_off");
        			}
        		}

        		var objComp = objCompDiv.form.components["staMain"];
        		if(arrDivMain[i] == objDiv.name){
        			objComp.set_cssclass("bx_n_in_tx01_on");
        		}else{
        			objComp.set_cssclass("bx_n_in_tx01_off");
        		}
        	}
        };

        /***********************************************************************************************
         * COMPONENT EVENT
         ***********************************************************************************************/
        this.fnCommonSubFormCall = function(obj,e)
        {
        	var arrTrUrl = ["selectDashboardMain01", "selectDashboardMain02", "selectDashboardMain03"];
        	var sDivId   = obj.parent.parent.name;

        	this.fnSetDivCssClass(this.components[sDivId]);
        	switch(sDivId){
        		case "divWork1" :
        		case "divWork2" :
        		case "divWork3" :
        			this.gfnTransaction(arrTrUrl[sDivId.substr(sDivId.length - 1, 1)-1]);
        			break;

        		case "divWork4" :
        			if(this.divDashboard.url == "frame::frameMain_S04.xfdl"){
        				this.divDashboard.form.fnSearch();
        			}else{
        				this.divDashboard.set_url("frame::frameMain_S04.xfdl");
        			}
        			break;
        	}
        }

        /***********************************************************************************************
         * @function	: divDashboard_webChart_onloadcompleted
         * @description	: 웹브라우저 loadcompleted
         * @param		: obj
         * @param		: e
         * @return N/A
         ***********************************************************************************************/
        this.divDashboard_webChart_onloadcompleted = function(obj,e)
        {

        	var webHeight = obj.height;
        	var webWidth = obj.width;

        };

         /***********************************************************************************************
         * @function		: fn_SearchNotiList
         * @description		: 공지사항 목록 조회
         * @return 			: N/A
        ***********************************************************************************************/
        this.fn_SearchNotiList = function()
        {

        	this.gfnTransaction("searchNotiList");
        };

        /***********************************************************************************************
         * @function		: fn_PopCall
         * @description		: 공지사항 상세정보 팝업 조회
         * @param 			: obj	- Grid object
         * @param 			: e		- GridClickEventInfo event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fn_PopCall = function(obj,e)
        {
        	var autoSeq		= this.dsNotiList.getColumn(e.row,"AUTO_SEQ");
        	//
        	var autosearchGb	= ( this.gfnIsNull(autoSeq) ? 'N' : 'Y' );
        	var sFormName		= "게시물관리";
        	var sFormUrl		= "board::BOARD_NOT_P001.xfdl";
        	var oArg			= {paramTitle:sFormName,pAutosearchGb:autosearchGb,pAutoSeq:autoSeq};
        	var oOption			= {"width":920,"height":500};	//top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack	= "fnPopupCallback";

        	this.gfnOpenPopup("notiPop",sFormUrl,oArg,sPopupCallBack,oOption);

        };

        this.frameMain_onkeydown = function(obj,e)
        {
        	if(e.keycode == 112){
        		this.gfnOpenHelpPopup();
        	}

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.formOnload,this);
            this.addEventHandler("onkeydown",this.frameMain_onkeydown,this);
            this.divDashboard.form.sta00.addEventHandler("onclick",this.divNotice_sta00_onclick,this);
            this.divDashboard.form.webChart.addEventHandler("onloadcompleted",this.divDashboard_webChart_onloadcompleted,this);
            this.divNotice.form.sta00.addEventHandler("onclick",this.divNotice_sta00_onclick,this);
            this.divNotice.form.grdNoti.addEventHandler("oncellclick",this.fn_PopCall,this);
            this.divChart02.form.sta00.addEventHandler("onclick",this.divNotice_sta00_onclick,this);
            this.dsNotiList.addEventHandler("oncolumnchanged",this.fn_ChkSum,this);
        };

        this.loadIncludeScript("frameMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
