/**
 * app.js 入门模块
 * 职责：
 *   创建服务
 *   做一些服务相关配置
 *     模板引擎
 *     body-parser 解析表单 post 请求体
 *     提供静态资源服务
 *   挂载路由
 *   监听端口启动服务
 */

const express = require('express');

const fs = require('fs');
// const express = require('express');

const router = require('./router')

const app = express();

app.engine('html', require('express-art-template'))

app.use('/node_modules/', express.static('./node_modules/'))
app.use('/public/', express.static('./public/'))
app.use(express.urlencoded({ extended: false }))

// 把路由容器挂载到路由容器中
app.use(router)
 

app.listen(3000, function(){
    console.log('crud-express is running')    
}) 