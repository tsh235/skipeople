import { container } from './container.js';

export const goods = () => {
  const goodsElem = document.createElement('section');
  goodsElem.classList.add('goods');

  const child = `
    <h2 class="goods__title section-title">Избранное</h2>
    <ul class="goods__list">
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__img" src="/img/photo.jpg" alt="фото товара">
          </a>
          <button class="card__like" type="button" aria-label="Добавить в избранное">
            <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__content">
            <h3 class="card__title">Горные лыжи</h3>
            <p class="card__price">5 000 ₽</p>
          </div>
          <button class="card__button btn btn_second" type="button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__img" src="/img/photo.jpg" alt="фото товара">
          </a>
          <button class="card__like" type="button" aria-label="Добавить в избранное">
            <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__content">
            <h3 class="card__title">Горные лыжи</h3>
            <p class="card__price">5 000 ₽</p>
          </div>
          <button class="card__button btn btn_second" type="button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__img" src="/img/photo.jpg" alt="фото товара">
          </a>
          <button class="card__like" type="button" aria-label="Добавить в избранное">
            <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__content">
            <h3 class="card__title">Горные лыжи</h3>
            <p class="card__price">5 000 ₽</p>
          </div>
          <button class="card__button btn btn_second" type="button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__img" src="/img/photo.jpg" alt="фото товара">
          </a>
          <button class="card__like" type="button" aria-label="Добавить в избранное">
            <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__content">
            <h3 class="card__title">Горные лыжи</h3>
            <p class="card__price">5 000 ₽</p>
          </div>
          <button class="card__button btn btn_second" type="button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__img" src="/img/photo.jpg" alt="фото товара">
          </a>
          <button class="card__like" type="button" aria-label="Добавить в избранное">
            <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__content">
            <h3 class="card__title">Горные лыжи</h3>
            <p class="card__price">5 000 ₽</p>
          </div>
          <button class="card__button btn btn_second" type="button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__img" src="/img/photo.jpg" alt="фото товара">
          </a>
          <button class="card__like" type="button" aria-label="Добавить в избранное">
            <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__content">
            <h3 class="card__title">Горные лыжи</h3>
            <p class="card__price">5 000 ₽</p>
          </div>
          <button class="card__button btn btn_second" type="button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__img" src="/img/photo.jpg" alt="фото товара">
          </a>
          <button class="card__like" type="button" aria-label="Добавить в избранное">
            <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__content">
            <h3 class="card__title">Горные лыжи</h3>
            <p class="card__price">5 000 ₽</p>
          </div>
          <button class="card__button btn btn_second" type="button">В корзину</button>
        </article>
      </li>
      <li class="goods__item">
        <article class="goods__card card">
          <a class="card__link" href="/product">
            <img class="card__img" src="/img/photo.jpg" alt="фото товара">
          </a>
          <button class="card__like" type="button" aria-label="Добавить в избранное">
            <svg class="like-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                    
          </button>
          <div class="card__content">
            <h3 class="card__title">Горные лыжи</h3>
            <p class="card__price">5 000 ₽</p>
          </div>
          <button class="card__button btn btn_second" type="button">В корзину</button>
        </article>
      </li>
    </ul>
  `;

  goodsElem.append(container(child));
  return goodsElem;
};
