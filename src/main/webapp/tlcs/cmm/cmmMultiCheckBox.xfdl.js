(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmMultiCheckbox");
            this.set_titletext("멀티체크박스");
            if (Form == this.constructor)
            {
                this._setFormPosition(155,21);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new CheckBox("checkbox","0","0","150","20",null,null,null,null,null,null,this);
            obj.set_font("10pt \"맑은 고딕\"");
            obj.set_taborder("0");
            obj.set_text("checkbox");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",155,21,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmMultiCheckBox.xfdl", function() {
         /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmMultiCheckbox.xfdl (공통 멀티체크박스)
        *  @FileName 		cmmMultiCheckbox.xfdl
        *  @Creator 			soojeong
        *  @CreateDate 	2017.10.19
        *  @Desction         스크립트 표준 및 주석 표준 정의
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	soojeong 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvFont; 						//폰트사이즈
        this.checkboxinnerdataset; //checkbox dataset
        this.checkboxtextcolumn;	//checkbox textcolumn
        this.truevalue;					//checkbox true value
        this.falsevalue;					//checkbox false value

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this); //초기화[필수]
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
         * @description 초기화
        */
         this.fnInit = function ()
         {
         	this.reload();
        	//체크박스 너비 구하는데 필요한 font를 얻어온다.
        	this.fvFont = this.checkbox.font;

        	//현재 체크박스를 모두 지운다.
        	var arrComp = this.components;
        	var nLength = arrComp.length;
        	for(var i = 0 ; i < nLength; i++)
        	{
        		var comp = arrComp[i];
        		if(comp instanceof nexacro.CheckBox)
        		{
        			this.removeChild(comp.name);
        			comp.destroy();
        			comp = null;
        		}
        	}
         };

        /**
         * @description 공통 체크박스를 위한 셋팅
        */
        this.fnSetValue = function(objDs, sCode, sValue)
        {
        	this.fnInit();

        	var objTarget = this.parent;	 //div

        	this.checkboxinnerdataset = 	objTarget.checkboxinnerdataset; //checkbox dataset
        	this.checkboxtextcolumn	  =	objTarget.checkboxtextcolumn;	//checkbox textcolumn
        	this.truevalue				  =	objTarget.truevalue;					//checkbox true value
        	this.falsevalue				  =	objTarget.falsevalue;					//checkbox false value

        	if( this.gfnIsNull(sCode) ) sCode = this.truevalue;
        	if( this.gfnIsNull(sValue) ) sValue = this.checkboxtextcolumn;

        	while(1)
         	{
         		if (objTarget.name == "divWorkSpace")
         		{
         			break;
         		}
         		else if(objTarget == "[object Form]")
         		{
         			break;
         		}
         		else if(objTarget == "[object Tabpage]" && !this.gfnIsNull(objTarget.url))
         		{
        			break;
         		}
         		else
         		{
         			objTarget = objTarget.parent;
         		}
         	}

        	if( this.gfnIsNull(objDs) ) objDs= objTarget.objects[this.checkboxinnerdataset];
        	//동적 checkbox Component
        	var compChk;

        	var nLeft   = 0;
        	var nTop    = 0;
        	var nWidth  = 80;
        	var nHeight = 21;

        	var nTopSpare = 10;
        	var nLeftSpare = 16;

        	//nWidth 설정
        	nWidth = this.fnGetMaxLangSize(objDs, sValue);

        	for (var i=0; i<objDs.rowcount; i++)
        	{
        		//nLeft 설정 - 현제 체크박스가 div크기를 넘어서면 아래로 내려줌
        		if (this.getOffsetWidth()  < ( nLeft + nWidth + this.vscrollbar.width ) )
        		{
        			nTop = nTop + nHeight + nTopSpare;
        			nLeft = 0;
        		}

        		var sText  = objDs.getColumn(i, sValue);
        		var sChkId = objDs.getColumn(i, sCode);

        		try
        		{
        			compChk = new CheckBox();
        			compChk.init(sChkId, nLeft, nTop, nWidth, nHeight, null, null);
        			compChk.set_text(sText);
        			//compChk.addEventHandler("onclick", this.fn_checkbox_onclick, this);

        			this.addChild(compChk.name, compChk);
        			compChk.show();
        		}
        		catch(e)
        		{
        			trace("error > " + this.name + " > fn_init > " + e);
        		}

        		//nLeft 설정
        		nLeft = nLeft + nLeftSpare + nWidth ;
        	}

        	this.resetScroll();
        };

        /**
         * @description 체크박스 문자열 중 가장 긴 글자
        */
        this.fnGetMaxLangSize = function(objDs, sCol)
        {
        	var nSize    = 60;
        	var nSpare   = 10;
        	var tempSize = 0;

        	for(var i = 0 ; i < objDs.rowcount; i++)
        	{
        		var sValue   = objDs.getColumn(i, sCol);

        		tempSize = nexacro.getTextSize(sValue, this.fvFont).nx + 10;
        		if(nSize < tempSize) nSize = tempSize;
        	}

        	nSize += nSpare;
        	return parseInt(nSize);
        };

        /**
         * @description 부모창에서 value 가져갈 수 있는 함수
        */
        this.fnGetValue = function()
        {
        	var arrCode = [];

        	var nSize = this.components.length;
        	var comp;
        	for(var k = 0 ; k < nSize ; k++)
        	{
        		comp = this.components[k];
        		if(comp instanceof nexacro.CheckBox)
        		{
        			if(comp.value == true || comp.value == 1) arrCode.push(comp.name);
        		}
        	}
        	return arrCode;
        };

        /**
         * @description 부모창에서 text 가져갈 수 있는 함수
        */
        this.fnGetText = function()
        {
        	var arrCode = [];

        	var nSize = this.components.length;
        	var comp;
        	for(var k = 0 ; k < nSize ; k++)
        	{
        		comp = this.components[k];
        		if(comp instanceof nexacro.CheckBox)
        		{
        			if(comp.value == true || comp.value == 1) arrCode.push(comp.text);
        		}
        	}
        	return arrCode;
        };

        /**
         * @description 필수값지정
        */
        this.fnSetRequired = function (bValue)
        {
        	var arrComp =this.components;
        	var nSize =arrComp.length;
        	for ( var i=0; i<nSize; i++)
        	{
        		var objComp = arrComp[i];
        		if(objComp instanceof nexacro.CheckBox)
        		{
        			if (bValue)
        			{
        				objComp.set_background("yellow");
        			}else{
        				objComp.set_background("");
        			}
        		}
        	}
        };
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };

        this.loadIncludeScript("cmmMultiCheckBox.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
