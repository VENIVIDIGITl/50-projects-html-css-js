const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

clipboardEl.addEventListener('click', async () => {
  const password = resultEl.innerText;
  if(!password) return;

  await navigator.clipboard.writeText(password);
  alert('Password copied to clipboard!');
});

generateEl.addEventListener('click', () => {
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  const length = +lengthEl.value;

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArray = [
    {lower}, 
    {upper}, 
    {number}, 
    {symbol}
  ].filter(item => Object.values(item)[0])

  if(typesCount === 0) return '';

  // Generate random characters to password
  for(let i = 0; i < length; i += typesCount) {
    typesArray.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomFunc[funcName]();
    });
  };

  // shuffle characters (Fisher-Yates)
  let shuffledPassword = [...generatedPassword.slice(0, length)];
  shuffledPassword.forEach((elem, i, arr, j = getRandomValue(i, arr.length)) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  });

  shuffledPassword = shuffledPassword.join('');
  return shuffledPassword;
};


function getRandomValue(i, n) {
  return Math.floor(Math.random() * (n - i) + i);
};


function getRandomLower() {
  // ASCII Printable Characters - Lowercase letter codes a-z (97-122)
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};


function getRandomUpper() {
  // ASCII Printable Characters - Uppercase letter codes A-Z (65-90)
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};


function getRandomNumber() {
  // ASCII Printable Characters - Number codes 0-9 (48-57)
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};


function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};
