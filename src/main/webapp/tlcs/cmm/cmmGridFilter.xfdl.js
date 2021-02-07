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
            this.set_name("cmmGridFilter");
            this.set_titletext("그리드 필터");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFilterType", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" size=\"256\" type=\"STRING\"/><Column id=\"name\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/><Row><Col id=\"code\">=</Col><Col id=\"name\">같은</Col></Row><Row><Col id=\"code\">&gt;</Col><Col id=\"name\">보다 큰</Col></Row><Row><Col id=\"code\">&lt;</Col><Col id=\"name\">보다 작은</Col></Row><Row><Col id=\"code\">!=</Col><Col id=\"name\">같지않는</Col></Row><Row><Col id=\"code\">like</Col><Col id=\"name\">포함하는</Col></Row><Row><Col id=\"code\">nolike</Col><Col id=\"name\">포함하지 않는</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFilter", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" size=\"256\" type=\"STRING\"/><Column id=\"filtertype\" size=\"256\" type=\"STRING\"/><Column id=\"columid\" size=\"256\" type=\"STRING\"/><Column id=\"filtervalue\" size=\"256\" type=\"STRING\"/><Column id=\"displaytype\" size=\"256\" type=\"STRING\"/><Column id=\"combocodecol\" size=\"256\" type=\"STRING\"/><Column id=\"combodatacol\" size=\"256\" type=\"STRING\"/><Column id=\"combodataset\" size=\"256\" type=\"STRING\"/><Column id=\"col\" size=\"256\" type=\"INT\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTemp", this);
            obj.set_enableevent("true");
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_loadfiltermode("keep");
            obj.set_loadkeymode("keep");
            obj.set_reversesubsum("false");
            obj.set_updatecontrol("true");
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"title\" size=\"256\" type=\"STRING\"/><Column id=\"col\" size=\"256\" type=\"INT\"/><Column id=\"body\" size=\"256\" type=\"STRING\"/><Column id=\"filtertype\" size=\"256\" type=\"STRING\"/><Column id=\"displaytype\" size=\"256\" type=\"STRING\"/><Column id=\"edittype\" size=\"256\" type=\"STRING\"/><Column id=\"combodatacol\" size=\"256\" type=\"STRING\"/><Column id=\"combocodecol\" size=\"256\" type=\"STRING\"/><Column id=\"combodataset\" size=\"256\" type=\"STRING\"/><Column id=\"filtervalue\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","11","30","569","300",null,null,null,null,null,null,this);
            obj.set_autofittype("col");
            obj.set_binddataset("dsFilter");
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/><Column size=\"66\"/><Column size=\"190\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell accessibilitydescription=\"T2019\" text=\"컬럼명\"/><Cell accessibilitydescription=\"T2046\" col=\"1\" text=\"필터기준\"/><Cell accessibilitydescription=\"T1983\" col=\"2\" text=\"찾을조건\"/></Band><Band id=\"body\"><Cell combocodecol=\"columnId\" combodatacol=\"columnName\" combodataset=\"dsFilterCol\" displaytype=\"text\" edittype=\"none\" text=\"bind:title\"/><Cell col=\"1\" combocodecol=\"code\" combodatacol=\"name\" combodataset=\"dsFilterType\" displaytype=\"combocontrol\" edittype=\"combo\" text=\"bind:filtertype\"/><Cell col=\"2\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:filtervalue\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnFilterCancel","456","6","66","20",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T2047");
            obj.set_taborder("1");
            obj.set_text("필터취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp","524","6","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("△");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown","553","6","26","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("▽");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFilter","444","335","66","24",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0832");
            obj.set_taborder("4");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","512","335","66","24",null,null,null,null,null,null,this);
            obj.getSetter("domainId").set("T0237");
            obj.set_taborder("5");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",590,370,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmGridFilter.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath        cmm > cmmGridFilter
        *  @FileName 		cmmGridFilter.xfdl
        *  @Creator 		soojeong
        *  @CreateDate 		2017.10.31
        *  @Desction        그리드 필터를 수행할 공통팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.10.31     	soojeong 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvTargetGrid; 	  //대상그리드 OBJECT
        this.fvTargetDataset; //대상데이터셋 OBJECT

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	//this.gfnFormOnLoad(this);
        	this.fvTargetGrid = this.getOwnerFrame().pvGrid;
        	this.fvTargetDataset = this.fvTargetGrid.getBindDataset();

        	this.fnGetHeadText();
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
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fnGetHeadText = function ()
        {
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0;i<this.fvTargetGrid.getCellCount("Body");i++)
            {
                if( this.fvTargetGrid.getCellProperty("Body", i, "displaytype") != "image" )
                {
        			var sText = this.fvTargetGrid.getCellProperty("Body", i, "text");
        			if( sText == "bind:CHK") continue; //공통체크박스 제외
        			var sBind;
        			if ( this.gfnIsNull(sText) == false ){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.dsTemp.addRow();

        				var displaytype = "text";
        				if( this.fvTargetGrid.getCellProperty("Body", i, "displaytype") == "combotext" ||this.fvTargetGrid.getCellProperty("Body", i, "displaytype") == "combocontrol")
        				{
        					displaytype = "combo";

        					// 콤보의 경우는 TEXT로 필터링이 되질않기 때문에 해당 _text 를 동적으로 생성해서 그 값을 이용하도록 한다.
        					var columname = this.fvTargetGrid.getCellProperty("Body", i, "text").substring(5);
        					if( this.gfnIsNull(this.fvTargetDataset.getColumnInfo(columname+"_text")) )
        					{
        						this.fvTargetDataset.set_enableevent(false);
        						this.fvTargetDataset.set_updatecontrol(false);
        						this.fvTargetDataset.addColumn(columname+"_text");
        						for(var j=0;j<this.fvTargetDataset.getRowCount();j++)
        						{
        							this.fvTargetDataset.setColumn(j, columname+"_text", this.fvTargetGrid.getCellText(j, i));
        						}
        						this.fvTargetDataset.set_enableevent(true);
        						this.fvTargetDataset.set_updatecontrol(true);
        					}

        					this.dsTemp.setColumn(nrow, "body", "bind:"+columname+"_text");
        				}
        				else
        				{
        					this.dsTemp.setColumn(nrow, "body", this.fvTargetGrid.getCellProperty("Body", i, "text"));
        				}

        				this.dsTemp.setColumn(nrow, "col", i);
        				this.dsTemp.setColumn(nrow, "displaytype",  displaytype);
        				this.dsTemp.setColumn(nrow, "combocodecol", this.fvTargetGrid.getCellProperty("Body", i, "combocodecol"));
        				this.dsTemp.setColumn(nrow, "combodatacol", this.fvTargetGrid.getCellProperty("Body", i, "combodatacol"));
        				this.dsTemp.setColumn(nrow, "combodataset", this.fvTargetGrid.getCellProperty("Body", i, "combodataset"));
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var i=0;i<this.fvTargetGrid.getCellCount("Head");i++)
            {
                var title  = this.fvTargetGrid.getCellProperty("Head", i,   "text");
                var col    = this.fvTargetGrid.getCellProperty("Head", i,   "col");
                var body   = this.fvTargetGrid.getCellProperty("Body", col, "text");

                //  콤보일때는 _text 로 처리한다.
                var display = this.fvTargetGrid.getCellProperty("Body", col, "displaytype");
                if( display == "combo" )
                {
                    body = "bind:"+body.substring(5)+"_text";
                }

                var nrow = this.dsTemp.findRow("body", body);
                if( nrow != -1 )
                {
                    this.dsTemp.setColumn(nrow, "col",   col);
                    this.dsTemp.setColumn(nrow, "title", title);
                }
            }

        	var filterlist= new Array();
            var filterstr = this.fvTargetDataset.filterstr;
            var tempbuff  = filterstr.split("&&");
            for(var i=0;i<tempbuff.length;i++)
            {
                var columinfo = tempbuff[i].trim();
                var columname   = "";
                var condition   = "";
                var filtertype  = "";
                var filtervalue = columinfo.split("'")[1];

                for(var j=0;j<columinfo.length;j++)
                {
                    if( "1234567890_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".indexOf(columinfo.charAt(j)) == -1 )
                    {
                        columname = columinfo.substring(0, j);
                        condition = columinfo.substring(j);
                        break;
                    }
                }

                // 포함여부
                if( condition.indexOf("indexOf") != -1 )
                {
        			// ITO : 필터 선택 콤보 오류
                    if( condition.indexOf("==") != -1 )
                    {
                        filtertype = "notlike";
                    }
                    else
                    {
                        filtertype = "like";
                    }
                }
                else
                {
                    if( condition.indexOf("==") != -1 )
                    {
                        filtertype = "=";
                    }
                    else if( condition.indexOf("!=") != -1 )
                    {
                        filtertype = "!=";
                    }
                    else if( condition.indexOf(">") != -1 )
                    {
                        filtertype = ">";
                    }
                    else if( condition.indexOf("<") != -1 )
                    {
                        filtertype = "<";
                    }
                }

                filterlist.push({body:"bind:"+columname, filtertype:filtertype, filtervalue:filtervalue});
            }

        	// 이전의 필터조건을 이용해서 설정하고 소팅처리한다.
            for(var i=0;i<filterlist.length;i++)
            {
                var nrow = this.dsTemp.findRow("body", filterlist[i].body);
                this.dsTemp.setColumn(nrow, "col",       -(filterlist.length-i)     );
                this.dsTemp.setColumn(nrow, "filtertype",  filterlist[i].filtertype );
                this.dsTemp.setColumn(nrow, "filtervalue", filterlist[i].filtervalue);
            }

            this.dsTemp.set_keystring("S:col");
            for(var i=0;i<this.dsTemp.getRowCount();i++)
            {
                var body = this.dsTemp.getColumn(i, "body").substring(5);

                var sTitle = this.dsTemp.getColumn(i, "title");
        		if ( this.gfnIsNull(sTitle) == false )
        	    {
        			var nRow = this.dsFilter.addRow();
        			this.dsFilter.setColumn(nRow, "title",       sTitle);
        			this.dsFilter.setColumn(nRow, "filtertype",  (this.gfnIsNull(this.dsTemp.getColumn(i, "filtertype")) == true ? "=" : this.dsTemp.getColumn(i, "filtertype")));
        			this.dsFilter.setColumn(nRow, "filtervalue", this.dsTemp.getColumn(i, "filtervalue"));
        			this.dsFilter.setColumn(nRow, "columid",     body);
        			this.dsFilter.setColumn(nRow, "displaytype", this.dsTemp.getColumn(i, "displaytype"));
        			this.dsFilter.setColumn(nRow, "combocodecol",this.dsTemp.getColumn(i, "combocodecol"));
        			this.dsFilter.setColumn(nRow, "combodatacol",this.dsTemp.getColumn(i, "combodatacol"));
        			this.dsFilter.setColumn(nRow, "combodataset",this.dsTemp.getColumn(i, "combodataset"));
                }
            }
            this.dsFilter.set_rowposition(-1);
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        /**
         * @description 필터취소 버튼클릭이벤트
        */
        this.btnFilterCancel_onclick = function(obj,e)
        {
        	this.fvTargetDataset.set_filterstr("");
        };

        /**
         * @description 업 버튼클릭이벤트
        */
        this.btnUp_onclick = function(obj,e)
        {
        	var currow = this.dsFilter.rowposition;

            if( currow == 0 ) return;

            this.dsFilter.moveRow(currow, --currow);
        };

        /**
         * @description 다운 버튼클릭이벤트
        */
        this.btnDown_onclick = function(obj,e)
        {
        	var currow = this.dsFilter.rowposition;

            if( currow == this.dsFilter.getRowCount()-1 ) return;

            this.dsFilter.moveRow(currow, ++currow);
        };

        /**
         * @description 적용 버튼클릭이벤트
        */
        this.btnSetFilter_onclick = function(obj,e)
        {
        	var dataset = this.fvTargetDataset;
            var filterstr = "";

            for(var i=0;i<this.dsFilter.getRowCount();i++)
            {
                var columid    = this.dsFilter.getColumn(i, "columid");
                var filtervalue= this.dsFilter.getColumn(i, "filtervalue");
                var filtertype = this.dsFilter.getColumn(i, "filtertype");

                if( !this.gfnIsNull(filtertype) && !this.gfnIsNull(filtervalue) )
                {
                    var tempfilter = "";

                    if( filtertype == "=" )
                    {
                        tempfilter = columid+"=='"+filtervalue+"'";
                    }
                    else if( filtertype == "!=" )
                    {
                        tempfilter = columid+"!='"+filtervalue+"'";
                    }
                    else if( filtertype == ">" )
                    {
                        tempfilter = columid+">'"+filtervalue+"'";
                    }
                    else if( filtertype == "<" )
                    {
                        tempfilter = columid+"<'"+filtervalue+"'";
                    }
                    else if( filtertype == "like" )
                    {
                        tempfilter = columid+".indexOf('"+filtervalue+"')!=-1";
                    }
                    else if( filtertype == "notlike" )
                    {
                        tempfilter = columid+".indexOf('"+filtervalue+"')==-1";
                    }

                    if( this.gfnIsNull(filterstr) )
                        filterstr = tempfilter;
                    else
                        filterstr += " && "+tempfilter;
                }
            }

            dataset.set_filterstr(filterstr);
        };

        /**
         * @description 닫기 버튼클릭이벤트
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
            this.btnFilterCancel.addEventHandler("onclick",this.btnFilterCancel_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.btnSetFilter.addEventHandler("onclick",this.btnSetFilter_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };

        this.loadIncludeScript("cmmGridFilter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
