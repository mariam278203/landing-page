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
// navigation global Variables
let navigation = document.getElementById('navbar__list');
// sections global Variables
let sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

let navBuilder = () => {

    let navUI = '';
    // looping sections
    sections.forEach(section => {

        let sectionID = section.id;
        let sectionDataNav = section.dataset.nav;
        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    navigation.innerHTML = navUI;
};
navBuilder();

// Add class 'active' to section when near top of viewport

let offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove and activing active class
let removeActive = (section) => {
    section.classList.remove('your-active-class');
};

let addActive = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
    };
};

let sectionActivation = () => {
    sections.forEach(section => {
        let elementOffset = offset(section);

        inviewport = () => elementOffset < 175 &&
         elementOffset >= -180;

        removeActive(section);
        addActive(inviewport(),section);
    });
};

// Scroll to section on link click

window.addEventListener('scroll' ,sectionActivation);

const scrolling = () => {
    const links = document.querySelectorAll('.navbar__menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            for(i = 0 ; i<sections ; i++){
                sections[i].addEventListener("click",sectionScroll(link));
            }
        });
    });
};

scrolling();
//creat icon top to go to the top of page
let toTop = document.getElementById("top");
let header = document.querySelector(".page__header");


toTop.addEventListener("click", () => {
  document.documentElement.scrollTo({ top: 0, behavior: "switch"})
});

//appear icon(top) after 180px to down

  window.scrollY > 180
    ? (Top.style.display = "block")
    : (Top.style.display = "none");
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Set sections as active
