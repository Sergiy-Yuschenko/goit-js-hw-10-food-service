import './sass/main.scss';
import menuCards from './templates/menu-cards.hbs'
import menus from './menu.json';

const menuListEl = document.querySelector('.js-menu');

const menuCardsEl = menuCards(menus);

menuListEl.insertAdjacentHTML('beforeend', menuCardsEl);

console.log(menuCards(menus));


