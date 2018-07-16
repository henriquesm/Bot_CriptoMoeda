'use strict'

var MercadoBitcoin = require("./base.js").baseRest;
var _Pool = new MercadoBitcoin();

module.exports.consulta = (moeda) => {
	return _Pool.conectar('orderbook', moeda);
}