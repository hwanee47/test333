package moonsoft.common.util;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro17.xapi.data.DataSet;
import com.nexacro17.xapi.data.DataSetList;
import com.nexacro17.xapi.data.PlatformData;
import com.nexacro17.xapi.data.Variable;
import com.nexacro17.xapi.data.VariableList;

public class Parameters {

	private PlatformData platformData;
	private DataSetList datasetList;
	private VariableList variableList;
	private DataSetList outDatasetList;
	private VariableList outVariableList;
	private String service;
	private String serviceBeanName;
	private String methodName;
	
	private HttpServletRequest request;
	private HttpServletResponse response;
	
	public Parameters() {
		this.platformData = new PlatformData();
		this.datasetList = new DataSetList();
		this.variableList = new VariableList();
		this.outDatasetList = new DataSetList();
		this.outVariableList = new VariableList();
	}

	@SuppressWarnings("unchecked")
	public Map<String, Object> getData(String dataSetName) {
		return NexacroConvertUtil.makeMap(getDatasetList().get(dataSetName),0);
	}

	public List<Map<String, Object>> getDataList(String dataSetName) {
		return NexacroConvertUtil.convertDataSetToList(getDatasetList().get(dataSetName));
	}
	
	public HttpServletRequest getRequest() {
		return request;
	}

	public void setRequest(HttpServletRequest request) {
		this.request = request;
	}

	public HttpServletResponse getResponse() {
		return response;
	}

	public void setResponse(HttpServletResponse response) {
		this.response = response;
	}
	
	public String getServiceBeanName() {
		return serviceBeanName;
	}
	public void setServiceBeanName(String serviceBeanName) {
		this.serviceBeanName = serviceBeanName;
	}
	
	public DataSetList getOutDatasetList() {
		return outDatasetList;
	}
	
	public void setOutDatasetList(String dsName, DataSet paramDs) {
		paramDs.setName(dsName);
		this.outDatasetList.add(paramDs);
	}
	
	public void setOutDatasetList(DataSetList outDatasetList) {
		this.outDatasetList = outDatasetList;
	}
	
	public VariableList getOutVariableList() {
		return outVariableList;
	}
	
	public void setOutVariableList(String valName, Variable paramVal) {
		paramVal.setName(valName);
		this.outVariableList.add(paramVal);
	}
	
	public void setOutVariableList(String valName, Object paramVal) {
		this.outVariableList.add(valName, paramVal);
	}
	
	public void setOutVariableList(VariableList outVariableList) {
		this.outVariableList = outVariableList;
	}
	
	public String getService() {
		return service;
	}
	
	public void setService(String service) {
		this.service = service;
	}
	
	public String getMethodName() {
		return methodName;
	}
	
	public void setMethodName(String methodName) {
		this.methodName = methodName;
	}
	
	public PlatformData getPlatformData() {
		return platformData;
	}
	
	public void setPlatformData(PlatformData platformData) {
		this.platformData = platformData;
	}
	
	public DataSetList getDatasetList() {
		return datasetList;
	}
	
	public void setDatasetList(DataSetList datasetList) {
		this.datasetList = datasetList;
	}
	
	public VariableList getVariableList() {
		return variableList;
	}
	
	public void setVariableList(VariableList variableList) {
		this.variableList = variableList;
	}
	
	public DataSet getDataSet(int idx) {
		return datasetList.get(idx);
	}
	
	public DataSet getDataSet(String name) {
		return datasetList.get(name);
	}
	
	public Variable getVariable(String name) {
		return this.variableList.get(name);
	}

	public Variable getVariable(int index) {
		return this.variableList.get(index);
	}

	
	/**
	 * Parameters에 포함된 VariableList를 Map으로 변환
	 * <br>
	 * @param varList
	 * @return
	 * @author	Jang. Jae-hyuk
	 * @since	2018. 9. 19.
	 */
	public Map<String, Object> getVariableMap() {
		Map<String, Object>	varMap		= new HashMap<String, Object>();
		//
		VariableList	varList		= this.getVariableList();
		Variable		var			= null;

		for(int i=0; i<varList.size(); i++) {
			var	= varList.get(i);
			varMap.put(var.getName(), var.getObject());
		}
		return varMap;
	}

	
	/**
	 * 사용자가 직접 세션에 접근하지 않고 호출로 세션정보를 취득한다.
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public String getUserId() throws UnsupportedEncodingException {
		return getSessionInfo(SessionConstants.SESSION_KEY_USER_ID);
	}

	private String getSessionInfo( String attrName ) throws UnsupportedEncodingException {
		return SessionUtil.getUserInfo(request,attrName);
	}

}
