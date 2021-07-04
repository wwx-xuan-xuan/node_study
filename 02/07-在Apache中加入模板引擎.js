var http = require('http');

var fs = require('fs');

var template = require('art-template')

var server = http.createServer();

var wwwDir = 'D:/workspace/大二下学期/node_study/www'

server.on('request', function (req, res) {
    var url = req.url;

    fs.readdir(wwwDir, function (err, files) {
        if (err) {
            return res.end('Can not find www dir');
        }
        
        fs.readFile('./template2.html', function (err, data) {
            if (err) {
                return console.log("文件未找到")
            }

            var ret = template.render(data.toString(), {
                files: files
            })

            res.end(ret)

        })

    })
})


server.listen(3000, function () {
    console.log('running...')
})