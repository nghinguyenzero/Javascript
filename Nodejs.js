var http = require('http');
http.createServer((request, response)=>{
	response.writeHead(200,{'Content-type':'text/plain'});
	response.end('Hello world');
}).listen(6000);
console.log('http://localhost:6000');