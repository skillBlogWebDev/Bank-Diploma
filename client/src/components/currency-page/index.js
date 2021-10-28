import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from '../layout/helper';

export const createCurrencyPage = () => {
  const element = DOMElements();
  element.section.classList.add('currency');
  element.container.classList.add('currency__container');

  // const currencyHeading = el(
  //   'h1',
  //   { class: 'currency__heading' },
  //   'Валютный обмен'
  // );

  const accountsFilterBtn = el(
    'button',
    { class: 'accounts-filter__btn', route: '/bills/account' },
    'Сортировка'
  );

  setChildren(element.section, element.container);
  // setChildren(element.container, currencyHeading);

  const currencySection = element.section;

  setChildren(element.container, accountsFilterBtn);
  setChildren(currencySection, element.container);
  setChildren(element.main, currencySection);

  return currencySection;
};
