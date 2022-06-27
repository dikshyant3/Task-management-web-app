var minutes = 25;
var seconds = "00";

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
  // document.getElementById("button").onclick().innerHTML = stop;
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
