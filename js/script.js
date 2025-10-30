// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
});
