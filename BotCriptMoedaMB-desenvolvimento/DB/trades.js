'use strict'

//var _Pool = require("./ConnectionPromise");

var bd = require("./ConnectionPromise").BD;
var _Pool = new bd();

module.exports.db_SelectAll = () => {
    
	var query = "select `ID_TRADE`, `CM_DATE`, `ID_CORRETORA_MOEDA`, `CM_PRICE`, `CM_AMOUNT`, `CM_TID`, `CM_TYPE`, `DT_TRADE` from CM_TRADE";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectId = (dados) => {
    
	var query = "select `ID_TRADE`, `CM_DATE`, `ID_CORRETORA_MOEDA`, `CM_PRICE`, `CM_AMOUNT`, `CM_TID`, `CM_TYPE`, `DT_TRADE` from CM_TRADE where ID_TRADE = ? ";
	return _Pool.Select(query, dados);
}

module.exports.db_Insert = (dados) => {
    
	var query = "INSERT INTO CM_TRADE ( `CM_DATE`, `ID_CORRETORA_MOEDA`, `CM_PRICE`, `CM_AMOUNT`, `CM_TID`, `CM_TYPE` ) VALUES ( ?, ?, ?, ? ,?, ? ) ";
	return _Pool.Insert(query, dados);
}

module.exports.db_Update = (dados,callback) => {
    
	var query = "UPDATE CM_TRADE SET CM_DATE` = ?, `ID_CORRETORA_MOEDA` = ?, `CM_PRICE` = ?, `CM_AMOUNT` = ?, `CM_TID` = ?, `CM_TYPE` = ?, `DT_TRADE` = ? WHERE 'ID_TRADE' = ? ";
	return _Pool.Update(query, dados);
}

