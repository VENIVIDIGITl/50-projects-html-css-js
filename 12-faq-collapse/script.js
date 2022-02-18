const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', event => {
    toggle.parentNode.classList.toggle('active');
  });
});
