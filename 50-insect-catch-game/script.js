const screens = document.querySelectorAll('.screen');
const insectSelectionBtns = document.querySelectorAll('.insect-selection-btn');
const startBtn = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');

let secondsPassed = 0;
let score = 0;
let selectedInsect = {};

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

insectSelectionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    selectedInsect = { src, alt };

    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});


function startGame() {
  setInterval(increaseTime, 1000);
};


function increaseTime() {
  let minutes = Math.floor(secondsPassed / 60);
  let seconds = secondsPassed % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  timeEl.innerHTML = `Time: ${minutes}:${seconds}`
  secondsPassed++;
};


function createInsect() {
  const insect = document.createElement('div');
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.classList.add('insect');
  insect.innerHTML = /* html */`
    <img 
      src="${selectedInsect.src}" 
      alt="${selectedInsect.alt}" 
      style="transform: rotate(${Math.random() * 360}deg)"
    />
  `;

  insect.addEventListener('click', catchInsect);

  gameContainer.appendChild(insect);
};


function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
};


function catchInsect() {
  increaseScore();
  this.classList.add('caught');
  setTimeout(() => this.remove(), 2000);
  addInsects();
};


function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
};


function increaseScore() {
  score++;
  if(score > 19) {
    messageEl.classList.add('visible');
  };

  scoreEl.innerHTML = `Score: ${score}`;
};
