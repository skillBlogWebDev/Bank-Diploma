import { el } from 'redom';

export const DOMElements = () => {
  const container = el('div', { class: 'container' });
  const main = el('main', { class: 'main' });
  const section = el('section');

  return {
    container,
    main,
    section,
  };
};
