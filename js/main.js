'use strict';
const themeBtn = document.querySelector('.btn-theme');
const startBtn = document.querySelector('.btn-start');

const stopBtn = document.querySelector('.btn-stop');
const resetBtn = document.querySelector('.btn-reset');
const allButtons = document.querySelectorAll('.btn');
let timerIsCounting = false;
let stopWatchScreen = document.querySelector('.stopwatch__timer');
const main = document.querySelector('.main');
const stopWatchContaier = document.querySelector('.stopwatch');
let hr = 0;
let min = 0;
let sec = 0;
let vat;
themeBtn.addEventListener('click', toggleTheme);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
startBtn.addEventListener('click', startTimer);

// ##FUNCTIONS##FUNCTIONS##FUNCTIONS
function toggleTheme() {
  main.classList.toggle('dark-theme');
  stopWatchContaier.classList.toggle('dark-theme');
  allButtons.forEach(item => item.classList.toggle('dark-theme'));
}
function startTimer() {
  if (!timerIsCounting) {
    vat = setInterval(startTimercode, 1000);
    timerIsCounting = true;
  }
  return vat;
}
function startTimercode() {
  sec++;
  console.log('working');
  if (min > 59) {
    hr++;
    min = 0;
  }

  min = sec > 59 ? min + 1 : min;

  sec = sec > 59 ? 0 : sec;
  let hrTag = hr > 9 ? '' : 0;
  let minTag = min > 9 ? '' : 0;
  let secTag = sec > 9 ? '' : 0;
  stopWatchScreen.textContent = `${hrTag}${hr}:${minTag}${min}:${secTag}${sec}`;
  timerIsCounting = true;
}
function stopTimer() {
  clearInterval(vat);
  timerIsCounting = false;
}
function resetTimer() {
  stopTimer();
  hr = '00';
  min = '00';
  sec = '00';
  stopWatchScreen.textContent = `${hr}:${min}:${sec}`;
  hr = 0;
  min = 0;
  sec = 0;
  console.log(typeof hr);
}
// while (timerIsCounting) {
//   console.log('working');
//   sec++;
//   stopWatchScreen.textContent = `${hr}:${min}:${sec}`;
//   timerIsCounting = false;
// }

// function toggleMenu() {
//   if (!showMenu) {
//     hamBurger.classList.add('open');
//     nav.classList.add('open');
//     menuNav.classList.add('open');
//     menuNavItem.forEach(item => item.classList.add('open'));
//     showMenu = true;
//   } else {
//     hamBurger.classList.remove('open');
//     showMenu = false;
//     nav.classList.remove('open');
//     menuNav.classList.remove('open');
//     menuNavItem.forEach(item => item.classList.remove('open'));
//   }
// }
