var fs = require("fs")

fs.readFile('./helloq.txt',function(error, data){

    if(error){
        console.log(error)
    }else{
        console.log(data.toString())
    }
})