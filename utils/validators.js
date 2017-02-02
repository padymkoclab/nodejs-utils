/**
 * Validators
 */


const email = value => Boolean(value.match(/^\w+@\w+-?\w+\.\w{2,5}$/));


const url = value => Boolean(value.match(
    /^https?:\/\/((www\.\w+(-?\w+)?\.\w+(\.\w+)?)|((?!www\.)\w+(-?\w+)?\.\w+(\.\w+)?))((\/[~\w\d]+[×\?\.\-\/+=&\w\d]*[\w\/]?$)|(\/$)|$)/
));


// http://stackoverflow.com/questions/13027854/javascript-regular-expression-validation-for-domain-name
// http://stackoverflow.com/questions/31563489/domain-name-validation-using-regular-expression
const domain = value => Boolean(value.match(/(^www\.\w+(-?\w+)?\.\w+$)|(^(?!www\.)\w+(-?\w+)?\.\w+(\.\w+)?$)/));


const filepath = value => true;
const dirpath = value => true;

// console.log(filepath('adsdasdsa'));
// console.log(filepath(''));
// console.log(filepath('./'));
// console.log(filepath('./dsdd/'));


module.exports.email = email;
module.exports.domain = domain;
module.exports.url = url;
module.exports.dirpath = dirpath;
module.exports.filepath = filepath;
module.exports.url = url;
