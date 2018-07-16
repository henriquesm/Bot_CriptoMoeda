'use strict'

var _rest = require("../MercadoBitcoin/orderbook");

var _bd = require("../DB/orderbook");

module.exports.Carregar =  (moeda,id_corretora) => {

    return new Promise((resolve, reject) => {
      _rest.consulta(moeda)
        .then((_json) => {
            var orderbook = [];

            _json.asks.forEach(function(elem) {
                orderbook.push([ id_corretora,  "asks", elem[0], elem[1]]);
            });
            _json.bids.forEach(function(elem) {
                orderbook.push([ id_corretora,  "bids", elem[0], elem[1]]);                 
            });

            if(orderbook)
            {
                _bd.db_InsertLote(orderbook)
                //.then((row) => arrayD.push(row))
                .catch((err) => reject({Erro_Ordebook: err}));      
            }
            resolve(orderbook);
        })
        .catch((err) => reject({Erro_Ordebook: err}));
    });
}
