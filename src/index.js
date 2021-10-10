import 'babel-polyfill';
import { setChildren } from 'redom';
import { createBillsPage } from './components/bills-page';
import { createHeader } from './components/layout/header';
import { DOMElements } from './components/layout/helper';
import { createLoginForm } from './components/login-page/login-form';
import './styles/main.scss';

const createApp = () => {
  const element = DOMElements();
  const loginForm = createLoginForm();
  const billsPage = createBillsPage();
  const bills = document.querySelector('.bills');

  const searchPrams = new URLSearchParams(location.search);
  const logout = searchPrams.get('');

  if (logout == null) {
    setChildren(element.main, loginForm);
  }
  if (bills) {
    setChildren(element.main, billsPage);
  }

  setChildren(window.document.body, [createHeader(), element.main]);
};

createApp();
