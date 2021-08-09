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

var p2 = new Promise(function (resolve, reject) {
    fs.readFile('./data/b.txt', 'utf-8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

var p3 = new Promise(function (resolve, reject) {
    fs.readFile('./data/c.txt', 'utf-8', function (err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})



p1
    .then(function (data) {
        console.log(data);

        /**
         * 当p1读取成功的时候
         * 当前函数中return的结果就可以在后面的then中 function 接收到
         * 
         * 我们可以return一个Promise对象
         * 当 return一个Promise对象的时候， 后续的then中方法的第一个参数 会作为p2的 resolve
         * 
         */

        return p2
    }, function (err) {
        console.log('文件读取失败', err)
    })
    .then(function (data) {
        console.log(data);
        return p3
    })
    .then(function (data) {
        console.log(data)
    })