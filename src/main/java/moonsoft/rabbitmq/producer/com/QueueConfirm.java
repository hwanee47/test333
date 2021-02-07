package moonsoft.rabbitmq.producer.com;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import moonsoft.common.util.PropertiesUtil;
import moonsoft.rabbitmq.constants.RabbitConstants;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;

public class QueueConfirm {
	
	/**
	 * Logger<br>
	 * <br>
	 * @author	OhInTaek
	 * @since	2018.06.28
	 */
	private static Logger logger = LoggerFactory.getLogger(QueueConfirm.class);
	
	public static void createQueue(String userId) {
		Connection connection = null;
		Channel channel = null;
		
		try {
			ConnectionFactory factory = new ConnectionFactory();
			factory.setHost(PropertiesUtil.getPropValue("RABBITMQ_SERVER_IP").toString());
		    factory.setUsername(PropertiesUtil.getPropValue("RABBITMQ_USERNAME").toString());
		    factory.setPassword(PropertiesUtil.getPropValue("RABBITMQ_PASSWORD").toString());
		    connection = factory.newConnection();
		    channel = connection.createChannel();
		    
		    //WebPush, Messenger Exchange 생성.
		    channel.exchangeDeclare(userId + "_" + RabbitConstants.EXCHANGE_NAME_MESSENGER, "fanout", true);
		    channel.exchangeDeclare(userId + "_" + RabbitConstants.EXCHANGE_NAME_WEBPUSH, "fanout", true);

		} catch (Exception e){
			logger.error("Create Queue Faile => " + e);
		} finally {
			try {
				channel.close();
				connection.close();
			} catch (IOException e) {
				logger.error("QueueConfirm Close IOException Error", e);
			} catch (TimeoutException e) {
				logger.error("QueueConfirm Close TimeoutException Error", e);
			}
		}
	}
}
