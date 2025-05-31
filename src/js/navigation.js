// Function to load the navigation component
async function loadNavigation() {
    try {
        const response = await fetch('/src/components/Navigation.js');
        const text = await response.text();
        const navigationHtml = text.match(/return\s+`([\s\S]*?)`/)[1];
        
        // Insert navigation at the start of the body
        document.body.insertAdjacentHTML('afterbegin', navigationHtml);
        
        // Add mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}

// Load navigation when the DOM is ready
document.addEventListener('DOMContentLoaded', loadNavigation); 