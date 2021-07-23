function an(callback){
    setTimeout(function(){
        var data = 'asdasd';

        callback(data)

    }, 1000)
}

console.log(an(function(data){
    return data
}))