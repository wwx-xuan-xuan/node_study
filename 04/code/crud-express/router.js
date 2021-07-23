/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */ 


const fs = require('fs');

// Express提供了一种方式来包装路由
const express = require('express');

// 1，创建一个路由容器
const router = express.Router();

// 2，把路由挂载到router路由容器中


router.get('/students/', function(req, res){
    // res.send('hello word')

    // readFile的第二个参数是可选的，传入utf8就是告诉他把读取到的文件直接按照utf8编码的方式转为我们看得懂的字符
    // 处理这样，也可以通过data.toString()转
    fs.readFile('./db.json','utf8' , function(err, data){
        if(err){
            return res.status(500).send('Sever error')
        }

        // 文件读取到的数据一定是字符串
        // 所以这里一定要手动转化为对象
        var students = JSON.parse(data).students;

        res.render('index.html',{
            fruits:[
                '苹果',
                '香蕉',
                '橘子'
            ],
            students:students
        })
    })
})

router.get('/students/new', function(req, res){ 
    res.render('new.html')
})

router.post('/students/new', function(req, res){
    // 1.获取表单数据
    console.log(req.body)
    // 2.处理
    // 3.发送响应

})
router.get('/students/edit', function(req, res){

})
router.post('/students/edit', function(req, res){

})
router.get('/students/delete', function(req, res){

})


// 3.把router导出
module.exports = router