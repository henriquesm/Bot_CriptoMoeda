'use strict'

var _rest = require("../MercadoBitcoin/daySummary");
var _bd = require("../DB/daySummary");

module.exports.CarregarTodos =  (moeda, id_corretora) => {

    return new Promise((resolve, reject) => {
        _bd.db_SelectMaxDaySummary( [id_corretora])
        .then((rows) => {
          //  console.log({"BLL day _CarregarTodos" : {moeda, id_corretora,dados: rows[0] }});
            _Loop(moeda, id_corretora, rows)
            .then((dados) => resolve({DaySummary:[moeda, id_corretora, dados]}));
        })
        .catch((err) => reject(err));
    });
}

function _Loop(moeda, id_corretora, retBD)
{
    return new Promise((resolve, reject) => {
        var data = new Date();
   // console.log({"BLL day loop" : {moeda, id_corretora, data, retBD}});

                if(retBD && retBD.length > 0)
                {
                data = new Date(retBD[0].CM_DATA); 
                data.setDate(data.getDate() + 1);
                }
                else
                {
                    data = new Date(2017,6,20);
                }

            var ponteiro = setInterval(() => 
            {
                    if(data < new Date())
                    {
                        data.setDate(data.getDate() + 1); 
                        _rest.consulta(moeda, data.getDate(), data.getMonth() + 1, data.getFullYear())
                            .then( (_json) =>
                            {
                                if(_json && _json.opening > 0)
                                {
                                    var data = new Date(_json.date);
                                    var _trade = [id_corretora,  data, _json.opening, _json.closing, _json.lowest, _json.highest, _json.volume, _json.quantity, _json.amount, _json.avg_price ];
                                    _bd.db_Insert(_trade)
                                    // .then((dados) => 
                                    // {
                                    //     if(dados && dados.insertId > 0)
                                    //     callback(null,[dados.insertId, _trade]);
                                    //     else
                                    //     callback(null,[dados, _trade]);
                                    // })
                                    .catch((err) =>
                                        {
                                            console.log(err);
                                            //callback(err, null);
                                            reject(err);
                                        });
                                }

                            })
                            .catch( (err) => 
                                {
                                    console.log([err, data]);
                                    //callback(err, null);
                                    reject(err);
                                }
                            );
                    }
                    else
                    {
                        //console.log("Fim ponteiro");
                        clearInterval(ponteiro);
                        //return callback(null,[ "fim ponteiro", ponteiro]);
                        resolve([ "fim ponteiro", ponteiro]);
                    }
            },
            process.env.CRAWLER_INTERVAL);
            

    });
}


