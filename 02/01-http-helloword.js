var http = require('http');

var fs = require('fs');

// 创建server
var server = http.createServer();

// 监听server的request请求

var wwwDir = 'D:/workspace/大二下学期/node_study/www'
 
server.on('request', function (req, res) {
    var url = req.url;
    console.log(url)
 

    if(url === '/'){
        fs.readFile(wwwDir + '/index.html', function(err, data){
            if(err){
                return res.end('404 NOT FOUND');
            }

            res.end(data);
        })
    }else if(url === '/a.txt'){
        fs.readFile(wwwDir + '/a.txt', function(err, data){
            if(err){
                return res.end('404 NOT FOUND')
            }

            res.end(data)
        })
    }else if(url === '/apple/login.html'){
        fs.readFile(wwwDir + '/apple/login.html', function(err, data){
            if(err){
                return res.end("404 NOT FOUND")
            }

            res.end(data)
        })
    }


})

server.listen(3000, function(){
    console.log("running......")
})