import 'babel-polyfill';
import { setChildren } from 'redom';
import { DOMElements } from '../layout/helper';
import '../../styles/account.scss';
import { accountTop } from './accountTop';

export const createAccountPage = () => {
  const element = DOMElements();
  element.section.classList.add('accounts');
  element.container.classList.add('accounts__container');

  const accountSection = element.section;

  setChildren(accountSection, element.container);
  setChildren(element.container, accountTop());
  setChildren(element.main, accountSection);

  return accountSection;
};
