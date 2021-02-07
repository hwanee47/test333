package moonsoft.rabbitmq.constants;

public class RabbitConstants {

	//Rabbitmq 서버 정보
	//public static final String RABBITMQ_SERVER_IP 			= "116.121.26.145";
	//public static final String RABBITMQ_USERNAME 			= "kfr";
	//public static final String RABBITMQ_PASSWORD 			= "kfr";

	//업무별 QUEUE NAME
	public static final String QUEUE_NAME_RP 				= "RP";
	public static final String QUEUE_NAME_RTM 				= "RTM";
	public static final String QUEUE_NAME_MESH 				= "MESH";
	public static final String QUEUE_NAME_MSEG 				= "MSEG";
	public static final String QUEUE_NAME_GPS_RP 			= "GPS_RP";
	
	//헤더 타입
	public static final String HEAD_TYPE_PUSH_RESULT		= "Push_Result";
	public static final String HEAD_TYPE_PUSH_DISPATCH 		= "Push_Dispatch";
	public static final String HEAD_TYPE_PUSH_DISPATCH_W 	= "Push_Dispatch_W";
	public static final String HEAD_TYPE_PUSH_RTM 			= "Push_Rtm";
	public static final String HEAD_TYPE_PUSH_TALK			= "Push_Talk";
	public static final String HEAD_TYPE_PUSH_TRANSIT		= "Push_Transit";
	public static final String HEAD_TYPE_PUSH_RETURN		= "Push_Return";
	public static final String HEAD_TYPE_PUSH_MESG			= "Push_Messenger";
	public static final String HEAD_TYPE_ERROR				= "Error";
	
	//GPS 관련 헤더 타입
	public static final String HEAD_TYPE_GPS_HIST 			= "GPS_HIST";
	public static final String HEAD_TYPE_GPS_ROAD 			= "Road";
	public static final String HEAD_TYPE_GPS_GUIDE 			= "Guide";
	
	//RTM 서비스 
	public static final String RTM_VEHICLE					= "VEHICLE"; 
	public static final String RTM_CANCEL					= "CANCEL";
	
	//exchange type
	public static final String EXCHANGE_NAME_WEBPUSH 		= "WebPush";
	public static final String EXCHANGE_NAME_MESSENGER		= "Messenger";
}
