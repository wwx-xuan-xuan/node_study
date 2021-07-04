var http = require('http');

var fs = require('fs');


var server = http.createServer();

var wwwDir = 'D:/workspace/大二下学期/node_study/www'

server.on('request', function (req, res) {
    var url = req.url;

    fs.readFile('./template.html', function (err, data) {
        if (err) {
            console.log('404 not found')
        }

        // 生成需要替换的内容
        var content = '';
        fs.readdir(wwwDir, function (err, files) {
            if (err) {
                return res.end('Can not find www dir');
            }

            files.forEach(function (item) {

                content += `
                <li>${item}</li>
            `
            })

            // 替换
            data = data.toString();
            data = data.replace('qwe', content)

            // 发送解析替换后的响应数据
            res.end(data)
        })




    })
})


server.listen(3000, function () {
    console.log('running...')
})