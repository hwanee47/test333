package moonsoft.rabbitmq.producer.com;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import moonsoft.common.util.PropertiesUtil;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.MessageProperties;

public class ProducerCom {
	
	private static Logger log = LoggerFactory.getLogger(ProducerCom.class);
	
	public static void commProducerRun(String queueName, JSONObject param) {
		Connection connection = null;
		Channel channel = null;
	    
		try {
			ConnectionFactory factory = new ConnectionFactory();
			factory.setHost(PropertiesUtil.getPropValue("RABBITMQ_SERVER_IP").toString());
			factory.setUsername(PropertiesUtil.getPropValue("RABBITMQ_USERNAME").toString());
			factory.setPassword(PropertiesUtil.getPropValue("RABBITMQ_PASSWORD").toString());
			connection = factory.newConnection();
			channel = connection.createChannel();
			
		    channel.queueDeclare(queueName, true, false, false, null);
			    
		    channel.basicPublish("", queueName, MessageProperties.PERSISTENT_TEXT_PLAIN, param.toJSONString().getBytes("UTF-8"));
		    log.debug(" [x] Sent '" + param.toJSONString() + "'");
		} catch (Exception e) {
			log.error("ProducerCom Exception Error", e);
		} finally {
			try {
				channel.close();
				connection.close();
			} catch (IOException e) {
				log.error("ProducerCom Close IOException Error", e);
			} catch (TimeoutException e) {
				log.error("ProducerCom Close TimeoutException Error", e);
			}
		}
	}
}
