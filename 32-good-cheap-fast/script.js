const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');


toggles.forEach(toggle => {
  toggle.addEventListener('change', (event) => doTheTrick(event.target));
});


const doTheTrick = theClickedOne => {
  if(good.checked && cheap.checked && fast.checked) {
    if(good === theClickedOne) {
      fast.checked = false;
    }
    else if(cheap === theClickedOne) {
      good.checked = false;
    }
    else if(fast === theClickedOne) {
      cheap.checked = false;
    };
  };
};
