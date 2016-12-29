/*


 */

const fs = require('fs');
const util = require('util');


const listdir = (path = '.', filter = null) => {
    // restriction for filter objects
    if (filter != null) {
        if (['d', 'f'].indexOf(filter) === -1) {
            throw new Error('Support filter filter for files and directories');
        }
    }

    // read all objects by path
    let objects = fs.readdirSync(path);

    // if need filter directories
    if (filter === 'd') {
        objects = objects.filter((el) => {
            let fullpath = util.format('%s/%s', path, el);
            fullpath = fullpath.replace('//', '/');
            return fs.statSync(fullpath).isDirectory();
        });

    // if need filter files
    } else if (filter === 'f') {
        objects = objects.filter((el) => {
            let fullpath = util.format('%s/%s', path, el);
            fullpath = fullpath.replace('//', '/');
            return fs.statSync(fullpath).isFile();
        });
    }

    return objects;
};


const filterByExtendion = (path = '.', extension = '') => {
    let objects = fs.readdirSync(path);

    if (extension !== '') objects = objects.filter(el => el.endsWith(`.${extension}`));

    return objects;
};

// fs.mkdir('temp');
// fs.openSync('temp/file.java', 'w');
// fs.rmdir('temp');


module.exports.filterByExtendion = filterByExtendion;
module.exports.listdir = listdir;
