(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commPushMessage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnOk","140",null,"50","20",null,"10",null,null,null,null,this);
            obj.getSetter("domainId").set("T1119");
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"20","0",null,null,null,null,null,this);
            obj.set_background("black");
            obj.set_color("black");
            obj.set_taborder("1");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgContent","15","26","300","85",null,null,null,null,null,null,this);
            obj.set_readonly("true");
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",330,160,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPrompt.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > commPushMessage (푸시 메세지)
        *  @FileName 		commPushMessage.xfdl
        *  @Creator 			ssm
        *  @CreateDate 	2018.06.22
        *  @Desction         메세지팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	ssm 	           최초 생성
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
        	var msg = this.getOwnerFrame().pMsg;
        	this.fnMsgSetting(msg);
        };


         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
         this.fnMsgSetting = function (sMsgContent)
         {
        	this.txtMsgContent.set_value(sMsgContent);
         };

          /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };

        this.loadIncludeScript("cmmPrompt.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
