class Timer {
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener('click', this.start);
    this.pauseButton.addEventListener('click', this.pause);
  }

  // 3 ways to determine the value of this inside a method
  // 1. Did you define function with => arrow function?
  //  >> console log(this) on 1st valid line above arrow, value of this
  //     will be equal to that console log
  // 2. Did you 'bind / call / apply' on function when invoked?
  //  >> equal to the first argument of .bind, .call, .apply
  // 3. All other cases
  //  >> equal to whatever is to the left of the '.' in method call

  // With arrow function
  // start = () => {
  //   this.importantMethodToCall();
  // };

  // or with bind, but easier to use arrow functions, because with bind you
  // need to change how method is invoked: 'this.start' to 'this.start.bind(this)'
  // this.startButton.addEventListener('click', this.start.bind(this));
  // start() {
  //   this.importantMethodToCall();
  // }

  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.intervalId = setInterval(this.tick, 20);
  };

  pause = () => {
    clearInterval(this.intervalId);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.02;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
