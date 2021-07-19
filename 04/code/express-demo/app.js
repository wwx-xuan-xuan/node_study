var express = require('express');

var app = express();

app.use('/static/', express.static('./public'))


app.get('/', function(req, res){
    res.send("hello word");
    // res.end("hello word end")
})



app.listen(3000, function(){
    console.log('express app is running');
})