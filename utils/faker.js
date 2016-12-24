/*

*/


const crypto = require('crypto');

const string = require('./string');


var exports = module.exports = {};


const Faker = {};


Faker.text = (minCountWords = 3, maxCountWords = 50) => {
    let countWords = Faker.integer(minCountWords, maxCountWords);
    let text = [];
    let word;
    do {
        word = Faker.word();
        text.push(word);
        countWords -= 1;
    } while (countWords > 0);
    text = text.join(' ');
    text = string.toCapitalizeCase(text);
    text = text.slice(0, -1);
    text = `${text}.`;
    return text;
};


Faker.word = (maxLength = 20, register = 'lower') => {
    let block;
    let word = '';

    do {
        block = crypto.randomBytes(maxLength).toString('hex').replace(/\d+/g, '');
        word += block;
    } while (word.length < maxLength);

    switch (register) {
        case 'upper':
            word = word.toUpperCase();
            break;
        case 'title':
            word = string.toCapitalizeCase(word);
            break;
        default:
            break;
    }

    return word;
};


Faker.float = (min = -1000, max = 1000) => (Math.random() * ((max - min) + 1)) + min;
Faker.integer = (min = -1000, max = 1000) => Math.floor(Faker.float(min, max));


Faker.value = () => {
    const k = Math.random();

    switch (true) {

        case (k < 0.1):
            return Math.random();
            break;
        case (k < 0.2):
            return new Date();
            break;
        case (k < 0.3):
            return Faker.array(5);
            break;
        case (k < 0.4):
            return new Date();
            break;
        case (k < 0.5):
            return Faker.integer(-1000, 1000);
            break;
        case (k < 0.6):
            return null;
            break;
        case (k < 0.7):
            return Math.random() > 0.5 ? true : false;
            break;
        case (k < 0.8):
            return () => {};
            break;
        case (k < 0.9):
            return {};
            break;
        default:
            return Faker.text(3, 10);
            break;
    }
};


Faker.array = (length = 10) => Array.from({ length }, () => Faker.value());


Faker.object = (countAttributes = 10) => {
    const obj = {};

    for (let i = 0; i < countAttributes; i += 1) {
        const name = Faker.word();
        obj[name] = Faker.value();
    }
    return obj;
};

exports.Faker = Faker;
