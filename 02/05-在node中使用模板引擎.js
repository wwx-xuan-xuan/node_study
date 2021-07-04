// 模板引擎
// art-template 不仅可以在浏览器中使用，也可以在node中使用

// 安装
//      npm install art-template
//      该命令在哪里执行就会把报下载到哪里。 默认会下载到node_modules目录中

// 模板引擎最早诞生于服务器领域，后来蔡发展到了前端

// 安装：npm install art-template
// 在需要使用的文件模块中加载atr-tempalte
// 只需要使用require('atr-template')
// 查文档，使用模板引擎API

var template = require('art-template');
var fs = require('fs');

// var tplStr = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <p>大家好，我叫: {{name}}</p>
//     <p>我今年{{age}} 岁了</p>
//     我来自 {{province }}
//     我喜欢 {{each hobbies}} {{ $value }} {{ /each }}

// </body>
// </html>
// `

fs.readFile('./tpl.html', function (err, data) {
    if (err) {
        return console.log('读取文件失败');
    }

    var ret = template.render(data.toString(), {
        name: 'wwx',
        age: 18,
        province: 'china',
        hobbies: [
            'qw',
            'ewew',
            'weqwe'
        ]
    })

    console.log(ret)

})