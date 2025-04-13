import {API_URL} from '../js/const.js';
import {localStorageLoad} from '../js/localStorage.js';
import { container } from './container.js';


export const productList = (title, data, parent) => {
  // if (action === 'remove') {
  //   document.querySelector('.goods__list').remove();
  //   return;
  // }

  let goodsItems = '';

  const renderGoodsItems = (arr, list) => {
    let items = '';
    
    arr.forEach(({id, name, price, img}) => {
      items += `
        <li class="goods__item">
          <article class="goods__card card">
            <a class="card__link" href="/product/${id}">
              <img class="card__img" src="${API_URL}img${img}" alt="${name}">
            </a>
            <button class="card__like ${list.find(item => item.id === id) ? 'card__like_active' : ''}" type="button" aria-label="Добавить в избранное" data-id="${id}">
              <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>                    
              </button>
            <div class="card__content">
              <h3 class="card__title">${name}</h3>
              <p class="card__price">${price}&nbsp;₽</p>
            </div>
            <button class="card__button btn btn_second" type="button" data-id="${id}">В корзину</button>
            </article>
        </li>
        `;
    });
  
    return items;
  };

  const favoriteList = localStorageLoad('ski-favorite');

  goodsItems = renderGoodsItems(data, favoriteList);

  const sectionTitle = title ? `<h2 class="goods__title section-title">${title}</h2>` : '';

  const goodsElem = document.createElement('section');
  goodsElem.classList.add('goods');

  const child = `
    ${sectionTitle}
    <ul class="goods__list">
      ${goodsItems}
    </ul>
  `;

  goodsElem.append(container(child));
  parent.append(goodsElem);

  const catalog = document.querySelector('.catalog');
  if (catalog) {
    catalog.addEventListener('click', (e) => {
      if (e.target.classList.contains('catalog__link')) {
        catalog.querySelectorAll('.catalog__link').forEach(link => link.classList.remove('catalog__link_active'));
        e.target.classList.add('catalog__link_active');
        
        const filteredGoods = data.filter(item => item.type === e.target.textContent);
        
        const goodsList = document.querySelector('.goods__list');
        goodsList.textContent = '';
        
        goodsItems = renderGoodsItems(filteredGoods, favoriteList);
        
        if (e.target.textContent === 'Все') {
          goodsItems = renderGoodsItems(data, favoriteList);
        }
        
        goodsList.insertAdjacentHTML('beforeend', goodsItems);
      }
    });
  }

  return goodsElem;
};