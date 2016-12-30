/**
 * Custom errors
 */


const util = require('util');


function NotImplementedError(msg = '') {
    Error.captureStackTrace(this, NotImplementedError);
    this.name = this.constructor.name;
    this.message = msg;
}


function ZeroDivisionError(msg = '') {
    Error.captureStackTrace(this, ZeroDivisionError);
    this.name = this.constructor.name;
    this.message = msg;
}


function ValueError(msg = '') {
    Error.captureStackTrace(this, ValueError);
    this.name = this.constructor.name;
    this.message = msg;
}


util.inherits(NotImplementedError, Error);
util.inherits(ZeroDivisionError, Error);
util.inherits(ValueError, Error);


module.exports.NotImplementedError = NotImplementedError;
module.exports.ZeroDivisionError = ZeroDivisionError;
module.exports.ValueError = ValueError;
