
var exports = module.exports = {};


exports.choice = function(array){
    return array[Math.floor(Math.random() * array.length)];
}


exports.sample = function(array, count){

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


exports.randint = function(min, max){

    if (max < min){
        throw new Error('Max is less than min');
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}
