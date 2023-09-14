const http = require('http');
const responseData = require('./responseData');
http.createServer((req,resp)=>{
    resp.writeHead( 200, {'Content-Type': 'application\json'});
    resp.write(JSON.stringify(responseData));
    resp.end();
}).listen(5000);
