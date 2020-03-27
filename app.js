//      #1
// console.log("let start!");
// for(var i = 0;i<=10;i++){console.log(i);}
// console.log("completed");
//      #2
// var http = require('http');
// var httpServer = http.createServer(function(request, response){
//     response.writeHead(200, {'Content-type':'text/plain'});
//     response.write('Hi there!');
//     response.end('..and bye');
//     console.log('Handled request');
// }).listen(8000,'localhost');
// console.log('Server runing at http://localhost');
//      #3
var http = require('http');
var url = require('url');

var httpServer = http.createServer(function(request, response){
    var url_parts = url.parse(request.url,true);
    response.writeHead(200, {'Content-type':'text/plain'});
    response.write(`Hi there! ${url_parts.query.name}!\n`); 
    response.end(`Hello ${url_parts.query.name}!\n`);
    document.write(`Hello ${url_parts.query.name}!\n`);
    console.log(`Handeled request especially and exclusively for ${url_parts.query.name}!\n`);
})
httpServer.listen(80,'10.21.0.76');
console.log('Server runing at http://10.21.0.76:80');
// //      #4
// var txtMessage = document.getElementById("txtMessage").value;

// var http = require('http');
// var url = require('url');

// var httpServer = http.createServer(function(request, response){
//     var url_parts = url.parse(request.url,true);
//     response.writeHead(200, {'Content-type':'text/plain'});
//     response.write(`Hi there! ${url_parts.query.name}!\n`); 
//     response.end(`Hello ${url_parts.query.name}!\n`);
//     document.writeln(`Handeled request especially and exclusively for ${url_parts.query.name}!\n`);
// })
// httpServer.listen(80,'10.21.0.76');
// console.log('Server runing at http://10.21.0.76:80');