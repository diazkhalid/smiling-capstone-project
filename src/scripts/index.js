/* eslint-disable linebreak-style */
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import './styles/responsive.css';
import AOS from 'aos';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'aos/dist/aos.css';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  const { hash } = window.location;
  if (hash === '#team') {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }
  app.renderPage();
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

AOS.init();
