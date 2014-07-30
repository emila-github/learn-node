//http.createServer([requestListener])
var http = require('http');
var fs = require('fs');
var url = require('url');
http.createServer(function(request, response) {
//    //直接返回内容
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello World !\n');

//    //返回一个页面
//    fs.readFile('./testfile/index.html', 'utf-8', function(err, data) {
//        response.end(data);
//    })；


    //根据访问路径返回页面
    var urlObj = url.parse(request.url);
//    console.log(urlObj);
    var pathname = urlObj.pathname;
    var query = urlObj.query;
    if (pathname == '/') {
        pathname = '/testfile/index.html';
        readFileAndResponse(pathname, response);
    }
    else if (pathname === '/ajax') {
        response.end('{"msg": "This is a json response."}');
    } else {
        readFileAndResponse(pathname, response);
    }

    function readFileAndResponse(pathname, response) {
        fs.readFile('.' + pathname, 'utf-8', function (err, data) {
            if (err) {
                //            console.log(err);
                response.writeHead(404, {'Content-Type': 'text/plain'});
                response.end('file not found.');
            } else {
                response.end(data);
            }

        });

    }

}).listen(8099);

console.log('Server running on port 8099');