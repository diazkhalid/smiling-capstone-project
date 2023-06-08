/* eslint-disable linebreak-style */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import './styles/responsive.css';
import AOS from 'aos';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'aos/dist/aos.css';

AOS.init();

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
