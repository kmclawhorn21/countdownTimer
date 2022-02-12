const countDown = function() {
const countDate = new Date("July 10, 2022 00:00:00").getTime();
const now = new Date().getTime();
const gap = countDate - now; 

//Setting time scale
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

//Calculating Step
const textDay = Math.floor(gap / day);
const textHour = Math.floor((gap % day) / hour);
const textMinute = Math.floor((gap % hour) / minute);
const textSecond = Math.floor((gap % minute) / second);

//Selectioning and setting where number calculations will show.
document.querySelector(".day").innerText = textDay;
document.querySelector(".hour").innerText = textHour;
document.querySelector(".minute").innerText = textMinute;
document.querySelector(".second").innerText = textSecond;

};

//Setting function to run and update every second.
setInterval(countDown, 1000);