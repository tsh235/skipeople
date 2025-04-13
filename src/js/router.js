import Navigo from 'navigo';
import { initSlider } from './initSlider.js';
import { product } from '../componens/product.js';
// import { breadcrumbs } from '../componens/breadcrumbs.js';
// import { cart } from '../componens/cart.js';
// import { order } from '../componens/order.js';
import {main} from '../componens/main.js';
import {getData} from './api.js';
import {productList} from '../componens/productList.js';
import {catalog} from '../componens/catalog.js';
import {addFavorite} from './addFavorite.js';
import {localStarageLoad} from './localStarage.js';

export const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('/', async () => {
      const goods = await getData();
      catalog(main(), goods);
      productList('', goods, main());
      addFavorite(goods);
      router.updatePageLinks();
    }, {
      leave(done) {
        main().textContent = '';
        done();
      }
    })
    .on('/favorite', async () => {
      const goods = await await getData();
      productList('Избранное', localStarageLoad('ski-favorite'), main());
      addFavorite(goods);
      router.updatePageLinks();
    }, {
      leave(done) {
        main().textContent = '';
        done();
      }
    })
    .on('/search', async (search) => {
      const queryString = search.params.query;
      const goods = await getData(queryString);
      productList('Результаты поиска', goods, main());
      addFavorite(goods);
      router.updatePageLinks();
    }, {
      leave(done) {
        main().textContent = '';
        done();
      }
    })
    .on('/cart', () => {
      console.log('cart: ');
    })
    .on('/product/:id', async () => {
      const goods = await getData();
      product('Название товара', goods, main());
      initSlider();
      router.updatePageLinks();
    }, {
      leave(done) {
        main().textContent = '';
        done();
      }
    })
    .on('/order', () => {
      console.log('order: ');
    })
    .notFound(() => {
      console.log("ERROR 404");
    })

  router.resolve();
};