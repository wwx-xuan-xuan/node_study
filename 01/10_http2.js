var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){

    if(request.url === "/index"){
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.write("hello 世界");
    } else if(request.url === '/html'){
        response.setHeader('Content-Type','text/html;charset=utf-8')

        response.write('<p>p标签<a href="">dasdasdasd</a></p>')
    }

    response.end()
})


server.listen(3000, function(){
    console.log("服务器起东")
})