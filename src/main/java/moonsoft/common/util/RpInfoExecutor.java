package moonsoft.common.util;

import static moonsoft.common.util.StringUtil.getCalendar;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.channels.CompletionHandler;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import moonsoft.common.controller.NexacroController;

//import static moonsoft.common.util.HttpClientUtil.rpRequest;

public class RpInfoExecutor {
	
	private static Logger logger = LoggerFactory.getLogger(NexacroController.class);

	// 결과값을 담을 List
	private static List<Map<String,Object>> list;
	
	private static ExecutorService executorService;
	
	private static long startTime;// = getCalendar().getTimeInMillis();

	private static Map<String,Object> param;
	
	private static final int count = 1;
	private static final int threadPoolCount = 2;

	public RpInfoExecutor(){
		// CPU 코어의 수만큼 최대 스레드를 사용하는 스레드 풀을 생성
		//executorService = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());
		executorService = Executors.newFixedThreadPool(threadPoolCount);
		list = new ArrayList<Map<String,Object>>();
		
		param = new HashMap<String,Object>();
		/*
		Arrays.asList("CoordType","startPoint","endPoint","midPoint1","midPoint2","midPoint3","searchOpt","dirCheck","exWayOpt","onlyRightPass","resultType")
			  .stream()
			  .forEach( key -> {
				  param.put(key, arg.get(key));
			  });
		*/
		
		param.put("CoordType", "WGS84GEO,WGS84GEO");
		param.put("startPoint", "127.123456,37.123456");
		param.put("endPoint", "126.98569025,37.20525466");
		param.put("midPoint1", null);
		param.put("midPoint2", "");
		param.put("midPoint3", "");
		param.put("searchOpt", 0);
		param.put("dirCheck", 10);
		param.put("exWayOpt", 1);
		param.put("onlyRightPass", 0);
		param.put("resultType", "json");
		
		startTime = getCalendar().getTimeInMillis();
		
	}

	/**
	 * main method start!!
	 * @param args
	 */
	@SuppressWarnings("static-access")
	public static void main(String[] args) {
		// 작업생성과 처리요청 현재 return값이 존재하므로 Callable 사용을 한다.
		// 1. Runnable => 리턴값이 없이 실행만 하는 구현클래스
		// 2. Callable => 리턴값이 존재하는 구현클래스
		// 병렬처리 기본 틀은 완성 되었으니... 시작 종료점을 잡고 ㄱㄱㄱㄱㄱ 파라메터를 넘길때 잘 보고.... 종료시점을 Calendar 로 계산해서
		// 시간이 얼마나 걸리는지 확인해보고.... 향후 200건정도씩 테스트..
		RpInfoExecutor rpInfoExecutor = new RpInfoExecutor();
		
		for( int idx = 0; idx < count; idx++ ) {
			rpInfoExecutor.doWork(idx);
		}
	}
	
	/**
	 * Runnable Run
	 * @param index
	 */
	public static void doWork( final int index ) {
		
		// Runnable.run()
		Runnable runnable = new Runnable() {
			
			@Override
			public void run() {
				try{
					final Map<String,Object> json = new HashMap<String,Object>();
					json.put("index",index);
					json.put("startTime",getCalendar().getTimeInMillis());
					/*
					try {
						JSONObject result = rpRequest(param);
						json.put("result", result);
						callback.completed(index, json);
					} catch (URISyntaxException | IOException e) {
						e.printStackTrace();
					}
					*/
				} catch( NumberFormatException numberFormatException ) {
					callback.failed(numberFormatException, null);
				}
			}
		};
		executorService.submit(runnable);
	}
	
	/**
	 * CallBack Handler
	 */
	private static CompletionHandler<Integer, Map<String,Object>> callback = new CompletionHandler<Integer, Map<String,Object>>() {

		@Override
		public void failed(Throwable exc, Map<String,Object> attachment) {
			logger.debug("failed() 실패!! : " + exc.getMessage() + "   number : " + attachment);
			exc.printStackTrace();
		}
		
		@Override
		public void completed(Integer index, Map<String,Object> attachment) {

			long start = (long) attachment.get("startTime");
			long end   = getCalendar().getTimeInMillis();
			long turm  = end - start;
			long turmTime = (turm / 1000);
			String turmEnd = turmTime + "초";
			
			attachment.put("endTime", getCalendar().getTimeInMillis());
			attachment.put("turmEnd", turmEnd);
			attachment.put("turmTime", turmTime);
	
			list.add(attachment);
			//System.out.println(list.size());
			
			// 특정 프로세스 작업이 완료시 종료시키다.
			if( list.size() == count ) {
				// 종료
				finish();
			} else {
				//System.out.println("아직 종료 아니야.. : " + list.size() + "  attachment : " + attachment);
			}

		}
	};
	
	/**
	 * shutdown() => 남아있는 작업을 마무리하고 스레드 풀을 종료한다.
	 * executorService.shutdown();
	 * shutdownNow() => 남아있는 작업과는 상관없이 강제종료
	 * executorService.shutdown();
	 */
	private static void finish() {

		executorService.shutdown();
		// 종료 시점
		long endTime = getCalendar().getTimeInMillis();
		long doneTime = endTime - startTime;
		logger.debug("작업완료시간 : " + doneTime + "  경과시간 (" + doneTime/1000 + "초)");
	}
}
