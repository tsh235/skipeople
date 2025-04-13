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
import {addFavorite} from './addFavorite.js';
import {localStarageLoad} from './localStarage.js';

const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('/', async () => {
      const goods = await getData();
      main().textContent = '';
      catalog(main(), goods);
      productList('', goods, main());
      addFavorite(goods);
      router.updatePageLinks();
    })
    .on('/favorite', async () => {
      const goods = await await getData();
      main().textContent = '';
      productList('Избранное', localStarageLoad('ski-favorite'), main());
      addFavorite(goods);
      router.updatePageLinks();
    })
    .on('/cart', () => {
      console.log('cart: ');
    })
    .on('/product', () => {
      console.log('product: ');
      // initSlider();
    })
    .on('/order', () => {
      console.log('order: ');
    })
    .notFound(() => {
      console.log("ERROR 404");
    })

  router.resolve();
};