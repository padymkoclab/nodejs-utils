

var exports = module.exports = {};

/**
 * Create counter up counter
 *
 * API:
 * start() - run counter
 * getvalue() - get current value of counter
 * stop() - stop counter (value does not reset)
 * reset() - reset value of counter to 0
 * continue() - if counter was stoped, start it with old value
 */
exports.CounterTimer = function(){
    this.counter = null;
    this.value = 0;
    this.start = function(){
        parent_this = this;
        this.counter = setInterval(function(){
            parent_this.value++;
        }, 1000);
    };
    this.stop = function(){
        clearInterval(this.counter);
    };
    this.getvalue = function(){
        return this.value;
    };
    this.reset = function(){
        this.value = 0;
    };
    this.continue = function(){
        this.stop()
        this.start();
    };
}
