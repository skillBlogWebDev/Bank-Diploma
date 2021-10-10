import 'babel-polyfill';
import { el, setChildren } from 'redom';
import { DOMElements } from '../layout/helper';
import '../../styles/login.scss';
import { auth } from '../../network';

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

  const loginBtn = el('button', { class: 'app-btn login__btn' }, 'Войти');

  loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth();
  });

  const loginForm = el('form', { class: 'login__form' }, [
    loginLabel,
    passwordLabel,
    loginBtn,
  ]);

  const loginInner = el('div', { class: 'login__inner' }, [
    loginHeading,
    loginForm,
  ]);

  setChildren(element.section, element.container);
  setChildren(element.container, loginInner);

  const loginSection = element.section;

  return loginSection;
};
