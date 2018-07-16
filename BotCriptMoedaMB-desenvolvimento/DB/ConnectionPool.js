'use strict'

var mysql      = require('mysql');



var pool      =    mysql.createPool({
    connectionLimit : 100, //important
   host     : 'localhost',
   user     : 'root',
   password : 'teste',
    database : 'CriptoMoeda',
    debug    :  false
});


function _selectAll(_query, callback)
{
	pool.getConnection(function(err,connection){
        if (err) {
          callback({"code" : 100, "status" : "Error invoke function getConnection"}, null);
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query(_query,function(err,rows){
            
            if(!err) {
		var dados = rows;
		console.log(dados);
      callback(null,dados); 
            }
	    if (err)
  { callback(err,null);
    connection.release();
  }
  
        });

        connection.on('error', function(err) {      
          callback({"code" : 100, "status" : "Error invoke connection.on "}, null);
        });
  });
}

function _select(_query, _where, callback)
{
	pool.getConnection(function(err,connection){
        if (err) {
          
          callback({"code" : 100, "status" : "Error in connection database"}, null);
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query(_query, _where, function(err,rows){

            if(!err) {
                	callback(null,rows);
     
            }  
		 if (err)
      { callback(err,null); 
        connection.release();
      }       
        
        });

        connection.on('error', function(err) {      
              callback({"code" : 100, "status" : "Error in connection database"}, null);
        });
  });
}

function _ExecuteNonQuery(_query, _parameter, callback)
{

	pool.getConnection(function(err,connection){
        if (err) {
          callback({"code" : 100, "status" : "Error in connection database"}, null);
          return;
        }   

        console.log('connected as id ' + connection.threadId);  

	 connection.query(_query, _parameter, function(error) {
   
		if (error) {
       // console.log(error.message);
       connection.release(); 
		} else {
      callback(null, {"status" : "Sucesso."});  
      
		}
	    });

        connection.on('error', function(err) {      
		callback({"code" : 100, "status" : "Error in connection database"}, null);
              return;     
        });
  });

}

module.exports.selectAll 	= _selectAll;
module.exports.select 		= _select;
module.exports.ExecuteNonQuery 	= _ExecuteNonQuery;

