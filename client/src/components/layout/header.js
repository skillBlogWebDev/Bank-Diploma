import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from './helper';
import { goToCurrentPage } from '../../utils';
import '../../styles/main.scss';
import '../../styles/header.scss';

export const createHeader = (isAuth = false) => {
  const element = DOMElements();
  let currentData = JSON.parse(localStorage.getItem('auth'));

  if (currentData == null) {
    currentData = { page: '' };
  }

  const logo = el('a', { class: 'header__logo', href: '#' }, 'Coin.');
  const ATMmachines = el(
    'button',
    {
      class: `nav__link app-btn ${
        currentData.page == 'atm-machines' ? 'active-page' : ''
      }`,
      route: '/atm-machines',
    },
    'Банкоматы'
  );
  const bills = el(
    'button',
    {
      class: `nav__link app-btn ${
        currentData.page == 'bills' || currentData.page == 'bills/account'
          ? 'active-page'
          : ''
      }`,
      route: '/bills',
    },
    'Счета'
  );
  const currency = el(
    'button',
    {
      class: `nav__link app-btn ${
        currentData.page == 'currency' ? 'active-page' : ''
      }`,
      route: '/currency',
    },
    'Валюта'
  );
  const logout = el(
    'button',
    { class: 'nav__link app-btn', route: '/' },
    'Выйти'
  );
  const ul = el('ul', { class: 'nav__list list-reset' }, [
    el('li', { class: 'nav__item' }, ATMmachines),
    el('li', { class: 'nav__item' }, bills),
    el('li', { class: 'nav__item' }, currency),
    el('li', { class: 'nav__item' }, logout),
  ]);

  logout.addEventListener('click', () => {
    localStorage.removeItem('auth');
    window.history.pushState({}, '', '/');
    location.reload();
  });

  currency.addEventListener('click', () => {
    goToCurrentPage('currency');
  });

  bills.addEventListener('click', () => {
    goToCurrentPage('bills');
  });

  ATMmachines.addEventListener('click', () => {
    goToCurrentPage('atm-machines');
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
