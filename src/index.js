



import './sass/main.scss';
//Підключаємо шаблон для розмітки карточок меню
import menuCards from './templates/menu-cards.hbs'
//Підключаємо дані необхідні для створення елементів списку карточок меню
import menus from './menu.json';
//Знаходимо елемент списку, в який треба додати розмітку карточок меню

//Введення констант
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
const сheckboxEl = document.querySelector('#theme-switch-toggle');

 const addTheme = (value) => {

        if (value === null) {
            localStorage.setItem('Theme','LIGHT');
            bodyEl.classList.add(Theme.LIGHT);
        }
        else {
            bodyEl.classList.add(Theme[value]);
            if (value === 'DARK') {
                сheckboxEl.setAttribute('checked', '');
            }
        }

 }

 addTheme(localStorage.getItem('Theme'));

сheckboxEl.addEventListener('input', changeTheme);

function changeTheme() {
    // console.log(сheckboxEl.value);
    // сheckboxEl.classList.toggle(cls)
    if ((!bodyEl.classList.contains(Theme.LIGHT) && !bodyEl.classList.contains(Theme.DARK))) {
        bodyEl.classList.add(Theme.DARK);
        localStorage.setItem('Theme','DARK');
    }
    else if (bodyEl.classList.contains(Theme.LIGHT)) {
        bodyEl.classList.remove(Theme.LIGHT);
        bodyEl.classList.add(Theme.DARK);
        localStorage.setItem('Theme','DARK');
        
       
    }
    else if (bodyEl.classList.contains(Theme.DARK)) {
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
        localStorage.setItem('Theme','LIGHT');
        
    }
}


const menuListEl = document.querySelector('.js-menu');
//Створюємо розмітку  карточок меню по даних з menu.json по шаблону menu-cards.hbs 
//за допомогою шаблонізатора handlebars
const menuCardsEl = menuCards(menus);
//Додаємо розмітку елементів карточок меню в елемент списку
menuListEl.insertAdjacentHTML('beforeend', menuCardsEl);
