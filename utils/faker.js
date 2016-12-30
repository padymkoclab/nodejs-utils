/*

*/


const crypto = require('crypto');

const string = require('./string');
const faker = require('faker');


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


Faker.char = () => String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97));;
Faker.float = (min = -1000, max = 1000) => (Math.random() * ((max - min) + 1)) + min;
Faker.integer = (min = -1000, max = 1000) => Math.floor(Faker.float(min, max));
Faker.date = () => new Date(
    (new Date()).getFullYear() - Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 29)
);


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
Faker.arrayInteger = (length = 10) => Array.apply(null, Array(length)).map(() => Faker.integer());
Faker.arrayDates = (length = 10) => Array.apply(null, Array(length)).map(() => Faker.date());
Faker.arrayChars = (length = 10) => Array.apply(null, Array(length)).map(() => Faker.char());
Faker.arrayStrings = (length = 10) => Array.apply(null, Array(length)).map(() => Faker.word());


Faker.object = (countAttributes = 10) => {
    const obj = {};

    for (let i = 0; i < countAttributes; i += 1) {
        const name = Faker.word();
        obj[name] = Faker.value();
    }
    return obj;
};


module.exports.Faker = Faker;


const FAKER_PROVIDERS = {
    address: [
        "zipCode",
        "city",
        "cityPrefix",
        "citySuffix",
        "streetName",
        "streetAddress",
        "streetSuffix",
        "streetPrefix",
        "secondaryAddress",
        "county",
        "country",
        "countryCode",
        "state",
        "stateAbbr",
        "latitude",
        "longitude",
    ],
    commerce: [
        'color',
        "department",
        "productName",
        "price",
        "productAdjective",
        "productMaterial",
        "product",
    ],
    company: [
        "suffixes",
        "companyName",
        "companySuffix",
        "catchPhrase",
        "bs",
        "catchPhraseAdjective",
        "catchPhraseDescriptor",
        "catchPhraseNoun",
        "bsAdjective",
        "bsBuzz",
        "bsNoun",
    ],
    date: [
        'past', 'future', 'between', 'recent', 'month', 'weekday',
    ],
    finance: [
        'account',
        "accountName",
        "mask",
        "amount",
        "transactionType",
        "currencyCode",
        "currencyName",
        "currencySymbol",
        "bitcoinAddress",
    ],
    hacker: [
        'abbreviation',
        "adjective",
        "noun",
        "verb",
        "ingverb",
        "phrase",
    ],
    helpers: [
        'randomize',
        "slugify",
        "replaceSymbolWithNumber",
        "replaceSymbols",
        "shuffle",
        "mustache",
        "createCard",
        "contextualCard",
        "userCard",
        "createTransaction",
    ],
    image: [
        'image',
        "avatar",
        "imageUrl",
        "abstract",
        "animals",
        "business",
        "cats",
        "city",
        "food",
        "nightlife",
        "fashion",
        "people",
        "nature",
        "sports",
        "technics",
        "transport",
    ],
    internet: [
        'avatar',
        "email",
        "exampleEmail",
        "userName",
        "protocol",
        "url",
        "domainName",
        "domainSuffix",
        "domainWord",
        "ip",
        "userAgent",
        "color",
        "mac",
        "password",
    ],
    lorem: [
        'word',
        "words",
        "sentence",
        "sentences",
        "paragraph",
        "paragraphs",
        "text",
        "lines",
    ],
    name: [
        'firstName',
        "lastName",
        "findName",
        "jobTitle",
        "prefix",
        "suffix",
        "title",
        "jobDescriptor",
        "jobArea",
        "jobType",
    ],
    phone: [
        'phoneNumber', 'phoneNumberFormat', 'phoneFormats',
    ],
    random: [
        'number',
        "arrayElement",
        "objectElement",
        "uuid",
        "boolean",
        "word",
        "words",
        "image",
        "locale",
        "alphaNumeric",
    ],
    system: [
        'fileName',
        "commonFileName",
        "mimeType",
        "commonFileType",
        "commonFileExt",
        "fileType",
        "fileExt",
        "directoryPath",
        "filePath",
        "semver",
    ]
};

const display_fakers = () => {
    for (category in FAKER_PROVIDERS) {
        console.log(`\n${category}`)
        for (provider of FAKER_PROVIDERS[category]) {
            console.log(`\t${category}.${provider}`);

            for (i = 0; i < 10; i += 1) {
                console.log(`\t\t${faker[category][provider]()}`);
            }

        }
    }
}
