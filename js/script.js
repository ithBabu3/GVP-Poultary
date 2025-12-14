const chickenData = {
  kadakanath: {
    title: 'கடக நாத் கோழி',
    titleEn: 'Kadakanath Chicken',
    description: 'அரிய கருங்கோழி இனம், சிறந்த சுவையுடன் கூடிய கோழி',
    descriptionEn: 'Rare black meat chicken breed with superior taste and nutrition',
    specialty: 'கருங்கோழி, அதிக புரதம், சிறந்த சுவை',
    specialtyEn: 'Black meat, high protein, excellent flavor',
    uses: 'உயர்ந்த ரீதிக்கான இறைச்சி, சிறந்த ஊட்ட மூல்ய',
    usesEn: 'Premium meat, superior nutritional value',
    price: '₹300-350 per kg',
    image: 'https://github.com/ithBabu3/GVP-Poultary/blob/main/assets/images/Kadakanath.webp?raw=true'
  },
  vanakozhi: {
    title: 'வான்கோழி ',
    titleEn: 'Vankozhi',
    description: 'காட்டுச்சூழலுக்கு ஏற்ற நாட்டு இனம், ஆரோக்கியமான இறைச்சி',
    descriptionEn: 'Wild-adapted domestic breed, healthy and strong',
    specialty: 'நாட்டு இனம், நோய் எதிர்ப்பு சக்தி அதிகம்',
    specialtyEn: 'Native breed, high disease resistance',
    uses: 'இறைச்சி மற்றும் முட்டை வகை',
    usesEn: 'Meat and dual-purpose breed',
    price: '₹200-250 per kg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Wild_turkey_eastern_us.jpg'
  },
  nattu: {
    title: 'நாட்டு கோழி (அசல்)',
    titleEn: 'Nattu Kozhi Original',
    description: '100% அசல் நாட்டு கோழி, முற்றிலும் ஆரோக்கியமான',
    descriptionEn: '100% original country breed, completely healthy',
    specialty: 'முற்றிலும் நாட்டு, நோயுற்ற நிலை இல்லாத',
    specialtyEn: 'Pure native breed, disease-free',
    uses: 'மாறுபட்ட பயன்பாடு - இறைச்சி மற்றும் முட்டை',
    usesEn: 'Dual-purpose - meat and eggs',
    price: '₹180-220 per kg',
    image: 'https://github.com/ithBabu3/GVP-Poultary/blob/main/assets/images/seval.jpeg?raw=true'
  },
  peruvadai: {
    title: 'பெருவடை கோழி',
    titleEn: 'Peruvadai Chicken',
    description: 'பெரிய உடல்கொண்ட சிறந்த இறைச்சி வகை',
    descriptionEn: 'Large-bodied superior meat type chicken',
    specialty: 'பெரிய உடல், அதிக இறைச்சி',
    specialtyEn: 'Large body, high meat yield',
    uses: 'சிறந்த இறைச்சி வகை',
    usesEn: 'Excellent meat breed',
    price: '₹250-300 per kg',
    image:  'https://github.com/ithBabu3/GVP-Poultary/blob/main/assets/images/PeruvadaiKozhi.jpeg?raw=true'
  },
  sonali: {
    title: 'சோனாலி கோழி',
    titleEn: 'Sonali Chicken',
    description: 'ஆரோக்கியமான இரட்டை நோக்கம் கொண்ட கோழி',
    descriptionEn: 'Healthy dual-purpose breed chicken',
    specialty: 'இறைச்சி மற்றும் முட்டை இரண்டும் தரக்ூடிய',
    specialtyEn: 'Both meat and egg producer',
    uses: 'கொட்டாரம் மற்றும் வணிக பயன்பாடு',
    usesEn: 'Farm and commercial use',
    price: '₹220-270 per kg',
    image: 'https://github.com/ithBabu3/GVP-Poultary/blob/main/assets/images/Sonali.jpeg?raw=true'
  },
  eggs: {
    title: 'நாட்டு முட்டைகள்',
    titleEn: 'Country Eggs',
    description: 'தாஜா, பூஷ்டிகர முட்டை தினமும் கிடைக்கிறது',
    descriptionEn: 'Fresh, nutritious eggs available daily',
    specialty: '100% நாட்டு முட்டை, அதுந் நிறம்',
    specialtyEn: '100% country eggs, brown color',
    uses: 'ஆரோக்கிய உணவு',
    usesEn: 'Healthy food',
    price: '₹8-10 per egg',
    image: 'https://github.com/ithBabu3/GVP-Poultary/blob/main/assets/images/egg.jpeg?raw=true'
  }
};

