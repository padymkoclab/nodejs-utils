/*

 */


const factorial = (number) => {
    if ([0, 1].indexOf(number) !== -1) {
        return number;
    } else if (number < 0) {
        return NaN;
    }
    return factorial(number - 1) * number;
};


const fibonacci = (count) => {
    if ([0, 1].indexOf(count) !== -1) {
        return count;
    } else if (count < 0) {
        return NaN;
    }
    return fibonacci(count - 1) + fibonacci(count - 2);
};


module.exports.factorial = factorial;
module.exports.fibonacci = fibonacci;

