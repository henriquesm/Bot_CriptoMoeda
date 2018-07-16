'use strict'

var _corretora_Moeda = require("../DB/corretoraVsMoeda");
var _corretora = require("../DB/corretora");

function _SelectCorretoraMoedas(){

    return new Promise((resolve, reject) => {
        
            _corretora.db_SelectAll()
            .then((dataCorretora) => {
                if(dataCorretora.length > 0)
                {
                    dataCorretora.forEach(function(elem) {
                        _corretora_Moeda.db_SelectMoedaIdCorretora(elem)
                        .then((dataCorretoraMoeda) => {
                            var _corretora = {
                                ID_CORRETORA : elem.ID_CORRETORA,
                                NM_CORRETORA : elem.NM_CORRETORA,
                                ST_CORRETORA : elem.ST_CORRETORA,
                                API_PB_CORRETORA : elem.API_PB_CORRETORA,
                                API_CL_CORRETORA : elem.API_CL_CORRETORA,
                                FL_ATIVO : elem.FL_ATIVO,
                                MOEDAS : dataCorretoraMoeda
                            };
                        // _array.push(_corretora);
                        resolve( _corretora);
                        })
                        .catch((err) => {
                            reject({Erro_CorretoraVsMoeda: err});
                        });
                    });
                } 
            })
            .catch((err) => {
                reject({Erro_CorretoraVsMoeda: err});
            });
        
    });   
}


module.exports.db_SelectCorretoraMoedas = _SelectCorretoraMoedas;