(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_background("#fcfcfc");
            this.set_name("frameBottom");
            this.set_titletext("frameBottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1598,36);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divBottom","30","0",null,"28","30",null,null,null,null,null,this);
            obj.set_background("#b2b6c5");
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stcStatus","17","0",null,"28","400",null,null,null,null,null,this.divBottom.form);
            obj.getSetter("domainId").set("T1616");
            obj.set_taborder("0");
            obj.set_text("로딩이완료되었습니다.");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("stcMenuId",null,"0","250",null,"20","0",null,null,null,null,this.divBottom.form);
            obj.set_taborder("1");
            obj.set_textAlign("right");
            this.divBottom.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1598,36,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frameBottom02.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("frameBottom02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
