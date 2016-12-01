
module.exports = exports = {};


exports.partial = function(func){
    var oldargs = [].slice.apply(arguments)
    oldargs = oldargs.slice(1);
    return function (){
        var restargs = [].slice.apply(arguments);
        args = oldargs.concat(restargs)
        return func.apply(this, args)
    }
}


exports.callbacks = function(){

    // copy passed arguments
    var callbacks = arguments;

    // create array functions
    var callbacks = Object.keys(callbacks).map(function(el){ return callbacks[el] });

    callbacks.reduce(function(previousPromise, currentFunc){
        return previousPromise.then(
            function(){
                currentFunc();
            }
        )
    }, Promise.resolve());
}
