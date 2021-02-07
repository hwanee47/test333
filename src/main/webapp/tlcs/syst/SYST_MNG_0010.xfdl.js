(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SYST_MNG_0010");
            this.set_titletext("관리자등록(시스템관리자용)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsSysDv=ds1 dsDefaultPw=ds2</Col><Col id=\"QUERY_LIST\">q1=SM1000 q2=SM1001</Col></Row><Row><Col id=\"SVC_ID\">getCheckDupId</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSubSearch1</Col><Col id=\"OUT_DATASET_LIST\">dsCheckIdDup=ds1</Col><Col id=\"QUERY_LIST\">q1=baimUserMgmtService.getCheckDupId</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col></Row><Row><Col id=\"SVC_ID\">saveUserInfoList</Col><Col id=\"IN_DATASET_LIST\">dsSaveList=dsList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">saveUserInfoList_syst</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getUserList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsUserList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">getUserList</Col></Row><Row><Col id=\"SVC_ID\">createSuper</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">createSuper_syst</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_TYPE\">ADMIN</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PW\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_DV\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL3\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE1\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE2\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"USER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSysDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">운임구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">운임구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckIdDup", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuth", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH_CD\">A0000000</Col><Col id=\"AUTH_NM\">시스템관리자권한</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"AUTH_NM\">관리자권한</Col></Row><Row><Col id=\"AUTH_CD\">A0000002</Col><Col id=\"AUTH_NM\">창고관리자권한</Col></Row><Row><Col id=\"AUTH_CD\">A0000003</Col><Col id=\"AUTH_NM\">배송관리자권한</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0001</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0002</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0003</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0004</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0005</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0006</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0007</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0008</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0010</Col></Row><Row><Col id=\"AUTH_CD\">A0000001</Col><Col id=\"MENU_CD\">BAIM0011</Col></Row><Row><Col id=\"MENU_CD\">DLVY0001</Col></Row><Row><Col id=\"MENU_CD\">DLVY0002</Col></Row><Row><Col id=\"MENU_CD\">DLVY0003</Col></Row><Row><Col id=\"MENU_CD\">DLVY0004</Col></Row><Row><Col id=\"MENU_CD\">DLVY0005</Col></Row><Row><Col id=\"MENU_CD\">DLVY0006</Col></Row><Row><Col id=\"MENU_CD\">DLVY0007</Col></Row><Row><Col id=\"MENU_CD\">DLVY0008</Col></Row><Row><Col id=\"MENU_CD\">DLVY0009</Col></Row><Row><Col id=\"MENU_CD\">RCPT0001</Col></Row><Row><Col id=\"MENU_CD\">RCPT0002</Col></Row><Row><Col id=\"MENU_CD\">RCPT0003</Col></Row><Row><Col id=\"MENU_CD\">RCPT0004</Col></Row><Row><Col id=\"MENU_CD\">RSRV0001</Col></Row><Row><Col id=\"MENU_CD\">RSRV0003</Col></Row><Row><Col id=\"MENU_CD\">RSRV0004</Col></Row><Row><Col id=\"MENU_CD\">STCK0001</Col></Row><Row><Col id=\"MENU_CD\">STCK0002</Col></Row><Row><Col id=\"MENU_CD\">STCK0003</Col></Row><Row><Col id=\"MENU_CD\">STCK0004</Col></Row><Row><Col id=\"MENU_CD\">STCK0005</Col></Row><Row><Col id=\"MENU_CD\">STCK0006</Col></Row><Row><Col id=\"MENU_CD\">SYST0001</Col></Row><Row><Col id=\"MENU_CD\">SYST0002</Col></Row><Row><Col id=\"MENU_CD\">SYST0003</Col></Row><Row><Col id=\"MENU_CD\">SYST0005</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmailCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM\">직접입력</Col></Row><Row><Col id=\"CD\">naver.com</Col><Col id=\"CD_NM\">naver.com</Col></Row><Row><Col id=\"CD\">dreamwiz.com</Col><Col id=\"CD_NM\">dreamwiz.com</Col></Row><Row><Col id=\"CD\">empal.com</Col><Col id=\"CD_NM\">empal.com</Col></Row><Row><Col id=\"CD\">chol.com</Col><Col id=\"CD_NM\">chol.com</Col></Row><Row><Col id=\"CD\">freechal.com</Col><Col id=\"CD_NM\">freechal.com</Col></Row><Row><Col id=\"CD\">gmail.com</Col><Col id=\"CD_NM\">gmail.com</Col></Row><Row><Col id=\"CD\">hanmail.net</Col><Col id=\"CD_NM\">hanmail.net</Col></Row><Row><Col id=\"CD\">hotmail.com</Col><Col id=\"CD_NM\">hotmail.com</Col></Row><Row><Col id=\"CD\">korea.com</Col><Col id=\"CD_NM\">korea.com</Col></Row><Row><Col id=\"CD\">nate.com</Col><Col id=\"CD_NM\">nate.com</Col></Row><Row><Col id=\"CD\">paran.com</Col><Col id=\"CD_NM\">paran.com</Col></Row><Row><Col id=\"CD\">yahoo.com</Col><Col id=\"CD_NM\">yahoo.com</Col></Row><Row><Col id=\"CD\">yahoo.co.kr</Col><Col id=\"CD_NM\">yahoo.co.kr</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDefaultPw", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta09","21","1","294","34",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("시스템관리 > 관리자등록(RGB시스템관리자용)");
            obj.set_fittocontents("width");
            obj.set_cssclass("top_title_route01");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","0","sta09:0",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"7","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("0");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"467","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"113\"/><Column size=\"80\"/><Column size=\"132\"/><Column size=\"124\"/><Column size=\"175\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"아이디\"/><Cell col=\"1\" text=\"시스템구분\"/><Cell col=\"2\" text=\"관리자명\"/><Cell col=\"3\" text=\"전화번호\"/><Cell col=\"4\" text=\"휴대폰번호\"/><Cell col=\"5\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\"/><Cell col=\"1\" text=\"bind:SYS_DV\"/><Cell col=\"2\" text=\"bind:NAME\"/><Cell col=\"3\" text=\"bind:TEL_NO\"/><Cell col=\"4\" text=\"bind:MOBILE_NO\"/><Cell col=\"5\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"7","68","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("2");
            obj.set_text("저장");
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
            obj.set_taborder("14");
            obj.set_text("아이디");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00","119","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnIdChk",null,"3","63","23","3",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_ty02");
            obj.getSetter("domainId").set("T0900");
            obj.set_enable("true");
            obj.set_fittocontents("width");
            obj.set_taborder("1");
            obj.set_text("중복체크");
            obj.set_verticalAlign("middle");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtId","123","3",null,"23","btnIdChk:3",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("normal");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_textAlign("left");
            obj.set_inputtype("normal,english,number");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("16");
            obj.set_text("임시비밀번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00","119","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("18");
            obj.set_text("시스템구분");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","119","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtPw","123","32","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_background("papayawhip");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboSysDv","123","61","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsSysDv");
            obj.set_taborder("3");
            obj.set_background("papayawhip");
            obj.set_text("cboJoinType");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","87","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("20");
            obj.set_text("관리자명");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","119","87",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","0","116","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("22");
            obj.set_text("전화번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","116",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","0","145","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("24");
            obj.set_text("휴대폰번호");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","119","145",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00","0","174","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("26");
            obj.set_text("이메일");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00","119","174",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtName","123","90","304","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_background("papayawhip");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboTel1","123","119","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("5");
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00","200","121","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("28");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtTel2","218","119","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("6");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02","305","121","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("29");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtTel3","323","119","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("7");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtMobile3","323","148","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("10");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02_00","305","150","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("30");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtMobile2","218","148","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("9");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","200","150","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("31");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboMobile1","123","148","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("8");
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtEmail1","123","177","75","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_imemode("alpha");
            obj.set_inputtype("number,alpha");
            obj.set_taborder("11");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_01","202","177","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("32");
            obj.set_text("@");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtEmail2","218","177","103","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("english,comma,half");
            obj.set_taborder("12");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboEmail3","323","177","85","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsEmailCd");
            obj.set_taborder("13");
            obj.set_type("filterlike");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00","0","203","120","41",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("33");
            obj.set_text("권한관리");
            obj.set_visible("true");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00_00","119","203",null,"41","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnMenuAuth","123","208","97","31",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("35");
            obj.set_text("메뉴권한");
            obj.set_enable("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("7");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCreateSuper",null,"2","97","31","254",null,null,null,null,null,this);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("8");
            obj.set_text("SUPER만들기");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab00.Tabpage1.form.divTab1.form.edtId","value","dsList","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab00.Tabpage1.form.divTab1.form.edtPw","value","dsList","PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage1.form.divTab1.form.cboSysDv","value","dsList","SYS_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.divTab1.form.edtName","value","dsList","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage1.form.divTab1.form.cboTel1","value","dsList","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage1.form.divTab1.form.edtTel2","value","dsList","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage1.form.divTab1.form.edtTel3","value","dsList","TEL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab00.Tabpage1.form.divTab1.form.cboMobile1","value","dsList","MOBILE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab00.Tabpage1.form.divTab1.form.edtMobile2","value","dsList","MOBILE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab00.Tabpage1.form.divTab1.form.edtMobile3","value","dsList","MOBILE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab00.Tabpage1.form.divTab1.form.edtEmail1","value","dsList","EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab00.Tabpage1.form.divTab1.form.edtEmail2","value","dsList","EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab00.Tabpage1.form.divTab1.form.cboEmail3","value","dsList","EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SYST_MNG_0010.xfdl","lib::lib_Form.xjs");
        this.registerScript("SYST_MNG_0010.xfdl", function() {
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


        		// ID 중복체크
        		case "btnIdChk" :
        			this.fnCheckDupId();
        		break;

        		// 메뉴권한팝업
        		case "btnMenuAuth" :
        			this.fnOpenPopMenuAuth();
        		break;


        		// super 유저 생성
        		case "btnCreateSuper":
        			this.gfnCustomConfirm("RGB시스템관리자를 생성하시겠습니까?", function(sPopupId, bResult){

        				if(!bResult) return;
        				this.gfnTransaction("createSuper");
        			});
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnOpenPopMenuAuth
         * @description	: 메뉴권한부여 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopMenuAuth = function()
        {
        	// 파라미터 설정
        	var popupId = 'menuAuthPop1';	//팝업ID
        	var userId = this.dsList.getColumn(this.dsList.rowposition, "ID");

        	if( this.gfnIsNull(userId) ) return;

        	// 팝업 호출
        	var oArg = {
        			      pUserId		: userId
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P110.xfdl", oArg, sPopupCallBack, oOption);
        }


        /***********************************************************************************************
         * @function	: fnCheckDupId
         * @description	: 아이디 중복체크.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnCheckDupId = function()
        {
        	// 신규입력이 아닌경우 체크 안함.
        	var currowRowType = this.dsList.getRowType(this.dsList.rowposition);

        	if(currowRowType != Dataset.ROWTYPE_INSERT) return;


        	var userId = this.tab00.Tabpage1.form.divTab1.form.edtId.value;

        	if( this.gfnIsNull(userId)){
        		this.gfnAlert("아이디를 입력해 주세요.", "", function(){

        			this.tab00.Tabpage1.form.divTab1.form.edtId.setFocus();
        		});

        		return;
        	}

        	// 조회조건 설정
        	this.dsSubSearch1.setColumn(0, "USER_ID", userId);

        	this.gfnTransaction("getCheckDupId");

        }


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {


        	// 조회조건 필수입력 체크


        	this.gfnTransaction("getUserList");

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
        	this.dsList.setColumn(nRow, "SYS_DV", "");			// 선택
        	this.dsList.setColumn(nRow, "USER_TYPE", "M01");	// 사용자유형 (M01 : 관리자)
        	this.dsList.setColumn(nRow, "TEL1", "010");			// 전화번호1
        	this.dsList.setColumn(nRow, "MOBILE1", "010");		// 휴대폰번호1
        	this.dsList.setColumn(nRow, "PW", this.dsDefaultPw.getColumn(0,"CD_NM"));


        	// 화주ID 포커스
        	this.tab00.Tabpage1.form.divTab1.form.edtId.setFocus();
        };



        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제처리.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function() {



        };



        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	var currowRowType = this.dsList.getRowType(this.dsList.rowposition);

        	if( !checkDupIdFlag && currowRowType == Dataset.ROWTYPE_INSERT){
        		this.gfnAlert("아이디 중복 체크를 해주세요.");
        		return;
        	}

        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	var edtIdValue = this.tab00.Tabpage1.form.divTab1.form.edtId.value;
        	var edtPwValue = this.tab00.Tabpage1.form.divTab1.form.edtPw.value;
        	var cboSysDvValue = this.tab00.Tabpage1.form.divTab1.form.cboSysDv.value;
        	var edtNameValue = this.tab00.Tabpage1.form.divTab1.form.edtName.value;


        	if( currowRowType == Dataset.ROWTYPE_INSERT ){

        		if(this.gfnIsNull(edtPwValue)){
        			this.gfnAlert("임시비밀번호를 입력해주세요.", "", function(){ this.tab00.Tabpage1.form.divTab1.form.edtPw.setFocus() });
        			return;
        		}
        	}


        	if(this.gfnIsNull(cboSysDvValue)){
        		this.gfnAlert("시스템구분을 선택해주세요.", "", function(){ this.tab00.Tabpage1.form.divTab1.form.cboSysDv.dropdown() });
        		return;
        	}

        	if(this.gfnIsNull(edtNameValue)){
        		this.gfnAlert("관리자명을 입력해주세요.", "", function(){ this.tab00.Tabpage1.form.divTab1.form.edtName.setFocus() });
        		return;
        	}

        	/****************************************************************************************************/



        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;


        		this.dsList.addColumn("AUTH_CD", "STRING");
        		this.dsList.addColumn("USER_ID", "STRING");
        		this.dsList.addColumn("USER_TYPE", "STRING");
        		this.dsList.setColumn(this.dsList.rowposition, "AUTH_CD", cboSysDvValue);
        		this.dsList.setColumn(this.dsList.rowposition, "USER_ID", edtIdValue);
        		this.dsList.setColumn(this.dsList.rowposition, "USER_TYPE", "ADMIN");


        		// 트랜잭션 호출 (저장)
        		this.gfnTransaction("saveUserInfoList");
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
        		case "saveUserInfoList":
        			this.gfnAlert("저장 되었습니다.");
        			this.fnSearch();
        		break;




        		// 아이디 중복 체크
        		case "getCheckDupId":

        			// 아이디가 존재하는 경우
        			if(this.dsCheckIdDup.getRowCount() > 0){
        				checkDupIdFlag = false;
        				this.gfnAlert("사용자 아이디가 이미 존재합니다.");
        			}
        			// 아이디가 없는 경우
        			else{
        				checkDupIdFlag = true;
        				this.gfnAlert("사용가능한 아이디 입니다.");
        			}

        		break;

        		case "createSuper":
        			this.gfnAlert("생성되었습니다.");
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

        		case "pop1" :
        			this.tab00.Tabpage1.form.divTab1.form.edtShipperId.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.tab00.Tabpage1.form.divTab1.form.edtShipperNm.set_value(dsObj.getColumn(0,"CUST_NM"));

        		break;

        		case "itemPop1":
        			this.edtItemCd_sc.set_value(dsObj.getColumn(0,"ITEM_CD"));
        			this.edtItemNm_sc.set_value(dsObj.getColumn(0,"ITEM_NM"));

        		break;

        		case "itemGrpPop1":
        			this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.set_value(dsObj.getColumn(0,"ITEM_GRP_CD"));
        			this.tab00.Tabpage1.form.divTab1.form.edtDescript.set_value(dsObj.getColumn(0,"DESCRIPT"));

        		break;

        		case "custPop1" :
        			this.edtCustCd_sc.set_value(dsObj.getColumn(0,"CUST_ID"));
        			this.edtCustNm_sc.set_value(dsObj.getColumn(0,"CUST_NM"));
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
        	this.fnAddCodeDef(this.dsSysDv, '선택');

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
        		case "btnOpenPopSearchShipper1" :	this.fnOpenPopSearchShipper("btnOpenPopSearchShipper1"); break;
        		case "btnOpenPopSearchItem1" 	:	this.fnOpenPopSearchItem("btnOpenPopSearchItem1"); break;
        		case "btnOpenPopSearchItemGrp" 	:	this.fnOpenPopItemGrp(); break;
        		 // 검색-고객
        		case "btnCustSearch" :
        			this.fn_OpenPopCust("btnCustSearch"); break;
        		break;

        		default 		: 	break;
        	}
        };



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

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(this.dsList.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT){
        		this.tab00.Tabpage1.form.divTab1.form.btnMenuAuth.set_enable(false);
        	}
        	else{
        		this.tab00.Tabpage1.form.divTab1.form.btnMenuAuth.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.sta09.addEventHandler("onclick",this.sta09_onclick,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.btnIdChk.addEventHandler("onclick",this.btnOnClick,this);
            this.tab00.Tabpage1.form.divTab1.form.edtId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtId.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.btnMenuAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.btnCreateSuper.addEventHandler("onclick",this.btnOnClick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };

        this.loadIncludeScript("SYST_MNG_0010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
