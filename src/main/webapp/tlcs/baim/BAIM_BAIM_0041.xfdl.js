(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_BAIM_0041");
            this.set_titletext("고객사관리(창고&배송 공통)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1</Col><Col id=\"QUERY_LIST\">q1=MS005</Col></Row><Row><Col id=\"SVC_ID\">saveCustList</Col><Col id=\"IN_DATASET_LIST\">dsList=dsList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCustMgmtService</Col><Col id=\"SERVICE_METHOD\">saveCustList</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">deleteCustList</Col><Col id=\"IN_DATASET_LIST\">dsList=dsList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCustMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteCustList</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getCustList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCustMgmtService</Col><Col id=\"SERVICE_METHOD\">getCustList</Col></Row><Row><Col id=\"SVC_ID\">getZipAddrInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=gdsAddrSearch</Col><Col id=\"OUT_DATASET_LIST\">dsZipAddrInfo=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getZipAddrInfoList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CP_DV\">ADMIN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ROAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv_sc", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddrSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_ADDR_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DETAIL_ADDR\">ADMIN</Col></Row></Rows>");
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
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"467","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"115\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"91\"/><Column size=\"210\"/><Column size=\"132\"/><Column size=\"124\"/><Column size=\"175\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"고객사코드\"/><Cell col=\"3\" text=\"고객사명\"/><Cell col=\"4\" text=\"사업자등록번호\"/><Cell col=\"5\" text=\"고객사구분\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"전화번호\"/><Cell col=\"8\" text=\"팩스번호\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CUST_ID\"/><Cell col=\"3\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ENTRP_REG_NO\" displaytype=\"mask\" maskeditformat=\"###-##-#####\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:CP_DV\" displaytype=\"combotext\" combodataset=\"dsCpDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"6\" text=\"bind:FULL_ADDR\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TEL_NO\"/><Cell col=\"8\" text=\"bind:FAX_NO\"/><Cell col=\"9\" text=\"bind:CAUTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grd_Main:5","stSearch:3","430",null,null,"0",null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("5");
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

            obj = new Static("sta001","0","0","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("고객사코드");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00","119","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtCustId","123","3",null,"23","3",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("14");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("normal");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_inputtype("normal,english,number");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("17");
            obj.set_text("고객사명");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00","119","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("19");
            obj.set_text("사업자등록번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","119","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","123","32","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_password("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","87","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("21");
            obj.set_text("고객사구분");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","119","87",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","0","174","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("23");
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","174",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","0","203","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("25");
            obj.set_text("팩스번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","119","203",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00","0","232","120","80",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("27");
            obj.set_text("비고");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","119","232",null,"80","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboTel1","123","177","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("7");
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00","200","179","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("29");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtTel2","218","177","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("8");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02","305","179","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("30");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtTel3","323","177","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("9");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo3","323","206","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("12");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02_00","305","208","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("31");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo2","218","206","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("11");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","200","208","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("32");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboFaxNo1","123","206","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("10");
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_01","0","116","120","59",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("33");
            obj.set_text("주소");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_01","119","116",null,"59","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo","123","120","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01_req");
            obj.set_format("###-###");
            obj.set_type("string");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr1","198","120","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtAddr","222","120","205","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtAddr00","123","147","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new TextArea("txtCaution","123","236","304","72",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("inp_ty02");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskEntrpRegNo","123","62","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("1");
            obj.set_format("###-##-#####");
            obj.set_limitbymask("both");
            obj.set_type("string");
            obj.set_cssclass("inp_ty01_req");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboCpDv","123","90","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsCpDv");
            obj.set_taborder("2");
            obj.set_text("cboJoinType");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("6");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","44","55","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("7");
            obj.set_text("고객사명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","89","43","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staShpr","240","44","63","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0160");
            obj.set_taborder("8");
            obj.set_text("고객사코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","314","43","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staShpr00","470","44","63","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0160");
            obj.set_taborder("9");
            obj.set_text("고객사구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCpDv_sc","546","43","111","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsCpDv_sc");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab00.Tabpage1.form.divTab1.form.edtCustId","value","dsList","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab00.Tabpage1.form.divTab1.form.edtCustNm","value","dsList","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage1.form.divTab1.form.mskEntrpRegNo","value","dsList","ENTRP_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.divTab1.form.cboCpDv","value","dsList","CP_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage1.form.divTab1.form.mskZipNo","value","dsList","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage1.form.divTab1.form.edtAddr","value","dsList","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage1.form.divTab1.form.edtAddr00","value","dsList","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab00.Tabpage1.form.divTab1.form.cboTel1","value","dsList","TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab00.Tabpage1.form.divTab1.form.edtTel2","value","dsList","TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab00.Tabpage1.form.divTab1.form.edtTel3","value","dsList","TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab00.Tabpage1.form.divTab1.form.cboFaxNo1","value","dsList","FAX_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab00.Tabpage1.form.divTab1.form.edtFaxNo2","value","dsList","FAX_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab00.Tabpage1.form.divTab1.form.edtFaxNo3","value","dsList","FAX_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab00.Tabpage1.form.divTab1.form.txtCaution","value","dsList","CAUTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","cboCpDv_sc","value","dsSearch","CP_DV");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0041.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0041.xfdl", function() {
        /**
        *  관리자등록(시스템관리자용)
        *  @MenuPath
        *  @FileName 		SYST_MNG_0010.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.07.09
        *  @Desction        품목관리
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.07.09		Kim Jin Hwan			최초 생성
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
        var checkDupIdFlag = false; // 아이디 중복체크


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
         * @function	: fnSearch
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {


        	// 조회조건 필수입력 체크

        	this.dsList.clearData();
        	this.gfnTransaction("getCustList");

        };


        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 신규추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function() {

        	// 이미 추가되어 있는경우 행 추가 안함.
        	var nRowType = this.dsList.getRowType(this.dsList.rowposition);

        	if(nRowType == Dataset.ROWTYPE_INSERT) return;


        	var nRow = this.dsList.addRow();

        	this.dsList.setColumn(nRow, "CHK", "1");




        	// 고객사명 포커스
        	this.tab00.Tabpage1.form.divTab1.form.edtCustNm.setFocus();
        };



        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제처리.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function() {

        	//하나라도 체크를 해야함
            if(this.dsList.getCaseCount("CHK==1") <= 0) {
        		this.gfnAlert("1건 이상 선택해야합니다.");
        		return;
            }


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		// 트랜잭션 호출 (삭제)
        		this.gfnTransaction("deleteCustList");
        	});

        };



        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	//하나라도 체크를 해야함
            if(this.dsList.getCaseCount("CHK==1") <= 0) {
        		this.gfnAlert("1건 이상 선택해야합니다.");
        		return;
            }


        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	for( var i=0; i<this.dsList.rowcount; i++){

        		var nRowChk = this.dsList.getColumn(i, "CHK");

        		// 체크되지 않은 행 스킵.
        		if( nRowChk != "1") continue;

        		var nCustNmValue = this.dsList.getColumn(i, "CUST_NM");
        		var nEntrpRegNoValue = this.dsList.getColumn(i, "ENTRP_REG_NO");
        		var nCpDvValue = this.dsList.getColumn(i, "CP_DV");
        		var nZipNoValue = this.dsList.getColumn(i, "ZIP_NO");
        		var nAddrValue = this.dsList.getColumn(i, "ADDR");
        		var nDetailAddrValue = this.dsList.getColumn(i, "DETAIL_ADDR");

        		if(this.gfnIsNull(nCustNmValue)){
        			this.gfnAlert((i+1)+"행의 고객사명을 입력해주세요.", "", function(){
        				this.dsList.set_rowposition(i);
        				this.tab00.Tabpage1.form.divTab1.form.edtCustNm.setFocus();
        			});

        			return;
        		}

        		if(this.gfnIsNull(nEntrpRegNoValue)){
        			this.gfnAlert((i+1)+"행의 사업자등록번호를 입력해주세요.", "", function(){
        				this.dsList.set_rowposition(i)
        				this.tab00.Tabpage1.form.divTab1.form.mskEntrpRegNo.setFocus();
        			});

        			return;
        		}else{
        			// 사업자번호 유효성 체크
        			if( !this.fnChkEntrpRegNo(this.gfnTrim(nEntrpRegNoValue)) ){

        				this.gfnAlert((i+1)+"행의 사업자등록번호를 확인해주세요.", "", function(){
        					this.dsList.set_rowposition(i)
        					this.tab00.Tabpage1.form.divTab1.form.mskEntrpRegNo.setFocus();
        				});

        				return;
        			}

        		}

        		if(this.gfnIsNull(nCpDvValue)){
        			this.gfnAlert((i+1)+"행의 고객사구분을 입력해주세요.", "", function(){
        				this.dsList.set_rowposition(i)
        				this.tab00.Tabpage1.form.divTab1.form.cboCpDv.setFocus();
        			});

        			return;
        		}

        		if(this.gfnIsNull(nZipNoValue)){
        			this.gfnAlert((i+1)+"행의 우편번호를 입력해주세요.", "", function(){
        				this.dsList.set_rowposition(i)
        				this.tab00.Tabpage1.form.divTab1.form.mskZipNo.setFocus();
        			});

        			return;
        		}


        		if(this.gfnIsNull(nAddrValue)){
        			this.gfnAlert((i+1)+"행의 주소를 입력해주세요.", "", function(){
        				this.dsList.set_rowposition(i)
        				this.tab00.Tabpage1.form.divTab1.form.edtAddr.setFocus();
        			});

        			return;
        		}

        		if(this.gfnIsNull(nDetailAddrValue)){
        			this.gfnAlert((i+1)+"행의 상세주소를 입력해주세요.", "", function(){
        				this.dsList.set_rowposition(i)
        				this.tab00.Tabpage1.form.divTab1.form.edtDetailAddr.setFocus();
        			});

        			return;
        		}




        		// 도로명
        		if( this.gfnTrim(nZipNoValue).length == "5" ){
        			this.dsList.setColumn(i, "ROAD_YN", "Y");
        		}
        		// 지번
        		else{
        			this.dsList.setColumn(i, "ROAD_YN", "N");
        		}


        	}


        	/****************************************************************************************************/



        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("saveCustList");
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

        		// 조회
        		case "getCustList":
        			this.grd_Main.setCellProperty("head", this.grd_Main.getBindCellIndex("body", "CHK"), "text", '0');
        		break;


        		// 저장
        		case "saveCustList":
        			this.gfnAlert("저장 되었습니다.");
        			this.fnSearch();
        		break;


        		// 삭제
        		case "deleteCustList":
        			this.gfnAlert("삭제 되었습니다.");
        			this.fnSearch();
        		break;


        		// 보내는분 주소 조회처리.
        		case "getZipAddrInfoList":

        			// 1건 조회된 경우 셋팅.
        			if(this.dsZipAddrInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "ZIP_NO", this.dsZipAddrInfo.getColumn(0, "ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "ADDR", this.dsZipAddrInfo.getColumn(0, "ADDR"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.Tabpage1.form.divTab1.form.btnSearchAddr1.click();
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

        		case "searchPopAddr1":
        			if(dsObj.rowcount > 0){
        				this.tab00.Tabpage1.form.divTab1.form.mskZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));		// 우편번호
        				this.tab00.Tabpage1.form.divTab1.form.edtAddr.set_value(dsObj.getColumn(0,"ADDR"));			// 주소
        			}
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
        	// 시스템구분
        	//this.fnAddCodeDef(this.dsSysDv, '선택');

        	// 시스템 구분에 따라 고객사구분 필터링 처리.
        	if(this.objApp.gv_sysDv == "GWDS"){
        		this.dsCpDv.filter("CD == 'CP01' || CD == 'CP02' || CD == 'CP03' ");
        	}
        	else if(this.objApp.gv_sysDv == "GWMS"){
        		this.dsCpDv.filter("CD == 'CP02'");
        	}
        	else if(this.objApp.gv_sysDv == "GDS"){
        		this.dsCpDv.filter("CD == 'CP03'");
        	}
        	else{
        		this.dsCpDv.filter("CD == ''");
        	}

        	// 필터링된 내용만 복사.
        	this.dsCpDv_sc.copyData(this.dsCpDv, true);
        	this.fnAddCodeDef(this.dsCpDv_sc, '전체');
        	this.cboCpDv_sc.set_index(0);
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
        		case "btnSearchAddr1" : this.fnOpenPopAddr(); break;

        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function		: fnOpenPopAddr
         * @description		: 우편번호 주소 조회 팝업 호출
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopAddr = function()
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var zipNo = '';
        	var addr = '';
        	var zipAddrDv = '';


        	popupId = 'searchPopAddr1';
        	zipNo = this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value;
        	addr = this.tab00.Tabpage1.form.divTab1.form.edtAddr.value;

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



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // 그리드 헤더 클릭
        this.grdOnHeadClick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
        };


        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "ID"){
        		checkDupIdFlag = false;
        	}
        };


        /***********************************************************************************************
         * @function	: fnChkEntrpRegNo
         * @description	: 사업자번호 유효성 체크.
         * @param       : entrpNo - String
         * @return N/A
        /***********************************************************************************************/
        this.fnChkEntrpRegNo = function(entrpRegNo)
        {
        	var	temp;
        	if(entrpRegNo.length != 10)
        	{
        		return false;
        	}

        	temp = parseInt(parseInt(entrpRegNo[8])*5/10);
        	/*trace("temp = " +temp);
        	trace(">>>>>"+ parseInt(entrpRegNo[9]) !=
        		(( 10 - (((parseInt(entrpRegNo[0])*1)%10 ) +
        				((parseInt(entrpRegNo[1])*3)%10 ) +
        				((parseInt(entrpRegNo[2])*7)%10 ) +
        				((parseInt(entrpRegNo[3])*1)%10 ) +
        				((parseInt(entrpRegNo[4])*3)%10 ) +
        				((parseInt(entrpRegNo[5])*7)%10 ) +
        				((parseInt(entrpRegNo[6])*1)%10 ) +
        				((parseInt(entrpRegNo[7])*3)%10 ) +
        				temp +
        				((parseInt(entrpRegNo[8])*5)%10 ))%10)%10) );*/
        	if( parseInt(entrpRegNo[9]) !=
        		(( 10 - (((parseInt(entrpRegNo[0])*1)%10 ) +
        				((parseInt(entrpRegNo[1])*3)%10 ) +
        				((parseInt(entrpRegNo[2])*7)%10 ) +
        				((parseInt(entrpRegNo[3])*1)%10 ) +
        				((parseInt(entrpRegNo[4])*3)%10 ) +
        				((parseInt(entrpRegNo[5])*7)%10 ) +
        				((parseInt(entrpRegNo[6])*1)%10 ) +
        				((parseInt(entrpRegNo[7])*3)%10 ) +
        				temp +
        				((parseInt(entrpRegNo[8])*5)%10 ))%10)%10) )
        	{
        		return false;
        	}

        	return true;

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

        	if( e.keycode === 13 ) {

        		obj.updateToDataset();

        		switch( objName ) {
        			case	'mskZipNo' :  this.gfnSearchAddrInfo(this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value, this.tab00.Tabpage1.form.divTab1.form.edtAddr.value); break;
        			case	'edtAddr' :  this.gfnSearchAddrInfo(this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value, this.tab00.Tabpage1.form.divTab1.form.edtAddr.value); break;

        			default	: 	break;
        		}
        	}

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


        /***********************************************************************************************
         * @function		: fnSearchAddrInfo
         * @description		: 주소 정보 조회
         * @param 			: zipNo	- String (우편번호)
         * @param 			: addr	- String (주소)
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSearchAddrInfo = function(zipNo, addr)
        {

        	// 조회조건 셋팅
        	this.dsAddrSearch.setColumn(0, "ZIP_NO", zipNo);
        	this.dsAddrSearch.setColumn(0, "DETAIL_ADDR", addr);


        	// 우편번호가 5자리면 도로명주소로 조회
        	if( this.gfnTrim(zipNo).length == "5" ){
        		this.dsAddrSearch.setColumn(0, "ZIP_ADDR_DV", "02");
        	}
        	else{
        		this.dsAddrSearch.setColumn(0, "ZIP_ADDR_DV", "01");
        	}


        	this.gfnTransaction("getZipAddrInfoList");

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.edtCustId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtCustId.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSearchAddr1.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.divTab1.form.edtAddr.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.edtAddr.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboCpDv.addEventHandler("ondropdown",this.tabUserInfo_Tabpage1_div00_cboJoinType_ondropdown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboCpDv.addEventHandler("onitemchanged",this.tabUserInfo_Tabpage1_div00_cboJoinType_onitemchanged,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.cboCpDv_sc.addEventHandler("canitemchange",this.cboZnDv_canitemchange,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0041.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
