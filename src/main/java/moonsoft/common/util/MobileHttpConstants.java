package moonsoft.common.util;

public class MobileHttpConstants {

	public static final String SERVICE_INSERT_ORDER			= "orderMgmService.insertOrderInfo";
	public static final String SERVICE_CANCEL_ORDER         = "orderMgmService.cancelOrderInfo";        // 계약주문 취소 (배차의뢰상태일 경우만)
	public static final String SERVICE_UPDATE_EXTARAPINFO   = "orderMgmService.updateExtArApInfo";      // 추가하불 등록/수정
	public static final String SERVICE_DECIDE_VHCL			= "orderMgmService.decidedReqlVhclInfo";     // 배차확정
	public static final String SERVICE_CANCEL_DECIDE_VHCL	= "orderMgmService.cencelReqlVhclInfo";      // 배차확정 취소
    
	public static final String SERVICE_NAME					= "Service";
	public static final String SERVICE_SESSION				= "Session";
	public static final String SERVICE_DS					= "Dataset";
	public static final String SERVICE_DS_DEFAULT			= "dsDefault";
	public static final String SERVICE_PARAM				= "Param";
	
	public static final String CONTENT_TYPE 				= "application/json";
	public static final String ENCODING_UTF_8 				= "utf-8";
}
