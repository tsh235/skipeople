import Navigo from 'navigo';
// import { initSlider } from './initSlider.js';
// import { product } from '../componens/product.js';
// import { breadcrumbs } from '../componens/breadcrumbs.js';
// import { cart } from '../componens/cart.js';
// import { order } from '../componens/order.js';
import {header} from '../componens/header.js';
import {main} from '../componens/main.js';
import {footer} from '../componens/footer.js';
import {getData} from './api.js';
import {productList} from '../componens/productList.js';
import {catalog} from '../componens/catalog.js';

const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('/', async () => {
      const goods = await getData();
      header();
      catalog(main(), goods);
      productList('', goods, main());
      footer();
    })
    .on('/favorite', () => {
      console.log('favorite: ', favorite);
    })
    .on('/cart', () => {
      console.log('cart: ', cart);
    })
    .on('/product', () => {
      console.log('product: ', product);
      // initSlider();
    })
    .on('/order', () => {
      console.log('order: ', order);
    })
    .notFound(() => {
      console.log("ERROR 404");
    })

    router.resolve();
};