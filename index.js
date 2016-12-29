
const fs = require('fs');
const path = require('path');

const faker = require('faker');


const generateFileStructure = (dirpath = 'utils/temp') => {

    let filename;
    let filepath;
    const countFiles = faker.random.number() % 20;

    for (let i = countFiles - 1; i >= 0; i -= 1) {
        filename = faker.system.fileName();
        filepath = path.join(dirpath, filename);
        fs.closeSync(fs.openSync(filepath, 'w'));
    }
};


const rmTree = (dirpath = 'utils/temp') => {
    if (fs.existsSync(dirpath) === true) {
        try {
            fs.rmdir(dirpath);
        } catch (ENOTEMPTY){

        }
    }
};


rmTree();
