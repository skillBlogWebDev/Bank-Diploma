import 'babel-polyfill';
import { setChildren } from 'redom';
import { createAccountsPage } from './components/accountsPage';
import { createHeader } from './components/layout/header';
import { DOMElements } from './components/layout/helper';
import { createLoginForm } from './components/login-page/index';
import { createCurrencyPage } from './components/currency-page/index';
import { createAtmMachinesPage } from './components/atm-machines-page/index';
import { appRouter } from './routes';
import { getAccountsByToken } from './network';
import './styles/main.scss';

const page = (() => {
  const currentPath = window.location.pathname;
  const route = appRouter.routes.filter((r) => r.path === currentPath)[0];

  return route.path;
})();

const createApp = async () => {
  let authData = JSON.parse(localStorage.getItem('auth'));
  const element = DOMElements();
  const loginForm = createLoginForm();
  const currencyPage = createCurrencyPage();
  const atmMachinesPage = createAtmMachinesPage();

  if (authData == null) {
    window.history.pushState({}, '', '/');
    setChildren(element.main, loginForm);
  }

  if (page === '/') {
    setChildren(element.main, loginForm);
  }

  if (page === '/currency' && authData != null) {
    setChildren(element.main, currencyPage);
  }

  if (page === '/atm-machines' && authData != null) {
    setChildren(element.main, atmMachinesPage);
  }

  setChildren(window.document.body, [
    createHeader(authData == null ? false : authData.isAuth),
    element.main,
  ]);

  if (page === '/' && authData != null) {
    window.history.pushState({}, '', '/bills');
    setChildren(
      element.main,
      createAccountsPage(await getAccountsByToken(authData.token))
    );
  }

  if (page === '/bills' && authData != null) {
    setChildren(
      element.main,
      createAccountsPage(await getAccountsByToken(authData.token))
    );
  }
};

createApp();

(() => {
  const activeRoutes = Array.from(document.querySelectorAll('[route]'));

  const navigate = (event) => {
    const route = event.target.attributes[1].value;
    const routeInfo = appRouter.routes.filter((r) => r.path === route)[0];

    if (!routeInfo) {
      console.log('no route');
    } else {
      window.history.pushState({}, '', routeInfo.path);
    }
  };

  activeRoutes.forEach((route) =>
    route.addEventListener('click', navigate, false)
  );
})();
