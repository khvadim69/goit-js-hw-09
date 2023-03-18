// const startBtn = document.querySelector("button[data-start]");
// const stopBtn = document.querySelector("button[data-stop]");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     function getRandomHexColor() {
//         return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//       }
//   }, 1000);
// });
//  console.log(getRandomHexColor());
// let backgroundcolorBody = getRandomHexColor()


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   // console.log(`Interval with id ${timerId} has stopped!`);
// });

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startBtn.addEventListener('click', addStylesBody);
let timerId = null;
function addStylesBody() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
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


