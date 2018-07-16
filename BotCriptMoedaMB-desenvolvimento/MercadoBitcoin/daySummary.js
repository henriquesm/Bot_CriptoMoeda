'use strict'

var MercadoBitcoin = require("./base.js").baseRest;
var _Pool = new MercadoBitcoin();

module.exports.consulta = (moeda, dia, mes, ano) => {
return _Pool.conectarParametro('day-summary',moeda , ano + '/' + mes + '/' + dia + '/');
}

