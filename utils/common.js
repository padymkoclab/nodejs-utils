
module.exports = exports = {};


exports.range = function(start, end, step){

    if (step === undefined && end == undefined){
        end = start;
        start = 0;
    }

    if (end === undefined){
        end = 1
    }

    if (step === undefined){
        step = 1
    }

    var array = new Array();

    if (step > 0){
        for (var i=start; i<end; i+=step){
            array.push(i);
        }
    } else if ( step < 0){
        for (var i=start; i>end; i+=step){
            array.push(i);
        }
    }
    else {
        throw new Error('Step must be equal not zero');
    }


    return array
}

exports.difarrays = function(array1, array2){

    array1 = exports.unique(array1);
    array2 = exports.unique(array2);

    var only_in_array1 = array1.filter(function(el, i) { return array2.indexOf(el) < 0});
    var only_in_array2 = array2.filter(function(el, i) { return array1.indexOf(el) < 0});

    Array.prototype.push.apply(only_in_array1, only_in_array2);
    return only_in_array1;
}


exports.unique = function(iterable){

    if (typeof(iterable) == 'string'){
        return iterable.split('').filter(
            function(el, index) { return iterable.indexOf(el) === index }
        ).join('');
    }
    else if (Array.isArray(iterable)){
        return iterable.filter(function(el, index) { return iterable.indexOf(el) == index });
    }
}
