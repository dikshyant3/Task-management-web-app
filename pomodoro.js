var minutes = 25;
var seconds = "00";
let Btn = document.getElementById("button");

function updateCount() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}
function start() {
  minutes = 24;
  seconds = 59;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);
}
function stop() {
  clearTimeout();
}
function minutesTimer() {
  minutes--;
  document.getElementById("minutes").innerHTML = minutes;
}
function secondsTimer() {
  seconds--;
  document.getElementById("seconds").innerHTML = seconds;
  if (seconds <= 0) {
    if (minutes <= 0) {
      clearInterval("minutes");
      clearInterval("seconds");
    }
    seconds = 60;
  }
}
Btn.onclick = function () {
  if (Btn.innerHTML == "Start") {
    if (!(minutes == 0 && seconds == 0)) {
      Btn.innerHTML = "Stop";
      start();
    } else {
      Btn.innerHTML = "Start";
      stop();
    }
  }
};
