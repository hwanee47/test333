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
            this.set_titletext("문자열 입력창");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,180);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staMsgContent","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("0");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","130",null,"70","23",null,"10",null,null,null,null,this);
            obj.set_cssclass("btn_ty01");
            obj.getSetter("domainId").set("T1119");
            obj.set_fittocontents("width");
            obj.set_taborder("1");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgContent","15","46","300","54",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRtnMsg","15","108","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",330,180,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPushMessage.xfdl", function() {
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
         	this.staMsgContent.set_text(sMsgContent);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 확인버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(this.edtRtnMsg);
        };




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };

        this.loadIncludeScript("cmmPushMessage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
