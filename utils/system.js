
const fs = require('fs');
const util = require('util');


var exports = module.exports = {};


/**
 * @param  {path}
 * @return {[Array]}
 */
exports.listdir = function(path='.', only=null){

    // restriction for filter objects
    if (only != null ){
        if (['d', 'f'].indexOf(only) === -1){
            throw new Error('Support filter only for files and directories');
        }
    }

    // read all objects by path
    var objects = fs.readdirSync(path);

    // if need only directories
    if (only === 'd'){
        objects = objects.filter(function(el, i, arr){
            var fullpath = util.format('%s/%s', path, el);
            var fullpath = fullpath.replace('//', '/');
            return fs.statSync(fullpath).isDirectory();
        });

    // if need only files
    } else if (only === 'f'){
        objects = objects.filter(function(el, i, arr){
            var fullpath = util.format('%s/%s', path, el);
            var fullpath = fullpath.replace('//', '/');
            return fs.statSync(fullpath).isFile();
        });
    }

    return objects
}
