const button = document.getElementById("toggleButton");
const content = document.getElementById("content");
const arrow = document.getElementById("arrow");

button.addEventListener("click", () => {
  content.classList.toggle("show");
  button.classList.toggle("rotate");
});

const burger = document.getElementById("burger");
const nav = document.getElementById("navBar");

burger.addEventListener("click", () => {
  nav.classList.toggle("show");
  burger.classList.toggle("open");
});
