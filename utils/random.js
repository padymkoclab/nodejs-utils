'use strict';

const crypto = require('crypto');
const string = require('./string.js');

var exports = module.exports = {};


exports.choice = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}


exports.sample = (array, count) => {

    var len_array = array.length;
    if (len_array === 0){
        return array;
    }

    if (count > 0) {

        if (count > len_array || count == len_array){
            return array;
        }

        array = array.sort(function(){ return .5 > Math.random()});
        return array.slice(0, count);
    }
}


exports.randint = (min, max) => {

    if (max < min){
        throw new Error('Max is less than min');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}


exports.randArray = function () {

    var generate_array = (length) => Array.from({length: length}, () => Math.random());

    var args = arguments;

    if (args.length === 0) {
        return generate_array(10);
    } else {
        var rows = args[0];
        var columns = args[1];

        var array = [];

        for (var i = 0; i < rows; i++) {
            array.push(generate_array(columns));
        }
        return array;
    }

}
