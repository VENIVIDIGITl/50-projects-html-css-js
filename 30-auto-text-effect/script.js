const form = document.getElementById('text-form');
const textInputEl = document.getElementById('text-input');
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

let text = 'We Love Programming!';
let idx = 17;
let speed = 200 / speedEl.value;
let finishedWriting = false;

writeText();


function writeText() {
  if(finishedWriting) {
    textEl.innerText = text.slice(0, idx);
    idx -= 2;
    idx < 3 ? finishedWriting = false : null;
  } else {
    textEl.innerText = text.slice(0, idx);
    idx++;
    idx > text.length ? finishedWriting = true : null;
  };

  setTimeout(writeText, speed);
};


textInputEl.addEventListener('keyup', e => text = textInputEl.value);
speedEl.addEventListener('input', e => speed = 200 / e.target.value);
