if(!nexacro.ICAPI)
{
	nexacro.ICAPI = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent)
	{
		nexacro.Plugin.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);
	}
	var _pICAPI = nexacro._createPrototype(nexacro.Plugin, nexacro.ICAPI);
	nexacro.ICAPI.prototype = _pICAPI;
	_pICAPI.classid = "{0F87B7E9-45DF-4DD0-8F97-9E36543BBDC7}";

	_pICAPI.ICOpenServer = function (app_name, app_password, app_ipaddr, ip_addrone, ip_addrtwo, nPort, nRecvTimeout, nRetryConnect)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICOpenServer", app_name, app_password, app_ipaddr, ip_addrone, ip_addrtwo, nPort, nRecvTimeout, nRetryConnect);
		}
	}
	_pICAPI.ICOpenServerEx = function (app_name, app_password, app_ipaddr, ip_addrone, ip_addrtwo, nPort, nRecvTimeout, nRetryConnect)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICOpenServerEx", app_name, app_password, app_ipaddr, ip_addrone, ip_addrtwo, nPort, nRecvTimeout, nRetryConnect);
		}
	}
	_pICAPI.ICOpenServerCv = function (app_name, app_password, app_ipaddr, ip_addrone, ip_addrtwo, nPort, nRecvTimeout, nRetryConnect, charSet)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICOpenServerCv", app_name, app_password, app_ipaddr, ip_addrone, ip_addrtwo, nPort, nRecvTimeout, nRetryConnect, charSet);
		}
	}
	_pICAPI.ICOpenServerExCv = function (app_name, app_password, app_ipaddr, ip_addrone, ip_addrtwo, nPort, nRecvTimeout, nRetryConnect, charSet)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICOpenServerExCv", app_name, app_password, app_ipaddr, ip_addrone, ip_addrtwo, nPort, nRecvTimeout, nRetryConnect, charSet);
		}
	}
	_pICAPI.ICCloseServer = function (nHandle)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICCloseServer", nHandle);
		}
	}
	_pICAPI.ICRegisterAddress = function (nHandle, this_dn, tenant_name, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICRegisterAddress", nHandle, this_dn, tenant_name, extension);
		}
	}
	_pICAPI.ICUnregisterAddress = function (nHandle, this_dn, tenant_name, monitorid, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICUnregisterAddress", nHandle, this_dn, tenant_name, monitorid, extension);
		}
	}
	_pICAPI.ICGroupRegisterAddress = function (nHandle, start_dn, end_dn, tenant_name, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGroupRegisterAddress", nHandle, start_dn, end_dn, tenant_name, extension);
		}
	}
	_pICAPI.ICGroupUnregisterAddress = function (nHandle, start_dn, end_dn, tenant_name, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGroupUnregisterAddress", nHandle, start_dn, end_dn, tenant_name, extension);
		}
	}
	_pICAPI.ICAnswerCall = function (nHandle, this_dn, connection_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICAnswerCall", nHandle, this_dn, connection_id, extension);
		}
	}
	_pICAPI.ICClearCall = function (nHandle, this_dn, connection_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICClearCall", nHandle, this_dn, connection_id, extension);
		}
	}
	_pICAPI.ICMakeCall = function (nHandle, this_dn, dest_dn, ob_calling_dn, skill_level, priority, relation_agent_dn, relation_agent_id, relation_method, route_method, route_skill_id, route_group_id, ucid, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMakeCall", nHandle, this_dn, dest_dn, ob_calling_dn, skill_level, priority, relation_agent_dn, relation_agent_id, relation_method, route_method, route_skill_id, route_group_id, ucid, extension);
		}
	}
	_pICAPI.ICHoldCall = function (nHandle, this_dn, connection_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICHoldCall", nHandle, this_dn, connection_id, extension);
		}
	}
	_pICAPI.ICRetrieveCall = function (nHandle, this_dn, connection_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICRetrieveCall", nHandle, this_dn, connection_id, extension);
		}
	}
	_pICAPI.ICGroupPickup = function (nHandle, this_dn, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGroupPickup", nHandle, this_dn, extension);
		}
	}
	_pICAPI.ICQueuePickup = function (nHandle, this_dn, call_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICQueuePickup", nHandle, this_dn, call_id, extension);
		}
	}
	_pICAPI.ICJoinCall = function (nHandle, this_dn, dest_dn, party_type, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICJoinCall", nHandle, this_dn, dest_dn, party_type, extension);
		}
	}
	_pICAPI.ICSinglestepTransfer = function (nHandle, this_dn, connection_id, dest_dn, ob_calling_dn, skill_level, priority, relation_agent_dn, relation_agent_id, relation_method, route_method, route_skill_id, route_group_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSinglestepTransfer", nHandle, this_dn, connection_id, dest_dn, ob_calling_dn, skill_level, priority, relation_agent_dn, relation_agent_id, relation_method, route_method, route_skill_id, route_group_id, extension);
		}
	}
	_pICAPI.ICMuteTransfer = function (nHandle, this_dn, connection_id, dest_dn, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMuteTransfer", nHandle, this_dn, connection_id, dest_dn, extension);
		}
	}
	_pICAPI.ICSinglestepConference = function (nHandle, this_dn, connection_id, dest_dn, ob_calling_dn, party_type, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSinglestepConference", nHandle, this_dn, connection_id, dest_dn, ob_calling_dn, party_type, extension);
		}
	}
	_pICAPI.ICConference = function (nHandle, this_dn, connection_id, dest_dn, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICConference", nHandle, this_dn, connection_id, dest_dn, extension);
		}
	}
	_pICAPI.ICDeflectCall = function (nHandle, this_dn, conn_id, dest_dn, ob_calling_dn, skill_level, priority, relation_agent_dn, relation_agent_id, relation_method, route_method, route_skill_id, route_group_id, media_opt, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICDeflectCall", nHandle, this_dn, conn_id, dest_dn, ob_calling_dn, skill_level, priority, relation_agent_dn, relation_agent_id, relation_method, route_method, route_skill_id, route_group_id, media_opt, extension);
		}
	}
	_pICAPI.ICAgentLogin = function (nHandle, agent_dn, agent_id, agent_password, tenant_name, agent_state, agent_state_sub, extension, passwdType)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICAgentLogin", nHandle, agent_dn, agent_id, agent_password, tenant_name, agent_state, agent_state_sub, extension, passwdType);
		}
	}
	_pICAPI.ICAgentLogout = function (nHandle, agent_dn, agent_id, tenant_name, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICAgentLogout", nHandle, agent_dn, agent_id, tenant_name, extension);
		}
	}
	_pICAPI.ICSetAFTCallState = function (nHandle, agent_id, tenant_name, agent_state, agent_statesub)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSetAFTCallState", nHandle, agent_id, tenant_name, agent_state, agent_statesub);
		}
	}
	_pICAPI.ICSetAgentState = function (nHandle, agent_id, tenant_name, agent_state, agent_statesub, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSetAgentState", nHandle, agent_id, tenant_name, agent_state, agent_statesub, extension);
		}
	}
	_pICAPI.ICForceSetAgentState = function (nHandle, agent_id, tenant_name, agent_state, agent_statesub, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICForceSetAgentState", nHandle, agent_id, tenant_name, agent_state, agent_statesub, extension);
		}
	}
	_pICAPI.ICSetSkillEnable = function (nHandle, agent_id, skill_id, IsEnable)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSetSkillEnable", nHandle, agent_id, skill_id, IsEnable);
		}
	}
	_pICAPI.ICAgentReport = function (nHandle, agent_id, tenant_name)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICAgentReport", nHandle, agent_id, tenant_name);
		}
	}
	_pICAPI.ICGetGroupList = function (nHandle, tenant_name, private_data)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetGroupList", nHandle, tenant_name, private_data);
		}
	}
	_pICAPI.ICGetQueueList = function (nHandle, tenant_name, private_data)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetQueueList", nHandle, tenant_name, private_data);
		}
	}
	_pICAPI.ICGetAgentList = function (nHandle, tenant_name, groupIDSet, queueDnSet, private_data, agent_state)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetAgentList", nHandle, tenant_name, groupIDSet, queueDnSet, private_data, agent_state);
		}
	}
	_pICAPI.ICGetAgentinfo = function (nHandle, tenant_name, dest_agent_id, private_data)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetAgentinfo", nHandle, tenant_name, dest_agent_id, private_data);
		}
	}
	_pICAPI.ICGetRouteable = function (nHandle, tenant_name, dest_agent_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetRouteable", nHandle, tenant_name, dest_agent_id, extension);
		}
	}
	_pICAPI.ICGetAgentState = function (nHandle, tenant_name, dest_agent_id, private_data, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetAgentState", nHandle, tenant_name, dest_agent_id, private_data, extension);
		}
	}
	_pICAPI.ICGetQueueTraffic = function (nHandle, tenant_name, queue_dn, skill_id, private_data, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetQueueTraffic", nHandle, tenant_name, queue_dn, skill_id, private_data, extension);
		}
	}
	_pICAPI.ICGetStateSubcode = function (nHandle, tenant_name, agent_state)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetStateSubcode", nHandle, tenant_name, agent_state);
		}
	}
	_pICAPI.ICGetAgentSkillList = function (nHandle, tenant_name, dest_agent_id)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetAgentSkillList", nHandle, tenant_name, dest_agent_id);
		}
	}
	_pICAPI.ICGetConnection = function (nHandle, dest_dn, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetConnection", nHandle, dest_dn, extension);
		}
	}
	_pICAPI.ICGetAgentQueueList = function (nHandle, tenant_name, dest_agent_id)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetAgentQueueList", nHandle, tenant_name, dest_agent_id);
		}
	}
	_pICAPI.ICGetQueueOrder = function (nHandle, tenant_name, queue_dn, skill_id, priority_bound, private_data, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetQueueOrder", nHandle, tenant_name, queue_dn, skill_id, priority_bound, private_data, extension);
		}
	}
	_pICAPI.ICUpdateUserdata = function (nHandle, agent_dn, tenant_name, conn_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICUpdateUserdata", nHandle, agent_dn, tenant_name, conn_id, extension);
		}
	}
	_pICAPI.ICDeleteKeyUserdata = function (nHandle, agent_dn, tenant_name, conn_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICDeleteKeyUserdata", nHandle, agent_dn, tenant_name, conn_id, extension);
		}
	}
	_pICAPI.ICDeleteAllUserdata = function (nHandle, agent_dn, tenant_name, conn_id)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICDeleteAllUserdata", nHandle, agent_dn, tenant_name, conn_id);
		}
	}
	_pICAPI.ICSendUserEvent = function (nHandle, agent_dn, tenant_name, dest_agent_dn, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSendUserEvent", nHandle, agent_dn, tenant_name, dest_agent_dn, extension);
		}
	}
	_pICAPI.ICGetUserdata = function (nHandle, tenant_name, this_dn, conn_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetUserdata", nHandle, tenant_name, this_dn, conn_id, extension);
		}
	}
	_pICAPI.ICGetConnectionState = function (nHandle, this_dn, conn_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetConnectionState", nHandle, this_dn, conn_id, extension);
		}
	}
	_pICAPI.ICSetAniUserdata = function (nHandle, agent_dn, ani_number, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSetAniUserdata", nHandle, agent_dn, ani_number, extension);
		}
	}
	_pICAPI.ICMediaAttach = function (nHandle, this_dn, call_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMediaAttach", nHandle, this_dn, call_id, extension);
		}
	}
	_pICAPI.ICMediaDeattach = function (nHandle, this_dn, call_id, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMediaDeattach", nHandle, this_dn, call_id, extension);
		}
	}
	_pICAPI.ICMediaPlay = function (nHandle, this_dn, call_id, media_id, duration, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMediaPlay", nHandle, this_dn, call_id, media_id, duration, extension);
		}
	}
	_pICAPI.ICMediaCollect = function (nHandle, this_dn, call_id, media_id, duration, term_digits, min_digits, max_digits, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMediaCollect", nHandle, this_dn, call_id, media_id, duration, term_digits, min_digits, max_digits, extension);
		}
	}
	_pICAPI.ICEXCreateExtension = function ()
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXCreateExtension");
		}
	}
	_pICAPI.ICEXDeleteExtension = function (nExtHandle)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXDeleteExtension", nExtHandle);
		}
	}
	_pICAPI.ICEXAddRecord = function (nExtHandle, strKey, strValue)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXAddRecord", nExtHandle, strKey, strValue);
		}
	}
	_pICAPI.ICEXDeleteRecord = function (nExtHandle, strKey)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXDeleteRecord", nExtHandle, strKey);
		}
	}
	_pICAPI.ICEXDeleteValue = function (nExtHandle, strKey, strValue)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXDeleteValue", nExtHandle, strKey, strValue);
		}
	}
	_pICAPI.ICEXModifyKey = function (nExtHandle, strTargetKey, strKey)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXModifyKey", nExtHandle, strTargetKey, strKey);
		}
	}
	_pICAPI.ICEXModifyValue = function (nExtHandle, strKey, strTargetValue, strValue)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXModifyValue", nExtHandle, strKey, strTargetValue, strValue);
		}
	}
	_pICAPI.ICEXGetRecordCount = function (nExtHandle)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXGetRecordCount", nExtHandle);
		}
	}
	_pICAPI.ICEXGetFieldCount = function (nExtHandle, nRecord)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXGetFieldCount", nExtHandle, nRecord);
		}
	}
	_pICAPI.ICEXMakeString = function (nExtHandle, strOutExtension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXMakeString", nExtHandle, strOutExtension);
		}
	}
	_pICAPI.ICEXStringParser = function (nExtHandle, strExtension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXStringParser", nExtHandle, strExtension);
		}
	}
	_pICAPI.ICEXGetKey = function (nExtHandle, nRecord)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXGetKey", nExtHandle, nRecord);
		}
	}
	_pICAPI.ICEXGetFieldValue = function (nExtHandle, nRecord, nField)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXGetFieldValue", nExtHandle, nRecord, nField);
		}
	}
	_pICAPI.ICEXDupExtension = function (nExtHandle)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXDupExtension", nExtHandle);
		}
	}
	_pICAPI.ICEXGetExtensionCount = function ()
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXGetExtensionCount");
		}
	}
	_pICAPI.ICEXGetExtensionHandle = function (nPos)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXGetExtensionHandle", nPos);
		}
	}
	_pICAPI.ICEXGetFieldValueForKey = function (nExtHandle, strKey, nField)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICEXGetFieldValueForKey", nExtHandle, strKey, nField);
		}
	}
	_pICAPI.SetEventDelayTime = function (nMillisecond)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("SetEventDelayTime", nMillisecond);
		}
	}
	_pICAPI.GetEventDelayTime = function ()
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("GetEventDelayTime");
		}
	}
	_pICAPI.WriteLog = function (logString)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("WriteLog", logString);
		}
	}
	_pICAPI.ICGetVersion = function ()
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGetVersion");
		}
	}
	_pICAPI.RunElevatedWeb = function (szUrl)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("RunElevatedWeb", szUrl);
		}
	}
	_pICAPI.GetNeedElevate = function ()
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("GetNeedElevate");
		}
	}
	_pICAPI.ICSetLogPath = function (nLogLevel, log_path, log_name)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSetLogPath", nLogLevel, log_path, log_name);
		}
	}
	_pICAPI.InitAPI = function ()
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("InitAPI");
		}
	}
	_pICAPI.ICSetUcidUserdata = function (nHandle, agent_dn, ucid, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICSetUcidUserdata", nHandle, agent_dn, ucid, extension);
		}
	}
	_pICAPI.ICGroupReport = function (nHandle, tenant_name, groupIDSet)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICGroupReport", nHandle, tenant_name, groupIDSet);
		}
	}
	_pICAPI.ICQueueReport = function (nHandle, tenant_name, queueDnSet)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICQueueReport", nHandle, tenant_name, queueDnSet);
		}
	}
	_pICAPI.ICTenantReport = function (nHandle, tenant_name)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICTenantReport", nHandle, tenant_name);
		}
	}
	_pICAPI.ICDnisReport = function (nHandle, dnisSet, private_data)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICDnisReport", nHandle, dnisSet, private_data);
		}
	}
	_pICAPI.ICCreateVirtualMedia = function (nHandle, queue_dn, ani_number, dnis, ucid, media_type, option, timeout, auto_delete, distribute, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICCreateVirtualMedia", nHandle, queue_dn, ani_number, dnis, ucid, media_type, option, timeout, auto_delete, distribute, extension);
		}
	}
	_pICAPI.ICDeleteVirtualMedia = function (nHandle, ucid, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICDeleteVirtualMedia", nHandle, ucid, extension);
		}
	}
	_pICAPI.ICMcsConsultCall = function (nHandle, this_dn, dest_dn, ob_calling_dn, connection_id)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMcsConsultCall", nHandle, this_dn, dest_dn, ob_calling_dn, connection_id);
		}
	}
	_pICAPI.ICMcsReconnectCall = function (nHandle, this_dn, connection_id)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMcsReconnectCall", nHandle, this_dn, connection_id);
		}
	}
	_pICAPI.ICMcsTransferCall = function (nHandle, this_dn, connection_id)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMcsTransferCall", nHandle, this_dn, connection_id);
		}
	}
	_pICAPI.ICMcsOnestepTransferCall = function (nHandle, this_dn, dest_dn, ob_calling_dn, connection_id)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMcsOnestepTransferCall", nHandle, this_dn, dest_dn, ob_calling_dn, connection_id);
		}
	}
	_pICAPI.ICMcsReroute = function (nHandle, this_dn, dest_dn, ob_calling_dn, connection_id, virtual_media_id, fail_route_dn, extension)
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICMcsReroute", nHandle, this_dn, dest_dn, ob_calling_dn, connection_id, virtual_media_id, fail_route_dn, extension);
		}
	}
	_pICAPI.ICThreadAllStop = function ()
	{
		var _obj_elem = this._obj_elem;
		if (_obj_elem)
		{
			return _obj_elem.callMethod("ICThreadAllStop");
		}
	}




	delete _pICAPI;
};