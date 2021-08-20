let hamburger = document.querySelector('.hamburger');
let hiddenNav = document.querySelector('.hidden-nav');
let cross = document.querySelector('.cross');
let navLinks = document.querySelector('.nav-links');
let nav = document.querySelector('.navigation');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    hiddenNav.classList.toggle('hide');
    cross.classList.toggle('hide');
    navLinks.classList.toggle('hide');
});

cross.addEventListener('click', () => {
    hamburger.classList.toggle('hide');
    hiddenNav.classList.toggle('hide');
    cross.classList.toggle('hide');
    navLinks.classList.toggle('hide');
});