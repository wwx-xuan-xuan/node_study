function add(x, y) {
  console.log(1);

  setTimeout(function () {
    console.log(2);
    var ret = x + y;
    return ret;
  }, 1000)

  console.log(3);
  // 到这里就执行结束了，不会等到前面的定时器，所以直接返回了默认值undefind
}


console.log(add(10, 20));


function add(x, y, callback) {
  // callback就是回调函数
  // var x = 10; 
  // var y = 20;
  // var callback = function (ret) { console.log(ret) };

  setTimeout(function () {
    var ret = x + y;
    callback(ret);
  }, 1000)
}

add(10, 20, function (ret) {
  console.log(ret);
})