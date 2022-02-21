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
    error.textContent = 'Please Enter your Email in Lowercase';
  } else {
    error.textContent = '';
  }
});

// Popup window details section starts here
const popup = [
  cards = {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, conseabore et dolorei',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
    source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
    cardClass: ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'],
    imageClass: ['images1', 'images2', 'images3', 'images4', 'images5', 'images6'],
    imageSource: ['images/Rectangle-21.png', 'images/Rectangle-21-1.png', 'images/Rectangle-21-2.png', 'images/Rectangle-21-3.png', 'images/Rectangle-21-4.png', 'images/Rectangle-21-5.png'],
  },
];
// Card1
const shape = document.querySelector('.shape-container');
for (let i = 0; i < 2; i++) {
  const karta = document.createElement('section');
  const body = document.querySelector('.projects');
  karta.className = popup[0].cardClass[i];
  body.insertBefore(karta, shape);
  const rasm = document.createElement('img');
  rasm.className = popup[0].imageClass[i];
  rasm.src = popup[0].imageSource[i];
  const divider = document.createElement('div');
  karta.append(rasm, divider);
  divider.className = 'color';
  const header = document.createElement('h2');
  header.textContent = popup[0].name;
  const ulcont = document.createElement('ul');
  const list = document.createElement('li');
  list.textContent = 'HTML/CSS';
  const list2 = document.createElement('li');
  list2.textContent = 'Ruby on Rails';
  const list3 = document.createElement('li');
  list3.textContent = 'Javascript';
  ulcont.append(list, list2, list3);
  const btn = document.createElement('button');
  btn.className = 'see';
  btn.textContent = 'See this project';
  divider.append(header, ulcont, btn);
}

// Card2