const menuItems = [
  {
    id: '1',
    question: 'பண்ணை எப்போது திறந்திருக்கிறது?',
    questionEn: 'When is the shop open?',
    answer: 'நாம் தினமும் காலை 8 மணி முதல் மாலை 6 மணி வரை திறந்திருக்கிறோம்.',
    answerEn: 'We are open daily from 8:00 AM to 6:00 PM.'
  },
  {
    id: '2',
    question: 'இப்போது கோழி கிடைக்குமா?',
    questionEn: 'Is chicken available now?',
    answer: 'ஆம், நம்மிடம் அனைத்து வகையான கோழி சரக்கு உள்ளது. தொலைபேசியில் அழைக்கவும்.',
    answerEn: 'Yes, we have all types of chicken in stock. Call us for details.'
  },
  {
    id: '3',
    question: 'வழங்கல் செய்கிறீர்களா?',
    questionEn: 'Do you deliver?',
    answer: 'ஆம், நாம் தினமும் புதிய சாதாரணமாக செய்கிறோம்.',
    answerEn: 'Yes, we deliver fresh chickens and eggs daily.'
  },
  {
    id: '4',
    question: 'மொத்த கட்டளை உண்டாக்க முடியுமா?',
    questionEn: 'Can we place bulk orders?',
    answer: 'ஆம், மொத்த கட்டளைக்கு சிறப்பு விலை உண்டு.',
    answerEn: 'Yes, we offer special prices for bulk orders.'
  },
  {
    id: '5',
    question: 'உங்கள் தொலைபேசி எண் என்ன?',
    questionEn: 'What is your phone number?',
    answer: '+91 98765 43210 - நாங்கள் எப்போதும் உதவ நிற்கிறோம்.',
    answerEn: '+91 98765 43210 - We are always ready to help.'
  },
  {
    id: '6',
    question: 'கோழி முற்றிலும் அசல் ஆ?',
    questionEn: 'Is the chicken 100% original?',
    answer: 'ஆம், 100% அசல் நாட்டு கோழி மற்றும் முட்டை மட்டுமே விற்கிறோம்.',
    answerEn: 'Yes, we sell only 100% authentic country chickens and eggs.'
  },
  {
    id: '7',
    question: 'முட்டைகள் தினமும் புதியவா?',
    questionEn: 'Are eggs fresh daily?',
    answer: 'ஆம், நாம் தினமும் புதிய முட்டை சாதாரணமாக செய்கிறோம்.',
    answerEn: 'Yes, we supply fresh eggs daily.'
  },
  {
    id: '8',
    question: 'விலை என்ன?',
    questionEn: 'What are the prices?',
    answer: 'விலை தற்போதைய சந்தை நிலவுவி பொறுத்து வேறுபடலாம். அழைத்து தெரிந்து கொள்ளவும்.',
    answerEn: 'Prices vary based on current market rates. Please call for details.'
  }
];

let currentLanguage = 'ta';
let askedQuestions = [];

document.addEventListener('DOMContentLoaded', function() {
  initLanguageSwitcher();
  populateChickenGrid();
  initChatbot();
  hideLoadingScreen();
});

function hideLoadingScreen() {
  setTimeout(() => {
    document.getElementById('loadingScreen').style.display = 'none';
  }, 2600);
}

function initLanguageSwitcher() {
  const langButtons = document.querySelectorAll('.lang-btn');

  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      currentLanguage = lang;

      langButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      updateLanguage(lang);
      closeNavbar();
    });
  });

  const savedLang = localStorage.getItem('language') || 'ta';
  currentLanguage = savedLang;
  document.querySelector(`[data-lang="${savedLang}"]`).click();
}

function updateLanguage(lang) {
  const elements = document.querySelectorAll('[data-ta][data-en]');
  elements.forEach(el => {
    const text = lang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-ta');
    el.textContent = text;
  });

  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;

  updateChatbotLanguage();
  populateChickenGrid();
}

function updateChatbotLanguage() {
  updateQuestionsDisplay();
}

function closeNavbar() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    document.querySelector('.navbar-toggler').click();
  }
}



