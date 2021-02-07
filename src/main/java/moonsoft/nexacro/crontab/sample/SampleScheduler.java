/**************************************************************************************
 * 1.프로그램명  	: SampleScheduler
 * 2.파일명		: SampleScheduler.java
 * 3.개발자		: OIT
 * 4.개발일자		: 2018.06.28 
 * 5.버젼			: 0.1
 * 6.설명			: cron Job Schedule을 하기 위한 Component Class
 * 				: base package => context-scheduler.xml
 * 				: * * * * * * => 초 분 시 일 월 년 - 초단위까지 지정할 수 있다.
 * 7.이력		
*************************************************************************************/

package moonsoft.nexacro.crontab.sample;

import java.util.Date;
import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import moonsoft.nexacro.service.rcptpay.rcptpayMgmtService;

@Component
public class SampleScheduler {

	final private Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	rcptpayMgmtService rcptpayMgmtService;
	
	// * 을 입력할경우 모두(항상)으로 설정됨.
	// cron="초 분 시 일 월 요일"
	@Scheduled(cron="59 59 * * * *") // 매일 59분 59초에 도는 스케즆러
	//@Scheduled(cron="0 0/10 * * * *") // 매일 10분마다 도는 스케쥴러
	public void sampleJson01() throws Exception {
		logger.info("= sampleJson01 = " + ( new Date(System.currentTimeMillis()) ));
		System.out.println("스케쥴링 테스트!!!!!!!!!!!!!");
		HashMap<String, Object> map = new HashMap<String, Object>();
		
		map.put("gv_userId", "SYSTEM");
		
		rcptpayMgmtService.saveRcptpayByHour_Scheduler(map);
	}
}
