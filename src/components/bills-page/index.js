import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from '../layout/helper';
import '../../styles/bills.scss';

export const createBillsPage = () => {
  const element = DOMElements();
  element.section.classList.add('bills');
  element.container.classList.add('bills__container');

  const billsHeading = el('h1', { class: 'bills__heading' }, 'Ваши счета');

  setChildren(element.section, element.container);
  setChildren(element.container, billsHeading);

  const billSection = element.section;

  return billSection;
};
