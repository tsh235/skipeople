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
import {localStorageLoad} from './localStorage.js';
import {paginationHtml} from '../componens/paginationHtml.js';
import {paginationData} from './paginationData.js';
import {paginationCount} from './paginationCount.js';

export const router = new Navigo("/", { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router
    .on('/', async () => {
      const goods = await getData();
      catalog(main(), goods[0]);
      productList('', goods[0], main());

      if (goods.length > 1) {
        paginationHtml(main(), goods.length);
        paginationCount(goods.length);
      }
      addFavorite(goods);
      router.updatePageLinks();
    }, {
      leave(done) {
        main().textContent = '';
        done();
      }
    })
    .on('/favorite', async () => {
      const goods = await localStorageLoad('ski-favorite');
      const countPages = paginationData(goods, 12).length;
      productList('Избранное', goods, main());

      if (countPages > 1) {
        paginationHtml(main(), localStorageLoad('ski-favorite').length);
        paginationCount(localStorageLoad('ski-favorite').length);
      }
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
      productList('Результаты поиска', goods[0], main());

      if (goods.length > 1) {
        paginationHtml(main(), goods.length);
        paginationCount(goods.length);
      }
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