'use strict'

var bd = require("./ConnectionPromise").BD;
var _Pool = new bd();

module.exports.db_SelectAll = () => {
    
	var query = "select `ID_MOEDA`, `DS_MOEDA`, `SG_MOEDA`, `FL_ATIVO` from CM_MOEDA";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectAllAtive = () => {
    
	var query = "select `ID_MOEDA`, `DS_MOEDA`, `SG_MOEDA`, `FL_ATIVO` from CM_MOEDA where `FL_ATIVO` = 1";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectId = (dados) => {
    
	var query = "select `ID_MOEDA`, `DS_MOEDA`, `SG_MOEDA`, `FL_ATIVO` from CM_MOEDA where ID_MOEDA = ? ";
	return _Pool.Select(query, dados);
}

module.exports.db_Insert = (dados) => {
    
	var query = "INSERT INTO CM_MOEDA ( `DS_MOEDA`, `SG_MOEDA`, `FL_ATIVO` ) VALUES ( ?, ?, ? ) ";
	return _Pool.Insert(query, dados);
}

module.exports.db_Update = (dados) => {
    
	var query = "UPDATE CM_MOEDA SET `DS_MOEDA` = ?, `SG_MOEDA` = ?, `FL_ATIVO` = ? WHERE 'ID_MOEDA' = ? ";
	return _Pool.Update(query, dados);
}
