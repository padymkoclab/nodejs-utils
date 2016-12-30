
const fs = require('fs');
const path = require('path');

const faker = require('faker');
const inspect = require('./utils/inspect');


const generateFileStructure = (dirpath) => {
    let filename;
    let filepath;
    const countFiles = faker.random.number() % 20;

    // need mkdir -p


    // console.log(dirpath);

    // for (let i = countFiles - 1; i >= 0; i -= 1) {
    //     filename = faker.system.fileName();
    //     filepath = path.join(dirpath, filename);
    //     fs.closeSync(fs.openSync(filepath, 'w'));
    // }
};


const rmTree = (path_) => {
    if (fs.existsSync(path_) === true) {
        const pathStat = fs.lstatSync(path_);

        if (pathStat.isFile()) fs.unlinkSync(path_);

        if (pathStat.isDirectory()) {
            try {
                fs.rmdirSync(path_);
            } catch (e) {
                if (e instanceof Error && e.code === 'ENOTEMPTY') {
                    fs.readdirSync(path_).forEach(name => rmTree(path.join(path_, name)));
                    rmTree(path_);
                }
                throw new Error(e.message);
            }
        }
    }
};

path_ = './utils/temp'
generateFileStructure(path_);
// rmTree(path_);

