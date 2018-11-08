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
sql = "INSERT INTO stu(name,age,addr) VALUES(?,?,?)";
sqlValues = ['ggg',12,'gggggggg'];
successInfo = 'insert info into stu';

// 查询数据
// sql = 'SELECT * FROM stu';
/*
[ 
    RowDataPacket { id: 1, name: 'aaa', age: 12, addr: 'aaaaaaaaaa' },
    RowDataPacket { id: 2, name: 'bbb', age: 12, addr: 'bbbbbbbbb' } 
]
*/

// 更新数据
// sql = 'UPDATE stu SET age = 21 WHERE id = 1';
// successInfo = 'id 1 age updated';

// 删除数据
// sql = 'DELETE FROM stu WHERE id = 3';
// successInfo = 'id 3 deleted';

// LIKE
// sql = 'SELECT * FROM stu WHERE name LIKE "%a"';
/*
    [ 
        RowDataPacket { id: 1, name: 'aaa', age: 21, addr: 'aaaaaaaaaa' } 
    ]
*/

// UNION
// sql = `
//     SELECT class from math
//     UNION
//     SELECT class from chinese
// `;
/*
    [ 
        RowDataPacket { class: 3 },
        RowDataPacket { class: 2 },
        RowDataPacket { class: 1 } 
    ]
*/
// sql = `
//     SELECT class from math
//     UNION ALL
//     SELECT class from chinese
// `;
/*
    [ 
        RowDataPacket { class: 3 },
        RowDataPacket { class: 3 },
        RowDataPacket { class: 3 },
        RowDataPacket { class: 3 },
        RowDataPacket { class: 2 },
        RowDataPacket { class: 2 },
        RowDataPacket { class: 2 },
        RowDataPacket { class: 1 },
        RowDataPacket { class: 1 },
        RowDataPacket { class: 1 },
        RowDataPacket { class: 1 },
        RowDataPacket { class: 1 },
        RowDataPacket { class: 2 },
        RowDataPacket { class: 2 },
        RowDataPacket { class: 2 },
        RowDataPacket { class: 2 },
        RowDataPacket { class: 3 },
        RowDataPacket { class: 3 },
        RowDataPacket { class: 3 },
        RowDataPacket { class: 3 } 
    ]
*/
// 至少有一门及格
// sql = `
//     SELECT id FROM chinese WHERE score >= 60
//     UNION
//     SELECT id FROM math WHERE score >= 60
//     ORDER BY id DESC
// `;

// GROUP BY
// sql = `SELECT coalesce(class,'平均分'),AVG(score) AS avg FROM chinese GROUP BY class WITH ROLLUP`;

// JOIN
// sql = `SELECT a.runoob_title,a.runoob_author,a.submission_date,b.runoob_count from runoob_tbl a,tcount_tbl b WHERE a.runoob_author = b.runoob_author`;
// sql = `SELECT a.runoob_title,a.runoob_author,a.submission_date,b.runoob_count from runoob_tbl a INNER JOIN tcount_tbl b ON a.runoob_author = b.runoob_author`;
// sql = `SELECT a.runoob_title,a.runoob_author,a.submission_date,b.runoob_count from runoob_tbl a LEFT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author`;
// sql = `SELECT a.runoob_title,a.runoob_author,a.submission_date,b.runoob_count from runoob_tbl a RIGHT JOIN tcount_tbl b ON a.runoob_author = b.runoob_author`;

// 正则
// sql = `SELECT * FROM tcount_tbl WHERE runoob_author REGEXP '^RUNOOB'`;

//事务
connection.beginTransaction(function(err){
    if(err){
        console.log(err);
    }
    else{
        // 执行插入
        connection.query(sql,sqlValues, function (err, results, fields) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(results);
                connection.rollback();
                connection.commit();
                connection.end();
            }
        })
    }
})