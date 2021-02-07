package moonsoft.wsdl.vo;

import java.util.List;

public class ResultVo {
	private String rtnValue;
	private String errorMsg;
	private List<CargoInfoVo> cargoInfoVo;
	
	public String getRtnValue() {
		return rtnValue;
	}
	public void setRtnValue(String rtnValue) {
		this.rtnValue = rtnValue;
	}
	public String getErrorMsg() {
		return errorMsg;
	}
	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	public List<CargoInfoVo> getCargoInfoVo() {
		return cargoInfoVo;
	}
	public void setCargoInfoVo(List<CargoInfoVo> cargoInfoVo) {
		this.cargoInfoVo = cargoInfoVo;
	}
}
