(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmFilterSetup");
            this.set_titletext("데이터필터설정");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilter", this);
            obj._setContents("<ColumnInfo><Column id=\"columnText\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","5","10",null,"21","5",null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1605");
            obj.set_taborder("0");
            obj.set_text("데이터 필터 설정");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","5","36",null,"316","5",null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsFilter");
            obj.getSetter("checkbox").set("true");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell accessibilitydescription=\"T1603\" text=\"데이터 선택\"/></Band><Band id=\"body\"><Cell text=\"bind:columnText\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","101","362","45","28",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1119");
            obj.set_taborder("2");
            obj.set_tabstop("true");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","149","362","45","28",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T1010");
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmFilterSetup.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmFilterSetup (공통 그리드필터)
        *  @FileName 		cmmFilterSetup.xfdl
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
        this.sColumnName;

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this); //초기화[필수]

        	//초기값 설정
        	var objBindDs = this.parent.pvBindDs;
        	var objFilterDs = this.parent.pvFilterDs;
        	this.sColumnName = this.parent.pvColumnName;

        	this.dsFilter.copyData(objFilterDs);

        	this.grdList.setCellProperty("Head", 0, "text", "1");	//처음 전체선택
        	this.grdList.setCellProperty("Body", 1, "text", "bind:"+this.sColumnName);
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
        * @description 필터설정
        */
        this.fnSetColumn = function()
        {
        	//체크값 확인
        	this.dsFilter.filter("selectCheck==1");
        	this.dsCopy.copyData(this.dsFilter, true);

        	var objFilter = this.dsCopy;
        	var sFilterStr="";
        	for (var i=0; i<objFilter.rowcount; i++)
        	{
        		if (objFilter.getColumn(i, "selectCheck") == "1")
        		{
        			sFilterStr += this.sColumnName+" == '"+ objFilter.getColumn(i, this.sColumnName) + "' ||";
        		}
        	}
        	sFilterStr = sFilterStr.substr(0, sFilterStr.length-3);
        	//리턴값설정
        	var rtnArr = {pvBindDs:this.parent.pvBindDs, pvFilterDs:this.parent.pvFilterDs, pvFilterStr:sFilterStr};
        	//array, object인자값 전달을 위해 부모창에 함수 호출
        	this.opener.gfnPopupClose(rtnArr, this);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        /**
        * @description  확인버튼클릭
        */
        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSetColumn();
        };

        /**
        * @description  취소버튼클릭
        */
        this.Button01_onclick = function(obj,e)
        {
        	this.close();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };

        this.loadIncludeScript("cmmFilterSetup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
