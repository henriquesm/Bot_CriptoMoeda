'use strict'

require('dotenv-safe').config({
    allowEmptyValues: true
  });

  var bll = require("./corretoraVsMoeda");
  var bllDaySummary = require("./daySummary");
  var bllTicker = require("./ticker");
  var bllOrderbook = require("./orderbook");
  var bllTrades = require("./trades");

  module.exports.Inicio = () =>
{
    bll.db_SelectCorretoraMoedas()
    .then((dados) => {
        if(dados && dados.MOEDAS)
        {
                dados.MOEDAS.forEach(function(elem) 
                {
                    day(elem.ID_CORRETORA_MOEDA, elem.SG_MOEDA);
                    daySumary(elem.ID_CORRETORA_MOEDA, elem.SG_MOEDA);
                });
        }        
    })
    .catch((err) => console.log(err) );

}
function daySumary(idCorretora, moeda){

    bllDaySummary.CarregarTodos(moeda, idCorretora)
    .catch((err) => console.log(err));

/*     setInterval(() => 
        Inicio(),
        process.env.DAY_INTERVAL
    //    10000
    ) */

}

function day(idCorretora, moeda){

        bllTicker.Carregar(moeda, idCorretora)
        .catch((err) => console.log(err));

        bllTrades.Carregar(moeda, idCorretora)
        .catch((err) => console.log(err));

        bllOrderbook.Carregar(moeda, idCorretora )
        .catch((err) => console.log(err));


    
                    
}