import { cLog } from '../../index.js';

let headerHamburger = document.querySelector('.header__hamburger');

headerHamburger.onclick = function () {
  this.classList.toggle('active');
};
