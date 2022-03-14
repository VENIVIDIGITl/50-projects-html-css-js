const container = document.getElementById('container');
const colors = [
  '#678CB1', 
  '#b5d5fc', 
  '#CFF1FF', 
  '#9AE2FF', 
  '#5cacec', 
  '#2c8cc7', 
  '#30D8FF', 
  '#00c6bc', 
  '#00dcbf', 
  '#2ecc71', 
  '#abeca1', 
  '#AAAA99', 
  '#fff3b8', 
  '#f0db4f', 
  '#FFCF9C', 
  '#FFA277', 
  '#e44f99', 
  '#ff3478', 
  '#e60e6c', 
  '#af91e7', 
  '#cf99ff', 
  '#8e44ad'
];

const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
};


function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};


function removeColor(element) {
  element.style.background = '#222530';
  element.style.boxShadow = '0 0 2px #000';
};


function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
};