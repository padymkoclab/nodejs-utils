
const assert = require('assert');
const functools = require('../utils/functools');


describe('Test partial', function(){
    it('Passed a by parts of arguments', function(){
        var sum = function(a, b , c, d){ return a + b + c + d;};
        var partial_sum = functools.partial(sum, 6, -17)
        assert.equal(partial_sum(-14, 10), -15);
        assert.equal(partial_sum(23, 15), 27);
    });
    it('Passed all arguments for first call', function(){
        var substraction = function(a, b , c, d){ return a - b - c - d;};
        var partial_substraction = functools.partial(substraction, 50, 11, 70, -89)
        assert.equal(partial_substraction(), 58);
    });
    it('Passed all arguments for second call', function(){
        var multiplication = function(a, b , c, d){ return a * b * c * d;};
        var multiplication = functools.partial(multiplication)
        assert.equal(multiplication(32, 15, 78, 20), 748800);
        assert.equal(multiplication(20, -89, 1, 0), 0);
    });
});


describe('Test callbacks', function(){
    it('Several functions must be execute one by one', function(done){
        var values = [];

        var f1 = function(){
            for (var i = 0; i < 5000000; i++) {}
            values.push(1);
        }
        var f2 = function(){
            for (var i = 0; i < 100; i++) {}
            values.push(2);
        }
        var f3 = function(){
            for (var i = 0; i < 30000; i++) {}
            values.push(3);
        }
        var f4 = function(){
            for (var i = 0; i < 1000; i++) {}
            values.push(4);

            // asynchronous code is must be completed here
            done();
            assert.deepEqual([1, 2, 3, 4], values);
        }

        functools.callbacks(f1, f2, f3, f4);
    });
});



