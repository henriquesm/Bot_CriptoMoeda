'use strict'

//var dataBase = require("./DB/corretora");

var dataBase = require("./DB/moeda");

    dataBase.db_SelectAll(
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

