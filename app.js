const menuicon = document.querySelector('.menu-icon');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');
const ul = document.querySelector('.navbar ul');
const li = document.querySelectorAll('.scrolList');

menuicon.addEventListener('click', () => {
  ul.classList.toggle('toggleUl');
  ul.style.display = 'flex';
  item1.classList.toggle('items1');
  item2.classList.toggle('items2');
  item3.classList.toggle('items3');
});

function myToggle() {
  ul.classList.remove('toggleUl');
  item1.classList.remove('items1');
  item2.classList.remove('items2');
  item3.classList.remove('items3');
  ul.style.display = 'none';
}

li.forEach((i) => {
  i.addEventListener('click', myToggle);
});