'use strict'


require('dotenv-safe').config({
    allowEmptyValues: true
  });

//var dataBase = require("./DB/corretora");

var bll = require("./BLL/ticker");

//var mb = require("./MercadoBitcoin/orderbook");

bll.Carregar('BTC', 1,
        function(err,data){
            if (err) {
                // error handling code goes here
                console.log("ERROR : ",err);     
            } else {            
                // code to execute on data retrieval
                console.log("result from db is : ",data);   
            } 
        }
    );

