import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from './helper';
import '../../styles/header.scss';

export const createHeader = () => {
  const element = DOMElements();
  const logo = el('a', { class: 'header__logo' }, 'Coin.');

  element.container.classList.add('header__container');
  setChildren(element.container, logo);
  const header = el('header', { class: 'header' }, element.container);

  return header;
};
