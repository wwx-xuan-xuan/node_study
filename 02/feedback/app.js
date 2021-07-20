var http = require('http'); 
var fs = require('fs');

var template = require('art-template')

var url = require('url')

var comments = [
  {
    name:"wwx",
    message:"wdfasf3wdsv",
    dataTime:'2016-11-11'
  },
  {
    name:"wwx2",
    message:"wdfasf3wdsv",
    dataTime:'2016-11-11'
  },
  {
    name:"wwx2",
    message:"wdfasf3wdsv",
    dataTime:'2016-11-11'
  },
  {
    name:"wwx3",
    message:"wdfasf3wdsv",
    dataTime:'2016-11-11'
  },
]

http
  .createServer(function (req, res) {

    // var url = req.url;
    var pathObj = url.parse(req.url, true)

    var pathname = pathObj.pathname
    console.log(pathname)

    if (pathname === '/') {
      fs.readFile('./views/留言本.html', function (err, data) {
        if (err) {
          return console.log('404 not found')
        }

        var ret = template.render(data.toString(), {
          comments:comments
        })

        res.end(ret) 
        // res.end(data)
      })
    } else if (pathname === '/post') {

      fs.readFile('./views/post.html', function (err, data) {
        if (err) {
          return console.log('404 not foun dddd')

        }

        res.end(data)



      })
    } else if (pathname === '/pinglun') {
      console.log(pathObj.query)

      // 用query 方法把路径中的查询字符串解析为一个对象
      var json_str = JSON.stringify(pathObj.query)

      // res.end(json_str)

      // 服务端把数据储存好
      var comment = pathObj.query
      var now = new Date();
      comment.dataTime = now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate()
      console.log(comment)
      comments.unshift(comment)

      // 用户重新请求 / 首页  重定向  状态码  3开头的都是用来重定向的
      // 如何通过服务器让客户端重定向？
      // 1，状态码设置为302 为临时重定向
      // 
      // 2，在响应头中通过Location告诉客户端往哪儿重定向
      //    setHeader
      // 如果客户端发现收到服务器的响应状态码是302 就会自动去响应头中找Location
      // 就能看到客户端自动跳转了
      res.statusCode = 302;
      res.setHeader('Location','/')
      res.end()
      

    } else if (pathname.indexOf('/public/') === 0) {
      // console.log(url)
      fs.readFile('.' + pathname, function (err, data) {
        if (err) {
          return console.log(err)

        }

        res.end(data)

      })
    } else {
      fs.readFile('./views/404.html', function (err, data) {
        if (err) {
          return res.end('404 Not Found');
        }

        res.end(data)
      })
    }


  })

  .listen(3000, function () {
    console.log('running...')
  })