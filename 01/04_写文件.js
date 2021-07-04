var fs = require('fs')

fs.writeFile('./writefile.txt',"第一次用node.js写文件",function(error){
    console.log("写入完成！")
})