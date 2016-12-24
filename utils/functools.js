/*

*/


const exports = module.exports = {};


const partial = (func) => {
    let oldargs = [].slice.apply(arguments);
    oldargs = oldargs.slice(1);
    return () => {
        const restargs = [].slice.apply(arguments);
        const args = oldargs.concat(restargs);
        return func.apply(this, args);
    };
};


const callbacks = () => {
    // copy passed arguments
    let listCallbacks = arguments;

    // create array functions
    listCallbacks = Object.keys(listCallbacks).map(el => listCallbacks[el]);

    listCallbacks.reduce((previousPromise, currentFunc) => previousPromise.then(
        () => currentFunc(),
    ), Promise.resolve());
};


exports.partial = partial;
exports.callbacks = callbacks;
