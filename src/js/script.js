// STICKY HEADER
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset
    || document.documentElement.scrollTop
    || document.body.scrollTop;

  if (scrollTop >= 120) {
    header.classList.add('header--sticky');
  } else {
    header.classList.remove('header--sticky');
  }
});

// SIDE NAV TOGGLE
const headerList = document.querySelector('.header__list');
const burgerBtn = document.querySelector('.header__burger-btn');

burgerBtn.addEventListener('click', () => {
  headerList.classList.toggle('header__list--shown');
});

document.addEventListener('click', (e) => {
  const inHeader = e.target.closest('.header');
  if (!inHeader) {
    headerList.classList.remove('header__list--shown');
  }
});

// TESTIMONIAL SLIDER
const testimonialsSwiper = new Swiper('.swiper-container--testimonials', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//  COUNT DOWN TIMER
const timer = {
  days: 45,
  hours: 0,
  minutes: 0,
  seconds: 0,
};
const counter = document.querySelector('.count-down');
const daysUI = counter.querySelector('.count-down__counter--days');
const hoursUI = counter.querySelector('.count-down__counter--hours');
const minutesUI = counter.querySelector('.count-down__counter--minutes');
const secondsUI = counter.querySelector('.count-down__counter--seconds');

const updateCounter = () => {
  if (timer.seconds > 0) {
    timer.seconds -= 1;
  } else {
    timer.seconds = 59;
    timer.minutes -= 1;
  }

  if (timer.minutes < 0) {
    timer.minutes = 59;
    timer.hours -= 1;
  }

  if (timer.hours < 0) {
    timer.hours = 23;
    timer.days -= 1;
  }
};

const updateCounterUI = ({
  days, hours, minutes, seconds,
}) => {
  daysUI.textContent = String(days).padStart(2, '0');
  hoursUI.textContent = String(hours).padStart(2, '0');
  minutesUI.textContent = String(minutes).padStart(2, '0');
  secondsUI.textContent = String(seconds).padStart(2, '0');

  if (days < 0) {
    counter.textContent = 'Finished';
    counter.classList.add('count-down--finished');
  }
};

const countDown = setInterval(() => {
  updateCounter();
  updateCounterUI(timer);
  if (timer.days < 0) {
    clearInterval(countDown);
  }
}, 1000);

// simulateTouch

// FEATURES SLIDER
const featuresSwiper = new Swiper('.swiper-container--features', {
  simulateTouch: false,
  speed: 700,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// SELECT LANGUAGE MENU

const select = document.querySelector('.select');
const selectItems = select.querySelector('.select__items');

select.addEventListener('click', (e) => {
  const item = e.target;
  if (item.matches('.select__item ')) {
    select.querySelector('.select__selected--value').textContent = item.textContent;
  }
  selectItems.classList.toggle('select__items--shown');
});

// close language menu
document.addEventListener('click', (e) => {
  if (!e.target.closest('.select')) {
    selectItems.classList.remove('select__items--shown');
  }
});
