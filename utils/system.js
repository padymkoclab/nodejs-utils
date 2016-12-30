/*


 */

const fs = require('fs');
const util = require('util');
const path = require('path');

const errors = require('./errors');
const validators = require('./validators');


const mkdirp = (syspath) => {
};


const mkdirpSync = (syspath) => {

    throw new errors.NotImplementedError();

    // validate syspath
    // validators. see file validators.js

    if (syspath === undefined)

    try {
        fs.mkdirSync(syspath);
    } catch (e) {

    }
    // if fs.existsSync(syspath)

    const parent = path.dirname(syspath);
};


mkdirpSync('temp/temp/temp/temp');


module.exports.mkdirp = mkdirp;
module.exports.mkdirpSync = mkdirpSync;
