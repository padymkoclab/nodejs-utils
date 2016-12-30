/*

*/


const range = (start, end, step = 1) => {
    const array = [];
    let Start = start;
    let End = end;

    if (end === undefined) {
        End = start;
        Start = 0;
    }

    if (step > 0) {
        for (let i = Start; i < End; i += step) {
            array.push(i);
        }
    } else if (step < 0) {
        for (let i = Start; i < End; i -= step) {
            array.push(i);
        }
    } else {
        throw new Error('Step must be equal not zero');
    }

    return array;
};


const zip = (...arrays) => {
    const length = Math.min(...arrays.map(arr => arr.length));
    return Array.from({ length }, (value, index) => arrays.map((array => array[index])));
};


const zipLongest = (placeholder = undefined, ...arrays) => {
    const length = Math.max(...arrays.map(arr => arr.length));
    return Array.from(
        { length }, (value, index) => arrays.map(
            array => array.length - 1 >= index ? array[index] : placeholder
        )
    );
};


module.exports.range = range;
module.exports.zip = zip;
module.exports.zipLongest = zipLongest;
