/*

 */

const email = value => Boolean(value.match(/^\w+@\w+-?\w+\.\w{2,5}$/));


const url = value => Boolean(value.match(
    /^https?:\/\/((www\.\w+(-?\w+)?\.\w+(\.\w+)?)|((?!www\.)\w+(-?\w+)?\.\w+(\.\w+)?))((\/[~\w\d]+[×\?\.\-\/+=&\w\d]*[\w\/]?$)|(\/$)|$)/
));


const domain = value => Boolean(value.match(/(^www\.\w+(-?\w+)?\.\w+$)|(^(?!www\.)\w+(-?\w+)?\.\w+(\.\w+)?$)/));


module.exports.email = email;
module.exports.domain = domain;
module.exports.url = url;
