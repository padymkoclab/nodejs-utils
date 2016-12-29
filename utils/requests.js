/*

 */

const http = require('http');
const https = require('https');

const util = require('util');

const validators = require('./validators');


class Request {

    constructor(url, auth = [], headers = []) {
        this.url = url;
        this.auth = auth;
        this.headers = headers;
        this.protocol = null;
        this.host = null;
        this.path = null;
        this.options = null;
    }

    initialize() {
        if (!validators.url(this.url)) {
            throw new Error('Invalid URL');
        }
        const parsedURL = /^(\w+:)\/\/([.-\w]+)\/(.*)/.exec(this.url);
        this.protocol = this.url.split('//', 1)[0];
        this.host = parsedURL[2];
        this.path = `/${parsedURL[3]}`;
        this.options = {
            host: this.host,
            path: this.path,
            timeout: 3,
        };

        if (this.headers.length > 0) {
            this.options.headers = this.headers;
        }

        if (this.auth.length > 0) {
            this.options.auth = this.auth;
        }
    }

    get() {
        this.options.method = 'GET';

        let requestFunction;
        if (this.protocol === 'https:') {
            requestFunction = https.request;
        } else if (this.protocol === 'http:') {
            requestFunction = http.request;
        }

        requestFunction(this.options, this.responseHandler).end();
        this.options.method = null;
    }

    responseHandler(response) {
        response.setEncoding('utf8');

        let content = '';
        response.on('data', (chunk) => {
            content += chunk;
        });

        response.on('end', () => {
            console.log(`Status: ${response.statusCode}`);
        });

        response.on('error', (e) => {
            console.log(util.format('Occured errors: %s', e));
        });
    }
}


/**
 * const request = exports.Request('https://github.com/marak/Faker.js/');
 * request.get();
 *
 */
exports.Request = (url, auth, headers) => {
    const request = new Request(url, auth, headers);
    request.initialize();
    return request;
};
