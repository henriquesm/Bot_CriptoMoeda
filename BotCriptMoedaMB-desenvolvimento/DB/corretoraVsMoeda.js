'use strict'

var bd = require("./ConnectionPromise").BD;
var _Pool = new bd();


module.exports.db_SelectAll = () => {
    
	var query = "select ID_CORRETORA_MOEDA`, `ID_CORRETORA`, `ID_MOEDA`, `FL_ATIVO` from CM_CORRETORA_MOEDA";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectAllAtive = ()  => {
    
	var query = "select ID_CORRETORA_MOEDA`, `ID_CORRETORA`, `ID_MOEDA`, `FL_ATIVO` from CM_CORRETORA_MOEDA where `FL_ATIVO` = 1";
	return _Pool.SelectAll(query);
}

module.exports.db_SelectId = (dados) => {
    
	var query = "select ID_CORRETORA_MOEDA`, `ID_CORRETORA`, `ID_MOEDA`, `FL_ATIVO` from CM_CORRETORA_MOEDA where ID_CORRETORA_MOEDA = ? ";
	return _Pool.Select(query, dados);
}

module.exports.db_SelectMoedaIdCorretora = (corretora) => {
    
    var dados = [
        corretora.ID_CORRETORA
       ];
	var query = "SELECT `CM_CORRETORA_MOEDA`.`ID_CORRETORA_MOEDA`, `CM_CORRETORA_MOEDA`.`ID_CORRETORA`, `CM_CORRETORA_MOEDA`.`ID_MOEDA`, `CM_MOEDA`.`DS_MOEDA`, `CM_MOEDA`.`SG_MOEDA`, `CM_MOEDA`.`FL_ATIVO`AS MOEDA_FL_ATIVO FROM CriptoMoeda.`CM_CORRETORA_MOEDA` inner join CriptoMoeda.`CM_MOEDA` on CM_CORRETORA_MOEDA.ID_MOEDA = CM_MOEDA.ID_MOEDA where ID_CORRETORA = ? ";
	return _Pool.Select(query, dados);
}

module.exports.db_Insert = (dados) => {
    
	var query = "INSERT INTO CM_CORRETORA_MOEDA ( `ID_CORRETORA`, `ID_MOEDA`, `FL_ATIVO` ) VALUES ( ?, ?, ? ) ";
	return _Pool.Insert(query, dados);
}

module.exports.db_Update = (dados) => {
    
	var query = "UPDATE CM_CORRETORA_MOEDA SET  `ID_CORRETORA` = ?, `ID_MOEDA` = ?, `FL_ATIVO` = ? WHERE 'ID_CORRETORA_MOEDA' = ? ";
	return _Pool.Update(query, dados);
}