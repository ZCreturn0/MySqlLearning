const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root'
});

connection.connect();

connection.query('create database learning',function(err,results,fields){
    if(err){
        console.log(err);
    }
    else{
        console.log('database learning created');
    }
})

connection.end();