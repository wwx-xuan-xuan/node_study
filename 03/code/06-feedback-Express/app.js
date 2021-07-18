var express = require('express');

var app = express();


var comments = [{
        name: "wwx",
        message: "wdfasf3wdsv",
        dataTime: '2016-11-11'
    },
    {
        name: "wwx2",
        message: "wdfasf3wdsv",
        dataTime: '2016-11-11'
    },
    {
        name: "wwx2",
        message: "wdfasf3wdsv",
        dataTime: '2016-11-11'
    },
    {
        name: "wwx3",
        message: "wdfasf3wdsv",
        dataTime: '2016-11-11'
    },
]


app.use('/public/', express.static('./public/'))

// 当服务器收到get请求 / 的时候，执行回调回调处理函数
app.get('/', function (req, res) {
    res.send('./views/index.html')
})
app.get('/about', function (req, res) {
    app.render('')
})


app.listen(3000, function () {
    console.log('app is running at port 3000');
})