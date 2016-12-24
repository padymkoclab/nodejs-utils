/*

 */

const http = require('http');
const https = require('https');
const util = require('util');

const validators = require('./validators');


class Request {

    constructor (url, auth = [], headers = [] ) {
        this.url = url;
        this.auth = auth;
        this.headers = headers;
        this.protocol = null;
        this.host = null;
        this.path = null;
        this.options = null;
    }

    report() {

    }

};

/*
Request.prototype.initialize = function () {
    if (!validators.url(this.url)) {
        throw new Error('Invalid URL');
    }
    return /^(\w+:)\/\//.exec(this.url)[1];
};

Request.prototype.get = function () {
    // this.options.method = 'GET';
    // console.log(this.options);
    var response = http.request;
    // (
        // this.options, this.responseHandler
    // );
    return response;
};

Request.prototype.responseHandler = function (response) {
    console.log(`Status: ${response.statusCode}`);
    response.setEncoding('utf8');

    response.on('data', (chunk) => {
    });

    response.on('end', () => {
        console.log('Request was finished.');
    });

    response.on('error', (e) => {
        console.log(util.format('Occured errors: %s', e));
    });

    response.end();
};


exports.Request = function (url, auth, headers) {
    var request = new Request(url, auth, headers);
    request.initialize();
    return request;
};
*/

module.exports.request = Request;
