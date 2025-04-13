import 'normalize.css';
import './style.scss';
import { initRouter } from './js/router.js';
import {header} from './componens/header.js';
import {footer} from './componens/footer.js';
import {main} from './componens/main.js';

const createMain = () => {
  const mainElem = document.createElement('main');
  mainElem.classList.add('main');
}

const init = () => {
  document.body.append(header());
  document.body.append(document.createElement('main'));
  document.body.append(footer());
  initRouter();
};

init();