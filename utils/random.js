/*

 */


const choice = array => array[Math.floor(Math.random() * array.length)];


const sample = (array, count) => {

    if (typeof array === '') {

    }

    const lenArray = array.length;

    if (lenArray === 0) {
        return array;
    }

    if (count > 0) {
        if (count >= lenArray) {
            return array;
        }
        const shuffledArray = array.sort(() => Math.random() > 0.5);
        return shuffledArray.slice(0, count);
    }
    throw new ValueError();
};


// console.log(sample([1,2,3], 2));
// console.log(sample('[1,2,3]', 2));

module.exports.choice = choice;
module.exports.sample = sample;
