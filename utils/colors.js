/**
 *
 */


const assert = require('assert');


/**
 * Return a color`s value in the hex format by passed the RGB format.
 * @param  {integer} value1 An value in ranges from 0 to 255
 * @param  {integer} value2 An value in ranges from 0 to 255
 * @param  {integer} value3 An value in ranges from 0 to 255
 * @return {string}        A color`s value in the hex format
 */
const RGBtoHex = (value1, value2, value3) => {
    const values = [value1, value2, value3];
    let result = '#';
    for (let i = 0; i < 3; i += 1) {
        // validation input
        if (values[i] < 0 || values[i] > 255) throw new Error('An each value of RGB format must be ranges from 0 to 255');

        // append to result values as hex with at least width 2
        result += (('0' + values[i].toString(16)).slice(-2));
    }
    return result.toUpperCase();
};


/**
 * Convert a value from the hex format to RGB and return as an array
 * @param  {int} value A color`s value in the hex format
 * @return {array}     Array values of the RGB format
 */
const hexToRGB = (value) => {
    let val = value;

    val = (value[0] === '#') ? value.slice(1) : value;

    if ([3, 6].indexOf(val.length) === -1) throw new Error(`Incorect a value of the hex format: ${value}`);

    if (val.length === 3) val = val.split('').map(item => item.repeat(2)).join('');

    return val.match(/.{2}/g).map(item => parseInt(`0x${item}`, 16));
};

assert.deepEqual(hexToRGB('fff'), [255, 255, 255]);
assert.deepEqual(hexToRGB('#fff'), [255, 255, 255]);
assert.deepEqual(hexToRGB('#000000'), [0, 0, 0]);
assert.deepEqual(hexToRGB('000000'), [0, 0, 0]);
assert.deepEqual(hexToRGB('#d7dee8'), [215, 222, 232]);
assert.deepEqual(hexToRGB('#1E2F49'), [30, 47, 73]);
assert.deepEqual(hexToRGB('#030914'), [3, 9, 20]);

assert.equal(RGBtoHex(255, 255, 255), '#FFFFFF');
assert.equal(RGBtoHex(0, 0, 0), '#000000');
assert.equal(RGBtoHex(96, 102, 112), '#606670');
assert.equal(RGBtoHex(199, 204, 214), '#C7CCD6');
assert.equal(RGBtoHex(22, 99, 224), '#1663E0');
assert.equal(RGBtoHex(0, 8, 20), '#000814');


module.exports.RGBtoHex = RGBtoHex;
module.exports.hexToRGB = hexToRGB;
