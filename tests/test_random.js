
const assert = require('assert');
const random = require('../utils/random');

describe('Test choice()', function() {
    it('Expect a random element from a array', function() {
        var array = new Array(1,2,3,4,5);
        var el = random.choice(array);
        assert.notEqual(array.indexOf(el), -1);
        var el = random.choice(array);
        assert.notEqual(array.indexOf(el), -1);
        var el = random.choice(array);
        assert.notEqual(array.indexOf(el), -1);
    });
    it('Choice from an empty array', function() {
        assert.equal(random.choice(new Array()), undefined);
    });
});


describe('Test sample()', function() {
    it('Sample from empty an array', function() {
        assert.deepEqual(random.sample([], 1), []);
    });
    it('Sample nothing from an array', function() {
        var array = [1, 's', 2, 31];
        assert.deepEqual(random.sample(array, 0), undefined);
    });
    it('Sample same array if count more length of array', function() {
        var array = [1, 's', 2, 31];
        assert.deepEqual(random.sample(array, 100), array);
    });
    it('Sample same array if count equal length of array', function() {
        var array = [1, 's', 2, 31];
        assert.deepEqual(random.sample(array, 4), array);
    });
    it('Sample a single element from an array', function() {
        var array = [1, 's', [], 31.121];
        var sample = random.sample(array, 1);
        assert.equal(sample.length, 1);
        assert.notEqual(array.indexOf(sample[0]), -1);
    });
    it('Sample a multiply elements from an array', function() {
        var array = [1, false, true, [], 31.121, 21, 'Text'];
        var sample = random.sample(array, 5);
        assert.equal(sample.length, 5);
        assert.notEqual(array.indexOf(sample[0]), -1);
        assert.notEqual(array.indexOf(sample[1]), -1);
        assert.notEqual(array.indexOf(sample[2]), -1);
        assert.notEqual(array.indexOf(sample[3]), -1);
        assert.notEqual(array.indexOf(sample[4]), -1);
    });
});


describe('Test randint()', function() {
    it('Random integer if max equal to min', function() {
        var randint = random.randint(10, 10);
        assert(Number.isInteger(randint));
        assert(randint, 10);
    });
    it('Random integer in range from -100 to 100', function() {
        var randint = random.randint(-100, 100);
        assert(Number.isInteger(randint));
        assert( randint >= -100 && randint <= 100 );
    });
    it('Throw exception if max if less min', function() {
        assert.throws(function(){random.randint(20, 10)}, Error);
    });
});

