// 程式碼寫這裡
const timer = document.querySelector(".timer");
let defaultSeconds = 120;
let totalSeconds;
let running = false;
let timerID;
let paused = false;

function updateTimer(seconds) {
  // floor() 方法會回傳小於等於所給數字的最大整數。
  // padStart() 方法會用另一個字串填充當前字串，以便當前字串達到給定的長度。填充從當前字串的開頭（左側）應用的。
  let mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  let secs = String(seconds % 60).padStart(2, "0");

  timer.textContent = `${mins}:${secs}`;

  if (seconds === 0) {
    timer.classList.add("times-up");
  }
}

function timesUp() {
  clearInterval(timerID);
  running = false;
  updateTimer(0);
  playSound();
}

function playSound() {
  // 畫面上要有互動才能播放聲音，不然自動撥放會出錯，在某個版本的 Chrome 會出錯
  let sound = new Audio("sounds/news.mp3");
  sound.play();
}

function initTimer() {
  running = true;
  totalSeconds = defaultSeconds;
  timer.classList.remove("times-up");
  updateTimer(totalSeconds);

  setupTimer();
}

function setupTimer() {
  // setInterval() 固定延遲了某段時間之後，才去執行對應的程式碼，然後「不斷循環」。
  timerID = setInterval(() => {
    if (totalSeconds > 1) {
      totalSeconds -= 1;
      updateTimer(totalSeconds);
    } else {
      timesUp();
    }
  }, 1000);
}

function pauseTimer() {
  paused = true;
  clearInterval(timerID);
}

function resumeTimer() {
  paused = false;

  setupTimer();
}

// keyup放開按鍵
// keydown按下按鍵
document.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "Enter":
      if (!running) {
        initTimer();
      }
      break;
    case " ":
      if (running) {
        if (paused) {
          // 繼續
          resumeTimer();
        } else {
          // 暫停
          pauseTimer();
        }
      }
      break;
  }
});
