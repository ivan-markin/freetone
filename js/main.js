import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

const menuBurgerEl = document.querySelector('.menu-burger');
const menuPopupEl = document.querySelector('.mobile-menu-popup');
const menuPopupCloseButtonEl = document.querySelector('.mobile-menu-popup__close');
const localesSelects = document.querySelectorAll('.select-locales__button');
const menuLinks = document.querySelectorAll('.main-menu__item');
const submenuPopup = document.querySelector('.submenu-popup');
const submenuPopupContainer = document.querySelector('.submenu-popup__container');
let timeoutID;

menuBurgerEl.addEventListener('click', () => {
  menuPopupEl.classList.add('active');
})

menuPopupCloseButtonEl.addEventListener('click', () => {
  menuPopupEl.classList.remove('active');
})

localesSelects.forEach(el => {
  el.addEventListener('click', () => {
    el.closest('.select-locales').classList.toggle('active');
  })
})

menuLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.contains('expanded') ? submenuPopup.classList.add('active') : submenuPopup.classList.remove('active');
  })
})

submenuPopupContainer.addEventListener('mouseover', () => {
  submenuPopup.classList.add('active');
})

submenuPopupContainer.addEventListener('mouseout', () => {
  submenuPopup.classList.remove('active');
})
