package moonsoft.wsdl.vo;

public class CargoInfoVo {
	
	private String soId;					// 주문번호
	private String rtbSoId;					// 주문번호(주문SEQ)
	private String shprId;					// 고객코드
	private String shprCustId;				// 고객의 거래처코드
	private String cntrtNo;					// 계약번호
	private String depZip;					// 상차지 우편번호
	private String depAddr;					// 상차지 주소상세
	private String arrZip;					// 하차지 우편번호
	private String arrAddr;					// 하차지 주소상세
	private String reqVhclKndCd;			// 요청차종
	private String reqVhclKndNm;			// 요청차종명
	private String reqVhclTonCd;			// 요청톤급
	private String reqVhclTonNm;			// 요청톤급명
	private String rateClsCd;				// 요율구분
	private String rateClsNm;				// 요율구분명
	private String itemNm;					// 품목명
	private String rateAmt;					// 단가
	private String amt;						// 금액
	private String reqQty;					// 수량
	private String totWt;					// 중량
	private String depReqDate;				// 상차일시
	private String depReqTime;				// 상차시간
	private String arrReqDate;				// 하차일시
	private String arrReqTime;				// 하차시간
	private String remk;					// 비고
	
	private String reqDate;					// 요청일자
	private String lspId;					// 협력사 코드
	
	private String vhclNo;					// 차량번호
	private String drvNm;					// 운전원
	private String drvTel;					// 운전원 연락처
	private String vhclTonCd;				// 톤급
	private String vhclKndCd;				// 차종
	private String lspNm;					// 운송업체명
	private String cancelYn;				// 취소여부

	private String userId;					// 사용자명
	private String fromDate;				// 조회-시작일시
	private String toDate;					// 조회-종료일시
	
	private String rtnValue;				// return 값
	private String errorMsg;				// 에러메세지
	
	public String getSoId() {
		return soId;
	}
	public void setSoId(String soId) {
		this.soId = soId;
	}
	public String getRtbSoId() {
		return rtbSoId;
	}
	public void setRtbSoId(String rtbSoId) {
		this.rtbSoId = rtbSoId;
	}
	public String getShprId() {
		return shprId;
	}
	public void setShprId(String shprId) {
		this.shprId = shprId;
	}
	public String getShprCustId() {
		return shprCustId;
	}
	public void setShprCustId(String shprCustId) {
		this.shprCustId = shprCustId;
	}
	public String getCntrtNo() {
		return cntrtNo;
	}
	public void setCntrtNo(String cntrtNo) {
		this.cntrtNo = cntrtNo;
	}
	public String getDepZip() {
		return depZip;
	}
	public void setDepZip(String depZip) {
		this.depZip = depZip;
	}
	public String getDepAddr() {
		return depAddr;
	}
	public void setDepAddr(String depAddr) {
		this.depAddr = depAddr;
	}
	public String getArrZip() {
		return arrZip;
	}
	public void setArrZip(String arrZip) {
		this.arrZip = arrZip;
	}
	public String getArrAddr() {
		return arrAddr;
	}
	public void setArrAddr(String arrAddr) {
		this.arrAddr = arrAddr;
	}
	public String getReqVhclKndCd() {
		return reqVhclKndCd;
	}
	public void setReqVhclKndCd(String reqVhclKndCd) {
		this.reqVhclKndCd = reqVhclKndCd;
	}
	public String getReqVhclKndNm() {
		return reqVhclKndNm;
	}
	public void setReqVhclKndNm(String reqVhclKndNm) {
		this.reqVhclKndNm = reqVhclKndNm;
	}
	public String getReqVhclTonCd() {
		return reqVhclTonCd;
	}
	public void setReqVhclTonCd(String reqVhclTonCd) {
		this.reqVhclTonCd = reqVhclTonCd;
	}
	public String getReqVhclTonNm() {
		return reqVhclTonNm;
	}
	public void setReqVhclTonNm(String reqVhclTonNm) {
		this.reqVhclTonNm = reqVhclTonNm;
	}
	public String getRateClsCd() {
		return rateClsCd;
	}
	public void setRateClsCd(String rateClsCd) {
		this.rateClsCd = rateClsCd;
	}
	public String getRateClsNm() {
		return rateClsNm;
	}
	public void setRateClsNm(String rateClsNm) {
		this.rateClsNm = rateClsNm;
	}
	public String getItemNm() {
		return itemNm;
	}
	public void setItemNm(String itemNm) {
		this.itemNm = itemNm;
	}
	public String getRateAmt() {
		return rateAmt;
	}
	public void setRateAmt(String rateAmt) {
		this.rateAmt = rateAmt;
	}
	public String getAmt() {
		return amt;
	}
	public void setAmt(String amt) {
		this.amt = amt;
	}
	public String getReqQty() {
		return reqQty;
	}
	public void setReqQty(String reqQty) {
		this.reqQty = reqQty;
	}
	public String getTotWt() {
		return totWt;
	}
	public void setTotWt(String totWt) {
		this.totWt = totWt;
	}
	public String getDepReqDate() {
		return depReqDate;
	}
	public void setDepReqDate(String depReqDate) {
		this.depReqDate = depReqDate;
	}
	public String getDepReqTime() {
		return depReqTime;
	}
	public void setDepReqTime(String depReqTime) {
		this.depReqTime = depReqTime;
	}
	public String getArrReqDate() {
		return arrReqDate;
	}
	public void setArrReqDate(String arrReqDate) {
		this.arrReqDate = arrReqDate;
	}
	public String getArrReqTime() {
		return arrReqTime;
	}
	public void setArrReqTime(String arrReqTime) {
		this.arrReqTime = arrReqTime;
	}
	public String getRemk() {
		return remk;
	}
	public void setRemk(String remk) {
		this.remk = remk;
	}
	public String getReqDate() {
		return reqDate;
	}
	public void setReqDate(String reqDate) {
		this.reqDate = reqDate;
	}
	public String getLspId() {
		return lspId;
	}
	public void setLspId(String lspId) {
		this.lspId = lspId;
	}
	public String getVhclNo() {
		return vhclNo;
	}
	public void setVhclNo(String vhclNo) {
		this.vhclNo = vhclNo;
	}
	public String getDrvNm() {
		return drvNm;
	}
	public void setDrvNm(String drvNm) {
		this.drvNm = drvNm;
	}
	public String getDrvTel() {
		return drvTel;
	}
	public void setDrvTel(String drvTel) {
		this.drvTel = drvTel;
	}
	public String getVhclTonCd() {
		return vhclTonCd;
	}
	public void setVhclTonCd(String vhclTonCd) {
		this.vhclTonCd = vhclTonCd;
	}
	public String getVhclKndCd() {
		return vhclKndCd;
	}
	public void setVhclKndCd(String vhclKndCd) {
		this.vhclKndCd = vhclKndCd;
	}
	public String getLspNm() {
		return lspNm;
	}
	public void setLspNm(String lspNm) {
		this.lspNm = lspNm;
	}
	public String getCancelYn() {
		return cancelYn;
	}
	public void setCancelYn(String cancelYn) {
		this.cancelYn = cancelYn;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	public String getRtnValue() {
		return rtnValue;
	}
	public void setRtnValue(String rtnValue) {
		this.rtnValue = rtnValue;
	}
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
}
