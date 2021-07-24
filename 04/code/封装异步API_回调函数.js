// 需要得到一个方法内部的异步操作结果，必须通过回调函数来获取

function an(callback){
    setTimeout(function(){
        var data = 'asdasd';

        callback(data)

    }, 1000)
}

console.log(an(function(data){
    console.log(data)
}))

