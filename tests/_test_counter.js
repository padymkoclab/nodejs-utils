
const assert = require('assert');
const counter = require('../counter');


describe('Test of a counter', function() {
    it('Start counter and stop after some time', function(done){
        this.timeout(4000);
        var counter_timer = new counter.CounterTimer();
        counter_timer.start();
        setTimeout(function(){
            counter_timer.stop();
            assert.equal(counter_timer.getvalue(), 3);
            done();
        }, 3010);
    });
    it('Start counter, then reset after some time and stop after some time', function(done){
        this.timeout(5000);
        var counter_timer = new counter.CounterTimer();
        counter_timer.start();
        setTimeout(function(){
            counter_timer.reset();
            assert.equal(counter_timer.getvalue(), 0);
            setTimeout(function(){
                counter_timer.stop();
                assert.equal(counter_timer.getvalue(), 2);
                done();
            }, 2000);
        }, 2000);
    });
    it('Start counter and stop after some time and continue again', function(done){
        this.timeout(8000);
        var counter_timer = new counter.CounterTimer();
        counter_timer.start();
        setTimeout(function(){
            counter_timer.stop();
            assert.equal(counter_timer.getvalue(), 3);
            setTimeout(function(){
                counter_timer.continue();
                setTimeout(function(){
                    done();
                    assert.equal(counter_timer.getvalue(), 7);
                }, 2000);
            }, 2000);
        }, 3010);
    });
    it('Get value if counter is not started', function(){
        var counter_timer = new counter.CounterTimer();
        assert.equal(counter_timer.getvalue(), 0);
    });
});
