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
            this.set_name("cmmHelp");
            this.set_titletext("도움말");
            if (Form == this.constructor)
            {
                this._setFormPosition(770,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staMsgContent","0","34",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("0");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","15","0","475","34",null,null,null,null,null,null,this);
            obj.set_cssclass("pop_tit_txt01");
            obj.getSetter("domainId").set("T0167");
            obj.set_taborder("1");
            obj.set_text("도움말");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"6","22","22","15",null,null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle00_00","10","49","595","241",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("3");
            obj.set_text("# 사용자 단축키 #\r\n F1 - 도움말\r\n F2 - 조회\r\n F3 - 신규\r\n F4 - 저장\r\n F5 - 삭제\r\n F6 - 엑셀\r\n F7 - 출력\r\n F9 - 팝업에서 선택\r\n ESC - 팝업닫기");
            obj.set_textAlign("left");
            obj.set_verticalAlign("top");
            obj.set_font("bold 16px/normal \"나눔고딕\"");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",770,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmHelp.xfdl", function() {
        /**
        *  도움말 팝업
        *  @MenuPath
        *  @FileName 		cmmHelp.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate		2020.04.01
        *  @Desction
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.04.01		Kim Jin Hwan			최초 생성
        ************************************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {

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

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.stTitle00_00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
            this.stTitle00_00.addEventHandler("onclick",this.stTitle00_00_onclick,this);
        };

        this.loadIncludeScript("cmmHelp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
