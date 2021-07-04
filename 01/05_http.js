// http这个模块是帮你创建编写服务器的

// 1,加载http核心模块
var http = require('http');


// 2,使用http.creatServer()方法创建一个web服务器
// 返回一个Server实例
var server = http.createServer();


// 3，当客户发请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数：回调处理函数


// request  请求对象
//      请求对象可以用来获取客户端的一些请求信息，例如请求路径

// response  响应对象
//      响应对象可以给客户端发送响应消息 要有response.end()结尾

server.on('request',function(request, response){
    console.log("服务器接受到请求了,路径是" + request.url);

    if(request.url === "/index"){
        response.write("登录")
    }else if(request.url === "/register"){
        response.write("iii")
    }else{
        response.write("hhhhhh")
    }

    response.end()
})


// 4，绑定端口号，启动服务器
server.listen(3000, function(){
    console.log("服务器启动成功了，可以通过http://127.0.0.1:3000/ 来访问");
})