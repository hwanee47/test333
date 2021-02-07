(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_BAIM_0040");
            this.set_titletext("고객사상세관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1 dsB2c=ds2</Col><Col id=\"QUERY_LIST\">q1=MS005 q2=CS033</Col></Row><Row><Col id=\"SVC_ID\">saveEntrpCustInfo</Col><Col id=\"SERVICE_BEANNAME\">baimEntrpCustMgmtService</Col><Col id=\"SERVICE_METHOD\">saveEntrpCustInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsList:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getEntrpCustInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsList=ds1</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"QUERY_LIST\">q1=baimEntrpCustMgmtService.getEntrpCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getZipAddrInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsZipAddrInfo=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getZipAddrInfoList</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">N</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimEntrpCustMgmtService.getEntrpCustInfoListBySendCust</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" size=\"256\" type=\"STRING\"/><Column id=\"CP_DV\" size=\"256\" type=\"STRING\"/><Column id=\"ENTRP_REG_NO\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsB2c", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">거래구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">거래구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B2C\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_PICKUP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_SEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ACDT_RWD_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail_empty", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B2C\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_PICKUP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_SEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ACDT_RWD_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROAD_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FULL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"INCHG_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"DEAL_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"B2C\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_B2C\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_PICKUP_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"MON_FCST_SEL_AMT\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ORD_RCPT_DLCM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ACDT_RWD_LMT\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddrSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_ADDR_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DETAIL_ADDR\">ADMIN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZipAddrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ADDR\" size=\"100\" type=\"STRING\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("1");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","78",null,null,"467","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"40\" band=\"left\"/><Column size=\"115\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"91\"/><Column size=\"210\"/><Column size=\"132\"/><Column size=\"124\"/><Column size=\"175\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"고객사코드\"/><Cell col=\"3\" text=\"고객사명\"/><Cell col=\"4\" text=\"사업자등록번호\"/><Cell col=\"5\" text=\"고객사구분\"/><Cell col=\"6\" text=\"주소\"/><Cell col=\"7\" text=\"전화번호\"/><Cell col=\"8\" text=\"팩스번호\"/><Cell col=\"9\" text=\"비고\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" text=\"bind:CUST_ID\"/><Cell col=\"3\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ENTRP_REG_NO\" displaytype=\"mask\" maskeditformat=\"###-##-#####\" maskedittype=\"string\"/><Cell col=\"5\" text=\"bind:CP_DV\" displaytype=\"combotext\" combodataset=\"dsCpDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"6\" text=\"bind:FULL_ADDR\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:TEL_NO\"/><Cell col=\"8\" text=\"bind:FAX_NO\"/><Cell col=\"9\" text=\"bind:CAUTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grd_Main:5","78","430",null,null,"0",null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("3");
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

            obj = new Static("sta001_00_00_00","0","145","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("21");
            obj.set_text("거래구분");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","119","145",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","0","319","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("23");
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","319",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","0","348","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("25");
            obj.set_text("팩스번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","119","348",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00","0","377","120","80",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("27");
            obj.set_text("비고");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","119","377",null,"80","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboTel1","123","322","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
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

            obj = new Static("sta01_00","200","324","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("29");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtTel2","218","322","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("8");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02","305","324","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("30");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtTel3","323","322","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("9");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo3","323","351","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("12");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02_00","305","353","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("31");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtFaxNo2","218","351","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("11");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","200","353","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("32");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboFaxNo1","123","351","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
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

            obj = new Static("sta001_00_00_00_00_01","0","87","120","59",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("33");
            obj.set_text("주소");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_01","119","87",null,"59","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo","123","91","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01_req");
            obj.set_format("###-###");
            obj.set_type("string");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr","198","91","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtAddr","222","91","205","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtAddr00","123","118","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new TextArea("txtCaution","123","381","304","72",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
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

            obj = new Combo("cboB2C","123","148","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsB2c");
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01","0","174","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("35");
            obj.set_text("거래일자");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01","119","174",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00","0","203","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("37");
            obj.set_text("월예상출하량");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01_00_00","119","203",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00_00","0","232","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("39");
            obj.set_text("월예상매출액");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01_00_00_00","119","232",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00_00_00","0","261","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("41");
            obj.set_text("사고보상한도");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01_00_00_00_00","119","261",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01_00_00_00_00_00","119","290",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00_00_00_00","0","290","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("44");
            obj.set_text("주문접수거래처");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Calendar("calDealStartYmd","123","178","121","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("45");
            obj.set_cssclass("cal_ty02");
            obj.set_value("20200402");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Calendar("calDealEndYmd","264","178","121","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("46");
            obj.set_cssclass("cal_ty02");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo00","123","207","143","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("47");
            obj.set_cssclass("inp_ty02");
            obj.set_type("number");
            obj.set_format("###,###,###");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta06","271","208","30","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("48");
            obj.set_text("BOX");
            obj.set_color("#636883");
            obj.set_font("bold 14px/normal \"Noto Sans Korean Bold\"");
            obj.set_fittocontents("width");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo00_00","123","236","143","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("49");
            obj.set_cssclass("inp_ty02");
            obj.set_type("number");
            obj.set_format("###,###,###");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo00_00_00","123","265","143","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("50");
            obj.set_cssclass("inp_ty02");
            obj.set_type("number");
            obj.set_format("###,###,###");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","246","181","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("51");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtOrdRcptDlcmCd","123","294","90","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("52");
            obj.set_cssclass("inp_ty02");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnSearchEntrpCust2","213","294","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("53");
            obj.set_cssclass("btn_search02");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtOrdRcptDlcmNm","237","294","189","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("54");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty02");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSendCust","0","462","140","33",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("55");
            obj.set_text("발송고객등록");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnOpenPopRegCntr","143","462","140","33",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("56");
            obj.set_text("계약등록");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","44","55","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("4");
            obj.set_text("고객사명");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","89","43","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staShpr","240","44","63","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0160");
            obj.set_taborder("6");
            obj.set_text("고객사코드");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustId_sc","314","43","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item21","tab00.Tabpage1.form.divTab1.form.edtCustId","value","dsList","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab00.Tabpage1.form.divTab1.form.edtCustNm","value","dsList","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab00.Tabpage1.form.divTab1.form.mskEntrpRegNo","value","dsList","ENTRP_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab00.Tabpage1.form.divTab1.form.cboB2C","value","dsList","B2C");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab00.Tabpage1.form.divTab1.form.mskZipNo","value","dsList","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab00.Tabpage1.form.divTab1.form.edtAddr","value","dsList","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab00.Tabpage1.form.divTab1.form.edtAddr00","value","dsList","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab00.Tabpage1.form.divTab1.form.cboTel1","value","dsList","TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab00.Tabpage1.form.divTab1.form.edtTel2","value","dsList","TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab00.Tabpage1.form.divTab1.form.edtTel3","value","dsList","TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab00.Tabpage1.form.divTab1.form.cboFaxNo1","value","dsList","FAX_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab00.Tabpage1.form.divTab1.form.edtFaxNo2","value","dsList","FAX_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab00.Tabpage1.form.divTab1.form.edtFaxNo3","value","dsList","FAX_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab00.Tabpage1.form.divTab1.form.txtCaution","value","dsList","CAUTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab00.Tabpage1.form.divTab1.form.calDealStartYmd","value","dsList","DEAL_START_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab00.Tabpage1.form.divTab1.form.calDealEndYmd","value","dsList","DEAL_END_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tab00.Tabpage1.form.divTab1.form.mskZipNo00","value","dsList","MON_FCST_PICKUP_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tab00.Tabpage1.form.divTab1.form.mskZipNo00_00","value","dsList","MON_FCST_SEL_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tab00.Tabpage1.form.divTab1.form.mskZipNo00_00_00","value","dsList","ACDT_RWD_LMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmCd","value","dsList","ORD_RCPT_DLCM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmNm","value","dsList","ORD_RCPT_DLCM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtCustId_sc","value","dsSearch","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0040.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0040.xfdl", function() {
        /**
        *  기업 고객 등록
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_0040.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.02.12
        *  @Desction        기업 고객 등록
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.12		Kim Jin Hwan			최초 생성
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

        // 폼 접근 변수
        //var divFm = this.div01.form;


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

        	var edtCustId_scValue = this.edtCustId_sc.value;			// 기업고객ID

        	// 조회조건 필수입력 체크
        	/*if(this.gfnIsNull(this.gfnTrim(edtCustId_scValue)) ){
        		this.gfnAlert("기업고객번호를 입력해주세요.");
        		this.edtCustId_sc.setFocus();
        		return;
        	}*/

        	this.gfnTransaction("getEntrpCustInfo");

        };



        /***********************************************************************************************
         * @function	: fnSearchAfterSave
         * @description	: 점소 저장후 정보 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchAfterSave = function(){

        	// 조회조건 init
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);

        	this.gfnTransaction("getEntrpCustInfo");
        }


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
        		var nB2CValue = this.dsList.getColumn(i, "B2C");
        		var nOrdRcptDlcmCdValue = this.dsList.getColumn(i, "ORD_RCPT_DLCM_CD");
        		var nOrdRcptDlcmNmValue = this.dsList.getColumn(i, "ORD_RCPT_DLCM_NM");

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


        		if(this.gfnIsNull(nB2CValue)){
        			this.gfnAlert((i+1)+"행의 거래구분을 선택해주세요.", "", function(){
        				this.dsList.set_rowposition(i)
        				this.tab00.Tabpage1.form.divTab1.form.cboB2C.dropdown();
        			});

        			return;
        		}


        		//주문접수거래처코드가 있는경우 거래처명이 빈칸인 경우 에러처리.
        		if(!this.gfnIsNull(nOrdRcptDlcmCdValue)){

        			if(this.gfnIsNull(nOrdRcptDlcmNmValue)){

        				this.gfnAlert((i+1)+"행의 주문접수거래처명을 입력해주세요.", "", function(){
        					this.dsList.set_rowposition(i)
        					this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmNm.setFocus();
        				});

        				return;

        			}
        		}

        		//주문접수거래처명이 있는경우 거래처코드가 빈칸인 경우 에러처리.
        		if(!this.gfnIsNull(nOrdRcptDlcmNmValue)){

        			if(this.gfnIsNull(edtOrdRcptDlcmCdValue)){

        				this.gfnAlert((i+1)+"행의 주문접수거래처코드를 입력해주세요.", "", function(){
        					this.dsList.set_rowposition(i)
        					this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmCd.setFocus();
        				});

        				return;

        			}
        		}


        		// 우편번호로 구주소인지 신주소인지 구분. 6자리 : 구주소 , 5자리 신주소
        		// 구주소인경우 집배구역(지번)테이블에서 집화점소코드를 조회하여 처리.
        		// 신주소인경우 집배구역(도로명)테이블에서 집화점소코드를 조회하여 처리.

        		// 구주소
        		if( this.gfnRemoveSpecialChar(nZipNoValue).length == 6 ){
        			this.dsList.setColumn(i, "ROAD_YN", "N");
        		}
        		// 신주소
        		else if( this.gfnRemoveSpecialChar(nZipNoValue).length == 5 ){
        			this.dsList.setColumn(i, "ROAD_YN", "Y");
        		}else{
        			this.gfnAlert("우편번호를 확인해주세요.");
        			return;
        		}

        	}




        	/****************************************************************************************************/





        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("saveEntrpCustInfo");
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
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 컴포넌트 초기화
        			this.fnCompInit();

        		break;

        		// 조회
        		case "getEntrpCustInfo":

        		break;

        		// 저장
        		case "saveEntrpCustInfo":

        			this.gfnAlert("저장되었습니다.");
        			this.fnSearchAfterSave();

        		break;


        		// 주소 조회처리.
        		case "getZipAddrInfoList":

        			// 1건 조회된 경우 셋팅.
        			if(this.dsZipAddrInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "ZIP_NO", this.dsZipAddrInfo.getColumn(0, "ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "ADDR", this.dsZipAddrInfo.getColumn(0, "ADDR"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.Tabpage1.form.divTab1.form.btnSearchAddr.click();
        			}
        		break;


        		// 기업고객 조회처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "ORD_RCPT_DLCM_CD", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsList.setColumn(this.dsList.rowposition, "ORD_RCPT_DLCM_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.Tabpage1.form.divTab1.form.btnSearchEntrpCust2.click();
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

        		case "searchPopEntrpCust1" :
        			if(dsObj.rowcount > 0){
        				this.edtCustId_sc.set_value(dsObj.getColumn(0,"CUST_ID"));	// 고객번호
        				this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));	// 고객명

        				this.fnSearch();
        			}
        		break;

        		case "searchPopEntrpCust2" :


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
        	//this.div01.form.cboCpDv.set_index(0);	// 회사구분
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
        		case "btnSearchAddr" :	this.fnOpenPopAddr(btnName); break;
        		case "btnSearchEntrpCust1" : this.fnOpenPopEntrpCust(btnName); break;
        		case "btnSearchEntrpCust2" : this.fnOpenPopEntrpCust(btnName); break;
        		case "btnOpenPopSendCust"  : this.fnOpenPopSendCust(); break;
        		case "btnOpenPopRegCntr" : this.fnOpenPopRegCntr(); break;

        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function		: fnOpenPopAddr
         * @description		: 우편번호 주소 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopAddr = function(btnName)
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




        /***********************************************************************************************
         * @function		: fnOpenPopEntrpCust
         * @description		: 기업고객 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopEntrpCust = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pCustIdValue = '';	// 고객번호
        	var pCustNmValue = '';	// 고객명

        	if(btnName == "btnSearchEntrpCust1"){
        		popupId = 'searchPopEntrpCust1';
        		pCustIdValue = this.edtCustId_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}else if(btnName == "btnSearchEntrpCust2"){
        		popupId = 'searchPopEntrpCust2';
        		pCustIdValue = this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmCd.value;
        		pCustNmValue = this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmNm.value;
        	}


        	// 팝업 호출
        	var oArg = {
        				  pCustId		: pCustIdValue									// 고객번호
        				, pCustNm		: pCustNmValue									// 고객명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P020.xfdl", oArg, sPopupCallBack, oOption);
        }


        /***********************************************************************************************
         * @function		: fnOpenPopSendCust
         * @description		: 발송고객등록 팝업 호출
         * @param 			: N/A
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopSendCust = function()
        {
        	// 거래구분이 저장된 고객사만 발송고객등록가능.
        	var curOrgB2CValue = this.dsList.getColumn(this.dsList.rowposition, "ORG_B2C");

        	if(this.gfnIsNull(curOrgB2CValue)){
        		this.gfnAlert("거래구분을 선택하고 저장후 발송고객등록이 가능합니다.", "", function(){
        			this.tab00.Tabpage1.form.divTab1.form.cboB2C.dropdown();
        		});
        		return;
        	}


        	var pCustIdValue = this.dsList.getColumn(this.dsList.rowposition, "CUST_ID"); // 고객번호
        	var pCustNmValue = this.dsList.getColumn(this.dsList.rowposition, "CUST_NM"); // 고객명

        	// 파라미터 설정
        	var popupId = 'searchPopSendCust';	// 팝업ID

        	// 팝업 호출
        	var oArg = {
        		  pCustId : pCustIdValue
        		, pCustNm : pCustNmValue
        	};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_0050.xfdl", oArg, sPopupCallBack, oOption);
        }



        /***********************************************************************************************
         * @function	: fnOpenPopRegCntr
         * @description	: 계약등록 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopRegCntr = function()
        {
        	// 거래구분이 저장된 고객사만 발송고객등록가능.
        	var curOrgB2CValue = this.dsList.getColumn(this.dsList.rowposition, "ORG_B2C");

        	if(this.gfnIsNull(curOrgB2CValue)){
        		this.gfnAlert("거래구분을 선택하고 저장후 발송고객등록이 가능합니다.", "", function(){
        			this.tab00.Tabpage1.form.divTab1.form.cboB2C.dropdown();
        		});
        		return;
        	}

        	// 파라미터 설정
        	var popupId = 'popRegCntr';	//팝업ID

        	var pCustIdValue = this.dsList.getColumn(this.dsList.rowposition, "CUST_ID"); // 고객번호
        	var pCustNmValue = this.dsList.getColumn(this.dsList.rowposition, "CUST_NM"); // 고객명


        	// 신규입력일 경우 계약등록 팝업 호출 못함.
        	/*var currentRowType = this.dsDetail.getRowType(this.dsDetail.rowposition);
        	if(currentRowType == Dataset.ROWTYPE_INSERT || this.gfnIsNull(pCustIdValue)){
        		this.gfnAlert("기업고객 저장후 계약등록이 가능합니다.");
        		return;
        	}*/


        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pCustMgmtDlcmCd	: pCustIdValue									// 협력사코드 (발송고객이 없는경우 기업고객 = 발송고객)
        				, pSendCustNo		: pCustIdValue									// 발송고객번호 (발송고객이 없는경우 기업고객 = 발송고객)
        				, pSendCustNm		: pCustNmValue									// 발송고객명	(발송고객이 없는경우 기업고객 = 발송고객)
        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_0060.xfdl", oArg, sPopupCallBack, oOption);
        }




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
         * @function	: fnAfterCodeDef
         * @description	: 코드조회후 선택,전체 추가
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCodeDef = function(dsObj, strText) {

        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM', strText);
        }


        /***********************************************************************************************
         * @function	: fnChkCalDate
         * @description	: from~to 일자 체크
         * @param		: dsObj	- Dataset Object
         * @param       : strText - String
         * @return N/A
        /***********************************************************************************************/
        this.fnChkCalDate = function(sFDate, sTDate, sMsg)
        {
        	var nRtnCnt = this.gfnGetDiffDate(sFDate, sTDate);
        	if(nRtnCnt < 0){
        		this.gfnAlert(sMsg);
        		return false;
        	}
        	/*
        	else if(this.nMaxDay > -1 && nRtnCnt >= this.nMaxDay){
        		// this.alert("조회기간은 "+this.nMaxDay+"일을 넘길 수 없습니다.");
        		var arrMaxDay = [this.nMaxDay];
        		this.gfnAlert("M0441", arrMaxDay);
        		return false;
        	}*/
        	return true;
        };



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/



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
        			case	'edtCustId_sc' : this.btnSearchEntrpCust1.click();	break;
        			case	'edtCustNm_sc' : this.btnSearchEntrpCust1.click();	break;
        			case	'edtOrdRcptDlcmCd' : divFm.btnSearchEntrpCust2.click();	break;

        			default		: 	break;
        		}
        	}
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
        			case	'mskZipNo' :  this.fnSearchAddrInfo(this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value, this.tab00.Tabpage1.form.divTab1.form.edtAddr.value); break;
        			case	'edtAddr' :  this.fnSearchAddrInfo(this.tab00.Tabpage1.form.divTab1.form.mskZipNo.value, this.tab00.Tabpage1.form.divTab1.form.edtAddr.value); break;
        			case	"edtOrdRcptDlcmCd"	: this.fnSearchCustInfo(this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmCd.value, this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmNm.value, ""); break; break;
        			case	"edtOrdRcptDlcmNm"	: this.fnSearchCustInfo(this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmCd.value, this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmNm.value, ""); break; break;

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
        		case	"edtOrdRcptDlcmCd"	: this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmNm.set_value(''); break;
        		case	"edtOrdRcptDlcmNm"	: this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmCd.set_value(''); break;
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


        /***********************************************************************************************
         * @function		: fnSearchCustInfo
         * @description		: 기업고객 정보 조회
         * @param 			: custId	- String (기업고객ID)
         * @param 			: custNm	- String (기업고객명)
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSearchCustInfo = function(custId, custNm, sendCustNo)
        {
        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "CUST_ID", custId);
        	this.dsSearch.setColumn(0, "CUST_NM", custNm);
        	this.dsSearch.setColumn(0, "SEND_CUST_NO", sendCustNo);


        	this.gfnTransaction("getCustInfo");
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
            this.tab00.Tabpage1.form.divTab1.form.btnSearchAddr.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.divTab1.form.edtAddr.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.edtAddr.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtAddr00.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.edtAddr00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboB2C.addEventHandler("ondropdown",this.tabUserInfo_Tabpage1_div00_cboJoinType_ondropdown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboB2C.addEventHandler("onitemchanged",this.tabUserInfo_Tabpage1_div00_cboJoinType_onitemchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo00.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo00_00.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo00_00_00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.mskZipNo00_00_00.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSearchEntrpCust2.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtOrdRcptDlcmNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSendCust.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.divTab1.form.btnOpenPopRegCntr.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustId_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0040.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
