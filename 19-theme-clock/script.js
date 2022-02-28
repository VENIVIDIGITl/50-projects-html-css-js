const needles =document.querySelectorAll('.needle')
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleMode = document.querySelector('.toggle-mode');
const toggleHourView = document.querySelector('.toggle-clock-view');
const toggleSeconds = document.querySelector('.toggle-seconds')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


toggleMode.addEventListener('click', event => {
  const html = document.querySelector('html');

  if(html.classList.contains('dark')) {
    html.classList.remove('dark');
    event.target.innerHTML = 'Dark Mode';
  } else {
    html.classList.add('dark');
    event.target.innerHTML = 'Light Mode';
  };
});


toggleHourView.addEventListener('click', event => {
  const viewMode = toggleHourView.innerHTML;
  
  if(viewMode == '12 Hour Mode') {
    toggleHourView.innerHTML = '24 Hour Mode'
  } 
  else {
    toggleHourView.innerHTML = '12 Hour Mode'
  };

});


toggleSeconds.addEventListener('click', event => {
  toggleSeconds.classList.toggle('active');
});



function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Clock, its hands and hand animations
  const hourDegrees = ((hours / 12) * 360) + ((minutes/60)*30);
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
  const secondDegrees = ((seconds / 60) * 360);

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
  secondEl.style.transform = `
    translate(-50%, -100%) 
    rotate(${secondDegrees}deg) 
    translateY(${scale(seconds, 0, 59, 20, 20)}%)
  `;

  // Digital clock and date
  hourView = toggleHourView.innerHTML == '12 Hour Mode' ? 12 : 24;
  secondView = toggleSeconds.classList.contains('active') ? true : false;

  digitalHours = hourView == 12 ? hoursForClock : hours;
  digitalMinutes =`:${minutes < 10 ? `0${minutes}` : minutes}`;
  digitalSeconds = secondView ? `:${seconds < 10 ? `0${seconds}` : seconds}` : ' ';

  digitalClock = `${digitalHours + digitalMinutes + digitalSeconds} ${hourView == 12 ? ampm : ''}`;

  timeEl.innerHTML = digitalClock;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};


// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};


setTime();
setInterval(setTime, 1000);
