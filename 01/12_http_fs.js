var http = require('http');

var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    console.log("服务器接受到请求了,路径是" + request.url);
    console.log("我的客户端请求路径位", request.socket.remotePort);
    console.log("我的客户端请求ip地址", request.socket.remoteAddress);

    if (request.url === '/img') {
        fs.readFile('./img/wwx.jpg', function (err, data) {
            if (err) {
                response.setHeader('Content-Type', 'text/plain;charset=utf-8');

                response.end('读取文件失败，请稍后重试');
            } else {
                response.setHeader('Content-Type', 'image/jpeg');
                response.end(data)
            }
        })

    } else if (request.url === '/index') {

        fs.readFile('./html/01_html1.html',function(err, data){
            if(err){
                response.setHeader('Content-Type', 'text/plain;charset=utf-8');

                response.end('读取文件失败，请稍后重试')
            }else{
                response.setHeader('Content-Type', 'text/html;charset=utf-8');
                response.end(data)
            }
        });

    } else {
        response.setHeader('Content-Type', 'text/plain; charset=utf-8')
        response.end('错误')
    }
})


server.listen(3000, function () {
    console.log('服务器启动成功')
})