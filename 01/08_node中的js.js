// 用来获取用户信息
var os = require('os');

console.log(os.cpus());

// 用来操作路径的
var path = require('path');

// memory  内存
console.log(os.totalmem());

// 获取扩展名
console.log(path.extname('c:/a/v/e.txt'))