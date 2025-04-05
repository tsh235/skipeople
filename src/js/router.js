import Navigo from 'navigo';
import { initSlider } from './initSlider.js';
import { catalog } from '../componens/catalog.js';
import { goods } from '../componens/goods.js';
import { product } from '../componens/product.js';
import { breadcrumbs } from '../componens/breadcrumbs.js';
import { cart } from '../componens/cart.js';
import { order } from '../componens/order.js';

const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  const main = document.querySelector('main');
  router
    .on('/', () => {
      main.textContent = '';
      main.insertAdjacentElement('beforeend', catalog());
      main.insertAdjacentElement('beforeend', goods());
    })
    .on('/favorite', () => {
      main.textContent = '';
      main.insertAdjacentElement('beforeend', goods());
    })
    .on('/cart', () => {
      main.textContent = '';
      main.insertAdjacentElement('beforeend', cart());
    })
    .on('/product', () => {
      main.textContent = '';
      main.insertAdjacentElement('beforeend', breadcrumbs());
      main.insertAdjacentElement('beforeend', product());
      initSlider();
    })
    .on('/order', () => {
      main.textContent = '';
      main.insertAdjacentElement('beforeend', order());
    })
    .notFound(() => {
      console.log("ERROR 404");
    })

    router.resolve();
};