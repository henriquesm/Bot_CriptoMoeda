'use strict'

var bd = require("./ConnectionPromise").BD;
var _Pool = new bd();

module.exports.db_SelectAll = () => {
    
	var query = "select `ID_TICKER`, `ID_CORRETORA_MOEDA`, `CM_HIGH`, `CM_LOW`, `CM_VOL`, `CM_LAST`, `CM_BUY`, `CM_SELL`, `CM_DATE`, `DT_TICKER` from CM_TICKER";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectId = (dados)  => {
    
	var query = "select `ID_TICKER`, `ID_CORRETORA_MOEDA`, `CM_HIGH`, `CM_LOW`, `CM_VOL`, `CM_LAST`, `CM_BUY`, `CM_SELL`, `CM_DATE`, `DT_TICKER` from CM_TICKER where ID_TICKER = ? ";
	return _Pool.Select(query, dados);
}

module.exports.db_Insert = (dados) => {
    
	var query = "INSERT INTO CM_TICKER ( `ID_CORRETORA_MOEDA`, `CM_HIGH`, `CM_LOW`, `CM_VOL`, `CM_LAST`, `CM_BUY`, `CM_SELL`, `CM_DATE` ) VALUES ( ?, ?, ? ,? ,? ,? ,? ,? ) ";
	return _Pool.Insert(query, dados);
}

module.exports.db_Update = (dados) => {
    
	var query = "UPDATE CM_TICKER SET `ID_CORRETORA_MOEDA` = ?, `CM_HIGH` = ?, `CM_LOW` = ?, `CM_VOL` = ?, `CM_LAST` = ?, `CM_BUY` = ?, `CM_SELL` = ?, `CM_DATE` = ?, `DT_TICKER` = ? WHERE 'ID_TICKER' = ? ";
	return _Pool.Update(query, dados);
}
