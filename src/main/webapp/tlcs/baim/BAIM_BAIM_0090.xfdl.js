(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_BAIM0090");
            this.set_titletext("기초코드등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsExpctHour=ds1</Col><Col id=\"QUERY_LIST\">q1=PD005</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getBaimCodeList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=baimCodeMgmtService.getBaimCodeList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"SERVICE_BEANNAME\">baimCodeMgmtService</Col><Col id=\"SERVICE_METHOD\">getBaimCodeList</Col></Row><Row><Col id=\"SVC_ID\">getBaimCodeDetailList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsDetailSearch</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCodeMgmtService</Col><Col id=\"SERVICE_METHOD\">getBaimCodeDetailList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"QUERY_LIST\">q1=baimCodeMgmtService.getBaimCodeDetailList</Col><Col id=\"OUT_DATASET_LIST\">dsDetailList=dsDetailList</Col></Row><Row><Col id=\"SVC_ID\">saveBaimCodeInfos</Col><Col id=\"IN_DATASET_LIST\">dsSave1=dsList:U dsSave2=dsDetailList:U</Col><Col id=\"QUERY_LIST\">q1=baimCodeMgmtService.saveBaimCodeInfos</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCodeMgmtService</Col><Col id=\"SERVICE_METHOD\">saveBaimCodeInfos</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENG_CD_TYP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORDB\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TCD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_TCD\"/><Col id=\"CD_TYP_NM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TCD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCboUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM\">전체</Col><Col id=\"CD\"/></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_cssclass("top_search_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","20","43","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("코드구분");
            obj.set_cssclass("top_search_tx01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCodeTcd","90","42","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01");
            obj.set_maxlength("30");
            obj.set_inputmode("upper");
            obj.set_inputfilter("dot,comma,space");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","250","43","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("코드구분명");
            obj.set_cssclass("top_search_tx01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCdTypNm","330","42","140","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("inp_ty01");
            obj.set_maxlength("50");
            obj.set_inputmode("upper");
            obj.set_inputfilter("dot,space,comma");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCodeList","0","114","635",null,null,"0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsList");
            obj.set_cssclass("tb_ty01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"39\"/><Column size=\"99\"/><Column size=\"191\"/><Column size=\"184\"/><Column size=\"101\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/><Cell col=\"3\" text=\"코드 영문명\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:CD_TCD\" edittype=\"expr:dataset.getRowType(currow) == 2?'text':'none'\" editautoselect=\"false\" editinputtype=\"english,number\" editinputfilter=\"space,dot,comma\" editinputmode=\"upper\" editmaxlength=\"30\"/><Cell col=\"2\" text=\"bind:CD_TYP_NM\" edittype=\"text\" editinputmode=\"upper\" editmaxlength=\"50\"/><Cell col=\"3\" text=\"bind:ENG_CD_TYP_NM\" edittype=\"text\" editautoselect=\"true\" editinputtype=\"english,space,normal\" editinputmode=\"upper\" editmaxlength=\"50\"/><Cell col=\"4\" comboautoselect=\"false\" combodataset=\"dsYn\" editautoselect=\"true\" edittype=\"combo\" combocodecol=\"CD\" combodatacol=\"CD_NM\" text=\"bind:DEL_YN\" combopopuptype=\"normal\" combotype=\"dropdown\" combodisplaynulltype=\"none\" displaytype=\"combocontrol\" cssclass=\"sel_ty01\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCodeDetailList","grdCodeList:5","114",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsDetailList");
            obj.set_cssclass("tb_ty01");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"38\"/><Column size=\"112\"/><Column size=\"154\"/><Column size=\"128\"/><Column size=\"134\"/><Column size=\"82\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"코드\"/><Cell col=\"2\" text=\"코드명\"/><Cell col=\"3\" text=\"코드설명\"/><Cell col=\"4\" text=\"정렬순서\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:CD\" edittype=\"expr:dataset.getRowType(currow) == 2?'text':'none'\" editautoselect=\"true\" editinputfilter=\"comma,dot,space\" editinputmode=\"upper\" editinputtype=\"digit,english,number\" editmaxlength=\"30\"/><Cell col=\"2\" text=\"bind:CD_NM\" editmaxlength=\"50\" editautoselect=\"true\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:CD_DESC\" editmaxlength=\"50\" editautoselect=\"true\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:CD_ORDB\" comboautoselect=\"false\" edittype=\"text\" editautoselect=\"true\" editinputfilter=\"none\" editinputmode=\"normal\" editinputtype=\"number,digit\" editmaxlength=\"10\"/><Cell col=\"5\" text=\"bind:DEL_YN\" comboautoselect=\"true\" combocodecol=\"CD\" combodatacol=\"CD_NM\" editautoselect=\"true\" calendarautoselect=\"false\" combodataset=\"dsYn\" combodisplaynulltype=\"nulltext\" combopopuptype=\"normal\" combotype=\"dropdown\" edittype=\"combo\" displaytype=\"combocontrol\" cssclass=\"sel_ty01\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","5","88","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("코드대분류");
            obj.set_cssclass("top_search_tx01");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow","470","85","68","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신규");
            obj.set_cssclass("btn_ty01_new");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","542","85","68","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_ty01_delete");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCdTcdNm","710","84","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnDetailDel",null,"85","68","23","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_cssclass("btn_ty01_delete");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddDetailRow",null,"85","68","23","btnDetailDel:4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신규");
            obj.set_cssclass("btn_ty01_new");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","630","85","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("코드소분류");
            obj.set_cssclass("top_search_tx01");
            obj.set_color("#000000");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","485","43","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("코드구분명");
            obj.set_cssclass("top_search_tx01");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","560","42","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sel_ty01");
            obj.set_innerdataset("dsCboUseYn");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("16");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCodeTcd","value","dsSearch","CD_TCD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCdTypNm","value","dsSearch","CD_TYP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboUseYn","value","dsSearch","DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("BAIM_BAIM_0090.xfdl", function() {
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
        var isDetailSearch = false;

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
        	//화면 초기화
        	this.cboUseYn.set_index(0);
        	// 권한조회

        	// 공통코드조회

        	// 화면 공통코드 조회

        	// 코드대분류 조회
        	this.fnSearch();
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
        		// 조회
        		case "btnSearch" :
        			this.fnSearch();
        		break;

        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		//신규
        		case "btnAddRow":
        			this.fnAddRow();
        		break;

        		//삭제
        		case "btnDel":
        			this.fnDelete();
        		break;

        		//신규
        		case "btnAddDetailRow":
        			this.fnAddDetailRow();
        		break;

        		//삭제
        		case "btnDetailDel":
        			this.fnDetailDelete();
        		break;

        		default :
        		break;
        	}
        };

         /***********************************************************************************************
         * @function: fnSearch
         * @description: 코드 대분류 리스트 조회
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	//this.dsDetailList.clearData();

        	isDetailSearch = false;
        	this.gfnTransaction("getBaimCodeList");
        };

         /***********************************************************************************************
         * @function: fnAddRow
         * @description: 코드 대분류 리스트 신규행 추가
        /***********************************************************************************************/
        this.fnAddRow = function()
        {
        	var row = this.dsList.addRow();
        	this.edtCdTcdNm.set_value('');
        	this.dsList.setColumn(row,"CD_TCD","");
        	this.dsList.setColumn(row,"CD_TYP_NM","");
        	this.dsList.setColumn(row,"ENG_CD_TYP_NM","");
        	this.dsList.setColumn(row,"DEL_YN","N");
        	this.dsList.setColumn(row,"DEL_YN_NM","사용");
        };

         /***********************************************************************************************
         * @function: fnAddRow
         * @description: 코드 소분류 리스트 신규행 추가
        /***********************************************************************************************/
        this.fnAddDetailRow = function()
        {
        	if(this.dsList.rowcount == 0) return;

        	//대분류 코드 없으면 신규행 추가x
        	var listCurrow = this.grdCodeList.currentrow;
        	var cellCdTcd = this.dsList.getColumn(listCurrow,"CD_TCD");
        	if(this.gfnIsNull(cellCdTcd)){
        		this.gfnAlert("코드 대분류의 코드 값을 입력해주세요.");
        		return;
        	}
        	//신규행 추가
        	this.dsDetailList.addRow();
        	this.dsDetailList.setColumn(this.grdCodeDetailList.currentrow,"DEL_YN","N");
        	this.dsDetailList.setColumn(this.grdCodeDetailList.currentrow,"CD_TCD",cellCdTcd);
        };

         /***********************************************************************************************
         * @function: fnDelete
         * @description: 코드 대분류 리스트 삭제
        /***********************************************************************************************/
        this.fnDelete = function()
        {
        	if(this.dsList.rowcount == 0) return;

        	var currow = this.grdCodeList.currentrow;
        	var rowType = this.dsList.getRowType(this.dsList.rowposition);
        	if(rowType == 2){
        		this.dsList.deleteRow(currow);
        	}else{
        		this.dsList.setColumn(currow,"DEL_YN","Y");
        		for(var i = 0; i < this.dsDetailList.rowcount; i++){
        			this.dsDetailList.setColumn(i,"DEL_YN","Y");
        		}
        	}
        };

         /***********************************************************************************************
         * @function: fnDetailDelete
         * @description: 코드 소분류 리스트 삭제
        /***********************************************************************************************/
        this.fnDetailDelete = function()
        {
        	if(this.dsDetailList.rowcount == 0) return;
        	var currow = this.grdCodeDetailList.currentrow;
        	var rowType = this.dsDetailList.getRowType(this.dsDetailList.rowposition);
        	if(rowType == 2){
        		this.dsDetailList.deleteRow(currow);
        	}else{
        		this.dsDetailList.setColumn(currow,"DEL_YN","Y");
        	}
        };

         /***********************************************************************************************
         * @function: fnSave
         * @description: 저장
        /***********************************************************************************************/
        this.fnSave = function()
        {
        	if(this.fnValidation()){

        		this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        			if(!bResult) return;

        			// 트랜잭션 호출 (저장)
        			this.gfnTransaction("saveBaimCodeInfos");
        		});


        	}
        };

         /***********************************************************************************************
         * @function: fnValidation
         * @description: 저장 전 유효성검사
        /***********************************************************************************************/
        this.fnValidation = function()
        {
        	if(this.dsList.rowcount == 0) return false;

        	//this.gfnIsNull()
        	//코드 대분류 유효성 체크
        	for(var i =0; i < this.grdCodeList.rowcount; i++){
        		if(this.gfnIsNull(this.dsList.getColumn(i,"CD_TCD"))){
        			this.gfnAlert("코드값을 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			this.grdCodeList.setCellPos(1);
        			return false;
        			break;
        		}

        		if(this.gfnIsNull(this.dsList.getColumn(i,"CD_TYP_NM"))){
        			this.gfnAlert("코드명을 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			this.grdCodeList.setCellPos(2);
        			return false;
        			break;
        		}

        		var curRow_cdTcd = this.dsList.getColumn(i,"CD_TCD");

        		/*if(this.dsList.findRow("CD_TCD",curRow_cdTcd) > 0){
        			alert("중복된 코드값입니다." + curRow_cdTcd);

        			return false;
        			break;
        		}*/
        	}


        	//코드 소분류 유효성 체크
        	for(var i =0; i < this.grdCodeDetailList.rowcount; i++){
        		if(this.gfnIsNull(this.dsDetailList.getColumn(i,"CD"))){
        			this.gfnAlert("코드값을 입력해주세요.");
        			this.dsDetailList.set_rowposition(i);
        			this.grdCodeDetailList.setCellPos(1);
        			this.grdCodeDetailList.setEditSelect(0);
        			return false;
        			break;
        		}

        		if(this.gfnIsNull(this.dsDetailList.getColumn(i,"CD_NM"))){
        			this.gfnAlert("코드명을 입력해주세요.");
        			this.dsDetailList.set_rowposition(i);
        			this.grdCodeDetailList.setCellPos(2);
        			return false;
        			break;
        		}

        		if(this.gfnIsNull(this.dsDetailList.getColumn(i,"CD_DESC"))){
        			this.gfnAlert("코드설명을 입력해주세요.");
        			this.dsDetailList.set_rowposition(i);
        			this.grdCodeDetailList.setCellPos(3);
        			return false;
        			break;
        		}

        		if(this.gfnIsNull(this.dsDetailList.getColumn(i,"CD_ORDB"))){
        			this.gfnAlert("코드 정렬순서를 입력해주세요.");
        			this.dsDetailList.set_rowposition(i);
        			this.grdCodeDetailList.setCellPos(4);
        			return false;
        			break;
        		}
        	}

        	return true;
        };

         /***********************************************************************************************
         * @function: fnDetailSearch
         * @description: 코드 소분류 조회
        /***********************************************************************************************/
        this.fnDetailSearch = function()
        {
        	//기존 행 1: 신규행 rowtype :2, 데이터변경 rowtype:4
        	var rowType = this.dsList.getRowType(this.dsList.rowposition);
        	if(rowType != 2){
        		var cdTcd = this.dsList.getColumn(this.grdCodeList.currentrow,"CD_TCD");
        		this.dsDetailSearch.setColumn(0,"CD_TCD",cdTcd);
        		this.edtCdTcdNm.set_value(cdTcd);
        	}
        	this.gfnTransaction("getBaimCodeDetailList");
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
        	//trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

        	if(errorCode < 0) {
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		case "getBaimCodeList":
        			if(this.dsList.rowcount > 0){
        				this.fnDetailSearch();	//상세조회
        			}else{
        				this.dsList.addColumn("CD_TCD","STRING");
        				this.dsList.addColumn("CD_TYP_NM","STRING");
        				this.dsList.addColumn("ENG_CD_TYP_NM","STRING");
        				this.dsList.addColumn("DEL_YN","STRING");
        				this.dsList.addColumn("DEL_YN_NM","STRING");
        			}
        		break;
        		case "getBaimCodeDetailList":
        			isDetailSearch = true;
        			if(this.dsDetailList.rowcount > 0) this.dsDetailList.set_rowposition(0);
        			else{
        				this.dsDetailList.addColumn("CD_TCD","STRING");
        				this.dsDetailList.addColumn("CD","STRING");
        				this.dsDetailList.addColumn("CD_NM","STRING");
        				this.dsDetailList.addColumn("CD_DESC","STRING");
        				this.dsDetailList.addColumn("CD_ORDB","STRING");
        				this.dsDetailList.addColumn("DEL_YN","STRING");
        				this.dsDetailList.addColumn("DEL_YN_NM","STRING");
        			}
        		break;

        		case "saveBaimCodeInfos":
        			this.gfnAlert("저장되었습니다.");
        			this.fnSearch();
        		break;

        		default:
        		break;
        	}
        }

         /***********************************************************************************************
         * @function: grdCodeList_oncelldposchanged
         * @description: 코드 소분류 리스트 조회
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.grdCodeList_oncelldposchanged = function(obj,e)
        {
        	var cdTcd = this.dsList.getColumn(this.grdCodeList.currentrow,"CD_TCD");
        	this.edtCdTcdNm.set_value(cdTcd);
        	this.dsDetailList.clearData();
        	trace(cdTcd.length);
        	if(cdTcd.length == 0) return;
        	if(isDetailSearch){
        		this.fnDetailSearch();
        	}
        };


         /***********************************************************************************************
         * @function: 코드구분 keydown 이벤트
         * @description: 코드 소분류 리스트 조회
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.edtCodeTcd_onkeydown = function(obj,e)
        {
        	if( e.keycode == 13)
            {
        		this.fnSearch();
        	}
        };

        /***********************************************************************************************
         * @function: 코드구분 keydown 이벤트
         * @description: 코드 소분류 리스트 조회
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.edtCdTypNm_onkeydown = function(obj,e)
        {
        			if( e.keycode == 13)
            {
        		this.fnSearch();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.fnInitForm,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCodeTcd.addEventHandler("onchanged",this.edtCodeTcd_onchanged,this);
            this.edtCodeTcd.addEventHandler("onkeydown",this.edtCodeTcd_onkeydown,this);
            this.edtCdTypNm.addEventHandler("onkeydown",this.edtCdTypNm_onkeydown,this);
            this.grdCodeList.addEventHandler("oncellposchanged",this.grdCodeList_oncelldposchanged,this);
            this.btnAddRow.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDetailDel.addEventHandler("onclick",this.btnOnClick,this);
            this.btnAddDetailRow.addEventHandler("onclick",this.btnOnClick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0090.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
