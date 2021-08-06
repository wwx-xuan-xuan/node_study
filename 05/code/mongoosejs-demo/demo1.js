const mongoose = require('mongoose');

// 链接mongodb数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


// 创建一个模型
const Cat = mongoose.model('Cat', { name: String });
const Dog = mongoose.model('Dog', { name: String });

// 实例化一个Cat
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

const Jinmao = new Dog({ name: 'xxx' });
Jinmao.save().then(() => console.log('Dogmeow'));