import { container } from './container.js';

export const catalog = () => {
  const catalogElem = document.createElement('nav');
  catalogElem.classList.add('catalog');

  const child = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a class="catalog__link catalog__link_active" href="#!">Все</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="#!">Лыжи</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="#!">Сноуборды</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="#!">Экипировка</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="#!">Ботинки</a>
      </li>
    </ul>
  `;

  catalogElem.append(container(child));
  return catalogElem;
};
