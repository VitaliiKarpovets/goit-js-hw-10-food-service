import './sass/main.scss';
import cardFoodTpl from './templates/cardFoodTemplate.hbs'
import menu from './menu.json';


document.querySelector('.js-menu').insertAdjacentHTML('beforeend', cardFoodTpl(menu))