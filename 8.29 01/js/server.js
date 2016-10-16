/**
 * Created by z on 2016/9/12.
 */
var http=require('http');
var server=http.createServer(function(req,res){
    res.writeHeader(200,{'Content-Type':'text/plain'})
    res.end('Hello Node.js\n')
})
server.listen(1337,'localhost')
console.log('Server running at http://127.0.0.1:1337/')