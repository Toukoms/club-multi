setTimeout(() => {
  const loading = document.getElementById("loader");
  loading.style.display = "none";
  document.body.style.overflowY = "scroll";
}, 2000);

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
