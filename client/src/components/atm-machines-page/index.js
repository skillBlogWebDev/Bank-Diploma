import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from '../layout/helper';
import { createConvas } from './chart';
import Chart from 'chart.js/auto';

export const createAtmMachinesPage = () => {
  const element = DOMElements();
  element.section.classList.add('atm-machines');
  element.container.classList.add('atm-machines__container');
  const convas = createConvas();

  const currencyHeading = el(
    'h1',
    { class: 'atm-machines__heading' },
    'Карта банкоматов'
  );

  setChildren(element.section, element.container);
  setChildren(element.container, [currencyHeading, convas]);

  const atmMachinesSection = element.section;

  setChildren(element.main, atmMachinesSection);

  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const config = {
    type: 'line',
    data: data,
    options: {},
  };

  new Chart(convas, config);

  return atmMachinesSection;
};
