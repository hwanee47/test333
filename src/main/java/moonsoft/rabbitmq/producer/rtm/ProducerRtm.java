package moonsoft.rabbitmq.producer.rtm;


import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import moonsoft.common.util.PropertiesUtil;
import moonsoft.rabbitmq.constants.RabbitConstants;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.MessageProperties;

public class ProducerRtm {
	
	private static Logger log = LoggerFactory.getLogger(ProducerRtm.class);
	
	public static void rtmProducerRun(JSONObject param) {
		Connection connection = null;
		Channel channel = null;
		
		try {
			ConnectionFactory factory = new ConnectionFactory();
			factory.setHost(PropertiesUtil.getPropValue("RABBITMQ_SERVER_IP").toString());
		    factory.setUsername(PropertiesUtil.getPropValue("RABBITMQ_USERNAME").toString());
		    factory.setPassword(PropertiesUtil.getPropValue("RABBITMQ_PASSWORD").toString());
		    
		    connection = factory.newConnection();
		    channel = connection.createChannel();
		    
		    channel.queueDeclare(RabbitConstants.QUEUE_NAME_RTM, true, false, false, null);
		    
		    channel.basicPublish("", RabbitConstants.QUEUE_NAME_RTM, MessageProperties.PERSISTENT_TEXT_PLAIN, param.toJSONString().getBytes("UTF-8"));
		    log.debug(" [x] Sent '" + param.toJSONString() + "'");
		} catch (Exception e) {
			log.error("ProducerRtm Exception Error", e);
		} finally {
			try {
				channel.close();
				connection.close();
			} catch (IOException e) {
				log.error("ProducerRtm Close IOException Error", e);
			} catch (TimeoutException e) {
				log.error("ProducerRtm Close TimeoutException Error", e);
			}
		}    
	}
}
