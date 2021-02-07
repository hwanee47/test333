package moonsoft.wsdl.ws.cargo;

import javax.jws.WebService;

import moonsoft.wsdl.vo.CargoInfoVo;
import moonsoft.wsdl.vo.ResultVo;

@WebService
public interface LspOrderSendService {
	// 협력사에 할당된 주문정보를 전달한다
	public ResultVo sendLspOrder(CargoInfoVo cargoInfo);
}
