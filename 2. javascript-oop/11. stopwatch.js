function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = () => {
        if (running) {
            throw new Error('already started');
        }
        running = true;
        startTime = new Date();
    };

    this.stop = () => {
        if (!running) {
            throw new Error('not started');
        }
        running = false;
        endTime = new Date();

        const secondElapsed = ((endTime.getTime() - startTime.getTime()) / 1000);
        duration += secondElapsed;
    };

    this.reset = () => {
        startTime, endTime, running, duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: () => {
            return duration;
        },
    });
};

const stopwatchObj = new Stopwatch();

stopwatchObj.start();
console.log(stopwatchObj.duration);

setTimeout(() => {
    stopwatchObj.stop();
    console.log(stopwatchObj.duration);
}, 5000);
