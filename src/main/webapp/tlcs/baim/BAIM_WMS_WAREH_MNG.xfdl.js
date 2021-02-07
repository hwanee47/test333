(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_WMS_WAREH_MNG");
            this.set_titletext("창고관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsWarehType=ds1</Col><Col id=\"QUERY_LIST\">q1=MS101</Col></Row><Row><Col id=\"SVC_ID\">saveWarehList</Col><Col id=\"SERVICE_BEANNAME\">baimWarehMgmtService</Col><Col id=\"SERVICE_METHOD\">saveWarehList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsWarehList=dsWarehList:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getWarehList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsWarehList=dsWarehList</Col><Col id=\"SERVICE_BEANNAME\">baimWarehMgmtService</Col><Col id=\"SERVICE_METHOD\">getWarehList</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">deleteWarehList</Col><Col id=\"IN_DATASET_LIST\">dsWarehList=dsWarehList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimWarehMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteWarehList</Col></Row><Row><Col id=\"SVC_ID\">getZipAddrInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=gdsAddrSearch</Col><Col id=\"OUT_DATASET_LIST\">dsZipAddrInfo=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getZipAddrInfoList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"WAREH_CD\" size=\"256\" type=\"STRING\"/><Column id=\"WAREH_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWarehType", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWarehList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn_sc", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZipAddrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ADDR\" size=\"100\" type=\"STRING\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"465","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsWarehList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"123\"/><Column size=\"160\"/><Column size=\"88\"/><Column size=\"268\"/><Column size=\"268\"/><Column size=\"90\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"창고코드\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"창고명\"/><Cell col=\"4\" accessibilitydescription=\"T0199\" text=\"창고유형\"/><Cell col=\"5\" accessibilitydescription=\"T0199\" text=\"주소\"/><Cell col=\"6\" accessibilitydescription=\"T0199\" text=\"설명\"/><Cell col=\"7\" accessibilitydescription=\"T0278\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_CD\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_NM\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_TYPE\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"none\" text=\"bind:FULL_ADDR\" textAlign=\"left\"/><Cell col=\"6\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_DESC\" textAlign=\"left\"/><Cell col=\"7\" editautoselect=\"true\" edittype=\"none\" text=\"bind:USE_YN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsUseYn_sc\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUseYn_sc","86","43","111","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsUseYn_sc");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","25","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("3");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grd_Main:5","stSearch:3","430",null,null,"0",null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.getSetter("domainId").set("T2125");
            obj.set_tabbuttonheight("30");
            obj.set_text("기본정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("divTab1","0","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00","119","232",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("33");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta06","0","0","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("창고코드");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search","119","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("16");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1429");
            obj.set_taborder("17");
            obj.set_text("창고명");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search00","119","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("18");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1726");
            obj.set_taborder("19");
            obj.set_text("창고유형");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search01","119","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("20");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta04","0","87","120","59",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1723");
            obj.set_taborder("21");
            obj.set_text("주소");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search12","119","87",null,"59","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("22");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta07","0","145","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1797");
            obj.set_taborder("23");
            obj.set_text("전화번호");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search03","119","145",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("24");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta08","0","174","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1268");
            obj.set_taborder("25");
            obj.set_text("팩스번호");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search04","119","174",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("26");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search05","119","203",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("27");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtWarehCd","123","3","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_inputmode("upper");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr","198","91","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_search01");
            obj.set_taborder("4");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtWarehNm","123","32","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_taborder("1");
            obj.set_password("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboTelNo1",null,"148","75","23","232",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("7");
            obj.set_innerdataset("dsTelCd");
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00","200","150","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("28");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtTelNo2","218","148","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("8");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02","305","150","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("29");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtTelNo3","323","148","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("9");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboFaxNo1",null,"177","75","23","232",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("10");
            obj.set_innerdataset("dsTelCd");
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","200","179","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("30");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo2","218","177","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("11");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02_00","305","179","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("31");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo3","323","177","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("12");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00","0","203","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("32");
            obj.set_text("사용여부");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","123","206","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsUseYn");
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00","0","232","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("34");
            obj.set_text("창고설명");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtWarehDesc","123","235","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("14");
            obj.set_password("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtAddr","222","91","205","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_password("false");
            obj.set_readonly("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","123","118","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_taborder("6");
            obj.set_password("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboWarehType","123","61","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsWarehType");
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo","123","91","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01_req");
            obj.set_format("###-###");
            obj.set_type("string");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","399","34",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("6");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab00.Tabpage1.form.divTab1.form.edtWarehCd","value","dsWarehList","WAREH_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab00.Tabpage1.form.divTab1.form.edtWarehNm","value","dsWarehList","WAREH_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage1.form.divTab1.form.cboWarehType","value","dsWarehList","WAREH_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage1.form.divTab1.form.edtAddr","value","dsWarehList","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage1.form.divTab1.form.edtDetailAddr","value","dsWarehList","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage1.form.divTab1.form.cboUseYn","value","dsWarehList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab00.Tabpage1.form.divTab1.form.cboTelNo1","value","dsWarehList","TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab00.Tabpage1.form.divTab1.form.edtTelNo2","value","dsWarehList","TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab00.Tabpage1.form.divTab1.form.edtTelNo3","value","dsWarehList","TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab00.Tabpage1.form.divTab1.form.cboFaxNo1","value","dsWarehList","FAX_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab00.Tabpage1.form.divTab1.form.edtFaxNo2","value","dsWarehList","FAX_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab00.Tabpage1.form.divTab1.form.edtFaxNo3","value","dsWarehList","FAX_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab00.Tabpage1.form.divTab1.form.edtWarehDesc","value","dsWarehList","WAREH_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","cboUseYn_sc","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.divTab1.form.mskZipNo","value","dsWarehList","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_WMS_WAREH_MNG.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_WMS_WAREH_MNG.xfdl", function() {
        /**
        *  창고관리
        *  @MenuPath
        *  @FileName 		BAIM_WMS_WAREH_MNG.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.03.04
        *  @Desction        창고관리
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.04		Kim Jin Hwan			최초 생성
        ************************************************************************************************
        */

        /************************************************************************************************
        * include 선언부																				*
         ************************************************************************************************/
        this.executeIncludeScript("lib::lib_Form.xjs"); /*include "lib::lib_Form.xjs"*/;


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
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
        	//nexacro application
        	this.objApp = nexacro.getApplication() ;

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);

        	// 초기화
        	this.fnInit();
        };


         /***********************************************************************************************
         * @function	: form_onload
         * @description	: FORM init
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.EventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnInit = function(obj,e)
        {
        	// 공통코드조회
        	this.gfnTransaction("commonCode");
        };


        /***********************************************************************************************
         * @function	: btnOnClick
         * @description	: 버튼이벤트 제어
         * @param		: obj - nexacro.Button
         * @param		: e - nexacro.ClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.btnOnClick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		// 조회
        		case "btnSearch" :
        			this.fnSearch();
        		break;

        		// 저장
        		case "btnSave" :
        			this.fnSave();
        		break;

        		// 신규
        		case "btnAdd":
        			this.fnAdd();
        		break;

        		// 삭제
        		case "btnDelete":
        			this.fnDelete();
        		break;


        		// 초기화
        		case "btnReset" :
        			this.fnInit();
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {


        	// 조회조건 필수입력 체크

        	this.dsWarehList.clearData();

        	this.gfnTransaction("getWarehList");

        };


        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 신규추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function() {

        	var nRow = this.dsWarehList.addRow();

        	this.dsWarehList.setColumn(nRow, "CHK", "1");
        	this.dsWarehList.setColumn(nRow, "WAREH_TYPE", "01");	// 일반창고
        	this.dsWarehList.setColumn(nRow, "USE_YN", "Y");


        };



        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제처리. (사용여부는 미사용으로 변경)
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsWarehList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("삭제할 행을 체크해주세요.");
        		return;
        	}

        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("deleteWarehList");
        	});



        };



        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsWarehList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("저장할 행을 체크해주세요.");
        		return;
        	}


        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	var dsRowCount = this.dsWarehList.getRowCount();

        	for(var i=0; i<dsRowCount; i++){

        		var chkValue = this.dsWarehList.getColumn(i, "CHK");

        		// 체크되지않은 행은 스킵
        		if(chkValue != "1") continue;

        		var nRowType = this.dsWarehList.getRowType(i);

        		// 신규 또는 수정 행만 저장 처리
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}


        		var warehCdValue = this.dsWarehList.getColumn(i, "WAREH_CD");
        		var warehNmValue = this.dsWarehList.getColumn(i, "WAREH_NM");
        		var zipNoValue = this.dsWarehList.getColumn(i, "ZIP_NO");
        		var addrValue = this.dsWarehList.getColumn(i, "ADDR");
        		var detailAddrValue = this.dsWarehList.getColumn(i, "DETAIL_ADDR");

        		// 창고코드
        		if(this.gfnIsNull(warehCdValue)){
        			this.gfnAlert((i+1)+"행의 창고코드를 입력해주세요.", "", function(){
        				this.dsWarehList.set_rowposition(i);
        				this.tab00.Tabpage1.form.divTab1.form.edtWarehCd.setFocus(true);
        			});

        			return;
        		}

        		// 창고명
        		if(this.gfnIsNull(warehNmValue)){
        			this.gfnAlert((i+1)+"행의 창고명을 입력해주세요.", "", function(){

        				this.dsWarehList.set_rowposition(i);
        				this.tab00.Tabpage1.form.divTab1.form.edtWarehNm.setFocus(true);
        			});

        			return;
        		}

        		// 우편번호
        		if(this.gfnIsNull(zipNoValue)){
        			this.gfnAlert((i+1)+"행의 우편번호를 입력해주세요.", "", function(){
        				this.dsWarehList.set_rowposition(i);
        				this.tab00.Tabpage1.form.divTab1.form.mskZipNo.setFocus(true);
        			});

        			return;
        		}

        		// 주소
        		if(this.gfnIsNull(addrValue)){
        			this.gfnAlert((i+1)+"행의 주소를 입력해주세요.", "", function(){
        				this.dsWarehList.set_rowposition(i);
        				this.tab00.Tabpage1.form.divTab1.form.edtAddr.setFocus(true);
        			});

        			return;
        		}

        		// 상세주소
        		if(this.gfnIsNull(detailAddrValue)){
        			this.gfnAlert((i+1)+"행의 주소상세를 입력해주세요.", "", function(){

        				this.dsWarehList.set_rowposition(i);
        				this.tab00.Tabpage1.form.divTab1.form.edtDetailAddr.setFocus(true);

        			});

        			return;
        		}

        	}

        	/****************************************************************************************************/


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveWarehList");
        	});




        };


        /***********************************************************************************************
         * @function: fnCallback
         * @description: 트랜젝션 후 호출 되는 callback 함수.
         * @param : svcID - 서비스 id
         * @param : errorCode - error 코드
         * @param : errorMsg - error 메세지
         * @return N/A
        /***********************************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

        	if(errorCode < 0) {
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 컴포넌트 초기화
        			this.fnCompInit();

        		break;


        		// 저장
        		case "saveWarehList" :
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;


        		// 삭제
        		case "deleteWarehList" :
        			this.fnSearch();
        		break;


        		// 주소 조회처리.
        		case "getZipAddrInfoList":

        			// 1건 조회된 경우 셋팅.
        			if(this.dsZipAddrInfo.getRowCount() == 1){

        				this.dsWarehList.setColumn(this.dsWarehList.rowposition, "ZIP_NO", this.dsZipAddrInfo.getColumn(0, "ZIP_NO"));
        				this.dsWarehList.setColumn(this.dsWarehList.rowposition, "ADDR", this.dsZipAddrInfo.getColumn(0, "ADDR"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.Tabpage1.form.divTab1.form.btnSearchAddr.click();
        			}
        		break;


        		default :
        		break;
        	}
        };

        /***********************************************************************************************
         * @function	: fnPopupCallBack
         * @description	: popup Callback
         * @param		: popupId	- String
         * @param		: dsObj		- nexacro.NormalDataset
         * @return N/A
         ***********************************************************************************************/
        this.fnPopupCallback = function(sPopupId, dsObj)
        {
        	//trace("[fnPopupCallback()] sPopupId["+sPopupId+"] rtnMsg["+JSON.stringify(rtnObj)+"]");

        	switch(sPopupId) {

        		case "popSearchAddr" :
        			this.tab00.Tabpage1.form.divTab1.form.mskZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));	// 우편번호
        			this.tab00.Tabpage1.form.divTab1.form.edtAddr.set_value(dsObj.getColumn(0,"ADDR"));		// 주소

        		break;

        		case "warehPop1" :
        			this.edtWarehCd_sc.set_value(dsObj.getColumn(0,"WAREH_CD"));
        			this.edtWarehNm_sc.set_value(dsObj.getColumn(0,"WAREH_NM"));
        		break;

        		default :
        		break;
        	}
        };



        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/

         /***********************************************************************************************
         * @function: fnCompInit
         * @description: 컴포넌트 초기화 함수.
         * @param  N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCompInit = function()
        {
        	// 사용여부
        	this.fnAddCodeDef(this.dsUseYn_sc, '전체');
        	this.cboUseYn_sc.set_index(0);

        }

         /***********************************************************************************************
         * @function	: fnAfterCodeDef
         * @description	: 코드조회후 선택,전체 추가
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCodeDef = function(dsObj, strText)
        {
        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM', strText);
        }



        /***********************************************************************************************
         * @function		: fnPopOpen
         * @description		: 팝업 화면 오픈
         * @param 			: obj	- Button object
         * @param 			: e		- Button event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPop = function(obj,e)
        {
        	var btnName		= obj.name;

        	switch(btnName)
        	{
        		case "btnSearchAddr" :	this.fnOpenPopAddr(); break;
        		case "btnOpenPopSearchWareh1" : this.fnOpenPopWareh(); break;
        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function		: fnOpenPopAddr
         * @description		: 우편번호 주소 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopAddr = function()
        {
        	// 파라미터 설정
        	var popupId = 'popSearchAddr';	//팝업ID

        	var zipNo = this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value;
        	var addr = this.tab00.Tabpage1.form.divTab1.form.edtAddr.value;
        	var zipAddrDv = '';



        	// 도로명
        	if( this.gfnTrim(zipNo).length == "5" ){
        		zipAddrDv = "02";
        	}
        	// 지번
        	else{
        		zipAddrDv = "01";
        	}


        	// 팝업 호출
        	var oArg = {
        				  pZipNo		: zipNo
        				, pAddr			: addr
        				, pZipAddrDv	: zipAddrDv
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P100.xfdl", oArg, sPopupCallBack, oOption);
        }




        /***********************************************************************************************
         * @function		: fnOpenPopWareh
         * @description		: 화주 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopWareh = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pWarehCdValue = '';	// 창고코드
        	var pWarehNmValue = '';	// 창고명


        	popupId = 'warehPop1';
        	pWarehCdValue = this.edtWarehCd_sc.value;
        	pWarehNmValue = this.edtWarehNm_sc.value;



        	// 팝업 호출
        	var oArg = {
        				  pWarehCd		: pWarehCdValue									// 창고코드
        				, pWarehNm		: pWarehNmValue									// 창고명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P010.xfdl", oArg, sPopupCallBack, oOption);
        }



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.dsWarehList_onrowposchanged = function(obj,e)
        {

        	this.fnSetReadonlyComp(e.newrow);
        };


        // 컴포넌트 활성화/비활성화처리
        this.fnSetReadonlyComp = function(nRow)
        {

        	var nRowType = this.dsWarehList.getRowType(nRow);

        	// 신규
        	if(nRowType == Dataset.ROWTYPE_INSERT){

        		this.tab00.Tabpage1.form.divTab1.form.edtWarehCd.set_enable(true);	// 창고코드

        	}
        	// 신규아닐때
        	else{

        		this.tab00.Tabpage1.form.divTab1.form.edtWarehCd.set_enable(false);	// 창고코드
        	}

        }

        // 그리드 헤더 클릭
        this.grdOnHeadClick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
        };



        /***********************************************************************************************
         * @function	: editOnKeyDown
         * @description	: edit onkeydown
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnEditOnKeyDown = function(obj,e)
        {
        	var objName = obj.name;

        	if( e.keycode == 13 ) {

        		obj.updateToDataset();
        		switch( objName ) {

        			case	'edtWarehCd_sc' : this.btnOpenPopSearchWareh1.click(); break;
        			case	'edtWarehNm_sc' : this.btnOpenPopSearchWareh1.click(); break;
        			case	'mskZipNo' :  this.gfnSearchAddrInfo(this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value, this.tab00.Tabpage1.form.divTab1.form.edtAddr.value); break;
        			case	'edtAddr' :  this.gfnSearchAddrInfo(this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value, this.tab00.Tabpage1.form.divTab1.form.edtAddr.value); break;
        			default	: 	break;
        		}
        	}
        	/*else{
        		switch( objName ) {

        			case	'edtWarehCd_sc' : this.edtWarehNm_sc.set_value(); break;
        			case	'edtWarehNm_sc' : this.edtWarehCd_sc.set_value(); break;

        		}
        	}*/
        };


        /***********************************************************************************************
         * @function	: fnEditOnInput
         * @description	: edit oninput
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.InputEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnEditOnInput = function(obj,e)
        {
        	var objName = obj.name;
        	switch( objName ) {
        		case	'mskZipNo'	: this.tab00.Tabpage1.form.divTab1.form.edtAddr.set_value(''); break;
        		case	'edtAddr'	: this.tab00.Tabpage1.form.divTab1.form.mskZipNo.set_value(''); break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.cboUseYn_sc.addEventHandler("canitemchange",this.cboZnDv_canitemchange,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.sta06.addEventHandler("onclick",this.tab00_Tabpage1_divTab1_sta06_onclick,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSearchAddr.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.divTab1.form.cboUseYn.addEventHandler("ondropdown",this.tabUserInfo_Tabpage1_div00_cboJoinType_ondropdown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboUseYn.addEventHandler("onitemchanged",this.tabUserInfo_Tabpage1_div00_cboJoinType_onitemchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.edtAddr.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.edtAddr.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboWarehType.addEventHandler("ondropdown",this.tabUserInfo_Tabpage1_div00_cboJoinType_ondropdown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboWarehType.addEventHandler("onitemchanged",this.tabUserInfo_Tabpage1_div00_cboJoinType_onitemchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo.addEventHandler("oninput",this.fnEditOnInput,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsWarehList.addEventHandler("onrowposchanged",this.dsWarehList_onrowposchanged,this);
        };

        this.loadIncludeScript("BAIM_WMS_WAREH_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
