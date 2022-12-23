const timerMinutes = document.querySelector('.timer__minutes')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMilliseconds = document.querySelector('.timer__milliseconds')
const startButton = document.querySelector('.stopwatch__start')
const stopButton = document.querySelector('.stopwatch__stop')
const resetButton = document.querySelector('.stopwatch__reset')

let intervalId;
let startTime;
let savedTime = 0;
const countdown = 25 * 60 * 1000; // 25 minutes in milliseconds

function startTimer() {
    startButton.disabled = true
    stopButton.disabled = false
    resetButton.disabled = false
    console.log('start')
  startTime = Date.now();
  intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
    startButton.disabled = false
    stopButton.disabled = true
    resetButton.disabled = false
    console.log('stop')
  savedTime += Date.now() - startTime;
  clearInterval(intervalId);
}

function resetTimer() {
    startButton.disabled = false
    stopButton.disabled = false
    resetButton.disabled = true
    console.log('reset')
  startTime = Date.now();
  savedTime = 0;
  updateTimer();
}

function updateTimer() {
  let millisElapsed = Date.now() - startTime + savedTime;
  let millisLeft = countdown - millisElapsed;
  if (millisLeft < 0) {
    millisLeft = 0;
    clearInterval(intervalId);
    intervalId = null;
  }
  let secondsLeft = millisLeft / 1000;
  let minutesLeft = secondsLeft / 60;

  let minutesText = Math.floor(minutesLeft).toString().padStart(2, '0');
  let secondsText = Math.floor(secondsLeft % 60).toString().padStart(2, '0');
  let millisText = Math.floor(millisLeft % 60).toString().padStart(2, '0');

   
  timerMilliseconds.innerHTML = millisText
  timerSeconds.innerHTML = secondsText
  timerMinutes.innerHTML = minutesText
}
