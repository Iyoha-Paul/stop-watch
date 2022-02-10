const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const menuNavItem = document.querySelectorAll('.menu-nav__item');
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamBurger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    menuNavItem.forEach(item => item.classList.add('open'));
    showMenu = true;
  } else {
    hamBurger.classList.remove('open');
    showMenu = false;
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    menuNavItem.forEach(item => item.classList.remove('open'));
  }
}
