import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from '../layout/helper';

export const createAtmMachinesPage = () => {
  const element = DOMElements();
  element.section.classList.add('atm-machines');
  element.container.classList.add('atm-machines__container');

  const currencyHeading = el(
    'h1',
    { class: 'atm-machines__heading' },
    'Карта банкоматов'
  );

  setChildren(element.section, element.container);
  setChildren(element.container, currencyHeading);

  const atmMachinesSection = element.section;

  setChildren(element.main, atmMachinesSection);

  return atmMachinesSection;
};
