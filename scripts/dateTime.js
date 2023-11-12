"use strict";

const now = new Date();
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = daysOfWeek[now.getDay()];
const date = `${day}, ${now.getDate()}/${
  now.getMonth() + 1
}/${now.getFullYear()}`;
dateEl.textContent = date;
updateClock();
setInterval(updateClock, 1000);

function updateClock() {
  const formatter = new Intl.NumberFormat("gr-GR", {
    minimumIntegerDigits: 2,
  });

  const now = new Date();
  const hours = formatter.format(now.getHours());
  const minutes = formatter.format(now.getMinutes());
  const seconds = formatter.format(now.getSeconds());
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;
}
