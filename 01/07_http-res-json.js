// 1，加载http核心模块
var http = require('http');


// 使用http.creatServer()方法创建一个web服务器
// 返回一个Server实例

var server = http.createServer();

// 
server.on('request', function(req, res){
    console.log("收到请求路径", req.url);
    console.log("我的客户端请求路径位", req.socket.remotePort);
    console.log("我的客户端请求ip地址", req.socket.remoteAddress);

    var products = [
        {
            name:"wwx",
            age:18
        },
        {
            name:"王",
            age:18
        },
        {
            name:"轩轩",
            age:18
        }
    ]


    if(req.url === "/index"){
        // 响应内容只能是二进制或者字符串
        res.write(JSON.stringify(products))
    }else{
        res.write("404")
    }
    res.end()

})




// 绑定端口号
server.listen(3000, function(){
    console.log("服务器启动成功")
})