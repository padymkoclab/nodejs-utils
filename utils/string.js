/*

*/


const ASCII_UPPERCASE = (() => {
    let result = '';
    for (let i = 65; i < 91; i += 1) {
        result += String.fromCharCode(i);
    }
    return result;
})();


const ASCII_LOWERCASE = (() => {
    let result = '';
    for (let i = 97; i < 123; i += 1) {
        result += String.fromCharCode(i);
    }
    return result;
})();


const ASCII_LETTERS = ASCII_UPPERCASE + ASCII_LOWERCASE;


const toTitleCase = str => str.split(' ')
    .map(str_ => exports.toCapitalizeCase(str_))
    .join(' ');


const toCapitalizeCase = string => string.charAt(0)
    .toUpperCase() + string.slice(1)
    .toLowerCase();


const toSwapCase = string => string.split('')
    .map((char) => {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        return char.toUpperCase();
    })
    .join('');


const unique = (str) => {
    if (typeof str !== 'string') {
        throw TypeError('It is not string');
    }
    return str
        .split('')
        .filter((el, index) => str.indexOf(el) === index)
        .join('');
};


module.exports.ASCII_LOWERCASE = ASCII_LOWERCASE;
module.exports.ASCII_UPPERCASE = ASCII_UPPERCASE;
module.exports.ASCII_LETTERS = ASCII_LETTERS;

module.exports.toTitleCase = toTitleCase;
module.exports.toCapitalizeCase = toCapitalizeCase;
module.exports.toSwapCase = toSwapCase;
module.exports.unique = unique;
