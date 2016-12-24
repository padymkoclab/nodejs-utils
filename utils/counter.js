/*

 */

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
const CounterTimer = () => {
    this.counter = null;
    this.value = 0;
    this.start = () => {
        const parentThis = this;
        this.counter = setInterval(() => {
            parentThis.value += 1;
        }, 1000);
    };
    this.stop = () => {
        clearInterval(this.counter);
    };
    this.getvalue = () => this.value;
    this.reset = () => {
        this.value = 0;
    };
    this.continue = () => {
        this.stop();
        this.start();
    };
};


module.exports.CounterTimer = CounterTimer;
