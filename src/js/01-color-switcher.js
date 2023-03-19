
const bodyBgrColor = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.addEventListener('click', addStylesBody);
let timerId = null;
function addStylesBody() {
  timerId = setInterval(() => {
    bodyBgrColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (timerId) {
    startBtn.disabled = true;
    startBtn.removeEventListener('click', addStylesBody);
  }
}
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.addEventListener('click', addStylesBody);
  startBtn.disabled = false;
});