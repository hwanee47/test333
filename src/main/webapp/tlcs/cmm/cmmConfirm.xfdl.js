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
            this.set_name("cmmConfirm");
            this.set_titletext("확인창");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staMsgContent","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("0");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","15","0","99","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("1");
            obj.set_text("SBLNC");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgContent","15",null,"300","64",null,"40",null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","170",null,"70","25",null,"10",null,null,null,null,this);
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_btm_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","245",null,"70","25",null,"10",null,null,null,null,this);
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_cssclass("btn_btm_ty01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",330,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmConfirm.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmConfirm (공통메세지)
        *  @FileName 		cmmConfirm.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.03.09
        *  @Desction         메세지팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	soojeong 	           최초 생성
        *  2017.10.17     	kyk       	           주석 정비
        *  2017.10.26     	soojeong 	           주석 정비
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]

        	var sContents = this.getOwnerFrame().paramContents;
        	this.fnMsgSetting(sContents);
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
        * @description 메세지설정
        */
          this.fnMsgSetting = function (sMsgContent)
         {
         	//this.staMsgContent.set_text(sMsgContent);
        	this.txtMsgContent.set_value(sMsgContent);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 확인버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	var json = {
        		rtnMsg : true,
        		callFn : this.getOwnerFrame().callbackFn
        	}

        	//this.close(JSON.stringify(json));
        	this.close(true);
        };

        /**
        * @description 취소버튼
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	var json = {
        		rtnMsg : false,
        		callFn : this.getOwnerFrame().callbackFn
        	}

        	//this.close(JSON.stringify(json));
        	this.close(false);
        };



        this.cmmConfirm_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btnOk.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.cmmConfirm_onkeydown,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
        };

        this.loadIncludeScript("cmmConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
