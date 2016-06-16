var express = require('express');
var app = express();
var http = require('http'),
    server = http.createServer(app);


app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
res.sendfile('views/index.html');
});

server.listen('1111');
console.log('server on 1111 port');