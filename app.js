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
const formbutton = document.querySelector('.form-button');
const body = document.querySelector('.projects');

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

// Popup object
const popup = [
  {
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    live: 'https://fed1k.github.io/Personal-Portfolio.github.io/',
    source: 'https://github.com/fed1k/Personal-Portfolio.github.io',
    cardClass: ['card1', 'card2', 'card3', 'card4', 'card5', 'card6'],
    imageClass: ['images1', 'images2', 'images3', 'images4', 'images5', 'images6'],
    imageSource: ['images/Rectangle-21.png', 'images/Rectangle-21-1.png', 'images/Rectangle-21-2.png', 'images/Rectangle-21-3.png', 'images/Rectangle-21-4.png', 'images/Rectangle-21-5.png'],
  },
];

// Creating popupWindow
let modalContainer;
function popupWindow(imageSrc) {
  menuicon.style.display = 'none';
  navbar.style.display = 'none';
  formbutton.style.display = 'none';
  modalContainer = document.createElement('section');
  modalContainer.className = 'modalContainer';
  modalContainer.innerHTML = `
    <section class="modal">
      <div class="xCont">
        <h1 class="popuph">${popup[0].name}</h1>
        <img class="x" src="images/x-sign.png">
      </div>
        <ul class="populli">
        <li class="popList">${popup[0].technologies[0]}</li>
        <li class="popList">${popup[0].technologies[1]}</li>
        <li class="popList">${popup[0].technologies[2]}</li>
      </ul>
      <div>
        <img class="popupimg1" src="${imageSrc}">  
        <img class="popupimg" src="${imageSrc}">
        <img class="popupimg" src="${imageSrc}">
        <img class="popupimg" src="${imageSrc}">
        <img class="popupimg" src="${imageSrc}">
      </div>
      <p class="modalp">${popup[0].description}</p>
      <div class="popbtncontainer">
        <button class="button1"><a class="popupA" href="${popup[0].live}">See live<i class="fas fa-external-link-alt modalicon"></i></a></button>
        <button class="button2"><a class="popupA" href="${popup[0].source}" target="_blank">See source<i class="fab fa-github modalicon modalicon2"></i></a></button>
      </div>
    </section>
    `;
  body.appendChild(modalContainer);
  const modalicon = document.querySelector('.modalicon');
  const modalicon2 = document.querySelector('.modalicon2');
  const button1 = document.querySelector('.button1');
  const button2 = document.querySelector('.button2');
  function hover(a, b) {
    a.addEventListener('mouseover', () => {
      b.classList.add('mkb');
    });
    a.addEventListener('mouseout', () => {
      b.classList.remove('mkb');
    });
  }
  hover(button1, modalicon);
  hover(button2, modalicon2);
  const x = document.querySelectorAll('.x');
  x.forEach((xelem) => {
    xelem.addEventListener('click', () => {
      modalContainer.style.display = 'none';
      formbutton.style.display = 'block';
    });
  });
}
// Creating Projects section dynamically
let btn;
for (let i = 0; i < 6; i += 1) {
  const karta = document.createElement('section');
  karta.className = popup[0].cardClass[i];
  body.append(karta);
  const rasm = document.createElement('img');
  rasm.className = popup[0].imageClass[i];
  rasm.src = popup[0].imageSource[i];
  const divider = document.createElement('div');
  karta.append(rasm, divider);
  if (i === 0) {
    divider.className = 'color';
  } else if (i === 5) {
    divider.className = 'color2';
  }
  const header = document.createElement('h2');
  header.textContent = popup[0].name;
  const ulcont = document.createElement('ul');
  for (let i = 0; i < 3; i += 1) {
    const list = document.createElement('li');
    list.textContent = popup[0].technologies[i];
    ulcont.appendChild(list);
  }
  btn = document.createElement('button');
  btn.className = 'see';
  btn.textContent = 'See this project';
  btn.addEventListener('click', () => {
    popupWindow(popup[0].imageSource[i]);
  });
  divider.append(header, ulcont, btn);
}
const shape = document.createElement('div');
const karta6 = document.querySelector('.card6');
body.insertBefore(shape, karta6);
shape.className = 'shape-container';
const decoration = document.createElement('img');
decoration.src = 'images/image-geometry2.png';
decoration.className = 'desktop-project-section-image';
shape.appendChild(decoration);
const shape2 = document.createElement('div');
const karta5 = document.querySelector('.card5');
body.insertBefore(shape2, karta5);
shape2.className = 'shape-container3';
const decoration2 = document.createElement('img');
decoration2.className = 'round-shape';
decoration2.src = 'images/Sha.png';
shape2.appendChild(decoration2);
const shape3 = document.createElement('div');
shape3.className = 'shape-container4';
const karta4 = document.querySelector('.card4');
body.insertBefore(shape3, karta4);
const decoration3 = document.createElement('img');
const decoration4 = document.createElement('img');
decoration4.src = 'images/image-geometry444.png';
decoration4.className = 'shape-container5';
decoration3.id = 'desktop-shapes';
decoration3.src = 'images/image-geometry555.png';
shape3.append(decoration3, decoration4);

// Persist form data to local storage
// Persist data on submit event handler starts on line 47

const formData = {};

// Persist Data helper
function saveData(data) {
  const stringyData = JSON.stringify(data);
  window.localStorage.setItem('customFormData', stringyData);
}

// Event listener to persist data
document.querySelector('.form').addEventListener('change', () => {
  // Preserve data in the browser
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  inputs.forEach((input) => {
    formData[input.id] = input.value;
  });
  formData[textArea.id] = textArea.value;
  saveData(formData);
});

// Helper function to reinsert values
function reinsertValues(formData) {
  Object.entries(formData).forEach((ele) => {
    const [key, value] = ele;
    document.getElementById(key).value = value;
  });
}

// Reinsert form data values if data persisted
window.addEventListener('load', () => {
  const formDataObj = JSON.parse(window.localStorage.getItem('customFormData'));
  if (formDataObj) {
    reinsertValues(formDataObj);
  }
});