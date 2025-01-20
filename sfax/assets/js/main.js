/*********** Show/Hide Menu **********/
const navMenu = document.getElementById('nav-menu'), // Matches your HTML
      navToggle = document.getElementById('nav-toggle'), // Matches your HTML
      navClose = document.getElementById('nav-close'); // Matches your HTML

/**** Show Menu ****/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); // Add 'show-menu' class to display the menu
    });
}

/**** Hide Menu ****/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu'); // Remove 'show-menu' class to hide the menu
    });
}

/**** Remove Menu on Mobile When a Link is Clicked ****/
const navLink = document.querySelectorAll('.nav_link'); // Matches your HTML

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu'); // Matches your HTML
    navMenu.classList.remove('show-menu'); // Remove 'show-menu' class to hide the menu
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/**** Header Background Change on Scroll ****/
const scrollHeader = () => {
    const header = document.getElementById('header'); // Matches your HTML
    this.scrollY >= 50 ? header.classList.add('bg-header') // Add 'bg-header' class on scroll
                       : header.classList.remove('bg-header'); // Remove 'bg-header' class
};
window.addEventListener('scroll', scrollHeader);

/**** Scroll Up Button ****/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up'); // Matches your HTML
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') // Add 'show-scroll' class on scroll
                        : scrollUp.classList.remove('show-scroll'); // Remove 'show-scroll' class
};
window.addEventListener('scroll', scrollUp);

/**** Active Link on Scroll ****/
const sections = document.querySelectorAll('section[id]'); // Select all sections with IDs

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']'); // Match links in the nav menu

        if (sectionsClass) { // Check if the link exists
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link'); // Add 'active-link' class
            } else {
                sectionsClass.classList.remove('active-link'); // Remove 'active-link' class
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

/**** Dark/Light Theme Toggle ****/
const themeButton = document.getElementById('teme-button'); // Matches your HTML (note: typo in ID)
const darkTheme = 'dark-theme'; // Class for dark theme
const iconTheme = 'ri-sun-line'; // Class for light theme icon

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme); // Toggle dark theme
    themeButton.classList.toggle(iconTheme); // Toggle icon
    localStorage.setItem('selected-theme', getCurrentTheme()); // Save theme preference
    localStorage.setItem('selected-icon', getCurrentIcon()); // Save icon preference
});

/**** Scroll Reveal Animations ****/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('.home_img, .newsletter_container, .footer_logo, .footer_description, .footer_content, .footer_info');
sr.reveal('.home_data', { origin: 'bottom' });
sr.reveal('.about_data, .recently_data', { origin: 'left' });
sr.reveal('.about_img, .recently_img', { origin: 'right' });
sr.reveal('.popular_card', { interval: 100 });