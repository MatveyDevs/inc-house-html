const burger = document.querySelector(".burger-icon");
const menu = document.querySelector(".header__wrapper-menu");
const overflow = document.querySelector(".body");
const tab = document.querySelectorAll(".button-tab");

burger.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("burger-close");
  menu.classList.toggle("menu__close");
  overflow.classList.toggle("stop-scroll");
});

tab.forEach((el) => {
  el.addEventListener("click", (e) => {
    tab.forEach((el) => {
      el.classList.remove("active-button");
      e.currentTarget.classList.add("active-button");
    });
  });
});
