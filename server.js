var http = require('http');
var fs = require('fs');
var st = require('st');
var mount = st({ path: __dirname + '/static', url: '/static' });

var server = http.createServer(function (req, res) {
    var isStatic = mount(req, res);
    if (!isStatic) {
        res.setHeader('Content-Type', 'text/html')
        res.end('<!DOCTYPE html><html><head><link href="/static/css/main.css" rel="stylesheet" type="text/css"></head><body><script src="/static/js/bundle.js"></script></body></html>');
    }
});

server.listen(8000);
