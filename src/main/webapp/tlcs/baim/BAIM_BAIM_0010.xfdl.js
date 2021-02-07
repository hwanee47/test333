(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_BAIM_0010");
            this.set_titletext("집배구역관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCpDv=ds1 dsFchrgOrgnz=ds2 dsDv=ds3 dsZnDv=ds4 dsDlvRgn=ds5 dsIlnrgnDv=ds6</Col><Col id=\"QUERY_LIST\">q1=MS005 q2=MS045 q3=MS058 q4=MS035 q5=MS036 q6=MS037</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col></Row><Row><Col id=\"SVC_ID\">savePidvZnDetailInfoList</Col><Col id=\"IN_DATASET_LIST\">dsSaveList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimPidvZnMgmtService</Col><Col id=\"SERVICE_METHOD\">savePidvZnDetailInfoList</Col></Row><Row><Col id=\"SVC_ID\">savePidvZnChgList</Col><Col id=\"IN_DATASET_LIST\">dsSaveList=dsSaveList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimPidvZnMgmtService</Col><Col id=\"SERVICE_METHOD\">savePidvZnChgList</Col></Row><Row><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SVC_ID\">getPiDvZnMstList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimPidvZnMgmtService</Col><Col id=\"SERVICE_METHOD\">getPiDvZnMstList</Col></Row><Row><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SVC_ID\">getSubBranInfoList</Col><Col id=\"OUT_DATASET_LIST\">dsList2=dsList</Col><Col id=\"SERVICE_BEANNAME\">baimPidvZnMgmtService</Col><Col id=\"SERVICE_METHOD\">getSubBranInfoList</Col></Row><Row><Col id=\"SVC_ID\">getSidoList</Col><Col id=\"OUT_DATASET_LIST\">dsSido=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getSidoList</Col><Col id=\"IN_DATASET_LIST\"/><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">getSkkList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsSkk=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getSkkListBySido</Col></Row><Row><Col id=\"SVC_ID\">getEmdongList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsEmdong=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getEmdongListBySkk</Col></Row><Row><Col id=\"SVC_ID\">getEmpList</Col><Col id=\"IN_DATASET_LIST\"/><Col id=\"OUT_DATASET_LIST\"/><Col id=\"QUERY_LIST\"/><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimEmpMgmtService</Col><Col id=\"SERVICE_METHOD\">getEmpList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CP_DV\" size=\"256\" type=\"STRING\"/><Column id=\"FCHRG_ORGNZ\" type=\"STRING\" size=\"256\"/><Column id=\"SI_DO\" type=\"STRING\" size=\"256\"/><Column id=\"SKK\" type=\"STRING\" size=\"256\"/><Column id=\"EMDONG\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REG_DV\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFchrgOrgnz", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZnDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlvRgn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDlvNeedSumday", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">1</Col><Col id=\"CD_NM\">1</Col></Row><Row><Col id=\"CD\">2</Col><Col id=\"CD_NM\">2</Col></Row><Row><Col id=\"CD\">3</Col><Col id=\"CD_NM\">3</Col></Row><Row><Col id=\"CD\">4</Col><Col id=\"CD_NM\">4</Col></Row><Row><Col id=\"CD\">5</Col><Col id=\"CD_NM\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIlnrgnDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"SIDO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SKK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMDONG_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_ORGNZ\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"RGN_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EXPCT_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EXPCT_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FERRY_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AIR_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DLV_NEED_SUMDAY\" type=\"STRING\" size=\"256\"/><Column id=\"ILNRGN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_PICKUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_RCPT_DLINE_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_FAIL_YMD_FR\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_FAIL_YMD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HDAY_GRP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BRAN_NM\" size=\"256\" type=\"STRING\"/><Column id=\"PIDV_DV\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSaveList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" size=\"256\" type=\"STRING\"/><Column id=\"ZIP_NO_SERIAL\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"FCHRG_ORGNZ\" type=\"STRING\" size=\"256\"/><Column id=\"ZN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"RGN_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EXPCT_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EXPCT_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"DLV_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FERRY_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AIR_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DLV_NEED_SUMDAY\" type=\"STRING\" size=\"256\"/><Column id=\"ILNRGN_DV\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_PICKUP_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DAY_RCPT_DLINE_HOUR\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_FAIL_YMD_FR\" type=\"STRING\" size=\"256\"/><Column id=\"PIDV_FAIL_YMD_TO\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HDAY_GRP_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ZIP_NO\">08381</Col><Col id=\"ZIP_NO_SERIAL\">3</Col><Col id=\"CHK\">0</Col><Col id=\"ADDR\">서울특별시 구로구 디지털로27길 24 (구로동, 벽산디지털밸리1차) 607호</Col><Col id=\"ZN_DV\"/><Col id=\"RGN_DV_CD\"/><Col id=\"PICKUP_BRAN_CD\"/><Col id=\"PICKUP_EXPCT_HOUR\"/><Col id=\"PICKUP_EMP_NO\"/><Col id=\"DLV_BRAN_CD\"/><Col id=\"DLV_EXPCT_HOUR\"/><Col id=\"DAY_RCPT_DLINE_HOUR\"/><Col id=\"FERRY_RATE\"/><Col id=\"PIDV_FAIL_YMD_FR\"/><Col id=\"HDAY_GRP_CD\"/><Col id=\"SORT_CD\"/><Col id=\"PIDV_FAIL_YMD_TO\"/><Col id=\"DAY_PICKUP_YN\"/><Col id=\"ILNRGN_DV\"/><Col id=\"DLV_NEED_SUMDAY\"/><Col id=\"AIR_RATE\"/><Col id=\"DLV_EMP_NO\"/><Col id=\"FCHRG_ORGNZ\"/><Col id=\"CP_DV\"/></Row><Row><Col id=\"ZIP_NO\">22</Col><Col id=\"ZIP_NO_SERIAL\">4</Col><Col id=\"CHK\">0</Col><Col id=\"ZN_DV\"/><Col id=\"RGN_DV_CD\"/><Col id=\"PICKUP_BRAN_CD\"/><Col id=\"DLV_EXPCT_HOUR\"/><Col id=\"DLV_BRAN_CD\"/><Col id=\"PICKUP_EMP_NO\"/><Col id=\"PICKUP_EXPCT_HOUR\"/><Col id=\"PIDV_FAIL_YMD_FR\"/><Col id=\"FERRY_RATE\"/><Col id=\"DAY_RCPT_DLINE_HOUR\"/><Col id=\"SORT_CD\"/><Col id=\"HDAY_GRP_CD\"/><Col id=\"PIDV_FAIL_YMD_TO\"/><Col id=\"DAY_PICKUP_YN\"/><Col id=\"ILNRGN_DV\"/><Col id=\"AIR_RATE\"/><Col id=\"DLV_NEED_SUMDAY\"/><Col id=\"DLV_EMP_NO\"/><Col id=\"FCHRG_ORGNZ\"/><Col id=\"CP_DV\"/></Row><Row><Col id=\"ZIP_NO\">101</Col><Col id=\"ZIP_NO_SERIAL\">1</Col><Col id=\"CHK\">0</Col><Col id=\"ZN_DV\"/><Col id=\"RGN_DV_CD\"/><Col id=\"PICKUP_BRAN_CD\"/><Col id=\"PICKUP_EXPCT_HOUR\"/><Col id=\"SORT_CD\"/><Col id=\"PIDV_FAIL_YMD_TO\"/><Col id=\"DLV_EXPCT_HOUR\"/><Col id=\"FERRY_RATE\"/><Col id=\"AIR_RATE\"/><Col id=\"DAY_RCPT_DLINE_HOUR\"/><Col id=\"HDAY_GRP_CD\"/><Col id=\"PIDV_FAIL_YMD_FR\"/><Col id=\"DAY_PICKUP_YN\"/><Col id=\"DLV_NEED_SUMDAY\"/><Col id=\"ILNRGN_DV\"/><Col id=\"DLV_EMP_NO\"/><Col id=\"DLV_BRAN_CD\"/><Col id=\"PICKUP_EMP_NO\"/><Col id=\"FCHRG_ORGNZ\"/><Col id=\"CP_DV\"/></Row><Row><Col id=\"ZIP_NO\">83</Col><Col id=\"ZIP_NO_SERIAL\">10</Col><Col id=\"CHK\">0</Col><Col id=\"ZN_DV\"/><Col id=\"RGN_DV_CD\"/><Col id=\"PICKUP_BRAN_CD\"/><Col id=\"PIDV_FAIL_YMD_TO\"/><Col id=\"FERRY_RATE\"/><Col id=\"PICKUP_EXPCT_HOUR\"/><Col id=\"DAY_RCPT_DLINE_HOUR\"/><Col id=\"HDAY_GRP_CD\"/><Col id=\"SORT_CD\"/><Col id=\"PIDV_FAIL_YMD_FR\"/><Col id=\"DAY_PICKUP_YN\"/><Col id=\"ILNRGN_DV\"/><Col id=\"DLV_NEED_SUMDAY\"/><Col id=\"AIR_RATE\"/><Col id=\"DLV_EMP_NO\"/><Col id=\"DLV_EXPCT_HOUR\"/><Col id=\"DLV_BRAN_CD\"/><Col id=\"PICKUP_EMP_NO\"/><Col id=\"FCHRG_ORGNZ\"/><Col id=\"CP_DV\"/></Row><Row><Col id=\"ZIP_NO\">5</Col><Col id=\"ZIP_NO_SERIAL\">3</Col><Col id=\"CHK\">0</Col><Col id=\"ZN_DV\"/><Col id=\"PICKUP_BRAN_CD\"/><Col id=\"RGN_DV_CD\"/><Col id=\"SORT_CD\"/><Col id=\"PICKUP_EXPCT_HOUR\"/><Col id=\"PICKUP_EMP_NO\"/><Col id=\"DLV_BRAN_CD\"/><Col id=\"DLV_EXPCT_HOUR\"/><Col id=\"HDAY_GRP_CD\"/><Col id=\"FERRY_RATE\"/><Col id=\"DAY_RCPT_DLINE_HOUR\"/><Col id=\"PIDV_FAIL_YMD_TO\"/><Col id=\"PIDV_FAIL_YMD_FR\"/><Col id=\"DAY_PICKUP_YN\"/><Col id=\"AIR_RATE\"/><Col id=\"DLV_NEED_SUMDAY\"/><Col id=\"ILNRGN_DV\"/><Col id=\"DLV_EMP_NO\"/><Col id=\"FCHRG_ORGNZ\"/><Col id=\"CP_DV\"/></Row><Row><Col id=\"ZIP_NO\">90</Col><Col id=\"ZIP_NO_SERIAL\">1</Col><Col id=\"CHK\">0</Col><Col id=\"ZN_DV\"/><Col id=\"PICKUP_BRAN_CD\"/><Col id=\"RGN_DV_CD\"/><Col id=\"DAY_RCPT_DLINE_HOUR\"/><Col id=\"SORT_CD\"/><Col id=\"HDAY_GRP_CD\"/><Col id=\"PIDV_FAIL_YMD_TO\"/><Col id=\"PIDV_FAIL_YMD_FR\"/><Col id=\"DAY_PICKUP_YN\"/><Col id=\"ILNRGN_DV\"/><Col id=\"DLV_NEED_SUMDAY\"/><Col id=\"AIR_RATE\"/><Col id=\"FERRY_RATE\"/><Col id=\"DLV_EMP_NO\"/><Col id=\"DLV_EXPCT_HOUR\"/><Col id=\"PICKUP_EMP_NO\"/><Col id=\"DLV_BRAN_CD\"/><Col id=\"PICKUP_EXPCT_HOUR\"/><Col id=\"FCHRG_ORGNZ\"/><Col id=\"CP_DV\"/></Row><Row><Col id=\"ZIP_NO\">1525</Col><Col id=\"ZIP_NO_SERIAL\">53</Col><Col id=\"CHK\">0</Col><Col id=\"ZN_DV\"/><Col id=\"PICKUP_BRAN_CD\"/><Col id=\"RGN_DV_CD\"/><Col id=\"DAY_RCPT_DLINE_HOUR\"/><Col id=\"HDAY_GRP_CD\"/><Col id=\"SORT_CD\"/><Col id=\"PIDV_FAIL_YMD_TO\"/><Col id=\"PIDV_FAIL_YMD_FR\"/><Col id=\"DAY_PICKUP_YN\"/><Col id=\"ILNRGN_DV\"/><Col id=\"DLV_NEED_SUMDAY\"/><Col id=\"AIR_RATE\"/><Col id=\"FERRY_RATE\"/><Col id=\"DLV_EMP_NO\"/><Col id=\"DLV_EXPCT_HOUR\"/><Col id=\"PICKUP_EMP_NO\"/><Col id=\"DLV_BRAN_CD\"/><Col id=\"PICKUP_EXPCT_HOUR\"/><Col id=\"FCHRG_ORGNZ\"/><Col id=\"CP_DV\"/></Row><Row><Col id=\"ZIP_NO\">11</Col><Col id=\"ZIP_NO_SERIAL\">5</Col><Col id=\"ZN_DV\"/><Col id=\"RGN_DV_CD\"/><Col id=\"PICKUP_BRAN_CD\"/><Col id=\"AIR_RATE\"/><Col id=\"PICKUP_EXPCT_HOUR\"/><Col id=\"PICKUP_EMP_NO\"/><Col id=\"DLV_NEED_SUMDAY\"/><Col id=\"ILNRGN_DV\"/><Col id=\"DAY_PICKUP_YN\"/><Col id=\"DAY_RCPT_DLINE_HOUR\"/><Col id=\"HDAY_GRP_CD\"/><Col id=\"SORT_CD\"/><Col id=\"PIDV_FAIL_YMD_FR\"/><Col id=\"PIDV_FAIL_YMD_TO\"/><Col id=\"FERRY_RATE\"/><Col id=\"DLV_EMP_NO\"/><Col id=\"DLV_EXPCT_HOUR\"/><Col id=\"DLV_BRAN_CD\"/><Col id=\"FCHRG_ORGNZ\"/><Col id=\"CP_DV\"/></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsZipAddrDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">지번</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">도로명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSido", this);
            obj._setContents("<ColumnInfo><Column id=\"SIDO_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSkk", this);
            obj._setContents("<ColumnInfo><Column id=\"SIDO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SKK_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmdong", this);
            obj._setContents("<ColumnInfo><Column id=\"EMDONG_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPkEmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDvEmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"70","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staShpr","25","43","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0160");
            obj.set_taborder("1");
            obj.set_text("전담조직");
            this.addChild(obj.name, obj);

            obj = new Combo("cboFchrgOrgnz","85","43","141","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsFchrgOrgnz");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc","246","43","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("8");
            obj.set_text("점소");
            this.addChild(obj.name, obj);

            obj = new Static("staShpr00","565","76","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0160");
            obj.set_taborder("3");
            obj.set_text("등록구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboDv","621","74","150","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("4");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsDv");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","405","43","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnBranSearch","381","43","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","291","43","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Grid("gridMain","0","stSearch:2",null,null,"390","7",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("none");
            obj.set_cssclass("tb_ty01");
            obj.set_enable("true");
            obj.set_taborder("9");
            obj.set_selecttype("area");
            obj.set_autosizingtype("col");
            obj.set_autosizebandtype("allband");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"31\" band=\"left\"/><Column size=\"31\" band=\"left\"/><Column size=\"58\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"90\"/><Column size=\"99\"/><Column size=\"94\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"122\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"false\"/><Cell col=\"1\" text=\"No\" autosizecol=\"limitmax\"/><Cell col=\"2\" accessibilitydescription=\"T0160\" text=\"우편번호\"/><Cell col=\"3\" accessibilitydescription=\"T0655\" text=\"시도\" autosizecol=\"limitmin\"/><Cell col=\"4\" text=\"시군구\"/><Cell col=\"5\" text=\"읍면동\"/><Cell col=\"6\" accessibilitydescription=\"T0360\" text=\"집하점소\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"7\" accessibilitydescription=\"T0317\" text=\"집하사원\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"8\" accessibilitydescription=\"T0145\" text=\"배송점소\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"9\" accessibilitydescription=\"T1869\" text=\"배송사원\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"10\" accessibilitydescription=\"T1868\" text=\"권역구분\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\" autosizecol=\"none\"/><Cell col=\"11\" accessibilitydescription=\"T0927\" text=\"배달급지\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\" autosizecol=\"none\"/><Cell col=\"12\" accessibilitydescription=\"T0924\" text=\"외곽운송료\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"13\" accessibilitydescription=\"T0924\" text=\"제주운송료\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"14\" text=\"배송소요일수\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"15\" text=\"도서지역구분\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/><Cell col=\"16\" text=\"분류코드\" color=\"#f9f475\" font=\"normal bold 12px/normal &quot;돋움&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" text=\"bind:ZIP_NO\"/><Cell col=\"3\" text=\"bind:SIDO_NM\"/><Cell col=\"4\" text=\"bind:SKK_NM\"/><Cell col=\"5\" text=\"bind:EMDONG_NM\"/><Cell col=\"6\" text=\"bind:PICKUP_BRAN_NM\"/><Cell col=\"7\" text=\"bind:PICKUP_EMP_NM\"/><Cell col=\"8\" text=\"bind:DLV_BRAN_NM\"/><Cell col=\"9\" displaytype=\"normal\" text=\"bind:DLV_EMP_NM\" textAlign=\"left\"/><Cell col=\"10\" displaytype=\"combocontrol\" text=\"bind:ZN_DV\" textAlign=\"right\" edittype=\"combo\" combodataset=\"dsZnDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combotype=\"filterlike\"/><Cell col=\"11\" text=\"bind:RGN_DV_CD\" edittype=\"combo\" combodataset=\"dsDlvRgn\" combocodecol=\"CD\" combodatacol=\"CD_NM\" displaytype=\"combocontrol\" combotype=\"filterlike\"/><Cell col=\"12\" text=\"bind:FERRY_RATE\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" editmaxlength=\"10\" maskeditformat=\"###,###,###,###,###,###.##\" maskeditlimitbymask=\"both\"/><Cell col=\"13\" text=\"bind:AIR_RATE\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" maskeditformat=\"###,###,###,###,###,###.##\" maskeditlimitbymask=\"both\"/><Cell col=\"14\" text=\"bind:DLV_NEED_SUMDAY\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsDlvNeedSumday\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combotype=\"filterlike\"/><Cell col=\"15\" text=\"bind:ILNRGN_DV\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsIlnrgnDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\" combotype=\"filterlike\"/><Cell col=\"16\" text=\"bind:SORT_CD\" edittype=\"text\" textAlign=\"left\" editmaxlength=\"10\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("10");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Static("staShpr00_00_00_01","25","75","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0160");
            obj.set_taborder("13");
            obj.set_text("담당구역");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","565","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("14");
            obj.set_text("집배사원");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSido","85","74","141","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("SIDO_NM");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("SIDO_NM");
            obj.set_taborder("15");
            obj.set_innerdataset("dsSido");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSkk","229","74","141","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("SIDO_NM");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("SKK_NM");
            obj.set_taborder("16");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsSkk");
            this.addChild(obj.name, obj);

            obj = new Combo("cboEmdong","373","74","141","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("EMDONG_NM");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("EMDONG_NM");
            obj.set_taborder("17");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsEmdong");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00",null,"288","296","1","30",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("top_search_ty01");
            obj.set_font("normal 700 12pt/normal \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00",null,"109","353",null,"30","83",null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab00);
            obj.getSetter("domainId").set("T2125");
            obj.set_tabbuttonheight("30");
            obj.set_text("상세정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Div("divTab1","0","0",null,null,"0","0",null,null,null,null,this.tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("0");
            obj.set_text("집하점소");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00","119","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("2");
            obj.set_text("집하사원");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00","119","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("4");
            obj.set_text("배송점소");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","119","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","87","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("6");
            obj.set_text("배송사원");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","119","87",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","0","270","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("8");
            obj.set_text("배송소요일수");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00","119","270",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","0","299","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("10");
            obj.set_text("분류코드");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","119","299",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01","0","125","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("권역구분");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01","119","125",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00","0","154","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("14");
            obj.set_text("배송급지");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01_00_00","119","154",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00_00","0","183","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("16");
            obj.set_text("도서지역구분");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01_00_00_00","119","183",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00_00_00","0","212","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("18");
            obj.set_text("외곽운송료");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01_00_00_00_00","119","212",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_01_00_00_00_00_00","119","241",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_tbody_td01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00_00_00_00","0","241","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("21");
            obj.set_text("제주운송료");
            obj.set_textAlign("left");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtBranCd2","123","3","90","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("22");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnBranSearch2","213","3","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_search01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtBranNm2","238","3","110","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("24");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboEmpList2","123","32","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("EMP_NO");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("EMP_NM");
            obj.set_innerdataset("dsPkEmpList");
            obj.set_taborder("25");
            obj.set_type("filterlike");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtBranCd3","123","61","90","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("26");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnBranSearch3","213","61","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("27");
            obj.set_cssclass("btn_search01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtBranNm3","238","61","110","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("28");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboEmpList3","123","90","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("EMP_NO");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("EMP_NM");
            obj.set_innerdataset("dsDvEmpList");
            obj.set_taborder("29");
            obj.set_type("filterlike");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboZnDv","123","128","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsZnDv");
            obj.set_taborder("30");
            obj.set_type("filterlike");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboDlvRgn","123","157","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsDlvRgn");
            obj.set_taborder("31");
            obj.set_type("filterlike");
            obj.set_text("");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboIlnrgnDv","123","186","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsIlnrgnDv");
            obj.set_taborder("32");
            obj.set_type("filterlike");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskAirRate","123","244","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("33");
            obj.set_format("###,###,###,###,###,###.##");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_value("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskFerryRate","123","215","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("34");
            obj.set_format("###,###,###,###,###,###.##");
            obj.set_limitbymask("both");
            obj.set_cssclass("inp_ty01");
            obj.set_value("0");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboDlvNeedSumday","123","273","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_innerdataset("dsDlvNeedSumday");
            obj.set_taborder("35");
            obj.set_type("filterlike");
            obj.set_text("");
            obj.set_value("전체");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtSortCd","123","302","225","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("36");
            obj.set_cssclass("inp_ty01");
            obj.set_maxlength("10");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnSaveDetailInfo","122","340","110","33",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("37");
            obj.set_text("상세정보저장");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnSaveZnChg","242","340","110","33",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("38");
            obj.set_text("구역변경저장");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnSetGird","0","340","110","33",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("39");
            obj.set_text("변경내역적용");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stcSetGridDtailInfo","97","390","155","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("40");
            obj.set_text("상세정보를 그리드에 적용");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stcZnChg","100","390","155","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("41");
            obj.set_text("집배점소와 집배사원만저장");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stcDetailInfo","129","390","96","24",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("42");
            obj.set_text("전체 내역 저장");
            obj.set_visible("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboEmpList","621","43","150","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("EMP_NO");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("EMP_NM");
            obj.set_innerdataset("dsEmpList");
            obj.set_taborder("20");
            obj.set_type("filterlike");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab00.Tabpage1.form.divTab1.form.cboZnDv","value","dsInfo","CNTRT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab00.Tabpage1.form.divTab1.form.cboDlvRgn","value","dsInfo","CNTRT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_BAIM_0010.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_BAIM_0010.xfdl", function() {
        /**
        *  집배구역관리
        *  @MenuPath
        *  @FileName 		BAIM_BAIM_0010.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.02.05
        *  @Desction        집배구역관리
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
        	// 회사구분, 전담조직, 등록구분, 권역구분, 배달급지, 도선료, 배송소요일수, 도서지역구분
        	this.gfnTransaction("commonCode");

        	// 담당구역 콤보 초기화
        	this.gfnTransaction("getSidoList");

        	this.dsSkk.insertRow();
        	this.dsSkk.setColumn(0,'SIDO_NM','');
        	this.dsSkk.setColumn(0,'SKK_NM', '전체');

        	this.cboSkk.set_index(0);

        	this.dsEmdong.insertRow();
        	this.dsEmdong.setColumn(0,'EMDONG_NM', '전체');
        	this.cboEmdong.set_index(0);

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


        		// 초기화
        		case "btnResetTrip" :
        			this.gfnTransaction("saveResetShipmentTrip");
        		break;

        		// 상세정보저장
        		case "btnSaveDetailInfo" :
        			this.fnSaveDetailInfo();
        		break;

        		// 구역변경저장
        		case "btnSaveZnChg" :
        			this.fnSaveZnChg();
        		break;

        		case "btnSetGird":
        			this.fnSetGridDtailInfo();
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function	: fnSearch
         * @description	: 집배구역 관리 대상 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearch = function()
        {
        	this.dsList.clearData();
        	this.gridMain.setCellProperty("head",0,"text","");

        	//var cboCpDvValue = this.cboCpDv.value;			// 회사구분
        	var cboFchrgOrgnz = this.cboFchrgOrgnz.value;	// 전담조직
        	var edtBranCdValue = this.edtBranCd.value;		// 점소코드
        	var edtEmpCdValue = this.cboEmpList.value;		// 사원코드
        	var cboDvValue = this.cboDv.value;				// 등록구분
         	//var edtZipNoFrValue = this.edtZipNoFr.value;	// 우편번호(FROM)
         	//var edtZipNoToValue = this.edtZipNoTo.value;	// 우편번호(TO)

        	if(this.cboSido.value == "전체"){
        		var cboSidoValue = "";
        	}
        	else{
        		var cboSidoValue = this.cboSido.value;			// 시도
        	}

        	if(this.cboSkk.text == "전체"){
        		var cboSkkValue = "";
        	}
        	else{
        		var cboSkkValue = this.cboSkk.text;				// 시군구
        	}

        	if(this.cboEmdong.value == "전체"){
        		var cboEmdongValue = "";
        	}
        	else{
        		var cboEmdongValue = this.cboEmdong.value;		// 읍면동
        	}


        	/** 조회조건 체크**************************************************************/

        	// 점소 또는 점소명 하나라도 입력 안된경우 에러처리.
        // 	if( !this.gfnIsNull(edtBranCdValue) && this.gfnIsNull(edtBranNmValue) ){	// PID-MSG-CD : CHK_MUST2
        // 		this.gfnAlert("조회조건의 점소명을 확인해주세요.");
        // 		this.edtBranNm.setFocus();
        // 		return;
        // 	}
        // 	if( !this.gfnIsNull(edtBranNmValue) && this.gfnIsNull(edtBranCdValue) ){	// PID-MSG-CD : CHK_MUST2
        // 		this.gfnAlert("조회조건의 점소코드를 확인해주세요.");
        // 		this.edtBranCd.setFocus();
        // 		return;
        // 	}

        	// 등록구분이 (등록)인경우
        	if( cboDvValue == "01" ){
        		// 전담조직
        		if( this.gfnIsNull(cboFchrgOrgnz) ){	// PID-MSG-CD : CHK_MUST
        			this.gfnAlert("조회조건의 전담조직을 선택해주세요.");
        			this.cboFchrgOrgnz.setFocus();
        			return;
        		}
        	}


        	// 등록구분이 (등록, 전체)인경우
        // 	if( cboDvValue == "01" || cboDvValue == "" || cboDvValue == "02"){
        //
        //
        // 		// 우편번호(FROM)
        // 		if(this.gfnIsNull(edtZipNoFrValue)){
        // 			this.gfnAlert("조회조건의 우편번호(FROM)을 입력해주세요.");
        // 			this.edtZipNoFr.setFocus();
        // 			return;
        // 		}
        //
        // 		// 우편번호(TO)
        // 		if(this.gfnIsNull(edtZipNoToValue)){
        // 			this.gfnAlert("조회조건의 우편번호(TO)을 입력해주세요.");
        // 			this.edtZipNoTo.setFocus();
        // 			return;
        // 		}
        // /*
        // 		// 시군구
        // 		if(this.gfnIsNull(edtSkkValue)){
        // 			this.gfnAlert("조회조건의 시군구를 입력해주세요.");
        // 			this.edtSkk.setFocus();
        // 			return;
        // 		}
        //
        // 		// 읍면동
        // 		if(this.gfnIsNull(edtEmdongValue)){
        // 			this.gfnAlert("조회조건의 읍면동을 입력해주세요.");
        // 			this.edtEmdong.setFocus();
        // 			return;
        // 		}
        //
        // 		// 점소코드
        // 		if(this.gfnIsNull(edtBranCdValue)){
        // 			this.gfnAlert("조회조건의 점소를 입력해주세요.");
        // 			this.edtBranCd.setFocus();
        // 			return;
        // 		}
        // 		*/
        // 	}

        	/*********************************************************************************/

        	// 조회조건 init
        	this.dsSearch.clearData();
        	this.dsSearch.insertRow(0);
        	//this.dsSearch.setColumn(0, "CP_DV" 			, cboCpDvValue);
        	this.dsSearch.setColumn(0, "FCHRG_ORGNZ" 	, cboFchrgOrgnz);
        	this.dsSearch.setColumn(0, "DV" 			, cboDvValue);
        	this.dsSearch.setColumn(0, "SI_DO" 			, cboSidoValue);
        	this.dsSearch.setColumn(0, "SKK" 			, cboSkkValue);
        	this.dsSearch.setColumn(0, "EMDONG" 		, cboEmdongValue);
        	this.dsSearch.setColumn(0, "BRAN_CD" 		, edtBranCdValue);
        	this.dsSearch.setColumn(0, "EMP_CD" 		, edtEmpCdValue);
        	//this.dsSearch.setColumn(0, "ZIP_ADDR_DV" 	, cboZipAddrDvValue);


        	// 조회
        	this.gfnTransaction("getPiDvZnMstList");

        };


        /***********************************************************************************************
         * @function	: fnSaveDetailInfo
         * @description	: 집배구역 상세정보 저장 이벤트.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSaveDetailInfo = function()
        {
        	// 체크된 행이 없는경우 에러처리.
        	if(this.dsList.findRow("CHK",1) == -1){
        		this.gfnAlert("저장할 대상을 체크해 주세요.");
        		return;
        	}

        	if(!this.gfnConfirm("저장하시겠습니까?")) return;


        	// 저장할 데이터 유효성 체크


        	// 전담조직 필수입력체크
        	var cboFchrgOrgnzValue = this.cboFchrgOrgnz.value;
        	if(this.gfnIsNull(cboFchrgOrgnzValue)){
        		this.gfnAlert("접속한 계정의 전담조직을 확인해주세요.");
        		return;
        	}

        	for (var i=0;i<this.dsList.rowcount;i++){

        		var chk = this.dsList.getColumn(i, "CHK");
        		if(chk != "1") continue;

        		var pickupBranCd = this.dsList.getColumn(i, "PICKUP_BRAN_CD");		// 집하점소코드
        		var dlvBranCd = this.dsList.getColumn(i, "DLV_BRAN_CD");			// 배달점소코드
        		var znDv = this.dsList.getColumn(i, "ZN_DV");						// 권역구분
        		var rgnDvCd = this.dsList.getColumn(i, "RGN_DV_CD");				// 배달급지
        		var dlvNeedSumday = this.dsList.getColumn(i, "DLV_NEED_SUMDAY");	// 배송소요일수
        		var ilnrgnDv = this.dsList.getColumn(i, "ILNRGN_DV");				// 도서지역구분

        		/*** 필수입력체크****/

        		// 집하점소코드
        		if(this.gfnIsNull(pickupBranCd)){
        			this.gfnAlert((i+1)+ "행의 집하점소코드를 확인해주세요.");
        			return;
        		}

        		// 배달점소코드
        		if(this.gfnIsNull(dlvBranCd)){
        			this.gfnAlert((i+1)+ "행의 배달점소코드를 확인해주세요.");
        			return;
        		}

        		// 권역구분
        		if(this.gfnIsNull(znDv)){
        			this.gfnAlert((i+1)+ "행의 권역구분을 확인해주세요.");
        			return;
        		}

        		// 배달급지
        		if(this.gfnIsNull(rgnDvCd)){
        			this.gfnAlert((i+1)+ "행의 배달급지를 확인해주세요.");
        			return;
        		}

        		// 배송소요일수
        		if(this.gfnIsNull(dlvNeedSumday)){
        			this.gfnAlert((i+1)+ "행의 배송소요일수를 확인해주세요.");
        			return;
        		}

        		// 도서지역구분
        		if(this.gfnIsNull(ilnrgnDv)){
        			this.gfnAlert((i+1)+ "행의 도서지역구분를 확인해주세요.");
        			return;
        		}

        		/**********************/
        	}

        	// 체크된것만을 dsSaveList로 복사한다.
        	this.dsList.filter("CHK == '1'");

        	this.dsSaveList.clearData();
        	this.dsSaveList.copyData(this.dsList,true);

        	this.dsList.filter("");

        	// 회사구분
        	var cboCpDvValue = '';//this.cboCpDv.value;
        	// 전담조직
        	var cboFchrgOrgnzValue = this.cboFchrgOrgnz.value;

        	// 트랜잭션 실행시 보낼 파라미터 설정
        	var strParam = "pCpDv="+cboCpDvValue;
        	strParam += " pFchrgOrgnz="+cboFchrgOrgnzValue;

        	// 서비스 Row Index
        	var iRow = this.dsService.findRow("SVC_ID", "savePidvZnDetailInfoList");
        	this.dsService.setColumn(iRow, "QUERY_LIST", strParam);


        	// 트랜잭션 호출 (상세정보 저장)
        	this.gfnTransaction("savePidvZnDetailInfoList");

        }


        /***********************************************************************************************
         * @function	: fnSaveZnChg
         * @description	: 구역변경저장 이벤트.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSaveZnChg = function()
        {
        	// 체크된 행이 없는경우 에러처리.
        	if(this.dsList.findRow("CHK",1) == -1){
        		this.gfnAlert("저장할 대상을 체크해 주세요.");
        		return;
        	}

        	if(!this.gfnConfirm("저장하시겠습니까?")) return;


        	// 저장할 데이터 유효성 체크

        	// 회사구분 필수입력체크
        // 	var cboCpDvValue = this.cboCpDv.value;
        // 	if(this.gfnIsNull(cboCpDvValue)){
        // 		this.gfnAlert("접속한 계정의 회사구분를 확인해주세요.");
        // 		return;
        // 	}
        	// 전담조직 필수입력체크
        	var cboFchrgOrgnzValue = this.cboFchrgOrgnz.value;
        	if(this.gfnIsNull(cboFchrgOrgnzValue)){
        		this.gfnAlert("접속한 계정의 전담조직을 확인해주세요.");
        		return;
        	}

        	for (var i=0;i<this.dsList.rowcount;i++){

        		var chk = this.dsList.getColumn(i, "CHK");
        		if(chk != "1") continue;

        		var pickupBranCd = this.dsList.getColumn(i, "PICKUP_BRAN_CD");		// 집하점소코드
        		var dlvBranCd = this.dsList.getColumn(i, "DLV_BRAN_CD");			// 배달점소코드
        		var znDv = this.dsList.getColumn(i, "ZN_DV");						// 권역구분
        		var rgnDvCd = this.dsList.getColumn(i, "RGN_DV_CD");				// 배달급지
        		var dlvNeedSumday = this.dsList.getColumn(i, "DLV_NEED_SUMDAY");	// 배송소요일수
        		var ilnrgnDv = this.dsList.getColumn(i, "ILNRGN_DV");				// 도서지역구분

        		/*** 필수입력체크****/

        		// 집하점소코드
        		if(this.gfnIsNull(pickupBranCd)){
        			this.gfnAlert((i+1)+ "행의 집하점소코드를 확인해주세요.");
        			return;
        		}

        		// 배달점소코드
        		if(this.gfnIsNull(dlvBranCd)){
        			this.gfnAlert((i+1)+ "행의 배달점소코드를 확인해주세요.");
        			return;
        		}

        		/**********************/
        	}

        	// 체크된것만을 dsSaveList로 복사한다.
        	this.dsList.filter("CHK == '1'");

        	this.dsSaveList.clearData();
        	this.dsSaveList.copyData(this.dsList,true);

        	this.dsList.filter("");

        	// 회사구분
        	//var cboCpDvValue = this.cboCpDv.value;
        	// 전담조직
        	var cboFchrgOrgnzValue = this.cboFchrgOrgnz.value;

        	// 트랜잭션 실행시 보낼 파라미터 설정
        // 	var strParam = "pCpDv="+cboCpDvValue;
        // 	strParam += " pFchrgOrgnz="+cboFchrgOrgnzValue;
        	var strParam = "pFchrgOrgnz="+cboFchrgOrgnzValue;

        	// 서비스 Row Index
        	var iRow = this.dsService.findRow("SVC_ID", "savePidvZnChgList");
        	this.dsService.setColumn(iRow, "QUERY_LIST", strParam);


        	// 트랜잭션 호출 (구역변경 저장)
        	this.gfnTransaction("savePidvZnChgList");
        }

        /***********************************************************************************************
         * @function	: fnSetGridDtailInfo
         * @description	: 상세정보 그리드 적용 이벤트.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSetGridDtailInfo = function()
        {
        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){
        			this.dsList.setColumn(i, "PICKUP_BRAN_CD", this.tab00.Tabpage1.form.divTab1.form.edtBranCd2.value);
        			this.dsList.setColumn(i, "PICKUP_BRAN_NM", this.tab00.Tabpage1.form.divTab1.form.edtBranNm2.value);
        			this.dsList.setColumn(i, "PICKUP_EMP_NO", this.tab00.Tabpage1.form.divTab1.form.cboEmpList2.value);

        			if(this.tab00.Tabpage1.form.divTab1.form.cboEmpList2.value=="") this.dsList.setColumn(i, "PICKUP_EMP_NM", "");
        			else this.dsList.setColumn(i, "PICKUP_EMP_NM", this.tab00.Tabpage1.form.divTab1.form.cboEmpList2.text);

        			this.dsList.setColumn(i, "DLV_BRAN_CD", this.tab00.Tabpage1.form.divTab1.form.edtBranCd3.value)
        			this.dsList.setColumn(i, "DLV_BRAN_NM", this.tab00.Tabpage1.form.divTab1.form.edtBranNm3.value);
        			this.dsList.setColumn(i, "DLV_EMP_NO", this.tab00.Tabpage1.form.divTab1.form.cboEmpList3.value);

        			if(this.tab00.Tabpage1.form.divTab1.form.cboEmpList3.value=="") this.dsList.setColumn(i, "DLV_EMP_NM", "");
        			else this.dsList.setColumn(i, "DLV_EMP_NM", this.tab00.Tabpage1.form.divTab1.form.cboEmpList3.text);

        			this.dsList.setColumn(i, "ZN_DV", this.tab00.Tabpage1.form.divTab1.form.cboZnDv.value);
        			this.dsList.setColumn(i, "RGN_DV_CD", this.tab00.Tabpage1.form.divTab1.form.cboDlvRgn.value);
        			this.dsList.setColumn(i, "ILNRGN_DV", this.tab00.Tabpage1.form.divTab1.form.cboIlnrgnDv.value);
        			this.dsList.setColumn(i, "FERRY_RATE", this.tab00.Tabpage1.form.divTab1.form.mskFerryRate.value);
        			this.dsList.setColumn(i, "AIR_RATE", this.tab00.Tabpage1.form.divTab1.form.mskAirRate.value);
        			this.dsList.setColumn(i, "DLV_NEED_SUMDAY", this.tab00.Tabpage1.form.divTab1.form.cboDlvNeedSumday.value);
        			this.dsList.setColumn(i, "SORT_CD", this.tab00.Tabpage1.form.divTab1.form.edtSortCd.value);
        		}
        	}
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

        			// 전담조직
        			this.cboFchrgOrgnz.set_index(0);

        			// 등록구분
        			this.dsDv.insertRow(0);
        			this.dsDv.setColumn(0,'CD','');
        			this.dsDv.setColumn(0,'CD_NM','전체');
        			this.cboDv.set_index(0);

        			// 주소구분
        			//this.cboZipAddrDv.set_index(1);

        			// 권역구분
        			this.fn_AddCodeDef(this.dsZnDv);
        			this.tab00.Tabpage1.form.divTab1.form.cboZnDv.set_index(0);

        			// 배달급지
        			this.fn_AddCodeDef(this.dsDlvRgn);
        			this.tab00.Tabpage1.form.divTab1.form.cboDlvRgn.set_index(0);

        			// 배송소요일수
        			this.fn_AddCodeDef(this.dsDlvNeedSumday);
        			this.tab00.Tabpage1.form.divTab1.form.cboDlvNeedSumday.set_index(0);

        			// 도서지역구분
        			this.fn_AddCodeDef(this.dsIlnrgnDv);
        			this.tab00.Tabpage1.form.divTab1.form.cboIlnrgnDv.set_index(0);

        			this.tab00.Tabpage1.form.divTab1.form.mskAirRate.set_value("0");
        			this.tab00.Tabpage1.form.divTab1.form.mskFerryRate.set_value("0");


        		break;

        		// 상세정보저장
        		case "savePidvZnDetailInfoList" :
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;

        		// 구역변경저장
        		case "savePidvZnChgList" :
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;

        		// 시도 리스트 조회
        		case "getSidoList" :
        			// 시도
        			//this.fnAddCodeDef(this.dsSido, "전체");
        			this.dsSido.insertRow();
        			this.dsSido.setColumn(0,'CUSTOM_ORDERBY','');
        			this.dsSido.setColumn(0,'SIDO_NM', "전체");
        			this.cboSido.set_index(0);

        		break;

        		case "getSkkList" :
        			this.dsSkk.insertRow();
        			this.dsSkk.setColumn(0,'SIDO_NM','');
        			this.dsSkk.setColumn(0,'SKK_NM', '전체');
        			this.cboSkk.set_index(0);

        			this.dsEmdong.insertRow();
        			this.dsEmdong.setColumn(0,'EMDONG_NM', "전체");
        			this.cboEmdong.set_index(0);
        		break;

        		case "getEmdongList" :
        			this.dsEmdong.insertRow();
        			this.dsEmdong.setColumn(0,'EMDONG_NM', "전체");
        			this.cboEmdong.set_index(0);
        		break;

        		case "getEmpList":
        			var iRow = this.dsService.findRow("SVC_ID", "getEmpList");
        			var outDataset = this.dsService.getColumn(iRow, "OUT_DATASET_LIST"); //, "dsPkEmpList=dsList");

        			if(outDataset == "dsPkEmpList=dsList"){
        				this.dsPkEmpList.insertRow();
        				this.dsPkEmpList.setColumn(0,'EMP_NO', "");
        				this.dsPkEmpList.setColumn(0,'EMP_NM', "선택");
        				this.tab00.Tabpage1.form.divTab1.form.cboEmpList2.set_index(0);
        			}
        			else if(outDataset == "dsDvEmpList=dsList"){
        				this.dsDvEmpList.insertRow();
        				this.dsDvEmpList.setColumn(0,'EMP_NO', "");
        				this.dsDvEmpList.setColumn(0,'EMP_NM', "선택");
        				this.tab00.Tabpage1.form.divTab1.form.cboEmpList3.set_index(0);
        			}
        			else if(outDataset == "dsEmpList=dsList"){
        				this.dsEmpList.insertRow();
        				this.dsEmpList.setColumn(0,'EMP_NO', "");
        				this.dsEmpList.setColumn(0,'EMP_NM', "선택");
        				this.cboEmpList.set_index(0);
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
        this.fnPopupCallback = function(popupId, dsObj)
        {
        	//trace("[fnPopupCallback()] sPopupId["+popupId+"] rtnMsg["+JSON.stringify(dsObj)+"]");

        	switch(popupId) {
        		// 조회조건의 점소조회팝업
        		case "baimP010" :
        			this.edtBranCd.set_value(dsObj.getColumn(0,"BRAN_CD"));	// 점소코드
        			this.edtBranNm.set_value(dsObj.getColumn(0,"BRAN_NM"));	// 점소명

        			var ds = new Dataset;
        			ds.name = "ds_temp";

        			ds.addColumn("BRAN_CD", "STRING", 20);
        			ds.addColumn("USER_TYPE", "STRING", 5);
        			ds.addColumn("USE_YN", "STRING", 2);

        			ds.insertRow(0);
         			ds.setColumn(0, "BRAN_CD", dsObj.getColumn(0,"BRAN_CD"));
        			ds.setColumn(0, "USER_TYPE", "M03");
        			ds.setColumn(0, "USE_YN", "Y");

        			this.addChild("ds_temp", ds);

        // 			// 서비스 Row Index
         			var iRow = this.dsService.findRow("SVC_ID", "getEmpList");
         			this.dsService.setColumn(iRow, "IN_DATASET_LIST", "ds1=ds_temp");
        			this.dsService.setColumn(iRow, "OUT_DATASET_LIST", "dsEmpList=dsList");

        			this.dsEmpList.clearData();

         			this.gfnTransaction("getEmpList");

        			var dsRm = this.removeChild("ds_temp");
        			dsRm.destroy();
        			dsRm = null;
        		break;

        		// 그리드의 점소조회팝업
        		case "baimP010_2" :
        			// 선택한 점소 상태가 폐점(02) 이면 에러처리.
        			if(dsObj.getColumn(0,"BRAN_ST") == "02"){
        				this.gfnAlert("폐점된 점소는 선택할 수 없습니다.");
        				return;
        			}

        			this.tab00.Tabpage1.form.divTab1.form.edtBranCd2.set_value(dsObj.getColumn(0,"BRAN_CD")); // 점소코드
        			this.tab00.Tabpage1.form.divTab1.form.edtBranNm2.set_value(dsObj.getColumn(0,"BRAN_NM")); // 점소명

        			// 선택한 점소의 점소코드를 관리상위점소로 가지는 예하점소 조회.

        			var ds = new Dataset;
        			ds.name = "ds_temp";

        			ds.addColumn("BRAN_CD", "STRING", 20);
        			ds.addColumn("USER_TYPE", "STRING", 5);
        			ds.addColumn("USE_YN", "STRING", 2);

        			ds.insertRow(0);
         			ds.setColumn(0, "BRAN_CD", dsObj.getColumn(0,"BRAN_CD"));
        			ds.setColumn(0, "USER_TYPE", "M03");
        			ds.setColumn(0, "USE_YN", "Y");

        			this.addChild("ds_temp", ds);

        // 			// 트랜잭션 실행시 보낼 파라미터 설정
        // 			var strParam = "pBranMgmtNo="+dsObj.getColumn(0,"BRAN_MGMT_NO");
        // 			strParam += " pMgmtUpBranCd="+dsObj.getColumn(0,"BRAN_CD");
        //
        // 			// 서비스 Row Index
         			var iRow = this.dsService.findRow("SVC_ID", "getEmpList");
         			this.dsService.setColumn(iRow, "IN_DATASET_LIST", "ds1=ds_temp");
        			this.dsService.setColumn(iRow, "OUT_DATASET_LIST", "dsPkEmpList=dsList");

        			this.dsPkEmpList.clearData();

         			this.gfnTransaction("getEmpList");

        			var dsRm = this.removeChild("ds_temp");
        			dsRm.destroy();
        			dsRm = null;

        		break;
        		case "baimP010_3" :
        			// 선택한 점소 상태가 폐점(02) 이면 에러처리.
        			if(dsObj.getColumn(0,"BRAN_ST") == "02"){
        				this.gfnAlert("폐점된 점소는 선택할 수 없습니다.");
        				return;
        			}

        			this.tab00.Tabpage1.form.divTab1.form.edtBranCd3.set_value(dsObj.getColumn(0,"BRAN_CD")); // 점소코드
        			this.tab00.Tabpage1.form.divTab1.form.edtBranNm3.set_value(dsObj.getColumn(0,"BRAN_NM")); // 점소명

        			var ds = new Dataset;
        			ds.name = "ds_temp";

        			ds.addColumn("BRAN_CD", "STRING", 20);
        			ds.addColumn("USER_TYPE", "STRING", 5);
        			ds.addColumn("USE_YN", "STRING", 2);

        			ds.insertRow(0);
         			ds.setColumn(0, "BRAN_CD", dsObj.getColumn(0,"BRAN_CD"));
        			ds.setColumn(0, "USER_TYPE", "M03");
        			ds.setColumn(0, "USE_YN", "Y");

        			this.addChild("ds_temp", ds);

        // 			// 서비스 Row Index
         			var iRow = this.dsService.findRow("SVC_ID", "getEmpList");
         			this.dsService.setColumn(iRow, "IN_DATASET_LIST", "ds1=ds_temp");
        			this.dsService.setColumn(iRow, "OUT_DATASET_LIST", "dsDvEmpList=dsList");

        			this.dsDvEmpList.clearData();

         			this.gfnTransaction("getEmpList");

        			var dsRm = this.removeChild("ds_temp");
        			dsRm.destroy();
        			dsRm = null;
        		break;

        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function		: fn_PopOpen
         * @description		: 팝업 화면 오픈
         * @param 			: obj	- Button object
         * @param 			: e		- Button event
         * @return 			: N/A
        ***********************************************************************************************/
        this.fn_PopOpen = function(obj,e)
        {
        	var btnName		= obj.name;

        	switch(btnName)
        	{
        		case "btnBranSearch" :
        		case "btnBranSearch2" :
        		case "btnBranSearch3" :
        			this.fn_OpenPopBran(btnName);  // 검색-점소
        			break;
        		default:
        			break;
        	}

        };


        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/

        /***********************************************************************************************
         * @function	: fn_OpenPopBran
         * @description	: 점소 조회 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fn_OpenPopBran = function(btnName)
        {
        	// 파라미터 설정
        	var pBranCdValue = '';	// 점소코드
        	var pBranNmValue = '';	// 점소명
        	var pBranDvValue = '';	// 점소구분
        	var pBranStsValue = '';	// 점소상태
        	var pUprBranCdValue = '';	// 상위점소
        	var popupId = '';	//팝업ID


        	// 조회조건의 점소찾기버튼
        	if(btnName == "btnBranSearch"){
        		pBranCdValue = this.edtBranCd.value;	// 점소코드
        		pBranNmValue = this.edtBranNm.value;	// 점소명
        		pBranStsValue = "999";					// 점소상태, "999"면 정상, 폐점 대상만 조회
        		popupId = 'baimP010';
        	}
        	// 그리드 점소찾기버튼
        	else if(btnName == "btnBranSearch2"){
        		pBranCdValue = this.tab00.Tabpage1.form.divTab1.form.edtBranCd2.value;	// 점소코드
        		pBranNmValue = this.tab00.Tabpage1.form.divTab1.form.edtBranNm2.value;	// 점소명
        		pBranStsValue = "01";					// 점소상태 , "01" 정상 조회
        		popupId = 'baimP010_2';
        	}
        	else if(btnName == "btnBranSearch3"){
        		pBranCdValue = this.tab00.Tabpage1.form.divTab1.form.edtBranCd3.value;	// 점소코드
        		pBranNmValue = this.tab00.Tabpage1.form.divTab1.form.edtBranNm3.value;	// 점소명
        		pBranStsValue = "01";					// 점소상태 , "01" 정상 조회
        		popupId = 'baimP010_3';
        	}


        	// 점소 조회 팝업 호출
        	var oArg = {
        				pBranCd			: this.gfnNvl(pBranCdValue,'')					// 점소코드
        				, pBranNm		: this.gfnNvl(pBranNmValue,'')					// 점소명
        				, pBranDv		: this.gfnNvl(pBranDvValue,'')					// 점소구분
        				, pBranSts		: this.gfnNvl(pBranStsValue,'')					// 점소상태
        				, pUprBranCd	: this.gfnNvl(pUprBranCdValue,'')				// 상위점소
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
         * @function	: fnAfterCodeDef
         * @description	: 코드조회후 선택 추가
         * @param		: dsObj	- Dataset Object
         * @return N/A
        /***********************************************************************************************/
        this.fn_AddCodeDef = function(dsObj) {

        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM','선택');
        }


        /***********************************************************************************************
         * @function	: 컬럼명 추출
         * @description	: GRID CELL 바인딩된 컬렴명을 추출한다.
         * @param		: grdObj	- Grid Object
         * @param		: cellIdx	- Number
         * @return columnNm			- String
        /***********************************************************************************************/
        this.returnCellColumn = function(grdObj, cellIdx)
        {
        	var columnNm = this.gfnNvl(grdObj.getCellProperty("body", cellIdx, "text"), "");
        	columnNm = columnNm.replace("bind:", "");

        	return columnNm;
        }


        /***********************************************************************************************
         * @function		: fnExcel
         * @description		: 그리드 표시 된 정보를 엑셀로 download
         * @param 			: obj - Button object
         * @param 			: e - Button event
         * @return			: N/A
        /***********************************************************************************************/
        this.fnExcel = function(obj,e)
        {
        	var objGrd	= this.gridMain;
        	var objDs	= this.dsList;

        	if(objDs.getRowCount() > 0) {
        		this.gfnExcelExport(objGrd);
        	} else {
        		//this.gfnAlert("M0113");
        		this.gfnAlert("조회된 내역이 없습니다.");
        	}
        };


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btnSaveDetailInfo_onmouseenter = function(obj,e)
        {
        	this.tab00.Tabpage1.form.divTab1.form.stcDetailInfo.set_visible(true);
        };

        this.btnSaveDetailInfo_onmouseleave = function(obj,e)
        {
        	this.tab00.Tabpage1.form.divTab1.form.stcDetailInfo.set_visible(false);
        };

        this.btnSaveZnChg_onmouseenter = function(obj,e)
        {
        	this.tab00.Tabpage1.form.divTab1.form.stcZnChg.set_visible(true);
        };

        this.btnSaveZnChg_onmouseleave = function(obj,e)
        {
        	this.tab00.Tabpage1.form.divTab1.form.stcZnChg.set_visible(false);
        };


        /***********************************************************************************************
         * @function	: editOnKeyDown
         * @description	: edit onkeydown
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.KeyEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.fn_editOnKeyDown = function(obj,e)
        {
        	var objName = obj.name;

        	if( e.keycode === 13 ) {
        		obj.updateToDataset();
        		switch( objName ) {
        			case	'edtBranCd' : this.btnBranSearch.click();	break;
        			case	'edtBranNm'	: this.btnBranSearch.click();	break;
        			case	'edtBranCd2' : this.btnBranSearch2.click();	break;
        			case	'edtBranNm2' : this.btnBranSearch2.click();	break;
        			default		: 	break;
        		}
        	}
        };



        /***********************************************************************************************
         * @function	: gridMain_onheadclick
         * @description	: 그리드 헤더 클릭 이벤트.
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.gridMain_onheadclick = function(obj,e)
        {
        	var strType = obj.getCellProperty("head", e.cell, "edittype");
        	if (strType == "checkbox") {
        		// checkBox Event
        		this.gfnSetGridCheckAll(obj, e);
        	}else {
        		this.gfnGridSort(obj, e);
        	}
        };

        /***********************************************************************************************
         * @function	: cboZnDv_canitemchange
         * @description	: 권역구분 값 변경 이벤트.
         * @param		: obj	- nexacro.Combo
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cboZnDv_canitemchange = function(obj,e)
        {
        	// 변경값
        	var changedValue = e.postvalue;

        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){
        			this.dsList.setColumn(i, "ZN_DV", changedValue);
        		}
        	}
        };

        /***********************************************************************************************
         * @function	: cboDlvRgn_canitemchange
         * @description	: 배달급지 값 변경 이벤트.
         * @param		: obj	- nexacro.Combo
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cboDlvRgn_canitemchange = function(obj,e)
        {
        	// 변경값
        	var changedValue = e.postvalue;

        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){
        			this.dsList.setColumn(i, "RGN_DV_CD", changedValue);
        		}
        	}
        };

        /***********************************************************************************************
         * @function	: cboDlvNeedSumday_canitemchange
         * @description	: 배송소요일수 값 변경 이벤트.
         * @param		: obj	- nexacro.Combo
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cboDlvNeedSumday_canitemchange = function(obj,e)
        {
        	// 변경값
        	var changedValue = e.postvalue;

        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){
        			this.dsList.setColumn(i, "DLV_NEED_SUMDAY", changedValue);
        		}
        	}
        };

        /***********************************************************************************************
         * @function	: mskFerryRate_canchange
         * @description	: 도선료 값 변경 이벤트.
         * @param		: obj	- nexacro.MaskEdit
         * @param		: e		- nexacro.ChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.mskFerryRate_canchange = function(obj,e)
        {
        	// 변경값
        	var changedValue = e.postvalue;

        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){
        			this.dsList.setColumn(i, "FERRY_RATE", changedValue);
        		}
        	}
        };

        /***********************************************************************************************
         * @function	: mskAirRate_canchange
         * @description	: 항공료 값 변경 이벤트.
         * @param		: obj	- nexacro.MaskEdit
         * @param		: e		- nexacro.ChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.mskAirRate_canchange = function(obj,e)
        {
        	// 변경값
        	var changedValue = e.postvalue;

        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){
        			this.dsList.setColumn(i, "AIR_RATE", changedValue);
        		}
        	}
        };

        /***********************************************************************************************
         * @function	: cboIlnrgnDv_canitemchange
         * @description	: 도서지역구분 값 변경 이벤트.
         * @param		: obj	- nexacro.Combo
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.cboIlnrgnDv_canitemchange = function(obj,e)
        {
        	// 변경값
        	var changedValue = e.postvalue;

        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){
        			this.dsList.setColumn(i, "ILNRGN_DV", changedValue);
        		}
        	}
        };

        /***********************************************************************************************
         * @function	: edtSortCd_canchange
         * @description	: 분류코드 값 변경 이벤트.
         * @param		: obj	- nexacro.Combo
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.edtSortCd_canchange = function(obj,e)
        {
        	// 변경값
        	var changedValue = e.postvalue;

        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){
        			this.dsList.setColumn(i, "SORT_CD", changedValue);
        		}
        	}
        };



        /***********************************************************************************************
         * @function	: gridBran_oncelldblclick
         * @description	: 점소그리드 셀 더블클릭 이벤트.
        				  선택한 행의 집배구분에따라 처리하는 방법이 다름.
        				  1) 집배(01)인경우 -> 집하, 배송필드에 점소코드,점소명 적용.
        				  2) 집하(11)인경우 -> 집하필드에 점소코드, 점소명 적용.
        				  3) 배달(91)인경우 -> 배달필드에 점소코드, 점소명 적용.
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.gridBran_oncelldblclick = function(obj,e)
        {
        	// 선택된 행의 집배구분코드
         	var selectedClldlvDivCdValue = this.dsList2.getColumn(this.dsList2.rowposition, "PIDV_DV");
         	// 선택된 행의 점소코드
         	var selectedBranCdValue = this.dsList2.getColumn(this.dsList2.rowposition, "BRAN_CD");
         	// 선택된 행의 점소명
         	var selectedBranNmValue = this.dsList2.getColumn(this.dsList2.rowposition, "BRAN_NM");
         	// 선택된 행의 사원코드
         	var selectedEmpNoValue = this.dsList2.getColumn(this.dsList2.rowposition, "EMP_NO");


        	for(var i=0; i<this.dsList.getRowCount(); i++){
        		// 체크 필드
        		var chkValue = this.dsList.getColumn(i, "CHK");

        		// 체크된 행만 변경값 적용.
        		if(chkValue == "1"){

        			// 집배인경우
        			if(selectedClldlvDivCdValue == "01"){
        				this.dsList.setColumn(i, "PICKUP_BRAN_CD", selectedBranCdValue);
        				this.dsList.setColumn(i, "PICKUP_BRAN_NM", selectedBranNmValue);
        				this.dsList.setColumn(i, "PICKUP_EMP_NO", selectedEmpNoValue);
        				this.dsList.setColumn(i, "DLV_BRAN_CD", selectedBranCdValue);
        				this.dsList.setColumn(i, "DLV_BRAN_NM", selectedBranNmValue);
        				this.dsList.setColumn(i, "DLV_EMP_NO", selectedEmpNoValue);
        			}
        			// 집하인경우
        			else if(selectedClldlvDivCdValue == "11"){
        				this.dsList.setColumn(i, "PICKUP_BRAN_CD", selectedBranCdValue);
        				this.dsList.setColumn(i, "PICKUP_BRAN_NM", selectedBranNmValue);
        				this.dsList.setColumn(i, "PICKUP_EMP_NO", selectedEmpNoValue);

        			}
        			// 배달인경우
        			else if(selectedClldlvDivCdValue == "91"){

        				this.dsList.setColumn(i, "DLV_BRAN_CD", selectedBranCdValue);
        				this.dsList.setColumn(i, "DLV_BRAN_NM", selectedBranNmValue);
        				this.dsList.setColumn(i, "DLV_EMP_NO", selectedEmpNoValue);
        			}


        		}
        	}

        };

        /***********************************************************************************************
         * @function	: gridMain_oncellclick
         * @description	: 그리드 셀 클릭 이벤트.
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridClickEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.gridMain_oncellclick = function(obj,e)
        {
        	// cell 컬럼명 추출.
        	var column = this.returnCellColumn(obj, e.cell);
        	//trace("[grdTripList_oncellclick()] column["+column+"]");

        	// 점소그리드에서 선택된 행의 점소코드
        	//var selectedBranCdValue = this.dsList2.getColumn(this.dsList2.rowposition, "BRAN_CD");
        	// 점소그리드에서 선택된 행의 점소명
        	//var selectedBranNmValue = this.dsList2.getColumn(this.dsList2.rowposition, "BRAN_NM");
        	// 선택된 행의 사원코드
        	//var selectedEmpNoValue = this.dsList2.getColumn(this.dsList2.rowposition, "EMP_NO");

        	var selectedBranCdValue;
        	var selectedBranNmValue;
        	var selectedEmpNoValue;
        	var selectedEmpNmValue;


        	// 체크 필드
        	var chkValue = this.dsList.getColumn(this.dsList.rowposition, "CHK");

        	if(chkValue != "1") return;

        	switch(column)
        	{
        		case "PICKUP_BRAN_CD" :	// 집하점소코드
        		case "PICKUP_BRAN_NM" :	// 집하점소명
        		case "PICKUP_EMP_NO":
        		case "PICKUP_EMP_NM":
        			selectedBranCdValue = this.tab00.Tabpage1.form.divTab1.form.edtBranCd2.value;
        			selectedBranNmValue = this.tab00.Tabpage1.form.divTab1.form.edtBranNm2.value;
        			selectedEmpNoValue = this.tab00.Tabpage1.form.divTab1.form.cboEmpList2.value;
        			selectedEmpNmValue = this.tab00.Tabpage1.form.divTab1.form.cboEmpList2.text;

        			if(selectedEmpNoValue=="") selectedEmpNmValue = "";

         			this.dsList.setColumn(this.dsList.rowposition, "PICKUP_BRAN_CD", selectedBranCdValue);
         			this.dsList.setColumn(this.dsList.rowposition, "PICKUP_BRAN_NM", selectedBranNmValue);
        			this.dsList.setColumn(this.dsList.rowposition, "PICKUP_EMP_NO", selectedEmpNoValue);
        			this.dsList.setColumn(this.dsList.rowposition, "PICKUP_EMP_NM", selectedEmpNmValue);
        		break;
        		case "DLV_BRAN_CD" :	// 배달점소코드
        		case "DLV_BRAN_NM" :	// 배달점소명
        		case "DLV_EMP_NO":
        		case "DLV_EMP_NM":
        			selectedBranCdValue = this.tab00.Tabpage1.form.divTab1.form.edtBranCd3.value;
        			selectedBranNmValue = this.tab00.Tabpage1.form.divTab1.form.edtBranNm3.value;
        			selectedEmpNoValue = this.tab00.Tabpage1.form.divTab1.form.cboEmpList3.value;
        			selectedEmpNmValue = this.tab00.Tabpage1.form.divTab1.form.cboEmpList3.text;

        			if(selectedEmpNoValue=="") selectedEmpNmValue = "";

        			this.dsList.setColumn(this.dsList.rowposition, "DLV_BRAN_CD", selectedBranCdValue);
        			this.dsList.setColumn(this.dsList.rowposition, "DLV_BRAN_NM", selectedBranNmValue);
        			this.dsList.setColumn(this.dsList.rowposition, "DLV_EMP_NO", selectedEmpNoValue);
        			this.dsList.setColumn(this.dsList.rowposition, "DLV_EMP_NM", selectedEmpNoValue);
        		break;


        		default :
        		break;
        	}

        };

        this.staInfo_onclick = function(obj,e)
        {

        };

        this.fnAddCodeDef = function(dsObj, strText) {

        	dsObj.insertRow();
        	dsObj.setColumn(0,'CD','');
        	dsObj.setColumn(0,'CD_NM', strText);
        }

        this.cboAddr_onitemchanged = function(obj,e)
        {
        	obj.updateToDataset();

        	// 시도
        	if(obj.name == "cboSido"){

        		this.dsSkk.clearData();
        		this.dsEmdong.clearData();

        		// 시도를 "전체"로 시군구 조회 X.
        		if( this.gfnIsNull(e.postvalue) ){
        			return;
        		}

        		this.dsSearch.clearData();
        		this.dsSearch.insertRow(0);

        		if(e.postvalue == "전체"){
        			this.dsSearch.setColumn(0, 'SI_DO' 	, "");
        		}
        		else{
        			this.dsSearch.setColumn(0, 'SI_DO' 	, e.postvalue);
        		}

        		// 시군구 리스트 조회
        		this.gfnTransaction("getSkkList");

        		// 세종시 예외처리
        		if(e.postvalue == "세종특별자치시"){
        			this.dsSearch.setColumn(0, 'SI_DO' 	, e.postvalue);
        			this.dsSearch.setColumn(0, 'SKK' 	, "");
        			this.gfnTransaction("getEmdongList");
        		}
        	}
        	// 시군구
        	else if(obj.name == "cboSkk"){

        		this.dsEmdong.clearData();

        		// 시군구를 "전체"로 변경시 읍면동 리스트 조회 X.
        		if( this.gfnIsNull(e.posttext) ){
        			return;
        		}

        		this.dsSearch.clearData();
        		this.dsSearch.insertRow(0);

        		if(e.posttext == "전체"){
        			this.dsEmdong.insertRow();
        			this.dsEmdong.setColumn(0,'EMDONG_NM', "전체");
        			return;
        		}
        		else{
        			this.dsSearch.setColumn(0, 'SI_DO' 	, e.postvalue);
        			this.dsSearch.setColumn(0, 'SKK' 	, e.posttext);
        		}

        		// 읍면동 리스트 조회
        		this.gfnTransaction("getEmdongList");
        	}
        };

        this.fnEidt_canchange = function(obj,e)
        {
        	var objName = obj.name;

        	if(obj.value == ""){
        		obj.updateToDataset();
        		switch( objName ) {
        			case	'edtBranCd' : this.edtBranNm.set_value("");	break;
        			case	'edtBranCd2' : this.tab00.Tabpage1.form.divTab1.form.edtBranNm2.set_value("");	break;
        			default		: 	break;
        		}
        	}
        };


        this.dsList_cancolumnchange = function(obj,e)
        {
        // 	var colName = e.columnid;
        //
        // 	if(colName == "CHK") return;
        //
        // 	this.dsList.setColumn(e.row, "CHK", "1");
        // 	obj.updateToDataset();
        };

        this.btnSetGird_onmouseenter = function(obj,e)
        {
        	this.tab00.Tabpage1.form.divTab1.form.stcSetGridDtailInfo.set_visible(true);
        };

        this.btnSetGird_onmouseleave = function(obj,e)
        {
        	this.tab00.Tabpage1.form.divTab1.form.stcSetGridDtailInfo.set_visible(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.stSearch.addEventHandler("onclick",this.divSearch_staSearch_onclick,this);
            this.staShpr00.addEventHandler("onclick",this.staShpr00_onclick,this);
            this.edtBranNm.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.btnBranSearch.addEventHandler("onclick",this.fn_PopOpen,this);
            this.edtBranCd.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.gridMain.addEventHandler("onselectchanged",this.fn_Grid_SelectSearch,this);
            this.gridMain.addEventHandler("onheadclick",this.gridMain_onheadclick,this);
            this.gridMain.addEventHandler("oncellclick",this.gridMain_oncellclick,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.cboSido.addEventHandler("onitemchanged",this.cboAddr_onitemchanged,this);
            this.cboSkk.addEventHandler("onitemchanged",this.cboAddr_onitemchanged,this);
            this.tab00.addEventHandler("onchanged",this.tab00_onchanged,this);
            this.tab00.Tabpage1.form.divTab1.form.edtBranCd2.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtBranCd2.addEventHandler("canchange",this.fnEidt_canchange,this);
            this.tab00.Tabpage1.form.divTab1.form.btnBranSearch2.addEventHandler("onclick",this.fn_PopOpen,this);
            this.tab00.Tabpage1.form.divTab1.form.edtBranNm2.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboEmpList2.addEventHandler("canitemchange",this.cboIlnrgnDv_canitemchange,this);
            this.tab00.Tabpage1.form.divTab1.form.edtBranCd3.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtBranCd3.addEventHandler("canchange",this.fnEidt_canchange,this);
            this.tab00.Tabpage1.form.divTab1.form.btnBranSearch3.addEventHandler("onclick",this.fn_PopOpen,this);
            this.tab00.Tabpage1.form.divTab1.form.edtBranNm3.addEventHandler("onkeydown",this.fn_editOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboEmpList3.addEventHandler("canitemchange",this.cboIlnrgnDv_canitemchange,this);
            this.tab00.Tabpage1.form.divTab1.form.cboZnDv.addEventHandler("canitemchange",this.cboZnDv_canitemchange,this);
            this.tab00.Tabpage1.form.divTab1.form.cboDlvRgn.addEventHandler("canitemchange",this.cboDlvRgn_canitemchange,this);
            this.tab00.Tabpage1.form.divTab1.form.cboIlnrgnDv.addEventHandler("canitemchange",this.cboIlnrgnDv_canitemchange,this);
            this.tab00.Tabpage1.form.divTab1.form.mskAirRate.addEventHandler("canchange",this.mskAirRate_canchange,this);
            this.tab00.Tabpage1.form.divTab1.form.mskFerryRate.addEventHandler("canchange",this.mskFerryRate_canchange,this);
            this.tab00.Tabpage1.form.divTab1.form.cboDlvNeedSumday.addEventHandler("canitemchange",this.cboDlvNeedSumday_canitemchange,this);
            this.tab00.Tabpage1.form.divTab1.form.edtSortCd.addEventHandler("canchange",this.edtSortCd_canchange,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSaveDetailInfo.addEventHandler("onclick",this.btnOnClick,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSaveDetailInfo.addEventHandler("onmouseenter",this.btnSaveDetailInfo_onmouseenter,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSaveDetailInfo.addEventHandler("onmouseleave",this.btnSaveDetailInfo_onmouseleave,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSaveZnChg.addEventHandler("onclick",this.btnOnClick,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSaveZnChg.addEventHandler("onmouseenter",this.btnSaveZnChg_onmouseenter,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSaveZnChg.addEventHandler("onmouseleave",this.btnSaveZnChg_onmouseleave,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSetGird.addEventHandler("onclick",this.btnOnClick,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSetGird.addEventHandler("onmouseenter",this.btnSetGird_onmouseenter,this);
            this.tab00.Tabpage1.form.divTab1.form.btnSetGird.addEventHandler("onmouseleave",this.btnSetGird_onmouseleave,this);
            this.cboEmpList.addEventHandler("canitemchange",this.cboIlnrgnDv_canitemchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };

        this.loadIncludeScript("BAIM_BAIM_0010.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
