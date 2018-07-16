'use strict'

var MercadoBitcoin = require("./base.js").baseRest;
var _Pool = new MercadoBitcoin();

module.exports.consulta = (moeda) => { 
 	return	_Pool.conectar('trades', moeda);
}

module.exports.consultaTid = (moeda, tid) => { 
	return	_Pool.conectarParametro('trades', moeda, '?tid=' + tid);
}

module.exports.consultaSince =  (moeda, since) => { 
	return	_Pool.conectarParametro('trades', moeda, '?since=' + since);
}

module.exports.consultaDtUnix = (moeda, dtUnix) => { 
	return _Pool.conectarParametro('trades', moeda, dtUnix + '/');
}

module.exports.consultaDtUnixIniFim =  (moeda, dtUnixIni, dtUnixFim) => { 
	return _Pool.conectarParametro('trades', moeda, dtUnixIni + '/' + dtUnixFim + '/');
}
