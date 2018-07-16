
require('dotenv-safe').config({
    allowEmptyValues: true
  });
  
  var _api = require("./MercadoBitcoin/index");

setInterval(() => 
// _api.consultaTicker((callback) => console.log(callback))
//_api.consultaOrderbook((callback) => console.log(callback))
_api.consultaOrderbook((callback) => console.log(callback))
, process.env.CRAWLER_INTERVAL
)