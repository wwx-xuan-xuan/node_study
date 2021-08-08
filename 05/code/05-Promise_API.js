var fs = require('fs');


console.log(1)
// 创建Promise容器 
//     Promise 容器一旦创建就开始执行里面的代码  (console.log() 的执行顺序 1243 )
var p1 = new Promise(function (resolve, reject) {
    console.log(2)

    fs.readFile('./data/a.txt', 'utf-8', function (err, data) {
        console.log(3)

        if (err) {
            // 失败，承诺容器中的任务失败了
            // 把容器的Pending 状态变为 Reject
            reject(err)
        } else {

            // 成功，承诺容器中的任务成功了
            // 把容器的Pending 状态变为 Resolve
            resolve(data)
        }
    })
})

console.log(4)