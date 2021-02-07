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
            this.set_name("cmmPopup");
            this.set_titletext("팝업샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(512,384);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("0");
            obj.set_text("고객사");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","221",null,"70","23",null,"20",null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T0237");
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"5","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",512,384,this,function(p){});
            obj.set_description("");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("cmmPopup.xfdl","lib::lib_Form.xjs");
        this.registerScript("cmmPopup.xfdl", function() {
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
        	//this.gfnFormOnLoad(this); //초기화[필수]
        	trace("paramTitle : " + this.getOwnerFrame().paramTitle);
            trace("paramCode : " + this.getOwnerFrame().paramCode);
            trace("paramNum : " + this.getOwnerFrame().paramNum);
        	trace("paramUrl : " + this.getOwnerFrame().paramUrl);
        	trace("callbackFn : " + this.getOwnerFrame().callbackFn);

        	//타이틀세팅
        	if( !this.gfnIsNull(this.getOwnerFrame().paramTitle)){
        		this.set_titletext(this.getOwnerFrame().paramTitle);
        	}
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

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description popup close
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
        };

        this.loadIncludeScript("cmmPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
