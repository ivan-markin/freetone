import LocomotiveScroll from 'locomotive-scroll';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

const swiperVideo = new Swiper('.swiper-videos', {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 12
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-videos-pagination',
    type: 'fraction'
  }
})

const swiperTools = new Swiper('.swiper-tools', {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 24
    }
  },
  pagination: {
    el: '.swiper-tools-pagination',
    type: 'bullets',
    clickable: true
  }
})

const swiperEcosystem = new Swiper('.swiper-ecosystem', {
  slidesPerView: 1,
  spaceBetween: 12,
  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 24
    }
  },
  pagination: {
    el: '.swiper-ecosystem-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.ecosystem-top-button-next',
    prevEl: '.ecosystem-top-button-prev',
  },
})

const swiperTheytalk = new Swiper('.swiper-theytalk', {
  freeMode: {
    enabled: true,
    sticky: true,
  },
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.theytalk-button-next',
    prevEl: '.theytalk-button-prev',
  },
})

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

const menuBurgerEl = document.querySelector('.menu-burger');
const menuPopupEl = document.querySelector('.mobile-menu-popup');
const menuPopupCloseButtonEl = document.querySelector('.mobile-menu-popup__close');
const localesSelects = document.querySelectorAll('.select-locales__button');
const localesElements = document.querySelectorAll('.select-locales');
const menuLinks = document.querySelectorAll('.main-menu__item');
const submenuPopupNetwork = document.querySelector('#submenuNetwork');
const submenuPopupDeleopers = document.querySelector('#submenuDevelopers');
const submenuPopupContainers = document.querySelectorAll('.submenu-popup__container');
const submenuPopupElements = document.querySelectorAll('.submenu-popup');

function openLocalesSelect(event) {
  event.target.closest('.select-locales').classList.toggle('active');
  // setTimeout(() => {
  //   document.addEventListener('click', (event) => {
  //     if (!event.target.classList.contains('select-locales__list')) {
  //       collapseLocalesSelect(event);
  //     }
  //   });
  //   document.addEventListener('keydown', (event) => {
  //     if (event.code == 'Escape') {
  //       collapseLocalesSelect(event);
  //     }
  //   })
  // }, 0);
}

function collapseLocalesSelect(event) {
  localesElements.forEach(el => {
    el.classList.remove('active');
  })
  document.removeEventListener('click', (event) => {
    if (!event.target.classList.contains('select-locales__list')) {
      collapseLocalesSelect(event);
    }
  });
  document.removeEventListener('keydown', (event) => {
    if (event.code == 'Escape') {
      collapseLocalesSelect(event);
    }
  })
}

menuBurgerEl.addEventListener('click', () => {
  menuPopupEl.classList.add('active');
})

menuPopupCloseButtonEl.addEventListener('click', () => {
  menuPopupEl.classList.remove('active');
})

localesSelects.forEach(el => {
  el.addEventListener('click', openLocalesSelect);
})

menuLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    submenuPopupElements.forEach(el => {
      el.classList.remove('active');
    })
    switch (link.id) {
      case 'developersLink':
        submenuPopupDeleopers.classList.add('active');
        break;
      case 'networkLink':
        submenuPopupNetwork.classList.add('active');
        break;
    }
  })
})

submenuPopupContainers.forEach(popup => {
  popup.addEventListener('mouseover', (event) => {
    event.target.closest('.submenu-popup').classList.add('active');
  })
})

submenuPopupContainers.forEach(popup => {
  popup.addEventListener('mouseout', (event) => {
    event.target.closest('.submenu-popup').classList.remove('active');
  })
})

document.addEventListener('scroll', () => {
  submenuPopupElements.forEach(el => {
    el.classList.remove('active');
  })
})
