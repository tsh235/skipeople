import 'normalize.css';
import './style.scss';
import { initRouter } from './js/router.js';
import { header } from './componens/header.js';
import {footer} from './componens/footer.js';
import { main } from './componens/mainLayout.js';

const init = () => {
  if (!document.querySelector('header')) {
    document.body.insertAdjacentElement('afterbegin', header());
  }
  if (!document.querySelector('main')) {
    document.body.insertAdjacentElement('beforeend', main());
  }
  if (!document.querySelector('footer')) {
    document.body.insertAdjacentElement('beforeend', footer());
  }

  initRouter();

};

init();