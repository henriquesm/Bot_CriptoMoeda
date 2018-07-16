'use strict'

var _rest = require("../MercadoBitcoin/trades");

var _bd = require("../DB/trades");

module.exports.Carregar  = (moeda,id_corretora) => {

    return new Promise((resolve, reject) => {
        _rest.consulta(moeda)
        .then((_json) => {
            if(_json.length > 0)
            {
                _json.forEach(function(element) {
                    var _trade = [element.date, id_corretora,  element.price, element.amount, element.tid, element.type];
                    _bd.db_Insert(_trade)
                    .then((dados) => resolve({ticker:[dados.insertId, _trade]}))
                    .catch((err) => reject({Erro_trades: err})); 
                });                   
            } 
        })
        .catch((err) => reject({Erro_trades: err})); 
    });
}