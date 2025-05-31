export default function Navigation() {
    return `
        <nav class="fixed top-0 left-0 right-0 bg-primary text-secondary z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo -->
                    <a href="/" class="flex items-center">
                        <span class="text-xl font-bold">Saigon Soul</span>
                    </a>

                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="/menu.html" class="hover:text-gray-300 transition relative">
                            Speisekarte
                            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform duration-300 origin-left"></div>
                            <script>
                                if (window.location.pathname === '/menu.html') {
                                    document.currentScript.previousElementSibling.classList.remove('scale-x-0');
                                }
                            </script>
                        </a>
                        <a href="/about.html" class="hover:text-gray-300 transition relative">
                            Über uns
                            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform duration-300 origin-left"></div>
                            <script>
                                if (window.location.pathname === '/about.html') {
                                    document.currentScript.previousElementSibling.classList.remove('scale-x-0');
                                }
                            </script>
                        </a>
                        <a href="/reservation.html" class="hover:text-gray-300 transition relative">
                            Reservierung
                            <div class="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform duration-300 origin-left"></div>
                            <script>
                                if (window.location.pathname === '/reservation.html') {
                                    document.currentScript.previousElementSibling.classList.remove('scale-x-0');
                                }
                            </script>
                        </a>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden">
                        <button type="button" class="mobile-menu-button text-secondary hover:text-gray-300 focus:outline-none">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div class="mobile-menu hidden md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="/menu.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition">Speisekarte</a>
                    <a href="/about.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition">Über uns</a>
                    <a href="/reservation.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white transition">Reservierung</a>
                </div>
            </div>
        </nav>
    `;
}

// Add mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}); 