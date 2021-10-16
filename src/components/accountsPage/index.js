import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from '../layout/helper';
import { accountsTop } from './accountsTop';
import '../../styles/accounts.scss';
import { createAccountCard } from './accountCard';

export const createAccountsPage = (data) => {
  const element = DOMElements();
  element.section.classList.add('accounts');
  element.container.classList.add('accounts__container');

  const accountsSection = element.section;
  const accountsSectionInner = el('div', { class: 'accounts__inner' });

  data.payload.map((payload) => {
    setChildren(accountsSectionInner, createAccountCard(payload));
  });

  setChildren(element.container, [accountsTop(), accountsSectionInner]);
  setChildren(accountsSection, element.container);
  setChildren(element.main, accountsSection);

  return accountsSection;
};
