import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from './helper';
import '../../styles/header.scss';
import '../../styles/main.scss';

export const createHeader = (isAuth = false) => {
  const element = DOMElements();
  const logo = el('a', { class: 'header__logo', href: '#' }, 'Coin.');
  const ATMmachines = el('a', { class: 'nav__link', href: '#' }, 'Банкоматы');
  const bills = el('a', { class: 'nav__link', href: '#' }, 'Счета');
  const currency = el('a', { class: 'nav__link', href: '#' }, 'Валюта');
  const logout = el('button', { class: 'nav__link', route: '/' }, 'Выйти');
  const ul = el('ul', { class: 'nav__list list-reset' }, [
    el('li', { class: 'nav__item' }, ATMmachines),
    el('li', { class: 'nav__item' }, bills),
    el('li', { class: 'nav__item' }, currency),
    el('li', { class: 'nav__item' }, logout),
  ]);

  logout.addEventListener('click', () => {
    localStorage.removeItem('auth');
  });

  const nav = el('nav', { class: 'header__nav' }, ul);
  element.container.classList.add('header__container');

  if (isAuth) {
    setChildren(element.container, [logo, nav]);
  } else {
    setChildren(element.container, logo);
  }

  const header = el('header', { class: 'header' }, element.container);

  return header;
};
