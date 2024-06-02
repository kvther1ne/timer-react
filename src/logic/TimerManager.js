class TimerManager {
  constructor() {
    this.timers = {};
  }

  addTimer(id, duration, callback) {
    if (this.timers[id]) {
      throw new Error(`Timer with id ${id} already exists.`);
    }
    this.timers[id] = {
      id,
      duration,
      callback,
      remaining: duration,
      active: false,
      interval: null,
    };
  }

  removeTimer(id) {
    this.stopTimer(id);
    delete this.timers[id];
  }

  startTimer(id) {
    const timer = this.timers[id];
    if (!timer) {
      throw new Error(`Timer with id ${id} does not exist.`);
    }
    if (timer.active) {
      throw new Error(`Timer with id ${id} is already active.`);
    }

    timer.active = true;
    timer.interval = setInterval(() => {
      timer.remaining -= 1000;
      if (timer.remaining <= 0) {
        this.stopTimer(id);
        timer.callback();
      }
    }, 1000);
  }

  stopTimer(id) {
    const timer = this.timers[id];
    if (timer && timer.active) {
      clearInterval(timer.interval);
      timer.active = false;
    }
  }

  resetTimer(id) {
    const timer = this.timers[id];
    if (timer) {
      this.stopTimer(id);
      timer.remaining = timer.duration;
    }
  }

  updateTimer(id, newDuration) {
    const timer = this.timers[id];
    if (timer) {
      timer.duration = newDuration;
      timer.remaining = newDuration;
      if (timer.active) {
        this.stopTimer(id);
        this.startTimer(id);
      }
    }
  }

  getTimer(id) {
    return this.timers[id];
  }

  getAllTimers() {
    return this.timers;
  }
}

export default TimerManager;
