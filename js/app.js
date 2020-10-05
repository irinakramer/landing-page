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


/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Return true if el is in viewport, or false if it is not.
function isInViewport(el) {
    const bounds = el.getBoundingClientRect();
    return (
        bounds.top >= -100 &&
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



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
    for (const section of sections) {
        let navListItem = `<li class="menu__link"><a href="#${section.getAttribute('id')}">${section.dataset.nav}</a></li>`;
        navbarList.innerHTML += navListItem;
        // let listItem = document.createElement('li');
        // let menuLink = document.createElement('a');
        // menuLink.textContent = section.dataset.nav;
        // menuLink.setAttribute('href', `#${section.getAttribute('id')}`);
        // listItem.setAttribute('class', 'menu__link');
        // listItem.appendChild(menuLink);
        // navbarList.appendChild(listItem);
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
