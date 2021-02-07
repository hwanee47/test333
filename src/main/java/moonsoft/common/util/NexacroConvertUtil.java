package moonsoft.common.util;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.DataTypes;
import com.nexacro17.xapi.data.VariableList;

import static moonsoft.common.util.StringUtil.isNull;

public class NexacroConvertUtil {

	@SuppressWarnings("rawtypes")
	public static DataSet makeDataSet(List<Object> listObj) {
		// dataSet Column 생성.
		DataSet ds = new DataSet("output");
		ds = addColumnFromList(ds, listObj);

		int nRow = 0;
		for (Object obj : listObj) {
			nRow = ds.newRow();
			if (obj instanceof Map) {
				Map map = (Map) obj;
				Set key = map.keySet();
				for (Iterator iterator = key.iterator(); iterator.hasNext();) {
					String keyName   = (String) iterator.next();
					Object valueName = (Object) map.get(keyName);

					//ds.set(nRow, keyName, valueName);
					ds.set(nRow, keyName, valueName);
				}
			}
		}

		return ds;
	}
	
	@SuppressWarnings({ "rawtypes"})
	public static DataSet makeDsFromMap(Map<String, Object> param) {
		// dataSet Column 생성.
		DataSet ds = createDataSet(param, "output");

		if(param == null || param.size() == 0) {
			return ds;
		}
			
		int nRow = 0;
		nRow = ds.newRow();
		Set key = param.keySet();
		for (Iterator iterator = key.iterator(); iterator.hasNext();) {
			String keyName   = (String) iterator.next();
			Object valueName = (Object) param.get(keyName);

			ds.set(nRow, keyName, valueName);
		}

		return ds;
	}

