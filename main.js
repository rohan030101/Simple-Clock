setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hours = time.getHours();
  let mins = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "PM";

  if (hours > 12) {
    hours -= 12;
    am_pm = "PM";
  }
  if (hours == 0) {
    hours = 12;
    am_pm = "AM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + mins : mins;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = "/" + hours + ":" + mins + ":" + sec + ":" + am_pm;
  let currentDate = time.toDateString();
  document.getElementById("date").innerHTML = currentDate;
  document.getElementById("time").innerHTML = currentTime;
}
showTime();
