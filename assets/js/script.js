const header = document.getElementsByTagName('header')[0];
header.classList.toggle('sticky', window.scrollY > 12);
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 12);
})