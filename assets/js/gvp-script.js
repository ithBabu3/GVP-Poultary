let currentLang = 'ta';

function toggleLanguage() {
    currentLang = currentLang === 'ta' ? 'en' : 'ta';

    const elements = document.querySelectorAll('[data-ta][data-en]');

    elements.forEach(element => {
        if (currentLang === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-ta');
        }
    });

    const langBtn = document.getElementById('langBtn');
    if (currentLang === 'en') {
        langBtn.textContent = 'ENG | தமிழ்';
    } else {
        langBtn.textContent = 'தமிழ் | ENG';
    }

    document.documentElement.lang = currentLang;
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });

                    const navbarToggler = document.querySelector('.navbar-toggler');
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });
});
