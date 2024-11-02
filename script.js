function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
}

// Responsive Styling with JavaScript
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth < 768) {
        navLinks.style.display = 'none';
        hamburger.style.display = 'block';
    } else {
        navLinks.style.display = 'flex';
        hamburger.style.display = 'none';
    }
});

// Trigger resize event on load
window.dispatchEvent(new Event('resize'));