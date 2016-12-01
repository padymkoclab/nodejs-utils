

var exports = module.exports = {};


exports.email = function(value){
    return Boolean(value.match(/^\w+@\w+-?\w+\.\w{2,5}$/));
};


exports.url = function(value){

    return Boolean(value.match(
        /^https?:\/\/((www\.\w+(-?\w+)?\.\w+(\.\w+)?)|((?!www\.)\w+(-?\w+)?\.\w+(\.\w+)?))((\/[~\w\d]+[×\?\.\-\/+=&\w\d]*[\w\/]?$)|(\/$)|$)/
    ));
};


exports.domain = function(value){
    return Boolean(value.match(/(^www\.\w+(-?\w+)?\.\w+$)|(^(?!www\.)\w+(-?\w+)?\.\w+(\.\w+)?$)/));
};