	@SuppressWarnings("rawtypes")
	public static Map makeMap(DataSet paramDs, int row) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		String columnName = "";
		if( paramDs != null ) {
			for (int i = 0; i < paramDs.getColumnCount(); i++) {
				columnName = paramDs.getColumn(i).getName();
				resultMap.put(columnName, paramDs.getString(row, columnName));
			}
			// 데이터셋 상태값 추가
			resultMap.put("CRUD", paramDs.getRowTypeName(row));
		}
		return resultMap;
	}

	public static DataSet addColumnDS(DataSet paramDs, String name) {

		if (!paramDs.containsColumn(name)) {
			paramDs.addColumn(name, DataTypes.STRING, 100);
		}

		return paramDs;
	}

	@SuppressWarnings("rawtypes")
	public static DataSet addColumnFromList(DataSet paramDs,
			List<Object> paramList) {
		if (paramList != null && paramList.size() > 0) {
			Set key = ((Map) paramList.get(0)).keySet();
			for (Iterator iterator = key.iterator(); iterator.hasNext();) {
				String keyName = (String) iterator.next();
				addColumnDS(paramDs, keyName);
			}
		}

		return paramDs;
	}
	
	/**
	 * dataSet to List<Map<String, Object>> convert
	 * @param ds
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static List<Map<String, Object>> convertDataSetToList( DataSet ds ) {
		final List<Map<String, Object>> result = new ArrayList<Map<String, Object>>();
		if( ds != null ) {
			for( int idx = 0; idx < ds.getRowCount(); idx++ ) {
				result.add(makeMap(ds, idx));
			}
		}
		return result;
	}
	
	
	
	

	/**
	 * JsonObject를 DataSet 형태로 변경하여 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @throws URISyntaxException 
	 * @throws IOException 
	 * @since	2018.07.06
	 */
	public static final DataSet convertJsonObjectToDataSet( final JSONObject json , final String dataSetName) {
		// Json -> Map casting
		final Map<String,Object> map = (Map<String,Object>)json;
		// 요청 DataSet 이름과 Map 객체의 key로 생성한 DataSet을 생성
		final DataSet			 ds  = createDataSet(map, dataSetName);
		// Json 객체의 데이터를 DataSet에 할당한다.
		final int				 row = ds.newRow();
		// 데이터셋으로set
		mapToDataSetColumn(ds, row, map);
		// 갱신된 데이터셋 return
		return ds;
	}
	
	/**
	 * JsonObject를 DataSet 형태로 변경하여 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	inParam		NexacroPlatform parameters
	 * @author	OhInTaek
	 * @throws URISyntaxException 
	 * @throws IOException 
	 * @since	2018.07.06
	 */
	public static final DataSet convertJsonObjectToDataSet( final JSONArray json , final String dataSetName) {
		// Json -> Map casting
		final List<Map<String,Object>> list = (List<Map<String,Object>>)json;
		// 요청 DataSet 이름과 Map 객체의 key로 생성한 DataSet을 생성
		final DataSet			 ds  = createDataSet(list.get(0), dataSetName);
		// Json 객체의 데이터를 DataSet에 할당한다.
		list.stream().forEach( map -> {
			final int row = ds.newRow();
			// 데이터셋으로set
			mapToDataSetColumn(ds, row, map);
		});
		// 갱신된 데이터셋 return
		return ds;
	}


	/**
	 * DataSet.setColumn<br>
	 * <br>
	 * <br>
	 * @param map
	 * @author	OhInTaek
	 * @param	dataSetName
	 * @since	2018.07.06
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static void mapToDataSetColumn( final DataSet ds , final int row , final Map<String,Object> map) {

		final Set key = map.keySet();
		for (Iterator iterator = key.iterator(); iterator.hasNext();) {
			final String keyName   = (String) iterator.next();
			final Object valueName = (Object) map.get(keyName);
			// At most one statement is allowed per line, but 2 statements were found on this line
			// Missing curly brace
			// by SonarQube 2018.10.16
			if( ds.containsColumn(keyName) ) {
				ds.set(row, keyName, valueName);
			}
		}
	}
	
	/**
	 * Map객체의 정보를 기준으로 데이터셋의 기본틀을 만든다.<br>
	 * 할당 정보 : 데이터셋 이름 , 데이터셋 컬럼 정보 , 컬럼 size는 기본생성시 100<br>
	 * <br>
	 * <br>
	 * @param map
	 * @author	OhInTaek
	 * @param	dataSetName
	 * @since	2018.07.06
	 * @return
	 */
	@SuppressWarnings("rawtypes")
	public static DataSet createDataSet( final Map<String,Object> map , final String dataSetName ) {
		
		final Set key = map.keySet();
		final DataSet dsResult = new DataSet(dataSetName);
		
		for (Iterator iterator = key.iterator(); iterator.hasNext();) {
			final String keyName   = (String) iterator.next();
			final Object valueName = (Object) map.get(keyName);
			dsResult.addColumn(keyName,columnTypeInfo(valueName));
		}

		return dsResult;
	}

	/**
	 * Object 정보를 기준으로 DataSet type을 반환한다.<br>
	 * <br>
	 * <br>
	 * @param map
	 * @author	OhInTaek
	 * @param	dataSetName
	 * @since	2018.07.06
	 * @return
	 */
	public static final int columnTypeInfo( Object obj ) {
		
		final String objTypeName = (obj == null ? "" : obj.getClass().getTypeName());
		
		// Use String.indexOf(char) when checking for the index of a single character; it executes faster.
		// indexOf로 찾는것이 빠르지만 조건상 마지막 index를 찾아야하므로 skip
		// by SonarQube 2018.10.17
		if( isNull(objTypeName) ) {
			return DataTypes.STRING;
		}
		// sonarq 2018.11.01 String.indexOf(char) is faster than String.indexOf(String). 
		// Use String.indexOf(char) when checking for the index of a single character; it executes faster. "." -> '.'
		final int    tmpIndex    = objTypeName.lastIndexOf('.')+1;
		if( tmpIndex == -1 ) {
			return DataTypes.STRING;
		}
		
		final int    startIndex  = tmpIndex+1;
		final String type		 = objTypeName.substring(startIndex).toUpperCase();

		switch ( type ) {
			case "INTEGER"	:	return DataTypes.INT;
			case "FLOAT"	:	return DataTypes.FLOAT;
			case "BOOLEAN"	:	return DataTypes.BOOLEAN;
			case "LONG"		:	return DataTypes.LONG;
			case "DOUBLE"	:	return DataTypes.BIG_DECIMAL;
			default			:	return DataTypes.STRING;
		}
	}
	
	public static DataSetList setDsGlobalVal(DataSetList dsList, VariableList varList) {
		DataSet dsTemp = new DataSet("dsTemp");
		
		for(int i=0; i<dsList.size(); i++) {
			DataSet ds = dsList.get(i);
			
			dsTemp.copyFrom(ds);
			ds.clearData();
			
			for(int j=0; j<varList.size(); j++) {
				String valNm = varList.get(j).getName();
				if(valNm.indexOf("gv_") == 0 ) {
					String value = varList.get(j).getString();
					
					if(ds.getColumn(valNm) != null) {
						ds.removeColumn(valNm);
					}
					ds.addConstantColumn(valNm, DataTypes.STRING, value);
				}
			}
			
			ds.copyDataFrom(dsTemp);
		}
		
		return dsList;
	}
	
	/**
	 * JsonArray to VariableList 변환.<br>
	 * <br>
	 * @param	int day
	 * @author	SeunmgMin
	 * @since	2018.06.28
	 */
	@SuppressWarnings("rawtypes")
	public static VariableList getJsonArrToVarList(VariableList varList, JSONArray arr, JSONObject sess) {
		
		//파라미터 정보 설정.
		for(int i=0; i<arr.size(); i++) {
			JSONObject json = (JSONObject) arr.get(i);
			
			Set key = json.keySet();
			
			for (Iterator iterator = key.iterator(); iterator.hasNext();) {
				 String keyName   = (String) iterator.next();
				 Object valueName = json.get(keyName);
				 
				 varList.add(keyName, valueName);
			}
		}
		
		//세션 정보 설정.
		if(sess != null) {
			Set key = sess.keySet();
			
			for (Iterator iterator = key.iterator(); iterator.hasNext();) {
				 String keyName   = (String) iterator.next();
				 Object valueName = sess.get(keyName);
				 
				 varList.add(keyName, valueName);
			}
		}
		
		return varList;
	}
	
	/**
	 * JsonArray to DatasetList 변환.<br>
	 * <br>
	 * @param	int day
	 * @author	SeunmgMin
	 * @since	2018.06.28
	 */
	public static DataSetList getJsonArrToDsList(DataSetList dsList, JSONArray arr, String dsName) {
		DataSet ds = NexacroConvertUtil.convertJsonObjectToDataSet(arr, dsName);
		dsList.add(ds);
		
		return dsList;
	}
	
	/**
	 * String to JsonArry 변환<br>
	 * <br>
	 * @param	int day
	 * @author	SeunmgMin
	 * @throws ParseException 
	 * @since	2018.06.28
	 */
	public static JSONArray getStringToJsonArr(String strParam) throws ParseException {
		JSONParser jsonParser = new JSONParser();
		JSONArray jsonArr = (JSONArray) jsonParser.parse(strParam);
		
		return jsonArr;
	}
	
	
	/**
	 * DataSet를  JsonObject형태로 변경하여 반환한다.<br>
	 * <br>
	 * <br>
	 * @param	DataSet	ds - JSONObject으로 변환할 Dataset
	 * @param	int	idx	- JSONObject으로 변환할 Dataset에 row
	 * @author	Seungmin
	 * @since	2018.07.06
	 */
	@SuppressWarnings("unchecked")
	public static final JSONObject convertDsToJsonObject(DataSet ds , int idx) {
		JSONObject json = new JSONObject();
		
		if(ds == null || ds.getRowCount() == 0) {
			return json;
		} else {
			if(ds.getRowCount() - 1 < idx) {
				return json;
			} else {
				for(int i=0; i<ds.getColumnCount(); i++) {
					json.put(ds.getColumn(i).getName(), ds.getString(idx, ds.getColumn(i).getName()));
				}
			}
		}
		
		return json;
	}

}
