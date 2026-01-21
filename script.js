// ДЗ № 18.1. - Таймер відліку

const timer = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

const setTime = 10 * 60 + 10;
let totalSeconds = setTime;
let intervalId = null;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function startTimer() {
  if (intervalId !== null) return;
  intervalId = setInterval(() => {
    totalSeconds--;
    timer.textContent = formatTime(totalSeconds);
    if (totalSeconds <= 0) {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  totalSeconds = setTime;
  timer.textContent = formatTime(totalSeconds);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

timer.textContent = formatTime(totalSeconds);
