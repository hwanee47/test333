package moonsoft.mble.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.JsonArray;

public interface MobileService {

	/**
	 * 모바일 로그인
	 * @param map
	 * @return
	 */
	String getUserInfo(HashMap<String, String> map) throws Exception;
	
	
	/**
	 * 작업지시 리스트 조회
	 * @param paramMap 작업지시 조회 조건 파라미터
	 * @return 작업지시 리스트json string
	 * @throws Exception
	 */
	String selectWorkOrdList(HashMap<String,String> paramMap) throws Exception;

	/**
	 * 모바일 기초코드 조회
	 * @return 기초코드 리스트json string
	 * @throws Exception
	 */
	String selectCodeList() throws Exception;


	/**
	 * 전송데이터 insert(출발,배송완료,미배송)
	 * @param list 전송데이ㅓㅌ
	 * @return insert count
	 */
	String insertScanDelatList(List<HashMap<String, Object>> list) throws Exception;


	/**
	 * 화물추적정보 조회
	 * @param map
	 * @return
	 * @throws Exception
	 */
	String selectCrsStInfo(HashMap<String, String> map) throws Exception;;
}
