var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    console.log(new Date() + ' ' + req.method + ' request on ' + req.url);

    if (req.url === '') {
        
    } else if (req.url === '/') {
        
    } else {
       
    }
});

server.listen(2020);
console.log('server listening on port 2020');