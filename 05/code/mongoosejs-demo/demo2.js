var mongoose = require('mongoose');
const {
    Schema
} = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost:27017/demo2');

// 设计集合结构
// 字段名称就是表结构中的属性名称
// 约束的目的就是为了保证数据的完整性（不要有脏数据）

var userSchema = new Schema({
    username: {
        type: String,
        require: true // 必须有
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String
    }
})


// 将文档结构发布为模型
//      mongoose.model 方法就是用来将一个架构发布为模型
//      第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//                 mongoose会自动将大写名词的字符串生成 小写复数 的集合名称
//                 User  =>  users
//      第二个参数：架构 model
//      返回值：模型构造函数
var User = mongoose.model('User', userSchema);


// 为所欲为
var admin = new User({
    username: 'admin',
    password: '123456',
    email: 'admin@admin.com'
})

// admin.save(function(err, ret){
//     if(err){
//         console.log('存储失败')
//     }
//     console.log('成功');
//     console.log(ret);
// })

// 查询数据
User.find({
    username:'admin'
}, function(err, ret){
    if(err){
        console.log('查询失败')
    }
    console.log(ret)
})


// 更新数据
User.findByIdAndUpdate('610d33518fea984250797ce6',{
    password:'111111'
}, function(err, ret){
    if(err){
        console.log('修改失败')
    }
    console.log(ret)
})






