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
            this.set_name("cmmCalculator");
            this.set_titletext("계산기");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,443);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeRadio", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">P</Col><Col id=\"CD_NM\">(%) 적용</Col></Row><Row><Col id=\"CD\">A</Col><Col id=\"CD_NM\">금액 적용</Col></Row><Row><Col id=\"CD\">M</Col><Col id=\"CD_NM\">(-) 적용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeTon", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/><Column id=\"FILTER\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeNumber", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">0</Col><Col id=\"CD_NM\">btnZero</Col></Row><Row><Col id=\"CD\">1</Col><Col id=\"CD_NM\">btnOne</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CD_NM\">btnTwo</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CD_NM\">btnThree</Col></Row><Row><Col id=\"CD\">4</Col><Col id=\"CD_NM\">btnFour</Col></Row><Row><Col id=\"CD\">5</Col><Col id=\"CD_NM\">btnFive</Col></Row><Row><Col id=\"CD\">6</Col><Col id=\"CD_NM\">btnSix</Col></Row><Row><Col id=\"CD\">7</Col><Col id=\"CD_NM\">btnSeven</Col></Row><Row><Col id=\"CD\">8</Col><Col id=\"CD_NM\">btnEight</Col></Row><Row><Col id=\"CD\">9</Col><Col id=\"CD_NM\">btnNine</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">DOWN</Col><Col id=\"CD_NM\">절사</Col></Row><Row><Col id=\"CD\">UP</Col><Col id=\"CD_NM\">올림</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0134");
            obj.set_taborder("0");
            obj.set_text("계산기");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnOne","20","204","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("2");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAmt","20","54",null,"45","20",null,null,null,null,null,this);
            obj.set_border("0px,0px,1px solid #9c9c9c");
            obj.set_color("#3b3b3b");
            obj.set_font("normal bold 24px/normal \"맑은 고딕\"");
            obj.set_inputfilter("comma");
            obj.set_inputtype("number");
            obj.set_padding("0px 8px 0px 0px");
            obj.set_taborder("4");
            obj.set_textAlign("right");
            obj.set_value("0");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTon","20","109",null,"35","20",null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("inp_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsCodeTon");
            obj.set_taborder("5");
            obj.set_text("톤급선택");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Button("btnTwo","84","204","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("6");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnThree","148","204","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("7");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnAr","212","204","128","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.getSetter("domainId").set("T0331");
            obj.set_taborder("8");
            obj.set_text("매출");
            this.addChild(obj.name, obj);

            obj = new Button("btnFour","20","260","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("9");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnFive","84","260","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("10");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Button("btnSix","148","260","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("11");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnAp","212","260","128","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.getSetter("domainId").set("T0290");
            obj.set_taborder("12");
            obj.set_text("매입");
            this.addChild(obj.name, obj);

            obj = new Button("btnSeven","20","316","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("13");
            obj.set_text("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnEight","84","316","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("14");
            obj.set_text("8");
            this.addChild(obj.name, obj);

            obj = new Button("btnNine","148","316","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("15");
            obj.set_text("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnArJa","212","316","128","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.getSetter("domainId").set("T0813");
            obj.set_taborder("16");
            obj.set_text("자점");
            this.addChild(obj.name, obj);

            obj = new Button("btnZero","84","372","62","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.set_taborder("17");
            obj.set_text("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnArTa","212","372","128","53",null,null,null,null,null,null,this);
            obj.set_cssclass("btn_calcu_ty01");
            obj.getSetter("domainId").set("T1022");
            obj.set_taborder("18");
            obj.set_text("타점");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoChoice","24","160","316","21",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_columncount("3");
            obj.set_cssclass("rad_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsCodeRadio");
            obj.set_taborder("19");
            obj.set_visible("true");
            obj.set_text("P");
            obj.set_value("P");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTrucYn","24","40","116","21",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_columncount("3");
            obj.set_cssclass("rad_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsCodeYn");
            obj.set_taborder("20");
            obj.set_visible("true");
            obj.set_text("절사");
            obj.set_value("DOWN");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",360,443,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("cmmCalculator.xfdl","lib::lib_Form.xjs");
        this.registerScript("cmmCalculator.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmPopup.xfdl (공통 팝업페이지)
        *  @FileName 		cmmPopup.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.10.19
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	soojeong 	           최초 생성
        *******************************************************************************
        */

         this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// 최초 톤급별 코드를 정리한다.
        	this.dsCodeTon.clearData();

        	this.dsCodeTon.insertRow(0);
        	this.dsCodeTon.setColumn(0,'CD'    ,'ALL_M');
        	this.dsCodeTon.setColumn(0,'CD_NM' ,'전체 톤급 적용');
        	this.dsCodeTon.setColumn(0,'FILTER',"M");

        	this.dsCodeTon.insertRow(1);
        	this.dsCodeTon.setColumn(1,'CD'    ,'ALL_O');
        	this.dsCodeTon.setColumn(1,'CD_NM' ,'전체 톤급 위수탁 적용');
        	this.dsCodeTon.setColumn(1,'FILTER',"O");

        	this.dsCodeTon.insertRow(2);
        	this.dsCodeTon.setColumn(2,'CD'    ,'ALL_Y');
        	this.dsCodeTon.setColumn(2,'CD_NM' ,'요율단가 적용');
        	this.dsCodeTon.setColumn(2,'FILTER',"M");

        	this.dsCodeTon.insertRow(3);
        	this.dsCodeTon.setColumn(3,'CD'    ,'ALL_Z');
        	this.dsCodeTon.setColumn(3,'CD_NM' ,'요율단가 위수탁 적용');
        	this.dsCodeTon.setColumn(3,'FILTER',"O");

        	// 일반톤급
        	for( var idx = 0; idx < this.opener.dsCodeTonUserList.rowcount; idx++ ) {

        		var nRow = this.dsCodeTon.addRow();
        		var cd   = this.opener.dsCodeTonUserList.getColumn(idx,'CD');
        		var cdNm = this.opener.dsCodeTonUserList.getColumn(idx,'CD_NM') + 'Ton';

        		this.dsCodeTon.setColumn(nRow,'CD'    ,cd);
        		this.dsCodeTon.setColumn(nRow,'CD_NM' ,cdNm);
        		this.dsCodeTon.setColumn(nRow,'FILTER',"M");
        	}



        	// 위수탁
        	for( var idx = 0; idx < this.opener.dsCodeTonR.rowcount; idx++ ) {

        		var nRow = this.dsCodeTon.addRow();
        		var cd   = this.opener.dsCodeTonR.getColumn(idx,'CD');
        		var cdNm = this.opener.dsCodeTonR.getColumn(idx,'CD_NM') + 'Ton(위수탁)';

        		this.dsCodeTon.setColumn(nRow,'CD'    ,cd);
        		this.dsCodeTon.setColumn(nRow,'CD_NM' ,cdNm);
        		this.dsCodeTon.setColumn(nRow,'FILTER',"O");
        	}

        	this.cboTon.set_index(0);
        	this.fnFilter();

        	//타이틀세팅
        	if( !this.gfnIsNull(this.getOwnerFrame().paramTitle)){
        		this.set_titletext(this.getOwnerFrame().paramTitle);
        	}

        	this.edtAmt.setFocus();
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
        this.fnParentEvent = function(gubun) {

        	var AR_PER_RATE_AMT     = 'AR_PER_RATE_AMT';			// 요율단가 매출
        	var AP_PER_RATE_AMT     = 'AP_PER_RATE_AMT';			// 요율단가 매입
        	var AR_PER_RATE_JA_AMT	= 'AR_PER_RATE_JA_AMT';			// 요율단가 위수탁 자점
        	var AP_PER_RATE_TA_AMT	= 'AP_PER_RATE_TA_AMT';			// 요율단가 위수탁 타점
        	var TON_HEADER_DEF_AR	= "TON_HEADER_DEFAULT_AR_";
        	var TON_HEADER_DEF_AP	= "TON_HEADER_DEFAULT_AP_";
        	var TON_HEADER_SUB_AR	= "TON_HEADER_SUBSTITUTE_AR_";
        	var TON_HEADER_SUB_AP	= "TON_HEADER_SUBSTITUTE_AP_";
        	var columnIdAr			= null;
        	var columnIdChg			= null;
        	var RATE_CLS_CD_FIX		= '3';	// 매출 & 매입 요율 검증시 대당에 대한 CODE

        	var num  = Number(this.edtAmt.value);

        	if( num === 0 || this.gfnIsNull(num) ) return;

        	var ton  = this.cboTon.value;
        	var code = this.rdoChoice.value;

        	switch( gubun ) {
        		case	'AR'	:	columnIdAr = TON_HEADER_DEF_AR;
        							columnIdChg = TON_HEADER_DEF_AR;
        			break;
        		case	'AP'	:	columnIdAr = TON_HEADER_DEF_AR;
        							columnIdChg = TON_HEADER_DEF_AP;
        			break;
        		// 위수탁 자점 => 톤급당 매출금액을 기준으로 계산
        		case	'JA'	:	columnIdAr = TON_HEADER_DEF_AR;
        							columnIdChg = TON_HEADER_SUB_AR;
        			break;
        		// 위수탁 타점 => 톤급당 매출금액을 기준으로 계산
        		case	'TA'	:	columnIdAr = TON_HEADER_DEF_AR;
        							columnIdChg = TON_HEADER_SUB_AP;
        			break;
        		default : break;
        	}
        	if( columnIdAr === null ) {
        		this.gfnAlert("M0741");
        		return;
        	}

        	var confirmmsg = this.cboTon.text + '\n' + this.edtAmt.value + this.rdoChoice.text + '하시겠습니까?';
        	if( !confirm(confirmmsg) ) return;

        	// 2018.10.29 전체 톤급 적용 요청사항 향후 문제 발생시 각개처리를 위함
        	if( this.cboTon.value === 'ALL_M' || this.cboTon.value === 'ALL_O' ) {

        		// 전체 적용인경우 선택된 전체 Cell을 기준으로 for -> rowindex && for -> cellIndex
        		for( var idx = 0; idx < this.opener.dsRateDtl.rowcount; idx++ ) {

        			var chk	= this.opener.dsRateDtl.getColumn(idx,'CHK');
        			if( chk !== '1' ) continue;

        			// 대당 대당외 제외한다.
        			if( gubun === 'AP' ) {
        				var apRateClsCd	= this.opener.dsRateDtl.getColumn(idx,'AP_RATE_CLS_CD');
        				if( RATE_CLS_CD_FIX !== apRateClsCd ) continue;
        			} else {
        				var arRateClsCd	= this.opener.dsRateDtl.getColumn(idx,'AR_RATE_CLS_CD');
        				if( RATE_CLS_CD_FIX !== arRateClsCd ) continue;
        			}

        			// DataSet의 All Column index를 loop 특정 ColumnId에 전체 적용한다.
        			for( var colIdx = 0; colIdx < this.opener.dsRateDtl.getColCount(); colIdx++ ) {

        				// loop Column정보를 기반으로 선택된 Column과 시작점이 같은 내용을 찾아 적용한다. 톤급은 구분없이 전체 적용이 된다.
        				var colId = this.opener.dsRateDtl.getColID(colIdx);

        				// 적용할 대상인 경우 값을 변경한다.
        				if( colId.indexOf(columnIdAr) !== -1 ) {
        					var nOldValue	= this.opener.dsRateDtl.getColumn(idx,colId);
        					if( this.gfnIsNull(nOldValue) ) nOldValue = 0;
        					var nowValue  = Number(nOldValue);
        					switch( code ) {
        						case	'P'	:	nowValue = nowValue * ( num / 100 );
        							break;
        						case	'A'	:	nowValue = num;
        							break;
        						case	'M'	:	nowValue = nowValue - num;
        							break;
        					}
        					nowValue = this.fnResultNumber(nowValue);
        					// 톤급정보를 찾아야한다.
        					var ton = colId.replace(columnIdAr,'').trim();
        					var setColInfo = columnIdChg + ton;
        					this.opener.dsRateDtl.setColumn(idx,setColInfo,nowValue);
        				}
        			}
        		}

        	} else {

        		columnIdAr = columnIdAr + ton;
        		columnIdChg = columnIdChg + ton;
        		// 2018.11.22 요율단가 적용 요청으로인한 추가사항. ALL_Y: 요율단가 ALL_Z: 위수탁
        		if( this.cboTon.value === 'ALL_Y' || this.cboTon.value === 'ALL_Z' ) {

        			columnIdAr  = AR_PER_RATE_AMT;

        			switch( gubun ) {
        				case	'AR'	:	columnIdChg = AR_PER_RATE_AMT;
        					break;
        				case	'AP'	:	columnIdChg = AP_PER_RATE_AMT;
        					break;
        				// 위수탁 자점 => 톤급당 매출금액을 기준으로 계산
        				case	'JA'	:	columnIdChg = AR_PER_RATE_JA_AMT;
        					break;
        				// 위수탁 타점 => 톤급당 매출금액을 기준으로 계산
        				case	'TA'	:	columnIdChg = AP_PER_RATE_TA_AMT;
        					break;
        				default : break;
        			}
        		}

        		for( var idx = 0; idx < this.opener.dsRateDtl.rowcount; idx++ ) {

        			var chk			= this.opener.dsRateDtl.getColumn(idx,'CHK');
        			var nOldValue	= this.opener.dsRateDtl.getColumn(idx,columnIdAr);

        			if( chk !== '1' ) continue;

        			if( columnIdAr === AR_PER_RATE_AMT ) {
        				// 대당 대당외 제외한다.
        				if( gubun === 'AP' ) {
        					var apRateClsCd	= this.opener.dsRateDtl.getColumn(idx,'AP_RATE_CLS_CD');
        					if( RATE_CLS_CD_FIX === apRateClsCd ) continue;
        				} else {
        					var arRateClsCd	= this.opener.dsRateDtl.getColumn(idx,'AR_RATE_CLS_CD');
        					if( RATE_CLS_CD_FIX === arRateClsCd ) continue;
        				}
        			} else {
        				// 대당 대당외 제외한다.
        				if( gubun === 'AP' ) {
        					var apRateClsCd	= this.opener.dsRateDtl.getColumn(idx,'AP_RATE_CLS_CD');
        					if( RATE_CLS_CD_FIX !== apRateClsCd ) continue;
        				} else {
        					var arRateClsCd	= this.opener.dsRateDtl.getColumn(idx,'AR_RATE_CLS_CD');
        					if( RATE_CLS_CD_FIX !== arRateClsCd ) continue;
        				}
        			}


        			if( this.gfnIsNull(nOldValue) ) nOldValue = 0;

        			var nowValue  = Number(nOldValue);
        			switch( code ) {
        				case	'P'	:	nowValue = nowValue * ( num / 100 );
        					break;
        				case	'A'	:	nowValue = num;
        					break;
        				case	'M'	:	nowValue = nowValue - num;
        					break;
        			}
        			nowValue = this.fnResultNumber(nowValue);
        			this.opener.dsRateDtl.setColumn(idx,columnIdChg,nowValue);
        		}
        	}
        	this.gfnAlert("M0738");
        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /***********************************************************************************************
         * @function	: btnOnClick
         * @description	: 매출 매입 자점 타점 닫기 이벤트
         * @param		: obj	- nexacro.Button
         * @param		: e		- nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.btnOnClick = function(obj,e)
        {
        	var name = obj.name;

        	switch( name ) {

        		case	'btnClose'	: this.close();
        			break;
        		case	'btnAr'		: this.fnParentEvent('AR');
        			break;
        		case	'btnAp'		: this.fnParentEvent('AP');
        			break;
        		case	'btnArJa'	: this.fnParentEvent('JA');
        			break;
        		case	'btnArTa'	: this.fnParentEvent('TA');
        			break;
        		default	: break;
        	}
        };

        /***********************************************************************************************
         * @function	: cboItemChanged
         * @description	: ton 변경 이벤트
         * @param		: obj	- nexacro.Combo
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cboItemChanged = function(obj,e)
        {
        	this.fnFilter();
        };

        /***********************************************************************************************
         * @function	: cmmCalculator_onkeydown
         * @description	: form key Down edit value change
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cmmCalculator_onkeydown = function(obj,e)
        {
        /*
        	var key = e.keycode;
        	switch(key) {
        		// 1
        		case	49 : this.btnOne.click();
        			break;
        		case	97 : this.btnOne.click();
        			break;
        		// 2
        		case	50 : this.btnTwo.click();
        			break;
        		case	98 : this.btnTwo.click();
        			break;
        		// 3
        		case	51 : this.btnThree.click();
        			break;
        		case	99 : this.btnThree.click();
        			break;
        		// 4
        		case	52 : this.btnFour.click();
        			break;
        		case	100 : this.btnFour.click();
        			break;
        		// 5
        		case	53 : this.btnFive.click();
        			break;
        		case	101 : this.btnFive.click();
        			break;
        		// 6
        		case	54 : this.btnSix.click();
        			break;
        		case	102 : this.btnSix.click();
        			break;
        		// 7
        		case	55 : this.btnSeven.click();
        			break;
        		case	103 : this.btnSeven.click();
        			break;
        		// 8
        		case	56 : this.btnEight.click();
        			break;
        		case	104 : this.btnEight.click();
        			break;
        		// 9
        		case	57 : this.btnNine.click();
        			break;
        		case	105 : this.btnNine.click();
        			break;
        		// 0
        		case	18 : this.btnZero.click();
        			break;
        		case	96 : this.btnZero.click();
        			break;
        	}
        	*/
        };

        /***********************************************************************************************
         * @function	: fnFilter
         * @description	: 매입 매출등 버튼 enable 제어
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnFilter = function() {

        	var text    = this.cboTon.text;
        	var row		= this.dsCodeTon.findRowExpr('CD_NM == "' + text + '"');
        	var nFilter = this.dsCodeTon.getColumn(row,'FILTER');

        	if( nFilter === 'M' ) {
        		this.btnArJa.set_enable(false);
        		this.btnArTa.set_enable(false);
        		this.btnAr.set_enable(true);
        		this.btnAp.set_enable(true);
        	} else if( nFilter === 'O' ) {
        		this.btnArJa.set_enable(true);
        		this.btnArTa.set_enable(true);
        		this.btnAr.set_enable(false);
        		this.btnAp.set_enable(false);
        	}
        }

        /***********************************************************************************************
         * @function	: cmmCalculator_onkeydown
         * @description	: form key Down edit value change
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.btnNumber = function(obj,e)
        {
        	var name   = obj.name;
        	var row    = this.dsCodeNumber.findRowExpr('CD_NM == "' + name + '"');
        	var edtVal = this.edtAmt.value;
        	var sRet   = edtVal + "" + this.dsCodeNumber.getColumn(row,'CD');
        	this.edtAmt.set_value(sRet);
        	this.edtAmt.set_value(Number(this.edtAmt.value));
        };

        /***********************************************************************************************
         * @function	: fnResultNumber
         * @description	: 올림 내림으로 현재값을 반환한다.
         * @param		: num	- Number
         * @return N/A
        /***********************************************************************************************/
        this.fnResultNumber = function(num) {

        	var result = 0;
        	// 절사여부
        	var trucYn = this.rdoTrucYn.value;
        	// 올림
        	if( trucYn === 'UP' ) {
        		result = nexacro.ceil(num);
        	// 내림
        	} else if( trucYn === 'DOWN' ) {
        		result = nexacro.floor(num);
        	}

        	return result;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onkeydown",this.cmmCalculator_onkeydown,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOne.addEventHandler("onclick",this.btnNumber,this);
            this.btnClose.addEventHandler("onclick",this.btnOnClick,this);
            this.cboTon.addEventHandler("onitemchanged",this.cboItemChanged,this);
            this.btnTwo.addEventHandler("onclick",this.btnNumber,this);
            this.btnThree.addEventHandler("onclick",this.btnNumber,this);
            this.btnAr.addEventHandler("onclick",this.btnOnClick,this);
            this.btnFour.addEventHandler("onclick",this.btnNumber,this);
            this.btnFive.addEventHandler("onclick",this.btnNumber,this);
            this.btnSix.addEventHandler("onclick",this.btnNumber,this);
            this.btnAp.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSeven.addEventHandler("onclick",this.btnNumber,this);
            this.btnEight.addEventHandler("onclick",this.btnNumber,this);
            this.btnNine.addEventHandler("onclick",this.btnNumber,this);
            this.btnArJa.addEventHandler("onclick",this.btnOnClick,this);
            this.btnZero.addEventHandler("onclick",this.btnNumber,this);
            this.btnArTa.addEventHandler("onclick",this.btnOnClick,this);
        };

        this.loadIncludeScript("cmmCalculator.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
