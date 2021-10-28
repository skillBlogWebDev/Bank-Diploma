import 'babel-polyfill';
import { el } from 'redom';
import '../../styles/account.scss';

export const accountTop = () => {
  const heading = el('h1', { class: 'account__heading' }, 'Просмотр счета');

  return heading;
};
