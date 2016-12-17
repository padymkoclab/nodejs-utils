'use strict'

var exports = module.exports = {};

const ASCII_UPPERCASE = ( () => {
    var result = '';
    for (var i = 65; i < 91; i++) {
        result += String.fromCharCode(i);
    }
    return result;
}) ();


const ASCII_LOWERCASE = ( () => {
    var result = '';
    for (var i = 97; i < 123; i++) {
        result += String.fromCharCode(i);
    }
    return result;
}) ();


const ASCII_LETTERS = ASCII_UPPERCASE + ASCII_LOWERCASE;


var toTitleCase = (string) => {
    return string.split(' ')
        .map((string) => { return exports.toCapitalizeCase(string) })
        .join(' ');
}


var toCapitalizeCase = (string) => {
    return string.charAt(0)
        .toUpperCase() + string.slice(1)
        .toLowerCase();
}


var toSwapCase = (string) => {
    return string.split('').map((char) => {
        if (char == char.toUpperCase()) {
            return char.toLowerCase();
        } else {
            return char.toUpperCase();
        }
    }).join('')
}


exports.ASCII_LOWERCASE = ASCII_LOWERCASE;
exports.ASCII_UPPERCASE = ASCII_UPPERCASE;
exports.ASCII_LETTERS = ASCII_LETTERS;


exports.toTitleCase = toTitleCase;
exports.toCapitalizeCase = toCapitalizeCase;
