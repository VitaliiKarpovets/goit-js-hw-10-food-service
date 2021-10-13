import './sass/main.scss';
import cardFoodTpl from './templates/cardFoodTemplate.hbs'
import menu from './menu.json';


document.querySelector('.js-menu').insertAdjacentHTML('beforeend', cardFoodTpl(menu));


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeSwitch = document.querySelector('#theme-switch-toggle');
const bodyTheme = document.querySelector('body');

function themeDefault() {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        bodyTheme.classList.add(Theme.LIGHT)
    } else {
        bodyTheme.classList.add(savedTheme)
    }
    if (bodyTheme.classList.contains(Theme.DARK)) {
        themeSwitch.checked = true;
    }
}

themeDefault();

themeSwitch.addEventListener('change', () => {
    bodyTheme.classList.toggle(Theme.DARK);
    bodyTheme.classList.toggle(Theme.LIGHT);

    if (bodyTheme.classList.contains(Theme.DARK)) {
        localStorage.setItem('theme', Theme.DARK)
    } else {
       localStorage.setItem('theme', Theme.LIGHT) 
    }
})

