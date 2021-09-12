import refs from './refs.js'

class CountdownTimer{
constructor({ selector, targetDate }) {
  this.selector = selector;
  this.targetDate = targetDate;
  }

  intervalId = setInterval(() => {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    this.getTimeCount(time);
    this.finishTime(time);
  }, 1000);
  
  getTimeCount(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
 
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
  
  finishTime(time) {
    if (time < 0) {
      clearInterval(this.intervalId)
      refs.timer.textContent = 'happy new year 2022';
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021')
})

