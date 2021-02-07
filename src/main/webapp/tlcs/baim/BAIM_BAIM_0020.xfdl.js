(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_BAIM_0020");
            this.set_titletext("점소등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsBranDv=ds1 dsBranDutyDv=ds2 dsZnDv=ds3 dsBranSt=ds4 dsCpDv=ds5 dsTmDv=ds6 dsOwnrDv=ds7 dsTrustDv=ds8</Col><Col id=\"QUERY_LIST\">q1=MS002 q2=MS006 q3=MS035 q4=MS052 q5=MS005 q6=MS007 q7=MS003 q8=MS004</Col></Row><Row><Col id=\"SVC_ID\">getBranInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsDetail=ds1</Col><Col id=\"QUERY_LIST\">q1=baimBranMgmtService.getBranInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col></Row><Row><Col id=\"SVC_ID\">saveBranInfo</Col><Col id=\"IN_DATASET_LIST\">dsSave=dsDetail:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimBranMgmtService</Col><Col id=\"SERVICE_METHOD\">saveBranInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBranDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBranDutyDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZnDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBranSt", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOwnrDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTrustDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" size=\"256\" type=\"STRING\"/><Column id=\"BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_ABRV_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OPR_UP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_UP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_UP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_OPR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_MGMT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ENTRP_REG_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"FAX_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_START_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_END_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_FAIL_YMD_FR\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_FAIL_YMD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TRUNK_ABRV\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_MGMT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SALE_MGMT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_DLV_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_DLV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CAUTION\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"OWNR_DV\" type=\"STRING\" size=\"256\"/><Column id=\"TRUST_DV\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BZCON_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_DUTY_DV\" type=\"STRING\" size=\"256\"/><Column id=\"TM_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_ST\" type=\"STRING\" size=\"256\"/><Column id=\"PMON_BAL\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"REPRE_SORT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","stSearch:3","981","372",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_01_00","595","272","384","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","67","-2","263","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01","67","45","263","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("62");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","67","93","263","43",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","67","135","263","42",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","67","272","202","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","67","176","202","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00","67","224","202","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01","67","320","202","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("85");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001","0","-3","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("점       소");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_01_00_00","595","320","384","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","659","45","80","133",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("69");
            obj.set_text("특 이 사 항");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01_00","738","93",null,"85","384",null,null,null,null,null,this.div00.form);
            obj.set_taborder("99");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","45","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("8");
            obj.set_text("운영\r\n상위점소");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","93","68","84",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("사업자주소");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01","0","176","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("26");
            obj.set_text("대표\r\n전화번호");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00","0","224","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("54");
            obj.set_text("대  표   자");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00_00","0","320","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("55");
            obj.set_text("업       태");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_01","0","272","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("56");
            obj.set_text("영업\r\n관장사원");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01","329","-3","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("3");
            obj.set_text("점 소 구 분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","396","-2","583","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","659","-2","80","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("5");
            obj.set_text("영업\r\n개시일/종료일");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","738","-2",null,"49","384",null,null,null,null,null,this.div00.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","396","45","264","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01_00_00","329","45","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("집 화 불 가 일");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","738","45",null,"49","384",null,null,null,null,null,this.div00.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","396","134","264","43",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","329","93","68","84",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("20");
            obj.set_text("주        소");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_01","396","93","264","42",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02","268","176","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("51");
            obj.set_text("팩 스 번 호");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02_00","268","224","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("73");
            obj.set_text("사업자번호");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01","335","176","194","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("74");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00","335","224","194","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02_01","528","176","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("52");
            obj.set_text("전 화 번 호");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02_00_00","528","224","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("76");
            obj.set_text("소 유 구 분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01_00","595","176","384","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00","595","224","384","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02_01_00","797","176","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("79");
            obj.set_text("점소\r\n업무구분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02_00_00_00","797","224","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("80");
            obj.set_text("권 역 구 분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_01_00_00","894","176",null,"49","383",null,null,null,null,null,this.div00.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_00","894","224",null,"49","383",null,null,null,null,null,this.div00.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02_00_00_00_00","797","272","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("83");
            obj.set_text("점 소 상 태");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_00_00","894","272",null,"49","383",null,null,null,null,null,this.div00.form);
            obj.set_taborder("84");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00","335","320","194","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02_00_01_00","528","272","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("87");
            obj.set_text("위 탁 구 분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_02_00_00_00_00_00","797","320","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("89");
            obj.set_text("회 사 구 분");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_00_00_00","894","320",null,"49","383",null,null,null,null,null,this.div00.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtOprUpBranNm","184","59","125","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01_req");
            obj.set_readonly("false");
            obj.set_background("papayawhip");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtOprUpBranCd","70","59","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("inp_ty01_req");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","70","145","256","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_background("papayawhip");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranDetailAddr","399","145","256","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboBranDv","399","9","141","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("4");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsBranDv");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtSaleMgmtEmpNm","175","282","89","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtSaleMgmtEmpNo","70","282","81","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboZnDv","871","237","103","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("40");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsZnDv");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboBranSt","871","283","103","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("46");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsBranSt");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboCpDv","871","332","103","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("50");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsCpDv");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRepreNm","70","237","128","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBzconNm","70","332","194","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("47");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRepreSortCd","600","334","194","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("49");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtItemNm","339","332","186","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("48");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calSaleStartYmd","742","9","106","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_ty01_req");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calSaleEndYmd","868","9","106","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("cal_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calPidvFailYmdFr","399","58","106","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calPidvFailYmdTo","527","58","106","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("cal_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new TextArea("txtCaution","741","50","233","118",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("cboRepreTelNo3","215","190","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("29");
            obj.set_value("2345");
            obj.set_text("2345");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02_00","198","190","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("93");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("cboRepreTelNo2","149","190","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("28");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00","132","190","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("94");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta07","856","9","8","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("91");
            obj.set_text("-");
            obj.set_color("black");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta07_00","513","58","8","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("92");
            obj.set_text("-");
            obj.set_color("black");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("cboTelNo3","741","190","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("35");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","725","190","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("95");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("cboTelNo2","675","190","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("34");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","660","190","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("96");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("cboFaxNo3","476","190","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("32");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","462","190","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("97");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("cboFaxNo2","415","190","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("31");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","399","190","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("98");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboFaxNo1","339","190","61","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("30");
            obj.set_type("filterlike");
            obj.set_text("010");
            obj.set_index("18");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboBranDutyDv","871","190","103","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("36");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsBranDutyDv");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr1","160","102","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_search01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAddr","184","102","142","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01_req");
            obj.set_background("papayawhip");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtZipNo","70","102","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("false");
            obj.set_background("papayawhip");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranAddr","513","102","142","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("24");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr2","489","102","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_search01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranZipNo","399","102","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranCd2","70","9","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranNm2","161","9","125","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoTrustDv","605","288","184","20",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("45");
            obj.set_innerdataset("dsTrustDv");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mskEntrpRegNo","339","238","123","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("38");
            obj.set_format("###-##-#####");
            obj.set_limitbymask("both");
            obj.set_type("string");
            obj.set_cssclass("inp_ty01_req");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00_00_00_00","528","320","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("58");
            obj.set_text("대표\r\n분류코드");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00_00_00","268","272","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("57");
            obj.set_text("점 소 약 칭");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_01","335","272","194","49",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("100");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranAbrvNm","339","284","186","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("44");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_01_00_00_01","268","320","68","49",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("59");
            obj.set_text("종       목");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoOwnrDv","605","238","184","20",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("39");
            obj.set_innerdataset("dsOwnrDv");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboTelNo1","599","190","61","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("33");
            obj.set_type("filterlike");
            obj.set_text("010");
            obj.set_index("18");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboRepreTelNo1","70","190","61","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("27");
            obj.set_type("filterlike");
            obj.set_text("010");
            obj.set_index("18");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchBran2","160","59","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_search01");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSearchEmp","151","282","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("42");
            obj.set_cssclass("btn_search01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("staExeCorp","25","45","37","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("1");
            obj.set_text("점소");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","64","44","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchBran1","154","44","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","178","44","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
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

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
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
            obj = new BindItem("item1","tabUserInfo.Tabpage3.form.div00.form.cboSTelCd01","value","dsDetail","UTEL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div00.form.edtBranCd2","value","dsDetail","BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.edtBranNm2","value","dsDetail","BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.cboBranDv","value","dsDetail","BRAN_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.calSaleStartYmd","value","dsDetail","SALE_START_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.calSaleEndYmd","value","dsDetail","SALE_END_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div00.form.edtOprUpBranCd","value","dsDetail","OPR_UP_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.edtOprUpBranNm","value","dsDetail","OPR_UP_BRAN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div00.form.calPidvFailYmdFr","value","dsDetail","PIDV_FAIL_YMD_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.calPidvFailYmdTo","value","dsDetail","PIDV_FAIL_YMD_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div00.form.edtDetailAddr","value","dsDetail","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div00.form.edtZipNo","value","dsDetail","ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div00.form.edtAddr","value","dsDetail","ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div00.form.edtBranDetailAddr","value","dsDetail","BRAN_DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div00.form.edtBranZipNo","value","dsDetail","BRAN_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div00.form.edtBranAddr","value","dsDetail","BRAN_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div00.form.txtCaution","value","dsDetail","CAUTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","div00.form.cboRepreTelNo1","value","dsDetail","REPRE_TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div00.form.cboRepreTelNo2","value","dsDetail","REPRE_TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div00.form.cboRepreTelNo3","value","dsDetail","REPRE_TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div00.form.cboFaxNo1","value","dsDetail","FAX_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div00.form.cboFaxNo2","value","dsDetail","FAX_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div00.form.cboFaxNo3","value","dsDetail","FAX_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div00.form.cboTelNo1","value","dsDetail","TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","div00.form.cboTelNo2","value","dsDetail","TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","div00.form.cboTelNo3","value","dsDetail","TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","div00.form.cboBranDutyDv","value","dsDetail","BRAN_DUTY_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div00.form.edtRepreNm","value","dsDetail","REPRE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div00.form.mskEntrpRegNo","value","dsDetail","ENTRP_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div00.form.rdoOwnrDv","value","dsDetail","OWNR_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div00.form.cboZnDv","value","dsDetail","ZN_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div00.form.edtSaleMgmtEmpNo","value","dsDetail","SALE_MGMT_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div00.form.edtSaleMgmtEmpNm","value","dsDetail","SALE_MGMT_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","div00.form.edtBranAbrvNm","value","dsDetail","BRAN_ABRV_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","div00.form.rdoTrustDv","value","dsDetail","TRUST_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","div00.form.cboBranSt","value","dsDetail","BRAN_ST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","div00.form.edtBzconNm","value","dsDetail","BZCON_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","div00.form.edtItemNm","value","dsDetail","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","div00.form.edtRepreSortCd","value","dsDetail","REPRE_SORT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","div00.form.cboCpDv","value","dsDetail","CP_DV");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0020.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0020.xfdl", function() {
        /**
        *  점소 등록
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_0020.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.02.05
        *  @Desction        점소 등록
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.02.05		Kim Jin Hwan			최초 생성
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
        	this.fnAdd();
        };


         /***********************************************************************************************
         * @function	: form_onload
         * @description	: FORM init
         * @param		: obj	- nexacro.Form
         * @param		: e		- nexacro.EventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function()
        {
        	// 점소정보 데이터셋
        	this.dsDetail.clearData();
        	this.dsDetail.addRow();

        	// 점소코드 활성화
        	this.div00.form.edtBranCd2.set_enable(true);


        	// 공통코드조회
        	// 점소구분, 점소업무구분, 권역구분, 점소상태구분, 회사구분, 터미널구분, 소유구분, 위탁구분
        	this.gfnTransaction("commonCode");

        };

        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 점소 정보 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function() {

        	// 조회조건 필수입력 체크
        	var edtBranCdValue = this.edtBranCd.value;
        	if(this.gfnIsNull(edtBranCdValue)){
        		this.gfnAlert("조회조건의 점소코드를 입력해주세요.");
        		this.edtBranCd.setFocus();
        		return;
        	}

        	// 조회조건 init
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	this.dsSearch.setColumn(0, "BRAN_CD" 		,edtBranCdValue);	// 점소코드

        	this.dsDetail.clearData();

        	this.gfnTransaction("getBranInfo");

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
        	this.dsSearch.setColumn(0, "BRAN_CD", this.div00.form.edtBranCd2.value);	// 점소코드

        	this.gfnTransaction("getBranInfo");
        }


        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 점소 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {

        	var dsRowType = this.dsDetail.getRowType(0);	// 데이터셋 상태
        	if(dsRowType == Dataset.ROWTYPE_EMPTY || dsRowType == Dataset.ROWTYPE_NORMAL){
        		this.gfnAlert("저장할 내용이 없습니다.");
        		return;
        	}

        	// 폼 접근 변수
        	var divFm = this.div00.form;

        	var edtBranCd2Value = divFm.edtBranCd2.value;				// 점소코드
        	var edtBranNm2Value = divFm.edtBranNm2.value;				// 점소명
        	var edtBranAbrvNmValue = divFm.edtBranAbrvNm.value;			// 점소약칭
        	var cboBranDvValue = divFm.cboBranDv.value;					// 점소구분
        	var calSaleStartYmdValue = divFm.calSaleStartYmd.value;		// 영업개시일(FROM)
        	var calSaleEndYmdValue = divFm.calSaleEndYmd.value;			// 영업개시일(TO)
        	var calPidvFailYmdFrValue = divFm.calPidvFailYmdFr.value;	// 집하불가일(FROM)
        	var calPidvFailYmdToValue = divFm.calPidvFailYmdTo.value;	// 집하불가일(TO)
        	var edtOprUpBranCdValue = divFm.edtOprUpBranCd.value;		// 운영상위점소코드
        	var edtOprUpBranNmValue = divFm.edtOprUpBranNm.value;		// 운영상위점소명
        	//var edtMgmtUpBranCdValue = divFm.edtMgmtUpBranCd.value;		// 관리상위점소코드
        	//var edtMgmtUpBranNmValue = divFm.edtMgmtUpBranNm.value;		// 관리상위점소명
        	var edtZipNoValue = divFm.edtZipNo.value;					// 사업자우편번호
        	var edtAddrValue = divFm.edtAddr.value;						// 사업자주소
        	var edtDetailAddrValue = divFm.edtDetailAddr.value;			// 사업자상세주소
        	var edtBranZipNoValue = divFm.edtBranZipNo.value;			// 점소우편번호
        	var edtBranAddrValue = divFm.edtBranAddr.value;				// 점소주소
        	var edtBranDetailAddrValue = divFm.edtBranDetailAddr.value;	// 점소상세주소
        	var edtRepreNmValue = divFm.edtRepreNm.value;				// 대표자명
        	var cboRepreTelNo1Value = divFm.cboRepreTelNo1.value;		// 대표자전화번호1
        	var cboRepreTelNo2Value = divFm.cboRepreTelNo2.value;		// 대표자전화번호2
        	var cboRepreTelNo3Value = divFm.cboRepreTelNo3.value;		// 대표자전화번호3
        	var cboCpDvValue = divFm.cboCpDv.value;						// 회사구분
        	var mskEntrpRegNoValue = divFm.mskEntrpRegNo.value;			// 사업자번호
        	var cboBranDutyDvValue = divFm.cboBranDutyDv.value;			// 점소업무구분
        	var cboZnDvValue = divFm.cboZnDv.value;						// 권역구분
        	var edtSaleMgmtEmpNoValue = divFm.edtSaleMgmtEmpNo.value;	// 영업관장사원번호
        	var edtSaleMgmtEmpNmValue = divFm.edtSaleMgmtEmpNm.value;	// 영업관장사원명



        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	// 공통 필수 입력 체크.
        	// 점소코드
        	if(this.gfnIsNull(this.gfnTrim(edtBranCd2Value)) ){
        		this.gfnAlert("점소코드를 입력해주세요.");
        		divFm.edtBranCd2.setFocus();
        		return;
        	}
        	// 점소명
        	if(this.gfnIsNull(this.gfnTrim(edtBranNm2Value)) ){
        		this.gfnAlert("점소명을 입력해주세요.");
        		divFm.edtBranNm2.setFocus();
        		return;
        	}
        	// 점소구분
        	if(this.gfnIsNull(this.gfnTrim(cboBranDvValue)) ){
        		this.gfnAlert("점소구분을 선택해주세요.");
        		divFm.cboBranDv.setFocus();
        		return;
        	}
        	// 본사가 아닐때만 상위점소 체크.
        	if(cboBranDvValue != "01"){
        		// 운영상위점소코드
        		if(this.gfnIsNull(this.gfnTrim(edtOprUpBranCdValue)) ){
        			this.gfnAlert("운영상위점소코드를 입력해주세요.");
        			divFm.edtOprUpBranCd.setFocus();
        			return;
        		}
        		// 운영상위점소명
        		if(this.gfnIsNull(this.gfnTrim(edtOprUpBranNmValue)) ){
        			this.gfnAlert("운영상위점소명을 입력해주세요.");
        			divFm.edtOprUpBranNm.setFocus();
        			return;
        		}
        		/*
        		// 관리상위점소코드
        		if(this.gfnIsNull(this.gfnTrim(edtMgmtUpBranCdValue)) ){
        			this.gfnAlert("관리상위점소코드를 입력해주세요.");
        			divFm.edtMgmtUpBranCd.setFocus();
        			return;
        		}
        		// 관리상위점소명
        		if(this.gfnIsNull(this.gfnTrim(edtMgmtUpBranNmValue)) ){
        			this.gfnAlert("관리상위점소명을 입력해주세요.");
        			divFm.edtMgmtUpBranNm.setFocus();
        			return;
        		}
        		*/
        	}
        	// 영업개시일
        	if(this.gfnIsNull(this.gfnTrim(calSaleStartYmdValue)) ){
        		this.gfnAlert("영업개시일을 입력해주세요.");
        		divFm.calSaleStartYmd.setFocus();
        		return;
        	}
        	// 사업자우편번호
        	if(this.gfnIsNull(this.gfnTrim(edtZipNoValue)) ){
        		this.gfnAlert("사업자우편번호를 입력해주세요.");
        		divFm.edtZipNo.setFocus();
        		return;
        	}
        	// 사업자주소
        	if(this.gfnIsNull(this.gfnTrim(edtAddrValue)) ){
        		this.gfnAlert("사업자주소를 입력해주세요.");
        		divFm.edtAddr.setFocus();
        		return;
        	}
        	// 사업자상세주소
        	if(this.gfnIsNull(this.gfnTrim(edtDetailAddrValue)) ){
        		this.gfnAlert("사업자상세주소를 입력해주세요.");
        		divFm.edtDetailAddr.setFocus();
        		return;
        	}
        	// 대표자전화번호1
        	if(this.gfnIsNull(this.gfnTrim(cboRepreTelNo1Value)) ){
        		this.gfnAlert("대표자전화번호1을 입력해주세요.");
        		divFm.cboRepreTelNo1.setFocus();
        		return;
        	}
        	// 대표자전화번호2
        	if(this.gfnIsNull(this.gfnTrim(cboRepreTelNo2Value)) ){
        		this.gfnAlert("대표자전화번호2을 입력해주세요.");
        		divFm.RepreTelNo2.setFocus();
        		return;
        	}
        	// 대표자전화번호3
        	if(this.gfnIsNull(this.gfnTrim(cboRepreTelNo3Value)) ){
        		this.gfnAlert("대표자전화번호3을 입력해주세요.");
        		divFm.cboRepreTelNo3.setFocus();
        		return;
        	}
        	// 대표자명
        	if(this.gfnIsNull(this.gfnTrim(edtRepreNmValue)) ){
        		this.gfnAlert("대표자명을 입력해주세요.");
        		divFm.edtRepreNm.setFocus();
        		return;
        	}
        	// 회사구분
        	if(this.gfnIsNull(this.gfnTrim(cboCpDvValue)) ){
        		this.gfnAlert("회사구분을 선택해주세요.");
        		divFm.cboCpDv.setFocus();
        		return;
        	}

        	// 영업관장사원번호를 입력했는데 사원명이 없는경우
        	if( !this.gfnIsNull(edtSaleMgmtEmpNoValue)){
        		if(this.gfnIsNull(edtSaleMgmtEmpNmValue)){
        			this.gfnAlert("영업관장사원명을 입력해주세요.");
        			divFm.edtSaleMgmtEmpNm.setFocus();
        			return;
        		}
        	}



        	// 점소구분이 "터미널(19)"이 아닌경우.
        	if(cboBranDvValue != "19"){

        		// 사업자번호 필수입력체크.
        		if(this.gfnIsNull(this.gfnTrim(mskEntrpRegNoValue)) ){
        			this.gfnAlert("사업자 번호를 입력해주세요.");
        			divFm.mskEntrpRegNo.setFocus();
        			return;
        		}
        		// 사업자번호 유효성체크.
        		else{
        			if( !this.fnChkEntrpRegNo(this.gfnTrim(mskEntrpRegNoValue)) ){
        				this.gfnAlert("사업자 번호를 확인해주세요.");
        				divFm.mskEntrpRegNo.setFocus();
        				return;
        			}
        		}

        		// 점소업무구분 필수입력체크.
        		if(this.gfnIsNull(cboBranDutyDvValue)){
        			this.gfnAlert("점소업무구분을 선택해주세요.");
        			divFm.cboBranDutyDv.setFocus();
        			return;
        		}
        	}

        	// 점소구분이 "터미널(19)"인 경우.
        	if(cboBranDvValue == "19"){

        		// 권역구분 필수입력체크.
        		if(this.gfnIsNull(cboZnDvValue)){
        			this.gfnAlert("권역구분을 선택해주세요.");
        			divFm.cboZnDv.setFocus();
        			return;
        		}
        	}

        	// 점소구분이 "대리점(22)"인 경우.
        	if(cboBranDvValue == "22"){

        		// 영업관장사원 필수입력체크.
        		if(this.gfnIsNull(edtSaleMgmtEmpNoValue) || this.gfnIsNull(edtSaleMgmtEmpNmValue)){
        			this.gfnAlert("영업관장사원을 입력해주세요.");
        			divFm.edtSaleMgmtEmpNo.setFocus();
        			return;
        		}

        		// 점소약칭 필수입력체크.
        		if(this.gfnIsNull(edtBranAbrvNmValue)){
        			this.gfnAlert("점소약칭을 입력해주세요.");
        			divFm.edtBranAbrvNm.setFocus();
        			return;
        		}
        	}

        	// 영업개시일,종료일 비교 (개시일이 종료일보다 클수 없음.)
        	if( !this.gfnIsNull(calSaleEndYmdValue) ){	// 종료일이 입력된경우만 체크.

        		if( !this.fnChkCalDate(calSaleStartYmdValue, calSaleEndYmdValue, "영업종료일이 개시일보다 빠를수 없습니다.") ){
        			divFm.calSaleEndYmd.setFocus();
        			return;
        		}

        	}


        	// 집하불가일(FROM~TO) 비교 (FROM일자가 TO일자보다 클수 없음.)
        	if( !this.gfnIsNull(calPidvFailYmdToValue) && !this.gfnIsNull(calPidvFailYmdFrValue)){	// 종료일이 입력된경우만 체크.

        		if( !this.fnChkCalDate(calPidvFailYmdFrValue, calPidvFailYmdToValue, "집하불가일(TO)일자가 (FROM)일자보다 빠를수 없습니다.") ){
        			divFm.calPidvFailYmdTo.setFocus();
        			return;
        		}

        	}


        	/****************************************************************************************************/


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveBranInfo");
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
        	//trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

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
        		case "getBranInfo" :
        			// 점소코드 비활성화
        			this.div00.form.edtBranCd2.set_enable(false);

        			// 점소구분에 따라 스타일변경
        			this.fnChgCompStyleByBranCd(this.dsDetail.getColumn(0,"BRAN_DV"));
        		break;


        		// 저장
        		case "saveBranInfo" :
        			this.gfnAlert("저장되었습니다.");

        			// 조회
        			this.fnSearchAfterSave();
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

        	// 폼 접근 변수
        	var divFm = this.div00.form;

        	switch(sPopupId) {
        		case "searchPopAddr1" :
        			divFm.edtZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));	// 우편번호
        			divFm.edtAddr.set_value(dsObj.getColumn(0,"ADDR"));		// 주소
        			divFm.edtDetailAddr.setFocus();
        		break;

        		case "searchPopAddr2" :
        			divFm.edtBranZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));	// 우편번호
        			divFm.edtBranAddr.set_value(dsObj.getColumn(0,"ADDR"));		// 주소
        			divFm.edtBranDetailAddr.setFocus();
        		break;


        		case "searchPopBran1" :
        			this.edtBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			this.edtBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));

        			if(! this.gfnIsNull(dsObj.getColumn(0, "BRAN_CD"))){
        				this.fnSearch();
        			}

        		break;

        		case "searchPopBran2" :
        			divFm.edtOprUpBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtOprUpBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "searchPopBran3" :
        			divFm.edtMgmtUpBranCd.set_value(dsObj.getColumn(0, "BRAN_CD"));
        			divFm.edtMgmtUpBranNm.set_value(dsObj.getColumn(0, "BRAN_NM"));
        		break;

        		case "searchPopEmp1" :
        			divFm.edtSaleMgmtEmpNo.set_value(dsObj.getColumn(0, "EMP_NO"));
        			divFm.edtSaleMgmtEmpNm.set_value(dsObj.getColumn(0, "EMP_NM"));
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
        	// 폼 접근 변수
        	var divFm = this.div00.form;


        	// 영업개시일
        	divFm.calSaleStartYmd.set_value(this.gfnGetDate("date"));

        	// 점소업무구분
        	this.fnAddCodeDef(this.dsBranDutyDv, '선택');
        	divFm.cboBranDutyDv.set_index(1);

        	// 권역구분
        	this.fnAddCodeDef(this.dsZnDv, '선택');
        	divFm.cboZnDv.set_index(0);

        	// 점소상태
        	this.fnAddCodeDef(this.dsBranSt, '선택');
        	divFm.cboBranSt.set_index(1);

        	// 회사구분
        	this.fnAddCodeDef(this.dsCpDv, '선택');
        	divFm.cboCpDv.set_index(1);

        	// 위탁구분
        	divFm.rdoTrustDv.set_index(0);
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
        		case "btnSearchAddr1" :	this.fnOpenPopAddr(btnName); break;
        		case "btnSearchAddr2"	: this.fnOpenPopAddr(btnName); break;

        		case "btnSearchBran1"	: this.fnOpenPopBran(btnName); break;
        		case "btnSearchBran2"	: this.fnOpenPopBran(btnName); break;
        		case "btnSearchBran3"	: this.fnOpenPopBran(btnName); break;

        		case "btnSearchEmp" : this.fnOpenPopEmp(); break;

        		default 		: 	break;
        	}
        };



        /***********************************************************************************************
         * @function		: fnOpenPopAddr
         * @description		: 우편번호 주소 조회 팝업 호출
         * @param 			: fnOpenPopAddr	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopAddr = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID


        	if(btnName == "btnSearchAddr1"){
        		popupId = 'searchPopAddr1';
        	}else{
        		popupId = 'searchPopAddr2';
        	}


        	// 팝업 호출
        	var oArg = {
        				  pSeqNo	 	: ""											//
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
         * @function	: fnOpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopBran = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pBranCdValue = '';	// 점소코드
        	var pBranNmValue = '';	// 점소명

        	if(btnName == "btnSearchBran1"){
        		popupId = 'searchPopBran1';
        		pBranCdValue = this.edtBranCd.value;
        		pBranNmValue = this.edtBranNm.value;
        	}else if(btnName == "btnSearchBran2"){
        		popupId = 'searchPopBran2';
        		pBranCdValue = this.div00.form.edtOprUpBranCd.value;
        	}else{
        		popupId = 'searchPopBran3';
        		pBranCdValue = this.div00.form.edtMgmtUpBranCd.value;
        	}


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
         * @function		: fnOpenPopEmp
         * @description		: 사원 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopEmp= function()
        {
        	// 파라미터 설정
        	var popupId = 'searchPopEmp1';	//팝업ID

        	var pEmpNoValue = this.div00.form.edtSaleMgmtEmpNo.value; //사원번호



        	// 팝업 호출
        	var oArg = {
        				  pEmpNo		: pEmpNoValue									// 사원번호
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P040.xfdl", oArg, sPopupCallBack, oOption);
        }

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
         * @function	: fnChgCompStyleByBranCd
         * @description	: 점소구분에 따라 컴포넌트 스타일변경
         * @param       : pBranDv - String
         * @return N/A
        /***********************************************************************************************/
        this.fnChgCompStyleByBranCd = function(pBranDv)
        {
        	// 터미널인 경우
        	if(pBranDv == "19"){
        		this.div00.form.cboZnDv.set_background('papayawhip');
        	} else {
        		this.div00.form.cboZnDv.set_background('');
        	}

        	// 대리점인 경우
        	if(pBranDv == "22"){
        		this.div00.form.edtSaleMgmtEmpNo.set_background('papayawhip');
        		this.div00.form.edtSaleMgmtEmpNm.set_background('papayawhip');

        		this.div00.form.edtBranAbrvNm.set_background('papayawhip');
        	} else {
        		this.div00.form.edtSaleMgmtEmpNo.set_background('');
        		this.div00.form.edtSaleMgmtEmpNm.set_background('');

        		this.div00.form.edtBranAbrvNm.set_background('');
        	}
        }




         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btn00_onclick = function(obj,e)
        {
        	var oArg = {pName			: ""		//
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};
        	var sPopupCallBack = "fncmmAddr";
        	this.gfnOpenPopup("popup","baim::BAIM_BAIM_P010.xfdl", oArg, sPopupCallBack, oOption);
        };


        /**
        * @description from일자 to일자 체크
        */
        this.fnChkCalDate = function(sFDate, sTDate, sMsg)
        {
        	var nRtnCnt = this.gfnGetDiffDate(sFDate, sTDate);
        	if(nRtnCnt < 0){
        		this.alert(sMsg);
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
        			case	'edtBranCd' : this.btnSearchBran1.click();	break;
        			case	'edtBranNm'	: this.btnSearchBran1.click();	break;
        			case	'edtOprUpBranCd' : this.div00.form.btnSearchBran2.click(); break;
        			case	'edtMgmtUpBranCd' : this.div00.form.btnSearchBran3.click(); break;
        			case    'edtSaleMgmtEmpNo' : this.div00.form.btnSearchEmp.click(); break;
        			default		: 	break;
        		}
        	}
        	else{
        		switch( objName ) {
        			case	'edtOprUpBranCd' : this.div00.form.edtOprUpBranNm.set_value(''); break;
        			case	'edtMgmtUpBranCd' : this.div00.form.edtMgmtUpBranNm.set_value(''); break;
        			case	'edtSaleMgmtEmpNo' : this.div00.form.edtSaleMgmtEmpNm.set_value(''); break;
        			default		: 	break;
        		}
        	}
        };


        // 점소구분 변경 이벤트
        this.div00_cboBranDv_canitemchange = function(obj,e)
        {

        	this.fnChgCompStyleByBranCd(e.postvalue);

        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.div00.form.sta00_01_00.addEventHandler("onclick",this.div00_sta00_01_00_onclick,this);
            this.div00.form.sta00_01_00_00.addEventHandler("onclick",this.div00_sta00_01_00_onclick,this);
            this.div00.form.sta00_01_01.addEventHandler("onclick",this.div00_sta00_01_01_onclick,this);
            this.div00.form.sta00_01_01_01.addEventHandler("onclick",this.div00_sta00_01_01_onclick,this);
            this.div00.form.sta001.addEventHandler("onclick",this.div00_sta001_onclick,this);
            this.div00.form.sta00_01_00_01_00.addEventHandler("onclick",this.div00_sta00_01_00_onclick,this);
            this.div00.form.sta00_01_00_00_00.addEventHandler("onclick",this.div00_sta00_01_00_onclick,this);
            this.div00.form.sta00_01_00_01.addEventHandler("onclick",this.div00_sta00_01_00_onclick,this);
            this.div00.form.sta00_01_01_01_00.addEventHandler("onclick",this.div00_sta00_01_01_onclick,this);
            this.div00.form.edtOprUpBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.cboBranDv.addEventHandler("canitemchange",this.div00_cboBranDv_canitemchange,this);
            this.div00.form.edtSaleMgmtEmpNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.calPidvFailYmdFr.addEventHandler("canchange",this.div00_calPidvFailYmdFr_canchange,this);
            this.div00.form.btnSearchAddr1.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.btnSearchAddr2.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.btnSearchBran2.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.btnSearchEmp.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.btnSearchBran1.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsDetail.addEventHandler("oncolumnchanged",this.dsDetail_oncolumnchanged,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0020.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
