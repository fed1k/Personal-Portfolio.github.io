const menuicon = document.querySelector('.menu-icon');
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');
const item3 = document.querySelector('.item3');

menuicon.addEventListener('click', () => {
  item1.classList.toggle('items1');
  item2.classList.toggle('items2');
  item3.classList.toggle('items3');
});