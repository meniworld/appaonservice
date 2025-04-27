const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '&times;'; // Cross icon
    } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    }
});
