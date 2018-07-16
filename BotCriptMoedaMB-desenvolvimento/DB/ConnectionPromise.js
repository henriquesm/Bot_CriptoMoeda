'use strict'

var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'teste',
   database : 'CriptoMoeda'
});


var BD = function () {
    
}

BD.prototype = {

    ExecuteQueryParameter : function(_query, _parameter){

        return new Promise((resolve, reject) => {
            connection.connect(function(err) {
                     connection.query(_query, _parameter,function(err,rows){
                        if(err)
                        {
                            reject(err);
                        }
                        else
                        {
                            resolve(rows);
                        }
                     });
                   
              });
        });
    },
    ExecuteQueryParameterLote : function(_query, _parameter){

        return new Promise((resolve, reject) => {
            connection.connect(function(err) {
                     connection.query(_query, [_parameter],function(err,rows){
                        if(err)
                        {
                            reject(err);
                        }
                        else
                        {
                            resolve(rows.affectedRows);
                        }
                     });
                   
              });
        });
    },
    ExecuteQuery : function(_query){

        return new Promise((resolve, reject) => {
            connection.connect(function(err) {
                    connection.query(_query, function(err,rows){
                        if(err)
                        {
                            reject(err);
                        }
                        else
                        {
                            resolve(rows);
                        }
                     });
              });
        });
    },
    Insert : function(_query, _parameter){
        return this.ExecuteQueryParameter(_query, _parameter);
    },
    InsertLote : function(_query, _parameter){
        return this.ExecuteQueryParameterLote(_query, _parameter);
    },
    Update : function(_query, _parameter){
        return this.ExecuteQueryParameter(_query, _parameter);
    },
    Select : function(_query, _parameter){
        return this.ExecuteQueryParameter(_query, _parameter);
    },
    SelectAll : function(_query){
        return this.ExecuteQuery(_query);
    },

};

module.exports = {BD};