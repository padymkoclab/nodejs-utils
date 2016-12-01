
const assert = require('assert');
const common = require('../utils/common');


describe('Tests for range()', function(){
    it('Return array by passed all arguments', function(){
        assert.deepEqual(
            common.range(-25, 16, 3),
            [-25, -22, -19, -16, -13, -10, -7, -4, -1, 2, 5, 8, 11, 14]
        );
    });
    it('Return array if not passed step', function(){
        assert.deepEqual(common.range(-3, 8), [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]);
    });
    it('Return array if not passed start and step', function(){
        assert.deepEqual(common.range(8), [0, 1, 2, 3, 4, 5, 6, 7]);
    });
    it('Return array contains single element if step is not possible', function(){
        assert.deepEqual(common.range(-19, 3, 30), [-19]);
    });
    it('Return array contains sigle element', function(){
        assert.deepEqual(common.range(30, 31), [30]);
    });
    it('Return empty array if start equal to end', function(){
        assert.deepEqual(common.range(30, 30), []);
    });
    it('Return array if step is negative number', function(){
        assert.deepEqual(common.range(30, 0, -5), [30, 25, 20, 15, 10, 5]);
    });
    it('Raise exception if step equal 0', function(){
        assert.throws(
            function(){ common.range(10, 0, 0)},
            /Step must be equal not zero/);
    });
});


describe('Tests for difarrays()', function(){
    it('If two arrays is equal', function(){
        assert.deepEqual(common.difarrays([2, 5, 8, 11, 14], [2, 5, 8, 11, 14]), []);
    });
    it('If two arrays is has shared elements', function(){
        assert.deepEqual(common.difarrays([78, -9, 11, 23, 0], [1, 4, 11, 23, 0]), [78, -9, 1, 4]);
    });
    it('If two arrays totally differents', function(){
        assert.deepEqual(
            common.difarrays([-21, -85, 90, 0, -25, 80, -11, 93], [-81, 48, -5, -87, -89]),
            [-21, -85, 90, 0, -25, 80, -11, 93, -81, 48, -5, -87, -89]
        );
    });
    it('If arrays contains dublication', function(){
        assert.deepEqual(
            common.difarrays([11, -68, -60, 11, -92, -54, 10, 88, 10], [-68, -60, 92, 0, 88]),
            [11, -92, -54, 10, 92, 0]
        );
    });
});


describe('Tests for unique()', function(){
    it('Array contains only unique elements same type', function(){
        assert.deepEqual(common.unique([1, 2, 3, 4, 5, 5, 6, 2, 2, 1]), [1, 2, 3, 4, 5, 6]);
    });
    it('Array contains only unique elements different types', function(){
        assert.deepEqual(common.unique([1.1, '2', 3.31, 0, 5, 5, 6, 2, 2, 1]), [1.1, '2', 3.31, 0, 5, 6, 2, 1]);
    });
    it('String in lowercase contains only unique characters', function(){
        assert.equal(common.unique('get_inner_text_all_tags_dom_without_children'), 'get_inrxalsdomwhuc');
    });
    it('String contains only unique characters', function(){
        assert.equal(common.unique('Return arRay if Step is negative Number'), 'Return ayifSpsgvNmb');
    });
    it('String contains only unique characters', function(){
        assert.equal(common.unique('AAAAAAAaaaaa'), 'Aa');
    });
    it('String contains only unique characters', function(){
        assert.equal(common.unique(''), '');
    });
    it('String contains only unique characters', function(){
        assert.equal(common.unique('   '), ' ');
    });
    it('String contains only unique characters', function(){
        assert.equal(common.unique('!!!!!!!!!!!!!!!!'), '!');
    });
    it('If passed not string or array', function(){
        assert.equal(common.unique(null), undefined);
        assert.equal(common.unique(undefined), undefined);
        assert.equal(common.unique(0), undefined);
        assert.equal(common.unique(1.21), undefined);
        assert.equal(common.unique(new function(){}), undefined);
    });
});
