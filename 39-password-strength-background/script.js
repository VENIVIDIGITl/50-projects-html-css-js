const passwordInput = document.getElementById('password');
const backgroundImage = document.getElementById('background');


passwordInput.addEventListener('keyup', event => {
  const input = event.target.value;
  const length = input.length
  const blurValue = 50 - length * 3;

  backgroundImage.style.filter = `blur(${blurValue >= 0 ? blurValue : '0'}px)`;
});
