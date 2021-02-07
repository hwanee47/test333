package moonsoft.rabbitmq.producer.rp;

import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.TimeoutException;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import moonsoft.common.util.PropertiesUtil;
import moonsoft.common.util.StringUtil;
import moonsoft.rabbitmq.constants.RabbitConstants;

import com.rabbitmq.client.Envelope;
import com.rabbitmq.client.AMQP;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DefaultConsumer;

public class Producer {
	
	private static Logger log = LoggerFactory.getLogger(Producer.class);
	
	private Connection connection;
	private Channel channel;
	private String replyQueueName;
	
	public Producer() throws Exception {
	    ConnectionFactory factory = new ConnectionFactory();
	    factory.setHost(PropertiesUtil.getPropValue("RABBITMQ_SERVER_IP").toString());
	    factory.setUsername(PropertiesUtil.getPropValue("RABBITMQ_USERNAME").toString());
	    factory.setPassword(PropertiesUtil.getPropValue("RABBITMQ_PASSWORD").toString());
	    factory.setVirtualHost("/");
	    connection = factory.newConnection();
	    channel = connection.createChannel();
	    replyQueueName = channel.queueDeclare().getQueue();
	}
	
	@SuppressWarnings("unchecked")
	public static JSONObject rpProducerRun(JSONObject param) throws Exception {
		JSONObject rtnJson = new JSONObject();
	
		Producer producer = null;
		String response = null;
		try {
			producer = new Producer();
			response = producer.call(param.toJSONString());
			
			//RP 엔진 실행 결과 리턴.(JSONObejct로 결과 반환)
			log.debug("RP RESPONSE INFO => " + response);
			rtnJson = StringUtil.stringToJson(response);
			
		} catch (IOException | InterruptedException e) {
			log.error("RP Producer Run Exception =>", e);
			rtnJson.put("ErrorCode", -1);
			rtnJson.put("ErrorMesg", e.getMessage());
		} finally {
			if (producer != null) {
				try {
					producer.close();
				} catch (IOException _ignore) {
					log.error("RP Producer close IOException =>", _ignore);
					rtnJson.put("ErrorCode", -1);
					rtnJson.put("ErrorMesg", _ignore.getMessage());	
				}
			}
		}
	    
		return rtnJson;
	}
	
	public String call(String message) throws IOException, InterruptedException {
		final String corrId = UUID.randomUUID().toString();
		AMQP.BasicProperties props = new AMQP.BasicProperties.Builder().correlationId(corrId).replyTo(replyQueueName).build();
		channel.basicPublish("", RabbitConstants.QUEUE_NAME_RP, props, message.getBytes("UTF-8"));
		final BlockingQueue<String> response = new ArrayBlockingQueue<String>(1);
		
		channel.basicConsume(replyQueueName, true, new DefaultConsumer(channel) {
			@Override
			public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
				if (properties.getCorrelationId().equals(corrId)) {
					response.offer(new String(body, "UTF-8"));
				}
			}
		});
		
		return response.take();
	}

	public void close() throws IOException, TimeoutException {
		channel.close();
	    connection.close();
	}
}
