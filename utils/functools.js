/*

*/


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

    listCallbacks.reduce((previousPromise, currentFunc) => previousPromise
        .then(() => currentFunc(), Promise.resolve()));
};


/**
 * Return array paraments of a function
 * @param  {[function]} func function
 * @return {[array]}      parammeters the functions
 *
 */
const getFunctionParameters = (func) => {
    if (typeof func !== 'function') {
        throw new Error('A argument is not function.');
    }
    const args = func.toString().match(/\((.*)\)/)[1];
    return args.split(',').map((arg) => {
        if (arg.indexOf('=') === -1) return arg.trim();
        return arg
            .split('=')
            .map(val => val.trim())
            .join(' = ');
    });
};


module.exports.partial = partial;
module.exports.callbacks = callbacks;
module.exports.getFunctionParameters = getFunctionParameters;
