(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RCPT_DLVY_0002");
            this.set_titletext("기업고객 파일접수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCalCpDv=ds1 dsRsvtDv=ds2 dsItem=ds3 dsBoxTy=ds4 dsFareDv=ds5 dsTelCellFrontNum=ds6</Col><Col id=\"QUERY_LIST\">q1=RV004 q2=RV002 q3=MS042 q4=CS007 q5=CS006 q6=SM991</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">N</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimEntrpCustMgmtService.getEntrpCustInfoListBySendCust</Col></Row><Row><Col id=\"SVC_ID\">getSendCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">N</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsSendCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimSendCustMgmtService.getSendCustInfoList</Col></Row><Row><Col id=\"SVC_ID\">saveDlvyRsrvList</Col><Col id=\"IN_DATASET_LIST\">dsExcelUpload=dsExcelUpload</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">saveDlvyRsrvList</Col></Row><Row><Col id=\"SVC_ID\">getFileRsrvList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">getFileRsrvList</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCombo", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" type=\"STRING\" size=\"256\"/><Column id=\"CD_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD\">A1</Col><Col id=\"CD_NM\">A1</Col></Row><Row><Col id=\"CD\">B2</Col><Col id=\"CD_NM\">B2</Col></Row><Row><Col id=\"CD_NM\">C3</Col><Col id=\"CD\">C3</Col></Row><Row><Col id=\"CD_NM\">D4</Col><Col id=\"CD\">D4</Col></Row><Row><Col id=\"CD_NM\">E5</Col><Col id=\"CD\">E5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">집화점소기준</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">파일기준</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalCpDv00", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">계약기준</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">파일기준</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRsvtDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCd", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">02</Col></Row><Row><Col id=\"CD\">031</Col><Col id=\"CD_NM\">031</Col></Row><Row><Col id=\"CD\">032</Col><Col id=\"CD_NM\">032</Col></Row><Row><Col id=\"CD\">033</Col><Col id=\"CD_NM\">033</Col></Row><Row><Col id=\"CD\">041</Col><Col id=\"CD_NM\">041</Col></Row><Row><Col id=\"CD\">042</Col><Col id=\"CD_NM\">042</Col></Row><Row><Col id=\"CD\">043</Col><Col id=\"CD_NM\">043</Col></Row><Row><Col id=\"CD\">044</Col><Col id=\"CD_NM\">044</Col></Row><Row><Col id=\"CD\">051</Col><Col id=\"CD_NM\">051</Col></Row><Row><Col id=\"CD\">052</Col><Col id=\"CD_NM\">052</Col></Row><Row><Col id=\"CD\">053</Col><Col id=\"CD_NM\">053</Col></Row><Row><Col id=\"CD\">054</Col><Col id=\"CD_NM\">054</Col></Row><Row><Col id=\"CD\">055</Col><Col id=\"CD_NM\">055</Col></Row><Row><Col id=\"CD\">061</Col><Col id=\"CD_NM\">061</Col></Row><Row><Col id=\"CD\">062</Col><Col id=\"CD_NM\">062</Col></Row><Row><Col id=\"CD\">063</Col><Col id=\"CD_NM\">063</Col></Row><Row><Col id=\"CD\">064</Col><Col id=\"CD_NM\">064</Col></Row><Row><Col id=\"CD\">070</Col><Col id=\"CD_NM\">070</Col></Row><Row><Col id=\"CD\">010</Col><Col id=\"CD_NM\">010</Col></Row><Row><Col id=\"CD\">011</Col><Col id=\"CD_NM\">011</Col></Row><Row><Col id=\"CD\">016</Col><Col id=\"CD_NM\">016</Col></Row><Row><Col id=\"CD\">017</Col><Col id=\"CD_NM\">017</Col></Row><Row><Col id=\"CD\">018</Col><Col id=\"CD_NM\">018</Col></Row><Row><Col id=\"CD\">019</Col><Col id=\"CD_NM\">019</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoxTy", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFareDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CNTR_BRAN_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"RSRV_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ERR_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_YMD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTelCellFrontNum", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileUrl", this);
            obj._setContents("<ColumnInfo><Column id=\"URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMgmtColumn", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"COL_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COL_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"REQUIRED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelUpload2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">0</Col><Col id=\"BTN_SAV\">0</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Main","0","252","980",null,null,"60",null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("5");
            obj.set_autoupdatetype("itemselect");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"51\"/><Column size=\"145\"/><Column size=\"146\"/><Column size=\"145\"/><Column size=\"145\"/><Column size=\"146\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"주관고객명\"/><Cell col=\"2\" text=\"발송고객명\"/><Cell col=\"3\" text=\"접수일자\"/><Cell col=\"4\" text=\"접수\"/><Cell col=\"5\" text=\"오류\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"currow+1\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:CUST_NM\" edittype=\"none\" expandshow=\"hide\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SEND_CUST_NM\" edittype=\"none\" expandshow=\"hide\" displaytype=\"normal\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:RCPT_YMD\" edittype=\"none\" expandshow=\"hide\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:RSRV_CNT\" edittype=\"none\" expandshow=\"hide\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:ERR_CNT\" edittype=\"none\" expandshow=\"hide\" displaytype=\"number\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell expr=\"expr:dataset.rowcount\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\" expr=\"dataset.getSum('parseInt(RSRV_CNT)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"5\" expr=\"dataset.getSum('parseInt(ERR_CNT)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("6");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Button("btnInit",null,"7","68","23","32",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_ty01_new");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"7","68","23","-242",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_ty01_save");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn03",null,"7","68","23","-75",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_ty01_delete");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn03_00",null,"7","68","23","-148",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("엑셀");
            obj.set_cssclass("btn_ty01_excel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"37","68","23","105",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_ty01_search");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","39","981","207",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("38");
            obj.set_text("점소");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","67","0","912","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranCd","71","3","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnBranSearch","161","3","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_search01");
            obj.set_enable("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtBranNm","185","3","130","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01_req");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00","318","0","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("40");
            obj.set_text("주관고객");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","67","29","912","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","67","58","912","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00","0","29","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("44");
            obj.set_text("접수일자");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","67","87","912","59",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00","318","29","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("46");
            obj.set_text("형식명");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00","318","58","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("47");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_00","0","87","68","59",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("48");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_01_00_00_00","0","145","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("50");
            obj.set_text("품목명");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_01_00_00_00_00_00_00_00","0","174","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("52");
            obj.set_text("파일");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00","67","145","912","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01","0","58","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("55");
            obj.set_text("집화예정일자");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calRcptYmd","71","32","107","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("cal_ty01");
            obj.set_value("20200402");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calPickupExptYmd","71","62","107","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("cal_ty01");
            obj.set_value("20200402");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkPickupExptYmd","197","62","145","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("top_search_tx02");
            obj.getSetter("domainId").set("T1512");
            obj.set_taborder("14");
            obj.set_text("일자적용");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            obj.set_enable("true");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboItem","71","149","129","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("29");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsItem");
            obj.set_text("선택1");
            obj.set_value("01");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtItemNm","201","149","269","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("30");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            obj.set_inputtype("number");
            this.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo","71","92","75","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("inp_ty01");
            obj.set_format("###-###");
            obj.set_type("string");
            obj.set_enable("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtAddr","147","92","323","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","71","119","399","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSampleDownload00","874","149","78","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0672");
            obj.set_fittocontents("none");
            obj.set_taborder("33");
            obj.set_text("합포장기준");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_01","540","116","439","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_tbody_td01");
            obj.set_text("");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","636","0","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("42");
            obj.set_text("발송고객");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_01","637","87","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("49");
            obj.set_text("집화예정점소");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCustId","389","3","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","479","3","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","503","3","130","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNo","707","3","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSendCustSearch","797","3","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_search01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNm","821","3","130","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00","637","58","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("56");
            obj.set_text("기타전화번호");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00_00","473","87","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("57");
            obj.set_text("운임구분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_01_00_00_00_00","473","116","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("58");
            obj.set_text("박스타입");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkNoSender","714","119","127","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T1512");
            obj.set_taborder("28");
            obj.set_text("보내는분정보 없음");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            obj.set_enable("true");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboBoxTy","544","120","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("27");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsBoxTy");
            obj.set_text("선택1");
            obj.set_value("01");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboFareDv","544","91","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("24");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsFareDv");
            obj.set_text("선택1");
            obj.set_value("01");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtTelNo3","525","62","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("17");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtTelNo2","463","62","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("false");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("16");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","511","64","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("59");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","449","64","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("60");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboTelNo1","389","62","61","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("false");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("15");
            obj.set_text("010");
            obj.set_index("18");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCellNo3","844","62","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("20");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCellNo2","782","62","49","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("19");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02_00_01_00","830","64","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("61");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","768","64","15","18",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("62");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboCellNo1","708","62","61","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("18");
            obj.set_text("010");
            obj.set_index("18");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtRcptDvNm","389","33","75","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtXlsFormNm","465","33","240","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtPickupBranCd","708","91","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("25");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("false");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtPickupBranNm","799","91","153","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Combo("cboBoxTy00","637","149","234","23",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("32");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsBoxTy");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_01_00_00_00_00_00","473","145","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("51");
            obj.set_text("합포장적용");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkSelectLot00_00_00_01_00","550","148","86","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("top_search_tx02");
            obj.getSetter("domainId").set("T1512");
            obj.set_taborder("31");
            obj.set_text("합포장 체크");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            obj.set_enable("false");
            obj.set_visible("true");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnXlsCustLayout","708","33","89","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("12");
            obj.set_text("엑셀 양식");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00_00_00_00_00","67","174","912","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtFileName","71","177","228","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("34");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new CheckBox("chkTitleExist","356","177","86","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("ck_ty02");
            obj.getSetter("domainId").set("T1512");
            obj.set_taborder("36");
            obj.set_text("타이틀있음");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            obj.set_enable("true");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnFindFile","304","177","44","23",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("btn_ty04");
            obj.getSetter("domainId").set("T0683");
            obj.set_fittocontents("none");
            obj.set_taborder("35");
            obj.set_text("찾기");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_01_00","637","116","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("66");
            obj.set_text("보내는분정보");
            obj.set_textAlign("center");
            obj.set_visible("false");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00_00_00_00_01_00_00_00_00_00_00_00_00","473","174","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("53");
            obj.set_text("진행률");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new ProgressBar("pgb","544","178","408","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("63");
            obj.set_min("0");
            obj.set_max("100");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtTitleLn","438","177","32","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("37");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            obj.set_inputtype("normal");
            obj.set_textAlign("right");
            obj.set_value("1");
            obj.set_text("1");
            this.div00.addChild(obj.name, obj);

            obj = new Static("Static31_00","707","149","178","22",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("67");
            obj.set_text("준비중입니다");
            obj.set_usedecorate("true");
            obj.set_cssclass("sta_GID_txt");
            obj.set_color("rgba(255,0,0,1)");
            obj.set_font("bold 9pt Dotum");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd","707","6","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","554","201","142","1",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","797","201","149","1",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("red");
            this.addChild(obj.name, obj);

            obj = new Grid("grdExcelData","6","845","67.31%","135",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("none");
            obj.set_autosizebandtype("body");
            obj.set_autosizingtype("none");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("11");
            obj.set_visible("false");
            obj.set_binddataset("dsExcelUpload");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtRcptDv","605","6","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtFileUrl","810","6","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOpenPopErrUpdate","836",null,"140","33",null,"22",null,null,null,null,this);
            obj.set_cssclass("btn_btm_ty01");
            obj.getSetter("domainId").set("T0091");
            obj.set_fittocontents("none");
            obj.set_taborder("14");
            obj.set_text("오류수정");
            this.addChild(obj.name, obj);

            obj = new Div("divSearchFocus","381","0","54","34",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","482","34","104",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtFileUrl","value","dsFileUrl","URL");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("RCPT_DLVY_0002.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_DLVY_0002.xfdl", function() {
        /**
        *  폼 템플릿
        *  @MenuPath
        *  @FileName 		SAMPLE_TEMPLATE_0001.xfdl
        *  @Creator 		KJH
        *  @CreateDate 		2020.03.23
        *  @Desction        폼 템플릿
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.03.23		Kim Jin Hwan			최초 생성
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
        	this.objApp = nexacro.getApplication();

        	//화면 공통 기능 처리
        	this.gfnFormOnLoad(obj);

        	this.fnInit();



        };


        this.RCPT_DLVY_0002_ontimer = function(obj,e)
        {
        	var varProgressValue00 = (this.div00.form.pgb00.pos / this.div00.form.pgb00.max) * 100;

        	if(e.timerid == 0)
        	{


        		this.div00.form.pgb00.stepIt();
        		this.div00.form.pgb00.set_text(parseInt(varProgressValue00) + " %");

        	}
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

        	this.fnSetEntrpModule();

        	this.fnSetDefault();

        	this.dsList.clearData();
        	this.dsExcelUpload.clearData();
        };


         /***********************************************************************************************
         * @function	: fnSetDefault
         * @description	: 초기값 셋팅
         * @return N/A
        /***********************************************************************************************/
        this.fnSetDefault = function()
        {

        	this.div00.form.calRcptYmd.set_value(this.gfnGetDate("date"));			// 접수일자
        	this.div00.form.calPickupExptYmd.set_value(this.gfnGetDate("date"));	// 집화예정일자
        	this.div00.form.chkNoSender.set_value(0);								// 일자적용

        	this.edtRcptDv.set_value("");											// 예약구분
        	this.div00.form.edtRcptDvNm.set_value("");								// 예약구분명
        	this.div00.form.edtXlsFormNm.set_value("");								// 형식명

        	this.div00.form.cboBoxTy.set_value("02");								// 박스타입
        	this.div00.form.cboFareDv.set_value("01");								// 운임구분

        	this.div00.form.cboItem.set_value("01");								// 품목
        	this.div00.form.edtItemNm.set_value(this.div00.form.cboItem.text);		// 품목내용

        	this.div00.form.chkNoSender.set_value(0);								// 보내는분정보 없음

        	this.div00.form.edtFileName.set_value("");								// 파일명
        	this.div00.form.chkTitleExist.set_value(0);								// 타이틀있음
        	this.div00.form.edtTitleLn.set_value("1");								// 타이틀번호
        	this.div00.form.pgb.set_pos(0);											// 진행률
        }


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


        		// 초기화
        		case "btnInit" :

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
        this.fnSearch = function()
        {
        	// 조회조건 필수입력 체크
        	var edtCustIdValue = this.div00.form.edtCustId.value;
        	var edtCustNmValue = this.div00.form.edtCustNm.value;
        	var edtSendCustNoValue = this.div00.form.edtSendCustNo.value;
        	var edtSendCustNmValue = this.div00.form.edtSendCustNm.value;
        	var calRcptYmdValue = this.div00.form.calRcptYmd.value;

        	if(this.gfnIsNull(edtCustIdValue)){
        		this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustId.setFocus();});
        		return false;
        	}

        	if(this.gfnIsNull(edtCustNmValue)){
        		this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustNm.setFocus();});
        		return false;
        	}

        	if(this.gfnIsNull(edtSendCustNoValue)){
        		this.gfnAlert("발송고객을 입력해주세요.","", function(){ this.div00.form.edtSendCustNo.setFocus();});
        		return false;
        	}

        	if(this.gfnIsNull(edtSendCustNmValue)){
        		this.gfnAlert("발송고객을 입력해주세요.","", function(){ this.div00.form.edtSendCustNm.setFocus();});
        		return false;
        	}

        	if(this.gfnIsNull(calRcptYmdValue)){
        		this.gfnAlert("접수일자를 입력해주세요.","", function(){ this.div00.form.calRcptYmd.setFocus();});
        		return false;
        	}


        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "CUST_ID", this.div00.form.edtCustId.value);
        	this.dsSearch.setColumn(0, "RCPT_YMD", this.div00.form.calRcptYmd.value);
        	this.dsSearch.setColumn(0, "CUST_MGMT_DLCM_CD", this.edtCustMgmtDlcmCd.value);


        	// 조회
        	this.gfnTransaction("getFileRsrvList");

        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function()
        {

        }


        /***********************************************************************************************
         * @function	: fnFileImport
         * @description	: 파일 임포트
         * @return N/A
        /***********************************************************************************************/
        this.fnFileImport = function()
        {
        	// 임포트전 형식(고객레이아웃)이 지정되지 않은경우 에러처리.
        	var edtXlsFormNmValue = this.div00.form.edtXlsFormNm.value;

        	if( this.gfnIsNull(edtXlsFormNmValue) ){
        		this.gfnAlert("형식(고객레이아웃)을 먼저 선택해주세요.");

        		return;
        	}

        	// 항목 타이틀 라인넘버
        	var edtTitleLnValue = "A"+(nexacro.toNumber(this.div00.form.edtTitleLn.value)+1).toString();

        	this.div00.form.pgb.set_pos(0);

        	this.dsExcelUpload.copyData(this.dsExcelUpload2);

        	this.gfnExcelImportCustom("dsExcelUpload", "sheet1", edtTitleLnValue, "fnImportCallback", "importExcel", this);
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
        	//trace("[fnCallback()] svcID["+svcID+"] errorCode["+errorCode+"] errorMsg["+errorMsg+"]");

        	if(errorCode < 0) {
        		this.alert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 박스타입 필터링
        			this.dsBoxTy.filter("CD == '02' || CD == '03'");

        			// 운임구분 필터링
        			this.dsFareDv.filter("CD == '01' || CD == '02'");

        		break;

        		// 기업고객 조회처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.div00.form.edtCustId.set_value(this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.div00.form.edtCustNm.set_value(this.dsCustInfo.getColumn(0,"CUST_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.div00.form.btnCustSearch.click();
        			}

        		break;

        		// 발송고객 조회처리.
        		case "getSendCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsSendCustInfo.getRowCount() == 1){

        				this.div00.form.edtBranCd.set_value(this.dsSendCustInfo.getColumn(0,"CNTR_BRAN_CD"));
        				this.div00.form.edtBranNm.set_value(this.dsSendCustInfo.getColumn(0,"CNTR_BRAN_NM"));
        				this.div00.form.edtSendCustNo.set_value(this.dsSendCustInfo.getColumn(0,"SEND_CUST_NO"));
        				this.div00.form.edtSendCustNm.set_value(this.dsSendCustInfo.getColumn(0,"SEND_CUST_NM"));
        				this.edtCustMgmtDlcmCd.set_value(this.dsSendCustInfo.getColumn(0,"CUST_MGMT_DLCM_CD"));
        				this.div00.form.edtPickupBranCd.set_value(this.dsSendCustInfo.getColumn(0,"PICKUP_BRAN_CD"));
        				this.div00.form.edtPickupBranNm.set_value(this.dsSendCustInfo.getColumn(0,"PICKUP_BRAN_NM"));

        				this.div00.form.cboTelNo1.set_value(this.dsSendCustInfo.getColumn(0,"TEL_NO_1"));
        				this.div00.form.edtTelNo2.set_value(this.dsSendCustInfo.getColumn(0,"TEL_NO_2"));
        				this.div00.form.edtTelNo3.set_value(this.dsSendCustInfo.getColumn(0,"TEL_NO_3"));

        				this.div00.form.mskZipNo.set_value(this.dsSendCustInfo.getColumn(0,"ZIP_NO"));
        				this.div00.form.edtAddr.set_value(this.dsSendCustInfo.getColumn(0,"ADDR"));
        				this.div00.form.edtDetailAddr.set_value(this.dsSendCustInfo.getColumn(0,"DETAIL_ADDR"));



        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.div00.form.btnSendCustSearch.click();
        			}

        		break;



        		case "saveDlvyRsrvList":
        			this.fnSearch();
        			this.div00.form.pgb.set_pos(100);
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
        this.fnPopupCallback = function(popupId, dsObj, dsds)
        {
        	//trace("[fnPopupCallback()] sPopupId["+popupId+"] rtnMsg["+JSON.stringify(dsObj)+"]");

        	switch(popupId) {

        		case "searchPopEntrpCust1" :
        			if(dsObj.rowcount > 0){
        				this.div00.form.edtCustId.set_value(dsObj.getColumn(0,"CUST_ID"));	// 고객번호
        				this.div00.form.edtCustNm.set_value(dsObj.getColumn(0,"CUST_NM"));	// 고객명

        				//this.fnSearch();
        			}
        		break;


        		case "searchPopSendCust1" :
        			if(dsObj.rowcount > 0){

        				this.div00.form.edtSendCustNo.set_value(dsObj.getColumn(0,"SEND_CUST_NO"));	// 고객번호
        				this.div00.form.edtSendCustNm.set_value(dsObj.getColumn(0,"SEND_CUST_NM"));	// 고객명

        				//this.fnSearch();
        			}
        		break;


        		case "searchPopXlsCustLayout" :

        			this.dsExcelUpload.clearData();
        			this.dsExcelUpload.copyData(dsObj);
        			this.dsExcelUpload2.copyData(dsObj);


        		break;


        		case "searchPopErr":
        			this.fnSearch();
        		break;


        		default :
        		break;
        	}
        };


        /***********************************************************************************************
         * @function		: fnImportCallback
         * @description		: 파일업로드 콜백
         * @param 			: sImportId	- String
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnImportCallback = function (sImportId)
        {
        	// 업로드된 데이터 가공
        	this.fnManuFacturingExcelUploadData();
        }


        /***********************************************************************************************
         * @function		: fnManuFacturingExcelUploadData
         * @description		: 업로드된 데이터 가공
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnManuFacturingExcelUploadData = function()
        {
        	//this.grdExcelData.binddataset(this.dsExcelUpload);
        	this.grdExcelData.createFormat();

        	/* 엑셀 데이터 셋팅후 엑셀에 없는 관리항목 추가. ******************************************************/
        	for(var i=0; i<this.dsMgmtColumn.rowcount; i++){
        		var colId = this.dsMgmtColumn.getColumn(i, "COL_ID");

        		if(colId == "SENDR_ZIP_NO" || colId == "RCVR_ZIP_NO" || colId == "ORDRR_ZIP_NO") continue;

        		// 엑셀 데이터에 있는 항목인 경우 추가 안함.
        		if( this.dsExcelUpload.getColIndex(colId) != -1) continue;

        		this.dsExcelUpload.addColumn(colId, "STRING");
        	}
        	/************************************************************************************************************/


        	/* 관리항목이 아닌 필수 컬럼 & 전화번호 컬럼 생성******************************************************/
        	this.dsExcelUpload.addColumn("RCPT_ERR_YN", "STRING");					// 접수에러여부
        	this.dsExcelUpload.addColumn("RCPT_ERR_MSG", "STRING");					// 접수에러메세지
        	this.dsExcelUpload.addColumn("CUST_ID", "STRING");
        	this.dsExcelUpload.addColumn("RCPT_YMD", "STRING");
        	this.dsExcelUpload.addColumn("CUST_USE_NO", "STRING");
        	this.dsExcelUpload.addColumn("RCPT_DV", "STRING");
        	this.dsExcelUpload.addColumn("WORK_DV_CD", "STRING");
        	this.dsExcelUpload.addColumn("REQ_DV_CD", "STRING");
        	this.dsExcelUpload.addColumn("MPCK_KEY", "STRING");
        	this.dsExcelUpload.addColumn("MPCK_SEQ", "STRING");
        	this.dsExcelUpload.addColumn("CUST_MGMT_DLCM_CD", "STRING");

        	this.dsExcelUpload.addColumn("SENDR_TEL_NO_1", "STRING");
        	this.dsExcelUpload.addColumn("SENDR_TEL_NO_2", "STRING");
        	this.dsExcelUpload.addColumn("SENDR_TEL_NO_3", "STRING");
        	this.dsExcelUpload.addColumn("SENDR_CELL_NO_1", "STRING");
        	this.dsExcelUpload.addColumn("SENDR_CELL_NO_2", "STRING");
        	this.dsExcelUpload.addColumn("SENDR_CELL_NO_3", "STRING");
        	this.dsExcelUpload.addColumn("RCVR_TEL_NO_1", "STRING");
        	this.dsExcelUpload.addColumn("RCVR_TEL_NO_2", "STRING");
        	this.dsExcelUpload.addColumn("RCVR_TEL_NO_3", "STRING");
        	this.dsExcelUpload.addColumn("RCVR_CELL_NO_1", "STRING");
        	this.dsExcelUpload.addColumn("RCVR_CELL_NO_2", "STRING");
        	this.dsExcelUpload.addColumn("RCVR_CELL_NO_3", "STRING");

        	this.dsExcelUpload.addColumn("ORDRR_TEL_NO_1", "STRING");
        	this.dsExcelUpload.addColumn("ORDRR_TEL_NO_2", "STRING");
        	this.dsExcelUpload.addColumn("ORDRR_TEL_NO_3", "STRING");
        	this.dsExcelUpload.addColumn("ORDRR_CELL_NO_1", "STRING");
        	this.dsExcelUpload.addColumn("ORDRR_CELL_NO_2", "STRING");
        	this.dsExcelUpload.addColumn("ORDRR_CELL_NO_3", "STRING");
        	/************************************************************************************************************/


        	var arrTelNumber;
        	var arrCellNumber;

        	// 데이터 셋팅
        	var custIdValue = this.div00.form.edtCustId.value;
        	var sendCustNoValue = this.div00.form.edtSendCustNo.value;
        	var sendCustNmValue = this.div00.form.edtSendCustNm.value;
        	var calRcptYmdValue = this.div00.form.calRcptYmd.value;
        	var rcptDvValue = this.edtRcptDv.value;
        	var custMgmtDlcmCdValue = this.edtCustMgmtDlcmCd.value;

        	var pickupExptYmdValue = this.div00.form.calPickupExptYmd.value;
        	var checkPickupExptYmd = this.div00.form.chkPickupExptYmd.value;
        	var telNo = this.gfnNvl(this.div00.form.cboTelNo1.value,'')+this.gfnNvl(this.div00.form.edtTelNo2.value,'')+this.gfnNvl(this.div00.form.edtTelNo3.value,'');
        	var cellNo = this.gfnNvl(this.div00.form.cboCellNo1.value,'')+this.gfnNvl(this.div00.form.edtCellNo2.value,'')+this.gfnNvl(this.div00.form.edtCellNo3.value,'');
        	var zipNo = this.div00.form.mskZipNo.value;
        	var addr = this.div00.form.edtAddr.value;
        	var detailAddr = this.div00.form.edtDetailAddr.value;

        	var fareDv = this.div00.form.cboFareDv.value;
        	var boxTy = this.div00.form.cboBoxTy.value;
        	var item = this.div00.form.cboItem.value;
        	var itemNm = this.div00.form.edtItemNm.value;

        	var ecptDv = this.edtRcptDv.value;

        	for(var i=0; i<this.dsExcelUpload.rowcount; i++){

        		// 필수데이터 처리.
        		this.dsExcelUpload.setColumn(i, "CUST_ID", custIdValue);							// 고객ID
        		this.dsExcelUpload.setColumn(i, "RCPT_YMD", calRcptYmdValue);						// 접수일자
        		//this.dsExcelUpload.setColumn(i, "CUST_USE_NO", "");								// 고객사용번호는 엑셀에서 받음.
        		this.dsExcelUpload.setColumn(i, "RCPT_DV", rcptDvValue);							// 접수구분
        		this.dsExcelUpload.setColumn(i, "WORK_DV_CD", "01");								//
        		this.dsExcelUpload.setColumn(i, "REQ_DV_CD", "01");
        		this.dsExcelUpload.setColumn(i, "CUST_MGMT_DLCM_CD", custMgmtDlcmCdValue);			// 고객관리거래처코드


        		// 공통데이터 처리.
        		if( checkPickupExptYmd  == "true" ){ // 일자적용 체크됬을경우 화면의 집화예정일자 적용.
        			this.dsExcelUpload.setColumn(i, "PICKUP_EXPCT_YMD", pickupExptYmdValue);			// 집화예정일자
        		}
        		this.dsExcelUpload.setColumn(i, "FRT_DV_CD", fareDv);								// 운임구분
        		this.dsExcelUpload.setColumn(i, "BOX_TYPE_CD", boxTy);								// 박스타입
        		this.dsExcelUpload.setColumn(i, "GDS_CD", item);									// 품목코드
        		this.dsExcelUpload.setColumn(i, "GDS_NM", itemNm);									// 품목명


        		// 예약구분이 일반(01)인경우 => 송화인정보셋팅
        		if(ecptDv == "01"){
        			this.dsExcelUpload.setColumn(i, "SENDR_TEL_NO", telNo);					// 송화인 전화번호
        			this.dsExcelUpload.setColumn(i, "SENDR_CELL_NO", cellNo);				// 송화인 기타전화번호
        			this.dsExcelUpload.setColumn(i, "SENDR_ZIP_NO", zipNo);					// 송화인 우편번호
        			this.dsExcelUpload.setColumn(i, "SENDR_ADDR", addr);					// 송화인 주소
        			this.dsExcelUpload.setColumn(i, "SENDR_DETAIL_ADDR", detailAddr);		// 송화인 상세주소
        			this.dsExcelUpload.setColumn(i, "SENDR_NM", sendCustNmValue);			// 송화인 명
        		}
        		// 예약구분이 반품(02)인경우 => 수화인정보셋팅
        		else{
        			this.dsExcelUpload.setColumn(i, "RCVR_TEL_NO", telNo);					// 수화인 전화번호
        			this.dsExcelUpload.setColumn(i, "RCVR_CELL_NO", cellNo);				// 수화인 기타전화번호
        			this.dsExcelUpload.setColumn(i, "RCVR_ZIP_NO", zipNo);					// 수화인 우편번호
        			this.dsExcelUpload.setColumn(i, "RCVR_ADDR", addr);						// 수화인 주소
        			this.dsExcelUpload.setColumn(i, "RCVR_DETAIL_ADDR", detailAddr);		// 수화인 상세주소
        			this.dsExcelUpload.setColumn(i, "RCVR_NM", sendCustNmValue);			// 수화인 명
        		}

        		// 우편번호 처리. (특수문자 제거)
        		this.dsExcelUpload.setColumn(i, "SENDR_ZIP_NO", this.gfnRemoveSpecialChar(this.dsExcelUpload.getColumn(i, "SENDR_ZIP_NO")));
        		this.dsExcelUpload.setColumn(i, "RCVR_ZIP_NO", this.gfnRemoveSpecialChar(this.dsExcelUpload.getColumn(i, "RCVR_ZIP_NO")));
        		this.dsExcelUpload.setColumn(i, "ORDRR_ZIP_NO", this.gfnRemoveSpecialChar(this.dsExcelUpload.getColumn(i, "ORDRR_ZIP_NO")));


        		// 송화인 연락처 처리.
        		arrTelNumber = this.fnRefineTelCellNumber(this.dsExcelUpload.getColumn(i, "SENDR_TEL_NO"));
        		arrCellNumber = this.fnRefineTelCellNumber(this.dsExcelUpload.getColumn(i, "SENDR_CELL_NO"));

        		this.dsExcelUpload.setColumn(i, "SENDR_TEL_NO_1", arrTelNumber[0]);
        		this.dsExcelUpload.setColumn(i, "SENDR_TEL_NO_2", arrTelNumber[1]);
        		this.dsExcelUpload.setColumn(i, "SENDR_TEL_NO_3", arrTelNumber[2]);
        		this.dsExcelUpload.setColumn(i, "SENDR_CELL_NO_1", arrCellNumber[0]);
        		this.dsExcelUpload.setColumn(i, "SENDR_CELL_NO_2", arrCellNumber[1]);
        		this.dsExcelUpload.setColumn(i, "SENDR_CELL_NO_3", arrCellNumber[2]);

        		// 수화인 연락처 처리.
        		arrTelNumber = this.fnRefineTelCellNumber(this.dsExcelUpload.getColumn(i, "RCVR_TEL_NO"));
        		arrCellNumber = this.fnRefineTelCellNumber(this.dsExcelUpload.getColumn(i, "RCVR_CELL_NO"));

        		this.dsExcelUpload.setColumn(i, "RCVR_TEL_NO_1", arrTelNumber[0]);
        		this.dsExcelUpload.setColumn(i, "RCVR_TEL_NO_2", arrTelNumber[1]);
        		this.dsExcelUpload.setColumn(i, "RCVR_TEL_NO_3", arrTelNumber[2]);
        		this.dsExcelUpload.setColumn(i, "RCVR_CELL_NO_1", arrCellNumber[0]);
        		this.dsExcelUpload.setColumn(i, "RCVR_CELL_NO_2", arrCellNumber[1]);
        		this.dsExcelUpload.setColumn(i, "RCVR_CELL_NO_3", arrCellNumber[2]);


        		// 주문자 연락처 처리.
        		arrTelNumber = this.fnRefineTelCellNumber(this.dsExcelUpload.getColumn(i, "ORDRR_TEL_NO"));
        		arrCellNumber = this.fnRefineTelCellNumber(this.dsExcelUpload.getColumn(i, "ORDRR_CELL_NO"));

        		this.dsExcelUpload.setColumn(i, "ORDRR_TEL_NO_1", arrTelNumber[0]);
        		this.dsExcelUpload.setColumn(i, "ORDRR_TEL_NO_2", arrTelNumber[1]);
        		this.dsExcelUpload.setColumn(i, "ORDRR_TEL_NO_3", arrTelNumber[2]);
        		this.dsExcelUpload.setColumn(i, "ORDRR_CELL_NO_1", arrCellNumber[0]);
        		this.dsExcelUpload.setColumn(i, "ORDRR_CELL_NO_2", arrCellNumber[1]);
        		this.dsExcelUpload.setColumn(i, "ORDRR_CELL_NO_3", arrCellNumber[2]);

        	}


        	// 저장처리
        	this.gfnTransaction("saveDlvyRsrvList");
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
        		case "btnCustSearch" :	this.fnOpenPopEntrpCust(); break;
        		case "btnSendCustSearch" :	this.fnOpenPopSendCust(); break;
        		case "btnFindFile" : this.fnFileImport(); break;
        		case "btnXlsCustLayout" : this.fnOpenPopXlsCustLayout(); break;
        		case "btnOpenPopErrUpdate" : this.fnOpenPopErrUpdate(); break;


        		default 		: 	break;
        	}
        };


        /***********************************************************************************************
        * USER FUNCTION
        ***********************************************************************************************/
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
        	var pSendCustNo = '';

        	popupId = 'searchPopEntrpCust1';

        	pCustIdValue = this.div00.form.edtCustId.value;
        	pCustNmValue = this.div00.form.edtCustNm.value;
        	pSendCustNo = this.div00.form.edtSendCustNo.value;


        	// 로그인계정이 기업고객 또는 발송고객인경우
        	if(this.objApp.gv_blngDv == "02" || this.objApp.gv_blngDv == "03"){
        		var edtSendCustNoValue = this.div00.form.edtSendCustNo.value;
        		var edtSendCustNmValue = this.div00.form.edtSendCustNm.value;

        		if(this.gfnIsNull(edtSendCustNoValue)){
        			this.gfnAlert("발송고객을 입력해주세요.","", function(){ this.div00.form.edtSendCustNo.setFocus();});
        			return;
        		}

        		if(this.gfnIsNull(edtSendCustNmValue)){
        			this.gfnAlert("발송고객을 입력해주세요.","", function(){ this.div00.form.edtSendCustNm.setFocus();});
        			return;
        		}

        	}

        	// 팝업 호출
        	var oArg = {
        				  pCustId		: pCustIdValue									// 고객ID
        				, pCustNm		: pCustNmValue									// 고객명
        				, pSendCustNo	: pSendCustNo									// 발송고객
        				, pSeqNo	 	: ""											//
        				, pId			: ""											//
        				, pSelectAll	: "Y"											// 권한만조회
        				, pMultiGb		: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb : "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P021.xfdl", oArg, sPopupCallBack, oOption);
        }


        /***********************************************************************************************
         * @function	: fnOpenPopSendCust
         * @description	: 발송고객 조회 팝업을 호출한다.
         * @param		:
         * @return N/A
        /***********************************************************************************************/
        this.fnOpenPopSendCust = function()
        {
        	// 파라미터 설정
        	var popupId = 'searchPopSendCust1';	//팝업ID
        	var pCustIdValue = this.div00.form.edtCustId.value;
        	var pCustNmValue = this.div00.form.edtCustNm.value;
        	var pSendCustNoValue = this.div00.form.edtSendCustNo.value;
        	var pSendCustNmValue = this.div00.form.edtSendCustNm.value;

        	if(this.gfnIsNull(pCustIdValue)){
        		this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustId.setFocus();});
        		return;
        	}

        	if(this.gfnIsNull(pCustNmValue)){
        		this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustNm.setFocus();});
        		return;
        	}


        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pSendCustNo		: pSendCustNoValue								// 발송고객번호
        				, pSendCustNm		: pSendCustNmValue								// 발송고객명

        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"baim::BAIM_BAIM_P060.xfdl", oArg, sPopupCallBack, oOption);
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
        			case	'edtCustId' : this.fnSearchCustInfo(this.div00.form.edtCustId.value, this.div00.form.edtCustNm.value, this.div00.form.edtSendCustNo.value); break;
        			case	'edtCustNm' : this.fnSearchCustInfo(this.div00.form.edtCustId.value, this.div00.form.edtCustNm.value, this.div00.form.edtSendCustNo.value); break;
        			case	'edtSendCustNo' : this.fnSearchSendCustInfo(this.div00.form.edtCustId.value, this.div00.form.edtSendCustNo.value, this.div00.form.edtSendCustNm.value); break;
        			case	'edtSendCustNm' : this.fnSearchSendCustInfo(this.div00.form.edtCustId.value, this.div00.form.edtSendCustNo.value, this.div00.form.edtSendCustNm.value); break;
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
        		case	'edtCustId' : this.div00.form.edtCustNm.set_value(''); break;
        		case	'edtCustNm' : this.div00.form.edtCustId.set_value(''); break;
        		case	'edtSendCustNo' : this.div00.form.edtSendCustNm.set_value(''); break;
        		case	'edtSendCustNm' : this.div00.form.edtSendCustNo.set_value(''); break;

        	}
        };


        /***********************************************************************************************
         * @function		: fnOpenPopXlsCustLayout
         * @description		: 고객레이아웃 팝업 호출
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopXlsCustLayout = function()
        {
        	// 팝업 호출전 체크
        	var edtBranCdValue = this.div00.form.edtBranCd.value;
        	var edtBranNmValue = this.div00.form.edtBranNm.value;
        	var edtCustIdValue = this.div00.form.edtCustId.value;
        	var edtCustNmValue = this.div00.form.edtCustNm.value;
        	var edtSendCustNoValue = this.div00.form.edtSendCustNo.value;
        	var edtSendCustNmValue = this.div00.form.edtSendCustNm.value;

        	if( this.gfnIsNull(edtBranCdValue) ){
        		this.gfnAlert("점소를 입력해주세요.","", function(){ this.div00.form.edtBranCd.setFocus(); });
        		return;
        	}
        	if( this.gfnIsNull(edtBranNmValue) ){
        		this.gfnAlert("점소을 입력해주세요.","", function(){ this.div00.form.edtBranNm.setFocus(); });
        		return;
        	}
        	if( this.gfnIsNull(edtCustIdValue) ){
        		this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustId.setFocus(); });
        		return;
        	}
        	if( this.gfnIsNull(edtCustNmValue) ){
        		this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustNm.setFocus(); });
        		return;
        	}
        	if( this.gfnIsNull(edtSendCustNoValue) ){
        		this.gfnAlert("발송고객을 입력해주세요.","", function(){ this.div00.form.edtSendCustNo.setFocus(); });
        		return;
        	}
        	if( this.gfnIsNull(edtSendCustNmValue) ){
        		this.gfnAlert("발송고객을 입력해주세요.","", function(){ this.div00.form.edtSendCustNm.setFocus(); });
        		return;
        	}


        	// 양식명 초기화
        	this.div00.form.edtRcptDvNm.set_value("");
        	this.div00.form.edtXlsFormNm.set_value("");


        	// 파라미터 설정
        	var popupId = 'searchPopXlsCustLayout';	//팝업ID
        	var pCustIdValue = this.div00.form.edtCustId.value;
        	var pCustNmValue = this.div00.form.edtCustNm.value;
        	var pSendCustNoValue = this.div00.form.edtSendCustNo.value;
        	var pSendCustNmValue = this.div00.form.edtSendCustNm.value;
        	var pCustMgmtDlcmCdValue = this.edtCustMgmtDlcmCd.value;


        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pSendCustNo		: pSendCustNoValue								// 발송고객번호
        				, pSendCustNm		: pSendCustNmValue								// 발송고객명
        				, pCustMgmtDlcmCd   : pCustMgmtDlcmCdValue							// 고객관리번호
        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"rcpt::RCPT_DLVY_P010.xfdl", oArg, sPopupCallBack, oOption);

        }

        /***********************************************************************************************
         * @function		: fnOpenPopErrUpdate
         * @description		: 오류수정 팝업 호출
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnOpenPopErrUpdate = function()
        {
        	// 팝업 호출전 체크
        	var errCnt = this.dsList.getColumn(this.dsList.rowposition, "ERR_CNT");

        	if( this.gfnIsNull(errCnt) || errCnt == 0){
        		this.gfnAlert("수정할 오류가 없습니다.");
        		return;
        	}


        	// 파라미터 설정
        	var popupId = 'searchPopErr';	//팝업ID
        	var pCustIdValue = this.div00.form.edtCustId.value;
        	var pCustNmValue = this.div00.form.edtCustNm.value;
        	var pSendCustNoValue = this.div00.form.edtSendCustNo.value;
        	var pSendCustNmValue = this.div00.form.edtSendCustNm.value;
        	var pCustMgmtDlcmCdValue = this.edtCustMgmtDlcmCd.value;
        	var pRcptYmdValue = this.div00.form.calRcptYmd.value;


        	// 팝업 호출
        	var oArg = {
        				  pCustId			: pCustIdValue									// 기업고객번호
        				, pCustNm			: pCustNmValue									// 기업고객명
        				, pSendCustNo		: pSendCustNoValue								// 발송고객번호
        				, pSendCustNm		: pSendCustNmValue								// 발송고객명
        				, pCustMgmtDlcmCd   : pCustMgmtDlcmCdValue							// 고객관리번호
        				, pRcptYmd		    : pRcptYmdValue									// 접수일자
        				, pSeqNo	 		: ""											//
        				, pId				: ""											//
        				, pSelectAll		: "Y"											// 권한만조회
        				, pMultiGb			: "0"											// 1이면 멀티선택가능
        				, pAutosearchGb 	: "Y"											// 자동 재조회 여부
        				};
        	var oOption = {};															// top, left를 지정하지 않으면 가운데정렬 //"top:20,left:370"
        	var sPopupCallBack = "fnPopupCallback";										// 콜백함수
        	this.gfnOpenPopup(popupId,"rcpt::RCPT_DLVY_P020.xfdl", oArg, sPopupCallBack, oOption);

        }


        /***********************************************************************************************
         * @function	: fnSetEntrpModule
         * @description	: 기업모듈셋팅
         * @return N/A
        /***********************************************************************************************/
        this.fnSetEntrpModule = function()
        {
        	// 점소고객(01)인경우
        	if(this.objApp.gv_blngDv == "01"){

        	}
        	// 기업고객(02)인경우
        	else if(this.objApp.gv_blngDv == "02"){

        		// 기업고객 셋팅
        		this.div00.form.edtCustId.set_value(this.objApp.gv_custId);

        		// 발송고객 셋팅
        		this.div00.form.edtSendCustNo.set_value(this.objApp.gv_custId);
        		this.edtCustMgmtDlcmCd.set_value(this.objApp.gv_custId);		// 고객관리번호

        		if( !this.gfnIsNull(this.objApp.gv_custId) ) this.fnSearchCustInfo(this.objApp.gv_custId, "", this.objApp.gv_custId);
        		if( !this.gfnIsNull(this.objApp.gv_custId) ) this.fnSearchSendCustInfo(this.objApp.gv_custId, this.objApp.gv_custId, "", this.objApp.gv_custId);

        		// 컴포넌트 속성 셋팅
        		this.div00.form.edtSendCustNo.set_enable(true);
        		this.div00.form.edtSendCustNo.set_enable(true);
        		this.div00.form.btnSendCustSearch.set_enable(true);

        	}
        	// 발송고객(03)인경우
        	else if(this.objApp.gv_blngDv == "03"){


        		// 발송고객 셋팅
        		this.div00.form.edtSendCustNo.set_value(this.objApp.gv_custId);


        		if( !this.gfnIsNull(this.objApp.gv_custId) ) this.fnSearchSendCustInfo("", this.objApp.gv_custId);
        		if( !this.gfnIsNull(this.objApp.gv_custId) ) this.fnSearchCustInfo("", "", this.objApp.gv_custId);


        		// 컴포넌트 속성 셋팅
        		this.div00.form.edtSendCustNo.set_enable(false);
        		this.div00.form.edtSendCustNm.set_enable(false);
        		this.div00.form.btnSendCustSearch.set_enable(false);
        	}
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


        /***********************************************************************************************
         * @function		: fnSearchSendCustInfo
         * @description		: 발송고객 정보 조회
         * @param 			: custId	- String (기업고객ID)
         * @param 			: sendCustNo	- String (발송고객ID)
         * @param 			: sendCustNm	- String (발송고객명)
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSearchSendCustInfo = function(custId, sendCustNo, sendCustNm, custMgmtDlcmCd)
        {

        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "CUST_ID", custId);
        	this.dsSearch.setColumn(0, "SEND_CUST_NO", sendCustNo);
        	this.dsSearch.setColumn(0, "SEND_CUST_NM", sendCustNm);


        	this.gfnTransaction("getSendCustInfo");
        }


        /***********************************************************************************************
         * @function	: fnRefineTelCellNumber
         * @description	: 파라미터로 넘어온 숫자를 번호체계에 맞게 하이픈(-)을 붙여 리턴한다.
         * @param		: pTelCellNumber	- String
         * @return Array
        /***********************************************************************************************/
        this.fnRefineTelCellNumber = function(pTelCellNumber)
        {
        	var arrResult = [];
        	var frontNumber;

        	// 빈칸인경우 처리.
        	if(this.gfnIsNull(pTelCellNumber)){
        		arrResult[0]='';
        		arrResult[1]='';
        		arrResult[2]='';

        		return arrResult;
        	}


        	// 입력된 하이픈(-) 제거
        	pTelCellNumber = nexacro.replaceAll(pTelCellNumber, '-', '');

        	// 앞자리 2자리 체크. (지역번호 : 02)
        	frontNumber = pTelCellNumber.substr(0, 2);

        	// 지역번호가 02 인경우. => 자릿수 2, 4, 나머지로 자르기
        	if(this.dsTelCellFrontNum.findRow("CD", frontNumber) != -1){

        		arrResult[0] = pTelCellNumber.substr(0, frontNumber.length);
        		arrResult[1] = pTelCellNumber.substr(frontNumber.length, 4);
        		arrResult[2] = pTelCellNumber.substr(frontNumber.length+4);

        	}

        	else{

        		// 앞자리 3자리 체크.
        		frontNumber = pTelCellNumber.substr(0, 3);

        		// 앞자리가 기초코드에 등록된 경우.
        		if(this.dsTelCellFrontNum.findRow("CD", frontNumber) != -1){

        			arrResult[0] = pTelCellNumber.substr(0, frontNumber.length);

        			// 앞자리를 자르고 남은 문자의 길이가 8보다 작은경우. => 3, 나머지로 자르기
        			if(pTelCellNumber.substr(frontNumber.length).length < 8){
        				arrResult[1] = pTelCellNumber.substr(frontNumber.length, 3);
        				arrResult[2] = pTelCellNumber.substr(frontNumber.length+3);
        			}
        			// 앞자리를 자르고 남은 문자의 길이가 8보다 크거나 같은경우. =>4, 나머지로 자르기
        			else{
        				arrResult[1] = pTelCellNumber.substr(frontNumber.length, 4);
        				arrResult[2] = pTelCellNumber.substr(frontNumber.length+4);
        			}



        		}
        		// 앞자리가 기초코드에 등록되지 않은경우. => 4자리로 자르기
        		else{

        			arrResult[0] = pTelCellNumber.substr(0, 4);
        			arrResult[1] = pTelCellNumber.substr(4, 4);
        			arrResult[2] = pTelCellNumber.substr(8);

        		}

        	}

        	return arrResult;
        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.div00_cboItem_onitemchanged = function(obj,e)
        {
        	if(this.gfnIsNull(e.postvalue)){
        		this.div00.form.edtItemNm.set_value('');
        	}
        	else{
        		this.div00.form.edtItemNm.set_value(e.posttext);
        	}
        };


        this.dsFileUrl_oncolumnchanged = function(obj,e)
        {
        	var fileUrl = this.dsFileUrl.getColumn(0, "URL");


        	this.div00.form.edtFileName.set_value(fileUrl.split("/")[2]);
        };


        this.div00_chkTitleExist_onchanged = function(obj,e)
        {
        	if(e.postvalue == "true"){
        		this.div00.form.edtTitleLn.set_enable(true);
        	}else{
        		this.div00.form.edtTitleLn.set_value(1);
        		this.div00.form.edtTitleLn.set_enable(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.RCPT_DLVY_0002_ontimer,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("oncellclick",this.grd_Main_oncellclick,this);
            this.btnInit.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.div00.form.edtBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtBranCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.btnBranSearch.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.edtBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtBranNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.chkPickupExptYmd.addEventHandler("onchanged",this.chkSelectLot_onchanged,this);
            this.div00.form.cboItem.addEventHandler("onitemchanged",this.div00_cboItem_onitemchanged,this);
            this.div00.form.mskZipNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.mskZipNo.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.btnSampleDownload00.addEventHandler("onclick",this.fn_PopOpen,this);
            this.div00.form.edtCustId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtCustId.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.btnCustSearch.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.edtCustNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtCustNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.edtSendCustNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtSendCustNo.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.btnSendCustSearch.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.edtSendCustNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtSendCustNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.chkNoSender.addEventHandler("onchanged",this.chkSelectLot_onchanged,this);
            this.div00.form.edtPickupBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtPickupBranCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.edtPickupBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtPickupBranNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.chkSelectLot00_00_00_01_00.addEventHandler("onchanged",this.chkSelectLot_onchanged,this);
            this.div00.form.btnXlsCustLayout.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.chkTitleExist.addEventHandler("onchanged",this.div00_chkTitleExist_onchanged,this);
            this.div00.form.btnFindFile.addEventHandler("onclick",this.fnOpenPop,this);
            this.edtCustMgmtDlcmCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustMgmtDlcmCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.grdExcelData.addEventHandler("oncellclick",this.grdShprList_oncellclick,this);
            this.edtRcptDv.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtRcptDv.addEventHandler("oninput",this.fnEditOnInput,this);
            this.edtFileUrl.addEventHandler("onchanged",this.edtFileUrl_onchanged,this);
            this.edtFileUrl.addEventHandler("canchange",this.edtFileUrl_canchange,this);
            this.btnOpenPopErrUpdate.addEventHandler("onclick",this.fnOpenPop,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsFileUrl.addEventHandler("oncolumnchanged",this.dsFileUrl_oncolumnchanged,this);
        };

        this.loadIncludeScript("RCPT_DLVY_0002.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
