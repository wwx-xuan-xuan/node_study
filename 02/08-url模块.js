var url = require('url');
var http = require('http');

var pathObj = url.parse('http://127.0.0.1:3000/pinglun?name=asdasd&message=asdasdsa', true)

// 打印出url.parse方法的返回值
console.log(pathObj)

// 打印出url.parse方法的返回值里面的query对象
console.log(pathObj.query)


// 将query对象里面的[Object: null prototype] 去除
var json_str = JSON.stringify(pathObj.query)
console.log(json_str)

var json_par = JSON.parse(json_str)
console.log(json_par)


// 使用querystring.parse代替url.parse

var querystring = require('querystring');
url_querystring = 'http://127.0.0.1:3000/pinglun?name=asdasd&message=asdasdsa'

query_querystring = querystring.parse(url_querystring.split('?')[1])
console.log('query_querystring:',query_querystring)



// 使用URL类  get发送数据

http.createServer((req, res) => { // 我们使用http模块中的createServer方法来创建一个后端环境
    const data = new URL(`${req.url}`,'http://localhost:3000/') // new一个URL实例
    console.log(data) // 可以打印出来看看里面有什么，
    const name = data.searchParams.get('name') // 通过searchParams的get可以获取到想要获取的数据
    const message = data.searchParams.get('message')
    console.log(name,message)
  }).listen(3000)

