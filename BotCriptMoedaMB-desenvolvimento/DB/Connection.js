'use strict'

var mysql      = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'teste',
   database : 'CriptoMoeda'
});

async function _selectAll(_query, callback)
{
  await connection.connect(function(err) {
          connection.query(_query,function(err,rows){
            callback(err,rows);
               });
        });
}

async function _select(_query, _where, callback)
{
  await connection.connect(function(err) {
          connection.query(_query, _where,function(err,rows)
                {
                      callback(err,rows);
                  });
        });
}

async function _ExecuteNonQuery(_query, _parameter, callback)
{
  await connection.connect(function(err) {
          connection.query(_query, _parameter,function(err,rows)
                        {
                          callback(err,rows);
                        });
          });
}

module.exports.selectAll 	= _selectAll;
module.exports.select 		= _select;
module.exports.ExecuteNonQuery 	= _ExecuteNonQuery;
