import 'babel-polyfill';
import { setChildren } from 'redom';
import { createBillsPage } from './components/bills-page';
import { createHeader } from './components/layout/header';
import { DOMElements } from './components/layout/helper';
import { createLoginForm } from './components/login-page/index';
import { appRouter } from './routes';
import './styles/main.scss';

const createApp = () => {
  const currentPath = window.location.pathname;
  const route = appRouter.routes.filter((r) => r.path === currentPath)[0];
  const authData = JSON.parse(localStorage.getItem('auth'));

  const element = DOMElements();
  const loginForm = createLoginForm();
  const billsPage = createBillsPage();

  if (authData == null) {
    setChildren(element.main, loginForm);
  }

  if (route.path === '/') {
    setChildren(element.main, loginForm);
  }

  if (route.path === '/' && authData != null) {
    setChildren(element.main, billsPage);
  }

  if (route.path === '/bills' && authData != null) {
    setChildren(element.main, billsPage);
  }

  setChildren(window.document.body, [
    createHeader(authData == null ? false : authData.isAuth),
    element.main,
  ]);
};

createApp();
