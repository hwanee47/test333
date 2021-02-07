(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameWorkPop");
            this.set_titletext("frameWork");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnClose00",null,null,"22","22","5","793",null,null,null,null,this);
            obj.set_cssclass("btn_pop_img_close");
            obj.set_taborder("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_cssclass("pop_cont");
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","0","0",null,null,"0","0","1566",null,"740",null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("frameTop.xfdl","lib::lib_Form.xjs");
        this.registerScript("frameTop.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath       	frame > frameWorkPop
        *  @FileName 		TOBESOFT.xfdl
        *  @Creator 		TOBESOFT
        *  @CreateDate 		2018.11.19
        *  @Desction        스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2018.11.19     		TOBESOFT 	            최초 생성
        *******************************************************************************
        */

        /***********************************************************************************
        * include 선언부  													               *
        ***********************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;

        /***********************************************************************************/
        /* 폼 전역변수 선언부												               */
        /***********************************************************************************/
        this.objApp;

        /***********************************************************************************************
         * @function: form_onload
         * @description: FORM 온로드
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.objApp = nexacro.getApplication() ;

        	if (system.navigatorname == "nexacro")
        	{
        		// 최대화/최소화 아이콘 활성화 및 타이틀바 사이즈 지정
        		this.getOwnerFrame().titlebar.minbutton.set_visible(true);
        		this.getOwnerFrame().titlebar.maxbutton.set_visible(true);
        		this.getOwnerFrame().set_cssclass("bg_border02");
        	//	this.getOwnerFrame().set_openstatus("maximize" );
        	}

        	// form 로딩시 화면에 표시할 page URL 설정
        	this.divWork.set_url(this.getOwnerFrame().pageUrl);
        	this.set_titletext(this.getOwnerFrame().title) + " 팝업";
        	this.resetScroll();
        };

        /***********************************************************************************************
         * @function: form_onclose
         * @description: workFrame_onclose event
         * @param : obj - form object
         * @param : e - form event
         * @return N/A
        /***********************************************************************************************/
        this.form_onbeforeclose = function(obj,e)
        {
        	if (e.fromobject == "[object Form]" && e.fromobject.name == "frameWorkPop")
        	{
        		var nRow = this.objApp.gdsOpenPopMenu.findRow(this.objApp.gvMenuColumns.winId, this.getOwnerFrame().winkey);
        		if (nRow>-1)
        		{
        			this.objApp.gdsOpenPopMenu.deleteRow(nRow);
        		}
        	}
        };

        /***********************************************************************************************
         * @function: fnWorkFrameClose
         * @description: work frame close event
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnWorkFrameClose = function()
        {
        	this.close();
        }

        /***********************************************************************************************
         * @function: fnMsgCallback
         * @description: 메세지 콜백
         * @param : N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnMsgCallback = function (strId, strVal)
        {
        	if (strId == "confirm.before.movepage")
        	{
        		if (strVal == true)
        		{
        			this.close();
        		}
        	}
        };

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
        this.frameWorkPop_onkeydown = function(obj,e)
        {
        	if(e.keycode == 112){
        		this.gfnOpenHelpPopup();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onkeydown",this.frameWorkPop_onkeydown,this);
            this.btnClose00.addEventHandler("onclick",this.btnClose_onclick,this);
        };

        this.loadIncludeScript("frameTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
