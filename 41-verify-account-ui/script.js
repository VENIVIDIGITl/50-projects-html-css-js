const codes = document.querySelectorAll('.code');


codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', event => {
    if(event.key >= 0 && event.key <= 9) {
        codes[idx].value = '';
        setTimeout(() => {
          if(idx < codes.length - 1) codes[idx + 1].focus(), 10;
        });
    } else if(event.key == 'Backspace') {
      setTimeout(() => {
        if (idx >= 1) codes[idx - 1].focus(), 10;
      });
    };
  });

  code.addEventListener('paste', async event => {
    event.preventDefault();
    const clipboardText = await navigator.clipboard.readText();
    const cleanedText = clipboardText.split(' ').join('').trim().replace(/\n/g, '');

    for(let idx in cleanedText) {
      if( idx < codes.length) codes[idx].value = cleanedText[idx];
    };
  });
});
