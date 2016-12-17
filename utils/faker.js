'strict';


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


Faker.integer = (min = 0, max = 1000, sign = '?') => {
    const k = Math.random();
    let number = k * (max - min + 1) + min;

    switch (sign) {
        case '?':
            if (k < 0.5) {
                number = -number;
            }
            break;
        case '-':
            number = -number;
        default:
            break;
    }

    return number;
};


Faker.value = () => {
    let value;
    const k = Math.random();

    if (k < 0.1) {
        value = Math.random();
    } else if (k < 0.2) {
        value = new Date();
    } else if (k < 0.3) {
        value = Faker.text();
    } else if (k < 0.4) {
        value = new Date();
    } else if (k < 0.5) {
        value = Faker.integer();
    } else if (k < 0.6) {
        value = null;
    } else if (k < 0.7) {
        value = Math.random() > 0.5 ? true : false;
    } else if (k < 0.8) {
        value = () => {};
    } else if (k < 0.9) {
        value = {};
    } else {
        value = Faker.array();
    }
    return value;
};


Faker.array = (length) => {
    return Array.from({ length: length }, () => { return 1; });
};


Faker.object = () => {
    const obj = {};
    const countAttributes = Math.random() * 20 % 20;

    for (let i = 0; i < countAttributes; i++) {
        const name = Faker.word();
        obj[name] = Faker.value();
    }
    return obj;
};

exports.Faker = Faker;


console.log(Faker.word());
console.log(Faker.word(10));
console.log(Faker.word(10, 'upper'));
console.log(Faker.word(10, 'lower'));
console.log(Faker.word(10, 'title'));
