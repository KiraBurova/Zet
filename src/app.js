import './styles/main.scss';


// Menu
const menuBtn = document.querySelector('.header__lines');
const menuNav = document.querySelector('.header__nav');

function toggleMenu() {
    menuNav.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMenu);

