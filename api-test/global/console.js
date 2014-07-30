/**
 node console.js > log.txt  //将 log 、info 信息重定向到log.txt文件中
 node console.js 1>log.txt 2>err.txt  //将 log 、info 信息重定向到log.txt文件中 ； 将warn、error  信息重定向到err.txt文件中
 node console.js 1>logAll.txt 2>&1 //将2中的 warn、error信息也重定向logAll.txt文件中
 **/


console.log('This is a log');
console.info('This is a info');
console.warn('This is a warn');
console.error('This is a error');


//统计代码执行时间
console.time('test');
for(var i =0; i < 10000000; i++) {

}
console.timeEnd('test');    // test: 11ms