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


module.exports.range = range;
