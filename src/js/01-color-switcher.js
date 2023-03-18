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
const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
startEl.addEventListener('click', addStylesBody);
function addStylesBody() {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  if (timerId) {
    startEl.removeEventListener('click', addStylesBody);
  }
}
stopEl.addEventListener('click', () => {
  clearInterval(timerId);
  startEl.addEventListener('click', addStylesBody);
});



