const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.second-hand');
const time = document.querySelector('.time');
const date = document.querySelector('.date');

function runTime() {
  const now = new Date();

  time.innerHTML = now.toLocaleTimeString();
  // format date to read "month day, year"
  date.innerHTML = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
  // date.innerHTML = now.toLocaleDateString();



  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(runTime, 1000);

runTime();