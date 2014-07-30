process.stdin.setEncoding('utf-8');
process.stdin.on('data', function(data) {
    console.log(data);
});
process.on('exit', function() {
    console.log('process will exit.');
});

//在控制台按 ctrl+c 时不能直接退出，会输出 'process has a sigint'
process.on('SIGINT', function() {
  console.log('process has a sigint');
  process.exit();   //调用exit后可以正常退出
});