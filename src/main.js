const SCREENWIDTH = window.innerWidth; // screen.width;
const SCREENHEIGHT = window.innerHeight; // window.outerHeight; // screen.height;
const SCREENS_IN_HORIZONTAL= 3;
const SCREEN_TRANSITION_OFFSET = 3.05;
const OUTER_WRAPPER = document.querySelector('.outer-wrapper');
const INNER_WRAPER = document.querySelector('.inner-wraper');
const LIST_MENU = document.querySelector('.list-menu');
const TITLE = document.getElementById('title');
const THEME_BUTTON = document.getElementById('themeButton');
const DARK_MODE = false;
const BURGER_BUTTON = document.getElementById('burgerButton');
const LIST_MENU_ELEMENT = document.querySelectorAll('.list-menu-element');
let isMobile = false;
let horizontalScroll = true;
let page_theme = document.body; // .getAttribute('data-theme');

const main = () => {
    if(SCREENWIDTH > 600) {
        OUTER_WRAPPER.classList.add('horizontal-style');
        INNER_WRAPER.classList.add('horizontal-style');
    } else {
        isMobile = true;
        horizontalScroll = false;
    }
    console.info('%cMade with ❤️ by Ary\n%cYou can find the code at:', 'color: blue; font-size:24px;', 'color: palevioletred; font-size:18px;');
    console.log('https://github.com/AryMF/AryMF.github.io');
    
};

const myFunction = () => {
    const TOP_SCROLL = OUTER_WRAPPER.scrollTop; //4608 -> -1152
    const POINT = horizontalScroll ? SCREENWIDTH * SCREENS_IN_HORIZONTAL : SCREENHEIGHT * SCREENS_IN_HORIZONTAL;
    if (!isMobile) {
        if(TOP_SCROLL >= POINT) {
            if (horizontalScroll) {
                OUTER_WRAPPER.scrollTop = SCREENHEIGHT * SCREEN_TRANSITION_OFFSET;
            }
            horizontalScroll = false;
            OUTER_WRAPPER.classList.remove('horizontal-style');
            INNER_WRAPER.classList.remove('horizontal-style');
        } else {
            if (!horizontalScroll) {
                OUTER_WRAPPER.scrollTop = SCREENWIDTH * SCREEN_TRANSITION_OFFSET;
            }
            horizontalScroll = true;
            OUTER_WRAPPER.classList.add('horizontal-style');
            INNER_WRAPER.classList.add('horizontal-style');
        }
    }

    removeAddClass(BURGER_BUTTON, 'fa-times', 'fa-bars');
    LIST_MENU.classList.remove('show');
    LIST_MENU_ELEMENT.forEach(element => {
        element.classList.remove('show');
    }); 
};

const moveToSection = (section) => {   
    const SCROLL_POSITION = horizontalScroll 
        ? SCREENWIDTH * section
        : SCREENHEIGHT * section;
    console.log(SCROLL_POSITION);
    OUTER_WRAPPER.scrollTo(0, SCROLL_POSITION);
}

//USE:
// removeAddClass(component, classToRemove, classToAdd);
const removeAddClass = (component, classToRemove, classToAdd) => {
    component.classList.remove(classToRemove);
    component.classList.add(classToAdd);
};

const darkModeContoller = () => {
    if(THEME_BUTTON.classList.contains('fa-sun')){
        removeAddClass(THEME_BUTTON, 'fa-sun', 'fa-moon');
        page_theme.setAttribute('data-theme', 'dark');
    } else {
        removeAddClass(THEME_BUTTON, 'fa-moon', 'fa-sun');
        page_theme.setAttribute('data-theme', 'light');
    }
    console.log(page_theme);
};

const burguerMenuContoller = () => {
    if(BURGER_BUTTON.classList.contains('fa-bars')){
        removeAddClass(BURGER_BUTTON, 'fa-bars', 'fa-times');
        LIST_MENU.classList.add('show');
        LIST_MENU_ELEMENT.forEach(element => {       
            element.classList.add('show');
        });
    } else {
        removeAddClass(BURGER_BUTTON, 'fa-times', 'fa-bars');
        LIST_MENU.classList.remove('show');
        LIST_MENU_ELEMENT.forEach(element => {
            element.classList.remove('show');
        });     
    }
};

// Listeners
THEME_BUTTON.addEventListener('click', darkModeContoller);
BURGER_BUTTON.addEventListener('click', burguerMenuContoller);