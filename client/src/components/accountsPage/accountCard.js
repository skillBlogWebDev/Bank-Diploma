import 'babel-polyfill';
import { el } from 'redom';
import '../../styles/accounts.scss';

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
    { class: 'account-card__btn app-btn' },
    'Открыть'
  );
  const accountCard = el('div', { class: 'account-card' }, [
    accountCardInner,
    accountCardBtn,
  ]);

  return accountCard;
};
