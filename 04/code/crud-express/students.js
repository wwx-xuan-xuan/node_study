var mongoose = require('mongoose');



// 连接数据库
mongoose.connect('mongodb://localhost:27017/demo2', {useNewUrlParser: true});

var Schema = mongoose.Schema;

// 设计数据结构
var studentSchema = new Schema({
    name:{
        type:String,
        required:true

    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    age:{
        type:Number
    },
    hobbies:{
        type:String
    }
})



// 直接导出模型构造函数
module.exports = mongoose.model('Student', studentSchema)