function populateChickenGrid() {
  const grid = document.getElementById('chickenGrid');
  grid.innerHTML = '';

  Object.entries(chickenData).forEach(([key, chicken]) => {
    const card = document.createElement('div');
    card.className = 'col-lg-4 col-md-6';
    card.innerHTML = `    
      <div class="chicken-card" data-breed="${key}">
        <img src="${chicken.image}" alt="${chicken.title}">
        <div class="card-body">
          <h5>${currentLanguage === 'ta' ? chicken.title : chicken.titleEn}</h5>
          <p>${currentLanguage === 'ta' ? chicken.description : chicken.descriptionEn}</p>
        </div>
      </div>
    `;

    card.querySelector('.chicken-card').addEventListener('click', function() {
      showChickenModal(key);
    });

    grid.appendChild(card);
  });
}

function showChickenModal(breed) {
  const chicken = chickenData[breed];
  const modal = new bootstrap.Modal(document.getElementById('chickenModal'));

  document.getElementById('modalImage').src = chicken.image;
  document.getElementById('modalTitle').textContent = currentLanguage === 'ta' ? chicken.title : chicken.titleEn;
  document.getElementById('modalDescription').textContent = currentLanguage === 'ta' ? chicken.description : chicken.descriptionEn;
  document.getElementById('modalSpecialty').textContent = currentLanguage === 'ta' ? chicken.specialty : chicken.specialtyEn;
  document.getElementById('modalUses').textContent = currentLanguage === 'ta' ? chicken.uses : chicken.usesEn;
  document.getElementById('modalPrice').textContent = chicken.price;

  modal.show();
}

function initChatbot() {
  const launcher = document.getElementById('chatbotLauncher');
  const chatBot = document.getElementById('chatBot');
  const toggle = document.getElementById('chatbotToggle');
  const messages = document.getElementById('chatbotMessages');

  launcher.addEventListener('click', () => {
    if (!chatBot.classList.contains('active')) {
      chatBot.classList.add('active');
      launcher.classList.add('hidden');
      if (messages.innerHTML === '') {
        addBotMessage(currentLanguage === 'ta'
          ? 'வணக்கம்! நான் AskAjT. கீழே உள்ள மெனுவில் இருந்து ஒரு கேள்வியைத் தேர்ந்தெடுக்கவும்:'
          : 'Hello! I\'m AskAjT. Please select a question from the menu below:');
      }
      updateQuestionsDisplay();
    }
  });

  toggle.addEventListener('click', () => {
    chatBot.classList.remove('active');
    launcher.classList.remove('hidden');
  });
}

function addBotMessage(text) {
  const messages = document.getElementById('chatbotMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message bot';
  messageDiv.innerHTML = `<div class="chat-bubble">${text}</div>`;
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight;
}

function addUserMessage(text) {
  const messages = document.getElementById('chatbotMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message user';
  messageDiv.innerHTML = `<div class="chat-bubble">${text}</div>`;
  messages.appendChild(messageDiv);
  messages.scrollTop = messages.scrollHeight;
}

function updateQuestionsDisplay() {
  const container = document.getElementById('questionsContainer');
  container.innerHTML = '';

  const availableQuestions = menuItems.filter(item => !askedQuestions.includes(item.id));

  if (availableQuestions.length > 0) {
    availableQuestions.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'question-btn';
      btn.textContent = currentLanguage === 'ta' ? item.question : item.questionEn;
      btn.addEventListener('click', () => handleQuestionClick(item));
      container.appendChild(btn);
    });
  } else {
    container.innerHTML = `
      <div class="all-answered">
        <p>${currentLanguage === 'ta' ? 'அனைத்து கேள்விகளும் பதிலளிக்கப்பட்டன!' : 'All questions answered!'}</p>
        <button class="reset-btn" onclick="resetChatbot()">
          ${currentLanguage === 'ta' ? 'மீண்டும் தொடங்கு' : 'Start Over'}
        </button>
      </div>
    `;
  }
}

function handleQuestionClick(item) {
  addUserMessage(currentLanguage === 'ta' ? item.question : item.questionEn);
  setTimeout(() => {
    addBotMessage(currentLanguage === 'ta' ? item.answer : item.answerEn);
  }, 500);

  askedQuestions.push(item.id);
  updateQuestionsDisplay();
}

function resetChatbot() {
  askedQuestions = [];
  updateQuestionsDisplay();
}
