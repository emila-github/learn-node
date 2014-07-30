process.stdin.setEncoding('utf-8');

//// 添加键盘箭头  在输入信息后 控制台会原样输出
//process.stdin.on('data', function(data) {
//    console.log(data);
//});



//和上面代码达到一样的消耗
process.stdin.on('readable', function() {
    var data = process.stdin.read();
    console.log(data);
});