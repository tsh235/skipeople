import 'normalize.css';
import './style.scss';
import { initRouter } from './js/router.js';
import {header} from './componens/header.js';
import {footer} from './componens/footer.js';
import {search} from './js/search.js';
import {paginationHtml} from './componens/paginationHtml.js';

const init = () => {
  document.body.append(header());
  document.body.append(document.createElement('main'));
  document.body.append(footer());
  initRouter();
  search();
};

init();