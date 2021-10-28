import { el } from 'redom';

export const createConvas = () => {
  const convas = el('convas', { id: 'myChart' });

  return convas;
};
