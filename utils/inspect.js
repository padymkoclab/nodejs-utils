/**
 *
 */


const functools = require('./functools');


/**
 * Display details about an object at run-time
 * @param  {[any]} target Any object
 * @return Nothing, all information will be display
 */
const introspect = (target) => {
    // get type of a target
    const typeTarget = typeof target;

    // variable for type attribute of the target
    let typeAttr;

    // for properties and methods of the target
    let properties = [];
    let methods = [];

    // if target is array, keep names all enumerable properties, simple put - numbers of indexes
    // otherwise set to null
    const enumerableProperties = Array.isArray(target) ? Object.keys(target) : null;

    // determination functions and properties of the target by a parent object
    Object.getOwnPropertyNames(Object.getPrototypeOf(target)).forEach((name) => {
        if (typeof target[name] === 'function') {
            methods.push(name);
        } else if (target.hasOwnProperty(name) && properties.indexOf(name) === -1) {
            properties.push(name);
        }
    });

    // determination other functions and properties of the target
    // filter it, if a name already added or if it is an array - filter all values of the indexes
    Object.getOwnPropertyNames(target).forEach((name) => {
        if (enumerableProperties !== null && enumerableProperties.indexOf(name) !== -1) {
            return;
        }
        if (typeof target[name] === 'function') {
            methods.push(name);
        } else if (target.hasOwnProperty(name) && properties.indexOf(name) === -1) {
            properties.push(name);
        }
    });

    // order properties and methods by name in reverse
    properties = properties.reverse();
    methods = methods.reverse();

    // display an obtained information by groups
    console.log(`${typeTarget}: "${target}"`);
    console.log(`\n\tProperties: ${properties.length}\n\t------------------`);
    for (let i = properties.length - 1; i >= 0; i -= 1) {
        typeAttr = typeof target[properties[i]];
        console.log(`\t\t${properties[i]} --> ${typeAttr}`);
    }

    console.log(`\n\tMethods: ${methods.length}\n\t------------------`);
    for (let i = methods.length - 1; i >= 0; i -= 1) {
        let args = functools.getFunctionParameters(target[methods[i]]);
        args = args.join(', ');
        console.log(`\t\t${methods[i]} (${args})`);
    }
};


module.exports.introspect = introspect;
