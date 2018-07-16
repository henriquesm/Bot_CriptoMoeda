'use strict'

//MERCADO BITCOIN
const unirest = require('unirest')
const ENDPOINT_API = process.env.API_MB_PUBLICA

var baseRest = function () {
}

baseRest.prototype = {
    conectar  : function(method, moeda)
    {
        return this.chamada(ENDPOINT_API + moeda + '/' + method);
    },
    conectarParametro : function(method, moeda, parametro) 
    {
        return this.chamada(ENDPOINT_API + moeda + '/' + method + '/' + parametro);
    },
    chamada : function(url) 
    {
        return new Promise((resolve, reject) => {
             unirest.get(url)
            .headers('Accept', 'application/json')
            .end(function (response) {
                try{
                  //  console.log(url);
                    if(response && response.statusCode == 200)
                    {
                        resolve(JSON.parse(response.raw_body));
                    }
                    else{
                        reject({"code" : 100, "erro" : [url, response]});
                    }
                }
                catch(ex)
                {
                    reject({"code" : 100, "erro" : ex});
                }
            });
    
        });
    }

};

module.exports = {baseRest};
