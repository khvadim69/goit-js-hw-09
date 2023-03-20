import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const datetimeEl = document.querySelector('#datetime-picker');
const startEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');
startEl.disabled = true;
let selectDate = null;
const options = {
  isActiv: false,
  interval: null,
  // selectDate: null,
  enableTime: true,
  time_24hr: true,
  defaultDate: Date.now(),
  minuteIncrement: 1,
  onClose([selectedDates]) {
    if (selectedDates <= Date.now()) {
      Notiflix.Report.info('Please choose a date in the future');
      startEl.disabled = true;
      // selectDate = null;
      this.selectDate = null;
    } else {
      startEl.disabled = false;
      selectDate = selectedDates;
      // this.selectDate = selectedDates;
      console.log(selectDate);
      return;
    }
  },
  start() {
    if (this.isActiv) {
      return;
    }
    let delta = 0;
    this.interval = setInterval(() => {
      delta = selectDate - Date.now();
      // delta = this.selectDate - Date.now();
      if (delta < 0) {
        return clearInterval(this.interval);
      }
      this.isActiv = true;
      const components = convertMs(delta);
      daysEl.textContent = addLeadingZero(components.days);
      hoursEl.textContent = addLeadingZero(components.hours);
      minutesEl.textContent = addLeadingZero(components.minutes);
      secondsEl.textContent = addLeadingZero(components.seconds);
    }, 1000);
  },
};
flatpickr(datetimeEl, options);
startEl.addEventListener('click', () => {
  options.start();
});
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
