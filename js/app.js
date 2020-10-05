/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.navbar__menu');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Return true if el is in viewport, or false if it is not.
function isInViewport(el) {
    const bounds = el.getBoundingClientRect();
    return (
        bounds.top >= -300 &&
        bounds.left >= 0 &&
        bounds.bottom <= (window.innerHeight + 100) &&
        bounds.right <= (window.innerWidth)
    );
}

function addActive(el) {
    el.classList.add('your-active-class');
}

function removeActive(el) {
    el.classList.remove('your-active-class');
}

function toggleMenu() {
    toggle.addEventListener('click', function () {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            // add hamburger icon
            toggle.querySelector('a').innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            menu.classList.add('active');
            // add close(x) icon
            toggle.querySelector('a').innerHTML = '<i class="fas fa-times"></i>';
        }
    }, false);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
    for (const section of sections) {
        let navListItem = `
            <li class="menu__link" data-link="${section.dataset.nav}">
                <a href="#${section.getAttribute('id')}">${section.dataset.nav}</a>
            </li>`;
        navbarList.innerHTML += navListItem;
    }
}


// Add class 'active' to section when near top of viewport
function setActive() {
    window.addEventListener('scroll', function () {
        for (const section of sections) {
            if (isInViewport(section)) {
                addActive(section);
            } else removeActive(section);
        }
    });
}

// Scroll to anchor ID using scrollTO event
function scrollTo() {
    navbarList.addEventListener('click', function (e) {
        e.preventDefault();
        el = document.querySelector(e.target.getAttribute('href'));
        el.scrollIntoView({ behavior: "smooth" });
    });
}


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
buildNav();

// Scroll to section on link click
scrollTo();

// Set sections as active
setActive();

// Toggle mobile menu
toggleMenu();








// ToDo: Add an active state to your navigation items when a section is clicked.
// add inside ScrollTo():
// let link = document.querySelector(`[data-link="${el.dataset.nav}"]`);
// console.log(link);
// let activeLink = document.querySelector('.menu__link.your-active-class');
// console.log(activeLink);
// removeActive(activeLink);
// addActive(link);