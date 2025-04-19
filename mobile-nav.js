// Mobile Navigation Script for Nike Website

document.addEventListener('DOMContentLoaded', function() {
    // Create a hamburger menu icon
    const navElement = document.querySelector('nav');
    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger-menu';
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Only add the hamburger menu on mobile view
    function checkViewport() {
        if (window.innerWidth <= 768) {
            if (!document.querySelector('.hamburger-menu')) {
                navElement.insertBefore(hamburger, navElement.firstChild);
            }
        } else {
            const existingHamburger = document.querySelector('.hamburger-menu');
            if (existingHamburger) {
                existingHamburger.remove();
            }
            // Make sure menu is visible on desktop regardless of active state
            navElement.classList.remove('active');
        }
    }
    
    // Toggle navigation menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        navElement.classList.toggle('active');
    });
    
    // Initialize on page load
    checkViewport();
    
    // Update when window is resized
    window.addEventListener('resize', checkViewport);
}); 