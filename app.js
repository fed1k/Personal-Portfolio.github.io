const navSlide = () => {
  const burger = document.querySelector('.nav-icon');
  const nav = document.querySelector('.toggleUl');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
  document.querySelectorAll('.scrolList').forEach((n) => n.addEventListener('click', () => {
    nav.classList.remove('nav-active');
    burger.classList.remove('toggle');
  }));
};

navSlide();

// Contact form Validation here starts here

// const mailbtn = document.querySelector('#email');
// const submit = document.querySelector('.form-button');
// const forma = document.querySelector('.form');

// submit.addEventListener('submit', (e) => {
//   if (mailbtn.innerHTML !== mailbtn.text.toLowerCase()) {
//     const contan = document.createElement('span');
//     contan.innerHTML = 'Write in Lower case';
//     contan.className = 'mail-checker';
//     forma.appendChild(contan);
//     e.preventDefault();
//   }
// });