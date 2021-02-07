(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("RCPT_DLVY_0001");
            this.set_titletext("기업고객 건별접수");
            if (Form == this.constructor)
            {
                this._setFormPosition(1566,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsService", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"SVC_ID\" size=\"256\" type=\"STRING\"/><Column id=\"IN_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"OUT_DATASET_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"QUERY_LIST\" size=\"256\" type=\"STRING\"/><Column id=\"CALLBACK\" size=\"256\" type=\"STRING\"/><Column id=\"SYNC_YN\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_BEANNAME\" size=\"256\" type=\"STRING\"/><Column id=\"SERVICE_METHOD\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"SVC_ID\">commonCode</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">N</Col><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getCommonCode</Col><Col id=\"OUT_DATASET_LIST\">dsCalCpDv=ds1 dsRsvtDv=ds2 dsItem=ds3 dsBoxTy=ds4 dsFareDv=ds5 dsCalCpDv2=ds6</Col><Col id=\"QUERY_LIST\">q1=RV004 q2=RV002 q3=MS042 q4=CS007 q5=CS006 q6=RV004</Col></Row><Row><Col id=\"SVC_ID\">getCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">N</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimEntrpCustMgmtService.getEntrpCustInfoListBySendCust</Col></Row><Row><Col id=\"SVC_ID\">getSendCustInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">N</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsSendCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimSendCustMgmtService.getSendCustInfoList</Col></Row><Row><Col id=\"SVC_ID\">getSenderInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsSendCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimSendCustMgmtService.getSendCustInfoList</Col></Row><Row><Col id=\"SVC_ID\">getReceiverInfo</Col><Col id=\"SERVICE_BEANNAME\"/><Col id=\"SERVICE_METHOD\"/><Col id=\"SYNC_YN\">Y</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsSendCustInfo=ds1</Col><Col id=\"QUERY_LIST\">q1=baimSendCustMgmtService.getSendCustInfoList</Col></Row><Row><Col id=\"SVC_ID\">getZipAddrInfoList</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsZipAddrInfo=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getZipAddrInfoList</Col></Row><Row><Col id=\"SVC_ID\">getZipAddrInfoList2</Col><Col id=\"IN_DATASET_LIST\">ds1=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsZipAddrInfo=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"QUERY_LIST\"/><Col id=\"SERVICE_BEANNAME\">baimCommonService</Col><Col id=\"SERVICE_METHOD\">getZipAddrInfoList</Col></Row><Row><Col id=\"SVC_ID\">saveDlvyRsrv</Col><Col id=\"IN_DATASET_LIST\">dsSaveInfo=dsList:U</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">saveDlvyRsrv</Col></Row><Row><Col id=\"SVC_ID\">getDlvyRsrvList</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsList=dsList</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">getDlvyRsrvList</Col></Row><Row><Col id=\"SVC_ID\">getOrinvcInfo</Col><Col id=\"IN_DATASET_LIST\">dsSearch=dsSearch</Col><Col id=\"OUT_DATASET_LIST\">dsOrinvcInfo=dsInfo</Col><Col id=\"CALLBACK\">fnCallback</Col><Col id=\"SYNC_YN\">Y</Col><Col id=\"SERVICE_BEANNAME\">dlvyRsrvService</Col><Col id=\"SERVICE_METHOD\">getOrinvcInfo</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_updatecontrol("true");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCPT_DV\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"FRT_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_USE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_1\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_2\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK_3\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ORINVC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MPCK_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MPCK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FRT\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_DV_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" size=\"256\" type=\"STRING\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_ADDR_DV\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_EXPCT_YMD\" type=\"STRING\" size=\"256\"/><Column id=\"ORINVC_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalCpDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRsvtDv", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChoice", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">보내는분</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">받는분</Col></Row><Row><Col id=\"CD\">03</Col><Col id=\"CD_NM\">취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSendCustInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_CP_DV\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PICKUP_BRAN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_MGMT_DLCM_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsZipAddrInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"ADDR\" size=\"100\" type=\"STRING\"/><Column id=\"ZIP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCalCpDv2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD\" size=\"256\" type=\"STRING\"/><Column id=\"CD_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo><Rows><Row><Col id=\"CD\">01</Col><Col id=\"CD_NM\">선택1</Col></Row><Row><Col id=\"CD\">02</Col><Col id=\"CD_NM\">선택2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOrinvcInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_CUST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"WAYBILL_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"SENDR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_TEL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_CELL_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ZIP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"RCVR_DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"GDS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_TYPE_DV\" type=\"STRING\" size=\"256\"/><Column id=\"BOX_QTY\" type=\"STRING\" size=\"256\"/><Column id=\"CUST_USE_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"BTN_SEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_SAV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DEL\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_XLS\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_PRT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BTN_SEL\">1</Col><Col id=\"BTN_ADD\">1</Col><Col id=\"BTN_SAV\">1</Col><Col id=\"BTN_DEL\">0</Col><Col id=\"BTN_PRT\">0</Col><Col id=\"BTN_XLS\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnSearch",null,"37","68","23","251",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_search");
            obj.getSetter("domainId").set("T0877");
            obj.set_fittocontents("none");
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"37","68","23","178",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_new");
            obj.getSetter("domainId").set("T0645");
            obj.set_fittocontents("none");
            obj.set_taborder("1");
            obj.set_text("신규");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"37","68","23","105",null,null,null,null,null,this);
            obj.set_cssclass("btn_ty01_save");
            obj.getSetter("domainId").set("T0830");
            obj.set_fittocontents("none");
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","9","11","4","13",null,null,null,null,null,null,this);
            obj.set_fittocontents("width");
            obj.set_taborder("3");
            obj.set_text("l");
            obj.set_textAlign("center");
            obj.set_cssclass("top_title_prefix01");
            this.addChild(obj.name, obj);

            obj = new Div("div00","1","39","981","91",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","67","58","252","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","67","29","912","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("13");
            obj.set_text("주관고객");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","67","0","912","30",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_tbody_td01");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01","318","0","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("발송고객");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01_01",null,"0","68","30","250",null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("16");
            obj.set_text("정산처구분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCustId","71","3","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("inp_ty01_req");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnCustSearch","161","3","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_search01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","185","3","130","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_readonly("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNm","503","3","155","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSendCustSearch","479","3","25","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_search01");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtSendCustNo","389","3","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("17");
            obj.set_text("예약구분");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","0","58","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("18");
            obj.set_text("집화예정점소");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","318","29","68","30",null,null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("19");
            obj.set_text("원운송장");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01_01_00",null,"29","68","30","370",null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("22");
            obj.set_text("집화요청일자");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoCalCpDv","742","4","233","20",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("false");
            obj.set_taborder("6");
            obj.set_innerdataset("dsCalCpDv");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoCalCpDv00","81","34","157","20",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("2");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("7");
            obj.set_innerdataset("dsRsvtDv");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtOrinvcNo","389","33","149","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Calendar("calPickupExpctYmd","612","33","107","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_cssclass("cal_ty01_req");
            obj.set_value("20200402");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta001_01_01_01",null,"29","251","30","0",null,null,null,null,null,this.div00.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("23");
            obj.set_textAlign("center");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdoChoice","742","34","233","20",null,null,null,null,null,null,this.div00.form);
            obj.set_codecolumn("CD");
            obj.set_columncount("3");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_taborder("10");
            obj.set_innerdataset("dsChoice");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtPickupBranCd","71","62","90","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("false");
            this.div00.addChild(obj.name, obj);

            obj = new Edit("edtPickupBranNm","162","62","153","23",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_enable("false");
            obj.set_cssclass("inp_ty01");
            this.div00.addChild(obj.name, obj);

            obj = new Div("divSender","1","175","981","62",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","67","29","912","30",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_tbody_td01");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","68","30",null,null,null,null,null,null,this.divSender.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta00","67","0","912","30",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_tbody_td01");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta001_01","259","0","68","30",null,null,null,null,null,null,this.divSender.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("14");
            obj.set_text("고객");
            obj.set_textAlign("center");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta001_01_01",null,"0","68","30","290",null,null,null,null,null,this.divSender.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("기타전화");
            obj.set_textAlign("center");
            this.divSender.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","421","3","197","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.divSender.addChild(obj.name, obj);

            obj = new Edit("edtCustId","330","3","90","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("false");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","68","30",null,null,null,null,null,null,this.divSender.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("16");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.divSender.addChild(obj.name, obj);

            obj = new Combo("cboSendrTelNo1","71","3","61","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("0");
            obj.set_text("010");
            obj.set_index("18");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","131","5","15","18",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("18");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divSender.addChild(obj.name, obj);

            obj = new Edit("edtSendrTelNo2","145","3","49","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("1");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","193","5","15","18",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("19");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divSender.addChild(obj.name, obj);

            obj = new Edit("edtSendrTelNo3","207","3","49","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("2");
            this.divSender.addChild(obj.name, obj);

            obj = new Edit("edtSendrCellNo3","828","3","49","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("7");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta02_00_01_00","814","5","15","18",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divSender.addChild(obj.name, obj);

            obj = new Edit("edtSendrCellNo2","766","3","49","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("6");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","752","5","15","18",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divSender.addChild(obj.name, obj);

            obj = new Combo("cboSendrCellNo1","692","3","61","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("5");
            obj.set_text("010");
            obj.set_index("18");
            this.divSender.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr1","146","33","25","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_search01");
            this.divSender.addChild(obj.name, obj);

            obj = new Edit("edtAddr","170","33","328","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.divSender.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","500","33","375","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.divSender.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo","71","33","75","23",null,null,null,null,null,null,this.divSender.form);
            obj.set_taborder("8");
            obj.set_cssclass("inp_ty01_req");
            obj.set_format("#####");
            obj.set_type("string");
            this.divSender.addChild(obj.name, obj);

            obj = new Static("sta001","1","150","120","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("6");
            obj.set_text("보내는분");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divReceiver","1","285","981","62",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","67","29","912","30",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_tbody_td01");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","68","30",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("12");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta00","67","0","912","30",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_tbody_td01");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta001_01","259","0","68","30",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("14");
            obj.set_text("고객");
            obj.set_textAlign("center");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta001_01_01",null,"0","68","30","290",null,null,null,null,null,this.divReceiver.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("기타전화");
            obj.set_textAlign("center");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Edit("edtCustNm","421","3","197","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Edit("edtCustId","330","3","90","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("3");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("false");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","68","30",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("16");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Combo("cboRcvrTelNo1","71","3","61","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("0");
            obj.set_text("010");
            obj.set_index("18");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta01_00_01","131","5","15","18",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("18");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Edit("edtRcvrTelNo2","145","3","49","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("1");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","193","5","15","18",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("19");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Edit("edtRcvrTelNo3","207","3","49","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_cssclass("inp_ty01_req");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("2");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Edit("edtTelNo3_00","828","3","49","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("7");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta02_00_01_00","814","5","15","18",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("20");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Edit("edtTelNo2_00","766","3","49","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_cssclass("inp_ty01");
            obj.set_enable("true");
            obj.set_inputtype("number");
            obj.set_maxlength("4");
            obj.set_taborder("6");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta01_00_01_00","752","5","15","18",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Combo("cboTelNo1_00","692","3","61","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01");
            obj.set_datacolumn("CD_NM");
            obj.set_enable("true");
            obj.set_innerdataset("dsTelCd");
            obj.set_taborder("5");
            obj.set_text("010");
            obj.set_index("18");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Button("btnSearchAddr2","146","33","25","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_search01");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Edit("edtAddr2","170","33","328","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr2","500","33","375","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.divReceiver.addChild(obj.name, obj);

            obj = new MaskEdit("mskZipNo2","71","33","75","23",null,null,null,null,null,null,this.divReceiver.form);
            obj.set_taborder("8");
            obj.set_cssclass("inp_ty01_req");
            obj.set_format("#####");
            obj.set_type("string");
            this.divReceiver.addChild(obj.name, obj);

            obj = new Static("sta001_00","1","260","120","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("8");
            obj.set_text("받는분");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","1","370","120","25",null,null,null,null,null,null,this);
            obj.set_cssclass("tab_ty01_on");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("9");
            obj.set_text("기본정보");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("divBase","1","395","981","62",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("2px solid #1a3867,1px solid #dddddd,1px solid #dddddd");
            obj.set_boxShadow("0px 6px 6px #dddddd");
            obj.set_background("#ffffff");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","67","29","912","30",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_tbody_td01");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("sta001","0","0","68","30",null,null,null,null,null,null,this.divBase.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("7");
            obj.set_text("품목명");
            obj.set_textAlign("center");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("sta00","67","0","912","30",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_tbody_td01");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("sta001_01","409","0","68","30",null,null,null,null,null,null,this.divBase.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("9");
            obj.set_text("박스타입");
            obj.set_textAlign("center");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("sta001_01_01",null,"0","68","30","325",null,null,null,null,null,this.divBase.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("10");
            obj.set_text("박스수량");
            obj.set_textAlign("center");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("sta001_00","0","29","68","30",null,null,null,null,null,null,this.divBase.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("11");
            obj.set_text("운임구분");
            obj.set_textAlign("center");
            this.divBase.addChild(obj.name, obj);

            obj = new Combo("cboItem","71","3","129","23",null,null,null,null,null,null,this.divBase.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("0");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsItem");
            this.divBase.addChild(obj.name, obj);

            obj = new Edit("edtItemNm","201","3","205","23",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.divBase.addChild(obj.name, obj);

            obj = new Combo("cboBoxTy","480","3","103","23",null,null,null,null,null,null,this.divBase.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("2");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsBoxTy");
            this.divBase.addChild(obj.name, obj);

            obj = new Edit("edtBoxQty","657","3","79","23",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            obj.set_textAlign("right");
            obj.set_inputtype("number");
            this.divBase.addChild(obj.name, obj);

            obj = new CheckBox("chkSelectLot",null,null,"171","23","61","150",null,null,null,null,this.divBase.form);
            obj.set_cssclass("top_search_tx02");
            obj.getSetter("domainId").set("T1512");
            obj.set_taborder("13");
            obj.set_text("박스별 운송장출력");
            obj.set_falsevalue("false");
            obj.set_truevalue("true");
            this.divBase.addChild(obj.name, obj);

            obj = new Combo("cboFareDv","71","33","91","23",null,null,null,null,null,null,this.divBase.form);
            obj.set_codecolumn("CD");
            obj.set_cssclass("sel_ty01_req");
            obj.set_datacolumn("CD_NM");
            obj.set_taborder("4");
            obj.set_type("filterlike");
            obj.set_innerdataset("dsFareDv");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("sta001_00_00","739","0","68","30",null,null,null,null,null,null,this.divBase.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("14");
            obj.set_text("고객주문번호");
            obj.set_textAlign("center");
            this.divBase.addChild(obj.name, obj);

            obj = new Edit("edtCustUseNo","810","3","165","23",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01_req");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("sta001_01_00","342","29","68","30",null,null,null,null,null,null,this.divBase.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("15");
            obj.set_text("특이사항");
            obj.set_textAlign("center");
            this.divBase.addChild(obj.name, obj);

            obj = new Edit("edtRemark1","413","33","562","23",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_cssclass("inp_ty01");
            this.divBase.addChild(obj.name, obj);

            obj = new Static("sta001_00_01","165","29","68","30",null,null,null,null,null,null,this.divBase.form);
            obj.set_cssclass("sta_tbody_th01");
            obj.getSetter("domainId").set("T1133");
            obj.set_taborder("16");
            obj.set_text("기본운임");
            obj.set_textAlign("center");
            this.divBase.addChild(obj.name, obj);

            obj = new MaskEdit("mskFrt","236","33","103","23",null,null,null,null,null,null,this.divBase.form);
            obj.set_taborder("17");
            obj.set_cssclass("inp_ty01_req");
            obj.set_type("number");
            obj.set_format("###,###,###");
            this.divBase.addChild(obj.name, obj);

            obj = new Grid("grd_Main","1","467","982","268",null,null,null,null,null,null,this);
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("tb_ty01");
            obj.set_taborder("11");
            obj.set_autoupdatetype("itemselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"87\"/><Column size=\"74\"/><Column size=\"119\"/><Column size=\"100\"/><Column size=\"103\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"98\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"예약구분\"/><Cell col=\"2\" text=\"정산처구분\"/><Cell col=\"3\" text=\"보내는분\"/><Cell col=\"4\" text=\"받는분\"/><Cell col=\"5\" text=\"품목명\"/><Cell col=\"6\" text=\"박스수량\"/><Cell col=\"7\" text=\"운임\"/><Cell col=\"8\" text=\"운송장번호\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:RCPT_DV\" edittype=\"none\" expandshow=\"hide\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"dsRsvtDv\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"2\" text=\"bind:CAL_DV_CD\" edittype=\"none\" expandshow=\"hide\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"dsCalCpDv2\" combocodecol=\"CD\" combodatacol=\"CD_NM\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:SENDR_NM\" expandshow=\"hide\" maskedittype=\"number\" textAlign=\"left\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:RCVR_NM\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:GDS_NM\" edittype=\"none\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:BOX_QTY\" edittype=\"none\" displaytype=\"number\" textareainputtype=\"normal\" maskeditlimitbymask=\"decimal\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:FRT\" edittype=\"none\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:WAYBILL_NO\" edittype=\"none\" textAlign=\"center\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.rowcount\" displaytype=\"number\" textAlign=\"center\" padding=\"0px 3px 0px 0px\"/><Cell col=\"1\" colspan=\"5\"/><Cell col=\"6\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(ORD_QTY)')\" padding=\"0px 3px 0px 0px\" textAlign=\"right\"/><Cell col=\"7\" displaytype=\"number\" expr=\"dataset.getSum('parseInt(FRT)')\" textAlign=\"right\" padding=\"0px 3px 0px 0px\"/><Cell col=\"8\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustMgmtDlcmCd","707","6","90","23",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("inp_ty01");
            obj.set_inputmode("upper");
            obj.set_enable("true");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staMenuFullPath","21","1","469","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_fittocontents("none");
            obj.set_cssclass("top_title_route01");
            obj.set_text("MENU_FULL_PATH");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"0","556","34","30",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("btnComponent");
            this.addChild(obj.name, obj);

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1566,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div00.form.edtCustId","value","dsList","CUST_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div00.form.edtCustNm","value","dsList","CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div00.form.edtSendCustNm","value","dsList","SEND_CUST_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div00.form.edtSendCustNo","value","dsList","SEND_CUST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div00.form.rdoCalCpDv00","value","dsList","RCPT_DV");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div00.form.calPickupExpctYmd","value","dsList","PICKUP_EXPCT_YMD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSender.form.cboSendrTelNo1","value","dsList","SENDR_TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSender.form.edtSendrTelNo2","value","dsList","SENDR_TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSender.form.edtSendrTelNo3","value","dsList","SENDR_TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSender.form.edtSendrCellNo3","value","dsList","SENDR_CELL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSender.form.edtSendrCellNo2","value","dsList","SENDR_CELL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSender.form.cboSendrCellNo1","value","dsList","SENDR_CELL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSender.form.edtAddr","value","dsList","SENDR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSender.form.edtDetailAddr","value","dsList","SENDR_DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divReceiver.form.cboRcvrTelNo1","value","dsList","RCVR_TEL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divReceiver.form.edtRcvrTelNo2","value","dsList","RCVR_TEL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divReceiver.form.edtRcvrTelNo3","value","dsList","RCVR_TEL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divReceiver.form.edtTelNo3_00","value","dsList","RCVR_CELL_NO_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divReceiver.form.edtTelNo2_00","value","dsList","RCVR_CELL_NO_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divReceiver.form.cboTelNo1_00","value","dsList","RCVR_CELL_NO_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divReceiver.form.edtAddr2","value","dsList","RCVR_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divReceiver.form.edtDetailAddr2","value","dsList","RCVR_DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divBase.form.cboItem","value","dsList","GDS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divBase.form.edtItemNm","value","dsList","GDS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divBase.form.cboBoxTy","value","dsList","BOX_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divBase.form.edtBoxQty","value","dsList","BOX_QTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divBase.form.cboFareDv","value","dsList","FRT_DV_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divBase.form.edtCustUseNo","value","dsList","CUST_USE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divBase.form.edtRemark1","value","dsList","REMARK_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSender.form.edtCustId","value","dsList","SENDR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSender.form.edtCustNm","value","dsList","SENDR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divReceiver.form.edtCustId","value","dsList","RCVR_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divReceiver.form.edtCustNm","value","dsList","RCVR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSender.form.mskZipNo","value","dsList","SENDR_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divReceiver.form.mskZipNo2","value","dsList","RCVR_ZIP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div00.form.edtPickupBranCd","value","dsList","PICKUP_BRAN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divBase.form.mskFrt","value","dsList","FRT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div00.form.rdoCalCpDv","value","dsList","CAL_DV_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","div00.form.edtOrinvcNo","value","dsList","ORINVC_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edtCustMgmtDlcmCd","value","dsList","CUST_MGMT_DLCM_CD");
            this.addChild(obj.name, obj);
            obj.bind();
        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("RCPT_DLVY_0001.xfdl","lib::lib_Form.xjs");
        this.registerScript("RCPT_DLVY_0001.xfdl", function() {
        /**
        *  기업고객 건별접수
        *  @MenuPath
        *  @FileName 		BAIM_DLVY_0001.xfdl
        *  @Creator 		Kim Jin Hwan
        *  @CreateDate 		2020.06.08
        *  @Desction
        ************** 소스 수정 이력 ****************************************************************
        *  date				Modifier				Description
        ************************************************************************************************
        *  2020.06.08		Kim Jin Hwan			최초 생성
        *  2020.08.20       Kim Jae Cheon           수정 : 우변번호(mskZipNo) 포맷, 주소검색 부가정보 추가, 상세주소 포커스
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
        this.CLNTNUM_INIT = "0000000000";
        this.vCalPickupExpctYmdValue;

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


        	// 발송고객 사용자정보 조회
        	//this.gfnTransaction("getSendCustInfo");

        	var nRow = this.dsList.addRow();
        	this.dsList.setRowType(nRow, Dataset.ROWTYPE_INSERT);

        	this.fnSetEntrpModule();

        	this.fnSetDefault(this.gfnGetDate("date"));


        };


         /***********************************************************************************************
         * @function	: fnSetDefault
         * @description	: 초기값 셋팅
         * @return N/A
        /***********************************************************************************************/
        this.fnSetDefault = function(calPickupExpctYmd)
        {
        	this.div00.form.rdoCalCpDv00.set_value("01");						// 예약구분

        	this.div00.form.rdoChoice.set_value("01");							// 보내는분(01) 선택
        	this.fnSearchSenderReieverInfo("01");								// 보내는분(01) 정보 조회
        	this.div00.form.calPickupExpctYmd.set_value(calPickupExpctYmd);		// 요청일자

        	this.divBase.form.cboItem.set_value("01");							// 품목
        	this.divBase.form.cboBoxTy.set_value("02");							// 박스타입
        	this.divBase.form.cboFareDv.set_value("01");						// 운임구분
        	this.divBase.form.edtBoxQty.set_value(1);							// 박스수량

        	this.divSender.form.edtDetailAddr.setFocus();
        }


        /***********************************************************************************************
         * @function	: fnSetEntrpModule
         * @description	: 기업모듈셋팅
         * @return N/A
        /***********************************************************************************************/
        this.fnSetEntrpModule = function()
        {	trace(this.objApp.gv_blngDv);
        	// 점소고객(01)인경우
        	if(this.objApp.gv_blngDv == "01"){

        	}
        	// 기업고객(02)인경우
        	else if(this.objApp.gv_blngDv == "02"){

        		// 기업고객 셋팅
        		this.div00.form.edtCustId.set_value(this.objApp.gv_custId);

        		// 발송고객 셋팅
        		this.div00.form.edtSendCustNo.set_value(this.objApp.gv_custId);


        		if( !this.gfnIsNull(this.objApp.gv_custId) ) this.fnSearchCustInfo(this.objApp.gv_custId, "", this.objApp.gv_custId);
        		if( !this.gfnIsNull(this.objApp.gv_custId) ) this.fnSearchSendCustInfo(this.objApp.gv_custId, this.objApp.gv_custId);

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


        		case "btnAdd":

        			this.fnAdd();


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
        	var edtCustIdValue = this.div00.form.edtCustId.value;
        	var edtCustNmValue = this.div00.form.edtCustNm.value;

        	if(this.gfnIsNull(edtCustIdValue)){
        		this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustId.setFocus();});
        		return false;
        	}

        	if(this.gfnIsNull(edtCustNmValue)){
        		this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustNm.setFocus();});
        		return false;
        	}


        	this.dsSearch.setColumn(0, "CUST_ID", this.div00.form.edtCustId.value);
        	this.dsSearch.setColumn(0, "PICKUP_EXPCT_YMD", this.div00.form.calPickupExpctYmd.value);

        	this.vCalPickupExpctYmdValue = this.div00.form.calPickupExpctYmd.value;

        	this.dsList.clearData();


        	this.gfnTransaction("getDlvyRsrvList");

        };

        /***********************************************************************************************
         * @function	: fnSave
         * @description	: 저장.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnSave = function() {


        	/** 저장할 데이터 유효성 체크*********************************************************************/

        	// 주관고객
        	var edtCustIdValue = this.div00.form.edtCustId.value;
        	var edtCustNmValue = this.div00.form.edtCustNm.value;

        	if(this.gfnIsNull(edtCustIdValue)){
        		this.gfnAlert("주관고객을 입력해주세요.", "", function(){
        			this.div00.form.edtCustId.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtCustNmValue)){
        		this.gfnAlert("주관고객을 입력해주세요.", "", function(){
        			this.div00.form.edtCustNm.setFocus();
        		});
        		return;
        	}


        	// 발송고객
        	var edtSendCustNoValue = this.div00.form.edtSendCustNo.value;
        	var edtSendCustNmValue = this.div00.form.edtSendCustNm.value;

        	if(this.gfnIsNull(edtSendCustNoValue)){
        		this.gfnAlert("발송고객을 입력해주세요.", "", function(){
        			this.div00.form.edtSendCustNo.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtSendCustNmValue)){
        		this.gfnAlert("발송고객을 입력해주세요.", "", function(){
        			this.div00.form.edtSendCustNm.setFocus();
        		});
        		return;
        	}


        	// 보내는분
        	var cboSendrTelNo1Value = this.divSender.form.cboSendrTelNo1.value;
        	var edtSendrTelNo2Value = this.divSender.form.edtSendrTelNo2.value;
        	var edtSendrTelNo3Value = this.divSender.form.edtSendrTelNo3.value;
        	var mskZipNoValue = this.divSender.form.mskZipNo.value;
        	var edtAddrValue = this.divSender.form.edtAddr.value;
        	var edtDetailAddrValue = this.divSender.form.edtDetailAddr.value;


        	if(this.gfnIsNull(cboSendrTelNo1Value)){
        		this.gfnAlert("보내는분의 전화번호를 입력해주세요.", "", function(){
        			this.divSender.form.cboSendrTelNo1.dropdown();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtSendrTelNo2Value)){
        		this.gfnAlert("보내는분의 전화번호를 입력해주세요.", "", function(){
        			this.divSender.form.edtSendrTelNo2.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtSendrTelNo3Value)){
        		this.gfnAlert("보내는분의 전화번호를 입력해주세요.", "", function(){
        			this.divSender.form.edtSendrTelNo3.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(mskZipNoValue)){
        		this.gfnAlert("보내는분의 우편번호를 입력해주세요.", "", function(){
        			this.divSender.form.mskZipNo.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtAddrValue)){
        		this.gfnAlert("보내는분의 주소지를 입력해주세요.", "", function(){
        			this.divSender.form.edtAddr.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtDetailAddrValue)){
        		this.gfnAlert("보내는분의 상세주소를 입력해주세요.", "", function(){
        			this.divSender.form.edtDetailAddr.setFocus();
        		});
        		return;
        	}


        	// 받는분
        	var cboRcvrTelNo1Value = this.divReceiver.form.cboRcvrTelNo1.value;
        	var edtRcvrTelNo2Value = this.divReceiver.form.edtRcvrTelNo2.value;
        	var edtRcvrTelNo3Value = this.divReceiver.form.edtRcvrTelNo3.value;
        	var mskZipNo2Value = this.divReceiver.form.mskZipNo2.value;
        	var edtAddr2Value = this.divReceiver.form.edtAddr2.value;
        	var edtDetailAddr2Value = this.divReceiver.form.edtDetailAddr2.value;


        	if(this.gfnIsNull(cboRcvrTelNo1Value)){
        		this.gfnAlert("받는분의 전화번호를 입력해주세요.", "", function(){
        			this.divReceiver.form.cboRcvrTelNo1.dropdown();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtRcvrTelNo2Value)){
        		this.gfnAlert("받는분의 전화번호를 입력해주세요.", "", function(){
        			this.divReceiver.form.edtRcvrTelNo2.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtRcvrTelNo3Value)){
        		this.gfnAlert("받는분의 전화번호를 입력해주세요.", "", function(){
        			this.divReceiver.form.edtRcvrTelNo3.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(mskZipNo2Value)){
        		this.gfnAlert("받는분의 우편번호를 입력해주세요.", "", function(){
        			this.divReceiver.form.mskZipNo2.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtAddr2Value)){
        		this.gfnAlert("받는분의 주소지를 입력해주세요.", "", function(){
        			this.divReceiver.form.edtAddr2.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtDetailAddr2Value)){
        		this.gfnAlert("받는분의 상세주소를 입력해주세요.", "", function(){
        			this.divReceiver.form.edtDetailAddr2.setFocus();
        		});
        		return;
        	}


        	// 기본정보
        	var edtItemNmValue = this.divBase.form.edtItemNm.value;
        	var edtCustUseNoValue = this.divBase.form.edtCustUseNo.value;
        	var mskFrtValue = this.divBase.form.mskFrt.value;


        	if(this.gfnIsNull(edtItemNmValue)){
        		this.gfnAlert("기본정보의 품목명을 입력해주세요.", "", function(){
        			this.divBase.form.edtItemNm.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(edtCustUseNoValue)){
        		this.gfnAlert("기본정보의 고객주문번호를 입력해주세요.", "", function(){
        			this.divBase.form.edtCustUseNo.setFocus();
        		});
        		return;
        	}

        	if(this.gfnIsNull(mskFrtValue)){
        		this.gfnAlert("기본정보의 기본운임을 입력해주세요.", "", function(){
        			this.divBase.form.mskFrt.setFocus();
        		});
        		return;
        	}




        	/****************************************************************************************************/


        	this.gfnCustomConfirm("저장하시겠습니까?", function(sPopupId, bResult){

        		if(!bResult) return;

        		// 보내는분/받는분 고객번호가 없는경우 일반고객'0000000000' 으로 셋팅
        		var edtSenderCustIdValue = this.divSender.form.edtCustId.value;
        		var edtReceiverCustIdValue = this.divReceiver.form.edtCustId.value;

        		if(this.gfnIsNull(edtSenderCustIdValue)){
        			this.divSender.form.edtCustId.set_value(this.CLNTNUM_INIT);
        		}

        		if(this.gfnIsNull(edtReceiverCustIdValue)){
        			this.divReceiver.form.edtCustId.set_value(this.CLNTNUM_INIT);
        		}


        		this.gfnTransaction("saveDlvyRsrv");

        	});






        };


        /***********************************************************************************************
         * @function	: fnAdd
         * @description	: 추가.
         * @param		: N/A
         * @return N/A
        /***********************************************************************************************/
        this.fnAdd = function() {

        	var nRowType = this.dsList.getRowType(this.dsList.getRowCount()-1);
        	// 이미 추가된 행이 있다면 추가안함.
        	if(nRowType == Dataset.ROWTYPE_INSERT) return;

        	var calPickupExpctYmdValue =  this.gfnIsNull(this.vCalPickupExpctYmdValue)? this.gfnGetDate("date"):this.vCalPickupExpctYmdValue;

        	var nRow = this.dsList.addRow();

        	this.dsList.setRowType(nRow, Dataset.ROWTYPE_INSERT);

        	this.fnSetEntrpModule();

        	this.fnSetDefault(calPickupExpctYmdValue);
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

        		if(svcID == "getOrinvcInfo"){
        			this.div00.form.edtOrinvcNo.set_value("");
        		}

        		return;
        	}

        	switch(svcID) {
        		// 공통 코드 조회
        		case "commonCode" :

        			// 정산처구분 필터링
        			this.dsCalCpDv.filter("CD == '01' || CD =='02'");

        			// 박스타입 필터링
        			this.dsBoxTy.filter("CD == '02' || CD == '03'");

        			// 운임구분 필터링
        			this.dsFareDv.filter("CD == '01' || CD == '02'");

        		break;


        		// 조회
        		case "getDlvyRsrvList":

        			if(this.dsList.getRowCount() == 0){
        				this.fnAdd();
        			}

        		break;


        		// 저장
        		case "saveDlvyRsrv" :
        			this.gfnAlert("저장되었습니다.");

        			this.fnSearch();
        		break;


        		// 원운송장정보 조회
        		case "getOrinvcInfo" :
        			if(this.dsOrinvcInfo.getRowCount()==0){
        				this.gfnAlert("접수된 원운송장정보가 없습니다.");
        				this.fnSetClntInfo("99");	// 보내는분, 받는분 정보 모두삭제

        				return;
        			}
        			else{
        				// 원운송장 보내는분 -> 받는분 , 원운송장 받는분 -> 보내는분

        				this.dsList.setColumn(this.dsList.rowposition, "ORINVC_NO", this.dsOrinvcInfo.getColumn(0, "WAYBILL_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_NO", this.dsOrinvcInfo.getColumn(0, "RCVR_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_NM", this.dsOrinvcInfo.getColumn(0, "RCVR_NM"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_TEL_NO_1", this.dsOrinvcInfo.getColumn(0, "RCVR_TEL_NO_1"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_TEL_NO_2", this.dsOrinvcInfo.getColumn(0, "RCVR_TEL_NO_2"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_TEL_NO_3", this.dsOrinvcInfo.getColumn(0, "RCVR_TEL_NO_3"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_CELL_NO_1", this.dsOrinvcInfo.getColumn(0, "RCVR_CELL_NO_1"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_CELL_NO_2", this.dsOrinvcInfo.getColumn(0, "RCVR_CELL_NO_2"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_CELL_NO_3", this.dsOrinvcInfo.getColumn(0, "RCVR_CELL_NO_3"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_ZIP_NO", this.dsOrinvcInfo.getColumn(0, "RCVR_ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_ADDR", this.dsOrinvcInfo.getColumn(0, "RCVR_ADDR"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_DETAIL_ADDR", this.dsOrinvcInfo.getColumn(0, "RCVR_DETAIL_ADDR"));

        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_NO", this.dsOrinvcInfo.getColumn(0, "SENDR_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_NM", this.dsOrinvcInfo.getColumn(0, "SENDR_NM"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_TEL_NO_1", this.dsOrinvcInfo.getColumn(0, "SENDR_TEL_NO_1"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_TEL_NO_2", this.dsOrinvcInfo.getColumn(0, "SENDR_TEL_NO_2"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_TEL_NO_3", this.dsOrinvcInfo.getColumn(0, "SENDR_TEL_NO_3"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_CELL_NO_1", this.dsOrinvcInfo.getColumn(0, "SENDR_CELL_NO_1"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_CELL_NO_2", this.dsOrinvcInfo.getColumn(0, "SENDR_CELL_NO_2"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_CELL_NO_3", this.dsOrinvcInfo.getColumn(0, "SENDR_CELL_NO_3"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_ZIP_NO", this.dsOrinvcInfo.getColumn(0, "SENDR_ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_ADDR", this.dsOrinvcInfo.getColumn(0, "SENDR_ADDR"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_DETAIL_ADDR", this.dsOrinvcInfo.getColumn(0, "SENDR_DETAIL_ADDR"));

        				this.dsList.setColumn(this.dsList.rowposition, "GDS_CD", this.dsOrinvcInfo.getColumn(0, "GDS_CD"));
        				this.dsList.setColumn(this.dsList.rowposition, "GDS_NM", this.dsOrinvcInfo.getColumn(0, "GDS_NM"));
        				this.dsList.setColumn(this.dsList.rowposition, "BOX_TYPE_CD", this.dsOrinvcInfo.getColumn(0, "BOX_TYPE_CD"));
        				this.dsList.setColumn(this.dsList.rowposition, "CUST_USE_NO", this.dsOrinvcInfo.getColumn(0, "CUST_USE_NO"));


        			}

        		break;



        		// 기업고객 조회처리.
        		case "getCustInfo":

        			// 1건 조회된 경우 조회조건에 셋팅.
        			if(this.dsCustInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "CUST_ID", this.dsCustInfo.getColumn(0,"CUST_ID"));
        				this.dsList.setColumn(this.dsList.rowposition, "CUST_NM", this.dsCustInfo.getColumn(0,"CUST_NM"));
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

        				this.dsList.setColumn(this.dsList.rowposition, "SEND_CUST_NO", this.dsSendCustInfo.getColumn(0,"SEND_CUST_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "SEND_CUST_NM", this.dsSendCustInfo.getColumn(0,"SEND_CUST_NM"));
        				this.edtCustMgmtDlcmCd.set_value(this.dsSendCustInfo.getColumn(0,"CUST_MGMT_DLCM_CD"));
        				this.div00.form.rdoCalCpDv.set_value(this.dsSendCustInfo.getColumn(0,"CAL_CP_DV"));
        				this.div00.form.edtPickupBranCd.set_value(this.dsSendCustInfo.getColumn(0,"PICKUP_BRAN_CD"));
        				this.div00.form.edtPickupBranNm.set_value(this.dsSendCustInfo.getColumn(0,"PICKUP_BRAN_NM"));
        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.div00.form.btnSendCustSearch.click();
        			}

        		break;

        		// 보내는분 조회처리.
        		case "getSenderInfo":
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_NO", this.dsSendCustInfo.getColumn(0, "SEND_CUST_NO"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_NM", this.dsSendCustInfo.getColumn(0, "SEND_CUST_NM"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_TEL_NO_1", this.dsSendCustInfo.getColumn(0, "TEL_NO_1"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_TEL_NO_2", this.dsSendCustInfo.getColumn(0, "TEL_NO_2"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_TEL_NO_3", this.dsSendCustInfo.getColumn(0, "TEL_NO_3"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_CELL_NO_1", this.dsSendCustInfo.getColumn(0, "CELL_NO_1"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_CELL_NO_2", this.dsSendCustInfo.getColumn(0, "CELL_NO_2"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_CELL_NO_3", this.dsSendCustInfo.getColumn(0, "CELL_NO_3"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_ZIP_NO", this.dsSendCustInfo.getColumn(0, "ZIP_NO"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_ADDR", this.dsSendCustInfo.getColumn(0, "ADDR"));
        			this.dsList.setColumn(this.dsList.rowposition, "SENDR_DETAIL_ADDR", this.dsSendCustInfo.getColumn(0, "DETAIL_ADDR"));
        		break;


        		// 받는분 조회처리.
        		case "getReceiverInfo":
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_NO", this.dsSendCustInfo.getColumn(0, "SEND_CUST_NO"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_NM", this.dsSendCustInfo.getColumn(0, "SEND_CUST_NM"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_TEL_NO_1", this.dsSendCustInfo.getColumn(0, "TEL_NO_1"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_TEL_NO_2", this.dsSendCustInfo.getColumn(0, "TEL_NO_2"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_TEL_NO_3", this.dsSendCustInfo.getColumn(0, "TEL_NO_3"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_CELL_NO_1", this.dsSendCustInfo.getColumn(0, "CELL_NO_1"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_CELL_NO_2", this.dsSendCustInfo.getColumn(0, "CELL_NO_2"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_CELL_NO_3", this.dsSendCustInfo.getColumn(0, "CELL_NO_3"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_ZIP_NO", this.dsSendCustInfo.getColumn(0, "ZIP_NO"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_ADDR", this.dsSendCustInfo.getColumn(0, "ADDR"));
        			this.dsList.setColumn(this.dsList.rowposition, "RCVR_DETAIL_ADDR", this.dsSendCustInfo.getColumn(0, "DETAIL_ADDR"));
        		break;


        		// 보내는분 주소 조회처리.
        		case "getZipAddrInfoList":

        			// 1건 조회된 경우 셋팅.
        			if(this.dsZipAddrInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_ZIP_NO", this.dsZipAddrInfo.getColumn(0, "ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "SENDR_ADDR", this.dsZipAddrInfo.getColumn(0, "ADDR"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.divSender.form.btnSearchAddr1.click();
        			}
        		break;


        		// 받는분 주소 조회처리.
        		case "getZipAddrInfoList2":
        			//trace(this.dsZipAddrInfo.getRowCount());
        			// 1건 조회된 경우 셋팅.
        			if(this.dsZipAddrInfo.getRowCount() == 1){

        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_ZIP_NO", this.dsZipAddrInfo.getColumn(0, "ZIP_NO"));
        				this.dsList.setColumn(this.dsList.rowposition, "RCVR_ADDR", this.dsZipAddrInfo.getColumn(0, "ADDR"));

        			}
        			// 2건 이상 조회된 경우 팝업창 띄움.
        			else{
        				this.divReceiver.form.btnSearchAddr2.click();
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


        		case "searchPopAddr1":
        			if(dsObj.rowcount > 0){
        				this.divSender.form.mskZipNo.set_value(dsObj.getColumn(0,"ZIP_NO"));		// 우편번호
        				this.divSender.form.edtAddr.set_value(dsObj.getColumn(0,"ADDR"));			// 주소
        				this.divSender.form.edtDetailAddr.set_value(dsObj.getColumn(0,"ADD_INFO"));	// 부가정보
        				this.divSender.form.edtDetailAddr.setFocus();
        				this.divSender.form.edtDetailAddr.setSelect(0,0);
        			}
        		break;


        		case "searchPopAddr2":
        			if(dsObj.rowcount > 0){
        				this.divReceiver.form.mskZipNo2.set_value(dsObj.getColumn(0,"ZIP_NO"));			// 우편번호
        				this.divReceiver.form.edtAddr2.set_value(dsObj.getColumn(0,"ADDR"));			// 주소
        				this.divReceiver.form.edtDetailAddr2.set_value(dsObj.getColumn(0,"ADD_INFO"));	// 부가정보
        				this.divReceiver.form.edtDetailAddr2.setFocus();
        				this.divReceiver.form.edtDetailAddr2.setSelect(0,0);
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

        	if(btnName == 'btnSearchAddr1'){
        		popupId = 'searchPopAddr1';
        		zipNo = this.divSender.form.mskZipNo.value;
        		addr = this.divSender.form.edtAddr.value;
        	}else{
        		popupId = 'searchPopAddr2';
        		zipNo = this.divReceiver.form.mskZipNo2.value;
        		addr = this.divReceiver.form.edtAddr2.value;
        	}

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
         * @function		: fnOpenPopAddr
         * @description		: 우편번호 주소 조회 팝업 호출
         * @param 			: choiceValue	- String (라디오 선택 값)
         * @return 			: boolean
        ***********************************************************************************************/
        this.fnSearchSenderReieverInfo = function(choiceValue)
        {
        	if( this.dsList.getRowType(this.dsList.rowposition) != Dataset.ROWTYPE_INSERT ) return false;


        	/** 조회전 유효성 체크*****************************************************************************/

        	// 로그인 계정의 소속구분이 기업고객(02), 발송고객(03)인경우  => 기업고객ID , 기업고객명 필수 입력.
        	if(this.objApp.gv_blngDv == "02" || this.objApp.gv_blngDv == "03"){
        		var edtCustIdValue = this.div00.form.edtCustId.value;
        		var edtCustNmValue = this.div00.form.edtCustNm.value;

        		if(this.gfnIsNull(edtCustIdValue)){
        			this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustId.setFocus();});
        			return false;
        		}

        		if(this.gfnIsNull(edtCustNmValue)){
        			this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustNm.setFocus();});
        			return false;
        		}

        	}

        	// 보내는분, 받는분 인경우 발송고객 필수 입력.
        	if(choiceValue == "01" || choiceValue == "02"){
        		var edtSendCustNoValue = this.div00.form.edtSendCustNo.value;
        		var edtSendCustNmValue = this.div00.form.edtSendCustNm.value;

        		if(this.gfnIsNull(edtSendCustNoValue)){
        			this.gfnAlert("발송고객을 입력해주세요.","", function(){ this.div00.form.edtSendCustNo.setFocus();});
        			return false;
        		}

        		if(this.gfnIsNull(edtSendCustNmValue)){
        			this.gfnAlert("발송고객을 입력해주세요.","", function(){ this.div00.form.edtSendCustNm.setFocus();});
        			return false;
        		}

        		this.fnSetClntInfo(choiceValue);
        	}
        	else if (choiceValue =="03"){
        		this.fnSetClntInfo(choiceValue);
        	}

        	/****************************************************************************************************/


        	// 보내는분 조회
        	if(choiceValue == "01"){
        		this.gfnTransaction("getSenderInfo");
        	}

        	// 받는분 조회
        	else if(choiceValue == "02"){
        		this.gfnTransaction("getReceiverInfo");
        	}

        	return true;
        }


        /***********************************************************************************************
         * @function		: fnSetClntInfo
         * @description		: 라디오 선택 값에 따라 컴포넌트 속성 설정.
         * @param 			: choiceValue	- String (라디오 선택 값)
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSetClntInfo = function(choiceValue)
        {
        	/*
        		# "01" (신규입력시 보내는분체크)
        		  1) 송화인정보 : 비활성화
        	      2) 수화인정보 : 활성화,빈칸

        		# "02" (신규입력시 받는분체크)
        		  1) 송화인정보 : 활성화,빈칸
        		  2) 수화인정보 : 비활성화

        		# "03" (신규입력시 취소체크)
        		  1) 송화인정보 : 활성화,빈칸
        		  2) 수화인정보 : 활성화,빈칸
        		  3) 발송고객정보 : 빈칸

        		# "80" (저장된행이 일반예약접수인경우)
        		  1) 송화인정보 : 비활성화
        		  2) 수화인정보 : 활성화

        		# "90" (저장된행이 반품예약접수인경우)
        		  1) 송화인정보 : 활성화
        		  2) 수화인정보 : 비활성화

        		# "99" (원운송장 조회시 정보가 없는경우)
        		  1) 송화인정보 : 활성화,빈칸
        		  2) 수화인정보 : 활성화,빈칸
        	*/


        	// 보내는분
        	if(choiceValue == "01"){
        		this.divSender.form.cboSendrTelNo1.set_enable(false);
        		this.divSender.form.edtSendrTelNo2.set_enable(false);
        		this.divSender.form.edtSendrTelNo3.set_enable(false);
        		this.divSender.form.edtCustNm.set_enable(false);
        		this.divSender.form.mskZipNo.set_enable(false);
        		this.divSender.form.edtAddr.set_enable(false);

        		this.divReceiver.form.cboRcvrTelNo1.set_enable(true);
        		this.divReceiver.form.edtRcvrTelNo2.set_enable(true);
        		this.divReceiver.form.edtRcvrTelNo3.set_enable(true);
        		this.divReceiver.form.edtCustNm.set_enable(true);
        		this.divReceiver.form.mskZipNo2.set_enable(true);
        		this.divReceiver.form.edtAddr2.set_enable(true);

        		this.divReceiver.form.cboRcvrTelNo1.set_value("");
        		this.divReceiver.form.edtRcvrTelNo2.set_value("");
        		this.divReceiver.form.edtRcvrTelNo3.set_value("");
        		this.divReceiver.form.edtCustId.set_value("");
        		this.divReceiver.form.edtCustNm.set_value("");
        		this.divReceiver.form.mskZipNo2.set_value("");
        		this.divReceiver.form.edtAddr2.set_value("");
        		this.divReceiver.form.edtDetailAddr2.set_value("");
        	}
        	// 받는분
        	else if(choiceValue == "02"){
        		this.divSender.form.cboSendrTelNo1.set_enable(true);
        		this.divSender.form.edtSendrTelNo2.set_enable(true);
        		this.divSender.form.edtSendrTelNo3.set_enable(true);
        		this.divSender.form.edtCustNm.set_enable(true);
        		this.divSender.form.mskZipNo.set_enable(true);
        		this.divSender.form.edtAddr.set_enable(true);

        		this.divReceiver.form.cboRcvrTelNo1.set_enable(false);
        		this.divReceiver.form.edtRcvrTelNo2.set_enable(false);
        		this.divReceiver.form.edtRcvrTelNo3.set_enable(false);
        		this.divReceiver.form.edtCustNm.set_enable(false);
        		this.divReceiver.form.mskZipNo2.set_enable(false);
        		this.divReceiver.form.edtAddr2.set_enable(false);

        		this.divSender.form.cboSendrTelNo1.set_value("");
        		this.divSender.form.edtSendrTelNo2.set_value("");
        		this.divSender.form.edtSendrTelNo3.set_value("");
        		this.divSender.form.edtCustId.set_value("");
        		this.divSender.form.edtCustNm.set_value("");
        		this.divSender.form.mskZipNo.set_value("");
        		this.divSender.form.edtAddr.set_value("");
        		this.divSender.form.edtDetailAddr.set_value("");
        	}
        	// 취소
        	else if(choiceValue == "03"){
        		this.divSender.form.cboSendrTelNo1.set_enable(true);
        		this.divSender.form.edtSendrTelNo2.set_enable(true);
        		this.divSender.form.edtSendrTelNo3.set_enable(true);
        		this.divSender.form.edtCustNm.set_enable(true);
        		this.divSender.form.mskZipNo.set_enable(true);
        		this.divSender.form.edtAddr.set_enable(true);

        		this.divReceiver.form.cboRcvrTelNo1.set_enable(true);
        		this.divReceiver.form.edtRcvrTelNo2.set_enable(true);
        		this.divReceiver.form.edtRcvrTelNo3.set_enable(true);
        		this.divReceiver.form.edtCustNm.set_enable(true);
        		this.divReceiver.form.mskZipNo2.set_enable(true);
        		this.divReceiver.form.edtAddr2.set_enable(true);

        		this.divSender.form.cboSendrTelNo1.set_value("");
        		this.divSender.form.edtSendrTelNo2.set_value("");
        		this.divSender.form.edtSendrTelNo3.set_value("");
        		this.divSender.form.edtCustId.set_value("");
        		this.divSender.form.edtCustNm.set_value("");
        		this.divSender.form.mskZipNo.set_value("");
        		this.divSender.form.edtAddr.set_value("");
        		this.divSender.form.edtDetailAddr.set_value("");
        		this.divReceiver.form.cboRcvrTelNo1.set_value("");
        		this.divReceiver.form.edtRcvrTelNo2.set_value("");
        		this.divReceiver.form.edtRcvrTelNo3.set_value("");
        		this.divReceiver.form.edtCustId.set_value("");
        		this.divReceiver.form.edtCustNm.set_value("");
        		this.divReceiver.form.mskZipNo2.set_value("");
        		this.divReceiver.form.edtAddr2.set_value("");
        		this.divReceiver.form.edtDetailAddr2.set_value("");


        		// 기업고객(02)인경우
        		if(this.objApp.gv_blngDv == "02"){
        			this.div00.form.edtSendCustNo.set_value("");
        			this.div00.form.edtSendCustNm.set_value("");
        		}
        		// 발송고객(03)인경우
        		else if(this.objApp.gv_blngDv == "03"){

        		}
        	}

        	// 저장된 행이 일반인경우
        	else if(choiceValue == "80"){
        		this.divSender.form.cboSendrTelNo1.set_enable(false);
        		this.divSender.form.edtSendrTelNo2.set_enable(false);
        		this.divSender.form.edtSendrTelNo3.set_enable(false);
        		this.divSender.form.edtCustNm.set_enable(false);
        		this.divSender.form.mskZipNo.set_enable(false);
        		this.divSender.form.edtAddr.set_enable(false);

        		this.divReceiver.form.cboRcvrTelNo1.set_enable(true);
        		this.divReceiver.form.edtRcvrTelNo2.set_enable(true);
        		this.divReceiver.form.edtRcvrTelNo3.set_enable(true);
        		this.divReceiver.form.edtCustNm.set_enable(true);
        		this.divReceiver.form.mskZipNo2.set_enable(true);
        		this.divReceiver.form.edtAddr2.set_enable(true);
        	}

        	// 저장된 행이 반품인경우
        	else if(choiceValue == "90"){
        		this.divSender.form.cboSendrTelNo1.set_enable(true);
        		this.divSender.form.edtSendrTelNo2.set_enable(true);
        		this.divSender.form.edtSendrTelNo3.set_enable(true);
        		this.divSender.form.edtCustNm.set_enable(true);
        		this.divSender.form.mskZipNo.set_enable(true);
        		this.divSender.form.edtAddr.set_enable(true);

        		this.divReceiver.form.cboRcvrTelNo1.set_enable(false);
        		this.divReceiver.form.edtRcvrTelNo2.set_enable(false);
        		this.divReceiver.form.edtRcvrTelNo3.set_enable(false);
        		this.divReceiver.form.edtCustNm.set_enable(false);
        		this.divReceiver.form.mskZipNo2.set_enable(false);
        		this.divReceiver.form.edtAddr2.set_enable(false);
        	}

        	// 원운송장 조회시 없는경우
        	else if(choiceValue == "99"){
        		this.divSender.form.cboSendrTelNo1.set_enable(true);
        		this.divSender.form.edtSendrTelNo2.set_enable(true);
        		this.divSender.form.edtSendrTelNo3.set_enable(true);
        		this.divSender.form.edtCustNm.set_enable(true);
        		this.divSender.form.mskZipNo.set_enable(true);
        		this.divSender.form.edtAddr.set_enable(true);

        		this.divReceiver.form.cboRcvrTelNo1.set_enable(true);
        		this.divReceiver.form.edtRcvrTelNo2.set_enable(true);
        		this.divReceiver.form.edtRcvrTelNo3.set_enable(true);
        		this.divReceiver.form.edtCustNm.set_enable(true);
        		this.divReceiver.form.mskZipNo2.set_enable(true);
        		this.divReceiver.form.edtAddr2.set_enable(true);

        		this.divSender.form.cboSendrTelNo1.set_value("");
        		this.divSender.form.edtSendrTelNo2.set_value("");
        		this.divSender.form.edtSendrTelNo3.set_value("");
        		this.divSender.form.edtCustId.set_value("");
        		this.divSender.form.edtCustNm.set_value("");
        		this.divSender.form.mskZipNo.set_value("");
        		this.divSender.form.edtAddr.set_value("");
        		this.divSender.form.edtDetailAddr.set_value("");
        		this.divReceiver.form.cboRcvrTelNo1.set_value("");
        		this.divReceiver.form.edtRcvrTelNo2.set_value("");
        		this.divReceiver.form.edtRcvrTelNo3.set_value("");
        		this.divReceiver.form.edtCustId.set_value("");
        		this.divReceiver.form.edtCustNm.set_value("");
        		this.divReceiver.form.mskZipNo2.set_value("");
        		this.divReceiver.form.edtAddr2.set_value("");
        		this.divReceiver.form.edtDetailAddr2.set_value("");
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
        this.fnSearchSendCustInfo = function(custId, sendCustNo, sendCustNm)
        {

        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "CUST_ID", custId);
        	this.dsSearch.setColumn(0, "SEND_CUST_NO", sendCustNo);
        	this.dsSearch.setColumn(0, "SEND_CUST_NM", sendCustNm);


        	this.gfnTransaction("getSendCustInfo");
        }


        /***********************************************************************************************
         * @function		: fnSearchAddrInfo
         * @description		: 주소 정보 조회
         * @param 			: gubun	- String (보내는분, 받는분)
         * @param 			: zipNo	- String (우편번호)
         * @param 			: addr	- String (주소)
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSearchAddrInfo = function(gubun, zipNo, addr)
        {

        	// 조회조건 셋팅
        	this.dsSearch.setColumn(0, "ZIP_NO", zipNo);
        	this.dsSearch.setColumn(0, "DETAIL_ADDR", addr);


        	// 우편번호가 5자리면 도로명주소로 조회
        	if( this.gfnTrim(zipNo).length == "5" ){
        		this.dsSearch.setColumn(0, "ZIP_ADDR_DV", "02");
        	}
        	else{
        		this.dsSearch.setColumn(0, "ZIP_ADDR_DV", "01");
        	}

        	if(gubun == "sender"){
        		this.gfnTransaction("getZipAddrInfoList");
        	}else{
        		this.gfnTransaction("getZipAddrInfoList2");
        	}
        }

        /***********************************************************************************************
         * @function		: fnSearchOrinvcInfo
         * @description		: 원운송장번호로 받는분 보내는분 정보 조회
         * @return 			: N/A
        ***********************************************************************************************/
        this.fnSearchOrinvcInfo = function()
        {

        	// 조회전 체크
        	// 기업고객(02) 또는 발송고객(03)인경우
        	if(this.objApp.gv_blngDv == "02" || this.objApp.gv_blngDv == "03"){

        		var edtCustIdValue = this.div00.form.edtCustId.value;
        		var edtCustNmValue = this.div00.form.edtCustNm.value;

        		if(this.gfnIsNull(edtCustIdValue)){
        			this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustId.setFocus();});
        			return false;
        		}

        		if(this.gfnIsNull(edtCustNmValue)){
        			this.gfnAlert("기업고객을 입력해주세요.","", function(){ this.div00.form.edtCustNm.setFocus();});
        			return false;
        		}

        	}

        	// 운송장번호 형식체크




        	// 원운송장정보 조회
        	this.dsSearch.setColumn(0, "CUST_ID", this.div00.form.edtCustId.value);
        	this.dsSearch.setColumn(0, "SEND_CUST_NO", this.div00.form.edtSendCustNo.value);
        	this.dsSearch.setColumn(0, "ORINVC_NO", this.div00.form.edtOrinvcNo.value);

        	this.div00.form.edtOrinvcNo.set_value("");

        	this.gfnTransaction("getOrinvcInfo");







        }



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/



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
        		case "btnSearchAddr1" : this.fnOpenPopAddr(btnName); break;
        		case "btnSearchAddr2" : this.fnOpenPopAddr(btnName); break;
        		default 		: 	break;
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
        			case	'edtCustId' : this.fnSearchCustInfo(this.div00.form.edtCustId.value, this.div00.form.edtCustNm.value, this.div00.form.edtSendCustNo.value); break;
        			case	'edtCustNm' : this.fnSearchCustInfo(this.div00.form.edtCustId.value, this.div00.form.edtCustNm.value, this.div00.form.edtSendCustNo.value); break;
        			case	'edtSendCustNo' : this.fnSearchSendCustInfo(this.div00.form.edtCustId.value, this.div00.form.edtSendCustNo.value, this.div00.form.edtSendCustNm.value); break;
        			case	'edtSendCustNm' : this.fnSearchSendCustInfo(this.div00.form.edtCustId.value, this.div00.form.edtSendCustNo.value, this.div00.form.edtSendCustNm.value); break;
        			case	'mskZipNo' :  this.fnSearchAddrInfo("sender", this.divSender.form.mskZipNo.value, this.divSender.form.edtAddr.value); break;
        			case	'edtAddr' :  this.fnSearchAddrInfo("sender", this.divSender.form.mskZipNo.value, this.divSender.form.edtAddr.value); break;
        			case	'mskZipNo2' :  this.fnSearchAddrInfo("receiver", this.divReceiver.form.mskZipNo2.value, this.divReceiver.form.edtAddr2.value); break;
        			case	'edtAddr2' :  this.fnSearchAddrInfo("receiver", this.divReceiver.form.mskZipNo2.value, this.divReceiver.form.edtAddr2.value); break;
        			case	'edtOrinvcNo' : this.fnSearchOrinvcInfo(); break;

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
        		case	'mskZipNo'	: this.divSender.form.edtAddr.set_value(''); break;
        		case	'edtAddr'	: this.divSender.form.mskZipNo.set_value(''); break;
        		case	'mskZipNo2'	: this.divReceiver.form.edtAddr2.set_value(''); break;
        		case	'edtAddr2'	: this.divReceiver.form.mskZipNo2.set_value(''); break;
        	}
        };


        /***********************************************************************************************
         * @function	: div00_rdoChoice_onitemchanged
         * @description	: radio onitemchanged
         * @param		: obj	- nexacro.Radio
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.div00_rdoChoice_onitemchanged = function(obj,e)
        {
        	// 보내는분 또는 받는분 정보 조회
        	var result = this.fnSearchSenderReieverInfo(e.postvalue);

        	if(!result) this.div00.form.rdoChoice.set_value(e.prevalue);

        };


        /***********************************************************************************************
         * @function	: divBase_edtBoxQty_onchanged
         * @description	: edit onchanged
         * @param		: obj	- nexacro.Edit
         * @param		: e		- nexacro.ChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.divBase_edtBoxQty_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue){

        		if(e.postvalue == "0" || this.gfnIsNull(e.postvalue)){
        			this.divBase.form.edtBoxQty.set_value(1);
        		}



        	}
        };


        /***********************************************************************************************
         * @function	: div00_rdoCalCpDv00_onitemchanged
         * @description	: radio onitemchanged
         * @param		: obj	- nexacro.Radio
         * @param		: e		- nexacro.ItemChangeEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.div00_rdoCalCpDv00_onitemchanged = function(obj,e)
        {
        	var nRowType = this.dsList.getRowType(this.dsList.rowposition);

        	if(nRowType != Dataset.ROWTYPE_INSERT) {
        		obj.set_value(e.prevalue);
        		return;
        	}

        	if(e.prevalue != e.postvalue){

        		// 예약구분이 일반(01)인경우
        		if(e.postvalue == "01"){
        			// 원운송장 컴포넌트 비활설화
        			this.div00.form.edtOrinvcNo.set_value("");
        			this.div00.form.edtOrinvcNo.set_enable(false);


        			// 보내는분 또는 받는분 정보 조회
        			var result = this.fnSearchSenderReieverInfo("01");
        			this.div00.form.rdoChoice.set_value("01");

        		}
        		// 예약구분이 반품(02)인경우
        		else if(e.postvalue == "02"){
        			// 원운송장 컴포넌트 활성화
        			this.div00.form.edtOrinvcNo.set_enable(true);
        			this.div00.form.edtOrinvcNo.setFocus();


        			// 보내는분 또는 받는분 정보 조회
        			var result = this.fnSearchSenderReieverInfo("02");
        			this.div00.form.rdoChoice.set_value("02");
        		}

        	}

        };


        /***********************************************************************************************
         * @function	: grd_Main_oncellposchanged
         * @description	: grid oncellposchanged
         * @param		: obj	- nexacro.Grid
         * @param		: e		- nexacro.GridSelectEventInfo
         * @return N/A
        /***********************************************************************************************/
        this.grd_Main_oncellposchanged = function(obj,e)
        {
        	var nRowType = this.dsList.getRowType(e.row);
        	var nOldRowType = this.dsList.getRowType(e.oldrow);

        	if(nOldRowType == Dataset.ROWTYPE_UPDATE){

        		for(var i=0; i<this.dsList.getColCount(); i++){

        			this.dsList.setColumn(e.oldrow, i, this.dsList.getOrgColumn(e.oldrow, i));

        		}

        		//this.dsList.setRowType(e.oldrow, Dataset.ROWTYPE_NORMAL);

        	}


        	var nRcptDvValue = this.dsList.getColumn(e.row, "RCPT_DV");

        	if(nRowType != Dataset.ROWTYPE_INSERT){
        		//this.fnSetClntInfo("01");

        		// 저장된 행이 일반 예약접수인경우
        		if(nRcptDvValue == "01"){
        			this.fnSetClntInfo("80");	// 보내는분 컴포넌트 비활성화
        		}
        		// 저장된 행이 반품 예약접수인경우
        		else{
        			this.fnSetClntInfo("90");	// 받는분 컴포넌트 비활성화
        		}

        	}
        	else{
        		this.fnSetClntInfo(this.div00.form.rdoChoice.value);
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnOnClick,this);
            this.btnAdd.addEventHandler("onclick",this.btnOnClick,this);
            this.btnSave.addEventHandler("onclick",this.btnOnClick,this);
            this.div00.form.edtCustId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtCustId.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.btnCustSearch.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.edtCustNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtCustNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.edtSendCustNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtSendCustNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.btnSendCustSearch.addEventHandler("onclick",this.fnOpenPop,this);
            this.div00.form.edtSendCustNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtSendCustNo.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.rdoCalCpDv00.addEventHandler("onitemchanged",this.div00_rdoCalCpDv00_onitemchanged,this);
            this.div00.form.edtOrinvcNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.rdoChoice.addEventHandler("onitemchanged",this.div00_rdoChoice_onitemchanged,this);
            this.div00.form.edtPickupBranCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtPickupBranCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.div00.form.edtPickupBranNm.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.div00.form.edtPickupBranNm.addEventHandler("oninput",this.fnEditOnInput,this);
            this.divSender.form.edtCustId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.divSender.form.edtCustId.addEventHandler("oninput",this.fnEditOnInput,this);
            this.divSender.form.btnSearchAddr1.addEventHandler("onclick",this.fnOpenPop,this);
            this.divSender.form.edtAddr.addEventHandler("oninput",this.fnEditOnInput,this);
            this.divSender.form.edtAddr.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.divSender.form.mskZipNo.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.divSender.form.mskZipNo.addEventHandler("oninput",this.fnEditOnInput,this);
            this.divReceiver.form.edtCustId.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.divReceiver.form.edtCustId.addEventHandler("oninput",this.fnEditOnInput,this);
            this.divReceiver.form.btnSearchAddr2.addEventHandler("onclick",this.fnOpenPop,this);
            this.divReceiver.form.edtAddr2.addEventHandler("oninput",this.fnEditOnInput,this);
            this.divReceiver.form.edtAddr2.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.divReceiver.form.mskZipNo2.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.divReceiver.form.mskZipNo2.addEventHandler("oninput",this.fnEditOnInput,this);
            this.divBase.form.edtBoxQty.addEventHandler("onchanged",this.divBase_edtBoxQty_onchanged,this);
            this.divBase.form.chkSelectLot.addEventHandler("onchanged",this.chkSelectLot_onchanged,this);
            this.divBase.form.mskFrt.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.divBase.form.mskFrt.addEventHandler("oninput",this.fnEditOnInput,this);
            this.grd_Main.addEventHandler("onheadclick",this.grdOnHeadClick,this);
            this.grd_Main.addEventHandler("onexpandup",this.grd_Main_onexpandup,this);
            this.grd_Main.addEventHandler("oncellposchanged",this.grd_Main_oncellposchanged,this);
            this.edtCustMgmtDlcmCd.addEventHandler("onkeydown",this.fnEditOnKeyDown,this);
            this.edtCustMgmtDlcmCd.addEventHandler("oninput",this.fnEditOnInput,this);
            this.staMenuFullPath.addEventHandler("onclick",this.sta09_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };

        this.loadIncludeScript("RCPT_DLVY_0001.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
