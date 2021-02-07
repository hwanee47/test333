(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("PDDS12Q");
            this.set_titletext("미배송 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsDiv=ds1</Col><Col id=\"QUERY_LIST\">q1=PD020</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getDlvyDelayStsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=dlvyDelayMgmtService.getDlvyDelayStsList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"SERVICE_BEANNAME\">dlvyDelayMgmtService</Col><Col id=\"SERVICE_METHOD\">getDlvyDelayStsList</Col></Row><Row><Col id=\"SVC_ID\">getDlvyDelayStsDetailList</Col><Col id=\"SERVICE_METHOD\">getDlvyDelayStsDetailList</Col><Col id=\"SERVICE_BEANNAME\">dlvyDelayMgmtService</Col><Col id=\"IN_DATASET_LIST\">ds1=dsDetailSearch</Col><Col id=\"OUT_DATASET_LIST\">dsDetailList=dsDetailList</Col><Col id=\"QUERY_LIST\">q1=dlvyDelayMgmtService.getDlvyDelayStsDetailList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DIV\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelayRsn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">U</Col><Col id=\"CD_NM\">미배송</Col></Row><Row><Col id=\"CD\">F</Col><Col id=\"CD_NM\">실패</Col></Row><Row><Col id=\"CD\">R</Col><Col id=\"CD_NM\">반송</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDiv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"PICKUP_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DELAY_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_RSN\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"QTY\" type=\"STRING\" size=\"256\"/><Column id=\"WT_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"BASIC_FRT\" type=\"STRING\" size=\"256\"/><Column id=\"SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"WT\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"MGMT_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CRG_ST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DIV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MGMT_UP_BRAN_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"MGMT_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_YMD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DIV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","16","44","52","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0564");
            obj.set_taborder("8");
            obj.set_text("점소");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","64","44","60","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","146","44","106","23",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnBranPop","123","44","25","23",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_search01");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","278","44","52","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0564");
            obj.set_taborder("10");
            obj.set_text("일자");
            this.addChild(obj.name, obj);

            obj = new Calendar("calStartYmd","326","44","131","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_cssclass("cal_ty01_req");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","462","44","8","23",null,null,null,null,null,null,this);
            obj.set_color("#ffffff");
            obj.set_taborder("11");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            obj = new Calendar("calEndYmd","473","44","131","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_cssclass("cal_ty01_req");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","628","44","52","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0564");
            obj.set_taborder("12");
            obj.set_text("구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDiv","674","43","160","23",null,null,null,null,null,null,this);
            obj.set_autoselect("true");
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_displayrowcount("6");
            obj.set_innerdataset("dsDiv");
            obj.set_taborder("4");
            obj.set_type("filterlike");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_master","0","sta00:3","321",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("tb_ty01");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"27\"/><Column size=\"100\"/><Column size=\"142\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"점소코드\"/><Cell col=\"2\" text=\"점소명\"/><Cell col=\"3\" text=\"건수\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:BRAN_CD\"/><Cell col=\"2\" text=\"bind:BRAN_NM\"/><Cell col=\"3\" text=\"bind:DELAY_CNT\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.rowcount\"/><Cell col=\"1\" text=\"합계\"/><Cell col=\"2\"/><Cell col=\"3\" textAlign=\"right\" text=\"expr:dataset.getSum('parseInt(DELAY_CNT)')\" edittype=\"mask\" maskedittype=\"number\" maskeditformat=\"#,##0\" maskeditlimitbymask=\"decimal\" displaytype=\"mask\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_detail","grd_master:5","sta00:3",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("tb_ty01");
            obj.set_binddataset("dsDetailList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"96\"/><Column size=\"160\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"170\"/><Column size=\"170\"/><Column size=\"155\"/><Column size=\"155\"/><Column size=\"130\"/><Column size=\"140\"/><Column size=\"98\"/><Column size=\"56\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"102\"/><Column size=\"250\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"일자\"/><Cell col=\"2\" text=\"운송장번호\"/><Cell col=\"3\" text=\"SM사원\"/><Cell col=\"4\" text=\"기업고객\"/><Cell col=\"5\" text=\"보내는분\"/><Cell col=\"6\" text=\"받는분\"/><Cell col=\"7\" text=\"미배송사유\"/><Cell col=\"8\" text=\"상세사유\"/><Cell col=\"9\" text=\"최종스캔점소\"/><Cell col=\"10\" text=\"최종스캔일시\"/><Cell col=\"11\" text=\"운임구분\"/><Cell col=\"12\" text=\"수량\"/><Cell col=\"13\" text=\"총운임\"/><Cell col=\"14\" text=\"운임\"/><Cell col=\"15\" text=\"사이즈\"/><Cell col=\"16\" text=\"중량\"/><Cell col=\"17\" text=\"원운송장번호\"/><Cell col=\"18\" text=\"받는분 주소\"/><Cell col=\"19\" text=\"받는분연락처1\"/><Cell col=\"20\" text=\"받는분연락처2\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:PICKUP_YMD\"/><Cell col=\"2\" text=\"bind:WAYBILL_NO\"/><Cell col=\"3\" text=\"bind:EMP_NM\"/><Cell col=\"4\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SENDR_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:RCVR_NM\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:DELAY_RSN\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:DETAIL_RSN\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:BRAN_CD\"/><Cell col=\"10\" text=\"bind:WORK_TIME\"/><Cell col=\"11\" text=\"bind:FRT_DV_NM\"/><Cell col=\"12\" text=\"bind:QTY\" textAlign=\"right\" maskeditformat=\"#,#0.00\" displaytype=\"mask\"/><Cell col=\"13\" text=\"bind:WT_FRT\" textAlign=\"right\" maskeditformat=\"#,#0.00\" displaytype=\"mask\"/><Cell col=\"14\" text=\"bind:BASIC_FRT\" textAlign=\"right\" displaytype=\"mask\" edittype=\"none\" maskeditformat=\"#,#0.00\"/><Cell col=\"15\" text=\"bind:SIZE\" textAlign=\"right\" maskeditformat=\"#,#0.00\" displaytype=\"mask\"/><Cell col=\"16\" text=\"bind:WT\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0.00\"/><Cell col=\"17\" text=\"bind:OGNTRSPBILLNUM\"/><Cell col=\"18\" text=\"bind:RCVR_ADDR\"/><Cell col=\"19\" text=\"bind:RCVR_CELL_NO\"/><Cell col=\"20\" text=\"bind:RCVR_TEL_NO\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.rowcount\" displaytype=\"normal\" textAlign=\"right\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"expr:dataset.getSum('parseInt(QTY)')\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0.00\"/><Cell col=\"13\" text=\"expr:dataset.getSum('parseInt(WT_FRT)')\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0.00\"/><Cell col=\"14\" text=\"expr:dataset.getSum('parseInt(BASIC_FRT)')\" textAlign=\"right\" maskeditformat=\"#,#0.00\" displaytype=\"mask\"/><Cell col=\"15\" text=\"expr:dataset.getSum('parseInt(SIZE)')\" textAlign=\"right\" maskeditformat=\"#,#0.00\" displaytype=\"mask\"/><Cell col=\"16\" textAlign=\"right\" edittype=\"mask\" maskeditformat=\"#,#0.00\" displaytype=\"mask\" text=\"expr:dataset.getSum('parseInt(WT)')\" maskedittype=\"number\" maskeditlimitbymask=\"decimal\"/><Cell col=\"17\"/><Cell col=\"18\"/><Cell col=\"19\"/><Cell col=\"20\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("13");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLVY_DLVY_0030.xfdl", function() {
        /**
        *  @MenuPath
        *  @FileName
        *  @Creator
        *  @CreateDate 		2020.02.10
        *  @Desction        스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.10								최초 생성
        ************************************************************************************************
        */

        /************************************************************************************************
        * include 선언부																				*
         ************************************************************************************************/

        /************************************************************************************************************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        var strDate = "";
        var strTime = "";
        var strToDay	= "";

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
        	this.fnInitForm();
        };

        this.fnInitForm = function()
        {
        	this.edtBranCd.setFocus();
        	//화면 초기화
        	//날짜셋팅
        	strDate = getFormatDate(new Date());
        	strToDay = strDate.substr(0,8);
        	strTime = strDate.substr(8);

        	this.calStartYmd.set_value(this.gfnGetDate("date"));
        	this.calEndYmd.set_value(this.gfnGetDate("date"));
        	this.cboDiv.set_index(0);
        	// 권한조회

        	// 공통코드조회

        	// 화면 공통코드 조회
        	this.gfnTransaction("commonCode");
        };

         /***********************************************************************************************
         * @function: btnOnClick
         * @description: 버튼이벤트 제어
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.btnOnClick = function(obj,e)
        {
        	switch(obj.name)
        	{


        		//점소조회 팝업
        		case "btnBranPop":
        			this.fnOpenPopBran();
        		break;

        		// 조회
        		case "btnSearch" :
        			this.fnSearch();
        		break;

        		// 엑셀
        		case "btnExcel" :

        		break;

        		default :
        		break;
        	}
        };

         /***********************************************************************************************
         * @function: fnSearch
         * @description: 배달출발 리스트 조회
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	if(this.gfnIsNull(this.gfnTrim(this.edtBranCd.value))){
        		this.gfnAlert("점소코드를 입력해주세요.");
        		this.edtBranCd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.calStartYmd.value))){
        		this.gfnAlert("조회일자를 입력해주세요.");
        		this.calStartYmd.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.calEndYmd.value))){
        		this.gfnAlert("조회일자를 입력해주세요.");
        		this.calEndYmd.setFocus();
        		return;
        	}

        	var workYmdFrom = this.calStartYmd.value;
        	if(workYmdFrom.length > 8){
        		workYmdFrom = workYmdFrom.substr(0,8);
        	}

        	var workYmdTo = this.calEndYmd.value;
        	if(workYmdTo.length > 8){
        		workYmdTo = workYmdTo.substr(0,8);
        	}

        	trace("code:" + this.cboDiv.value);

        	//TODO 사원정보 수정
        	trace(this.edtBranCd.value);
        	this.dsSearch.setColumn(0,"MGMT_UP_BRAN_CD",this.edtBranCd.value);
        	this.dsSearch.setColumn(0,"WORK_YMD_FROM",workYmdFrom);
        	this.dsSearch.setColumn(0,"WORK_YMD_TO",workYmdTo);
        	this.dsSearch.setColumn(0,"CRG_ST",'82');
        	this.dsSearch.setColumn(0,"DS_DIV",this.cboDiv.value);

        	this.dsList.clearData();
        	this.dsDetailList.clearData();

        	this.gfnTransaction("getDlvyDelayStsList");
        };

        /***********************************************************************************************
         * @function	: fnOpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBran = function()
        {
        	// 파라미터 설정
        	var popupId = 'popSearchBran';	//팝업ID
        	var pBranCdValue = this.edtBranCd.value;	// 점소코드
        	var pBranNmValue = '';	// 점소명

        	// 팝업 호출
        	var oArg = {
        				  pBranCd       : pBranCdValue									// 점소코드
        				, pBranNm       : pBranNmValue  								// 점소명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P010.xfdl", oArg, sPopupCallBack, oOption);
        }

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
        			// 예정시간
        			this.cboDiv.set_index(0);
        		break;

        		// 조회
        		case "getDlvyDepatList" :
        		if(this.dsList.rowcount > 0){
        			this.grd_master.setCellPos(0);
        		}
        		break;

        		// 상세조회
        		case "getDlvyDelayStsDetailList" :
        		trace(this.dsDetailList.saveXML());
        		if(this.dsDetailList.rowcount> 0){
        			this.grd_detail.setCellPos(0);
        		}
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
        this.fnPopupCallback = function(sPopupId, dsObj)
        {
        	switch(sPopupId) {

        		case "popSearchBran" :
        			this.edtBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			this.edtBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		default :
        		break;
        	}
        }

        function getFormatDate(date){
            return date.getFullYear().toString() + pad2(date.getMonth() + 1) + pad2( date.getDate()) + pad2( date.getHours() ) + pad2( date.getMinutes() ) + pad2( date.getSeconds() ) ;
        }

        function pad2(n) { return n < 10 ? '0' + n : n }


        /***********************************************************************************************
         * @function: btnBranPop_onkeydown
         * @description: 점소코드 keydown 이벤트
         * @param : svcID - 서비스 id
         * @param : errorCode - error 코드
         * @param : errorMsg - error 메세지
         * @return N/A
        /***********************************************************************************************/
        this.edtBranCd_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
        		this.fnOpenPopBran();
        	}else{
        		this.edtBranNm.set_value('');
        	}
        };

        /***********************************************************************************************
         * @function: grd_master_oncelldblclick
         * @description: 그리드 더블클릭 이벤트
         * @param : svcID - 서비스 id
         * @param : errorCode - error 코드
         * @param : errorMsg - error 메세지
         * @return N/A
        /***********************************************************************************************/
        this.grd_master_oncelldblclick = function(obj,e)
        {
        	this.dsDetailSearch.clearData();
        	this.dsDetailSearch.addRow();

        	var mgmtUpBranCd = this.dsList.getColumn(this.grd_master.currentrow,"MGMT_UP_BRAN_CD");
        	var ymdFrom = this.dsList.getColumn(this.grd_master.currentrow,"WORK_YMD_FROM");
        	var ymdTo = this.dsList.getColumn(this.grd_master.currentrow,"WORK_YMD_TO");
        	var dsDiv = this.dsList.getColumn(this.grd_master.currentrow,"DS_DIV");
        	this.dsDetailSearch.setColumn(0,"MGMT_UP_BRAN_CD",mgmtUpBranCd);
        	this.dsDetailSearch.setColumn(0,"WORK_YMD_FROM",ymdFrom);
        	this.dsDetailSearch.setColumn(0,"WORK_YMD_TO",ymdTo);
        	this.dsDetailSearch.setColumn(0,"DS_DIV",dsDiv);

        	//trace(this.dsDetailSearch.saveXML());
        	this.gfnTransaction("getDlvyDelayStsDetailList");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fnInitForm,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.edtBranCd.addEventHandler("onkeydown",this.edtBranCd_onkeydown,this);
            this.btnBranPop.addEventHandler("onclick",this.btnOnClick,this);
            this.grd_master.addEventHandler("oncelldblclick",this.grd_master_oncelldblclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("DLVY_DLVY_0030.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
