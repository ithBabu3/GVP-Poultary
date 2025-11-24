document.addEventListener('DOMContentLoaded', function() {
  initLanguageSwitcher();
  createFallingFeathers();
  hideLoadingScreen();
});

function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 2600);
  }
}

function createFallingFeathers() {
  const container = document.querySelector('.feathers-container');
  if (!container) return;

  function createFeather() {
    const feather = document.createElement('div');
    feather.className = 'feather';
    feather.style.left = Math.random() * 100 + '%';
    feather.style.animationDuration = (8 + Math.random() * 4) + 's';
    feather.style.fontSize = (20 + Math.random() * 15) + 'px';
    feather.style.opacity = 0.3 + Math.random() * 0.4;

    container.appendChild(feather);

    setTimeout(() => {
      feather.remove();
    }, 12000);
  }

  setInterval(createFeather, 500);
}

function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const language = this.getAttribute('data-lang');
      switchLanguage(language);

      langButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  const savedLang = localStorage.getItem('language') || 'ta';
  const savedButton = document.querySelector(`[data-lang="${savedLang}"]`);
  if (savedButton) {
    savedButton.click();
  }
}

function switchLanguage(lang) {
  const elements = document.querySelectorAll('[data-ta][data-en]');

  elements.forEach(element => {
    if (lang === 'en') {
      element.textContent = element.getAttribute('data-en');
    } else {
      element.textContent = element.getAttribute('data-ta');
    }
  });

  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
}

document.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 6px 20px rgba(220, 20, 60, 0.15)';
  } else {
    navbar.style.boxShadow = '0 4px 12px rgba(220, 20, 60, 0.1)';
  }
});

const chickens = document.querySelectorAll('.chicken-card');
chickens.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.animation = 'bounce 0.6s ease-in-out';
  });
});

const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;
document.head.appendChild(style);
