(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("BAIM_WMS_ITEM_MNG");
            this.set_titletext("품목관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsLenUnit=ds1 dsWtUnit=ds2 dsVolUnit=ds3 dsExprDateStd=ds4</Col><Col id=\"QUERY_LIST\">q1=MS102 q2=MS103 q3=MS104 q4=WM103</Col></Row><Row><Col id=\"SVC_ID\">saveItemList</Col><Col id=\"SERVICE_BEANNAME\">baimWmsItemMgmtService</Col><Col id=\"SERVICE_METHOD\">saveItemList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"IN_DATASET_LIST\">dsItemList=dsItemList:U dsItemBarcodeList=dsItemBarcodeList:U</Col><Col id=\"OUT_DATASET_LIST\"/></Row><Row><Col id=\"SVC_ID\">getItemList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"OUT_DATASET_LIST\">dsItemList=dsItemList</Col><Col id=\"SERVICE_BEANNAME\">baimWmsItemMgmtService</Col><Col id=\"SERVICE_METHOD\">getItemList</Col><Col id=\"QUERY_LIST\"/></Row><Row><Col id=\"SVC_ID\">getItemBarcodeList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch2</Col><Col id=\"OUT_DATASET_LIST\">dsItemBarcodeList=dsItemBarcodeList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimWmsItemMgmtService</Col><Col id=\"SERVICE_METHOD\">getItemBarcodeList</Col></Row><Row><Col id=\"SVC_ID\">deleteItemList</Col><Col id=\"IN_DATASET_LIST\">dsItemList=dsItemList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimWmsItemMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteItemList</Col></Row><Row><Col id=\"SVC_ID\">getItemInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsItemInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemInfo</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo2</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch2</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getCustInfo</Col></Row><Row><Col id=\"SVC_ID\">getItemGrpInfo</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch2</Col><Col id=\"OUT_DATASET_LIST\">dsItemGrpInfo=ds1</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\">q1=baimCommonService.getItemGrpInfo</Col><Col id=\"SERVICE_METHOD\"/><Col id=\"SERVICE_BEANNAME\"/></Row><Row><Col id=\"SVC_ID\">deleteItemBarcodeList</Col><Col id=\"IN_DATASET_LIST\">dsItemBarcodeList=dsItemBarcodeList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">baimWmsItemMgmtService</Col><Col id=\"SERVICE_METHOD\">deleteItemBarcodeList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLenUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPT\" type=\"STRING\" size=\"256\"/><Column id=\"MGMT_UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"HS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_BARCODE\" type=\"STRING\" size=\"256\"/><Column id=\"LOGI_BARCODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"LEN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"WT\" type=\"STRING\" size=\"256\"/><Column id=\"VOL\" type=\"STRING\" size=\"256\"/><Column id=\"LEN_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WT_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VOL_UNIT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"VDT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"VDT_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREI_VDT_PRMT_PERIOD\" type=\"STRING\" size=\"256\"/><Column id=\"WAREO_VDT_PRMT_PERIOD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn_sc", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUseYn", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWtUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVolUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVdtFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\"/><Col id=\"CD_NM\">선택</Col></Row><Row><Col id=\"CD\">Y</Col><Col id=\"CD_NM\">사용</Col></Row><Row><Col id=\"CD\">N</Col><Col id=\"CD_NM\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExprDateStd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch2", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_NM\" size=\"256\" type=\"STRING\"/><Column id=\"USE_YN\" size=\"256\" type=\"STRING\"/><Column id=\"ITEM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_GRP_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemGrpInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ITEM_GRP_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">1</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemBarcodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SHIPPER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ITEM_BARCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stSearch","0","35",null,"40","30",null,null,null,null,null,this);
            obj.set_cssclass("top_search_ty01");
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","0","stSearch:3",null,null,"467","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsItemList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"30\"/><Column size=\"92\"/><Column size=\"139\"/><Column size=\"88\"/><Column size=\"94\"/><Column size=\"88\"/><Column size=\"184\"/><Column size=\"184\"/><Column size=\"90\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" accessibilitydescription=\"T0199\" text=\"고객ID\"/><Cell col=\"3\" accessibilitydescription=\"T0199\" text=\"고객명\"/><Cell col=\"4\" accessibilitydescription=\"T0199\" text=\"품목그룹코드\"/><Cell col=\"5\" accessibilitydescription=\"T0199\" text=\"품목그룹명\"/><Cell col=\"6\" accessibilitydescription=\"T0199\" text=\"품목코드\"/><Cell col=\"7\" accessibilitydescription=\"T0199\" text=\"품목명\"/><Cell col=\"8\" accessibilitydescription=\"T0199\" text=\"설명\"/><Cell col=\"9\" accessibilitydescription=\"T0278\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"2\" editautoselect=\"true\" edittype=\"none\" text=\"bind:SHIPPER_ID\" textAlign=\"left\"/><Cell col=\"3\" editautoselect=\"true\" edittype=\"none\" text=\"bind:SHIPPER_NM\" textAlign=\"left\"/><Cell col=\"4\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ITEM_GRP_CD\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"5\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ITEM_GRP_DESC\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"6\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ITEM_CD\" textAlign=\"left\" displaytype=\"normal\" combodataset=\"dsWarehType\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"7\" editautoselect=\"true\" edittype=\"none\" text=\"bind:ITEM_NM\" textAlign=\"left\"/><Cell col=\"8\" editautoselect=\"true\" edittype=\"none\" text=\"bind:DESCRIPT\" textAlign=\"left\"/><Cell col=\"9\" editautoselect=\"true\" edittype=\"none\" text=\"bind:USE_YN\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsUseYn_sc\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("cboUseYn_sc","406","43","111","23",null,null,null,null,null,null,this);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("3");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsUseYn_sc");
            this.addChild(obj.name, obj);

            obj = new Static("staExeCorp00","345","44","56","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T0655");
            obj.set_taborder("7");
            obj.set_text("사용여부");
            this.addChild(obj.name, obj);

            obj = new Tab("tab00","grd_Main:5","stSearch:3","430","555",null,null,null,null,null,null,this);
            obj.set_cssclass("in_tab_ty01");
            obj.set_tabbuttonheight("30");
            obj.set_tabindex("0");
            obj.set_taborder("8");
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

            obj = new Static("sta06","0","0","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("22");
            obj.set_text("고객");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search","119","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("23");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta01","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1429");
            obj.set_taborder("24");
            obj.set_text("품목코드");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search00","119","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("25");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta03","0","58","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1726");
            obj.set_taborder("26");
            obj.set_text("품목명");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search01","119","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("27");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta04","0","87","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1723");
            obj.set_taborder("28");
            obj.set_text("품목그룹");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search12","119","87",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("29");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta07","0","116","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1797");
            obj.set_taborder("30");
            obj.set_text("사용여부");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search03","119","116",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("31");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta08","0","174","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1268");
            obj.set_taborder("32");
            obj.set_text("관리단위");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search04","119","174",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("33");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search05","119","203",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("34");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtItemGrpCd","123","90","90","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_inputmode("upper");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchItemGrp","213","90","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_search02");
            obj.set_taborder("6");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtItemCd","123","32","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("3");
            obj.set_password("false");
            obj.set_background("papayawhip");
            obj.set_inputmode("upper");
            obj.set_maxlength("20");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00","0","203","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("35");
            obj.set_text("HS CODE");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtDescript","237","90","189","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("7");
            obj.set_password("false");
            obj.set_readonly("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtShipperId","123","3","90","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("0");
            obj.set_background("papayawhip");
            obj.set_readonly("false");
            obj.set_inputmode("upper");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Button("btnOpenPopSearchShipper1","213","3","25","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("btn_search02");
            obj.set_taborder("1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtShipperNm","237","3","189","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("2");
            obj.set_password("false");
            obj.set_background("papayawhip");
            obj.set_readonly("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00","0","232","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("36");
            obj.set_text("가격");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00","119","232",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("37");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00","0","261","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("38");
            obj.set_text("높이");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00","119","261",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("39");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00","0","319","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("40");
            obj.set_text("길이");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00","119","319",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("41");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_01","0","290","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("42");
            obj.set_text("너비");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_01","119","290",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("43");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00_00","0","406","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("44");
            obj.set_text("부피");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_01_00","0","377","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("45");
            obj.set_text("무게");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_01_00","119","377",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("46");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00_00","119","406",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("47");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_01","0","348","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("48");
            obj.set_text("깊이");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_01","119","348",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("49");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00_00_00","0","435","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("50");
            obj.set_text("길이단위");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00_00_00","119","435",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("51");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_00_00_00_01","0","493","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("52");
            obj.set_text("부피단위");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_00_00_00_01","119","493",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("53");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta09_00_00_00_01_00_00","0","464","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1534");
            obj.set_taborder("54");
            obj.set_text("무게단위");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search02_00_00_01_00_00","119","464",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("55");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","145","120","30",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1268");
            obj.set_taborder("56");
            obj.set_text("설명");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Static("stc_search04_00","119","145",null,"30","0",null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("57");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtItemNm","123","61","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("4");
            obj.set_password("false");
            obj.set_background("papayawhip");
            obj.set_maxlength("100");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtDesc","123","148","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("9");
            obj.set_password("false");
            obj.set_maxlength("450");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtMgmtUnit","123","177","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("10");
            obj.set_password("false");
            obj.set_maxlength("20");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Edit("edtHsCd","123","206","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("11");
            obj.set_password("false");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","123","119","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsUseYn");
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskPrice","123","235","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("12");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskHeight","123","264","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("13");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###.##");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskWidth","123","293","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("14");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###.##");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskLen","123","322","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("15");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###.##");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskDepth","123","351","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("16");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###.##");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskWt","123","380","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("17");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###.##");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new MaskEdit("mskVol","123","409","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_taborder("18");
            obj.set_limitbymask("both");
            obj.set_type("number");
            obj.set_textAlign("right");
            obj.set_format("#,###,###,###,###,###,###,###.##");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboLenUnitCd","123","438","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsLenUnit");
            obj.set_taborder("19");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboWtUnitCd","123","467","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsWtUnit");
            obj.set_taborder("20");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Combo("cboVolUnitCd","123","496","303","23",null,null,null,null,null,null,this.tab00.Tabpage1.form.divTab1.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty02");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsVolUnit");
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_index("-1");
            this.tab00.Tabpage1.form.divTab1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab00);
            obj.set_text("전략정보");
            this.tab00.addChild(obj.name, obj);

            obj = new Static("sta08_00","0","0","120","30",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1268");
            obj.set_taborder("0");
            obj.set_text("유효일자관리기준");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("stc_search04_00","119","0",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("1");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Radio("rdoVdtFlag","127","3","299","23",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsExprDateStd");
            obj.set_codecolumn("CD");
            obj.set_datacolumn("CD_NM");
            obj.set_direction("vertical");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00","0","29","120","30",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1268");
            obj.set_taborder("3");
            obj.set_text("입고 유효기간 허용오차");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("stc_search04_00_00_00","119","29",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("4");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta08_00_00_00_00","0","58","120","30",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1268");
            obj.set_taborder("5");
            obj.set_text("출고 유효기간 허용오차");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("stc_search04_00_00_00_00","119","58",null,"30","0",null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_cssclass("sta_tbody_td01");
            obj.set_taborder("6");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtWareiVdtPrmtPeriod","123","32","303","23",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("7");
            obj.set_password("false");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Edit("edtWareoVdtPrmtPeriod","123","61","303","23",null,null,null,null,null,null,this.tab00.Tabpage2.form);
            obj.set_cssclass("inp_ty02");
            obj.set_enable("true");
            obj.set_taborder("8");
            obj.set_password("false");
            obj.set_inputtype("number");
            obj.set_textAlign("right");
            this.tab00.Tabpage2.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("9");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustNm_sc","179","43","130","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","155","43","25","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_search01");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustCd_sc","65","43","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.addChild(obj.name, obj);

            obj = new Static("staDropLoc00","25","44","45","23",null,null,null,null,null,null,this);
            obj.set_cssclass("top_search_tx01");
            obj.getSetter("domainId").set("T1075");
            obj.set_taborder("10");
            obj.set_text("고객");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            obj = new Grid("grdBarcode",null,"668","430",null,"32","0",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsItemBarcodeList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty04");
            obj.set_taborder("12");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"177\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" accessibilitydescription=\"T0199\" text=\"품목바코드\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" editautoselect=\"true\" edittype=\"expr:dataset.getRowType(currow)==2?'normal':'none'\" text=\"bind:ITEM_BARCODE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stTitle",null,"640","91","31","364",null,null,null,null,null,this);
            obj.set_cssclass("in_tit01");
            obj.getSetter("domainId").set("T0198");
            obj.set_taborder("13");
            obj.set_text("품목바코드관리");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddItemBarcode",null,"644","25","23","58",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteItemBarcode",null,"644","25","23","32",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("-");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab00.Tabpage1.form.divTab1.form.edtShipperId","value","dsItemList","SHIPPER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab00.Tabpage1.form.divTab1.form.edtShipperNm","value","dsItemList","SHIPPER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab00.Tabpage1.form.divTab1.form.edtItemCd","value","dsItemList","ITEM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab00.Tabpage1.form.divTab1.form.edtItemNm","value","dsItemList","ITEM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab00.Tabpage1.form.divTab1.form.edtItemGrpCd","value","dsItemList","ITEM_GRP_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab00.Tabpage1.form.divTab1.form.edtDescript","value","dsItemList","ITEM_GRP_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab00.Tabpage1.form.divTab1.form.cboUseYn","value","dsItemList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab00.Tabpage1.form.divTab1.form.edtDesc","value","dsItemList","DESCRIPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab00.Tabpage1.form.divTab1.form.edtMgmtUnit","value","dsItemList","MGMT_UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab00.Tabpage1.form.divTab1.form.edtHsCd","value","dsItemList","HS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab00.Tabpage1.form.divTab1.form.mskPrice","value","dsItemList","PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab00.Tabpage1.form.divTab1.form.mskHeight","value","dsItemList","HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab00.Tabpage1.form.divTab1.form.mskWidth","value","dsItemList","WIDTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab00.Tabpage1.form.divTab1.form.mskLen","value","dsItemList","LEN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab00.Tabpage1.form.divTab1.form.mskDepth","value","dsItemList","DEPTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab00.Tabpage1.form.divTab1.form.mskWt","value","dsItemList","WT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab00.Tabpage1.form.divTab1.form.mskVol","value","dsItemList","VOL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab00.Tabpage1.form.divTab1.form.cboLenUnitCd","value","dsItemList","LEN_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab00.Tabpage1.form.divTab1.form.cboWtUnitCd","value","dsItemList","WT_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab00.Tabpage1.form.divTab1.form.cboVolUnitCd","value","dsItemList","VOL_UNIT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","cboUseYn_sc","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edtCustNm_sc","value","dsSearch","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtCustCd_sc","value","dsSearch","CUST_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab00.Tabpage2.form.edtWareiVdtPrmtPeriod","value","dsItemList","WAREI_VDT_PRMT_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab00.Tabpage2.form.edtWareoVdtPrmtPeriod","value","dsItemList","WAREO_VDT_PRMT_PERIOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab00.Tabpage2.form.rdoVdtFlag","value","dsItemList","VDT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("BAIM_WMS_ITEM_MNG.xfdl","lib::lib_Form.xjs");
        this.registerScript("BAIM_WMS_ITEM_MNG.xfdl", function() {
        /**
        *  품목관리
        *  @MenuPath
        *  @FileName 		BAIM_WMS_ITEM_MNG.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.03.06
        *  @Desction        품목관리
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.06		Kim Jin Hwan			최초 생성
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

        		// 품목바코드추가
        		case "btnAddItemBarcode":
        			this.fnAddItemBarcode();
        		break;

        		// 품목바코드삭제
        		case "btnDeleteItemBarcode":
        			this.fnDeleteItemBarcode();
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

        	this.dsItemList.clearData();

        	this.gfnTransaction("getItemList");

        };


        /***********************************************************************************************
         * @function	: fnSearchItemBarcode
         * @description	: 조회.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSearchItemBarcode = function() {


        	// 조회조건 필수입력 체크
        	this.dsSearch2.setColumn(0, "CUST_CD", this.dsItemList.getColumn(this.dsItemList.rowposition, "SHIPPER_ID"));
        	this.dsSearch2.setColumn(0, "ITEM_CD", this.dsItemList.getColumn(this.dsItemList.rowposition, "ITEM_CD"));

        	this.dsItemBarcodeList.clearData();

        	this.gfnTransaction("getItemBarcodeList");

        };


        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 신규추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function() {

        	var nRow = this.dsItemList.addRow();

        	this.dsItemList.setColumn(nRow, "CHK", "1");
        	this.dsItemList.setColumn(nRow, "USE_YN", "Y");
        	this.dsItemList.setColumn(nRow, "LEN_UNIT_CD", "");
        	this.dsItemList.setColumn(nRow, "WT_UNIT_CD", "");
        	this.dsItemList.setColumn(nRow, "VOL_UNIT_CD", "");
        	this.dsItemList.setColumn(nRow, "VDT_FLAG", "01");

        	// 기본정보 탭 이동
        	this.tab00.set_tabindex(0);

        	// 화주ID 포커스
        	this.tab00.Tabpage1.form.divTab1.form.edtShipperId.setFocus();
        };



        /***********************************************************************************************
         * @function	: fnDelete
         * @description	: 삭제처리.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDelete = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsItemList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("삭제할 행을 체크해주세요.");
        		return;
        	}


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("deleteItemList");
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
        	if(this.dsItemList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("저장할 행을 체크해주세요.");
        		return;
        	}


        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	var dsRowCount = this.dsItemList.getRowCount();

        	for(var i=0; i<dsRowCount; i++){

        		var chkValue = this.dsItemList.getColumn(i, "CHK");

        		// 체크되지않은 행은 스킵
        		if(chkValue != "1") continue;

        		var nRowType = this.dsItemList.getRowType(i);

        		// 신규 또는 수정 행만 저장 처리
        		if(nRowType != Dataset.ROWTYPE_INSERT && nRowType != Dataset.ROWTYPE_UPDATE){
        			continue;
        		}


        		var shipperIdValue = this.dsItemList.getColumn(i, "SHIPPER_ID");
        		var shipperNmValue = this.dsItemList.getColumn(i, "SHIPPER_NM");
        		var itemCdValue = this.dsItemList.getColumn(i, "ITEM_CD");
        		var itemNmValue = this.dsItemList.getColumn(i, "ITEM_NM");

        		// 화주ID
        		if(this.gfnIsNull(shipperIdValue)){
        			this.gfnAlert((i+1)+"행의 고객ID를 입력해주세요.");
        			this.dsItemList.set_rowposition(i);
        			this.tab00.Tabpage1.form.divTab1.form.edtShipperId.setFocus(true);
        			return;
        		}

        		// 화주명
        		if(this.gfnIsNull(shipperNmValue)){
        			this.gfnAlert((i+1)+"행의 고객명을 입력해주세요.");
        			this.dsItemList.set_rowposition(i);
        			this.tab00.Tabpage1.form.divTab1.form.edtShipperNm.setFocus(true);
        			return;
        		}


        		// 품목코드
        		if(this.gfnIsNull(itemCdValue)){
        			this.gfnAlert((i+1)+"행의 품목코드를 선택해주세요.");
        			this.dsItemList.set_rowposition(i);
        			this.tab00.Tabpage1.form.divTab1.form.edtItemCd.setFocus(true);
        			return;
        		}

        		// 품목명
        		if(this.gfnIsNull(itemNmValue)){
        			this.gfnAlert((i+1)+"행의 품목명를 입력해주세요.");
        			this.dsItemList.set_rowposition(i);
        			this.tab00.Tabpage1.form.divTab1.form.edtItemNm.setFocus(true);
        			return;
        		}

        	}

        	/****************************************************************************************************/

        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		this.gfnTransaction("saveItemList");
        	});

        };


        /***********************************************************************************************
         * @function	: fnAddItemBarcode
         * @description	: 품목바코드 추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAddItemBarcode = function() {

        	var nRow = this.dsItemBarcodeList.addRow();

        	this.dsItemBarcodeList.setColumn(nRow, "CHK", "1");
        	this.dsItemBarcodeList.setColumn(nRow, "SHIPPER_ID", this.dsItemList.getColumn(this.dsItemList.rowposition, "SHIPPER_ID"));
        	this.dsItemBarcodeList.setColumn(nRow, "ITEM_CD", this.dsItemList.getColumn(this.dsItemList.rowposition, "ITEM_CD"));

        	this.dsItemList.setColumn(this.dsItemList.rowposition, "CHK", "1");

        	this.grdBarcode.setCellPos(this.grdBarcode.getBindCellIndex("BODY", "ITEM_BARCODE"), nRow);
        	this.grdBarcode.setFocus();
        };


        /***********************************************************************************************
         * @function	: fnDeleteItemBarcode
         * @description	: 품목바코드 삭제.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnDeleteItemBarcode = function() {

        	//chk된 항목이 있는지 확인.
        	if(this.dsItemBarcodeList.findRow("CHK", "1") < 0) {
        		//this.gfnAlert("M0307");
        		this.gfnAlert("삭제할 행을 체크해주세요.");
        		return;
        	}


        	this.gfnCustomConfirm("삭제하시겠습니까?", function(sPopId, bResult){

        		if(!bResult) return;

        		for(var i=this.dsItemBarcodeList.rowcount; i>=0; i--){
        			var nRowType = this.dsItemBarcodeList.getRowType(i);

        			if(nRowType == Dataset.ROWTYPE_INSERT){
        				this.dsItemBarcodeList.deleteRow(i);
        			}
        		}

        		if(this.dsItemBarcodeList.findRow("CHK", "1") != -1) {
        			this.gfnTransaction("deleteItemBarcodeList");
        		}
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
        		case "saveItemList" :
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;


        		// 삭제
        		case "deleteItemList" :
        			this.fnSearch();
        		break;


        		// 품목바코드삭제
        		case "deleteItemBarcodeList" :
        			this.fnSearchItemBarcode();
        		break;


        		// 품목 조회조건 처리.
        		case "getItemInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsItemInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "ITEM_CD", this.dsItemInfo.getColumn(0,"ITEM_CD"));
        				this.dsSearch.setColumn(0, "ITEM_NM", this.dsItemInfo.getColumn(0,"ITEM_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnItemSearch.click();
        			}

        		break;

        		// 고객 조회조건 처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsSearch.setColumn(0, "CUST_CD", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsSearch.setColumn(0, "CUST_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.btnCustSearch.click();
        			}

        		break;


        		// 고객 조회조건 처리.
        		case "getCustInfo2":

        			// 1건 조회된 경우 입력값에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsItemList.setColumn(this.dsItemList.rowposition, "SHIPPER_ID", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsItemList.setColumn(this.dsItemList.rowposition, "SHIPPER_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchShipper1.click();
        			}

        		break;


        		case "getItemGrpInfo":

        			// 1건 조회된 경우 입력값에 셋팅.
        			if(this.dsItemGrpInfo.getRowCount() == 1){

        				this.dsItemList.setColumn(this.dsItemList.rowposition, "ITEM_GRP_CD", this.dsItemGrpInfo.getColumn(0,"ITEM_GRP_CD"));
        				this.dsItemList.setColumn(this.dsItemList.rowposition, "ITEM_GRP_DESC", this.dsItemGrpInfo.getColumn(0,"DESCRIPT"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchItemGrp.click();
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
        	// 사용여부
        	this.fnAddCodeDef(this.dsUseYn_sc, '전체');
        	this.cboUseYn_sc.set_index(0);

        	// 길이단위
        	this.fnAddCodeDef(this.dsLenUnit, '선택');

        	// 무게단위
        	this.fnAddCodeDef(this.dsWtUnit, '선택');

        	// 부피단위
        	this.fnAddCodeDef(this.dsVolUnit, '선택');
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


        /***********************************************************************************************
         * @function		: fnOpenPopZn
         * @description		: 존 조회 팝업 호출
         * @param 			:
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopItemGrp = function()
        {
        	// 파라미터 설정
        	var popupId = "itemGrpPop1";	//팝업ID
        	var pItemGrpCdValue = this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.value;
        	var pDescriptValue = this.tab00.Tabpage1.form.divTab1.form.edtDescript.value;


        	// 팝업 호출
        	var oArg = {
        				  pItemGrpCd    : pItemGrpCdValue
        				, pDescript     : pDescriptValue
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P070.xfdl", oArg, sPopupCallBack, oOption);
        }



        /***********************************************************************************************
         * @function	: fn_OpenPopCust
         * @description	: 고객 조회 팝업을 호출한다.
         * @param		: btnName	- String
         * @return N/A
        /***********************************************************************************************/
        this.fn_OpenPopCust = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pCustCdValue = '';	// 품목코드
        	var pCustNmValue = '';	// 품목명

        	if(btnName == "btnCustSearch"){
        		popupId = 'custPop1';
        		pCustCdValue = this.edtCustCd_sc.value;
        		pCustNmValue = this.edtCustNm_sc.value;
        	}

        	// 팝업 호출
        	var oArg = {
        				  pCustCd		: pCustCdValue									// 고객코드
        				, pCustNm		: pCustNmValue									// 고객명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P060.xfdl", oArg, sPopupCallBack, oOption);

        };


        /***********************************************************************************************
         * @function		: fnOpenPopSearchShipper
         * @description		: 화주 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopSearchShipper = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pCustIdValue = '';	// 고객번호
        	var pCustNmValue = '';	// 고객명

        	if(btnName == "btnOpenPopSearchShipper1"){
        		popupId = 'pop1';
        		pCustIdValue = this.tab00.Tabpage1.form.divTab1.form.edtShipperId.value;
        		pCustNmValue = this.tab00.Tabpage1.form.divTab1.form.edtShipperNm.value;
        	}else{

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
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P060.xfdl", oArg, sPopupCallBack, oOption);
        }



        /***********************************************************************************************
         * @function		: fnOpenPopSearchItem
         * @description		: 품목 조회 팝업 호출
         * @param 			: btnName	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopSearchItem = function(btnName)
        {
        	// 파라미터 설정
        	var popupId = '';	//팝업ID
        	var pItemCdValue = '';	// 품목코드
        	var pItemNmValue = '';	// 품목명

        	if(btnName == "btnOpenPopSearchItem1"){
        		popupId = 'itemPop1';
        		pItemCdValue = this.edtItemCd_sc.value;
        		pItemNmValue = this.edtItemNm_sc.value;
        	}else{

        	}


        	// 팝업 호출
        	var oArg = {
        				  pItemCd		: pItemCdValue									// 품목코드
        				, pItemNm		: pItemNmValue									// 품목명
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_WMS_P050.xfdl", oArg, sPopupCallBack, oOption);
        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.dsItemList_onrowposchanged = function(obj,e)
        {

        	this.fnSetReadonlyComp(e.newrow);

        	// 품목바코드리스트 조회
        	this.fnSearchItemBarcode();
        };


        // 컴포넌트 활성화/비활성화처리
        this.fnSetReadonlyComp = function(nRow)
        {

        	var nRowType = this.dsItemList.getRowType(nRow);

        	// 신규
        	if(nRowType == Dataset.ROWTYPE_INSERT){

        		this.tab00.Tabpage1.form.divTab1.form.edtShipperId.set_readonly(false);	// 화주ID
        		this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchShipper1.set_enable(true);	// 화주조회팝업
        		this.tab00.Tabpage1.form.divTab1.form.edtShipperNm.set_readonly(false);	// 화주명
        		this.tab00.Tabpage1.form.divTab1.form.edtItemCd.set_readonly(false);	// 품목코드

        	}
        	// 신규아닐때
        	else{

        		this.tab00.Tabpage1.form.divTab1.form.edtShipperId.set_readonly(true);	// 화주ID
        		this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchShipper1.set_enable(false);	// 화주조회팝업
        		this.tab00.Tabpage1.form.divTab1.form.edtShipperNm.set_readonly(true);	// 화주명
        		this.tab00.Tabpage1.form.divTab1.form.edtItemCd.set_readonly(true);	// 품목코드
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

        	if( e.keycode === 13 ) {

        		obj.updateToDataset();
        		switch( objName ) {
        			case	'edtCustCd_sc' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtCustNm_sc' : this.gfnTransaction("getCustInfo"); break;
        			case	'edtShipperId' :
        				this.dsSearch2.setColumn(0, "CUST_CD", this.dsItemList.getColumn(this.dsItemList.rowposition, "SHIPPER_ID"));
        				this.gfnTransaction("getCustInfo2");
        			break;
        			case	'edtShipperNm' :
        				this.dsSearch2.setColumn(0, "CUST_NM", this.dsItemList.getColumn(this.dsItemList.rowposition, "SHIPPER_NM"));
        				this.gfnTransaction("getCustInfo2");
        			break;
        			case	'edtItemCd_sc' : this.gfnTransaction("getItemInfo"); break;
        			case	'edtItemNm_sc' : this.gfnTransaction("getItemInfo"); break;

        			case 	'edtItemGrpCd' :
        				this.dsSearch2.setColumn(0, "ITEM_GRP_CD", this.dsItemList.getColumn(this.dsItemList.rowposition, "ITEM_GRP_CD"));
        				this.gfnTransaction("getItemGrpInfo");
        			break;

        			case 	'edtDescript' :
        				this.dsSearch2.setColumn(0, "ITEM_GRP_DESC", this.dsItemList.getColumn(this.dsItemList.rowposition, "ITEM_GRP_DESC"));
        				this.gfnTransaction("getItemGrpInfo");
        			break;

        			default	: 	break;
        		}
        	}
        	else{

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
        		case	'edtCustCd_sc' : this.edtCustNm_sc.set_value(); break;
        		case	'edtCustNm_sc' : this.edtCustCd_sc.set_value(); break;
        		case	'edtShipperId' : this.tab00.Tabpage1.form.divTab1.form.edtShipperNm.set_value(); break;
        		case	'edtShipperNm' : this.tab00.Tabpage1.form.divTab1.form.edtShipperId.set_value(); break;
        		case	'edtItemCd_sc' : this.edtItemNm_sc.set_value(); break;
        		case	'edtItemNm_sc' : this.edtItemCd_sc.set_value(); break;
        		case 	'edtItemGrpCd' : this.tab00.Tabpage1.form.divTab1.form.edtDescript.set_value(); break;
        		case 	'edtDescript' : this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.set_value(); break;

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
            this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtItemGrpCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchItemGrp.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.divTab1.form.edtDescript.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtDescript.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.edtShipperId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtShipperId.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.btnOpenPopSearchShipper1.addEventHandler("onclick",this.fnOpenPop,this);
            this.tab00.Tabpage1.form.divTab1.form.edtShipperNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.tab00.Tabpage1.form.divTab1.form.edtShipperNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.tab00.Tabpage1.form.divTab1.form.cboUseYn.addEventHandler("ondropdown",this.tabUserInfo_Tabpage1_div00_cboJoinType_ondropdown,this);
            this.tab00.Tabpage1.form.divTab1.form.cboUseYn.addEventHandler("onitemchanged",this.tabUserInfo_Tabpage1_div00_cboJoinType_onitemchanged,this);
            this.edtCustNm_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustNm_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.btnCustSearch.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtCustCd_sc.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustCd_sc.addEventHandler("oninput",this.fnEditOnInput,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.grdBarcode.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.btnAddItemBarcode.addEventHandler("onclick",this.btnOnClick,this);
            this.btnDeleteItemBarcode.addEventHandler("onclick",this.btnOnClick,this);
            this.dsItemList.addEventHandler("onrowposchanged",this.dsItemList_onrowposchanged,this);
        };

        this.loadIncludeScript("BAIM_WMS_ITEM_MNG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
