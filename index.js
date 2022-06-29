let futureDate = new Date('December 17, 2024 03:24:00').getTime();
console.log(futureDate);

let hoursText = document.querySelector('.hours');
let minutesText = document.querySelector('.minutes');
let secondsText = document.querySelector('.seconds');
let daysText = document.querySelector('.days');
let countdown = setInterval(() => {
    let today = new Date().getTime();
    let distance = futureDate - today;
    console.log(distance);
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if(hours.toString().length == 1){
    hours = `0${hours}`;
  }
  if(minutes.toString().length == 1){
    minutes = `0${minutes}`;
  }
  if(seconds.toString().length == 1){
    seconds = `0${seconds}`;
  }
  daysText.innerHTML = `${days}`;
  hoursText.innerHTML = `${hours}`;
  minutesText.innerHTML = `${minutes}`;
  secondsText.innerHTML = `${seconds}`;
  if(distance === 0){
    clearInterval(countdown);
    clock.innerHTML = "Game Over";
  }
}, 1000);