//fs.readFile(filename, [options], callback)

var fs = require('fs');

//异步读取文件
console.log('start async read.');
fs.readFile('../global/log.txt', 'utf-8', function(err, data){
    if(err) {
        console.log(err);
    } else {
//        console.log(data.toString());
        console.log('end async read.');
        console.log(data);
    }
});

//同步读取文件
console.log('start sync read.');
var data = fs.readFileSync('../global/err.txt', 'utf-8');
console.log('end sync read.');