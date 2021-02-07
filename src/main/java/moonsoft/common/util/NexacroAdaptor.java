package moonsoft.common.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro17.xapi.data.PlatformData;

public class NexacroAdaptor {

	public Parameters convertData(PlatformData paramData , HttpServletRequest request , HttpServletResponse response) throws Exception {
	    
	    Parameters param = new Parameters();
	    param.setPlatformData(paramData);
	    param.setDatasetList(NexacroConvertUtil.setDsGlobalVal(paramData.getDataSetList(), paramData.getVariableList()));
	    param.setVariableList(paramData.getVariableList());
	    param.setService(paramData.getVariableList().getString("service"));
	    param.setServiceBeanName(paramData.getVariableList().getString("serviceBeanName"));
	    param.setMethodName(paramData.getVariableList().getString("method"));
	    param.setRequest(request);
	    param.setResponse(response);
	    
		return param;
	}
}
