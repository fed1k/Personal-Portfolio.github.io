const menuicon = document.querySelector('.menu-icon');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const ul = document.querySelector('.navbar ul');
const li = document.querySelectorAll('.scrolList');
const navbar = document.querySelector('.navbar');
const form = document.querySelector('.form');
const email = document.querySelector('#email');
const error = document.querySelector('.error-message');

menuicon.addEventListener('click', () => {
  navbar.classList.toggle('navigation');
  ul.classList.toggle('toggleUl');
  item1.classList.toggle('items1');
  item2.classList.toggle('items2');
  item3.classList.toggle('items3');
});

function myToggle() {
  ul.classList.remove('toggleUl');
  navbar.classList.toggle('navigation');
  item1.classList.remove('items1');
  item2.classList.remove('items2');
  item3.classList.remove('items3');
}

li.forEach((i) => {
  i.addEventListener('click', myToggle);
});

form.addEventListener('submit', (e) => {
  const Emailtext = email.value;
  if (Emailtext !== Emailtext.toLowerCase()) {
    e.preventDefault();
    error.style.color = 'red';
    error.style.gridColumn = '2/3';
    error.textContent = 'Please your email should be in lower case';
  } else {
    error.textContent = '';
  }
});

// Popup window details section starts here
// const popup = [
//   card1 = {
//     name: 'First Project',
//     description: 'Lorem ipsum dolor sit amet, consectetur ',
//     technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
//     live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
//     source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
//   },
//   card2 = {
//     name: 'Second Project',
//     description: 'Lorem ipsum dolor sit amet, consectetur isi',
//     technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
//     live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
//     source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
//   },
//   card3 = {
//     name: 'Third Project',
//     description: 'Lorem ipsum dolor sit amnt ut labore et dolorenisi',
//     technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
//     live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
//     source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
//   },
//   card4 = {
//     name: 'Fourth Project',
//     description: 'Lorem ipsum dolor siabtion ullamco laboris nisi',
//     technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
//     live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
//     source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
//   },
//   card5 = {
//     name: 'Fifth Project',
//     description: 'Lorem ipsum dolor sit ametabore et dolore magna aliqua. Ut enim ad',
//     technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
//     live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
//     source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
//   },
//   card6 = {
//     name: 'Sixth Project',
//     description: 'Lorem ipsum dolor sit amet, conseabore et dolorei',
//     technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
//     live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
//     source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
//   },
// ];

// const seebtn = document.querySelectorAll('.see');
// seebtn.forEach((own) => {
//   own.addEventListener('click', () => {
//     const conteyner = document.createElement('section');
//     const body = document.querySelector('body');
//     conteyner.className = 'mobile';
//     body.appendChild(conteyner);
//     conteyner.insertBefore(ul);
//   });
// });