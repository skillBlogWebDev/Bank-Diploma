import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { filterArrow, plus } from '../../icons';
import '../../styles/accounts.scss';

export const accountsTop = () => {
  const accountsTopInner = el('div', { class: 'accounts-top__inner' });
  const accountsFilter = el('div', { class: 'accounts-filter' });
  const filterIcon = el('span', { class: 'accounts-filter__icon' });
  const plusIcon = el('span', { class: 'plus' });
  const accountsHeading = el(
    'h1',
    { class: 'accounts__heading' },
    'Ваши счета'
  );
  const accountsFilterBtn = el(
    'button',
    { class: 'accounts-filter__btn', route: '/bills/account' },
    ['Сортировка', filterIcon]
  );

  filterIcon.innerHTML = filterArrow;
  plusIcon.innerHTML = plus;

  const newCheckBtn = el('button', { class: 'accounts-more app-btn' }, [
    plusIcon,
    'Создать новый счет',
  ]);

  const accountsTop = el('div', { class: 'accounts-top' }, [
    accountsHeading,
    accountsFilterBtn,
    newCheckBtn,
  ]);

  setChildren(accountsFilter, accountsFilterBtn);
  setChildren(accountsTopInner, [accountsHeading, accountsFilter]);
  setChildren(accountsTop, [accountsTopInner, newCheckBtn]);

  return accountsTop;
};
