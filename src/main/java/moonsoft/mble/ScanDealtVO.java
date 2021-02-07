package moonsoft.mble;

import java.io.Serializable;

public class ScanDealtVO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -1574868405254234726L;

	private String SND_YMD;              //전송일자
    private String WORK_DV;              //작업구분
    private String WORK_SEQ;             //작업순번
    private String BRAN_CD;              //점소코드
    private String AGENCY_CD;            //취급점코드
    private String SND_HOUR;             //전송시간
    private String CRG_ST;               //화물상태
    private String CUD_DV_CD;            //CUD구분코드
    private String SCAN_YMD;             //스캔일자
    private String SCAN_HOUR;            //스캔시간
    private String WAYBILL_NO;           //운송장번호
    private String EMP_NO;               //사원번호
    private String FRT_DV;               //운임구분
    private String BASIC_FRT;            //기본운임
    private String COD_FRT;              //COD운임
    private String ETC_FRT;              //기타운임
    private String WH_FRT;               //총운임
    private String RTURN_YN;             //반송여부
    private String REL_WAYBILL_NO;       //관련운송장번호
    private String RTURN_RSN_CD;         //반송사유코드
    private String DELAY_KND;            //지연종류
    private String DELAY_RSN_CD;         //지연사유코드
    private String RSRV_NO;              //예약번호
    private String DST_CD;               //목적지코드
    private String ADD_SVR_CD;           //부가서비스코드
    private String PIDV_EXPCT_HOUR_CD;   //집배예정시간코드
    private String CNTER_BRAN_CD;        //상대점소코드
    private String TNR_NO;               //차량번호
    private String MAILBAG_WAYBILL_NO;   //행낭운송장번호
    private String TRUNK_NO;             //노선번호
    private String SEAL_NO;              //봉인번호
    private String LOAD_RAT;             //적재율
    private String BOX_TYPE_CD;          //박스타입코드
    private String ACPTR_NM;             //인수자명
    private String ACPTR_REL;            //인수자관계
    private String EQUIP_NO;             //장비번호
    private String SND_DV;               //전송구분
    private String SND_CD;               //전송자코드
    private String DEALT_YN;             //처리여부
    private String EQUIP_DV_CD;          //장비구분코드
    private String ACPTR_SIGN;           //인수자사인
    private String SOURCE;               //SOURCE
    private String REG_BRAN_CD;          //등록점소코드
    private String DETAIL_RSN;           //상세사유
	public String getSND_YMD() {
		return SND_YMD;
	}
	public void setSND_YMD(String sND_YMD) {
		SND_YMD = sND_YMD;
	}
	public String getWORK_DV() {
		return WORK_DV;
	}
	public void setWORK_DV(String wORK_DV) {
		WORK_DV = wORK_DV;
	}
	public String getWORK_SEQ() {
		return WORK_SEQ;
	}
	public void setWORK_SEQ(String wORK_SEQ) {
		WORK_SEQ = wORK_SEQ;
	}
	public String getBRAN_CD() {
		return BRAN_CD;
	}
	public void setBRAN_CD(String bRAN_CD) {
		BRAN_CD = bRAN_CD;
	}
	public String getAGENCY_CD() {
		return AGENCY_CD;
	}
	public void setAGENCY_CD(String aGENCY_CD) {
		AGENCY_CD = aGENCY_CD;
	}
	public String getSND_HOUR() {
		return SND_HOUR;
	}
	public void setSND_HOUR(String sND_HOUR) {
		SND_HOUR = sND_HOUR;
	}
	public String getCRG_ST() {
		return CRG_ST;
	}
	public void setCRG_ST(String cRG_ST) {
		CRG_ST = cRG_ST;
	}
	public String getCUD_DV_CD() {
		return CUD_DV_CD;
	}
	public void setCUD_DV_CD(String cUD_DV_CD) {
		CUD_DV_CD = cUD_DV_CD;
	}
	public String getSCAN_YMD() {
		return SCAN_YMD;
	}
	public void setSCAN_YMD(String sCAN_YMD) {
		SCAN_YMD = sCAN_YMD;
	}
	public String getSCAN_HOUR() {
		return SCAN_HOUR;
	}
	public void setSCAN_HOUR(String sCAN_HOUR) {
		SCAN_HOUR = sCAN_HOUR;
	}
	public String getWAYBILL_NO() {
		return WAYBILL_NO;
	}
	public void setWAYBILL_NO(String wAYBILL_NO) {
		WAYBILL_NO = wAYBILL_NO;
	}
	public String getEMP_NO() {
		return EMP_NO;
	}
	public void setEMP_NO(String eMP_NO) {
		EMP_NO = eMP_NO;
	}
	public String getFRT_DV() {
		return FRT_DV;
	}
	public void setFRT_DV(String fRT_DV) {
		FRT_DV = fRT_DV;
	}
	public String getBASIC_FRT() {
		return BASIC_FRT;
	}
	public void setBASIC_FRT(String bASIC_FRT) {
		BASIC_FRT = bASIC_FRT;
	}
	public String getCOD_FRT() {
		return COD_FRT;
	}
	public void setCOD_FRT(String cOD_FRT) {
		COD_FRT = cOD_FRT;
	}
	public String getETC_FRT() {
		return ETC_FRT;
	}
	public void setETC_FRT(String eTC_FRT) {
		ETC_FRT = eTC_FRT;
	}
	public String getWH_FRT() {
		return WH_FRT;
	}
	public void setWH_FRT(String wH_FRT) {
		WH_FRT = wH_FRT;
	}
	public String getRTURN_YN() {
		return RTURN_YN;
	}
	public void setRTURN_YN(String rTURN_YN) {
		RTURN_YN = rTURN_YN;
	}
	public String getREL_WAYBILL_NO() {
		return REL_WAYBILL_NO;
	}
	public void setREL_WAYBILL_NO(String rEL_WAYBILL_NO) {
		REL_WAYBILL_NO = rEL_WAYBILL_NO;
	}
	public String getRTURN_RSN_CD() {
		return RTURN_RSN_CD;
	}
	public void setRTURN_RSN_CD(String rTURN_RSN_CD) {
		RTURN_RSN_CD = rTURN_RSN_CD;
	}
	public String getDELAY_KND() {
		return DELAY_KND;
	}
	public void setDELAY_KND(String dELAY_KND) {
		DELAY_KND = dELAY_KND;
	}
	public String getDELAY_RSN_CD() {
		return DELAY_RSN_CD;
	}
	public void setDELAY_RSN_CD(String dELAY_RSN_CD) {
		DELAY_RSN_CD = dELAY_RSN_CD;
	}
	public String getRSRV_NO() {
		return RSRV_NO;
	}
	public void setRSRV_NO(String rSRV_NO) {
		RSRV_NO = rSRV_NO;
	}
	public String getDST_CD() {
		return DST_CD;
	}
	public void setDST_CD(String dST_CD) {
		DST_CD = dST_CD;
	}
	public String getADD_SVR_CD() {
		return ADD_SVR_CD;
	}
	public void setADD_SVR_CD(String aDD_SVR_CD) {
		ADD_SVR_CD = aDD_SVR_CD;
	}
	public String getPIDV_EXPCT_HOUR_CD() {
		return PIDV_EXPCT_HOUR_CD;
	}
	public void setPIDV_EXPCT_HOUR_CD(String pIDV_EXPCT_HOUR_CD) {
		PIDV_EXPCT_HOUR_CD = pIDV_EXPCT_HOUR_CD;
	}
	public String getCNTER_BRAN_CD() {
		return CNTER_BRAN_CD;
	}
	public void setCNTER_BRAN_CD(String cNTER_BRAN_CD) {
		CNTER_BRAN_CD = cNTER_BRAN_CD;
	}
	public String getTNR_NO() {
		return TNR_NO;
	}
	public void setTNR_NO(String tNR_NO) {
		TNR_NO = tNR_NO;
	}
	public String getMAILBAG_WAYBILL_NO() {
		return MAILBAG_WAYBILL_NO;
	}
	public void setMAILBAG_WAYBILL_NO(String mAILBAG_WAYBILL_NO) {
		MAILBAG_WAYBILL_NO = mAILBAG_WAYBILL_NO;
	}
	public String getTRUNK_NO() {
		return TRUNK_NO;
	}
	public void setTRUNK_NO(String tRUNK_NO) {
		TRUNK_NO = tRUNK_NO;
	}
	public String getSEAL_NO() {
		return SEAL_NO;
	}
	public void setSEAL_NO(String sEAL_NO) {
		SEAL_NO = sEAL_NO;
	}
	public String getLOAD_RAT() {
		return LOAD_RAT;
	}
	public void setLOAD_RAT(String lOAD_RAT) {
		LOAD_RAT = lOAD_RAT;
	}
	public String getBOX_TYPE_CD() {
		return BOX_TYPE_CD;
	}
	public void setBOX_TYPE_CD(String bOX_TYPE_CD) {
		BOX_TYPE_CD = bOX_TYPE_CD;
	}
	public String getACPTR_NM() {
		return ACPTR_NM;
	}
	public void setACPTR_NM(String aCPTR_NM) {
		ACPTR_NM = aCPTR_NM;
	}
	public String getACPTR_REL() {
		return ACPTR_REL;
	}
	public void setACPTR_REL(String aCPTR_REL) {
		ACPTR_REL = aCPTR_REL;
	}
	public String getEQUIP_NO() {
		return EQUIP_NO;
	}
	public void setEQUIP_NO(String eQUIP_NO) {
		EQUIP_NO = eQUIP_NO;
	}
	public String getSND_DV() {
		return SND_DV;
	}
	public void setSND_DV(String sND_DV) {
		SND_DV = sND_DV;
	}
	public String getSND_CD() {
		return SND_CD;
	}
	public void setSND_CD(String sND_CD) {
		SND_CD = sND_CD;
	}
	public String getDEALT_YN() {
		return DEALT_YN;
	}
	public void setDEALT_YN(String dEALT_YN) {
		DEALT_YN = dEALT_YN;
	}
	public String getEQUIP_DV_CD() {
		return EQUIP_DV_CD;
	}
	public void setEQUIP_DV_CD(String eQUIP_DV_CD) {
		EQUIP_DV_CD = eQUIP_DV_CD;
	}
	public String getACPTR_SIGN() {
		return ACPTR_SIGN;
	}
	public void setACPTR_SIGN(String aCPTR_SIGN) {
		ACPTR_SIGN = aCPTR_SIGN;
	}
	public String getSOURCE() {
		return SOURCE;
	}
	public void setSOURCE(String sOURCE) {
		SOURCE = sOURCE;
	}
	public String getREG_BRAN_CD() {
		return REG_BRAN_CD;
	}
	public void setREG_BRAN_CD(String rEG_BRAN_CD) {
		REG_BRAN_CD = rEG_BRAN_CD;
	}
	public String getDETAIL_RSN() {
		return DETAIL_RSN;
	}
	public void setDETAIL_RSN(String dETAIL_RSN) {
		DETAIL_RSN = dETAIL_RSN;
	}
    
    
}
