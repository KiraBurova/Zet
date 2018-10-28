import './styles/main.scss';

// import Glide from '@glidejs/glide/dist/glide.modular.esm'

// var glide = new Glide('.clients .glide', {
//     type: 'carousel'
//   })
  
//   glide.mount()

// Menu
const menuBtn = document.querySelector('.header__lines');
const menuNav = document.querySelector('.header__nav');

function toggleMenu() {
    menuNav.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleMenu);
