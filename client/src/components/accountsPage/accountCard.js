import 'babel-polyfill';
import { el } from 'redom';
import '../../styles/accounts.scss';
import { goToCurrentPage } from '../../utils';

export const createAccountCard = (data) => {
  console.log(data);
  const accountCardNumber = el(
    'h2',
    { class: 'account-card__number' },
    data.account
  );
  const accountCardBalance = el(
    'span',
    { class: 'account-card__balance' },
    data.balance
  );
  const accountCardWrapper1 = el('span', { class: 'account-card__wrapper' }, [
    accountCardNumber,
    accountCardBalance,
  ]);
  const accountCardLastTransaction = el(
    'p',
    {
      class: 'account-card__last-transaction',
    },
    ['Последняя транзакция: ', el('span', { class: 'last-transaction__date' })]
  );
  const accountCardWrapper2 = el(
    'div',
    { class: 'account-card__wrapper' },
    accountCardLastTransaction
  );
  const accountCardInner = el('div', { class: 'account-card__inner' }, [
    accountCardWrapper1,
    accountCardWrapper2,
  ]);
  const accountCardBtn = el(
    'button',
    { route: '/bills/account', class: 'account-card__btn app-btn' },
    'Открыть'
  );
  const accountCard = el('div', { class: 'account-card' }, [
    accountCardInner,
    accountCardBtn,
  ]);

  accountCardBtn.addEventListener('click', () => {
    window.history.pushState({}, '', '/bills/account');
    goToCurrentPage('bills/account');
  });

  return accountCard;
};
