import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from '../layout/helper';
import { auth } from '../../network';
import '../../styles/login.scss';

export const createLoginForm = () => {
  const element = DOMElements();
  element.section.classList.add('login');
  element.container.classList.add('login__container');

  const loginHeading = el('h1', { class: 'login__heading' }, 'Вход в аккаунт');

  const loginInput = el('input', {
    class: 'login__input',
    type: 'text',
    placeholder: 'Логин',
  });

  const passwordInput = el('input', {
    class: 'login__input',
    type: 'text',
    placeholder: 'Пароль',
  });

  const loginLabel = el('label', { class: 'login__label' }, [
    el('span', { class: 'login__text' }, 'Логин'),
    loginInput,
  ]);
  const passwordLabel = el('label', { class: 'login__label' }, [
    el('span', { class: 'login__text' }, 'Пароль'),
    passwordInput,
  ]);

  const loginBtn = el(
    'button',
    { class: 'app-btn login__btn', route: '/bills' },
    'Войти'
  );

  const loginForm = el('form', { class: 'login__form' }, [
    loginLabel,
    passwordLabel,
    loginBtn,
  ]);

  const loginInner = el('div', { class: 'login__inner' }, [
    loginHeading,
    loginForm,
  ]);

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const isAuth = await auth(loginInput.value, passwordInput.value);

    if (isAuth) {
      location.reload();
      localStorage.setItem(
        'auth',
        JSON.stringify({ isAuth: true, page: 'bills' })
      );
    }
  });

  setChildren(element.section, element.container);
  setChildren(element.container, loginInner);

  const loginSection = element.section;

  return loginSection;
};
