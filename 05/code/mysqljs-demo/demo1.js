var mysql = require('mysql');

// 1.创建连接
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users'
});

// 2.连接数据库
connection.connect();


// 3.执行数据库操作
connection.query('SELECT * FROM `users`', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});


// 4.关闭连接
connection.end();