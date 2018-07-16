'use strict'

var bd = require("./ConnectionPromise").BD;
var _Pool = new bd();

module.exports.db_SelectAll = () => {
    
	var query = "select `ID_DAY_SUMMARY`, `ID_CORRETORA_MOEDA`, `CM_DATA`, `CM_OPENING`, `CM_CLOSING`, `CM_LOWEST`, `CM_HIGHEST`, `CM_VOLUME`, `CM_QUANTITY`, `CM_AMOUNT`,`CM_AVG_PRICE`, `DT_DAY_SUMMARY`    from CM_DAY_SUMMARY";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectId = (dados) => {
    
	var query = "select `ID_DAY_SUMMARY`, `ID_CORRETORA_MOEDA`, `CM_DATA`, `CM_OPENING`, `CM_CLOSING`, `CM_LOWEST`, `CM_HIGHEST`, `CM_VOLUME`, `CM_QUANTITY`, `CM_AMOUNT`,`CM_AVG_PRICE`, `DT_DAY_SUMMARY`    from CM_DAY_SUMMARY where ID_DAY_SUMMARY = ? ";
	return _Pool.Select(query, dados);
}

module.exports.db_SelectMaxDaySummary = (dados) => {
    
	var query = "select  * from `CriptoMoeda`.CM_DAY_SUMMARY WHERE ID_CORRETORA_MOEDA = ? ORDER BY CM_DATA DESC LIMIT 1 ";
	return	_Pool.Select(query, dados);
}

module.exports.db_Insert = (dados) => {
    
	var query = "INSERT INTO CM_DAY_SUMMARY ( `ID_CORRETORA_MOEDA`, `CM_DATA`, `CM_OPENING`, `CM_CLOSING`, `CM_LOWEST`, `CM_HIGHEST`, `CM_VOLUME`, `CM_QUANTITY`, `CM_AMOUNT`,`CM_AVG_PRICE`) VALUES ( ?, ?, ? ,? ,? ,? ,? ,? ,? ,? ) ";
	return _Pool.Insert(query, dados);
}

module.exports.db_Update = (dados) => {
    
	var query = "UPDATE CM_DAY_SUMMARY SET `ID_CORRETORA_MOEDA` = ?, `CM_DATA` = ?, `CM_OPENING` = ?, `CM_CLOSING` = ?, `CM_LOWEST` = ?, `CM_HIGHEST` = ?, `CM_VOLUME` = ?, `CM_QUANTITY` = ?, `CM_AMOUNT` = ?,`CM_AVG_PRICE` = ?    WHERE 'ID_DAY_SUMMARY' = ? ";
	return _Pool.Update(query, dados);
}


