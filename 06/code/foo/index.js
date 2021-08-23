var fs = require('fs');
var path = require('path');

// 模块中的路径标识和文件操作中的相对路径标识不一致
// 模块中的路径标识就是相对于当前文件模块，不受执行 node 命令所处路径影响

// fs.readFile('./a.txt', 'utf8', function(err, data){
//     if(err){
//         throw err
//     }

//     console.log(data)
// })

// fs.readFile(__dirname + '/a.txt', 'utf8', function(err, data){
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

fs.readFile(path.join(__dirname, '/a.txt'), 'utf8', function(err, data){
    if(err){
        throw err
    }
    console.log(data)
})