
var http = require('http');
var util = require('util');
var jsyaml = require('js-yaml');


var options = {
    protocol: 'http:',
    host: 'localhost',
    port: 8000,
    path: '/',
    method: 'GET',
    headers: {
        'user-agent': 'Sample client NodeJS',
    },
}

var responseHandler = function(response){
    console.log(`Status: ${response.statusCode}`);
    response.setEncoding('utf8');

    var content = '';
    response.on('data', (chunk) => {

        content += chunk;

        if (chunk === '</html>'){
            var body_data = /<pre>([\S\s]*)<\/pre>/g.exec(content)[1];
            body_data = jsyaml.load(body_data);
            console.log(body_data);
        }

    });

    response.on('end', () => {
        console.log('Request was finished.');
    });
}

response = http.request(options, responseHandler);

response.on('error', (e) => {
    console.log(util.format('Occured errors: %s', e));
});

response.end();
