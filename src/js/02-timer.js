import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const datetimeEl = document.querySelector('#datetime-picker');
console.log(datetimeEl);
const startEl = document.querySelector('button[data-start]');
console.log(startEl);
const daysEl = document.querySelector("span[data-days]");
console.log(daysEl)
const hoursEl = document.querySelector("span[data-hours]");
console.log(hoursEl)
const minutesEl = document.querySelector("span[data-minutes]");
console.log(minutesEl)
const secondsEl = document.querySelector("span[data-seconds]");
console.log(secondsEl)
flatpickr(datetimeEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectDate = null;
    if (selectedDates[0] <= new Date()) {
      window.alert('Please choose a date in the future');
      startEl.disabled = true;
      selectDate = null;
    } else {
      startEl.disabled = false;
      selectDate = selectedDates[0];
      console.log(selectDate);
    }
    setInterval(() => {
      if ((this.defaultDate = selectDate)) {
        const defference = selectDate - new Date();
        const components = convertMs(defference);
        console.log(components);
        daysEl.textContent = components.days;
        hoursEl.textContent = components.hours;
        minutesEl.textContent = components.minutes;
        secondsEl.textContent = components.seconds;
      }
    }, 1000);
  },
});
function pad(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}
// 