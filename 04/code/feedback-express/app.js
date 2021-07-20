const express = require('express');

const app = express();


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

app.use(express.urlencoded({ extended: false }))

app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'));

app
    .get('/', function (req, res) {
        res.render('index.html', {
            comments: comments
        })
    })
    .get('/post', function (req, res) {
        res.render('post.html', {
            comments: comments
        })
    })
    .post('/post', function (req, res) {
        // console.log(req.body) 
        var comment = req.body;
        var now = new Date();
        comment.dataTime = now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate();
        console.log(comment.dataTime)
        comments.unshift(comment);
        res.redirect('/');   //框架里面提供的重定向的方法
    })
    // .get('/pinglun', function (req, res) {
    //     var comment = req.query
    //     comment.dateTime = '2017-11-5 10:58:51'
    //     comments.unshift(comment)
    //     res.redirect('/')   //框架里面提供的重定向的方法
    //     // res.statusCode = 302
    //     // res.setHeader('Location', '/')
    // })




app.listen(3000, function () {
    console.log('feedback-exrpess is running')
})