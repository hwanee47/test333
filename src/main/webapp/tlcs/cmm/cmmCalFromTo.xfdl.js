(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalFromTo");
            this.set_titletext("기간달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(220,23);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSelectDay", this);
            obj._setContents("<ColumnInfo><Column id=\"DAY\" size=\"256\" type=\"STRING\"/><Column id=\"COLOR\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("calFrom","0","0","112","24",null,null,null,null,null,null,this);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_taborder("0");
            obj.set_cssclass("cal_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","115","2","8","21",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("calTo","128","0","112","24",null,null,null,null,null,null,this);
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_taborder("0");
            obj.set_cssclass("cal_ty01");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","26","350","260",null,null,null,null,null,null,this);
            obj.set_background("#ffffff");
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"36","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_background("#5a89bd");
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0209");
            obj.set_taborder("0");
            obj.set_text("기간선택");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvClose",null,"8","21","21","8",null,null,null,null,null,this.pdvCal.form);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("1");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("pdvCalFrom","8","43","160","179",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_backgroundcolumn("COLOR");
            obj.set_bordercolumn("COLOR");
            obj.set_datecolumn("DAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_innerdataset("dsSelectDay");
            obj.set_popuptype("none");
            obj.set_showmonthspin("false");
            obj.set_taborder("2");
            obj.set_type("monthonly");
            obj.set_usetrailingday("false");
            obj.set_value("");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("pdvCalTo","180","43","160","179",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_backgroundcolumn("COLOR");
            obj.set_bordercolumn("COLOR");
            obj.set_datecolumn("DAY");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_innerdataset("dsSelectDay");
            obj.set_showmonthspin("false");
            obj.set_taborder("2");
            obj.set_type("monthonly");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvConfirm","108","228","60","21",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T1119");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("확인");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPdvCancle","180","228","60","21",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T1010");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("취소");
            this.pdvCal.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",220,23,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalFromTo.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmCalFromTo (공통 기간달력)
        *  @FileName 		cmmCalFromTo.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.03.09
        *  @Desction         메세지팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	soojeong 	           최초 생성
        *  2017.10.17     	kyk       	           주석 정비
        *  2017.10.26     	soojeong 	           주석 정비및 메세지팝업 공통으로 변경
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.nMaxDay = -1;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);//초기화[필수]
        	this.fnInit(); //달력초기화
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
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정 현재 디폴트="";
        	this.calFrom.set_value("");	//FROM 달력 셋팅
        	this.calTo.set_value("");		//TO 달력 셋팅
        };

        /**
        * @description from 일자 갖고오기
        */
        this.fnGetFromDate = function ()
        {
        	var sDate = this.calFrom.value;
        	return sDate;
        };

        /**
        * @description to 일자 갖고오기
        */
        this.fnGetToDate = function ()
        {
        	var sDate = this.calTo.value;
        	return sDate;
        };

        /**
        * @description from일자 세팅하기
        */
        this.fnSetFromDate = function (sDate)
        {
        	this.calFrom.set_value(sDate);
        };

        /**
        * @description to일자 세팅하기
        */
        this.fnSetToDate = function (sDate)
        {
        	this.calTo.set_value(sDate);
        };

        /**
        * @description enable true/false세팅
        */
        this.fnSetEnable = function (bValue)
        {
        	this.calFrom.set_enable(bValue);
        	this.calTo.set_enable(bValue);
        };

        /**
        * @description readonly true/false세팅
        */
        this.fnSetReadonly = function (bValue)
        {
        	this.calFrom.set_readonly(bValue);
        	this.calTo.set_readonly(bValue);
        };

        /**
        * @description Essential true/false세팅
        */
        this.fnSetEssential  = function (bValue)
        {
        	//CSS Class가있는 경우 클래스설정 임시로 노란표시
        	if(bValue){
        		this.calFrom.set_background("yellow");
        		this.calTo.set_background("yellow");
        	}else{
        		this.calFrom.set_background("");
        		this.calTo.set_background("");
        	}
        };

        /**
        * @description BindItem 생성
        */
        this.fnSetCalFromBindItem = function(sDataset, sColID)
        {
        	var objBindItem = new BindItem();
        	objBindItem.init("CalFromItem", "calFrom", "value", sDataset, sColID);
        	this.addChild("CalFromItem", objBindItem);
        	objBindItem.bind();
        };

        /**
        * @description BindItem 생성
        */
        this.fnSetCalToBindItem = function(sDataset, sColID)
        {
        	var objBindItem = new BindItem();
        	objBindItem.init("CalToItem", "calTo", "value", sDataset, sColID);
        	this.addChild("CalToItem", objBindItem);
        	objBindItem.bind();
        };

        /**
        * @description 기간을 정한다
        */
        this.fnSetPeriodMaxDay = function(nMaxDay)
        {
        	this.nMaxDay = nMaxDay;
        };

        this.fnSetSelectDayBgColor = function(sDate)
        {
        	this.dsSelectDay.clearData();
        	for(var i=0; i < this.nMaxDay; i++){
        		var sNewDate = sDate;
        		var nAddRow  = this.dsSelectDay.addRow();
        		this.dsSelectDay.setColumn(nAddRow, "DAY"  , sNewDate);
        		this.dsSelectDay.setColumn(nAddRow, "COLOR", "#D9E5FF");
        		sDate = this.gfnAddDate(sNewDate, 1);
        	}
        }

        /**
        * @description from일자 to일자 체크
        */
        this.fnSetFromFocus = function()
        {
        	this.calFrom.setFocus();
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */
        this.calFrom_ondropdown = function(obj,e)
        {
        	var sDate = this.gfnGetDate(); //default today = 해당월1일부터 오늘까지

        	//from달력세팅
        	if (this.gfnIsNull(this.calFrom.value)) {
        		this.pdvCal.form.pdvCalFrom.set_value(sDate.substr(0,6) + "01");
        	} else {
        		this.pdvCal.form.pdvCalFrom.set_value(this.calFrom.value);
        	}

        	//TO 달력 셋팅
        	if (this.gfnIsNull(this.calTo.value)) {
        		this.pdvCal.form.pdvCalTo.set_value(sDate);
        	} else {
        		this.pdvCal.form.pdvCalTo.set_value(this.calTo.value);
        	}

        	var oForm = this.parent.parent;
        	var nTop = 0;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}
        	if(this.nMaxDay > 0){
        		this.fnSetSelectDayBgColor(this.gfnAddDate(this.calTo.value, -(this.nMaxDay-1)));
        	}
        	this.pdvCal.trackPopupByComponent(this,nLeft,nTop);
        };

        /**
        * @description 기간 popDiv컴포넌트 확인(적용) 버튼 클릭
        */
        this.pdvCal_btnPdvConfirm_onclick = function(obj,e)
        {
        	var sFromValue = this.pdvCal.form.pdvCalFrom.value;
        	var sToValue   = this.pdvCal.form.pdvCalTo.value;
        	var bTrue      = this.fnChkCalDate(sFromValue, sToValue);
        	if(!bTrue){
        		return;
        	}

        	this.calFrom.set_value(sFromValue);
        	this.calTo.set_value(sToValue);
        	this.pdvCal.closePopup();
        };

        /**
        * @description 기간 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.pdvCal.closePopup();
        };

        /**
        * @description from일자 to일자 체크
        */
        this.fnChkCalDate = function(sFDate, sTDate, sMsg)
        {
        	var nRtnCnt = this.gfnGetDiffDate(sFDate, sTDate);
        	if(nRtnCnt < 0){
        		this.alert(sMsg);
        		return false;
        	}else if(this.nMaxDay > -1 && nRtnCnt >= this.nMaxDay){
        		// this.alert("조회기간은 "+this.nMaxDay+"일을 넘길 수 없습니다.");
        		var arrMaxDay = [this.nMaxDay];
        		this.gfnAlert("M0441", arrMaxDay);
        		return false;
        	}
        	return true;
        };

        this.pdvCal_pdvCalFrom_canchange = function(obj,e)
        {
        	return this.fnChkCalDate(e.postvalue, this.pdvCal.form.pdvCalTo.value, "시작일이 종료일보다 클 수 없습니다.");
        };

        this.calFrom_canchange = function(obj,e)
        {
        	return this.fnChkCalDate(e.postvalue, this.calTo.value, "시작일이 종료일보다 클 수 없습니다.");
        };

        this.pdvCal_pdvCalTo_canchange = function(obj,e)
        {
        	// return this.fnChkCalDate(this.pdvCal.form.pdvCalFrom.value, e.postvalue, "종료일이 시작일보다 작을 수 없습니다.");
        };

        this.calTo_canchange = function(obj,e)
        {
        	// return this.fnChkCalDate(this.calFrom.value, e.postvalue, "종료일이 시작일보다 작을 수 없습니다.");
        };

        this.pdvCal_pdvCalFrom_ondayclick = function(obj,e)
        {
        	if(this.nMaxDay > 0){
        		var sDate  = e.date;
        		this.fnSetSelectDayBgColor(this.gfnAddDate(sDate, -(this.nMaxDay-1)));
        	}
        };

        /**
        * @description from일자 to일자 체크
        */
        this.fnSetFromFocus = function()
        {
        	this.calFrom.setFocus();
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calFrom.addEventHandler("canchange",this.calFrom_canchange,this);
            this.calFrom.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.calTo.addEventHandler("canchange",this.calTo_canchange,this);
            this.calTo.addEventHandler("ondropdown",this.calFrom_ondropdown,this);
            this.pdvCal.form.btnPdvClose.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
            this.pdvCal.form.pdvCalFrom.addEventHandler("canchange",this.pdvCal_pdvCalFrom_canchange,this);
            this.pdvCal.form.pdvCalTo.addEventHandler("canchange",this.pdvCal_pdvCalTo_canchange,this);
            this.pdvCal.form.pdvCalTo.addEventHandler("ondayclick",this.pdvCal_pdvCalFrom_ondayclick,this);
            this.pdvCal.form.btnPdvConfirm.addEventHandler("onclick",this.pdvCal_btnPdvConfirm_onclick,this);
            this.pdvCal.form.btnPdvCancle.addEventHandler("onclick",this.pdvCal_btnPdvCancle_onclick,this);
        };

        this.loadIncludeScript("cmmCalFromTo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
