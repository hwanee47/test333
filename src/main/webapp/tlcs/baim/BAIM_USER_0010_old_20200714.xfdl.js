(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_USER_0010");
            this.set_titletext("사용자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsUserTypeDv=ds1 dsDefaultPw=ds2</Col><Col id=\"QUERY_LIST\">q1=SM998 q2=SM1001</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">getCheckDupId</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSubSearch1</Col><Col id=\"OUT_DATASET_LIST\">dsCheckIdDup=ds1</Col><Col id=\"QUERY_LIST\">q1=baimUserMgmtService.getCheckDupId</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col></Row><Row><Col id=\"SVC_ID\">getUserList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsUserList=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=baimUserMgmtService.getUserList</Col></Row><Row><Col id=\"SVC_ID\">getAuthList</Col><Col id=\"IN_DATASET_LIST\">dsSubSearch1=dsSubSearch1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">getAuthList</Col><Col id=\"OUT_DATASET_LIST\">dsGroupAuthListBefore=dsGroupAuthListBefore dsGroupAuthListAfter=dsGroupAuthListAfter dsWarehAuthListBefore=dsWarehAuthListBefore dsWarehAuthListAfter=dsWarehAuthListAfter dsCustAuthList=dsCustAuthList</Col></Row><Row><Col id=\"SVC_ID\">saveUserInfoList</Col><Col id=\"IN_DATASET_LIST\">dsSaveList=dsUserList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">saveUserInfoList</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">insertCustAuthList</Col><Col id=\"IN_DATASET_LIST\">dsCustAuthList=dsCustAuthList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">insertCustAuthList</Col></Row><Row><Col id=\"SVC_ID\">deleteCustAuthList</Col><Col id=\"IN_DATASET_LIST\">dsCustAuthList=dsCustAuthList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteCustAuthList</Col></Row><Row><Col id=\"SVC_ID\">insertGroupAuthList</Col><Col id=\"IN_DATASET_LIST\">dsGroupAuthListBefore=dsGroupAuthListBefore:U</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">insertGroupAuthList</Col></Row><Row><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"IN_DATASET_LIST\">dsGroupAuthListAfter=dsGroupAuthListAfter:U</Col><Col id=\"SVC_ID\">deleteGroupAuthList</Col><Col id=\"SERVICE_METHOD\">deleteGroupAuthList</Col></Row><Row><Col id=\"SVC_ID\">insertWarehAuthList</Col><Col id=\"IN_DATASET_LIST\">dsWarehAuthListBefore=dsWarehAuthListBefore:U</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"SERVICE_METHOD\">insertWarehAuthList</Col></Row><Row><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimUserMgmtService</Col><Col id=\"IN_DATASET_LIST\">dsWarehAuthListAfter=dsWarehAuthListAfter:U</Col><Col id=\"SVC_ID\">deleteWarehAuthList</Col><Col id=\"SERVICE_METHOD\">deleteWarehAuthList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmailCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM\">직접입력</Col></Row><Row><Col id=\"CD\">naver.com</Col><Col id=\"CD_NM\">naver.com</Col></Row><Row><Col id=\"CD\">dreamwiz.com</Col><Col id=\"CD_NM\">dreamwiz.com</Col></Row><Row><Col id=\"CD\">empal.com</Col><Col id=\"CD_NM\">empal.com</Col></Row><Row><Col id=\"CD\">chol.com</Col><Col id=\"CD_NM\">chol.com</Col></Row><Row><Col id=\"CD\">freechal.com</Col><Col id=\"CD_NM\">freechal.com</Col></Row><Row><Col id=\"CD\">gmail.com</Col><Col id=\"CD_NM\">gmail.com</Col></Row><Row><Col id=\"CD\">hanmail.net</Col><Col id=\"CD_NM\">hanmail.net</Col></Row><Row><Col id=\"CD\">hotmail.com</Col><Col id=\"CD_NM\">hotmail.com</Col></Row><Row><Col id=\"CD\">korea.com</Col><Col id=\"CD_NM\">korea.com</Col></Row><Row><Col id=\"CD\">nate.com</Col><Col id=\"CD_NM\">nate.com</Col></Row><Row><Col id=\"CD\">paran.com</Col><Col id=\"CD_NM\">paran.com</Col></Row><Row><Col id=\"CD\">yahoo.com</Col><Col id=\"CD_NM\">yahoo.com</Col></Row><Row><Col id=\"CD\">yahoo.co.kr</Col><Col id=\"CD_NM\">yahoo.co.kr</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PW\" type=\"STRING\" size=\"256\"/><Column id=\"SHPR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SHPR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_DV\" type=\"STRING\" size=\"256\"/><Column id=\"TEL1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL3\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE1\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE2\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE3\" type=\"STRING\" size=\"256\"/><Column id=\"MOBILE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL1\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL2\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserTypeDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">운임구분1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">운임구분2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPhoneCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSubSearch1", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckIdDup", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGroupAuthListBefore", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGroupAuthListAfter", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWarehAuthListBefore", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWarehAuthListAfter", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_NM\" type=\"STRING\" size=\"256\"/><Column id=\"WAREH_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustAuthList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDelYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDefaultPw", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAdd",null,"7","68","23","107",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("10");
            obj.set_text("신규");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"7","68","23","180",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("3");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"7","70","23","32",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("11");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","21","1","289","34",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("기준정보관리 > 사용자관리");
            obj.set_fittocontents("width");
            obj.set_cssclass("top_title_route01");
            this.addChild(obj.name, obj);

            obj = new Static("stSearch","0","sta09:0",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","44","55","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("1");
            obj.set_text("사용자명");
            this.addChild(obj.name, obj);

            obj = new Static("staShpr","250","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0160");
            obj.set_taborder("2");
            obj.set_text("사용자ID");
            this.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","stSearch:3",null,"364","466",null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty01");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_selecttype("row");
            obj.set_binddataset("dsUserList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\" band=\"left\"/><Column size=\"115\"/><Column size=\"193\"/><Column size=\"111\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"181\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" accessibilitydescription=\"T0360\" text=\"고객사코드\"/><Cell col=\"2\" accessibilitydescription=\"T0317\" text=\"고객사명\"/><Cell col=\"3\" accessibilitydescription=\"T0145\" text=\"아이디\"/><Cell col=\"4\" accessibilitydescription=\"T1869\" text=\"사용자명\"/><Cell col=\"5\" accessibilitydescription=\"T1869\" text=\"업무구분\"/><Cell col=\"6\" accessibilitydescription=\"T1869\" text=\"전화번호\"/><Cell col=\"7\" accessibilitydescription=\"T1869\" text=\"휴대전화\"/><Cell col=\"8\" accessibilitydescription=\"T1869\" text=\"이메일\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:SHPR_ID\"/><Cell col=\"2\" text=\"bind:SHPR_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ID\"/><Cell col=\"4\" displaytype=\"normal\" text=\"bind:NAME\" textAlign=\"left\"/><Cell col=\"5\" displaytype=\"combotext\" text=\"bind:DUTY_DV\" textAlign=\"left\" combodataset=\"dsUserTypeDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"6\" displaytype=\"normal\" text=\"bind:TEL_NO\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"normal\" text=\"bind:MOBILE_NO\" textAlign=\"left\"/><Cell col=\"8\" displaytype=\"normal\" text=\"bind:EMAIL\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","89","43","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm00","314","43","120","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Static("sta001_00","4","gridMain:5","130","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("7");
            obj.set_text("권한 등록/변경");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div03","1","472",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","7","6",null,null,"11","9",null,null,null,null,this.div03.form);
            obj.set_cssclass("in_tab_ty00");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("0");
            this.div03.addChild(obj.name, obj);

            obj = new Tabpage("tpGroupAuth",this.div03.form.tab00);
            obj.getSetter("domainId").set("T2125");
            obj.set_tabbuttonheight("30");
            obj.set_text("그룹권한");
            this.div03.form.tab00.addChild(obj.name, obj);

            obj = new Grid("grd1","0","4","716",null,null,"0",null,null,null,null,this.div03.form.tab00.tpGroupAuth.form);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsGroupAuthListBefore");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("0");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"105\"/><Column size=\"318\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"그룹권한코드\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"그룹권한명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:AUTH_CD\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:AUTH_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div03.form.tab00.tpGroupAuth.addChild(obj.name, obj);

            obj = new Button("btnAddGroupAuth","741","69","30","29",null,null,null,null,null,null,this.div03.form.tab00.tpGroupAuth.form);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("1");
            obj.set_background("url(\'img::btn_CalNext_P.png\') no-repeat");
            this.div03.form.tab00.tpGroupAuth.addChild(obj.name, obj);

            obj = new Button("btnDeleteGroupAuth","741","129","30","29",null,null,null,null,null,null,this.div03.form.tab00.tpGroupAuth.form);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("2");
            obj.set_background("url(\'img::btn_CalPrev_P.png\') no-repeat");
            this.div03.form.tab00.tpGroupAuth.addChild(obj.name, obj);

            obj = new Grid("grd2","795","4",null,null,"6","0",null,null,null,null,this.div03.form.tab00.tpGroupAuth.form);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsGroupAuthListAfter");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"105\"/><Column size=\"318\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"그룹권한코드\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"그룹권한명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:AUTH_CD\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:AUTH_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div03.form.tab00.tpGroupAuth.addChild(obj.name, obj);

            obj = new Tabpage("tpWarehAuth",this.div03.form.tab00);
            obj.set_text("창고권한");
            this.div03.form.tab00.addChild(obj.name, obj);

            obj = new Grid("grd1","0","4","716",null,null,"0",null,null,null,null,this.div03.form.tab00.tpWarehAuth.form);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsWarehAuthListBefore");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("0");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"105\"/><Column size=\"176\"/><Column size=\"318\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"창고코드\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"창고명\"/><Cell col=\"4\" accessibilitydescription=\"T0588\" text=\"설명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:WAREH_CD\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_NM\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_DESC\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div03.form.tab00.tpWarehAuth.addChild(obj.name, obj);

            obj = new Button("btnAddWarehAuth","741","69","30","29",null,null,null,null,null,null,this.div03.form.tab00.tpWarehAuth.form);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("1");
            obj.set_background("url(\'img::btn_CalNext_P.png\') no-repeat");
            this.div03.form.tab00.tpWarehAuth.addChild(obj.name, obj);

            obj = new Button("btnDeleteWarehAuth","741","129","30","29",null,null,null,null,null,null,this.div03.form.tab00.tpWarehAuth.form);
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("2");
            obj.set_background("url(\'img::btn_CalPrev_P.png\') no-repeat");
            this.div03.form.tab00.tpWarehAuth.addChild(obj.name, obj);

            obj = new Grid("grd2","795","4",null,null,"6","0",null,null,null,null,this.div03.form.tab00.tpWarehAuth.form);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsWarehAuthListAfter");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"105\"/><Column size=\"190\"/><Column size=\"318\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"창고코드\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"창고명\"/><Cell col=\"4\" accessibilitydescription=\"T0588\" text=\"설명\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" suppress=\"1\" text=\"bind:WAREH_CD\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_NM\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:WAREH_DESC\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div03.form.tab00.tpWarehAuth.addChild(obj.name, obj);

            obj = new Tabpage("tpCustAuth",this.div03.form.tab00);
            obj.set_text("고객권한");
            this.div03.form.tab00.addChild(obj.name, obj);

            obj = new Grid("grd1","0","4",null,null,"6","0",null,null,null,null,this.div03.form.tab00.tpCustAuth.form);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCustAuthList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("0");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"32\"/><Column size=\"115\"/><Column size=\"176\"/><Column size=\"361\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0386\" text=\"고객코드\"/><Cell col=\"3\" accessibilitydescription=\"T0588\" text=\"고객명\"/><Cell col=\"4\" accessibilitydescription=\"T0588\" text=\"주소\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" editautoselect=\"true\" edittype=\"checkbox\" text=\"bind:CHK\" textAlign=\"left\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_ID\" textAlign=\"left\" expandshow=\"expr:dataset.getRowType(currow)==2?'show':'hide'\" expandimage=\"url('theme://images/btn_WF_Grdexpand.png')\" expandsize=\"20\"/><Cell col=\"3\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:CUST_NM\" textAlign=\"left\"/><Cell col=\"4\" displaytype=\"normal\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ADDR\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div03.form.tab00.tpCustAuth.addChild(obj.name, obj);

            obj = new Button("btnAddCustAuth",null,"9","68","23","174",null,null,null,null,null,this.div03.form);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("1");
            obj.set_text("신규");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btnDeleteCustAuth",null,"9","68","23","101",null,null,null,null,null,this.div03.form);
            obj.set_cssclass("btn_ty01_delete");
            obj.getSetter("domainId").set("T0519");
            obj.set_fittocontents("none");
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Button("btnSaveCustAuth",null,"9","70","23","26",null,null,null,null,null,this.div03.form);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_visible("false");
            this.div03.addChild(obj.name, obj);

            obj = new Tab("tab00","gridMain:5","stSearch:3","430","364",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.getSetter("domainId").set("T2125");
            obj.set_tabbuttonheight("30");
            obj.set_text("기본정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("divTab1","0","0",null,"334","0",null,null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00","119","184",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("40");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta06","0","0","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("아이디");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search","119","0",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","23","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1429");
            obj.set_taborder("2");
            obj.set_text("임시비밀번호");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search00","119","23",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("3");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta03","0","46","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1726");
            obj.set_taborder("4");
            obj.set_text("고객사");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search01","119","46",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("5");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta04","0","69","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1723");
            obj.set_taborder("6");
            obj.set_text("사용자명");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search12","119","69",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("7");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta05","0","92","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T2022");
            obj.set_taborder("8");
            obj.set_text("사용자유형");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02","119","92",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("9");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta07","0","115","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1797");
            obj.set_taborder("10");
            obj.set_text("전화번호");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search03","119","115",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("11");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta08","0","138","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1268");
            obj.set_taborder("12");
            obj.set_text("휴대폰");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search04","119","138",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("13");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09","0","161","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("14");
            obj.set_text("이메일");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search05","119","161",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("15");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtId","125","3","231","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("16");
            obj.set_background("papayawhip");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtShprId","125","49","85","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("17");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchCust","210","49","18","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_search02");
            obj.set_taborder("18");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtShprNm","230","49","194","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("false");
            obj.set_taborder("19");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtPw","125","26","299","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("20");
            obj.set_password("true");
            obj.set_background("papayawhip");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnIdChk",null,"3","64","18","7",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_ty02");
            obj.getSetter("domainId").set("T0900");
            obj.set_enable("true");
            obj.set_fittocontents("width");
            obj.set_taborder("21");
            obj.set_text("중복체크");
            obj.set_verticalAlign("middle");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtName","125","72","299","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("22");
            obj.set_background("papayawhip");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboDutyDv","125","95","299","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsUserTypeDv");
            obj.set_taborder("23");
            obj.set_background("papayawhip");
            obj.set_text("cboJoinType");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboMobile1","125","118","75","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("24");
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00","202","118","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("25");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtMobile2","220","118","85","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("26");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02","307","118","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("27");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtMobile3","325","118","85","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("28");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboMobile1_00","125","141","75","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsPhoneCd");
            obj.set_taborder("29");
            obj.set_text("010");
            obj.set_value("010");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","202","141","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("30");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtMobile2_00","220","141","85","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("31");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta02_00","307","141","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("32");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtMobile3_00","325","141","85","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("33");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboEmail3","315","164","95","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsEmailCd");
            obj.set_taborder("34");
            obj.set_type("filterlike");
            obj.set_text("직접입력");
            obj.set_value("");
            obj.set_index("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtEmail2","220","164","90","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_inputtype("english,comma,half");
            obj.set_taborder("35");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00","202","164","15","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("36");
            obj.set_text("@");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtEmail1","125","164","75","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_imemode("alpha");
            obj.set_inputtype("number,alpha");
            obj.set_taborder("37");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00","0","184","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("38");
            obj.set_text("사용여부");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboDelYn","125","187","299","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsDelYn");
            obj.set_taborder("39");
            obj.set_text("cboJoinType");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00","0","207","120","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("41");
            obj.set_text("점소");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search01_00","119","207",null,"24","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("42");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","125","210","85","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("43");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchBran","210","210","18","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_search02");
            obj.set_taborder("44");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","230","210","194","18",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("45");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("13");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab00.Tabpage1.form.divTab1.form.edtId","value","dsUserList","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab00.Tabpage1.form.divTab1.form.edtPw","value","dsUserList","PW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage1.form.divTab1.form.edtShprId","value","dsUserList","SHPR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.divTab1.form.edtShprNm","value","dsUserList","SHPR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage1.form.divTab1.form.edtName","value","dsUserList","NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage1.form.divTab1.form.cboDutyDv","value","dsUserList","DUTY_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage1.form.divTab1.form.cboMobile1","value","dsUserList","TEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab00.Tabpage1.form.divTab1.form.edtMobile2","value","dsUserList","TEL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab00.Tabpage1.form.divTab1.form.edtMobile3","value","dsUserList","TEL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab00.Tabpage1.form.divTab1.form.cboMobile1_00","value","dsUserList","MOBILE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab00.Tabpage1.form.divTab1.form.edtMobile2_00","value","dsUserList","MOBILE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab00.Tabpage1.form.divTab1.form.edtMobile3_00","value","dsUserList","MOBILE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab00.Tabpage1.form.divTab1.form.edtEmail1","value","dsUserList","EMAIL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab00.Tabpage1.form.divTab1.form.edtEmail2","value","dsUserList","EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab00.Tabpage1.form.divTab1.form.cboEmail3","value","dsUserList","EMAIL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab00.Tabpage1.form.divTab1.form.cboDelYn","value","dsUserList","DEL_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edtBranNm","value","dsSearch","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","edtBranNm00","value","dsSearch","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab00.Tabpage1.form.divTab1.form.edtBranCd","value","dsUserList","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab00.Tabpage1.form.divTab1.form.edtBranNm","value","dsUserList","BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_USER_0010_old_20200714.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_USER_0010_old_20200714.xfdl", function() {
        /**
        *  사용자관리
        *  @MenuPath
        *  @FileName 		BAIM_UESR_0010.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.03.02
        *  @Desction        사용자관리
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.02		Kim Jin Hwan			최초 생성
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

        		// 초기화
        		case "btnReset" :
        			this.fnInit();
        		break;

        		// 신규
        		case "btnAdd" :
        			this.fnAdd();
        		break;

        		// 그룹권한추가
        		case "btnAddGroupAuth":
        			this.fnAddGroupAuth();
        		break;

        		// 그룹권한삭제
        		case "btnDeleteGroupAuth":
        			this.fnDeleteGroupAuth();
        		break;


        		// 창고권한추가
        		case "btnAddWarehAuth":
        			this.fnAddWarehAuth();
        		break;

        		// 창고권한삭제
        		case "btnDeleteWarehAuth":
        			this.fnDeleteWarehAuth();
        		break;


        		// 고객권한추가
        		case "btnAddCustAuth":
        			this.fnAddCustAuth();
        		break;

        		// 고객권한삭제
        		case "btnDeleteCustAuth":
        			this.fnDeleteCustAuth();
        		break;

        		// 고객권한저장
        		case "btnSaveCustAuth":
        			this.fnSaveCustAuth();
        		break;

        		// 고객사 팝업
        		case "btnOpenPopSearchCust":
        			this.fnOpenPopEntrpCust("btnOpenPopSearchCust");
        		break;

        		// 점소 팝업
        		case "btnOpenPopSearchBran":
        			this.fnOpenPopBran();
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


        	this.gfnTransaction("getUserList");

        };



        /***********************************************************************************************
         * @function	: fnSearchAuth
         * @description	: 권한조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchAuth = function() {


        	// 선택된 행의 신규인 경우 조회 X.
        	var currowRowType = this.dsUserList.getRowType(this.dsUserList.rowposition);

        	// 권한 데이터셋 clearData
        	this.dsGroupAuthListBefore.clearData();
        	this.dsGroupAuthListAfter.clearData();
        	this.dsWarehAuthListBefore.clearData();
        	this.dsWarehAuthListAfter.clearData();
        	this.dsCustAuthList.clearData();

        	if(currowRowType == Dataset.ROWTYPE_INSERT){
        		return;
        	}


        	// 조회조건 셋팅
        	var userId = this.dsUserList.getColumn(this.dsUserList.rowposition, "ID");
        	this.dsSubSearch1.setColumn(0, "USER_ID", userId);


        	this.gfnTransaction("getAuthList");

        };





        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	var currowRowType = this.dsUserList.getRowType(this.dsUserList.rowposition);

        	if( !checkDupIdFlag && currowRowType == Dataset.ROWTYPE_INSERT){
        		alert("아이디 중복 체크를 해주세요.");
        		return;
        	}

        	/** 저장할 데이터 유효성 체크*********************************************************************/
        	var nRowCount = this.dsUserList.getRowCount();
        	for(var i=0; i<nRowCount; i++){

        		var nRowType = this.dsUserList.getRowType(i);

        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}

        		var idValue = this.dsUserList.getColumn(i, "ID");
        		var pwValue = this.dsUserList.getColumn(i, "PW");
        		var shprIdValue = this.dsUserList.getColumn(i, "SHPR_ID");
        		var shprNmValue = this.dsUserList.getColumn(i, "SHPR_NM");
        		var nameValue = this.dsUserList.getColumn(i, "NAME");
        		var dutyDvValue = this.dsUserList.getColumn(i, "DUTY_DV");

        		// 아이디
        		if( this.gfnIsNull(idValue) ){
        			this.gfnAlert((i+1)+"행의 아이디를 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			return;
        		}

        		// 임시비밀번호
        		if(nRowType == Dataset.ROWTYPE_INSERT){

        			if( this.gfnIsNull(pwValue) ){
        				this.gfnAlert((i+1)+"행의 임시비밀번호를 입력해주세요.");
        				this.dsList.set_rowposition(i);
        				return;
        			}

        		}



        		// 사용자명
        		if( this.gfnIsNull(nameValue) ){
        			this.gfnAlert((i+1)+"행의 사용자명을 입력해주세요.");
        			this.dsList.set_rowposition(i);
        			return;
        		}

        		// 사용자유형
        		if( this.gfnIsNull(dutyDvValue) ){
        			this.gfnAlert((i+1)+"행의 사용자유형을 선택해주세요.");
        			this.dsList.set_rowposition(i);
        			return;
        		}



        	}


        	/****************************************************************************************************/

        	if(!this.gfnConfirm("저장하시겠습니까?")) return;


        	// 트랜잭션 호출 (저장)
        	this.gfnTransaction("saveUserInfoList");


        };



         /***********************************************************************************************
         * @function	: fnAdd
         * @description	: FORM init
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function()
        {
        	var lastRowType = this.dsUserList.getRowType(this.dsUserList.getRowCount()-1);

        	if(lastRowType != Dataset.ROWTYPE_INSERT){
        		var nRow = this.dsUserList.addRow();

        		this.tab00.Tabpage1.form.divTab1.form.cboDutyDv.set_index(0);

        		this.dsUserList.setColumn(nRow, "DEL_YN", "N");
        		this.dsUserList.setColumn(nRow, "PW",  this.dsDefaultPw.getColumn(0,"CD"));

        	}
        }


         /***********************************************************************************************
         * @function	: fnAddGroupAuth
         * @description	: 그룹권한 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddGroupAuth = function()
        {

        	//chk된 항목이 있는지 확인.
        	if(this.dsGroupAuthListBefore.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("추가할 메뉴를 체크해주세요.");
        		return;
        	}

        	if(this.gfnConfirm("추가하시겠습니까?")) {
        		this.gfnTransaction("insertGroupAuthList");
        	}
        }


         /***********************************************************************************************
         * @function	: fnAddGroupAuth
         * @description	: 그룹권한 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteGroupAuth = function()
        {

        	//chk된 항목이 있는지 확인.
        	if(this.dsGroupAuthListAfter.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("삭제할 메뉴를 체크해주세요.");
        		return;
        	}

        	if(this.gfnConfirm("삭제하시겠습니까?")) {
        		this.gfnTransaction("deleteGroupAuthList");
        	}
        }




         /***********************************************************************************************
         * @function	: fnAddWarehAuth
         * @description	: 창고권한 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddWarehAuth = function()
        {

        	//chk된 항목이 있는지 확인.
        	if(this.dsWarehAuthListBefore.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("추가할 창고를 체크해주세요.");
        		return;
        	}

        	if(this.gfnConfirm("추가하시겠습니까?")) {
        		this.gfnTransaction("insertWarehAuthList");
        	}
        }


         /***********************************************************************************************
         * @function	: fnDeleteWarehAuth
         * @description	: 창고권한 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteWarehAuth = function()
        {

        	//chk된 항목이 있는지 확인.
        	if(this.dsWarehAuthListAfter.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("삭제할 메뉴를 체크해주세요.");
        		return;
        	}

        	if(this.gfnConfirm("삭제하시겠습니까?")) {
        		this.gfnTransaction("deleteWarehAuthList");
        	}
        }


        /***********************************************************************************************
         * @function	: fnAddCustAuth
         * @description	: 고객권한 추가
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddCustAuth = function()
        {
        	// 사용자 등록후 고객권한 추가가능.
        	var dsUserRowCount = this.dsUserList.getRowCount();
        	var currowRowType = this.dsUserList.getRowType(this.dsUserList.rowposition);

        	if(currowRowType == Dataset.ROWTYPE_INSERT || dsUserRowCount == 0){
        		return;
        	}

        	var nRow = this.dsCustAuthList.addRow();

        	this.dsCustAuthList.setColumn(nRow, "CHK", "1");
        	this.dsCustAuthList.setColumn(nRow, "USER_ID", this.dsUserList.getColumn(this.dsUserList.rowposition, "ID"));
        }




        /***********************************************************************************************
         * @function	: fnDeleteCustAuth
         * @description	: 고객권한 삭제
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteCustAuth = function()
        {
        	//chk된 항목이 있는지 확인.
        	if(this.dsCustAuthList.findRow("CHK", "1") < 0) {
        		this.gfnAlert("삭제할 행을 체크해주세요.");
        		return;
        	}

        	if(!this.gfnConfirm("삭제하시겠습니까?")) return;

        	// 사용자 등록후 고객권한 추가가능.
        	var dsRowCount = this.dsCustAuthList.getRowCount();

        	for(var i=dsRowCount; i>=0; i--){

        		var nRowType = this.dsCustAuthList.getRowType(i);

        		if(nRowType == Dataset.ROWTYPE_INSERT){
        			this.dsCustAuthList.deleteRow(i);
        		}

        	}

        	if(this.dsCustAuthList.findRow("CHK", "1") != -1) {
        		this.gfnTransaction("deleteCustAuthList");
        	}


        }



        /***********************************************************************************************
         * @function	: fnSaveCustAuth
         * @description	: 고객권한 저장
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSaveCustAuth = function()
        {

        	//chk된 항목이 있는지 확인.
        	if(this.dsCustAuthList.findRow("CHK", "1") < 0) {
        		this.gfnAlert("저장할 행을 체크해주세요.");
        		return;
        	}


        	// 저장할 행 유효성 체크
        	var dsRowCount = this.dsCustAuthList.getRowCount();
        	for(var i=0; i<dsRowCount; i++){

        		var chkValue = this.dsCustAuthList.getColumn(i, "CHK");
        		var custIdValue = this.dsCustAuthList.getColumn(i, "CUST_ID");

        		if(chkValue != "1") continue;

        		if(this.gfnIsNull(custIdValue)){
        			this.gfnAlert((i+1)+"행의 고객정보를 선택해주세요.");
        			return;
        		}

        	}


        	if(!this.gfnConfirm("저장하시겠습니까?")) return;



        	this.gfnTransaction("insertCustAuthList");

        }




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


        		// 저장
        		case "saveUserInfoList":
        			this.gfnAlert("저장 되었습니다.");
        			this.fnSearch();
        		break;


        		// 권한조회
        		case "getAuthList":

        		break;


        		// 그룹권한 추가
        		case "insertGroupAuthList":
        			this.fnSearchAuth();
        		break;

        		// 그룹권한 추가
        		case "deleteGroupAuthList":
        			this.fnSearchAuth();
        		break;


        		// 창고권한 추가
        		case "insertWarehAuthList":
        			this.fnSearchAuth();
        		break;

        		// 창고권한 추가
        		case "deleteWarehAuthList":
        			this.fnSearchAuth();
        		break;

        		// 고객권한 추가
        		case "insertCustAuthList":
        			this.fnSearchAuth();
        		break;


        		// 고객권한 삭제
        		case "deleteCustAuthList":
        			this.fnSearchAuth();
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

        		case "pop1":
        			this.dsCustAuthList.setColumn(this.dsCustAuthList.rowposition, "CUST_ID", dsObj.getColumn(0,"CUST_ID"));
        			this.dsCustAuthList.setColumn(this.dsCustAuthList.rowposition, "CUST_NM", dsObj.getColumn(0,"CUST_NM"));
        			this.dsCustAuthList.setColumn(this.dsCustAuthList.rowposition, "ADDR", dsObj.getColumn(0,"ADDR"));
        		break;

        		case "pop2":
        			this.dsUserList.setColumn(this.dsUserList.rowposition, "SHPR_ID", dsObj.getColumn(0,"CUST_ID"));
        			this.dsUserList.setColumn(this.dsUserList.rowposition, "SHPR_NM", dsObj.getColumn(0,"CUST_NM"));
        		break;

        		case "branPop1":
        			this.dsUserList.setColumn(this.dsUserList.rowposition, "BRAN_CD", dsObj.getColumn(0,"BRAN_CD"));
        			this.dsUserList.setColumn(this.dsUserList.rowposition, "BRAN_NM", dsObj.getColumn(0,"BRAN_NM"));
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
        	// 사용자 유형
        	this.fnAddCodeDef(this.dsUserTypeDv, '선택');
        	this.tab00.Tabpage1.form.divTab1.form.cboDutyDv.set_index(0);

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
         * @function	: fnSetEnableComp
         * @description	: 컴포넌트 enable 셋팅
         * @param       : nRow - int
         * @return N/A
        /***********************************************************************************************/
        this.fnSetEnableComp = function(nRow)
        {
        	var currowRowType = this.dsUserList.getRowType(nRow);

        	// 신규
        	if(currowRowType == Dataset.ROWTYPE_INSERT){

        		this.tab00.Tabpage1.form.divTab1.form.edtId.set_enable(true);
        		this.tab00.Tabpage1.form.divTab1.form.btnIdChk.set_enable(true);
        		this.tab00.Tabpage1.form.divTab1.form.edtPw.set_enable(true);
        		this.tab00.Tabpage1.form.divTab1.form.edtShprId.set_enable(true);
        		this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchCust.set_enable(true);
        		this.tab00.Tabpage1.form.divTab1.form.cboDutyDv.set_enable(true);


        	}
        	// 수정
        	else{

        		this.tab00.Tabpage1.form.divTab1.form.edtId.set_enable(false);
        		this.tab00.Tabpage1.form.divTab1.form.btnIdChk.set_enable(false);
        		this.tab00.Tabpage1.form.divTab1.form.edtPw.set_enable(false);
        		this.tab00.Tabpage1.form.divTab1.form.edtShprId.set_enable(false);
        		this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchCust.set_enable(false);
        		this.tab00.Tabpage1.form.divTab1.form.cboDutyDv.set_enable(false);

        	}
        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // 아이디 중복체크
        this.tabUserInfo_Tabpage1_div00_btnIdChk_onclick = function(obj,e)
        {
        	// 신규입력이 아닌경우 체크 안함.
        	var currowRowType = this.dsUserList.getRowType(this.dsUserList.rowposition);

        	if(currowRowType != Dataset.ROWTYPE_INSERT) return;


        	var userId = this.tab00.Tabpage1.form.divTab1.form.edtId.value;

        	if( this.gfnIsNull(userId)){
        		this.gfnAlert("아이디를 입력해 주세요.");
        		this.tab00.Tabpage1.form.divTab1.form.edtId.setFocus();
        		return;
        	}


        	// 조회조건 설정
        	this.dsSubSearch1.setColumn(0, "USER_ID", userId);

        	this.gfnTransaction("getCheckDupId");


        };

        // 데이터셋 값 변경
        this.dsUserList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "ID"){
        		checkDupIdFlag = false;
        	}
        };

        // row 변경
        this.dsUserList_onrowposchanged = function(obj,e)
        {
        	this.fnSetEnableComp(e.newrow);

        	// 권한조회
        	this.fnSearchAuth();

        };

        // 그리드 헤더 클릭
        this.grdOnHeadClick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	this.gfnGridSort(obj, e);
        };

        // 고객관리 그리드 onexpandup
        this.div03_tab00_tpCustAuth_grd1_onexpandup = function(obj,e)
        {
        	var bindText = obj.getCellProperty("body", e.cell, "text");

        	// cell 컬럼명 추출.
        	var column = this.gfnNvl(bindText, "").replace("bind:", "");

        	switch(column)
        	{
        		// 고객코드
        		case "CUST_ID" :
        			this.fnOpenPopEntrpCust('btnOpenPopGridSearchCust');
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function		: fnOpenPopEntrpCust
         * @description		: 기업고객 조회 팝업 호출
         * @param 			: btnName
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopEntrpCust = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = "";	//팝업ID
        	var pCustIdValue = "";

        	if(btnName == "btnOpenPopGridSearchCust"){
        		popupId = "pop1";

        	}
        	else{
        		popupId = "pop2";
        		pCustIdValue = this.tab00.Tabpage1.form.divTab1.form.edtShprId.value;
        	}

        	// 팝업 호출
        	var oArg = {
        				  pCustId       : pCustIdValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P060.xfdl", oArg, sPopupCallBack, oOption);
        }





        /***********************************************************************************************
         * @function	: fnOpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBran = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = 'branPop1';	//팝업ID
        	var pBranCdValue = this.tab00.Tabpage1.form.divTab1.form.edtBranCd.value;	// 점소코드
        	var pBranNmValue = this.tab00.Tabpage1.form.divTab1.form.edtBranNm.value;	// 점소명




        	// 팝업 호출
        	var oArg = {
        				  pBranCd       : pBranCdValue									// 점소코드
        				, pBranNm       : pBranNmValue  								// 점소명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P010.xfdl", oArg, sPopupCallBack, oOption);
        }



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
        			case	'edtShprId' : this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchCust.click(); break;
        			case    'edtBranCd' : this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchBran.click(); break;
        			case    'edtBranNm' : this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchBran.click(); break;

        			default	: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtShprId' : this.tab00.Tabpage1.form.divTab1.form.edtShprNm.set_value(''); break;
        			case    'edtBranCd' : this.tab00.Tabpage1.form.divTab1.form.edtBranNm.set_value(''); break;
        			case    'edtBranNm' : this.tab00.Tabpage1.form.divTab1.form.edtBranCd.set_value(''); break;

        		}
        	}
        };

        this.tab00_onchanged = function(obj,e)
        {
        	// 고객권한 탭 오픈
        	if( e.postindex == 2 ){

        		this.div03.form.btnAddCustAuth.set_visible(true);
        		this.div03.form.btnDeleteCustAuth.set_visible(true);
        		this.div03.form.btnSaveCustAuth.set_visible(true);

        	} else {

        		this.div03.form.btnAddCustAuth.set_visible(false);
        		this.div03.form.btnDeleteCustAuth.set_visible(false);
        		this.div03.form.btnSaveCustAuth.set_visible(false);
        	}

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.sta09.addEventHandler("onclick",this.sta09_onclick,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.gridMain.addEventHandler("onselectchanged",this.fn_Grid_SelectSearch,this);
            this.gridMain.addEventHandler("onheadclick",this.gridMain_onheadclick,this);
            this.edtBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtBranNm00.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div03.form.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.div03.form.tab00.tpGroupAuth.form.grd1.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.div03.form.tab00.tpGroupAuth.form.btnAddGroupAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.div03.form.tab00.tpGroupAuth.form.btnDeleteGroupAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.div03.form.tab00.tpGroupAuth.form.grd2.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.div03.form.tab00.tpWarehAuth.form.grd1.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.div03.form.tab00.tpWarehAuth.form.btnAddWarehAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.div03.form.tab00.tpWarehAuth.form.btnDeleteWarehAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.div03.form.tab00.tpWarehAuth.form.grd2.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.div03.form.tab00.tpCustAuth.form.grd1.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.div03.form.tab00.tpCustAuth.form.grd1.addEventHandler("onexpandup",this.div03_tab00_tpCustAuth_grd1_onexpandup,this);
            this.div03.form.btnAddCustAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.div03.form.btnDeleteCustAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.div03.form.btnSaveCustAuth.addEventHandler("onclick",this.btnOnClick,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.sta06.addEventHandler("onclick",this.tab00_Tabpage1_divTab1_sta06_onclick,this);
            this.tab00.Tabpage1.form.divTab1.form.edtShprId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchCust.addEventHandler("onclick",this.btnOnClick,this);
            this.tab00.Tabpage1.form.divTab1.form.btnIdChk.addEventHandler("onclick",this.tabUserInfo_Tabpage1_div00_btnIdChk_onclick,this);
            this.tab00.Tabpage1.form.divTab1.form.cboDutyDv.addEventHandler("ondropdown",this.tabUserInfo_Tabpage1_div00_cboJoinType_ondropdown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboDutyDv.addEventHandler("onitemchanged",this.tabUserInfo_Tabpage1_div00_cboJoinType_onitemchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.cboDelYn.addEventHandler("ondropdown",this.tabUserInfo_Tabpage1_div00_cboJoinType_ondropdown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboDelYn.addEventHandler("onitemchanged",this.tabUserInfo_Tabpage1_div00_cboJoinType_onitemchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.edtBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchBran.addEventHandler("onclick",this.btnOnClick,this);
            this.tab00.Tabpage1.form.divTab1.form.edtBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.dsUserList.addEventHandler("oncolumnchanged",this.dsUserList_oncolumnchanged,this);
            this.dsUserList.addEventHandler("onrowposchanged",this.dsUserList_onrowposchanged,this);
        };

        this.loadIncludeScript("BAIM_USER_0010_old_20200714.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
