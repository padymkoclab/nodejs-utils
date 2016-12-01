
var http = require('http');
var util = require('util');

var log = console.log

const PORT = 8000

// http://www.yaml.org/start.html
content = 'invoice: 34843\ndate   : 2001-01-23\nbill-to: &id001\n    given  : Chris\n    family : Dumars\n    address:\n        lines: |\n            458 Walkman Dr.\n            Suite #292\n        city    : Royal Oak\n        state   : MI\n        postal  : 48046\nship-to: *id001\nproduct:\n    - sku         : BL394D\n      quantity    : 4\n      description : Basketball\n      price       : 450.00\n    - sku         : BL4438H\n      quantity    : 1\n      description : Super Hoop\n      price       : 2392.00\ntax  : 251.42\ntotal: 4443.52\ncomments: >\n    Late afternoon is best.\n    Backup contact is Nancy\n    Billsmer @ 338-4338.'

function requestHandler(request, response){
    response.writeHead(200, {'Content-Type': 'text-json'});
    response.write('<!DOCTYPE "html"');
    response.write('<html>');
    response.write('<head>');
    response.write('</head>');
    response.write('<body>');
    response.write('<pre>');
    response.write(content);
    response.write('</pre>');
    response.write('</body>');
    response.write('</html>');
    response.end(function(){
        log(util.format(
            '%s %s from %s',
            request.method,
            request.url,
            request.headers['user-agent']
        ));
    });
}

var server = http.createServer(requestHandler);
server.listen(PORT, function(){
    log(util.format('Server listen by port %d', PORT));
});
