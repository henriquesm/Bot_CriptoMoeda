'use strict'

var _rest = require("../MercadoBitcoin/ticker");
var _bd = require("../DB/ticker");

module.exports.Carregar = (moeda,id_corretora) => {
   
    return new Promise((resolve, reject) => {

        _rest.consulta(moeda)
        .then((_json) => {
            var _trade = [id_corretora,  _json.ticker.high, _json.ticker.low, _json.ticker.vol, _json.ticker.last, _json.ticker.buy, _json.ticker.sell, _json.ticker.date];
                            _bd.db_Insert(_trade)
                            .then((dados) => resolve({ticker:[dados.insertId, _trade]}))
                            .catch((err) => reject({Erro_ticker: err}));
        })
        .catch((err) => reject({Erro_ticker: err}));
    });
}

