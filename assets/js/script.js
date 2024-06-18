// import { lazyLoadImages } from './lazyLoad.js';

// window.addEventListener('load', () => {
//   const loading = document.getElementById("loader");
//   loading.style.display = "none";
//   document.body.style.overflowY = "scroll";
// });

const header = document.getElementsByTagName("header")[0];
header.classList.toggle("sticky", window.scrollY > 12);
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 12);
});

const modal = document.querySelector(".modal");
function show_modal() {
  modal.style.display = "block";
}
function hide_modal() {
  modal.style.display = "none";
}

function redirectExt(href) {
  window.open(href, "_blank");
}

const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const navBar = document.getElementsByTagName('nav')[0]

menuBtn.addEventListener('click', () => {
  navBar.style.transform = 'translateX(0)'
})

closeBtn.addEventListener('click', () => {
  navBar.style.transform = 'translateX(100%)'
})