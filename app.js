// const btn = document.querySelector('.nav-icon');
// const sign = document.querySelector('.x-icon');
// const toggle = document.querySelector('.navbar');

// btn.addEventListener('click', () => {
//   toggle.style.display = 'block';
//   btn.style.display = 'none';
//   sign.style.display = 'block';
// });

// sign.addEventListener('click', () => {
//   sign.style.display = 'none';
//   btn.style.display = 'block';
//   toggle.style.display = 'none';
// });

const navSlide = () => {
  const burger = document.querySelector(".nav-icon");
  const nav = document.querySelector(".toggleUl");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
  document.querySelectorAll(".scrolList").forEach((n) =>
    n.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
    })
  );
};

navSlide();
