`use strict`

var bd = require("./ConnectionPromise").BD;
var _Pool = new bd();

module.exports.db_SelectAll = () => {
    
	var query = "select `ID_CORRETORA`, `NM_CORRETORA`, `ST_CORRETORA`, `API_PB_CORRETORA`, `API_CL_CORRETORA`, `FL_ATIVO` from CM_CORRETORA";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectAllAtive = () => {
    
	var query = "select `ID_CORRETORA`, `NM_CORRETORA`, `ST_CORRETORA`, `API_PB_CORRETORA`, `API_CL_CORRETORA`, `FL_ATIVO` from CM_CORRETORA where `FL_ATIVO` = 1";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectId = (dados) => {
    
	var query = "select `ID_CORRETORA`, `NM_CORRETORA`, `ST_CORRETORA`, `API_PB_CORRETORA`, `API_CL_CORRETORA`, `FL_ATIVO` from CM_CORRETORA where ID_CORRETORA = ? ";
	return _Pool.Select(query, dados);
}

module.exports.db_Insert = (dados) => {
    
	var query = "INSERT INTO CM_CORRETORA ( `NM_CORRETORA`, `ST_CORRETORA`, `API_PB_CORRETORA`, `API_CL_CORRETORA`, `FL_ATIVO`) VALUES (? , ?, ?, ?, ? ) ";
	return _Pool.Insert(query, dados);
}

module.exports.db_Update = (dados) => {
    
	var query = "UPDATE CM_CORRETORA SET `NM_CORRETORA` = ?, `ST_CORRETORA` = ?, `API_PB_CORRETORA` = ?, `API_CL_CORRETORA` = ?, `FL_ATIVO` = ? WHERE `ID_CORRETORA` = ? ";
	return _Pool.Update(query, dados);
}