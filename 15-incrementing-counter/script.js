const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const countTarget = Number(counter.getAttribute('data-target'));
    const count = Number(counter.innerText);

    const countIncrement = countTarget / 200;

    if(count < countTarget) {
      counter.innerText = `${Math.ceil(count + countIncrement)}`;
      
      setTimeout(updateCounter, 5);
    } else {
      counter.innerText = countTarget;
    };
  };

  updateCounter();
});
