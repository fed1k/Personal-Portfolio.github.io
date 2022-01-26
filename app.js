const btn = document.querySelector('.nav-icon');
const sign = document.querySelector('.x-icon');
const toggle = document.querySelector('.navbar');

btn.addEventListener('click', () => {
  toggle.style.display = 'block';
  btn.style.display = 'none';
  sign.style.display = 'block';
});

sign.addEventListener('click', () => {
  sign.style.display = 'none';
  btn.style.display = 'block';
  toggle.style.display = 'none';
});