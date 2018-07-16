'use strict'

var bd = require("./ConnectionPromise").BD;
var _Pool = new bd();

module.exports.db_SelectAll = () => {
    
	var query = "select `ID_ORDERBOOK`, `ID_CORRETORA_MOEDA`, `NM_ACAO`, `CM_PRECO`, `CM_QUANT`, `DT_ORDERBOOK` from CM_ORDERBOOK";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectId = (dados) => {
    
	var query = "select `ID_ORDERBOOK`, `ID_CORRETORA_MOEDA`, `NM_ACAO`, `CM_PRECO`, `CM_QUANT`, `DT_ORDERBOOK` from CM_ORDERBOOK where ID_ORDERBOOK = ? ";
	return _Pool.Select(query, dados);
}

module.exports.db_Insert = (dados) => {
    
	var query = "INSERT INTO CM_ORDERBOOK ( `ID_CORRETORA_MOEDA`, `NM_ACAO`, `CM_PRECO`, `CM_QUANT` ) VALUES ( ?, ?, ?, ? ) ";
	return _Pool.Insert(query, dados);
}

module.exports.db_InsertLote = (dados) => {
    
	var query = "INSERT INTO CM_ORDERBOOK ( `ID_CORRETORA_MOEDA`, `NM_ACAO`, `CM_PRECO`, `CM_QUANT` ) VALUES ? ";
	return _Pool.InsertLote(query, dados);
}

module.exports.db_Update = (dados) => {
    
	var query = "UPDATE CM_ORDERBOOK SET `ID_CORRETORA_MOEDA` = ?, `NM_ACAO` = ?, `CM_PRECO` = ?, `CM_QUANT` = ?, `DT_ORDERBOOK` = ? WHERE `ID_ORDERBOOK` = ? ";
	return _Pool.Update(query, dados);
}
