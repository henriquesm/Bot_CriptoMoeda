'use strict'

  var _ticker = require("./ticker.js");
  var _orderbook = require("./orderbook.js");
  var _trades = require("./trades.js");

  function _consultaTicker (callback) {

	_ticker.consulta('BTC', function(err,data){
        
        callback(err,data);    
	});
  }

  function _consultaOrderbook (callback) {

	_orderbook.consulta('BTC', function(err,data){
        
        callback(err,data);    
	});
  }

  function _consultaTrades (callback) {

	_trades.consulta('BTC', function(err,data){
        
        callback(err,data);    
	});
  }

  module.exports.consultaTicker 	= _consultaTicker;
  module.exports.consultaOrderbook 	= _consultaOrderbook;
  module.exports.consultaTrades 	= _consultaTrades;