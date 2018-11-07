const mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'root',
    //数据库操作不加下面这行
    database:'learning'
});

connection.connect();

var sql;
var sqlValues;
var successInfo;
// 创建数据库
// sql = 'create database learning';
// successInfo = 'database learning created';

// 删除数据库
// sql = 'drop database test';
// successInfo = 'database test droped';

// 创建表格
// sql = `CREATE TABLE IF NOT EXISTS stu(
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(10) NOT NULL,
//     age INT NOT NULL,
//     addr VARCHAR(255)
// )`;
// successInfo = 'table stu created';

// 删除表格
// sql = 'DROP TABLE aaa';
// successInfo = 'table aaa droped';

// 插入数据
// sql = "INSERT INTO stu(name,age,addr) VALUES(?,?,?)";
// sqlValues = ['bbb',12,'bbbbbbbbb'];
// successInfo = 'insert info into stu';

// 查询数据
// sql = 'SELECT * FROM stu';
/*
[ 
    RowDataPacket { id: 1, name: 'aaa', age: 12, addr: 'aaaaaaaaaa' },
    RowDataPacket { id: 2, name: 'bbb', age: 12, addr: 'bbbbbbbbb' } 
]
*/



connection.query(sql,function(err,results,fields){
    if(err){
        console.log(err);
    }
    else{
        console.log(results);
    }
})

connection.end();